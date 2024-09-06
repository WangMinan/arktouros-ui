import{_ as E,a as Y,g as ee}from"./index-BF9ftXQd.js";import{E as f}from"./element-plus-YFWp-VKW.js";import{u as ae}from"./vue-router-dLXZBElL.js";import{t as O}from"./dateUtil-NlCD2qvi.js";import{_ as le}from"./index-BJvExNm_.js";import{r as g,b as te,Z as ue,c as D,a as b,V as a,P as t,F as J,ai as d,o as U,T as N,a8 as re,O as oe,U as I,u as de}from"./@vue-BdlgX6Tj.js";import"./axios-BimPEqV4.js";import"./nprogress-DrSneiWl.js";import"./dayjs-DuEr9S7h.js";import"./lodash-es-D0J8aJCM.js";import"./@element-plus-BcF8Tb1I.js";import"./@popperjs-CsO2-mKt.js";import"./@ctrl-r5W6hzzQ.js";import"./async-validator-BTg-XjMW.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-CW9Ge4bl.js";import"./pinia-B1eGvOHX.js";import"./pinia-plugin-persistedstate-Bts6f1YT.js";const ne=async i=>{try{const{data:s}=await E.get("/log/levels",{params:{query:i}});return s.code!==null&&s.code===2e3?s:s.code!==null?(f.error(`\u83B7\u53D6\u65E5\u5FD7\u7EA7\u522B\u5217\u8868\u5931\u8D25, ${s.message}`),null):(f.error("\u83B7\u53D6\u65E5\u5FD7\u7EA7\u522B\u5217\u8868\u5931\u8D25"),null)}catch(s){f.error(`\u83B7\u53D6\u65E5\u5FD7\u7EA7\u522B\u5217\u8868\u5931\u8D25, ${s.message}`)}return null},se=async i=>{try{const{data:s}=await E.get("/logs",{params:{pageNum:i.pageNum,pageSize:i.pageSize,serviceName:i.serviceName,traceId:i.traceId,keyword:i.keyword,keywordNotIncluded:i.keywordNotIncluded,severityText:i.severityText,startTimestamp:i.startTimestamp,endTimestamp:i.endTimestamp}});if(s.code!==null&&s.code===2e3)return s;if(s.code!==null)return f.error(`\u83B7\u53D6\u65E5\u5FD7\u5217\u8868\u5931\u8D25, ${s.message}`),null}catch(s){f.error(`\u83B7\u53D6\u65E5\u5FD7\u5217\u8868\u5931\u8D25, ${s.message}`)}return null},me={class:"log-main-container"},ie={class:"search-area"},pe={class:"pagination-div"},ce={__name:"LogMain",setup(i){const s=ae(),z=g(0),S=g([]),h=g(),_=g([]),r=g({pageNum:1,pageSize:10,serviceName:"",traceId:"",keyword:"",keywordNotIncluded:"",severityText:"",startTimestamp:0,endTimestamp:0}),w=async()=>{const u=JSON.parse(JSON.stringify(r.value));if(_.value.length===2)u.startTimestamp=Date.parse(_.value[0]),u.endTimestamp=Date.parse(_.value[1]);else{f.warning("\u5F53\u524D\u4E3A\u6B63\u5F0F\u73AF\u5883, \u65F6\u95F4\u8303\u56F4\u7F6E\u7A7A\u65F6\u9ED8\u8BA4\u83B7\u53D6\u8FD1\u534A\u4E2A\u5C0F\u65F6\u5185\u7684\u65E5\u5FD7");const n=new Date;u.startTimestamp=n.getTime()-30*60*1e3,u.endTimestamp=n.getTime()}const e=await se(u);e!==null&&(z.value=parseInt(e.result.total),e.result.data.forEach(n=>{n.serviceName||(n.serviceName="null")}),S.value=e.result.data)},L=async u=>{r.value.pageSize=u,await w()},q=async u=>{r.value.pageNum=u,await w()},F=async(u,e)=>{const n=await ne(u);if(n===null){e([]);return}const y=n.result.map(c=>c?{value:c}:{value:"null"});e(y)};te(async()=>{await w()});const T=g(!1),o=g({}),P=u=>{const e=JSON.parse(JSON.stringify(u));o.value=e,o.value.timestamp=O(e.timestamp),o.value.error=e.error?"\u5F02\u5E38":"\u6B63\u5E38",o.value.tags=e.tags.map(n=>n.key+"->"+n.value).join(`
`),T.value=!0},j=async u=>{if(!u.serviceName||!u.traceId){f.warning("\u8BE5\u65E5\u5FD7\u672A\u4E0A\u62A5\u94FE\u8DEF\u4FE1\u606F");return}await s.push(`/main/trace?serviceName=${u.serviceName}&traceId=${u.traceId}`)},A=ue({lazy:!0,async lazyLoad(u,e){const n=[],{level:y}=u;if(y===0){const c=await Y();if(c===null)return;c.result.map(p=>({leaf:!1,value:p,label:p})).forEach(p=>{n.push(p)})}else if(y===1){const c=await ee({query:"",namespace:u.value,pageNum:1,pageSize:1e3});if(c===null)return;c.result.data.map(p=>({leaf:!0,value:p.name,label:p.name===""?"null":p.name})).forEach(p=>{n.push(p)})}e(n)}}),M=()=>{h.value?(r.value.serviceName=h.value[1],(r.value.serviceName===""||r.value.serviceName==null)&&(r.value.serviceName="null")):r.value.serviceName=null};return(u,e)=>{const n=d("el-breadcrumb-item"),y=d("el-breadcrumb"),c=d("el-row"),p=d("el-cascader"),m=d("el-form-item"),v=d("el-input"),R=d("el-date-picker"),Z=d("el-autocomplete"),k=d("el-button"),x=d("el-form"),B=d("el-divider"),V=d("el-col"),G=d("Share"),C=d("el-icon"),$=d("el-tooltip"),H=d("InfoFilled"),K=d("el-pagination"),Q=d("el-card"),W=d("el-dialog");return U(),D(J,null,[b("div",me,[a(c,null,{default:t(()=>[a(y,{"separator-icon":"ArrowRight"},{default:t(()=>[a(n,null,{default:t(()=>e[17]||(e[17]=[b("a",{href:"/main"},"\u4E3B\u9875",-1)])),_:1}),a(n,null,{default:t(()=>e[18]||(e[18]=[b("a",{href:"/main/log"},"\u65E5\u5FD7\u6982\u89C8",-1)])),_:1})]),_:1})]),_:1}),a(Q,{class:"log-card"},{default:t(()=>[b("div",ie,[a(x,{inline:!0,model:r.value},{default:t(()=>[a(m,{label:"\u670D\u52A1\u540D\u79F0"},{default:t(()=>[a(p,{placeholder:"\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4\u2192\u670D\u52A1\u540D\u79F0",modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=l=>h.value=l),clearable:"",props:A,"show-all-levels":!1,onChange:M},null,8,["modelValue","props"])]),_:1}),a(m,{label:"traceId"},{default:t(()=>[a(v,{modelValue:r.value.traceId,"onUpdate:modelValue":e[1]||(e[1]=l=>r.value.traceId=l),placeholder:"\u8BF7\u8F93\u5165\u4E00\u4E2AtraceId",clearable:""},null,8,["modelValue"])]),_:1}),a(m,{label:"\u8D77\u6B62\u65F6\u95F4"},{default:t(()=>[a(R,{modelValue:_.value,"onUpdate:modelValue":e[2]||(e[2]=l=>_.value=l),type:"datetimerange","range-separator":"\u5230","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u65E5\u5FD7\u7EA7\u522B"},{default:t(()=>[a(Z,{class:"auto-complete-input",modelValue:r.value.severityText,"onUpdate:modelValue":e[3]||(e[3]=l=>r.value.severityText=l),"fetch-suggestions":F,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u65E5\u5FD7\u7EA7\u522B"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u5185\u5BB9\u5173\u952E\u8BCD"},{default:t(()=>[a(v,{modelValue:r.value.keyword,"onUpdate:modelValue":e[4]||(e[4]=l=>r.value.keyword=l),placeholder:"\u8BF7\u8F93\u5165\u4E00\u4E2A\u5185\u5BB9\u5173\u952E\u8BCD",clearable:""},null,8,["modelValue"])]),_:1}),a(m,{label:"\u5185\u5BB9\u4E0D\u5305\u542B\u7684\u5173\u952E\u8BCD"},{default:t(()=>[a(v,{modelValue:r.value.keywordNotIncluded,"onUpdate:modelValue":e[5]||(e[5]=l=>r.value.keywordNotIncluded=l),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9\u4E0D\u5305\u542B\u7684\u5173\u952E\u8BCD",clearable:""},null,8,["modelValue"])]),_:1}),a(m,null,{default:t(()=>[a(k,{type:"primary",onClick:w},{default:t(()=>e[19]||(e[19]=[N("\u641C\u7D22")])),_:1})]),_:1})]),_:1},8,["model"])]),a(B),(U(!0),D(J,null,re(S.value,l=>(U(),oe(c,{gutter:5,key:l,style:{"word-break":"break-all"}},{default:t(()=>[a(V,{span:4},{default:t(()=>[N(I(l.serviceName),1)]),_:2},1024),a(V,{span:3},{default:t(()=>[N(I(de(O)(l.timestamp)),1)]),_:2},1024),a(V,{span:2},{default:t(()=>[N(I(l.severityText),1)]),_:2},1024),a(V,{span:12},{default:t(()=>[N(I(l.content),1)]),_:2},1024),a(V,{span:1},{default:t(()=>[a($,{effect:"light",content:"\u67E5\u770B\u65E5\u5FD7\u5BF9\u5E94\u94FE\u8DEF\u4FE1\u606F",placement:"top",enterable:!1},{default:t(()=>[a(k,{type:"primary",circle:"",size:"small",onClick:X=>j(l)},{default:t(()=>[a(C,null,{default:t(()=>[a(G)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),a(V,{span:1},{default:t(()=>[a($,{effect:"light",content:"\u67E5\u770B\u65E5\u5FD7\u5177\u4F53\u4FE1\u606F",placement:"top",enterable:!1},{default:t(()=>[a(k,{type:"primary",circle:"",size:"small",onClick:X=>P(l)},{default:t(()=>[a(C,null,{default:t(()=>[a(H)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),b("div",pe,[a(K,{"current-page":r.value.pageNum,"onUpdate:currentPage":e[6]||(e[6]=l=>r.value.pageNum=l),"page-size":r.value.pageSize,"onUpdate:pageSize":e[7]||(e[7]=l=>r.value.pageSize=l),"page-sizes":[2,5,10,20],layout:"total, prev, pager, next, sizes",total:z.value,onSizeChange:L,onCurrentChange:q},null,8,["current-page","page-size","total"])])]),_:1})]),a(W,{modelValue:T.value,"onUpdate:modelValue":e[16]||(e[16]=l=>T.value=l),title:"Log",width:"60%"},{default:t(()=>[a(x,{"label-position":"left","label-width":"auto",model:o.value,disabled:""},{default:t(()=>[a(m,{label:"\u65E5\u5FD7\u65F6\u95F4"},{default:t(()=>[a(v,{modelValue:o.value.timestamp,"onUpdate:modelValue":e[8]||(e[8]=l=>o.value.timestamp=l)},null,8,["modelValue"])]),_:1}),a(m,{label:"\u65E5\u5FD7\u7EA7\u522B"},{default:t(()=>[a(v,{modelValue:o.value.severityText,"onUpdate:modelValue":e[9]||(e[9]=l=>o.value.severityText=l)},null,8,["modelValue"])]),_:1}),a(m,{label:"\u65E5\u5FD7\u5185\u5BB9"},{default:t(()=>[a(v,{type:"textarea",modelValue:o.value.content,"onUpdate:modelValue":e[10]||(e[10]=l=>o.value.content=l)},null,8,["modelValue"])]),_:1}),a(m,{label:"\u670D\u52A1\u540D\u79F0"},{default:t(()=>[a(v,{modelValue:o.value.serviceName,"onUpdate:modelValue":e[11]||(e[11]=l=>o.value.serviceName=l)},null,8,["modelValue"])]),_:1}),a(m,{label:"\u8FFD\u8E2AId"},{default:t(()=>[a(v,{modelValue:o.value.traceId,"onUpdate:modelValue":e[12]||(e[12]=l=>o.value.traceId=l)},null,8,["modelValue"])]),_:1}),a(m,{label:"SpanId"},{default:t(()=>[a(v,{modelValue:o.value.spanId,"onUpdate:modelValue":e[13]||(e[13]=l=>o.value.spanId=l)},null,8,["modelValue"])]),_:1}),a(m,{label:"\u72B6\u6001"},{default:t(()=>[a(v,{modelValue:o.value.error,"onUpdate:modelValue":e[14]||(e[14]=l=>o.value.error=l)},null,8,["modelValue"])]),_:1}),a(m,{label:"Tags"},{default:t(()=>[a(v,{type:"textarea",rows:3,modelValue:o.value.tags,"onUpdate:modelValue":e[15]||(e[15]=l=>o.value.tags=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}},ve=le(ce,[["__scopeId","data-v-2bf37b23"]]);export{ve as default};