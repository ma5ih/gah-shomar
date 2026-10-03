import { gregorianToImperial, imperialToGregorian } from "./conversion";
import type { GregorianDate, ImperialDate } from "./types";

function div(a: number, b: number): number {
  return Math.floor(a / b);
}

function gregorianToJdn(date: GregorianDate): number {
  const a = div(14 - date.month, 12);
  const y = date.year + 4800 - a;
  const m = date.month + 12 * a - 3;
  return (
    date.day +
    div(153 * m + 2, 5) +
    365 * y +
    div(y, 4) -
    div(y, 100) +
    div(y, 400) -
    32045
  );
}

function jdnToGregorian(jdn: number): GregorianDate {
  const a = jdn + 32044;
  const b = div(4 * a + 3, 146097);
  const c = a - div(146097 * b, 4);
  const d = div(4 * c + 3, 1461);
  const e = c - div(1461 * d, 4);
  const m = div(5 * e + 2, 153);

  return {
    year: 100 * b + d - 4800 + div(m, 10),
    month: m + 3 - 12 * div(m, 10),
    day: e - div(153 * m + 2, 5) + 1,
  };
}

export function addImperialDays(date: ImperialDate, days: number): ImperialDate {
  if (!Number.isInteger(days)) {
    throw new RangeError("Day offset must be an integer.");
  }

  const start = gregorianToJdn(imperialToGregorian(date));
  return gregorianToImperial(jdnToGregorian(start + days));
}

export function differenceInImperialDays(
  start: ImperialDate,
  end: ImperialDate,
): number {
  return (
    gregorianToJdn(imperialToGregorian(end)) -
    gregorianToJdn(imperialToGregorian(start))
  );
}
