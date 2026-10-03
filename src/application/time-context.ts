import { gregorianToImperial } from "../domain/calendar/conversion";
import { seasonOfImperialMonth } from "../domain/calendar/season";
import { getTimeOfDayState } from "../domain/calendar/time-of-day";
import { weekdayOfImperialDate } from "../domain/calendar/weekday";
import type { GregorianDate } from "../domain/calendar/types";
import type { ResolvedTimeContext } from "./types";

const DEFAULT_TIMEZONE = "Asia/Tehran";

function readParts(date: Date, timeZone: string) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  });
  const parts = Object.fromEntries(
    formatter.formatToParts(date).filter((p) => p.type !== "literal").map((p) => [p.type, Number(p.value)]),
  ) as Record<string, number>;
  const gregorianDate: GregorianDate = { year: parts.year, month: parts.month, day: parts.day };
  return { gregorianDate, hour: parts.hour, minute: parts.minute };
}

export function resolveTimeContext(now: Date = new Date(), timeZone = process.env.APP_TIMEZONE ?? DEFAULT_TIMEZONE): ResolvedTimeContext {
  const { gregorianDate, hour, minute } = readParts(now, timeZone);
  const imperialDate = gregorianToImperial(gregorianDate);
  const timeOfDay = getTimeOfDayState(hour, minute, {
    morningStartHour: 6, noonStartHour: 12, sunsetStartHour: 18, nightStartHour: 21,
  });
  return {
    timezone: timeZone,
    gregorianDate,
    imperialDate,
    weekday: weekdayOfImperialDate(imperialDate),
    timeOfDay,
    season: seasonOfImperialMonth(imperialDate.month),
  };
}
