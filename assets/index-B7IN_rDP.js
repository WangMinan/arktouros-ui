const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DataScreen-BI7dO997.js","./@vueuse-BK87aVxb.js","./@vue-DJGElsCt.js","./vue-router-Bu4PTcIf.js","./index-B4tlj57P.js","./pinia-C1gkOLtH.js","./ServiceTopologyDiagram-DeA9LdQ1.js","./index-b2oChmgr.js","./axios-upsvKRUO.js","./nprogress-vyVW41Zc.js","./dayjs-DUzyJfMy.js","./nprogress-BgDCIyLK.css","./arktourosUiConfigUtil-DM9bp1OR.js","./element-plus-CB4diBvn.js","./lodash-es-BKnOc8U_.js","./@element-plus-dQIYR_U6.js","./@popperjs-Bm-vPkQ2.js","./@ctrl-CBTFr1m8.js","./async-validator-DBBz-maN.js","./memoize-one-DxrTgWdQ.js","./normalize-wheel-es-Cg1Do7zv.js","./@floating-ui-BPK96wVr.js","./element-plus-DSUjwVfg.css","./echarts-BIEvihnk.js","./tslib-BDyQ-Jie.js","./zrender-CdholsD1.js","./ServiceTopologyDiagram-D890i5l5.css","./index-D9knF54_.js","./dateUtil-NlCD2qvi.js","./TraceTopologyDiagram-5i2C8ULU.js","./TraceTopologyDiagram-Bsn4EJtK.css","./MetricDiagram-Cc4DNdSp.js","./MetricDiagram-DxCKYoSt.css","./pinia-plugin-persistedstate-BlIkimV0.js","./destr-Cx7WjB9q.js","./deep-pick-omit-B1UrSIxj.js","./DataScreen-cpXOyoHG.css","./DashBoard-ByxyZBcL.js","./DashBoard-C6rSOiut.css","./DashBoardMain-BaPu0lOK.js","./DashBoardMain-CyZrpX6P.css","./ServiceTable-DppjcC3S.js","./ServiceTable-DvoECXbk.css","./ServiceTopology-CoYlYFaE.js","./ServiceTopology-Bc343kx0.css","./LogMain-DVZsbsHd.js","./LogMain-CKQZLdiA.css","./MetricMain-fVs9lwU0.js","./MetricMain-exPepJzH.css","./TraceMain-UxV1kx11.js","./TraceMain-J2P0cKbF.css","./404-DXPprkSC.js","./404-DAXvqb-w.css"])))=>i.map(i=>d[i]);
import{o as v,H as T,ag as b,at as D}from"./@vue-DJGElsCt.js";import{c as I}from"./pinia-C1gkOLtH.js";import{c as R,a as w}from"./vue-router-Bu4PTcIf.js";import{Q as S}from"./@element-plus-dQIYR_U6.js";import{i as V,z as N}from"./element-plus-CB4diBvn.js";import{s as q}from"./pinia-plugin-persistedstate-BlIkimV0.js";import"./lodash-es-BKnOc8U_.js";import"./@popperjs-Bm-vPkQ2.js";import"./@ctrl-CBTFr1m8.js";import"./dayjs-DUzyJfMy.js";import"./async-validator-DBBz-maN.js";import"./memoize-one-DxrTgWdQ.js";import"./normalize-wheel-es-Cg1Do7zv.js";import"./@floating-ui-BPK96wVr.js";import"./destr-Cx7WjB9q.js";import"./deep-pick-omit-B1UrSIxj.js";let _,d,C=(async()=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();let h;_=(e,o)=>{const i=e.__vccOpts||e;for(const[t,r]of o)i[t]=r;return i},h={};function O(e,o){const i=b("router-view");return v(),T(i)}let E,y,A,f,m,g;E=_(h,[["render",O]]),y="modulepreload",A=function(e,o){return new URL(e,o).href},f={},m=function(e,o,i){let t=Promise.resolve();if(o&&o.length>0){const a=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),P=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.allSettled(o.map(l=>{if(l=A(l,i),l in f)return;f[l]=!0;const s=l.endsWith(".css"),k=s?'[rel="stylesheet"]':"";if(i)for(let p=a.length-1;p>=0;p--){const u=a[p];if(u.href===l&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${k}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":y,s||(c.as="script"),c.crossOrigin="",c.href=l,P&&c.setAttribute("nonce",P),document.head.appendChild(c),s)return new Promise((p,u)=>{c.addEventListener("load",p),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a}return t.then(a=>{for(const n of a||[])n.status==="rejected"&&r(n.reason);return e().catch(r)})},g=[{path:"/",name:"root",redirect:"/main"},{path:"/screen",name:"dataScreen",meta:{title:"Arktouros-DataScreen"},component:()=>m(()=>import("./DataScreen-BI7dO997.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]),import.meta.url)},{path:"/main",name:"main",meta:{title:"Arktouros-UI"},component:()=>m(()=>import("./DashBoard-ByxyZBcL.js"),__vite__mapDeps([37,4,5,2,1,3,12,15,13,14,16,17,10,18,19,20,21,22,33,34,35,38]),import.meta.url),redirect:"/main/default",children:[{path:"default",name:"default",meta:{title:"Arktouros|Default"},component:()=>m(()=>import("./DashBoardMain-BaPu0lOK.js"),__vite__mapDeps([39,2,5,3,15,13,14,16,17,10,18,19,20,21,22,33,34,35,40]),import.meta.url)},{path:"service",name:"service",meta:{title:"Arktouros|Service"},children:[{path:"table",name:"table",meta:{title:"Arktouros|Table"},component:()=>m(()=>import("./ServiceTable-DppjcC3S.js"),__vite__mapDeps([41,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,5,3,33,34,35,42]),import.meta.url)},{path:"topology",name:"topology",meta:{title:"Arktouros|Topology"},component:()=>m(()=>import("./ServiceTopology-CoYlYFaE.js"),__vite__mapDeps([43,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,6,23,24,25,1,26,5,3,33,34,35,44]),import.meta.url)}]},{path:"log",name:"log",meta:{title:"Arktouros|Log"},component:()=>m(()=>import("./LogMain-DVZsbsHd.js"),__vite__mapDeps([45,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,27,3,28,4,5,33,34,35,46]),import.meta.url)},{path:"metric",name:"metric",meta:{title:"Arktouros|Metric"},component:()=>m(()=>import("./MetricMain-fVs9lwU0.js"),__vite__mapDeps([47,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,31,1,23,24,25,28,32,5,3,33,34,35,48]),import.meta.url)},{path:"trace",name:"trace",meta:{title:"Arktouros|Trace"},component:()=>m(()=>import("./TraceMain-UxV1kx11.js"),__vite__mapDeps([49,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,29,1,28,23,24,25,30,3,5,33,34,35,50]),import.meta.url)}]},{path:"/404",name:"NotFound",component:()=>m(()=>import("./404-DXPprkSC.js"),__vite__mapDeps([51,3,2,5,15,13,14,16,17,10,18,19,20,21,22,33,34,35,52]),import.meta.url),meta:{title:"\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728"}},{path:"/:catchAll(.*)",redirect:"/404"}],d=R({history:w(),routes:g}),d.beforeEach((e,o,i)=>(e.meta.title&&(document.title=e.meta.title),i()));const L=D(E).use(I().use(q)).use(d).use(V,{locale:N});for(const[e,o]of Object.entries(S))L.component(e,o);L.mount("#app")})();export{_,C as __tla,d as r};
