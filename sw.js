if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4d30eff7"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/next-js-mui-pwa-starter/_next/static/Hf7SC_J-CM03n9DuQ3QBE/_buildManifest.js",revision:"77d72c61fef1348ed6388c020bb2852c"},{url:"/next-js-mui-pwa-starter/_next/static/Hf7SC_J-CM03n9DuQ3QBE/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/next-js-mui-pwa-starter/_next/static/chunks/106-16ad93b8e2ebc5a5.js",revision:"16ad93b8e2ebc5a5"},{url:"/next-js-mui-pwa-starter/_next/static/chunks/framework-b3ca2e9a9574e304.js",revision:"b3ca2e9a9574e304"},{url:"/next-js-mui-pwa-starter/_next/static/chunks/main-8c8ff7cd4b412145.js",revision:"8c8ff7cd4b412145"},{url:"/next-js-mui-pwa-starter/_next/static/chunks/pages/_app-aaaa2c1540430650.js",revision:"aaaa2c1540430650"},{url:"/next-js-mui-pwa-starter/_next/static/chunks/pages/_error-2f20982ef97ff8ce.js",revision:"2f20982ef97ff8ce"},{url:"/next-js-mui-pwa-starter/_next/static/chunks/pages/index-50a38235b97463e5.js",revision:"50a38235b97463e5"},{url:"/next-js-mui-pwa-starter/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/next-js-mui-pwa-starter/_next/static/chunks/webpack-c729839ca4f95893.js",revision:"c729839ca4f95893"},{url:"/next-js-mui-pwa-starter/_next/static/css/ef4af9323c0103e3.css",revision:"ef4af9323c0103e3"},{url:"/next-js-mui-pwa-starter/favicon.ico",revision:"210dffa07397802f5015567d458b2b35"},{url:"/next-js-mui-pwa-starter/icons/icon-192x192.png",revision:"c6739ef9e4a6efb484ee9e185ac11059"},{url:"/next-js-mui-pwa-starter/icons/icon-384x384.png",revision:"5805ce51cdab7096296426385962e87d"},{url:"/next-js-mui-pwa-starter/icons/icon-512x512.png",revision:"6fbcd8d0577ec2563c216814ab2ddec9"},{url:"/next-js-mui-pwa-starter/manifest.json",revision:"3f3b48641bacdc9410f132bc7023de60"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/next-js-mui-pwa-starter",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
