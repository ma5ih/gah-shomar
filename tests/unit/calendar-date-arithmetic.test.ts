import { describe, expect, it } from "vitest";
import {
  addImperialDays,
  differenceInImperialDays,
} from "../../src/domain/calendar/date-arithmetic";

describe("Imperial date arithmetic", () => {
  it("moves across ordinary month boundaries", () => {
    expect(addImperialDays({ year: 2585, month: 1, day: 31 }, 1)).toEqual({
      year: 2585, month: 2, day: 1,
    });
    expect(addImperialDays({ year: 2585, month: 7, day: 30 }, 1)).toEqual({
      year: 2585, month: 8, day: 1,
    });
  });

  it("moves across a leap day", () => {
    expect(addImperialDays({ year: 2583, month: 12, day: 29 }, 1)).toEqual({
      year: 2583, month: 12, day: 30,
    });
    expect(addImperialDays({ year: 2583, month: 12, day: 30 }, 1)).toEqual({
      year: 2584, month: 1, day: 1,
    });
  });

  it("moves backward across a year boundary", () => {
    expect(addImperialDays({ year: 2585, month: 1, day: 1 }, -1)).toEqual({
      year: 2584, month: 12, day: 29,
    });
  });

  it("computes signed day differences", () => {
    expect(differenceInImperialDays(
      { year: 2585, month: 1, day: 1 },
      { year: 2585, month: 1, day: 31 },
    )).toBe(30);
    expect(differenceInImperialDays(
      { year: 2585, month: 1, day: 31 },
      { year: 2585, month: 1, day: 1 },
    )).toBe(-30);
  });
});
