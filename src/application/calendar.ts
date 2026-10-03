import {addImperialDays,differenceInImperialDays,imperialToGregorian,isImperialLeapYear,monthLength,weekdayOfImperialDate} from "../domain/calendar";
import {monthName} from "../domain/calendar/month";
import type {GregorianDate,ImperialDate,ImperialMonth,Weekday} from "../domain/calendar/types";
import type {MonthQueryResult,DayQueryResult} from "./types";
import {publicRepository} from "../data/public/repository";
import type {PersonalRepository} from "../data/contracts/repositories";
import type {PersonalEvent,Memory} from "../domain/personal/types";
import {occurrenceForYear} from "../domain/personal/recurrence";
import {personalEventOccursInMonth,personalEventOccursOn} from "./personal-calendar";

const WEEKDAYS:readonly Weekday[]=["saturday","sunday","monday","tuesday","wednesday","thursday","friday"];
function assertMonth(month:number):asserts month is ImperialMonth{if(!Number.isInteger(month)||month<1||month>12)throw new RangeError("Invalid Imperial month.")}
function assertYear(year:number){if(!Number.isInteger(year)||year<1119||year>4357)throw new RangeError("Unsupported Imperial year.")}
function periodContainsDate(period:{startDate: {imperialDate?: ImperialDate}; endDate?: {imperialDate?: ImperialDate}},date:ImperialDate){const start=period.startDate.imperialDate;if(!start||differenceInImperialDays(start,date)<0)return false;const end=period.endDate?.imperialDate;return !end||differenceInImperialDays(date,end)<=0}
export function gregorianDateForImperial(date:ImperialDate):GregorianDate{return imperialToGregorian(date)}
export function monthNameFor(month:ImperialMonth):string{return monthName(month)}
export async function getMonthQuery(year:number,month:number,today?:ImperialDate,userId?:string,personalRepository?:PersonalRepository):Promise<MonthQueryResult>{
 assertYear(year);assertMonth(month);const daysInMonth=monthLength(month,isImperialLeapYear(year));const first:ImperialDate={year,month,day:1};const offset=WEEKDAYS.indexOf(weekdayOfImperialDate(first));
 const eventDays=new Set(publicRepository.listEventsForMonth(year,month).flatMap(e=>e.dates.map(({start,end})=>({start,end})).flatMap(({start,end})=>{const d=start.imperialDate;const last=end?.imperialDate??d;return d&&last?Array.from({length:Math.max(1,differenceInImperialDays(d,last)+1)},(_,i)=>{const target=addImperialDays(d,i);return target.year===year&&target.month===month?target.day:null}):[]} ).filter((d):d is number=>d!==null)));
 const personalDays=new Set<number>();
 if(userId&&personalRepository){
  try { const[events,memories]=await Promise.all([personalRepository.listEvents(userId),personalRepository.listMemories(userId)]);
  events.filter(e=>personalEventOccursInMonth(e,year,month)).forEach(e=>{
   const occurrence=e.recurrence?occurrenceForYear(e.date,year,e.recurrence):e.date;
   if(occurrence&&occurrence.year===year)personalDays.add(occurrence.day);
  });
  memories.filter(m=>m.date.year===year&&m.date.month===month).forEach(m=>personalDays.add(m.date.day));
  } catch { /* Public calendar remains available when personal storage is unavailable. */ }
 }
 const length=Math.ceil((offset+daysInMonth)/7)*7;const cells:Array<MonthQueryResult["cells"][number]>=Array.from({length},()=>null);
 for(let day=1;day<=daysInMonth;day++){const date:ImperialDate={year,month,day};cells[offset+day-1]={day,date,weekday:weekdayOfImperialDate(date),isToday:!!today&&today.year===year&&today.month===month&&today.day===day,hasEvents:eventDays.has(day),hasPersonalData:personalDays.has(day)}}
 return{year,month,daysInMonth,cells}
}
export async function getDayQuery(date:ImperialDate,userId?:string,personalRepository?:PersonalRepository):Promise<DayQueryResult>{
 const events=publicRepository.listEventsForDate(date.year,date.month,date.day);const importantEvents=events.filter(e=>e.featured);const people=[...new Set(events.flatMap(e=>e.personIds))].map(id=>publicRepository.getPersonById(id)).filter((p):p is NonNullable<typeof p>=>Boolean(p));const periods=publicRepository.listPeriods().filter(p=>periodContainsDate(p,date));
 let personalEvents: readonly PersonalEvent[]=[];let memories: readonly Memory[]=[];if(userId&&personalRepository){try{const[allEvents,allMemories]=await Promise.all([personalRepository.listEvents(userId),personalRepository.listMemoriesForDate(userId,date)]);personalEvents=allEvents.filter(e=>personalEventOccursOn(e,date));memories=allMemories}catch{/* Public day remains available when personal storage is unavailable. */}}
 return{date,weekday:weekdayOfImperialDate(date),events,importantEvents,periods,people,personalEvents,memories}
}
export function shiftMonth(year:number,month:ImperialMonth,delta:-1|1):ImperialDate{assertYear(year);assertMonth(month);const moved=addImperialDays({year,month,day:1},delta===1?monthLength(month,isImperialLeapYear(year)):-1);return{year:moved.year,month:moved.month,day:1}}
export const weekdayLabelsFa:Record<Weekday,string>={saturday:"شنبه",sunday:"یکشنبه",monday:"دوشنبه",tuesday:"سه‌شنبه",wednesday:"چهارشنبه",thursday:"پنجشنبه",friday:"جمعه"};
