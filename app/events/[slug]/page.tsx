import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventBySlug } from "@/application/events";
import { publicRepository } from "@/data/public/repository";
import { resolveLocale } from "@/application/locale";
import { AppShell } from "@/frontend/components/app-shell";
import { copy } from "@/frontend/lib/i18n";
import { imperialDateLabel } from "@/frontend/lib/format";

export default async function EventDetailPage({params,searchParams}:{params:Promise<{slug:string}>;searchParams?:Promise<Record<string,string|string[]|undefined>>}){
  const p=await params;const sp=await searchParams;const locale=resolveLocale(typeof sp?.lang==="string"?sp.lang:undefined);const event=getEventBySlug(p.slug);if(!event)notFound();
  const c=copy[locale];const date=event.dates[0]?.start.imperialDate;const people=event.personIds.map(id=>publicRepository.getPersonById(id)).filter((x):x is NonNullable<typeof x>=>Boolean(x));const related=event.relatedEventIds.map(id=>publicRepository.getEventById(id)).filter((x):x is NonNullable<typeof x>=>Boolean(x));
  return <AppShell locale={locale} active="events"><article className="detail-card card"><div className="overline">{event.category}</div><h1>{event.title[locale]}</h1>{date?<div className="meta-row"><span className="pill">{imperialDateLabel(date,locale)}</span></div>:null}<p className="prose">{event.description?.[locale]??event.summary[locale]}</p>
    {people.length?<section><div className="section-head"><h2>{c.people}</h2></div><div className="stack">{people.map(person=><Link key={person.id} className="card event-card" href={`/people/${person.slug}?lang=${locale}`}><h3>{person.name[locale]}</h3><p>{person.shortBio[locale]}</p></Link>)}</div></section>:null}
    {related.length?<section><div className="section-head"><h2>{locale==="fa"?"رویدادهای مرتبط":"Related events"}</h2></div><div className="stack">{related.map(r=><Link key={r.id} className="card event-card" href={`/events/${r.slug}?lang=${locale}`}><h3>{r.title[locale]}</h3></Link>)}</div></section>:null}
    <div className="section-head"><h2>{c.sources}</h2></div><div className="stack">{event.sourceIds.map((id) => { const source = publicRepository.getSourceById(id); return source ? <div key={id} className="card detail-card"><h3>{source.title}</h3><p className="prose">{source.referenceDetail}</p>{source.url ? <a className="secondary-button" href={source.url} target="_blank" rel="noreferrer">{source.url}</a> : null}</div> : null; })}</div>
  </article><Link className="secondary-button" style={{justifySelf:"start"}} href={`/events?lang=${locale}`}>{c.events}</Link></AppShell>;
}
