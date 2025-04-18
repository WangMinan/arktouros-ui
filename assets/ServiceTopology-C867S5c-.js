import { b as H, a as J } from "./index-C9YZnyy9.js";
import { _ as K } from "./ServiceTopologyDiagram-BcNzr9Mu.js";
import { t as T } from "./dateUtil-BAIp0Nbc.js";
import { _ as N } from "./index-CoYJRCdI.js";
import { E as P } from "./element-plus-hbUA32rR.js";
import { r as n, b as Q, w as j, ag as r, c as h, o as b, a as c, O as V, Q as o, I as d, P as G, a6 as W, H as X, u as D, M as x } from "./@vue-CnBZ4jx_.js";
import "./axios-t--hEgTQ.js";
import "./nprogress-Bhg-JNl3.js";
import "./clipboard-BFgOkOlC.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
import "./echarts-DuzIGl-8.js";
import "./tslib-BDyQ-Jie.js";
import "./zrender-Cg4aFrUj.js";
import "./@vueuse-BrKJyrsM.js";
import "./pinia-B3EJDjGG.js";
import "./vue-router-DZ3MrWk1.js";
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
const Y = { class: "timeline-container" }, Z = { class: "timeline-header" }, ee = { class: "timeline-current-time" }, te = { class: "timeline-controls" }, oe = { class: "timeline-slider" }, le = { key: 1, class: "loading-text" }, ae = { class: "timeline-footer" }, ne = { class: "timeline-start-time" }, se = { class: "timeline-end-time" }, ie = { __name: "ServiceTopologyTimeline", emits: ["update-topology"], setup(S, { emit: g }) {
  const l = n(Date.now() - 864e5), s = n(Date.now()), t = n(Date.now()), e = n(0), u = n(false), m = n(""), f = n(false), v = n(new Date(l.value)), _ = n(new Date(s.value)), y = n(6e4), w = [{ label: "1\u6BEB\u79D2", value: 1 }, { label: "100\u6BEB\u79D2", value: 100 }, { label: "1\u79D2", value: 1e3 }, { label: "10\u79D2", value: 1e4 }, { label: "30\u79D2", value: 3e4 }, { label: "1\u5206\u949F", value: 6e4 }, { label: "5\u5206\u949F", value: 3e5 }], C = g, z = async () => {
    try {
      const a = await H();
      a && a.result && (l.value = Number(a.result.startTimestamp), s.value = Number(a.result.endTimestamp), t.value = Number(a.result.endTimestamp), m.value = T(t.value), v.value = new Date(l.value), _.value = new Date(s.value));
    } catch (a) {
      console.error("\u83B7\u53D6\u65F6\u95F4\u8303\u56F4\u5931\u8D25:", a);
    } finally {
      f.value = true, e.value += 1;
    }
  }, k = () => v.value > _.value ? (P.warning("\u5F00\u59CB\u65F6\u95F4\u4E0D\u80FD\u665A\u4E8E\u7ED3\u675F\u65F6\u95F4\uFF0C\u5DF2\u81EA\u52A8\u8C03\u6574"), v.value = new Date(_.value.getTime() - 36e5), false) : true, E = () => {
    k() && R();
  }, L = () => {
    k() && R();
  }, R = () => {
    l.value = v.value.getTime(), s.value = _.value.getTime(), t.value < l.value ? t.value = l.value : t.value > s.value && (t.value = s.value), m.value = T(t.value), e.value += 1, C("update-topology", t.value);
  }, M = (a) => {
    y.value = a, e.value += 1;
  };
  Q(async () => {
    await z();
  }), j(t, (a) => {
    m.value = T(a);
  });
  const U = (a) => {
    t.value = Number(a);
  }, A = () => {
    u.value = true;
  }, B = () => {
    u.value = false;
  }, I = () => {
    C("update-topology", t.value);
  };
  return (a, p) => {
    const $ = r("el-date-picker"), F = r("el-option"), O = r("el-select"), q = r("el-slider");
    return b(), h("div", Y, [c("div", Z, [p[4] || (p[4] = c("div", { class: "timeline-title" }, "\u670D\u52A1\u62D3\u6251\u65F6\u95F4\u8F74", -1)), c("div", ee, "\u5F53\u524D\u9009\u62E9\u65F6\u95F4: " + V(m.value), 1)]), c("div", te, [o($, { modelValue: v.value, "onUpdate:modelValue": p[0] || (p[0] = (i) => v.value = i), type: "datetime", placeholder: "\u5F00\u59CB\u65F6\u95F4", size: "small", onChange: E }, null, 8, ["modelValue"]), o($, { modelValue: _.value, "onUpdate:modelValue": p[1] || (p[1] = (i) => _.value = i), type: "datetime", placeholder: "\u7ED3\u675F\u65F6\u95F4", size: "small", onChange: L }, null, 8, ["modelValue"]), o(O, { modelValue: y.value, "onUpdate:modelValue": p[2] || (p[2] = (i) => y.value = i), placeholder: "\u9009\u62E9\u6B65\u957F", size: "small", onChange: M }, { default: d(() => [(b(), h(G, null, W(w, (i) => o(F, { key: i.value, label: i.label, value: i.value }, null, 8, ["label", "value"])), 64))]), _: 1 }, 8, ["modelValue"])]), c("div", oe, [f.value ? (b(), X(q, { key: e.value, modelValue: t.value, "onUpdate:modelValue": p[3] || (p[3] = (i) => t.value = i), min: l.value, max: s.value, step: y.value, "format-tooltip": D(T), onChange: U, onMouseenter: A, onMouseleave: B, onMouseup: I }, null, 8, ["modelValue", "min", "max", "step", "format-tooltip"])) : (b(), h("div", le, "\u52A0\u8F7D\u4E2D..."))]), c("div", ae, [c("div", ne, V(D(T)(l.value)), 1), c("div", se, V(D(T)(s.value)), 1)])]);
  };
} }, re = N(ie, [["__scopeId", "data-v-bcdd6aeb"]]), ue = { class: "card-container" }, me = { __name: "ServiceTopologyAll", props: { namespace: String, symbolSize: Number, repulsion: Number, edgeLength: Number }, setup(S, { expose: g }) {
  const l = n();
  g({ getTopology: async () => {
    await l.value.getTopology();
  } });
  const t = async (e) => {
    await l.value.drawServiceTopology(e);
  };
  return (e, u) => {
    const m = r("el-card");
    return b(), h("div", ue, [o(m, null, { default: d(() => [o(K, { ref_key: "serviceTopologyDiagramRef", ref: l, namespace: S.namespace, symbolSize: 50, repulsion: 200, edgeLength: 100 }, null, 8, ["namespace"]), o(re, { onUpdateTopology: t })]), _: 1 })]);
  };
} }, pe = N(me, [["__scopeId", "data-v-f8af70ee"]]), ce = { class: "topology-container" }, de = { class: "search-bar" }, ve = { __name: "ServiceTopology", setup(S) {
  const g = n(""), l = async (t, e) => {
    const u = await J(t);
    if (u === null) return;
    const m = u.result.map((f) => ({ value: f }));
    e(m);
  }, s = n();
  return (t, e) => {
    const u = r("el-breadcrumb-item"), m = r("el-breadcrumb"), f = r("el-row"), v = r("Filter"), _ = r("el-icon"), y = r("el-autocomplete");
    return b(), h("div", ce, [o(f, null, { default: d(() => [o(m, { "separator-icon": "ArrowRight" }, { default: d(() => [o(u, { to: { path: "/main" } }, { default: d(() => e[2] || (e[2] = [x(" \u4E3B\u9875 ")])), _: 1 }), o(u, null, { default: d(() => e[3] || (e[3] = [x(" \u670D\u52A1 ")])), _: 1 }), o(u, { to: { path: "/service/topology" } }, { default: d(() => e[4] || (e[4] = [x(" \u670D\u52A1\u62D3\u6251 ")])), _: 1 })]), _: 1 })]), _: 1 }), c("div", de, [o(y, { class: "auto-complete-input", modelValue: g.value, "onUpdate:modelValue": e[0] || (e[0] = (w) => g.value = w), "fetch-suggestions": l, clearable: "", placeholder: "\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4--\u9ED8\u8BA4\u4E3Adefault", onSelect: e[1] || (e[1] = (w) => s.value.getTopology()), style: { width: "40%" } }, { prepend: d(() => [o(_, null, { default: d(() => [o(v)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), o(pe, { namespace: g.value, symbolSize: 50, repulsion: 200, edgeLength: 100 }, null, 8, ["namespace"])]);
  };
} }, He = N(ve, [["__scopeId", "data-v-69fce13c"]]);
export {
  He as default
};
