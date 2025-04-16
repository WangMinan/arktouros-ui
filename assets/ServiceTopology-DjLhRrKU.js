import { b as L, a as M } from "./index-CsOYTb4P.js";
import { _ as R } from "./ServiceTopologyDiagram-B7hpaW1Y.js";
import { t as _ } from "./dateUtil-BAIp0Nbc.js";
import { _ as V } from "./index-B2_ngj1L.js";
import { r as l, b as B, w as C, ag as c, c as y, o as v, a as r, O as w, H as I, u as x, Q as a, I as m, M as N } from "./@vue-CnBZ4jx_.js";
import "./axios-t--hEgTQ.js";
import "./nprogress-Bhg-JNl3.js";
import "./clipboard-BFgOkOlC.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
import "./element-plus-hbUA32rR.js";
import "./lodash-es-C-xrcuFl.js";
import "./@element-plus-Rv25Faa4.js";
import "./@popperjs-DB1lLFnh.js";
import "./@ctrl-r5W6hzzQ.js";
import "./dayjs-dlSZ-o3N.js";
import "./async-validator-CRx4dHSJ.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BCLhozDd.js";
import "./echarts-DuzIGl-8.js";
import "./tslib-BDyQ-Jie.js";
import "./zrender-Cg4aFrUj.js";
import "./@vueuse-BrKJyrsM.js";
import "./pinia-B3EJDjGG.js";
import "./vue-router-DZ3MrWk1.js";
import "./pinia-plugin-persistedstate-DNriL1Fj.js";
import "./destr-BPvN1X9m.js";
import "./deep-pick-omit-CegYQlcN.js";
const z = { class: "timeline-container" }, U = { class: "timeline-header" }, E = { class: "timeline-current-time" }, F = { class: "timeline-slider" }, q = { key: 1, class: "loading-text" }, H = { class: "timeline-footer" }, J = { class: "timeline-start-time" }, K = { class: "timeline-end-time" }, O = { __name: "ServiceTopologyTimeline", emits: ["update-topology"], setup(T, { emit: p }) {
  const n = l(Date.now() - 864e5), u = l(Date.now()), o = l(Date.now()), e = l(0), s = l(false), i = l(""), d = l(false), b = p, h = async () => {
    try {
      const t = await L();
      t && t.result && (n.value = Number(t.result.startTimestamp), u.value = Number(t.result.endTimestamp), o.value = Number(t.result.endTimestamp), i.value = _(o.value));
    } catch (t) {
      console.error("\u83B7\u53D6\u65F6\u95F4\u8303\u56F4\u5931\u8D25:", t);
    } finally {
      d.value = true, e.value += 1;
    }
  };
  B(async () => {
    await h();
  }), C(o, (t) => {
    i.value = _(t);
  });
  const S = (t) => {
    o.value = Number(t);
  }, g = () => {
    s.value = true;
  }, D = () => {
    s.value = false;
  }, $ = () => {
    b("update-topology", o.value);
  };
  return (t, f) => {
    const k = c("el-slider");
    return v(), y("div", z, [r("div", U, [f[1] || (f[1] = r("div", { class: "timeline-title" }, "\u670D\u52A1\u62D3\u6251\u65F6\u95F4\u8F74", -1)), r("div", E, "\u5F53\u524D\u9009\u62E9\u65F6\u95F4: " + w(i.value), 1)]), r("div", F, [d.value ? (v(), I(k, { key: e.value, modelValue: o.value, "onUpdate:modelValue": f[0] || (f[0] = (A) => o.value = A), min: n.value, max: u.value, "format-tooltip": x(_), onChange: S, onMouseenter: g, onMouseleave: D, onMouseup: $ }, null, 8, ["modelValue", "min", "max", "format-tooltip"])) : (v(), y("div", q, "\u52A0\u8F7D\u4E2D..."))]), r("div", H, [r("div", J, w(x(_)(n.value)), 1), r("div", K, w(x(_)(u.value)), 1)])]);
  };
} }, Q = V(O, [["__scopeId", "data-v-517fb29b"]]), j = { class: "card-container" }, G = { __name: "ServiceTopologyAll", props: { namespace: String, symbolSize: Number, repulsion: Number, edgeLength: Number }, setup(T, { expose: p }) {
  const n = l();
  p({ getTopology: async () => {
    await n.value.getTopology();
  } });
  const o = async (e) => {
    console.log(e), await n.value.getTopology();
  };
  return (e, s) => {
    const i = c("el-card");
    return v(), y("div", j, [a(i, null, { default: m(() => [a(R, { ref_key: "serviceTopologyDiagramRef", ref: n, namespace: T.namespace, symbolSize: 50, repulsion: 200, edgeLength: 100 }, null, 8, ["namespace"]), a(Q, { onUpdateTopology: o })]), _: 1 })]);
  };
} }, P = V(G, [["__scopeId", "data-v-dd27ae4d"]]), W = { class: "topology-container" }, X = { class: "search-bar" }, Y = { __name: "ServiceTopology", setup(T) {
  const p = l(""), n = async (o, e) => {
    const s = await M(o);
    if (s === null) return;
    const i = s.result.map((d) => ({ value: d }));
    e(i);
  }, u = l();
  return (o, e) => {
    const s = c("el-breadcrumb-item"), i = c("el-breadcrumb"), d = c("el-row"), b = c("Filter"), h = c("el-icon"), S = c("el-autocomplete");
    return v(), y("div", W, [a(d, null, { default: m(() => [a(i, { "separator-icon": "ArrowRight" }, { default: m(() => [a(s, { to: { path: "/main" } }, { default: m(() => e[2] || (e[2] = [N(" \u4E3B\u9875 ")])), _: 1 }), a(s, null, { default: m(() => e[3] || (e[3] = [N(" \u670D\u52A1 ")])), _: 1 }), a(s, { to: { path: "/service/topology" } }, { default: m(() => e[4] || (e[4] = [N(" \u670D\u52A1\u62D3\u6251 ")])), _: 1 })]), _: 1 })]), _: 1 }), r("div", X, [a(S, { class: "auto-complete-input", modelValue: p.value, "onUpdate:modelValue": e[0] || (e[0] = (g) => p.value = g), "fetch-suggestions": n, clearable: "", placeholder: "\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4--\u9ED8\u8BA4\u4E3Adefault", onSelect: e[1] || (e[1] = (g) => u.value.getTopology()), style: { width: "40%" } }, { prepend: m(() => [a(h, null, { default: m(() => [a(b)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), a(P, { namespace: p.value, symbolSize: 50, repulsion: 200, edgeLength: 100 }, null, 8, ["namespace"])]);
  };
} }, De = V(Y, [["__scopeId", "data-v-69fce13c"]]);
export {
  De as default
};
