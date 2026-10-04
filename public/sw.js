const CACHE_NAME="gah-shomar-shell-v3";
const OFFLINE_URL="/offline";
const PRECACHE_URLS=[OFFLINE_URL,"/manifest.webmanifest","/icon.svg","/icon-192.png","/icon-512.png"];

self.addEventListener("install",(event)=>{
 event.waitUntil(caches.open(CACHE_NAME).then((cache)=>cache.addAll(PRECACHE_URLS)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate",(event)=>{
 event.waitUntil(
  caches.keys()
   .then((keys)=>Promise.all(keys.filter((key)=>key!==CACHE_NAME).map((key)=>caches.delete(key))))
   .then(()=>self.clients.claim())
 );
});

self.addEventListener("fetch",(event)=>{
 const request=event.request;
 if(request.method!=="GET"||new URL(request.url).origin!==self.location.origin)return;

 if(request.mode==="navigate"){
  event.respondWith(
   fetch(request)
    .then((response)=>{
     const copy=response.clone();
     void caches.open(CACHE_NAME).then((cache)=>cache.put(request,copy));
     return response;
    })
    .catch(()=>caches.match(request).then((cached)=>cached||caches.match(OFFLINE_URL)))
  );
  return;
 }

 if(request.url.includes("/api/")||request.url.includes("_next/"))return;

 event.respondWith(
  caches.match(request)
   .then((cached)=>cached||fetch(request).then((response)=>{
    const copy=response.clone();
    void caches.open(CACHE_NAME).then((cache)=>cache.put(request,copy));
    return response;
   }))
   .catch(()=>caches.match(OFFLINE_URL))
 );
});
