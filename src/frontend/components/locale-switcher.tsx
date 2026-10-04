"use client";

import {usePathname} from "next/navigation";
import type {Locale} from "../../application/types";

export function LocaleSwitcher({locale}:{locale:Locale}){
  const pathname=usePathname();
  const target:Locale=locale==="fa"?"en":"fa";
  const fallbackHref=`${pathname}?lang=${target}`;
  const preserveCurrentQuery=(event:React.MouseEvent<HTMLAnchorElement>)=>{
    if(event.defaultPrevented||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.button!==0)return;
    event.preventDefault();
    const url=new URL(window.location.href);
    url.searchParams.set("lang",target);
    window.location.assign(url.pathname+`?${url.searchParams.toString()}`);
  };
  return <a className="lang-chip" href={fallbackHref} onClick={preserveCurrentQuery}>{target==="en"?"EN":"FA"}</a>;
}
