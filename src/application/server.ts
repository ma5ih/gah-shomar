import type { ImperialDate, ImperialMonth } from "../domain/calendar/types";
import { personalRepository } from "../data/db/repositories";
import { getTodayState } from "./today";
import { getMonthQuery, getDayQuery } from "./calendar";
import { application } from "./use-cases";

export function getServerPersonalUseCases() {
  return application.personal(personalRepository);
}

export function getServerTodayState(userId?: string) {
  return getTodayState(userId ? { userId, personalRepository } : {});
}

export function getServerMonthQuery(
  year: number,
  month: ImperialMonth,
  today?: ImperialDate,
  userId?: string,
) {
  return getMonthQuery(year, month, today, userId, userId ? personalRepository : undefined);
}

export function getServerDayQuery(date: ImperialDate, userId?: string) {
  return getDayQuery(date, userId, userId ? personalRepository : undefined);
}

export function searchAllServer(userId: string | null, query: string) {
  return application.searchAll(personalRepository, userId, query);
}
