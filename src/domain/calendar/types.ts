export type ImperialMonth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ImperialDate = {
  readonly year: number;
  readonly month: ImperialMonth;
  readonly day: number;
};

export type GregorianDate = {
  readonly year: number;
  readonly month: number;
  readonly day: number;
};

export type DatePrecision =
  | "EXACT"
  | "APPROXIMATE"
  | "YEAR_ONLY"
  | "MONTH_ONLY"
  | "RANGE"
  | "UNKNOWN";

export type HistoricalDate = {
  readonly originalCalendar: string;
  readonly originalDate?: string;
  readonly originalDateText?: string;
  readonly imperialDate?: ImperialDate;
  readonly precision: DatePrecision;
  readonly note?: string;
};

export type Weekday =
  | "saturday"
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday";
