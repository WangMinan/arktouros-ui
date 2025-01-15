import{a as T,g as z}from"./index-D7whG0vO.js";import{M as A,d as D}from"./MetricDiagram-BzXSyA2y.js";import{u as E}from"./vue-router-Bu4PTcIf.js";import{_ as Q}from"./index-DGHxWzB-.js";import{a as R,E as U}from"./element-plus-CB4diBvn.js";import{r as v,X as x,c as I,Q as a,I as l,P as q,ag as r,o as P,a as m,M as i}from"./@vue-DJGElsCt.js";import"./axios-upsvKRUO.js";import"./nprogress-vyVW41Zc.js";import"./dayjs-DUzyJfMy.js";import"./arktourosUiConfigUtil-DM9bp1OR.js";import"./@vueuse-BK87aVxb.js";import"./echarts-BIEvihnk.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CdholsD1.js";import"./dateUtil-NlCD2qvi.js";import"./pinia-C1gkOLtH.js";import"./@element-plus-dQIYR_U6.js";import"./pinia-plugin-persistedstate-BlIkimV0.js";import"./destr-Cx7WjB9q.js";import"./deep-pick-omit-B1UrSIxj.js";import"./lodash-es-BKnOc8U_.js";import"./@popperjs-Bm-vPkQ2.js";import"./@ctrl-CBTFr1m8.js";import"./async-validator-DBBz-maN.js";import"./memoize-one-DxrTgWdQ.js";import"./normalize-wheel-es-Cg1Do7zv.js";import"./@floating-ui-BPK96wVr.js";const X={class:"search-area"},B={__name:"MetricMain",setup(j){const g=E(),s=v({serviceName:"",metricNameLimit:0,startTimeStamp:0,endTimeStamp:0}),b=v([]),h=x({lazy:!0,async lazyLoad(p,e){const u=[],{level:c}=p;if(c===0){const o=await T();if(o===null)return;o.result.map(t=>({leaf:!1,value:t,label:t})).forEach(t=>{u.push(t)})}else if(c===1){const o=await z({query:"",namespace:p.value,pageNum:1,pageSize:1e3});if(o===null)return;o.result.data.map(t=>({leaf:!0,value:t.name,label:t.name===""?"null":t.name})).forEach(t=>{u.push(t)})}e(u)}}),d=v(),y=()=>{d.value&&(s.value.serviceName=d.value[1])},_=v(),V=async()=>{const p=R.service({lock:!0,text:"\u6B63\u5728\u6267\u884C\u6570\u636E\u8FD0\u7EF4\u64CD\u4F5C\uFF0C\u8BF7\u7B49\u5F85\u3002",background:"rgba(0, 0, 0, 0.7)"});try{const e=await D();if(e===null||e.result.length===0)return;U.success("\u5220\u9664\u6240\u6709\u6570\u503C\u6570\u636E\u6210\u529F")}finally{p.close(),g.go(0)}};return(p,e)=>{const u=r("el-breadcrumb-item"),c=r("el-breadcrumb"),o=r("el-button"),t=r("el-tooltip"),w=r("el-row"),k=r("el-cascader"),f=r("el-form-item"),N=r("el-input-number"),M=r("el-date-picker"),S=r("el-form"),C=r("el-divider"),L=r("el-card");return P(),I(q,null,[a(w,{class:"breadcrumb-header-row"},{default:l(()=>[a(c,{"separator-icon":"ArrowRight"},{default:l(()=>[a(u,null,{default:l(()=>e[4]||(e[4]=[m("a",{href:"/main"},"\u4E3B\u9875",-1)])),_:1}),a(u,null,{default:l(()=>e[5]||(e[5]=[m("a",{href:"/main/metric"},"\u6570\u503C\u6982\u89C8",-1)])),_:1})]),_:1}),a(t,{placement:"bottom"},{content:l(()=>e[6]||(e[6]=[i(" \u70B9\u51FB\u8BE5\u6309\u94AE\u5C06\u4F1A"),m("b",{style:{color:"red"}},"\u5220\u9664\u6240\u6709\u6570\u503C\u6570\u636E",-1),i("\uFF0C\u8BF7\u786E\u4FDD\u60A8\u77E5\u6653\u8BE5\u64CD\u4F5C\u5C06\u5E26\u6765\u7684\u540E\u679C\u3002 "),m("br",null,null,-1),i(" \u5220\u9664\u64CD\u4F5C\u5C06\u9501\u5B9A\u7528\u6237\u754C\u9762\u76F4\u81F3\u5220\u9664\u5B8C\u6210\u3002 "),m("br",null,null,-1),i(" \u5982\u679C\u60A8\u5904\u4E8E"),m("b",{style:{color:"red"}},"\u79BB\u7EBF\u6570\u636E\u6279\u91CF\u5BFC\u5165\u6A21\u5F0F",-1),i("\uFF0C\u8BE5\u64CD\u4F5C\u5C06\u540C\u65F6\u5220\u9664\u60A8\u5B58\u50A8\u5728\u8F93\u5165\u65E5\u5FD7\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709\u65E5\u5FD7\u6587\u4EF6\u3002 ")])),default:l(()=>[a(o,{type:"danger",onClick:V},{default:l(()=>e[7]||(e[7]=[i(" \u5220\u9664\u6240\u6709\u6570\u503C\u6570\u636E ")])),_:1})]),_:1})]),_:1}),a(L,{class:"metric-card",id:"metricCardRef"},{default:l(()=>[m("div",X,[a(S,{inline:!0,model:s.value,class:"demo-form-inline"},{default:l(()=>[a(f,{label:"\u670D\u52A1\u540D\u79F0"},{default:l(()=>[a(k,{placeholder:"\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4\u2192\u670D\u52A1\u540D\u79F0",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=n=>d.value=n),clearable:"",props:h,"show-all-levels":!1,onChange:y},null,8,["modelValue","props"])]),_:1}),a(f,{label:"\u56FE\u8868\u6570\u91CF"},{default:l(()=>[a(t,{effect:"light",content:"\u7F6E0\u65F6\u8868\u793A\u641C\u7D22\u670D\u52A1\u4E0B\u6240\u6709\u6570\u503C\u8BB0\u5F55",placement:"top",enterable:!1},{default:l(()=>[a(N,{min:0,modelValue:s.value.metricNameLimit,"onUpdate:modelValue":e[1]||(e[1]=n=>s.value.metricNameLimit=n)},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{label:"\u8D77\u6B62\u65F6\u95F4"},{default:l(()=>[a(M,{modelValue:b.value,"onUpdate:modelValue":e[2]||(e[2]=n=>b.value=n),type:"datetimerange","range-separator":"\u5230","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),a(f,null,{default:l(()=>[a(o,{type:"primary",onClick:e[3]||(e[3]=n=>_.value.toggleMetrics())},{default:l(()=>e[8]||(e[8]=[i("\u641C\u7D22")])),_:1})]),_:1})]),_:1},8,["model"])]),a(C),a(A,{ref_key:"metricDiagramRef",ref:_,metricQueryDto:s.value,startAndStopTime:b.value},null,8,["metricQueryDto","startAndStopTime"])]),_:1})],64)}}},F=Q(B,[["__scopeId","data-v-452d64a0"]]);export{F as default};
