import Link from "next/link";
import { getServerTodayState } from "@/application/server";
import { getCurrentSessionSafe } from "@/application/session";
import { resolveLocale } from "@/application/locale";
import { AppShell } from "@/frontend/components/app-shell";
import { EventCard } from "@/frontend/components/event-card";
import { copy } from "@/frontend/lib/i18n";
import { gregorianLabel,imperialDateLabel,weekdayLabel } from "@/frontend/lib/format";
export const dynamic="force-dynamic";
export default async function HomePage({searchParams}:{searchParams?:Promise<Record<string,string|string[]|undefined>>}){
 const params=await searchParams;const locale=resolveLocale(typeof params?.lang==="string"?params.lang:undefined);const c=copy[locale];const session=await getCurrentSessionSafe();
 const state=await getServerTodayState(session?.userId);const g=state.context.gregorianDate;
 return <AppShell locale={locale} active="today">
  <div className="notice">{c.demoNotice}</div>
  <section className="hero" data-time-of-day={state.context.timeOfDay} data-season={state.context.season}>
   <div className="hero-panel"><div className="overline">{weekdayLabel(locale,state.context.weekday)} · {c[state.context.timeOfDay]}</div><h1 className="hero-title">{imperialDateLabel(state.context.imperialDate,locale)}</h1><p className="hero-subtitle">{gregorianLabel(g,locale)} · {c[state.context.season]}</p><div style={{marginTop:20,display:"flex",gap:8,flexWrap:"wrap"}}><Link className="primary-button" href={"/calendar?lang="+locale}>{c.calendar}</Link><Link className="secondary-button" href={"/search?lang="+locale}>{c.search}</Link></div></div>
   <aside className="hero-panel context-card"><div><div className="overline">{c.occasions}</div><div className="context-value">{state.events.length}</div></div><div><div className="overline">{c.personal}</div><div className="context-value">{state.personalEvents.length+state.memories.length}</div></div></aside>
  </section>
  <section><div className="section-head"><h2>{c.occasions}</h2><Link href={"/events?lang="+locale}>{c.events}</Link></div><div className="stack">{state.events.map(e=><EventCard key={e.id} event={e} locale={locale}/>)}{!state.events.length?<div className="card empty">{c.noResults}</div>:null}</div></section>
  {state.importantEvents.length?<section><div className="section-head"><h2>{c.important}</h2><Link href={"/events?lang="+locale}>{c.details}</Link></div><div className="stack">{state.importantEvents.map(e=><EventCard key={"important-"+e.id} event={e} locale={locale}/>)}</div></section>:null}
  {(state.personalEvents.length||state.memories.length)?<section><div className="section-head"><h2>{c.personal}</h2><Link href={"/personal?lang="+locale}>{c.details}</Link></div><div className="stack">{state.personalEvents.map(e=><article key={e.id} className="card detail-card"><div className="eyebrow">{e.type}</div><h3>{e.title}</h3><div className="meta-row"><span className="pill">{imperialDateLabel(e.date,locale)}</span></div></article>)}{state.memories.map(m=><article key={m.id} className="card detail-card"><div className="eyebrow">{c.memories}</div><p className="prose">{m.text}</p></article>)}</div></section>:null}
 </AppShell>
}
