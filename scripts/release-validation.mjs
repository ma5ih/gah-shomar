const base=process.env.BASE_URL;
if(!base) throw new Error("BASE_URL is required");
const url=new URL(base);
if(!/^https?:$/.test(url.protocol)) throw new Error("BASE_URL must use http or https");
const normalized=url.toString().replace(/\/$/,"");

const paths=[
  "/?lang=en",
  "/calendar?lang=en&year=2465&month=5",
  "/timeline?lang=en",
  "/search?lang=en&q=Re%C5%BE%C4%81%20Shah%20Pahlavi",
  "/manifest.webmanifest",
  "/sw.js",
  "/icon-192.png",
  "/icon-512.png"
];

async function get(path){
  const response=await fetch(normalized+path,{redirect:"manual"});
  if(response.status<200||response.status>=400) throw new Error(path+" returned HTTP "+response.status);
  return response;
}

const results=[];
for(const path of paths){
  const response=await get(path);
  results.push({path,status:response.status,contentType:response.headers.get("content-type")||""});
  if(path==="/manifest.webmanifest"){
    const manifest=await response.json();
    if(manifest.display!=="standalone") throw new Error("manifest.display must be standalone");
    if(manifest.lang!=="fa") throw new Error("manifest.lang must be fa");
    if(manifest.dir!=="rtl") throw new Error("manifest.dir must be rtl");
    if(!Array.isArray(manifest.icons)||manifest.icons.length<2) throw new Error("manifest must expose at least two icons");
  }
  if(path==="/sw.js"){
    const body=await response.text();
    if(!body.includes("cache")) throw new Error("service worker does not look like a cache-enabled production worker");
  }
}
console.log(JSON.stringify({base:normalized,checks:results},null,2));
