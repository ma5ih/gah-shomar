"use client";
import { useState } from "react";
import type { PersonalShareCardDto } from "@/application/share-card";
import { imperialDateLabel, weekdayLabel } from "@/frontend/lib/format";

export function ShareCardButton({dto,locale}:{dto:PersonalShareCardDto;locale:"fa"|"en"}){
  const [busy,setBusy]=useState(false);
  async function share(){
    setBusy(true);
    try{
      const canvas=document.createElement("canvas");canvas.width=1200;canvas.height=630;const ctx=canvas.getContext("2d");if(!ctx)throw new Error("Canvas unavailable");
      const g=ctx.createLinearGradient(0,0,1200,630);g.addColorStop(0,"#f4e6d9");g.addColorStop(1,"#e9ddd0");ctx.fillStyle=g;ctx.fillRect(0,0,1200,630);
      ctx.fillStyle="#25221f";ctx.font="700 30px system-ui";ctx.fillText("گاه‌شمار",70,80);
      ctx.font="700 64px system-ui";ctx.fillText(dto.title.slice(0,26),70,190);
      ctx.font="500 34px system-ui";ctx.fillText(imperialDateLabel(dto.imperialDate,locale),70,270);
      ctx.font="500 28px system-ui";ctx.fillStyle="#756f68";ctx.fillText(weekdayLabel(locale,dto.weekday),70,320);
      ctx.font="500 22px system-ui";ctx.fillText(locale==="fa"?"یک یادگار شخصی":"A personal moment",70,560);
      const blob=await new Promise<Blob|null>(resolve=>canvas.toBlob(resolve,"image/png"));
      if(!blob)throw new Error("Image creation failed");
      const file=new File([blob],"gah-shomar-share.png",{type:"image/png"});
      if("share" in navigator&&"canShare" in navigator&&navigator.canShare({files:[file]})){await navigator.share({title:dto.title,files:[file]});}
      else{const a=document.createElement("a");a.download=file.name;a.href=URL.createObjectURL(blob);a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
    }finally{setBusy(false)}
  }
  return <button className="secondary-button" type="button" onClick={share} disabled={busy}>{busy?(locale==="fa"?"در حال ساخت…":"Creating…"):(locale==="fa"?"اشتراک‌گذاری کارت":"Share card")}</button>;
}
