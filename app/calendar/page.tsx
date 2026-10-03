import Link from "next/link";
import { AppShell } from "@/frontend/components/app-shell";
import { CalendarGrid } from "@/frontend/components/calendar-grid";
import { CalendarNavigator } from "@/frontend/components/calendar-navigator";
import { getTodayState } from "@/application/today";
import { getMonthQuery,shiftMonth } from "@/application/calendar";
import { resolveLocale } from "@/application/locale";
import { getCurrentSession } from "@/application/session";
import { personalRepository } from "@/data/db/repositories";
import { copy } from "@/frontend/lib/i18n";
import { monthName } from "@/domain/calendar/month";
export const dynamic="force-dynamic";
export default async function CalendarPage({searchParams}:{searchParams?:Promise<Record<string,string|string[]|undefined>>}){
  const p=await searchParams;const locale=resolveLocale(typeof p?.lang==="string"?p.lang:undefined);const today=(await getTodayState()).context.imperialDate;const session=await getCurrentSession();
  const year=typeof p?.year==="string"?Number(p.year):today.year;const month=typeof p?.month==="string"?Number(p.month):today.month;
  const model=await getMonthQuery(year,month,today,session?.userId,session?personalRepository:undefined);const prev=shiftMonth(year,month,-1);const next=shiftMonth(year,month,1);const c=copy[locale];
  const href=(d:{year:number;month:number})=>`/calendar?lang=${locale}&year=${d.year}&month=${d.month}`;
  return <AppShell locale={locale} active="calendar"><div className="section-head"><div><div className="overline">{locale==="fa"?"ماه":"Month"}</div><h1 style={{margin:"6px 0 0",letterSpacing:"-.04em"}}>{monthName(month as 1|2|3|4|5|6|7|8|9|10|11|12)}</h1></div></div><CalendarNavigator previousHref={href(prev)} nextHref={href(next)} previousLabel={c.previous} nextLabel={c.next}><CalendarGrid model={model} locale={locale}/></CalendarNavigator><Link className="secondary-button" style={{justifySelf:"start"}} href={`/?lang=${locale}`}>{c.backToday}</Link></AppShell>;
}
