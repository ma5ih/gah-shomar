import { describe, expect, it } from "vitest";
import { getTimeOfDayState } from "../../src/domain/calendar/time-of-day";

const boundaries = {
  morningStartHour: 6,
  noonStartHour: 12,
  sunsetStartHour: 18,
  nightStartHour: 21,
};

describe("Time-of-day state", () => {
  it("maps the configured boundaries to the four product states", () => {
    expect(getTimeOfDayState(5, 59, boundaries)).toBe("night");
    expect(getTimeOfDayState(6, 0, boundaries)).toBe("morning");
    expect(getTimeOfDayState(11, 59, boundaries)).toBe("morning");
    expect(getTimeOfDayState(12, 0, boundaries)).toBe("noon");
    expect(getTimeOfDayState(17, 59, boundaries)).toBe("noon");
    expect(getTimeOfDayState(18, 0, boundaries)).toBe("sunset");
    expect(getTimeOfDayState(20, 59, boundaries)).toBe("sunset");
    expect(getTimeOfDayState(21, 0, boundaries)).toBe("night");
  });
});
