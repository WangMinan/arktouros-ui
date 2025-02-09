import{a as P}from"./index-DPqrqud2.js";import{b as S}from"./@vueuse-BrKJyrsM.js";import{t as c}from"./dateUtil-NlCD2qvi.js";import{i as T}from"./echarts-DuzIGl-8.js";import{_ as k}from"./index-DwRYNxxI.js";import{r as h,ad as w,w as x,b as z,W as N,c as _,o as D}from"./@vue-CnBZ4jx_.js";const I={id:"trace-topology-div"},C={__name:"TraceTopologyDiagram",props:{serviceName:Array},setup(v,{expose:u}){const s=h({name:"",value:"",collapsed:!1,children:[]}),g=v,{serviceName:f}=w(g),E=async(i,e,l,d)=>{if(i===""||i===void 0)return;const n=await P(i,f.value[1],e,l,d);n!==null&&(s.value=n.result,m())};let o;const t=S("theme-appearance","auto");x(t,()=>{m()});const p=()=>{o&&o.dispose()};u({getTopology:E,disposeSpanTopology:p});let a;z(()=>{window.addEventListener("resize",r),a=new ResizeObserver(()=>r),a.observe(document.getElementById("trace-topology-div"))}),N(()=>{window.removeEventListener("resize",r),a.disconnect()});const r=()=>{o&&o.resize()};function y(i){const e=i.data.span,l=i.color==="#FFEE00"?"\u5F02\u5E38":"\u6B63\u5E38",d=c(e.startTime),n=e.endTime==="-1"?"\u8BE5Span\u8D85\u65F6":c(e.endTime),$=e.localEndPoint.ip===""?"null":e.localEndPoint.ip,b=e.remoteEndPoint.ip===""?"null":e.remoteEndPoint.ip;return`<div>
                    <div>
                        <b>\u5F53\u524DSpan\u8BE6\u7EC6\u60C5\u51B5</b>
                    </div>
                    <ul>
                        <li>id: ${e.id}</li>
                        <li>\u540D\u79F0: ${e.name}</li>
                        <li>\u6240\u5C5E\u670D\u52A1: ${e.serviceName}</li>
                        <li>\u5F00\u59CB\u65F6\u95F4: ${d}</li>
                        <li>\u7ED3\u675F\u65F6\u95F4: ${n}</li>
                        <li>span\u72B6\u6001: ${l}</li>
                        <li>\u7236\u8282\u70B9SpanId: ${e.parentSpanId}</li>
                        <li>\u6240\u5C5EendPoint: ${e.localEndPoint.serviceName}</li>
                        <li>\u6240\u5C5EendPoint ip\u4E0E\u7AEF\u53E3: ${$}:${e.localEndPoint.port}</li>
                        <li>\u8FDC\u7A0BendPoint: ${e.remoteEndPoint.serviceName}</li>
                        <li>\u8FDC\u7A0BendPoint ip\u4E0E\u7AEF\u53E3: ${b}:${e.remoteEndPoint.port}</li>
                    </ul>
                </div>`}const m=()=>{p();let i={title:{subtext:"\u7EFF\u8272\u4E3A\u6B63\u5E38Span\u8282\u70B9\uFF0C\u7EA2\u8272\u4E3A\u5F02\u5E38Span\u8282\u70B9",align:"right"},backgroundColor:t.value==="dark"?"#212224":"#fff",tooltip:{trigger:"item",triggerOn:"mousemove",backgroundColor:t.value==="dark"?"#212224":"#fff",textStyle:{color:t.value==="dark"?"#fff":"#212224"},formatter:function(e){return y(e)}},series:[{type:"tree",symbol:"circle",roam:!0,expandAndCollapse:!0,animationDuration:550,animationDurationUpdate:750,label:{position:"right",verticalAlign:"middle",fontSize:12},initialTreeDepth:-1,data:[s.value]}]};o=T(document.getElementById("trace-topology-div"),t.value==="dark"?"dark":"light"),o.setOption(i)};return(i,e)=>(D(),_("div",I))}},A=k(C,[["__scopeId","data-v-e0ebaa64"]]);export{A as T};
