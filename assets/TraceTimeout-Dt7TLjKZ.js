import { a as D, g as L } from "./index-DexSeZ02.js";
import { b as V, c as z } from "./index-D2Y5XtG6.js";
import { b as B } from "./@vueuse-BrKJyrsM.js";
import { i as O } from "./echarts-DuzIGl-8.js";
import { t as k } from "./dateUtil-BAIp0Nbc.js";
import { u as F } from "./index-DQDgIJ2e.js";
import { u as $ } from "./vue-router-DZ3MrWk1.js";
import { _ as R } from "./index-DcnnzvoP.js";
import { a as U } from "./element-plus-BOJqSAUc.js";
import { ad as M, w as G, b as x, W as H, c as C, o as I, r as w, X as J, Q as o, I as m, ag as v, M as T, a as E } from "./@vue-CnBZ4jx_.js";
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
const Q = { id: "trace-timeout-histogram-div" }, W = { __name: "TraceTimeoutDiagram", props: { spanNameCascade: Array, startAndStopTime: Array }, setup(N, { expose: s }) {
  let i;
  const u = N, h = F(), b = $(), { spanNameCascade: _, startAndStopTime: t } = M(u), c = async () => {
    let l = U.service({ lock: true, text: "\u6B63\u5728\u8BA1\u7B97\u7528\u65F6\u6570\u636E\uFF0C\u8BF7\u7B49\u5F85\u3002", background: "rgba(0, 0, 0, 0.7)" });
    try {
      let e, r;
      t.value.length === 2 ? (e = Date.parse(t.value[0]), r = Date.parse(t.value[1])) : (e = null, r = null);
      const { result: d } = await V(_.value[1], _.value[2], e, r);
      a(d);
    } finally {
      l.close();
    }
  };
  function y(l) {
    const e = l[0].data.span;
    let r = "\u6B63\u5E38";
    e.tags.forEach((S) => {
      S.key === "long_duration" && S.value === "true" && (r = S.key);
    });
    const d = k(e.startTime), P = e.endTime === "-1" ? "\u8BE5Span\u8D85\u65F6" : k(e.endTime), A = e.localEndPoint.ip === "" ? "null" : e.localEndPoint.ip, q = e.remoteEndPoint.ip === "" ? "null" : e.remoteEndPoint.ip;
    return `<div>
                    <div>
                        <b>\u5F53\u524DSpan\u8BE6\u7EC6\u60C5\u51B5</b>
                    </div>
                    <ul>
                        <li>id: ${e.id}</li>
                        <li>\u540D\u79F0: ${e.name}</li>
                        <li>\u6240\u5C5E\u670D\u52A1: ${e.serviceName}</li>
                        <li>\u5F00\u59CB\u65F6\u95F4: ${d}</li>
                        <li>\u7ED3\u675F\u65F6\u95F4: ${P}</li>
                        <li>span\u72B6\u6001: ${r}</li>
                        <li>\u7236\u8282\u70B9SpanId: ${e.parentSpanId}</li>
                        <li>\u6240\u5C5EendPoint: ${e.localEndPoint.serviceName}</li>
                        <li>\u6240\u5C5EendPoint ip\u4E0E\u7AEF\u53E3: ${A}:${e.localEndPoint.port}</li>
                        <li>\u8FDC\u7A0BendPoint: ${e.remoteEndPoint.serviceName}</li>
                        <li>\u8FDC\u7A0BendPoint ip\u4E0E\u7AEF\u53E3: ${q}:${e.remoteEndPoint.port}</li>
                    </ul>
                </div>`;
  }
  const n = async (l) => {
    h.$patch((e) => {
      e.currentAside.active = "/main/trace/dashboard";
    }), await b.push(`/main/trace/dashboard?serviceName=${l.serviceName}&traceId=${l.traceId}`);
  }, a = (l) => {
    l.spanTimesValues.forEach((r) => {
      r.itemStyle || (r.itemStyle = {}), r.span.tags.some((d) => d.key === "long_duration" && d.value === "true") && (r.itemStyle.color = "#FF2700");
    }), i && i.dispose();
    let e = { backgroundColor: p.value === "dark" ? "#212224" : "#fff", tooltip: { trigger: "axis", triggerOn: "mousemove", backgroundColor: p.value === "dark" ? "#212224" : "#fff", textStyle: { color: p.value === "dark" ? "#fff" : "#212224" }, confine: true, formatter: function(r) {
      return y(r);
    } }, xAxis: { name: "\u65F6\u95F4", type: "category", boundaryGap: false, data: l.xaxis }, yAxis: { name: "\u8017\u65F6(ms)", type: "value" }, series: { name: "\u8017\u65F6", type: "line", smooth: true, data: l.spanTimesValues } };
    i = O(document.getElementById("trace-timeout-histogram-div")), i.setOption(e), i.on("click", async function(r) {
      await n(r.data.span);
    });
  }, p = B("theme-appearance", "auto");
  G(p, () => {
    c();
  }), s({ getLineChart: c });
  let f;
  x(() => {
    window.addEventListener("resize", g), f = new ResizeObserver(() => g), f.observe(document.getElementById("trace-timeout-histogram-div"));
  }), H(() => {
    window.removeEventListener("resize", g), f.disconnect();
  });
  const g = () => {
    i && i.resize();
  };
  return (l, e) => (I(), C("div", Q));
} }, X = R(W, [["__scopeId", "data-v-01bbc8ee"]]), j = { class: "trace-main-container" }, K = { style: { "margin-top": "1%" } }, Y = { __name: "TraceTimeout", setup(N) {
  const s = w([]), i = w(), u = $(), h = J({ lazy: true, async lazyLoad(_, t) {
    const c = [], { level: y } = _;
    if (y === 0) {
      const n = await D();
      if (n === null) return;
      n.result.map((a) => ({ leaf: false, value: a, label: a })).forEach((a) => {
        c.push(a);
      });
    } else if (y === 1) {
      const n = await L({ query: "", namespace: _.value, pageNum: 1, pageSize: 1e3 });
      if (n === null) return;
      n.result.data.map((a) => ({ leaf: false, value: a.name, label: a.name === "" ? "null" : a.name })).forEach((a) => {
        c.push(a);
      });
    } else if (y === 2) {
      let n = null, a = null;
      console.log(s.value), s.value != null && s.value.length === 2 && (n = Date.parse(s.value[0]), a = Date.parse(s.value[1])), console.log(n);
      const p = await z(_.value, n, a);
      if (p === null) return;
      p.result.map((f) => ({ leaf: true, value: f, label: f })).forEach((f) => {
        c.push(f);
      });
    }
    t(c);
  } }), b = w();
  return x(async () => {
    u.currentRoute.value.query.startTime != null && u.currentRoute.value.query.stopTime != null && u.currentRoute.value.query.namespace != null && u.currentRoute.value.query.serviceName != null && u.currentRoute.value.query.spanName != null && (s.value = [new Date(Number(u.currentRoute.value.query.startTime)), new Date(Number(u.currentRoute.value.query.stopTime))], console.log(s.value), i.value = [u.currentRoute.value.query.namespace, u.currentRoute.value.query.serviceName, u.currentRoute.value.query.spanName]);
  }), (_, t) => {
    const c = v("el-breadcrumb-item"), y = v("el-breadcrumb"), n = v("el-row"), a = v("el-date-picker"), p = v("el-form-item"), f = v("el-cascader"), g = v("el-button"), l = v("el-form"), e = v("el-divider"), r = v("el-card");
    return I(), C("div", j, [o(n, { class: "breadcrumb-header-row" }, { default: m(() => [o(y, { "separator-icon": "ArrowRight" }, { default: m(() => [o(c, { to: { path: "/main" } }, { default: m(() => t[3] || (t[3] = [T(" \u4E3B\u9875 ")])), _: 1 }), o(c, null, { default: m(() => t[4] || (t[4] = [T(" \u94FE\u8DEF ")])), _: 1 }), o(c, { to: { path: "/main/trace/dashboard" } }, { default: m(() => t[5] || (t[5] = [T(" \u8D85\u65F6\u7EDF\u8BA1 ")])), _: 1 })]), _: 1 })]), _: 1 }), o(r, { class: "table-card" }, { default: m(() => [o(n, { class: "cascader-div" }, { default: m(() => [o(l, { inline: true }, { default: m(() => [o(p, { style: { width: "60%" }, label: "\u8D77\u6B62\u65F6\u95F4" }, { default: m(() => [o(a, { modelValue: s.value, "onUpdate:modelValue": t[0] || (t[0] = (d) => s.value = d), type: "datetimerange", "range-separator": "\u5230", "start-placeholder": "\u5F00\u59CB\u65F6\u95F4", "end-placeholder": "\u7ED3\u675F\u65F6\u95F4", clearable: "" }, null, 8, ["modelValue"])]), _: 1 }), o(p, { style: { width: "40%" }, label: "Span\u540D\u79F0", prop: "spanName" }, { default: m(() => [o(f, { style: { width: "100%" }, placeholder: "\u8BF7\u9009\u62E9\u5BF9\u5E94Span\u540D\u79F0", modelValue: i.value, "onUpdate:modelValue": t[1] || (t[1] = (d) => i.value = d), clearable: "", props: h, "show-all-levels": false }, null, 8, ["modelValue", "props"])]), _: 1 }), o(p, null, { default: m(() => [o(g, { type: "primary", onClick: t[2] || (t[2] = (d) => b.value.getLineChart()) }, { default: m(() => t[6] || (t[6] = [T(" \u7EDF\u8BA1 ")])), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }), o(e), E("div", K, [t[7] || (t[7] = E("div", null, "\u8C03\u7528\u8D85\u65F6\u7EDF\u8BA1", -1)), o(X, { ref_key: "traceTimeoutDiagramRef", ref: b, spanNameCascade: i.value, startAndStopTime: s.value }, null, 8, ["spanNameCascade", "startAndStopTime"])])]), _: 1 })]);
  };
} }, Re = R(Y, [["__scopeId", "data-v-dd2d8931"]]);
export {
  Re as default
};
