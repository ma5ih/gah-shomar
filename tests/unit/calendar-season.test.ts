import { describe, expect, it } from "vitest";
import { seasonOfImperialMonth } from "../../src/domain/calendar/season";

describe("Imperial seasonal state", () => {
  it("maps the four three-month seasons", () => {
    expect(seasonOfImperialMonth(1)).toBe("spring");
    expect(seasonOfImperialMonth(3)).toBe("spring");
    expect(seasonOfImperialMonth(4)).toBe("summer");
    expect(seasonOfImperialMonth(6)).toBe("summer");
    expect(seasonOfImperialMonth(7)).toBe("autumn");
    expect(seasonOfImperialMonth(9)).toBe("autumn");
    expect(seasonOfImperialMonth(10)).toBe("winter");
    expect(seasonOfImperialMonth(12)).toBe("winter");
  });
});
