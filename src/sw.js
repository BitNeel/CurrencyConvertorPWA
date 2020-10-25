importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');
if(workbox){
    console.log("cdn fetched");
    console.log(workbox);
}
else{
    console.log("cdn too far");
}
const precacheManifest =[];
const countryConfig={
    cacheName:'countryList'
}
const convrateCache={
    cacheName:"conversionRate"
}
workbox.precaching.precacheAndRoute(precacheManifest);
workbox.routing.registerRoute(/.*countries/,new workbox.strategies.CacheFirst(countryConfig),'GET');
workbox.routing.registerRoute(/.*convert\?\w+/,new workbox.strategies.StaleWhileRevalidate(convrateCache),'GET');