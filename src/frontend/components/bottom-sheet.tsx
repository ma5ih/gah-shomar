"use client";
import { useEffect } from "react";
export function BottomSheet({open,onClose,title,children}:{open:boolean;onClose:()=>void;title?:string;children:React.ReactNode}){
  useEffect(()=>{if(!open)return;const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape")onClose()};document.addEventListener("keydown",onKey);document.body.style.overflow="hidden";return()=>{document.removeEventListener("keydown",onKey);document.body.style.overflow=""}},[open,onClose]);
  if(!open)return null;
  return <div role="presentation" className="sheet-backdrop" onMouseDown={e=>{if(e.currentTarget===e.target)onClose()}}><section className="bottom-sheet" role="dialog" aria-modal="true" aria-label={title}><div className="sheet-handle"/>{title?<h2>{title}</h2>:null}{children}</section></div>;
}
