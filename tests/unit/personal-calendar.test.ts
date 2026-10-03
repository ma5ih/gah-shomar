import {describe,expect,it} from "vitest";
import type {PersonalRepository} from "../../src/data/contracts/repositories";
import type {PersonalEvent,Memory,PersonalPerson} from "../../src/domain/personal/types";
import {getMonthQuery,getDayQuery} from "../../src/application/calendar";

const recurring:PersonalEvent={id:"e1",ownerUserId:"u1",type:"birthday",title:"Birthday",date:{year:2583,month:12,day:30},recurrence:{frequency:"yearly",interval:1},createdAt:"",updatedAt:""};
const repo:PersonalRepository={
 listEvents:async()=>[recurring],listEventsForDate:async()=>[],createEvent:async()=>recurring,updateEvent:async()=>recurring,deleteEvent:async()=>{},
 listPeople:async():Promise<readonly PersonalPerson[]>=>[],createPerson:async()=>({id:"p1",ownerUserId:"u1",name:"P",createdAt:"",updatedAt:""}),
 listMemories:async():Promise<readonly Memory[]>=>[],listMemoriesForDate:async()=>[],createMemory:async()=>({id:"m",ownerUserId:"u1",date:{year:2585,month:12,day:29},text:"m",tags:[],mediaIds:[],personIds:[],eventIds:[],personalEventIds:[],createdAt:"",updatedAt:""}),updateMemory:async()=>({id:"m",ownerUserId:"u1",date:{year:2585,month:12,day:29},text:"m",tags:[],mediaIds:[],personIds:[],eventIds:[],personalEventIds:[],createdAt:"",updatedAt:""}),deleteMemory:async()=>{}
};
describe("recurring personal calendar context",()=>{
 it("marks a yearly event on its occurrence day",async()=>{
  const month=await getMonthQuery(2585,12,{year:2585,month:12,day:1},"u1",repo);
  expect(month.cells[month.cells.findIndex(c=>c?.day===29)]?.hasPersonalData).toBe(true);
  const day=await getDayQuery({year:2585,month:12,day:29},"u1",repo);
  expect(day.personalEvents.map(e=>e.id)).toEqual(["e1"]);
 });
});
