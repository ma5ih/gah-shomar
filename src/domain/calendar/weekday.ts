import { imperialToGregorian } from "./conversion";
import type { GregorianDate, ImperialDate, Weekday } from "./types";

function div(a: number, b: number): number {
  return Math.floor(a / b);
}

function gregorianToJdn(date: GregorianDate): number {
  const a = div(14 - date.month, 12);
  const y = date.year + 4800 - a;
  const m = date.month + 12 * a - 3;
  return date.day + div(153 * m + 2, 5) + 365 * y + div(y, 4) - div(y, 100) + div(y, 400) - 32045;
}

const WEEKDAYS: readonly Weekday[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export function weekdayOfImperialDate(date: ImperialDate): Weekday {
  const jdn = gregorianToJdn(imperialToGregorian(date));
  return WEEKDAYS[mod(jdn, 7)];
}

function mod(value: number, divisor: number): number {
  return ((value % divisor) + divisor) % divisor;
}
