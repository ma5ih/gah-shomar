"use client";

import Link from "next/link";
import {usePathname,useSearchParams} from "next/navigation";
import type {Locale} from "../../application/types";

export function LocaleSwitcher({locale}:{locale:Locale}){
  const pathname=usePathname();
  const searchParams=useSearchParams();
  const target:Locale=locale==="fa"?"en":"fa";
  const params=new URLSearchParams(searchParams.toString());
  params.set("lang",target);
  const href=`${pathname}?${params.toString()}`;
  return <Link className="lang-chip" href={href}>{target==="en"?"EN":"FA"}</Link>;
}
