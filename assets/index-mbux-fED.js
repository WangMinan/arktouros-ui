const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DataScreen-Dymio7QM.js","./@vueuse-BzACnE6r.js","./@vue-CVZDnyeU.js","./vue-router-CnZi-aoE.js","./index-CqA_OyLT.js","./pinia-CDTVquQx.js","./ServiceTopologyDiagram-DeO8F2DU.js","./index-BarmIWkk.js","./axios-CCb-kr4I.js","./nprogress-DrSneiWl.js","./dayjs-DuEr9S7h.js","./nprogress-BUMXTAWU.css","./element-plus-CLW1aW-L.js","./lodash-es-D0J8aJCM.js","./@element-plus-0Z6e8VG0.js","./@popperjs-CsO2-mKt.js","./@ctrl-r5W6hzzQ.js","./async-validator-BTg-XjMW.js","./memoize-one-BdPwpGay.js","./normalize-wheel-es-B6fDCfyv.js","./@floating-ui-fabFPCLu.js","./element-plus-D_4im2Cy.css","./echarts-BRPGUpj0.js","./tslib-BDyQ-Jie.js","./zrender-UROijHWN.js","./ServiceTopologyDiagram-Bn9E_Y4v.css","./index-d5EXLRQf.js","./dateUtil-NlCD2qvi.js","./TraceTopologyDiagram-CeTCGWzD.js","./TraceTopologyDiagram-D2mIZ21O.css","./MetricDiagram-B4NWJgmt.js","./MetricDiagram-CCI4M0N0.css","./pinia-plugin-persistedstate-Bts6f1YT.js","./DataScreen-B-5qFJWN.css","./DashBoard-CyMaZ4rE.js","./DashBoard-BWOQKi-b.css","./DashBoardMain-CnXupgJi.js","./DashBoardMain-M1VDZ07T.css","./ServiceTable-Bj1w3p2O.js","./ServiceTable-Bk58BWHq.css","./ServiceTopology-C2bwMd2b.js","./ServiceTopology-DdLT4G5q.css","./LogMain-DEUpuAXn.js","./LogMain-ZIEihLdn.css","./MetricMain-C_1El1X6.js","./MetricMain-Cqw6FG4S.css","./TraceMain-BFJaWEpU.js","./TraceMain-CZm9CkTd.css","./404-BIaOm6oO.js","./404-BpG6fVjy.css"])))=>i.map(i=>d[i]);
import{o as v,O as T,ai as b,au as D}from"./@vue-CVZDnyeU.js";import{c as I}from"./pinia-CDTVquQx.js";import{c as R,a as w}from"./vue-router-CnZi-aoE.js";import{Q as S}from"./@element-plus-0Z6e8VG0.js";import{i as V,z as N}from"./element-plus-CLW1aW-L.js";import{s as q}from"./pinia-plugin-persistedstate-Bts6f1YT.js";import"./lodash-es-D0J8aJCM.js";import"./@popperjs-CsO2-mKt.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DuEr9S7h.js";import"./async-validator-BTg-XjMW.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-fabFPCLu.js";let _,d,C=(async()=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();let h;_=(e,o)=>{const i=e.__vccOpts||e;for(const[t,r]of o)i[t]=r;return i},h={};function P(e,o){const i=b("router-view");return v(),T(i)}let E,y,A,f,m,g;E=_(h,[["render",P]]),y="modulepreload",A=function(e,o){return new URL(e,o).href},f={},m=function(e,o,i){let t=Promise.resolve();if(o&&o.length>0){const a=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),O=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.allSettled(o.map(l=>{if(l=A(l,i),l in f)return;f[l]=!0;const s=l.endsWith(".css"),k=s?'[rel="stylesheet"]':"";if(i)for(let p=a.length-1;p>=0;p--){const u=a[p];if(u.href===l&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${k}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":y,s||(c.as="script"),c.crossOrigin="",c.href=l,O&&c.setAttribute("nonce",O),document.head.appendChild(c),s)return new Promise((p,u)=>{c.addEventListener("load",p),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a}return t.then(a=>{for(const n of a||[])n.status==="rejected"&&r(n.reason);return e().catch(r)})},g=[{path:"/",name:"root",redirect:"/main"},{path:"/screen",name:"dataScreen",meta:{title:"Arktouros-DataScreen"},component:()=>m(()=>import("./DataScreen-Dymio7QM.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]),import.meta.url)},{path:"/main",name:"main",meta:{title:"Arktouros-UI"},component:()=>m(()=>import("./DashBoard-CyMaZ4rE.js"),__vite__mapDeps([34,4,5,2,1,3,14,12,13,15,16,10,17,18,19,20,21,32,35]),import.meta.url),redirect:"/main/default",children:[{path:"default",name:"default",meta:{title:"Arktouros|Default"},component:()=>m(()=>import("./DashBoardMain-CnXupgJi.js"),__vite__mapDeps([36,2,5,3,14,12,13,15,16,10,17,18,19,20,21,32,37]),import.meta.url)},{path:"service",name:"service",meta:{title:"Arktouros|Service"},children:[{path:"table",name:"table",meta:{title:"Arktouros|Table"},component:()=>m(()=>import("./ServiceTable-Bj1w3p2O.js"),__vite__mapDeps([38,7,8,9,10,11,12,2,13,14,15,16,17,18,19,20,21,5,3,32,39]),import.meta.url)},{path:"topology",name:"topology",meta:{title:"Arktouros|Topology"},component:()=>m(()=>import("./ServiceTopology-C2bwMd2b.js"),__vite__mapDeps([40,7,8,9,10,11,12,2,13,14,15,16,17,18,19,20,21,6,22,23,24,1,25,5,3,32,41]),import.meta.url)}]},{path:"log",name:"log",meta:{title:"Arktouros|Log"},component:()=>m(()=>import("./LogMain-DEUpuAXn.js"),__vite__mapDeps([42,7,8,9,10,11,12,2,13,14,15,16,17,18,19,20,21,26,3,27,4,5,32,43]),import.meta.url)},{path:"metric",name:"metric",meta:{title:"Arktouros|Metric"},component:()=>m(()=>import("./MetricMain-C_1El1X6.js"),__vite__mapDeps([44,7,8,9,10,11,12,2,13,14,15,16,17,18,19,20,21,30,1,22,23,24,27,31,5,3,32,45]),import.meta.url)},{path:"trace",name:"trace",meta:{title:"Arktouros|Trace"},component:()=>m(()=>import("./TraceMain-BFJaWEpU.js"),__vite__mapDeps([46,7,8,9,10,11,12,2,13,14,15,16,17,18,19,20,21,28,1,27,22,23,24,29,3,5,32,47]),import.meta.url)}]},{path:"/404",name:"NotFound",component:()=>m(()=>import("./404-BIaOm6oO.js"),__vite__mapDeps([48,3,2,5,14,12,13,15,16,10,17,18,19,20,21,32,49]),import.meta.url),meta:{title:"\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728"}},{path:"/:catchAll(.*)",redirect:"/404"}],d=R({history:w(),routes:g}),d.beforeEach((e,o,i)=>(e.meta.title&&(document.title=e.meta.title),i()));const L=D(E).use(I().use(q)).use(d).use(V,{locale:N});for(const[e,o]of Object.entries(S))L.component(e,o);L.mount("#app")})();export{_,C as __tla,d as r};
