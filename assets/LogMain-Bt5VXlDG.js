import { a as le, g as ae } from "./index-CCs73DQQ.js";
import { g as te, d as oe, a as ne } from "./index-CNhIUzVW.js";
import { u as re } from "./vue-router-DZ3MrWk1.js";
import { t as U } from "./dateUtil-BAIp0Nbc.js";
import { u as ue } from "./index-DQDgIJ2e.js";
import { u as se } from "./vue-clipboard3-xH3hfcUF.js";
import { _ as de } from "./index-BwJ3HXHG.js";
import { a as ie, E as z } from "./element-plus-hbUA32rR.js";
import { r as v, b as me, X as pe, c as D, a as f, Q as l, I as a, ag as u, P as E, o as k, M as c, a6 as ce, H as ve, O as w, u as fe } from "./@vue-CnBZ4jx_.js";
import "./axios-t--hEgTQ.js";
import "./nprogress-Bhg-JNl3.js";
import "./clipboard-BFgOkOlC.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
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
const ge = { class: "log-main-container" }, _e = { class: "search-area" }, ye = { class: "pagination-div" }, be = { __name: "LogMain", setup(Ve) {
  const A = ue(), I = re(), C = v(0), y = v([]), V = v(), b = v([]), n = v({ pageNum: 1, pageSize: 10, serviceName: "", traceId: "", keyword: "", keywordNotIncluded: "", severityText: "", startTimestamp: 0, endTimestamp: 0 }), N = async () => {
    const o = JSON.parse(JSON.stringify(n.value));
    b.value.length === 2 ? (o.startTimestamp = Date.parse(b.value[0]), o.endTimestamp = Date.parse(b.value[1])) : (o.startTimestamp = null, o.endTimestamp = null);
    const e = await te(o);
    e !== null && (C.value = parseInt(e.result.total), e.result.data.forEach((d) => {
      d.serviceName || (d.serviceName = "null");
    }), y.value = e.result.data);
  }, B = async (o) => {
    n.value.pageSize = o, await N();
  }, J = async (o) => {
    n.value.pageNum = o, await N();
  }, O = async (o, e) => {
    const d = await ne(o);
    if (d === null) {
      e([]);
      return;
    }
    const g = d.result.map((i) => i ? { value: i } : { value: "null" });
    e(g);
  };
  me(async () => {
    await N();
  });
  const S = v(false), r = v({}), F = (o) => {
    const e = JSON.parse(JSON.stringify(o));
    r.value = e, r.value.timestamp = U(e.timestamp), r.value.error = e.error ? "\u5F02\u5E38" : "\u6B63\u5E38", r.value.tags = e.tags.map((d) => d.key + "->" + d.value).join(`
`), S.value = true;
  }, M = async (o) => {
    if (!o.serviceName || !o.traceId) {
      z.warning("\u8BE5\u65E5\u5FD7\u672A\u4E0A\u62A5\u94FE\u8DEF\u4FE1\u606F");
      return;
    }
    A.$patch((e) => {
      e.currentAside.active = "/main/trace/dashboard";
    }), await I.push(`/main/trace/dashboard?serviceName=${o.serviceName}&traceId=${o.traceId}`);
  }, $ = pe({ lazy: true, async lazyLoad(o, e) {
    const d = [], { level: g } = o;
    if (g === 0) {
      const i = await le();
      if (i === null) return;
      i.result.map((m) => ({ leaf: false, value: m, label: m })).forEach((m) => {
        d.push(m);
      });
    } else if (g === 1) {
      const i = await ae({ query: "", namespace: o.value, pageNum: 1, pageSize: 1e3 });
      if (i === null) return;
      i.result.data.map((m) => ({ leaf: true, value: m.name, label: m.name === "" ? "null" : m.name })).forEach((m) => {
        d.push(m);
      });
    }
    e(d);
  } }), P = () => {
    V.value ? (n.value.serviceName = V.value[1], (n.value.serviceName === "" || n.value.serviceName == null) && (n.value.serviceName = "null")) : n.value.serviceName = null;
  }, Q = async () => {
    const o = ie.service({ lock: true, text: "\u6B63\u5728\u6267\u884C\u6570\u636E\u8FD0\u7EF4\u64CD\u4F5C\uFF0C\u8BF7\u7B49\u5F85\u3002", background: "rgba(0, 0, 0, 0.7)" });
    try {
      const e = await oe();
      if (e === null || e.result.length === 0) return;
      z.success("\u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E\u6210\u529F");
    } finally {
      o.close(), y.value.splice(0, y.value.length), I.go(0);
    }
  }, { toClipboard: q } = se(), R = async () => {
    try {
      await q(JSON.stringify(y.value));
    } catch (o) {
      console.error(o);
    }
  };
  return (o, e) => {
    const d = u("el-breadcrumb-item"), g = u("el-breadcrumb"), i = u("el-button"), m = u("el-tooltip"), L = u("el-row"), h = u("el-cascader"), s = u("el-form-item"), p = u("el-input"), j = u("el-date-picker"), H = u("el-autocomplete"), T = u("el-form"), X = u("el-divider"), _ = u("el-col"), G = u("Share"), x = u("el-icon"), K = u("InfoFilled"), W = u("el-pagination"), Y = u("el-card"), Z = u("el-dialog");
    return k(), D(E, null, [f("div", ge, [l(L, { class: "breadcrumb-header-row" }, { default: a(() => [l(g, { "separator-icon": "ArrowRight" }, { default: a(() => [l(d, null, { default: a(() => e[17] || (e[17] = [f("a", { href: "/main" }, "\u4E3B\u9875", -1)])), _: 1 }), l(d, null, { default: a(() => e[18] || (e[18] = [f("a", { href: "/main/log" }, "\u65E5\u5FD7\u6982\u89C8", -1)])), _: 1 })]), _: 1 }), l(m, { placement: "bottom" }, { content: a(() => e[19] || (e[19] = [c(" \u70B9\u51FB\u8BE5\u6309\u94AE\u5C06\u4F1A"), f("b", { style: { color: "red" } }, "\u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E", -1), c("\uFF0C\u8BF7\u786E\u4FDD\u60A8\u77E5\u6653\u8BE5\u64CD\u4F5C\u5C06\u5E26\u6765\u7684\u540E\u679C\u3002 "), f("br", null, null, -1), c(" \u5220\u9664\u64CD\u4F5C\u5C06\u9501\u5B9A\u7528\u6237\u754C\u9762\u76F4\u81F3\u5220\u9664\u5B8C\u6210\u3002 ")])), default: a(() => [l(i, { type: "danger", onClick: Q }, { default: a(() => e[20] || (e[20] = [c(" \u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E ")])), _: 1 })]), _: 1 })]), _: 1 }), l(Y, { class: "log-card" }, { default: a(() => [f("div", _e, [l(T, { inline: true, model: n.value }, { default: a(() => [l(s, { label: "\u670D\u52A1\u540D\u79F0" }, { default: a(() => [l(h, { placeholder: "\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4\u2192\u670D\u52A1\u540D\u79F0", modelValue: V.value, "onUpdate:modelValue": e[0] || (e[0] = (t) => V.value = t), clearable: "", props: $, "show-all-levels": false, onChange: P }, null, 8, ["modelValue", "props"])]), _: 1 }), l(s, { label: "traceId" }, { default: a(() => [l(p, { modelValue: n.value.traceId, "onUpdate:modelValue": e[1] || (e[1] = (t) => n.value.traceId = t), placeholder: "\u8BF7\u8F93\u5165\u4E00\u4E2AtraceId", clearable: "" }, null, 8, ["modelValue"])]), _: 1 }), l(s, { label: "\u8D77\u6B62\u65F6\u95F4" }, { default: a(() => [l(j, { modelValue: b.value, "onUpdate:modelValue": e[2] || (e[2] = (t) => b.value = t), type: "datetimerange", "range-separator": "\u5230", "start-placeholder": "\u5F00\u59CB\u65F6\u95F4", "end-placeholder": "\u7ED3\u675F\u65F6\u95F4" }, null, 8, ["modelValue"])]), _: 1 }), l(s, { label: "\u65E5\u5FD7\u7EA7\u522B" }, { default: a(() => [l(H, { class: "auto-complete-input", modelValue: n.value.severityText, "onUpdate:modelValue": e[3] || (e[3] = (t) => n.value.severityText = t), "fetch-suggestions": O, clearable: "", placeholder: "\u8BF7\u8F93\u5165\u65E5\u5FD7\u7EA7\u522B" }, null, 8, ["modelValue"])]), _: 1 }), l(s, { label: "\u5185\u5BB9\u5173\u952E\u8BCD" }, { default: a(() => [l(p, { modelValue: n.value.keyword, "onUpdate:modelValue": e[4] || (e[4] = (t) => n.value.keyword = t), placeholder: "\u8BF7\u8F93\u5165\u4E00\u4E2A\u5185\u5BB9\u5173\u952E\u8BCD", clearable: "" }, null, 8, ["modelValue"])]), _: 1 }), l(s, { label: "\u5185\u5BB9\u4E0D\u5305\u542B\u7684\u5173\u952E\u8BCD" }, { default: a(() => [l(p, { modelValue: n.value.keywordNotIncluded, "onUpdate:modelValue": e[5] || (e[5] = (t) => n.value.keywordNotIncluded = t), placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9\u4E0D\u5305\u542B\u7684\u5173\u952E\u8BCD", clearable: "" }, null, 8, ["modelValue"])]), _: 1 }), l(s, null, { default: a(() => [l(i, { type: "primary", onClick: N, icon: "Search" }, { default: a(() => e[21] || (e[21] = [c("\u641C\u7D22")])), _: 1 })]), _: 1 }), l(s, null, { default: a(() => [l(i, { type: "primary", onClick: R, icon: "CopyDocument" }, { default: a(() => e[22] || (e[22] = [c("\u590D\u5236\u641C\u7D22\u7ED3\u679C")])), _: 1 })]), _: 1 })]), _: 1 }, 8, ["model"])]), l(X), (k(true), D(E, null, ce(y.value, (t) => (k(), ve(L, { gutter: 5, key: t, style: { "word-break": "break-all" } }, { default: a(() => [l(_, { span: 4 }, { default: a(() => [c(w(t.serviceName), 1)]), _: 2 }, 1024), l(_, { span: 3 }, { default: a(() => [c(w(fe(U)(t.timestamp)), 1)]), _: 2 }, 1024), l(_, { span: 2 }, { default: a(() => [c(w(t.severityText), 1)]), _: 2 }, 1024), l(_, { span: 12 }, { default: a(() => [c(w(t.content), 1)]), _: 2 }, 1024), l(_, { span: 1 }, { default: a(() => [l(m, { effect: "light", content: "\u67E5\u770B\u65E5\u5FD7\u5BF9\u5E94\u94FE\u8DEF\u4FE1\u606F", placement: "top", enterable: false }, { default: a(() => [l(i, { type: "primary", circle: "", size: "small", onClick: (ee) => M(t) }, { default: a(() => [l(x, null, { default: a(() => [l(G)]), _: 1 })]), _: 2 }, 1032, ["onClick"])]), _: 2 }, 1024)]), _: 2 }, 1024), l(_, { span: 1 }, { default: a(() => [l(m, { effect: "light", content: "\u67E5\u770B\u65E5\u5FD7\u5177\u4F53\u4FE1\u606F", placement: "top", enterable: false }, { default: a(() => [l(i, { type: "primary", circle: "", size: "small", onClick: (ee) => F(t) }, { default: a(() => [l(x, null, { default: a(() => [l(K)]), _: 1 })]), _: 2 }, 1032, ["onClick"])]), _: 2 }, 1024)]), _: 2 }, 1024)]), _: 2 }, 1024))), 128)), f("div", ye, [l(W, { "current-page": n.value.pageNum, "onUpdate:currentPage": e[6] || (e[6] = (t) => n.value.pageNum = t), "page-size": n.value.pageSize, "onUpdate:pageSize": e[7] || (e[7] = (t) => n.value.pageSize = t), "page-sizes": [10, 20, 50, 100], layout: "total, prev, pager, next, sizes", total: C.value, onSizeChange: B, onCurrentChange: J }, null, 8, ["current-page", "page-size", "total"])])]), _: 1 })]), l(Z, { modelValue: S.value, "onUpdate:modelValue": e[16] || (e[16] = (t) => S.value = t), title: "Log", width: "60%" }, { default: a(() => [l(T, { "label-position": "left", "label-width": "auto", model: r.value, disabled: "" }, { default: a(() => [l(s, { label: "\u65E5\u5FD7\u65F6\u95F4" }, { default: a(() => [l(p, { modelValue: r.value.timestamp, "onUpdate:modelValue": e[8] || (e[8] = (t) => r.value.timestamp = t) }, null, 8, ["modelValue"])]), _: 1 }), l(s, { label: "\u65E5\u5FD7\u7EA7\u522B" }, { default: a(() => [l(p, { modelValue: r.value.severityText, "onUpdate:modelValue": e[9] || (e[9] = (t) => r.value.severityText = t) }, null, 8, ["modelValue"])]), _: 1 }), l(s, { label: "\u65E5\u5FD7\u5185\u5BB9" }, { default: a(() => [l(p, { type: "textarea", modelValue: r.value.content, "onUpdate:modelValue": e[10] || (e[10] = (t) => r.value.content = t) }, null, 8, ["modelValue"])]), _: 1 }), l(s, { label: "\u670D\u52A1\u540D\u79F0" }, { default: a(() => [l(p, { modelValue: r.value.serviceName, "onUpdate:modelValue": e[11] || (e[11] = (t) => r.value.serviceName = t) }, null, 8, ["modelValue"])]), _: 1 }), l(s, { label: "\u8FFD\u8E2AId" }, { default: a(() => [l(p, { modelValue: r.value.traceId, "onUpdate:modelValue": e[12] || (e[12] = (t) => r.value.traceId = t) }, null, 8, ["modelValue"])]), _: 1 }), l(s, { label: "SpanId" }, { default: a(() => [l(p, { modelValue: r.value.spanId, "onUpdate:modelValue": e[13] || (e[13] = (t) => r.value.spanId = t) }, null, 8, ["modelValue"])]), _: 1 }), l(s, { label: "\u72B6\u6001" }, { default: a(() => [l(p, { modelValue: r.value.error, "onUpdate:modelValue": e[14] || (e[14] = (t) => r.value.error = t) }, null, 8, ["modelValue"])]), _: 1 }), l(s, { label: "Tags" }, { default: a(() => [l(p, { type: "textarea", rows: 3, modelValue: r.value.tags, "onUpdate:modelValue": e[15] || (e[15] = (t) => r.value.tags = t) }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue"])], 64);
  };
} }, He = de(be, [["__scopeId", "data-v-a7cd1d97"]]);
export {
  He as default
};
