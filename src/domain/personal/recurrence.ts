import { isImperialLeapYear, monthLength } from "../calendar";
import type { ImperialDate } from "../calendar/types";
import type { PersonalRecurrence } from "./types";

export function occurrenceForYear(
  date: ImperialDate,
  targetYear: number,
  recurrence?: PersonalRecurrence,
): ImperialDate | null {
  if (!recurrence) return null;
  if (recurrence.frequency !== "yearly" || recurrence.interval !== 1) return null;
  const leap = isImperialLeapYear(targetYear);
  const maxDay = monthLength(date.month, leap);
  return { year: targetYear, month: date.month, day: Math.min(date.day, maxDay) };
}

export function nextYearlyOccurrence(date: ImperialDate, from: ImperialDate): ImperialDate {
  let year = from.year;
  let candidate = occurrenceForYear(date, year, { frequency: "yearly", interval: 1 })!;
  if (
    candidate.month < from.month ||
    (candidate.month === from.month && candidate.day < from.day)
  ) {
    year += 1;
    candidate = occurrenceForYear(date, year, { frequency: "yearly", interval: 1 })!;
  }
  return candidate;
}
