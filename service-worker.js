const CACHE="etoiles-taounate-v3";
const ASSETS=["./","./index.html","./manifest.json","./offline.html","./assets/logo.jpg","./assets/icon-192.png","./assets/icon-512.png","./assets/favicon.png","./data/seed.json"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET") return;
 e.respondWith(caches.match(e.request).then(cached=>{
   if(cached)return cached;
   return fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r})
     .catch(()=>caches.match("./offline.html"));
 }));
});