import {
  IMPERIAL_MONTH_BASE_LENGTHS,
  IMPERIAL_MONTH_NAMES,
} from "./constants";
import type { ImperialMonth } from "./types";

export function monthName(month: ImperialMonth): string {
  return IMPERIAL_MONTH_NAMES[month];
}

export function monthLength(month: ImperialMonth, isLeapYear: boolean): number {
  if (month === 12) {
    return isLeapYear ? 30 : 29;
  }

  return IMPERIAL_MONTH_BASE_LENGTHS[month];
}

export function isValidDay(
  month: ImperialMonth,
  day: number,
  isLeapYear: boolean,
): boolean {
  return Number.isInteger(day) && day >= 1 && day <= monthLength(month, isLeapYear);
}
