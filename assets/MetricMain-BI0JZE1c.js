import{_ as W,a as H,g as P}from"./index-D0q8FLHr.js";import{E as f,a as J}from"./element-plus-CqEfOaYE.js";import{b as $}from"./@vueuse-CMkOXHT3.js";import{i as q}from"./echarts-CAET2t7N.js";import{t as K}from"./dateUtil-NlCD2qvi.js";import{_ as Y}from"./index-C-OWTuWK.js";import{r as g,Z,w as j,b as Q,D as X,c as w,V as m,P as s,F as A,ai as u,o as S,a as k,T as ee,a8 as te,S as ae}from"./@vue-9d-ZWrow.js";import"./axios-BimPEqV4.js";import"./nprogress-DrSneiWl.js";import"./dayjs-DuEr9S7h.js";import"./lodash-es-D0J8aJCM.js";import"./@element-plus-DNs7Qi0T.js";import"./@popperjs-CsO2-mKt.js";import"./@ctrl-r5W6hzzQ.js";import"./async-validator-BTg-XjMW.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-CW9Ge4bl.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B5ljRYTo.js";import"./pinia-yt7DUaCk.js";import"./vue-router-DNZaI-R-.js";import"./pinia-plugin-persistedstate-Bts6f1YT.js";const le=async h=>{try{const{data:o}=await W.get("/metrics",{params:{serviceName:h.serviceName,metricNameLimit:h.metricNameLimit,startTimeStamp:h.startTimeStamp,endTimeStamp:h.endTimeStamp}});return o.code!==null&&o.code===2e3?o:o.code!==null?(f.error(`\u83B7\u53D6\u6570\u503C\u5217\u8868\u5931\u8D25, ${o.message}`),null):(f.error("\u83B7\u53D6\u6570\u503C\u5217\u8868\u5931\u8D25"),null)}catch(o){f.error(`\u83B7\u53D6\u6570\u503C\u5217\u8868\u5931\u8D25, ${o.message}`)}return null},re={class:"search-area"},ie={key:0,class:"graph-div"},me=["id"],oe={__name:"MetricMain",setup(h){const o=g({serviceName:"",metricNameLimit:0,startTimeStamp:0,endTimeStamp:0}),b=g([]),V=Z({lazy:!0,async lazyLoad(e,a){const r=[],{level:i}=e;if(i===0){const t=await H();if(t===null)return;t.result.map(l=>({leaf:!1,value:l,label:l})).forEach(l=>{r.push(l)})}else if(i===1){const t=await P({query:"",namespace:e.value,pageNum:1,pageSize:1e3});if(t===null)return;t.result.data.map(l=>({leaf:!0,value:l.name,label:l.name===""?"null":l.name})).forEach(l=>{r.push(l)})}a(r)}}),y=g(),c=g([{name:"",serviceName:"",metricType:"",metrics:[]}]),L=()=>{y.value&&(o.value.serviceName=y.value[1])};function U(){const e=JSON.parse(JSON.stringify(o.value));if(e.serviceName==="null"&&(e.serviceName=""),e.metricNameLimit===0&&(e.metricNameLimit=null),b.value.length===2)e.startTimeStamp=Date.parse(b.value[0]),e.endTimeStamp=Date.parse(b.value[1]);else{f.warning("\u5F53\u524D\u4E3A\u6B63\u5F0F\u73AF\u5883, \u65F6\u95F4\u8303\u56F4\u7F6E\u7A7A\u65F6\u9ED8\u8BA4\u83B7\u53D6\u8FD1\u534A\u4E2A\u5C0F\u65F6\u5185\u7684\u6570\u503C");const a=new Date;e.startTimeStamp=a.getTime()-30*60*1e3,e.endTimeStamp=a.getTime()}return e}const C=async()=>{n&&n.forEach(r=>r.dispose()),c.value=[],N.value=!0;const e=U();let a;try{a=J.service({lock:!0,text:"\u6B63\u5728\u641C\u7D22\uFF0C\u6570\u636E\u91CF\u8F83\u5927\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85",background:"rgba(0, 0, 0, 0.7)"});const r=await le(e);if(r===null)return;if(r.result&&r.result.length!==0){for(N.value=!1,r.result.forEach(i=>{i.metrics.forEach(t=>{t.timestamp=K(t.timestamp)})}),c.value=r.result;!document.getElementById("metric-graph-"+(c.value.length-1));)await new Promise(i=>setTimeout(i,100));for(let i=0;i<c.value.length;i++)try{E(c.value[i],i)}catch(t){f.error(t)}}else N.value=!0}finally{a.close()}},N=g(!0);let n=[];const d=$("theme-appearance","auto");j(d,()=>{n&&n.forEach(e=>e.dispose());for(let e=0;e<c.value.length;e++)try{E(c.value[e],e)}catch(a){f.error(a)}});let T;Q(()=>{n&&n.forEach(e=>e.dispose()),window.addEventListener("resize",_),T=new ResizeObserver(()=>_),T.observe(document.getElementById("metricCardRef"))}),X(()=>{window.removeEventListener("resize",_),T.disconnect()});const _=()=>{n&&n.forEach(e=>{e.resize()})};function F(e,a){return{backgroundColor:d.value==="dark"?"#212224":"#fff",title:{text:e.name.replace(/_/g," "),textStyle:{fontWeight:"bold",fontSize:14,lineHeight:16,width:document.getElementById("metric-graph-"+a).offsetWidth-20,overflow:"break"},subtext:e.metrics[0].description?e.metrics[0].description:"",subtextStyle:{fontSize:10,lineHeight:12,width:document.getElementById("metric-graph-"+a).offsetWidth-20,overflow:"break"}},tooltip:{trigger:"item",axisPointer:{type:"cross"},backgroundColor:d.value==="dark"?"#212224":"#fff",textStyle:{color:d.value==="dark"?"#fff":"#212224"}}}}const x=e=>Number(e)>1e9?"G":Number(e)>1e6?"M":Number(e)>1e3?"K":null,E=(e,a)=>{let r=F(e,a);if(e.metricType==="GAUGE"||e.metricType==="COUNTER")e.metrics.length>=2?(r.xAxis={type:"category",data:e.metrics.map(t=>t.timestamp)},r.yAxis={type:"value",name:x(e.metrics[e.metrics.length-1].value)===null?null:"Unit:"+x(e.metrics[0].value),nameLocation:"start",nameGap:20},r.series=[{data:e.metrics.map(t=>Number(t.value)>1e9?(Number(t.value)/1e9).toFixed(2):Number(t.value)>1e6?(Number(t.value)/1e6).toFixed(2):Number(t.value)>1e3?(Number(t.value)/1e3).toFixed(2):t.value),type:"line"}]):(r.series=[{type:"scatter",symbolSize:1,data:[{value:[0,0],label:{show:!0,formatter:e.metrics[0].value+"",fontSize:20,fontWeight:"bold",color:d.value==="dark"?"#ff0000":"#992233"}}]}],r.xAxis={show:!1,min:-1,max:1},r.yAxis={show:!1,min:-1,max:1});else if(e.metricType==="HISTOGRAM"||e.metricType==="SUMMARY"){let t=[];for(const l in e.metrics[0].buckets)t.push({key:l,value:e.metrics[0].buckets[l]});t.sort((l,p)=>l.key-p.key),r.xAxis={type:"category",data:t.map(l=>l.key)},r.yAxis={type:"value",name:x(t[t.length-1].value)===null?null:"Unit:"+x(t[t.length-1].value)},r.series=[{data:t.map(l=>Number(l.value)>1e9?(Number(l.value)/1e9).toFixed(2):Number(l.value)>1e6?(Number(l.value)/1e6).toFixed(2):Number(l.value)>1e3?(Number(l.value)/1e3).toFixed(2):l.value),type:"bar"}]}let i=q(document.getElementById("metric-graph-"+a),d.value==="dark"?"dark":"light");i.setOption(r),n.push(i)};return(e,a)=>{const r=u("el-breadcrumb-item"),i=u("el-breadcrumb"),t=u("el-row"),l=u("el-cascader"),p=u("el-form-item"),I=u("el-input-number"),R=u("el-tooltip"),M=u("el-date-picker"),O=u("el-button"),B=u("el-form"),G=u("el-divider"),D=u("el-card");return S(),w(A,null,[m(t,null,{default:s(()=>[m(i,{"separator-icon":"ArrowRight"},{default:s(()=>[m(r,null,{default:s(()=>a[3]||(a[3]=[k("a",{href:"/main"},"\u4E3B\u9875",-1)])),_:1}),m(r,null,{default:s(()=>a[4]||(a[4]=[k("a",{href:"/main/metric"},"\u6570\u503C\u6982\u89C8",-1)])),_:1})]),_:1})]),_:1}),m(D,{class:"metric-card",id:"metricCardRef"},{default:s(()=>[k("div",re,[m(B,{inline:!0,model:o.value,class:"demo-form-inline"},{default:s(()=>[m(p,{label:"\u670D\u52A1\u540D\u79F0"},{default:s(()=>[m(l,{placeholder:"\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4\u2192\u670D\u52A1\u540D\u79F0",modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=v=>y.value=v),clearable:"",props:V,"show-all-levels":!1,onChange:L},null,8,["modelValue","props"])]),_:1}),m(p,{label:"\u56FE\u8868\u6570\u91CF"},{default:s(()=>[m(R,{effect:"light",content:"\u7F6E0\u65F6\u8868\u793A\u641C\u7D22\u670D\u52A1\u4E0B\u6240\u6709\u6570\u503C\u8BB0\u5F55",placement:"top",enterable:!1},{default:s(()=>[m(I,{min:0,modelValue:o.value.metricNameLimit,"onUpdate:modelValue":a[1]||(a[1]=v=>o.value.metricNameLimit=v)},null,8,["modelValue"])]),_:1})]),_:1}),m(p,{label:"\u8D77\u6B62\u65F6\u95F4"},{default:s(()=>[m(M,{modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=v=>b.value=v),type:"datetimerange","range-separator":"\u5230","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),m(p,null,{default:s(()=>[m(O,{type:"primary",onClick:C},{default:s(()=>a[5]||(a[5]=[ee("\u641C\u7D22")])),_:1})]),_:1})]),_:1},8,["model"])]),m(G),N.value?ae("",!0):(S(),w("div",ie,[(S(!0),w(A,null,te(c.value,(v,z)=>(S(),w("div",{class:"graph-card",key:z},[k("div",{class:"graph-item",id:"metric-graph-"+z},null,8,me)]))),128))]))]),_:1})],64)}}},se=Y(oe,[["__scopeId","data-v-1d949bbb"]]);export{se as default};