import { gregorianToImperial } from "./conversion";
import type { GregorianDate, ImperialDate } from "./types";

/**
 * Converts the Gregorian calendar date selected by the application runtime
 * into the product's Imperial "today".
 *
 * Timezone/clock resolution intentionally lives outside the domain layer.
 * The caller must first resolve the current Gregorian calendar date for the
 * user's intended timezone, then pass only the calendar date here.
 */
export function getImperialToday(gregorianDate: GregorianDate): ImperialDate {
  return gregorianToImperial(gregorianDate);
}
