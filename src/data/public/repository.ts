import { seedEvents, seedPeople, seedPeriods, seedSources } from "../../content/seed";
import { normalizeSearchText } from "../../shared/text";
import type { Event } from "../../domain/event/types";

function dateParts(date: Event["dates"][number]["start"]) { return date.imperialDate; }
function isSameOrBefore(left:{year:number;month:number;day:number},right:{year:number;month:number;day:number}):boolean{return left.year<right.year||(left.year===right.year&&(left.month<right.month||(left.month===right.month&&left.day<=right.day)))}
function isSameOrAfter(left:{year:number;month:number;day:number},right:{year:number;month:number;day:number}):boolean{return isSameOrBefore(right,left)}
function dateMatches(event:Event,year:number,month:number,day?:number):boolean{return event.dates.some(({start,end})=>{const startDate=dateParts(start);if(!startDate)return false;const endDate=end?.imperialDate??startDate;if(day!==undefined){const target={year,month,day};return isSameOrBefore(startDate,target)&&isSameOrAfter(endDate,target)}const monthStart={year,month,day:1},monthEnd={year,month,day:31};return isSameOrBefore(startDate,monthEnd)&&isSameOrAfter(endDate,monthStart)})}
const events=()=>seedEvents.filter(e=>e.status==="APPROVED"&&e.visibility==="PUBLIC");
const people=()=>seedPeople.filter(p=>p.status==="APPROVED"&&p.visibility==="PUBLIC");
const periods=()=>seedPeriods.filter(p=>p.status==="APPROVED");
const sources=()=>seedSources;
export const publicRepository={
 listEvents(){return events()},
 listEventsForDate(year:number,month:number,day:number){return events().filter(e=>dateMatches(e,year,month,day))},
 listEventsForMonth(year:number,month:number){return events().filter(e=>dateMatches(e,year,month))},
 listImportantEvents(year:number,month:number){return events().filter(e=>e.featured&&dateMatches(e,year,month))},
 getEventById(id:string){return events().find(e=>e.id===id)},
 getEventBySlug(slug:string){return events().find(e=>e.slug===slug)},
 getPersonById(id:string){return people().find(p=>p.id===id)},
 getSourceById(id:string){return sources().find(s=>s.id===id)},
 getPersonBySlug(slug:string){return people().find(p=>p.slug===slug)},
 listPeriods(){return periods()},
 search(query:string){const q=normalizeSearchText(query);if(!q||q.length<2)return[];const results=[...events().map(e=>({entityType:"event" as const,entityId:e.id,slug:e.slug??e.id,title:e.title,context:e.summary,date:e.dates[0]?.start.imperialDate})),...people().map(p=>({entityType:"person" as const,entityId:p.id,slug:p.slug??p.id,title:p.name,context:p.shortBio,date:p.birthDate?.imperialDate})),...periods().map(p=>({entityType:"period" as const,entityId:p.id,slug:p.slug,title:p.name,context:p.summary,date:p.startDate.imperialDate}))];return results.map(result=>{const haystack=normalizeSearchText(`${result.title.fa} ${result.title.en} ${result.context.fa} ${result.context.en}`),title=normalizeSearchText(`${result.title.fa} ${result.title.en}`),score=title===q?100:title.startsWith(q)?60:haystack.includes(q)?30:0;return{...result,score}}).filter(result=>result.score>0).sort((a,b)=>b.score-a.score)}
}