import { AppShell } from "@/frontend/components/app-shell";
import { getTimeline } from "@/application/timeline";
import { resolveLocale } from "@/application/locale";
import { copy } from "@/frontend/lib/i18n";
import { imperialDateLabel } from "@/frontend/lib/format";

export default async function TimelinePage({searchParams}:{searchParams?:Promise<Record<string,string|string[]|undefined>>}) {
  const p=await searchParams; const locale=resolveLocale(typeof p?.lang==="string"?p.lang:undefined); const t=copy[locale]; const periods=getTimeline();
  return <AppShell locale={locale} active="timeline">
    <section className="hero-panel"><div className="overline">{t.timeline}</div><h1 style={{margin:"10px 0",fontSize:"2.3rem"}}>{t.timeline}</h1><p className="hero-subtitle">{locale==="fa"?"مرور دوره‌ها و اتصال آن‌ها به رویدادها.":"Browse periods and their linked events."}</p></section>
    <div className="stack">{periods.map(period=><article className="card detail-card" key={period.id}><div className="eyebrow">{period.slug}</div><h2 style={{margin:"8px 0"}}>{period.name[locale]}</h2><p className="prose">{period.summary[locale]}</p><div className="meta-row">{period.startDate.imperialDate?<span className="pill">{imperialDateLabel(period.startDate.imperialDate,locale)}</span>:null}</div></article>)}</div>
  </AppShell>;
}
