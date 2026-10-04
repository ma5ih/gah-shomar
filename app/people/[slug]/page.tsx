import Link from "next/link";
import {notFound} from "next/navigation";
import {getPersonById,getPersonBySlug} from "@/application/people";
import {getEventById} from "@/application/events";
import {resolveLocale} from "@/application/locale";
import {AppShell} from "@/frontend/components/app-shell";
import {copy} from "@/frontend/lib/i18n";

export default async function PersonPage({
 params,
 searchParams,
}:{params:Promise<{slug:string}>;searchParams?:Promise<Record<string,string|string[]|undefined>>}){
 const route=await params;
 const query=await searchParams;
 const locale=resolveLocale(typeof query?.lang==="string"?query.lang:undefined);
 const person=getPersonBySlug(route.slug);
 if(!person)notFound();
 const c=copy[locale];
 const isPresent=<T,>(value:T):value is NonNullable<T>=>Boolean(value);
 const events=person.eventIds.map(getEventById).filter(isPresent);
 const relatedPeople=person.relatedPersonIds.map(getPersonById).filter(isPresent);

 return <AppShell locale={locale} active="events">
  <article className="detail-card card">
   <div className="overline">{locale==="fa"?"شخص":"Person"}</div>
   <h1>{person.displayName?.[locale]??person.name[locale]}</h1>
   <p className="prose">{person.biography?.[locale]??person.shortBio[locale]}</p>

   <div className="section-head"><h2>{c.events}</h2></div>
   <div className="stack">
    {events.length
      ? events.map(event=><Link key={event.id} className="secondary-button" href={`/events/${event.slug??event.id}?lang=${locale}`}>{event.title[locale]}</Link>)
      : <div className="empty">{c.noResults}</div>}
   </div>

   {relatedPeople.length?<section>
    <div className="section-head"><h2>{locale==="fa"?"افراد مرتبط":"Related people"}</h2></div>
    <div className="stack">
     {relatedPeople.map(related=><Link key={related.id} className="card event-card" href={`/people/${related.slug}?lang=${locale}`}>
      <div className="eyebrow">{locale==="fa"?"شخص مرتبط":"Related person"}</div>
      <h3>{related.name[locale]}</h3>
      <p>{related.shortBio[locale]}</p>
     </Link>)}
    </div>
   </section>:null}
  </article>
 </AppShell>
}