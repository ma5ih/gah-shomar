import { describe, expect, it } from "vitest";
import {
  convertExactHistoricalDate,
  enrichHistoricalDate,
} from "../../src/domain/calendar/historical-conversion";

describe("Historical date conversion", () => {
  it("converts exact Gregorian dates", () => {
    expect(convertExactHistoricalDate({
      calendar: "gregorian",
      year: 2026,
      month: 3,
      day: 21,
    })).toEqual({ year: 2585, month: 1, day: 1 });
  });

  it("converts exact Solar Hijri dates by the approved +1180 mapping", () => {
    expect(convertExactHistoricalDate({
      calendar: "hijri_solar",
      year: 1441,
      month: 12,
      day: 30,
    })).toEqual({ year: 2621, month: 12, day: 30 });
  });

  it("does not fabricate an Imperial date for non-exact historical precision", () => {
    const input = {
      originalCalendar: "gregorian",
      originalDate: "2026",
      precision: "YEAR_ONLY" as const,
    };
    expect(enrichHistoricalDate(input)).toEqual(input);
  });

  it("rejects invalid Solar Hijri dates", () => {
    expect(() => convertExactHistoricalDate({
      calendar: "hijri_solar",
      year: 1440,
      month: 12,
      day: 30,
    })).toThrow();
  });
});
