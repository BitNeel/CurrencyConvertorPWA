const CACHE_NAME = "version4";
const urlsToCache = [
  "index.html",
  "offline.html",
  "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
  "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js",
  "/static/js",
  "/static/css"
];
const self = this;
//installatin sw
self.addEventListener('install', (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache=>{
                console.log("opened cache");
                return cache.addAll(urlsToCache);
            })
    )
});
//listen for request
self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request)
            .then(async (res)=>{
                try {
                    if(res){
                        return res;
                    }
                    else{
                        return fetch(event.request);
                    }
                } catch (e) {
                    return await caches.match('offline.html');
                }
            })
    )
})
//activate sw
self.addEventListener('activate',(event)=>{

    const cacheWhiteList =[];
    cacheWhiteList.push(CACHE_NAME);
    event.waitUntil(
        caches.keys()
            .then(cacheNames=> Promise.all(
                cacheNames.map(cachename=>{
                    if(!cacheWhiteList.includes(cachename)){
                        return caches.delete(cachename);
                    }
                })
            ))
    )

})
