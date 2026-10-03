import type { Event } from "../domain/event/types";
import type { HistoricalPeriod } from "../domain/period/types";
import type { Person } from "../domain/person/types";
import type { Source } from "../domain/source/types";

const exact = (year: number, month: number, day: number) => ({
  originalCalendar: "imperial",
  originalDate: `${year}-${month}-${day}`,
  imperialDate: { year, month: month as 1|2|3|4|5|6|7|8|9|10|11|12, day },
  precision: "EXACT" as const,
});

export const seedSources: readonly Source[] = [{
  id: "source-demo-1",
  title: "نمونه منبع محتوایی",
  sourceType: "reputable_reference",
  referenceDetail: "Placeholder source for application wiring; replace with curated sources in PHASE-08.",
  language: "fa",
}];

export const seedPeriods: readonly HistoricalPeriod[] = [{
  id: "period-demo-1",
  slug: "demo-period",
  name: { fa: "دورهٔ نمونه", en: "Demo Period" },
  summary: { fa: "دادهٔ آزمایشی برای اتصال Timeline.", en: "Demo data for Timeline wiring." },
  startDate: exact(2585, 1, 1),
  eventIds: ["event-demo-1"],
  personIds: ["person-demo-1"],
  sourceIds: ["source-demo-1"],
  mediaIds: [],
  status: "APPROVED",
  createdAt: "2026-10-03T00:00:00.000Z",
  updatedAt: "2026-10-03T00:00:00.000Z",
}];

export const seedPeople: readonly Person[] = [{
  id: "person-demo-1",
  slug: "demo-person",
  status: "APPROVED",
  visibility: "PUBLIC",
  name: { fa: "فرد نمونه", en: "Demo Person" },
  aliases: [],
  shortBio: { fa: "دادهٔ نمونه برای Person.", en: "Demo data for Person." },
  tags: ["demo"],
  periodIds: ["period-demo-1"],
  eventIds: ["event-demo-1"],
  relatedPersonIds: [],
  sourceIds: ["source-demo-1"],
  mediaIds: [],
  createdAt: "2026-10-03T00:00:00.000Z",
  updatedAt: "2026-10-03T00:00:00.000Z",
}];

export const seedEvents: readonly Event[] = [
  {
    id: "event-demo-1", slug: "demo-event", status: "APPROVED", visibility: "PUBLIC",
    title: { fa: "رویداد نمونه", en: "Demo Event" }, shortTitle: { fa: "نمونه", en: "Demo" },
    summary: { fa: "یک رکورد آزمایشی برای مسیر داده تا UI.", en: "A demo record proving the data-to-UI path." },
    description: { fa: "این داده موقت است و جای محتوای تاریخی نهایی در PHASE-08 را نمی‌گیرد.", en: "This temporary data will be replaced by the curated historical dataset in PHASE-08." },
    dates: [{ start: exact(2585, 7, 11) }], category: "historical", tags: ["demo", "today"],
    personIds: ["person-demo-1"], periodIds: ["period-demo-1"], relatedEventIds: [],
    sourceIds: ["source-demo-1"], mediaIds: [], featured: true,
    createdAt: "2026-10-03T00:00:00.000Z", updatedAt: "2026-10-03T00:00:00.000Z",
  },
  {
    id: "event-demo-2", slug: "demo-occasion", status: "APPROVED", visibility: "PUBLIC",
    title: { fa: "مناسبت نمونه", en: "Demo Occasion" }, summary: { fa: "نمونه‌ای برای بخش مناسبت‌ها.", en: "Demo occasion content." },
    dates: [{ start: exact(2585, 7, 11) }], category: "cultural", tags: ["demo", "occasion"],
    personIds: [], periodIds: [], relatedEventIds: ["event-demo-1"], sourceIds: ["source-demo-1"], mediaIds: [],
    createdAt: "2026-10-03T00:00:00.000Z", updatedAt: "2026-10-03T00:00:00.000Z",
  },
  {
    id: "event-demo-3", slug: "demo-future", status: "APPROVED", visibility: "PUBLIC",
    title: { fa: "رویداد نمونهٔ دیگر", en: "Another Demo Event" }, summary: { fa: "نمونه‌ای برای پیمایش ماهانه.", en: "Demo data for monthly navigation." },
    dates: [{ start: exact(2585, 8, 5) }], category: "tradition", tags: ["demo"],
    personIds: [], periodIds: [], relatedEventIds: [], sourceIds: ["source-demo-1"], mediaIds: [],
    createdAt: "2026-10-03T00:00:00.000Z", updatedAt: "2026-10-03T00:00:00.000Z",
  },
];

export const seedPublicContent = { events: seedEvents, people: seedPeople, periods: seedPeriods, sources: seedSources };
