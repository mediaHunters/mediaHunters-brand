if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>c(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/GFJwlnutnFmuvkH3L2BYK/_buildManifest.js",revision:"83ba642b62ff6362728fbf5584241a3a"},{url:"/_next/static/GFJwlnutnFmuvkH3L2BYK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-c04db3ae1761960e.js",revision:"c04db3ae1761960e"},{url:"/_next/static/chunks/114.1c05dddc102309b3.js",revision:"1c05dddc102309b3"},{url:"/_next/static/chunks/203.c189b230646c732e.js",revision:"c189b230646c732e"},{url:"/_next/static/chunks/31664189.b044ecae9a132178.js",revision:"b044ecae9a132178"},{url:"/_next/static/chunks/319.e2dfa359d9d02787.js",revision:"e2dfa359d9d02787"},{url:"/_next/static/chunks/347.b8443c21f93472f1.js",revision:"b8443c21f93472f1"},{url:"/_next/static/chunks/348.14bec9baa91a90f5.js",revision:"14bec9baa91a90f5"},{url:"/_next/static/chunks/402.746389bb7be96961.js",revision:"746389bb7be96961"},{url:"/_next/static/chunks/439.2f1520b0e0eb8042.js",revision:"2f1520b0e0eb8042"},{url:"/_next/static/chunks/454.c9dbee6d0083b79e.js",revision:"c9dbee6d0083b79e"},{url:"/_next/static/chunks/459.a74fcf54590e7e83.js",revision:"a74fcf54590e7e83"},{url:"/_next/static/chunks/47-75212ccfc946c219.js",revision:"75212ccfc946c219"},{url:"/_next/static/chunks/473.4293d0b83b6c1d77.js",revision:"4293d0b83b6c1d77"},{url:"/_next/static/chunks/545f34e4.c1135ceb05436843.js",revision:"c1135ceb05436843"},{url:"/_next/static/chunks/558.ad1f9ab025f6e5af.js",revision:"ad1f9ab025f6e5af"},{url:"/_next/static/chunks/638.0bc9935178f8f021.js",revision:"0bc9935178f8f021"},{url:"/_next/static/chunks/66.7df678716cf37dea.js",revision:"7df678716cf37dea"},{url:"/_next/static/chunks/69.fce6428ad086cb58.js",revision:"fce6428ad086cb58"},{url:"/_next/static/chunks/854-851b46bfe54e0344.js",revision:"851b46bfe54e0344"},{url:"/_next/static/chunks/894.ef88c26203f15117.js",revision:"ef88c26203f15117"},{url:"/_next/static/chunks/92.3a9ad0cbdb8449d3.js",revision:"3a9ad0cbdb8449d3"},{url:"/_next/static/chunks/949-4e8e196c446780d4.js",revision:"4e8e196c446780d4"},{url:"/_next/static/chunks/970.bced2579562bcd62.js",revision:"bced2579562bcd62"},{url:"/_next/static/chunks/ae51ba48.ab5dc04df8c18d2d.js",revision:"ab5dc04df8c18d2d"},{url:"/_next/static/chunks/d7eeaac4-3e14c91f3e9ea496.js",revision:"3e14c91f3e9ea496"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-6b9a92a107eb8b9e.js",revision:"6b9a92a107eb8b9e"},{url:"/_next/static/chunks/pages/%5Bcollection%5D/%5Bslug%5D-f42f25a48b3acaf8.js",revision:"f42f25a48b3acaf8"},{url:"/_next/static/chunks/pages/404-205c47683ecd8b22.js",revision:"205c47683ecd8b22"},{url:"/_next/static/chunks/pages/_app-59fcbec1dec40093.js",revision:"59fcbec1dec40093"},{url:"/_next/static/chunks/pages/_error-b65b07626f400e2b.js",revision:"b65b07626f400e2b"},{url:"/_next/static/chunks/pages/blog-7ef0db7290458710.js",revision:"7ef0db7290458710"},{url:"/_next/static/chunks/pages/cookies-29d751f3417c1456.js",revision:"29d751f3417c1456"},{url:"/_next/static/chunks/pages/faq-06c13cc2b0ba2ff1.js",revision:"06c13cc2b0ba2ff1"},{url:"/_next/static/chunks/pages/index-fcb6b1007ba1d517.js",revision:"fcb6b1007ba1d517"},{url:"/_next/static/chunks/pages/pozycjonowanie-faaba88cc8746795.js",revision:"faaba88cc8746795"},{url:"/_next/static/chunks/pages/projekty-f2cede72dfd20564.js",revision:"f2cede72dfd20564"},{url:"/_next/static/chunks/pages/strony-internetowe-cennik-0d6e749eb03d9025.js",revision:"0d6e749eb03d9025"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e767df272e0e237b.js",revision:"e767df272e0e237b"},{url:"/_next/static/css/87ad194f431dc5d8.css",revision:"87ad194f431dc5d8"},{url:"/blog/images/1.png",revision:"e83dd7e1c2a68e485723f3a590a40281"},{url:"/blog/images/2.png",revision:"56e1a9c05e793b6c4f0a10c4fd9f7848"},{url:"/blog/images/3.png",revision:"56e1a9c05e793b6c4f0a10c4fd9f7848"},{url:"/blog/images/4.jpg",revision:"f2ae650bb745fa7fdd239aecca5f16f1"},{url:"/blog/images/5.png",revision:"1b245504d2ac50183ba4e4093befbe66"},{url:"/blog/images/6.png",revision:"54eb661bdf19fee5ecb9e8210207afaf"},{url:"/blog/images/7.jpg",revision:"f2ae650bb745fa7fdd239aecca5f16f1"},{url:"/blog/images/8.jpg",revision:"bd5b8be826f981fe49ecd8433209cfe8"},{url:"/icons/icon-128x128.png",revision:"41c31413aa0d65c715c0c7fb64d7ee9e"},{url:"/icons/icon-144x144.png",revision:"1c194db5765aaf462571fbe2dcce0815"},{url:"/icons/icon-152x152.png",revision:"2e4974feacf7d2ea4cd4cfcfb17d392f"},{url:"/icons/icon-192x192.png",revision:"f98ff03e875bafda30f2cb06bcd5a929"},{url:"/icons/icon-384x384.png",revision:"14812e9a4a3217306ff43859c3d35a4b"},{url:"/icons/icon-512x512.png",revision:"87cde02b631f4be3c9a287ac41f2ae93"},{url:"/icons/icon-72x72.png",revision:"c0e013ec41917c37c9763cf1c326317e"},{url:"/icons/icon-96x96.png",revision:"a4f84b6726f2396319f276381d09c3aa"},{url:"/images/MediaHunters.png",revision:"a2280515bc745b1ccca59ab283310ffc"},{url:"/images/Multipage.png",revision:"8ba658458c9b7ee1d5fe05fbb33aa3d4"},{url:"/images/Onepage.png",revision:"9416376ff46ddd3a001606da6c8568f0"},{url:"/images/Rozbudowane-strony.png",revision:"26a9e6758476c30dcf08b79aad1b27e4"},{url:"/images/cennik-strony-WWW.png",revision:"7fa8fb7e330650824eb062010ef1e417"},{url:"/images/dark-bg.png",revision:"79deb9ab9818b0f189af96f75bfe6429"},{url:"/images/eko-domy.png",revision:"991c728f50c1a20044d75f84dd07c5bd"},{url:"/images/enter-auto.png",revision:"f2e0a28579ede0d6ed3014abaebc4e39"},{url:"/images/hero-banner.png",revision:"75db52b45c7f1051268dc316e9eedddf"},{url:"/images/strony-internetowe-wrocław.png",revision:"995f55605f0fcf53d876a08733a4b956"},{url:"/images/waving-hand.png",revision:"e5f820522b2d69a67753e12a85e0c299"},{url:"/manifest.json",revision:"b7517710d46c6aed8019051da1a4db7b"},{url:"/robots.txt",revision:"2981836d37a020534e7a05dbc76e0932"},{url:"/sitemap-0.xml",revision:"01c5c96977731ac96573d7fd9a279423"},{url:"/sitemap.xml",revision:"c98ef7f18e14aaf876596befa6a0d71d"},{url:"/svg/android-chrome-72x72.png",revision:"09e2115a42070b9cbc243e905b4168ea"},{url:"/svg/apple-touch-icon.png",revision:"791c87a0bbde208a9a901675903bea6c"},{url:"/svg/browserconfig.xml",revision:"0f181289d3870795841c7b87e64ef043"},{url:"/svg/favicon-16x16.png",revision:"dc6138bbbeb8441bf6c35c3776fd053a"},{url:"/svg/favicon-32x32.png",revision:"5e938f9fecac41cd84a277b6643924b7"},{url:"/svg/favicon.ico",revision:"ef9f33c3c55ee9e2f4fb503b099ef6ce"},{url:"/svg/favicon.png",revision:"d550f998cbdcadc500c22c0e2185c4ae"},{url:"/svg/mstile-150x150.png",revision:"fdc362647314ee91ca2bc491a6265fce"},{url:"/svg/safari-pinned-tab.svg",revision:"e28e788f1979e7beebcd48f81feacb59"},{url:"/svg/search.svg",revision:"694c23e87839c94547bd5e0b15b20c64"},{url:"/svg/site.webmanifest",revision:"4d84b097025f2c7d9c83103837416ec1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
