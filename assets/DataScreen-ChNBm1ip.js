import { u as B, a as C } from "./@vueuse-BrKJyrsM.js";
import { u as Q } from "./vue-router-DZ3MrWk1.js";
import { u as A } from "./index-DQDgIJ2e.js";
import { d as z, s as V } from "./pinia-B3EJDjGG.js";
import { r as d, ag as n, c as L, o as x, a as _, O as T, u as v, Q as e, I as t, X as H, b as P, P as F, a6 as X, H as Z, M as I } from "./@vue-CnBZ4jx_.js";
import { _ as b } from "./index-CnBrNuue.js";
import { S as q } from "./ServiceTopologyDiagram-CG1fzdgT.js";
import { g as J } from "./index-CfJzNW8w.js";
import { t as K } from "./dateUtil-NlCD2qvi.js";
import { T as O } from "./TraceTopologyDiagram-BcpBfgqL.js";
import { g as U } from "./index-kdN5_kf3.js";
import { M as W } from "./MetricDiagram-69UD443s.js";
import { g as Y } from "./index-BPCCi87A.js";
import "./@element-plus-Rv25Faa4.js";
import "./element-plus-ChqUdKh3.js";
import "./lodash-es-C-xrcuFl.js";
import "./@popperjs-DB1lLFnh.js";
import "./@ctrl-r5W6hzzQ.js";
import "./dayjs-B_aAqRSu.js";
import "./async-validator-CRx4dHSJ.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BCLhozDd.js";
import "./pinia-plugin-persistedstate-8SpmOswp.js";
import "./destr-CVtkxrq9.js";
import "./deep-pick-omit-CegYQlcN.js";
import "./echarts-DuzIGl-8.js";
import "./tslib-BDyQ-Jie.js";
import "./zrender-Cg4aFrUj.js";
import "./axios-BtuGy7By.js";
import "./nprogress-Dx41icWA.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
const R = z("header", () => {
  const f = d({ service: "" });
  return { currentHeader: f, resetActive: () => {
    f.value.service = "";
  } };
}, { persist: { storage: sessionStorage, paths: ["currentHeader"], key: "currentHeader" } }), j = { class: "header", id: "header" }, G = { class: "l-content" }, ee = { class: "r-content" }, te = { __name: "DataScreenHeader", setup(f) {
  const s = Q(), k = R(), { currentHeader: h } = V(k), c = B({ storageKey: "theme-appearance", valueDark: "dark", valueLight: "light" }), y = A(), N = C(c), S = (p) => {
    let a = p.clientX, l = p.clientY, g = Math.hypot(Math.max(a, innerWidth - a), Math.max(l, innerHeight - l));
    if (!document.startViewTransition) {
      N();
      return;
    }
    document.startViewTransition(async () => {
      N();
    }).ready.then(() => {
      let u = [`circle(0px at ${a}px ${l}px)`, `circle(${g}px at ${a}px ${l}px)`];
      document.documentElement.animate({ clipPath: c.value ? [...u].reverse() : u }, { duration: 200, easing: "ease-in", pseudoElement: c.value ? "::view-transition-old(root)" : "::view-transition-new(root)" });
    });
  };
  return (p, a) => {
    const l = n("el-switch"), g = n("el-button"), w = n("el-tooltip"), u = n("el-space");
    return x(), L("div", j, [_("div", G, [_("h1", null, "\u670D\u52A1\u6CBB\u7406\u589E\u5F3A\u8F6F\u4EF6\u53EF\u89C6\u5316\u5927\u5C4F -- \u5F53\u524D\u670D\u52A1: " + T(v(h).service), 1)]), a[2] || (a[2] = _("div", { class: "flex-grow" }, null, -1)), _("div", ee, [e(u, { wrap: "" }, { default: t(() => [_("div", null, [e(l, { "model-value": v(c), onClick: S, "active-icon": "Sunny", "inactive-icon": "Moon", size: "large", "inline-prompt": "", style: { "--el-switch-on-color": "#64676a" } }, null, 8, ["model-value"])]), _("div", null, [e(w, { content: "\u8FD4\u56DE\u9996\u9875", placement: "bottom" }, { default: t(() => [e(g, { icon: "HomeFilled", circle: "", onClick: a[0] || (a[0] = (M) => {
      v(s).push("/main"), v(y).resetActive();
    }) })]), _: 1 })]), _("div", null, [e(w, { content: "\u5237\u65B0", placement: "bottom" }, { default: t(() => [e(g, { icon: "Refresh", circle: "", onClick: a[1] || (a[1] = (M) => v(s).go(0)) })]), _: 1 })])]), _: 1 })])]);
  };
} }, ae = b(te, [["__scopeId", "data-v-7c9e3d00"]]), oe = { class: "data-card-container" }, re = { __name: "DataScreenMain", setup(f) {
  const s = d(""), k = H({ query: "", namespace: "default", pageNum: 1, pageSize: 100 }), h = R(), c = d({ pageNum: 1, pageSize: 3, serviceName: "", traceId: "", keyword: "", keywordNotIncluded: "", severityText: "", startTimestamp: 0, endTimestamp: Date.now() }), y = H({ serviceName: "", pageNum: 1, pageSize: 10 }), N = async () => {
    const o = await Y(k);
    o === null && (s.value = "");
    const i = [];
    o.result.data.map((r) => {
      i.push(r.name);
    }), s.value = i[Math.floor(Math.random() * i.length)], h.$patch((r) => {
      r.currentHeader.service = s.value;
    });
  }, S = d([]), p = d([]), a = async () => {
    const o = await J(c.value);
    S.value = o.result.data;
  }, l = async () => {
    const o = await U(y);
    o === null || o.result.length === 0 || (o.result.forEach((i) => {
      i.traceIds.forEach((r) => {
        p.value.push(r);
      });
    }), u.value.getTopology(p.value[Math.floor(Math.random() * p.value.length)]));
  }, g = async () => {
    await M.value.toggleMetrics();
  }, w = async () => {
    await N(), await a(), await l(), await g();
  }, u = d(), M = d(), E = d({ serviceName: "", metricNameLimit: 2, startTimeStamp: 0, endTimeStamp: 0 });
  return P(() => {
    w();
    const o = document.getElementById("service-topology-dom");
    o.style.width = "400px", o.style.height = "250px";
    const i = document.getElementById("trace-topology-div");
    i.style.width = "300px", i.style.height = "180px";
  }), (o, i) => {
    const r = n("el-card"), m = n("el-col"), $ = n("el-row");
    return x(), L("div", oe, [e($, { gutter: 15, class: "diagram-row-1" }, { default: t(() => [e(m, { span: 14 }, { default: t(() => [e(r, { class: "diagram-el-card" }, { default: t(() => [e(q, { class: "service-topology-diagram", namespace: "default", symbolSize: 25, repulsion: 50, edgeLength: 50 })]), _: 1 })]), _: 1 }), e(m, { span: 10 }, { default: t(() => [e(r, { class: "diagram-el-card" }, { default: t(() => [(x(true), L(F, null, X(S.value, (D) => (x(), Z($, { "v-if": S.value.length > 0, key: D, style: { "word-break": "break-all" } }, { default: t(() => [e(m, { span: 4 }, { default: t(() => [I(T(D.serviceName), 1)]), _: 2 }, 1024), e(m, { span: 4 }, { default: t(() => [I(T(v(K)(D.timestamp)), 1)]), _: 2 }, 1024), e(m, { span: 3 }, { default: t(() => [I(T(D.severityText), 1)]), _: 2 }, 1024), e(m, { span: 8 }, { default: t(() => [I(T(D.content), 1)]), _: 2 }, 1024)]), _: 2 }, 1032, ["v-if"]))), 128))]), _: 1 })]), _: 1 })]), _: 1 }), e($, { gutter: 15, class: "diagram-row-2" }, { default: t(() => [e(m, { span: 8 }, { default: t(() => [e(r, { class: "diagram-el-card" }, { default: t(() => [e(O, { ref_key: "traceTopologyDiagramRef", ref: u, serviceName: ["default", s.value], innerService: false }, null, 8, ["serviceName"])]), _: 1 })]), _: 1 }), e(m, { span: 16 }, { default: t(() => [e(r, { class: "diagram-el-card", id: "metricCardRef" }, { default: t(() => [e(W, { ref_key: "metricDiagramRef", ref: M, metricQueryDto: E.value, startAndStopTime: ["1990-09-25T00:00:00Z", "2024-09-25T00:00:00Z"] }, null, 8, ["metricQueryDto"])]), _: 1 })]), _: 1 })]), _: 1 })]);
  };
} }, ne = b(re, [["__scopeId", "data-v-7deb1bd1"]]), se = { class: "dataScreenContainer" }, ie = { __name: "DataScreen", setup(f) {
  return (s, k) => {
    const h = n("el-header"), c = n("el-main"), y = n("el-container");
    return x(), L("div", se, [e(y, null, { default: t(() => [e(h, null, { default: t(() => [e(ae)]), _: 1 }), e(c, null, { default: t(() => [e(ne)]), _: 1 })]), _: 1 })]);
  };
} }, Ve = b(ie, [["__scopeId", "data-v-46aa57ad"]]);
export {
  Ve as default
};
