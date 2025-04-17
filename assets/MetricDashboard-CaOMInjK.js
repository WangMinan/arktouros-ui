import { a as x, g as A } from "./index-Dm-t6uTA.js";
import { M as E, d as T } from "./MetricDiagram-gaTjkLnf.js";
import { u as R } from "./vue-router-DZ3MrWk1.js";
import { _ as B } from "./index-D1hp6qJB.js";
import { a as Q, E as h } from "./element-plus-hbUA32rR.js";
import { r as _, X as z, c as I, Q as t, I as a, ag as l, P as U, o as F, a as u, M as c } from "./@vue-CnBZ4jx_.js";
import "./axios-t--hEgTQ.js";
import "./nprogress-Bhg-JNl3.js";
import "./clipboard-BFgOkOlC.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
import "./@vueuse-BrKJyrsM.js";
import "./echarts-DuzIGl-8.js";
import "./tslib-BDyQ-Jie.js";
import "./zrender-Cg4aFrUj.js";
import "./dateUtil-BAIp0Nbc.js";
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
const P = { class: "search-area" }, q = { __name: "MetricDashboard", setup(X) {
  const g = R(), s = _({ serviceName: "", metricNameLimit: 0, startTimeStamp: 0, endTimeStamp: 0 }), v = _([]), y = z({ lazy: true, async lazyLoad(i, e) {
    const n = [], { level: d } = i;
    if (d === 0) {
      const o = await x();
      if (o === null) return;
      o.result.map((r) => ({ leaf: false, value: r, label: r })).forEach((r) => {
        n.push(r);
      });
    } else if (d === 1) {
      const o = await A({ query: "", namespace: i.value, pageNum: 1, pageSize: 1e3 });
      if (o === null) return;
      o.result.data.map((r) => ({ leaf: true, value: r.name, label: r.name === "" ? "null" : r.name })).forEach((r) => {
        n.push(r);
      });
    }
    e(n);
  } }), p = _(), N = () => {
    p.value && (s.value.serviceName = p.value[1]);
  }, b = _(), V = async () => {
    const i = Q.service({ lock: true, text: "\u6B63\u5728\u6267\u884C\u6570\u636E\u8FD0\u7EF4\u64CD\u4F5C\uFF0C\u8BF7\u7B49\u5F85\u3002", background: "rgba(0, 0, 0, 0.7)" });
    try {
      const e = await T();
      if (e === null || e.result.length === 0) return;
      h.success("\u5220\u9664\u6240\u6709\u6570\u503C\u6570\u636E\u6210\u529F");
    } finally {
      i.close(), g.go(0);
    }
  };
  return (i, e) => {
    const n = l("el-breadcrumb-item"), d = l("el-breadcrumb"), o = l("el-button"), r = l("el-tooltip"), k = l("el-row"), w = l("el-cascader"), f = l("el-form-item"), D = l("el-input-number"), M = l("el-date-picker"), S = l("el-form"), C = l("el-divider"), L = l("el-card");
    return F(), I(U, null, [t(k, { class: "breadcrumb-header-row" }, { default: a(() => [t(d, { "separator-icon": "ArrowRight" }, { default: a(() => [t(n, null, { default: a(() => e[4] || (e[4] = [u("a", { href: "/main" }, "\u4E3B\u9875", -1)])), _: 1 }), t(n, null, { default: a(() => e[5] || (e[5] = [u("a", { href: "/main/metric" }, "\u6570\u503C\u6982\u89C8", -1)])), _: 1 })]), _: 1 }), t(r, { placement: "bottom" }, { content: a(() => e[6] || (e[6] = [c(" \u70B9\u51FB\u8BE5\u6309\u94AE\u5C06\u4F1A"), u("b", { style: { color: "red" } }, "\u5220\u9664\u6240\u6709\u6570\u503C\u6570\u636E", -1), c("\uFF0C\u8BF7\u786E\u4FDD\u60A8\u77E5\u6653\u8BE5\u64CD\u4F5C\u5C06\u5E26\u6765\u7684\u540E\u679C\u3002 "), u("br", null, null, -1), c(" \u5220\u9664\u64CD\u4F5C\u5C06\u9501\u5B9A\u7528\u6237\u754C\u9762\u76F4\u81F3\u5220\u9664\u5B8C\u6210\u3002 ")])), default: a(() => [t(o, { type: "danger", onClick: V }, { default: a(() => e[7] || (e[7] = [c(" \u5220\u9664\u6240\u6709\u6570\u503C\u6570\u636E ")])), _: 1 })]), _: 1 })]), _: 1 }), t(L, { class: "metric-card", id: "metricCardRef" }, { default: a(() => [u("div", P, [t(S, { inline: true, model: s.value, class: "demo-form-inline" }, { default: a(() => [t(f, { label: "\u670D\u52A1\u540D\u79F0" }, { default: a(() => [t(w, { placeholder: "\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4\u2192\u670D\u52A1\u540D\u79F0", modelValue: p.value, "onUpdate:modelValue": e[0] || (e[0] = (m) => p.value = m), clearable: "", props: y, "show-all-levels": false, onChange: N }, null, 8, ["modelValue", "props"])]), _: 1 }), t(f, { label: "\u56FE\u8868\u6570\u91CF" }, { default: a(() => [t(r, { effect: "light", content: "\u7F6E0\u65F6\u8868\u793A\u641C\u7D22\u670D\u52A1\u4E0B\u6240\u6709\u6570\u503C\u8BB0\u5F55", placement: "top", enterable: false }, { default: a(() => [t(D, { min: 0, modelValue: s.value.metricNameLimit, "onUpdate:modelValue": e[1] || (e[1] = (m) => s.value.metricNameLimit = m) }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), t(f, { label: "\u8D77\u6B62\u65F6\u95F4" }, { default: a(() => [t(M, { modelValue: v.value, "onUpdate:modelValue": e[2] || (e[2] = (m) => v.value = m), type: "datetimerange", "range-separator": "\u5230", "start-placeholder": "\u5F00\u59CB\u65F6\u95F4", "end-placeholder": "\u7ED3\u675F\u65F6\u95F4" }, null, 8, ["modelValue"])]), _: 1 }), t(f, null, { default: a(() => [t(o, { type: "primary", onClick: e[3] || (e[3] = (m) => b.value.toggleMetrics()) }, { default: a(() => e[8] || (e[8] = [c("\u641C\u7D22")])), _: 1 })]), _: 1 })]), _: 1 }, 8, ["model"])]), t(C), t(E, { ref_key: "metricDiagramRef", ref: b, metricQueryDto: s.value, startAndStopTime: v.value }, null, 8, ["metricQueryDto", "startAndStopTime"])]), _: 1 })], 64);
  };
} }, ge = B(q, [["__scopeId", "data-v-c56159d3"]]);
export {
  ge as default
};
