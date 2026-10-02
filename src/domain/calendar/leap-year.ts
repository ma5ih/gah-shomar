import type { ImperialDate } from "./types";

const SOLAR_HIJRI_OFFSET = 1180;

/**
 * Break points from the Borkowski/Jalaali leap-year algorithm.
 * Each segment can contain a 33-year pattern, but the pattern is not
 * globally anchored to one repeating 33-year cycle.
 *
 * Supported Solar Hijri range: -61..3177
 * Supported Imperial range: 1119..4357
 */
const JALAALI_BREAKS = [
  -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210,
  1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178,
] as const;

const MIN_SOLAR_HIJRI_YEAR = JALAALI_BREAKS[0];
const MAX_SOLAR_HIJRI_YEAR = JALAALI_BREAKS[JALAALI_BREAKS.length - 1] - 1;

function mod(value: number, divisor: number): number {
  return ((value % divisor) + divisor) % divisor;
}

function truncDiv(value: number, divisor: number): number {
  return value < 0 ? Math.ceil(value / divisor) : Math.floor(value / divisor);
}

function solarHijriLeapDistance(year: number): number {
  if (year < MIN_SOLAR_HIJRI_YEAR || year > MAX_SOLAR_HIJRI_YEAR) {
    throw new RangeError(
      `Solar Hijri leap calculation does not support year ${year}. Supported range: ${MIN_SOLAR_HIJRI_YEAR}..${MAX_SOLAR_HIJRI_YEAR}.`,
    );
  }

  let jp = JALAALI_BREAKS[0];
  let jump = 0;

  for (let i = 1; i < JALAALI_BREAKS.length; i += 1) {
    const jm = JALAALI_BREAKS[i];
    jump = jm - jp;

    if (year < jm) {
      break;
    }

    jp = jm;
  }

  let n = year - jp;

  if (jump - n < 6) {
    n = n - jump + truncDiv(jump + 4, 33) * 33;
  }

  let leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }

  return leap;
}

/**
 * The Imperial calendar inherits the corresponding Solar Hijri leap rule.
 * Only the year numbering differs:
 *
 *   Imperial year = Solar Hijri year + 1180
 *
 * This is intentionally not implemented as one repeating 33-year cycle.
 * The Borkowski/Jalaali break-point algorithm preserves occasional 5-year
 * gaps, such as Solar Hijri 1403 -> 1408 and 1436 -> 1441.
 */
export function isImperialLeapYear(year: number): boolean {
  const solarHijriYear = year - SOLAR_HIJRI_OFFSET;
  return solarHijriLeapDistance(solarHijriYear) === 0;
}

export function isImperialLeapDate(date: ImperialDate): boolean {
  return date.month === 12 && date.day === 30 && isImperialLeapYear(date.year);
}

export function previousImperialLeapYear(year: number): number {
  for (let candidate = year - 1; candidate >= year - 40; candidate -= 1) {
    if (isImperialLeapYear(candidate)) {
      return candidate;
    }
  }

  throw new Error("Unable to find a previous imperial leap year.");
}

export function nextImperialLeapYear(year: number): number {
  for (let candidate = year + 1; candidate <= year + 40; candidate += 1) {
    if (isImperialLeapYear(candidate)) {
      return candidate;
    }
  }

  throw new Error("Unable to find a next imperial leap year.");
}
