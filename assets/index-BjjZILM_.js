const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DataScreen-MTLg5j-F.js","./@vueuse-DiMacrLm.js","./@vue-CUOd3UHG.js","./vue-router-CnFn8NvA.js","./index-BEyW8B92.js","./pinia-BDCl_YBC.js","./@element-plus-BLrBwQOY.js","./element-plus-CE7Ada63.js","./lodash-es-D0J8aJCM.js","./@popperjs-CsO2-mKt.js","./@ctrl-r5W6hzzQ.js","./dayjs-DuEr9S7h.js","./async-validator-BTg-XjMW.js","./memoize-one-BdPwpGay.js","./normalize-wheel-es-B6fDCfyv.js","./@floating-ui-fabFPCLu.js","./element-plus-D_4im2Cy.css","./pinia-plugin-persistedstate-Bts6f1YT.js","./DataScreen-CSw1M93v.css","./DashBoard-Cx5QK-dY.js","./DashBoard-Dd0OUMLL.css","./DashBoardMain-3oU5DOTr.js","./DashBoardMain-M1VDZ07T.css","./ServiceTable-ihG7H4cx.js","./index-BZCjJ8_N.js","./axios-BimPEqV4.js","./nprogress-DrSneiWl.js","./nprogress-BUMXTAWU.css","./ServiceTable-Bk58BWHq.css","./ServiceTopology-Cj1mEVMK.js","./echarts-CAET2t7N.js","./tslib-BDyQ-Jie.js","./zrender-B5ljRYTo.js","./ServiceTopology-BRTDCGCz.css","./LogMain-CXMXGcSY.js","./dateUtil-NlCD2qvi.js","./LogMain-Dg1E1IT7.css","./MetricMain-CZ1E2GdM.js","./MetricMain-DurhZY6s.css","./TraceMain-B5eDdSTh.js","./TraceMain-CAo20Nwy.css","./404-Cl7l8I1A.js","./404-BpG6fVjy.css"])))=>i.map(i=>d[i]);
import{o as v,O as T,ai as b,au as D}from"./@vue-CUOd3UHG.js";import{c as I}from"./pinia-BDCl_YBC.js";import{c as R,a as w}from"./vue-router-CnFn8NvA.js";import{Q as S}from"./@element-plus-BLrBwQOY.js";import{i as V,z as N}from"./element-plus-CE7Ada63.js";import{s as q}from"./pinia-plugin-persistedstate-Bts6f1YT.js";import"./lodash-es-D0J8aJCM.js";import"./@popperjs-CsO2-mKt.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DuEr9S7h.js";import"./async-validator-BTg-XjMW.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-fabFPCLu.js";let _,d,C=(async()=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();let h;_=(e,o)=>{const i=e.__vccOpts||e;for(const[t,r]of o)i[t]=r;return i},h={};function P(e,o){const i=b("router-view");return v(),T(i)}let E,y,A,f,m,g;E=_(h,[["render",P]]),y="modulepreload",A=function(e,o){return new URL(e,o).href},f={},m=function(e,o,i){let t=Promise.resolve();if(o&&o.length>0){const a=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),O=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.allSettled(o.map(l=>{if(l=A(l,i),l in f)return;f[l]=!0;const s=l.endsWith(".css"),k=s?'[rel="stylesheet"]':"";if(i)for(let p=a.length-1;p>=0;p--){const u=a[p];if(u.href===l&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${k}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":y,s||(c.as="script"),c.crossOrigin="",c.href=l,O&&c.setAttribute("nonce",O),document.head.appendChild(c),s)return new Promise((p,u)=>{c.addEventListener("load",p),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a}return t.then(a=>{for(const n of a||[])n.status==="rejected"&&r(n.reason);return e().catch(r)})},g=[{path:"/",name:"root",redirect:"/main"},{path:"/screen",name:"dataScreen",meta:{title:"Arktouros-DataScreen"},component:()=>m(()=>import("./DataScreen-MTLg5j-F.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url)},{path:"/main",name:"main",meta:{title:"Arktouros-UI"},component:()=>m(()=>import("./DashBoard-Cx5QK-dY.js"),__vite__mapDeps([19,4,5,2,1,3,6,7,8,9,10,11,12,13,14,15,16,17,20]),import.meta.url),redirect:"/main/default",children:[{path:"default",name:"default",meta:{title:"Arktouros|Default"},component:()=>m(()=>import("./DashBoardMain-3oU5DOTr.js"),__vite__mapDeps([21,2,5,3,6,7,8,9,10,11,12,13,14,15,16,17,22]),import.meta.url)},{path:"service",name:"service",meta:{title:"Arktouros|Service"},children:[{path:"table",name:"table",meta:{title:"Arktouros|Table"},component:()=>m(()=>import("./ServiceTable-ihG7H4cx.js"),__vite__mapDeps([23,24,25,26,11,27,7,2,8,6,9,10,12,13,14,15,16,5,3,17,28]),import.meta.url)},{path:"topology",name:"topology",meta:{title:"Arktouros|Topology"},component:()=>m(()=>import("./ServiceTopology-Cj1mEVMK.js"),__vite__mapDeps([29,24,25,26,11,27,7,2,8,6,9,10,12,13,14,15,16,30,31,32,1,5,3,17,33]),import.meta.url)}]},{path:"log",name:"log",meta:{title:"Arktouros|Log"},component:()=>m(()=>import("./LogMain-CXMXGcSY.js"),__vite__mapDeps([34,24,25,26,11,27,7,2,8,6,9,10,12,13,14,15,16,3,35,4,5,17,36]),import.meta.url)},{path:"metric",name:"metric",meta:{title:"Arktouros|Metric"},component:()=>m(()=>import("./MetricMain-CZ1E2GdM.js"),__vite__mapDeps([37,24,25,26,11,27,7,2,8,6,9,10,12,13,14,15,16,1,30,31,32,35,5,3,17,38]),import.meta.url)},{path:"trace",name:"trace",meta:{title:"Arktouros|Trace"},component:()=>m(()=>import("./TraceMain-B5eDdSTh.js"),__vite__mapDeps([39,24,25,26,11,27,7,2,8,6,9,10,12,13,14,15,16,1,30,31,32,3,35,5,17,40]),import.meta.url)}]},{path:"/404",name:"NotFound",component:()=>m(()=>import("./404-Cl7l8I1A.js"),__vite__mapDeps([41,3,2,5,6,7,8,9,10,11,12,13,14,15,16,17,42]),import.meta.url),meta:{title:"\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728"}},{path:"/:catchAll(.*)",redirect:"/404"}],d=R({history:w(),routes:g}),d.beforeEach((e,o,i)=>(e.meta.title&&(document.title=e.meta.title),i()));const L=D(E).use(I().use(q)).use(d).use(V,{locale:N});for(const[e,o]of Object.entries(S))L.component(e,o);L.mount("#app")})();export{_,C as __tla,d as r};