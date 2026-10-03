import Link from "next/link";
import { AppShell } from "@/frontend/components/app-shell";
import { EventCard } from "@/frontend/components/event-card";
import { listImportantEvents } from "@/application/events";
import { getTodayState } from "@/application/today";
import { resolveLocale } from "@/application/locale";
import { copy } from "@/frontend/lib/i18n";

export const dynamic="force-dynamic";
export default async function EventsPage({searchParams}:{searchParams?:Promise<Record<string,string|string[]|undefined>>}){
  const p=await searchParams;const locale=resolveLocale(typeof p?.lang==="string"?p.lang:undefined);const t=copy[locale];
  const d=(await getTodayState()).context.imperialDate;const events=listImportantEvents(d.year,d.month);
  return <AppShell locale={locale} active="events">
    <section className="hero-panel"><div className="overline">{t.important}</div><h1 style={{margin:"10px 0",fontSize:"2.3rem"}}>{t.important}</h1><p className="hero-subtitle">{locale==="fa"?"انتخاب‌های تحریریه برای این ماه.":"Editorial selections for the current month."}</p></section>
    <div className="stack">{events.map(e=><EventCard key={e.id} event={e} locale={locale}/>)}{!events.length?<div className="card empty">{t.noResults}</div>:null}</div>
    <Link className="secondary-button" style={{justifySelf:"start"}} href={`/timeline?lang=${locale}`}>{t.timeline}</Link>
  </AppShell>;
}
