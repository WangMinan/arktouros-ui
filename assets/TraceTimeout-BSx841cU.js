import { a as L, g as V } from "./index-C9YZnyy9.js";
import { b as z, c as D } from "./index-CbBuDeaZ.js";
import { b as R } from "./@vueuse-BrKJyrsM.js";
import { i as B } from "./echarts-DuzIGl-8.js";
import { t as E } from "./dateUtil-BAIp0Nbc.js";
import { u as O } from "./index-DQDgIJ2e.js";
import { u as F } from "./vue-router-DZ3MrWk1.js";
import { _ as N } from "./index-CoYJRCdI.js";
import { a as U } from "./element-plus-hbUA32rR.js";
import { ad as M, w as q, b as G, W as H, c as x, o as C, r as w, X as J, Q as r, I as s, ag as d, M as T, a as $ } from "./@vue-CnBZ4jx_.js";
import "./axios-t--hEgTQ.js";
import "./nprogress-Bhg-JNl3.js";
import "./clipboard-BFgOkOlC.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
import "./tslib-BDyQ-Jie.js";
import "./zrender-Cg4aFrUj.js";
import "./pinia-B3EJDjGG.js";
import "./@element-plus-Rv25Faa4.js";
import "./pinia-plugin-persistedstate-DNriL1Fj.js";
import "./destr-BPvN1X9m.js";
import "./deep-pick-omit-CegYQlcN.js";
import "./lodash-es-C-xrcuFl.js";
import "./@popperjs-DB1lLFnh.js";
import "./@ctrl-r5W6hzzQ.js";
import "./dayjs-dlSZ-o3N.js";
import "./async-validator-CRx4dHSJ.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BCLhozDd.js";
const Q = { id: "trace-timeout-histogram-div" }, W = { __name: "TraceTimeoutDiagram", props: { spanNameCascade: Array, startAndStopTime: Array }, setup(k, { expose: c }) {
  let m;
  const h = k, y = O(), v = F(), { spanNameCascade: t, startAndStopTime: i } = M(h), u = async () => {
    let l = U.service({ lock: true, text: "\u6B63\u5728\u8BA1\u7B97\u7528\u65F6\u6570\u636E\uFF0C\u8BF7\u7B49\u5F85\u3002", background: "rgba(0, 0, 0, 0.7)" });
    try {
      let e, a;
      i.value.length === 2 ? (e = Date.parse(i.value[0]), a = Date.parse(i.value[1])) : (e = null, a = null);
      const { result: _ } = await z(t.value[1], t.value[2], e, a);
      f(_);
    } finally {
      l.close();
    }
  };
  function n(l) {
    const e = l[0].data.span;
    let a = "\u6B63\u5E38";
    e.tags.forEach((S) => {
      S.key === "long_duration" && S.value === "true" && (a = S.key);
    });
    const _ = E(e.startTime), I = e.endTime === "-1" ? "\u8BE5Span\u8D85\u65F6" : E(e.endTime), P = e.localEndPoint.ip === "" ? "null" : e.localEndPoint.ip, A = e.remoteEndPoint.ip === "" ? "null" : e.remoteEndPoint.ip;
    return `<div>
                    <div>
                        <b>\u5F53\u524DSpan\u8BE6\u7EC6\u60C5\u51B5</b>
                    </div>
                    <ul>
                        <li>id: ${e.id}</li>
                        <li>\u540D\u79F0: ${e.name}</li>
                        <li>\u6240\u5C5E\u670D\u52A1: ${e.serviceName}</li>
                        <li>\u5F00\u59CB\u65F6\u95F4: ${_}</li>
                        <li>\u7ED3\u675F\u65F6\u95F4: ${I}</li>
                        <li>span\u72B6\u6001: ${a}</li>
                        <li>\u7236\u8282\u70B9SpanId: ${e.parentSpanId}</li>
                        <li>\u6240\u5C5EendPoint: ${e.localEndPoint.serviceName}</li>
                        <li>\u6240\u5C5EendPoint ip\u4E0E\u7AEF\u53E3: ${P}:${e.localEndPoint.port}</li>
                        <li>\u8FDC\u7A0BendPoint: ${e.remoteEndPoint.serviceName}</li>
                        <li>\u8FDC\u7A0BendPoint ip\u4E0E\u7AEF\u53E3: ${A}:${e.remoteEndPoint.port}</li>
                    </ul>
                </div>`;
  }
  const o = async (l) => {
    y.$patch((e) => {
      e.currentAside.active = "/main/trace/dashboard";
    }), await v.push(`/main/trace/dashboard?serviceName=${l.serviceName}&traceId=${l.traceId}`);
  }, f = (l) => {
    l.spanTimesValues.forEach((a) => {
      a.itemStyle || (a.itemStyle = {}), a.span.tags.some((_) => _.key === "long_duration" && _.value === "true") && (a.itemStyle.color = "#FF2700");
    }), m && m.dispose();
    let e = { backgroundColor: p.value === "dark" ? "#212224" : "#fff", tooltip: { trigger: "axis", triggerOn: "mousemove", backgroundColor: p.value === "dark" ? "#212224" : "#fff", textStyle: { color: p.value === "dark" ? "#fff" : "#212224" }, confine: true, formatter: function(a) {
      return n(a);
    } }, xAxis: { name: "\u65F6\u95F4", type: "category", boundaryGap: false, data: l.xaxis }, yAxis: { name: "\u8017\u65F6(ms)", type: "value" }, series: { name: "\u8017\u65F6", type: "line", smooth: true, data: l.spanTimesValues } };
    m = B(document.getElementById("trace-timeout-histogram-div")), m.setOption(e), m.on("click", async function(a) {
      await o(a.data.span);
    });
  }, p = R("theme-appearance", "auto");
  q(p, () => {
    u();
  }), c({ getLineChart: u });
  let g;
  G(() => {
    window.addEventListener("resize", b), g = new ResizeObserver(() => b), g.observe(document.getElementById("trace-timeout-histogram-div"));
  }), H(() => {
    window.removeEventListener("resize", b), g.disconnect();
  });
  const b = () => {
    m && m.resize();
  };
  return (l, e) => (C(), x("div", Q));
} }, X = N(W, [["__scopeId", "data-v-01bbc8ee"]]), j = { class: "trace-main-container" }, K = { style: { "margin-top": "1%" } }, Y = { __name: "TraceTimeout", setup(k) {
  const c = w([]), m = w(), h = J({ lazy: true, async lazyLoad(v, t) {
    const i = [], { level: u } = v;
    if (u === 0) {
      const n = await L();
      if (n === null) return;
      n.result.map((o) => ({ leaf: false, value: o, label: o })).forEach((o) => {
        i.push(o);
      });
    } else if (u === 1) {
      const n = await V({ query: "", namespace: v.value, pageNum: 1, pageSize: 1e3 });
      if (n === null) return;
      n.result.data.map((o) => ({ leaf: false, value: o.name, label: o.name === "" ? "null" : o.name })).forEach((o) => {
        i.push(o);
      });
    } else if (u === 2) {
      let n = null, o = null;
      c.value != null && c.value.length === 2 && (n = Date.parse(c.value[0]), o = Date.parse(c.value[1]));
      const f = await D(v.value, n, o);
      if (f === null) return;
      f.result.map((p) => ({ leaf: true, value: p, label: p })).forEach((p) => {
        i.push(p);
      });
    }
    t(i);
  } }), y = w();
  return (v, t) => {
    const i = d("el-breadcrumb-item"), u = d("el-breadcrumb"), n = d("el-row"), o = d("el-date-picker"), f = d("el-form-item"), p = d("el-cascader"), g = d("el-button"), b = d("el-form"), l = d("el-divider"), e = d("el-card");
    return C(), x("div", j, [r(n, { class: "breadcrumb-header-row" }, { default: s(() => [r(u, { "separator-icon": "ArrowRight" }, { default: s(() => [r(i, { to: { path: "/main" } }, { default: s(() => t[3] || (t[3] = [T(" \u4E3B\u9875 ")])), _: 1 }), r(i, null, { default: s(() => t[4] || (t[4] = [T(" \u94FE\u8DEF ")])), _: 1 }), r(i, { to: { path: "/main/trace/dashboard" } }, { default: s(() => t[5] || (t[5] = [T(" \u8D85\u65F6\u7EDF\u8BA1 ")])), _: 1 })]), _: 1 })]), _: 1 }), r(e, { class: "table-card" }, { default: s(() => [r(n, { class: "cascader-div" }, { default: s(() => [r(b, { inline: true }, { default: s(() => [r(f, { style: { width: "60%" }, label: "\u8D77\u6B62\u65F6\u95F4" }, { default: s(() => [r(o, { modelValue: c.value, "onUpdate:modelValue": t[0] || (t[0] = (a) => c.value = a), type: "datetimerange", "range-separator": "\u5230", "start-placeholder": "\u5F00\u59CB\u65F6\u95F4", "end-placeholder": "\u7ED3\u675F\u65F6\u95F4" }, null, 8, ["modelValue"])]), _: 1 }), r(f, { style: { width: "40%" }, label: "Span\u540D\u79F0", prop: "spanName" }, { default: s(() => [r(p, { style: { width: "100%" }, placeholder: "\u8BF7\u9009\u62E9\u5BF9\u5E94Span\u540D\u79F0", modelValue: m.value, "onUpdate:modelValue": t[1] || (t[1] = (a) => m.value = a), clearable: "", props: h, "show-all-levels": false }, null, 8, ["modelValue", "props"])]), _: 1 }), r(f, null, { default: s(() => [r(g, { type: "primary", onClick: t[2] || (t[2] = (a) => y.value.getLineChart()) }, { default: s(() => t[6] || (t[6] = [T(" \u7EDF\u8BA1 ")])), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }), r(l), $("div", K, [t[7] || (t[7] = $("div", null, "\u8C03\u7528\u8D85\u65F6\u7EDF\u8BA1", -1)), r(X, { ref_key: "traceTimeoutDiagramRef", ref: y, spanNameCascade: m.value, startAndStopTime: c.value }, null, 8, ["spanNameCascade", "startAndStopTime"])])]), _: 1 })]);
  };
} }, xe = N(Y, [["__scopeId", "data-v-c38139ec"]]);
export {
  xe as default
};
