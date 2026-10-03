import { describe, expect, it } from "vitest";
import { resolveLocale, directionForLocale } from "../../src/application/locale";
import { occurrenceForYear, nextYearlyOccurrence } from "../../src/domain/personal/recurrence";
import { buildShareCardDto } from "../../src/application/share-card";

describe("Phase 04 contracts", () => {
  it("keeps locale and direction coupled", () => {
    expect(resolveLocale("en")).toBe("en");
    expect(directionForLocale("fa")).toBe("rtl");
    expect(directionForLocale("en")).toBe("ltr");
  });

  it("normalizes a leap-day personal recurrence predictably", () => {
    expect(occurrenceForYear({ year: 2583, month: 12, day: 30 }, 2585, { frequency: "yearly", interval: 1 }))
      .toEqual({ year: 2585, month: 12, day: 29 });
    expect(nextYearlyOccurrence({ year: 2583, month: 12, day: 30 }, { year: 2585, month: 12, day: 1 }))
      .toEqual({ year: 2585, month: 12, day: 29 });
  });

  it("builds a private share-card DTO only for an owner", () => {
    const event = {
      id: "e1", ownerUserId: "u1", type: "birthday" as const, title: "Birthday",
      date: { year: 2585, month: 7 as const, day: 11 },
      createdAt: "", updatedAt: "",
    };
    expect(buildShareCardDto("u1", event).theme).toBe("birthday");
    expect(() => buildShareCardDto("u2", event)).toThrow();
  });
});
