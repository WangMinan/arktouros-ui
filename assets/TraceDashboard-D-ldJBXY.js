import { a as K, g as W } from "./index-CCs73DQQ.js";
import { g as Y, d as Z } from "./index-CGMKqe_H.js";
import { u as ee } from "./vue-router-DZ3MrWk1.js";
import { T as te } from "./TraceTopologyDiagram-D3r0PxGm.js";
import { _ as ae } from "./index-BwJ3HXHG.js";
import { a as le, E as oe } from "./element-plus-hbUA32rR.js";
import { r as m, X as V, b as ne, c as D, Q as t, I as a, ag as o, o as E, M as _, a as v, P as re, a6 as se, u as ue, H as ie } from "./@vue-CnBZ4jx_.js";
import "./axios-t--hEgTQ.js";
import "./nprogress-Bhg-JNl3.js";
import "./clipboard-BFgOkOlC.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
import "./@vueuse-BrKJyrsM.js";
import "./dateUtil-BAIp0Nbc.js";
import "./echarts-DuzIGl-8.js";
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
const pe = { class: "trace-main-container" }, ce = { class: "endpoint-div" }, de = { class: "table-div" }, me = { class: "pagination-div" }, ve = { __name: "TraceDashboard", setup(_e) {
  const w = m(true), u = m([]), h = m(), i = ee(), q = V({ lazy: true, async lazyLoad(l, e) {
    const s = [], { level: I } = l;
    if (I === 0) {
      const d = await K();
      if (d === null) return;
      d.result.map((r) => ({ leaf: false, value: r, label: r })).forEach((r) => {
        s.push(r);
      });
    } else if (I === 1) {
      const d = await W({ query: "", namespace: l.value, pageNum: 1, pageSize: 1e3 });
      if (d === null) return;
      d.result.data.map((r) => ({ leaf: true, value: r.name, label: r.name === "" ? "null" : r.name })).forEach((r) => {
        s.push(r);
      });
    }
    e(s);
  } }), p = V({ serviceName: "", pageNum: 1, pageSize: 10, startTimestamp: "", endTimestamp: "" }), N = m(), g = m("");
  ne(async () => {
    i.currentRoute.value.query.serviceName && (p.serviceName = i.currentRoute.value.query.serviceName, h.value = ["default", i.currentRoute.value.query.serviceName], await f()), i.currentRoute.value.query.traceId && (b.value.includes(i.currentRoute.value.query.traceId) || b.value.push(i.currentRoute.value.query.traceId), g.value = i.currentRoute.value.query.traceId), i.currentRoute.value.query.serviceName && i.currentRoute.value.query.traceId && await N.value.getTopology(g.value, w.value, null, null);
  });
  const R = m(0), f = async () => {
    c.value.splice(0, c.value.length), y.splice(0, y.length), R.value = 0, N.value.disposeSpanTopology(), b.value = [], g.value = "", p.serviceName = h.value[1];
    const l = JSON.parse(JSON.stringify(p));
    u.value != null && u.value.length === 2 ? (l.startTimestamp = Date.parse(u.value[0]), l.endTimestamp = Date.parse(u.value[1])) : (l.startTimestamp = null, l.endTimestamp = null);
    const e = await Y(l);
    e === null || e.result.length === 0 || (R.value = e.result.length, c.value.splice(0, c.value.length), y.splice(0, y.length), e.result.forEach((s) => {
      c.value.push(s);
    }), c.value.forEach((s) => {
      y.push(s.endPoint);
    }), b.value = c.value[0].traceIds);
  };
  let b = m([]);
  const c = m([{ endPoint: {}, traceIds: [] }]), y = V([]), x = async (l) => {
    p.pageSize = l, await f();
  }, A = async (l) => {
    p.pageNum = l, await f();
  }, L = (l) => {
    c.value.forEach((e) => {
      e.endPoint === l && (b.value = e.traceIds);
    });
  }, k = async () => {
    let l = null, e = null;
    u.value != null && u.value.length === 2 && (l = Date.parse(u.value[0]), e = Date.parse(u.value[1])), await N.value.getTopology(g.value, w.value, l, e);
  }, P = async () => {
    const l = le.service({ lock: true, text: "\u6B63\u5728\u6267\u884C\u6570\u636E\u8FD0\u7EF4\u64CD\u4F5C\uFF0C\u8BF7\u7B49\u5F85\u3002", background: "rgba(0, 0, 0, 0.7)" });
    try {
      const e = await Z();
      if (e === null || e.result.length === 0) return;
      oe.success("\u5220\u9664\u6240\u6709\u94FE\u8DEF\u6570\u636E\u6210\u529F");
    } finally {
      l.close(), i.go(0);
    }
  };
  return (l, e) => {
    const s = o("el-breadcrumb-item"), I = o("el-breadcrumb"), d = o("el-button"), r = o("el-tooltip"), S = o("el-row"), B = o("el-cascader"), C = o("el-form-item"), U = o("el-date-picker"), M = o("el-form"), Q = o("el-divider"), T = o("el-table-column"), $ = o("ArrowRightBold"), F = o("el-icon"), J = o("el-table"), O = o("el-pagination"), z = o("el-col"), H = o("el-option"), X = o("el-select"), j = o("el-switch"), G = o("el-card");
    return E(), D("div", pe, [t(S, { class: "breadcrumb-header-row" }, { default: a(() => [t(I, { "separator-icon": "ArrowRight" }, { default: a(() => [t(s, { to: { path: "/main" } }, { default: a(() => e[8] || (e[8] = [_(" \u4E3B\u9875 ")])), _: 1 }), t(s, null, { default: a(() => e[9] || (e[9] = [_(" \u94FE\u8DEF ")])), _: 1 }), t(s, { to: { path: "/main/trace/dashboard" } }, { default: a(() => e[10] || (e[10] = [_(" \u8C03\u7528\u94FE\u8DEF ")])), _: 1 })]), _: 1 }), t(r, { placement: "bottom" }, { content: a(() => e[11] || (e[11] = [_(" \u70B9\u51FB\u8BE5\u6309\u94AE\u5C06\u4F1A"), v("b", { style: { color: "red" } }, "\u5220\u9664\u6240\u6709\u94FE\u8DEF\u6570\u636E", -1), _("\uFF0C\u8BF7\u786E\u4FDD\u60A8\u77E5\u6653\u8BE5\u64CD\u4F5C\u5C06\u5E26\u6765\u7684\u540E\u679C\u3002 "), v("br", null, null, -1), _(" \u5220\u9664\u64CD\u4F5C\u5C06\u9501\u5B9A\u7528\u6237\u754C\u9762\u76F4\u81F3\u5220\u9664\u5B8C\u6210\u3002 ")])), default: a(() => [t(d, { type: "danger", onClick: P }, { default: a(() => e[12] || (e[12] = [_(" \u5220\u9664\u6240\u6709\u94FE\u8DEF\u6570\u636E ")])), _: 1 })]), _: 1 })]), _: 1 }), t(G, { class: "table-card" }, { default: a(() => [t(S, { class: "cascader-div" }, { default: a(() => [t(M, { inline: true }, { default: a(() => [t(C, { label: "\u670D\u52A1\u540D\u79F0" }, { default: a(() => [t(B, { placeholder: "\u8BF7\u9009\u62E9\u5BF9\u5E94\u670D\u52A1", modelValue: h.value, "onUpdate:modelValue": e[0] || (e[0] = (n) => h.value = n), clearable: "", props: q, "show-all-levels": false, onChange: f }, null, 8, ["modelValue", "props"])]), _: 1 }), t(C, { label: "\u8D77\u6B62\u65F6\u95F4" }, { default: a(() => [t(U, { modelValue: u.value, "onUpdate:modelValue": e[1] || (e[1] = (n) => u.value = n), type: "datetimerange", "range-separator": "\u5230", "start-placeholder": "\u5F00\u59CB\u65F6\u95F4", "end-placeholder": "\u7ED3\u675F\u65F6\u95F4", onClear: f, onChange: f }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })]), _: 1 }), t(Q), t(S, { gutter: 10, style: { "margin-top": "2%" } }, { default: a(() => [t(z, { span: 8 }, { default: a(() => [e[13] || (e[13] = v("div", null, "\u8FFD\u8E2A\u7AEF\u70B9\u4FE1\u606F", -1)), v("div", ce, [v("div", de, [t(J, { data: y, stripe: "" }, { default: a(() => [t(T, { prop: "serviceName", label: "\u670D\u52A1\u540D\u79F0" }), t(T, { prop: "ip", label: "IP\u5730\u5740" }), t(T, { prop: "port", label: "\u7AEF\u53E3\u53F7" }), t(T, { prop: "latency", label: "\u65F6\u5EF6" }), t(T, { fixed: "right", label: "\u7ED8\u56FE" }, { default: a((n) => [t(r, { effect: "light", content: "\u67E5\u770BEndpoint\u6240\u5728\u94FE\u8DEF\u4FE1\u606F", placement: "top", enterable: false }, { default: a(() => [t(d, { type: "primary", circle: "", size: "small", onClick: (ge) => L(n.row) }, { default: a(() => [t(F, null, { default: a(() => [t($)]), _: 1 })]), _: 2 }, 1032, ["onClick"])]), _: 2 }, 1024)]), _: 1 })]), _: 1 }, 8, ["data"])]), v("div", me, [t(O, { "current-page": p.pageNum, "onUpdate:currentPage": e[2] || (e[2] = (n) => p.pageNum = n), "page-size": p.pageSize, "onUpdate:pageSize": e[3] || (e[3] = (n) => p.pageSize = n), "page-sizes": [10, 20, 50, 100], layout: "total, pager, sizes", total: R.value, "pager-count": 5, onSizeChange: x, onCurrentChange: A }, null, 8, ["current-page", "page-size", "total"])])])]), _: 1 }), t(z, { span: 16 }, { default: a(() => [v("div", null, [e[14] || (e[14] = v("div", null, "Span\u8C03\u7528\u56FE", -1)), t(S, { gutter: 15 }, { default: a(() => [t(z, { span: 12 }, { default: a(() => [t(C, { label: "TraceId" }, { default: a(() => [t(X, { modelValue: g.value, "onUpdate:modelValue": e[4] || (e[4] = (n) => g.value = n), placeholder: "\u8BF7\u5728\u5DE6\u4FA7\u9009\u62E9Endpoint\u540E\uFF0C\u9009\u62E9TraceId", style: { width: "90%" }, clearable: "", onChange: e[5] || (e[5] = (n) => k()) }, { default: a(() => [(E(true), D(re, null, se(ue(b), (n) => (E(), ie(H, { key: n, label: n, value: n }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 })]), _: 1 }), t(z, { span: 12 }, { default: a(() => [t(C, null, { default: a(() => [t(j, { "active-text": "\u4EC5\u67E5\u770B\u5C5E\u4E8E\u5F53\u524Dservice\u7684span", "inactive-text": "\u67E5\u770B\u5F53\u524Dtrace\u4E0B\u7684\u6240\u6709span", modelValue: w.value, "onUpdate:modelValue": e[6] || (e[6] = (n) => w.value = n), size: "small", onChange: e[7] || (e[7] = (n) => k()) }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })]), _: 1 })]), t(te, { ref_key: "traceTopologyDiagramRef", ref: N, "service-name": h.value }, null, 8, ["service-name"])]), _: 1 })]), _: 1 })]), _: 1 })]);
  };
} }, He = ae(ve, [["__scopeId", "data-v-3ca3060e"]]);
export {
  He as default
};
