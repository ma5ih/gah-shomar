import type { ImperialDate } from "./types";

/**
 * The Imperial calendar inherits the Solar Hijri leap-year pattern.
 *
 * The product rule is anchored to the approved equivalence:
 * Solar Hijri 1403 = Imperial 2583.
 *
 * Leap years in the repeating 33-year pattern occur at offsets:
 * 0, 4, 9, 13, 17, 21, 25, 29.
 *
 * This yields the known sequence:
 * 2579, 2583, 2588, 2592, 2596, 2600, 2604, 2608, ...
 */
const IMPERIAL_LEAP_CYCLE_ANCHOR = 2583;
const LEAP_OFFSETS = new Set([0, 4, 9, 13, 17, 21, 25, 29]);

function positiveModulo(value: number, divisor: number): number {
  return ((value % divisor) + divisor) % divisor;
}

export function isImperialLeapYear(year: number): boolean {
  const cycleYear = positiveModulo(
    year - IMPERIAL_LEAP_CYCLE_ANCHOR,
    33,
  );

  return LEAP_OFFSETS.has(cycleYear);
}

export function isImperialLeapDate(date: ImperialDate): boolean {
  return date.month === 12 && date.day === 30 && isImperialLeapYear(date.year);
}

export function previousImperialLeapYear(year: number): number {
  for (let candidate = year - 1; candidate >= year - 33; candidate -= 1) {
    if (isImperialLeapYear(candidate)) {
      return candidate;
    }
  }

  throw new Error("Unable to find a previous imperial leap year.");
}

export function nextImperialLeapYear(year: number): number {
  for (let candidate = year + 1; candidate <= year + 33; candidate += 1) {
    if (isImperialLeapYear(candidate)) {
      return candidate;
    }
  }

  throw new Error("Unable to find a next imperial leap year.");
}
