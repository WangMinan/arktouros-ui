import{u as g,a as y}from"./@vueuse-DiMacrLm.js";import{u as $}from"./vue-router-CnFn8NvA.js";import{u as k}from"./index-BEyW8B92.js";import{_ as h}from"./index-BjjZILM_.js";import{ai as a,o as _,c as f,a as n,V as t,P as s,u as d}from"./@vue-CUOd3UHG.js";import"./pinia-BDCl_YBC.js";import"./@element-plus-BLrBwQOY.js";import"./element-plus-CE7Ada63.js";import"./lodash-es-D0J8aJCM.js";import"./@popperjs-CsO2-mKt.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DuEr9S7h.js";import"./async-validator-BTg-XjMW.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-fabFPCLu.js";import"./pinia-plugin-persistedstate-Bts6f1YT.js";const M={class:"header",id:"header"},S={class:"r-content"},C={__name:"DataScreenHeader",setup(x){const v=$(),o=g({storageKey:"theme-appearance",valueDark:"dark",valueLight:"light"}),c=k(),r=y(o),m=p=>{let e=p.clientX,i=p.clientY,u=Math.hypot(Math.max(e,innerWidth-e),Math.max(i,innerHeight-i));if(!document.startViewTransition){r();return}document.startViewTransition(async()=>{r()}).ready.then(()=>{let l=[`circle(0px at ${e}px ${i}px)`,`circle(${u}px at ${e}px ${i}px)`];document.documentElement.animate({clipPath:o.value?[...l].reverse():l},{duration:200,easing:"ease-in",pseudoElement:o.value?"::view-transition-old(root)":"::view-transition-new(root)"})})};return(p,e)=>{const i=a("el-switch"),u=a("el-button"),l=a("el-tooltip"),w=a("el-space");return _(),f("div",M,[e[1]||(e[1]=n("div",{class:"l-content"},[n("h1",null,"\u670D\u52A1\u6CBB\u7406\u589E\u5F3A\u8F6F\u4EF6\u53EF\u89C6\u5316\u5927\u5C4F")],-1)),e[2]||(e[2]=n("div",{class:"flex-grow"},null,-1)),n("div",S,[t(w,{wrap:""},{default:s(()=>[n("div",null,[t(i,{"model-value":d(o),onClick:m,"active-icon":"Sunny","inactive-icon":"Moon",size:"large","inline-prompt":"",style:{"--el-switch-on-color":"#64676a"}},null,8,["model-value"])]),n("div",null,[t(l,{content:"\u8FD4\u56DE\u9996\u9875",placement:"bottom"},{default:s(()=>[t(u,{icon:"HomeFilled",circle:"",onClick:e[0]||(e[0]=b=>{d(v).push("/main"),d(c).resetActive()})})]),_:1})])]),_:1})])])}}},D=h(C,[["__scopeId","data-v-80286493"]]),H={class:"dataScreenContainer"},V={__name:"DataScreen",setup(x){return(v,o)=>{const c=a("el-header"),r=a("el-main"),m=a("el-container");return _(),f("div",H,[t(m,null,{default:s(()=>[t(c,null,{default:s(()=>[t(D)]),_:1}),t(r)]),_:1})])}}},T=h(V,[["__scopeId","data-v-47f629a5"]]);export{T as default};