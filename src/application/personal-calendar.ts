import { occurrenceForYear } from "../domain/personal/recurrence";
import type { ImperialDate } from "../domain/calendar/types";
import type { PersonalEvent } from "../domain/personal/types";

export function personalEventOccursOn(event: PersonalEvent, date: ImperialDate): boolean {
  if (event.recurrence?.frequency === "yearly" && event.recurrence.interval === 1) {
    const occurrence = occurrenceForYear(event.date, date.year, event.recurrence);
    return !!occurrence && occurrence.month === date.month && occurrence.day === date.day;
  }

  return (
    event.date.year === date.year &&
    event.date.month === date.month &&
    event.date.day === date.day
  );
}

export function personalEventOccursInMonth(
  event: PersonalEvent,
  year: number,
  month: ImperialDate["month"],
): boolean {
  if (event.recurrence?.frequency === "yearly" && event.recurrence.interval === 1) {
    const occurrence = occurrenceForYear(event.date, year, event.recurrence);
    return !!occurrence && occurrence.month === month;
  }

  return event.date.year === year && event.date.month === month;
}
