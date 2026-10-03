import{describe,expect,it}from"vitest";
import type{PersonalRepository}from"../../src/data/contracts/repositories";
import{getTodayState}from"../../src/application/today";
import{getMonthQuery,getDayQuery}from"../../src/application/calendar";
import{application}from"../../src/application/use-cases";
const failingRepo={listEvents:async()=>{throw new Error("db down")},listEventsForDate:async()=>{throw new Error("db down")},createEvent:async()=>{throw new Error("db down")},updateEvent:async()=>{throw new Error("db down")},deleteEvent:async()=>{throw new Error("db down")},listPeople:async()=>{throw new Error("db down")},createPerson:async()=>{throw new Error("db down")},listMemories:async()=>{throw new Error("db down")},listMemoriesForDate:async()=>{throw new Error("db down")},createMemory:async()=>{throw new Error("db down")},updateMemory:async()=>{throw new Error("db down")},deleteMemory:async()=>{throw new Error("db down")}} as unknown as PersonalRepository;
describe("personal-storage resilience",()=>{
 it("keeps Today public when personal storage fails",async()=>{const r=await getTodayState({now:new Date("2026-10-03T08:00:00Z"),timeZone:"Asia/Tehran",userId:"u",personalRepository:failingRepo});expect(r.personalEvents).toEqual([]);expect(r.memories).toEqual([]);expect(r.context.imperialDate).toEqual({year:2585,month:7,day:11})});
 it("keeps month and day queries public when personal storage fails",async()=>{const m=await getMonthQuery(2585,7,{year:2585,month:7,day:11},"u",failingRepo);const d=await getDayQuery({year:2465,month:5,day:14},"u",failingRepo);expect(m.cells.some(Boolean)).toBe(true);expect(d.events.map(e=>e.id)).toContain("event-constitutional-decree")});
 it("keeps public search when personal search fails",async()=>{const r=await application.searchAll(failingRepo,"u","فرمان مشروطیت");expect(r.some(x=>x.entityId==="event-constitutional-decree")).toBe(true)});
});