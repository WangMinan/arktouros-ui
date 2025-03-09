import { a as Z, g as ee } from "./index-BPCCi87A.js";
import { g as le, d as ae, a as te } from "./index-CfJzNW8w.js";
import { u as oe } from "./vue-router-DZ3MrWk1.js";
import { t as U } from "./dateUtil-NlCD2qvi.js";
import { u as ne } from "./index-DQDgIJ2e.js";
import { _ as re } from "./index-CnBrNuue.js";
import { a as ue, E as z } from "./element-plus-ChqUdKh3.js";
import { r as v, b as se, X as de, c as D, a as f, Q as l, I as t, ag as u, P as E, o as S, M as c, a6 as ie, H as me, O as w, u as pe } from "./@vue-CnBZ4jx_.js";
import "./axios-BtuGy7By.js";
import "./nprogress-Dx41icWA.js";
import "./dayjs-B_aAqRSu.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
import "./pinia-B3EJDjGG.js";
import "./@element-plus-Rv25Faa4.js";
import "./pinia-plugin-persistedstate-8SpmOswp.js";
import "./destr-CVtkxrq9.js";
import "./deep-pick-omit-CegYQlcN.js";
import "./lodash-es-C-xrcuFl.js";
import "./@popperjs-DB1lLFnh.js";
import "./@ctrl-r5W6hzzQ.js";
import "./async-validator-CRx4dHSJ.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BCLhozDd.js";
const ce = { class: "log-main-container" }, ve = { class: "search-area" }, fe = { class: "pagination-div" }, ge = { __name: "LogMain", setup(_e) {
  const A = ne(), I = oe(), L = v(0), V = v([]), b = v(), y = v([]), n = v({ pageNum: 1, pageSize: 10, serviceName: "", traceId: "", keyword: "", keywordNotIncluded: "", severityText: "", startTimestamp: 0, endTimestamp: 0 }), N = async () => {
    const o = JSON.parse(JSON.stringify(n.value));
    y.value.length === 2 ? (o.startTimestamp = Date.parse(y.value[0]), o.endTimestamp = Date.parse(y.value[1])) : (o.startTimestamp = null, o.endTimestamp = null);
    const e = await le(o);
    e !== null && (L.value = parseInt(e.result.total), e.result.data.forEach((s) => {
      s.serviceName || (s.serviceName = "null");
    }), V.value = e.result.data);
  }, B = async (o) => {
    n.value.pageSize = o, await N();
  }, F = async (o) => {
    n.value.pageNum = o, await N();
  }, J = async (o, e) => {
    const s = await te(o);
    if (s === null) {
      e([]);
      return;
    }
    const g = s.result.map((m) => m ? { value: m } : { value: "null" });
    e(g);
  };
  se(async () => {
    await N();
  });
  const k = v(false), r = v({}), M = (o) => {
    const e = JSON.parse(JSON.stringify(o));
    r.value = e, r.value.timestamp = U(e.timestamp), r.value.error = e.error ? "\u5F02\u5E38" : "\u6B63\u5E38", r.value.tags = e.tags.map((s) => s.key + "->" + s.value).join(`
`), k.value = true;
  }, O = async (o) => {
    if (!o.serviceName || !o.traceId) {
      z.warning("\u8BE5\u65E5\u5FD7\u672A\u4E0A\u62A5\u94FE\u8DEF\u4FE1\u606F");
      return;
    }
    A.$patch((e) => {
      e.currentAside.active = "/main/trace/dashboard";
    }), await I.push(`/main/trace/dashboard?serviceName=${o.serviceName}&traceId=${o.traceId}`);
  }, $ = de({ lazy: true, async lazyLoad(o, e) {
    const s = [], { level: g } = o;
    if (g === 0) {
      const m = await Z();
      if (m === null) return;
      m.result.map((i) => ({ leaf: false, value: i, label: i })).forEach((i) => {
        s.push(i);
      });
    } else if (g === 1) {
      const m = await ee({ query: "", namespace: o.value, pageNum: 1, pageSize: 1e3 });
      if (m === null) return;
      m.result.data.map((i) => ({ leaf: true, value: i.name, label: i.name === "" ? "null" : i.name })).forEach((i) => {
        s.push(i);
      });
    }
    e(s);
  } }), P = () => {
    b.value ? (n.value.serviceName = b.value[1], (n.value.serviceName === "" || n.value.serviceName == null) && (n.value.serviceName = "null")) : n.value.serviceName = null;
  }, Q = async () => {
    const o = ue.service({ lock: true, text: "\u6B63\u5728\u6267\u884C\u6570\u636E\u8FD0\u7EF4\u64CD\u4F5C\uFF0C\u8BF7\u7B49\u5F85\u3002", background: "rgba(0, 0, 0, 0.7)" });
    try {
      const e = await ae();
      if (e === null || e.result.length === 0) return;
      z.success("\u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E\u6210\u529F");
    } finally {
      o.close(), V.value.splice(0, V.value.length), I.go(0);
    }
  };
  return (o, e) => {
    const s = u("el-breadcrumb-item"), g = u("el-breadcrumb"), m = u("el-button"), i = u("el-tooltip"), T = u("el-row"), q = u("el-cascader"), d = u("el-form-item"), p = u("el-input"), R = u("el-date-picker"), h = u("el-autocomplete"), x = u("el-form"), j = u("el-divider"), _ = u("el-col"), H = u("Share"), C = u("el-icon"), X = u("InfoFilled"), G = u("el-pagination"), K = u("el-card"), W = u("el-dialog");
    return S(), D(E, null, [f("div", ce, [l(T, { class: "breadcrumb-header-row" }, { default: t(() => [l(g, { "separator-icon": "ArrowRight" }, { default: t(() => [l(s, null, { default: t(() => e[17] || (e[17] = [f("a", { href: "/main" }, "\u4E3B\u9875", -1)])), _: 1 }), l(s, null, { default: t(() => e[18] || (e[18] = [f("a", { href: "/main/log" }, "\u65E5\u5FD7\u6982\u89C8", -1)])), _: 1 })]), _: 1 }), l(i, { placement: "bottom" }, { content: t(() => e[19] || (e[19] = [c(" \u70B9\u51FB\u8BE5\u6309\u94AE\u5C06\u4F1A"), f("b", { style: { color: "red" } }, "\u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E", -1), c("\uFF0C\u8BF7\u786E\u4FDD\u60A8\u77E5\u6653\u8BE5\u64CD\u4F5C\u5C06\u5E26\u6765\u7684\u540E\u679C\u3002 "), f("br", null, null, -1), c(" \u5220\u9664\u64CD\u4F5C\u5C06\u9501\u5B9A\u7528\u6237\u754C\u9762\u76F4\u81F3\u5220\u9664\u5B8C\u6210\u3002 ")])), default: t(() => [l(m, { type: "danger", onClick: Q }, { default: t(() => e[20] || (e[20] = [c(" \u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E ")])), _: 1 })]), _: 1 })]), _: 1 }), l(K, { class: "log-card" }, { default: t(() => [f("div", ve, [l(x, { inline: true, model: n.value }, { default: t(() => [l(d, { label: "\u670D\u52A1\u540D\u79F0" }, { default: t(() => [l(q, { placeholder: "\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4\u2192\u670D\u52A1\u540D\u79F0", modelValue: b.value, "onUpdate:modelValue": e[0] || (e[0] = (a) => b.value = a), clearable: "", props: $, "show-all-levels": false, onChange: P }, null, 8, ["modelValue", "props"])]), _: 1 }), l(d, { label: "traceId" }, { default: t(() => [l(p, { modelValue: n.value.traceId, "onUpdate:modelValue": e[1] || (e[1] = (a) => n.value.traceId = a), placeholder: "\u8BF7\u8F93\u5165\u4E00\u4E2AtraceId", clearable: "" }, null, 8, ["modelValue"])]), _: 1 }), l(d, { label: "\u8D77\u6B62\u65F6\u95F4" }, { default: t(() => [l(R, { modelValue: y.value, "onUpdate:modelValue": e[2] || (e[2] = (a) => y.value = a), type: "datetimerange", "range-separator": "\u5230", "start-placeholder": "\u5F00\u59CB\u65F6\u95F4", "end-placeholder": "\u7ED3\u675F\u65F6\u95F4" }, null, 8, ["modelValue"])]), _: 1 }), l(d, { label: "\u65E5\u5FD7\u7EA7\u522B" }, { default: t(() => [l(h, { class: "auto-complete-input", modelValue: n.value.severityText, "onUpdate:modelValue": e[3] || (e[3] = (a) => n.value.severityText = a), "fetch-suggestions": J, clearable: "", placeholder: "\u8BF7\u8F93\u5165\u65E5\u5FD7\u7EA7\u522B" }, null, 8, ["modelValue"])]), _: 1 }), l(d, { label: "\u5185\u5BB9\u5173\u952E\u8BCD" }, { default: t(() => [l(p, { modelValue: n.value.keyword, "onUpdate:modelValue": e[4] || (e[4] = (a) => n.value.keyword = a), placeholder: "\u8BF7\u8F93\u5165\u4E00\u4E2A\u5185\u5BB9\u5173\u952E\u8BCD", clearable: "" }, null, 8, ["modelValue"])]), _: 1 }), l(d, { label: "\u5185\u5BB9\u4E0D\u5305\u542B\u7684\u5173\u952E\u8BCD" }, { default: t(() => [l(p, { modelValue: n.value.keywordNotIncluded, "onUpdate:modelValue": e[5] || (e[5] = (a) => n.value.keywordNotIncluded = a), placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9\u4E0D\u5305\u542B\u7684\u5173\u952E\u8BCD", clearable: "" }, null, 8, ["modelValue"])]), _: 1 }), l(d, null, { default: t(() => [l(m, { type: "primary", onClick: N }, { default: t(() => e[21] || (e[21] = [c("\u641C\u7D22")])), _: 1 })]), _: 1 })]), _: 1 }, 8, ["model"])]), l(j), (S(true), D(E, null, ie(V.value, (a) => (S(), me(T, { gutter: 5, key: a, style: { "word-break": "break-all" } }, { default: t(() => [l(_, { span: 4 }, { default: t(() => [c(w(a.serviceName), 1)]), _: 2 }, 1024), l(_, { span: 3 }, { default: t(() => [c(w(pe(U)(a.timestamp)), 1)]), _: 2 }, 1024), l(_, { span: 2 }, { default: t(() => [c(w(a.severityText), 1)]), _: 2 }, 1024), l(_, { span: 12 }, { default: t(() => [c(w(a.content), 1)]), _: 2 }, 1024), l(_, { span: 1 }, { default: t(() => [l(i, { effect: "light", content: "\u67E5\u770B\u65E5\u5FD7\u5BF9\u5E94\u94FE\u8DEF\u4FE1\u606F", placement: "top", enterable: false }, { default: t(() => [l(m, { type: "primary", circle: "", size: "small", onClick: (Y) => O(a) }, { default: t(() => [l(C, null, { default: t(() => [l(H)]), _: 1 })]), _: 2 }, 1032, ["onClick"])]), _: 2 }, 1024)]), _: 2 }, 1024), l(_, { span: 1 }, { default: t(() => [l(i, { effect: "light", content: "\u67E5\u770B\u65E5\u5FD7\u5177\u4F53\u4FE1\u606F", placement: "top", enterable: false }, { default: t(() => [l(m, { type: "primary", circle: "", size: "small", onClick: (Y) => M(a) }, { default: t(() => [l(C, null, { default: t(() => [l(X)]), _: 1 })]), _: 2 }, 1032, ["onClick"])]), _: 2 }, 1024)]), _: 2 }, 1024)]), _: 2 }, 1024))), 128)), f("div", fe, [l(G, { "current-page": n.value.pageNum, "onUpdate:currentPage": e[6] || (e[6] = (a) => n.value.pageNum = a), "page-size": n.value.pageSize, "onUpdate:pageSize": e[7] || (e[7] = (a) => n.value.pageSize = a), "page-sizes": [2, 5, 10, 20], layout: "total, prev, pager, next, sizes", total: L.value, onSizeChange: B, onCurrentChange: F }, null, 8, ["current-page", "page-size", "total"])])]), _: 1 })]), l(W, { modelValue: k.value, "onUpdate:modelValue": e[16] || (e[16] = (a) => k.value = a), title: "Log", width: "60%" }, { default: t(() => [l(x, { "label-position": "left", "label-width": "auto", model: r.value, disabled: "" }, { default: t(() => [l(d, { label: "\u65E5\u5FD7\u65F6\u95F4" }, { default: t(() => [l(p, { modelValue: r.value.timestamp, "onUpdate:modelValue": e[8] || (e[8] = (a) => r.value.timestamp = a) }, null, 8, ["modelValue"])]), _: 1 }), l(d, { label: "\u65E5\u5FD7\u7EA7\u522B" }, { default: t(() => [l(p, { modelValue: r.value.severityText, "onUpdate:modelValue": e[9] || (e[9] = (a) => r.value.severityText = a) }, null, 8, ["modelValue"])]), _: 1 }), l(d, { label: "\u65E5\u5FD7\u5185\u5BB9" }, { default: t(() => [l(p, { type: "textarea", modelValue: r.value.content, "onUpdate:modelValue": e[10] || (e[10] = (a) => r.value.content = a) }, null, 8, ["modelValue"])]), _: 1 }), l(d, { label: "\u670D\u52A1\u540D\u79F0" }, { default: t(() => [l(p, { modelValue: r.value.serviceName, "onUpdate:modelValue": e[11] || (e[11] = (a) => r.value.serviceName = a) }, null, 8, ["modelValue"])]), _: 1 }), l(d, { label: "\u8FFD\u8E2AId" }, { default: t(() => [l(p, { modelValue: r.value.traceId, "onUpdate:modelValue": e[12] || (e[12] = (a) => r.value.traceId = a) }, null, 8, ["modelValue"])]), _: 1 }), l(d, { label: "SpanId" }, { default: t(() => [l(p, { modelValue: r.value.spanId, "onUpdate:modelValue": e[13] || (e[13] = (a) => r.value.spanId = a) }, null, 8, ["modelValue"])]), _: 1 }), l(d, { label: "\u72B6\u6001" }, { default: t(() => [l(p, { modelValue: r.value.error, "onUpdate:modelValue": e[14] || (e[14] = (a) => r.value.error = a) }, null, 8, ["modelValue"])]), _: 1 }), l(d, { label: "Tags" }, { default: t(() => [l(p, { type: "textarea", rows: 3, modelValue: r.value.tags, "onUpdate:modelValue": e[15] || (e[15] = (a) => r.value.tags = a) }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue"])], 64);
  };
} }, Qe = re(ge, [["__scopeId", "data-v-04a3e8e6"]]);
export {
  Qe as default
};
