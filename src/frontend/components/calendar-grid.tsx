import Link from "next/link";
import type { Locale } from "../../application/types";
import type { MonthQueryResult } from "../../application/types";
const labels = {
  fa: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
  en: ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"],
} as const;
export function CalendarGrid({ model, locale }: { model: MonthQueryResult; locale: Locale }) {
  return (
    <div className="calendar-grid" role="grid" aria-label={locale === "fa" ? "تقویم ماه" : "Monthly calendar"}>
      {labels[locale].map((label) => <div key={label} className="weekday-cell" role="columnheader">{label}</div>)}
      {model.cells.map((cell, i) => cell ? (
        <Link
          key={cell.day}
          role="gridcell"
          aria-current={cell.isToday ? "date" : undefined}
          href={`/day/${cell.date.year}/${cell.date.month}/${cell.date.day}?lang=${locale}`}
          className={`day-cell ${cell.isToday ? "today" : ""} ${cell.hasEvents ? "has-event" : ""}`}
        >
          <span>{cell.day}</span>
          {cell.hasEvents ? <i aria-hidden="true" /> : null}
        </Link>
      ) : <div key={`blank-${i}`} className="day-cell blank" aria-hidden="true" />)}
    </div>
  );
}
