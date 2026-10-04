import type {Locale} from "../../application/types";import type {ImperialDate} from "../../domain/calendar/types";import {weekdayLabelsFa} from "../../application/calendar";
const monthFa=["","فروردین","اردیبهشت","خرداد","تیر","اَمرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسپند"] as const;
const monthEn=["","Farvardin","Ordibehesht","Khordad","Tir","Amordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"] as const;
const weekdayEn:Record<string,string>={saturday:"Saturday",sunday:"Sunday",monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday"};
const faNumber=new Intl.NumberFormat("fa-IR");
export function numberFor(locale:Locale,n:number){return locale==="fa"?faNumber.format(n):String(n)}
export function monthNameLabel(month:number,locale:Locale){const names=locale==="fa"?monthFa:monthEn;return names[month]??String(month)}
export function imperialDateLabel(date:ImperialDate,locale:Locale){const month=(locale==="fa"?monthFa[date.month]:monthEn[date.month]);return locale==="fa"?`${numberFor(locale,date.day)} ${month} ${numberFor(locale,date.year)}`:`${month} ${date.day}, ${date.year}`}
export function weekdayLabel(locale:Locale,weekday:string){return locale==="fa"?weekdayLabelsFa[weekday as keyof typeof weekdayLabelsFa]??weekday:weekdayEn[weekday]??weekday}
export function gregorianLabel(date:{year:number;month:number;day:number},locale:Locale){return new Intl.DateTimeFormat(locale==="fa"?"fa-IR":"en-US",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}).format(new Date(Date.UTC(date.year,date.month-1,date.day)))}
