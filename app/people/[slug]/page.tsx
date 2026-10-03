import Link from "next/link";
import { notFound } from "next/navigation";
import { getPersonBySlug } from "@/application/people";
import { resolveLocale } from "@/application/locale";
import { AppShell } from "@/frontend/components/app-shell";
import { copy } from "@/frontend/lib/i18n";
import { imperialDateLabel } from "@/frontend/lib/format";

export default async function PersonPage({params,searchParams}:{params:Promise<{slug:string}>;searchParams?:Promise<Record<string,string|string[]|undefined>>}) {
  const p=await params; const sp=await searchParams; const locale=resolveLocale(typeof sp?.lang==="string"?sp.lang:undefined);
  const person=getPersonBySlug(p.slug); if(!person) notFound(); const t=copy[locale];
  return <AppShell locale={locale} active="events">
    <article className="detail-card card">
      <div className="overline">{locale==="fa"?"شخص":"Person"}</div>
      <h1>{person.displayName?.[locale] ?? person.name[locale]}</h1>
      <p className="prose">{person.biography?.[locale] ?? person.shortBio[locale]}</p>
      {person.birthDate?.imperialDate ? <div className="meta-row"><span className="pill">{imperialDateLabel(person.birthDate.imperialDate,locale)}</span></div> : null}
      <div className="section-head"><h2>{t.sources}</h2></div>
      <div className="notice">{locale==="fa"?"اطلاعات منبع در Entity مستقل نگهداری می‌شود.":"Source metadata lives in its own entity."}</div>
    </article>
    <Link className="secondary-button" style={{justifySelf:"start"}} href={`/events?lang=${locale}`}>{t.events}</Link>
  </AppShell>;
}
