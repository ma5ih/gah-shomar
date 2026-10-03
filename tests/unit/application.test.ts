import{describe,expect,it}from"vitest";
import{getMonthQuery,getDayQuery}from"../../src/application/calendar";
import{getTodayState}from"../../src/application/today";
import{searchPublicContent}from"../../src/application/search";
describe("application use cases",()=>{
 it("builds a month grid",async()=>{const r=await getMonthQuery(2585,7,{year:2585,month:7,day:11});expect(r.daysInMonth).toBe(30);expect(r.cells.filter(Boolean)).toHaveLength(30);expect(r.cells.some(c=>c?.isToday)).toBe(true)});
 it("returns sourced public events for a day",async()=>{const r=await getDayQuery({year:2465,month:5,day:14});expect(r.events.map(e=>e.id)).toContain("event-constitutional-decree")});
 it("resolves today deterministically",async()=>{const r=await getTodayState({now:new Date("2026-10-03T08:00:00Z"),timeZone:"Asia/Tehran"});expect(r.context.imperialDate).toEqual({year:2585,month:7,day:11})});
 it("searches normalized public content",()=>{expect(searchPublicContent("فرمان مشروطیت")[0]?.title.fa).toBe("صدور فرمان مشروطیت")});
});