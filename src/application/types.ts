import type { GregorianDate, ImperialDate, Weekday } from "../domain/calendar/types";
import type { Season } from "../domain/calendar/season";
import type { TimeOfDayState } from "../domain/calendar/time-of-day";
import type { Event } from "../domain/event/types";
import type { Person } from "../domain/person/types";
import type { HistoricalPeriod } from "../domain/period/types";
import type { Memory, PersonalEvent } from "../domain/personal/types";

export type Locale = "fa" | "en";
export type ResolvedTimeContext = {
  readonly timezone:string; readonly gregorianDate:GregorianDate; readonly imperialDate:ImperialDate;
  readonly weekday:Weekday; readonly timeOfDay:TimeOfDayState; readonly season:Season;
};
export type TodayState = {
  readonly context:ResolvedTimeContext; readonly events:readonly Event[]; readonly importantEvents:readonly Event[];
  readonly periods:readonly HistoricalPeriod[]; readonly people:readonly Person[];
  readonly personalEvents:readonly PersonalEvent[]; readonly memories:readonly Memory[];
};
export type CalendarCell = { readonly day:number; readonly date:ImperialDate; readonly weekday:Weekday; readonly isToday:boolean; readonly hasEvents:boolean; readonly hasPersonalData:boolean };
export type MonthQueryResult = { readonly year:number; readonly month:ImperialDate["month"]; readonly daysInMonth:number; readonly cells:readonly (CalendarCell|null)[] };
export type DayQueryResult = { readonly date:ImperialDate; readonly weekday:Weekday; readonly events:readonly Event[]; readonly importantEvents:readonly Event[]; readonly periods:readonly HistoricalPeriod[]; readonly people:readonly Person[]; readonly personalEvents:readonly PersonalEvent[]; readonly memories:readonly Memory[] };
