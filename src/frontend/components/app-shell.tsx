import Link from "next/link";
import type {Locale} from "../../application/types";
import {copy} from "../lib/i18n";
import {LocaleBoundary} from "./locale-boundary";
import {LocaleSwitcher} from "./locale-switcher";
import {PwaInstallPrompt} from "./pwa-install-prompt";

type IconName="today"|"calendar"|"events"|"timeline"|"search"|"personal";

function NavIcon({name}:{name:IconName}){
  if(name==="today")return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></svg>;
  if(name==="calendar")return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M7.5 3.5v4M16.5 3.5v4M3.5 9.5h17M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01M16 16.5h.01"/></svg>;
  if(name==="events")return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.3 5.2L20 10l-5.7 1.8L12 17l-2.3-5.2L4 10l5.7-1.8L12 3Z"/><path d="m19 16 .8 1.8L22 18.5l-2.2.7L19 21l-.8-1.8-2.2-.7L19 16Z"/></svg>;
  if(name==="timeline")return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v16M7 8h11l-3-3M7 16h11l-3 3"/></svg>;
  if(name==="search")return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c.7-3.7 3.1-5.6 7-5.6s6.3 1.9 7 5.6"/></svg>;
}

export function AppShell({locale,active,children}:{locale:Locale;active:IconName;children:React.ReactNode}){
  const c=copy[locale];
  const links=[["today","/",c.today],["calendar","/calendar",c.calendar],["events","/events",c.events],["timeline","/timeline",c.timeline],["search","/search",c.search],["personal","/personal",c.personal]] as const;
  return <LocaleBoundary locale={locale}>
    <div className="app-shell" dir={locale==="fa"?"rtl":"ltr"} lang={locale}>
      <header className="topbar">
        <Link className="brand" href={"/?lang="+locale} aria-label="گاه‌شمار"><span className="brand-mark" aria-hidden="true"/><span>گاه‌شمار</span></Link>
        <nav className="toplinks" aria-label={locale==="fa"?"ناوبری اصلی":"Main navigation"}>
          {links.slice(0,5).map(([id,href,label])=><Link key={id} className={active===id?"nav-link active":"nav-link"} href={href+"?lang="+locale} aria-current={active===id?"page":undefined}>{label}</Link>)}
        </nav>
        <div className="top-actions"><LocaleSwitcher locale={locale}/><Link className="profile-chip" href={"/personal?lang="+locale}>{c.personal}</Link></div>
      </header>
      <main className="app-content"><div className="route-stage">{children}</div></main>
      <PwaInstallPrompt locale={locale}/>
      <nav className="bottom-nav" aria-label={locale==="fa"?"ناوبری برنامه":"App navigation"}>
        <div className="bottom-nav-inner">
          {links.map(([id,href,label])=><Link key={id} className={active===id?"bottom-link active":"bottom-link"} href={href+"?lang="+locale} aria-current={active===id?"page":undefined}><span className="bottom-icon"><NavIcon name={id}/></span><span>{label}</span></Link>)}
        </div>
      </nav>
    </div>
  </LocaleBoundary>;
}