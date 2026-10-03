import{describe,expect,it}from"vitest";
import{getMonthQuery,getDayQuery,monthNameFor}from"../../src/application/calendar";
import{getTodayState}from"../../src/application/today";
import{searchPublicContent}from"../../src/application/search";
describe("application use cases",()=>{
 it("builds a month grid",async()=>{const r=await getMonthQuery(2585,7,{year:2585,month:7,day:11});expect(r.daysInMonth).toBe(30);expect(r.cells.filter(Boolean)).toHaveLength(30);expect(r.cells.some(c=>c?.isToday)).toBe(true)});
 it("keeps historical events empty until editorial approval",async()=>{const r=await getDayQuery({year:2465,month:5,day:14});expect(r.events).toHaveLength(0)});
 it("resolves today deterministically",async()=>{const r=await getTodayState({now:new Date("2026-10-03T08:00:00Z"),timeZone:"Asia/Tehran"});expect(r.context.imperialDate).toEqual({year:2585,month:7,day:11})});
 it("keeps public event search empty until editorial approval",()=>{expect(searchPublicContent("فرمان مشروطیت").some(r=>r.entityType==="event")).toBe(false)});
 it("does not expose a historical period before its exact start date",async()=>{const before=await getDayQuery({year:2465,month:1,day:1});const start=await getDayQuery({year:2465,month:5,day:14});expect(before.periods.some(p=>p.id==="period-constitutional")).toBe(false);expect(start.periods.some(p=>p.id==="period-constitutional")).toBe(true)});
 it("keeps month labels behind the application boundary",()=>{expect(monthNameFor(5)).toBe("اَمرداد")});
});