let cacheData="appV1"
this.addEventListener("install",(evt)=>{
evt.waitUntil(
    caches.open(cacheData).than((cache)=>{
        cache.addAll([
            "/static/js/bundle.js",
            "/images/main.jpg",
            "/manifest.json",
            "/images/logo.jpg",
            "/"
        ])
    })
)
})  

this.addEventListener("fetch",(event)=>{
event.respondWith(
    caches.match(event.request).than((result)=>{
        if (result) {
            return result
        }
    })
)
})