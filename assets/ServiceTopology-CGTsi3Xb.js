import { a as v } from "./index-C_VSxqW3.js";
import { S as y } from "./ServiceTopologyDiagram-w8Rg-tk4.js";
import { _ as b } from "./index-Ddllqwnv.js";
import { r as u, c as S, Q as o, a as T, I as t, ag as a, o as w, M as m } from "./@vue-CnBZ4jx_.js";
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
const V = { class: "topology-container" }, x = { class: "search-bar" }, N = { __name: "ServiceTopology", setup(h) {
  const l = u(""), _ = async (i, e) => {
    const r = await v(i);
    if (r === null) return;
    const p = r.result.map((s) => ({ value: s }));
    e(p);
  }, n = u();
  return (i, e) => {
    const r = a("el-breadcrumb-item"), p = a("el-breadcrumb"), s = a("el-row"), d = a("Filter"), f = a("el-icon"), g = a("el-autocomplete");
    return w(), S("div", V, [o(s, null, { default: t(() => [o(p, { "separator-icon": "ArrowRight" }, { default: t(() => [o(r, { to: { path: "/main" } }, { default: t(() => e[2] || (e[2] = [m(" \u4E3B\u9875 ")])), _: 1 }), o(r, null, { default: t(() => e[3] || (e[3] = [m(" \u670D\u52A1 ")])), _: 1 }), o(r, { to: { path: "/service/topology" } }, { default: t(() => e[4] || (e[4] = [m(" \u670D\u52A1\u62D3\u6251 ")])), _: 1 })]), _: 1 })]), _: 1 }), T("div", x, [o(g, { class: "auto-complete-input", modelValue: l.value, "onUpdate:modelValue": e[0] || (e[0] = (c) => l.value = c), "fetch-suggestions": _, clearable: "", placeholder: "\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4--\u9ED8\u8BA4\u4E3Adefault", onSelect: e[1] || (e[1] = (c) => n.value.getTopology()), style: { width: "40%" } }, { prepend: t(() => [o(f, null, { default: t(() => [o(d)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), o(y, { ref_key: "serviceTopologyRef", ref: n, namespace: l.value, symbolSize: 50, repulsion: 200, edgeLength: 100 }, null, 8, ["namespace"])]);
  };
} }, ee = b(N, [["__scopeId", "data-v-2d9476cd"]]);
export {
  ee as default
};
