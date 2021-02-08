!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/ts-jest/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter((e=>t in e)),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map((e=>e.url)));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map((({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})}));await Promise.all(o);return{updatedURLs:n.map((e=>e.url)),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"c7ddae93c2548b7c4a322f5cefc623d1","url":"00e7239c.40e7d2dc.js"},{"revision":"345031cffd7bdb4d10f212d2a01f1825","url":"03be7dae.bdb9dd90.js"},{"revision":"fd6ff55e6f6a440a1573d73e65137dcb","url":"1.f8e10754.js"},{"revision":"c5f5e8d38446119a923ec69eb25d0fe1","url":"10aeaaf3.8a48cd88.js"},{"revision":"ea169609b3782361e675eb91adf2fde8","url":"1165ba55.0ba5e667.js"},{"revision":"db6004f3af54a25dcfa9a5da4f3cbb21","url":"17896441.0b3c1b77.js"},{"revision":"6ecd1acde055733efcbc63b1bcae6780","url":"1854c3e7.4800fbf4.js"},{"revision":"e7d1ab62229693ead41f6f41382b566b","url":"18b93cb3.88485b96.js"},{"revision":"dd6bd2d254aeb99aa3bfa059eb0d61f3","url":"2.b67579ef.js"},{"revision":"c492a3997d026f082637a09fc66e47bd","url":"295b567d.46877cfa.js"},{"revision":"ab70a54060e8da405023fb2831cb7d16","url":"2b94ed59.17155a27.js"},{"revision":"7e6bcba9c17bd10d352da8674538f94b","url":"2bccb399.bac163f5.js"},{"revision":"c0e0fda257c63263e0f1c04cbba6f041","url":"3bfdd655.709c5a32.js"},{"revision":"8198b01559ae4240b6ce949f51d80e97","url":"3e930f87.6ad93a40.js"},{"revision":"67bd6c0eb3e232fdaff1e62a1a970bcf","url":"404.html"},{"revision":"897045f063aceab68a3fba9220eb1d2c","url":"4040fa6b.14a647b6.js"},{"revision":"70d88df73b068345062897b39a934cfa","url":"44207808.eca22c3f.js"},{"revision":"d6bd948ed40acc442f3833df80272a9b","url":"44d840ac.1e65f7df.js"},{"revision":"fe042db00b33627a17abc5d290216f9a","url":"4aabdf82.093c0681.js"},{"revision":"cdbdd7ec68deb09c824046d2b0196435","url":"4c23203f.bd83017a.js"},{"revision":"939d7de307fc654b9855b4e3374ecc44","url":"4d54d076.95a04279.js"},{"revision":"d8bb7e2e4b551fcd69b9412dd40dfb89","url":"4e0c07c5.f4adc692.js"},{"revision":"0c4cf653eb2d3485da22680a80039cb7","url":"544d8072.6aae5565.js"},{"revision":"6fbc5f88e00397b6a5009e1b9409cb55","url":"54f44165.7795bb2c.js"},{"revision":"fe60f7162de2271b170f808f5cc6391c","url":"55.cf8d47e9.js"},{"revision":"82e22adaa7403a1f563fe69dde726bbd","url":"56.a4f2af51.js"},{"revision":"84b18fd7ca1b152af14ee22ae8534e82","url":"57.56b91393.js"},{"revision":"e53c310f876efad1335534456bfad348","url":"58.e3ce7f7b.js"},{"revision":"ecaf0d03926c19919bf5b4ca5f181310","url":"59.f0a5c635.js"},{"revision":"3552655ce62a223155e13bb147a92ddb","url":"5bf3837a.4e186f11.js"},{"revision":"0bb0a4305f5acf7a9affac23ebe34b0d","url":"61b42bb5.2b57f406.js"},{"revision":"d8901e8be931c561803387af2dd6d155","url":"6789ef91.17d7e852.js"},{"revision":"18d8880006b9357300a1b4207c332951","url":"6cb85840.abcdabbe.js"},{"revision":"cd995a795329a5ad76cccde7de875ab2","url":"6f04af8d.cbc43f63.js"},{"revision":"22f5cdf0df6120d112b0357b13dbd0b7","url":"6f82a5f4.a7f32637.js"},{"revision":"dea4b0be1223e2fb96e5037ce6f161c9","url":"73f5a02c.32da2990.js"},{"revision":"e271c6d84fb6f40901fb5dd15470fe5b","url":"75ab14ad.78477356.js"},{"revision":"02f622e616c49003669499175f19f792","url":"7ec61308.94e0ae60.js"},{"revision":"c61629ee25457fdfd736381ca0549b7f","url":"86b5844b.95b03658.js"},{"revision":"ddc38aaa44c53539cb3dd1de95976951","url":"935f2afb.f88c60eb.js"},{"revision":"95fd3c85eb2edd58267e4289c87c458e","url":"978f87b1.7fe6de94.js"},{"revision":"280c9b40ea69879dc6e8f3151551158b","url":"9920b385.270faf8e.js"},{"revision":"9abece05da5724a45af06dfa6cbfe16d","url":"a09c2993.86b1fecd.js"},{"revision":"3139ea59d7606edcdfb791c1a4318de8","url":"aaf1bd4c.a425ab98.js"},{"revision":"9b6446b4c918c54019f43520410606af","url":"c1a7450f.89db4612.js"},{"revision":"ca2bfc41a0f4fb2e2144f53de8b71142","url":"c4f5d8e4.b1dfa96a.js"},{"revision":"6cb243ded1d3786822b3a7015431b2e0","url":"ceaad8ca.483825cd.js"},{"revision":"c0c61f639f4b1341e1a048e4f8fb2618","url":"d4836a8e.d37132e7.js"},{"revision":"17e40f3a7e8589c458b9e02f5357ffa0","url":"d9f7da4b.f04214ee.js"},{"revision":"5814252c073a7eb3daa2f3aab3eaced4","url":"dcbdd84f.0c937510.js"},{"revision":"7080c7c805698dd2d246f6b054c74104","url":"docs/babel7-or-ts/index.html"},{"revision":"6d1c1d8eb8af58894bbd9571f3513d97","url":"docs/contributing/index.html"},{"revision":"1f13e6e2252ed295174644dee571ae30","url":"docs/debugging/index.html"},{"revision":"e6b1d092ee0d6b0e4aaa25ed3095aaa1","url":"docs/getting-started/installation/index.html"},{"revision":"c9a6f4888d8a80116cade4e7c1743123","url":"docs/getting-started/options/astTransformers/index.html"},{"revision":"086449ee318e1997a97773d2acad01b8","url":"docs/getting-started/options/babelConfig/index.html"},{"revision":"17f5a52f00b8a175694590a5a80f85d1","url":"docs/getting-started/options/compiler/index.html"},{"revision":"34edfe7716df5afe6d30514ee19b0023","url":"docs/getting-started/options/diagnostics/index.html"},{"revision":"ed14c7e0707cd94724c31f4ec36b0a60","url":"docs/getting-started/options/index.html"},{"revision":"b9976df30c2c0e387c3a168217f79c35","url":"docs/getting-started/options/isolatedModules/index.html"},{"revision":"1bb09784b98dbbf68ba12cebebaaeddc","url":"docs/getting-started/options/stringifyContentPathRegex/index.html"},{"revision":"cb22eb9dc1dc70644e1eb45b03c97416","url":"docs/getting-started/options/tsconfig/index.html"},{"revision":"7e7404e5da308f6a985fae0134712f3b","url":"docs/getting-started/paths-mapping/index.html"},{"revision":"ddbe61c5cc7bb2b241071e4cecfa05ce","url":"docs/getting-started/presets/index.html"},{"revision":"afba6f70c0698a35e7b6d3bcadfab0f3","url":"docs/getting-started/version-checking/index.html"},{"revision":"4ca35d622d93ecc7983ba817d1ee5460","url":"docs/guides/esm-support/index.html"},{"revision":"fe5915cccf79eb94209f6960b4a95e14","url":"docs/guides/react-native/index.html"},{"revision":"72d1a10a4f782313ca316fac2d856ea1","url":"docs/guides/test-helpers/index.html"},{"revision":"fb25f1fc1405b2a3d4fe8f4562f14604","url":"docs/guides/troubleshooting/index.html"},{"revision":"92f0bf8b96560f51427573e2288145f5","url":"docs/index.html"},{"revision":"5aa58d41f8711ce28608b5078abe6862","url":"docs/migration/index.html"},{"revision":"a85a782469a302a06c7607ab952aa566","url":"docs/next/babel7-or-ts/index.html"},{"revision":"7b849db6b8c68ffecb37e52dd5210370","url":"docs/next/contributing/index.html"},{"revision":"aebbbc81e5f96dfc86ee41a409f4d965","url":"docs/next/debugging/index.html"},{"revision":"76a5805161781bc3a9789fa76ebf03d7","url":"docs/next/getting-started/installation/index.html"},{"revision":"536cb99eb945bf85798839f4168a1b35","url":"docs/next/getting-started/options/astTransformers/index.html"},{"revision":"12e05ac751bc65f2145805143a5dbf69","url":"docs/next/getting-started/options/babelConfig/index.html"},{"revision":"2692e006d84aef42d48a9914cf899f8c","url":"docs/next/getting-started/options/compiler/index.html"},{"revision":"0b7c77a625dfcbd062d55381df3288ac","url":"docs/next/getting-started/options/diagnostics/index.html"},{"revision":"3512fbc540292fd70d0e62d293e4ca81","url":"docs/next/getting-started/options/index.html"},{"revision":"88a44fc7c6f99588473921d9873333f4","url":"docs/next/getting-started/options/isolatedModules/index.html"},{"revision":"f2f78af2e1ff6a641bcdc9406bed203d","url":"docs/next/getting-started/options/stringifyContentPathRegex/index.html"},{"revision":"852e4d9910b9f0f5edc903311828cf83","url":"docs/next/getting-started/options/tsconfig/index.html"},{"revision":"d45742fb09ddd15742889924119900c4","url":"docs/next/getting-started/options/useESM/index.html"},{"revision":"389ed2e0c37f39301776e76a81e6a159","url":"docs/next/getting-started/paths-mapping/index.html"},{"revision":"5d7f3e9ac9f7f8aad20028819cb834f2","url":"docs/next/getting-started/presets/index.html"},{"revision":"3bf917fad4abd8649ccd50d4d92570c5","url":"docs/next/getting-started/version-checking/index.html"},{"revision":"6615c2e48119341a9380bf8a9be0c5ff","url":"docs/next/guides/esm-support/index.html"},{"revision":"47940344ace472e8b0db6025dcaf3f6a","url":"docs/next/guides/react-native/index.html"},{"revision":"64086f2df7249ee68934f3d0a2a65042","url":"docs/next/guides/test-helpers/index.html"},{"revision":"5acd314af4a64265c45c7be2715291dd","url":"docs/next/guides/troubleshooting/index.html"},{"revision":"50d3d4681ad3a08a8fcca221ae48455c","url":"docs/next/index.html"},{"revision":"9c4938669ee1b9e027944c4639e7fd18","url":"docs/next/migration/index.html"},{"revision":"f151deed0d996cf23a755666e1fdba58","url":"docs/next/processing/index.html"},{"revision":"a925060d28d5e7bca2359852d738295b","url":"docs/processing/index.html"},{"revision":"77786001c4202828fd3960373e9b4a39","url":"e5e34c6b.cb3d235d.js"},{"revision":"dd3d6e15c2bcc171757c18b97007e26d","url":"e8b13364.5107bfab.js"},{"revision":"a9cd50942cffed969fc8e037bd1c71fd","url":"eabdbf07.fd443f68.js"},{"revision":"5b1b2a67cb3bbd8ec117e2bd3624cbeb","url":"ec6c7123.226bb80c.js"},{"revision":"46dc336dd527c8ee3d3ddf7a121cb4e0","url":"f6aab920.c2aa3c37.js"},{"revision":"58baab06fed117e5ef6d7b7191418be0","url":"f7862b07.aa9f7902.js"},{"revision":"7443db3a6713ea71dbeab7c253a59357","url":"f7cb2af4.b46b92b1.js"},{"revision":"7aa9db0703cd9f5b29e85877c3868a94","url":"fc80686b.803d5029.js"},{"revision":"f05efea32f31ab6ba84660533f6cad0f","url":"index.html"},{"revision":"566b8546b3af90286445cf275e93661c","url":"main.a1a241bc.js"},{"revision":"9e8f0f55a28f3749d7906e2dbfbee02d","url":"manifest.json"},{"revision":"ba757328069bddc75b4ff2f8ee8d2c4f","url":"runtime~main.cee2b560.js"},{"revision":"a4d4e7bfcabae6808cbd6943557f0ab1","url":"styles.1ba54064.css"},{"revision":"bfab4686b868936ecb5555bb95c963f7","url":"styles.88e661ab.js"},{"revision":"abc65cabbc45e2d5047498b13a7b52f3","url":"versions/index.html"},{"revision":"f8389ca1a741a115313bede9ac02e2c0","url":"img/discord.svg"},{"revision":"5e0e02d0c0f021b2037ed926d68ea1be","url":"img/documentation.png"},{"revision":"a83841c50aa67da6144860bd5031cc53","url":"img/github.png"},{"revision":"6428a0814289f7ba7e3a2134c0f68e1f","url":"img/logo.png"},{"revision":"b9ffd6386b8922473cd7218fb79f11b4","url":"img/logo.svg"},{"revision":"ee83b65c3aed4a45b928a4bebeb97a98","url":"img/pull-request.png"},{"revision":"cce226b035fb4ab5eee43b077db1ba4a","url":"img/troubleshooting.png"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){}(),self.addEventListener("install",(e=>{e.waitUntil(n.install())})),self.addEventListener("activate",(e=>{e.waitUntil(n.activate())})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(`${n.href}index.html`):t.push(`${n.href}/index.html`)),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}})),self.addEventListener("message",(async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()}))})()}]);