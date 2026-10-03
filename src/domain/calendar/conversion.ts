import { isImperialLeapYear } from "./leap-year";
import type { GregorianDate, ImperialDate, ImperialMonth } from "./types";

const OFFSET = 1180;
const BREAKS = [
  -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210,
  1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178,
] as const;

function div(a: number, b: number): number {
  return Math.floor(a / b);
}
function mod(a: number, b: number): number {
  return ((a % b) + b) % b;
}

function jalCal(jy: number): { gy: number; march: number; leap: number } {
  if (jy < BREAKS[0] || jy >= BREAKS[BREAKS.length - 1]) {
    throw new RangeError(`Unsupported Solar Hijri year: ${jy}`);
  }

  const gy = jy + 621;
  let leapJ = -14;
  let jp = BREAKS[0];
  let jm = 0;
  let jump = 0;

  for (let i = 1; i < BREAKS.length; i += 1) {
    jm = BREAKS[i];
    jump = jm - jp;
    if (jy < jm) break;
    leapJ += div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }

  const n = jy - jp;
  leapJ += div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) leapJ += 1;

  const leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;

  let leap = 0;
  let n2 = n;
  if (jump - n2 < 6) n2 = n2 - jump + div(jump + 4, 33) * 33;
  leap = mod(mod(n2 + 1, 33) - 1, 4);
  if (leap === -1) leap = 4;

  return { gy, march, leap };
}

function gregorianToJdn(gy: number, gm: number, gd: number): number {
  const a = div(14 - gm, 12);
  const y = gy + 4800 - a;
  const m = gm + 12 * a - 3;
  return gd + div(153 * m + 2, 5) + 365 * y + div(y, 4) - div(y, 100) + div(y, 400) - 32045;
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

function solarHijriToJdn(jy: number, jm: ImperialMonth, jd: number): number {
  const { gy, march } = jalCal(jy);
  return gregorianToJdn(gy, 3, march)
    + (jm - 1) * 31
    - div(jm, 7) * (jm - 7)
    + jd - 1;
}

function jdnToSolarHijri(jdn: number): ImperialDate {
  const gregorian = jdnToGregorian(jdn);
  let jy = gregorian.year - 621;
  const { march, leap } = jalCal(jy);
  const firstDay = gregorianToJdn(gregorian.year, 3, march);
  let k = jdn - firstDay;

  if (k < 0) {
    jy -= 1;
    k += 179;
    if (leap === 1) k += 1;
  }

  if (k <= 185) {
    const month = (1 + div(k, 31)) as ImperialMonth;
    const day = mod(k, 31) + 1;
    return { year: jy, month, day };
  }

  k -= 186;
  const month = (7 + div(k, 30)) as ImperialMonth;
  const day = mod(k, 30) + 1;
  return { year: jy, month, day };
}

function validateGregorian(date: GregorianDate): void {
  if (!Number.isInteger(date.year) || !Number.isInteger(date.month) || !Number.isInteger(date.day)) {
    throw new RangeError("Gregorian date must contain integer year, month and day.");
  }
  if (date.month < 1 || date.month > 12 || date.day < 1 || date.day > 31) {
    throw new RangeError("Invalid Gregorian date.");
  }
  const next = jdnToGregorian(gregorianToJdn(date.year, date.month, date.day));
  if (next.year !== date.year || next.month !== date.month || next.day !== date.day) {
    throw new RangeError("Invalid Gregorian date.");
  }
}

export function imperialToGregorian(date: ImperialDate): GregorianDate {
  const solarYear = date.year - OFFSET;
  if (!isImperialLeapYear(date.year) && date.month === 12 && date.day === 30) {
    throw new RangeError(`Invalid Imperial date: ${date.year}-12-30 is not a leap day.`);
  }
  if (date.month < 1 || date.month > 12 || date.day < 1 || date.day > 31) {
    throw new RangeError("Invalid Imperial date.");
  }
  const monthLength = date.month <= 6 ? 31 : date.month <= 11 ? 30 : isImperialLeapYear(date.year) ? 30 : 29;
  if (date.day > monthLength) throw new RangeError("Invalid Imperial date.");
  return jdnToGregorian(solarHijriToJdn(solarYear, date.month, date.day));
}

export function gregorianToImperial(date: GregorianDate): ImperialDate {
  validateGregorian(date);
  const solar = jdnToSolarHijri(gregorianToJdn(date.year, date.month, date.day));
  return { ...solar, year: solar.year + OFFSET };
}

export function isImperialDateValid(date: ImperialDate): boolean {
  try {
    imperialToGregorian(date);
    return true;
  } catch {
    return false;
  }
}
