"use strict";var precacheConfig=[["/portfolio/index.html","d8e20230c2ad5b7507762cc50217f8e1"],["/portfolio/static/css/main.c4786df1.css","dd703fab269ba0e14b54f553daf328c5"],["/portfolio/static/js/main.478adacd.js","88bc99a646b58a3cf360e00b0f4d6f0a"],["/portfolio/static/media/COVID.0685327b.jpg","0685327bad5eeb03ebda59c4e5b19ffc"],["/portfolio/static/media/Dev_talks.b76d63af.jpg","b76d63af45090d62aa7a8d767c3d0386"],["/portfolio/static/media/api.af5bcb53.svg","af5bcb5320435c1b14aa7715324e83ec"],["/portfolio/static/media/blinking.8931471b.JPG","8931471bc5121c5f5f684e080ef9fe8b"],["/portfolio/static/media/chatapp.6b5433ec.JPG","6b5433ec6558cf134d5f6c33b724bac2"],["/portfolio/static/media/color_classification.f69a82f6.jpg","f69a82f60f211b15f91ad1897d867b69"],["/portfolio/static/media/computer.dbf99f7e.svg","dbf99f7e6a154d16e1f0769cb71c5440"],["/portfolio/static/media/facebook.cb38f459.svg","cb38f459cbdbfa6166d25cce87c48098"],["/portfolio/static/media/github.70105628.svg","70105628979ca80e191e8b6e99099e9a"],["/portfolio/static/media/hardware_store.4ba98a82.jpg","4ba98a823d931f922f94ff80977e61b0"],["/portfolio/static/media/instagram.5f3d83bc.svg","5f3d83bccbfb7526df60406639de4f72"],["/portfolio/static/media/linkedin.06a103a4.svg","06a103a4c58945c7b9f25f4824cf4a2e"],["/portfolio/static/media/new_year.82f6dd4a.jpg","82f6dd4ae54df664f0154e3465f7e2e7"],["/portfolio/static/media/pin.bfe27b83.svg","bfe27b83609d0a2ac1626528ceffe8c9"],["/portfolio/static/media/portfolio.45b48090.JPG","45b48090de6a5fe37055f98339319dc4"],["/portfolio/static/media/repair.b228a185.svg","b228a18547a3156e4eda63817f85d88a"],["/portfolio/static/media/resume.2942bfab.pdf","2942bfabb3d05332b66eb128e0842cff"],["/portfolio/static/media/tie.ee5af16b.svg","ee5af16ba6d2e5061f977280c029be25"],["/portfolio/static/media/tweetme.2185e423.PNG","2185e423b1c8b70c671e1c927b95d4cd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});