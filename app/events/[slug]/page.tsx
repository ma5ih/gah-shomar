import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventBySlug } from "@/application/events";
import { resolveLocale } from "@/application/locale";
import { AppShell } from "@/frontend/components/app-shell";
import { copy } from "@/frontend/lib/i18n";
import { imperialDateLabel } from "@/frontend/lib/format";

export default async function EventDetailPage({params,searchParams}:{params:Promise<{slug:string}>;searchParams?:Promise<Record<string,string|string[]|undefined>>}) {
  const p=await params; const sp=await searchParams; const locale=resolveLocale(typeof sp?.lang==="string"?sp.lang:undefined); const event=getEventBySlug(p.slug);
  if(!event) notFound(); const c=copy[locale]; const date=event.dates[0]?.start.imperialDate;
  return <AppShell locale={locale} active="events">
    <article className="detail-card card">
      <div className="overline">{event.category}</div><h1>{event.title[locale]}</h1>
      {date?<div className="meta-row"><span className="pill">{imperialDateLabel(date,locale)}</span></div>:null}
      <p className="prose">{event.description?.[locale] ?? event.summary[locale]}</p>
      <div className="section-head"><h2>{c.sources}</h2></div>
      <div className="notice">{locale==="fa"?"منابع و اعتبارسنجی در مدل داده نگهداری می‌شوند و dataset نهایی در PHASE-08 جایگزین می‌شود.":"Source and validation metadata are stored in the data model; the curated dataset arrives in PHASE-08."}</div>
    </article>
    <Link className="secondary-button" style={{justifySelf:"start"}} href={`/events?lang=${locale}`}>{c.events}</Link>
  </AppShell>;
}
