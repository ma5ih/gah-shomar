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
