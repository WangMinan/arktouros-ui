const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DataScreen-B09jdYjL.js","./@vueuse-Dhe1fHk7.js","./@vue-cv5Ymlte.js","./vue-router-DD0JK7WV.js","./index-CCNzkmq7.js","./pinia-DgCIMWYa.js","./ServiceTopologyDiagram-Bb6BD9-w.js","./index-BvE9ysaN.js","./axios-CCb-kr4I.js","./nprogress-Du6PRFDQ.js","./dayjs-DuEr9S7h.js","./nprogress-BgDCIyLK.css","./arktourosUiConfigUtil-DM9bp1OR.js","./element-plus-CfLMWzro.js","./lodash-es-D0J8aJCM.js","./@element-plus-E7RBhUxu.js","./@popperjs-CsO2-mKt.js","./@ctrl-r5W6hzzQ.js","./async-validator-BTg-XjMW.js","./memoize-one-BdPwpGay.js","./normalize-wheel-es-B6fDCfyv.js","./@floating-ui-D06mcbP9.js","./element-plus-NVc03CEM.css","./echarts-BRPGUpj0.js","./tslib-BDyQ-Jie.js","./zrender-UROijHWN.js","./ServiceTopologyDiagram-D890i5l5.css","./index-DoSX63D8.js","./dateUtil-NlCD2qvi.js","./TraceTopologyDiagram-BotST4R1.js","./TraceTopologyDiagram-SBhG-GgJ.css","./MetricDiagram-Dwb3HiB-.js","./MetricDiagram-DxCKYoSt.css","./pinia-plugin-persistedstate-8SpmOswp.js","./destr-CVtkxrq9.js","./deep-pick-omit-CegYQlcN.js","./DataScreen-cpXOyoHG.css","./DashBoard-CVb5oSWi.js","./DashBoard-C6rSOiut.css","./DashBoardMain-B7OO1AjD.js","./DashBoardMain-CyZrpX6P.css","./ServiceTable-AONziXuh.js","./ServiceTable-DvoECXbk.css","./ServiceTopology-Bsw7ufaI.js","./ServiceTopology-Bc343kx0.css","./LogMain-DpBM1yaR.js","./LogMain-CglwbpG-.css","./MetricMain-DoWMZfpk.js","./MetricMain-exPepJzH.css","./TraceMain-friPWphY.js","./TraceMain-J2P0cKbF.css","./404-aceC6dAg.js","./404-DAXvqb-w.css"])))=>i.map(i=>d[i]);
import{o as v,O as T,ai as b,au as D}from"./@vue-cv5Ymlte.js";import{c as I}from"./pinia-DgCIMWYa.js";import{c as R,a as w}from"./vue-router-DD0JK7WV.js";import{Q as S}from"./@element-plus-E7RBhUxu.js";import{i as V,z as N}from"./element-plus-CfLMWzro.js";import{s as q}from"./pinia-plugin-persistedstate-8SpmOswp.js";import"./lodash-es-D0J8aJCM.js";import"./@popperjs-CsO2-mKt.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DuEr9S7h.js";import"./async-validator-BTg-XjMW.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-D06mcbP9.js";import"./destr-CVtkxrq9.js";import"./deep-pick-omit-CegYQlcN.js";let _,d,C=(async()=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();let h;_=(e,o)=>{const i=e.__vccOpts||e;for(const[t,r]of o)i[t]=r;return i},h={};function P(e,o){const i=b("router-view");return v(),T(i)}let E,y,A,f,m,g;E=_(h,[["render",P]]),y="modulepreload",A=function(e,o){return new URL(e,o).href},f={},m=function(e,o,i){let t=Promise.resolve();if(o&&o.length>0){const a=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),O=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.allSettled(o.map(l=>{if(l=A(l,i),l in f)return;f[l]=!0;const s=l.endsWith(".css"),k=s?'[rel="stylesheet"]':"";if(i)for(let p=a.length-1;p>=0;p--){const u=a[p];if(u.href===l&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${k}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":y,s||(c.as="script"),c.crossOrigin="",c.href=l,O&&c.setAttribute("nonce",O),document.head.appendChild(c),s)return new Promise((p,u)=>{c.addEventListener("load",p),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a}return t.then(a=>{for(const n of a||[])n.status==="rejected"&&r(n.reason);return e().catch(r)})},g=[{path:"/",name:"root",redirect:"/main"},{path:"/screen",name:"dataScreen",meta:{title:"Arktouros-DataScreen"},component:()=>m(()=>import("./DataScreen-B09jdYjL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]),import.meta.url)},{path:"/main",name:"main",meta:{title:"Arktouros-UI"},component:()=>m(()=>import("./DashBoard-CVb5oSWi.js"),__vite__mapDeps([37,4,5,2,1,3,12,15,13,14,16,17,10,18,19,20,21,22,33,34,35,38]),import.meta.url),redirect:"/main/default",children:[{path:"default",name:"default",meta:{title:"Arktouros|Default"},component:()=>m(()=>import("./DashBoardMain-B7OO1AjD.js"),__vite__mapDeps([39,2,5,3,15,13,14,16,17,10,18,19,20,21,22,33,34,35,40]),import.meta.url)},{path:"service",name:"service",meta:{title:"Arktouros|Service"},children:[{path:"table",name:"table",meta:{title:"Arktouros|Table"},component:()=>m(()=>import("./ServiceTable-AONziXuh.js"),__vite__mapDeps([41,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,5,3,33,34,35,42]),import.meta.url)},{path:"topology",name:"topology",meta:{title:"Arktouros|Topology"},component:()=>m(()=>import("./ServiceTopology-Bsw7ufaI.js"),__vite__mapDeps([43,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,6,23,24,25,1,26,5,3,33,34,35,44]),import.meta.url)}]},{path:"log",name:"log",meta:{title:"Arktouros|Log"},component:()=>m(()=>import("./LogMain-DpBM1yaR.js"),__vite__mapDeps([45,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,27,3,28,4,5,33,34,35,46]),import.meta.url)},{path:"metric",name:"metric",meta:{title:"Arktouros|Metric"},component:()=>m(()=>import("./MetricMain-DoWMZfpk.js"),__vite__mapDeps([47,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,31,1,23,24,25,28,32,5,3,33,34,35,48]),import.meta.url)},{path:"trace",name:"trace",meta:{title:"Arktouros|Trace"},component:()=>m(()=>import("./TraceMain-friPWphY.js"),__vite__mapDeps([49,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,29,1,28,23,24,25,30,3,5,33,34,35,50]),import.meta.url)}]},{path:"/404",name:"NotFound",component:()=>m(()=>import("./404-aceC6dAg.js"),__vite__mapDeps([51,3,2,5,15,13,14,16,17,10,18,19,20,21,22,33,34,35,52]),import.meta.url),meta:{title:"\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728"}},{path:"/:catchAll(.*)",redirect:"/404"}],d=R({history:w(),routes:g}),d.beforeEach((e,o,i)=>(e.meta.title&&(document.title=e.meta.title),i()));const L=D(E).use(I().use(q)).use(d).use(V,{locale:N});for(const[e,o]of Object.entries(S))L.component(e,o);L.mount("#app")})();export{_,C as __tla,d as r};
