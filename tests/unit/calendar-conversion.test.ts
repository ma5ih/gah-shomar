import { describe, expect, it } from "vitest";
import {
  gregorianToImperial,
  imperialToGregorian,
  isImperialDateValid,
} from "../../src/domain/calendar/conversion";

describe("Gregorian ↔ Imperial conversion", () => {
  it("converts the current-year Nowruz anchor", () => {
    expect(gregorianToImperial({ year: 2026, month: 3, day: 21 })).toEqual({
      year: 2585,
      month: 1,
      day: 1,
    });
  });

  it("converts a known Jalaali/Gregorian pair", () => {
    expect(gregorianToImperial({ year: 2016, month: 4, day: 11 })).toEqual({
      year: 2575,
      month: 1,
      day: 23,
    });
    expect(imperialToGregorian({ year: 2575, month: 1, day: 23 })).toEqual({
      year: 2016,
      month: 4,
      day: 11,
    });
  });

  it("preserves the 1440/1441 leap transition", () => {
    expect(imperialToGregorian({ year: 2621, month: 12, day: 30 })).toBeDefined();
    expect(isImperialDateValid({ year: 2620, month: 12, day: 30 })).toBe(false);
  });

  it("round-trips representative dates", () => {
    const dates = [
      { year: 2585, month: 1 as const, day: 1 },
      { year: 2585, month: 6 as const, day: 31 },
      { year: 2585, month: 7 as const, day: 1 },
      { year: 2585, month: 11 as const, day: 30 },
      { year: 2583, month: 12 as const, day: 30 },
      { year: 2588, month: 12 as const, day: 30 },
      { year: 2621, month: 12 as const, day: 30 },
    ];

    for (const imperial of dates) {
      expect(gregorianToImperial(imperialToGregorian(imperial))).toEqual(imperial);
    }
  });

  it("rejects invalid Gregorian and Imperial dates", () => {
    expect(() => gregorianToImperial({ year: 2026, month: 2, day: 30 })).toThrow();
    expect(() => imperialToGregorian({ year: 2585, month: 12, day: 30 })).toThrow();
  });
});
