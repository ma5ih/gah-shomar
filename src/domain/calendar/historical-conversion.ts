import { gregorianToImperial } from "./conversion";
import { isImperialLeapYear } from "./leap-year";
import type { HistoricalDate, ImperialDate } from "./types";

export type ExactHistoricalCalendar = "gregorian" | "hijri_solar";

export type ExactHistoricalDateInput = {
  readonly calendar: ExactHistoricalCalendar;
  readonly year: number;
  readonly month: number;
  readonly day: number;
};

export function convertExactHistoricalDate(
  input: ExactHistoricalDateInput,
): ImperialDate {
  if (input.calendar === "gregorian") {
    return gregorianToImperial({
      year: input.year,
      month: input.month,
      day: input.day,
    });
  }

  if (
    !Number.isInteger(input.year) ||
    !Number.isInteger(input.month) ||
    !Number.isInteger(input.day) ||
    input.month < 1 ||
    input.month > 12 ||
    input.day < 1 ||
    input.day > 31
  ) {
    throw new RangeError("Invalid Solar Hijri historical date.");
  }

  const leap = input.month === 12 && isImperialLeapYear(input.year + 1180);

  const maxDay =
    input.month <= 6 ? 31 : input.month <= 11 ? 30 : leap ? 30 : 29;

  if (input.day > maxDay) {
    throw new RangeError("Invalid Solar Hijri historical date.");
  }

  return {
    year: input.year + 1180,
    month: input.month as ImperialDate["month"],
    day: input.day,
  };
}

/**
 * Attempts to enrich an exact HistoricalDate with its Imperial equivalent.
 * Unsupported calendars return the original object unchanged rather than
 * inventing a conversion.
 */
export function enrichHistoricalDate(
  date: HistoricalDate,
  input?: ExactHistoricalDateInput,
): HistoricalDate {
  if (!input || date.precision !== "EXACT") return date;

  return {
    ...date,
    imperialDate: convertExactHistoricalDate(input),
  };
}