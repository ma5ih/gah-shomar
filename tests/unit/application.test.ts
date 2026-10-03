import { describe, expect, it } from "vitest";
import { getMonthQuery, getDayQuery } from "../../src/application/calendar";
import { getTodayState } from "../../src/application/today";
import { searchPublicContent } from "../../src/application/search";

describe("application use cases",()=>{
  it("builds a month grid with Saturday-first cells",async()=>{
    const result=await getMonthQuery(2585,7,{year:2585,month:7,day:11});
    expect(result.daysInMonth).toBe(30);expect(result.cells.filter(Boolean)).toHaveLength(30);expect(result.cells.some(c=>c?.isToday)).toBe(true);
  });
  it("returns public events for a day",async()=>{
    const result=await getDayQuery({year:2585,month:7,day:11});expect(result.events.map(e=>e.id)).toContain("event-demo-1");
  });
  it("resolves today through application time context",async()=>{
    const today=await getTodayState({now:new Date("2026-10-03T08:00:00Z"),timeZone:"Asia/Tehran"});
    expect(today.context.imperialDate).toEqual({year:2585,month:7,day:11});
  });
  it("keeps normalized public search deterministic",()=>{
    expect(searchPublicContent("رویداد نمونه")[0]?.title.fa).toBe("رویداد نمونه");
  });
});
