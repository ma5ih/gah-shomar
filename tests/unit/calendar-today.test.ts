import { describe, expect, it } from "vitest";
import { getImperialToday } from "../../src/domain/calendar/today";

describe("Imperial Today calculation", () => {
  it("maps a resolved Gregorian calendar date to Imperial today", () => {
    expect(getImperialToday({ year: 2026, month: 10, day: 3 })).toEqual({
      year: 2585,
      month: 7,
      day: 11,
    });
  });

  it("does not own timezone resolution", () => {
    expect(getImperialToday({ year: 2026, month: 3, day: 20 })).toEqual({
      year: 2584,
      month: 12,
      day: 29,
    });
    expect(getImperialToday({ year: 2026, month: 3, day: 21 })).toEqual({
      year: 2585,
      month: 1,
      day: 1,
    });
  });
});
