import Link from "next/link";
import { getCurrentSession } from "@/application/session";
import { personalRepository } from "@/data/db/repositories";
import { application } from "@/application/use-cases";
import { resolveLocale } from "@/application/locale";
import { AppShell } from "@/frontend/components/app-shell";
import { copy } from "@/frontend/lib/i18n";
import { imperialDateLabel } from "@/frontend/lib/format";
import { createPersonalEventAction, createMemoryAction } from "@/app/actions/personal";
import { signOutAction } from "@/app/actions/auth";

export const dynamic = "force-dynamic";

export default async function PersonalPage({searchParams}:{searchParams?:Promise<Record<string,string|string[]|undefined>>}) {
  const p=await searchParams; const locale=resolveLocale(typeof p?.lang==="string"?p.lang:undefined); const t=copy[locale];
  const session=await getCurrentSession();
  if(!session) return <AppShell locale={locale} active="personal">
    <section className="auth-card card"><div className="overline">{t.personal}</div><h1>{locale==="fa"?"لایهٔ شخصی":"Personal layer"}</h1><p className="prose">{locale==="fa"?"برای دیدن و نگهداری رویدادها و خاطرات شخصی وارد حساب شو.":"Sign in to manage your personal events and memories."}</p><div style={{display:"flex",gap:8}}><Link className="primary-button" href={`/login?lang=${locale}`}>{t.signIn}</Link><Link className="secondary-button" href={`/register?lang=${locale}`}>{t.signUp}</Link></div></section>
  </AppShell>;
  try {
    const data=await application.personal(personalRepository).listOverview(session.userId);
    return <AppShell locale={locale} active="personal">
      <section className="hero-panel"><div className="overline">{t.personal}</div><h1 style={{margin:"8px 0"}}>{session.userId.slice(0,8)}</h1><form action={signOutAction}><button className="secondary-button" type="submit">{t.logout}</button></form></section>
      <div className="two-col">
        <section className="stack"><div className="section-head"><h2>{t.addEvent}</h2></div>
          <form className="card detail-card form-stack" action={createPersonalEventAction}>
            <div className="field"><label>{locale==="fa"?"عنوان":"Title"}</label><input name="title" required /></div>
            <div className="field"><label>{locale==="fa"?"نوع":"Type"}</label><select name="type" defaultValue="custom"><option value="birthday">birthday</option><option value="anniversary">anniversary</option><option value="custom">custom</option></select></div>
            <div className="two-col"><div className="field"><label>Year</label><input name="year" type="number" defaultValue={2585} required /></div><div className="field"><label>Month</label><input name="month" type="number" min="1" max="12" defaultValue={7} required /></div></div>
            <div className="field"><label>Day</label><input name="day" type="number" min="1" max="31" defaultValue={11} required /></div>
            <div className="field"><label>{locale==="fa"?"یادداشت":"Notes"}</label><textarea name="notes" rows={3}/></div>
            <button className="primary-button" type="submit">{locale==="fa"?"ذخیره":"Save"}</button>
          </form>
        </section>
        <section className="stack"><div className="section-head"><h2>{t.addMemory}</h2></div>
          <form className="card detail-card form-stack" action={createMemoryAction}>
            <div className="field"><label>{locale==="fa"?"عنوان":"Title"}</label><input name="title" /></div>
            <div className="field"><label>{locale==="fa"?"متن خاطره":"Memory"}</label><textarea name="text" rows={6} required/></div>
            <div className="two-col"><div className="field"><label>Year</label><input name="year" type="number" defaultValue={2585} required /></div><div className="field"><label>Month</label><input name="month" type="number" min="1" max="12" defaultValue={7} required /></div></div>
            <div className="field"><label>Day</label><input name="day" type="number" min="1" max="31" defaultValue={11} required /></div>
            <button className="primary-button" type="submit">{locale==="fa"?"ثبت خاطره":"Save memory"}</button>
          </form>
        </section>
      </div>
      <section><div className="section-head"><h2>{t.personal}</h2></div><div className="stack">
        {data.events.map(e=><article key={e.id} className="card detail-card"><div className="eyebrow">{e.type}</div><h3>{e.title}</h3><div className="meta-row"><span className="pill">{imperialDateLabel(e.date,locale)}</span></div></article>)}
        {data.memories.map(m=><article key={m.id} className="card detail-card"><div className="eyebrow">{t.memories}</div><h3>{m.title ?? ""}</h3><p className="prose">{m.text}</p></article>)}
        {!data.events.length && !data.memories.length?<div className="card empty">{t.noResults}</div>:null}
      </div></section>
    </AppShell>;
  } catch {
    return <AppShell locale={locale} active="personal"><div className="notice">{locale==="fa"?"حساب شناسایی شد، اما DATABASE_URL/دیتابیس برای لایهٔ شخصی در این محیط تنظیم نشده است.":"The account is recognized, but DATABASE_URL/database is not configured in this environment."}</div></AppShell>;
  }
}
