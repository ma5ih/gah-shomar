import Link from "next/link";
import type { Event } from "../../domain/event/types";
import type { Locale } from "../../application/types";
import { imperialDateLabel, gregorianLabel } from "../lib/format";
export function EventCard({ event, locale }: { event: Event; locale: Locale }) {
  const date = event.dates[0]?.start.imperialDate;
  return (
    <Link href={`/events/${event.slug ?? event.id}?lang=${locale}`} className="card event-card">
      <div className="eyebrow">{event.category}</div>
      <h3>{event.title[locale]}</h3>
      <p>{event.summary[locale]}</p>
      {date ? <div className="card-meta">
        <span>{imperialDateLabel(date, locale)}</span>
        <span>{date ? gregorianLabel({ year: date.year - 1180 + 621, month: 1, day: 1 }, locale) : ""}</span>
      </div> : null}
    </Link>
  );
}
