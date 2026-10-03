import type {PublicContentDataset,ContentValidationResult} from "./contracts";
export function validatePublicContent(dataset:PublicContentDataset):ContentValidationResult{
 const issues:Array<{path:string;code:string;message:string}>=[],eventIds=new Set(dataset.events.map(e=>e.id)),personIds=new Set(dataset.people.map(p=>p.id)),periodIds=new Set(dataset.periods.map(p=>p.id)),sourceIds=new Set(dataset.sources.map(s=>s.id));
 dataset.events.forEach((event,index)=>{
  if(event.status!=="APPROVED")issues.push({path:`events[${index}].status`,code:"PUBLIC_CONTENT_NOT_APPROVED",message:"Public event content must be APPROVED."});
  if(event.visibility!=="PUBLIC")issues.push({path:`events[${index}].visibility`,code:"PUBLIC_CONTENT_VISIBILITY",message:"Public event content must have PUBLIC visibility."});
  event.personIds.forEach(id=>{if(!personIds.has(id))issues.push({path:`events[${index}].personIds`,code:"BROKEN_PERSON_REFERENCE",message:`Unknown person: ${id}`})});
  event.periodIds.forEach(id=>{if(!periodIds.has(id))issues.push({path:`events[${index}].periodIds`,code:"BROKEN_PERIOD_REFERENCE",message:`Unknown period: ${id}`})});
  event.sourceIds.forEach(id=>{if(!sourceIds.has(id))issues.push({path:`events[${index}].sourceIds`,code:"BROKEN_SOURCE_REFERENCE",message:`Unknown source: ${id}`})});
  event.relatedEventIds.forEach(id=>{if(!eventIds.has(id))issues.push({path:`events[${index}].relatedEventIds`,code:"BROKEN_EVENT_REFERENCE",message:`Unknown related event: ${id}`})});
 });
 dataset.people.forEach((person,index)=>{
  if(person.status!=="APPROVED")issues.push({path:`people[${index}].status`,code:"PUBLIC_CONTENT_NOT_APPROVED",message:"Public person content must be APPROVED."});
  person.eventIds.forEach(id=>{if(!eventIds.has(id))issues.push({path:`people[${index}].eventIds`,code:"BROKEN_EVENT_REFERENCE",message:`Unknown event: ${id}`})});
  person.periodIds.forEach(id=>{if(!periodIds.has(id))issues.push({path:`people[${index}].periodIds`,code:"BROKEN_PERIOD_REFERENCE",message:`Unknown period: ${id}`})});
  person.sourceIds.forEach(id=>{if(!sourceIds.has(id))issues.push({path:`people[${index}].sourceIds`,code:"BROKEN_SOURCE_REFERENCE",message:`Unknown source: ${id}`})});
 });
 dataset.periods.forEach((period,index)=>{
  if(period.status!=="APPROVED")issues.push({path:`periods[${index}].status`,code:"PUBLIC_CONTENT_NOT_APPROVED",message:"Public period content must be APPROVED."});
  period.eventIds.forEach(id=>{if(!eventIds.has(id))issues.push({path:`periods[${index}].eventIds`,code:"BROKEN_EVENT_REFERENCE",message:`Unknown event: ${id}`})});
  period.personIds.forEach(id=>{if(!personIds.has(id))issues.push({path:`periods[${index}].personIds`,code:"BROKEN_PERSON_REFERENCE",message:`Unknown person: ${id}`})});
  period.sourceIds.forEach(id=>{if(!sourceIds.has(id))issues.push({path:`periods[${index}].sourceIds`,code:"BROKEN_SOURCE_REFERENCE",message:`Unknown source: ${id}`})});
 });
 return{valid:issues.length===0,issues};
}