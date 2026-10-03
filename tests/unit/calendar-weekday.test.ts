import { describe, expect, it } from "vitest";
import { weekdayOfImperialDate } from "../../src/domain/calendar/weekday";

describe("Imperial weekday calculation", () => {
  it("returns Saturday for 3 Mehr 2585 / 3 October 2026", () => {
    expect(weekdayOfImperialDate({ year: 2585, month: 7, day: 11 })).toBe("saturday");
  });

  it("advances weekdays by one day", () => {
    expect(weekdayOfImperialDate({ year: 2585, month: 1, day: 1 })).toBe("saturday");
    expect(weekdayOfImperialDate({ year: 2585, month: 1, day: 2 })).toBe("sunday");
  });
});
