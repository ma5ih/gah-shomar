import { describe, expect, it } from "vitest";
import type { Event } from "../../src/domain/event/types";
import type { Person } from "../../src/domain/person/types";
import type { HistoricalPeriod } from "../../src/domain/period/types";
import type { Source } from "../../src/domain/source/types";

const exactHistoricalDate = {
  originalCalendar: "Gregorian",
  originalDate: "2026-10-03",
  imperialDate: { year: 2585, month: 7, day: 11 },
  precision: "EXACT" as const,
};

const event: Event = {
  id: "event-1",
  status: "APPROVED",
  visibility: "PUBLIC",
  title: { fa: "رویداد نمونه", en: "Sample Event" },
  summary: { fa: "خلاصه", en: "Summary" },
  dates: [{ start: exactHistoricalDate }],
  category: "historical",
  tags: ["sample"],
  personIds: ["person-1"],
  periodIds: ["period-1"],
  relatedEventIds: [],
  sourceIds: ["source-1"],
  mediaIds: [],
  createdAt: "2026-10-03T00:00:00.000Z",
  updatedAt: "2026-10-03T00:00:00.000Z",
};

const person: Person = {
  id: "person-1",
  status: "APPROVED",
  visibility: "PUBLIC",
  name: { fa: "شخص نمونه", en: "Sample Person" },
  aliases: [],
  shortBio: { fa: "زندگی‌نامه کوتاه", en: "Short biography" },
  tags: ["sample"],
  periodIds: ["period-1"],
  eventIds: ["event-1"],
  relatedPersonIds: [],
  sourceIds: ["source-1"],
  mediaIds: [],
  createdAt: "2026-10-03T00:00:00.000Z",
  updatedAt: "2026-10-03T00:00:00.000Z",
};

const period: HistoricalPeriod = {
  id: "period-1",
  slug: "sample-period",
  name: { fa: "دوره نمونه", en: "Sample Period" },
  summary: { fa: "خلاصه دوره", en: "Period summary" },
  startDate: exactHistoricalDate,
  eventIds: ["event-1"],
  personIds: ["person-1"],
  sourceIds: ["source-1"],
  mediaIds: [],
  status: "APPROVED",
  createdAt: "2026-10-03T00:00:00.000Z",
  updatedAt: "2026-10-03T00:00:00.000Z",
};

const source: Source = {
  id: "source-1",
  title: "Sample source",
  sourceType: "reputable_reference",
  referenceDetail: "Reference detail",
};

describe("domain contract fixtures", () => {
  it("keeps the public event relationship graph internally consistent", () => {
    expect(event.visibility).toBe("PUBLIC");
    expect(event.status).toBe("APPROVED");
    expect(event.personIds).toContain(person.id);
    expect(event.periodIds).toContain(period.id);
    expect(event.sourceIds).toContain(source.id);
  });

  it("keeps person and period relationships linked back to the event", () => {
    expect(person.eventIds).toContain(event.id);
    expect(person.periodIds).toContain(period.id);
    expect(period.eventIds).toContain(event.id);
    expect(period.personIds).toContain(person.id);
  });

  it("preserves exact historical date metadata and imperial equivalence", () => {
    expect(event.dates[0]?.start.precision).toBe("EXACT");
    expect(event.dates[0]?.start.imperialDate).toEqual({
      year: 2585,
      month: 7,
      day: 11,
    });
    expect(source.sourceType).toBe("reputable_reference");
  });
});
