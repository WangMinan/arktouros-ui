import { s as ot, d as ze, u as Q, av as st, k as T, A as le, r as it, w as ct, af as Ve, n as at, m as q, X as lt } from "./@vue-CnBZ4jx_.js";
/*!
* vue-router v4.5.0
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/
const V = typeof document < "u";
function qe(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ut(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && qe(e.default);
}
const P = Object.assign;
function ue(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = N(o) ? o.map(e) : e(o);
  }
  return n;
}
const F = () => {
}, N = Array.isArray, Ge = /#/g, ft = /&/g, ht = /\//g, dt = /=/g, pt = /\?/g, Ke = /\+/g, mt = /%5B/g, gt = /%5D/g, Ue = /%5E/g, vt = /%60/g, De = /%7B/g, yt = /%7C/g, We = /%7D/g, Rt = /%20/g;
function ge(e) {
  return encodeURI("" + e).replace(yt, "|").replace(mt, "[").replace(gt, "]");
}
function Et(e) {
  return ge(e).replace(De, "{").replace(We, "}").replace(Ue, "^");
}
function de(e) {
  return ge(e).replace(Ke, "%2B").replace(Rt, "+").replace(Ge, "%23").replace(ft, "%26").replace(vt, "`").replace(De, "{").replace(We, "}").replace(Ue, "^");
}
function wt(e) {
  return de(e).replace(dt, "%3D");
}
function Pt(e) {
  return ge(e).replace(Ge, "%23").replace(pt, "%3F");
}
function St(e) {
  return e == null ? "" : Pt(e).replace(ht, "%2F");
}
function Y(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const kt = /\/$/, Ct = (e) => e.replace(kt, "");
function fe(e, t, n = "/") {
  let r, o = {}, a = "", d = "";
  const g = t.indexOf("#");
  let i = t.indexOf("?");
  return g < i && g >= 0 && (i = -1), i > -1 && (r = t.slice(0, i), a = t.slice(i + 1, g > -1 ? g : t.length), o = e(a)), g > -1 && (r = r || t.slice(0, g), d = t.slice(g, t.length)), r = _t(r ?? t, n), { fullPath: r + (a && "?") + a + d, path: r, query: o, hash: Y(d) };
}
function bt(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Se(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function At(e, t, n) {
  const r = t.matched.length - 1, o = n.matched.length - 1;
  return r > -1 && r === o && G(t.matched[r], n.matched[o]) && Qe(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function G(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Qe(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (!Ot(e[n], t[n])) return false;
  return true;
}
function Ot(e, t) {
  return N(e) ? ke(e, t) : N(t) ? ke(t, e) : e === t;
}
function ke(e, t) {
  return N(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function _t(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let a = n.length - 1, d, g;
  for (d = 0; d < r.length; d++) if (g = r[d], g !== ".") if (g === "..") a > 1 && a--;
  else break;
  return n.slice(0, a).join("/") + "/" + r.slice(d).join("/");
}
const H = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
var Z;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Z || (Z = {}));
var X;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(X || (X = {}));
function xt(e) {
  if (!e) if (V) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Ct(e);
}
const Mt = /^[^#]+#/;
function It(e, t) {
  return e.replace(Mt, "#") + t;
}
function Nt(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
}
const te = () => ({ left: window.scrollX, top: window.scrollY });
function Tt(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) return;
    t = Nt(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Ce(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const pe = /* @__PURE__ */ new Map();
