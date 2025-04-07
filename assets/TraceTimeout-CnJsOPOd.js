import { a as A, g as L } from "./index-zlTQOoWn.js";
import { b as V, c as z } from "./index-C5wDZic-.js";
import { b as D } from "./@vueuse-BrKJyrsM.js";
import { i as R } from "./echarts-DuzIGl-8.js";
import { t as E } from "./dateUtil-NlCD2qvi.js";
import { u as B } from "./index-DQDgIJ2e.js";
import { u as O } from "./vue-router-DZ3MrWk1.js";
import { _ as k } from "./index-Bhs3FTqI.js";
import { a as F } from "./element-plus-BzJ0EF8k.js";
import { ad as U, w as M, b as q, W as G, c as N, o as x, r as S, X as H, Q as o, I as s, ag as p, M as T, a as $ } from "./@vue-CnBZ4jx_.js";
import "./axios-t--hEgTQ.js";
import "./nprogress-Dx41icWA.js";
import "./dayjs-B_aAqRSu.js";
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
import "./async-validator-CRx4dHSJ.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BCLhozDd.js";
const J = { id: "trace-timeout-histogram-div" }, Q = { __name: "TraceTimeoutDiagram", props: { spanNameCascade: Array, startAndStopTime: Array }, setup(w, { expose: c }) {
  let m;
  const y = w, b = B(), v = O(), { spanNameCascade: t, startAndStopTime: i } = U(y), u = async () => {
    let l = F.service({ lock: true, text: "\u6B63\u5728\u8BFB\u53D6\u6570\u636E", spinner: "el-icon-loading", background: "rgba(0, 0, 0, 0.7)" });
    try {
      let e, r;
      i.value.length === 2 ? (e = Date.parse(i.value[0]), r = Date.parse(i.value[1])) : (e = null, r = null);
      const { result: h } = await V(t.value[1], t.value[2], e, r);
      f(h);
    } finally {
      l.close();
    }
  };
  function n(l) {
    const e = l[0].data.span, r = l.color === "#FFEE00" ? "\u5F02\u5E38" : "\u6B63\u5E38", h = E(e.startTime), C = e.endTime === "-1" ? "\u8BE5Span\u8D85\u65F6" : E(e.endTime), I = e.localEndPoint.ip === "" ? "null" : e.localEndPoint.ip, P = e.remoteEndPoint.ip === "" ? "null" : e.remoteEndPoint.ip;
    return `<div>
                    <div>
                        <b>\u5F53\u524DSpan\u8BE6\u7EC6\u60C5\u51B5</b>
                    </div>
                    <ul>
                        <li>id: ${e.id}</li>
                        <li>\u540D\u79F0: ${e.name}</li>
                        <li>\u6240\u5C5E\u670D\u52A1: ${e.serviceName}</li>
                        <li>\u5F00\u59CB\u65F6\u95F4: ${h}</li>
                        <li>\u7ED3\u675F\u65F6\u95F4: ${C}</li>
                        <li>span\u72B6\u6001: ${r}</li>
                        <li>\u7236\u8282\u70B9SpanId: ${e.parentSpanId}</li>
                        <li>\u6240\u5C5EendPoint: ${e.localEndPoint.serviceName}</li>
                        <li>\u6240\u5C5EendPoint ip\u4E0E\u7AEF\u53E3: ${I}:${e.localEndPoint.port}</li>
                        <li>\u8FDC\u7A0BendPoint: ${e.remoteEndPoint.serviceName}</li>
                        <li>\u8FDC\u7A0BendPoint ip\u4E0E\u7AEF\u53E3: ${P}:${e.remoteEndPoint.port}</li>
                    </ul>
                </div>`;
  }
  const a = async (l) => {
    b.$patch((e) => {
      e.currentAside.active = "/main/trace/dashboard";
    }), await v.push(`/main/trace/dashboard?serviceName=${l.serviceName}&traceId=${l.traceId}`);
  }, f = (l) => {
    m && m.dispose();
    let e = { backgroundColor: d.value === "dark" ? "#212224" : "#fff", tooltip: { trigger: "axis", triggerOn: "mousemove", backgroundColor: d.value === "dark" ? "#212224" : "#fff", textStyle: { color: d.value === "dark" ? "#fff" : "#212224" }, confine: true, formatter: function(r) {
      return n(r);
    } }, xAxis: { name: "\u65F6\u95F4", type: "category", boundaryGap: false, data: l.xaxis }, yAxis: { name: "\u8017\u65F6(ms)", type: "value" }, series: { name: "\u8017\u65F6", type: "line", smooth: true, data: l.spanTimesValues } };
    m = R(document.getElementById("trace-timeout-histogram-div")), m.setOption(e), m.on("click", async function(r) {
      await a(r.data.span);
    });
  }, d = D("theme-appearance", "auto");
  M(d, () => {
    u();
  }), c({ getLineChart: u });
  let _;
  q(() => {
    window.addEventListener("resize", g), _ = new ResizeObserver(() => g), _.observe(document.getElementById("trace-timeout-histogram-div"));
  }), G(() => {
    window.removeEventListener("resize", g), _.disconnect();
  });
  const g = () => {
    m && m.resize();
  };
  return (l, e) => (x(), N("div", J));
} }, W = k(Q, [["__scopeId", "data-v-20fd4a22"]]), X = { class: "trace-main-container" }, j = { style: { "margin-top": "1%" } }, K = { __name: "TraceTimeout", setup(w) {
  const c = S([]), m = S(), y = H({ lazy: true, async lazyLoad(v, t) {
    const i = [], { level: u } = v;
    if (u === 0) {
      const n = await A();
      if (n === null) return;
      n.result.map((a) => ({ leaf: false, value: a, label: a })).forEach((a) => {
        i.push(a);
      });
    } else if (u === 1) {
      const n = await L({ query: "", namespace: v.value, pageNum: 1, pageSize: 1e3 });
      if (n === null) return;
      n.result.data.map((a) => ({ leaf: false, value: a.name, label: a.name === "" ? "null" : a.name })).forEach((a) => {
        i.push(a);
      });
    } else if (u === 2) {
      let n = null, a = null;
      c.value != null && c.value.length === 2 && (n = Date.parse(c.value[0]), a = Date.parse(c.value[1]));
      const f = await z(v.value, n, a);
      if (f === null) return;
      f.result.map((d) => ({ leaf: true, value: d, label: d })).forEach((d) => {
        i.push(d);
      });
    }
    t(i);
  } }), b = S();
  return (v, t) => {
    const i = p("el-breadcrumb-item"), u = p("el-breadcrumb"), n = p("el-row"), a = p("el-date-picker"), f = p("el-form-item"), d = p("el-cascader"), _ = p("el-button"), g = p("el-form"), l = p("el-divider"), e = p("el-card");
    return x(), N("div", X, [o(n, { class: "breadcrumb-header-row" }, { default: s(() => [o(u, { "separator-icon": "ArrowRight" }, { default: s(() => [o(i, { to: { path: "/main" } }, { default: s(() => t[3] || (t[3] = [T(" \u4E3B\u9875 ")])), _: 1 }), o(i, null, { default: s(() => t[4] || (t[4] = [T(" \u94FE\u8DEF ")])), _: 1 }), o(i, { to: { path: "/main/trace/dashboard" } }, { default: s(() => t[5] || (t[5] = [T(" \u8D85\u65F6\u7EDF\u8BA1 ")])), _: 1 })]), _: 1 })]), _: 1 }), o(e, { class: "table-card" }, { default: s(() => [o(n, { class: "cascader-div" }, { default: s(() => [o(g, { inline: true }, { default: s(() => [o(f, { style: { width: "40%" }, label: "\u8D77\u6B62\u65F6\u95F4" }, { default: s(() => [o(a, { modelValue: c.value, "onUpdate:modelValue": t[0] || (t[0] = (r) => c.value = r), type: "datetimerange", "range-separator": "\u5230", "start-placeholder": "\u5F00\u59CB\u65F6\u95F4", "end-placeholder": "\u7ED3\u675F\u65F6\u95F4" }, null, 8, ["modelValue"])]), _: 1 }), o(f, { style: { width: "40%" }, label: "Span\u540D\u79F0", prop: "spanName" }, { default: s(() => [o(d, { style: { width: "100%" }, placeholder: "\u8BF7\u9009\u62E9\u5BF9\u5E94Span\u540D\u79F0", modelValue: m.value, "onUpdate:modelValue": t[1] || (t[1] = (r) => m.value = r), clearable: "", props: y, "show-all-levels": false }, null, 8, ["modelValue", "props"])]), _: 1 }), o(f, null, { default: s(() => [o(_, { type: "primary", onClick: t[2] || (t[2] = (r) => b.value.getLineChart()) }, { default: s(() => t[6] || (t[6] = [T(" \u7EDF\u8BA1 ")])), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }), o(l), $("div", j, [t[7] || (t[7] = $("div", null, "\u8C03\u7528\u8D85\u65F6\u7EDF\u8BA1", -1)), o(W, { ref_key: "traceTimeoutDiagramRef", ref: b, spanNameCascade: m.value, startAndStopTime: c.value }, null, 8, ["spanNameCascade", "startAndStopTime"])])]), _: 1 })]);
  };
} }, ke = k(K, [["__scopeId", "data-v-69b06649"]]);
export {
  ke as default
};
