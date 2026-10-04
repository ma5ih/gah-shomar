"use client";
import {useEffect,useState} from "react";
import type {Locale} from "../../application/types";
import {copy} from "../lib/i18n";

type DeferredInstallPrompt=Event&{
  prompt:()=>Promise<void>;
  userChoice:Promise<{outcome:"accepted"|"dismissed"}>;
};

const DISMISS_KEY="gah-shomar:pwa-install-dismissed";

function wasDismissed(){
  try{return window.localStorage.getItem(DISMISS_KEY)==="1";}catch{return false;}
}

export function PwaInstallPrompt({locale}:{locale:Locale}){
  const [deferredPrompt,setDeferredPrompt]=useState<DeferredInstallPrompt|null>(null);
  const [dismissed,setDismissed]=useState(false);
  const [installed,setInstalled]=useState(false);
  const c=copy[locale];

  useEffect(()=>{
    const onBeforeInstallPrompt=(event:Event)=>{
      event.preventDefault();
      if(wasDismissed())return;
      setDeferredPrompt(event as DeferredInstallPrompt);
    };
    const onInstalled=()=>{
      setInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt",onBeforeInstallPrompt);
    window.addEventListener("appinstalled",onInstalled);
    return()=>{
      window.removeEventListener("beforeinstallprompt",onBeforeInstallPrompt);
      window.removeEventListener("appinstalled",onInstalled);
    };
  },[]);

  if(installed||dismissed||!deferredPrompt)return <span hidden data-pwa-install-ready aria-hidden="true"/>;

  const install=async()=>{
    const prompt=deferredPrompt;
    await prompt.prompt();
    const choice=await prompt.userChoice;
    setDeferredPrompt(null);
    if(choice.outcome==="accepted")setInstalled(true);
  };

  const dismiss=()=>{
    setDismissed(true);
    try{window.localStorage.setItem(DISMISS_KEY,"1");}catch{
      // Ignore storage failures; the prompt is hidden for this session.
    }
  };

  return <><span hidden data-pwa-install-ready aria-hidden="true"/><aside className="install-prompt" role="status" aria-live="polite">
    <div className="install-prompt-copy">
      <strong>{c.installApp}</strong>
      <span>{c.installAppHint}</span>
    </div>
    <div className="install-prompt-actions">
      <button className="primary-button" type="button" onClick={()=>void install()}>{c.install}</button>
      <button className="secondary-button" type="button" onClick={dismiss}>{c.later}</button>
    </div>
  </aside></>;
}