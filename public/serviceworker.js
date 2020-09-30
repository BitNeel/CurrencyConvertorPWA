const CACHE_NAME = "version4";
const urlsToCache = [
  "index.html",
  "offline.html",
  '/static/js/',
  '/static/css/'
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
            .then(res=>{
                    if(res){
                        console.log('Found ',event.request.url,' in cache');
                        return res;
                    }
                    console.log('Network req for ',event.request.url);
                    return fetch(event.request).then(response=>{
                        return caches.open(CACHE_NAME)
                                .then(cache=>{
                                    cache.put(event.request.url, response.clone());
                                    return response;
                                }).catch(err=>{
                                    console.log(err)
                                })
                    }).catch(err=>{
                        return caches.match('offline.html')
                    })
                    
                }).catch(err=>{
                    console.log(err);
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
