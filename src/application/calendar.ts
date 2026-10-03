import { addImperialDays, isImperialLeapYear, monthLength, weekdayOfImperialDate } from "../domain/calendar";
import type { ImperialDate, ImperialMonth, Weekday } from "../domain/calendar/types";
import type { MonthQueryResult, DayQueryResult } from "./types";
import { publicRepository } from "../data/public/repository";

const WEEKDAYS: readonly Weekday[] = ["saturday","sunday","monday","tuesday","wednesday","thursday","friday"];

function assertMonth(month: number): asserts month is ImperialMonth {
  if (!Number.isInteger(month) || month < 1 || month > 12) throw new RangeError("Invalid Imperial month.");
}
export function getMonthQuery(year: number, month: number, today?: ImperialDate): MonthQueryResult {
  assertMonth(month);
  const daysInMonth = monthLength(month, isImperialLeapYear(year));
  const first: ImperialDate = { year, month, day: 1 };
  const offset = WEEKDAYS.indexOf(weekdayOfImperialDate(first));
  const eventDays = new Set(publicRepository.listEventsForMonth(year, month).flatMap((e) =>
    e.dates.map(({ start }) => start.imperialDate?.day).filter((d): d is number => d !== undefined),
  ));
  const length = Math.ceil((offset + daysInMonth) / 7) * 7;
  const cells: Array<MonthQueryResult["cells"][number]> = Array.from({ length }, () => null);
  for (let day = 1; day <= daysInMonth; day++) {
    const date: ImperialDate = { year, month, day };
    cells[offset + day - 1] = {
      day, date, weekday: weekdayOfImperialDate(date),
      isToday: !!today && today.year === year && today.month === month && today.day === day,
      hasEvents: eventDays.has(day), hasPersonalData: false,
    };
  }
  return { year, month, daysInMonth, cells };
}
export function getDayQuery(date: ImperialDate): DayQueryResult {
  const events = publicRepository.listEventsForDate(date.year, date.month, date.day);
  const importantEvents = events.filter((e) => e.featured);
  const eventPersonIds = new Set(events.flatMap((e) => e.personIds));
  const people = [...eventPersonIds].map((id) => publicRepository.getPersonById(id)).filter(Boolean);
  const periods = publicRepository.listPeriods().filter((p) => {
    const start = p.startDate.imperialDate; const end = p.endDate?.imperialDate;
    return !!start && date.year >= start.year && (!end || date.year <= end.year);
  });
  return { date, weekday: weekdayOfImperialDate(date), events, importantEvents, periods, people: people as NonNullable<typeof people[number]>[] };
}
export function shiftMonth(year: number, month: ImperialMonth, delta: -1 | 1): ImperialDate {
  const anchor: ImperialDate = { year, month, day: 1 };
  return addImperialDays(anchor, delta === 1 ? monthLength(month, isImperialLeapYear(year)) : -1).replace ? anchor : (() => {
    const moved = addImperialDays(anchor, delta === 1 ? monthLength(month, isImperialLeapYear(year)) : -1);
    return { year: moved.year, month: moved.month, day: 1 };
  })();
}
