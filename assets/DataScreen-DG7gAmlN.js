import { u as B, a as C } from "./@vueuse-BrKJyrsM.js";
import { u as Q } from "./vue-router-DZ3MrWk1.js";
import { u as A } from "./index-DQDgIJ2e.js";
import { d as z, s as V } from "./pinia-B3EJDjGG.js";
import { r as d, ag as n, c as I, o as x, a as _, O as T, u as f, Q as e, I as t, X as H, b as P, P as F, a6 as X, H as Z, M as $ } from "./@vue-CnBZ4jx_.js";
import { _ as b } from "./index-B2_ngj1L.js";
import { _ as q } from "./ServiceTopologyDiagram-B7hpaW1Y.js";
import { g as J } from "./index-DSpfqMzc.js";
import { t as K } from "./dateUtil-BAIp0Nbc.js";
import { T as O } from "./TraceTopologyDiagram-B9SxlkUA.js";
import { g as U } from "./index-BLc7oVBt.js";
import { M as W } from "./MetricDiagram-DWmlWujD.js";
import { g as Y } from "./index-CsOYTb4P.js";
import "./@element-plus-Rv25Faa4.js";
import "./element-plus-hbUA32rR.js";
import "./lodash-es-C-xrcuFl.js";
import "./@popperjs-DB1lLFnh.js";
import "./@ctrl-r5W6hzzQ.js";
import "./dayjs-dlSZ-o3N.js";
import "./clipboard-BFgOkOlC.js";
import "./async-validator-CRx4dHSJ.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BCLhozDd.js";
import "./pinia-plugin-persistedstate-DNriL1Fj.js";
import "./destr-BPvN1X9m.js";
import "./deep-pick-omit-CegYQlcN.js";
import "./echarts-DuzIGl-8.js";
import "./tslib-BDyQ-Jie.js";
import "./zrender-Cg4aFrUj.js";
import "./axios-t--hEgTQ.js";
import "./nprogress-Bhg-JNl3.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
const R = z("header", () => {
  const v = d({ service: "" });
  return { currentHeader: v, resetActive: () => {
    v.value.service = "";
  } };
}, { persist: { storage: sessionStorage, paths: ["currentHeader"], key: "currentHeader" } }), j = { class: "header", id: "header" }, G = { class: "l-content" }, ee = { class: "r-content" }, te = { __name: "DataScreenHeader", setup(v) {
  const s = Q(), k = R(), { currentHeader: h } = V(k), c = B({ storageKey: "theme-appearance", valueDark: "dark", valueLight: "light" }), y = A(), N = C(c), w = (p) => {
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
    const l = n("el-switch"), g = n("el-button"), S = n("el-tooltip"), u = n("el-space");
    return x(), I("div", j, [_("div", G, [_("h1", null, "\u670D\u52A1\u6CBB\u7406\u589E\u5F3A\u8F6F\u4EF6\u53EF\u89C6\u5316\u5927\u5C4F -- \u5F53\u524D\u670D\u52A1: " + T(f(h).service), 1)]), a[2] || (a[2] = _("div", { class: "flex-grow" }, null, -1)), _("div", ee, [e(u, { wrap: "" }, { default: t(() => [_("div", null, [e(l, { "model-value": f(c), onClick: w, "active-icon": "Sunny", "inactive-icon": "Moon", size: "large", "inline-prompt": "", style: { "--el-switch-on-color": "#64676a" } }, null, 8, ["model-value"])]), _("div", null, [e(S, { content: "\u8FD4\u56DE\u9996\u9875", placement: "bottom" }, { default: t(() => [e(g, { icon: "HomeFilled", circle: "", onClick: a[0] || (a[0] = (M) => {
      f(s).push("/main"), f(y).resetActive();
    }) })]), _: 1 })]), _("div", null, [e(S, { content: "\u5237\u65B0", placement: "bottom" }, { default: t(() => [e(g, { icon: "Refresh", circle: "", onClick: a[1] || (a[1] = (M) => f(s).go(0)) })]), _: 1 })])]), _: 1 })])]);
  };
} }, ae = b(te, [["__scopeId", "data-v-7c9e3d00"]]), oe = { class: "data-card-container" }, re = { __name: "DataScreenMain", setup(v) {
  const s = d(""), k = H({ query: "", namespace: "default", pageNum: 1, pageSize: 100 }), h = R(), c = d({ pageNum: 1, pageSize: 3, serviceName: "", traceId: "", keyword: "", keywordNotIncluded: "", severityText: "", startTimestamp: 0, endTimestamp: Date.now() }), y = H({ serviceName: "", pageNum: 1, pageSize: 10 }), N = async () => {
    const o = await Y(k);
    o === null && (s.value = "");
    const i = [];
    o.result.data.map((r) => {
      i.push(r.name);
    }), s.value = i[Math.floor(Math.random() * i.length)], h.$patch((r) => {
      r.currentHeader.service = s.value;
    });
  }, w = d([]), p = d([]), a = async () => {
    const o = await J(c.value);
    w.value = o.result.data;
  }, l = async () => {
    const o = await U(y);
    o === null || o.result.length === 0 || (o.result.forEach((i) => {
      i.traceIds.forEach((r) => {
        p.value.push(r);
      });
    }), u.value.getTopology(p.value[Math.floor(Math.random() * p.value.length)]));
  }, g = async () => {
    await M.value.toggleMetrics();
  }, S = async () => {
    await N(), await a(), await l(), await g();
  }, u = d(), M = d(), E = d({ serviceName: "", metricNameLimit: 2, startTimeStamp: 0, endTimeStamp: 0 });
  return P(() => {
    S();
    const o = document.getElementById("service-topology-dom");
    o.style.width = "400px", o.style.height = "250px";
    const i = document.getElementById("trace-topology-div");
    i.style.width = "300px", i.style.height = "180px";
  }), (o, i) => {
    const r = n("el-card"), m = n("el-col"), L = n("el-row");
    return x(), I("div", oe, [e(L, { gutter: 15, class: "diagram-row-1" }, { default: t(() => [e(m, { span: 14 }, { default: t(() => [e(r, { class: "diagram-el-card" }, { default: t(() => [e(q, { class: "service-topology-diagram", namespace: "default", symbolSize: 25, repulsion: 50, edgeLength: 50 })]), _: 1 })]), _: 1 }), e(m, { span: 10 }, { default: t(() => [e(r, { class: "diagram-el-card" }, { default: t(() => [(x(true), I(F, null, X(w.value, (D) => (x(), Z(L, { "v-if": w.value.length > 0, key: D, style: { "word-break": "break-all" } }, { default: t(() => [e(m, { span: 4 }, { default: t(() => [$(T(D.serviceName), 1)]), _: 2 }, 1024), e(m, { span: 4 }, { default: t(() => [$(T(f(K)(D.timestamp)), 1)]), _: 2 }, 1024), e(m, { span: 3 }, { default: t(() => [$(T(D.severityText), 1)]), _: 2 }, 1024), e(m, { span: 8 }, { default: t(() => [$(T(D.content), 1)]), _: 2 }, 1024)]), _: 2 }, 1032, ["v-if"]))), 128))]), _: 1 })]), _: 1 })]), _: 1 }), e(L, { gutter: 15, class: "diagram-row-2" }, { default: t(() => [e(m, { span: 8 }, { default: t(() => [e(r, { class: "diagram-el-card" }, { default: t(() => [e(O, { ref_key: "traceTopologyDiagramRef", ref: u, serviceName: ["default", s.value], innerService: false }, null, 8, ["serviceName"])]), _: 1 })]), _: 1 }), e(m, { span: 16 }, { default: t(() => [e(r, { class: "diagram-el-card", id: "metricCardRef" }, { default: t(() => [e(W, { ref_key: "metricDiagramRef", ref: M, metricQueryDto: E.value, startAndStopTime: ["1990-09-25T00:00:00Z", "2024-09-25T00:00:00Z"] }, null, 8, ["metricQueryDto"])]), _: 1 })]), _: 1 })]), _: 1 })]);
  };
} }, ne = b(re, [["__scopeId", "data-v-7deb1bd1"]]), se = { class: "dataScreenContainer" }, ie = { __name: "DataScreen", setup(v) {
  return (s, k) => {
    const h = n("el-header"), c = n("el-main"), y = n("el-container");
    return x(), I("div", se, [e(y, null, { default: t(() => [e(h, null, { default: t(() => [e(ae)]), _: 1 }), e(c, null, { default: t(() => [e(ne)]), _: 1 })]), _: 1 })]);
  };
} }, Pe = b(ie, [["__scopeId", "data-v-46aa57ad"]]);
export {
  Pe as default
};
