import{a as Z,g as ee}from"./index-BgX6ccBS.js";import{g as ae,d as le,a as te}from"./index-DYhqAdoa.js";import{u as ue}from"./vue-router-DZ3MrWk1.js";import{t as x}from"./dateUtil-NlCD2qvi.js";import{u as oe}from"./index-DQDgIJ2e.js";import{_ as re}from"./index-Dp-vnoFp.js";import{a as de,E as C}from"./element-plus-0z3gLYqD.js";import{r as v,b as ne,X as se,c as O,a as f,Q as a,I as t,ag as d,P as E,o as I,M as c,a6 as me,H as ie,O as N,u as pe}from"./@vue-CnBZ4jx_.js";import"./axios-DW_MHI2K.js";import"./nprogress-Dx41icWA.js";import"./dayjs-B_aAqRSu.js";import"./arktourosUiConfigUtil-DM9bp1OR.js";import"./pinia-B3EJDjGG.js";import"./@element-plus-Rv25Faa4.js";import"./pinia-plugin-persistedstate-8SpmOswp.js";import"./destr-CVtkxrq9.js";import"./deep-pick-omit-CegYQlcN.js";import"./lodash-es-C-xrcuFl.js";import"./@popperjs-DB1lLFnh.js";import"./@ctrl-r5W6hzzQ.js";import"./async-validator-CRx4dHSJ.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-BQoi3Ox2.js";import"./@floating-ui-BCLhozDd.js";const ce={class:"log-main-container"},ve={class:"search-area"},fe={class:"pagination-div"},ge={__name:"LogMain",setup(_e){const J=oe(),k=ue(),U=v(0),b=v([]),y=v(),_=v([]),o=v({pageNum:1,pageSize:10,serviceName:"",traceId:"",keyword:"",keywordNotIncluded:"",severityText:"",startTimestamp:0,endTimestamp:0}),h=async()=>{const u=JSON.parse(JSON.stringify(o.value));_.value.length===2?(u.startTimestamp=Date.parse(_.value[0]),u.endTimestamp=Date.parse(_.value[1])):(u.startTimestamp=null,u.endTimestamp=null);const e=await ae(u);e!==null&&(U.value=parseInt(e.result.total),e.result.data.forEach(n=>{n.serviceName||(n.serviceName="null")}),b.value=e.result.data)},L=async u=>{o.value.pageSize=u,await h()},$=async u=>{o.value.pageNum=u,await h()},A=async(u,e)=>{const n=await te(u);if(n===null){e([]);return}const g=n.result.map(i=>i?{value:i}:{value:"null"});e(g)};ne(async()=>{await h()});const w=v(!1),r=v({}),D=u=>{const e=JSON.parse(JSON.stringify(u));r.value=e,r.value.timestamp=x(e.timestamp),r.value.error=e.error?"\u5F02\u5E38":"\u6B63\u5E38",r.value.tags=e.tags.map(n=>n.key+"->"+n.value).join(`
`),w.value=!0},M=async u=>{if(!u.serviceName||!u.traceId){C.warning("\u8BE5\u65E5\u5FD7\u672A\u4E0A\u62A5\u94FE\u8DEF\u4FE1\u606F");return}J.$patch(e=>{e.currentAside.active="/main/trace/dashboard"}),await k.push(`/main/trace/dashboard?serviceName=${u.serviceName}&traceId=${u.traceId}`)},P=se({lazy:!0,async lazyLoad(u,e){const n=[],{level:g}=u;if(g===0){const i=await Z();if(i===null)return;i.result.map(m=>({leaf:!1,value:m,label:m})).forEach(m=>{n.push(m)})}else if(g===1){const i=await ee({query:"",namespace:u.value,pageNum:1,pageSize:1e3});if(i===null)return;i.result.data.map(m=>({leaf:!0,value:m.name,label:m.name===""?"null":m.name})).forEach(m=>{n.push(m)})}e(n)}}),Q=()=>{y.value?(o.value.serviceName=y.value[1],(o.value.serviceName===""||o.value.serviceName==null)&&(o.value.serviceName="null")):o.value.serviceName=null},j=async()=>{const u=de.service({lock:!0,text:"\u6B63\u5728\u6267\u884C\u6570\u636E\u8FD0\u7EF4\u64CD\u4F5C\uFF0C\u8BF7\u7B49\u5F85\u3002",background:"rgba(0, 0, 0, 0.7)"});try{const e=await le();if(e===null||e.result.length===0)return;C.success("\u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E\u6210\u529F")}finally{u.close(),b.value.splice(0,b.value.length),k.go(0)}};return(u,e)=>{const n=d("el-breadcrumb-item"),g=d("el-breadcrumb"),i=d("el-button"),m=d("el-tooltip"),z=d("el-row"),q=d("el-cascader"),s=d("el-form-item"),p=d("el-input"),F=d("el-date-picker"),H=d("el-autocomplete"),S=d("el-form"),R=d("el-divider"),V=d("el-col"),X=d("Share"),T=d("el-icon"),Y=d("InfoFilled"),B=d("el-pagination"),G=d("el-card"),K=d("el-dialog");return I(),O(E,null,[f("div",ce,[a(z,{class:"breadcrumb-header-row"},{default:t(()=>[a(g,{"separator-icon":"ArrowRight"},{default:t(()=>[a(n,null,{default:t(()=>e[17]||(e[17]=[f("a",{href:"/main"},"\u4E3B\u9875",-1)])),_:1}),a(n,null,{default:t(()=>e[18]||(e[18]=[f("a",{href:"/main/log"},"\u65E5\u5FD7\u6982\u89C8",-1)])),_:1})]),_:1}),a(m,{placement:"bottom"},{content:t(()=>e[19]||(e[19]=[c(" \u70B9\u51FB\u8BE5\u6309\u94AE\u5C06\u4F1A"),f("b",{style:{color:"red"}},"\u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E",-1),c("\uFF0C\u8BF7\u786E\u4FDD\u60A8\u77E5\u6653\u8BE5\u64CD\u4F5C\u5C06\u5E26\u6765\u7684\u540E\u679C\u3002 "),f("br",null,null,-1),c(" \u5220\u9664\u64CD\u4F5C\u5C06\u9501\u5B9A\u7528\u6237\u754C\u9762\u76F4\u81F3\u5220\u9664\u5B8C\u6210\u3002 ")])),default:t(()=>[a(i,{type:"danger",onClick:j},{default:t(()=>e[20]||(e[20]=[c(" \u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E ")])),_:1})]),_:1})]),_:1}),a(G,{class:"log-card"},{default:t(()=>[f("div",ve,[a(S,{inline:!0,model:o.value},{default:t(()=>[a(s,{label:"\u670D\u52A1\u540D\u79F0"},{default:t(()=>[a(q,{placeholder:"\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4\u2192\u670D\u52A1\u540D\u79F0",modelValue:y.value,"onUpdate:modelValue":e[0]||(e[0]=l=>y.value=l),clearable:"",props:P,"show-all-levels":!1,onChange:Q},null,8,["modelValue","props"])]),_:1}),a(s,{label:"traceId"},{default:t(()=>[a(p,{modelValue:o.value.traceId,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.traceId=l),placeholder:"\u8BF7\u8F93\u5165\u4E00\u4E2AtraceId",clearable:""},null,8,["modelValue"])]),_:1}),a(s,{label:"\u8D77\u6B62\u65F6\u95F4"},{default:t(()=>[a(F,{modelValue:_.value,"onUpdate:modelValue":e[2]||(e[2]=l=>_.value=l),type:"datetimerange","range-separator":"\u5230","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u65E5\u5FD7\u7EA7\u522B"},{default:t(()=>[a(H,{class:"auto-complete-input",modelValue:o.value.severityText,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value.severityText=l),"fetch-suggestions":A,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u65E5\u5FD7\u7EA7\u522B"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u5185\u5BB9\u5173\u952E\u8BCD"},{default:t(()=>[a(p,{modelValue:o.value.keyword,"onUpdate:modelValue":e[4]||(e[4]=l=>o.value.keyword=l),placeholder:"\u8BF7\u8F93\u5165\u4E00\u4E2A\u5185\u5BB9\u5173\u952E\u8BCD",clearable:""},null,8,["modelValue"])]),_:1}),a(s,{label:"\u5185\u5BB9\u4E0D\u5305\u542B\u7684\u5173\u952E\u8BCD"},{default:t(()=>[a(p,{modelValue:o.value.keywordNotIncluded,"onUpdate:modelValue":e[5]||(e[5]=l=>o.value.keywordNotIncluded=l),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9\u4E0D\u5305\u542B\u7684\u5173\u952E\u8BCD",clearable:""},null,8,["modelValue"])]),_:1}),a(s,null,{default:t(()=>[a(i,{type:"primary",onClick:h},{default:t(()=>e[21]||(e[21]=[c("\u641C\u7D22")])),_:1})]),_:1})]),_:1},8,["model"])]),a(R),(I(!0),O(E,null,me(b.value,l=>(I(),ie(z,{gutter:5,key:l,style:{"word-break":"break-all"}},{default:t(()=>[a(V,{span:4},{default:t(()=>[c(N(l.serviceName),1)]),_:2},1024),a(V,{span:3},{default:t(()=>[c(N(pe(x)(l.timestamp)),1)]),_:2},1024),a(V,{span:2},{default:t(()=>[c(N(l.severityText),1)]),_:2},1024),a(V,{span:12},{default:t(()=>[c(N(l.content),1)]),_:2},1024),a(V,{span:1},{default:t(()=>[a(m,{effect:"light",content:"\u67E5\u770B\u65E5\u5FD7\u5BF9\u5E94\u94FE\u8DEF\u4FE1\u606F",placement:"top",enterable:!1},{default:t(()=>[a(i,{type:"primary",circle:"",size:"small",onClick:W=>M(l)},{default:t(()=>[a(T,null,{default:t(()=>[a(X)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),a(V,{span:1},{default:t(()=>[a(m,{effect:"light",content:"\u67E5\u770B\u65E5\u5FD7\u5177\u4F53\u4FE1\u606F",placement:"top",enterable:!1},{default:t(()=>[a(i,{type:"primary",circle:"",size:"small",onClick:W=>D(l)},{default:t(()=>[a(T,null,{default:t(()=>[a(Y)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),f("div",fe,[a(B,{"current-page":o.value.pageNum,"onUpdate:currentPage":e[6]||(e[6]=l=>o.value.pageNum=l),"page-size":o.value.pageSize,"onUpdate:pageSize":e[7]||(e[7]=l=>o.value.pageSize=l),"page-sizes":[2,5,10,20],layout:"total, prev, pager, next, sizes",total:U.value,onSizeChange:L,onCurrentChange:$},null,8,["current-page","page-size","total"])])]),_:1})]),a(K,{modelValue:w.value,"onUpdate:modelValue":e[16]||(e[16]=l=>w.value=l),title:"Log",width:"60%"},{default:t(()=>[a(S,{"label-position":"left","label-width":"auto",model:r.value,disabled:""},{default:t(()=>[a(s,{label:"\u65E5\u5FD7\u65F6\u95F4"},{default:t(()=>[a(p,{modelValue:r.value.timestamp,"onUpdate:modelValue":e[8]||(e[8]=l=>r.value.timestamp=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u65E5\u5FD7\u7EA7\u522B"},{default:t(()=>[a(p,{modelValue:r.value.severityText,"onUpdate:modelValue":e[9]||(e[9]=l=>r.value.severityText=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u65E5\u5FD7\u5185\u5BB9"},{default:t(()=>[a(p,{type:"textarea",modelValue:r.value.content,"onUpdate:modelValue":e[10]||(e[10]=l=>r.value.content=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u670D\u52A1\u540D\u79F0"},{default:t(()=>[a(p,{modelValue:r.value.serviceName,"onUpdate:modelValue":e[11]||(e[11]=l=>r.value.serviceName=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u8FFD\u8E2AId"},{default:t(()=>[a(p,{modelValue:r.value.traceId,"onUpdate:modelValue":e[12]||(e[12]=l=>r.value.traceId=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"SpanId"},{default:t(()=>[a(p,{modelValue:r.value.spanId,"onUpdate:modelValue":e[13]||(e[13]=l=>r.value.spanId=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u72B6\u6001"},{default:t(()=>[a(p,{modelValue:r.value.error,"onUpdate:modelValue":e[14]||(e[14]=l=>r.value.error=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"Tags"},{default:t(()=>[a(p,{type:"textarea",rows:3,modelValue:r.value.tags,"onUpdate:modelValue":e[15]||(e[15]=l=>r.value.tags=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}},Ve=re(ge,[["__scopeId","data-v-04a3e8e6"]]);export{Ve as default};
