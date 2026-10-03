import {addImperialDays,isImperialLeapYear,monthLength,weekdayOfImperialDate} from "../domain/calendar";
import type {ImperialDate,ImperialMonth,Weekday} from "../domain/calendar/types";
import type {MonthQueryResult,DayQueryResult} from "./types";
import {publicRepository} from "../data/public/repository";
import type {PersonalRepository} from "../data/contracts/repositories";
import {personalEventOccursInMonth,personalEventOccursOn} from "./personal-calendar";
const WEEKDAYS:readonly Weekday[]=["saturday","sunday","monday","tuesday","wednesday","thursday","friday"];
function assertMonth(month:number):asserts month is ImperialMonth{if(!Number.isInteger(month)||month<1||month>12)throw new RangeError("Invalid Imperial month.")}
function assertYear(year:number){if(!Number.isInteger(year)||year<1119||year>4357)throw new RangeError("Unsupported Imperial year.")}
export async function getMonthQuery(year:number,month:number,today?:ImperialDate,userId?:string,personalRepository?:PersonalRepository):Promise<MonthQueryResult>{
  assertYear(year);assertMonth(month);
  const daysInMonth=monthLength(month,isImperialLeapYear(year));const first:ImperialDate={year,month,day:1};const offset=WEEKDAYS.indexOf(weekdayOfImperialDate(first));
  const eventDays=new Set(publicRepository.listEventsForMonth(year,month).flatMap(e=>e.dates.map(({start})=>start.imperialDate?.day).filter((d):d is number=>d!==undefined)));
  const personalDays=new Set<number>();
  if(userId&&personalRepository){
    const [events,memories]=await Promise.all([personalRepository.listEvents(userId),personalRepository.listMemories(userId)]);
    events.filter(e=>personalEventOccursInMonth(e,year,month)).forEach(e=>{
      if(e.recurrence) {
        const occurrence=personalEventOccursInMonth(e,year,month)?(e.date.year===year?e.date: {year,month:e.date.month,day:Math.min(e.date.day,monthLength(e.date.month,isImperialLeapYear(year))) as number}):null;
        if(occurrence)personalDays.add(occurrence.day);
      } else if(e.date.year===year) {
        personalDays.add(e.date.day);
      }
    });
    memories.filter(m=>m.date.year===year&&m.date.month===month).forEach(m=>personalDays.add(m.date.day));
  }
  const length=Math.ceil((offset+daysInMonth)/7)*7;const cells:Array<MonthQueryResult["cells"][number]>=Array.from({length},()=>null);
  for(let day=1;day<=daysInMonth;day++){const date:ImperialDate={year,month,day};cells[offset+day-1]={day,date,weekday:weekdayOfImperialDate(date),isToday:!!today&&today.year===year&&today.month===month&&today.day===day,hasEvents:eventDays.has(day),hasPersonalData:personalDays.has(day)};}
  return{year,month,daysInMonth,cells};
}
export async function getDayQuery(date:ImperialDate,userId?:string,personalRepository?:PersonalRepository):Promise<DayQueryResult>{
  const events=publicRepository.listEventsForDate(date.year,date.month,date.day);const importantEvents=events.filter(e=>e.featured);
  const people=[...new Set(events.flatMap(e=>e.personIds))].map(id=>publicRepository.getPersonById(id)).filter((p):p is NonNullable<typeof p>=>Boolean(p));
  const periods=publicRepository.listPeriods().filter(p=>{const start=p.startDate.imperialDate;const end=p.endDate?.imperialDate;return !!start&&date.year>=start.year&&(!end||date.year<=end.year);});
  let personalEvents=[];let memories=[];
  if(userId&&personalRepository){const[eventsAll,memoriesAll]=await Promise.all([personalRepository.listEvents(userId),personalRepository.listMemoriesForDate(userId,date)]);personalEvents=eventsAll.filter(e=>personalEventOccursOn(e,date));memories=memoriesAll;}
  return{date,weekday:weekdayOfImperialDate(date),events,importantEvents,periods,people,personalEvents,memories};
}
export function shiftMonth(year:number,month:ImperialMonth,delta:-1|1):ImperialDate{assertYear(year);assertMonth(month);const moved=addImperialDays({year,month,day:1},delta===1?monthLength(month,isImperialLeapYear(year)):-1);return{year:moved.year,month:moved.month,day:1}}
export const weekdayLabelsFa:Record<Weekday,string>={saturday:"شنبه",sunday:"یکشنبه",monday:"دوشنبه",tuesday:"سه‌شنبه",wednesday:"چهارشنبه",thursday:"پنجشنبه",friday:"جمعه"};
