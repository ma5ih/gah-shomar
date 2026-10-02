import type { ImperialMonth } from "./types";

export const IMPERIAL_MONTH_NAMES: Readonly<Record<ImperialMonth, string>> = {
  1: "فروردین",
  2: "اردیبهشت",
  3: "خرداد",
  4: "تیر",
  5: "اَمرداد",
  6: "شهریور",
  7: "مهر",
  8: "آبان",
  9: "آذر",
  10: "دی",
  11: "بهمن",
  12: "اسپند",
};

export const IMPERIAL_MONTH_BASE_LENGTHS: Readonly<Record<ImperialMonth, number>> = {
  1: 31,
  2: 31,
  3: 31,
  4: 31,
  5: 31,
  6: 31,
  7: 30,
  8: 30,
  9: 30,
  10: 30,
  11: 30,
  12: 29,
};

export const IMPERIAL_MONTHS = Object.freeze(
  Array.from({ length: 12 }, (_, index) => (index + 1) as ImperialMonth),
);