function Lt(e, t) {
  pe.set(e, t);
}
function $t(e) {
  const t = pe.get(e);
  return pe.delete(e), t;
}
let Ht = () => location.protocol + "//" + location.host;
function Fe(e, t) {
  const { pathname: n, search: r, hash: o } = t, a = e.indexOf("#");
  if (a > -1) {
    let g = o.includes(e.slice(a)) ? e.slice(a).length : 1, i = o.slice(g);
    return i[0] !== "/" && (i = "/" + i), Se(i, "");
  }
  return Se(n, e) + r + o;
}
function jt(e, t, n, r) {
  let o = [], a = [], d = null;
  const g = ({ state: l }) => {
    const u = Fe(e, location), w = n.value, S = t.value;
    let b = 0;
    if (l) {
      if (n.value = u, t.value = l, d && d === w) {
        d = null;
        return;
      }
      b = S ? l.position - S.position : 0;
    } else r(u);
    o.forEach((A) => {
      A(n.value, w, { delta: b, type: Z.pop, direction: b ? b > 0 ? X.forward : X.back : X.unknown });
    });
  };
  function i() {
    d = n.value;
  }
  function f(l) {
    o.push(l);
    const u = () => {
      const w = o.indexOf(l);
      w > -1 && o.splice(w, 1);
    };
    return a.push(u), u;
  }
  function h() {
    const { history: l } = window;
    l.state && l.replaceState(P({}, l.state, { scroll: te() }), "");
  }
  function c() {
    for (const l of a) l();
    a = [], window.removeEventListener("popstate", g), window.removeEventListener("beforeunload", h);
  }
  return window.addEventListener("popstate", g), window.addEventListener("beforeunload", h, { passive: true }), { pauseListeners: i, listen: f, destroy: c };
}
function be(e, t, n, r = false, o = false) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: o ? te() : null };
}
function Bt(e) {
  const { history: t, location: n } = window, r = { value: Fe(e, n) }, o = { value: t.state };
  o.value || a(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function a(i, f, h) {
    const c = e.indexOf("#"), l = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + i : Ht() + e + i;
    try {
      t[h ? "replaceState" : "pushState"](f, "", l), o.value = f;
    } catch (u) {
      console.error(u), n[h ? "replace" : "assign"](l);
    }
  }
  function d(i, f) {
    const h = P({}, t.state, be(o.value.back, i, o.value.forward, true), f, { position: o.value.position });
    a(i, h, true), r.value = i;
  }
  function g(i, f) {
    const h = P({}, o.value, t.state, { forward: i, scroll: te() });
    a(h.current, h, true);
    const c = P({}, be(r.value, i, null), { position: h.position + 1 }, f);
    a(i, c, false), r.value = i;
  }
  return { location: r, state: o, push: g, replace: d };
}
function zt(e) {
  e = xt(e);
  const t = Bt(e), n = jt(e, t.state, t.location, t.replace);
  function r(a, d = true) {
    d || n.pauseListeners(), history.go(a);
  }
  const o = P({ location: "", base: e, go: r, createHref: It.bind(null, e) }, t, n);
  return Object.defineProperty(o, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(o, "state", { enumerable: true, get: () => t.state.value }), o;
}
function pn(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), zt(e);
}
function Vt(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Xe(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ye = Symbol("");
var Ae;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ae || (Ae = {}));
function K(e, t) {
  return P(new Error(), { type: e, [Ye]: true }, t);
}
function L(e, t) {
  return e instanceof Error && Ye in e && (t == null || !!(e.type & t));
}
const Oe = "[^/]+?", qt = { sensitive: false, strict: false, start: true, end: true }, Gt = /[.+*?^${}()[\]/\\]/g;
function Kt(e, t) {
  const n = P({}, qt, t), r = [];
  let o = n.start ? "^" : "";
  const a = [];
  for (const f of e) {
    const h = f.length ? [] : [90];
    n.strict && !f.length && (o += "/");
    for (let c = 0; c < f.length; c++) {
      const l = f[c];
      let u = 40 + (n.sensitive ? 0.25 : 0);
      if (l.type === 0) c || (o += "/"), o += l.value.replace(Gt, "\\$&"), u += 40;
      else if (l.type === 1) {
        const { value: w, repeatable: S, optional: b, regexp: A } = l;
        a.push({ name: w, repeatable: S, optional: b });
        const E = A || Oe;
        if (E !== Oe) {
          u += 10;
          try {
            new RegExp(`(${E})`);
          } catch (I) {
            throw new Error(`Invalid custom RegExp for param "${w}" (${E}): ` + I.message);
          }
        }
        let k = S ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
        c || (k = b && f.length < 2 ? `(?:/${k})` : "/" + k), b && (k += "?"), o += k, u += 20, b && (u += -8), S && (u += -20), E === ".*" && (u += -50);
      }
      h.push(u);
    }
    r.push(h);
  }
  if (n.strict && n.end) {
    const f = r.length - 1;
    r[f][r[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
  const d = new RegExp(o, n.sensitive ? "" : "i");
  function g(f) {
    const h = f.match(d), c = {};
    if (!h) return null;
    for (let l = 1; l < h.length; l++) {
      const u = h[l] || "", w = a[l - 1];
      c[w.name] = u && w.repeatable ? u.split("/") : u;
    }
    return c;
  }
  function i(f) {
    let h = "", c = false;
    for (const l of e) {
      (!c || !h.endsWith("/")) && (h += "/"), c = false;
      for (const u of l) if (u.type === 0) h += u.value;
      else if (u.type === 1) {
        const { value: w, repeatable: S, optional: b } = u, A = w in f ? f[w] : "";
        if (N(A) && !S) throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);
        const E = N(A) ? A.join("/") : A;
        if (!E) if (b) l.length < 2 && (h.endsWith("/") ? h = h.slice(0, -1) : c = true);
        else throw new Error(`Missing required param "${w}"`);
        h += E;
      }
    }
    return h || "/";
  }
  return { re: d, score: r, keys: a, parse: g, stringify: i };
}
function Ut(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Ze(e, t) {
  let n = 0;
  const r = e.score, o = t.score;
  for (; n < r.length && n < o.length; ) {
    const a = Ut(r[n], o[n]);
    if (a) return a;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (_e(r)) return 1;
    if (_e(o)) return -1;
  }
  return o.length - r.length;
}
function _e(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Dt = { type: 0, value: "" }, Wt = /[a-zA-Z0-9_]/;
function Qt(e) {
  if (!e) return [[]];
  if (e === "/") return [[Dt]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(u) {
    throw new Error(`ERR (${n})/"${f}": ${u}`);
  }
  let n = 0, r = n;
  const o = [];
  let a;
  function d() {
    a && o.push(a), a = [];
  }
  let g = 0, i, f = "", h = "";
  function c() {
    f && (n === 0 ? a.push({ type: 0, value: f }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (i === "*" || i === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), a.push({ type: 1, value: f, regexp: h, repeatable: i === "*" || i === "+", optional: i === "*" || i === "?" })) : t("Invalid state to consume buffer"), f = "");
  }
  function l() {
    f += i;
  }
  for (; g < e.length; ) {
    if (i = e[g++], i === "\\" && n !== 2) {
      r = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        i === "/" ? (f && c(), d()) : i === ":" ? (c(), n = 1) : l();
        break;
      case 4:
        l(), n = r;
        break;
      case 1:
        i === "(" ? n = 2 : Wt.test(i) ? l() : (c(), n = 0, i !== "*" && i !== "?" && i !== "+" && g--);
        break;
      case 2:
        i === ")" ? h[h.length - 1] == "\\" ? h = h.slice(0, -1) + i : n = 3 : h += i;
        break;
      case 3:
        c(), n = 0, i !== "*" && i !== "?" && i !== "+" && g--, h = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), c(), d(), o;
}
function Ft(e, t, n) {
  const r = Kt(Qt(e.path), n), o = P(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function Xt(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = Ne({ strict: false, end: true, sensitive: false }, t);
  function o(c) {
    return r.get(c);
  }
  function a(c, l, u) {
    const w = !u, S = Me(c);
    S.aliasOf = u && u.record;
    const b = Ne(t, c), A = [S];
    if ("alias" in c) {
      const I = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const B of I) A.push(Me(P({}, S, { components: u ? u.record.components : S.components, path: B, aliasOf: u ? u.record : S })));
    }
    let E, k;
    for (const I of A) {
      const { path: B } = I;
      if (l && B[0] !== "/") {
        const $ = l.record.path, M = $[$.length - 1] === "/" ? "" : "/";
        I.path = l.record.path + (B && M + B);
      }
      if (E = Ft(I, l, b), u ? u.alias.push(E) : (k = k || E, k !== E && k.alias.push(E), w && c.name && !Ie(E) && d(c.name)), Je(E) && i(E), S.children) {
        const $ = S.children;
        for (let M = 0; M < $.length; M++) a($[M], E, u && u.children[M]);
      }
      u = u || E;
    }
    return k ? () => {
      d(k);
    } : F;
  }
  function d(c) {
    if (Xe(c)) {
      const l = r.get(c);
      l && (r.delete(c), n.splice(n.indexOf(l), 1), l.children.forEach(d), l.alias.forEach(d));
    } else {
      const l = n.indexOf(c);
      l > -1 && (n.splice(l, 1), c.record.name && r.delete(c.record.name), c.children.forEach(d), c.alias.forEach(d));
    }
  }
  function g() {
    return n;
  }
  function i(c) {
    const l = Jt(c, n);
    n.splice(l, 0, c), c.record.name && !Ie(c) && r.set(c.record.name, c);
  }
  function f(c, l) {
    let u, w = {}, S, b;
    if ("name" in c && c.name) {
      if (u = r.get(c.name), !u) throw K(1, { location: c });
      b = u.record.name, w = P(xe(l.params, u.keys.filter((k) => !k.optional).concat(u.parent ? u.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)), c.params && xe(c.params, u.keys.map((k) => k.name))), S = u.stringify(w);
    } else if (c.path != null) S = c.path, u = n.find((k) => k.re.test(S)), u && (w = u.parse(S), b = u.record.name);
    else {
      if (u = l.name ? r.get(l.name) : n.find((k) => k.re.test(l.path)), !u) throw K(1, { location: c, currentLocation: l });
      b = u.record.name, w = P({}, l.params, c.params), S = u.stringify(w);
    }
    const A = [];
    let E = u;
    for (; E; ) A.unshift(E.record), E = E.parent;
    return { name: b, path: S, params: w, matched: A, meta: Zt(A) };
  }
  e.forEach((c) => a(c));
  function h() {
    n.length = 0, r.clear();
  }
  return { addRoute: a, resolve: f, removeRoute: d, clearRoutes: h, getRoutes: g, getRecordMatcher: o };
}
function xe(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Me(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: Yt(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Yt(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Ie(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function Zt(e) {
  return e.reduce((t, n) => P(t, n.meta), {});
}
function Ne(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Jt(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const a = n + r >> 1;
    Ze(e, t[a]) < 0 ? r = a : n = a + 1;
  }
  const o = en(e);
  return o && (r = t.lastIndexOf(o, r - 1)), r;
}
function en(e) {
  let t = e;
  for (; t = t.parent; ) if (Je(t) && Ze(e, t) === 0) return t;
}
function Je({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function tn(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const a = r[o].replace(Ke, " "), d = a.indexOf("="), g = Y(d < 0 ? a : a.slice(0, d)), i = d < 0 ? null : Y(a.slice(d + 1));
    if (g in t) {
      let f = t[g];
      N(f) || (f = t[g] = [f]), f.push(i);
    } else t[g] = i;
  }
  return t;
}
function Te(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = wt(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (N(r) ? r.map((a) => a && de(a)) : [r && de(r)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function nn(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = N(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
  }
  return t;
}
const rn = Symbol(""), Le = Symbol(""), ne = Symbol(""), et = Symbol(""), me = Symbol("");
function W() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const o = e.indexOf(r);
      o > -1 && e.splice(o, 1);
    };
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function j(e, t, n, r, o, a = (d) => d()) {
  const d = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () => new Promise((g, i) => {
    const f = (l) => {
      l === false ? i(K(4, { from: n, to: t })) : l instanceof Error ? i(l) : Vt(l) ? i(K(2, { from: t, to: l })) : (d && r.enterCallbacks[o] === d && typeof l == "function" && d.push(l), g());
    }, h = a(() => e.call(r && r.instances[o], t, n, f));
    let c = Promise.resolve(h);
    e.length < 3 && (c = c.then(f)), c.catch((l) => i(l));
  });
}
function he(e, t, n, r, o = (a) => a()) {
  const a = [];
  for (const d of e) for (const g in d.components) {
    let i = d.components[g];
    if (!(t !== "beforeRouteEnter" && !d.instances[g])) if (qe(i)) {
      const h = (i.__vccOpts || i)[t];
      h && a.push(j(h, n, r, d, g, o));
    } else {
      let f = i();
      a.push(() => f.then((h) => {
        if (!h) throw new Error(`Couldn't resolve component "${g}" at "${d.path}"`);
        const c = ut(h) ? h.default : h;
        d.mods[g] = h, d.components[g] = c;
        const u = (c.__vccOpts || c)[t];
        return u && j(u, n, r, d, g, o)();
      }));
    }
  }
  return a;
}
function $e(e) {
  const t = q(ne), n = q(et), r = T(() => {
    const i = Q(e.to);
    return t.resolve(i);
  }), o = T(() => {
    const { matched: i } = r.value, { length: f } = i, h = i[f - 1], c = n.matched;
    if (!h || !c.length) return -1;
    const l = c.findIndex(G.bind(null, h));
    if (l > -1) return l;
    const u = He(i[f - 2]);
    return f > 1 && He(h) === u && c[c.length - 1].path !== u ? c.findIndex(G.bind(null, i[f - 2])) : l;
  }), a = T(() => o.value > -1 && ln(n.params, r.value.params)), d = T(() => o.value > -1 && o.value === n.matched.length - 1 && Qe(n.params, r.value.params));
  function g(i = {}) {
    if (an(i)) {
      const f = t[Q(e.replace) ? "replace" : "push"](Q(e.to)).catch(F);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => f), f;
    }
    return Promise.resolve();
  }
  return { route: r, href: T(() => r.value.href), isActive: a, isExactActive: d, navigate: g };
}
function on(e) {
  return e.length === 1 ? e[0] : e;
}
const sn = ze({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: $e, setup(e, { slots: t }) {
  const n = lt($e(e)), { options: r } = q(ne), o = T(() => ({ [je(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive, [je(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const a = t.default && on(t.default(n));
    return e.custom ? a : Ve("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: o.value }, a);
  };
} }), cn = sn;
function an(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function ln(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o) return false;
    } else if (!N(o) || o.length !== r.length || r.some((a, d) => a !== o[d])) return false;
  }
  return true;
}
function He(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const je = (e, t, n) => e ?? t ?? n, un = ze({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const r = q(me), o = T(() => e.route || r.value), a = q(Le, 0), d = T(() => {
    let f = Q(a);
    const { matched: h } = o.value;
    let c;
    for (; (c = h[f]) && !c.components; ) f++;
    return f;
  }), g = T(() => o.value.matched[d.value]);
  le(Le, T(() => d.value + 1)), le(rn, g), le(me, o);
  const i = it();
  return ct(() => [i.value, g.value, e.name], ([f, h, c], [l, u, w]) => {
    h && (h.instances[c] = f, u && u !== h && f && f === l && (h.leaveGuards.size || (h.leaveGuards = u.leaveGuards), h.updateGuards.size || (h.updateGuards = u.updateGuards))), f && h && (!u || !G(h, u) || !l) && (h.enterCallbacks[c] || []).forEach((S) => S(f));
  }, { flush: "post" }), () => {
    const f = o.value, h = e.name, c = g.value, l = c && c.components[h];
    if (!l) return Be(n.default, { Component: l, route: f });
    const u = c.props[h], w = u ? u === true ? f.params : typeof u == "function" ? u(f) : u : null, b = Ve(l, P({}, w, t, { onVnodeUnmounted: (A) => {
      A.component.isUnmounted && (c.instances[h] = null);
    }, ref: i }));
    return Be(n.default, { Component: b, route: f }) || b;
  };
} });
function Be(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const fn = un;
function mn(e) {
  const t = Xt(e.routes, e), n = e.parseQuery || tn, r = e.stringifyQuery || Te, o = e.history, a = W(), d = W(), g = W(), i = ot(H);
  let f = H;
  V && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const h = ue.bind(null, (s) => "" + s), c = ue.bind(null, St), l = ue.bind(null, Y);
  function u(s, m) {
    let p, v;
    return Xe(s) ? (p = t.getRecordMatcher(s), v = m) : v = s, t.addRoute(v, p);
  }
  function w(s) {
    const m = t.getRecordMatcher(s);
    m && t.removeRoute(m);
  }
  function S() {
    return t.getRoutes().map((s) => s.record);
  }
  function b(s) {
    return !!t.getRecordMatcher(s);
  }
  function A(s, m) {
    if (m = P({}, m || i.value), typeof s == "string") {
      const y = fe(n, s, m.path), _ = t.resolve({ path: y.path }, m), D = o.createHref(y.fullPath);
      return P(y, _, { params: l(_.params), hash: Y(y.hash), redirectedFrom: void 0, href: D });
    }
    let p;
    if (s.path != null) p = P({}, s, { path: fe(n, s.path, m.path).path });
    else {
      const y = P({}, s.params);
      for (const _ in y) y[_] == null && delete y[_];
      p = P({}, s, { params: c(y) }), m.params = c(m.params);
    }
    const v = t.resolve(p, m), C = s.hash || "";
    v.params = h(l(v.params));
    const O = bt(r, P({}, s, { hash: Et(C), path: v.path })), R = o.createHref(O);
    return P({ fullPath: O, hash: C, query: r === Te ? nn(s.query) : s.query || {} }, v, { redirectedFrom: void 0, href: R });
  }
  function E(s) {
    return typeof s == "string" ? fe(n, s, i.value.path) : P({}, s);
  }
  function k(s, m) {
    if (f !== s) return K(8, { from: m, to: s });
  }
  function I(s) {
    return M(s);
  }
  function B(s) {
    return I(P(E(s), { replace: true }));
  }
  function $(s) {
    const m = s.matched[s.matched.length - 1];
    if (m && m.redirect) {
      const { redirect: p } = m;
      let v = typeof p == "function" ? p(s) : p;
      return typeof v == "string" && (v = v.includes("?") || v.includes("#") ? v = E(v) : { path: v }, v.params = {}), P({ query: s.query, hash: s.hash, params: v.path != null ? {} : s.params }, v);
    }
  }
  function M(s, m) {
    const p = f = A(s), v = i.value, C = s.state, O = s.force, R = s.replace === true, y = $(p);
    if (y) return M(P(E(y), { state: typeof y == "object" ? P({}, C, y.state) : C, force: O, replace: R }), m || p);
    const _ = p;
    _.redirectedFrom = m;
    let D;
    return !O && At(r, v, p) && (D = K(16, { to: _, from: v }), we(v, v, true, false)), (D ? Promise.resolve(D) : ve(_, v)).catch((x) => L(x) ? L(x, 2) ? x : ie(x) : se(x, _, v)).then((x) => {
      if (x) {
        if (L(x, 2)) return M(P({ replace: R }, E(x.to), { state: typeof x.to == "object" ? P({}, C, x.to.state) : C, force: O }), m || _);
      } else x = Re(_, v, true, R, C);
      return ye(_, v, x), x;
    });
  }
  function tt(s, m) {
    const p = k(s, m);
    return p ? Promise.reject(p) : Promise.resolve();
  }
  function re(s) {
    const m = ee.values().next().value;
    return m && typeof m.runWithContext == "function" ? m.runWithContext(s) : s();
  }
  function ve(s, m) {
    let p;
    const [v, C, O] = hn(s, m);
    p = he(v.reverse(), "beforeRouteLeave", s, m);
    for (const y of v) y.leaveGuards.forEach((_) => {
      p.push(j(_, s, m));
    });
    const R = tt.bind(null, s, m);
    return p.push(R), z(p).then(() => {
      p = [];
      for (const y of a.list()) p.push(j(y, s, m));
      return p.push(R), z(p);
    }).then(() => {
      p = he(C, "beforeRouteUpdate", s, m);
      for (const y of C) y.updateGuards.forEach((_) => {
        p.push(j(_, s, m));
      });
      return p.push(R), z(p);
    }).then(() => {
      p = [];
      for (const y of O) if (y.beforeEnter) if (N(y.beforeEnter)) for (const _ of y.beforeEnter) p.push(j(_, s, m));
      else p.push(j(y.beforeEnter, s, m));
      return p.push(R), z(p);
    }).then(() => (s.matched.forEach((y) => y.enterCallbacks = {}), p = he(O, "beforeRouteEnter", s, m, re), p.push(R), z(p))).then(() => {
      p = [];
      for (const y of d.list()) p.push(j(y, s, m));
      return p.push(R), z(p);
    }).catch((y) => L(y, 8) ? y : Promise.reject(y));
  }
  function ye(s, m, p) {
    g.list().forEach((v) => re(() => v(s, m, p)));
  }
  function Re(s, m, p, v, C) {
    const O = k(s, m);
    if (O) return O;
    const R = m === H, y = V ? history.state : {};
    p && (v || R ? o.replace(s.fullPath, P({ scroll: R && y && y.scroll }, C)) : o.push(s.fullPath, C)), i.value = s, we(s, m, p, R), ie();
  }
  let U;
  function nt() {
    U || (U = o.listen((s, m, p) => {
      if (!Pe.listening) return;
      const v = A(s), C = $(v);
      if (C) {
        M(P(C, { replace: true, force: true }), v).catch(F);
        return;
      }
      f = v;
      const O = i.value;
      V && Lt(Ce(O.fullPath, p.delta), te()), ve(v, O).catch((R) => L(R, 12) ? R : L(R, 2) ? (M(P(E(R.to), { force: true }), v).then((y) => {
        L(y, 20) && !p.delta && p.type === Z.pop && o.go(-1, false);
      }).catch(F), Promise.reject()) : (p.delta && o.go(-p.delta, false), se(R, v, O))).then((R) => {
        R = R || Re(v, O, false), R && (p.delta && !L(R, 8) ? o.go(-p.delta, false) : p.type === Z.pop && L(R, 20) && o.go(-1, false)), ye(v, O, R);
      }).catch(F);
    }));
  }
  let oe = W(), Ee = W(), J;
  function se(s, m, p) {
    ie(s);
    const v = Ee.list();
    return v.length ? v.forEach((C) => C(s, m, p)) : console.error(s), Promise.reject(s);
  }
  function rt() {
    return J && i.value !== H ? Promise.resolve() : new Promise((s, m) => {
      oe.add([s, m]);
    });
  }
  function ie(s) {
    return J || (J = !s, nt(), oe.list().forEach(([m, p]) => s ? p(s) : m()), oe.reset()), s;
  }
  function we(s, m, p, v) {
    const { scrollBehavior: C } = e;
    if (!V || !C) return Promise.resolve();
    const O = !p && $t(Ce(s.fullPath, 0)) || (v || !p) && history.state && history.state.scroll || null;
    return at().then(() => C(s, m, O)).then((R) => R && Tt(R)).catch((R) => se(R, s, m));
  }
  const ce = (s) => o.go(s);
  let ae;
  const ee = /* @__PURE__ */ new Set(), Pe = { currentRoute: i, listening: true, addRoute: u, removeRoute: w, clearRoutes: t.clearRoutes, hasRoute: b, getRoutes: S, resolve: A, options: e, push: I, replace: B, go: ce, back: () => ce(-1), forward: () => ce(1), beforeEach: a.add, beforeResolve: d.add, afterEach: g.add, onError: Ee.add, isReady: rt, install(s) {
    const m = this;
    s.component("RouterLink", cn), s.component("RouterView", fn), s.config.globalProperties.$router = m, Object.defineProperty(s.config.globalProperties, "$route", { enumerable: true, get: () => Q(i) }), V && !ae && i.value === H && (ae = true, I(o.location).catch((C) => {
    }));
    const p = {};
    for (const C in H) Object.defineProperty(p, C, { get: () => i.value[C], enumerable: true });
    s.provide(ne, m), s.provide(et, st(p)), s.provide(me, i);
    const v = s.unmount;
    ee.add(s), s.unmount = function() {
      ee.delete(s), ee.size < 1 && (f = H, U && U(), U = null, i.value = H, ae = false, J = false), v();
    };
  } };
  function z(s) {
    return s.reduce((m, p) => m.then(() => re(p)), Promise.resolve());
  }
  return Pe;
}
function hn(e, t) {
  const n = [], r = [], o = [], a = Math.max(t.matched.length, e.matched.length);
  for (let d = 0; d < a; d++) {
    const g = t.matched[d];
    g && (e.matched.find((f) => G(f, g)) ? r.push(g) : n.push(g));
    const i = e.matched[d];
    i && (t.matched.find((f) => G(f, i)) || o.push(i));
  }
  return [n, r, o];
}
function gn() {
  return q(ne);
}
export {
  pn as a,
  mn as c,
  gn as u
};
