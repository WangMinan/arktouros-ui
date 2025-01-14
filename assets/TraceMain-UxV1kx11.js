import{a as F,g as G}from"./index-b2oChmgr.js";import{g as J,T as K}from"./TraceTopologyDiagram-5i2C8ULU.js";import{u as O}from"./vue-router-Bu4PTcIf.js";import{_ as W}from"./index-B7IN_rDP.js";import{r as c,X as R,b as Y,c as C,Q as a,I as l,ag as t,o as q,a as p,P as Z,a4 as $,u as ee,H as ae}from"./@vue-DJGElsCt.js";import"./axios-upsvKRUO.js";import"./nprogress-vyVW41Zc.js";import"./dayjs-DUzyJfMy.js";import"./arktourosUiConfigUtil-DM9bp1OR.js";import"./element-plus-CB4diBvn.js";import"./lodash-es-BKnOc8U_.js";import"./@element-plus-dQIYR_U6.js";import"./@popperjs-Bm-vPkQ2.js";import"./@ctrl-CBTFr1m8.js";import"./async-validator-DBBz-maN.js";import"./memoize-one-DxrTgWdQ.js";import"./normalize-wheel-es-Cg1Do7zv.js";import"./@floating-ui-BPK96wVr.js";import"./@vueuse-BK87aVxb.js";import"./dateUtil-NlCD2qvi.js";import"./echarts-BIEvihnk.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CdholsD1.js";import"./pinia-C1gkOLtH.js";import"./pinia-plugin-persistedstate-BlIkimV0.js";import"./destr-Cx7WjB9q.js";import"./deep-pick-omit-B1UrSIxj.js";const le={class:"trace-main-container"},te={class:"cascader-div"},re={class:"endpoint-div"},ue={class:"table-div"},oe={class:"pagination-div"},ie={__name:"TraceMain",setup(se){const N=c(!0),g=c(),i=O(),T=R({lazy:!0,async lazyLoad(u,e){const v=[],{level:w}=u;if(w===0){const s=await F();if(s===null)return;s.result.map(o=>({leaf:!1,value:o,label:o})).forEach(o=>{v.push(o)})}else if(w===1){const s=await G({query:"",namespace:u.value,pageNum:1,pageSize:1e3});if(s===null)return;s.result.data.map(o=>({leaf:!0,value:o.name,label:o.name===""?"null":o.name})).forEach(o=>{v.push(o)})}e(v)}}),n=R({serviceName:"",pageNum:1,pageSize:10}),y=c(),f=c("");Y(async()=>{i.currentRoute.value.query.serviceName&&(n.serviceName=i.currentRoute.value.query.serviceName,g.value=["default",i.currentRoute.value.query.serviceName],await _()),i.currentRoute.value.query.traceId&&(d.value.includes(i.currentRoute.value.query.traceId)||d.value.push(i.currentRoute.value.query.traceId),f.value=i.currentRoute.value.query.traceId),i.currentRoute.value.query.serviceName&&i.currentRoute.value.query.traceId&&await y.value.getTopology()});const I=c(0),_=async()=>{m.value.splice(0,m.value.length),b.splice(0,b.length),I.value=0,y.value.disposeSpanTopology(),d.value=[],f.value="",n.serviceName=g.value[1];const u=await J(n);u===null||u.result.length===0||(I.value=u.result.length,u.result.forEach(e=>{m.value.push(e)}),m.value.forEach(e=>{b.push(e.endPoint)}),d.value=m.value[0].traceIds)};let d=c([]);const m=c([{endPoint:{},traceIds:[]}]),b=R([]),E=async u=>{n.pageSize=u,await _()},P=async u=>{n.pageNum=u,await _()},U=u=>{m.value.forEach(e=>{e.endPoint===u&&(d.value=e.traceIds)})},S=async()=>{await y.value.getTopology(f.value,N.value)};return(u,e)=>{const v=t("el-breadcrumb-item"),w=t("el-breadcrumb"),s=t("el-row"),o=t("el-cascader"),k=t("el-divider"),h=t("el-table-column"),x=t("ArrowRightBold"),A=t("el-icon"),B=t("el-button"),D=t("el-tooltip"),H=t("el-table"),L=t("el-pagination"),z=t("el-col"),M=t("el-option"),Q=t("el-select"),V=t("el-form-item"),X=t("el-switch"),j=t("el-card");return q(),C("div",le,[a(s,null,{default:l(()=>[a(w,{"separator-icon":"ArrowRight"},{default:l(()=>[a(v,null,{default:l(()=>e[7]||(e[7]=[p("a",{href:"/main"},"\u4E3B\u9875",-1)])),_:1}),a(v,null,{default:l(()=>e[8]||(e[8]=[p("a",{href:"/main/trace"},"\u94FE\u8DEF\u4FE1\u606F",-1)])),_:1})]),_:1})]),_:1}),a(j,{class:"table-card"},{default:l(()=>[p("div",te,[a(o,{placeholder:"\u8BF7\u9009\u62E9\u5BF9\u5E94\u670D\u52A1",modelValue:g.value,"onUpdate:modelValue":e[0]||(e[0]=r=>g.value=r),style:{width:"40%"},clearable:"",props:T,"show-all-levels":!1,onChange:_},null,8,["modelValue","props"])]),a(k),a(s,{gutter:10,style:{"margin-top":"2%"}},{default:l(()=>[a(z,{span:8},{default:l(()=>[e[9]||(e[9]=p("div",null,"\u8FFD\u8E2A\u7AEF\u70B9\u4FE1\u606F",-1)),p("div",re,[p("div",ue,[a(H,{data:b,stripe:""},{default:l(()=>[a(h,{prop:"serviceName",label:"\u670D\u52A1\u540D\u79F0"}),a(h,{prop:"ip",label:"IP\u5730\u5740"}),a(h,{prop:"port",label:"\u7AEF\u53E3\u53F7"}),a(h,{prop:"latency",label:"\u65F6\u5EF6"}),a(h,{fixed:"right",label:"\u7ED8\u56FE"},{default:l(r=>[a(D,{effect:"light",content:"\u67E5\u770BEndpoint\u6240\u5728\u94FE\u8DEF\u4FE1\u606F",placement:"top",enterable:!1},{default:l(()=>[a(B,{type:"primary",circle:"",size:"small",onClick:pe=>U(r.row)},{default:l(()=>[a(A,null,{default:l(()=>[a(x)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["data"])]),p("div",oe,[a(L,{"current-page":n.pageNum,"onUpdate:currentPage":e[1]||(e[1]=r=>n.pageNum=r),"page-size":n.pageSize,"onUpdate:pageSize":e[2]||(e[2]=r=>n.pageSize=r),"page-sizes":[2,5,10,20],layout:"total, pager, sizes",total:I.value,"pager-count":5,onSizeChange:E,onCurrentChange:P},null,8,["current-page","page-size","total"])])])]),_:1}),a(z,{span:16},{default:l(()=>[p("div",null,[e[10]||(e[10]=p("div",null,"Span\u8C03\u7528\u56FE",-1)),a(s,{gutter:15},{default:l(()=>[a(z,{span:12},{default:l(()=>[a(V,{label:"TraceId"},{default:l(()=>[a(Q,{modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=r=>f.value=r),placeholder:"\u8BF7\u5728\u5DE6\u4FA7\u9009\u62E9Endpoint\u540E\uFF0C\u9009\u62E9TraceId",style:{width:"90%"},clearable:"",onChange:e[4]||(e[4]=r=>S())},{default:l(()=>[(q(!0),C(Z,null,$(ee(d),r=>(q(),ae(M,{key:r,label:r,value:r},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(z,{span:12},{default:l(()=>[a(V,null,{default:l(()=>[a(X,{"active-text":"\u4EC5\u67E5\u770B\u5C5E\u4E8E\u5F53\u524Dservice\u7684span","inactive-text":"\u67E5\u770B\u5F53\u524Dtrace\u4E0B\u7684\u6240\u6709span",modelValue:N.value,"onUpdate:modelValue":e[5]||(e[5]=r=>N.value=r),size:"small",onChange:e[6]||(e[6]=r=>S())},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),a(K,{ref_key:"traceTopologyDiagramRef",ref:y,serviceName:g.value},null,8,["serviceName"])]),_:1})]),_:1})]),_:1})])}}},ne=W(ie,[["__scopeId","data-v-871084db"]]);export{ne as default};
