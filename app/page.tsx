import Link from "next/link";
import { getTodayState } from "@/application/today";
import { resolveLocale } from "@/application/locale";
import { AppShell } from "@/frontend/components/app-shell";
import { EventCard } from "@/frontend/components/event-card";
import { copy } from "@/frontend/lib/i18n";
import { gregorianLabel, imperialDateLabel, weekdayLabel } from "@/frontend/lib/format";

export const dynamic = "force-dynamic";

export default async function HomePage({ searchParams }: { searchParams?: Promise<Record<string,string|string[]|undefined>> }) {
  const params = await searchParams;
  const locale = resolveLocale(typeof params?.lang === "string" ? params.lang : undefined);
  const c = copy[locale];
  const state = getTodayState();
  const g = state.context.gregorianDate;
  return (
    <AppShell locale={locale} active="today">
      <div className="notice">{c.demoNotice}</div>
      <section className="hero">
        <div className="hero-panel">
          <div className="overline">{weekdayLabel(locale, state.context.weekday)} · {c[state.context.timeOfDay]}</div>
          <h1 className="hero-title">{imperialDateLabel(state.context.imperialDate, locale)}</h1>
          <p className="hero-subtitle">{gregorianLabel(g, locale)} · {c[state.context.season]}</p>
          <div style={{marginTop:20,display:"flex",gap:8,flexWrap:"wrap"}}>
            <Link className="primary-button" href={`/calendar?lang=${locale}`}>{c.calendar}</Link>
            <Link className="secondary-button" href={`/search?lang=${locale}`}>{c.search}</Link>
          </div>
        </div>
        <aside className="hero-panel context-card">
          <div><div className="overline">{c.occasions}</div><div className="context-value">{state.events.length} {locale==="fa" ? "مورد" : "items"}</div></div>
          <div><div className="overline">{c.important}</div><div className="context-value">{state.importantEvents.length} {locale==="fa" ? "مورد" : "items"}</div></div>
        </aside>
      </section>
      <section>
        <div className="section-head"><h2>{c.occasions}</h2><Link href={`/events?lang=${locale}`}>{c.events}</Link></div>
        <div className="stack">{state.events.length ? state.events.map((event)=><EventCard key={event.id} event={event} locale={locale}/>) : <div className="card empty">{c.noResults}</div>}</div>
      </section>
    </AppShell>
  );
}
