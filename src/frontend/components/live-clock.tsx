"use client";
import {useEffect,useState} from "react";
import type {Locale} from "../../application/types";
import {clockLabel} from "../lib/format";
export function LiveClock({locale,timeZone}:{locale:Locale;timeZone:string}){
 const[now,setNow]=useState<Date|null>(null);
 useEffect(()=>{const tick=()=>setNow(new Date());tick();const id=window.setInterval(tick,30000);return()=>window.clearInterval(id)},[]);
 return <span>{clockLabel(now??new Date(),locale,timeZone)}</span>;
}