import Link from "next/link";
import { getDayQuery } from "@/application/calendar";
import { resolveLocale } from "@/application/locale";
import { AppShell } from "@/frontend/components/app-shell";
import { EventCard } from "@/frontend/components/event-card";
import { copy } from "@/frontend/lib/i18n";
import { imperialDateLabel, weekdayLabel } from "@/frontend/lib/format";
import type { ImperialDate } from "@/domain/calendar/types";

export const dynamic = "force-dynamic";

export default async function DayPage({ params, searchParams }: { params: Promise<{year:string;month:string;day:string}>; searchParams?: Promise<Record<string,string|string[]|undefined>> }) {
  const p=await params; const sp=await searchParams; const locale=resolveLocale(typeof sp?.lang==="string"?sp.lang:undefined);
  const date={year:Number(p.year),month:Number(p.month) as ImperialDate["month"],day:Number(p.day)};
  const model=getDayQuery(date); const c=copy[locale];
  return <AppShell locale={locale} active="calendar">
    <section className="detail-card card">
      <div className="overline">{weekdayLabel(locale,model.weekday)}</div>
      <h1>{imperialDateLabel(date,locale)}</h1>
      <div className="meta-row"><span className="pill">{model.events.length} {locale==="fa"?"رویداد":"events"}</span><span className="pill">{model.people.length} {c.people}</span></div>
    </section>
    <section><div className="section-head"><h2>{c.occasions}</h2></div><div className="stack">{model.events.length?model.events.map(e=><EventCard key={e.id} event={e} locale={locale}/>):<div className="card empty">{c.noResults}</div>}</div></section>
    <Link className="secondary-button" style={{justifySelf:"start"}} href={`/calendar?lang=${locale}&year=${date.year}&month=${date.month}`}>{c.calendar}</Link>
  </AppShell>;
}
