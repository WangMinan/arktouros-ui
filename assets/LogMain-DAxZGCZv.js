import{a as Z,g as ee}from"./index-D__hgafN.js";import{g as ae,a as le,d as te}from"./index-BDnZyk3b.js";import{u as ue}from"./vue-router-Bu4PTcIf.js";import{t as x}from"./dateUtil-NlCD2qvi.js";import{u as oe}from"./index-B4tlj57P.js";import{_ as re}from"./index-B037U3DN.js";import{E as de,a as C}from"./element-plus-CEFBH8DJ.js";import{r as c,b as ne,X as se,c as O,a as _,Q as a,I as t,P as E,ag as d,o as I,M as g,a4 as me,H as ie,O as N,u as pe}from"./@vue-DJGElsCt.js";import"./axios-upsvKRUO.js";import"./nprogress-vyVW41Zc.js";import"./dayjs-DUzyJfMy.js";import"./arktourosUiConfigUtil-DM9bp1OR.js";import"./pinia-C1gkOLtH.js";import"./@element-plus-dQIYR_U6.js";import"./pinia-plugin-persistedstate-BlIkimV0.js";import"./destr-Cx7WjB9q.js";import"./deep-pick-omit-B1UrSIxj.js";import"./lodash-es-BKnOc8U_.js";import"./@popperjs-Bm-vPkQ2.js";import"./@ctrl-CBTFr1m8.js";import"./async-validator-DBBz-maN.js";import"./memoize-one-DxrTgWdQ.js";import"./normalize-wheel-es-Cg1Do7zv.js";import"./@floating-ui-BPK96wVr.js";const ce={class:"log-main-container"},ve={class:"search-area"},fe={class:"pagination-div"},ge={__name:"LogMain",setup(_e){const J=oe(),k=ue(),U=c(0),y=c([]),b=c(),V=c([]),o=c({pageNum:1,pageSize:10,serviceName:"",traceId:"",keyword:"",keywordNotIncluded:"",severityText:"",startTimestamp:0,endTimestamp:0}),h=async()=>{const u=JSON.parse(JSON.stringify(o.value));V.value.length===2?(u.startTimestamp=Date.parse(V.value[0]),u.endTimestamp=Date.parse(V.value[1])):(u.startTimestamp=null,u.endTimestamp=null);const e=await ae(u);e!==null&&(U.value=parseInt(e.result.total),e.result.data.forEach(n=>{n.serviceName||(n.serviceName="null")}),y.value=e.result.data)},L=async u=>{o.value.pageSize=u,await h()},$=async u=>{o.value.pageNum=u,await h()},A=async(u,e)=>{const n=await le(u);if(n===null){e([]);return}const v=n.result.map(m=>m?{value:m}:{value:"null"});e(v)};ne(async()=>{await h()});const w=c(!1),r=c({}),D=u=>{const e=JSON.parse(JSON.stringify(u));r.value=e,r.value.timestamp=x(e.timestamp),r.value.error=e.error?"\u5F02\u5E38":"\u6B63\u5E38",r.value.tags=e.tags.map(n=>n.key+"->"+n.value).join(`
`),w.value=!0},M=async u=>{if(!u.serviceName||!u.traceId){C.warning("\u8BE5\u65E5\u5FD7\u672A\u4E0A\u62A5\u94FE\u8DEF\u4FE1\u606F");return}J.$patch(e=>{e.currentAside.active="/main/trace"}),await k.push(`/main/trace?serviceName=${u.serviceName}&traceId=${u.traceId}`)},P=se({lazy:!0,async lazyLoad(u,e){const n=[],{level:v}=u;if(v===0){const m=await Z();if(m===null)return;m.result.map(i=>({leaf:!1,value:i,label:i})).forEach(i=>{n.push(i)})}else if(v===1){const m=await ee({query:"",namespace:u.value,pageNum:1,pageSize:1e3});if(m===null)return;m.result.data.map(i=>({leaf:!0,value:i.name,label:i.name===""?"null":i.name})).forEach(i=>{n.push(i)})}e(n)}}),Q=()=>{b.value?(o.value.serviceName=b.value[1],(o.value.serviceName===""||o.value.serviceName==null)&&(o.value.serviceName="null")):o.value.serviceName=null},j=async()=>{const u=de.service({lock:!0,text:"\u6B63\u5728\u6267\u884C\u6570\u636E\u8FD0\u7EF4\u64CD\u4F5C\uFF0C\u8BF7\u7B49\u5F85\u3002",background:"rgba(0, 0, 0, 0.7)"});try{const e=await te();if(e===null||e.result.length===0)return;C.success("\u5220\u9664\u6240\u6709\u94FE\u8DEF\u6570\u636E\u6210\u529F")}finally{u.close(),y.value.splice(0,y.value.length),k.go(0)}};return(u,e)=>{const n=d("el-breadcrumb-item"),v=d("el-breadcrumb"),m=d("el-button"),i=d("el-row"),q=d("el-cascader"),s=d("el-form-item"),p=d("el-input"),F=d("el-date-picker"),H=d("el-autocomplete"),z=d("el-form"),R=d("el-divider"),f=d("el-col"),X=d("Share"),S=d("el-icon"),T=d("el-tooltip"),Y=d("InfoFilled"),B=d("el-pagination"),G=d("el-card"),K=d("el-dialog");return I(),O(E,null,[_("div",ce,[a(i,{class:"breadcrumb-header-row"},{default:t(()=>[a(v,{"separator-icon":"ArrowRight"},{default:t(()=>[a(n,null,{default:t(()=>e[17]||(e[17]=[_("a",{href:"/main"},"\u4E3B\u9875",-1)])),_:1}),a(n,null,{default:t(()=>e[18]||(e[18]=[_("a",{href:"/main/log"},"\u65E5\u5FD7\u6982\u89C8",-1)])),_:1})]),_:1}),a(m,{type:"warning",onClick:j},{default:t(()=>e[19]||(e[19]=[g("\u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E")])),_:1})]),_:1}),a(G,{class:"log-card"},{default:t(()=>[_("div",ve,[a(z,{inline:!0,model:o.value},{default:t(()=>[a(s,{label:"\u670D\u52A1\u540D\u79F0"},{default:t(()=>[a(q,{placeholder:"\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4\u2192\u670D\u52A1\u540D\u79F0",modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=l=>b.value=l),clearable:"",props:P,"show-all-levels":!1,onChange:Q},null,8,["modelValue","props"])]),_:1}),a(s,{label:"traceId"},{default:t(()=>[a(p,{modelValue:o.value.traceId,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.traceId=l),placeholder:"\u8BF7\u8F93\u5165\u4E00\u4E2AtraceId",clearable:""},null,8,["modelValue"])]),_:1}),a(s,{label:"\u8D77\u6B62\u65F6\u95F4"},{default:t(()=>[a(F,{modelValue:V.value,"onUpdate:modelValue":e[2]||(e[2]=l=>V.value=l),type:"datetimerange","range-separator":"\u5230","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u65E5\u5FD7\u7EA7\u522B"},{default:t(()=>[a(H,{class:"auto-complete-input",modelValue:o.value.severityText,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value.severityText=l),"fetch-suggestions":A,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u65E5\u5FD7\u7EA7\u522B"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u5185\u5BB9\u5173\u952E\u8BCD"},{default:t(()=>[a(p,{modelValue:o.value.keyword,"onUpdate:modelValue":e[4]||(e[4]=l=>o.value.keyword=l),placeholder:"\u8BF7\u8F93\u5165\u4E00\u4E2A\u5185\u5BB9\u5173\u952E\u8BCD",clearable:""},null,8,["modelValue"])]),_:1}),a(s,{label:"\u5185\u5BB9\u4E0D\u5305\u542B\u7684\u5173\u952E\u8BCD"},{default:t(()=>[a(p,{modelValue:o.value.keywordNotIncluded,"onUpdate:modelValue":e[5]||(e[5]=l=>o.value.keywordNotIncluded=l),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9\u4E0D\u5305\u542B\u7684\u5173\u952E\u8BCD",clearable:""},null,8,["modelValue"])]),_:1}),a(s,null,{default:t(()=>[a(m,{type:"primary",onClick:h},{default:t(()=>e[20]||(e[20]=[g("\u641C\u7D22")])),_:1})]),_:1})]),_:1},8,["model"])]),a(R),(I(!0),O(E,null,me(y.value,l=>(I(),ie(i,{gutter:5,key:l,style:{"word-break":"break-all"}},{default:t(()=>[a(f,{span:4},{default:t(()=>[g(N(l.serviceName),1)]),_:2},1024),a(f,{span:3},{default:t(()=>[g(N(pe(x)(l.timestamp)),1)]),_:2},1024),a(f,{span:2},{default:t(()=>[g(N(l.severityText),1)]),_:2},1024),a(f,{span:12},{default:t(()=>[g(N(l.content),1)]),_:2},1024),a(f,{span:1},{default:t(()=>[a(T,{effect:"light",content:"\u67E5\u770B\u65E5\u5FD7\u5BF9\u5E94\u94FE\u8DEF\u4FE1\u606F",placement:"top",enterable:!1},{default:t(()=>[a(m,{type:"primary",circle:"",size:"small",onClick:W=>M(l)},{default:t(()=>[a(S,null,{default:t(()=>[a(X)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),a(f,{span:1},{default:t(()=>[a(T,{effect:"light",content:"\u67E5\u770B\u65E5\u5FD7\u5177\u4F53\u4FE1\u606F",placement:"top",enterable:!1},{default:t(()=>[a(m,{type:"primary",circle:"",size:"small",onClick:W=>D(l)},{default:t(()=>[a(S,null,{default:t(()=>[a(Y)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),_("div",fe,[a(B,{"current-page":o.value.pageNum,"onUpdate:currentPage":e[6]||(e[6]=l=>o.value.pageNum=l),"page-size":o.value.pageSize,"onUpdate:pageSize":e[7]||(e[7]=l=>o.value.pageSize=l),"page-sizes":[2,5,10,20],layout:"total, prev, pager, next, sizes",total:U.value,onSizeChange:L,onCurrentChange:$},null,8,["current-page","page-size","total"])])]),_:1})]),a(K,{modelValue:w.value,"onUpdate:modelValue":e[16]||(e[16]=l=>w.value=l),title:"Log",width:"60%"},{default:t(()=>[a(z,{"label-position":"left","label-width":"auto",model:r.value,disabled:""},{default:t(()=>[a(s,{label:"\u65E5\u5FD7\u65F6\u95F4"},{default:t(()=>[a(p,{modelValue:r.value.timestamp,"onUpdate:modelValue":e[8]||(e[8]=l=>r.value.timestamp=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u65E5\u5FD7\u7EA7\u522B"},{default:t(()=>[a(p,{modelValue:r.value.severityText,"onUpdate:modelValue":e[9]||(e[9]=l=>r.value.severityText=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u65E5\u5FD7\u5185\u5BB9"},{default:t(()=>[a(p,{type:"textarea",modelValue:r.value.content,"onUpdate:modelValue":e[10]||(e[10]=l=>r.value.content=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u670D\u52A1\u540D\u79F0"},{default:t(()=>[a(p,{modelValue:r.value.serviceName,"onUpdate:modelValue":e[11]||(e[11]=l=>r.value.serviceName=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u8FFD\u8E2AId"},{default:t(()=>[a(p,{modelValue:r.value.traceId,"onUpdate:modelValue":e[12]||(e[12]=l=>r.value.traceId=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"SpanId"},{default:t(()=>[a(p,{modelValue:r.value.spanId,"onUpdate:modelValue":e[13]||(e[13]=l=>r.value.spanId=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u72B6\u6001"},{default:t(()=>[a(p,{modelValue:r.value.error,"onUpdate:modelValue":e[14]||(e[14]=l=>r.value.error=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"Tags"},{default:t(()=>[a(p,{type:"textarea",rows:3,modelValue:r.value.tags,"onUpdate:modelValue":e[15]||(e[15]=l=>r.value.tags=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}},Ve=re(ge,[["__scopeId","data-v-769a46b7"]]);export{Ve as default};
