import Link from "next/link";
import {getServerTodayState} from "@/application/server";
import {getCurrentSessionSafe} from "@/application/session";
import {resolveLocale} from "@/application/locale";
import {AppShell} from "@/frontend/components/app-shell";
import {LiveClock} from "@/frontend/components/live-clock";
import {copy} from "@/frontend/lib/i18n";
import {imperialDateLabel,weekdayLabel,gregorianLabel} from "@/frontend/lib/format";
export const dynamic="force-dynamic";
function ClockIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></svg>}
export default async function HomePage({searchParams}:{searchParams?:Promise<Record<string,string|string[]|undefined>>}){
 const params=await searchParams;const locale=resolveLocale(typeof params?.lang==="string"?params.lang:undefined);const c=copy[locale];const session=await getCurrentSessionSafe();
 const state=await getServerTodayState(session?.userId);const g=state.context.gregorianDate;
 return <AppShell locale={locale} active="today">
  <section className="today-view" data-time-of-day={state.context.timeOfDay} data-season={state.context.season}>
   <div className="today-hero">
    <article className="today-primary">
      <div className="today-primary-content">
       <div className="today-kicker"><span>{weekdayLabel(locale,state.context.weekday)}</span><span className="today-dot" aria-hidden="true"/><span>{c[state.context.timeOfDay]}</span></div>
       <h1 className="today-date">{imperialDateLabel(state.context.imperialDate,locale)}</h1>
       <div className="today-clock"><ClockIcon/><span>{c.clockNow} <LiveClock locale={locale} timeZone={state.context.timezone}/></span></div>
       <div className="today-secondary">{gregorianLabel(g,locale)} · {c[state.context.season]}</div>
      </div>
      <div className="today-primary-actions"><Link className="primary-button" href={"/calendar?lang="+locale}>{c.calendar}</Link><Link className="secondary-button" href={"/search?lang="+locale}>{c.search}</Link></div>
    </article>
    <aside className="today-side" aria-hidden="true"><div className="today-side-art"><span className="today-sun"/></div><div className="today-side-content"><div className="today-side-label">{c.today}</div><div className="today-side-title">{c[state.context.season]}</div><p className="today-side-copy">{c[state.context.timeOfDay]}</p></div></aside>
   </div>
   <div className="today-grid">
    <section className="today-panel" aria-labelledby="public-today-title">
      <div className="today-panel-head"><h2 id="public-today-title">{c.publicToday}</h2><Link href={"/events?lang="+locale}>{c.events}</Link></div>
      <div className="today-panel-list">
        {state.events.map(event=><Link key={event.id} className="today-event" href={"/events/"+(event.slug??event.id)+"?lang="+locale}><div className="today-event-type">{event.category}</div><div className="today-event-title">{event.title[locale]}</div><div className="today-event-meta">{event.summary[locale]}</div></Link>)}
        {!state.events.length?<div className="today-empty">{c.emptyToday}</div>:null}
      </div>
    </section>
    <section className="today-panel" aria-labelledby="personal-today-title">
      <div className="today-panel-head"><h2 id="personal-today-title">{c.personalToday}</h2><Link href={"/personal?lang="+locale}>{c.personal}</Link></div>
      <div className="today-panel-list">
        {state.personalEvents.map(event=><Link key={event.id} className="today-event" href={"/personal?lang="+locale}><div className="today-event-type">{event.type}</div><div className="today-event-title">{event.title}</div><div className="today-event-meta">{imperialDateLabel(event.date,locale)}</div></Link>)}
        {state.memories.map(memory=><Link key={memory.id} className="today-event" href={"/personal?lang="+locale}><div className="today-event-type">{c.memories}</div><div className="today-event-title">{memory.title??c.memories}</div><div className="today-event-meta">{memory.text}</div></Link>)}
        {!state.personalEvents.length&&!state.memories.length?<div className="today-empty">{session?c.emptyToday:<>{c.emptyToday} <Link href={"/login?lang="+locale} style={{color:"var(--accent-strong)",fontWeight:800}}>{c.signIn}</Link></>}</div>:null}
      </div>
    </section>
   </div>
  </section>
 </AppShell>
}