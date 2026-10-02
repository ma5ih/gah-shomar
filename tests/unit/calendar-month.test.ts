import { describe, expect, it } from "vitest";
import { IMPERIAL_MONTH_NAMES } from "@/domain/calendar/constants";
import { isValidDay, monthLength } from "@/domain/calendar/month";

describe("Imperial calendar month rules", () => {
  it("uses the approved month names", () => {
    expect(IMPERIAL_MONTH_NAMES[5]).toBe("اَمرداد");
    expect(IMPERIAL_MONTH_NAMES[12]).toBe("اسپند");
  });

  it("uses 31 days for the first six months", () => {
    for (let month = 1; month <= 6; month += 1) {
      expect(monthLength(month as 1|2|3|4|5|6, false)).toBe(31);
    }
  });

  it("uses 30 days for months seven through eleven", () => {
    for (let month = 7; month <= 11; month += 1) {
      expect(monthLength(month as 7|8|9|10|11, false)).toBe(30);
    }
  });

  it("supports 29/30 days for Esfand based on leap state", () => {
    expect(monthLength(12, false)).toBe(29);
    expect(monthLength(12, true)).toBe(30);
    expect(isValidDay(12, 30, false)).toBe(false);
    expect(isValidDay(12, 30, true)).toBe(true);
  });
});

import { describe, expect, it } from "vitest";
import {
  isImperialLeapYear,
  nextImperialLeapYear,
  previousImperialLeapYear,
} from "../../src/domain/calendar/leap-year";

describe("Imperial calendar leap-year rules", () => {
  it("mirrors the approved Solar Hijri sequence around the current year", () => {
    const expected = [
      2579,
      2583,
      2588,
      2592,
      2596,
      2600,
      2604,
      2608,
    ];

    for (const year of expected) {
      expect(isImperialLeapYear(year)).toBe(true);
    }
  });

  it("treats Imperial 2585 as a common year", () => {
    expect(isImperialLeapYear(2585)).toBe(false);
  });

  it("finds the previous and next leap years around Imperial 2585", () => {
    expect(previousImperialLeapYear(2585)).toBe(2583);
    expect(nextImperialLeapYear(2585)).toBe(2588);
  });
});
