import {describe,expect,it} from "vitest";import type {PersonalRepository,PersonalEventUpdate,MemoryUpdate} from "../../src/data/contracts/repositories";import type {Memory,PersonalEvent,PersonalPerson} from "../../src/domain/personal/types";import {personalUseCases} from "../../src/application/personal";
const event:PersonalEvent={id:"event-1",ownerUserId:"user-1",type:"custom",title:"Test",date:{year:2585,month:7,day:11},createdAt:"",updatedAt:""};
const memory:Memory={id:"memory-1",ownerUserId:"user-1",date:{year:2585,month:7,day:11},text:"Memory",tags:["tag"],mediaIds:[],personIds:[],eventIds:[],personalEventIds:[],createdAt:"",updatedAt:""};
const person:PersonalPerson={id:"person-1",ownerUserId:"user-1",name:"Person",createdAt:"",updatedAt:""};
function repository(calls:{event?:PersonalEventUpdate;memory?:MemoryUpdate}):PersonalRepository{return{
 listEvents:async()=>[event],listEventsForDate:async()=>[],createEvent:async()=>event,updateEvent:async(_u,_id,input)=>{calls.event=input;return event},deleteEvent:async()=>{},listPeople:async()=>[person],createPerson:async()=>person,listMemories:async()=>[memory],listMemoriesForDate:async()=>[],createMemory:async()=>memory,updateMemory:async(_u,_id,input)=>{calls.memory=input;return memory},deleteMemory:async()=>{}
}}
describe("personal update clear semantics",()=>{
 it("passes null explicitly when recurrence/person/notes are cleared",async()=>{
  const calls:{}={};const useCases=personalUseCases(repository(calls as {event?:PersonalEventUpdate;memory?:MemoryUpdate}));
  await useCases.updateEvent("user-1","event-1",{recurrence:null,personalPersonId:null,notes:null});
  expect((calls as {event?:PersonalEventUpdate}).event).toEqual({recurrence:null,personalPersonId:null,notes:null});
 });
 it("allows a memory title to be cleared",async()=>{
  const calls:{}={};const useCases=personalUseCases(repository(calls as {event?:PersonalEventUpdate;memory?:MemoryUpdate}));
  await useCases.updateMemory("user-1","memory-1",{title:null});
  expect((calls as {memory?:MemoryUpdate}).memory).toEqual({title:null});
 });
 it("rejects a personal-event reference that is not owned by the user",async()=>{
  const calls:{}={};const useCases=personalUseCases(repository(calls as {event?:PersonalEventUpdate;memory?:MemoryUpdate}));
  await expect(useCases.updateMemory("user-1","memory-1",{personalEventIds:["foreign-event"]})).rejects.toThrow("not owned");
 });
});