import{a as I,g as z}from"./index-BgbY-3BW.js";import{b as V,c as D}from"./index-DPqrqud2.js";import{b as L}from"./@vueuse-BrKJyrsM.js";import{i as O}from"./echarts-DuzIGl-8.js";import{t as T}from"./dateUtil-NlCD2qvi.js";import{u as R}from"./index-DQDgIJ2e.js";import{u as B}from"./vue-router-DZ3MrWk1.js";import{_ as k}from"./index-DwRYNxxI.js";import{a as F}from"./element-plus-0z3gLYqD.js";import{ad as U,w as q,b as G,W as M,c as P,o as S,r as E,X as Q,Q as l,I as s,ag as u,M as y,a as N}from"./@vue-CnBZ4jx_.js";import"./axios-DW_MHI2K.js";import"./nprogress-Dx41icWA.js";import"./dayjs-B_aAqRSu.js";import"./arktourosUiConfigUtil-DM9bp1OR.js";import"./tslib-BDyQ-Jie.js";import"./zrender-Cg4aFrUj.js";import"./pinia-B3EJDjGG.js";import"./@element-plus-Rv25Faa4.js";import"./pinia-plugin-persistedstate-8SpmOswp.js";import"./destr-CVtkxrq9.js";import"./deep-pick-omit-CegYQlcN.js";import"./lodash-es-C-xrcuFl.js";import"./@popperjs-DB1lLFnh.js";import"./@ctrl-r5W6hzzQ.js";import"./async-validator-CRx4dHSJ.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-BQoi3Ox2.js";import"./@floating-ui-BCLhozDd.js";const W={id:"trace-timeout-histogram-div"},X={__name:"TraceTimeoutDiagram",props:{spanNameCascade:Array,startAndStopTime:Array},setup($,{expose:p}){let d;const _=$,g=R(),v=B(),{spanNameCascade:a,startAndStopTime:n}=U(_),c=async()=>{let o=F.service({lock:!0,text:"\u6B63\u5728\u8BFB\u53D6\u6570\u636E",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});try{let e,r;n.value.length===2?(e=Date.parse(n.value[0]),r=Date.parse(n.value[1])):(e=null,r=null);const{result:w}=await V(a.value[1],a.value[2],e,r);f(w)}finally{o.close()}};function i(o){const e=o[0].data.span,r=o.color==="#FFEE00"?"\u5F02\u5E38":"\u6B63\u5E38",w=T(e.startTime),x=e.endTime==="-1"?"\u8BE5Span\u8D85\u65F6":T(e.endTime),A=e.localEndPoint.ip===""?"null":e.localEndPoint.ip,C=e.remoteEndPoint.ip===""?"null":e.remoteEndPoint.ip;return`<div>
                    <div>
                        <b>\u5F53\u524DSpan\u8BE6\u7EC6\u60C5\u51B5</b>
                    </div>
                    <ul>
                        <li>id: ${e.id}</li>
                        <li>\u540D\u79F0: ${e.name}</li>
                        <li>\u6240\u5C5E\u670D\u52A1: ${e.serviceName}</li>
                        <li>\u5F00\u59CB\u65F6\u95F4: ${w}</li>
                        <li>\u7ED3\u675F\u65F6\u95F4: ${x}</li>
                        <li>span\u72B6\u6001: ${r}</li>
                        <li>\u7236\u8282\u70B9SpanId: ${e.parentSpanId}</li>
                        <li>\u6240\u5C5EendPoint: ${e.localEndPoint.serviceName}</li>
                        <li>\u6240\u5C5EendPoint ip\u4E0E\u7AEF\u53E3: ${A}:${e.localEndPoint.port}</li>
                        <li>\u8FDC\u7A0BendPoint: ${e.remoteEndPoint.serviceName}</li>
                        <li>\u8FDC\u7A0BendPoint ip\u4E0E\u7AEF\u53E3: ${C}:${e.remoteEndPoint.port}</li>
                    </ul>
                </div>`}const t=async o=>{g.$patch(e=>{e.currentAside.active="/main/trace/dashboard"}),await v.push(`/main/trace/dashboard?serviceName=${o.serviceName}&traceId=${o.traceId}`)},f=o=>{d&&d.dispose();let e={backgroundColor:m.value==="dark"?"#212224":"#fff",tooltip:{trigger:"axis",triggerOn:"mousemove",backgroundColor:m.value==="dark"?"#212224":"#fff",textStyle:{color:m.value==="dark"?"#fff":"#212224"},confine:!0,formatter:function(r){return i(r)}},xAxis:{name:"\u65F6\u95F4",type:"category",boundaryGap:!1,data:o.xaxis},yAxis:{name:"\u8017\u65F6(ms)",type:"value"},series:{name:"\u8017\u65F6",type:"line",smooth:!0,data:o.spanTimesValues}};d=O(document.getElementById("trace-timeout-histogram-div")),d.setOption(e),d.on("click",async function(r){await t(r.data.span)})},m=L("theme-appearance","auto");q(m,()=>{c()}),p({getLineChart:c});let h;G(()=>{window.addEventListener("resize",b),h=new ResizeObserver(()=>b),h.observe(document.getElementById("trace-timeout-histogram-div"))}),M(()=>{window.removeEventListener("resize",b),h.disconnect()});const b=()=>{d&&d.resize()};return(o,e)=>(S(),P("div",W))}},j=k(X,[["__scopeId","data-v-20fd4a22"]]),H={class:"trace-main-container"},J={style:{"margin-top":"1%"}},K={__name:"TraceTimeout",setup($){const p=E([]),d=E(),_=Q({lazy:!0,async lazyLoad(v,a){const n=[],{level:c}=v;if(c===0){const i=await I();if(i===null)return;i.result.map(t=>({leaf:!1,value:t,label:t})).forEach(t=>{n.push(t)})}else if(c===1){const i=await z({query:"",namespace:v.value,pageNum:1,pageSize:1e3});if(i===null)return;i.result.data.map(t=>({leaf:!1,value:t.name,label:t.name===""?"null":t.name})).forEach(t=>{n.push(t)})}else if(c===2){let i=null,t=null;p.value!=null&&p.value.length===2&&(i=Date.parse(p.value[0]),t=Date.parse(p.value[1]));const f=await D(v.value,i,t);if(f===null)return;f.result.map(m=>({leaf:!0,value:m,label:m})).forEach(m=>{n.push(m)})}a(n)}}),g=E();return(v,a)=>{const n=u("el-breadcrumb-item"),c=u("el-breadcrumb"),i=u("el-row"),t=u("el-date-picker"),f=u("el-form-item"),m=u("el-cascader"),h=u("el-button"),b=u("el-form"),o=u("el-divider"),e=u("el-card");return S(),P("div",H,[l(i,{class:"breadcrumb-header-row"},{default:s(()=>[l(c,{"separator-icon":"ArrowRight"},{default:s(()=>[l(n,{to:{path:"/main"}},{default:s(()=>a[3]||(a[3]=[y(" \u4E3B\u9875 ")])),_:1}),l(n,null,{default:s(()=>a[4]||(a[4]=[y(" \u94FE\u8DEF ")])),_:1}),l(n,{to:{path:"/main/trace/dashboard"}},{default:s(()=>a[5]||(a[5]=[y(" \u8D85\u65F6\u7EDF\u8BA1 ")])),_:1})]),_:1})]),_:1}),l(e,{class:"table-card"},{default:s(()=>[l(i,{class:"cascader-div"},{default:s(()=>[l(b,{inline:!0},{default:s(()=>[l(f,{style:{width:"40%"},label:"\u8D77\u6B62\u65F6\u95F4"},{default:s(()=>[l(t,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=r=>p.value=r),type:"datetimerange","range-separator":"\u5230","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),l(f,{style:{width:"40%"},label:"Span\u540D\u79F0",prop:"spanName"},{default:s(()=>[l(m,{style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u5BF9\u5E94Span\u540D\u79F0",modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=r=>d.value=r),clearable:"",props:_,"show-all-levels":!1},null,8,["modelValue","props"])]),_:1}),l(f,null,{default:s(()=>[l(h,{type:"primary",onClick:a[2]||(a[2]=r=>g.value.getLineChart())},{default:s(()=>a[6]||(a[6]=[y(" \u7EDF\u8BA1 ")])),_:1})]),_:1})]),_:1})]),_:1}),l(o),N("div",J,[a[7]||(a[7]=N("div",null,"\u8C03\u7528\u8D85\u65F6\u7EDF\u8BA1",-1)),l(j,{ref_key:"traceTimeoutDiagramRef",ref:g,spanNameCascade:d.value,startAndStopTime:p.value},null,8,["spanNameCascade","startAndStopTime"])])]),_:1})])}}},Y=k(K,[["__scopeId","data-v-69b06649"]]);export{Y as default};
