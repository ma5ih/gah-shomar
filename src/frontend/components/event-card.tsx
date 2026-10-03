import Link from "next/link";
import type { Event } from "../../domain/event/types";
import type { Locale } from "../../application/types";
import { imperialDateLabel, gregorianLabel } from "../lib/format";
import { imperialToGregorian } from "../../domain/calendar";
export function EventCard({event,locale}:{event:Event;locale:Locale}){
  const imperial=event.dates[0]?.start.imperialDate;
  const gregorian=imperial?imperialToGregorian(imperial):undefined;
  return <Link href={`/events/${event.slug??event.id}?lang=${locale}`} className="card event-card">
    <div className="eyebrow">{event.category}</div><h3>{event.title[locale]}</h3><p>{event.summary[locale]}</p>
    {imperial?<div className="card-meta"><span>{imperialDateLabel(imperial,locale)}</span>{gregorian?<span>{gregorianLabel(gregorian,locale)}</span>:null}</div>:null}
  </Link>;
}
