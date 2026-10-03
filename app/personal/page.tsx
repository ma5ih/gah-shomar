import Link from "next/link";
import {getCurrentSession} from "@/application/session";
import {personalRepository} from "@/data/db/repositories";
import {application} from "@/application/use-cases";
import {resolveLocale} from "@/application/locale";
import {AppShell} from "@/frontend/components/app-shell";
import {copy} from "@/frontend/lib/i18n";
import {imperialDateLabel} from "@/frontend/lib/format";
import {createPersonalEventAction,updatePersonalEventAction,deletePersonalEventAction,createPersonalPersonAction,createMemoryAction,updateMemoryAction,deleteMemoryAction} from "../actions/personal";
import {signOutAction} from "../actions/auth";
import {ShareCardButton} from "@/frontend/components/share-card-button";
export const dynamic="force-dynamic";

function eventFields(event:any){
  return <><div className="field"><label>Title</label><input name="title" defaultValue={event.title} required/></div><div className="field"><label>Type</label><select name="type" defaultValue={event.type}><option value="birthday">birthday</option><option value="anniversary">anniversary</option><option value="custom">custom</option></select></div><div className="two-col"><input name="year" type="number" defaultValue={event.date.year} required/><input name="month" type="number" min="1" max="12" defaultValue={event.date.month} required/></div><input name="day" type="number" min="1" max="31" defaultValue={event.date.day} required/><label><input name="recurrence" value="yearly" type="checkbox" defaultChecked={Boolean(event.recurrence)}/> Yearly</label><textarea name="notes" rows={3} defaultValue={event.notes??""}/></>;
}
function memoryFields(memory:any){
  return <><input name="title" defaultValue={memory.title??""} placeholder="Title"/><textarea name="text" rows={6} defaultValue={memory.text} required/><div className="two-col"><input name="year" type="number" defaultValue={memory.date.year} required/><input name="month" type="number" min="1" max="12" defaultValue={memory.date.month} required/></div><input name="day" type="number" min="1" max="31" defaultValue={memory.date.day} required/></>;
}

export default async function PersonalPage({searchParams}:{searchParams?:Promise<Record<string,string|string[]|undefined>>}){
  const p=await searchParams,locale=resolveLocale(typeof p?.lang==="string"?p.lang:undefined),c=copy[locale],s=await getCurrentSession();
  if(!s)return <AppShell locale={locale} active="personal"><section className="auth-card card"><div className="overline">{c.personal}</div><h1>{locale==="fa"?"لایهٔ شخصی":"Personal layer"}</h1><p className="prose">{locale==="fa"?"برای نگهداری رویدادها و خاطرات شخصی وارد حساب شو.":"Sign in to manage personal data."}</p><Link className="primary-button" href={"/login?lang="+locale}>{c.signIn}</Link></section></AppShell>;
  try{
    const d=await application.personal(personalRepository).listOverview(s.userId);
    return <AppShell locale={locale} active="personal">
      <section className="hero-panel"><div className="overline">{c.personal}</div><h1 style={{margin:"8px 0"}}>{s.userId.slice(0,8)}</h1><form action={signOutAction}><button className="secondary-button"> {c.logout} </button></form></section>
      <div className="two-col">
        <form className="card detail-card form-stack" action={createPersonalEventAction}><h2 style={{margin:0}}>{c.addEvent}</h2>{eventFields({title:"",type:"custom",date:{year:2585,month:7,day:11}})}<button className="primary-button">{locale==="fa"?"ذخیره":"Save"}</button></form>
        <form className="card detail-card form-stack" action={createMemoryAction}><h2 style={{margin:0}}>{c.addMemory}</h2>{memoryFields({title:"",text:"",date:{year:2585,month:7,day:11}})}<button className="primary-button">{locale==="fa"?"ثبت خاطره":"Save memory"}</button></form>
      </div>
      <section className="stack">
        {d.events.map(e=><article key={e.id} className="card detail-card">
          <div className="eyebrow">{e.type}</div><div className="meta-row"><span className="pill">{imperialDateLabel(e.date,locale)}</span></div>
          <form className="form-stack" action={updatePersonalEventAction}><input type="hidden" name="id" value={e.id}/>{eventFields(e)}<button className="secondary-button"> {locale==="fa"?"ذخیرهٔ تغییرات":"Save changes"} </button></form>
          <div style={{marginTop:8,display:"flex",gap:8,flexWrap:"wrap"}}><ShareCardButton dto={application.shareCard(s.userId,e)} locale={locale}/><form action={deletePersonalEventAction}><input type="hidden" name="id" value={e.id}/><button className="secondary-button"> {locale==="fa"?"حذف":"Delete"} </button></form></div>
        </article>)}
        {d.memories.map(m=><article key={m.id} className="card detail-card">
          <div className="eyebrow">{c.memories}</div>
          <form className="form-stack" action={updateMemoryAction}><input type="hidden" name="id" value={m.id}/>{memoryFields(m)}<button className="secondary-button">{locale==="fa"?"ذخیرهٔ تغییرات":"Save changes"}</button></form>
          <form action={deleteMemoryAction} style={{marginTop:8}}><input type="hidden" name="id" value={m.id}/><button className="secondary-button">{locale==="fa"?"حذف":"Delete"}</button></form>
        </article>)}
        {!d.events.length&&!d.memories.length?<div className="card empty">{c.noResults}</div>:null}
      </section>
      <form className="card detail-card form-stack" action={createPersonalPersonAction}><h2 style={{margin:0}}>{locale==="fa"?"شخص شخصی":"Personal person"}</h2><input name="name" required/><button className="secondary-button">{locale==="fa"?"افزودن":"Add"}</button></form>
    </AppShell>;
  }catch{return <AppShell locale={locale} active="personal"><div className="notice">{locale==="fa"?"دیتابیس در این محیط متصل نیست.":"The database is not configured in this environment."}</div></AppShell>}
}
