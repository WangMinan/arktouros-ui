import { b as J, a as K } from "./index-CaC1F5pq.js";
import { _ as P } from "./ServiceTopologyDiagram-BrWhejPy.js";
import { t as y } from "./dateUtil-BAIp0Nbc.js";
import { _ as N } from "./index-CR7So4Ot.js";
import { E as Q } from "./element-plus-DzA8RnTK.js";
import { r as o, b as j, w as G, al as r, c as w, o as h, a as v, O as V, Q as t, I as _, P as W, a6 as X, H as Y, u as D, M as x } from "./@vue-ggRZ67L8.js";
import "./axios-Dq7h7Pqt.js";
import "./nprogress-Bhg-JNl3.js";
import "./clipboard-BFgOkOlC.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
import "./echarts-CFTPmQCF.js";
import "./tslib-BDyQ-Jie.js";
import "./zrender-e6-696fv.js";
import "./@vueuse-Dwh3V-Wi.js";
import "./index-b3hoJfVS.js";
import "./pinia-B9sBSOYd.js";
import "./vue-router-b7M9IRbX.js";
import "./@element-plus-BZpblR8O.js";
import "./pinia-plugin-persistedstate-B8MS7Mes.js";
import "./destr-BPvN1X9m.js";
import "./deep-pick-omit-CegYQlcN.js";
import "./lodash-es-C-xrcuFl.js";
import "./@popperjs-DB1lLFnh.js";
import "./@ctrl-r5W6hzzQ.js";
import "./dayjs-dlSZ-o3N.js";
import "./async-validator-CRx4dHSJ.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BF671Vup.js";
const Z = { class: "timeline-container" }, ee = { class: "timeline-header" }, te = { class: "timeline-current-time" }, le = { class: "timeline-controls" }, ae = { class: "timeline-slider" }, oe = { key: 1, class: "loading-text" }, ne = { class: "timeline-footer" }, se = { class: "timeline-start-time" }, ie = { class: "timeline-end-time" }, re = { __name: "ServiceTopologyTimeline", emits: ["update-topology"], setup(S, { expose: g, emit: f }) {
  const l = o(Date.now() - 864e5), n = o(Date.now()), e = o(Date.now()), s = o(0), m = o(false), p = o(""), b = o(false), c = o(new Date(l.value)), d = o(new Date(n.value)), T = o(6e4), z = [{ label: "1\u6BEB\u79D2", value: 1 }, { label: "100\u6BEB\u79D2", value: 100 }, { label: "1\u79D2", value: 1e3 }, { label: "15\u79D2", value: 15e3 }, { label: "30\u79D2", value: 3e4 }, { label: "1\u5206\u949F", value: 6e4 }, { label: "5\u5206\u949F", value: 3e5 }, { label: "15\u5206\u949F", value: 9e5 }, { label: "30\u5206\u949F", value: 18e5 }, { label: "1\u5C0F\u65F6", value: 36e5 }, { label: "2\u5C0F\u65F6", value: 72e5 }, { label: "4\u5C0F\u65F6", value: 144e5 }, { label: "8\u5C0F\u65F6", value: 288e5 }, { label: "12\u5C0F\u65F6", value: 432e5 }, { label: "24\u5C0F\u65F6", value: 864e5 }];
  g({ userStartTime: c, userEndTime: d, currentTimestamp: e });
  const R = f, E = async () => {
    try {
      const a = await J();
      a && a.result && (l.value = Number(a.result.startTimestamp), n.value = Number(a.result.endTimestamp), e.value = Number(a.result.endTimestamp), p.value = y(e.value), c.value = new Date(l.value), d.value = new Date(n.value));
    } catch (a) {
      console.error("\u83B7\u53D6\u65F6\u95F4\u8303\u56F4\u5931\u8D25:", a);
    } finally {
      b.value = true, s.value += 1;
    }
  }, k = () => c.value > d.value ? (Q.warning("\u5F00\u59CB\u65F6\u95F4\u4E0D\u80FD\u665A\u4E8E\u7ED3\u675F\u65F6\u95F4\uFF0C\u5DF2\u81EA\u52A8\u8C03\u6574"), c.value = new Date(d.value.getTime() - 36e5), false) : true, L = () => {
    k() && C();
  }, M = () => {
    k() && C();
  }, C = () => {
    l.value = c.value.getTime(), n.value = d.value.getTime(), e.value < l.value ? e.value = l.value : e.value > n.value && (e.value = n.value), p.value = y(e.value), s.value += 1, R("update-topology", e.value);
  }, U = (a) => {
    T.value = a, s.value += 1;
  };
  j(async () => {
    await E();
  }), G(e, (a) => {
    p.value = y(a);
  });
  const A = (a) => {
    e.value = Number(a);
  }, B = () => {
    m.value = true;
  }, I = () => {
    m.value = false;
  }, F = () => {
    R("update-topology", e.value);
  };
  return (a, u) => {
    const $ = r("el-date-picker"), O = r("el-option"), q = r("el-select"), H = r("el-slider");
    return h(), w("div", Z, [v("div", ee, [u[4] || (u[4] = v("div", { class: "timeline-title" }, "\u670D\u52A1\u62D3\u6251\u65F6\u95F4\u8F74", -1)), v("div", te, "\u5F53\u524D\u9009\u62E9\u65F6\u95F4: " + V(p.value), 1)]), v("div", le, [t($, { modelValue: c.value, "onUpdate:modelValue": u[0] || (u[0] = (i) => c.value = i), type: "datetime", placeholder: "\u5F00\u59CB\u65F6\u95F4", size: "small", onChange: L }, null, 8, ["modelValue"]), t($, { modelValue: d.value, "onUpdate:modelValue": u[1] || (u[1] = (i) => d.value = i), type: "datetime", placeholder: "\u7ED3\u675F\u65F6\u95F4", size: "small", onChange: M }, null, 8, ["modelValue"]), t(q, { modelValue: T.value, "onUpdate:modelValue": u[2] || (u[2] = (i) => T.value = i), placeholder: "\u9009\u62E9\u62D6\u52A8\u65F6\u95F4\u6B65\u957F", size: "small", onChange: U }, { default: _(() => [(h(), w(W, null, X(z, (i) => t(O, { key: i.value, label: i.label, value: i.value }, null, 8, ["label", "value"])), 64))]), _: 1 }, 8, ["modelValue"])]), v("div", ae, [b.value ? (h(), Y(H, { key: s.value, modelValue: e.value, "onUpdate:modelValue": u[3] || (u[3] = (i) => e.value = i), min: l.value, max: n.value, step: T.value, "format-tooltip": D(y), onChange: A, onMouseenter: B, onMouseleave: I, onMouseup: F }, null, 8, ["modelValue", "min", "max", "step", "format-tooltip"])) : (h(), w("div", oe, "\u52A0\u8F7D\u4E2D..."))]), v("div", ne, [v("div", se, V(D(y)(l.value)), 1), v("div", ie, V(D(y)(n.value)), 1)])]);
  };
} }, ue = N(re, [["__scopeId", "data-v-39ab7a34"]]), me = { class: "card-container" }, pe = { __name: "ServiceTopologyAll", props: { namespace: String, symbolSize: Number, repulsion: Number, edgeLength: Number }, setup(S, { expose: g }) {
  const f = o(), l = o(), n = async () => {
    await f.value.getTopology();
  }, e = () => l.value ? { startTime: l.value.userStartTime.getTime(), stopTime: l.value.currentTimestamp } : { startTime: Date.now() - 24 * 60 * 60 * 1e3, stopTime: Date.now() };
  g({ getTopology: n });
  const s = async (m) => {
    await f.value.drawServiceTopology(m);
  };
  return (m, p) => {
    const b = r("el-card");
    return h(), w("div", me, [t(b, null, { default: _(() => [t(P, { ref_key: "serviceTopologyDiagramRef", ref: f, namespace: S.namespace, symbolSize: 50, repulsion: 200, edgeLength: 100, getTimelineRange: e }, null, 8, ["namespace"]), t(ue, { ref_key: "serviceTopologyTimelineRef", ref: l, onUpdateTopology: s }, null, 512)]), _: 1 })]);
  };
} }, ce = N(pe, [["__scopeId", "data-v-1cf3bf23"]]), de = { class: "topology-container" }, ve = { class: "search-bar" }, _e = { __name: "ServiceTopology", setup(S) {
  const g = o(""), f = async (n, e) => {
    const s = await K(n);
    if (s === null) return;
    const m = s.result.map((p) => ({ value: p }));
    e(m);
  }, l = o();
  return (n, e) => {
    const s = r("el-breadcrumb-item"), m = r("el-breadcrumb"), p = r("el-row"), b = r("Filter"), c = r("el-icon"), d = r("el-autocomplete");
    return h(), w("div", de, [t(p, null, { default: _(() => [t(m, { "separator-icon": "ArrowRight" }, { default: _(() => [t(s, { to: { path: "/main" } }, { default: _(() => e[2] || (e[2] = [x(" \u4E3B\u9875 ")])), _: 1, __: [2] }), t(s, null, { default: _(() => e[3] || (e[3] = [x(" \u670D\u52A1 ")])), _: 1, __: [3] }), t(s, { to: { path: "/service/topology" } }, { default: _(() => e[4] || (e[4] = [x(" \u670D\u52A1\u62D3\u6251 ")])), _: 1, __: [4] })]), _: 1 })]), _: 1 }), v("div", ve, [t(d, { class: "auto-complete-input", modelValue: g.value, "onUpdate:modelValue": e[0] || (e[0] = (T) => g.value = T), "fetch-suggestions": f, clearable: "", placeholder: "\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4--\u9ED8\u8BA4\u4E3Adefault", onSelect: e[1] || (e[1] = (T) => l.value.getTopology()), style: { width: "40%" } }, { prepend: _(() => [t(c, null, { default: _(() => [t(b)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), t(ce, { namespace: g.value, symbolSize: 50, repulsion: 200, edgeLength: 100 }, null, 8, ["namespace"])]);
  };
} }, Ke = N(_e, [["__scopeId", "data-v-69fce13c"]]);
export {
  Ke as default
};
