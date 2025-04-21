import { g as tt, m as we, r as N, k as y, u as o, p as Se, q as gt, v as Be, e as es, w as ue, f as kv, h as Oc, s as Mt, l as an, b as Xe, n as $e, j as Ev, i as mn, x as sn, y as $v, z as Qe, A as ut, B as Br, d as K, c as D, o as k, a as x, C as X, D as Me, E as $, N as Rt, F as lt, G as Yt, H as oe, I as j, J as Ye, K as J, L as Je, M as at, O as he, P as Pe, Q as z, R as pt, T as en, t as yt, S as To, U as ul, V as Re, W as It, X as Ct, Y as Pc, Z as cl, _ as Tv, $ as Rc, a0 as ts, a1 as Nv, a2 as Dr, a3 as Iv, a4 as $t, a5 as On, a6 as it, a7 as mo, a8 as Mn, a9 as sl, aa as Dt, ab as Ra, ac as La, ad as tn, ae as Lc, af as Oe, ag as nt, ah as _v, ai as Mv, aj as Ys, ak as ns, al as Ov, am as Bc, an as Cl, ao as Pv, ap as qs, aq as ls, ar as Rv, as as kl, at as Lv, au as Bv, av as Dv } from "./@vue-CnBZ4jx_.js";
import { i as qt, g as xt, f as Wo, s as Vv, p as Hn, a as Dc, d as Pn, t as zl, b as Zt, c as Av, e as Ba, h as pn, u as Ns, j as Fv, k as Yi, l as Vc, m as zv, n as ta, o as Ac, q as xv, r as Hv } from "./lodash-es-C-xrcuFl.js";
import { i as Vr, c as Ar, w as os, s as Fc, a as An, b as dl, d as Fr, l as Zn, v as Kv, h as Wv, e as jv, f as El, g as kn, j as na, k as fl, m as zc, n as Uv, o as zr, p as $l, q as Tl, r as Yv, t as qv, z as Gv, u as xc, x as Xv, y as Zv, A as Jv, B as Hc, C as Qv, D as eh, E as qi, F as th, G as da, H as nh, I as lh, J as oh, K as ah, L as sh, M as rh, N as Kc, O as ih, P as uh } from "./@element-plus-Rv25Faa4.js";
import { E as Yl, y as ch } from "./@popperjs-DB1lLFnh.js";
import { T as Wc } from "./@ctrl-r5W6hzzQ.js";
import { d as Ke, l as jc, c as xr, a as dh, w as fh, b as ph, e as vh, i as hh, f as mh } from "./dayjs-dlSZ-o3N.js";
import { S as gh } from "./async-validator-CRx4dHSJ.js";
import { m as bh } from "./memoize-one-BdPwpGay.js";
import { Y as yh } from "./normalize-wheel-es-BQoi3Ox2.js";
import { a as Uc, c as Yc, o as qc, f as Ch, s as wh, b as Sh, d as kh } from "./@floating-ui-BCLhozDd.js";
const Eh = "2.9.8", Gi = Symbol("INSTALLED_KEY"), Gc = Symbol(), zo = "el", $h = "is-", Ll = (e, t, n, l, a) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), l && (s += `__${l}`), a && (s += `--${a}`), s;
}, Xc = Symbol("namespaceContextKey"), Hr = (e) => {
  const t = e || (tt() ? we(Xc, N(zo)) : N(zo));
  return y(() => o(t) || zo);
}, de = (e, t) => {
  const n = Hr(t);
  return { namespace: n, b: (p = "") => Ll(n.value, e, p, "", ""), e: (p) => p ? Ll(n.value, e, "", p, "") : "", m: (p) => p ? Ll(n.value, e, "", "", p) : "", be: (p, b) => p && b ? Ll(n.value, e, p, b, "") : "", em: (p, b) => p && b ? Ll(n.value, e, "", p, b) : "", bm: (p, b) => p && b ? Ll(n.value, e, p, "", b) : "", bem: (p, b, g) => p && b && g ? Ll(n.value, e, p, b, g) : "", is: (p, ...b) => {
    const g = b.length >= 1 ? b[0] : true;
    return p && g ? `${$h}${p}` : "";
  }, cssVar: (p) => {
    const b = {};
    for (const g in p) p[g] && (b[`--${n.value}-${g}`] = p[g]);
    return b;
  }, cssVarName: (p) => `--${n.value}-${p}`, cssVarBlock: (p) => {
    const b = {};
    for (const g in p) p[g] && (b[`--${n.value}-${e}-${g}`] = p[g]);
    return b;
  }, cssVarBlockName: (p) => `--${n.value}-${e}-${p}` };
}, vt = (e) => e === void 0, Tt = (e) => typeof e == "boolean", _e = (e) => typeof e == "number", _n = (e) => !e && e !== 0 || Se(e) && e.length === 0 || gt(e) && !Object.keys(e).length, En = (e) => typeof Element > "u" ? false : e instanceof Element, Wn = (e) => qt(e), Th = (e) => Be(e) ? !Number.isNaN(Number(e)) : false, as = (e) => e === window;
var Nh = Object.defineProperty, Ih = Object.defineProperties, _h = Object.getOwnPropertyDescriptors, Xi = Object.getOwnPropertySymbols, Mh = Object.prototype.hasOwnProperty, Oh = Object.prototype.propertyIsEnumerable, Zi = (e, t, n) => t in e ? Nh(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, Ph = (e, t) => {
  for (var n in t || (t = {})) Mh.call(t, n) && Zi(e, n, t[n]);
  if (Xi) for (var n of Xi(t)) Oh.call(t, n) && Zi(e, n, t[n]);
  return e;
}, Rh = (e, t) => Ih(e, _h(t));
function Gs(e, t) {
  var n;
  const l = Mt();
  return an(() => {
    l.value = e();
  }, Rh(Ph({}, t), { flush: (n = void 0) != null ? n : "sync" })), es(l);
}
var Ji;
const dt = typeof window < "u", Lh = (e) => typeof e < "u", Xs = (e) => typeof e == "function", Bh = (e) => typeof e == "string", go = () => {
}, Da = dt && ((Ji = window == null ? void 0 : window.navigator) == null ? void 0 : Ji.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Nl(e) {
  return typeof e == "function" ? e() : o(e);
}
function Zc(e, t) {
  function n(...l) {
    return new Promise((a, s) => {
      Promise.resolve(e(() => t.apply(this, l), { fn: t, thisArg: this, args: l })).then(a).catch(s);
    });
  }
  return n;
}
function Dh(e, t = {}) {
  let n, l, a = go;
  const s = (i) => {
    clearTimeout(i), a(), a = go;
  };
  return (i) => {
    const u = Nl(e), c = Nl(t.maxWait);
    return n && s(n), u <= 0 || c !== void 0 && c <= 0 ? (l && (s(l), l = null), Promise.resolve(i())) : new Promise((d, f) => {
      a = t.rejectOnCancel ? f : d, c && !l && (l = setTimeout(() => {
        n && s(n), l = null, d(i());
      }, c)), n = setTimeout(() => {
        l && s(l), l = null, d(i());
      }, u);
    });
  };
}
function Vh(e, t = true, n = true, l = false) {
  let a = 0, s, r = true, i = go, u;
  const c = () => {
    s && (clearTimeout(s), s = void 0, i(), i = go);
  };
  return (f) => {
    const m = Nl(e), h = Date.now() - a, v = () => u = f();
    return c(), m <= 0 ? (a = Date.now(), v()) : (h > m && (n || !r) ? (a = Date.now(), v()) : t && (u = new Promise((p, b) => {
      i = l ? b : p, s = setTimeout(() => {
        a = Date.now(), r = true, p(v()), c();
      }, Math.max(0, m - h));
    })), !n && !s && (s = setTimeout(() => r = true, m)), r = false, u);
  };
}
function Ah(e) {
  return e;
}
function Fh(e, t) {
  let n, l, a;
  const s = N(true), r = () => {
    s.value = true, a();
  };
  ue(e, r, { flush: "sync" });
  const i = Xs(t) ? t : t.get, u = Xs(t) ? void 0 : t.set, c = Ev((d, f) => (l = d, a = f, { get() {
    return s.value && (n = i(), s.value = false), l(), n;
  }, set(m) {
    u == null ? void 0 : u(m);
  } }));
  return Object.isExtensible(c) && (c.trigger = r), c;
}
function la(e) {
  return kv() ? (Oc(e), true) : false;
}
function zh(e, t = 200, n = {}) {
  return Zc(Dh(t, n), e);
}
function xh(e, t = 200, n = {}) {
  const l = N(e.value), a = zh(() => {
    l.value = e.value;
  }, t, n);
  return ue(e, () => a()), l;
}
function Jc(e, t = 200, n = false, l = true, a = false) {
  return Zc(Vh(t, n, l, a), e);
}
function Kr(e, t = true) {
  tt() ? Xe(e) : t ? e() : $e(e);
}
function Kl(e, t, n = {}) {
  const { immediate: l = true } = n, a = N(false);
  let s = null;
  function r() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    a.value = false, r();
  }
  function u(...c) {
    r(), a.value = true, s = setTimeout(() => {
      a.value = false, s = null, e(...c);
    }, Nl(t));
  }
  return l && (a.value = true, dt && u()), la(i), { isPending: es(a), start: u, stop: i };
}
function Sn(e) {
  var t;
  const n = Nl(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ml = dt ? window : void 0, Hh = dt ? window.document : void 0;
function Et(...e) {
  let t, n, l, a;
  if (Bh(e[0]) || Array.isArray(e[0]) ? ([n, l, a] = e, t = Ml) : [t, n, l, a] = e, !t) return go;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const s = [], r = () => {
    s.forEach((d) => d()), s.length = 0;
  }, i = (d, f, m, h) => (d.addEventListener(f, m, h), () => d.removeEventListener(f, m, h)), u = ue(() => [Sn(t), Nl(a)], ([d, f]) => {
    r(), d && s.push(...n.flatMap((m) => l.map((h) => i(d, m, h, f))));
  }, { immediate: true, flush: "post" }), c = () => {
    u(), r();
  };
  return la(c), c;
}
let Qi = false;
function Wr(e, t, n = {}) {
  const { window: l = Ml, ignore: a = [], capture: s = true, detectIframe: r = false } = n;
  if (!l) return;
  Da && !Qi && (Qi = true, Array.from(l.document.body.children).forEach((m) => m.addEventListener("click", go)));
  let i = true;
  const u = (m) => a.some((h) => {
    if (typeof h == "string") return Array.from(l.document.querySelectorAll(h)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = Sn(h);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), d = [Et(l, "click", (m) => {
    const h = Sn(e);
    if (!(!h || h === m.target || m.composedPath().includes(h))) {
      if (m.detail === 0 && (i = !u(m)), !i) {
        i = true;
        return;
      }
      t(m);
    }
  }, { passive: true, capture: s }), Et(l, "pointerdown", (m) => {
    const h = Sn(e);
    h && (i = !m.composedPath().includes(h) && !u(m));
  }, { passive: true }), r && Et(l, "blur", (m) => {
    var h;
    const v = Sn(e);
    ((h = l.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(v == null ? void 0 : v.contains(l.document.activeElement)) && t(m);
  })].filter(Boolean);
  return () => d.forEach((m) => m());
}
function Kh(e = {}) {
  var t;
  const { window: n = Ml } = e, l = (t = e.document) != null ? t : n == null ? void 0 : n.document, a = Fh(() => null, () => l == null ? void 0 : l.activeElement);
  return n && (Et(n, "blur", (s) => {
    s.relatedTarget === null && a.trigger();
  }, true), Et(n, "focus", a.trigger, true)), a;
}
function Qc(e, t = false) {
  const n = N(), l = () => n.value = !!e();
  return l(), Kr(l, t), n;
}
function Wh(e) {
  return JSON.parse(JSON.stringify(e));
}
const eu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tu = "__vueuse_ssr_handlers__";
eu[tu] = eu[tu] || {};
function jh(e, t, { window: n = Ml, initialValue: l = "" } = {}) {
  const a = N(l), s = y(() => {
    var r;
    return Sn(t) || ((r = n == null ? void 0 : n.document) == null ? void 0 : r.documentElement);
  });
  return ue([s, () => Nl(e)], ([r, i]) => {
    var u;
    if (r && n) {
      const c = (u = n.getComputedStyle(r).getPropertyValue(i)) == null ? void 0 : u.trim();
      a.value = c || l;
    }
  }, { immediate: true }), ue(a, (r) => {
    var i;
    (i = s.value) != null && i.style && s.value.style.setProperty(Nl(e), r);
  }), a;
}
function Uh({ document: e = Hh } = {}) {
  if (!e) return N("visible");
  const t = N(e.visibilityState);
  return Et(e, "visibilitychange", () => {
    t.value = e.visibilityState;
  }), t;
}
var nu = Object.getOwnPropertySymbols, Yh = Object.prototype.hasOwnProperty, qh = Object.prototype.propertyIsEnumerable, Gh = (e, t) => {
  var n = {};
  for (var l in e) Yh.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && nu) for (var l of nu(e)) t.indexOf(l) < 0 && qh.call(e, l) && (n[l] = e[l]);
  return n;
};
function Lt(e, t, n = {}) {
  const l = n, { window: a = Ml } = l, s = Gh(l, ["window"]);
  let r;
  const i = Qc(() => a && "ResizeObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, c = ue(() => Sn(e), (f) => {
    u(), i.value && a && f && (r = new ResizeObserver(t), r.observe(f, s));
  }, { immediate: true, flush: "post" }), d = () => {
    u(), c();
  };
  return la(d), { isSupported: i, stop: d };
}
function lu(e, t = {}) {
  const { reset: n = true, windowResize: l = true, windowScroll: a = true, immediate: s = true } = t, r = N(0), i = N(0), u = N(0), c = N(0), d = N(0), f = N(0), m = N(0), h = N(0);
  function v() {
    const p = Sn(e);
    if (!p) {
      n && (r.value = 0, i.value = 0, u.value = 0, c.value = 0, d.value = 0, f.value = 0, m.value = 0, h.value = 0);
      return;
    }
    const b = p.getBoundingClientRect();
    r.value = b.height, i.value = b.bottom, u.value = b.left, c.value = b.right, d.value = b.top, f.value = b.width, m.value = b.x, h.value = b.y;
  }
  return Lt(e, v), ue(() => Sn(e), (p) => !p && v()), a && Et("scroll", v, { capture: true, passive: true }), l && Et("resize", v, { passive: true }), Kr(() => {
    s && v();
  }), { height: r, bottom: i, left: u, right: c, top: d, width: f, x: m, y: h, update: v };
}
var ou = Object.getOwnPropertySymbols, Xh = Object.prototype.hasOwnProperty, Zh = Object.prototype.propertyIsEnumerable, Jh = (e, t) => {
  var n = {};
  for (var l in e) Xh.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && ou) for (var l of ou(e)) t.indexOf(l) < 0 && Zh.call(e, l) && (n[l] = e[l]);
  return n;
};
function ed(e, t, n = {}) {
  const l = n, { window: a = Ml } = l, s = Jh(l, ["window"]);
  let r;
  const i = Qc(() => a && "MutationObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, c = ue(() => Sn(e), (f) => {
    u(), i.value && a && f && (r = new MutationObserver(t), r.observe(f, s));
  }, { immediate: true }), d = () => {
    u(), c();
  };
  return la(d), { isSupported: i, stop: d };
}
var au;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(au || (au = {}));
var Qh = Object.defineProperty, su = Object.getOwnPropertySymbols, em = Object.prototype.hasOwnProperty, tm = Object.prototype.propertyIsEnumerable, ru = (e, t, n) => t in e ? Qh(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, nm = (e, t) => {
  for (var n in t || (t = {})) em.call(t, n) && ru(e, n, t[n]);
  if (su) for (var n of su(t)) tm.call(t, n) && ru(e, n, t[n]);
  return e;
};
const lm = { easeInSine: [0.12, 0, 0.39, 0], easeOutSine: [0.61, 1, 0.88, 1], easeInOutSine: [0.37, 0, 0.63, 1], easeInQuad: [0.11, 0, 0.5, 0], easeOutQuad: [0.5, 1, 0.89, 1], easeInOutQuad: [0.45, 0, 0.55, 1], easeInCubic: [0.32, 0, 0.67, 0], easeOutCubic: [0.33, 1, 0.68, 1], easeInOutCubic: [0.65, 0, 0.35, 1], easeInQuart: [0.5, 0, 0.75, 0], easeOutQuart: [0.25, 1, 0.5, 1], easeInOutQuart: [0.76, 0, 0.24, 1], easeInQuint: [0.64, 0, 0.78, 0], easeOutQuint: [0.22, 1, 0.36, 1], easeInOutQuint: [0.83, 0, 0.17, 1], easeInExpo: [0.7, 0, 0.84, 0], easeOutExpo: [0.16, 1, 0.3, 1], easeInOutExpo: [0.87, 0, 0.13, 1], easeInCirc: [0.55, 0, 1, 0.45], easeOutCirc: [0, 0.55, 0.45, 1], easeInOutCirc: [0.85, 0, 0.15, 1], easeInBack: [0.36, 0, 0.66, -0.56], easeOutBack: [0.34, 1.56, 0.64, 1], easeInOutBack: [0.68, -0.6, 0.32, 1.6] };
nm({ linear: Ah }, lm);
function td(e, t, n, l = {}) {
  var a, s, r;
  const { clone: i = false, passive: u = false, eventName: c, deep: d = false, defaultValue: f } = l, m = tt(), h = n || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let v = c;
  t || (t = "modelValue"), v = c || v || `update:${t.toString()}`;
  const p = (g) => i ? Xs(i) ? i(g) : Wh(g) : g, b = () => Lh(e[t]) ? p(e[t]) : f;
  if (u) {
    const g = b(), T = N(g);
    return ue(() => e[t], (w) => T.value = p(w)), ue(T, (w) => {
      (w !== e[t] || d) && h(v, w);
    }, { deep: d }), T;
  } else return y({ get() {
    return b();
  }, set(g) {
    h(v, g);
  } });
}
function om({ window: e = Ml } = {}) {
  if (!e) return N(false);
  const t = N(e.document.hasFocus());
  return Et(e, "blur", () => {
    t.value = false;
  }), Et(e, "focus", () => {
    t.value = true;
  }), t;
}
function am(e = {}) {
  const { window: t = Ml, initialWidth: n = 1 / 0, initialHeight: l = 1 / 0, listenOrientation: a = true, includeScrollbar: s = true } = e, r = N(n), i = N(l), u = () => {
    t && (s ? (r.value = t.innerWidth, i.value = t.innerHeight) : (r.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  return u(), Kr(u), Et("resize", u, { passive: true }), a && Et("orientationchange", u, { passive: true }), { width: r, height: i };
}
class sm extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Kt(e, t) {
  throw new sm(`[${e}] ${t}`);
}
const iu = { current: 0 }, uu = N(0), nd = 2e3, cu = Symbol("elZIndexContextKey"), ld = Symbol("zIndexContextKey"), No = (e) => {
  const t = tt() ? we(cu, iu) : iu, n = e || (tt() ? we(ld, void 0) : void 0), l = y(() => {
    const r = o(n);
    return _e(r) ? r : nd;
  }), a = y(() => l.value + uu.value), s = () => (t.current++, uu.value = t.current, a.value);
  return !dt && we(cu), { initialZIndex: l, currentZIndex: a, nextZIndex: s };
};
var rm = { name: "en", el: { breadcrumb: { label: "Breadcrumb" }, colorpicker: { confirm: "OK", clear: "Clear", defaultLabel: "color picker", description: "current color is {color}. press enter to select a new color.", alphaLabel: "pick alpha value" }, datepicker: { now: "Now", today: "Today", cancel: "Cancel", clear: "Clear", confirm: "OK", dateTablePrompt: "Use the arrow keys and enter to select the day of the month", monthTablePrompt: "Use the arrow keys and enter to select the month", yearTablePrompt: "Use the arrow keys and enter to select the year", selectedDate: "Selected date", selectDate: "Select date", selectTime: "Select time", startDate: "Start Date", startTime: "Start Time", endDate: "End Date", endTime: "End Time", prevYear: "Previous Year", nextYear: "Next Year", prevMonth: "Previous Month", nextMonth: "Next Month", year: "", month1: "January", month2: "February", month3: "March", month4: "April", month5: "May", month6: "June", month7: "July", month8: "August", month9: "September", month10: "October", month11: "November", month12: "December", week: "week", weeks: { sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" }, weeksFull: { sun: "Sunday", mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday" }, months: { jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun", jul: "Jul", aug: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dec" } }, inputNumber: { decrease: "decrease number", increase: "increase number" }, select: { loading: "Loading", noMatch: "No matching data", noData: "No data", placeholder: "Select" }, mention: { loading: "Loading" }, dropdown: { toggleDropdown: "Toggle Dropdown" }, cascader: { noMatch: "No matching data", loading: "Loading", placeholder: "Select", noData: "No data" }, pagination: { goto: "Go to", pagesize: "/page", total: "Total {total}", pageClassifier: "", page: "Page", prev: "Go to previous page", next: "Go to next page", currentPage: "page {pager}", prevPages: "Previous {pager} pages", nextPages: "Next {pager} pages", deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details" }, dialog: { close: "Close this dialog" }, drawer: { close: "Close this dialog" }, messagebox: { title: "Message", confirm: "OK", cancel: "Cancel", error: "Illegal input", close: "Close this dialog" }, upload: { deleteTip: "press delete to remove", delete: "Delete", preview: "Preview", continue: "Continue" }, slider: { defaultLabel: "slider between {min} and {max}", defaultRangeStartLabel: "pick start value", defaultRangeEndLabel: "pick end value" }, table: { emptyText: "No Data", confirmFilter: "Confirm", resetFilter: "Reset", clearFilter: "All", sumText: "Sum" }, tour: { next: "Next", previous: "Previous", finish: "Finish" }, tree: { emptyText: "No Data" }, transfer: { noMatch: "No matching data", noData: "No data", titles: ["List 1", "List 2"], filterPlaceholder: "Enter keyword", noCheckedFormat: "{total} items", hasCheckedFormat: "{checked}/{total} checked" }, image: { error: "FAILED" }, pageHeader: { title: "Back" }, popconfirm: { confirmButtonText: "Yes", cancelButtonText: "No" }, carousel: { leftArrow: "Carousel arrow left", rightArrow: "Carousel arrow right", indicator: "Carousel switch to index {index}" } } };
const im = (e) => (t, n) => um(t, n, o(e)), um = (e, t, n) => xt(n, e, e).replace(/\{(\w+)\}/g, (l, a) => {
  var s;
  return `${(s = t == null ? void 0 : t[a]) != null ? s : `{${a}}`}`;
}), cm = (e) => {
  const t = y(() => o(e).name), n = mn(e) ? e : N(e);
  return { lang: t, locale: n, t: im(e) };
}, od = Symbol("localeContextKey"), ft = (e) => {
  const t = e || we(od, N());
  return cm(y(() => t.value || rm));
}, ad = "__epPropKey", Y = (e) => e, dm = (e) => gt(e) && !!e[ad], jn = (e, t) => {
  if (!gt(e) || dm(e)) return e;
  const { values: n, required: l, default: a, type: s, validator: r } = e, u = { type: s, required: !!l, validator: n || r ? (c) => {
    let d = false, f = [];
    if (n && (f = Array.from(n), sn(e, "default") && f.push(a), d || (d = f.includes(c))), r && (d || (d = r(c))), !d && f.length > 0) {
      const m = [...new Set(f)].map((h) => JSON.stringify(h)).join(", ");
      $v(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
    }
    return d;
  } : void 0, [ad]: true };
  return sn(e, "default") && (u.default = a), u;
}, pe = (e) => Wo(Object.entries(e).map(([t, n]) => [t, jn(n, t)])), Qn = ["", "default", "small", "large"], Wt = jn({ type: String, values: Qn, required: false }), sd = Symbol("size"), rd = () => {
  const e = we(sd, {});
  return y(() => o(e.size) || "");
}, id = Symbol("emptyValuesContextKey"), fm = ["", void 0, null], pm = void 0, Io = pe({ emptyValues: Array, valueOnClear: { type: [String, Number, Boolean, Function], default: void 0, validator: (e) => Qe(e) ? !e() : !e } }), ss = (e, t) => {
  const n = tt() ? we(id, N({})) : N({}), l = y(() => e.emptyValues || n.value.emptyValues || fm), a = y(() => Qe(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Qe(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : t !== void 0 ? t : pm), s = (r) => l.value.includes(r);
  return l.value.includes(a.value), { emptyValues: l, valueOnClear: a, isEmptyValue: s };
}, bo = (e) => Object.keys(e), ud = (e) => Object.entries(e), xo = (e, t, n) => ({ get value() {
  return xt(e, t, n);
}, set value(l) {
  Vv(e, t, l);
} }), Va = N();
function rs(e, t = void 0) {
  const n = tt() ? we(Gc, Va) : Va;
  return e ? y(() => {
    var l, a;
    return (a = (l = n.value) == null ? void 0 : l[e]) != null ? a : t;
  }) : n;
}
function is(e, t) {
  const n = rs(), l = de(e, y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || zo;
  })), a = ft(y(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), s = No(y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || nd;
  })), r = y(() => {
    var i;
    return o(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return jr(y(() => o(n) || {})), { ns: l, locale: a, zIndex: s, size: r };
}
const jr = (e, t, n = false) => {
  var l;
  const a = !!tt(), s = a ? rs() : void 0, r = (l = t == null ? void 0 : t.provide) != null ? l : a ? ut : void 0;
  if (!r) return;
  const i = y(() => {
    const u = o(e);
    return (s == null ? void 0 : s.value) ? vm(s.value, u) : u;
  });
  return r(Gc, i), r(od, y(() => i.value.locale)), r(Xc, y(() => i.value.namespace)), r(ld, y(() => i.value.zIndex)), r(sd, { size: y(() => i.value.size || "") }), r(id, y(() => ({ emptyValues: i.value.emptyValues, valueOnClear: i.value.valueOnClear }))), (n || !Va.value) && (Va.value = i.value), i;
}, vm = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...bo(e), ...bo(t)])], l = {};
  for (const a of n) l[a] = t[a] !== void 0 ? t[a] : e[a];
  return l;
}, hm = (e = []) => ({ version: Eh, install: (n, l) => {
  n[Gi] || (n[Gi] = true, e.forEach((a) => n.use(a)), l && jr(l, n, true));
} }), Ae = "update:modelValue", et = "change", Jt = "input", mm = pe({ zIndex: { type: Y([Number, String]), default: 100 }, target: { type: String, default: "" }, offset: { type: Number, default: 0 }, position: { type: String, values: ["top", "bottom"], default: "top" } }), gm = { scroll: ({ scrollTop: e, fixed: t }) => _e(e) && Tt(t), [et]: (e) => Tt(e) };
var ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t) n[l] = a;
  return n;
};
function bm(e, t, n, l) {
  const a = n - t;
  return e /= l / 2, e < 1 ? a / 2 * e * e * e + t : a / 2 * ((e -= 2) * e * e + 2) + t;
}
const Il = (e) => dt ? window.requestAnimationFrame(e) : setTimeout(e, 16), Wl = (e) => dt ? window.cancelAnimationFrame(e) : clearTimeout(e), cd = (e = "") => e.split(" ").filter((t) => !!t.trim()), Nn = (e, t) => {
  if (!e || !t) return false;
  if (t.includes(" ")) throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Dn = (e, t) => {
  !e || !t.trim() || e.classList.add(...cd(t));
}, gn = (e, t) => {
  !e || !t.trim() || e.classList.remove(...cd(t));
}, ll = (e, t) => {
  var n;
  if (!dt || !e || !t) return "";
  let l = Br(t);
  l === "float" && (l = "cssFloat");
  try {
    const a = e.style[l];
    if (a) return a;
    const s = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return s ? s[l] : "";
  } catch {
    return e.style[l];
  }
}, dd = (e, t, n) => {
  if (!(!e || !t)) if (gt(t)) ud(t).forEach(([l, a]) => dd(e, l, a));
  else {
    const l = Br(t);
    e.style[l] = n;
  }
};
function At(e, t = "px") {
  if (!e) return "";
  if (_e(e) || Th(e)) return `${e}${t}`;
  if (Be(e)) return e;
}
const ym = (e, t) => {
  if (!dt) return false;
  const n = { undefined: "overflow", true: "overflow-y", false: "overflow-x" }[String(t)], l = ll(e, n);
  return ["scroll", "auto", "overlay"].some((a) => l.includes(a));
}, Ur = (e, t) => {
  if (!dt) return;
  let n = e;
  for (; n; ) {
    if ([window, document, document.documentElement].includes(n)) return window;
    if (ym(n, t)) return n;
    n = n.parentNode;
  }
  return n;
};
let fa;
const fd = (e) => {
  var t;
  if (!dt) return 0;
  if (fa !== void 0) return fa;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const l = n.offsetWidth;
  n.style.overflow = "scroll";
  const a = document.createElement("div");
  a.style.width = "100%", n.appendChild(a);
  const s = a.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), fa = l - s, fa;
};
function Yr(e, t) {
  if (!dt) return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let l = t.offsetParent;
  for (; l !== null && e !== l && e.contains(l); ) n.push(l), l = l.offsetParent;
  const a = t.offsetTop + n.reduce((u, c) => u + c.offsetTop, 0), s = a + t.offsetHeight, r = e.scrollTop, i = r + e.clientHeight;
  a < r ? e.scrollTop = a : s > i && (e.scrollTop = s - e.clientHeight);
}
function Cm(e, t, n, l, a) {
  const s = Date.now();
  let r;
  const i = () => {
    const c = Date.now() - s, d = bm(c > l ? l : c, t, n, l);
    as(e) ? e.scrollTo(window.pageXOffset, d) : e.scrollTop = d, c < l ? r = Il(i) : Qe(a) && a();
  };
  return i(), () => {
    r && Wl(r);
  };
}
const du = (e, t) => as(t) ? e.ownerDocument.documentElement : t, fu = (e) => as(e) ? window.scrollY : e.scrollTop, pd = "ElAffix", wm = K({ name: pd }), Sm = K({ ...wm, props: mm, emits: gm, setup(e, { expose: t, emit: n }) {
  const l = e, a = de("affix"), s = Mt(), r = Mt(), i = Mt(), { height: u } = am(), { height: c, width: d, top: f, bottom: m, update: h } = lu(r, { windowScroll: false }), v = lu(s), p = N(false), b = N(0), g = N(0), T = y(() => ({ height: p.value ? `${c.value}px` : "", width: p.value ? `${d.value}px` : "" })), w = y(() => {
    if (!p.value) return {};
    const E = l.offset ? At(l.offset) : 0;
    return { height: `${c.value}px`, width: `${d.value}px`, top: l.position === "top" ? E : "", bottom: l.position === "bottom" ? E : "", transform: g.value ? `translateY(${g.value}px)` : "", zIndex: l.zIndex };
  }), C = () => {
    if (!i.value) return;
    b.value = i.value instanceof Window ? document.documentElement.scrollTop : i.value.scrollTop || 0;
    const { position: E, target: M, offset: O } = l, _ = O + c.value;
    if (E === "top") if (M) {
      const I = v.bottom.value - _;
      p.value = O > f.value && v.bottom.value > 0, g.value = I < 0 ? I : 0;
    } else p.value = O > f.value;
    else if (M) {
      const I = u.value - v.top.value - _;
      p.value = u.value - O < m.value && u.value > v.top.value, g.value = I < 0 ? -I : 0;
    } else p.value = u.value - O < m.value;
  }, S = async () => {
    h(), await $e(), n("scroll", { scrollTop: b.value, fixed: p.value });
  };
  return ue(p, (E) => n(et, E)), Xe(() => {
    var E;
    l.target ? (s.value = (E = document.querySelector(l.target)) != null ? E : void 0, s.value || Kt(pd, `Target does not exist: ${l.target}`)) : s.value = document.documentElement, i.value = Ur(r.value, true), h();
  }), Et(i, "scroll", S), an(C), t({ update: C, updateRoot: h }), (E, M) => (k(), D("div", { ref_key: "root", ref: r, class: $(o(a).b()), style: Me(o(T)) }, [x("div", { class: $({ [o(a).m("fixed")]: p.value }), style: Me(o(w)) }, [X(E.$slots, "default")], 6)], 6));
} });
var km = ve(Sm, [["__file", "affix.vue"]]);
const We = (e, t) => {
  if (e.install = (n) => {
    for (const l of [e, ...Object.values(t ?? {})]) n.component(l.name, l);
  }, t) for (const [n, l] of Object.entries(t)) e[n] = l;
  return e;
}, vd = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Em = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), Vt = (e) => (e.install = Rt, e), $m = We(km), Tm = pe({ size: { type: Y([Number, String]) }, color: { type: String } }), Nm = K({ name: "ElIcon", inheritAttrs: false }), Im = K({ ...Nm, props: Tm, setup(e) {
  const t = e, n = de("icon"), l = y(() => {
    const { size: a, color: s } = t;
    return !a && !s ? {} : { fontSize: vt(a) ? void 0 : At(a), "--color": s };
  });
  return (a, s) => (k(), D("i", lt({ class: o(n).b(), style: o(l) }, a.$attrs), [X(a.$slots, "default")], 16));
} });
var _m = ve(Im, [["__file", "icon.vue"]]);
const Ee = We(_m), St = Y([String, Object, Function]), hd = { Close: An }, qr = { Close: An, SuccessFilled: Fc, InfoFilled: Vr, WarningFilled: os, CircleCloseFilled: Ar }, _l = { success: Fc, warning: os, error: Ar, info: Vr }, us = { validating: Zn, success: Fr, error: dl }, Mm = ["light", "dark"], Om = pe({ title: { type: String, default: "" }, description: { type: String, default: "" }, type: { type: String, values: bo(_l), default: "info" }, closable: { type: Boolean, default: true }, closeText: { type: String, default: "" }, showIcon: Boolean, center: Boolean, effect: { type: String, values: Mm, default: "light" } }), Pm = { close: (e) => e instanceof MouseEvent }, Rm = K({ name: "ElAlert" }), Lm = K({ ...Rm, props: Om, emits: Pm, setup(e, { emit: t }) {
  const n = e, { Close: l } = qr, a = Yt(), s = de("alert"), r = N(true), i = y(() => _l[n.type]), u = y(() => !!(n.description || a.default)), c = (d) => {
    r.value = false, t("close", d);
  };
  return (d, f) => (k(), oe(en, { name: o(s).b("fade"), persisted: "" }, { default: j(() => [Ye(x("div", { class: $([o(s).b(), o(s).m(d.type), o(s).is("center", d.center), o(s).is(d.effect)]), role: "alert" }, [d.showIcon && (d.$slots.icon || o(i)) ? (k(), oe(o(Ee), { key: 0, class: $([o(s).e("icon"), { [o(s).is("big")]: o(u) }]) }, { default: j(() => [X(d.$slots, "icon", {}, () => [(k(), oe(Je(o(i))))])]), _: 3 }, 8, ["class"])) : J("v-if", true), x("div", { class: $(o(s).e("content")) }, [d.title || d.$slots.title ? (k(), D("span", { key: 0, class: $([o(s).e("title"), { "with-description": o(u) }]) }, [X(d.$slots, "title", {}, () => [at(he(d.title), 1)])], 2)) : J("v-if", true), o(u) ? (k(), D("p", { key: 1, class: $(o(s).e("description")) }, [X(d.$slots, "default", {}, () => [at(he(d.description), 1)])], 2)) : J("v-if", true), d.closable ? (k(), D(Pe, { key: 2 }, [d.closeText ? (k(), D("div", { key: 0, class: $([o(s).e("close-btn"), o(s).is("customed")]), onClick: c }, he(d.closeText), 3)) : (k(), oe(o(Ee), { key: 1, class: $(o(s).e("close-btn")), onClick: c }, { default: j(() => [z(o(l))]), _: 1 }, 8, ["class"]))], 64)) : J("v-if", true)], 2)], 2), [[pt, r.value]])]), _: 3 }, 8, ["name"]));
} });
var Bm = ve(Lm, [["__file", "alert.vue"]]);
const Dm = We(Bm), cs = () => dt && /firefox/i.test(window.navigator.userAgent);
let $n;
const Vm = { height: "0", visibility: "hidden", overflow: cs() ? "" : "hidden", position: "absolute", "z-index": "-1000", top: "0", right: "0" }, Am = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];
function Fm(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), l = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), a = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Am.map((r) => [r, t.getPropertyValue(r)]), paddingSize: l, borderSize: a, boxSizing: n };
}
function pu(e, t = 1, n) {
  var l;
  $n || ($n = document.createElement("textarea"), document.body.appendChild($n));
  const { paddingSize: a, borderSize: s, boxSizing: r, contextStyle: i } = Fm(e);
  i.forEach(([f, m]) => $n == null ? void 0 : $n.style.setProperty(f, m)), Object.entries(Vm).forEach(([f, m]) => $n == null ? void 0 : $n.style.setProperty(f, m, "important")), $n.value = e.value || e.placeholder || "";
  let u = $n.scrollHeight;
  const c = {};
  r === "border-box" ? u = u + s : r === "content-box" && (u = u - a), $n.value = "";
  const d = $n.scrollHeight - a;
  if (_e(t)) {
    let f = d * t;
    r === "border-box" && (f = f + a + s), u = Math.max(f, u), c.minHeight = `${f}px`;
  }
  if (_e(n)) {
    let f = d * n;
    r === "border-box" && (f = f + a + s), u = Math.min(f, u);
  }
  return c.height = `${u}px`, (l = $n.parentNode) == null || l.removeChild($n), $n = void 0, c;
}
const Bt = (e) => e, zm = pe({ ariaLabel: String, ariaOrientation: { type: String, values: ["horizontal", "vertical", "undefined"] }, ariaControls: String }), ln = (e) => Hn(zm, e), Gr = pe({ id: { type: String, default: void 0 }, size: Wt, disabled: Boolean, modelValue: { type: Y([String, Number, Object]), default: "" }, maxlength: { type: [String, Number] }, minlength: { type: [String, Number] }, type: { type: String, default: "text" }, resize: { type: String, values: ["none", "both", "horizontal", "vertical"] }, autosize: { type: Y([Boolean, Object]), default: false }, autocomplete: { type: String, default: "off" }, formatter: { type: Function }, parser: { type: Function }, placeholder: { type: String }, form: { type: String }, readonly: Boolean, clearable: Boolean, showPassword: Boolean, showWordLimit: Boolean, suffixIcon: { type: St }, prefixIcon: { type: St }, containerRole: { type: String, default: void 0 }, tabindex: { type: [String, Number], default: 0 }, validateEvent: { type: Boolean, default: true }, inputStyle: { type: Y([Object, Array, String]), default: () => Bt({}) }, autofocus: Boolean, rows: { type: Number, default: 2 }, ...ln(["ariaLabel"]) }), xm = { [Ae]: (e) => Be(e), input: (e) => Be(e), change: (e) => Be(e), focus: (e) => e instanceof FocusEvent, blur: (e) => e instanceof FocusEvent, clear: () => true, mouseleave: (e) => e instanceof MouseEvent, mouseenter: (e) => e instanceof MouseEvent, keydown: (e) => e instanceof Event, compositionstart: (e) => e instanceof CompositionEvent, compositionupdate: (e) => e instanceof CompositionEvent, compositionend: (e) => e instanceof CompositionEvent }, Hm = ["class", "style"], Km = /^on[A-Z]/, oa = (e = {}) => {
  const { excludeListeners: t = false, excludeKeys: n } = e, l = y(() => ((n == null ? void 0 : n.value) || []).concat(Hm)), a = tt();
  return a ? y(() => {
    var s;
    return Wo(Object.entries((s = a.proxy) == null ? void 0 : s.$attrs).filter(([r]) => !l.value.includes(r) && !(t && Km.test(r))));
  }) : y(() => ({}));
}, ql = Symbol("formContextKey"), Jn = Symbol("formItemContextKey"), vu = { prefix: Math.floor(Math.random() * 1e4), current: 0 }, Wm = Symbol("elIdInjection"), Xr = () => tt() ? we(Wm, vu) : vu, nn = (e) => {
  const t = Xr(), n = Hr();
  return Gs(() => o(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, un = () => {
  const e = we(ql, void 0), t = we(Jn, void 0);
  return { form: e, formItem: t };
}, zn = (e, { formItemContext: t, disableIdGeneration: n, disableIdManagement: l }) => {
  n || (n = N(false)), l || (l = N(false));
  const a = N();
  let s;
  const r = y(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return Xe(() => {
    s = ue([yt(e, "id"), n], ([i, u]) => {
      const c = i ?? (u ? void 0 : nn().value);
      c !== a.value && ((t == null ? void 0 : t.removeInputId) && (a.value && t.removeInputId(a.value), !(l == null ? void 0 : l.value) && !u && c && t.addInputId(c)), a.value = c);
    }, { immediate: true });
  }), To(() => {
    s && s(), (t == null ? void 0 : t.removeInputId) && a.value && t.removeInputId(a.value);
  }), { isLabeledByFormItem: r, inputId: a };
}, Zr = (e) => {
  const t = tt();
  return y(() => {
    var n, l;
    return (l = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : l[e];
  });
}, Ht = (e, t = {}) => {
  const n = N(void 0), l = t.prop ? n : Zr("size"), a = t.global ? n : rd(), s = t.form ? { size: void 0 } : we(ql, void 0), r = t.formItem ? { size: void 0 } : we(Jn, void 0);
  return y(() => l.value || o(e) || (r == null ? void 0 : r.size) || (s == null ? void 0 : s.size) || a.value || "");
}, cn = (e) => {
  const t = Zr("disabled"), n = we(ql, void 0);
  return y(() => t.value || o(e) || (n == null ? void 0 : n.disabled) || false);
};
function Ol(e, { beforeFocus: t, afterFocus: n, beforeBlur: l, afterBlur: a } = {}) {
  const s = tt(), { emit: r } = s, i = Mt(), u = Zr("disabled"), c = N(false), d = (h) => {
    Qe(t) && t(h) || c.value || (c.value = true, r("focus", h), n == null ? void 0 : n());
  }, f = (h) => {
    var v;
    Qe(l) && l(h) || h.relatedTarget && ((v = i.value) != null && v.contains(h.relatedTarget)) || (c.value = false, r("blur", h), a == null ? void 0 : a());
  }, m = () => {
    var h, v;
    (h = i.value) != null && h.contains(document.activeElement) && i.value !== document.activeElement || u.value || (v = e.value) == null || v.focus();
  };
  return ue([i, u], ([h, v]) => {
    h && (v ? h.removeAttribute("tabindex") : h.setAttribute("tabindex", "-1"));
  }), Et(i, "focus", d, true), Et(i, "blur", f, true), Et(i, "click", m, true), { isFocused: c, wrapperRef: i, handleFocus: d, handleBlur: f };
}
const jm = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function aa({ afterComposition: e, emit: t }) {
  const n = N(false), l = (i) => {
    t == null ? void 0 : t("compositionstart", i), n.value = true;
  }, a = (i) => {
    var u;
    t == null ? void 0 : t("compositionupdate", i);
    const c = (u = i.target) == null ? void 0 : u.value, d = c[c.length - 1] || "";
    n.value = !jm(d);
  }, s = (i) => {
    t == null ? void 0 : t("compositionend", i), n.value && (n.value = false, $e(() => e(i)));
  };
  return { isComposing: n, handleComposition: (i) => {
    i.type === "compositionend" ? s(i) : a(i);
  }, handleCompositionStart: l, handleCompositionUpdate: a, handleCompositionEnd: s };
}
function Um(e) {
  let t;
  function n() {
    if (e.value == null) return;
    const { selectionStart: a, selectionEnd: s, value: r } = e.value;
    if (a == null || s == null) return;
    const i = r.slice(0, Math.max(0, a)), u = r.slice(Math.max(0, s));
    t = { selectionStart: a, selectionEnd: s, value: r, beforeTxt: i, afterTxt: u };
  }
  function l() {
    if (e.value == null || t == null) return;
    const { value: a } = e.value, { beforeTxt: s, afterTxt: r, selectionStart: i } = t;
    if (s == null || r == null || i == null) return;
    let u = a.length;
    if (a.endsWith(r)) u = a.length - r.length;
    else if (a.startsWith(s)) u = s.length;
    else {
      const c = s[i - 1], d = a.indexOf(c, i - 1);
      d !== -1 && (u = d + 1);
    }
    e.value.setSelectionRange(u, u);
  }
  return [n, l];
}
const Ym = "ElInput", qm = K({ name: Ym, inheritAttrs: false }), Gm = K({ ...qm, props: Gr, emits: xm, setup(e, { expose: t, emit: n }) {
  const l = e, a = ul(), s = oa(), r = Yt(), i = y(() => [l.type === "textarea" ? p.b() : v.b(), v.m(m.value), v.is("disabled", h.value), v.is("exceed", ne.value), { [v.b("group")]: r.prepend || r.append, [v.m("prefix")]: r.prefix || l.prefixIcon, [v.m("suffix")]: r.suffix || l.suffixIcon || l.clearable || l.showPassword, [v.bm("suffix", "password-clear")]: V.value && B.value, [v.b("hidden")]: l.type === "hidden" }, a.class]), u = y(() => [v.e("wrapper"), v.is("focus", O.value)]), { form: c, formItem: d } = un(), { inputId: f } = zn(l, { formItemContext: d }), m = Ht(), h = cn(), v = de("input"), p = de("textarea"), b = Mt(), g = Mt(), T = N(false), w = N(false), C = N(), S = Mt(l.inputStyle), E = y(() => b.value || g.value), { wrapperRef: M, isFocused: O, handleFocus: _, handleBlur: I } = Ol(E, { beforeFocus() {
    return h.value;
  }, afterBlur() {
    var Ce;
    l.validateEvent && ((Ce = d == null ? void 0 : d.validate) == null || Ce.call(d, "blur").catch((Ue) => void 0));
  } }), R = y(() => {
    var Ce;
    return (Ce = c == null ? void 0 : c.statusIcon) != null ? Ce : false;
  }), P = y(() => (d == null ? void 0 : d.validateState) || ""), W = y(() => P.value && us[P.value]), te = y(() => w.value ? Kv : Wv), A = y(() => [a.style]), L = y(() => [l.inputStyle, S.value, { resize: l.resize }]), F = y(() => qt(l.modelValue) ? "" : String(l.modelValue)), V = y(() => l.clearable && !h.value && !l.readonly && !!F.value && (O.value || T.value)), B = y(() => l.showPassword && !h.value && !!F.value && (!!F.value || O.value)), G = y(() => l.showWordLimit && !!l.maxlength && (l.type === "text" || l.type === "textarea") && !h.value && !l.readonly && !l.showPassword), U = y(() => F.value.length), ne = y(() => !!G.value && U.value > Number(l.maxlength)), Z = y(() => !!r.suffix || !!l.suffixIcon || V.value || l.showPassword || G.value || !!P.value && R.value), [ee, re] = Um(b);
  Lt(g, (Ce) => {
    if (ie(), !G.value || l.resize !== "both") return;
    const Ue = Ce[0], { width: ht } = Ue.contentRect;
    C.value = { right: `calc(100% - ${ht + 15 + 6}px)` };
  });
  const le = () => {
    const { type: Ce, autosize: Ue } = l;
    if (!(!dt || Ce !== "textarea" || !g.value)) if (Ue) {
      const ht = gt(Ue) ? Ue.minRows : void 0, Pt = gt(Ue) ? Ue.maxRows : void 0, Nt = pu(g.value, ht, Pt);
      S.value = { overflowY: "hidden", ...Nt }, $e(() => {
        g.value.offsetHeight, S.value = Nt;
      });
    } else S.value = { minHeight: pu(g.value).minHeight };
  }, ie = /* @__PURE__ */ ((Ce) => {
    let Ue = false;
    return () => {
      var ht;
      if (Ue || !l.autosize) return;
      ((ht = g.value) == null ? void 0 : ht.offsetParent) === null || (Ce(), Ue = true);
    };
  })(le), ce = () => {
    const Ce = E.value, Ue = l.formatter ? l.formatter(F.value) : F.value;
    !Ce || Ce.value === Ue || (Ce.value = Ue);
  }, Ie = async (Ce) => {
    ee();
    let { value: Ue } = Ce.target;
    if (l.formatter && l.parser && (Ue = l.parser(Ue)), !se.value) {
      if (Ue === F.value) {
        ce();
        return;
      }
      n(Ae, Ue), n(Jt, Ue), await $e(), ce(), re();
    }
  }, me = (Ce) => {
    let { value: Ue } = Ce.target;
    l.formatter && l.parser && (Ue = l.parser(Ue)), n(et, Ue);
  }, { isComposing: se, handleCompositionStart: ke, handleCompositionUpdate: De, handleCompositionEnd: qe } = aa({ emit: n, afterComposition: Ie }), je = () => {
    ee(), w.value = !w.value, setTimeout(re);
  }, Le = () => {
    var Ce;
    return (Ce = E.value) == null ? void 0 : Ce.focus();
  }, Ne = () => {
    var Ce;
    return (Ce = E.value) == null ? void 0 : Ce.blur();
  }, Te = (Ce) => {
    T.value = false, n("mouseleave", Ce);
  }, Ge = (Ce) => {
    T.value = true, n("mouseenter", Ce);
  }, Ze = (Ce) => {
    n("keydown", Ce);
  }, ot = () => {
    var Ce;
    (Ce = E.value) == null || Ce.select();
  }, st = () => {
    n(Ae, ""), n(et, ""), n("clear"), n(Jt, "");
  };
  return ue(() => l.modelValue, () => {
    var Ce;
    $e(() => le()), l.validateEvent && ((Ce = d == null ? void 0 : d.validate) == null || Ce.call(d, "change").catch((Ue) => void 0));
  }), ue(F, () => ce()), ue(() => l.type, async () => {
    await $e(), ce(), le();
  }), Xe(() => {
    !l.formatter && l.parser, ce(), $e(le);
  }), t({ input: b, textarea: g, ref: E, textareaStyle: L, autosize: yt(l, "autosize"), isComposing: se, focus: Le, blur: Ne, select: ot, clear: st, resizeTextarea: le }), (Ce, Ue) => (k(), D("div", { class: $([o(i), { [o(v).bm("group", "append")]: Ce.$slots.append, [o(v).bm("group", "prepend")]: Ce.$slots.prepend }]), style: Me(o(A)), onMouseenter: Ge, onMouseleave: Te }, [J(" input "), Ce.type !== "textarea" ? (k(), D(Pe, { key: 0 }, [J(" prepend slot "), Ce.$slots.prepend ? (k(), D("div", { key: 0, class: $(o(v).be("group", "prepend")) }, [X(Ce.$slots, "prepend")], 2)) : J("v-if", true), x("div", { ref_key: "wrapperRef", ref: M, class: $(o(u)) }, [J(" prefix slot "), Ce.$slots.prefix || Ce.prefixIcon ? (k(), D("span", { key: 0, class: $(o(v).e("prefix")) }, [x("span", { class: $(o(v).e("prefix-inner")) }, [X(Ce.$slots, "prefix"), Ce.prefixIcon ? (k(), oe(o(Ee), { key: 0, class: $(o(v).e("icon")) }, { default: j(() => [(k(), oe(Je(Ce.prefixIcon)))]), _: 1 }, 8, ["class"])) : J("v-if", true)], 2)], 2)) : J("v-if", true), x("input", lt({ id: o(f), ref_key: "input", ref: b, class: o(v).e("inner") }, o(s), { minlength: Ce.minlength, maxlength: Ce.maxlength, type: Ce.showPassword ? w.value ? "text" : "password" : Ce.type, disabled: o(h), readonly: Ce.readonly, autocomplete: Ce.autocomplete, tabindex: Ce.tabindex, "aria-label": Ce.ariaLabel, placeholder: Ce.placeholder, style: Ce.inputStyle, form: Ce.form, autofocus: Ce.autofocus, role: Ce.containerRole, onCompositionstart: o(ke), onCompositionupdate: o(De), onCompositionend: o(qe), onInput: Ie, onChange: me, onKeydown: Ze }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]), J(" suffix slot "), o(Z) ? (k(), D("span", { key: 1, class: $(o(v).e("suffix")) }, [x("span", { class: $(o(v).e("suffix-inner")) }, [!o(V) || !o(B) || !o(G) ? (k(), D(Pe, { key: 0 }, [X(Ce.$slots, "suffix"), Ce.suffixIcon ? (k(), oe(o(Ee), { key: 0, class: $(o(v).e("icon")) }, { default: j(() => [(k(), oe(Je(Ce.suffixIcon)))]), _: 1 }, 8, ["class"])) : J("v-if", true)], 64)) : J("v-if", true), o(V) ? (k(), oe(o(Ee), { key: 1, class: $([o(v).e("icon"), o(v).e("clear")]), onMousedown: Re(o(Rt), ["prevent"]), onClick: st }, { default: j(() => [z(o(dl))]), _: 1 }, 8, ["class", "onMousedown"])) : J("v-if", true), o(B) ? (k(), oe(o(Ee), { key: 2, class: $([o(v).e("icon"), o(v).e("password")]), onClick: je }, { default: j(() => [(k(), oe(Je(o(te))))]), _: 1 }, 8, ["class"])) : J("v-if", true), o(G) ? (k(), D("span", { key: 3, class: $(o(v).e("count")) }, [x("span", { class: $(o(v).e("count-inner")) }, he(o(U)) + " / " + he(Ce.maxlength), 3)], 2)) : J("v-if", true), o(P) && o(W) && o(R) ? (k(), oe(o(Ee), { key: 4, class: $([o(v).e("icon"), o(v).e("validateIcon"), o(v).is("loading", o(P) === "validating")]) }, { default: j(() => [(k(), oe(Je(o(W))))]), _: 1 }, 8, ["class"])) : J("v-if", true)], 2)], 2)) : J("v-if", true)], 2), J(" append slot "), Ce.$slots.append ? (k(), D("div", { key: 1, class: $(o(v).be("group", "append")) }, [X(Ce.$slots, "append")], 2)) : J("v-if", true)], 64)) : (k(), D(Pe, { key: 1 }, [J(" textarea "), x("textarea", lt({ id: o(f), ref_key: "textarea", ref: g, class: [o(p).e("inner"), o(v).is("focus", o(O))] }, o(s), { minlength: Ce.minlength, maxlength: Ce.maxlength, tabindex: Ce.tabindex, disabled: o(h), readonly: Ce.readonly, autocomplete: Ce.autocomplete, style: o(L), "aria-label": Ce.ariaLabel, placeholder: Ce.placeholder, form: Ce.form, autofocus: Ce.autofocus, rows: Ce.rows, role: Ce.containerRole, onCompositionstart: o(ke), onCompositionupdate: o(De), onCompositionend: o(qe), onInput: Ie, onFocus: o(_), onBlur: o(I), onChange: me, onKeydown: Ze }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]), o(G) ? (k(), D("span", { key: 0, style: Me(C.value), class: $(o(v).e("count")) }, he(o(U)) + " / " + he(Ce.maxlength), 7)) : J("v-if", true)], 64))], 38));
} });
var Xm = ve(Gm, [["__file", "input.vue"]]);
const hn = We(Xm), Jl = 4, md = { vertical: { offset: "offsetHeight", scroll: "scrollTop", scrollSize: "scrollHeight", size: "height", key: "vertical", axis: "Y", client: "clientY", direction: "top" }, horizontal: { offset: "offsetWidth", scroll: "scrollLeft", scrollSize: "scrollWidth", size: "width", key: "horizontal", axis: "X", client: "clientX", direction: "left" } }, Zm = ({ move: e, size: t, bar: n }) => ({ [n.size]: t, transform: `translate${n.axis}(${e}%)` }), Jr = Symbol("scrollbarContextKey"), Jm = pe({ vertical: Boolean, size: String, move: Number, ratio: { type: Number, required: true }, always: Boolean }), Qm = "Thumb", eg = K({ __name: "thumb", props: Jm, setup(e) {
  const t = e, n = we(Jr), l = de("scrollbar");
  n || Kt(Qm, "can not inject scrollbar context");
  const a = N(), s = N(), r = N({}), i = N(false);
  let u = false, c = false, d = dt ? document.onselectstart : null;
  const f = y(() => md[t.vertical ? "vertical" : "horizontal"]), m = y(() => Zm({ size: t.size, move: t.move, bar: f.value })), h = y(() => a.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / s.value[f.value.offset]), v = (E) => {
    var M;
    if (E.stopPropagation(), E.ctrlKey || [1, 2].includes(E.button)) return;
    (M = window.getSelection()) == null || M.removeAllRanges(), b(E);
    const O = E.currentTarget;
    O && (r.value[f.value.axis] = O[f.value.offset] - (E[f.value.client] - O.getBoundingClientRect()[f.value.direction]));
  }, p = (E) => {
    if (!s.value || !a.value || !n.wrapElement) return;
    const M = Math.abs(E.target.getBoundingClientRect()[f.value.direction] - E[f.value.client]), O = s.value[f.value.offset] / 2, _ = (M - O) * 100 * h.value / a.value[f.value.offset];
    n.wrapElement[f.value.scroll] = _ * n.wrapElement[f.value.scrollSize] / 100;
  }, b = (E) => {
    E.stopImmediatePropagation(), u = true, document.addEventListener("mousemove", g), document.addEventListener("mouseup", T), d = document.onselectstart, document.onselectstart = () => false;
  }, g = (E) => {
    if (!a.value || !s.value || u === false) return;
    const M = r.value[f.value.axis];
    if (!M) return;
    const O = (a.value.getBoundingClientRect()[f.value.direction] - E[f.value.client]) * -1, _ = s.value[f.value.offset] - M, I = (O - _) * 100 * h.value / a.value[f.value.offset];
    n.wrapElement[f.value.scroll] = I * n.wrapElement[f.value.scrollSize] / 100;
  }, T = () => {
    u = false, r.value[f.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", T), S(), c && (i.value = false);
  }, w = () => {
    c = false, i.value = !!t.size;
  }, C = () => {
    c = true, i.value = u;
  };
  It(() => {
    S(), document.removeEventListener("mouseup", T);
  });
  const S = () => {
    document.onselectstart !== d && (document.onselectstart = d);
  };
  return Et(yt(n, "scrollbarElement"), "mousemove", w), Et(yt(n, "scrollbarElement"), "mouseleave", C), (E, M) => (k(), oe(en, { name: o(l).b("fade"), persisted: "" }, { default: j(() => [Ye(x("div", { ref_key: "instance", ref: a, class: $([o(l).e("bar"), o(l).is(o(f).key)]), onMousedown: p, onClick: Re(() => {
  }, ["stop"]) }, [x("div", { ref_key: "thumb", ref: s, class: $(o(l).e("thumb")), style: Me(o(m)), onMousedown: v }, null, 38)], 42, ["onClick"]), [[pt, E.always || i.value]])]), _: 1 }, 8, ["name"]));
} });
var hu = ve(eg, [["__file", "thumb.vue"]]);
const tg = pe({ always: { type: Boolean, default: true }, minSize: { type: Number, required: true } }), ng = K({ __name: "bar", props: tg, setup(e, { expose: t }) {
  const n = e, l = we(Jr), a = N(0), s = N(0), r = N(""), i = N(""), u = N(1), c = N(1);
  return t({ handleScroll: (m) => {
    if (m) {
      const h = m.offsetHeight - Jl, v = m.offsetWidth - Jl;
      s.value = m.scrollTop * 100 / h * u.value, a.value = m.scrollLeft * 100 / v * c.value;
    }
  }, update: () => {
    const m = l == null ? void 0 : l.wrapElement;
    if (!m) return;
    const h = m.offsetHeight - Jl, v = m.offsetWidth - Jl, p = h ** 2 / m.scrollHeight, b = v ** 2 / m.scrollWidth, g = Math.max(p, n.minSize), T = Math.max(b, n.minSize);
    u.value = p / (h - p) / (g / (h - g)), c.value = b / (v - b) / (T / (v - T)), i.value = g + Jl < h ? `${g}px` : "", r.value = T + Jl < v ? `${T}px` : "";
  } }), (m, h) => (k(), D(Pe, null, [z(hu, { move: a.value, ratio: c.value, size: r.value, always: m.always }, null, 8, ["move", "ratio", "size", "always"]), z(hu, { move: s.value, ratio: u.value, size: i.value, vertical: "", always: m.always }, null, 8, ["move", "ratio", "size", "always"])], 64));
} });
var lg = ve(ng, [["__file", "bar.vue"]]);
const og = pe({ height: { type: [String, Number], default: "" }, maxHeight: { type: [String, Number], default: "" }, native: { type: Boolean, default: false }, wrapStyle: { type: Y([String, Object, Array]), default: "" }, wrapClass: { type: [String, Array], default: "" }, viewClass: { type: [String, Array], default: "" }, viewStyle: { type: [String, Array, Object], default: "" }, noresize: Boolean, tag: { type: String, default: "div" }, always: Boolean, minSize: { type: Number, default: 20 }, tabindex: { type: [String, Number], default: void 0 }, id: String, role: String, ...ln(["ariaLabel", "ariaOrientation"]) }), gd = { scroll: ({ scrollTop: e, scrollLeft: t }) => [e, t].every(_e) }, ag = "ElScrollbar", sg = K({ name: ag }), rg = K({ ...sg, props: og, emits: gd, setup(e, { expose: t, emit: n }) {
  const l = e, a = de("scrollbar");
  let s, r, i = 0, u = 0;
  const c = N(), d = N(), f = N(), m = N(), h = y(() => {
    const S = {};
    return l.height && (S.height = At(l.height)), l.maxHeight && (S.maxHeight = At(l.maxHeight)), [l.wrapStyle, S];
  }), v = y(() => [l.wrapClass, a.e("wrap"), { [a.em("wrap", "hidden-default")]: !l.native }]), p = y(() => [a.e("view"), l.viewClass]), b = () => {
    var S;
    d.value && ((S = m.value) == null || S.handleScroll(d.value), i = d.value.scrollTop, u = d.value.scrollLeft, n("scroll", { scrollTop: d.value.scrollTop, scrollLeft: d.value.scrollLeft }));
  };
  function g(S, E) {
    gt(S) ? d.value.scrollTo(S) : _e(S) && _e(E) && d.value.scrollTo(S, E);
  }
  const T = (S) => {
    _e(S) && (d.value.scrollTop = S);
  }, w = (S) => {
    _e(S) && (d.value.scrollLeft = S);
  }, C = () => {
    var S;
    (S = m.value) == null || S.update();
  };
  return ue(() => l.noresize, (S) => {
    S ? (s == null ? void 0 : s(), r == null ? void 0 : r()) : ({ stop: s } = Lt(f, C), r = Et("resize", C));
  }, { immediate: true }), ue(() => [l.maxHeight, l.height], () => {
    l.native || $e(() => {
      var S;
      C(), d.value && ((S = m.value) == null || S.handleScroll(d.value));
    });
  }), ut(Jr, Ct({ scrollbarElement: c, wrapElement: d })), Pc(() => {
    d.value && (d.value.scrollTop = i, d.value.scrollLeft = u);
  }), Xe(() => {
    l.native || $e(() => {
      C();
    });
  }), cl(() => C()), t({ wrapRef: d, update: C, scrollTo: g, setScrollTop: T, setScrollLeft: w, handleScroll: b }), (S, E) => (k(), D("div", { ref_key: "scrollbarRef", ref: c, class: $(o(a).b()) }, [x("div", { ref_key: "wrapRef", ref: d, class: $(o(v)), style: Me(o(h)), tabindex: S.tabindex, onScroll: b }, [(k(), oe(Je(S.tag), { id: S.id, ref_key: "resizeRef", ref: f, class: $(o(p)), style: Me(S.viewStyle), role: S.role, "aria-label": S.ariaLabel, "aria-orientation": S.ariaOrientation }, { default: j(() => [X(S.$slots, "default")]), _: 3 }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))], 46, ["tabindex"]), S.native ? J("v-if", true) : (k(), oe(lg, { key: 0, ref_key: "barRef", ref: m, always: S.always, "min-size": S.minSize }, null, 8, ["always", "min-size"]))], 2));
} });
var ig = ve(rg, [["__file", "scrollbar.vue"]]);
const el = We(ig), Qr = Symbol("popper"), bd = Symbol("popperContent"), yd = ["dialog", "grid", "group", "listbox", "menu", "navigation", "tooltip", "tree"], Cd = pe({ role: { type: String, values: yd, default: "tooltip" } }), ug = K({ name: "ElPopper", inheritAttrs: false }), cg = K({ ...ug, props: Cd, setup(e, { expose: t }) {
  const n = e, l = N(), a = N(), s = N(), r = N(), i = y(() => n.role), u = { triggerRef: l, popperInstanceRef: a, contentRef: s, referenceRef: r, role: i };
  return t(u), ut(Qr, u), (c, d) => X(c.$slots, "default");
} });
var dg = ve(cg, [["__file", "popper.vue"]]);
const wd = pe({ arrowOffset: { type: Number, default: 5 } }), fg = K({ name: "ElPopperArrow", inheritAttrs: false }), pg = K({ ...fg, props: wd, setup(e, { expose: t }) {
  const n = e, l = de("popper"), { arrowOffset: a, arrowRef: s, arrowStyle: r } = we(bd, void 0);
  return ue(() => n.arrowOffset, (i) => {
    a.value = i;
  }), It(() => {
    s.value = void 0;
  }), t({ arrowRef: s }), (i, u) => (k(), D("span", { ref_key: "arrowRef", ref: s, class: $(o(l).e("arrow")), style: Me(o(r)), "data-popper-arrow": "" }, null, 6));
} });
var vg = ve(pg, [["__file", "arrow.vue"]]);
const Sd = pe({ virtualRef: { type: Y(Object) }, virtualTriggering: Boolean, onMouseenter: { type: Y(Function) }, onMouseleave: { type: Y(Function) }, onClick: { type: Y(Function) }, onKeydown: { type: Y(Function) }, onFocus: { type: Y(Function) }, onBlur: { type: Y(Function) }, onContextmenu: { type: Y(Function) }, id: String, open: Boolean }), kd = Symbol("elForwardRef"), hg = (e) => {
  ut(kd, { setForwardRef: (n) => {
    e.value = n;
  } });
}, mg = (e) => ({ mounted(t) {
  e(t);
}, updated(t) {
  e(t);
}, unmounted() {
  e(null);
} }), gg = 'a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])', bg = (e) => getComputedStyle(e).position === "fixed" ? false : e.offsetParent !== null, mu = (e) => Array.from(e.querySelectorAll(gg)).filter((t) => Aa(t) && bg(t)), Aa = (e) => {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null) return true;
  if (e.tabIndex < 0 || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true") return false;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return !(e.type === "hidden" || e.type === "file");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    default:
      return false;
  }
}, ka = function(e, t, ...n) {
  let l;
  t.includes("mouse") || t.includes("click") ? l = "MouseEvents" : t.includes("key") ? l = "KeyboardEvent" : l = "HTMLEvents";
  const a = document.createEvent(l);
  return a.initEvent(t, ...n), e.dispatchEvent(a), e;
}, Ed = (e) => !e.getAttribute("aria-owns"), $d = (e, t, n) => {
  const { parentNode: l } = e;
  if (!l) return null;
  const a = l.querySelectorAll(n), s = Array.prototype.indexOf.call(a, e);
  return a[s + t] || null;
}, Ea = (e) => {
  e && (e.focus(), !Ed(e) && e.click());
}, yg = "ElOnlyChild", Td = K({ name: yg, setup(e, { slots: t, attrs: n }) {
  var l;
  const a = we(kd), s = mg((l = a == null ? void 0 : a.setForwardRef) != null ? l : Rt);
  return () => {
    var r;
    const i = (r = t.default) == null ? void 0 : r.call(t, n);
    if (!i || i.length > 1) return null;
    const u = Nd(i);
    return u ? Ye(Tv(u, n), [[s]]) : null;
  };
} });
function Nd(e) {
  if (!e) return null;
  const t = e;
  for (const n of t) {
    if (gt(n)) switch (n.type) {
      case ts:
        continue;
      case Rc:
      case "svg":
        return gu(n);
      case Pe:
        return Nd(n.children);
      default:
        return n;
    }
    return gu(n);
  }
  return null;
}
function gu(e) {
  const t = de("only-child");
  return z("span", { class: t.e("content") }, [e]);
}
const Cg = K({ name: "ElPopperTrigger", inheritAttrs: false }), wg = K({ ...Cg, props: Sd, setup(e, { expose: t }) {
  const n = e, { role: l, triggerRef: a } = we(Qr, void 0);
  hg(a);
  const s = y(() => i.value ? n.id : void 0), r = y(() => {
    if (l && l.value === "tooltip") return n.open && n.id ? n.id : void 0;
  }), i = y(() => {
    if (l && l.value !== "tooltip") return l.value;
  }), u = y(() => i.value ? `${n.open}` : void 0);
  let c;
  const d = ["onMouseenter", "onMouseleave", "onClick", "onKeydown", "onFocus", "onBlur", "onContextmenu"];
  return Xe(() => {
    ue(() => n.virtualRef, (f) => {
      f && (a.value = Sn(f));
    }, { immediate: true }), ue(a, (f, m) => {
      c == null ? void 0 : c(), c = void 0, En(f) && (d.forEach((h) => {
        var v;
        const p = n[h];
        p && (f.addEventListener(h.slice(2).toLowerCase(), p), (v = m == null ? void 0 : m.removeEventListener) == null || v.call(m, h.slice(2).toLowerCase(), p));
      }), Aa(f) && (c = ue([s, r, i, u], (h) => {
        ["aria-controls", "aria-describedby", "aria-haspopup", "aria-expanded"].forEach((v, p) => {
          qt(h[p]) ? f.removeAttribute(v) : f.setAttribute(v, h[p]);
        });
      }, { immediate: true }))), En(m) && Aa(m) && ["aria-controls", "aria-describedby", "aria-haspopup", "aria-expanded"].forEach((h) => m.removeAttribute(h));
    }, { immediate: true });
  }), It(() => {
    if (c == null ? void 0 : c(), c = void 0, a.value && En(a.value)) {
      const f = a.value;
      d.forEach((m) => {
        const h = n[m];
        h && f.removeEventListener(m.slice(2).toLowerCase(), h);
      }), a.value = void 0;
    }
  }), t({ triggerRef: a }), (f, m) => f.virtualTriggering ? J("v-if", true) : (k(), oe(o(Td), lt({ key: 0 }, f.$attrs, { "aria-controls": o(s), "aria-describedby": o(r), "aria-expanded": o(u), "aria-haspopup": o(i) }), { default: j(() => [X(f.$slots, "default")]), _: 3 }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
} });
var Sg = ve(wg, [["__file", "trigger.vue"]]);
const Is = "focus-trap.focus-after-trapped", _s = "focus-trap.focus-after-released", kg = "focus-trap.focusout-prevented", bu = { cancelable: true, bubbles: false }, Eg = { cancelable: true, bubbles: false }, yu = "focusAfterTrapped", Cu = "focusAfterReleased", ei = Symbol("elFocusTrap"), ti = N(), ds = N(0), ni = N(0);
let pa = 0;
const Id = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (l) => {
    const a = l.tagName === "INPUT" && l.type === "hidden";
    return l.disabled || l.hidden || a ? NodeFilter.FILTER_SKIP : l.tabIndex >= 0 || l === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}, wu = (e, t) => {
  for (const n of e) if (!$g(n, t)) return n;
}, $g = (e, t) => {
  if (getComputedStyle(e).visibility === "hidden") return true;
  for (; e; ) {
    if (t && e === t) return false;
    if (getComputedStyle(e).display === "none") return true;
    e = e.parentElement;
  }
  return false;
}, Tg = (e) => {
  const t = Id(e), n = wu(t, e), l = wu(t.reverse(), e);
  return [n, l];
}, Ng = (e) => e instanceof HTMLInputElement && "select" in e, tl = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let l = false;
    En(e) && !Aa(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), l = true), e.focus({ preventScroll: true }), ni.value = window.performance.now(), e !== n && Ng(e) && t && e.select(), En(e) && l && e.removeAttribute("tabindex");
  }
};
function Su(e, t) {
  const n = [...e], l = e.indexOf(t);
  return l !== -1 && n.splice(l, 1), n;
}
const Ig = () => {
  let e = [];
  return { push: (l) => {
    const a = e[0];
    a && l !== a && a.pause(), e = Su(e, l), e.unshift(l);
  }, remove: (l) => {
    var a, s;
    e = Su(e, l), (s = (a = e[0]) == null ? void 0 : a.resume) == null || s.call(a);
  } };
}, _g = (e, t = false) => {
  const n = document.activeElement;
  for (const l of e) if (tl(l, t), document.activeElement !== n) return;
}, ku = Ig(), Mg = () => ds.value > ni.value, va = () => {
  ti.value = "pointer", ds.value = window.performance.now();
}, Eu = () => {
  ti.value = "keyboard", ds.value = window.performance.now();
}, Og = () => (Xe(() => {
  pa === 0 && (document.addEventListener("mousedown", va), document.addEventListener("touchstart", va), document.addEventListener("keydown", Eu)), pa++;
}), It(() => {
  pa--, pa <= 0 && (document.removeEventListener("mousedown", va), document.removeEventListener("touchstart", va), document.removeEventListener("keydown", Eu));
}), { focusReason: ti, lastUserFocusTimestamp: ds, lastAutomatedFocusTimestamp: ni }), ha = (e) => new CustomEvent(kg, { ...Eg, detail: e }), ye = { tab: "Tab", enter: "Enter", space: "Space", left: "ArrowLeft", up: "ArrowUp", right: "ArrowRight", down: "ArrowDown", esc: "Escape", delete: "Delete", backspace: "Backspace", numpadEnter: "NumpadEnter", pageUp: "PageUp", pageDown: "PageDown", home: "Home", end: "End" };
let lo = [];
const $u = (e) => {
  e.code === ye.esc && lo.forEach((t) => t(e));
}, Pg = (e) => {
  Xe(() => {
    lo.length === 0 && document.addEventListener("keydown", $u), dt && lo.push(e);
  }), It(() => {
    lo = lo.filter((t) => t !== e), lo.length === 0 && dt && document.removeEventListener("keydown", $u);
  });
}, Rg = K({ name: "ElFocusTrap", inheritAttrs: false, props: { loop: Boolean, trapped: Boolean, focusTrapEl: Object, focusStartEl: { type: [Object, String], default: "first" } }, emits: [yu, Cu, "focusin", "focusout", "focusout-prevented", "release-requested"], setup(e, { emit: t }) {
  const n = N();
  let l, a;
  const { focusReason: s } = Og();
  Pg((v) => {
    e.trapped && !r.paused && t("release-requested", v);
  });
  const r = { paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }, i = (v) => {
    if (!e.loop && !e.trapped || r.paused) return;
    const { code: p, altKey: b, ctrlKey: g, metaKey: T, currentTarget: w, shiftKey: C } = v, { loop: S } = e, E = p === ye.tab && !b && !g && !T, M = document.activeElement;
    if (E && M) {
      const O = w, [_, I] = Tg(O);
      if (_ && I) {
        if (!C && M === I) {
          const P = ha({ focusReason: s.value });
          t("focusout-prevented", P), P.defaultPrevented || (v.preventDefault(), S && tl(_, true));
        } else if (C && [_, O].includes(M)) {
          const P = ha({ focusReason: s.value });
          t("focusout-prevented", P), P.defaultPrevented || (v.preventDefault(), S && tl(I, true));
        }
      } else if (M === O) {
        const P = ha({ focusReason: s.value });
        t("focusout-prevented", P), P.defaultPrevented || v.preventDefault();
      }
    }
  };
  ut(ei, { focusTrapRef: n, onKeydown: i }), ue(() => e.focusTrapEl, (v) => {
    v && (n.value = v);
  }, { immediate: true }), ue([n], ([v], [p]) => {
    v && (v.addEventListener("keydown", i), v.addEventListener("focusin", d), v.addEventListener("focusout", f)), p && (p.removeEventListener("keydown", i), p.removeEventListener("focusin", d), p.removeEventListener("focusout", f));
  });
  const u = (v) => {
    t(yu, v);
  }, c = (v) => t(Cu, v), d = (v) => {
    const p = o(n);
    if (!p) return;
    const b = v.target, g = v.relatedTarget, T = b && p.contains(b);
    e.trapped || g && p.contains(g) || (l = g), T && t("focusin", v), !r.paused && e.trapped && (T ? a = b : tl(a, true));
  }, f = (v) => {
    const p = o(n);
    if (!(r.paused || !p)) if (e.trapped) {
      const b = v.relatedTarget;
      !qt(b) && !p.contains(b) && setTimeout(() => {
        if (!r.paused && e.trapped) {
          const g = ha({ focusReason: s.value });
          t("focusout-prevented", g), g.defaultPrevented || tl(a, true);
        }
      }, 0);
    } else {
      const b = v.target;
      b && p.contains(b) || t("focusout", v);
    }
  };
  async function m() {
    await $e();
    const v = o(n);
    if (v) {
      ku.push(r);
      const p = v.contains(document.activeElement) ? l : document.activeElement;
      if (l = p, !v.contains(p)) {
        const g = new Event(Is, bu);
        v.addEventListener(Is, u), v.dispatchEvent(g), g.defaultPrevented || $e(() => {
          let T = e.focusStartEl;
          Be(T) || (tl(T), document.activeElement !== T && (T = "first")), T === "first" && _g(Id(v), true), (document.activeElement === p || T === "container") && tl(v);
        });
      }
    }
  }
  function h() {
    const v = o(n);
    if (v) {
      v.removeEventListener(Is, u);
      const p = new CustomEvent(_s, { ...bu, detail: { focusReason: s.value } });
      v.addEventListener(_s, c), v.dispatchEvent(p), !p.defaultPrevented && (s.value == "keyboard" || !Mg() || v.contains(document.activeElement)) && tl(l ?? document.body), v.removeEventListener(_s, c), ku.remove(r);
    }
  }
  return Xe(() => {
    e.trapped && m(), ue(() => e.trapped, (v) => {
      v ? m() : h();
    });
  }), It(() => {
    e.trapped && h(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", f), n.value = void 0);
  }), { onKeydown: i };
} });
function Lg(e, t, n, l, a, s) {
  return X(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var _o = ve(Rg, [["render", Lg], ["__file", "focus-trap.vue"]]);
const Bg = ["fixed", "absolute"], Dg = pe({ boundariesPadding: { type: Number, default: 0 }, fallbackPlacements: { type: Y(Array), default: void 0 }, gpuAcceleration: { type: Boolean, default: true }, offset: { type: Number, default: 12 }, placement: { type: String, values: Yl, default: "bottom" }, popperOptions: { type: Y(Object), default: () => ({}) }, strategy: { type: String, values: Bg, default: "absolute" } }), _d = pe({ ...Dg, id: String, style: { type: Y([String, Array, Object]) }, className: { type: Y([String, Array, Object]) }, effect: { type: Y(String), default: "dark" }, visible: Boolean, enterable: { type: Boolean, default: true }, pure: Boolean, focusOnShow: { type: Boolean, default: false }, trapping: { type: Boolean, default: false }, popperClass: { type: Y([String, Array, Object]) }, popperStyle: { type: Y([String, Array, Object]) }, referenceEl: { type: Y(Object) }, triggerTargetEl: { type: Y(Object) }, stopPopperMouseEvent: { type: Boolean, default: true }, virtualTriggering: Boolean, zIndex: Number, ...ln(["ariaLabel"]) }), Vg = { mouseenter: (e) => e instanceof MouseEvent, mouseleave: (e) => e instanceof MouseEvent, focus: () => true, blur: () => true, close: () => true }, Ag = (e, t) => {
  const n = N(false), l = N();
  return { focusStartRef: l, trapped: n, onFocusAfterReleased: (c) => {
    var d;
    ((d = c.detail) == null ? void 0 : d.focusReason) !== "pointer" && (l.value = "first", t("blur"));
  }, onFocusAfterTrapped: () => {
    t("focus");
  }, onFocusInTrap: (c) => {
    e.visible && !n.value && (c.target && (l.value = c.target), n.value = true);
  }, onFocusoutPrevented: (c) => {
    e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = false);
  }, onReleaseRequested: () => {
    n.value = false, t("close");
  } };
}, Fg = (e, t = []) => {
  const { placement: n, strategy: l, popperOptions: a } = e, s = { placement: n, strategy: l, ...a, modifiers: [...xg(e), ...t] };
  return Hg(s, a == null ? void 0 : a.modifiers), s;
}, zg = (e) => {
  if (dt) return Sn(e);
};
function xg(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: l } = e;
  return [{ name: "offset", options: { offset: [0, t ?? 12] } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5, fallbackPlacements: l } }, { name: "computeStyles", options: { gpuAcceleration: n } }];
}
function Hg(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Kg = (e, t, n = {}) => {
  const l = { name: "updateState", enabled: true, phase: "write", fn: ({ state: u }) => {
    const c = Wg(u);
    Object.assign(r.value, c);
  }, requires: ["computeStyles"] }, a = y(() => {
    const { onFirstUpdate: u, placement: c, strategy: d, modifiers: f } = o(n);
    return { onFirstUpdate: u, placement: c || "bottom", strategy: d || "absolute", modifiers: [...f || [], l, { name: "applyStyles", enabled: false }] };
  }), s = Mt(), r = N({ styles: { popper: { position: o(a).strategy, left: "0", top: "0" }, arrow: { position: "absolute" } }, attributes: {} }), i = () => {
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return ue(a, (u) => {
    const c = o(s);
    c && c.setOptions(u);
  }, { deep: true }), ue([e, t], ([u, c]) => {
    i(), !(!u || !c) && (s.value = ch(u, c, o(a)));
  }), It(() => {
    i();
  }), { state: y(() => {
    var u;
    return { ...((u = o(s)) == null ? void 0 : u.state) || {} };
  }), styles: y(() => o(r).styles), attributes: y(() => o(r).attributes), update: () => {
    var u;
    return (u = o(s)) == null ? void 0 : u.update();
  }, forceUpdate: () => {
    var u;
    return (u = o(s)) == null ? void 0 : u.forceUpdate();
  }, instanceRef: y(() => o(s)) };
};
function Wg(e) {
  const t = Object.keys(e.elements), n = Wo(t.map((a) => [a, e.styles[a] || {}])), l = Wo(t.map((a) => [a, e.attributes[a]]));
  return { styles: n, attributes: l };
}
const jg = 0, Ug = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: l, role: a } = we(Qr, void 0), s = N(), r = N(), i = y(() => ({ name: "eventListeners", enabled: !!e.visible })), u = y(() => {
    var g;
    const T = o(s), w = (g = o(r)) != null ? g : jg;
    return { name: "arrow", enabled: !Dc(T), options: { element: T, padding: w } };
  }), c = y(() => ({ onFirstUpdate: () => {
    v();
  }, ...Fg(e, [o(u), o(i)]) })), d = y(() => zg(e.referenceEl) || o(l)), { attributes: f, state: m, styles: h, update: v, forceUpdate: p, instanceRef: b } = Kg(d, n, c);
  return ue(b, (g) => t.value = g), Xe(() => {
    ue(() => {
      var g;
      return (g = o(d)) == null ? void 0 : g.getBoundingClientRect();
    }, () => {
      v();
    });
  }), { attributes: f, arrowRef: s, contentRef: n, instanceRef: b, state: m, styles: h, role: a, forceUpdate: p, update: v };
}, Yg = (e, { attributes: t, styles: n, role: l }) => {
  const { nextZIndex: a } = No(), s = de("popper"), r = y(() => o(t).popper), i = N(_e(e.zIndex) ? e.zIndex : a()), u = y(() => [s.b(), s.is("pure", e.pure), s.is(e.effect), e.popperClass]), c = y(() => [{ zIndex: o(i) }, o(n).popper, e.popperStyle || {}]), d = y(() => l.value === "dialog" ? "false" : void 0), f = y(() => o(n).arrow || {});
  return { ariaModal: d, arrowStyle: f, contentAttrs: r, contentClass: u, contentStyle: c, contentZIndex: i, updateZIndex: () => {
    i.value = _e(e.zIndex) ? e.zIndex : a();
  } };
}, qg = K({ name: "ElPopperContent" }), Gg = K({ ...qg, props: _d, emits: Vg, setup(e, { expose: t, emit: n }) {
  const l = e, { focusStartRef: a, trapped: s, onFocusAfterReleased: r, onFocusAfterTrapped: i, onFocusInTrap: u, onFocusoutPrevented: c, onReleaseRequested: d } = Ag(l, n), { attributes: f, arrowRef: m, contentRef: h, styles: v, instanceRef: p, role: b, update: g } = Ug(l), { ariaModal: T, arrowStyle: w, contentAttrs: C, contentClass: S, contentStyle: E, updateZIndex: M } = Yg(l, { styles: v, attributes: f, role: b }), O = we(Jn, void 0), _ = N();
  ut(bd, { arrowStyle: w, arrowRef: m, arrowOffset: _ }), O && ut(Jn, { ...O, addInputId: Rt, removeInputId: Rt });
  let I;
  const R = (W = true) => {
    g(), W && M();
  }, P = () => {
    R(false), l.visible && l.focusOnShow ? s.value = true : l.visible === false && (s.value = false);
  };
  return Xe(() => {
    ue(() => l.triggerTargetEl, (W, te) => {
      I == null ? void 0 : I(), I = void 0;
      const A = o(W || h.value), L = o(te || h.value);
      En(A) && (I = ue([b, () => l.ariaLabel, T, () => l.id], (F) => {
        ["role", "aria-label", "aria-modal", "id"].forEach((V, B) => {
          qt(F[B]) ? A.removeAttribute(V) : A.setAttribute(V, F[B]);
        });
      }, { immediate: true })), L !== A && En(L) && ["role", "aria-label", "aria-modal", "id"].forEach((F) => {
        L.removeAttribute(F);
      });
    }, { immediate: true }), ue(() => l.visible, P, { immediate: true });
  }), It(() => {
    I == null ? void 0 : I(), I = void 0;
  }), t({ popperContentRef: h, popperInstanceRef: p, updatePopper: R, contentStyle: E }), (W, te) => (k(), D("div", lt({ ref_key: "contentRef", ref: h }, o(C), { style: o(E), class: o(S), tabindex: "-1", onMouseenter: (A) => W.$emit("mouseenter", A), onMouseleave: (A) => W.$emit("mouseleave", A) }), [z(o(_o), { trapped: o(s), "trap-on-focus-in": true, "focus-trap-el": o(h), "focus-start-el": o(a), onFocusAfterTrapped: o(i), onFocusAfterReleased: o(r), onFocusin: o(u), onFocusoutPrevented: o(c), onReleaseRequested: o(d) }, { default: j(() => [X(W.$slots, "default")]), _: 3 }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])], 16, ["onMouseenter", "onMouseleave"]));
} });
var Xg = ve(Gg, [["__file", "content.vue"]]);
const Md = We(dg), fs = Symbol("elTooltip");
function Tu() {
  let e;
  const t = (l, a) => {
    n(), e = window.setTimeout(l, a);
  }, n = () => window.clearTimeout(e);
  return la(() => n()), { registerTimeout: t, cancelTimeout: n };
}
const Zg = pe({ showAfter: { type: Number, default: 0 }, hideAfter: { type: Number, default: 200 }, autoClose: { type: Number, default: 0 } }), Jg = ({ showAfter: e, hideAfter: t, autoClose: n, open: l, close: a }) => {
  const { registerTimeout: s } = Tu(), { registerTimeout: r, cancelTimeout: i } = Tu();
  return { onOpen: (d) => {
    s(() => {
      l(d);
      const f = o(n);
      _e(f) && f > 0 && r(() => {
        a(d);
      }, f);
    }, o(e));
  }, onClose: (d) => {
    i(), s(() => {
      a(d);
    }, o(t));
  } };
}, Xt = pe({ ...Zg, ..._d, appendTo: { type: Y([String, Object]) }, content: { type: String, default: "" }, rawContent: Boolean, persistent: Boolean, visible: { type: Y(Boolean), default: null }, transition: String, teleported: { type: Boolean, default: true }, disabled: Boolean, ...ln(["ariaLabel"]) }), co = pe({ ...Sd, disabled: Boolean, trigger: { type: Y([String, Array]), default: "hover" }, triggerKeys: { type: Y(Array), default: () => [ye.enter, ye.numpadEnter, ye.space] } }), Qg = jn({ type: Y(Boolean), default: null }), eb = jn({ type: Y(Function) }), tb = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, l = [t], a = { [e]: Qg, [n]: eb };
  return { useModelToggle: ({ indicator: r, toggleReason: i, shouldHideWhenRouteChanges: u, shouldProceed: c, onShow: d, onHide: f }) => {
    const m = tt(), { emit: h } = m, v = m.props, p = y(() => Qe(v[n])), b = y(() => v[e] === null), g = (M) => {
      r.value !== true && (r.value = true, i && (i.value = M), Qe(d) && d(M));
    }, T = (M) => {
      r.value !== false && (r.value = false, i && (i.value = M), Qe(f) && f(M));
    }, w = (M) => {
      if (v.disabled === true || Qe(c) && !c()) return;
      const O = p.value && dt;
      O && h(t, true), (b.value || !O) && g(M);
    }, C = (M) => {
      if (v.disabled === true || !dt) return;
      const O = p.value && dt;
      O && h(t, false), (b.value || !O) && T(M);
    }, S = (M) => {
      Tt(M) && (v.disabled && M ? p.value && h(t, false) : r.value !== M && (M ? g() : T()));
    }, E = () => {
      r.value ? C() : w();
    };
    return ue(() => v[e], S), u && m.appContext.config.globalProperties.$route !== void 0 && ue(() => ({ ...m.proxy.$route }), () => {
      u.value && r.value && C();
    }), Xe(() => {
      S(v[e]);
    }), { hide: C, show: w, toggle: E, hasUpdateHandler: p };
  }, useModelToggleProps: a, useModelToggleEmits: l };
}, { useModelToggleProps: nb, useModelToggleEmits: lb, useModelToggle: ob } = tb("visible"), ab = pe({ ...Cd, ...nb, ...Xt, ...co, ...wd, showArrow: { type: Boolean, default: true } }), sb = [...lb, "before-show", "before-hide", "show", "hide", "open", "close"], rb = (e, t) => Se(e) ? e.includes(t) : e === t, Ql = (e, t, n) => (l) => {
  rb(o(e), t) && n(l);
}, zt = (e, t, { checkForDefaultPrevented: n = true } = {}) => (a) => {
  const s = e == null ? void 0 : e(a);
  if (n === false || !s) return t == null ? void 0 : t(a);
}, Nu = (e) => (t) => t.pointerType === "mouse" ? e(t) : void 0, ib = K({ name: "ElTooltipTrigger" }), ub = K({ ...ib, props: co, setup(e, { expose: t }) {
  const n = e, l = de("tooltip"), { controlled: a, id: s, open: r, onOpen: i, onClose: u, onToggle: c } = we(fs, void 0), d = N(null), f = () => {
    if (o(a) || n.disabled) return true;
  }, m = yt(n, "trigger"), h = zt(f, Ql(m, "hover", i)), v = zt(f, Ql(m, "hover", u)), p = zt(f, Ql(m, "click", (C) => {
    C.button === 0 && c(C);
  })), b = zt(f, Ql(m, "focus", i)), g = zt(f, Ql(m, "focus", u)), T = zt(f, Ql(m, "contextmenu", (C) => {
    C.preventDefault(), c(C);
  })), w = zt(f, (C) => {
    const { code: S } = C;
    n.triggerKeys.includes(S) && (C.preventDefault(), c(C));
  });
  return t({ triggerRef: d }), (C, S) => (k(), oe(o(Sg), { id: o(s), "virtual-ref": C.virtualRef, open: o(r), "virtual-triggering": C.virtualTriggering, class: $(o(l).e("trigger")), onBlur: o(g), onClick: o(p), onContextmenu: o(T), onFocus: o(b), onMouseenter: o(h), onMouseleave: o(v), onKeydown: o(w) }, { default: j(() => [X(C.$slots, "default")]), _: 3 }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
} });
var cb = ve(ub, [["__file", "trigger.vue"]]);
const db = pe({ to: { type: Y([String, Object]), required: true }, disabled: Boolean }), fb = K({ __name: "teleport", props: db, setup(e) {
  return (t, n) => t.disabled ? X(t.$slots, "default", { key: 0 }) : (k(), oe(Nv, { key: 1, to: t.to }, [X(t.$slots, "default")], 8, ["to"]));
} });
var pb = ve(fb, [["__file", "teleport.vue"]]);
const Mo = We(pb), Od = () => {
  const e = Hr(), t = Xr(), n = y(() => `${e.value}-popper-container-${t.prefix}`), l = y(() => `#${n.value}`);
  return { id: n, selector: l };
}, vb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, hb = () => {
  const { id: e, selector: t } = Od();
  return Dr(() => {
    dt && (document.body.querySelector(t.value) || vb(e.value));
  }), { id: e, selector: t };
}, mb = K({ name: "ElTooltipContent", inheritAttrs: false }), gb = K({ ...mb, props: Xt, setup(e, { expose: t }) {
  const n = e, { selector: l } = Od(), a = de("tooltip"), s = N();
  let r;
  const { controlled: i, id: u, open: c, trigger: d, onClose: f, onOpen: m, onShow: h, onHide: v, onBeforeShow: p, onBeforeHide: b } = we(fs, void 0), g = y(() => n.transition || `${a.namespace.value}-fade-in-linear`), T = y(() => n.persistent);
  It(() => {
    r == null ? void 0 : r();
  });
  const w = y(() => o(T) ? true : o(c)), C = y(() => n.disabled ? false : o(c)), S = y(() => n.appendTo || l.value), E = y(() => {
    var F;
    return (F = n.style) != null ? F : {};
  }), M = N(true), O = () => {
    v(), L() && tl(document.body), M.value = true;
  }, _ = () => {
    if (o(i)) return true;
  }, I = zt(_, () => {
    n.enterable && o(d) === "hover" && m();
  }), R = zt(_, () => {
    o(d) === "hover" && f();
  }), P = () => {
    var F, V;
    (V = (F = s.value) == null ? void 0 : F.updatePopper) == null || V.call(F), p == null ? void 0 : p();
  }, W = () => {
    b == null ? void 0 : b();
  }, te = () => {
    h(), r = Wr(y(() => {
      var F;
      return (F = s.value) == null ? void 0 : F.popperContentRef;
    }), () => {
      if (o(i)) return;
      o(d) !== "hover" && f();
    });
  }, A = () => {
    n.virtualTriggering || f();
  }, L = (F) => {
    var V;
    const B = (V = s.value) == null ? void 0 : V.popperContentRef, G = (F == null ? void 0 : F.relatedTarget) || document.activeElement;
    return B == null ? void 0 : B.contains(G);
  };
  return ue(() => o(c), (F) => {
    F ? M.value = false : r == null ? void 0 : r();
  }, { flush: "post" }), ue(() => n.content, () => {
    var F, V;
    (V = (F = s.value) == null ? void 0 : F.updatePopper) == null || V.call(F);
  }), t({ contentRef: s, isFocusInsideContent: L }), (F, V) => (k(), oe(o(Mo), { disabled: !F.teleported, to: o(S) }, { default: j(() => [z(en, { name: o(g), onAfterLeave: O, onBeforeEnter: P, onAfterEnter: te, onBeforeLeave: W }, { default: j(() => [o(w) ? Ye((k(), oe(o(Xg), lt({ key: 0, id: o(u), ref_key: "contentRef", ref: s }, F.$attrs, { "aria-label": F.ariaLabel, "aria-hidden": M.value, "boundaries-padding": F.boundariesPadding, "fallback-placements": F.fallbackPlacements, "gpu-acceleration": F.gpuAcceleration, offset: F.offset, placement: F.placement, "popper-options": F.popperOptions, strategy: F.strategy, effect: F.effect, enterable: F.enterable, pure: F.pure, "popper-class": F.popperClass, "popper-style": [F.popperStyle, o(E)], "reference-el": F.referenceEl, "trigger-target-el": F.triggerTargetEl, visible: o(C), "z-index": F.zIndex, onMouseenter: o(I), onMouseleave: o(R), onBlur: A, onClose: o(f) }), { default: j(() => [X(F.$slots, "default")]), _: 3 }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [[pt, o(C)]]) : J("v-if", true)]), _: 3 }, 8, ["name"])]), _: 3 }, 8, ["disabled", "to"]));
} });
var bb = ve(gb, [["__file", "content.vue"]]);
const yb = K({ name: "ElTooltip" }), Cb = K({ ...yb, props: ab, emits: sb, setup(e, { expose: t, emit: n }) {
  const l = e;
  hb();
  const a = nn(), s = N(), r = N(), i = () => {
    var g;
    const T = o(s);
    T && ((g = T.popperInstanceRef) == null || g.update());
  }, u = N(false), c = N(), { show: d, hide: f, hasUpdateHandler: m } = ob({ indicator: u, toggleReason: c }), { onOpen: h, onClose: v } = Jg({ showAfter: yt(l, "showAfter"), hideAfter: yt(l, "hideAfter"), autoClose: yt(l, "autoClose"), open: d, close: f }), p = y(() => Tt(l.visible) && !m.value);
  ut(fs, { controlled: p, id: a, open: es(u), trigger: yt(l, "trigger"), onOpen: (g) => {
    h(g);
  }, onClose: (g) => {
    v(g);
  }, onToggle: (g) => {
    o(u) ? v(g) : h(g);
  }, onShow: () => {
    n("show", c.value);
  }, onHide: () => {
    n("hide", c.value);
  }, onBeforeShow: () => {
    n("before-show", c.value);
  }, onBeforeHide: () => {
    n("before-hide", c.value);
  }, updatePopper: i }), ue(() => l.disabled, (g) => {
    g && u.value && (u.value = false);
  });
  const b = (g) => {
    var T;
    return (T = r.value) == null ? void 0 : T.isFocusInsideContent(g);
  };
  return Iv(() => u.value && f()), t({ popperRef: s, contentRef: r, isFocusInsideContent: b, updatePopper: i, onOpen: h, onClose: v, hide: f }), (g, T) => (k(), oe(o(Md), { ref_key: "popperRef", ref: s, role: g.role }, { default: j(() => [z(cb, { disabled: g.disabled, trigger: g.trigger, "trigger-keys": g.triggerKeys, "virtual-ref": g.virtualRef, "virtual-triggering": g.virtualTriggering }, { default: j(() => [g.$slots.default ? X(g.$slots, "default", { key: 0 }) : J("v-if", true)]), _: 3 }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]), z(bb, { ref_key: "contentRef", ref: r, "aria-label": g.ariaLabel, "boundaries-padding": g.boundariesPadding, content: g.content, disabled: g.disabled, effect: g.effect, enterable: g.enterable, "fallback-placements": g.fallbackPlacements, "hide-after": g.hideAfter, "gpu-acceleration": g.gpuAcceleration, offset: g.offset, persistent: g.persistent, "popper-class": g.popperClass, "popper-style": g.popperStyle, placement: g.placement, "popper-options": g.popperOptions, pure: g.pure, "raw-content": g.rawContent, "reference-el": g.referenceEl, "trigger-target-el": g.triggerTargetEl, "show-after": g.showAfter, strategy: g.strategy, teleported: g.teleported, transition: g.transition, "virtual-triggering": g.virtualTriggering, "z-index": g.zIndex, "append-to": g.appendTo }, { default: j(() => [X(g.$slots, "content", {}, () => [g.rawContent ? (k(), D("span", { key: 0, innerHTML: g.content }, null, 8, ["innerHTML"])) : (k(), D("span", { key: 1 }, he(g.content), 1))]), g.showArrow ? (k(), oe(o(vg), { key: 0, "arrow-offset": g.arrowOffset }, null, 8, ["arrow-offset"])) : J("v-if", true)]), _: 3 }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])]), _: 3 }, 8, ["role"]));
} });
var wb = ve(Cb, [["__file", "tooltip.vue"]]);
const rn = We(wb), Sb = pe({ valueKey: { type: String, default: "value" }, modelValue: { type: [String, Number], default: "" }, debounce: { type: Number, default: 300 }, placement: { type: Y(String), values: ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end"], default: "bottom-start" }, fetchSuggestions: { type: Y([Function, Array]), default: Rt }, popperClass: { type: String, default: "" }, triggerOnFocus: { type: Boolean, default: true }, selectWhenUnmatched: { type: Boolean, default: false }, hideLoading: { type: Boolean, default: false }, teleported: Xt.teleported, highlightFirstItem: { type: Boolean, default: false }, fitInputWidth: { type: Boolean, default: false }, clearable: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, name: String, ...ln(["ariaLabel"]) }), kb = { [Ae]: (e) => Be(e), [Jt]: (e) => Be(e), [et]: (e) => Be(e), focus: (e) => e instanceof FocusEvent, blur: (e) => e instanceof FocusEvent, clear: () => true, select: (e) => gt(e) }, Pd = "ElAutocomplete", Eb = K({ name: Pd, inheritAttrs: false }), $b = K({ ...Eb, props: Sb, emits: kb, setup(e, { expose: t, emit: n }) {
  const l = e, a = oa(), s = ul(), r = cn(), i = de("autocomplete"), u = N(), c = N(), d = N(), f = N();
  let m = false, h = false;
  const v = N([]), p = N(-1), b = N(""), g = N(false), T = N(false), w = N(false), C = nn(), S = y(() => s.style), E = y(() => (v.value.length > 0 || w.value) && g.value), M = y(() => !l.hideLoading && w.value), O = y(() => u.value ? Array.from(u.value.$el.querySelectorAll("input")) : []), _ = () => {
    E.value && (b.value = `${u.value.$el.offsetWidth}px`);
  }, I = () => {
    p.value = -1;
  }, R = async (Q) => {
    if (T.value) return;
    const ie = (ce) => {
      w.value = false, !T.value && (Se(ce) ? (v.value = ce, p.value = l.highlightFirstItem ? 0 : -1) : Kt(Pd, "autocomplete suggestions must be an array"));
    };
    if (w.value = true, Se(l.fetchSuggestions)) ie(l.fetchSuggestions);
    else {
      const ce = await l.fetchSuggestions(Q, ie);
      Se(ce) && ie(ce);
    }
  }, P = Pn(R, l.debounce), W = (Q) => {
    const ie = !!Q;
    if (n(Jt, Q), n(Ae, Q), T.value = false, g.value || (g.value = ie), !l.triggerOnFocus && !Q) {
      T.value = true, v.value = [];
      return;
    }
    P(Q);
  }, te = (Q) => {
    var ie;
    r.value || (((ie = Q.target) == null ? void 0 : ie.tagName) !== "INPUT" || O.value.includes(document.activeElement)) && (g.value = true);
  }, A = (Q) => {
    n(et, Q);
  }, L = (Q) => {
    var ie;
    if (h) h = false;
    else {
      g.value = true, n("focus", Q);
      const ce = (ie = l.modelValue) != null ? ie : "";
      l.triggerOnFocus && !m && P(String(ce));
    }
  }, F = (Q) => {
    setTimeout(() => {
      var ie;
      if ((ie = d.value) != null && ie.isFocusInsideContent()) {
        h = true;
        return;
      }
      g.value && U(), n("blur", Q);
    });
  }, V = () => {
    g.value = false, n(Ae, ""), n("clear");
  }, B = async () => {
    E.value && p.value >= 0 && p.value < v.value.length ? ee(v.value[p.value]) : l.selectWhenUnmatched && (n("select", { value: l.modelValue }), v.value = [], p.value = -1);
  }, G = (Q) => {
    E.value && (Q.preventDefault(), Q.stopPropagation(), U());
  }, U = () => {
    g.value = false;
  }, ne = () => {
    var Q;
    (Q = u.value) == null || Q.focus();
  }, Z = () => {
    var Q;
    (Q = u.value) == null || Q.blur();
  }, ee = async (Q) => {
    n(Jt, Q[l.valueKey]), n(Ae, Q[l.valueKey]), n("select", Q), v.value = [], p.value = -1;
  }, re = (Q) => {
    if (!E.value || w.value) return;
    if (Q < 0) {
      p.value = -1;
      return;
    }
    Q >= v.value.length && (Q = v.value.length - 1);
    const ie = c.value.querySelector(`.${i.be("suggestion", "wrap")}`), Ie = ie.querySelectorAll(`.${i.be("suggestion", "list")} li`)[Q], me = ie.scrollTop, { offsetTop: se, scrollHeight: ke } = Ie;
    se + ke > me + ie.clientHeight && (ie.scrollTop += ke), se < me && (ie.scrollTop -= ke), p.value = Q, u.value.ref.setAttribute("aria-activedescendant", `${C.value}-item-${p.value}`);
  }, le = Wr(f, () => {
    var Q;
    (Q = d.value) != null && Q.isFocusInsideContent() || E.value && U();
  });
  return It(() => {
    le == null ? void 0 : le();
  }), Xe(() => {
    u.value.ref.setAttribute("role", "textbox"), u.value.ref.setAttribute("aria-autocomplete", "list"), u.value.ref.setAttribute("aria-controls", "id"), u.value.ref.setAttribute("aria-activedescendant", `${C.value}-item-${p.value}`), m = u.value.ref.hasAttribute("readonly");
  }), t({ highlightedIndex: p, activated: g, loading: w, inputRef: u, popperRef: d, suggestions: v, handleSelect: ee, handleKeyEnter: B, focus: ne, blur: Z, close: U, highlight: re, getData: R }), (Q, ie) => (k(), oe(o(rn), { ref_key: "popperRef", ref: d, visible: o(E), placement: Q.placement, "fallback-placements": ["bottom-start", "top-start"], "popper-class": [o(i).e("popper"), Q.popperClass], teleported: Q.teleported, "gpu-acceleration": false, pure: "", "manual-mode": "", effect: "light", trigger: "click", transition: `${o(i).namespace.value}-zoom-in-top`, persistent: "", role: "listbox", onBeforeShow: _, onHide: I }, { content: j(() => [x("div", { ref_key: "regionRef", ref: c, class: $([o(i).b("suggestion"), o(i).is("loading", o(M))]), style: Me({ [Q.fitInputWidth ? "width" : "minWidth"]: b.value, outline: "none" }), role: "region" }, [z(o(el), { id: o(C), tag: "ul", "wrap-class": o(i).be("suggestion", "wrap"), "view-class": o(i).be("suggestion", "list"), role: "listbox" }, { default: j(() => [o(M) ? (k(), D("li", { key: 0 }, [X(Q.$slots, "loading", {}, () => [z(o(Ee), { class: $(o(i).is("loading")) }, { default: j(() => [z(o(Zn))]), _: 1 }, 8, ["class"])])])) : (k(true), D(Pe, { key: 1 }, it(v.value, (ce, Ie) => (k(), D("li", { id: `${o(C)}-item-${Ie}`, key: Ie, class: $({ highlighted: p.value === Ie }), role: "option", "aria-selected": p.value === Ie, onClick: (me) => ee(ce) }, [X(Q.$slots, "default", { item: ce }, () => [at(he(ce[Q.valueKey]), 1)])], 10, ["id", "aria-selected", "onClick"]))), 128))]), _: 3 }, 8, ["id", "wrap-class", "view-class"])], 6)]), default: j(() => [x("div", { ref_key: "listboxRef", ref: f, class: $([o(i).b(), Q.$attrs.class]), style: Me(o(S)), role: "combobox", "aria-haspopup": "listbox", "aria-expanded": o(E), "aria-owns": o(C) }, [z(o(hn), lt({ ref_key: "inputRef", ref: u }, o(a), { clearable: Q.clearable, disabled: o(r), name: Q.name, "model-value": Q.modelValue, "aria-label": Q.ariaLabel, onInput: W, onChange: A, onFocus: L, onBlur: F, onClear: V, onKeydown: [$t(Re((ce) => re(p.value - 1), ["prevent"]), ["up"]), $t(Re((ce) => re(p.value + 1), ["prevent"]), ["down"]), $t(B, ["enter"]), $t(U, ["tab"]), $t(G, ["esc"])], onMousedown: te }), On({ _: 2 }, [Q.$slots.prepend ? { name: "prepend", fn: j(() => [X(Q.$slots, "prepend")]) } : void 0, Q.$slots.append ? { name: "append", fn: j(() => [X(Q.$slots, "append")]) } : void 0, Q.$slots.prefix ? { name: "prefix", fn: j(() => [X(Q.$slots, "prefix")]) } : void 0, Q.$slots.suffix ? { name: "suffix", fn: j(() => [X(Q.$slots, "suffix")]) } : void 0]), 1040, ["clearable", "disabled", "name", "model-value", "aria-label", "onKeydown"])], 14, ["aria-expanded", "aria-owns"])]), _: 3 }, 8, ["visible", "placement", "popper-class", "teleported", "transition"]));
} });
var Tb = ve($b, [["__file", "autocomplete.vue"]]);
const Nb = We(Tb), Ib = pe({ size: { type: [Number, String], values: Qn, default: "", validator: (e) => _e(e) }, shape: { type: String, values: ["circle", "square"], default: "circle" }, icon: { type: St }, src: { type: String, default: "" }, alt: String, srcSet: String, fit: { type: Y(String), default: "cover" } }), _b = { error: (e) => e instanceof Event }, Mb = K({ name: "ElAvatar" }), Ob = K({ ...Mb, props: Ib, emits: _b, setup(e, { emit: t }) {
  const n = e, l = de("avatar"), a = N(false), s = y(() => {
    const { size: c, icon: d, shape: f } = n, m = [l.b()];
    return Be(c) && m.push(l.m(c)), d && m.push(l.m("icon")), f && m.push(l.m(f)), m;
  }), r = y(() => {
    const { size: c } = n;
    return _e(c) ? l.cssVarBlock({ size: At(c) || "" }) : void 0;
  }), i = y(() => ({ objectFit: n.fit }));
  ue(() => n.src, () => a.value = false);
  function u(c) {
    a.value = true, t("error", c);
  }
  return (c, d) => (k(), D("span", { class: $(o(s)), style: Me(o(r)) }, [(c.src || c.srcSet) && !a.value ? (k(), D("img", { key: 0, src: c.src, alt: c.alt, srcset: c.srcSet, style: Me(o(i)), onError: u }, null, 44, ["src", "alt", "srcset"])) : c.icon ? (k(), oe(o(Ee), { key: 1 }, { default: j(() => [(k(), oe(Je(c.icon)))]), _: 1 })) : X(c.$slots, "default", { key: 2 })], 6));
} });
var Pb = ve(Ob, [["__file", "avatar.vue"]]);
const Rb = We(Pb), Lb = { visibilityHeight: { type: Number, default: 200 }, target: { type: String, default: "" }, right: { type: Number, default: 40 }, bottom: { type: Number, default: 40 } }, Bb = { click: (e) => e instanceof MouseEvent }, Db = (e, t, n) => {
  const l = Mt(), a = Mt(), s = N(false), r = () => {
    l.value && (s.value = l.value.scrollTop >= e.visibilityHeight);
  }, i = (c) => {
    var d;
    (d = l.value) == null || d.scrollTo({ top: 0, behavior: "smooth" }), t("click", c);
  }, u = Jc(r, 300, true);
  return Et(a, "scroll", u), Xe(() => {
    var c;
    a.value = document, l.value = document.documentElement, e.target && (l.value = (c = document.querySelector(e.target)) != null ? c : void 0, l.value || Kt(n, `target does not exist: ${e.target}`), a.value = l.value), r();
  }), { visible: s, handleClick: i };
}, Rd = "ElBacktop", Vb = K({ name: Rd }), Ab = K({ ...Vb, props: Lb, emits: Bb, setup(e, { emit: t }) {
  const n = e, l = de("backtop"), { handleClick: a, visible: s } = Db(n, t, Rd), r = y(() => ({ right: `${n.right}px`, bottom: `${n.bottom}px` }));
  return (i, u) => (k(), oe(en, { name: `${o(l).namespace.value}-fade-in` }, { default: j(() => [o(s) ? (k(), D("div", { key: 0, style: Me(o(r)), class: $(o(l).b()), onClick: Re(o(a), ["stop"]) }, [X(i.$slots, "default", {}, () => [z(o(Ee), { class: $(o(l).e("icon")) }, { default: j(() => [z(o(jv))]), _: 1 }, 8, ["class"])])], 14, ["onClick"])) : J("v-if", true)]), _: 3 }, 8, ["name"]));
} });
var Fb = ve(Ab, [["__file", "backtop.vue"]]);
const zb = We(Fb), xb = pe({ value: { type: [String, Number], default: "" }, max: { type: Number, default: 99 }, isDot: Boolean, hidden: Boolean, type: { type: String, values: ["primary", "success", "warning", "info", "danger"], default: "danger" }, showZero: { type: Boolean, default: true }, color: String, badgeStyle: { type: Y([String, Object, Array]) }, offset: { type: Y(Array), default: [0, 0] }, badgeClass: { type: String } }), Hb = K({ name: "ElBadge" }), Kb = K({ ...Hb, props: xb, setup(e, { expose: t }) {
  const n = e, l = de("badge"), a = y(() => n.isDot ? "" : _e(n.value) && _e(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = y(() => {
    var r, i, u, c, d;
    return [{ backgroundColor: n.color, marginRight: At(-((i = (r = n.offset) == null ? void 0 : r[0]) != null ? i : 0)), marginTop: At((c = (u = n.offset) == null ? void 0 : u[1]) != null ? c : 0) }, (d = n.badgeStyle) != null ? d : {}];
  });
  return t({ content: a }), (r, i) => (k(), D("div", { class: $(o(l).b()) }, [X(r.$slots, "default"), z(en, { name: `${o(l).namespace.value}-zoom-in-center`, persisted: "" }, { default: j(() => [Ye(x("sup", { class: $([o(l).e("content"), o(l).em("content", r.type), o(l).is("fixed", !!r.$slots.default), o(l).is("dot", r.isDot), o(l).is("hide-zero", !r.showZero && n.value === 0), r.badgeClass]), style: Me(o(s)) }, [X(r.$slots, "content", { value: o(a) }, () => [at(he(o(a)), 1)])], 6), [[pt, !r.hidden && (o(a) || r.isDot || r.$slots.content)]])]), _: 3 }, 8, ["name"])], 2));
} });
var Wb = ve(Kb, [["__file", "badge.vue"]]);
const Ld = We(Wb), Bd = Symbol("breadcrumbKey"), jb = pe({ separator: { type: String, default: "/" }, separatorIcon: { type: St } }), Ub = K({ name: "ElBreadcrumb" }), Yb = K({ ...Ub, props: jb, setup(e) {
  const t = e, { t: n } = ft(), l = de("breadcrumb"), a = N();
  return ut(Bd, t), Xe(() => {
    const s = a.value.querySelectorAll(`.${l.e("item")}`);
    s.length && s[s.length - 1].setAttribute("aria-current", "page");
  }), (s, r) => (k(), D("div", { ref_key: "breadcrumb", ref: a, class: $(o(l).b()), "aria-label": o(n)("el.breadcrumb.label"), role: "navigation" }, [X(s.$slots, "default")], 10, ["aria-label"]));
} });
var qb = ve(Yb, [["__file", "breadcrumb.vue"]]);
const Gb = pe({ to: { type: Y([String, Object]), default: "" }, replace: Boolean }), Xb = K({ name: "ElBreadcrumbItem" }), Zb = K({ ...Xb, props: Gb, setup(e) {
  const t = e, n = tt(), l = we(Bd, void 0), a = de("breadcrumb"), s = n.appContext.config.globalProperties.$router, r = N(), i = () => {
    !t.to || !s || (t.replace ? s.replace(t.to) : s.push(t.to));
  };
  return (u, c) => {
    var d, f;
    return k(), D("span", { class: $(o(a).e("item")) }, [x("span", { ref_key: "link", ref: r, class: $([o(a).e("inner"), o(a).is("link", !!u.to)]), role: "link", onClick: i }, [X(u.$slots, "default")], 2), (d = o(l)) != null && d.separatorIcon ? (k(), oe(o(Ee), { key: 0, class: $(o(a).e("separator")) }, { default: j(() => [(k(), oe(Je(o(l).separatorIcon)))]), _: 1 }, 8, ["class"])) : (k(), D("span", { key: 1, class: $(o(a).e("separator")), role: "presentation" }, he((f = o(l)) == null ? void 0 : f.separator), 3))], 2);
  };
} });
var Dd = ve(Zb, [["__file", "breadcrumb-item.vue"]]);
const Jb = We(qb, { BreadcrumbItem: Dd }), Qb = Vt(Dd), Vd = Symbol("buttonGroupContextKey"), wl = ({ from: e, replacement: t, scope: n, version: l, ref: a, type: s = "API" }, r) => {
  ue(() => o(r), (i) => {
  }, { immediate: true });
}, ey = (e, t) => {
  wl({ from: "type.text", replacement: "link", version: "3.0.0", scope: "props", ref: "https://element-plus.org/en-US/component/button.html#button-attributes" }, y(() => e.type === "text"));
  const n = we(Vd, void 0), l = rs("button"), { form: a } = un(), s = Ht(y(() => n == null ? void 0 : n.size)), r = cn(), i = N(), u = Yt(), c = y(() => e.type || (n == null ? void 0 : n.type) || ""), d = y(() => {
    var v, p, b;
    return (b = (p = e.autoInsertSpace) != null ? p : (v = l.value) == null ? void 0 : v.autoInsertSpace) != null ? b : false;
  }), f = y(() => e.tag === "button" ? { ariaDisabled: r.value || e.loading, disabled: r.value || e.loading, autofocus: e.autofocus, type: e.nativeType } : {}), m = y(() => {
    var v;
    const p = (v = u.default) == null ? void 0 : v.call(u);
    if (d.value && (p == null ? void 0 : p.length) === 1) {
      const b = p[0];
      if ((b == null ? void 0 : b.type) === Rc) {
        const g = b.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(g.trim());
      }
    }
    return false;
  });
  return { _disabled: r, _size: s, _type: c, _ref: i, _props: f, shouldAddSpace: m, handleClick: (v) => {
    if (r.value || e.loading) {
      v.stopPropagation();
      return;
    }
    e.nativeType === "reset" && (a == null ? void 0 : a.resetFields()), t("click", v);
  } };
}, Zs = ["default", "primary", "success", "warning", "info", "danger", "text", ""], ty = ["button", "submit", "reset"], Js = pe({ size: Wt, disabled: Boolean, type: { type: String, values: Zs, default: "" }, icon: { type: St }, nativeType: { type: String, values: ty, default: "button" }, loading: Boolean, loadingIcon: { type: St, default: () => Zn }, plain: Boolean, text: Boolean, link: Boolean, bg: Boolean, autofocus: Boolean, round: Boolean, circle: Boolean, color: String, dark: Boolean, autoInsertSpace: { type: Boolean, default: void 0 }, tag: { type: Y([String, Object]), default: "button" } }), ny = { click: (e) => e instanceof MouseEvent };
function ml(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function ly(e) {
  const t = cn(), n = de("button");
  return y(() => {
    let l = {}, a = e.color;
    if (a) {
      const s = a.match(/var\((.*?)\)/);
      s && (a = window.getComputedStyle(window.document.documentElement).getPropertyValue(s[1]));
      const r = new Wc(a), i = e.dark ? r.tint(20).toString() : ml(r, 20);
      if (e.plain) l = n.cssVarBlock({ "bg-color": e.dark ? ml(r, 90) : r.tint(90).toString(), "text-color": a, "border-color": e.dark ? ml(r, 50) : r.tint(50).toString(), "hover-text-color": `var(${n.cssVarName("color-white")})`, "hover-bg-color": a, "hover-border-color": a, "active-bg-color": i, "active-text-color": `var(${n.cssVarName("color-white")})`, "active-border-color": i }), t.value && (l[n.cssVarBlockName("disabled-bg-color")] = e.dark ? ml(r, 90) : r.tint(90).toString(), l[n.cssVarBlockName("disabled-text-color")] = e.dark ? ml(r, 50) : r.tint(50).toString(), l[n.cssVarBlockName("disabled-border-color")] = e.dark ? ml(r, 80) : r.tint(80).toString());
      else {
        const u = e.dark ? ml(r, 30) : r.tint(30).toString(), c = r.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (l = n.cssVarBlock({ "bg-color": a, "text-color": c, "border-color": a, "hover-bg-color": u, "hover-text-color": c, "hover-border-color": u, "active-bg-color": i, "active-border-color": i }), t.value) {
          const d = e.dark ? ml(r, 50) : r.tint(50).toString();
          l[n.cssVarBlockName("disabled-bg-color")] = d, l[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, l[n.cssVarBlockName("disabled-border-color")] = d;
        }
      }
    }
    return l;
  });
}
const oy = K({ name: "ElButton" }), ay = K({ ...oy, props: Js, emits: ny, setup(e, { expose: t, emit: n }) {
  const l = e, a = ly(l), s = de("button"), { _ref: r, _size: i, _type: u, _disabled: c, _props: d, shouldAddSpace: f, handleClick: m } = ey(l, n), h = y(() => [s.b(), s.m(u.value), s.m(i.value), s.is("disabled", c.value), s.is("loading", l.loading), s.is("plain", l.plain), s.is("round", l.round), s.is("circle", l.circle), s.is("text", l.text), s.is("link", l.link), s.is("has-bg", l.bg)]);
  return t({ ref: r, size: i, type: u, disabled: c, shouldAddSpace: f }), (v, p) => (k(), oe(Je(v.tag), lt({ ref_key: "_ref", ref: r }, o(d), { class: o(h), style: o(a), onClick: o(m) }), { default: j(() => [v.loading ? (k(), D(Pe, { key: 0 }, [v.$slots.loading ? X(v.$slots, "loading", { key: 0 }) : (k(), oe(o(Ee), { key: 1, class: $(o(s).is("loading")) }, { default: j(() => [(k(), oe(Je(v.loadingIcon)))]), _: 1 }, 8, ["class"]))], 64)) : v.icon || v.$slots.icon ? (k(), oe(o(Ee), { key: 1 }, { default: j(() => [v.icon ? (k(), oe(Je(v.icon), { key: 0 })) : X(v.$slots, "icon", { key: 1 })]), _: 3 })) : J("v-if", true), v.$slots.default ? (k(), D("span", { key: 2, class: $({ [o(s).em("text", "expand")]: o(f) }) }, [X(v.$slots, "default")], 2)) : J("v-if", true)]), _: 3 }, 16, ["class", "style", "onClick"]));
} });
var sy = ve(ay, [["__file", "button.vue"]]);
const ry = { size: Js.size, type: Js.type }, iy = K({ name: "ElButtonGroup" }), uy = K({ ...iy, props: ry, setup(e) {
  const t = e;
  ut(Vd, Ct({ size: yt(t, "size"), type: yt(t, "type") }));
  const n = de("button");
  return (l, a) => (k(), D("div", { class: $(o(n).b("group")) }, [X(l.$slots, "default")], 2));
} });
var Ad = ve(uy, [["__file", "button-group.vue"]]);
const Qt = We(sy, { ButtonGroup: Ad }), Fd = Vt(Ad), Ms = (e, t) => [e > 0 ? e - 1 : void 0, e, e < t ? e + 1 : void 0], Sl = (e) => Array.from(Array.from({ length: e }).keys()), zd = (e) => e.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim(), xd = (e) => e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim(), Iu = function(e, t) {
  const n = mo(e), l = mo(t);
  return n && l ? e.getTime() === t.getTime() : !n && !l ? e === t : false;
}, _u = function(e, t) {
  const n = Se(e), l = Se(t);
  return n && l ? e.length !== t.length ? false : e.every((a, s) => Iu(a, t[s])) : !n && !l ? Iu(e, t) : false;
}, Mu = function(e, t, n) {
  const l = _n(t) || t === "x" ? Ke(e).locale(n) : Ke(e, t).locale(n);
  return l.isValid() ? l : void 0;
}, Ou = function(e, t, n) {
  return _n(t) ? e : t === "x" ? +e : Ke(e).locale(n).format(t);
}, Os = (e, t) => {
  var n;
  const l = [], a = t == null ? void 0 : t();
  for (let s = 0; s < e; s++) l.push((n = a == null ? void 0 : a.includes(s)) != null ? n : false);
  return l;
}, ma = (e) => Se(e) ? e.map((t) => t.toDate()) : e.toDate(), cy = (e, t) => {
  const n = e.subtract(1, "month").endOf("month").date();
  return Sl(t).map((l, a) => n - (t - a - 1));
}, dy = (e) => {
  const t = e.daysInMonth();
  return Sl(t).map((n, l) => l + 1);
}, fy = (e) => Sl(e.length / 7).map((t) => {
  const n = t * 7;
  return e.slice(n, n + 7);
}), py = pe({ selectedDay: { type: Y(Object) }, range: { type: Y(Array) }, date: { type: Y(Object), required: true }, hideHeader: { type: Boolean } }), vy = { pick: (e) => gt(e) }, hy = ["year", "years", "month", "months", "date", "dates", "week", "datetime", "datetimerange", "daterange", "monthrange", "yearrange"], Ps = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], my = (e, t) => {
  Ke.extend(jc);
  const n = Ke.localeData().firstDayOfWeek(), { t: l, lang: a } = ft(), s = Ke().locale(a.value), r = y(() => !!e.range && !!e.range.length), i = y(() => {
    let m = [];
    if (r.value) {
      const [h, v] = e.range, p = Sl(v.date() - h.date() + 1).map((T) => ({ text: h.date() + T, type: "current" }));
      let b = p.length % 7;
      b = b === 0 ? 0 : 7 - b;
      const g = Sl(b).map((T, w) => ({ text: w + 1, type: "next" }));
      m = p.concat(g);
    } else {
      const h = e.date.startOf("month").day(), v = cy(e.date, (h - n + 7) % 7).map((T) => ({ text: T, type: "prev" })), p = dy(e.date).map((T) => ({ text: T, type: "current" }));
      m = [...v, ...p];
      const b = 7 - (m.length % 7 || 7), g = Sl(b).map((T, w) => ({ text: w + 1, type: "next" }));
      m = m.concat(g);
    }
    return fy(m);
  }), u = y(() => {
    const m = n;
    return m === 0 ? Ps.map((h) => l(`el.datepicker.weeks.${h}`)) : Ps.slice(m).concat(Ps.slice(0, m)).map((h) => l(`el.datepicker.weeks.${h}`));
  }), c = (m, h) => {
    switch (h) {
      case "prev":
        return e.date.startOf("month").subtract(1, "month").date(m);
      case "next":
        return e.date.startOf("month").add(1, "month").date(m);
      case "current":
        return e.date.date(m);
    }
  };
  return { now: s, isInRange: r, rows: i, weekDays: u, getFormattedDate: c, handlePickDay: ({ text: m, type: h }) => {
    const v = c(m, h);
    t("pick", v);
  }, getSlotData: ({ text: m, type: h }) => {
    const v = c(m, h);
    return { isSelected: v.isSame(e.selectedDay), type: `${h}-month`, day: v.format("YYYY-MM-DD"), date: v.toDate() };
  } };
}, gy = K({ name: "DateTable" }), by = K({ ...gy, props: py, emits: vy, setup(e, { expose: t, emit: n }) {
  const l = e, { isInRange: a, now: s, rows: r, weekDays: i, getFormattedDate: u, handlePickDay: c, getSlotData: d } = my(l, n), f = de("calendar-table"), m = de("calendar-day"), h = ({ text: v, type: p }) => {
    const b = [p];
    if (p === "current") {
      const g = u(v, p);
      g.isSame(l.selectedDay, "day") && b.push(m.is("selected")), g.isSame(s, "day") && b.push(m.is("today"));
    }
    return b;
  };
  return t({ getFormattedDate: u }), (v, p) => (k(), D("table", { class: $([o(f).b(), o(f).is("range", o(a))]), cellspacing: "0", cellpadding: "0" }, [v.hideHeader ? J("v-if", true) : (k(), D("thead", { key: 0 }, [x("tr", null, [(k(true), D(Pe, null, it(o(i), (b) => (k(), D("th", { key: b, scope: "col" }, he(b), 1))), 128))])])), x("tbody", null, [(k(true), D(Pe, null, it(o(r), (b, g) => (k(), D("tr", { key: g, class: $({ [o(f).e("row")]: true, [o(f).em("row", "hide-border")]: g === 0 && v.hideHeader }) }, [(k(true), D(Pe, null, it(b, (T, w) => (k(), D("td", { key: w, class: $(h(T)), onClick: (C) => o(c)(T) }, [x("div", { class: $(o(m).b()) }, [X(v.$slots, "date-cell", { data: o(d)(T) }, () => [x("span", null, he(T.text), 1)])], 2)], 10, ["onClick"]))), 128))], 2))), 128))])], 2));
} });
var Pu = ve(by, [["__file", "date-table.vue"]]);
const yy = (e, t) => {
  const n = e.endOf("month"), l = t.startOf("month"), s = n.isSame(l, "week") ? l.add(1, "week") : l;
  return [[e, n], [s.startOf("week"), t]];
}, Cy = (e, t) => {
  const n = e.endOf("month"), l = e.add(1, "month").startOf("month"), a = n.isSame(l, "week") ? l.add(1, "week") : l, s = a.endOf("month"), r = t.startOf("month"), i = s.isSame(r, "week") ? r.add(1, "week") : r;
  return [[e, n], [a.startOf("week"), s], [i.startOf("week"), t]];
}, wy = (e, t, n) => {
  const { lang: l } = ft(), a = N(), s = Ke().locale(l.value), r = y({ get() {
    return e.modelValue ? u.value : a.value;
  }, set(b) {
    if (!b) return;
    a.value = b;
    const g = b.toDate();
    t(Jt, g), t(Ae, g);
  } }), i = y(() => {
    if (!e.range || !Se(e.range) || e.range.length !== 2 || e.range.some((w) => !mo(w))) return [];
    const b = e.range.map((w) => Ke(w).locale(l.value)), [g, T] = b;
    return g.isAfter(T) ? [] : g.isSame(T, "month") ? h(g, T) : g.add(1, "month").month() !== T.month() ? [] : h(g, T);
  }), u = y(() => e.modelValue ? Ke(e.modelValue).locale(l.value) : r.value || (i.value.length ? i.value[0][0] : s)), c = y(() => u.value.subtract(1, "month").date(1)), d = y(() => u.value.add(1, "month").date(1)), f = y(() => u.value.subtract(1, "year").date(1)), m = y(() => u.value.add(1, "year").date(1)), h = (b, g) => {
    const T = b.startOf("week"), w = g.endOf("week"), C = T.get("month"), S = w.get("month");
    return C === S ? [[T, w]] : (C + 1) % 12 === S ? yy(T, w) : C + 2 === S || (C + 1) % 11 === S ? Cy(T, w) : [];
  }, v = (b) => {
    r.value = b;
  };
  return { calculateValidatedDateRange: h, date: u, realSelectedDay: r, pickDay: v, selectDate: (b) => {
    const T = { "prev-month": c.value, "next-month": d.value, "prev-year": f.value, "next-year": m.value, today: s }[b];
    T.isSame(u.value, "day") || v(T);
  }, validatedRange: i };
}, Sy = (e) => Se(e) && e.length === 2 && e.every((t) => mo(t)), ky = pe({ modelValue: { type: Date }, range: { type: Y(Array), validator: Sy } }), Ey = { [Ae]: (e) => mo(e), [Jt]: (e) => mo(e) }, $y = "ElCalendar", Ty = K({ name: $y }), Ny = K({ ...Ty, props: ky, emits: Ey, setup(e, { expose: t, emit: n }) {
  const l = e, a = de("calendar"), { calculateValidatedDateRange: s, date: r, pickDay: i, realSelectedDay: u, selectDate: c, validatedRange: d } = wy(l, n), { t: f } = ft(), m = y(() => {
    const h = `el.datepicker.month${r.value.format("M")}`;
    return `${r.value.year()} ${f("el.datepicker.year")} ${f(h)}`;
  });
  return t({ selectedDay: u, pickDay: i, selectDate: c, calculateValidatedDateRange: s }), (h, v) => (k(), D("div", { class: $(o(a).b()) }, [x("div", { class: $(o(a).e("header")) }, [X(h.$slots, "header", { date: o(m) }, () => [x("div", { class: $(o(a).e("title")) }, he(o(m)), 3), o(d).length === 0 ? (k(), D("div", { key: 0, class: $(o(a).e("button-group")) }, [z(o(Fd), null, { default: j(() => [z(o(Qt), { size: "small", onClick: (p) => o(c)("prev-month") }, { default: j(() => [at(he(o(f)("el.datepicker.prevMonth")), 1)]), _: 1 }, 8, ["onClick"]), z(o(Qt), { size: "small", onClick: (p) => o(c)("today") }, { default: j(() => [at(he(o(f)("el.datepicker.today")), 1)]), _: 1 }, 8, ["onClick"]), z(o(Qt), { size: "small", onClick: (p) => o(c)("next-month") }, { default: j(() => [at(he(o(f)("el.datepicker.nextMonth")), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 })], 2)) : J("v-if", true)])], 2), o(d).length === 0 ? (k(), D("div", { key: 0, class: $(o(a).e("body")) }, [z(Pu, { date: o(r), "selected-day": o(u), onPick: o(i) }, On({ _: 2 }, [h.$slots["date-cell"] ? { name: "date-cell", fn: j((p) => [X(h.$slots, "date-cell", Mn(sl(p)))]) } : void 0]), 1032, ["date", "selected-day", "onPick"])], 2)) : (k(), D("div", { key: 1, class: $(o(a).e("body")) }, [(k(true), D(Pe, null, it(o(d), (p, b) => (k(), oe(Pu, { key: b, date: p[0], "selected-day": o(u), range: p, "hide-header": b !== 0, onPick: o(i) }, On({ _: 2 }, [h.$slots["date-cell"] ? { name: "date-cell", fn: j((g) => [X(h.$slots, "date-cell", Mn(sl(g)))]) } : void 0]), 1032, ["date", "selected-day", "range", "hide-header", "onPick"]))), 128))], 2))], 2));
} });
var Iy = ve(Ny, [["__file", "calendar.vue"]]);
const _y = We(Iy), My = pe({ header: { type: String, default: "" }, footer: { type: String, default: "" }, bodyStyle: { type: Y([String, Object, Array]), default: "" }, headerClass: String, bodyClass: String, footerClass: String, shadow: { type: String, values: ["always", "hover", "never"], default: "always" } }), Oy = K({ name: "ElCard" }), Py = K({ ...Oy, props: My, setup(e) {
  const t = de("card");
  return (n, l) => (k(), D("div", { class: $([o(t).b(), o(t).is(`${n.shadow}-shadow`)]) }, [n.$slots.header || n.header ? (k(), D("div", { key: 0, class: $([o(t).e("header"), n.headerClass]) }, [X(n.$slots, "header", {}, () => [at(he(n.header), 1)])], 2)) : J("v-if", true), x("div", { class: $([o(t).e("body"), n.bodyClass]), style: Me(n.bodyStyle) }, [X(n.$slots, "default")], 6), n.$slots.footer || n.footer ? (k(), D("div", { key: 1, class: $([o(t).e("footer"), n.footerClass]) }, [X(n.$slots, "footer", {}, () => [at(he(n.footer), 1)])], 2)) : J("v-if", true)], 2));
} });
var Ry = ve(Py, [["__file", "card.vue"]]);
const Ly = We(Ry), By = pe({ initialIndex: { type: Number, default: 0 }, height: { type: String, default: "" }, trigger: { type: String, values: ["hover", "click"], default: "hover" }, autoplay: { type: Boolean, default: true }, interval: { type: Number, default: 3e3 }, indicatorPosition: { type: String, values: ["", "none", "outside"], default: "" }, arrow: { type: String, values: ["always", "hover", "never"], default: "hover" }, type: { type: String, values: ["", "card"], default: "" }, cardScale: { type: Number, default: 0.83 }, loop: { type: Boolean, default: true }, direction: { type: String, values: ["horizontal", "vertical"], default: "horizontal" }, pauseOnHover: { type: Boolean, default: true }, motionBlur: Boolean }), Dy = { change: (e, t) => [e, t].every(_e) }, Hd = Symbol("carouselContextKey"), Qs = "ElCarouselItem";
var Ln = ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(Ln || {});
function er(e) {
  return Dt(e) && e.type === Pe;
}
function Vy(e) {
  return Dt(e) && e.type === ts;
}
function Ay(e) {
  return Dt(e) && !er(e) && !Vy(e);
}
const Fy = (e) => {
  if (!Dt(e)) return {};
  const t = e.props || {}, n = (Dt(e.type) ? e.type.props : void 0) || {}, l = {};
  return Object.keys(n).forEach((a) => {
    sn(n[a], "default") && (l[a] = n[a].default);
  }), Object.keys(t).forEach((a) => {
    l[Br(a)] = t[a];
  }), l;
}, zy = (e) => {
  if (!Se(e) || e.length > 1) throw new Error("expect to receive a single Vue element child");
  return e[0];
}, al = (e) => {
  const t = Se(e) ? e : [e], n = [];
  return t.forEach((l) => {
    var a;
    Se(l) ? n.push(...al(l)) : Dt(l) && ((a = l.component) != null && a.subTree) ? n.push(l, ...al(l.component.subTree)) : Dt(l) && Se(l.children) ? n.push(...al(l.children)) : Dt(l) && l.shapeFlag === 2 ? n.push(...al(l.type())) : n.push(l);
  }), n;
}, xy = (e, t, n) => al(e.subTree).filter((s) => {
  var r;
  return Dt(s) && ((r = s.type) == null ? void 0 : r.name) === t && !!s.component;
}).map((s) => s.component.uid).map((s) => n[s]).filter((s) => !!s), li = (e, t) => {
  const n = {}, l = Mt([]);
  return { children: l, addChild: (r) => {
    n[r.uid] = r, l.value = xy(e, t, n);
  }, removeChild: (r) => {
    delete n[r], l.value = l.value.filter((i) => i.uid !== r);
  } };
}, Ru = 300, Hy = (e, t, n) => {
  const { children: l, addChild: a, removeChild: s } = li(tt(), Qs), r = Yt(), i = N(-1), u = N(null), c = N(false), d = N(), f = N(0), m = N(true), h = N(true), v = N(false), p = y(() => e.arrow !== "never" && !o(T)), b = y(() => l.value.some((le) => le.props.label.toString().length > 0)), g = y(() => e.type === "card"), T = y(() => e.direction === "vertical"), w = y(() => e.height !== "auto" ? { height: e.height } : { height: `${f.value}px`, overflow: "hidden" }), C = zl((le) => {
    I(le);
  }, Ru, { trailing: true }), S = zl((le) => {
    B(le);
  }, Ru), E = (le) => m.value ? i.value <= 1 ? le <= 1 : le > 1 : true;
  function M() {
    u.value && (clearInterval(u.value), u.value = null);
  }
  function O() {
    e.interval <= 0 || !e.autoplay || u.value || (u.value = setInterval(() => _(), e.interval));
  }
  const _ = () => {
    h.value || (v.value = true), h.value = false, i.value < l.value.length - 1 ? i.value = i.value + 1 : e.loop ? i.value = 0 : v.value = false;
  };
  function I(le) {
    if (h.value || (v.value = true), h.value = false, Be(le)) {
      const ce = l.value.filter((Ie) => Ie.props.name === le);
      ce.length > 0 && (le = l.value.indexOf(ce[0]));
    }
    if (le = Number(le), Number.isNaN(le) || le !== Math.floor(le)) return;
    const Q = l.value.length, ie = i.value;
    le < 0 ? i.value = e.loop ? Q - 1 : 0 : le >= Q ? i.value = e.loop ? 0 : Q - 1 : i.value = le, ie === i.value && R(ie), ne();
  }
  function R(le) {
    l.value.forEach((Q, ie) => {
      Q.translateItem(ie, i.value, le);
    });
  }
  function P(le, Q) {
    var ie, ce, Ie, me;
    const se = o(l), ke = se.length;
    if (ke === 0 || !le.states.inStage) return false;
    const De = Q + 1, qe = Q - 1, je = ke - 1, Le = se[je].states.active, Ne = se[0].states.active, Te = (ce = (ie = se[De]) == null ? void 0 : ie.states) == null ? void 0 : ce.active, Ge = (me = (Ie = se[qe]) == null ? void 0 : Ie.states) == null ? void 0 : me.active;
    return Q === je && Ne || Te ? "left" : Q === 0 && Le || Ge ? "right" : false;
  }
  function W() {
    c.value = true, e.pauseOnHover && M();
  }
  function te() {
    c.value = false, O();
  }
  function A() {
    v.value = false;
  }
  function L(le) {
    o(T) || l.value.forEach((Q, ie) => {
      le === P(Q, ie) && (Q.states.hover = true);
    });
  }
  function F() {
    o(T) || l.value.forEach((le) => {
      le.states.hover = false;
    });
  }
  function V(le) {
    le !== i.value && (h.value || (v.value = true)), i.value = le;
  }
  function B(le) {
    e.trigger === "hover" && le !== i.value && (i.value = le, h.value || (v.value = true));
  }
  function G() {
    I(i.value - 1);
  }
  function U() {
    I(i.value + 1);
  }
  function ne() {
    M(), e.pauseOnHover || O();
  }
  function Z(le) {
    e.height === "auto" && (f.value = le);
  }
  function ee() {
    var le;
    const Q = (le = r.default) == null ? void 0 : le.call(r);
    if (!Q) return null;
    const ce = al(Q).filter((Ie) => Dt(Ie) && Ie.type.name === Qs);
    return (ce == null ? void 0 : ce.length) === 2 && e.loop && !g.value ? (m.value = true, ce) : (m.value = false, null);
  }
  ue(() => i.value, (le, Q) => {
    R(Q), m.value && (le = le % 2, Q = Q % 2), Q > -1 && t(et, le, Q);
  }), ue(() => e.autoplay, (le) => {
    le ? O() : M();
  }), ue(() => e.loop, () => {
    I(i.value);
  }), ue(() => e.interval, () => {
    ne();
  });
  const re = Mt();
  return Xe(() => {
    ue(() => l.value, () => {
      l.value.length > 0 && I(e.initialIndex);
    }, { immediate: true }), re.value = Lt(d.value, () => {
      R();
    }), O();
  }), It(() => {
    M(), d.value && re.value && re.value.stop();
  }), ut(Hd, { root: d, isCardType: g, isVertical: T, items: l, loop: e.loop, cardScale: e.cardScale, addItem: a, removeItem: s, setActiveItem: I, setContainerHeight: Z }), { root: d, activeIndex: i, arrowDisplay: p, hasLabel: b, hover: c, isCardType: g, isTransitioning: v, items: l, isVertical: T, containerStyle: w, isItemsTwoLength: m, handleButtonEnter: L, handleTransitionEnd: A, handleButtonLeave: F, handleIndicatorClick: V, handleMouseEnter: W, handleMouseLeave: te, setActiveItem: I, prev: G, next: U, PlaceholderItem: ee, isTwoLengthShow: E, throttledArrowClick: C, throttledIndicatorHover: S };
}, Ky = "ElCarousel", Wy = K({ name: Ky }), jy = K({ ...Wy, props: By, emits: Dy, setup(e, { expose: t, emit: n }) {
  const l = e, { root: a, activeIndex: s, arrowDisplay: r, hasLabel: i, hover: u, isCardType: c, items: d, isVertical: f, containerStyle: m, handleButtonEnter: h, handleButtonLeave: v, isTransitioning: p, handleIndicatorClick: b, handleMouseEnter: g, handleMouseLeave: T, handleTransitionEnd: w, setActiveItem: C, prev: S, next: E, PlaceholderItem: M, isTwoLengthShow: O, throttledArrowClick: _, throttledIndicatorHover: I } = Hy(l, n), R = de("carousel"), { t: P } = ft(), W = y(() => {
    const L = [R.b(), R.m(l.direction)];
    return o(c) && L.push(R.m("card")), L;
  }), te = y(() => {
    const L = [R.e("container")];
    return l.motionBlur && o(p) && d.value.length > 1 && L.push(o(f) ? `${R.namespace.value}-transitioning-vertical` : `${R.namespace.value}-transitioning`), L;
  }), A = y(() => {
    const L = [R.e("indicators"), R.em("indicators", l.direction)];
    return o(i) && L.push(R.em("indicators", "labels")), l.indicatorPosition === "outside" && L.push(R.em("indicators", "outside")), o(f) && L.push(R.em("indicators", "right")), L;
  });
  return t({ activeIndex: s, setActiveItem: C, prev: S, next: E }), (L, F) => (k(), D("div", { ref_key: "root", ref: a, class: $(o(W)), onMouseenter: Re(o(g), ["stop"]), onMouseleave: Re(o(T), ["stop"]) }, [o(r) ? (k(), oe(en, { key: 0, name: "carousel-arrow-left", persisted: "" }, { default: j(() => [Ye(x("button", { type: "button", class: $([o(R).e("arrow"), o(R).em("arrow", "left")]), "aria-label": o(P)("el.carousel.leftArrow"), onMouseenter: (V) => o(h)("left"), onMouseleave: o(v), onClick: Re((V) => o(_)(o(s) - 1), ["stop"]) }, [z(o(Ee), null, { default: j(() => [z(o(El))]), _: 1 })], 42, ["aria-label", "onMouseenter", "onMouseleave", "onClick"]), [[pt, (L.arrow === "always" || o(u)) && (l.loop || o(s) > 0)]])]), _: 1 })) : J("v-if", true), o(r) ? (k(), oe(en, { key: 1, name: "carousel-arrow-right", persisted: "" }, { default: j(() => [Ye(x("button", { type: "button", class: $([o(R).e("arrow"), o(R).em("arrow", "right")]), "aria-label": o(P)("el.carousel.rightArrow"), onMouseenter: (V) => o(h)("right"), onMouseleave: o(v), onClick: Re((V) => o(_)(o(s) + 1), ["stop"]) }, [z(o(Ee), null, { default: j(() => [z(o(kn))]), _: 1 })], 42, ["aria-label", "onMouseenter", "onMouseleave", "onClick"]), [[pt, (L.arrow === "always" || o(u)) && (l.loop || o(s) < o(d).length - 1)]])]), _: 1 })) : J("v-if", true), x("div", { class: $(o(te)), style: Me(o(m)), onTransitionend: o(w) }, [z(o(M)), X(L.$slots, "default")], 46, ["onTransitionend"]), L.indicatorPosition !== "none" ? (k(), D("ul", { key: 2, class: $(o(A)) }, [(k(true), D(Pe, null, it(o(d), (V, B) => Ye((k(), D("li", { key: B, class: $([o(R).e("indicator"), o(R).em("indicator", L.direction), o(R).is("active", B === o(s))]), onMouseenter: (G) => o(I)(B), onClick: Re((G) => o(b)(B), ["stop"]) }, [x("button", { class: $(o(R).e("button")), "aria-label": o(P)("el.carousel.indicator", { index: B + 1 }) }, [o(i) ? (k(), D("span", { key: 0 }, he(V.props.label), 1)) : J("v-if", true)], 10, ["aria-label"])], 42, ["onMouseenter", "onClick"])), [[pt, o(O)(B)]])), 128))], 2)) : J("v-if", true), l.motionBlur ? (k(), D("svg", { key: 3, xmlns: "http://www.w3.org/2000/svg", version: "1.1", style: { display: "none" } }, [x("defs", null, [x("filter", { id: "elCarouselHorizontal" }, [x("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "12,0" })]), x("filter", { id: "elCarouselVertical" }, [x("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "0,10" })])])])) : J("v-if", true)], 42, ["onMouseenter", "onMouseleave"]));
} });
var Uy = ve(jy, [["__file", "carousel.vue"]]);
const Yy = pe({ name: { type: String, default: "" }, label: { type: [String, Number], default: "" } }), qy = (e) => {
  const t = we(Hd), n = tt(), l = N(), a = N(false), s = N(0), r = N(1), i = N(false), u = N(false), c = N(false), d = N(false), { isCardType: f, isVertical: m, cardScale: h } = t;
  function v(w, C, S) {
    const E = S - 1, M = C - 1, O = C + 1, _ = S / 2;
    return C === 0 && w === E ? -1 : C === E && w === 0 ? S : w < M && C - w >= _ ? S + 1 : w > O && w - C >= _ ? -2 : w;
  }
  function p(w, C) {
    var S, E;
    const M = o(m) ? ((S = t.root.value) == null ? void 0 : S.offsetHeight) || 0 : ((E = t.root.value) == null ? void 0 : E.offsetWidth) || 0;
    return c.value ? M * ((2 - h) * (w - C) + 1) / 4 : w < C ? -(1 + h) * M / 4 : (3 + h) * M / 4;
  }
  function b(w, C, S) {
    const E = t.root.value;
    return E ? ((S ? E.offsetHeight : E.offsetWidth) || 0) * (w - C) : 0;
  }
  const g = (w, C, S) => {
    var E;
    const M = o(f), O = (E = t.items.value.length) != null ? E : Number.NaN, _ = w === C;
    !M && !vt(S) && (d.value = _ || w === S), !_ && O > 2 && t.loop && (w = v(w, C, O));
    const I = o(m);
    i.value = _, M ? (c.value = Math.round(Math.abs(w - C)) <= 1, s.value = p(w, C), r.value = o(i) ? 1 : h) : s.value = b(w, C, I), u.value = true, _ && l.value && t.setContainerHeight(l.value.offsetHeight);
  };
  function T() {
    if (t && o(f)) {
      const w = t.items.value.findIndex(({ uid: C }) => C === n.uid);
      t.setActiveItem(w);
    }
  }
  return Xe(() => {
    t.addItem({ props: e, states: Ct({ hover: a, translate: s, scale: r, active: i, ready: u, inStage: c, animating: d }), uid: n.uid, translateItem: g });
  }), To(() => {
    t.removeItem(n.uid);
  }), { carouselItemRef: l, active: i, animating: d, hover: a, inStage: c, isVertical: m, translate: s, isCardType: f, scale: r, ready: u, handleItemClick: T };
}, Gy = K({ name: Qs }), Xy = K({ ...Gy, props: Yy, setup(e) {
  const t = e, n = de("carousel"), { carouselItemRef: l, active: a, animating: s, hover: r, inStage: i, isVertical: u, translate: c, isCardType: d, scale: f, ready: m, handleItemClick: h } = qy(t), v = y(() => [n.e("item"), n.is("active", a.value), n.is("in-stage", i.value), n.is("hover", r.value), n.is("animating", s.value), { [n.em("item", "card")]: d.value, [n.em("item", "card-vertical")]: d.value && u.value }]), p = y(() => {
    const g = `${`translate${o(u) ? "Y" : "X"}`}(${o(c)}px)`, T = `scale(${o(f)})`;
    return { transform: [g, T].join(" ") };
  });
  return (b, g) => Ye((k(), D("div", { ref_key: "carouselItemRef", ref: l, class: $(o(v)), style: Me(o(p)), onClick: o(h) }, [o(d) ? Ye((k(), D("div", { key: 0, class: $(o(n).e("mask")) }, null, 2)), [[pt, !o(a)]]) : J("v-if", true), X(b.$slots, "default")], 14, ["onClick"])), [[pt, o(m)]]);
} });
var Kd = ve(Xy, [["__file", "carousel-item.vue"]]);
const Zy = We(Uy, { CarouselItem: Kd }), Jy = Vt(Kd), Wd = { modelValue: { type: [Number, String, Boolean], default: void 0 }, label: { type: [String, Boolean, Number, Object], default: void 0 }, value: { type: [String, Boolean, Number, Object], default: void 0 }, indeterminate: Boolean, disabled: Boolean, checked: Boolean, name: { type: String, default: void 0 }, trueValue: { type: [String, Number], default: void 0 }, falseValue: { type: [String, Number], default: void 0 }, trueLabel: { type: [String, Number], default: void 0 }, falseLabel: { type: [String, Number], default: void 0 }, id: { type: String, default: void 0 }, border: Boolean, size: Wt, tabindex: [String, Number], validateEvent: { type: Boolean, default: true }, ...ln(["ariaControls"]) }, jd = { [Ae]: (e) => Be(e) || _e(e) || Tt(e), change: (e) => Be(e) || _e(e) || Tt(e) }, Oo = Symbol("checkboxGroupContextKey"), Qy = ({ model: e, isChecked: t }) => {
  const n = we(Oo, void 0), l = y(() => {
    var s, r;
    const i = (s = n == null ? void 0 : n.max) == null ? void 0 : s.value, u = (r = n == null ? void 0 : n.min) == null ? void 0 : r.value;
    return !vt(i) && e.value.length >= i && !t.value || !vt(u) && e.value.length <= u && t.value;
  });
  return { isDisabled: cn(y(() => (n == null ? void 0 : n.disabled.value) || l.value)), isLimitDisabled: l };
}, e0 = (e, { model: t, isLimitExceeded: n, hasOwnLabel: l, isDisabled: a, isLabeledByFormItem: s }) => {
  const r = we(Oo, void 0), { formItem: i } = un(), { emit: u } = tt();
  function c(v) {
    var p, b, g, T;
    return [true, e.trueValue, e.trueLabel].includes(v) ? (b = (p = e.trueValue) != null ? p : e.trueLabel) != null ? b : true : (T = (g = e.falseValue) != null ? g : e.falseLabel) != null ? T : false;
  }
  function d(v, p) {
    u(et, c(v), p);
  }
  function f(v) {
    if (n.value) return;
    const p = v.target;
    u(et, c(p.checked), v);
  }
  async function m(v) {
    n.value || !l.value && !a.value && s.value && (v.composedPath().some((g) => g.tagName === "LABEL") || (t.value = c([false, e.falseValue, e.falseLabel].includes(t.value)), await $e(), d(t.value, v)));
  }
  const h = y(() => (r == null ? void 0 : r.validateEvent) || e.validateEvent);
  return ue(() => e.modelValue, () => {
    h.value && (i == null ? void 0 : i.validate("change").catch((v) => void 0));
  }), { handleChange: f, onClickRoot: m };
}, t0 = (e) => {
  const t = N(false), { emit: n } = tt(), l = we(Oo, void 0), a = y(() => vt(l) === false), s = N(false), r = y({ get() {
    var i, u;
    return a.value ? (i = l == null ? void 0 : l.modelValue) == null ? void 0 : i.value : (u = e.modelValue) != null ? u : t.value;
  }, set(i) {
    var u, c;
    a.value && Se(i) ? (s.value = ((u = l == null ? void 0 : l.max) == null ? void 0 : u.value) !== void 0 && i.length > (l == null ? void 0 : l.max.value) && i.length > r.value.length, s.value === false && ((c = l == null ? void 0 : l.changeEvent) == null || c.call(l, i))) : (n(Ae, i), t.value = i);
  } });
  return { model: r, isGroup: a, isLimitExceeded: s };
}, n0 = (e, t, { model: n }) => {
  const l = we(Oo, void 0), a = N(false), s = y(() => Wn(e.value) ? e.label : e.value), r = y(() => {
    const d = n.value;
    return Tt(d) ? d : Se(d) ? gt(s.value) ? d.map(Ra).some((f) => Zt(f, s.value)) : d.map(Ra).includes(s.value) : d != null ? d === e.trueValue || d === e.trueLabel : !!d;
  }), i = Ht(y(() => {
    var d;
    return (d = l == null ? void 0 : l.size) == null ? void 0 : d.value;
  }), { prop: true }), u = Ht(y(() => {
    var d;
    return (d = l == null ? void 0 : l.size) == null ? void 0 : d.value;
  })), c = y(() => !!t.default || !Wn(s.value));
  return { checkboxButtonSize: i, isChecked: r, isFocused: a, checkboxSize: u, hasOwnLabel: c, actualValue: s };
}, Ud = (e, t) => {
  const { formItem: n } = un(), { model: l, isGroup: a, isLimitExceeded: s } = t0(e), { isFocused: r, isChecked: i, checkboxButtonSize: u, checkboxSize: c, hasOwnLabel: d, actualValue: f } = n0(e, t, { model: l }), { isDisabled: m } = Qy({ model: l, isChecked: i }), { inputId: h, isLabeledByFormItem: v } = zn(e, { formItemContext: n, disableIdGeneration: d, disableIdManagement: a }), { handleChange: p, onClickRoot: b } = e0(e, { model: l, isLimitExceeded: s, hasOwnLabel: d, isDisabled: m, isLabeledByFormItem: v });
  return (() => {
    function T() {
      var w, C;
      Se(l.value) && !l.value.includes(f.value) ? l.value.push(f.value) : l.value = (C = (w = e.trueValue) != null ? w : e.trueLabel) != null ? C : true;
    }
    e.checked && T();
  })(), wl({ from: "label act as value", replacement: "value", version: "3.0.0", scope: "el-checkbox", ref: "https://element-plus.org/en-US/component/checkbox.html" }, y(() => a.value && Wn(e.value))), wl({ from: "true-label", replacement: "true-value", version: "3.0.0", scope: "el-checkbox", ref: "https://element-plus.org/en-US/component/checkbox.html" }, y(() => !!e.trueLabel)), wl({ from: "false-label", replacement: "false-value", version: "3.0.0", scope: "el-checkbox", ref: "https://element-plus.org/en-US/component/checkbox.html" }, y(() => !!e.falseLabel)), { inputId: h, isLabeledByFormItem: v, isChecked: i, isDisabled: m, isFocused: r, checkboxButtonSize: u, checkboxSize: c, hasOwnLabel: d, model: l, actualValue: f, handleChange: p, onClickRoot: b };
}, l0 = K({ name: "ElCheckbox" }), o0 = K({ ...l0, props: Wd, emits: jd, setup(e) {
  const t = e, n = Yt(), { inputId: l, isLabeledByFormItem: a, isChecked: s, isDisabled: r, isFocused: i, checkboxSize: u, hasOwnLabel: c, model: d, actualValue: f, handleChange: m, onClickRoot: h } = Ud(t, n), v = de("checkbox"), p = y(() => [v.b(), v.m(u.value), v.is("disabled", r.value), v.is("bordered", t.border), v.is("checked", s.value)]), b = y(() => [v.e("input"), v.is("disabled", r.value), v.is("checked", s.value), v.is("indeterminate", t.indeterminate), v.is("focus", i.value)]);
  return (g, T) => (k(), oe(Je(!o(c) && o(a) ? "span" : "label"), { class: $(o(p)), "aria-controls": g.indeterminate ? g.ariaControls : null, onClick: o(h) }, { default: j(() => {
    var w, C, S, E;
    return [x("span", { class: $(o(b)) }, [g.trueValue || g.falseValue || g.trueLabel || g.falseLabel ? Ye((k(), D("input", { key: 0, id: o(l), "onUpdate:modelValue": (M) => mn(d) ? d.value = M : null, class: $(o(v).e("original")), type: "checkbox", indeterminate: g.indeterminate, name: g.name, tabindex: g.tabindex, disabled: o(r), "true-value": (C = (w = g.trueValue) != null ? w : g.trueLabel) != null ? C : true, "false-value": (E = (S = g.falseValue) != null ? S : g.falseLabel) != null ? E : false, onChange: o(m), onFocus: (M) => i.value = true, onBlur: (M) => i.value = false, onClick: Re(() => {
    }, ["stop"]) }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [[La, o(d)]]) : Ye((k(), D("input", { key: 1, id: o(l), "onUpdate:modelValue": (M) => mn(d) ? d.value = M : null, class: $(o(v).e("original")), type: "checkbox", indeterminate: g.indeterminate, disabled: o(r), value: o(f), name: g.name, tabindex: g.tabindex, onChange: o(m), onFocus: (M) => i.value = true, onBlur: (M) => i.value = false, onClick: Re(() => {
    }, ["stop"]) }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "disabled", "value", "name", "tabindex", "onChange", "onFocus", "onBlur", "onClick"])), [[La, o(d)]]), x("span", { class: $(o(v).e("inner")) }, null, 2)], 2), o(c) ? (k(), D("span", { key: 0, class: $(o(v).e("label")) }, [X(g.$slots, "default"), g.$slots.default ? J("v-if", true) : (k(), D(Pe, { key: 0 }, [at(he(g.label), 1)], 64))], 2)) : J("v-if", true)];
  }), _: 3 }, 8, ["class", "aria-controls", "onClick"]));
} });
var a0 = ve(o0, [["__file", "checkbox.vue"]]);
const s0 = K({ name: "ElCheckboxButton" }), r0 = K({ ...s0, props: Wd, emits: jd, setup(e) {
  const t = e, n = Yt(), { isFocused: l, isChecked: a, isDisabled: s, checkboxButtonSize: r, model: i, actualValue: u, handleChange: c } = Ud(t, n), d = we(Oo, void 0), f = de("checkbox"), m = y(() => {
    var v, p, b, g;
    const T = (p = (v = d == null ? void 0 : d.fill) == null ? void 0 : v.value) != null ? p : "";
    return { backgroundColor: T, borderColor: T, color: (g = (b = d == null ? void 0 : d.textColor) == null ? void 0 : b.value) != null ? g : "", boxShadow: T ? `-1px 0 0 0 ${T}` : void 0 };
  }), h = y(() => [f.b("button"), f.bm("button", r.value), f.is("disabled", s.value), f.is("checked", a.value), f.is("focus", l.value)]);
  return (v, p) => {
    var b, g, T, w;
    return k(), D("label", { class: $(o(h)) }, [v.trueValue || v.falseValue || v.trueLabel || v.falseLabel ? Ye((k(), D("input", { key: 0, "onUpdate:modelValue": (C) => mn(i) ? i.value = C : null, class: $(o(f).be("button", "original")), type: "checkbox", name: v.name, tabindex: v.tabindex, disabled: o(s), "true-value": (g = (b = v.trueValue) != null ? b : v.trueLabel) != null ? g : true, "false-value": (w = (T = v.falseValue) != null ? T : v.falseLabel) != null ? w : false, onChange: o(c), onFocus: (C) => l.value = true, onBlur: (C) => l.value = false, onClick: Re(() => {
    }, ["stop"]) }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [[La, o(i)]]) : Ye((k(), D("input", { key: 1, "onUpdate:modelValue": (C) => mn(i) ? i.value = C : null, class: $(o(f).be("button", "original")), type: "checkbox", name: v.name, tabindex: v.tabindex, disabled: o(s), value: o(u), onChange: o(c), onFocus: (C) => l.value = true, onBlur: (C) => l.value = false, onClick: Re(() => {
    }, ["stop"]) }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "value", "onChange", "onFocus", "onBlur", "onClick"])), [[La, o(i)]]), v.$slots.default || v.label ? (k(), D("span", { key: 2, class: $(o(f).be("button", "inner")), style: Me(o(a) ? o(m) : void 0) }, [X(v.$slots, "default", {}, () => [at(he(v.label), 1)])], 6)) : J("v-if", true)], 2);
  };
} });
var Yd = ve(r0, [["__file", "checkbox-button.vue"]]);
const i0 = pe({ modelValue: { type: Y(Array), default: () => [] }, disabled: Boolean, min: Number, max: Number, size: Wt, fill: String, textColor: String, tag: { type: String, default: "div" }, validateEvent: { type: Boolean, default: true }, ...ln(["ariaLabel"]) }), u0 = { [Ae]: (e) => Se(e), change: (e) => Se(e) }, c0 = K({ name: "ElCheckboxGroup" }), d0 = K({ ...c0, props: i0, emits: u0, setup(e, { emit: t }) {
  const n = e, l = de("checkbox"), { formItem: a } = un(), { inputId: s, isLabeledByFormItem: r } = zn(n, { formItemContext: a }), i = async (c) => {
    t(Ae, c), await $e(), t(et, c);
  }, u = y({ get() {
    return n.modelValue;
  }, set(c) {
    i(c);
  } });
  return ut(Oo, { ...Hn(tn(n), ["size", "min", "max", "disabled", "validateEvent", "fill", "textColor"]), modelValue: u, changeEvent: i }), ue(() => n.modelValue, () => {
    n.validateEvent && (a == null ? void 0 : a.validate("change").catch((c) => void 0));
  }), (c, d) => {
    var f;
    return k(), oe(Je(c.tag), { id: o(s), class: $(o(l).b("group")), role: "group", "aria-label": o(r) ? void 0 : c.ariaLabel || "checkbox-group", "aria-labelledby": o(r) ? (f = o(a)) == null ? void 0 : f.labelId : void 0 }, { default: j(() => [X(c.$slots, "default")]), _: 3 }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
  };
} });
var qd = ve(d0, [["__file", "checkbox-group.vue"]]);
const Fn = We(a0, { CheckboxButton: Yd, CheckboxGroup: qd }), f0 = Vt(Yd), Gd = Vt(qd), Xd = pe({ modelValue: { type: [String, Number, Boolean], default: void 0 }, size: Wt, disabled: Boolean, label: { type: [String, Number, Boolean], default: void 0 }, value: { type: [String, Number, Boolean], default: void 0 }, name: { type: String, default: void 0 } }), p0 = pe({ ...Xd, border: Boolean }), Zd = { [Ae]: (e) => Be(e) || _e(e) || Tt(e), [et]: (e) => Be(e) || _e(e) || Tt(e) }, Jd = Symbol("radioGroupKey"), Qd = (e, t) => {
  const n = N(), l = we(Jd, void 0), a = y(() => !!l), s = y(() => Wn(e.value) ? e.label : e.value), r = y({ get() {
    return a.value ? l.modelValue : e.modelValue;
  }, set(f) {
    a.value ? l.changeEvent(f) : t && t(Ae, f), n.value.checked = e.modelValue === s.value;
  } }), i = Ht(y(() => l == null ? void 0 : l.size)), u = cn(y(() => l == null ? void 0 : l.disabled)), c = N(false), d = y(() => u.value || a.value && r.value !== s.value ? -1 : 0);
  return wl({ from: "label act as value", replacement: "value", version: "3.0.0", scope: "el-radio", ref: "https://element-plus.org/en-US/component/radio.html" }, y(() => a.value && Wn(e.value))), { radioRef: n, isGroup: a, radioGroup: l, focus: c, size: i, disabled: u, tabIndex: d, modelValue: r, actualValue: s };
}, v0 = K({ name: "ElRadio" }), h0 = K({ ...v0, props: p0, emits: Zd, setup(e, { emit: t }) {
  const n = e, l = de("radio"), { radioRef: a, radioGroup: s, focus: r, size: i, disabled: u, modelValue: c, actualValue: d } = Qd(n, t);
  function f() {
    $e(() => t(et, c.value));
  }
  return (m, h) => {
    var v;
    return k(), D("label", { class: $([o(l).b(), o(l).is("disabled", o(u)), o(l).is("focus", o(r)), o(l).is("bordered", m.border), o(l).is("checked", o(c) === o(d)), o(l).m(o(i))]) }, [x("span", { class: $([o(l).e("input"), o(l).is("disabled", o(u)), o(l).is("checked", o(c) === o(d))]) }, [Ye(x("input", { ref_key: "radioRef", ref: a, "onUpdate:modelValue": (p) => mn(c) ? c.value = p : null, class: $(o(l).e("original")), value: o(d), name: m.name || ((v = o(s)) == null ? void 0 : v.name), disabled: o(u), checked: o(c) === o(d), type: "radio", onFocus: (p) => r.value = true, onBlur: (p) => r.value = false, onChange: f, onClick: Re(() => {
    }, ["stop"]) }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "checked", "onFocus", "onBlur", "onClick"]), [[Lc, o(c)]]), x("span", { class: $(o(l).e("inner")) }, null, 2)], 2), x("span", { class: $(o(l).e("label")), onKeydown: Re(() => {
    }, ["stop"]) }, [X(m.$slots, "default", {}, () => [at(he(m.label), 1)])], 42, ["onKeydown"])], 2);
  };
} });
var m0 = ve(h0, [["__file", "radio.vue"]]);
const g0 = pe({ ...Xd }), b0 = K({ name: "ElRadioButton" }), y0 = K({ ...b0, props: g0, setup(e) {
  const t = e, n = de("radio"), { radioRef: l, focus: a, size: s, disabled: r, modelValue: i, radioGroup: u, actualValue: c } = Qd(t), d = y(() => ({ backgroundColor: (u == null ? void 0 : u.fill) || "", borderColor: (u == null ? void 0 : u.fill) || "", boxShadow: (u == null ? void 0 : u.fill) ? `-1px 0 0 0 ${u.fill}` : "", color: (u == null ? void 0 : u.textColor) || "" }));
  return (f, m) => {
    var h;
    return k(), D("label", { class: $([o(n).b("button"), o(n).is("active", o(i) === o(c)), o(n).is("disabled", o(r)), o(n).is("focus", o(a)), o(n).bm("button", o(s))]) }, [Ye(x("input", { ref_key: "radioRef", ref: l, "onUpdate:modelValue": (v) => mn(i) ? i.value = v : null, class: $(o(n).be("button", "original-radio")), value: o(c), type: "radio", name: f.name || ((h = o(u)) == null ? void 0 : h.name), disabled: o(r), onFocus: (v) => a.value = true, onBlur: (v) => a.value = false, onClick: Re(() => {
    }, ["stop"]) }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "onFocus", "onBlur", "onClick"]), [[Lc, o(i)]]), x("span", { class: $(o(n).be("button", "inner")), style: Me(o(i) === o(c) ? o(d) : {}), onKeydown: Re(() => {
    }, ["stop"]) }, [X(f.$slots, "default", {}, () => [at(he(f.label), 1)])], 46, ["onKeydown"])], 2);
  };
} });
var ef = ve(y0, [["__file", "radio-button.vue"]]);
const C0 = pe({ id: { type: String, default: void 0 }, size: Wt, disabled: Boolean, modelValue: { type: [String, Number, Boolean], default: void 0 }, fill: { type: String, default: "" }, textColor: { type: String, default: "" }, name: { type: String, default: void 0 }, validateEvent: { type: Boolean, default: true }, ...ln(["ariaLabel"]) }), w0 = Zd, S0 = K({ name: "ElRadioGroup" }), k0 = K({ ...S0, props: C0, emits: w0, setup(e, { emit: t }) {
  const n = e, l = de("radio"), a = nn(), s = N(), { formItem: r } = un(), { inputId: i, isLabeledByFormItem: u } = zn(n, { formItemContext: r }), c = (f) => {
    t(Ae, f), $e(() => t(et, f));
  };
  Xe(() => {
    const f = s.value.querySelectorAll("[type=radio]"), m = f[0];
    !Array.from(f).some((h) => h.checked) && m && (m.tabIndex = 0);
  });
  const d = y(() => n.name || a.value);
  return ut(Jd, Ct({ ...tn(n), changeEvent: c, name: d })), ue(() => n.modelValue, () => {
    n.validateEvent && (r == null ? void 0 : r.validate("change").catch((f) => void 0));
  }), (f, m) => (k(), D("div", { id: o(i), ref_key: "radioGroupRef", ref: s, class: $(o(l).b("group")), role: "radiogroup", "aria-label": o(u) ? void 0 : f.ariaLabel || "radio-group", "aria-labelledby": o(u) ? o(r).labelId : void 0 }, [X(f.$slots, "default")], 10, ["id", "aria-label", "aria-labelledby"]));
} });
var tf = ve(k0, [["__file", "radio-group.vue"]]);
const nf = We(m0, { RadioButton: ef, RadioGroup: tf }), E0 = Vt(tf), $0 = Vt(ef);
var T0 = K({ name: "NodeContent", setup() {
  return { ns: de("cascader-node") };
}, render() {
  const { ns: e } = this, { node: t, panel: n } = this.$parent, { data: l, label: a } = t, { renderLabelFn: s } = n;
  return Oe("span", { class: e.e("label") }, s ? s({ node: t, data: l }) : a);
} });
const oi = Symbol(), N0 = K({ name: "ElCascaderNode", components: { ElCheckbox: Fn, ElRadio: nf, NodeContent: T0, ElIcon: Ee, Check: na, Loading: Zn, ArrowRight: kn }, props: { node: { type: Object, required: true }, menuId: String }, emits: ["expand"], setup(e, { emit: t }) {
  const n = we(oi), l = de("cascader-node"), a = y(() => n.isHoverMenu), s = y(() => n.config.multiple), r = y(() => n.config.checkStrictly), i = y(() => {
    var E;
    return (E = n.checkedNodes[0]) == null ? void 0 : E.uid;
  }), u = y(() => e.node.isDisabled), c = y(() => e.node.isLeaf), d = y(() => r.value && !c.value || !u.value), f = y(() => h(n.expandingNode)), m = y(() => r.value && n.checkedNodes.some(h)), h = (E) => {
    var M;
    const { level: O, uid: _ } = e.node;
    return ((M = E == null ? void 0 : E.pathNodes[O - 1]) == null ? void 0 : M.uid) === _;
  }, v = () => {
    f.value || n.expandNode(e.node);
  }, p = (E) => {
    const { node: M } = e;
    E !== M.checked && n.handleCheckChange(M, E);
  }, b = () => {
    n.lazyLoad(e.node, () => {
      c.value || v();
    });
  }, g = (E) => {
    a.value && (T(), !c.value && t("expand", E));
  }, T = () => {
    const { node: E } = e;
    !d.value || E.loading || (E.loaded ? v() : b());
  }, w = () => {
    a.value && !c.value || (c.value && !u.value && !r.value && !s.value ? S(true) : T());
  }, C = (E) => {
    r.value ? (p(E), e.node.loaded && v()) : S(E);
  }, S = (E) => {
    e.node.loaded ? (p(E), !r.value && v()) : b();
  };
  return { panel: n, isHoverMenu: a, multiple: s, checkStrictly: r, checkedNodeId: i, isDisabled: u, isLeaf: c, expandable: d, inExpandingPath: f, inCheckedPath: m, ns: l, handleHoverExpand: g, handleExpand: T, handleClick: w, handleCheck: S, handleSelectCheck: C };
} });
function I0(e, t, n, l, a, s) {
  const r = nt("el-checkbox"), i = nt("el-radio"), u = nt("check"), c = nt("el-icon"), d = nt("node-content"), f = nt("loading"), m = nt("arrow-right");
  return k(), D("li", { id: `${e.menuId}-${e.node.uid}`, role: "menuitem", "aria-haspopup": !e.isLeaf, "aria-owns": e.isLeaf ? void 0 : e.menuId, "aria-expanded": e.inExpandingPath, tabindex: e.expandable ? -1 : void 0, class: $([e.ns.b(), e.ns.is("selectable", e.checkStrictly), e.ns.is("active", e.node.checked), e.ns.is("disabled", !e.expandable), e.inExpandingPath && "in-active-path", e.inCheckedPath && "in-checked-path"]), onMouseenter: e.handleHoverExpand, onFocus: e.handleHoverExpand, onClick: e.handleClick }, [J(" prefix "), e.multiple ? (k(), oe(r, { key: 0, "model-value": e.node.checked, indeterminate: e.node.indeterminate, disabled: e.isDisabled, onClick: Re(() => {
  }, ["stop"]), "onUpdate:modelValue": e.handleSelectCheck }, null, 8, ["model-value", "indeterminate", "disabled", "onClick", "onUpdate:modelValue"])) : e.checkStrictly ? (k(), oe(i, { key: 1, "model-value": e.checkedNodeId, label: e.node.uid, disabled: e.isDisabled, "onUpdate:modelValue": e.handleSelectCheck, onClick: Re(() => {
  }, ["stop"]) }, { default: j(() => [J(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `), x("span")]), _: 1 }, 8, ["model-value", "label", "disabled", "onUpdate:modelValue", "onClick"])) : e.isLeaf && e.node.checked ? (k(), oe(c, { key: 2, class: $(e.ns.e("prefix")) }, { default: j(() => [z(u)]), _: 1 }, 8, ["class"])) : J("v-if", true), J(" content "), z(d), J(" postfix "), e.isLeaf ? J("v-if", true) : (k(), D(Pe, { key: 3 }, [e.node.loading ? (k(), oe(c, { key: 0, class: $([e.ns.is("loading"), e.ns.e("postfix")]) }, { default: j(() => [z(f)]), _: 1 }, 8, ["class"])) : (k(), oe(c, { key: 1, class: $(["arrow-right", e.ns.e("postfix")]) }, { default: j(() => [z(m)]), _: 1 }, 8, ["class"]))], 64))], 42, ["id", "aria-haspopup", "aria-owns", "aria-expanded", "tabindex", "onMouseenter", "onFocus", "onClick"]);
}
var _0 = ve(N0, [["render", I0], ["__file", "node.vue"]]);
const M0 = K({ name: "ElCascaderMenu", components: { Loading: Zn, ElIcon: Ee, ElScrollbar: el, ElCascaderNode: _0 }, props: { nodes: { type: Array, required: true }, index: { type: Number, required: true } }, setup(e) {
  const t = tt(), n = de("cascader-menu"), { t: l } = ft(), a = nn();
  let s = null, r = null;
  const i = we(oi), u = N(null), c = y(() => !e.nodes.length), d = y(() => !i.initialLoaded), f = y(() => `${a.value}-${e.index}`), m = (b) => {
    s = b.target;
  }, h = (b) => {
    if (!(!i.isHoverMenu || !s || !u.value)) if (s.contains(b.target)) {
      v();
      const g = t.vnode.el, { left: T } = g.getBoundingClientRect(), { offsetWidth: w, offsetHeight: C } = g, S = b.clientX - T, E = s.offsetTop, M = E + s.offsetHeight;
      u.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${S} ${E} L${w} 0 V${E} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${S} ${M} L${w} ${C} V${M} Z" />
        `;
    } else r || (r = window.setTimeout(p, i.config.hoverThreshold));
  }, v = () => {
    r && (clearTimeout(r), r = null);
  }, p = () => {
    u.value && (u.value.innerHTML = "", v());
  };
  return { ns: n, panel: i, hoverZone: u, isEmpty: c, isLoading: d, menuId: f, t: l, handleExpand: m, handleMouseMove: h, clearHoverZone: p };
} });
function O0(e, t, n, l, a, s) {
  const r = nt("el-cascader-node"), i = nt("loading"), u = nt("el-icon"), c = nt("el-scrollbar");
  return k(), oe(c, { key: e.menuId, tag: "ul", role: "menu", class: $(e.ns.b()), "wrap-class": e.ns.e("wrap"), "view-class": [e.ns.e("list"), e.ns.is("empty", e.isEmpty)], onMousemove: e.handleMouseMove, onMouseleave: e.clearHoverZone }, { default: j(() => {
    var d;
    return [(k(true), D(Pe, null, it(e.nodes, (f) => (k(), oe(r, { key: f.uid, node: f, "menu-id": e.menuId, onExpand: e.handleExpand }, null, 8, ["node", "menu-id", "onExpand"]))), 128)), e.isLoading ? (k(), D("div", { key: 0, class: $(e.ns.e("empty-text")) }, [z(u, { size: "14", class: $(e.ns.is("loading")) }, { default: j(() => [z(i)]), _: 1 }, 8, ["class"]), at(" " + he(e.t("el.cascader.loading")), 1)], 2)) : e.isEmpty ? (k(), D("div", { key: 1, class: $(e.ns.e("empty-text")) }, [X(e.$slots, "empty", {}, () => [at(he(e.t("el.cascader.noData")), 1)])], 2)) : (d = e.panel) != null && d.isHoverMenu ? (k(), D(Pe, { key: 2 }, [J(" eslint-disable-next-line vue/html-self-closing "), (k(), D("svg", { ref: "hoverZone", class: $(e.ns.e("hover-zone")) }, null, 2))], 2112)) : J("v-if", true)];
  }), _: 3 }, 8, ["class", "wrap-class", "view-class", "onMousemove", "onMouseleave"]);
}
var P0 = ve(M0, [["render", O0], ["__file", "menu.vue"]]);
const ai = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Gn = (e) => _v(e);
let R0 = 0;
const L0 = (e) => {
  const t = [e];
  let { parent: n } = e;
  for (; n; ) t.unshift(n), n = n.parent;
  return t;
};
let tr = class nr {
  constructor(t, n, l, a = false) {
    this.data = t, this.config = n, this.parent = l, this.root = a, this.uid = R0++, this.checked = false, this.indeterminate = false, this.loading = false;
    const { value: s, label: r, children: i } = n, u = t[i], c = L0(this);
    this.level = a ? 0 : l ? l.level + 1 : 1, this.value = t[s], this.label = t[r], this.pathNodes = c, this.pathValues = c.map((d) => d.value), this.pathLabels = c.map((d) => d.label), this.childrenData = u, this.children = (u || []).map((d) => new nr(d, n, this)), this.loaded = !n.lazy || this.isLeaf || !_n(u);
  }
  get isDisabled() {
    const { data: t, parent: n, config: l } = this, { disabled: a, checkStrictly: s } = l;
    return (Qe(a) ? a(t, this) : !!t[a]) || !s && (n == null ? void 0 : n.isDisabled);
  }
  get isLeaf() {
    const { data: t, config: n, childrenData: l, loaded: a } = this, { lazy: s, leaf: r } = n, i = Qe(r) ? r(t, this) : t[r];
    return vt(i) ? s && !a ? false : !(Se(l) && l.length) : !!i;
  }
  get valueByOption() {
    return this.config.emitPath ? this.pathValues : this.value;
  }
  appendChild(t) {
    const { childrenData: n, children: l } = this, a = new nr(t, this.config, this);
    return Se(n) ? n.push(t) : this.childrenData = [t], l.push(a), a;
  }
  calcText(t, n) {
    const l = t ? this.pathLabels.join(n) : this.label;
    return this.text = l, l;
  }
  broadcast(t, ...n) {
    const l = `onParent${Gn(t)}`;
    this.children.forEach((a) => {
      a && (a.broadcast(t, ...n), a[l] && a[l](...n));
    });
  }
  emit(t, ...n) {
    const { parent: l } = this, a = `onChild${Gn(t)}`;
    l && (l[a] && l[a](...n), l.emit(t, ...n));
  }
  onParentCheck(t) {
    this.isDisabled || this.setCheckState(t);
  }
  onChildCheck() {
    const { children: t } = this, n = t.filter((a) => !a.isDisabled), l = n.length ? n.every((a) => a.checked) : false;
    this.setCheckState(l);
  }
  setCheckState(t) {
    const n = this.children.length, l = this.children.reduce((a, s) => {
      const r = s.checked ? 1 : s.indeterminate ? 0.5 : 0;
      return a + r;
    }, 0);
    this.checked = this.loaded && this.children.filter((a) => !a.isDisabled).every((a) => a.loaded && a.checked) && t, this.indeterminate = this.loaded && l !== n && l > 0;
  }
  doCheck(t) {
    if (this.checked === t) return;
    const { checkStrictly: n, multiple: l } = this.config;
    n || !l ? this.checked = t : (this.broadcast("check", t), this.setCheckState(t), this.emit("check"));
  }
};
const lr = (e, t) => e.reduce((n, l) => (l.isLeaf ? n.push(l) : (!t && n.push(l), n = n.concat(lr(l.children, t))), n), []);
class Lu {
  constructor(t, n) {
    this.config = n;
    const l = (t || []).map((a) => new tr(a, this.config));
    this.nodes = l, this.allNodes = lr(l, false), this.leafNodes = lr(l, true);
  }
  getNodes() {
    return this.nodes;
  }
  getFlattedNodes(t) {
    return t ? this.leafNodes : this.allNodes;
  }
  appendNode(t, n) {
    const l = n ? n.appendChild(t) : new tr(t, this.config);
    n || this.nodes.push(l), this.appendAllNodesAndLeafNodes(l);
  }
  appendNodes(t, n) {
    t.forEach((l) => this.appendNode(l, n));
  }
  appendAllNodesAndLeafNodes(t) {
    this.allNodes.push(t), t.isLeaf && this.leafNodes.push(t), t.children && t.children.forEach((n) => {
      this.appendAllNodesAndLeafNodes(n);
    });
  }
  getNodeByValue(t, n = false) {
    return !t && t !== 0 ? null : this.getFlattedNodes(n).find((a) => Zt(a.value, t) || Zt(a.pathValues, t)) || null;
  }
  getSameNode(t) {
    return t && this.getFlattedNodes(false).find(({ value: l, level: a }) => Zt(t.value, l) && t.level === a) || null;
  }
}
const lf = pe({ modelValue: { type: Y([Number, String, Array]) }, options: { type: Y(Array), default: () => [] }, props: { type: Y(Object), default: () => ({}) } }), B0 = { expandTrigger: "click", multiple: false, checkStrictly: false, emitPath: true, lazy: false, lazyLoad: Rt, value: "value", label: "label", children: "children", leaf: "leaf", disabled: "disabled", hoverThreshold: 500 }, D0 = (e) => y(() => ({ ...B0, ...e.props })), Bu = (e) => {
  if (!e) return 0;
  const t = e.id.split("-");
  return Number(t[t.length - 2]);
}, V0 = (e) => {
  if (!e) return;
  const t = e.querySelector("input");
  t ? t.click() : Ed(e) && e.click();
}, A0 = (e, t) => {
  const n = t.slice(0), l = n.map((s) => s.uid), a = e.reduce((s, r) => {
    const i = l.indexOf(r.uid);
    return i > -1 && (s.push(r), n.splice(i, 1), l.splice(i, 1)), s;
  }, []);
  return a.push(...n), a;
}, Du = (e) => [...new Set(e)], wn = (e) => !e && e !== 0 ? [] : Se(e) ? e : [e], F0 = K({ name: "ElCascaderPanel", components: { ElCascaderMenu: P0 }, props: { ...lf, border: { type: Boolean, default: true }, renderLabel: Function }, emits: [Ae, et, "close", "expand-change"], setup(e, { emit: t, slots: n }) {
  let l = false;
  const a = de("cascader"), s = D0(e);
  let r = null;
  const i = N(true), u = N([]), c = N(null), d = N([]), f = N(null), m = N([]), h = y(() => s.value.expandTrigger === "hover"), v = y(() => e.renderLabel || n.default), p = () => {
    const { options: P } = e, W = s.value;
    l = false, r = new Lu(P, W), d.value = [r.getNodes()], W.lazy && _n(e.options) ? (i.value = false, b(void 0, (te) => {
      te && (r = new Lu(te, W), d.value = [r.getNodes()]), i.value = true, O(false, true);
    })) : O(false, true);
  }, b = (P, W) => {
    const te = s.value;
    P = P || new tr({}, te, void 0, true), P.loading = true;
    const A = (L) => {
      const F = P, V = F.root ? null : F;
      L && (r == null ? void 0 : r.appendNodes(L, V)), F.loading = false, F.loaded = true, F.childrenData = F.childrenData || [], W && W(L);
    };
    te.lazyLoad(P, A);
  }, g = (P, W) => {
    var te;
    const { level: A } = P, L = d.value.slice(0, A);
    let F;
    P.isLeaf ? F = P.pathNodes[A - 2] : (F = P, L.push(P.children)), ((te = f.value) == null ? void 0 : te.uid) !== (F == null ? void 0 : F.uid) && (f.value = P, d.value = L, !W && t("expand-change", (P == null ? void 0 : P.pathValues) || []));
  }, T = (P, W, te = true) => {
    const { checkStrictly: A, multiple: L } = s.value, F = m.value[0];
    l = true, !L && (F == null ? void 0 : F.doCheck(false)), P.doCheck(W), M(), te && !L && !A && t("close"), !te && !L && !A && w(P);
  }, w = (P) => {
    P && (P = P.parent, w(P), P && g(P));
  }, C = (P) => r == null ? void 0 : r.getFlattedNodes(P), S = (P) => {
    var W;
    return (W = C(P)) == null ? void 0 : W.filter((te) => te.checked !== false);
  }, E = () => {
    m.value.forEach((P) => P.doCheck(false)), M(), d.value = d.value.slice(0, 1), f.value = null, t("expand-change", []);
  }, M = () => {
    var P;
    const { checkStrictly: W, multiple: te } = s.value, A = m.value, L = S(!W), F = A0(A, L), V = F.map((B) => B.valueByOption);
    m.value = F, c.value = te ? V : (P = V[0]) != null ? P : null;
  }, O = (P = false, W = false) => {
    const { modelValue: te } = e, { lazy: A, multiple: L, checkStrictly: F } = s.value, V = !F;
    if (!(!i.value || l || !W && Zt(te, c.value))) if (A && !P) {
      const G = Du(Av(wn(te))).map((U) => r == null ? void 0 : r.getNodeByValue(U)).filter((U) => !!U && !U.loaded && !U.loading);
      G.length ? G.forEach((U) => {
        b(U, () => O(false, W));
      }) : O(true, W);
    } else {
      const B = L ? wn(te) : [te], G = Du(B.map((U) => r == null ? void 0 : r.getNodeByValue(U, V)));
      _(G, W), c.value = Ba(te);
    }
  }, _ = (P, W = true) => {
    const { checkStrictly: te } = s.value, A = m.value, L = P.filter((B) => !!B && (te || B.isLeaf)), F = r == null ? void 0 : r.getSameNode(f.value), V = W && F || L[0];
    V ? V.pathNodes.forEach((B) => g(B, true)) : f.value = null, A.forEach((B) => B.doCheck(false)), Ct(L).forEach((B) => B.doCheck(true)), m.value = L, $e(I);
  }, I = () => {
    dt && u.value.forEach((P) => {
      const W = P == null ? void 0 : P.$el;
      if (W) {
        const te = W.querySelector(`.${a.namespace.value}-scrollbar__wrap`), A = W.querySelector(`.${a.b("node")}.${a.is("active")}`) || W.querySelector(`.${a.b("node")}.in-active-path`);
        Yr(te, A);
      }
    });
  }, R = (P) => {
    const W = P.target, { code: te } = P;
    switch (te) {
      case ye.up:
      case ye.down: {
        P.preventDefault();
        const A = te === ye.up ? -1 : 1;
        Ea($d(W, A, `.${a.b("node")}[tabindex="-1"]`));
        break;
      }
      case ye.left: {
        P.preventDefault();
        const A = u.value[Bu(W) - 1], L = A == null ? void 0 : A.$el.querySelector(`.${a.b("node")}[aria-expanded="true"]`);
        Ea(L);
        break;
      }
      case ye.right: {
        P.preventDefault();
        const A = u.value[Bu(W) + 1], L = A == null ? void 0 : A.$el.querySelector(`.${a.b("node")}[tabindex="-1"]`);
        Ea(L);
        break;
      }
      case ye.enter:
      case ye.numpadEnter:
        V0(W);
        break;
    }
  };
  return ut(oi, Ct({ config: s, expandingNode: f, checkedNodes: m, isHoverMenu: h, initialLoaded: i, renderLabelFn: v, lazyLoad: b, expandNode: g, handleCheckChange: T })), ue([s, () => e.options], p, { deep: true, immediate: true }), ue(() => e.modelValue, () => {
    l = false, O();
  }, { deep: true }), ue(() => c.value, (P) => {
    Zt(P, e.modelValue) || (t(Ae, P), t(et, P));
  }), Mv(() => u.value = []), Xe(() => !_n(e.modelValue) && O()), { ns: a, menuList: u, menus: d, checkedNodes: m, handleKeyDown: R, handleCheckChange: T, getFlattedNodes: C, getCheckedNodes: S, clearCheckedNodes: E, calculateCheckedValue: M, scrollToExpandingNode: I };
} });
function z0(e, t, n, l, a, s) {
  const r = nt("el-cascader-menu");
  return k(), D("div", { class: $([e.ns.b("panel"), e.ns.is("bordered", e.border)]), onKeydown: e.handleKeyDown }, [(k(true), D(Pe, null, it(e.menus, (i, u) => (k(), oe(r, { key: u, ref_for: true, ref: (c) => e.menuList[u] = c, index: u, nodes: [...i] }, { empty: j(() => [X(e.$slots, "empty")]), _: 2 }, 1032, ["index", "nodes"]))), 128))], 42, ["onKeydown"]);
}
var x0 = ve(F0, [["render", z0], ["__file", "index.vue"]]);
const of = We(x0), rl = pe({ type: { type: String, values: ["primary", "success", "info", "warning", "danger"], default: "primary" }, closable: Boolean, disableTransitions: Boolean, hit: Boolean, color: String, size: { type: String, values: Qn }, effect: { type: String, values: ["dark", "light", "plain"], default: "light" }, round: Boolean }), H0 = { close: (e) => e instanceof MouseEvent, click: (e) => e instanceof MouseEvent }, K0 = K({ name: "ElTag" }), W0 = K({ ...K0, props: rl, emits: H0, setup(e, { emit: t }) {
  const n = e, l = Ht(), a = de("tag"), s = y(() => {
    const { type: c, hit: d, effect: f, closable: m, round: h } = n;
    return [a.b(), a.is("closable", m), a.m(c || "primary"), a.m(l.value), a.m(f), a.is("hit", d), a.is("round", h)];
  }), r = (c) => {
    t("close", c);
  }, i = (c) => {
    t("click", c);
  }, u = (c) => {
    var d, f, m;
    (m = (f = (d = c == null ? void 0 : c.component) == null ? void 0 : d.subTree) == null ? void 0 : f.component) != null && m.bum && (c.component.subTree.component.bum = null);
  };
  return (c, d) => c.disableTransitions ? (k(), D("span", { key: 0, class: $(o(s)), style: Me({ backgroundColor: c.color }), onClick: i }, [x("span", { class: $(o(a).e("content")) }, [X(c.$slots, "default")], 2), c.closable ? (k(), oe(o(Ee), { key: 0, class: $(o(a).e("close")), onClick: Re(r, ["stop"]) }, { default: j(() => [z(o(An))]), _: 1 }, 8, ["class", "onClick"])) : J("v-if", true)], 6)) : (k(), oe(en, { key: 1, name: `${o(a).namespace.value}-zoom-in-center`, appear: "", onVnodeMounted: u }, { default: j(() => [x("span", { class: $(o(s)), style: Me({ backgroundColor: c.color }), onClick: i }, [x("span", { class: $(o(a).e("content")) }, [X(c.$slots, "default")], 2), c.closable ? (k(), oe(o(Ee), { key: 0, class: $(o(a).e("close")), onClick: Re(r, ["stop"]) }, { default: j(() => [z(o(An))]), _: 1 }, 8, ["class", "onClick"])) : J("v-if", true)], 6)]), _: 3 }, 8, ["name"]));
} });
var j0 = ve(W0, [["__file", "tag.vue"]]);
const yo = We(j0), U0 = pe({ ...lf, size: Wt, placeholder: String, disabled: Boolean, clearable: Boolean, filterable: Boolean, filterMethod: { type: Y(Function), default: (e, t) => e.text.includes(t) }, separator: { type: String, default: " / " }, showAllLevels: { type: Boolean, default: true }, collapseTags: Boolean, maxCollapseTags: { type: Number, default: 1 }, collapseTagsTooltip: { type: Boolean, default: false }, debounce: { type: Number, default: 300 }, beforeFilter: { type: Y(Function), default: () => true }, placement: { type: Y(String), values: Yl, default: "bottom-start" }, fallbackPlacements: { type: Y(Array), default: ["bottom-start", "bottom", "top-start", "top", "right", "left"] }, popperClass: { type: String, default: "" }, teleported: Xt.teleported, tagType: { ...rl.type, default: "info" }, tagEffect: { ...rl.effect, default: "light" }, validateEvent: { type: Boolean, default: true }, persistent: { type: Boolean, default: true }, ...Io }), Y0 = { [Ae]: (e) => true, [et]: (e) => true, focus: (e) => e instanceof FocusEvent, blur: (e) => e instanceof FocusEvent, clear: () => true, visibleChange: (e) => Tt(e), expandChange: (e) => !!e, removeTag: (e) => !!e }, gl = /* @__PURE__ */ new Map();
if (dt) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of gl.values()) for (const { documentHandler: l } of n) l(t, e);
      e = void 0;
    }
  });
}
function Vu(e, t) {
  let n = [];
  return Se(t.arg) ? n = t.arg : En(t.arg) && n.push(t.arg), function(l, a) {
    const s = t.instance.popperRef, r = l.target, i = a == null ? void 0 : a.target, u = !t || !t.instance, c = !r || !i, d = e.contains(r) || e.contains(i), f = e === r, m = n.length && n.some((v) => v == null ? void 0 : v.contains(r)) || n.length && n.includes(i), h = s && (s.contains(r) || s.contains(i));
    u || c || d || f || m || h || t.value(l, a);
  };
}
const il = { beforeMount(e, t) {
  gl.has(e) || gl.set(e, []), gl.get(e).push({ documentHandler: Vu(e, t), bindingFn: t.value });
}, updated(e, t) {
  gl.has(e) || gl.set(e, []);
  const n = gl.get(e), l = n.findIndex((s) => s.bindingFn === t.oldValue), a = { documentHandler: Vu(e, t), bindingFn: t.value };
  l >= 0 ? n.splice(l, 1, a) : n.push(a);
}, unmounted(e) {
  gl.delete(e);
} }, q0 = "ElCascader", G0 = K({ name: q0 }), X0 = K({ ...G0, props: U0, emits: Y0, setup(e, { expose: t, emit: n }) {
  const l = e, a = { modifiers: [{ name: "arrowPosition", enabled: true, phase: "main", fn: ({ state: q }) => {
    const { modifiersData: ae, placement: H } = q;
    ["right", "left", "bottom", "top"].includes(H) || (ae.arrow.x = 35);
  }, requires: ["arrow"] }] }, s = ul();
  let r = 0, i = 0;
  const u = de("cascader"), c = de("input"), { t: d } = ft(), { form: f, formItem: m } = un(), { valueOnClear: h } = ss(l), { isComposing: v, handleComposition: p } = aa({ afterComposition(q) {
    var ae;
    const H = (ae = q.target) == null ? void 0 : ae.value;
    xe(H);
  } }), b = N(null), g = N(null), T = N(null), w = N(null), C = N(null), S = N(false), E = N(false), M = N(false), O = N(false), _ = N(""), I = N(""), R = N([]), P = N([]), W = N([]), te = y(() => s.style), A = y(() => l.disabled || (f == null ? void 0 : f.disabled)), L = y(() => l.placeholder || d("el.cascader.placeholder")), F = y(() => I.value || R.value.length > 0 || v.value ? "" : L.value), V = Ht(), B = y(() => V.value === "small" ? "small" : "default"), G = y(() => !!l.props.multiple), U = y(() => !l.filterable || G.value), ne = y(() => G.value ? I.value : _.value), Z = y(() => {
    var q;
    return ((q = w.value) == null ? void 0 : q.checkedNodes) || [];
  }), ee = y(() => !l.clearable || A.value || M.value || !E.value ? false : !!Z.value.length), re = y(() => {
    const { showAllLevels: q, separator: ae } = l, H = Z.value;
    return H.length ? G.value ? "" : H[0].calcText(q, ae) : "";
  }), le = y(() => (m == null ? void 0 : m.validateState) || ""), Q = y({ get() {
    return Ba(l.modelValue);
  }, set(q) {
    const ae = q ?? h.value;
    n(Ae, ae), n(et, ae), l.validateEvent && (m == null ? void 0 : m.validate("change").catch((H) => void 0));
  } }), ie = y(() => [u.b(), u.m(V.value), u.is("disabled", A.value), s.class]), ce = y(() => [c.e("icon"), "icon-arrow-down", u.is("reverse", S.value)]), Ie = y(() => u.is("focus", S.value || O.value)), me = y(() => {
    var q, ae;
    return (ae = (q = b.value) == null ? void 0 : q.popperRef) == null ? void 0 : ae.contentRef;
  }), se = (q) => {
    var ae, H, fe;
    A.value || (q = q ?? !S.value, q !== S.value && (S.value = q, (H = (ae = g.value) == null ? void 0 : ae.input) == null || H.setAttribute("aria-expanded", `${q}`), q ? (ke(), $e((fe = w.value) == null ? void 0 : fe.scrollToExpandingNode)) : l.filterable && Ue(), n("visibleChange", q)));
  }, ke = () => {
    $e(() => {
      var q;
      (q = b.value) == null || q.updatePopper();
    });
  }, De = () => {
    M.value = false;
  }, qe = (q) => {
    const { showAllLevels: ae, separator: H } = l;
    return { node: q, key: q.uid, text: q.calcText(ae, H), hitState: false, closable: !A.value && !q.isDisabled, isCollapseTag: false };
  }, je = (q) => {
    var ae;
    const H = q.node;
    H.doCheck(false), (ae = w.value) == null || ae.calculateCheckedValue(), n("removeTag", H.valueByOption);
  }, Le = () => {
    if (!G.value) return;
    const q = Z.value, ae = [], H = [];
    if (q.forEach((fe) => H.push(qe(fe))), P.value = H, q.length) {
      q.slice(0, l.maxCollapseTags).forEach((He) => ae.push(qe(He)));
      const fe = q.slice(l.maxCollapseTags), Fe = fe.length;
      Fe && (l.collapseTags ? ae.push({ key: -1, text: `+ ${Fe}`, closable: false, isCollapseTag: true }) : fe.forEach((He) => ae.push(qe(He))));
    }
    R.value = ae;
  }, Ne = () => {
    var q, ae;
    const { filterMethod: H, showAllLevels: fe, separator: Fe } = l, He = (ae = (q = w.value) == null ? void 0 : q.getFlattedNodes(!l.props.checkStrictly)) == null ? void 0 : ae.filter((wt) => wt.isDisabled ? false : (wt.calcText(fe, Fe), H(wt, ne.value)));
    G.value && (R.value.forEach((wt) => {
      wt.hitState = false;
    }), P.value.forEach((wt) => {
      wt.hitState = false;
    })), M.value = true, W.value = He, ke();
  }, Te = () => {
    var q;
    let ae;
    M.value && C.value ? ae = C.value.$el.querySelector(`.${u.e("suggestion-item")}`) : ae = (q = w.value) == null ? void 0 : q.$el.querySelector(`.${u.b("node")}[tabindex="-1"]`), ae && (ae.focus(), !M.value && ae.click());
  }, Ge = () => {
    var q, ae;
    const H = (q = g.value) == null ? void 0 : q.input, fe = T.value, Fe = (ae = C.value) == null ? void 0 : ae.$el;
    if (!(!dt || !H)) {
      if (Fe) {
        const He = Fe.querySelector(`.${u.e("suggestion-list")}`);
        He.style.minWidth = `${H.offsetWidth}px`;
      }
      if (fe) {
        const { offsetHeight: He } = fe, wt = R.value.length > 0 ? `${Math.max(He, r) - 2}px` : `${r}px`;
        H.style.height = wt, ke();
      }
    }
  }, Ze = (q) => {
    var ae;
    return (ae = w.value) == null ? void 0 : ae.getCheckedNodes(q);
  }, ot = (q) => {
    ke(), n("expandChange", q);
  }, st = (q) => {
    if (!v.value) switch (q.code) {
      case ye.enter:
      case ye.numpadEnter:
        se();
        break;
      case ye.down:
        se(true), $e(Te), q.preventDefault();
        break;
      case ye.esc:
        S.value === true && (q.preventDefault(), q.stopPropagation(), se(false));
        break;
      case ye.tab:
        se(false);
        break;
    }
  }, Ce = () => {
    var q;
    (q = w.value) == null || q.clearCheckedNodes(), !S.value && l.filterable && Ue(), se(false), n("clear");
  }, Ue = () => {
    const { value: q } = re;
    _.value = q, I.value = q;
  }, ht = (q) => {
    var ae, H;
    const { checked: fe } = q;
    G.value ? (ae = w.value) == null || ae.handleCheckChange(q, !fe, false) : (!fe && ((H = w.value) == null || H.handleCheckChange(q, true, false)), se(false));
  }, Pt = (q) => {
    const ae = q.target, { code: H } = q;
    switch (H) {
      case ye.up:
      case ye.down: {
        q.preventDefault();
        const fe = H === ye.up ? -1 : 1;
        Ea($d(ae, fe, `.${u.e("suggestion-item")}[tabindex="-1"]`));
        break;
      }
      case ye.enter:
      case ye.numpadEnter:
        ae.click();
        break;
    }
  }, Nt = () => {
    const q = R.value, ae = q[q.length - 1];
    i = I.value ? 0 : i + 1, !(!ae || !i || l.collapseTags && q.length > 1) && (ae.hitState ? je(ae) : ae.hitState = true);
  }, _t = (q) => {
    const ae = q.target, H = u.e("search-input");
    ae.className === H && (O.value = true), n("focus", q);
  }, kt = (q) => {
    O.value = false, n("blur", q);
  }, dn = Pn(() => {
    const { value: q } = ne;
    if (!q) return;
    const ae = l.beforeFilter(q);
    Ys(ae) ? ae.then(Ne).catch(() => {
    }) : ae !== false ? Ne() : De();
  }, l.debounce), xe = (q, ae) => {
    !S.value && se(true), !(ae == null ? void 0 : ae.isComposing) && (q ? dn() : De());
  }, rt = (q) => Number.parseFloat(jh(c.cssVarName("input-height"), q).value) - 2;
  return ue(M, ke), ue([Z, A, () => l.collapseTags], Le), ue(R, () => {
    $e(() => Ge());
  }), ue(V, async () => {
    await $e();
    const q = g.value.input;
    r = rt(q) || r, Ge();
  }), ue(re, Ue, { immediate: true }), Xe(() => {
    const q = g.value.input, ae = rt(q);
    r = q.offsetHeight || ae, Lt(q, Ge);
  }), t({ getCheckedNodes: Ze, cascaderPanelRef: w, togglePopperVisible: se, contentRef: me, presentText: re }), (q, ae) => (k(), oe(o(rn), { ref_key: "tooltipRef", ref: b, visible: S.value, teleported: q.teleported, "popper-class": [o(u).e("dropdown"), q.popperClass], "popper-options": a, "fallback-placements": q.fallbackPlacements, "stop-popper-mouse-event": false, "gpu-acceleration": false, placement: q.placement, transition: `${o(u).namespace.value}-zoom-in-top`, effect: "light", pure: "", persistent: q.persistent, onHide: De }, { default: j(() => [Ye((k(), D("div", { class: $(o(ie)), style: Me(o(te)), onClick: () => se(o(U) ? void 0 : true), onKeydown: st, onMouseenter: (H) => E.value = true, onMouseleave: (H) => E.value = false }, [z(o(hn), { ref_key: "input", ref: g, modelValue: _.value, "onUpdate:modelValue": (H) => _.value = H, placeholder: o(F), readonly: o(U), disabled: o(A), "validate-event": false, size: o(V), class: $(o(Ie)), tabindex: o(G) && q.filterable && !o(A) ? -1 : void 0, onCompositionstart: o(p), onCompositionupdate: o(p), onCompositionend: o(p), onFocus: _t, onBlur: kt, onInput: xe }, On({ suffix: j(() => [o(ee) ? (k(), oe(o(Ee), { key: "clear", class: $([o(c).e("icon"), "icon-circle-close"]), onClick: Re(Ce, ["stop"]) }, { default: j(() => [z(o(dl))]), _: 1 }, 8, ["class", "onClick"])) : (k(), oe(o(Ee), { key: "arrow-down", class: $(o(ce)), onClick: Re((H) => se(), ["stop"]) }, { default: j(() => [z(o(fl))]), _: 1 }, 8, ["class", "onClick"]))]), _: 2 }, [q.$slots.prefix ? { name: "prefix", fn: j(() => [X(q.$slots, "prefix")]) } : void 0]), 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "readonly", "disabled", "size", "class", "tabindex", "onCompositionstart", "onCompositionupdate", "onCompositionend"]), o(G) ? (k(), D("div", { key: 0, ref_key: "tagWrapper", ref: T, class: $([o(u).e("tags"), o(u).is("validate", !!o(le))]) }, [(k(true), D(Pe, null, it(R.value, (H) => (k(), oe(o(yo), { key: H.key, type: q.tagType, size: o(B), effect: q.tagEffect, hit: H.hitState, closable: H.closable, "disable-transitions": "", onClose: (fe) => je(H) }, { default: j(() => [H.isCollapseTag === false ? (k(), D("span", { key: 0 }, he(H.text), 1)) : (k(), oe(o(rn), { key: 1, disabled: S.value || !q.collapseTagsTooltip, "fallback-placements": ["bottom", "top", "right", "left"], placement: "bottom", effect: "light" }, { default: j(() => [x("span", null, he(H.text), 1)]), content: j(() => [x("div", { class: $(o(u).e("collapse-tags")) }, [(k(true), D(Pe, null, it(P.value.slice(q.maxCollapseTags), (fe, Fe) => (k(), D("div", { key: Fe, class: $(o(u).e("collapse-tag")) }, [(k(), oe(o(yo), { key: fe.key, class: "in-tooltip", type: q.tagType, size: o(B), effect: q.tagEffect, hit: fe.hitState, closable: fe.closable, "disable-transitions": "", onClose: (He) => je(fe) }, { default: j(() => [x("span", null, he(fe.text), 1)]), _: 2 }, 1032, ["type", "size", "effect", "hit", "closable", "onClose"]))], 2))), 128))], 2)]), _: 2 }, 1032, ["disabled"]))]), _: 2 }, 1032, ["type", "size", "effect", "hit", "closable", "onClose"]))), 128)), q.filterable && !o(A) ? Ye((k(), D("input", { key: 0, "onUpdate:modelValue": (H) => I.value = H, type: "text", class: $(o(u).e("search-input")), placeholder: o(re) ? "" : o(L), onInput: (H) => xe(I.value, H), onClick: Re((H) => se(true), ["stop"]), onKeydown: $t(Nt, ["delete"]), onCompositionstart: o(p), onCompositionupdate: o(p), onCompositionend: o(p), onFocus: _t, onBlur: kt }, null, 42, ["onUpdate:modelValue", "placeholder", "onInput", "onClick", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend"])), [[ns, I.value]]) : J("v-if", true)], 2)) : J("v-if", true)], 46, ["onClick", "onMouseenter", "onMouseleave"])), [[o(il), () => se(false), o(me)]])]), content: j(() => [Ye(z(o(of), { ref_key: "cascaderPanelRef", ref: w, modelValue: o(Q), "onUpdate:modelValue": (H) => mn(Q) ? Q.value = H : null, options: q.options, props: l.props, border: false, "render-label": q.$slots.default, onExpandChange: ot, onClose: (H) => q.$nextTick(() => se(false)) }, { empty: j(() => [X(q.$slots, "empty")]), _: 3 }, 8, ["modelValue", "onUpdate:modelValue", "options", "props", "render-label", "onClose"]), [[pt, !M.value]]), q.filterable ? Ye((k(), oe(o(el), { key: 0, ref_key: "suggestionPanel", ref: C, tag: "ul", class: $(o(u).e("suggestion-panel")), "view-class": o(u).e("suggestion-list"), onKeydown: Pt }, { default: j(() => [W.value.length ? (k(true), D(Pe, { key: 0 }, it(W.value, (H) => (k(), D("li", { key: H.uid, class: $([o(u).e("suggestion-item"), o(u).is("checked", H.checked)]), tabindex: -1, onClick: (fe) => ht(H) }, [X(q.$slots, "suggestion-item", { item: H }, () => [x("span", null, he(H.text), 1), H.checked ? (k(), oe(o(Ee), { key: 0 }, { default: j(() => [z(o(na))]), _: 1 })) : J("v-if", true)])], 10, ["onClick"]))), 128)) : X(q.$slots, "empty", { key: 1 }, () => [x("li", { class: $(o(u).e("empty-text")) }, he(o(d)("el.cascader.noMatch")), 3)])]), _: 3 }, 8, ["class", "view-class"])), [[pt, M.value]]) : J("v-if", true)]), _: 3 }, 8, ["visible", "teleported", "popper-class", "fallback-placements", "placement", "transition", "persistent"]));
} });
var Z0 = ve(X0, [["__file", "cascader.vue"]]);
const J0 = We(Z0), Q0 = pe({ checked: Boolean, disabled: Boolean, type: { type: String, values: ["primary", "success", "info", "warning", "danger"], default: "primary" } }), eC = { "update:checked": (e) => Tt(e), [et]: (e) => Tt(e) }, tC = K({ name: "ElCheckTag" }), nC = K({ ...tC, props: Q0, emits: eC, setup(e, { emit: t }) {
  const n = e, l = de("check-tag"), a = y(() => n.disabled), s = y(() => [l.b(), l.is("checked", n.checked), l.is("disabled", a.value), l.m(n.type || "primary")]), r = () => {
    if (a.value) return;
    const i = !n.checked;
    t(et, i), t("update:checked", i);
  };
  return (i, u) => (k(), D("span", { class: $(o(s)), onClick: r }, [X(i.$slots, "default")], 2));
} });
var lC = ve(nC, [["__file", "check-tag.vue"]]);
const oC = We(lC), aC = pe({ tag: { type: String, default: "div" }, span: { type: Number, default: 24 }, offset: { type: Number, default: 0 }, pull: { type: Number, default: 0 }, push: { type: Number, default: 0 }, xs: { type: Y([Number, Object]), default: () => Bt({}) }, sm: { type: Y([Number, Object]), default: () => Bt({}) }, md: { type: Y([Number, Object]), default: () => Bt({}) }, lg: { type: Y([Number, Object]), default: () => Bt({}) }, xl: { type: Y([Number, Object]), default: () => Bt({}) } }), af = Symbol("rowContextKey"), sC = K({ name: "ElCol" }), rC = K({ ...sC, props: aC, setup(e) {
  const t = e, { gutter: n } = we(af, { gutter: y(() => 0) }), l = de("col"), a = y(() => {
    const r = {};
    return n.value && (r.paddingLeft = r.paddingRight = `${n.value / 2}px`), r;
  }), s = y(() => {
    const r = [];
    return ["span", "offset", "pull", "push"].forEach((c) => {
      const d = t[c];
      _e(d) && (c === "span" ? r.push(l.b(`${t[c]}`)) : d > 0 && r.push(l.b(`${c}-${t[c]}`)));
    }), ["xs", "sm", "md", "lg", "xl"].forEach((c) => {
      _e(t[c]) ? r.push(l.b(`${c}-${t[c]}`)) : gt(t[c]) && Object.entries(t[c]).forEach(([d, f]) => {
        r.push(d !== "span" ? l.b(`${c}-${d}-${f}`) : l.b(`${c}-${f}`));
      });
    }), n.value && r.push(l.is("guttered")), [l.b(), r];
  });
  return (r, i) => (k(), oe(Je(r.tag), { class: $(o(s)), style: Me(o(a)) }, { default: j(() => [X(r.$slots, "default")]), _: 3 }, 8, ["class", "style"]));
} });
var iC = ve(rC, [["__file", "col.vue"]]);
const uC = We(iC), Au = (e) => _e(e) || Be(e) || Se(e), cC = pe({ accordion: Boolean, modelValue: { type: Y([Array, String, Number]), default: () => Bt([]) } }), dC = { [Ae]: Au, [et]: Au }, sf = Symbol("collapseContextKey"), fC = (e, t) => {
  const n = N(pn(e.modelValue)), l = (s) => {
    n.value = s;
    const r = e.accordion ? n.value[0] : n.value;
    t(Ae, r), t(et, r);
  }, a = (s) => {
    if (e.accordion) l([n.value[0] === s ? "" : s]);
    else {
      const r = [...n.value], i = r.indexOf(s);
      i > -1 ? r.splice(i, 1) : r.push(s), l(r);
    }
  };
  return ue(() => e.modelValue, () => n.value = pn(e.modelValue), { deep: true }), ut(sf, { activeNames: n, handleItemClick: a }), { activeNames: n, setActiveNames: l };
}, pC = () => {
  const e = de("collapse");
  return { rootKls: y(() => e.b()) };
}, vC = K({ name: "ElCollapse" }), hC = K({ ...vC, props: cC, emits: dC, setup(e, { expose: t, emit: n }) {
  const l = e, { activeNames: a, setActiveNames: s } = fC(l, n), { rootKls: r } = pC();
  return t({ activeNames: a, setActiveNames: s }), (i, u) => (k(), D("div", { class: $(o(r)) }, [X(i.$slots, "default")], 2));
} });
var mC = ve(hC, [["__file", "collapse.vue"]]);
const gC = K({ name: "ElCollapseTransition" }), bC = K({ ...gC, setup(e) {
  const t = de("collapse-transition"), n = (a) => {
    a.style.maxHeight = "", a.style.overflow = a.dataset.oldOverflow, a.style.paddingTop = a.dataset.oldPaddingTop, a.style.paddingBottom = a.dataset.oldPaddingBottom;
  }, l = { beforeEnter(a) {
    a.dataset || (a.dataset = {}), a.dataset.oldPaddingTop = a.style.paddingTop, a.dataset.oldPaddingBottom = a.style.paddingBottom, a.style.height && (a.dataset.elExistsHeight = a.style.height), a.style.maxHeight = 0, a.style.paddingTop = 0, a.style.paddingBottom = 0;
  }, enter(a) {
    requestAnimationFrame(() => {
      a.dataset.oldOverflow = a.style.overflow, a.dataset.elExistsHeight ? a.style.maxHeight = a.dataset.elExistsHeight : a.scrollHeight !== 0 ? a.style.maxHeight = `${a.scrollHeight}px` : a.style.maxHeight = 0, a.style.paddingTop = a.dataset.oldPaddingTop, a.style.paddingBottom = a.dataset.oldPaddingBottom, a.style.overflow = "hidden";
    });
  }, afterEnter(a) {
    a.style.maxHeight = "", a.style.overflow = a.dataset.oldOverflow;
  }, enterCancelled(a) {
    n(a);
  }, beforeLeave(a) {
    a.dataset || (a.dataset = {}), a.dataset.oldPaddingTop = a.style.paddingTop, a.dataset.oldPaddingBottom = a.style.paddingBottom, a.dataset.oldOverflow = a.style.overflow, a.style.maxHeight = `${a.scrollHeight}px`, a.style.overflow = "hidden";
  }, leave(a) {
    a.scrollHeight !== 0 && (a.style.maxHeight = 0, a.style.paddingTop = 0, a.style.paddingBottom = 0);
  }, afterLeave(a) {
    n(a);
  }, leaveCancelled(a) {
    n(a);
  } };
  return (a, s) => (k(), oe(en, lt({ name: o(t).b() }, Ov(l)), { default: j(() => [X(a.$slots, "default")]), _: 3 }, 16, ["name"]));
} });
var yC = ve(bC, [["__file", "collapse-transition.vue"]]);
const ps = We(yC), CC = pe({ title: { type: String, default: "" }, name: { type: Y([String, Number]), default: void 0 }, icon: { type: St, default: kn }, disabled: Boolean }), wC = (e) => {
  const t = we(sf), { namespace: n } = de("collapse"), l = N(false), a = N(false), s = Xr(), r = y(() => s.current++), i = y(() => {
    var m;
    return (m = e.name) != null ? m : `${n.value}-id-${s.prefix}-${o(r)}`;
  }), u = y(() => t == null ? void 0 : t.activeNames.value.includes(o(i)));
  return { focusing: l, id: r, isActive: u, handleFocus: () => {
    setTimeout(() => {
      a.value ? a.value = false : l.value = true;
    }, 50);
  }, handleHeaderClick: () => {
    e.disabled || (t == null ? void 0 : t.handleItemClick(o(i)), l.value = false, a.value = true);
  }, handleEnterClick: () => {
    t == null ? void 0 : t.handleItemClick(o(i));
  } };
}, SC = (e, { focusing: t, isActive: n, id: l }) => {
  const a = de("collapse"), s = y(() => [a.b("item"), a.is("active", o(n)), a.is("disabled", e.disabled)]), r = y(() => [a.be("item", "header"), a.is("active", o(n)), { focusing: o(t) && !e.disabled }]), i = y(() => [a.be("item", "arrow"), a.is("active", o(n))]), u = y(() => a.be("item", "wrap")), c = y(() => a.be("item", "content")), d = y(() => a.b(`content-${o(l)}`)), f = y(() => a.b(`head-${o(l)}`));
  return { arrowKls: i, headKls: r, rootKls: s, itemWrapperKls: u, itemContentKls: c, scopedContentId: d, scopedHeadId: f };
}, kC = K({ name: "ElCollapseItem" }), EC = K({ ...kC, props: CC, setup(e, { expose: t }) {
  const n = e, { focusing: l, id: a, isActive: s, handleFocus: r, handleHeaderClick: i, handleEnterClick: u } = wC(n), { arrowKls: c, headKls: d, rootKls: f, itemWrapperKls: m, itemContentKls: h, scopedContentId: v, scopedHeadId: p } = SC(n, { focusing: l, isActive: s, id: a });
  return t({ isActive: s }), (b, g) => (k(), D("div", { class: $(o(f)) }, [x("button", { id: o(p), class: $(o(d)), "aria-expanded": o(s), "aria-controls": o(v), "aria-describedby": o(v), tabindex: b.disabled ? -1 : 0, type: "button", onClick: o(i), onKeydown: $t(Re(o(u), ["stop", "prevent"]), ["space", "enter"]), onFocus: o(r), onBlur: (T) => l.value = false }, [X(b.$slots, "title", {}, () => [at(he(b.title), 1)]), X(b.$slots, "icon", { isActive: o(s) }, () => [z(o(Ee), { class: $(o(c)) }, { default: j(() => [(k(), oe(Je(b.icon)))]), _: 1 }, 8, ["class"])])], 42, ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex", "onClick", "onKeydown", "onFocus", "onBlur"]), z(o(ps), null, { default: j(() => [Ye(x("div", { id: o(v), role: "region", class: $(o(m)), "aria-hidden": !o(s), "aria-labelledby": o(p) }, [x("div", { class: $(o(h)) }, [X(b.$slots, "default")], 2)], 10, ["id", "aria-hidden", "aria-labelledby"]), [[pt, o(s)]])]), _: 3 })], 2));
} });
var rf = ve(EC, [["__file", "collapse-item.vue"]]);
const $C = We(mC, { CollapseItem: rf }), TC = Vt(rf), NC = pe({ color: { type: Y(Object), required: true }, vertical: { type: Boolean, default: false } });
let Rs = false;
function jo(e, t) {
  if (!dt) return;
  const n = function(s) {
    var r;
    (r = t.drag) == null || r.call(t, s);
  }, l = function(s) {
    var r;
    document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", l), document.removeEventListener("touchmove", n), document.removeEventListener("touchend", l), document.onselectstart = null, document.ondragstart = null, Rs = false, (r = t.end) == null || r.call(t, s);
  }, a = function(s) {
    var r;
    Rs || (s.preventDefault(), document.onselectstart = () => false, document.ondragstart = () => false, document.addEventListener("mousemove", n), document.addEventListener("mouseup", l), document.addEventListener("touchmove", n), document.addEventListener("touchend", l), Rs = true, (r = t.start) == null || r.call(t, s));
  };
  e.addEventListener("mousedown", a), e.addEventListener("touchstart", a, { passive: false });
}
const IC = (e, t) => {
  if (!dt || !e || !t) return false;
  const n = e.getBoundingClientRect();
  let l;
  return t instanceof Element ? l = t.getBoundingClientRect() : l = { top: 0, right: window.innerWidth, bottom: window.innerHeight, left: 0 }, n.top < l.bottom && n.bottom > l.top && n.right > l.left && n.left < l.right;
}, Fu = (e) => {
  let t = 0, n = e;
  for (; n; ) t += n.offsetTop, n = n.offsetParent;
  return t;
}, or = (e, t) => Math.abs(Fu(e) - Fu(t)), si = (e) => {
  let t, n;
  return e.type === "touchend" ? (n = e.changedTouches[0].clientY, t = e.changedTouches[0].clientX) : e.type.startsWith("touch") ? (n = e.touches[0].clientY, t = e.touches[0].clientX) : (n = e.clientY, t = e.clientX), { clientX: t, clientY: n };
}, _C = (e) => {
  const t = tt(), { t: n } = ft(), l = Mt(), a = Mt(), s = y(() => e.color.get("alpha")), r = y(() => n("el.colorpicker.alphaLabel"));
  function i(f) {
    var m;
    f.target !== l.value && u(f), (m = l.value) == null || m.focus();
  }
  function u(f) {
    if (!a.value || !l.value) return;
    const h = t.vnode.el.getBoundingClientRect(), { clientX: v, clientY: p } = si(f);
    if (e.vertical) {
      let b = p - h.top;
      b = Math.max(l.value.offsetHeight / 2, b), b = Math.min(b, h.height - l.value.offsetHeight / 2), e.color.set("alpha", Math.round((b - l.value.offsetHeight / 2) / (h.height - l.value.offsetHeight) * 100));
    } else {
      let b = v - h.left;
      b = Math.max(l.value.offsetWidth / 2, b), b = Math.min(b, h.width - l.value.offsetWidth / 2), e.color.set("alpha", Math.round((b - l.value.offsetWidth / 2) / (h.width - l.value.offsetWidth) * 100));
    }
  }
  function c(f) {
    const { code: m, shiftKey: h } = f, v = h ? 10 : 1;
    switch (m) {
      case ye.left:
      case ye.down:
        f.preventDefault(), f.stopPropagation(), d(-v);
        break;
      case ye.right:
      case ye.up:
        f.preventDefault(), f.stopPropagation(), d(v);
        break;
    }
  }
  function d(f) {
    let m = s.value + f;
    m = m < 0 ? 0 : m > 100 ? 100 : m, e.color.set("alpha", m);
  }
  return { thumb: l, bar: a, alpha: s, alphaLabel: r, handleDrag: u, handleClick: i, handleKeydown: c };
}, MC = (e, { bar: t, thumb: n, handleDrag: l }) => {
  const a = tt(), s = de("color-alpha-slider"), r = N(0), i = N(0), u = N();
  function c() {
    if (!n.value || e.vertical) return 0;
    const T = a.vnode.el, w = e.color.get("alpha");
    return T ? Math.round(w * (T.offsetWidth - n.value.offsetWidth / 2) / 100) : 0;
  }
  function d() {
    if (!n.value) return 0;
    const T = a.vnode.el;
    if (!e.vertical) return 0;
    const w = e.color.get("alpha");
    return T ? Math.round(w * (T.offsetHeight - n.value.offsetHeight / 2) / 100) : 0;
  }
  function f() {
    if (e.color && e.color.value) {
      const { r: T, g: w, b: C } = e.color.toRgb();
      return `linear-gradient(to right, rgba(${T}, ${w}, ${C}, 0) 0%, rgba(${T}, ${w}, ${C}, 1) 100%)`;
    }
    return "";
  }
  function m() {
    r.value = c(), i.value = d(), u.value = f();
  }
  Xe(() => {
    if (!t.value || !n.value) return;
    const T = { drag: (w) => {
      l(w);
    }, end: (w) => {
      l(w);
    } };
    jo(t.value, T), jo(n.value, T), m();
  }), ue(() => e.color.get("alpha"), () => m()), ue(() => e.color.value, () => m());
  const h = y(() => [s.b(), s.is("vertical", e.vertical)]), v = y(() => s.e("bar")), p = y(() => s.e("thumb")), b = y(() => ({ background: u.value })), g = y(() => ({ left: At(r.value), top: At(i.value) }));
  return { rootKls: h, barKls: v, barStyle: b, thumbKls: p, thumbStyle: g, update: m };
}, OC = "ElColorAlphaSlider", PC = K({ name: OC }), RC = K({ ...PC, props: NC, setup(e, { expose: t }) {
  const n = e, { alpha: l, alphaLabel: a, bar: s, thumb: r, handleDrag: i, handleClick: u, handleKeydown: c } = _C(n), { rootKls: d, barKls: f, barStyle: m, thumbKls: h, thumbStyle: v, update: p } = MC(n, { bar: s, thumb: r, handleDrag: i });
  return t({ update: p, bar: s, thumb: r }), (b, g) => (k(), D("div", { class: $(o(d)) }, [x("div", { ref_key: "bar", ref: s, class: $(o(f)), style: Me(o(m)), onClick: o(u) }, null, 14, ["onClick"]), x("div", { ref_key: "thumb", ref: r, class: $(o(h)), style: Me(o(v)), "aria-label": o(a), "aria-valuenow": o(l), "aria-orientation": b.vertical ? "vertical" : "horizontal", "aria-valuemin": "0", "aria-valuemax": "100", role: "slider", tabindex: "0", onKeydown: o(c) }, null, 46, ["aria-label", "aria-valuenow", "aria-orientation", "onKeydown"])], 2));
} });
var LC = ve(RC, [["__file", "alpha-slider.vue"]]);
const BC = K({ name: "ElColorHueSlider", props: { color: { type: Object, required: true }, vertical: Boolean }, setup(e) {
  const t = de("color-hue-slider"), n = tt(), l = N(), a = N(), s = N(0), r = N(0), i = y(() => e.color.get("hue"));
  ue(() => i.value, () => {
    m();
  });
  function u(h) {
    h.target !== l.value && c(h);
  }
  function c(h) {
    if (!a.value || !l.value) return;
    const p = n.vnode.el.getBoundingClientRect(), { clientX: b, clientY: g } = si(h);
    let T;
    if (e.vertical) {
      let w = g - p.top;
      w = Math.min(w, p.height - l.value.offsetHeight / 2), w = Math.max(l.value.offsetHeight / 2, w), T = Math.round((w - l.value.offsetHeight / 2) / (p.height - l.value.offsetHeight) * 360);
    } else {
      let w = b - p.left;
      w = Math.min(w, p.width - l.value.offsetWidth / 2), w = Math.max(l.value.offsetWidth / 2, w), T = Math.round((w - l.value.offsetWidth / 2) / (p.width - l.value.offsetWidth) * 360);
    }
    e.color.set("hue", T);
  }
  function d() {
    if (!l.value) return 0;
    const h = n.vnode.el;
    if (e.vertical) return 0;
    const v = e.color.get("hue");
    return h ? Math.round(v * (h.offsetWidth - l.value.offsetWidth / 2) / 360) : 0;
  }
  function f() {
    if (!l.value) return 0;
    const h = n.vnode.el;
    if (!e.vertical) return 0;
    const v = e.color.get("hue");
    return h ? Math.round(v * (h.offsetHeight - l.value.offsetHeight / 2) / 360) : 0;
  }
  function m() {
    s.value = d(), r.value = f();
  }
  return Xe(() => {
    if (!a.value || !l.value) return;
    const h = { drag: (v) => {
      c(v);
    }, end: (v) => {
      c(v);
    } };
    jo(a.value, h), jo(l.value, h), m();
  }), { bar: a, thumb: l, thumbLeft: s, thumbTop: r, hueValue: i, handleClick: u, update: m, ns: t };
} });
function DC(e, t, n, l, a, s) {
  return k(), D("div", { class: $([e.ns.b(), e.ns.is("vertical", e.vertical)]) }, [x("div", { ref: "bar", class: $(e.ns.e("bar")), onClick: e.handleClick }, null, 10, ["onClick"]), x("div", { ref: "thumb", class: $(e.ns.e("thumb")), style: Me({ left: e.thumbLeft + "px", top: e.thumbTop + "px" }) }, null, 6)], 2);
}
var VC = ve(BC, [["render", DC], ["__file", "hue-slider.vue"]]);
const AC = pe({ modelValue: String, id: String, showAlpha: Boolean, colorFormat: String, disabled: Boolean, size: Wt, popperClass: { type: String, default: "" }, tabindex: { type: [String, Number], default: 0 }, teleported: Xt.teleported, predefine: { type: Y(Array) }, validateEvent: { type: Boolean, default: true }, ...ln(["ariaLabel"]) }), FC = { [Ae]: (e) => Be(e) || qt(e), [et]: (e) => Be(e) || qt(e), activeChange: (e) => Be(e) || qt(e), focus: (e) => e instanceof FocusEvent, blur: (e) => e instanceof FocusEvent }, uf = Symbol("colorPickerContextKey"), zu = function(e, t, n) {
  return [e, t * n / ((e = (2 - t) * n) < 1 ? e : 2 - e) || 0, e / 2];
}, zC = function(e) {
  return Be(e) && e.includes(".") && Number.parseFloat(e) === 1;
}, xC = function(e) {
  return Be(e) && e.includes("%");
}, fo = function(e, t) {
  zC(e) && (e = "100%");
  const n = xC(e);
  return e = Math.min(t, Math.max(0, Number.parseFloat(`${e}`))), n && (e = Number.parseInt(`${e * t}`, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}, xu = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" }, $a = (e) => {
  e = Math.min(Math.round(e), 255);
  const t = Math.floor(e / 16), n = e % 16;
  return `${xu[t] || t}${xu[n] || n}`;
}, Hu = function({ r: e, g: t, b: n }) {
  return Number.isNaN(+e) || Number.isNaN(+t) || Number.isNaN(+n) ? "" : `#${$a(e)}${$a(t)}${$a(n)}`;
}, Ls = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 }, Bl = function(e) {
  return e.length === 2 ? (Ls[e[0].toUpperCase()] || +e[0]) * 16 + (Ls[e[1].toUpperCase()] || +e[1]) : Ls[e[1].toUpperCase()] || +e[1];
}, HC = function(e, t, n) {
  t = t / 100, n = n / 100;
  let l = t;
  const a = Math.max(n, 0.01);
  n *= 2, t *= n <= 1 ? n : 2 - n, l *= a <= 1 ? a : 2 - a;
  const s = (n + t) / 2, r = n === 0 ? 2 * l / (a + l) : 2 * t / (n + t);
  return { h: e, s: r * 100, v: s * 100 };
}, Ku = (e, t, n) => {
  e = fo(e, 255), t = fo(t, 255), n = fo(n, 255);
  const l = Math.max(e, t, n), a = Math.min(e, t, n);
  let s;
  const r = l, i = l - a, u = l === 0 ? 0 : i / l;
  if (l === a) s = 0;
  else {
    switch (l) {
      case e: {
        s = (t - n) / i + (t < n ? 6 : 0);
        break;
      }
      case t: {
        s = (n - e) / i + 2;
        break;
      }
      case n: {
        s = (e - t) / i + 4;
        break;
      }
    }
    s /= 6;
  }
  return { h: s * 360, s: u * 100, v: r * 100 };
}, Bo = function(e, t, n) {
  e = fo(e, 360) * 6, t = fo(t, 100), n = fo(n, 100);
  const l = Math.floor(e), a = e - l, s = n * (1 - t), r = n * (1 - a * t), i = n * (1 - (1 - a) * t), u = l % 6, c = [n, r, s, s, i, n][u], d = [i, n, n, r, s, s][u], f = [s, s, i, n, n, r][u];
  return { r: Math.round(c * 255), g: Math.round(d * 255), b: Math.round(f * 255) };
};
class Ho {
  constructor(t = {}) {
    this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100, this.enableAlpha = false, this.format = "hex", this.value = "";
    for (const n in t) sn(t, n) && (this[n] = t[n]);
    t.value ? this.fromString(t.value) : this.doOnChange();
  }
  set(t, n) {
    if (arguments.length === 1 && typeof t == "object") {
      for (const l in t) sn(t, l) && this.set(l, t[l]);
      return;
    }
    this[`_${t}`] = n, this.doOnChange();
  }
  get(t) {
    return t === "alpha" ? Math.floor(this[`_${t}`]) : this[`_${t}`];
  }
  toRgb() {
    return Bo(this._hue, this._saturation, this._value);
  }
  fromString(t) {
    if (!t) {
      this._hue = 0, this._saturation = 100, this._value = 100, this.doOnChange();
      return;
    }
    const n = (l, a, s) => {
      this._hue = Math.max(0, Math.min(360, l)), this._saturation = Math.max(0, Math.min(100, a)), this._value = Math.max(0, Math.min(100, s)), this.doOnChange();
    };
    if (t.includes("hsl")) {
      const l = t.replace(/hsla|hsl|\(|\)/gm, "").split(/\s|,/g).filter((a) => a !== "").map((a, s) => s > 2 ? Number.parseFloat(a) : Number.parseInt(a, 10));
      if (l.length === 4 ? this._alpha = Number.parseFloat(l[3]) * 100 : l.length === 3 && (this._alpha = 100), l.length >= 3) {
        const { h: a, s, v: r } = HC(l[0], l[1], l[2]);
        n(a, s, r);
      }
    } else if (t.includes("hsv")) {
      const l = t.replace(/hsva|hsv|\(|\)/gm, "").split(/\s|,/g).filter((a) => a !== "").map((a, s) => s > 2 ? Number.parseFloat(a) : Number.parseInt(a, 10));
      l.length === 4 ? this._alpha = Number.parseFloat(l[3]) * 100 : l.length === 3 && (this._alpha = 100), l.length >= 3 && n(l[0], l[1], l[2]);
    } else if (t.includes("rgb")) {
      const l = t.replace(/rgba|rgb|\(|\)/gm, "").split(/\s|,/g).filter((a) => a !== "").map((a, s) => s > 2 ? Number.parseFloat(a) : Number.parseInt(a, 10));
      if (l.length === 4 ? this._alpha = Number.parseFloat(l[3]) * 100 : l.length === 3 && (this._alpha = 100), l.length >= 3) {
        const { h: a, s, v: r } = Ku(l[0], l[1], l[2]);
        n(a, s, r);
      }
    } else if (t.includes("#")) {
      const l = t.replace("#", "").trim();
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(l)) return;
      let a, s, r;
      l.length === 3 ? (a = Bl(l[0] + l[0]), s = Bl(l[1] + l[1]), r = Bl(l[2] + l[2])) : (l.length === 6 || l.length === 8) && (a = Bl(l.slice(0, 2)), s = Bl(l.slice(2, 4)), r = Bl(l.slice(4, 6))), l.length === 8 ? this._alpha = Bl(l.slice(6)) / 255 * 100 : (l.length === 3 || l.length === 6) && (this._alpha = 100);
      const { h: i, s: u, v: c } = Ku(a, s, r);
      n(i, u, c);
    }
  }
  compare(t) {
    return Math.abs(t._hue - this._hue) < 2 && Math.abs(t._saturation - this._saturation) < 1 && Math.abs(t._value - this._value) < 1 && Math.abs(t._alpha - this._alpha) < 1;
  }
  doOnChange() {
    const { _hue: t, _saturation: n, _value: l, _alpha: a, format: s } = this;
    if (this.enableAlpha) switch (s) {
      case "hsl": {
        const r = zu(t, n / 100, l / 100);
        this.value = `hsla(${t}, ${Math.round(r[1] * 100)}%, ${Math.round(r[2] * 100)}%, ${this.get("alpha") / 100})`;
        break;
      }
      case "hsv": {
        this.value = `hsva(${t}, ${Math.round(n)}%, ${Math.round(l)}%, ${this.get("alpha") / 100})`;
        break;
      }
      case "hex": {
        this.value = `${Hu(Bo(t, n, l))}${$a(a * 255 / 100)}`;
        break;
      }
      default: {
        const { r, g: i, b: u } = Bo(t, n, l);
        this.value = `rgba(${r}, ${i}, ${u}, ${this.get("alpha") / 100})`;
      }
    }
    else switch (s) {
      case "hsl": {
        const r = zu(t, n / 100, l / 100);
        this.value = `hsl(${t}, ${Math.round(r[1] * 100)}%, ${Math.round(r[2] * 100)}%)`;
        break;
      }
      case "hsv": {
        this.value = `hsv(${t}, ${Math.round(n)}%, ${Math.round(l)}%)`;
        break;
      }
      case "rgb": {
        const { r, g: i, b: u } = Bo(t, n, l);
        this.value = `rgb(${r}, ${i}, ${u})`;
        break;
      }
      default:
        this.value = Hu(Bo(t, n, l));
    }
  }
}
const KC = K({ props: { colors: { type: Array, required: true }, color: { type: Object, required: true }, enableAlpha: { type: Boolean, required: true } }, setup(e) {
  const t = de("color-predefine"), { currentColor: n } = we(uf), l = N(s(e.colors, e.color));
  ue(() => n.value, (r) => {
    const i = new Ho();
    i.fromString(r), l.value.forEach((u) => {
      u.selected = i.compare(u);
    });
  }), an(() => {
    l.value = s(e.colors, e.color);
  });
  function a(r) {
    e.color.fromString(e.colors[r]);
  }
  function s(r, i) {
    return r.map((u) => {
      const c = new Ho();
      return c.enableAlpha = e.enableAlpha, c.format = "rgba", c.fromString(u), c.selected = c.value === i.value, c;
    });
  }
  return { rgbaColors: l, handleSelect: a, ns: t };
} });
function WC(e, t, n, l, a, s) {
  return k(), D("div", { class: $(e.ns.b()) }, [x("div", { class: $(e.ns.e("colors")) }, [(k(true), D(Pe, null, it(e.rgbaColors, (r, i) => (k(), D("div", { key: e.colors[i], class: $([e.ns.e("color-selector"), e.ns.is("alpha", r._alpha < 100), { selected: r.selected }]), onClick: (u) => e.handleSelect(i) }, [x("div", { style: Me({ backgroundColor: r.value }) }, null, 4)], 10, ["onClick"]))), 128))], 2)], 2);
}
var jC = ve(KC, [["render", WC], ["__file", "predefine.vue"]]);
const UC = K({ name: "ElSlPanel", props: { color: { type: Object, required: true } }, setup(e) {
  const t = de("color-svpanel"), n = tt(), l = N(0), a = N(0), s = N("hsl(0, 100%, 50%)"), r = y(() => {
    const c = e.color.get("hue"), d = e.color.get("value");
    return { hue: c, value: d };
  });
  function i() {
    const c = e.color.get("saturation"), d = e.color.get("value"), f = n.vnode.el, { clientWidth: m, clientHeight: h } = f;
    a.value = c * m / 100, l.value = (100 - d) * h / 100, s.value = `hsl(${e.color.get("hue")}, 100%, 50%)`;
  }
  function u(c) {
    const f = n.vnode.el.getBoundingClientRect(), { clientX: m, clientY: h } = si(c);
    let v = m - f.left, p = h - f.top;
    v = Math.max(0, v), v = Math.min(v, f.width), p = Math.max(0, p), p = Math.min(p, f.height), a.value = v, l.value = p, e.color.set({ saturation: v / f.width * 100, value: 100 - p / f.height * 100 });
  }
  return ue(() => r.value, () => {
    i();
  }), Xe(() => {
    jo(n.vnode.el, { drag: (c) => {
      u(c);
    }, end: (c) => {
      u(c);
    } }), i();
  }), { cursorTop: l, cursorLeft: a, background: s, colorValue: r, handleDrag: u, update: i, ns: t };
} });
function YC(e, t, n, l, a, s) {
  return k(), D("div", { class: $(e.ns.b()), style: Me({ backgroundColor: e.background }) }, [x("div", { class: $(e.ns.e("white")) }, null, 2), x("div", { class: $(e.ns.e("black")) }, null, 2), x("div", { class: $(e.ns.e("cursor")), style: Me({ top: e.cursorTop + "px", left: e.cursorLeft + "px" }) }, [x("div")], 6)], 6);
}
var qC = ve(UC, [["render", YC], ["__file", "sv-panel.vue"]]);
const GC = K({ name: "ElColorPicker" }), XC = K({ ...GC, props: AC, emits: FC, setup(e, { expose: t, emit: n }) {
  const l = e, { t: a } = ft(), s = de("color"), { formItem: r } = un(), i = Ht(), u = cn(), { inputId: c, isLabeledByFormItem: d } = zn(l, { formItemContext: r }), f = N(), m = N(), h = N(), v = N(), p = N(), b = N(), { isFocused: g, handleFocus: T, handleBlur: w } = Ol(p, { beforeFocus() {
    return u.value;
  }, beforeBlur(ce) {
    var Ie;
    return (Ie = v.value) == null ? void 0 : Ie.isFocusInsideContent(ce);
  }, afterBlur() {
    A(false), B();
  } });
  let C = true;
  const S = Ct(new Ho({ enableAlpha: l.showAlpha, format: l.colorFormat || "", value: l.modelValue })), E = N(false), M = N(false), O = N(""), _ = y(() => !l.modelValue && !M.value ? "transparent" : te(S, l.showAlpha)), I = y(() => !l.modelValue && !M.value ? "" : S.value), R = y(() => d.value ? void 0 : l.ariaLabel || a("el.colorpicker.defaultLabel")), P = y(() => d.value ? r == null ? void 0 : r.labelId : void 0), W = y(() => [s.b("picker"), s.is("disabled", u.value), s.bm("picker", i.value), s.is("focused", g.value)]);
  function te(ce, Ie) {
    if (!(ce instanceof Ho)) throw new TypeError("color should be instance of _color Class");
    const { r: me, g: se, b: ke } = ce.toRgb();
    return Ie ? `rgba(${me}, ${se}, ${ke}, ${ce.get("alpha") / 100})` : `rgb(${me}, ${se}, ${ke})`;
  }
  function A(ce) {
    E.value = ce;
  }
  const L = Pn(A, 100, { leading: true });
  function F() {
    u.value || A(true);
  }
  function V() {
    L(false), B();
  }
  function B() {
    $e(() => {
      l.modelValue ? S.fromString(l.modelValue) : (S.value = "", $e(() => {
        M.value = false;
      }));
    });
  }
  function G() {
    u.value || (E.value && B(), L(!E.value));
  }
  function U() {
    S.fromString(O.value);
  }
  function ne() {
    const ce = S.value;
    n(Ae, ce), n(et, ce), l.validateEvent && (r == null ? void 0 : r.validate("change").catch((Ie) => void 0)), L(false), $e(() => {
      const Ie = new Ho({ enableAlpha: l.showAlpha, format: l.colorFormat || "", value: l.modelValue });
      S.compare(Ie) || B();
    });
  }
  function Z() {
    L(false), n(Ae, null), n(et, null), l.modelValue !== null && l.validateEvent && (r == null ? void 0 : r.validate("change").catch((ce) => void 0)), B();
  }
  function ee() {
    E.value && (V(), g.value && Q());
  }
  function re(ce) {
    ce.preventDefault(), ce.stopPropagation(), A(false), B();
  }
  function le(ce) {
    switch (ce.code) {
      case ye.enter:
      case ye.numpadEnter:
      case ye.space:
        ce.preventDefault(), ce.stopPropagation(), F(), b.value.focus();
        break;
      case ye.esc:
        re(ce);
        break;
    }
  }
  function Q() {
    p.value.focus();
  }
  function ie() {
    p.value.blur();
  }
  return Xe(() => {
    l.modelValue && (O.value = I.value);
  }), ue(() => l.modelValue, (ce) => {
    ce ? ce && ce !== S.value && (C = false, S.fromString(ce)) : M.value = false;
  }), ue(() => [l.colorFormat, l.showAlpha], () => {
    S.enableAlpha = l.showAlpha, S.format = l.colorFormat || S.format, S.doOnChange(), n(Ae, S.value);
  }), ue(() => I.value, (ce) => {
    O.value = ce, C && n("activeChange", ce), C = true;
  }), ue(() => S.value, () => {
    !l.modelValue && !M.value && (M.value = true);
  }), ue(() => E.value, () => {
    $e(() => {
      var ce, Ie, me;
      (ce = f.value) == null || ce.update(), (Ie = m.value) == null || Ie.update(), (me = h.value) == null || me.update();
    });
  }), ut(uf, { currentColor: I }), t({ color: S, show: F, hide: V, focus: Q, blur: ie }), (ce, Ie) => (k(), oe(o(rn), { ref_key: "popper", ref: v, visible: E.value, "show-arrow": false, "fallback-placements": ["bottom", "top", "right", "left"], offset: 0, "gpu-acceleration": false, "popper-class": [o(s).be("picker", "panel"), o(s).b("dropdown"), ce.popperClass], "stop-popper-mouse-event": false, effect: "light", trigger: "click", teleported: ce.teleported, transition: `${o(s).namespace.value}-zoom-in-top`, persistent: "", onHide: (me) => A(false) }, { content: j(() => [Ye((k(), D("div", { onKeydown: $t(re, ["esc"]) }, [x("div", { class: $(o(s).be("dropdown", "main-wrapper")) }, [z(VC, { ref_key: "hue", ref: f, class: "hue-slider", color: o(S), vertical: "" }, null, 8, ["color"]), z(qC, { ref_key: "sv", ref: m, color: o(S) }, null, 8, ["color"])], 2), ce.showAlpha ? (k(), oe(LC, { key: 0, ref_key: "alpha", ref: h, color: o(S) }, null, 8, ["color"])) : J("v-if", true), ce.predefine ? (k(), oe(jC, { key: 1, ref: "predefine", "enable-alpha": ce.showAlpha, color: o(S), colors: ce.predefine }, null, 8, ["enable-alpha", "color", "colors"])) : J("v-if", true), x("div", { class: $(o(s).be("dropdown", "btns")) }, [x("span", { class: $(o(s).be("dropdown", "value")) }, [z(o(hn), { ref_key: "inputRef", ref: b, modelValue: O.value, "onUpdate:modelValue": (me) => O.value = me, "validate-event": false, size: "small", onKeyup: $t(U, ["enter"]), onBlur: U }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])], 2), z(o(Qt), { class: $(o(s).be("dropdown", "link-btn")), text: "", size: "small", onClick: Z }, { default: j(() => [at(he(o(a)("el.colorpicker.clear")), 1)]), _: 1 }, 8, ["class"]), z(o(Qt), { plain: "", size: "small", class: $(o(s).be("dropdown", "btn")), onClick: ne }, { default: j(() => [at(he(o(a)("el.colorpicker.confirm")), 1)]), _: 1 }, 8, ["class"])], 2)], 40, ["onKeydown"])), [[o(il), ee, p.value]])]), default: j(() => [x("div", lt({ id: o(c), ref_key: "triggerRef", ref: p }, ce.$attrs, { class: o(W), role: "button", "aria-label": o(R), "aria-labelledby": o(P), "aria-description": o(a)("el.colorpicker.description", { color: ce.modelValue || "" }), "aria-disabled": o(u), tabindex: o(u) ? void 0 : ce.tabindex, onKeydown: le, onFocus: o(T), onBlur: o(w) }), [o(u) ? (k(), D("div", { key: 0, class: $(o(s).be("picker", "mask")) }, null, 2)) : J("v-if", true), x("div", { class: $(o(s).be("picker", "trigger")), onClick: G }, [x("span", { class: $([o(s).be("picker", "color"), o(s).is("alpha", ce.showAlpha)]) }, [x("span", { class: $(o(s).be("picker", "color-inner")), style: Me({ backgroundColor: o(_) }) }, [Ye(z(o(Ee), { class: $([o(s).be("picker", "icon"), o(s).is("icon-arrow-down")]) }, { default: j(() => [z(o(fl))]), _: 1 }, 8, ["class"]), [[pt, ce.modelValue || M.value]]), Ye(z(o(Ee), { class: $([o(s).be("picker", "empty"), o(s).is("icon-close")]) }, { default: j(() => [z(o(An))]), _: 1 }, 8, ["class"]), [[pt, !ce.modelValue && !M.value]])], 6)], 2)], 2)], 16, ["id", "aria-label", "aria-labelledby", "aria-description", "aria-disabled", "tabindex", "onFocus", "onBlur"])]), _: 1 }, 8, ["visible", "popper-class", "teleported", "transition", "onHide"]));
} });
var ZC = ve(XC, [["__file", "color-picker.vue"]]);
const JC = We(ZC), QC = pe({ a11y: { type: Boolean, default: true }, locale: { type: Y(Object) }, size: Wt, button: { type: Y(Object) }, experimentalFeatures: { type: Y(Object) }, keyboardNavigation: { type: Boolean, default: true }, message: { type: Y(Object) }, zIndex: Number, namespace: { type: String, default: "el" }, ...Io }), xn = {}, ew = K({ name: "ElConfigProvider", props: QC, setup(e, { slots: t }) {
  ue(() => e.message, (l) => {
    Object.assign(xn, l ?? {});
  }, { immediate: true, deep: true });
  const n = jr(e);
  return () => X(t, "default", { config: n == null ? void 0 : n.value });
} }), tw = We(ew), nw = K({ name: "ElContainer" }), lw = K({ ...nw, props: { direction: { type: String } }, setup(e) {
  const t = e, n = Yt(), l = de("container"), a = y(() => t.direction === "vertical" ? true : t.direction === "horizontal" ? false : n && n.default ? n.default().some((r) => {
    const i = r.type.name;
    return i === "ElHeader" || i === "ElFooter";
  }) : false);
  return (s, r) => (k(), D("section", { class: $([o(l).b(), o(l).is("vertical", o(a))]) }, [X(s.$slots, "default")], 2));
} });
var ow = ve(lw, [["__file", "container.vue"]]);
const aw = K({ name: "ElAside" }), sw = K({ ...aw, props: { width: { type: String, default: null } }, setup(e) {
  const t = e, n = de("aside"), l = y(() => t.width ? n.cssVarBlock({ width: t.width }) : {});
  return (a, s) => (k(), D("aside", { class: $(o(n).b()), style: Me(o(l)) }, [X(a.$slots, "default")], 6));
} });
var cf = ve(sw, [["__file", "aside.vue"]]);
const rw = K({ name: "ElFooter" }), iw = K({ ...rw, props: { height: { type: String, default: null } }, setup(e) {
  const t = e, n = de("footer"), l = y(() => t.height ? n.cssVarBlock({ height: t.height }) : {});
  return (a, s) => (k(), D("footer", { class: $(o(n).b()), style: Me(o(l)) }, [X(a.$slots, "default")], 6));
} });
var df = ve(iw, [["__file", "footer.vue"]]);
const uw = K({ name: "ElHeader" }), cw = K({ ...uw, props: { height: { type: String, default: null } }, setup(e) {
  const t = e, n = de("header"), l = y(() => t.height ? n.cssVarBlock({ height: t.height }) : {});
  return (a, s) => (k(), D("header", { class: $(o(n).b()), style: Me(o(l)) }, [X(a.$slots, "default")], 6));
} });
var ff = ve(cw, [["__file", "header.vue"]]);
const dw = K({ name: "ElMain" }), fw = K({ ...dw, setup(e) {
  const t = de("main");
  return (n, l) => (k(), D("main", { class: $(o(t).b()) }, [X(n.$slots, "default")], 2));
} });
var pf = ve(fw, [["__file", "main.vue"]]);
const pw = We(ow, { Aside: cf, Footer: df, Header: ff, Main: pf }), vw = Vt(cf), hw = Vt(df), mw = Vt(ff), gw = Vt(pf), Wu = ["hours", "minutes", "seconds"], Fa = "HH:mm:ss", oo = "YYYY-MM-DD", bw = { date: oo, dates: oo, week: "gggg[w]ww", year: "YYYY", years: "YYYY", month: "YYYY-MM", months: "YYYY-MM", datetime: `${oo} ${Fa}`, monthrange: "YYYY-MM", yearrange: "YYYY", daterange: oo, datetimerange: `${oo} ${Fa}` }, vf = pe({ disabledHours: { type: Y(Function) }, disabledMinutes: { type: Y(Function) }, disabledSeconds: { type: Y(Function) } }), hf = pe({ visible: Boolean, actualVisible: { type: Boolean, default: void 0 }, format: { type: String, default: "" } }), ri = pe({ id: { type: Y([Array, String]) }, name: { type: Y([Array, String]) }, popperClass: { type: String, default: "" }, format: String, valueFormat: String, dateFormat: String, timeFormat: String, type: { type: String, default: "" }, clearable: { type: Boolean, default: true }, clearIcon: { type: Y([String, Object]), default: dl }, editable: { type: Boolean, default: true }, prefixIcon: { type: Y([String, Object]), default: "" }, size: Wt, readonly: Boolean, disabled: Boolean, placeholder: { type: String, default: "" }, popperOptions: { type: Y(Object), default: () => ({}) }, modelValue: { type: Y([Date, Array, String, Number]), default: "" }, rangeSeparator: { type: String, default: "-" }, startPlaceholder: String, endPlaceholder: String, defaultValue: { type: Y([Date, Array]) }, defaultTime: { type: Y([Date, Array]) }, isRange: Boolean, ...vf, disabledDate: { type: Function }, cellClassName: { type: Function }, shortcuts: { type: Array, default: () => [] }, arrowControl: Boolean, tabindex: { type: Y([String, Number]), default: 0 }, validateEvent: { type: Boolean, default: true }, unlinkPanels: Boolean, placement: { type: Y(String), values: Yl, default: "bottom" }, fallbackPlacements: { type: Y(Array), default: ["bottom", "top", "right", "left"] }, ...Io, ...ln(["ariaLabel"]), showNow: { type: Boolean, default: true } }), yw = pe({ id: { type: Y(Array) }, name: { type: Y(Array) }, modelValue: { type: Y([Array, String]) }, startPlaceholder: String, endPlaceholder: String, disabled: Boolean }), Cw = K({ name: "PickerRangeTrigger", inheritAttrs: false }), ww = K({ ...Cw, props: yw, emits: ["mouseenter", "mouseleave", "click", "touchstart", "focus", "blur", "startInput", "endInput", "startChange", "endChange"], setup(e, { expose: t, emit: n }) {
  const l = oa(), a = de("date"), s = de("range"), r = N(), i = N(), { wrapperRef: u, isFocused: c } = Ol(r), d = (C) => {
    n("click", C);
  }, f = (C) => {
    n("mouseenter", C);
  }, m = (C) => {
    n("mouseleave", C);
  }, h = (C) => {
    n("mouseenter", C);
  }, v = (C) => {
    n("startInput", C);
  }, p = (C) => {
    n("endInput", C);
  }, b = (C) => {
    n("startChange", C);
  }, g = (C) => {
    n("endChange", C);
  };
  return t({ focus: () => {
    var C;
    (C = r.value) == null || C.focus();
  }, blur: () => {
    var C, S;
    (C = r.value) == null || C.blur(), (S = i.value) == null || S.blur();
  } }), (C, S) => (k(), D("div", { ref_key: "wrapperRef", ref: u, class: $([o(a).is("active", o(c)), C.$attrs.class]), style: Me(C.$attrs.style), onClick: d, onMouseenter: f, onMouseleave: m, onTouchstartPassive: h }, [X(C.$slots, "prefix"), x("input", lt(o(l), { id: C.id && C.id[0], ref_key: "inputRef", ref: r, name: C.name && C.name[0], placeholder: C.startPlaceholder, value: C.modelValue && C.modelValue[0], class: o(s).b("input"), disabled: C.disabled, onInput: v, onChange: b }), null, 16, ["id", "name", "placeholder", "value", "disabled"]), X(C.$slots, "range-separator"), x("input", lt(o(l), { id: C.id && C.id[1], ref_key: "endInputRef", ref: i, name: C.name && C.name[1], placeholder: C.endPlaceholder, value: C.modelValue && C.modelValue[1], class: o(s).b("input"), disabled: C.disabled, onInput: p, onChange: g }), null, 16, ["id", "name", "placeholder", "value", "disabled"]), X(C.$slots, "suffix")], 38));
} });
var Sw = ve(ww, [["__file", "picker-range-trigger.vue"]]);
const kw = K({ name: "Picker" }), Ew = K({ ...kw, props: ri, emits: [Ae, et, "focus", "blur", "clear", "calendar-change", "panel-change", "visible-change", "keydown"], setup(e, { expose: t, emit: n }) {
  const l = e, a = ul(), { lang: s } = ft(), r = de("date"), i = de("input"), u = de("range"), { form: c, formItem: d } = un(), f = we("ElPopperOptions", {}), { valueOnClear: m } = ss(l, null), h = N(), v = N(), p = N(false), b = N(false), g = N(null);
  let T = false;
  const { isFocused: w, handleFocus: C, handleBlur: S } = Ol(v, { beforeFocus() {
    return l.readonly || B.value;
  }, afterFocus() {
    p.value = true;
  }, beforeBlur(H) {
    var fe;
    return !T && ((fe = h.value) == null ? void 0 : fe.isFocusInsideContent(H));
  }, afterBlur() {
    Ge(), p.value = false, T = false, l.validateEvent && (d == null ? void 0 : d.validate("blur").catch((H) => void 0));
  } }), E = y(() => [r.b("editor"), r.bm("editor", l.type), i.e("wrapper"), r.is("disabled", B.value), r.is("active", p.value), u.b("editor"), je ? u.bm("editor", je.value) : "", a.class]), M = y(() => [i.e("icon"), u.e("close-icon"), ie.value ? "" : u.e("close-icon--hidden")]);
  ue(p, (H) => {
    H ? $e(() => {
      H && (g.value = l.modelValue);
    }) : (Te.value = null, $e(() => {
      O(l.modelValue);
    }));
  });
  const O = (H, fe) => {
    (fe || !_u(H, g.value)) && (n(et, H), fe && (g.value = H), l.validateEvent && (d == null ? void 0 : d.validate("change").catch((Fe) => void 0)));
  }, _ = (H) => {
    if (!_u(l.modelValue, H)) {
      let fe;
      Se(H) ? fe = H.map((Fe) => Ou(Fe, l.valueFormat, s.value)) : H && (fe = Ou(H, l.valueFormat, s.value)), n(Ae, H && fe, s.value);
    }
  }, I = (H) => {
    n("keydown", H);
  }, R = y(() => v.value ? Array.from(v.value.$el.querySelectorAll("input")) : []), P = (H, fe, Fe) => {
    const He = R.value;
    He.length && (!Fe || Fe === "min" ? (He[0].setSelectionRange(H, fe), He[0].focus()) : Fe === "max" && (He[1].setSelectionRange(H, fe), He[1].focus()));
  }, W = (H = "", fe = false) => {
    p.value = fe;
    let Fe;
    Se(H) ? Fe = H.map((He) => He.toDate()) : Fe = H && H.toDate(), Te.value = null, _(Fe);
  }, te = () => {
    b.value = true;
  }, A = () => {
    n("visible-change", true);
  }, L = () => {
    b.value = false, p.value = false, n("visible-change", false);
  }, F = () => {
    p.value = true;
  }, V = () => {
    p.value = false;
  }, B = y(() => l.disabled || (c == null ? void 0 : c.disabled)), G = y(() => {
    let H;
    if (Ie.value ? kt.value.getDefaultValue && (H = kt.value.getDefaultValue()) : Se(l.modelValue) ? H = l.modelValue.map((fe) => Mu(fe, l.valueFormat, s.value)) : H = Mu(l.modelValue, l.valueFormat, s.value), kt.value.getRangeAvailableTime) {
      const fe = kt.value.getRangeAvailableTime(H);
      Zt(fe, H) || (H = fe, Ie.value || _(ma(H)));
    }
    return Se(H) && H.some((fe) => !fe) && (H = []), H;
  }), U = y(() => {
    if (!kt.value.panelReady) return "";
    const H = ot(G.value);
    return Se(Te.value) ? [Te.value[0] || H && H[0] || "", Te.value[1] || H && H[1] || ""] : Te.value !== null ? Te.value : !Z.value && Ie.value || !p.value && Ie.value ? "" : H ? ee.value || re.value || le.value ? H.join(", ") : H : "";
  }), ne = y(() => l.type.includes("time")), Z = y(() => l.type.startsWith("time")), ee = y(() => l.type === "dates"), re = y(() => l.type === "months"), le = y(() => l.type === "years"), Q = y(() => l.prefixIcon || (ne.value ? zc : Uv)), ie = N(false), ce = (H) => {
    l.readonly || B.value || (ie.value && (H.stopPropagation(), kt.value.handleClear ? kt.value.handleClear() : _(m.value), O(m.value, true), ie.value = false, L()), n("clear"));
  }, Ie = y(() => {
    const { modelValue: H } = l;
    return !H || Se(H) && !H.filter(Boolean).length;
  }), me = async (H) => {
    var fe;
    l.readonly || B.value || (((fe = H.target) == null ? void 0 : fe.tagName) !== "INPUT" || w.value) && (p.value = true);
  }, se = () => {
    l.readonly || B.value || !Ie.value && l.clearable && (ie.value = true);
  }, ke = () => {
    ie.value = false;
  }, De = (H) => {
    var fe;
    l.readonly || B.value || (((fe = H.touches[0].target) == null ? void 0 : fe.tagName) !== "INPUT" || w.value) && (p.value = true);
  }, qe = y(() => l.type.includes("range")), je = Ht(), Le = y(() => {
    var H, fe;
    return (fe = (H = o(h)) == null ? void 0 : H.popperRef) == null ? void 0 : fe.contentRef;
  }), Ne = Wr(v, (H) => {
    const fe = o(Le), Fe = Sn(v);
    fe && (H.target === fe || H.composedPath().includes(fe)) || H.target === Fe || Fe && H.composedPath().includes(Fe) || (p.value = false);
  });
  It(() => {
    Ne == null ? void 0 : Ne();
  });
  const Te = N(null), Ge = () => {
    if (Te.value) {
      const H = Ze(U.value);
      H && st(H) && (_(ma(H)), Te.value = null);
    }
    Te.value === "" && (_(m.value), O(m.value, true), Te.value = null);
  }, Ze = (H) => H ? kt.value.parseUserInput(H) : null, ot = (H) => H ? kt.value.formatToString(H) : null, st = (H) => kt.value.isValidValue(H), Ce = async (H) => {
    if (l.readonly || B.value) return;
    const { code: fe } = H;
    if (I(H), fe === ye.esc) {
      p.value === true && (p.value = false, H.preventDefault(), H.stopPropagation());
      return;
    }
    if (fe === ye.down && (kt.value.handleFocusPicker && (H.preventDefault(), H.stopPropagation()), p.value === false && (p.value = true, await $e()), kt.value.handleFocusPicker)) {
      kt.value.handleFocusPicker();
      return;
    }
    if (fe === ye.tab) {
      T = true;
      return;
    }
    if (fe === ye.enter || fe === ye.numpadEnter) {
      (Te.value === null || Te.value === "" || st(Ze(U.value))) && (Ge(), p.value = false), H.stopPropagation();
      return;
    }
    if (Te.value) {
      H.stopPropagation();
      return;
    }
    kt.value.handleKeydownInput && kt.value.handleKeydownInput(H);
  }, Ue = (H) => {
    Te.value = H, p.value || (p.value = true);
  }, ht = (H) => {
    const fe = H.target;
    Te.value ? Te.value = [fe.value, Te.value[1]] : Te.value = [fe.value, null];
  }, Pt = (H) => {
    const fe = H.target;
    Te.value ? Te.value = [Te.value[0], fe.value] : Te.value = [null, fe.value];
  }, Nt = () => {
    var H;
    const fe = Te.value, Fe = Ze(fe && fe[0]), He = o(G);
    if (Fe && Fe.isValid()) {
      Te.value = [ot(Fe), ((H = U.value) == null ? void 0 : H[1]) || null];
      const wt = [Fe, He && (He[1] || null)];
      st(wt) && (_(ma(wt)), Te.value = null);
    }
  }, _t = () => {
    var H;
    const fe = o(Te), Fe = Ze(fe && fe[1]), He = o(G);
    if (Fe && Fe.isValid()) {
      Te.value = [((H = o(U)) == null ? void 0 : H[0]) || null, ot(Fe)];
      const wt = [He && He[0], Fe];
      st(wt) && (_(ma(wt)), Te.value = null);
    }
  }, kt = N({}), dn = (H) => {
    kt.value[H[0]] = H[1], kt.value.panelReady = true;
  }, xe = (H) => {
    n("calendar-change", H);
  }, rt = (H, fe, Fe) => {
    n("panel-change", H, fe, Fe);
  }, q = () => {
    var H;
    (H = v.value) == null || H.focus();
  }, ae = () => {
    var H;
    (H = v.value) == null || H.blur();
  };
  return ut("EP_PICKER_BASE", { props: l }), t({ focus: q, blur: ae, handleOpen: F, handleClose: V, onPick: W }), (H, fe) => (k(), oe(o(rn), lt({ ref_key: "refPopper", ref: h, visible: p.value, effect: "light", pure: "", trigger: "click" }, H.$attrs, { role: "dialog", teleported: "", transition: `${o(r).namespace.value}-zoom-in-top`, "popper-class": [`${o(r).namespace.value}-picker__popper`, H.popperClass], "popper-options": o(f), "fallback-placements": H.fallbackPlacements, "gpu-acceleration": false, placement: H.placement, "stop-popper-mouse-event": false, "hide-after": 0, persistent: "", onBeforeShow: te, onShow: A, onHide: L }), { default: j(() => [o(qe) ? (k(), oe(Sw, { key: 1, id: H.id, ref_key: "inputRef", ref: v, "model-value": o(U), name: H.name, disabled: o(B), readonly: !H.editable || H.readonly, "start-placeholder": H.startPlaceholder, "end-placeholder": H.endPlaceholder, class: $(o(E)), style: Me(H.$attrs.style), "aria-label": H.ariaLabel, tabindex: H.tabindex, autocomplete: "off", role: "combobox", onClick: me, onFocus: o(C), onBlur: o(S), onStartInput: ht, onStartChange: Nt, onEndInput: Pt, onEndChange: _t, onMousedown: me, onMouseenter: se, onMouseleave: ke, onTouchstartPassive: De, onKeydown: Ce }, { prefix: j(() => [o(Q) ? (k(), oe(o(Ee), { key: 0, class: $([o(i).e("icon"), o(u).e("icon")]) }, { default: j(() => [(k(), oe(Je(o(Q))))]), _: 1 }, 8, ["class"])) : J("v-if", true)]), "range-separator": j(() => [X(H.$slots, "range-separator", {}, () => [x("span", { class: $(o(u).b("separator")) }, he(H.rangeSeparator), 3)])]), suffix: j(() => [H.clearIcon ? (k(), oe(o(Ee), { key: 0, class: $(o(M)), onMousedown: Re(o(Rt), ["prevent"]), onClick: ce }, { default: j(() => [(k(), oe(Je(H.clearIcon)))]), _: 1 }, 8, ["class", "onMousedown"])) : J("v-if", true)]), _: 3 }, 8, ["id", "model-value", "name", "disabled", "readonly", "start-placeholder", "end-placeholder", "class", "style", "aria-label", "tabindex", "onFocus", "onBlur"])) : (k(), oe(o(hn), { key: 0, id: H.id, ref_key: "inputRef", ref: v, "container-role": "combobox", "model-value": o(U), name: H.name, size: o(je), disabled: o(B), placeholder: H.placeholder, class: $([o(r).b("editor"), o(r).bm("editor", H.type), H.$attrs.class]), style: Me(H.$attrs.style), readonly: !H.editable || H.readonly || o(ee) || o(re) || o(le) || H.type === "week", "aria-label": H.ariaLabel, tabindex: H.tabindex, "validate-event": false, onInput: Ue, onFocus: o(C), onBlur: o(S), onKeydown: Ce, onChange: Ge, onMousedown: me, onMouseenter: se, onMouseleave: ke, onTouchstartPassive: De, onClick: Re(() => {
  }, ["stop"]) }, { prefix: j(() => [o(Q) ? (k(), oe(o(Ee), { key: 0, class: $(o(i).e("icon")), onMousedown: Re(me, ["prevent"]), onTouchstartPassive: De }, { default: j(() => [(k(), oe(Je(o(Q))))]), _: 1 }, 8, ["class", "onMousedown"])) : J("v-if", true)]), suffix: j(() => [ie.value && H.clearIcon ? (k(), oe(o(Ee), { key: 0, class: $(`${o(i).e("icon")} clear-icon`), onMousedown: Re(o(Rt), ["prevent"]), onClick: ce }, { default: j(() => [(k(), oe(Je(H.clearIcon)))]), _: 1 }, 8, ["class", "onMousedown"])) : J("v-if", true)]), _: 1 }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "aria-label", "tabindex", "onFocus", "onBlur", "onClick"]))]), content: j(() => [X(H.$slots, "default", { visible: p.value, actualVisible: b.value, parsedValue: o(G), format: H.format, dateFormat: H.dateFormat, timeFormat: H.timeFormat, unlinkPanels: H.unlinkPanels, type: H.type, defaultValue: H.defaultValue, showNow: H.showNow, onPick: W, onSelectRange: P, onSetPickerOption: dn, onCalendarChange: xe, onPanelChange: rt, onMousedown: Re(() => {
  }, ["stop"]) })]), _: 3 }, 16, ["visible", "transition", "popper-class", "popper-options", "fallback-placements", "placement"]));
} });
var mf = ve(Ew, [["__file", "picker.vue"]]);
const $w = pe({ ...hf, datetimeRole: String, parsedValue: { type: Y(Object) } }), gf = ({ getAvailableHours: e, getAvailableMinutes: t, getAvailableSeconds: n }) => {
  const l = (r, i, u, c) => {
    const d = { hour: e, minute: t, second: n };
    let f = r;
    return ["hour", "minute", "second"].forEach((m) => {
      if (d[m]) {
        let h;
        const v = d[m];
        switch (m) {
          case "minute": {
            h = v(f.hour(), i, c);
            break;
          }
          case "second": {
            h = v(f.hour(), f.minute(), i, c);
            break;
          }
          default: {
            h = v(i, c);
            break;
          }
        }
        if ((h == null ? void 0 : h.length) && !h.includes(f[m]())) {
          const p = u ? 0 : h.length - 1;
          f = f[m](h[p]);
        }
      }
    }), f;
  }, a = {};
  return { timePickerOptions: a, getAvailableTime: l, onSetOption: ([r, i]) => {
    a[r] = i;
  } };
}, Bs = (e) => {
  const t = (l, a) => l || a, n = (l) => l !== true;
  return e.map(t).filter(n);
}, bf = (e, t, n) => ({ getHoursList: (r, i) => Os(24, e && (() => e == null ? void 0 : e(r, i))), getMinutesList: (r, i, u) => Os(60, t && (() => t == null ? void 0 : t(r, i, u))), getSecondsList: (r, i, u, c) => Os(60, n && (() => n == null ? void 0 : n(r, i, u, c))) }), yf = (e, t, n) => {
  const { getHoursList: l, getMinutesList: a, getSecondsList: s } = bf(e, t, n);
  return { getAvailableHours: (c, d) => Bs(l(c, d)), getAvailableMinutes: (c, d, f) => Bs(a(c, d, f)), getAvailableSeconds: (c, d, f, m) => Bs(s(c, d, f, m)) };
}, Cf = (e) => {
  const t = N(e.parsedValue);
  return ue(() => e.visible, (n) => {
    n || (t.value = e.parsedValue);
  }), t;
}, Tw = pe({ role: { type: String, required: true }, spinnerDate: { type: Y(Object), required: true }, showSeconds: { type: Boolean, default: true }, arrowControl: Boolean, amPmMode: { type: Y(String), default: "" }, ...vf }), Nw = 100, Iw = 600, za = { beforeMount(e, t) {
  const n = t.value, { interval: l = Nw, delay: a = Iw } = Qe(n) ? {} : n;
  let s, r;
  const i = () => Qe(n) ? n() : n.handler(), u = () => {
    r && (clearTimeout(r), r = void 0), s && (clearInterval(s), s = void 0);
  };
  e.addEventListener("mousedown", (c) => {
    c.button === 0 && (u(), i(), document.addEventListener("mouseup", () => u(), { once: true }), r = setTimeout(() => {
      s = setInterval(() => {
        i();
      }, l);
    }, a));
  });
} }, _w = K({ __name: "basic-time-spinner", props: Tw, emits: [et, "select-range", "set-option"], setup(e, { emit: t }) {
  const n = e, l = we("EP_PICKER_BASE"), { isRange: a, format: s } = l.props, r = de("time"), { getHoursList: i, getMinutesList: u, getSecondsList: c } = bf(n.disabledHours, n.disabledMinutes, n.disabledSeconds);
  let d = false;
  const f = N(), m = N(), h = N(), v = N(), p = { hours: m, minutes: h, seconds: v }, b = y(() => n.showSeconds ? Wu : Wu.slice(0, 2)), g = y(() => {
    const { spinnerDate: ne } = n, Z = ne.hour(), ee = ne.minute(), re = ne.second();
    return { hours: Z, minutes: ee, seconds: re };
  }), T = y(() => {
    const { hours: ne, minutes: Z } = o(g), { role: ee, spinnerDate: re } = n, le = a ? void 0 : re;
    return { hours: i(ee, le), minutes: u(ne, ee, le), seconds: c(ne, Z, ee, le) };
  }), w = y(() => {
    const { hours: ne, minutes: Z, seconds: ee } = o(g);
    return { hours: Ms(ne, 23), minutes: Ms(Z, 59), seconds: Ms(ee, 59) };
  }), C = Pn((ne) => {
    d = false, M(ne);
  }, 200), S = (ne) => {
    if (!!!n.amPmMode) return "";
    const ee = n.amPmMode === "A";
    let re = ne < 12 ? " am" : " pm";
    return ee && (re = re.toUpperCase()), re;
  }, E = (ne) => {
    let Z = [0, 0];
    if (!s || s === Fa) switch (ne) {
      case "hours":
        Z = [0, 2];
        break;
      case "minutes":
        Z = [3, 5];
        break;
      case "seconds":
        Z = [6, 8];
        break;
    }
    const [ee, re] = Z;
    t("select-range", ee, re), f.value = ne;
  }, M = (ne) => {
    I(ne, o(g)[ne]);
  }, O = () => {
    M("hours"), M("minutes"), M("seconds");
  }, _ = (ne) => ne.querySelector(`.${r.namespace.value}-scrollbar__wrap`), I = (ne, Z) => {
    if (n.arrowControl) return;
    const ee = o(p[ne]);
    ee && ee.$el && (_(ee.$el).scrollTop = Math.max(0, Z * R(ne)));
  }, R = (ne) => {
    const Z = o(p[ne]), ee = Z == null ? void 0 : Z.$el.querySelector("li");
    return ee && Number.parseFloat(ll(ee, "height")) || 0;
  }, P = () => {
    te(1);
  }, W = () => {
    te(-1);
  }, te = (ne) => {
    f.value || E("hours");
    const Z = f.value, ee = o(g)[Z], re = f.value === "hours" ? 24 : 60, le = A(Z, ee, ne, re);
    L(Z, le), I(Z, le), $e(() => E(Z));
  }, A = (ne, Z, ee, re) => {
    let le = (Z + ee + re) % re;
    const Q = o(T)[ne];
    for (; Q[le] && le !== Z; ) le = (le + ee + re) % re;
    return le;
  }, L = (ne, Z) => {
    if (o(T)[ne][Z]) return;
    const { hours: le, minutes: Q, seconds: ie } = o(g);
    let ce;
    switch (ne) {
      case "hours":
        ce = n.spinnerDate.hour(Z).minute(Q).second(ie);
        break;
      case "minutes":
        ce = n.spinnerDate.hour(le).minute(Z).second(ie);
        break;
      case "seconds":
        ce = n.spinnerDate.hour(le).minute(Q).second(Z);
        break;
    }
    t(et, ce);
  }, F = (ne, { value: Z, disabled: ee }) => {
    ee || (L(ne, Z), E(ne), I(ne, Z));
  }, V = (ne) => {
    const Z = o(p[ne]);
    if (!Z) return;
    d = true, C(ne);
    const ee = Math.min(Math.round((_(Z.$el).scrollTop - (B(ne) * 0.5 - 10) / R(ne) + 3) / R(ne)), ne === "hours" ? 23 : 59);
    L(ne, ee);
  }, B = (ne) => o(p[ne]).$el.offsetHeight, G = () => {
    const ne = (Z) => {
      const ee = o(p[Z]);
      ee && ee.$el && (_(ee.$el).onscroll = () => {
        V(Z);
      });
    };
    ne("hours"), ne("minutes"), ne("seconds");
  };
  Xe(() => {
    $e(() => {
      !n.arrowControl && G(), O(), n.role === "start" && E("hours");
    });
  });
  const U = (ne, Z) => {
    p[Z].value = ne ?? void 0;
  };
  return t("set-option", [`${n.role}_scrollDown`, te]), t("set-option", [`${n.role}_emitSelectRange`, E]), ue(() => n.spinnerDate, () => {
    d || O();
  }), (ne, Z) => (k(), D("div", { class: $([o(r).b("spinner"), { "has-seconds": ne.showSeconds }]) }, [ne.arrowControl ? J("v-if", true) : (k(true), D(Pe, { key: 0 }, it(o(b), (ee) => (k(), oe(o(el), { key: ee, ref_for: true, ref: (re) => U(re, ee), class: $(o(r).be("spinner", "wrapper")), "wrap-style": "max-height: inherit;", "view-class": o(r).be("spinner", "list"), noresize: "", tag: "ul", onMouseenter: (re) => E(ee), onMousemove: (re) => M(ee) }, { default: j(() => [(k(true), D(Pe, null, it(o(T)[ee], (re, le) => (k(), D("li", { key: le, class: $([o(r).be("spinner", "item"), o(r).is("active", le === o(g)[ee]), o(r).is("disabled", re)]), onClick: (Q) => F(ee, { value: le, disabled: re }) }, [ee === "hours" ? (k(), D(Pe, { key: 0 }, [at(he(("0" + (ne.amPmMode ? le % 12 || 12 : le)).slice(-2)) + he(S(le)), 1)], 64)) : (k(), D(Pe, { key: 1 }, [at(he(("0" + le).slice(-2)), 1)], 64))], 10, ["onClick"]))), 128))]), _: 2 }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]))), 128)), ne.arrowControl ? (k(true), D(Pe, { key: 1 }, it(o(b), (ee) => (k(), D("div", { key: ee, class: $([o(r).be("spinner", "wrapper"), o(r).is("arrow")]), onMouseenter: (re) => E(ee) }, [Ye((k(), oe(o(Ee), { class: $(["arrow-up", o(r).be("spinner", "arrow")]) }, { default: j(() => [z(o(zr))]), _: 1 }, 8, ["class"])), [[o(za), W]]), Ye((k(), oe(o(Ee), { class: $(["arrow-down", o(r).be("spinner", "arrow")]) }, { default: j(() => [z(o(fl))]), _: 1 }, 8, ["class"])), [[o(za), P]]), x("ul", { class: $(o(r).be("spinner", "list")) }, [(k(true), D(Pe, null, it(o(w)[ee], (re, le) => (k(), D("li", { key: le, class: $([o(r).be("spinner", "item"), o(r).is("active", re === o(g)[ee]), o(r).is("disabled", o(T)[ee][re])]) }, [o(_e)(re) ? (k(), D(Pe, { key: 0 }, [ee === "hours" ? (k(), D(Pe, { key: 0 }, [at(he(("0" + (ne.amPmMode ? re % 12 || 12 : re)).slice(-2)) + he(S(re)), 1)], 64)) : (k(), D(Pe, { key: 1 }, [at(he(("0" + re).slice(-2)), 1)], 64))], 64)) : J("v-if", true)], 2))), 128))], 2)], 42, ["onMouseenter"]))), 128)) : J("v-if", true)], 2));
} });
var ar = ve(_w, [["__file", "basic-time-spinner.vue"]]);
const Mw = K({ __name: "panel-time-pick", props: $w, emits: ["pick", "select-range", "set-picker-option"], setup(e, { emit: t }) {
  const n = e, l = we("EP_PICKER_BASE"), { arrowControl: a, disabledHours: s, disabledMinutes: r, disabledSeconds: i, defaultValue: u } = l.props, { getAvailableHours: c, getAvailableMinutes: d, getAvailableSeconds: f } = yf(s, r, i), m = de("time"), { t: h, lang: v } = ft(), p = N([0, 2]), b = Cf(n), g = y(() => vt(n.actualVisible) ? `${m.namespace.value}-zoom-in-top` : ""), T = y(() => n.format.includes("ss")), w = y(() => n.format.includes("A") ? "A" : n.format.includes("a") ? "a" : ""), C = (V) => {
    const B = Ke(V).locale(v.value), G = te(B);
    return B.isSame(G);
  }, S = () => {
    t("pick", b.value, false);
  }, E = (V = false, B = false) => {
    B || t("pick", n.parsedValue, V);
  }, M = (V) => {
    if (!n.visible) return;
    const B = te(V).millisecond(0);
    t("pick", B, true);
  }, O = (V, B) => {
    t("select-range", V, B), p.value = [V, B];
  }, _ = (V) => {
    const B = [0, 3].concat(T.value ? [6] : []), G = ["hours", "minutes"].concat(T.value ? ["seconds"] : []), ne = (B.indexOf(p.value[0]) + V + B.length) % B.length;
    R.start_emitSelectRange(G[ne]);
  }, I = (V) => {
    const B = V.code, { left: G, right: U, up: ne, down: Z } = ye;
    if ([G, U].includes(B)) {
      _(B === G ? -1 : 1), V.preventDefault();
      return;
    }
    if ([ne, Z].includes(B)) {
      const ee = B === ne ? -1 : 1;
      R.start_scrollDown(ee), V.preventDefault();
      return;
    }
  }, { timePickerOptions: R, onSetOption: P, getAvailableTime: W } = gf({ getAvailableHours: c, getAvailableMinutes: d, getAvailableSeconds: f }), te = (V) => W(V, n.datetimeRole || "", true), A = (V) => V ? Ke(V, n.format).locale(v.value) : null, L = (V) => V ? V.format(n.format) : null, F = () => Ke(u).locale(v.value);
  return t("set-picker-option", ["isValidValue", C]), t("set-picker-option", ["formatToString", L]), t("set-picker-option", ["parseUserInput", A]), t("set-picker-option", ["handleKeydownInput", I]), t("set-picker-option", ["getRangeAvailableTime", te]), t("set-picker-option", ["getDefaultValue", F]), (V, B) => (k(), oe(en, { name: o(g) }, { default: j(() => [V.actualVisible || V.visible ? (k(), D("div", { key: 0, class: $(o(m).b("panel")) }, [x("div", { class: $([o(m).be("panel", "content"), { "has-seconds": o(T) }]) }, [z(ar, { ref: "spinner", role: V.datetimeRole || "start", "arrow-control": o(a), "show-seconds": o(T), "am-pm-mode": o(w), "spinner-date": V.parsedValue, "disabled-hours": o(s), "disabled-minutes": o(r), "disabled-seconds": o(i), onChange: M, onSetOption: o(P), onSelectRange: O }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])], 2), x("div", { class: $(o(m).be("panel", "footer")) }, [x("button", { type: "button", class: $([o(m).be("panel", "btn"), "cancel"]), onClick: S }, he(o(h)("el.datepicker.cancel")), 3), x("button", { type: "button", class: $([o(m).be("panel", "btn"), "confirm"]), onClick: (G) => E() }, he(o(h)("el.datepicker.confirm")), 11, ["onClick"])], 2)], 2)) : J("v-if", true)]), _: 1 }, 8, ["name"]));
} });
var xa = ve(Mw, [["__file", "panel-time-pick.vue"]]);
const Ow = pe({ ...hf, parsedValue: { type: Y(Array) } }), Pw = K({ __name: "panel-time-range", props: Ow, emits: ["pick", "select-range", "set-picker-option"], setup(e, { emit: t }) {
  const n = e, l = (me, se) => {
    const ke = [];
    for (let De = me; De <= se; De++) ke.push(De);
    return ke;
  }, { t: a, lang: s } = ft(), r = de("time"), i = de("picker"), u = we("EP_PICKER_BASE"), { arrowControl: c, disabledHours: d, disabledMinutes: f, disabledSeconds: m, defaultValue: h } = u.props, v = y(() => [r.be("range-picker", "body"), r.be("panel", "content"), r.is("arrow", c), C.value ? "has-seconds" : ""]), p = y(() => [r.be("range-picker", "body"), r.be("panel", "content"), r.is("arrow", c), C.value ? "has-seconds" : ""]), b = y(() => n.parsedValue[0]), g = y(() => n.parsedValue[1]), T = Cf(n), w = () => {
    t("pick", T.value, false);
  }, C = y(() => n.format.includes("ss")), S = y(() => n.format.includes("A") ? "A" : n.format.includes("a") ? "a" : ""), E = (me = false) => {
    t("pick", [b.value, g.value], me);
  }, M = (me) => {
    I(me.millisecond(0), g.value);
  }, O = (me) => {
    I(b.value, me.millisecond(0));
  }, _ = (me) => {
    const se = me.map((De) => Ke(De).locale(s.value)), ke = U(se);
    return se[0].isSame(ke[0]) && se[1].isSame(ke[1]);
  }, I = (me, se) => {
    n.visible && t("pick", [me, se], true);
  }, R = y(() => b.value > g.value), P = N([0, 2]), W = (me, se) => {
    t("select-range", me, se, "min"), P.value = [me, se];
  }, te = y(() => C.value ? 11 : 8), A = (me, se) => {
    t("select-range", me, se, "max");
    const ke = o(te);
    P.value = [me + ke, se + ke];
  }, L = (me) => {
    const se = C.value ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11], ke = ["hours", "minutes"].concat(C.value ? ["seconds"] : []), qe = (se.indexOf(P.value[0]) + me + se.length) % se.length, je = se.length / 2;
    qe < je ? re.start_emitSelectRange(ke[qe]) : re.end_emitSelectRange(ke[qe - je]);
  }, F = (me) => {
    const se = me.code, { left: ke, right: De, up: qe, down: je } = ye;
    if ([ke, De].includes(se)) {
      L(se === ke ? -1 : 1), me.preventDefault();
      return;
    }
    if ([qe, je].includes(se)) {
      const Le = se === qe ? -1 : 1, Ne = P.value[0] < te.value ? "start" : "end";
      re[`${Ne}_scrollDown`](Le), me.preventDefault();
      return;
    }
  }, V = (me, se) => {
    const ke = d ? d(me) : [], De = me === "start", je = (se || (De ? g.value : b.value)).hour(), Le = De ? l(je + 1, 23) : l(0, je - 1);
    return Ns(ke, Le);
  }, B = (me, se, ke) => {
    const De = f ? f(me, se) : [], qe = se === "start", je = ke || (qe ? g.value : b.value), Le = je.hour();
    if (me !== Le) return De;
    const Ne = je.minute(), Te = qe ? l(Ne + 1, 59) : l(0, Ne - 1);
    return Ns(De, Te);
  }, G = (me, se, ke, De) => {
    const qe = m ? m(me, se, ke) : [], je = ke === "start", Le = De || (je ? g.value : b.value), Ne = Le.hour(), Te = Le.minute();
    if (me !== Ne || se !== Te) return qe;
    const Ge = Le.second(), Ze = je ? l(Ge + 1, 59) : l(0, Ge - 1);
    return Ns(qe, Ze);
  }, U = ([me, se]) => [le(me, "start", true, se), le(se, "end", false, me)], { getAvailableHours: ne, getAvailableMinutes: Z, getAvailableSeconds: ee } = yf(V, B, G), { timePickerOptions: re, getAvailableTime: le, onSetOption: Q } = gf({ getAvailableHours: ne, getAvailableMinutes: Z, getAvailableSeconds: ee }), ie = (me) => me ? Se(me) ? me.map((se) => Ke(se, n.format).locale(s.value)) : Ke(me, n.format).locale(s.value) : null, ce = (me) => me ? Se(me) ? me.map((se) => se.format(n.format)) : me.format(n.format) : null, Ie = () => {
    if (Se(h)) return h.map((se) => Ke(se).locale(s.value));
    const me = Ke(h).locale(s.value);
    return [me, me.add(60, "m")];
  };
  return t("set-picker-option", ["formatToString", ce]), t("set-picker-option", ["parseUserInput", ie]), t("set-picker-option", ["isValidValue", _]), t("set-picker-option", ["handleKeydownInput", F]), t("set-picker-option", ["getDefaultValue", Ie]), t("set-picker-option", ["getRangeAvailableTime", U]), (me, se) => me.actualVisible ? (k(), D("div", { key: 0, class: $([o(r).b("range-picker"), o(i).b("panel")]) }, [x("div", { class: $(o(r).be("range-picker", "content")) }, [x("div", { class: $(o(r).be("range-picker", "cell")) }, [x("div", { class: $(o(r).be("range-picker", "header")) }, he(o(a)("el.datepicker.startTime")), 3), x("div", { class: $(o(v)) }, [z(ar, { ref: "minSpinner", role: "start", "show-seconds": o(C), "am-pm-mode": o(S), "arrow-control": o(c), "spinner-date": o(b), "disabled-hours": V, "disabled-minutes": B, "disabled-seconds": G, onChange: M, onSetOption: o(Q), onSelectRange: W }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "onSetOption"])], 2)], 2), x("div", { class: $(o(r).be("range-picker", "cell")) }, [x("div", { class: $(o(r).be("range-picker", "header")) }, he(o(a)("el.datepicker.endTime")), 3), x("div", { class: $(o(p)) }, [z(ar, { ref: "maxSpinner", role: "end", "show-seconds": o(C), "am-pm-mode": o(S), "arrow-control": o(c), "spinner-date": o(g), "disabled-hours": V, "disabled-minutes": B, "disabled-seconds": G, onChange: O, onSetOption: o(Q), onSelectRange: A }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "onSetOption"])], 2)], 2)], 2), x("div", { class: $(o(r).be("panel", "footer")) }, [x("button", { type: "button", class: $([o(r).be("panel", "btn"), "cancel"]), onClick: (ke) => w() }, he(o(a)("el.datepicker.cancel")), 11, ["onClick"]), x("button", { type: "button", class: $([o(r).be("panel", "btn"), "confirm"]), disabled: o(R), onClick: (ke) => E() }, he(o(a)("el.datepicker.confirm")), 11, ["disabled", "onClick"])], 2)], 2)) : J("v-if", true);
} });
var Rw = ve(Pw, [["__file", "panel-time-range.vue"]]);
Ke.extend(xr);
var Lw = K({ name: "ElTimePicker", install: null, props: { ...ri, isRange: { type: Boolean, default: false } }, emits: [Ae], setup(e, t) {
  const n = N(), [l, a] = e.isRange ? ["timerange", Rw] : ["time", xa], s = (r) => t.emit(Ae, r);
  return ut("ElPopperOptions", e.popperOptions), t.expose({ focus: () => {
    var r;
    (r = n.value) == null || r.focus();
  }, blur: () => {
    var r;
    (r = n.value) == null || r.blur();
  }, handleOpen: () => {
    var r;
    (r = n.value) == null || r.handleOpen();
  }, handleClose: () => {
    var r;
    (r = n.value) == null || r.handleClose();
  } }), () => {
    var r;
    const i = (r = e.format) != null ? r : Fa;
    return z(mf, lt(e, { ref: n, type: l, format: i, "onUpdate:modelValue": s }), { default: (u) => z(a, u, null) });
  };
} });
const Bw = We(Lw), vs = Symbol(), Dw = pe({ ...ri, type: { type: Y(String), default: "date" } }), Vw = ["date", "dates", "year", "years", "month", "months", "week", "range"], ii = pe({ disabledDate: { type: Y(Function) }, date: { type: Y(Object), required: true }, minDate: { type: Y(Object) }, maxDate: { type: Y(Object) }, parsedValue: { type: Y([Object, Array]) }, rangeState: { type: Y(Object), default: () => ({ endDate: null, selecting: false }) } }), wf = pe({ type: { type: Y(String), required: true, values: hy }, dateFormat: String, timeFormat: String, showNow: { type: Boolean, default: true } }), ui = pe({ unlinkPanels: Boolean, parsedValue: { type: Y(Array) } }), ci = (e) => ({ type: String, values: Vw, default: e }), Aw = pe({ ...wf, parsedValue: { type: Y([Object, Array]) }, visible: { type: Boolean }, format: { type: String, default: "" } }), Co = (e) => {
  if (!Se(e)) return false;
  const [t, n] = e;
  return Ke.isDayjs(t) && Ke.isDayjs(n) && Ke(t).isValid() && Ke(n).isValid() && t.isSameOrBefore(n);
}, di = (e, { lang: t, unit: n, unlinkPanels: l }) => {
  let a;
  if (Se(e)) {
    let [s, r] = e.map((i) => Ke(i).locale(t));
    return l || (r = s.add(1, n)), [s, r];
  } else e ? a = Ke(e) : a = Ke();
  return a = a.locale(t), [a, a.add(1, n)];
}, Fw = (e, t, { columnIndexOffset: n, startDate: l, nextEndDate: a, now: s, unit: r, relativeDateGetter: i, setCellMetadata: u, setRowMetadata: c }) => {
  for (let d = 0; d < e.row; d++) {
    const f = t[d];
    for (let m = 0; m < e.column; m++) {
      let h = f[m + n];
      h || (h = { row: d, column: m, type: "normal", inRange: false, start: false, end: false });
      const v = d * e.column + m, p = i(v);
      h.dayjs = p, h.date = p.toDate(), h.timestamp = p.valueOf(), h.type = "normal", h.inRange = !!(l && p.isSameOrAfter(l, r) && a && p.isSameOrBefore(a, r)) || !!(l && p.isSameOrBefore(l, r) && a && p.isSameOrAfter(a, r)), (l == null ? void 0 : l.isSameOrAfter(a)) ? (h.start = !!a && p.isSame(a, r), h.end = l && p.isSame(l, r)) : (h.start = !!l && p.isSame(l, r), h.end = !!a && p.isSame(a, r)), p.isSame(s, r) && (h.type = "today"), u == null ? void 0 : u(h, { rowIndex: d, columnIndex: m }), f[m + n] = h;
    }
    c == null ? void 0 : c(f);
  }
}, Ha = (e, t, n) => {
  const l = Ke().locale(n).startOf("month").month(t).year(e), a = l.daysInMonth();
  return Sl(a).map((s) => l.add(s, "day").toDate());
}, Uo = (e, t, n, l) => {
  const a = Ke().year(e).month(t).startOf("month"), s = Ha(e, t, n).find((r) => !(l == null ? void 0 : l(r)));
  return s ? Ke(s).locale(n) : a.locale(n);
}, sr = (e, t, n) => {
  const l = e.year();
  if (!(n == null ? void 0 : n(e.toDate()))) return e.locale(t);
  const a = e.month();
  if (!Ha(l, a, t).every(n)) return Uo(l, a, t, n);
  for (let s = 0; s < 12; s++) if (!Ha(l, s, t).every(n)) return Uo(l, s, t, n);
  return e;
}, wo = (e, t, n, l) => {
  if (Se(e)) return e.map((a) => wo(a, t, n, l));
  if (Be(e)) {
    const a = l.value ? Ke(e) : Ke(e, t);
    if (!a.isValid()) return a;
  }
  return Ke(e, t).locale(n);
}, zw = pe({ ...ii, cellClassName: { type: Y(Function) }, showWeekNumber: Boolean, selectionMode: ci("date") }), xw = ["changerange", "pick", "select"], rr = (e = "") => ["normal", "today"].includes(e), Hw = (e, t) => {
  const { lang: n } = ft(), l = N(), a = N(), s = N(), r = N(), i = N([[], [], [], [], [], []]);
  let u = false;
  const c = e.date.$locale().weekStart || 7, d = e.date.locale("en").localeData().weekdaysShort().map((B) => B.toLowerCase()), f = y(() => c > 3 ? 7 - c : -c), m = y(() => {
    const B = e.date.startOf("month");
    return B.subtract(B.day() || 7, "day");
  }), h = y(() => d.concat(d).slice(c, c + 7)), v = y(() => Fv(o(C)).some((B) => B.isCurrent)), p = y(() => {
    const B = e.date.startOf("month"), G = B.day() || 7, U = B.daysInMonth(), ne = B.subtract(1, "month").daysInMonth();
    return { startOfMonthDay: G, dateCountOfMonth: U, dateCountOfLastMonth: ne };
  }), b = y(() => e.selectionMode === "dates" ? wn(e.parsedValue) : []), g = (B, { count: G, rowIndex: U, columnIndex: ne }) => {
    const { startOfMonthDay: Z, dateCountOfMonth: ee, dateCountOfLastMonth: re } = o(p), le = o(f);
    if (U >= 0 && U <= 1) {
      const Q = Z + le < 0 ? 7 + Z + le : Z + le;
      if (ne + U * 7 >= Q) return B.text = G, true;
      B.text = re - (Q - ne % 7) + 1 + U * 7, B.type = "prev-month";
    } else return G <= ee ? B.text = G : (B.text = G - ee, B.type = "next-month"), true;
    return false;
  }, T = (B, { columnIndex: G, rowIndex: U }, ne) => {
    const { disabledDate: Z, cellClassName: ee } = e, re = o(b), le = g(B, { count: ne, rowIndex: U, columnIndex: G }), Q = B.dayjs.toDate();
    return B.selected = re.find((ie) => ie.isSame(B.dayjs, "day")), B.isSelected = !!B.selected, B.isCurrent = E(B), B.disabled = Z == null ? void 0 : Z(Q), B.customClass = ee == null ? void 0 : ee(Q), le;
  }, w = (B) => {
    if (e.selectionMode === "week") {
      const [G, U] = e.showWeekNumber ? [1, 7] : [0, 6], ne = V(B[G + 1]);
      B[G].inRange = ne, B[G].start = ne, B[U].inRange = ne, B[U].end = ne;
    }
  }, C = y(() => {
    const { minDate: B, maxDate: G, rangeState: U, showWeekNumber: ne } = e, Z = o(f), ee = o(i), re = "day";
    let le = 1;
    if (ne) for (let Q = 0; Q < 6; Q++) ee[Q][0] || (ee[Q][0] = { type: "week", text: o(m).add(Q * 7 + 1, re).week() });
    return Fw({ row: 6, column: 7 }, ee, { startDate: B, columnIndexOffset: ne ? 1 : 0, nextEndDate: U.endDate || G || U.selecting && B || null, now: Ke().locale(o(n)).startOf(re), unit: re, relativeDateGetter: (Q) => o(m).add(Q - Z, re), setCellMetadata: (...Q) => {
      T(...Q, le) && (le += 1);
    }, setRowMetadata: w }), ee;
  });
  ue(() => e.date, async () => {
    var B;
    (B = o(l)) != null && B.contains(document.activeElement) && (await $e(), await S());
  });
  const S = async () => {
    var B;
    return (B = o(a)) == null ? void 0 : B.focus();
  }, E = (B) => e.selectionMode === "date" && rr(B.type) && M(B, e.parsedValue), M = (B, G) => G ? Ke(G).locale(o(n)).isSame(e.date.date(Number(B.text)), "day") : false, O = (B, G) => {
    const U = B * 7 + (G - (e.showWeekNumber ? 1 : 0)) - o(f);
    return o(m).add(U, "day");
  }, _ = (B) => {
    var G;
    if (!e.rangeState.selecting) return;
    let U = B.target;
    if (U.tagName === "SPAN" && (U = (G = U.parentNode) == null ? void 0 : G.parentNode), U.tagName === "DIV" && (U = U.parentNode), U.tagName !== "TD") return;
    const ne = U.parentNode.rowIndex - 1, Z = U.cellIndex;
    o(C)[ne][Z].disabled || (ne !== o(s) || Z !== o(r)) && (s.value = ne, r.value = Z, t("changerange", { selecting: true, endDate: O(ne, Z) }));
  }, I = (B) => !o(v) && (B == null ? void 0 : B.text) === 1 && B.type === "normal" || B.isCurrent, R = (B) => {
    u || o(v) || e.selectionMode !== "date" || F(B, true);
  }, P = (B) => {
    B.target.closest("td") && (u = true);
  }, W = (B) => {
    B.target.closest("td") && (u = false);
  }, te = (B) => {
    !e.rangeState.selecting || !e.minDate ? (t("pick", { minDate: B, maxDate: null }), t("select", true)) : (B >= e.minDate ? t("pick", { minDate: e.minDate, maxDate: B }) : t("pick", { minDate: B, maxDate: e.minDate }), t("select", false));
  }, A = (B) => {
    const G = B.week(), U = `${B.year()}w${G}`;
    t("pick", { year: B.year(), week: G, value: U, date: B.startOf("week") });
  }, L = (B, G) => {
    const U = G ? wn(e.parsedValue).filter((ne) => (ne == null ? void 0 : ne.valueOf()) !== B.valueOf()) : wn(e.parsedValue).concat([B]);
    t("pick", U);
  }, F = (B, G = false) => {
    const U = B.target.closest("td");
    if (!U) return;
    const ne = U.parentNode.rowIndex - 1, Z = U.cellIndex, ee = o(C)[ne][Z];
    if (ee.disabled || ee.type === "week") return;
    const re = O(ne, Z);
    switch (e.selectionMode) {
      case "range": {
        te(re);
        break;
      }
      case "date": {
        t("pick", re, G);
        break;
      }
      case "week": {
        A(re);
        break;
      }
      case "dates": {
        L(re, !!ee.selected);
        break;
      }
    }
  }, V = (B) => {
    if (e.selectionMode !== "week") return false;
    let G = e.date.startOf("day");
    if (B.type === "prev-month" && (G = G.subtract(1, "month")), B.type === "next-month" && (G = G.add(1, "month")), G = G.date(Number.parseInt(B.text, 10)), e.parsedValue && !Se(e.parsedValue)) {
      const U = (e.parsedValue.day() - c + 7) % 7 - 1;
      return e.parsedValue.subtract(U, "day").isSame(G, "day");
    }
    return false;
  };
  return { WEEKS: h, rows: C, tbodyRef: l, currentCellRef: a, focus: S, isCurrent: E, isWeekActive: V, isSelectedCell: I, handlePickDate: F, handleMouseUp: W, handleMouseDown: P, handleMouseMove: _, handleFocus: R };
}, Kw = (e, { isCurrent: t, isWeekActive: n }) => {
  const l = de("date-table"), { t: a } = ft(), s = y(() => [l.b(), { "is-week-mode": e.selectionMode === "week" }]), r = y(() => a("el.datepicker.dateTablePrompt")), i = y(() => a("el.datepicker.week"));
  return { tableKls: s, tableLabel: r, weekLabel: i, getCellClasses: (d) => {
    const f = [];
    return rr(d.type) && !d.disabled ? (f.push("available"), d.type === "today" && f.push("today")) : f.push(d.type), t(d) && f.push("current"), d.inRange && (rr(d.type) || e.selectionMode === "week") && (f.push("in-range"), d.start && f.push("start-date"), d.end && f.push("end-date")), d.disabled && f.push("disabled"), d.selected && f.push("selected"), d.customClass && f.push(d.customClass), f.join(" ");
  }, getRowKls: (d) => [l.e("row"), { current: n(d) }], t: a };
}, Ww = pe({ cell: { type: Y(Object) } });
var fi = K({ name: "ElDatePickerCell", props: Ww, setup(e) {
  const t = de("date-table-cell"), { slots: n } = we(vs);
  return () => {
    const { cell: l } = e;
    return X(n, "default", { ...l }, () => {
      var a;
      return [z("div", { class: t.b() }, [z("span", { class: t.e("text") }, [(a = l == null ? void 0 : l.renderText) != null ? a : l == null ? void 0 : l.text])])];
    });
  };
} });
const jw = K({ __name: "basic-date-table", props: zw, emits: xw, setup(e, { expose: t, emit: n }) {
  const l = e, { WEEKS: a, rows: s, tbodyRef: r, currentCellRef: i, focus: u, isCurrent: c, isWeekActive: d, isSelectedCell: f, handlePickDate: m, handleMouseUp: h, handleMouseDown: v, handleMouseMove: p, handleFocus: b } = Hw(l, n), { tableLabel: g, tableKls: T, weekLabel: w, getCellClasses: C, getRowKls: S, t: E } = Kw(l, { isCurrent: c, isWeekActive: d });
  let M = false;
  return It(() => {
    M = true;
  }), t({ focus: u }), (O, _) => (k(), D("table", { "aria-label": o(g), class: $(o(T)), cellspacing: "0", cellpadding: "0", role: "grid", onClick: o(m), onMousemove: o(p), onMousedown: Re(o(v), ["prevent"]), onMouseup: o(h) }, [x("tbody", { ref_key: "tbodyRef", ref: r }, [x("tr", null, [O.showWeekNumber ? (k(), D("th", { key: 0, scope: "col" }, he(o(w)), 1)) : J("v-if", true), (k(true), D(Pe, null, it(o(a), (I, R) => (k(), D("th", { key: R, "aria-label": o(E)("el.datepicker.weeksFull." + I), scope: "col" }, he(o(E)("el.datepicker.weeks." + I)), 9, ["aria-label"]))), 128))]), (k(true), D(Pe, null, it(o(s), (I, R) => (k(), D("tr", { key: R, class: $(o(S)(I[1])) }, [(k(true), D(Pe, null, it(I, (P, W) => (k(), D("td", { key: `${R}.${W}`, ref_for: true, ref: (te) => !o(M) && o(f)(P) && (i.value = te), class: $(o(C)(P)), "aria-current": P.isCurrent ? "date" : void 0, "aria-selected": P.isCurrent, tabindex: o(f)(P) ? 0 : -1, onFocus: o(b) }, [z(o(fi), { cell: P }, null, 8, ["cell"])], 42, ["aria-current", "aria-selected", "tabindex", "onFocus"]))), 128))], 2))), 128))], 512)], 42, ["aria-label", "onClick", "onMousemove", "onMousedown", "onMouseup"]));
} });
var ir = ve(jw, [["__file", "basic-date-table.vue"]]);
const Uw = pe({ ...ii, selectionMode: ci("month") }), Yw = K({ __name: "basic-month-table", props: Uw, emits: ["changerange", "pick", "select"], setup(e, { expose: t, emit: n }) {
  const l = e, a = de("month-table"), { t: s, lang: r } = ft(), i = N(), u = N(), c = N(l.date.locale("en").localeData().monthsShort().map((w) => w.toLowerCase())), d = N([[], [], []]), f = N(), m = N(), h = y(() => {
    var w, C;
    const S = d.value, E = Ke().locale(r.value).startOf("month");
    for (let M = 0; M < 3; M++) {
      const O = S[M];
      for (let _ = 0; _ < 4; _++) {
        const I = O[_] || (O[_] = { row: M, column: _, type: "normal", inRange: false, start: false, end: false, text: -1, disabled: false });
        I.type = "normal";
        const R = M * 4 + _, P = l.date.startOf("year").month(R), W = l.rangeState.endDate || l.maxDate || l.rangeState.selecting && l.minDate || null;
        I.inRange = !!(l.minDate && P.isSameOrAfter(l.minDate, "month") && W && P.isSameOrBefore(W, "month")) || !!(l.minDate && P.isSameOrBefore(l.minDate, "month") && W && P.isSameOrAfter(W, "month")), (w = l.minDate) != null && w.isSameOrAfter(W) ? (I.start = !!(W && P.isSame(W, "month")), I.end = l.minDate && P.isSame(l.minDate, "month")) : (I.start = !!(l.minDate && P.isSame(l.minDate, "month")), I.end = !!(W && P.isSame(W, "month"))), E.isSame(P) && (I.type = "today"), I.text = R, I.disabled = ((C = l.disabledDate) == null ? void 0 : C.call(l, P.toDate())) || false;
      }
    }
    return S;
  }), v = () => {
    var w;
    (w = u.value) == null || w.focus();
  }, p = (w) => {
    const C = {}, S = l.date.year(), E = /* @__PURE__ */ new Date(), M = w.text;
    return C.disabled = l.disabledDate ? Ha(S, M, r.value).every(l.disabledDate) : false, C.current = wn(l.parsedValue).findIndex((O) => Ke.isDayjs(O) && O.year() === S && O.month() === M) >= 0, C.today = E.getFullYear() === S && E.getMonth() === M, w.inRange && (C["in-range"] = true, w.start && (C["start-date"] = true), w.end && (C["end-date"] = true)), C;
  }, b = (w) => {
    const C = l.date.year(), S = w.text;
    return wn(l.date).findIndex((E) => E.year() === C && E.month() === S) >= 0;
  }, g = (w) => {
    var C;
    if (!l.rangeState.selecting) return;
    let S = w.target;
    if (S.tagName === "SPAN" && (S = (C = S.parentNode) == null ? void 0 : C.parentNode), S.tagName === "DIV" && (S = S.parentNode), S.tagName !== "TD") return;
    const E = S.parentNode.rowIndex, M = S.cellIndex;
    h.value[E][M].disabled || (E !== f.value || M !== m.value) && (f.value = E, m.value = M, n("changerange", { selecting: true, endDate: l.date.startOf("year").month(E * 4 + M) }));
  }, T = (w) => {
    var C;
    const S = (C = w.target) == null ? void 0 : C.closest("td");
    if ((S == null ? void 0 : S.tagName) !== "TD" || Nn(S, "disabled")) return;
    const E = S.cellIndex, O = S.parentNode.rowIndex * 4 + E, _ = l.date.startOf("year").month(O);
    if (l.selectionMode === "months") {
      if (w.type === "keydown") {
        n("pick", wn(l.parsedValue), false);
        return;
      }
      const I = Uo(l.date.year(), O, r.value, l.disabledDate), R = Nn(S, "current") ? wn(l.parsedValue).filter((P) => (P == null ? void 0 : P.year()) !== I.year() || (P == null ? void 0 : P.month()) !== I.month()) : wn(l.parsedValue).concat([Ke(I)]);
      n("pick", R);
    } else l.selectionMode === "range" ? l.rangeState.selecting ? (l.minDate && _ >= l.minDate ? n("pick", { minDate: l.minDate, maxDate: _ }) : n("pick", { minDate: _, maxDate: l.minDate }), n("select", false)) : (n("pick", { minDate: _, maxDate: null }), n("select", true)) : n("pick", O);
  };
  return ue(() => l.date, async () => {
    var w, C;
    (w = i.value) != null && w.contains(document.activeElement) && (await $e(), (C = u.value) == null || C.focus());
  }), t({ focus: v }), (w, C) => (k(), D("table", { role: "grid", "aria-label": o(s)("el.datepicker.monthTablePrompt"), class: $(o(a).b()), onClick: T, onMousemove: g }, [x("tbody", { ref_key: "tbodyRef", ref: i }, [(k(true), D(Pe, null, it(o(h), (S, E) => (k(), D("tr", { key: E }, [(k(true), D(Pe, null, it(S, (M, O) => (k(), D("td", { key: O, ref_for: true, ref: (_) => b(M) && (u.value = _), class: $(p(M)), "aria-selected": `${b(M)}`, "aria-label": o(s)(`el.datepicker.month${+M.text + 1}`), tabindex: b(M) ? 0 : -1, onKeydown: [$t(Re(T, ["prevent", "stop"]), ["space"]), $t(Re(T, ["prevent", "stop"]), ["enter"])] }, [z(o(fi), { cell: { ...M, renderText: o(s)("el.datepicker.months." + c.value[M.text]) } }, null, 8, ["cell"])], 42, ["aria-selected", "aria-label", "tabindex", "onKeydown"]))), 128))]))), 128))], 512)], 42, ["aria-label"]));
} });
var ur = ve(Yw, [["__file", "basic-month-table.vue"]]);
const qw = pe({ ...ii, selectionMode: ci("year") }), Gw = K({ __name: "basic-year-table", props: qw, emits: ["changerange", "pick", "select"], setup(e, { expose: t, emit: n }) {
  const l = e, a = (C, S) => {
    const E = Ke(String(C)).locale(S).startOf("year"), O = E.endOf("year").dayOfYear();
    return Sl(O).map((_) => E.add(_, "day").toDate());
  }, s = de("year-table"), { t: r, lang: i } = ft(), u = N(), c = N(), d = y(() => Math.floor(l.date.year() / 10) * 10), f = N([[], [], []]), m = N(), h = N(), v = y(() => {
    var C;
    const S = f.value, E = Ke().locale(i.value).startOf("year");
    for (let M = 0; M < 3; M++) {
      const O = S[M];
      for (let _ = 0; _ < 4 && !(M * 4 + _ >= 10); _++) {
        let I = O[_];
        I || (I = { row: M, column: _, type: "normal", inRange: false, start: false, end: false, text: -1, disabled: false }), I.type = "normal";
        const R = M * 4 + _ + d.value, P = Ke().year(R), W = l.rangeState.endDate || l.maxDate || l.rangeState.selecting && l.minDate || null;
        I.inRange = !!(l.minDate && P.isSameOrAfter(l.minDate, "year") && W && P.isSameOrBefore(W, "year")) || !!(l.minDate && P.isSameOrBefore(l.minDate, "year") && W && P.isSameOrAfter(W, "year")), (C = l.minDate) != null && C.isSameOrAfter(W) ? (I.start = !!(W && P.isSame(W, "year")), I.end = !!(l.minDate && P.isSame(l.minDate, "year"))) : (I.start = !!(l.minDate && P.isSame(l.minDate, "year")), I.end = !!(W && P.isSame(W, "year"))), E.isSame(P) && (I.type = "today"), I.text = R;
        const A = P.toDate();
        I.disabled = l.disabledDate && l.disabledDate(A) || false, O[_] = I;
      }
    }
    return S;
  }), p = () => {
    var C;
    (C = c.value) == null || C.focus();
  }, b = (C) => {
    const S = {}, E = Ke().locale(i.value), M = C.text;
    return S.disabled = l.disabledDate ? a(M, i.value).every(l.disabledDate) : false, S.today = E.year() === M, S.current = wn(l.parsedValue).findIndex((O) => O.year() === M) >= 0, C.inRange && (S["in-range"] = true, C.start && (S["start-date"] = true), C.end && (S["end-date"] = true)), S;
  }, g = (C) => {
    const S = C.text;
    return wn(l.date).findIndex((E) => E.year() === S) >= 0;
  }, T = (C) => {
    var S;
    const E = (S = C.target) == null ? void 0 : S.closest("td");
    if (!E || !E.textContent || Nn(E, "disabled")) return;
    const M = E.cellIndex, _ = E.parentNode.rowIndex * 4 + M + d.value, I = Ke().year(_);
    if (l.selectionMode === "range") l.rangeState.selecting ? (l.minDate && I >= l.minDate ? n("pick", { minDate: l.minDate, maxDate: I }) : n("pick", { minDate: I, maxDate: l.minDate }), n("select", false)) : (n("pick", { minDate: I, maxDate: null }), n("select", true));
    else if (l.selectionMode === "years") {
      if (C.type === "keydown") {
        n("pick", wn(l.parsedValue), false);
        return;
      }
      const R = sr(I.startOf("year"), i.value, l.disabledDate), P = Nn(E, "current") ? wn(l.parsedValue).filter((W) => (W == null ? void 0 : W.year()) !== _) : wn(l.parsedValue).concat([R]);
      n("pick", P);
    } else n("pick", _);
  }, w = (C) => {
    var S;
    if (!l.rangeState.selecting) return;
    const E = (S = C.target) == null ? void 0 : S.closest("td");
    if (!E) return;
    const M = E.parentNode.rowIndex, O = E.cellIndex;
    v.value[M][O].disabled || (M !== m.value || O !== h.value) && (m.value = M, h.value = O, n("changerange", { selecting: true, endDate: Ke().year(d.value).add(M * 4 + O, "year") }));
  };
  return ue(() => l.date, async () => {
    var C, S;
    (C = u.value) != null && C.contains(document.activeElement) && (await $e(), (S = c.value) == null || S.focus());
  }), t({ focus: p }), (C, S) => (k(), D("table", { role: "grid", "aria-label": o(r)("el.datepicker.yearTablePrompt"), class: $(o(s).b()), onClick: T, onMousemove: w }, [x("tbody", { ref_key: "tbodyRef", ref: u }, [(k(true), D(Pe, null, it(o(v), (E, M) => (k(), D("tr", { key: M }, [(k(true), D(Pe, null, it(E, (O, _) => (k(), D("td", { key: `${M}_${_}`, ref_for: true, ref: (I) => g(O) && (c.value = I), class: $(["available", b(O)]), "aria-selected": g(O), "aria-label": String(O.text), tabindex: g(O) ? 0 : -1, onKeydown: [$t(Re(T, ["prevent", "stop"]), ["space"]), $t(Re(T, ["prevent", "stop"]), ["enter"])] }, [z(o(fi), { cell: O }, null, 8, ["cell"])], 42, ["aria-selected", "aria-label", "tabindex", "onKeydown"]))), 128))]))), 128))], 512)], 42, ["aria-label"]));
} });
var cr = ve(Gw, [["__file", "basic-year-table.vue"]]);
const Xw = K({ __name: "panel-date-pick", props: Aw, emits: ["pick", "set-picker-option", "panel-change"], setup(e, { emit: t }) {
  const n = e, l = (q, ae, H) => true, a = de("picker-panel"), s = de("date-picker"), r = ul(), i = Yt(), { t: u, lang: c } = ft(), d = we("EP_PICKER_BASE"), f = we("ElIsDefaultFormat"), m = we(fs), { shortcuts: h, disabledDate: v, cellClassName: p, defaultTime: b } = d.props, g = yt(d.props, "defaultValue"), T = N(), w = N(Ke().locale(c.value)), C = N(false);
  let S = false;
  const E = y(() => Ke(b).locale(c.value)), M = y(() => w.value.month()), O = y(() => w.value.year()), _ = N([]), I = N(null), R = N(null), P = (q) => _.value.length > 0 ? l(q, _.value, n.format || "HH:mm:ss") : true, W = (q) => b && !je.value && !C.value && !S ? E.value.year(q.year()).month(q.month()).date(q.date()) : ie.value ? q.millisecond(0) : q.startOf("day"), te = (q, ...ae) => {
    if (!q) t("pick", q, ...ae);
    else if (Se(q)) {
      const H = q.map(W);
      t("pick", H, ...ae);
    } else t("pick", W(q), ...ae);
    I.value = null, R.value = null, C.value = false, S = false;
  }, A = async (q, ae) => {
    if (U.value === "date") {
      q = q;
      let H = n.parsedValue ? n.parsedValue.year(q.year()).month(q.month()).date(q.date()) : q;
      P(H) || (H = _.value[0][0].year(q.year()).month(q.month()).date(q.date())), w.value = H, te(H, ie.value || ae), n.type === "datetime" && (await $e(), _t());
    } else U.value === "week" ? te(q.date) : U.value === "dates" && te(q, true);
  }, L = (q) => {
    const ae = q ? "add" : "subtract";
    w.value = w.value[ae](1, "month"), rt("month");
  }, F = (q) => {
    const ae = w.value, H = q ? "add" : "subtract";
    w.value = V.value === "year" ? ae[H](10, "year") : ae[H](1, "year"), rt("year");
  }, V = N("date"), B = y(() => {
    const q = u("el.datepicker.year");
    if (V.value === "year") {
      const ae = Math.floor(O.value / 10) * 10;
      return q ? `${ae} ${q} - ${ae + 9} ${q}` : `${ae} - ${ae + 9}`;
    }
    return `${O.value} ${q}`;
  }), G = (q) => {
    const ae = Qe(q.value) ? q.value() : q.value;
    if (ae) {
      S = true, te(Ke(ae).locale(c.value));
      return;
    }
    q.onClick && q.onClick({ attrs: r, slots: i, emit: t });
  }, U = y(() => {
    const { type: q } = n;
    return ["week", "month", "months", "year", "years", "dates"].includes(q) ? q : "date";
  }), ne = y(() => U.value === "dates" || U.value === "months" || U.value === "years"), Z = y(() => U.value === "date" ? V.value : U.value), ee = y(() => !!h.length), re = async (q, ae) => {
    U.value === "month" ? (w.value = Uo(w.value.year(), q, c.value, v), te(w.value, false)) : U.value === "months" ? te(q, ae ?? true) : (w.value = Uo(w.value.year(), q, c.value, v), V.value = "date", ["month", "year", "date", "week"].includes(U.value) && (te(w.value, true), await $e(), _t())), rt("month");
  }, le = async (q, ae) => {
    if (U.value === "year") {
      const H = w.value.startOf("year").year(q);
      w.value = sr(H, c.value, v), te(w.value, false);
    } else if (U.value === "years") te(q, ae ?? true);
    else {
      const H = w.value.year(q);
      w.value = sr(H, c.value, v), V.value = "month", ["month", "year", "date", "week"].includes(U.value) && (te(w.value, true), await $e(), _t());
    }
    rt("year");
  }, Q = async (q) => {
    V.value = q, await $e(), _t();
  }, ie = y(() => n.type === "datetime" || n.type === "datetimerange"), ce = y(() => {
    const q = ie.value || U.value === "dates", ae = U.value === "years", H = U.value === "months", fe = V.value === "date", Fe = V.value === "year", He = V.value === "month";
    return q && fe || ae && Fe || H && He;
  }), Ie = y(() => v ? n.parsedValue ? Se(n.parsedValue) ? v(n.parsedValue[0].toDate()) : v(n.parsedValue.toDate()) : true : false), me = () => {
    if (ne.value) te(n.parsedValue);
    else {
      let q = n.parsedValue;
      if (!q) {
        const ae = Ke(b).locale(c.value), H = Nt();
        q = ae.year(H.year()).month(H.month()).date(H.date());
      }
      w.value = q, te(q);
    }
  }, se = y(() => v ? v(Ke().locale(c.value).toDate()) : false), ke = () => {
    const ae = Ke().locale(c.value).toDate();
    C.value = true, (!v || !v(ae)) && P(ae) && (w.value = Ke().locale(c.value), te(w.value));
  }, De = y(() => n.timeFormat || xd(n.format)), qe = y(() => n.dateFormat || zd(n.format)), je = y(() => {
    if (R.value) return R.value;
    if (!(!n.parsedValue && !g.value)) return (n.parsedValue || w.value).format(De.value);
  }), Le = y(() => {
    if (I.value) return I.value;
    if (!(!n.parsedValue && !g.value)) return (n.parsedValue || w.value).format(qe.value);
  }), Ne = N(false), Te = () => {
    Ne.value = true;
  }, Ge = () => {
    Ne.value = false;
  }, Ze = (q) => ({ hour: q.hour(), minute: q.minute(), second: q.second(), year: q.year(), month: q.month(), date: q.date() }), ot = (q, ae, H) => {
    const { hour: fe, minute: Fe, second: He } = Ze(q), wt = n.parsedValue ? n.parsedValue.hour(fe).minute(Fe).second(He) : q;
    w.value = wt, te(w.value, true), H || (Ne.value = ae);
  }, st = (q) => {
    const ae = Ke(q, De.value).locale(c.value);
    if (ae.isValid() && P(ae)) {
      const { year: H, month: fe, date: Fe } = Ze(w.value);
      w.value = ae.year(H).month(fe).date(Fe), R.value = null, Ne.value = false, te(w.value, true);
    }
  }, Ce = (q) => {
    const ae = wo(q, qe.value, c.value, f);
    if (ae.isValid()) {
      if (v && v(ae.toDate())) return;
      const { hour: H, minute: fe, second: Fe } = Ze(w.value);
      w.value = ae.hour(H).minute(fe).second(Fe), I.value = null, te(w.value, true);
    }
  }, Ue = (q) => Ke.isDayjs(q) && q.isValid() && (v ? !v(q.toDate()) : true), ht = (q) => Se(q) ? q.map((ae) => ae.format(n.format)) : q.format(n.format), Pt = (q) => wo(q, n.format, c.value, f), Nt = () => {
    const q = Ke(g.value).locale(c.value);
    if (!g.value) {
      const ae = E.value;
      return Ke().hour(ae.hour()).minute(ae.minute()).second(ae.second()).locale(c.value);
    }
    return q;
  }, _t = () => {
    var q;
    ["week", "month", "year", "date"].includes(U.value) && ((q = T.value) == null || q.focus());
  }, kt = () => {
    _t(), U.value === "week" && xe(ye.down);
  }, dn = (q) => {
    const { code: ae } = q;
    [ye.up, ye.down, ye.left, ye.right, ye.home, ye.end, ye.pageUp, ye.pageDown].includes(ae) && (xe(ae), q.stopPropagation(), q.preventDefault()), [ye.enter, ye.space, ye.numpadEnter].includes(ae) && I.value === null && R.value === null && (q.preventDefault(), te(w.value, false));
  }, xe = (q) => {
    var ae;
    const { up: H, down: fe, left: Fe, right: He, home: wt, end: Rn, pageUp: jt, pageDown: Gt } = ye, Ft = { year: { [H]: -4, [fe]: 4, [Fe]: -1, [He]: 1, offset: (Ot, bn) => Ot.setFullYear(Ot.getFullYear() + bn) }, month: { [H]: -4, [fe]: 4, [Fe]: -1, [He]: 1, offset: (Ot, bn) => Ot.setMonth(Ot.getMonth() + bn) }, week: { [H]: -1, [fe]: 1, [Fe]: -1, [He]: 1, offset: (Ot, bn) => Ot.setDate(Ot.getDate() + bn * 7) }, date: { [H]: -7, [fe]: 7, [Fe]: -1, [He]: 1, [wt]: (Ot) => -Ot.getDay(), [Rn]: (Ot) => -Ot.getDay() + 6, [jt]: (Ot) => -new Date(Ot.getFullYear(), Ot.getMonth(), 0).getDate(), [Gt]: (Ot) => new Date(Ot.getFullYear(), Ot.getMonth() + 1, 0).getDate(), offset: (Ot, bn) => Ot.setDate(Ot.getDate() + bn) } }, Yn = w.value.toDate();
    for (; Math.abs(w.value.diff(Yn, "year", true)) < 1; ) {
      const Ot = Ft[Z.value];
      if (!Ot) return;
      if (Ot.offset(Yn, Qe(Ot[q]) ? Ot[q](Yn) : (ae = Ot[q]) != null ? ae : 0), v && v(Yn)) break;
      const bn = Ke(Yn).locale(c.value);
      w.value = bn, t("pick", bn, true);
      break;
    }
  }, rt = (q) => {
    t("panel-change", w.value.toDate(), q, V.value);
  };
  return ue(() => U.value, (q) => {
    if (["month", "year"].includes(q)) {
      V.value = q;
      return;
    } else if (q === "years") {
      V.value = "year";
      return;
    } else if (q === "months") {
      V.value = "month";
      return;
    }
    V.value = "date";
  }, { immediate: true }), ue(() => V.value, () => {
    m == null ? void 0 : m.updatePopper();
  }), ue(() => g.value, (q) => {
    q && (w.value = Nt());
  }, { immediate: true }), ue(() => n.parsedValue, (q) => {
    if (q) {
      if (ne.value || Se(q)) return;
      w.value = q;
    } else w.value = Nt();
  }, { immediate: true }), t("set-picker-option", ["isValidValue", Ue]), t("set-picker-option", ["formatToString", ht]), t("set-picker-option", ["parseUserInput", Pt]), t("set-picker-option", ["handleFocusPicker", kt]), (q, ae) => (k(), D("div", { class: $([o(a).b(), o(s).b(), { "has-sidebar": q.$slots.sidebar || o(ee), "has-time": o(ie) }]) }, [x("div", { class: $(o(a).e("body-wrapper")) }, [X(q.$slots, "sidebar", { class: $(o(a).e("sidebar")) }), o(ee) ? (k(), D("div", { key: 0, class: $(o(a).e("sidebar")) }, [(k(true), D(Pe, null, it(o(h), (H, fe) => (k(), D("button", { key: fe, type: "button", class: $(o(a).e("shortcut")), onClick: (Fe) => G(H) }, he(H.text), 11, ["onClick"]))), 128))], 2)) : J("v-if", true), x("div", { class: $(o(a).e("body")) }, [o(ie) ? (k(), D("div", { key: 0, class: $(o(s).e("time-header")) }, [x("span", { class: $(o(s).e("editor-wrap")) }, [z(o(hn), { placeholder: o(u)("el.datepicker.selectDate"), "model-value": o(Le), size: "small", "validate-event": false, onInput: (H) => I.value = H, onChange: Ce }, null, 8, ["placeholder", "model-value", "onInput"])], 2), Ye((k(), D("span", { class: $(o(s).e("editor-wrap")) }, [z(o(hn), { placeholder: o(u)("el.datepicker.selectTime"), "model-value": o(je), size: "small", "validate-event": false, onFocus: Te, onInput: (H) => R.value = H, onChange: st }, null, 8, ["placeholder", "model-value", "onInput"]), z(o(xa), { visible: Ne.value, format: o(De), "parsed-value": w.value, onPick: ot }, null, 8, ["visible", "format", "parsed-value"])], 2)), [[o(il), Ge]])], 2)) : J("v-if", true), Ye(x("div", { class: $([o(s).e("header"), (V.value === "year" || V.value === "month") && o(s).e("header--bordered")]) }, [x("span", { class: $(o(s).e("prev-btn")) }, [x("button", { type: "button", "aria-label": o(u)("el.datepicker.prevYear"), class: $(["d-arrow-left", o(a).e("icon-btn")]), onClick: (H) => F(false) }, [X(q.$slots, "prev-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o($l))]), _: 1 })])], 10, ["aria-label", "onClick"]), Ye(x("button", { type: "button", "aria-label": o(u)("el.datepicker.prevMonth"), class: $([o(a).e("icon-btn"), "arrow-left"]), onClick: (H) => L(false) }, [X(q.$slots, "prev-month", {}, () => [z(o(Ee), null, { default: j(() => [z(o(El))]), _: 1 })])], 10, ["aria-label", "onClick"]), [[pt, V.value === "date"]])], 2), x("span", { role: "button", class: $(o(s).e("header-label")), "aria-live": "polite", tabindex: "0", onKeydown: $t((H) => Q("year"), ["enter"]), onClick: (H) => Q("year") }, he(o(B)), 43, ["onKeydown", "onClick"]), Ye(x("span", { role: "button", "aria-live": "polite", tabindex: "0", class: $([o(s).e("header-label"), { active: V.value === "month" }]), onKeydown: $t((H) => Q("month"), ["enter"]), onClick: (H) => Q("month") }, he(o(u)(`el.datepicker.month${o(M) + 1}`)), 43, ["onKeydown", "onClick"]), [[pt, V.value === "date"]]), x("span", { class: $(o(s).e("next-btn")) }, [Ye(x("button", { type: "button", "aria-label": o(u)("el.datepicker.nextMonth"), class: $([o(a).e("icon-btn"), "arrow-right"]), onClick: (H) => L(true) }, [X(q.$slots, "next-month", {}, () => [z(o(Ee), null, { default: j(() => [z(o(kn))]), _: 1 })])], 10, ["aria-label", "onClick"]), [[pt, V.value === "date"]]), x("button", { type: "button", "aria-label": o(u)("el.datepicker.nextYear"), class: $([o(a).e("icon-btn"), "d-arrow-right"]), onClick: (H) => F(true) }, [X(q.$slots, "next-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o(Tl))]), _: 1 })])], 10, ["aria-label", "onClick"])], 2)], 2), [[pt, V.value !== "time"]]), x("div", { class: $(o(a).e("content")), onKeydown: dn }, [V.value === "date" ? (k(), oe(ir, { key: 0, ref_key: "currentViewRef", ref: T, "selection-mode": o(U), date: w.value, "parsed-value": q.parsedValue, "disabled-date": o(v), "cell-class-name": o(p), onPick: A }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name"])) : J("v-if", true), V.value === "year" ? (k(), oe(cr, { key: 1, ref_key: "currentViewRef", ref: T, "selection-mode": o(U), date: w.value, "disabled-date": o(v), "parsed-value": q.parsedValue, onPick: le }, null, 8, ["selection-mode", "date", "disabled-date", "parsed-value"])) : J("v-if", true), V.value === "month" ? (k(), oe(ur, { key: 2, ref_key: "currentViewRef", ref: T, "selection-mode": o(U), date: w.value, "parsed-value": q.parsedValue, "disabled-date": o(v), onPick: re }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date"])) : J("v-if", true)], 34)], 2)], 2), Ye(x("div", { class: $(o(a).e("footer")) }, [Ye(z(o(Qt), { text: "", size: "small", class: $(o(a).e("link-btn")), disabled: o(se), onClick: ke }, { default: j(() => [at(he(o(u)("el.datepicker.now")), 1)]), _: 1 }, 8, ["class", "disabled"]), [[pt, !o(ne) && q.showNow]]), z(o(Qt), { plain: "", size: "small", class: $(o(a).e("link-btn")), disabled: o(Ie), onClick: me }, { default: j(() => [at(he(o(u)("el.datepicker.confirm")), 1)]), _: 1 }, 8, ["class", "disabled"])], 2), [[pt, o(ce)]])], 2));
} });
var Zw = ve(Xw, [["__file", "panel-date-pick.vue"]]);
const Jw = pe({ ...wf, ...ui, visible: Boolean }), Sf = (e) => {
  const { emit: t } = tt(), n = ul(), l = Yt();
  return (s) => {
    const r = Qe(s.value) ? s.value() : s.value;
    if (r) {
      t("pick", [Ke(r[0]).locale(e.value), Ke(r[1]).locale(e.value)]);
      return;
    }
    s.onClick && s.onClick({ attrs: n, slots: l, emit: t });
  };
}, kf = (e, { defaultValue: t, leftDate: n, rightDate: l, unit: a, onParsedValueChanged: s }) => {
  const { emit: r } = tt(), { pickerNs: i } = we(vs), u = de("date-range-picker"), { t: c, lang: d } = ft(), f = Sf(d), m = N(), h = N(), v = N({ endDate: null, selecting: false }), p = (C) => {
    v.value = C;
  }, b = (C = false) => {
    const S = o(m), E = o(h);
    Co([S, E]) && r("pick", [S, E], C);
  }, g = (C) => {
    v.value.selecting = C, C || (v.value.endDate = null);
  }, T = (C) => {
    if (Se(C) && C.length === 2) {
      const [S, E] = C;
      m.value = S, n.value = S, h.value = E, s(o(m), o(h));
    } else w();
  }, w = () => {
    const [C, S] = di(o(t), { lang: o(d), unit: a, unlinkPanels: e.unlinkPanels });
    m.value = void 0, h.value = void 0, n.value = C, l.value = S;
  };
  return ue(t, (C) => {
    C && w();
  }, { immediate: true }), ue(() => e.parsedValue, T, { immediate: true }), { minDate: m, maxDate: h, rangeState: v, lang: d, ppNs: i, drpNs: u, handleChangeRange: p, handleRangeConfirm: b, handleShortcutClick: f, onSelect: g, onReset: T, t: c };
}, ga = "month", Qw = K({ __name: "panel-date-range", props: Jw, emits: ["pick", "set-picker-option", "calendar-change", "panel-change"], setup(e, { emit: t }) {
  const n = e, l = we("EP_PICKER_BASE"), a = we("ElIsDefaultFormat"), { disabledDate: s, cellClassName: r, defaultTime: i, clearable: u } = l.props, c = yt(l.props, "format"), d = yt(l.props, "shortcuts"), f = yt(l.props, "defaultValue"), { lang: m } = ft(), h = N(Ke().locale(m.value)), v = N(Ke().locale(m.value).add(1, ga)), { minDate: p, maxDate: b, rangeState: g, ppNs: T, drpNs: w, handleChangeRange: C, handleRangeConfirm: S, handleShortcutClick: E, onSelect: M, onReset: O, t: _ } = kf(n, { defaultValue: f, leftDate: h, rightDate: v, unit: ga, onParsedValueChanged: q });
  ue(() => n.visible, (ae) => {
    !ae && g.value.selecting && (O(n.parsedValue), M(false));
  });
  const I = N({ min: null, max: null }), R = N({ min: null, max: null }), P = y(() => `${h.value.year()} ${_("el.datepicker.year")} ${_(`el.datepicker.month${h.value.month() + 1}`)}`), W = y(() => `${v.value.year()} ${_("el.datepicker.year")} ${_(`el.datepicker.month${v.value.month() + 1}`)}`), te = y(() => h.value.year()), A = y(() => h.value.month()), L = y(() => v.value.year()), F = y(() => v.value.month()), V = y(() => !!d.value.length), B = y(() => I.value.min !== null ? I.value.min : p.value ? p.value.format(ee.value) : ""), G = y(() => I.value.max !== null ? I.value.max : b.value || p.value ? (b.value || p.value).format(ee.value) : ""), U = y(() => R.value.min !== null ? R.value.min : p.value ? p.value.format(Z.value) : ""), ne = y(() => R.value.max !== null ? R.value.max : b.value || p.value ? (b.value || p.value).format(Z.value) : ""), Z = y(() => n.timeFormat || xd(c.value)), ee = y(() => n.dateFormat || zd(c.value)), re = (ae) => Co(ae) && (s ? !s(ae[0].toDate()) && !s(ae[1].toDate()) : true), le = () => {
    h.value = h.value.subtract(1, "year"), n.unlinkPanels || (v.value = h.value.add(1, "month")), De("year");
  }, Q = () => {
    h.value = h.value.subtract(1, "month"), n.unlinkPanels || (v.value = h.value.add(1, "month")), De("month");
  }, ie = () => {
    n.unlinkPanels ? v.value = v.value.add(1, "year") : (h.value = h.value.add(1, "year"), v.value = h.value.add(1, "month")), De("year");
  }, ce = () => {
    n.unlinkPanels ? v.value = v.value.add(1, "month") : (h.value = h.value.add(1, "month"), v.value = h.value.add(1, "month")), De("month");
  }, Ie = () => {
    h.value = h.value.add(1, "year"), De("year");
  }, me = () => {
    h.value = h.value.add(1, "month"), De("month");
  }, se = () => {
    v.value = v.value.subtract(1, "year"), De("year");
  }, ke = () => {
    v.value = v.value.subtract(1, "month"), De("month");
  }, De = (ae) => {
    t("panel-change", [h.value.toDate(), v.value.toDate()], ae);
  }, qe = y(() => {
    const ae = (A.value + 1) % 12, H = A.value + 1 >= 12 ? 1 : 0;
    return n.unlinkPanels && new Date(te.value + H, ae) < new Date(L.value, F.value);
  }), je = y(() => n.unlinkPanels && L.value * 12 + F.value - (te.value * 12 + A.value + 1) >= 12), Le = y(() => !(p.value && b.value && !g.value.selecting && Co([p.value, b.value]))), Ne = y(() => n.type === "datetime" || n.type === "datetimerange"), Te = (ae, H) => {
    if (ae) return i ? Ke(i[H] || i).locale(m.value).year(ae.year()).month(ae.month()).date(ae.date()) : ae;
  }, Ge = (ae, H = true) => {
    const fe = ae.minDate, Fe = ae.maxDate, He = Te(fe, 0), wt = Te(Fe, 1);
    b.value === wt && p.value === He || (t("calendar-change", [fe.toDate(), Fe && Fe.toDate()]), b.value = wt, p.value = He, !(!H || Ne.value) && S());
  }, Ze = N(false), ot = N(false), st = () => {
    Ze.value = false;
  }, Ce = () => {
    ot.value = false;
  }, Ue = (ae, H) => {
    I.value[H] = ae;
    const fe = Ke(ae, ee.value).locale(m.value);
    if (fe.isValid()) {
      if (s && s(fe.toDate())) return;
      H === "min" ? (h.value = fe, p.value = (p.value || h.value).year(fe.year()).month(fe.month()).date(fe.date()), !n.unlinkPanels && (!b.value || b.value.isBefore(p.value)) && (v.value = fe.add(1, "month"), b.value = p.value.add(1, "month"))) : (v.value = fe, b.value = (b.value || v.value).year(fe.year()).month(fe.month()).date(fe.date()), !n.unlinkPanels && (!p.value || p.value.isAfter(b.value)) && (h.value = fe.subtract(1, "month"), p.value = b.value.subtract(1, "month")));
    }
  }, ht = (ae, H) => {
    I.value[H] = null;
  }, Pt = (ae, H) => {
    R.value[H] = ae;
    const fe = Ke(ae, Z.value).locale(m.value);
    fe.isValid() && (H === "min" ? (Ze.value = true, p.value = (p.value || h.value).hour(fe.hour()).minute(fe.minute()).second(fe.second())) : (ot.value = true, b.value = (b.value || v.value).hour(fe.hour()).minute(fe.minute()).second(fe.second()), v.value = b.value));
  }, Nt = (ae, H) => {
    R.value[H] = null, H === "min" ? (h.value = p.value, Ze.value = false, (!b.value || b.value.isBefore(p.value)) && (b.value = p.value)) : (v.value = b.value, ot.value = false, b.value && b.value.isBefore(p.value) && (p.value = b.value));
  }, _t = (ae, H, fe) => {
    R.value.min || (ae && (h.value = ae, p.value = (p.value || h.value).hour(ae.hour()).minute(ae.minute()).second(ae.second())), fe || (Ze.value = H), (!b.value || b.value.isBefore(p.value)) && (b.value = p.value, v.value = ae));
  }, kt = (ae, H, fe) => {
    R.value.max || (ae && (v.value = ae, b.value = (b.value || v.value).hour(ae.hour()).minute(ae.minute()).second(ae.second())), fe || (ot.value = H), b.value && b.value.isBefore(p.value) && (p.value = b.value));
  }, dn = () => {
    h.value = di(o(f), { lang: o(m), unit: "month", unlinkPanels: n.unlinkPanels })[0], v.value = h.value.add(1, "month"), b.value = void 0, p.value = void 0, t("pick", null);
  }, xe = (ae) => Se(ae) ? ae.map((H) => H.format(c.value)) : ae.format(c.value), rt = (ae) => wo(ae, c.value, m.value, a);
  function q(ae, H) {
    if (n.unlinkPanels && H) {
      const fe = (ae == null ? void 0 : ae.year()) || 0, Fe = (ae == null ? void 0 : ae.month()) || 0, He = H.year(), wt = H.month();
      v.value = fe === He && Fe === wt ? H.add(1, ga) : H;
    } else v.value = h.value.add(1, ga), H && (v.value = v.value.hour(H.hour()).minute(H.minute()).second(H.second()));
  }
  return t("set-picker-option", ["isValidValue", re]), t("set-picker-option", ["parseUserInput", rt]), t("set-picker-option", ["formatToString", xe]), t("set-picker-option", ["handleClear", dn]), (ae, H) => (k(), D("div", { class: $([o(T).b(), o(w).b(), { "has-sidebar": ae.$slots.sidebar || o(V), "has-time": o(Ne) }]) }, [x("div", { class: $(o(T).e("body-wrapper")) }, [X(ae.$slots, "sidebar", { class: $(o(T).e("sidebar")) }), o(V) ? (k(), D("div", { key: 0, class: $(o(T).e("sidebar")) }, [(k(true), D(Pe, null, it(o(d), (fe, Fe) => (k(), D("button", { key: Fe, type: "button", class: $(o(T).e("shortcut")), onClick: (He) => o(E)(fe) }, he(fe.text), 11, ["onClick"]))), 128))], 2)) : J("v-if", true), x("div", { class: $(o(T).e("body")) }, [o(Ne) ? (k(), D("div", { key: 0, class: $(o(w).e("time-header")) }, [x("span", { class: $(o(w).e("editors-wrap")) }, [x("span", { class: $(o(w).e("time-picker-wrap")) }, [z(o(hn), { size: "small", disabled: o(g).selecting, placeholder: o(_)("el.datepicker.startDate"), class: $(o(w).e("editor")), "model-value": o(B), "validate-event": false, onInput: (fe) => Ue(fe, "min"), onChange: (fe) => ht(fe, "min") }, null, 8, ["disabled", "placeholder", "class", "model-value", "onInput", "onChange"])], 2), Ye((k(), D("span", { class: $(o(w).e("time-picker-wrap")) }, [z(o(hn), { size: "small", class: $(o(w).e("editor")), disabled: o(g).selecting, placeholder: o(_)("el.datepicker.startTime"), "model-value": o(U), "validate-event": false, onFocus: (fe) => Ze.value = true, onInput: (fe) => Pt(fe, "min"), onChange: (fe) => Nt(fe, "min") }, null, 8, ["class", "disabled", "placeholder", "model-value", "onFocus", "onInput", "onChange"]), z(o(xa), { visible: Ze.value, format: o(Z), "datetime-role": "start", "parsed-value": h.value, onPick: _t }, null, 8, ["visible", "format", "parsed-value"])], 2)), [[o(il), st]])], 2), x("span", null, [z(o(Ee), null, { default: j(() => [z(o(kn))]), _: 1 })]), x("span", { class: $([o(w).e("editors-wrap"), "is-right"]) }, [x("span", { class: $(o(w).e("time-picker-wrap")) }, [z(o(hn), { size: "small", class: $(o(w).e("editor")), disabled: o(g).selecting, placeholder: o(_)("el.datepicker.endDate"), "model-value": o(G), readonly: !o(p), "validate-event": false, onInput: (fe) => Ue(fe, "max"), onChange: (fe) => ht(fe, "max") }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly", "onInput", "onChange"])], 2), Ye((k(), D("span", { class: $(o(w).e("time-picker-wrap")) }, [z(o(hn), { size: "small", class: $(o(w).e("editor")), disabled: o(g).selecting, placeholder: o(_)("el.datepicker.endTime"), "model-value": o(ne), readonly: !o(p), "validate-event": false, onFocus: (fe) => o(p) && (ot.value = true), onInput: (fe) => Pt(fe, "max"), onChange: (fe) => Nt(fe, "max") }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly", "onFocus", "onInput", "onChange"]), z(o(xa), { "datetime-role": "end", visible: ot.value, format: o(Z), "parsed-value": v.value, onPick: kt }, null, 8, ["visible", "format", "parsed-value"])], 2)), [[o(il), Ce]])], 2)], 2)) : J("v-if", true), x("div", { class: $([[o(T).e("content"), o(w).e("content")], "is-left"]) }, [x("div", { class: $(o(w).e("header")) }, [x("button", { type: "button", class: $([o(T).e("icon-btn"), "d-arrow-left"]), "aria-label": o(_)("el.datepicker.prevYear"), onClick: le }, [X(ae.$slots, "prev-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o($l))]), _: 1 })])], 10, ["aria-label"]), x("button", { type: "button", class: $([o(T).e("icon-btn"), "arrow-left"]), "aria-label": o(_)("el.datepicker.prevMonth"), onClick: Q }, [X(ae.$slots, "prev-month", {}, () => [z(o(Ee), null, { default: j(() => [z(o(El))]), _: 1 })])], 10, ["aria-label"]), ae.unlinkPanels ? (k(), D("button", { key: 0, type: "button", disabled: !o(je), class: $([[o(T).e("icon-btn"), { "is-disabled": !o(je) }], "d-arrow-right"]), "aria-label": o(_)("el.datepicker.nextYear"), onClick: Ie }, [X(ae.$slots, "next-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o(Tl))]), _: 1 })])], 10, ["disabled", "aria-label"])) : J("v-if", true), ae.unlinkPanels ? (k(), D("button", { key: 1, type: "button", disabled: !o(qe), class: $([[o(T).e("icon-btn"), { "is-disabled": !o(qe) }], "arrow-right"]), "aria-label": o(_)("el.datepicker.nextMonth"), onClick: me }, [X(ae.$slots, "next-month", {}, () => [z(o(Ee), null, { default: j(() => [z(o(kn))]), _: 1 })])], 10, ["disabled", "aria-label"])) : J("v-if", true), x("div", null, he(o(P)), 1)], 2), z(ir, { "selection-mode": "range", date: h.value, "min-date": o(p), "max-date": o(b), "range-state": o(g), "disabled-date": o(s), "cell-class-name": o(r), onChangerange: o(C), onPick: Ge, onSelect: o(M) }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])], 2), x("div", { class: $([[o(T).e("content"), o(w).e("content")], "is-right"]) }, [x("div", { class: $(o(w).e("header")) }, [ae.unlinkPanels ? (k(), D("button", { key: 0, type: "button", disabled: !o(je), class: $([[o(T).e("icon-btn"), { "is-disabled": !o(je) }], "d-arrow-left"]), "aria-label": o(_)("el.datepicker.prevYear"), onClick: se }, [X(ae.$slots, "prev-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o($l))]), _: 1 })])], 10, ["disabled", "aria-label"])) : J("v-if", true), ae.unlinkPanels ? (k(), D("button", { key: 1, type: "button", disabled: !o(qe), class: $([[o(T).e("icon-btn"), { "is-disabled": !o(qe) }], "arrow-left"]), "aria-label": o(_)("el.datepicker.prevMonth"), onClick: ke }, [X(ae.$slots, "prev-month", {}, () => [z(o(Ee), null, { default: j(() => [z(o(El))]), _: 1 })])], 10, ["disabled", "aria-label"])) : J("v-if", true), x("button", { type: "button", "aria-label": o(_)("el.datepicker.nextYear"), class: $([o(T).e("icon-btn"), "d-arrow-right"]), onClick: ie }, [X(ae.$slots, "next-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o(Tl))]), _: 1 })])], 10, ["aria-label"]), x("button", { type: "button", class: $([o(T).e("icon-btn"), "arrow-right"]), "aria-label": o(_)("el.datepicker.nextMonth"), onClick: ce }, [X(ae.$slots, "next-month", {}, () => [z(o(Ee), null, { default: j(() => [z(o(kn))]), _: 1 })])], 10, ["aria-label"]), x("div", null, he(o(W)), 1)], 2), z(ir, { "selection-mode": "range", date: v.value, "min-date": o(p), "max-date": o(b), "range-state": o(g), "disabled-date": o(s), "cell-class-name": o(r), onChangerange: o(C), onPick: Ge, onSelect: o(M) }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])], 2)], 2)], 2), o(Ne) ? (k(), D("div", { key: 0, class: $(o(T).e("footer")) }, [o(u) ? (k(), oe(o(Qt), { key: 0, text: "", size: "small", class: $(o(T).e("link-btn")), onClick: dn }, { default: j(() => [at(he(o(_)("el.datepicker.clear")), 1)]), _: 1 }, 8, ["class"])) : J("v-if", true), z(o(Qt), { plain: "", size: "small", class: $(o(T).e("link-btn")), disabled: o(Le), onClick: (fe) => o(S)(false) }, { default: j(() => [at(he(o(_)("el.datepicker.confirm")), 1)]), _: 1 }, 8, ["class", "disabled", "onClick"])], 2)) : J("v-if", true)], 2));
} });
var eS = ve(Qw, [["__file", "panel-date-range.vue"]]);
const tS = pe({ ...ui }), nS = ["pick", "set-picker-option", "calendar-change"], lS = ({ unlinkPanels: e, leftDate: t, rightDate: n }) => {
  const { t: l } = ft(), a = () => {
    t.value = t.value.subtract(1, "year"), e.value || (n.value = n.value.subtract(1, "year"));
  }, s = () => {
    e.value || (t.value = t.value.add(1, "year")), n.value = n.value.add(1, "year");
  }, r = () => {
    t.value = t.value.add(1, "year");
  }, i = () => {
    n.value = n.value.subtract(1, "year");
  }, u = y(() => `${t.value.year()} ${l("el.datepicker.year")}`), c = y(() => `${n.value.year()} ${l("el.datepicker.year")}`), d = y(() => t.value.year()), f = y(() => n.value.year() === t.value.year() ? t.value.year() + 1 : n.value.year());
  return { leftPrevYear: a, rightNextYear: s, leftNextYear: r, rightPrevYear: i, leftLabel: u, rightLabel: c, leftYear: d, rightYear: f };
}, ba = "year", oS = K({ name: "DatePickerMonthRange" }), aS = K({ ...oS, props: tS, emits: nS, setup(e, { emit: t }) {
  const n = e, { lang: l } = ft(), a = we("EP_PICKER_BASE"), s = we("ElIsDefaultFormat"), { shortcuts: r, disabledDate: i } = a.props, u = yt(a.props, "format"), c = yt(a.props, "defaultValue"), d = N(Ke().locale(l.value)), f = N(Ke().locale(l.value).add(1, ba)), { minDate: m, maxDate: h, rangeState: v, ppNs: p, drpNs: b, handleChangeRange: g, handleRangeConfirm: T, handleShortcutClick: w, onSelect: C } = kf(n, { defaultValue: c, leftDate: d, rightDate: f, unit: ba, onParsedValueChanged: B }), S = y(() => !!r.length), { leftPrevYear: E, rightNextYear: M, leftNextYear: O, rightPrevYear: _, leftLabel: I, rightLabel: R, leftYear: P, rightYear: W } = lS({ unlinkPanels: yt(n, "unlinkPanels"), leftDate: d, rightDate: f }), te = y(() => n.unlinkPanels && W.value > P.value + 1), A = (G, U = true) => {
    const ne = G.minDate, Z = G.maxDate;
    h.value === Z && m.value === ne || (t("calendar-change", [ne.toDate(), Z && Z.toDate()]), h.value = Z, m.value = ne, U && T());
  }, L = () => {
    d.value = di(o(c), { lang: o(l), unit: "year", unlinkPanels: n.unlinkPanels })[0], f.value = d.value.add(1, "year"), t("pick", null);
  }, F = (G) => Se(G) ? G.map((U) => U.format(u.value)) : G.format(u.value), V = (G) => wo(G, u.value, l.value, s);
  function B(G, U) {
    if (n.unlinkPanels && U) {
      const ne = (G == null ? void 0 : G.year()) || 0, Z = U.year();
      f.value = ne === Z ? U.add(1, ba) : U;
    } else f.value = d.value.add(1, ba);
  }
  return t("set-picker-option", ["isValidValue", Co]), t("set-picker-option", ["formatToString", F]), t("set-picker-option", ["parseUserInput", V]), t("set-picker-option", ["handleClear", L]), (G, U) => (k(), D("div", { class: $([o(p).b(), o(b).b(), { "has-sidebar": !!G.$slots.sidebar || o(S) }]) }, [x("div", { class: $(o(p).e("body-wrapper")) }, [X(G.$slots, "sidebar", { class: $(o(p).e("sidebar")) }), o(S) ? (k(), D("div", { key: 0, class: $(o(p).e("sidebar")) }, [(k(true), D(Pe, null, it(o(r), (ne, Z) => (k(), D("button", { key: Z, type: "button", class: $(o(p).e("shortcut")), onClick: (ee) => o(w)(ne) }, he(ne.text), 11, ["onClick"]))), 128))], 2)) : J("v-if", true), x("div", { class: $(o(p).e("body")) }, [x("div", { class: $([[o(p).e("content"), o(b).e("content")], "is-left"]) }, [x("div", { class: $(o(b).e("header")) }, [x("button", { type: "button", class: $([o(p).e("icon-btn"), "d-arrow-left"]), onClick: o(E) }, [X(G.$slots, "prev-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o($l))]), _: 1 })])], 10, ["onClick"]), G.unlinkPanels ? (k(), D("button", { key: 0, type: "button", disabled: !o(te), class: $([[o(p).e("icon-btn"), { [o(p).is("disabled")]: !o(te) }], "d-arrow-right"]), onClick: o(O) }, [X(G.$slots, "next-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o(Tl))]), _: 1 })])], 10, ["disabled", "onClick"])) : J("v-if", true), x("div", null, he(o(I)), 1)], 2), z(ur, { "selection-mode": "range", date: d.value, "min-date": o(m), "max-date": o(h), "range-state": o(v), "disabled-date": o(i), onChangerange: o(g), onPick: A, onSelect: o(C) }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])], 2), x("div", { class: $([[o(p).e("content"), o(b).e("content")], "is-right"]) }, [x("div", { class: $(o(b).e("header")) }, [G.unlinkPanels ? (k(), D("button", { key: 0, type: "button", disabled: !o(te), class: $([[o(p).e("icon-btn"), { "is-disabled": !o(te) }], "d-arrow-left"]), onClick: o(_) }, [X(G.$slots, "prev-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o($l))]), _: 1 })])], 10, ["disabled", "onClick"])) : J("v-if", true), x("button", { type: "button", class: $([o(p).e("icon-btn"), "d-arrow-right"]), onClick: o(M) }, [X(G.$slots, "next-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o(Tl))]), _: 1 })])], 10, ["onClick"]), x("div", null, he(o(R)), 1)], 2), z(ur, { "selection-mode": "range", date: f.value, "min-date": o(m), "max-date": o(h), "range-state": o(v), "disabled-date": o(i), onChangerange: o(g), onPick: A, onSelect: o(C) }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])], 2)], 2)], 2)], 2));
} });
var sS = ve(aS, [["__file", "panel-month-range.vue"]]);
const rS = pe({ ...ui }), iS = ["pick", "set-picker-option", "calendar-change"], uS = ({ unlinkPanels: e, leftDate: t, rightDate: n }) => {
  const l = () => {
    t.value = t.value.subtract(10, "year"), e.value || (n.value = n.value.subtract(10, "year"));
  }, a = () => {
    e.value || (t.value = t.value.add(10, "year")), n.value = n.value.add(10, "year");
  }, s = () => {
    t.value = t.value.add(10, "year");
  }, r = () => {
    n.value = n.value.subtract(10, "year");
  }, i = y(() => {
    const f = Math.floor(t.value.year() / 10) * 10;
    return `${f}-${f + 9}`;
  }), u = y(() => {
    const f = Math.floor(n.value.year() / 10) * 10;
    return `${f}-${f + 9}`;
  }), c = y(() => Math.floor(t.value.year() / 10) * 10 + 9), d = y(() => Math.floor(n.value.year() / 10) * 10);
  return { leftPrevYear: l, rightNextYear: a, leftNextYear: s, rightPrevYear: r, leftLabel: i, rightLabel: u, leftYear: c, rightYear: d };
}, ju = "year", cS = K({ name: "DatePickerYearRange" }), dS = K({ ...cS, props: rS, emits: iS, setup(e, { emit: t }) {
  const n = e, { lang: l } = ft(), a = N(Ke().locale(l.value)), s = N(a.value.add(10, "year")), { pickerNs: r } = we(vs), i = de("date-range-picker"), u = we("isDefaultFormat"), c = y(() => !!A.length), d = y(() => [r.b(), i.b(), { "has-sidebar": !!Yt().sidebar || c.value }]), f = y(() => ({ content: [r.e("content"), i.e("content"), "is-left"], arrowLeftBtn: [r.e("icon-btn"), "d-arrow-left"], arrowRightBtn: [r.e("icon-btn"), { [r.is("disabled")]: !E.value }, "d-arrow-right"] })), m = y(() => ({ content: [r.e("content"), i.e("content"), "is-right"], arrowLeftBtn: [r.e("icon-btn"), { "is-disabled": !E.value }, "d-arrow-left"], arrowRightBtn: [r.e("icon-btn"), "d-arrow-right"] })), h = Sf(l), { leftPrevYear: v, rightNextYear: p, leftNextYear: b, rightPrevYear: g, leftLabel: T, rightLabel: w, leftYear: C, rightYear: S } = uS({ unlinkPanels: yt(n, "unlinkPanels"), leftDate: a, rightDate: s }), E = y(() => n.unlinkPanels && S.value > C.value + 1), M = N(), O = N(), _ = N({ endDate: null, selecting: false }), I = (ee) => {
    _.value = ee;
  }, R = (ee, re = true) => {
    const le = ee.minDate, Q = ee.maxDate;
    O.value === Q && M.value === le || (t("calendar-change", [le.toDate(), Q && Q.toDate()]), O.value = Q, M.value = le, re && P());
  }, P = (ee = false) => {
    Co([M.value, O.value]) && t("pick", [M.value, O.value], ee);
  }, W = (ee) => {
    _.value.selecting = ee, ee || (_.value.endDate = null);
  }, te = we("EP_PICKER_BASE"), { shortcuts: A, disabledDate: L } = te.props, F = yt(te.props, "format"), V = yt(te.props, "defaultValue"), B = () => {
    let ee;
    if (Se(V.value)) {
      const re = Ke(V.value[0]);
      let le = Ke(V.value[1]);
      return n.unlinkPanels || (le = re.add(10, ju)), [re, le];
    } else V.value ? ee = Ke(V.value) : ee = Ke();
    return ee = ee.locale(l.value), [ee, ee.add(10, ju)];
  };
  ue(() => V.value, (ee) => {
    if (ee) {
      const re = B();
      a.value = re[0], s.value = re[1];
    }
  }, { immediate: true }), ue(() => n.parsedValue, (ee) => {
    if (ee && ee.length === 2) if (M.value = ee[0], O.value = ee[1], a.value = M.value, n.unlinkPanels && O.value) {
      const re = M.value.year(), le = O.value.year();
      s.value = re === le ? O.value.add(10, "year") : O.value;
    } else s.value = a.value.add(10, "year");
    else {
      const re = B();
      M.value = void 0, O.value = void 0, a.value = re[0], s.value = re[1];
    }
  }, { immediate: true });
  const G = (ee) => wo(ee, F.value, l.value, u), U = (ee) => Se(ee) ? ee.map((re) => re.format(F.value)) : ee.format(F.value), ne = (ee) => Co(ee) && (L ? !L(ee[0].toDate()) && !L(ee[1].toDate()) : true), Z = () => {
    const ee = B();
    a.value = ee[0], s.value = ee[1], O.value = void 0, M.value = void 0, t("pick", null);
  };
  return t("set-picker-option", ["isValidValue", ne]), t("set-picker-option", ["parseUserInput", G]), t("set-picker-option", ["formatToString", U]), t("set-picker-option", ["handleClear", Z]), (ee, re) => (k(), D("div", { class: $(o(d)) }, [x("div", { class: $(o(r).e("body-wrapper")) }, [X(ee.$slots, "sidebar", { class: $(o(r).e("sidebar")) }), o(c) ? (k(), D("div", { key: 0, class: $(o(r).e("sidebar")) }, [(k(true), D(Pe, null, it(o(A), (le, Q) => (k(), D("button", { key: Q, type: "button", class: $(o(r).e("shortcut")), onClick: (ie) => o(h)(le) }, he(le.text), 11, ["onClick"]))), 128))], 2)) : J("v-if", true), x("div", { class: $(o(r).e("body")) }, [x("div", { class: $(o(f).content) }, [x("div", { class: $(o(i).e("header")) }, [x("button", { type: "button", class: $(o(f).arrowLeftBtn), onClick: o(v) }, [X(ee.$slots, "prev-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o($l))]), _: 1 })])], 10, ["onClick"]), ee.unlinkPanels ? (k(), D("button", { key: 0, type: "button", disabled: !o(E), class: $(o(f).arrowRightBtn), onClick: o(b) }, [X(ee.$slots, "next-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o(Tl))]), _: 1 })])], 10, ["disabled", "onClick"])) : J("v-if", true), x("div", null, he(o(T)), 1)], 2), z(cr, { "selection-mode": "range", date: a.value, "min-date": M.value, "max-date": O.value, "range-state": _.value, "disabled-date": o(L), onChangerange: I, onPick: R, onSelect: W }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date"])], 2), x("div", { class: $(o(m).content) }, [x("div", { class: $(o(i).e("header")) }, [ee.unlinkPanels ? (k(), D("button", { key: 0, type: "button", disabled: !o(E), class: $(o(m).arrowLeftBtn), onClick: o(g) }, [X(ee.$slots, "prev-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o($l))]), _: 1 })])], 10, ["disabled", "onClick"])) : J("v-if", true), x("button", { type: "button", class: $(o(m).arrowRightBtn), onClick: o(p) }, [X(ee.$slots, "next-year", {}, () => [z(o(Ee), null, { default: j(() => [z(o(Tl))]), _: 1 })])], 10, ["onClick"]), x("div", null, he(o(w)), 1)], 2), z(cr, { "selection-mode": "range", date: s.value, "min-date": M.value, "max-date": O.value, "range-state": _.value, "disabled-date": o(L), onChangerange: I, onPick: R, onSelect: W }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date"])], 2)], 2)], 2)], 2));
} });
var fS = ve(dS, [["__file", "panel-year-range.vue"]]);
const pS = function(e) {
  switch (e) {
    case "daterange":
    case "datetimerange":
      return eS;
    case "monthrange":
      return sS;
    case "yearrange":
      return fS;
    default:
      return Zw;
  }
};
Ke.extend(jc);
Ke.extend(dh);
Ke.extend(xr);
Ke.extend(fh);
Ke.extend(ph);
Ke.extend(vh);
Ke.extend(hh);
Ke.extend(mh);
var vS = K({ name: "ElDatePicker", install: null, props: Dw, emits: [Ae], setup(e, { expose: t, emit: n, slots: l }) {
  const a = de("picker-panel"), s = y(() => !e.format);
  ut("ElIsDefaultFormat", s), ut("ElPopperOptions", Ct(yt(e, "popperOptions"))), ut(vs, { slots: l, pickerNs: a });
  const r = N();
  t({ focus: () => {
    var c;
    (c = r.value) == null || c.focus();
  }, blur: () => {
    var c;
    (c = r.value) == null || c.blur();
  }, handleOpen: () => {
    var c;
    (c = r.value) == null || c.handleOpen();
  }, handleClose: () => {
    var c;
    (c = r.value) == null || c.handleClose();
  } });
  const u = (c) => {
    n(Ae, c);
  };
  return () => {
    var c;
    const d = (c = e.format) != null ? c : bw[e.type] || oo, f = pS(e.type);
    return z(mf, lt(e, { format: d, type: e.type, ref: r, "onUpdate:modelValue": u }), { default: (m) => z(f, m, { "prev-month": l["prev-month"], "next-month": l["next-month"], "prev-year": l["prev-year"], "next-year": l["next-year"] }), "range-separator": l["range-separator"] });
  };
} });
const hS = We(vS), pi = Symbol("elDescriptions");
var Do = K({ name: "ElDescriptionsCell", props: { cell: { type: Object }, tag: { type: String, default: "td" }, type: { type: String } }, setup() {
  return { descriptions: we(pi, {}) };
}, render() {
  var e;
  const t = Fy(this.cell), n = (((e = this.cell) == null ? void 0 : e.dirs) || []).map((g) => {
    const { dir: T, arg: w, modifiers: C, value: S } = g;
    return [T, S, w, C];
  }), { border: l, direction: a } = this.descriptions, s = a === "vertical", r = () => {
    var g, T, w;
    return ((w = (T = (g = this.cell) == null ? void 0 : g.children) == null ? void 0 : T.label) == null ? void 0 : w.call(T)) || t.label;
  }, i = () => {
    var g, T, w;
    return (w = (T = (g = this.cell) == null ? void 0 : g.children) == null ? void 0 : T.default) == null ? void 0 : w.call(T);
  }, u = t.span, c = t.rowspan, d = t.align ? `is-${t.align}` : "", f = t.labelAlign ? `is-${t.labelAlign}` : d, m = t.className, h = t.labelClassName, v = this.type === "label" && (t.labelWidth || this.descriptions.labelWidth) || t.width, p = { width: At(v), minWidth: At(t.minWidth) }, b = de("descriptions");
  switch (this.type) {
    case "label":
      return Ye(Oe(this.tag, { style: p, class: [b.e("cell"), b.e("label"), b.is("bordered-label", l), b.is("vertical-label", s), f, h], colSpan: s ? u : 1, rowspan: s ? 1 : c }, r()), n);
    case "content":
      return Ye(Oe(this.tag, { style: p, class: [b.e("cell"), b.e("content"), b.is("bordered-content", l), b.is("vertical-content", s), d, m], colSpan: s ? u : u * 2 - 1, rowspan: s ? c * 2 - 1 : c }, i()), n);
    default: {
      const g = r(), T = {}, w = At(t.labelWidth || this.descriptions.labelWidth);
      return w && (T.width = w, T.display = "inline-block"), Ye(Oe("td", { style: p, class: [b.e("cell"), d], colSpan: u, rowspan: c }, [qt(g) ? void 0 : Oe("span", { style: T, class: [b.e("label"), h] }, g), Oe("span", { class: [b.e("content"), m] }, i())]), n);
    }
  }
} });
const mS = pe({ row: { type: Y(Array), default: () => [] } }), gS = K({ name: "ElDescriptionsRow" }), bS = K({ ...gS, props: mS, setup(e) {
  const t = we(pi, {});
  return (n, l) => o(t).direction === "vertical" ? (k(), D(Pe, { key: 0 }, [x("tr", null, [(k(true), D(Pe, null, it(n.row, (a, s) => (k(), oe(o(Do), { key: `tr1-${s}`, cell: a, tag: "th", type: "label" }, null, 8, ["cell"]))), 128))]), x("tr", null, [(k(true), D(Pe, null, it(n.row, (a, s) => (k(), oe(o(Do), { key: `tr2-${s}`, cell: a, tag: "td", type: "content" }, null, 8, ["cell"]))), 128))])], 64)) : (k(), D("tr", { key: 1 }, [(k(true), D(Pe, null, it(n.row, (a, s) => (k(), D(Pe, { key: `tr3-${s}` }, [o(t).border ? (k(), D(Pe, { key: 0 }, [z(o(Do), { cell: a, tag: "td", type: "label" }, null, 8, ["cell"]), z(o(Do), { cell: a, tag: "td", type: "content" }, null, 8, ["cell"])], 64)) : (k(), oe(o(Do), { key: 1, cell: a, tag: "td", type: "both" }, null, 8, ["cell"]))], 64))), 128))]));
} });
var yS = ve(bS, [["__file", "descriptions-row.vue"]]);
const CS = pe({ border: Boolean, column: { type: Number, default: 3 }, direction: { type: String, values: ["horizontal", "vertical"], default: "horizontal" }, size: Wt, title: { type: String, default: "" }, extra: { type: String, default: "" }, labelWidth: { type: [String, Number], default: "" } }), Ef = "ElDescriptionsItem", wS = K({ name: "ElDescriptions" }), SS = K({ ...wS, props: CS, setup(e) {
  const t = e, n = de("descriptions"), l = Ht(), a = Yt();
  ut(pi, t);
  const s = y(() => [n.b(), n.m(l.value)]), r = (u, c, d, f = false) => (u.props || (u.props = {}), c > d && (u.props.span = d), f && (u.props.span = c), u), i = () => {
    if (!a.default) return [];
    const u = al(a.default()).filter((v) => {
      var p;
      return ((p = v == null ? void 0 : v.type) == null ? void 0 : p.name) === Ef;
    }), c = [];
    let d = [], f = t.column, m = 0;
    const h = [];
    return u.forEach((v, p) => {
      var b, g, T;
      const w = ((b = v.props) == null ? void 0 : b.span) || 1, C = ((g = v.props) == null ? void 0 : g.rowspan) || 1, S = c.length;
      if (h[S] || (h[S] = 0), C > 1) for (let E = 1; E < C; E++) h[T = S + E] || (h[T] = 0), h[S + E]++, m++;
      if (h[S] > 0 && (f -= h[S], h[S] = 0), p < u.length - 1 && (m += w > f ? f : w), p === u.length - 1) {
        const E = t.column - m % t.column;
        d.push(r(v, E, f, true)), c.push(d);
        return;
      }
      w < f ? (f -= w, d.push(v)) : (d.push(r(v, w, f)), c.push(d), f = t.column, d = []);
    }), c;
  };
  return (u, c) => (k(), D("div", { class: $(o(s)) }, [u.title || u.extra || u.$slots.title || u.$slots.extra ? (k(), D("div", { key: 0, class: $(o(n).e("header")) }, [x("div", { class: $(o(n).e("title")) }, [X(u.$slots, "title", {}, () => [at(he(u.title), 1)])], 2), x("div", { class: $(o(n).e("extra")) }, [X(u.$slots, "extra", {}, () => [at(he(u.extra), 1)])], 2)], 2)) : J("v-if", true), x("div", { class: $(o(n).e("body")) }, [x("table", { class: $([o(n).e("table"), o(n).is("bordered", u.border)]) }, [x("tbody", null, [(k(true), D(Pe, null, it(i(), (d, f) => (k(), oe(yS, { key: f, row: d }, null, 8, ["row"]))), 128))])], 2)], 2)], 2));
} });
var kS = ve(SS, [["__file", "description.vue"]]);
const ES = pe({ label: { type: String, default: "" }, span: { type: Number, default: 1 }, rowspan: { type: Number, default: 1 }, width: { type: [String, Number], default: "" }, minWidth: { type: [String, Number], default: "" }, labelWidth: { type: [String, Number], default: "" }, align: { type: String, default: "left" }, labelAlign: { type: String, default: "" }, className: { type: String, default: "" }, labelClassName: { type: String, default: "" } }), $f = K({ name: Ef, props: ES }), $S = We(kS, { DescriptionsItem: $f }), TS = Vt($f), vi = (e) => {
  if (!e) return { onClick: Rt, onMousedown: Rt, onMouseup: Rt };
  let t = false, n = false;
  return { onClick: (r) => {
    t && n && e(r), t = n = false;
  }, onMousedown: (r) => {
    t = r.target === r.currentTarget;
  }, onMouseup: (r) => {
    n = r.target === r.currentTarget;
  } };
}, NS = pe({ mask: { type: Boolean, default: true }, customMaskEvent: Boolean, overlayClass: { type: Y([String, Array, Object]) }, zIndex: { type: Y([String, Number]) } }), IS = { click: (e) => e instanceof MouseEvent }, _S = "overlay";
var MS = K({ name: "ElOverlay", props: NS, emits: IS, setup(e, { slots: t, emit: n }) {
  const l = de(_S), a = (u) => {
    n("click", u);
  }, { onClick: s, onMousedown: r, onMouseup: i } = vi(e.customMaskEvent ? void 0 : a);
  return () => e.mask ? z("div", { class: [l.b(), e.overlayClass], style: { zIndex: e.zIndex }, onClick: s, onMousedown: r, onMouseup: i }, [X(t, "default")], Ln.STYLE | Ln.CLASS | Ln.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Oe("div", { class: e.overlayClass, style: { zIndex: e.zIndex, position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px" } }, [X(t, "default")]);
} });
const hi = MS, Tf = Symbol("dialogInjectionKey"), Nf = pe({ center: Boolean, alignCenter: Boolean, closeIcon: { type: St }, draggable: Boolean, overflow: Boolean, fullscreen: Boolean, headerClass: String, bodyClass: String, footerClass: String, showClose: { type: Boolean, default: true }, title: { type: String, default: "" }, ariaLevel: { type: String, default: "2" } }), OS = { close: () => true }, If = (e, t, n, l) => {
  let a = { offsetX: 0, offsetY: 0 };
  const s = (c) => {
    const d = c.clientX, f = c.clientY, { offsetX: m, offsetY: h } = a, v = e.value.getBoundingClientRect(), p = v.left, b = v.top, g = v.width, T = v.height, w = document.documentElement.clientWidth, C = document.documentElement.clientHeight, S = -p + m, E = -b + h, M = w - p - g + m, O = C - b - T + h, _ = (R) => {
      let P = m + R.clientX - d, W = h + R.clientY - f;
      (l == null ? void 0 : l.value) || (P = Math.min(Math.max(P, S), M), W = Math.min(Math.max(W, E), O)), a = { offsetX: P, offsetY: W }, e.value && (e.value.style.transform = `translate(${At(P)}, ${At(W)})`);
    }, I = () => {
      document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", I);
    };
    document.addEventListener("mousemove", _), document.addEventListener("mouseup", I);
  }, r = () => {
    t.value && e.value && t.value.addEventListener("mousedown", s);
  }, i = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", s);
  }, u = () => {
    a = { offsetX: 0, offsetY: 0 }, e.value && (e.value.style.transform = "none");
  };
  return Xe(() => {
    an(() => {
      n.value ? r() : i();
    });
  }), It(() => {
    i();
  }), { resetPosition: u };
}, hs = (...e) => (t) => {
  e.forEach((n) => {
    Qe(n) ? n(t) : n.value = t;
  });
}, PS = K({ name: "ElDialogContent" }), RS = K({ ...PS, props: Nf, emits: OS, setup(e, { expose: t }) {
  const n = e, { t: l } = ft(), { Close: a } = hd, { dialogRef: s, headerRef: r, bodyId: i, ns: u, style: c } = we(Tf), { focusTrapRef: d } = we(ei), f = y(() => [u.b(), u.is("fullscreen", n.fullscreen), u.is("draggable", n.draggable), u.is("align-center", n.alignCenter), { [u.m("center")]: n.center }]), m = hs(d, s), h = y(() => n.draggable), v = y(() => n.overflow), { resetPosition: p } = If(s, r, h, v);
  return t({ resetPosition: p }), (b, g) => (k(), D("div", { ref: o(m), class: $(o(f)), style: Me(o(c)), tabindex: "-1" }, [x("header", { ref_key: "headerRef", ref: r, class: $([o(u).e("header"), b.headerClass, { "show-close": b.showClose }]) }, [X(b.$slots, "header", {}, () => [x("span", { role: "heading", "aria-level": b.ariaLevel, class: $(o(u).e("title")) }, he(b.title), 11, ["aria-level"])]), b.showClose ? (k(), D("button", { key: 0, "aria-label": o(l)("el.dialog.close"), class: $(o(u).e("headerbtn")), type: "button", onClick: (T) => b.$emit("close") }, [z(o(Ee), { class: $(o(u).e("close")) }, { default: j(() => [(k(), oe(Je(b.closeIcon || o(a))))]), _: 1 }, 8, ["class"])], 10, ["aria-label", "onClick"])) : J("v-if", true)], 2), x("div", { id: o(i), class: $([o(u).e("body"), b.bodyClass]) }, [X(b.$slots, "default")], 10, ["id"]), b.$slots.footer ? (k(), D("footer", { key: 0, class: $([o(u).e("footer"), b.footerClass]) }, [X(b.$slots, "footer")], 2)) : J("v-if", true)], 6));
} });
var LS = ve(RS, [["__file", "dialog-content.vue"]]);
const _f = pe({ ...Nf, appendToBody: Boolean, appendTo: { type: Y([String, Object]), default: "body" }, beforeClose: { type: Y(Function) }, destroyOnClose: Boolean, closeOnClickModal: { type: Boolean, default: true }, closeOnPressEscape: { type: Boolean, default: true }, lockScroll: { type: Boolean, default: true }, modal: { type: Boolean, default: true }, openDelay: { type: Number, default: 0 }, closeDelay: { type: Number, default: 0 }, top: { type: String }, modelValue: Boolean, modalClass: String, headerClass: String, bodyClass: String, footerClass: String, width: { type: [String, Number] }, zIndex: { type: Number }, trapFocus: Boolean, headerAriaLevel: { type: String, default: "2" } }), Mf = { open: () => true, opened: () => true, close: () => true, closed: () => true, [Ae]: (e) => Tt(e), openAutoFocus: () => true, closeAutoFocus: () => true }, mi = (e, t = {}) => {
  mn(e) || Kt("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || de("popup"), l = y(() => n.bm("parent", "hidden"));
  if (!dt || Nn(document.body, l.value)) return;
  let a = 0, s = false, r = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || s && document && (document.body.style.width = r, gn(document.body, l.value));
    }, 200);
  };
  ue(e, (u) => {
    if (!u) {
      i();
      return;
    }
    s = !Nn(document.body, l.value), s && (r = document.body.style.width, Dn(document.body, l.value)), a = fd(n.namespace.value);
    const c = document.documentElement.clientHeight < document.body.scrollHeight, d = ll(document.body, "overflowY");
    a > 0 && (c || d === "scroll") && s && (document.body.style.width = `calc(100% - ${a}px)`);
  }), Oc(() => i());
}, Of = (e, t) => {
  var n;
  const a = tt().emit, { nextZIndex: s } = No();
  let r = "";
  const i = nn(), u = nn(), c = N(false), d = N(false), f = N(false), m = N((n = e.zIndex) != null ? n : s());
  let h, v;
  const p = rs("namespace", zo), b = y(() => {
    const A = {}, L = `--${p.value}-dialog`;
    return e.fullscreen || (e.top && (A[`${L}-margin-top`] = e.top), e.width && (A[`${L}-width`] = At(e.width))), A;
  }), g = y(() => e.alignCenter ? { display: "flex" } : {});
  function T() {
    a("opened");
  }
  function w() {
    a("closed"), a(Ae, false), e.destroyOnClose && (f.value = false);
  }
  function C() {
    a("close");
  }
  function S() {
    v == null ? void 0 : v(), h == null ? void 0 : h(), e.openDelay && e.openDelay > 0 ? { stop: h } = Kl(() => _(), e.openDelay) : _();
  }
  function E() {
    h == null ? void 0 : h(), v == null ? void 0 : v(), e.closeDelay && e.closeDelay > 0 ? { stop: v } = Kl(() => I(), e.closeDelay) : I();
  }
  function M() {
    function A(L) {
      L || (d.value = true, c.value = false);
    }
    e.beforeClose ? e.beforeClose(A) : E();
  }
  function O() {
    e.closeOnClickModal && M();
  }
  function _() {
    dt && (c.value = true);
  }
  function I() {
    c.value = false;
  }
  function R() {
    a("openAutoFocus");
  }
  function P() {
    a("closeAutoFocus");
  }
  function W(A) {
    var L;
    ((L = A.detail) == null ? void 0 : L.focusReason) === "pointer" && A.preventDefault();
  }
  e.lockScroll && mi(c);
  function te() {
    e.closeOnPressEscape && M();
  }
  return ue(() => e.modelValue, (A) => {
    A ? (d.value = false, S(), f.value = true, m.value = Dc(e.zIndex) ? s() : m.value++, $e(() => {
      a("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : c.value && E();
  }), ue(() => e.fullscreen, (A) => {
    t.value && (A ? (r = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = r);
  }), Xe(() => {
    e.modelValue && (c.value = true, f.value = true, S());
  }), { afterEnter: T, afterLeave: w, beforeLeave: C, handleClose: M, onModalClick: O, close: E, doClose: I, onOpenAutoFocus: R, onCloseAutoFocus: P, onCloseRequested: te, onFocusoutPrevented: W, titleId: i, bodyId: u, closed: d, style: b, overlayDialogStyle: g, rendered: f, visible: c, zIndex: m };
}, BS = K({ name: "ElDialog", inheritAttrs: false }), DS = K({ ...BS, props: _f, emits: Mf, setup(e, { expose: t }) {
  const n = e, l = Yt();
  wl({ scope: "el-dialog", from: "the title slot", replacement: "the header slot", version: "3.0.0", ref: "https://element-plus.org/en-US/component/dialog.html#slots" }, y(() => !!l.title));
  const a = de("dialog"), s = N(), r = N(), i = N(), { visible: u, titleId: c, bodyId: d, style: f, overlayDialogStyle: m, rendered: h, zIndex: v, afterEnter: p, afterLeave: b, beforeLeave: g, handleClose: T, onModalClick: w, onOpenAutoFocus: C, onCloseAutoFocus: S, onCloseRequested: E, onFocusoutPrevented: M } = Of(n, s);
  ut(Tf, { dialogRef: s, headerRef: r, bodyId: d, ns: a, rendered: h, style: f });
  const O = vi(w), _ = y(() => n.draggable && !n.fullscreen);
  return t({ visible: u, dialogContentRef: i, resetPosition: () => {
    var R;
    (R = i.value) == null || R.resetPosition();
  }, handleClose: T }), (R, P) => (k(), oe(o(Mo), { to: R.appendTo, disabled: R.appendTo !== "body" ? false : !R.appendToBody }, { default: j(() => [z(en, { name: "dialog-fade", onAfterEnter: o(p), onAfterLeave: o(b), onBeforeLeave: o(g), persisted: "" }, { default: j(() => [Ye(z(o(hi), { "custom-mask-event": "", mask: R.modal, "overlay-class": R.modalClass, "z-index": o(v) }, { default: j(() => [x("div", { role: "dialog", "aria-modal": "true", "aria-label": R.title || void 0, "aria-labelledby": R.title ? void 0 : o(c), "aria-describedby": o(d), class: $(`${o(a).namespace.value}-overlay-dialog`), style: Me(o(m)), onClick: o(O).onClick, onMousedown: o(O).onMousedown, onMouseup: o(O).onMouseup }, [z(o(_o), { loop: "", trapped: o(u), "focus-start-el": "container", onFocusAfterTrapped: o(C), onFocusAfterReleased: o(S), onFocusoutPrevented: o(M), onReleaseRequested: o(E) }, { default: j(() => [o(h) ? (k(), oe(LS, lt({ key: 0, ref_key: "dialogContentRef", ref: i }, R.$attrs, { center: R.center, "align-center": R.alignCenter, "close-icon": R.closeIcon, draggable: o(_), overflow: R.overflow, fullscreen: R.fullscreen, "header-class": R.headerClass, "body-class": R.bodyClass, "footer-class": R.footerClass, "show-close": R.showClose, title: R.title, "aria-level": R.headerAriaLevel, onClose: o(T) }), On({ header: j(() => [R.$slots.title ? X(R.$slots, "title", { key: 1 }) : X(R.$slots, "header", { key: 0, close: o(T), titleId: o(c), titleClass: o(a).e("title") })]), default: j(() => [X(R.$slots, "default")]), _: 2 }, [R.$slots.footer ? { name: "footer", fn: j(() => [X(R.$slots, "footer")]) } : void 0]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : J("v-if", true)]), _: 3 }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])]), _: 3 }, 8, ["mask", "overlay-class", "z-index"]), [[pt, o(u)]])]), _: 3 }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])]), _: 3 }, 8, ["to", "disabled"]));
} });
var VS = ve(DS, [["__file", "dialog.vue"]]);
const AS = We(VS), FS = pe({ direction: { type: String, values: ["horizontal", "vertical"], default: "horizontal" }, contentPosition: { type: String, values: ["left", "center", "right"], default: "center" }, borderStyle: { type: Y(String), default: "solid" } }), zS = K({ name: "ElDivider" }), xS = K({ ...zS, props: FS, setup(e) {
  const t = e, n = de("divider"), l = y(() => n.cssVar({ "border-style": t.borderStyle }));
  return (a, s) => (k(), D("div", { class: $([o(n).b(), o(n).m(a.direction)]), style: Me(o(l)), role: "separator" }, [a.$slots.default && a.direction !== "vertical" ? (k(), D("div", { key: 0, class: $([o(n).e("text"), o(n).is(a.contentPosition)]) }, [X(a.$slots, "default")], 2)) : J("v-if", true)], 6));
} });
var HS = ve(xS, [["__file", "divider.vue"]]);
const Pf = We(HS), KS = pe({ ..._f, direction: { type: String, default: "rtl", values: ["ltr", "rtl", "ttb", "btt"] }, size: { type: [String, Number], default: "30%" }, withHeader: { type: Boolean, default: true }, modalFade: { type: Boolean, default: true }, headerAriaLevel: { type: String, default: "2" } }), WS = Mf, jS = K({ name: "ElDrawer", inheritAttrs: false }), US = K({ ...jS, props: KS, emits: WS, setup(e, { expose: t }) {
  const n = e, l = Yt();
  wl({ scope: "el-drawer", from: "the title slot", replacement: "the header slot", version: "3.0.0", ref: "https://element-plus.org/en-US/component/drawer.html#slots" }, y(() => !!l.title));
  const a = N(), s = N(), r = de("drawer"), { t: i } = ft(), { afterEnter: u, afterLeave: c, beforeLeave: d, visible: f, rendered: m, titleId: h, bodyId: v, zIndex: p, onModalClick: b, onOpenAutoFocus: g, onCloseAutoFocus: T, onFocusoutPrevented: w, onCloseRequested: C, handleClose: S } = Of(n, a), E = y(() => n.direction === "rtl" || n.direction === "ltr"), M = y(() => At(n.size));
  return t({ handleClose: S, afterEnter: u, afterLeave: c }), (O, _) => (k(), oe(o(Mo), { to: O.appendTo, disabled: O.appendTo !== "body" ? false : !O.appendToBody }, { default: j(() => [z(en, { name: o(r).b("fade"), onAfterEnter: o(u), onAfterLeave: o(c), onBeforeLeave: o(d), persisted: "" }, { default: j(() => [Ye(z(o(hi), { mask: O.modal, "overlay-class": O.modalClass, "z-index": o(p), onClick: o(b) }, { default: j(() => [z(o(_o), { loop: "", trapped: o(f), "focus-trap-el": a.value, "focus-start-el": s.value, onFocusAfterTrapped: o(g), onFocusAfterReleased: o(T), onFocusoutPrevented: o(w), onReleaseRequested: o(C) }, { default: j(() => [x("div", lt({ ref_key: "drawerRef", ref: a, "aria-modal": "true", "aria-label": O.title || void 0, "aria-labelledby": O.title ? void 0 : o(h), "aria-describedby": o(v) }, O.$attrs, { class: [o(r).b(), O.direction, o(f) && "open"], style: o(E) ? "width: " + o(M) : "height: " + o(M), role: "dialog", onClick: Re(() => {
  }, ["stop"]) }), [x("span", { ref_key: "focusStartRef", ref: s, class: $(o(r).e("sr-focus")), tabindex: "-1" }, null, 2), O.withHeader ? (k(), D("header", { key: 0, class: $([o(r).e("header"), O.headerClass]) }, [O.$slots.title ? X(O.$slots, "title", { key: 1 }, () => [J(" DEPRECATED SLOT ")]) : X(O.$slots, "header", { key: 0, close: o(S), titleId: o(h), titleClass: o(r).e("title") }, () => [O.$slots.title ? J("v-if", true) : (k(), D("span", { key: 0, id: o(h), role: "heading", "aria-level": O.headerAriaLevel, class: $(o(r).e("title")) }, he(O.title), 11, ["id", "aria-level"]))]), O.showClose ? (k(), D("button", { key: 2, "aria-label": o(i)("el.drawer.close"), class: $(o(r).e("close-btn")), type: "button", onClick: o(S) }, [z(o(Ee), { class: $(o(r).e("close")) }, { default: j(() => [z(o(An))]), _: 1 }, 8, ["class"])], 10, ["aria-label", "onClick"])) : J("v-if", true)], 2)) : J("v-if", true), o(m) ? (k(), D("div", { key: 1, id: o(v), class: $([o(r).e("body"), O.bodyClass]) }, [X(O.$slots, "default")], 10, ["id"])) : J("v-if", true), O.$slots.footer ? (k(), D("div", { key: 2, class: $([o(r).e("footer"), O.footerClass]) }, [X(O.$slots, "footer")], 2)) : J("v-if", true)], 16, ["aria-label", "aria-labelledby", "aria-describedby", "onClick"])]), _: 3 }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])]), _: 3 }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [[pt, o(f)]])]), _: 3 }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])]), _: 3 }, 8, ["to", "disabled"]));
} });
var YS = ve(US, [["__file", "drawer.vue"]]);
const qS = We(YS), GS = K({ inheritAttrs: false });
function XS(e, t, n, l, a, s) {
  return X(e.$slots, "default");
}
var ZS = ve(GS, [["render", XS], ["__file", "collection.vue"]]);
const JS = K({ name: "ElCollectionItem", inheritAttrs: false });
function QS(e, t, n, l, a, s) {
  return X(e.$slots, "default");
}
var ek = ve(JS, [["render", QS], ["__file", "collection-item.vue"]]);
const Rf = "data-el-collection-item", Lf = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, l = Symbol(t), a = Symbol(n), s = { ...ZS, name: t, setup() {
    const i = N(), u = /* @__PURE__ */ new Map();
    ut(l, { itemMap: u, getItems: () => {
      const d = o(i);
      if (!d) return [];
      const f = Array.from(d.querySelectorAll(`[${Rf}]`));
      return [...u.values()].sort((h, v) => f.indexOf(h.ref) - f.indexOf(v.ref));
    }, collectionRef: i });
  } }, r = { ...ek, name: n, setup(i, { attrs: u }) {
    const c = N(), d = we(l, void 0);
    ut(a, { collectionItemRef: c }), Xe(() => {
      const f = o(c);
      f && d.itemMap.set(f, { ref: f, ...u });
    }), It(() => {
      const f = o(c);
      d.itemMap.delete(f);
    });
  } };
  return { COLLECTION_INJECTION_KEY: l, COLLECTION_ITEM_INJECTION_KEY: a, ElCollection: s, ElCollectionItem: r };
}, tk = pe({ style: { type: Y([String, Array, Object]) }, currentTabId: { type: Y(String) }, defaultCurrentTabId: String, loop: Boolean, dir: { type: String, values: ["ltr", "rtl"], default: "ltr" }, orientation: { type: Y(String) }, onBlur: Function, onFocus: Function, onMousedown: Function }), { ElCollection: nk, ElCollectionItem: lk, COLLECTION_INJECTION_KEY: gi, COLLECTION_ITEM_INJECTION_KEY: ok } = Lf("RovingFocusGroup"), bi = Symbol("elRovingFocusGroup"), Bf = Symbol("elRovingFocusGroupItem"), ak = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" }, sk = (e, t) => e, rk = (e, t, n) => {
  const l = sk(e.code);
  return ak[l];
}, ik = (e, t) => e.map((n, l) => e[(l + t) % e.length]), yi = (e) => {
  const { activeElement: t } = document;
  for (const n of e) if (n === t || (n.focus(), t !== document.activeElement)) return;
}, Uu = "currentTabIdChange", Yu = "rovingFocusGroup.entryFocus", uk = { bubbles: false, cancelable: true }, ck = K({ name: "ElRovingFocusGroupImpl", inheritAttrs: false, props: tk, emits: [Uu, "entryFocus"], setup(e, { emit: t }) {
  var n;
  const l = N((n = e.currentTabId || e.defaultCurrentTabId) != null ? n : null), a = N(false), s = N(false), r = N(), { getItems: i } = we(gi, void 0), u = y(() => [{ outline: "none" }, e.style]), c = (p) => {
    t(Uu, p);
  }, d = () => {
    a.value = true;
  }, f = zt((p) => {
    var b;
    (b = e.onMousedown) == null || b.call(e, p);
  }, () => {
    s.value = true;
  }), m = zt((p) => {
    var b;
    (b = e.onFocus) == null || b.call(e, p);
  }, (p) => {
    const b = !o(s), { target: g, currentTarget: T } = p;
    if (g === T && b && !o(a)) {
      const w = new Event(Yu, uk);
      if (T == null ? void 0 : T.dispatchEvent(w), !w.defaultPrevented) {
        const C = i().filter((_) => _.focusable), S = C.find((_) => _.active), E = C.find((_) => _.id === o(l)), O = [S, E, ...C].filter(Boolean).map((_) => _.ref);
        yi(O);
      }
    }
    s.value = false;
  }), h = zt((p) => {
    var b;
    (b = e.onBlur) == null || b.call(e, p);
  }, () => {
    a.value = false;
  }), v = (...p) => {
    t("entryFocus", ...p);
  };
  ut(bi, { currentTabbedId: es(l), loop: yt(e, "loop"), tabIndex: y(() => o(a) ? -1 : 0), rovingFocusGroupRef: r, rovingFocusGroupRootStyle: u, orientation: yt(e, "orientation"), dir: yt(e, "dir"), onItemFocus: c, onItemShiftTab: d, onBlur: h, onFocus: m, onMousedown: f }), ue(() => e.currentTabId, (p) => {
    l.value = p ?? null;
  }), Et(r, Yu, v);
} });
function dk(e, t, n, l, a, s) {
  return X(e.$slots, "default");
}
var fk = ve(ck, [["render", dk], ["__file", "roving-focus-group-impl.vue"]]);
const pk = K({ name: "ElRovingFocusGroup", components: { ElFocusGroupCollection: nk, ElRovingFocusGroupImpl: fk } });
function vk(e, t, n, l, a, s) {
  const r = nt("el-roving-focus-group-impl"), i = nt("el-focus-group-collection");
  return k(), oe(i, null, { default: j(() => [z(r, Mn(sl(e.$attrs)), { default: j(() => [X(e.$slots, "default")]), _: 3 }, 16)]), _: 3 });
}
var hk = ve(pk, [["render", vk], ["__file", "roving-focus-group.vue"]]);
const Ta = pe({ trigger: co.trigger, triggerKeys: { type: Y(Array), default: () => [ye.enter, ye.numpadEnter, ye.space, ye.down] }, effect: { ...Xt.effect, default: "light" }, type: { type: Y(String) }, placement: { type: Y(String), default: "bottom" }, popperOptions: { type: Y(Object), default: () => ({}) }, id: String, size: { type: String, default: "" }, splitButton: Boolean, hideOnClick: { type: Boolean, default: true }, loop: { type: Boolean, default: true }, showTimeout: { type: Number, default: 150 }, hideTimeout: { type: Number, default: 150 }, tabindex: { type: Y([Number, String]), default: 0 }, maxHeight: { type: Y([Number, String]), default: "" }, popperClass: { type: String, default: "" }, disabled: Boolean, role: { type: String, values: yd, default: "menu" }, buttonProps: { type: Y(Object) }, teleported: Xt.teleported, persistent: { type: Boolean, default: true } }), Df = pe({ command: { type: [Object, String, Number], default: () => ({}) }, disabled: Boolean, divided: Boolean, textValue: String, icon: { type: St } }), mk = pe({ onKeydown: { type: Y(Function) } }), gk = [ye.down, ye.pageDown, ye.home], Vf = [ye.up, ye.pageUp, ye.end], bk = [...gk, ...Vf], { ElCollection: yk, ElCollectionItem: Ck, COLLECTION_INJECTION_KEY: wk, COLLECTION_ITEM_INJECTION_KEY: Sk } = Lf("Dropdown"), ms = Symbol("elDropdown"), { ButtonGroup: kk } = Qt, Ek = K({ name: "ElDropdown", components: { ElButton: Qt, ElButtonGroup: kk, ElScrollbar: el, ElDropdownCollection: yk, ElTooltip: rn, ElRovingFocusGroup: hk, ElOnlyChild: Td, ElIcon: Ee, ArrowDown: fl }, props: Ta, emits: ["visible-change", "click", "command"], setup(e, { emit: t }) {
  const n = tt(), l = de("dropdown"), { t: a } = ft(), s = N(), r = N(), i = N(), u = N(), c = N(null), d = N(null), f = N(false), m = y(() => ({ maxHeight: At(e.maxHeight) })), h = y(() => [l.m(C.value)]), v = y(() => pn(e.trigger)), p = nn().value, b = y(() => e.id || p);
  ue([s, v], ([L, F], [V]) => {
    var B, G, U;
    (B = V == null ? void 0 : V.$el) != null && B.removeEventListener && V.$el.removeEventListener("pointerenter", E), (G = L == null ? void 0 : L.$el) != null && G.removeEventListener && L.$el.removeEventListener("pointerenter", E), (U = L == null ? void 0 : L.$el) != null && U.addEventListener && F.includes("hover") && L.$el.addEventListener("pointerenter", E);
  }, { immediate: true }), It(() => {
    var L, F;
    (F = (L = s.value) == null ? void 0 : L.$el) != null && F.removeEventListener && s.value.$el.removeEventListener("pointerenter", E);
  });
  function g() {
    T();
  }
  function T() {
    var L;
    (L = i.value) == null || L.onClose();
  }
  function w() {
    var L;
    (L = i.value) == null || L.onOpen();
  }
  const C = Ht();
  function S(...L) {
    t("command", ...L);
  }
  function E() {
    var L, F;
    (F = (L = s.value) == null ? void 0 : L.$el) == null || F.focus();
  }
  function M() {
  }
  function O() {
    const L = o(u);
    v.value.includes("hover") && (L == null ? void 0 : L.focus()), d.value = null;
  }
  function _(L) {
    d.value = L;
  }
  function I(L) {
    f.value || (L.preventDefault(), L.stopImmediatePropagation());
  }
  function R() {
    t("visible-change", true);
  }
  function P(L) {
    var F;
    (L == null ? void 0 : L.type) === "keydown" && ((F = u.value) == null || F.focus());
  }
  function W() {
    t("visible-change", false);
  }
  return ut(ms, { contentRef: u, role: y(() => e.role), triggerId: b, isUsingKeyboard: f, onItemEnter: M, onItemLeave: O }), ut("elDropdown", { instance: n, dropdownSize: C, handleClick: g, commandHandler: S, trigger: yt(e, "trigger"), hideOnClick: yt(e, "hideOnClick") }), { t: a, ns: l, scrollbar: c, wrapStyle: m, dropdownTriggerKls: h, dropdownSize: C, triggerId: b, currentTabId: d, handleCurrentTabIdChange: _, handlerMainButtonClick: (L) => {
    t("click", L);
  }, handleEntryFocus: I, handleClose: T, handleOpen: w, handleBeforeShowTooltip: R, handleShowTooltip: P, handleBeforeHideTooltip: W, onFocusAfterTrapped: (L) => {
    var F, V;
    L.preventDefault(), (V = (F = u.value) == null ? void 0 : F.focus) == null || V.call(F, { preventScroll: true });
  }, popperRef: i, contentRef: u, triggeringElementRef: s, referenceElementRef: r };
} });
function $k(e, t, n, l, a, s) {
  var r;
  const i = nt("el-dropdown-collection"), u = nt("el-roving-focus-group"), c = nt("el-scrollbar"), d = nt("el-only-child"), f = nt("el-tooltip"), m = nt("el-button"), h = nt("arrow-down"), v = nt("el-icon"), p = nt("el-button-group");
  return k(), D("div", { class: $([e.ns.b(), e.ns.is("disabled", e.disabled)]) }, [z(f, { ref: "popperRef", role: e.role, effect: e.effect, "fallback-placements": ["bottom", "top"], "popper-options": e.popperOptions, "gpu-acceleration": false, "hide-after": e.trigger === "hover" ? e.hideTimeout : 0, "manual-mode": true, placement: e.placement, "popper-class": [e.ns.e("popper"), e.popperClass], "reference-element": (r = e.referenceElementRef) == null ? void 0 : r.$el, trigger: e.trigger, "trigger-keys": e.triggerKeys, "trigger-target-el": e.contentRef, "show-after": e.trigger === "hover" ? e.showTimeout : 0, "stop-popper-mouse-event": false, "virtual-ref": e.triggeringElementRef, "virtual-triggering": e.splitButton, disabled: e.disabled, transition: `${e.ns.namespace.value}-zoom-in-top`, teleported: e.teleported, pure: "", persistent: e.persistent, onBeforeShow: e.handleBeforeShowTooltip, onShow: e.handleShowTooltip, onBeforeHide: e.handleBeforeHideTooltip }, On({ content: j(() => [z(c, { ref: "scrollbar", "wrap-style": e.wrapStyle, tag: "div", "view-class": e.ns.e("list") }, { default: j(() => [z(u, { loop: e.loop, "current-tab-id": e.currentTabId, orientation: "horizontal", onCurrentTabIdChange: e.handleCurrentTabIdChange, onEntryFocus: e.handleEntryFocus }, { default: j(() => [z(i, null, { default: j(() => [X(e.$slots, "dropdown")]), _: 3 })]), _: 3 }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])]), _: 3 }, 8, ["wrap-style", "view-class"])]), _: 2 }, [e.splitButton ? void 0 : { name: "default", fn: j(() => [z(d, { id: e.triggerId, ref: "triggeringElementRef", role: "button", tabindex: e.tabindex }, { default: j(() => [X(e.$slots, "default")]), _: 3 }, 8, ["id", "tabindex"])]) }]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]), e.splitButton ? (k(), oe(p, { key: 0 }, { default: j(() => [z(m, lt({ ref: "referenceElementRef" }, e.buttonProps, { size: e.dropdownSize, type: e.type, disabled: e.disabled, tabindex: e.tabindex, onClick: e.handlerMainButtonClick }), { default: j(() => [X(e.$slots, "default")]), _: 3 }, 16, ["size", "type", "disabled", "tabindex", "onClick"]), z(m, lt({ id: e.triggerId, ref: "triggeringElementRef" }, e.buttonProps, { role: "button", size: e.dropdownSize, type: e.type, class: e.ns.e("caret-button"), disabled: e.disabled, tabindex: e.tabindex, "aria-label": e.t("el.dropdown.toggleDropdown") }), { default: j(() => [z(v, { class: $(e.ns.e("icon")) }, { default: j(() => [z(h)]), _: 1 }, 8, ["class"])]), _: 1 }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])]), _: 3 })) : J("v-if", true)], 2);
}
var Tk = ve(Ek, [["render", $k], ["__file", "dropdown.vue"]]);
const Nk = K({ components: { ElRovingFocusCollectionItem: lk }, props: { focusable: { type: Boolean, default: true }, active: { type: Boolean, default: false } }, emits: ["mousedown", "focus", "keydown"], setup(e, { emit: t }) {
  const { currentTabbedId: n, loop: l, onItemFocus: a, onItemShiftTab: s } = we(bi, void 0), { getItems: r } = we(gi, void 0), i = nn(), u = N(), c = zt((h) => {
    t("mousedown", h);
  }, (h) => {
    e.focusable ? a(o(i)) : h.preventDefault();
  }), d = zt((h) => {
    t("focus", h);
  }, () => {
    a(o(i));
  }), f = zt((h) => {
    t("keydown", h);
  }, (h) => {
    const { code: v, shiftKey: p, target: b, currentTarget: g } = h;
    if (v === ye.tab && p) {
      s();
      return;
    }
    if (b !== g) return;
    const T = rk(h);
    if (T) {
      h.preventDefault();
      let C = r().filter((S) => S.focusable).map((S) => S.ref);
      switch (T) {
        case "last": {
          C.reverse();
          break;
        }
        case "prev":
        case "next": {
          T === "prev" && C.reverse();
          const S = C.indexOf(g);
          C = l.value ? ik(C, S + 1) : C.slice(S + 1);
          break;
        }
      }
      $e(() => {
        yi(C);
      });
    }
  }), m = y(() => n.value === o(i));
  return ut(Bf, { rovingFocusGroupItemRef: u, tabIndex: y(() => o(m) ? 0 : -1), handleMousedown: c, handleFocus: d, handleKeydown: f }), { id: i, handleKeydown: f, handleFocus: d, handleMousedown: c };
} });
function Ik(e, t, n, l, a, s) {
  const r = nt("el-roving-focus-collection-item");
  return k(), oe(r, { id: e.id, focusable: e.focusable, active: e.active }, { default: j(() => [X(e.$slots, "default")]), _: 3 }, 8, ["id", "focusable", "active"]);
}
var _k = ve(Nk, [["render", Ik], ["__file", "roving-focus-item.vue"]]);
const Mk = K({ name: "DropdownItemImpl", components: { ElIcon: Ee }, props: Df, emits: ["pointermove", "pointerleave", "click", "clickimpl"], setup(e, { emit: t }) {
  const n = de("dropdown"), { role: l } = we(ms, void 0), { collectionItemRef: a } = we(Sk, void 0), { collectionItemRef: s } = we(ok, void 0), { rovingFocusGroupItemRef: r, tabIndex: i, handleFocus: u, handleKeydown: c, handleMousedown: d } = we(Bf, void 0), f = hs(a, s, r), m = y(() => l.value === "menu" ? "menuitem" : l.value === "navigation" ? "link" : "button"), h = zt((v) => {
    if ([ye.enter, ye.numpadEnter, ye.space].includes(v.code)) return v.preventDefault(), v.stopImmediatePropagation(), t("clickimpl", v), true;
  }, c);
  return { ns: n, itemRef: f, dataset: { [Rf]: "" }, role: m, tabIndex: i, handleFocus: u, handleKeydown: h, handleMousedown: d };
} });
function Ok(e, t, n, l, a, s) {
  const r = nt("el-icon");
  return k(), D(Pe, null, [e.divided ? (k(), D("li", { key: 0, role: "separator", class: $(e.ns.bem("menu", "item", "divided")) }, null, 2)) : J("v-if", true), x("li", lt({ ref: e.itemRef }, { ...e.dataset, ...e.$attrs }, { "aria-disabled": e.disabled, class: [e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled)], tabindex: e.tabIndex, role: e.role, onClick: (i) => e.$emit("clickimpl", i), onFocus: e.handleFocus, onKeydown: Re(e.handleKeydown, ["self"]), onMousedown: e.handleMousedown, onPointermove: (i) => e.$emit("pointermove", i), onPointerleave: (i) => e.$emit("pointerleave", i) }), [e.icon ? (k(), oe(r, { key: 0 }, { default: j(() => [(k(), oe(Je(e.icon)))]), _: 1 })) : J("v-if", true), X(e.$slots, "default")], 16, ["aria-disabled", "tabindex", "role", "onClick", "onFocus", "onKeydown", "onMousedown", "onPointermove", "onPointerleave"])], 64);
}
var Pk = ve(Mk, [["render", Ok], ["__file", "dropdown-item-impl.vue"]]);
const Af = () => {
  const e = we("elDropdown", {}), t = y(() => e == null ? void 0 : e.dropdownSize);
  return { elDropdown: e, _elDropdownSize: t };
}, Rk = K({ name: "ElDropdownItem", components: { ElDropdownCollectionItem: Ck, ElRovingFocusItem: _k, ElDropdownItemImpl: Pk }, inheritAttrs: false, props: Df, emits: ["pointermove", "pointerleave", "click"], setup(e, { emit: t, attrs: n }) {
  const { elDropdown: l } = Af(), a = tt(), s = N(null), r = y(() => {
    var h, v;
    return (v = (h = o(s)) == null ? void 0 : h.textContent) != null ? v : "";
  }), { onItemEnter: i, onItemLeave: u } = we(ms, void 0), c = zt((h) => (t("pointermove", h), h.defaultPrevented), Nu((h) => {
    if (e.disabled) {
      u(h);
      return;
    }
    const v = h.currentTarget;
    v === document.activeElement || v.contains(document.activeElement) || (i(h), h.defaultPrevented || (v == null ? void 0 : v.focus()));
  })), d = zt((h) => (t("pointerleave", h), h.defaultPrevented), Nu(u)), f = zt((h) => {
    if (!e.disabled) return t("click", h), h.type !== "keydown" && h.defaultPrevented;
  }, (h) => {
    var v, p, b;
    if (e.disabled) {
      h.stopImmediatePropagation();
      return;
    }
    (v = l == null ? void 0 : l.hideOnClick) != null && v.value && ((p = l.handleClick) == null || p.call(l)), (b = l.commandHandler) == null || b.call(l, e.command, a, h);
  }), m = y(() => ({ ...e, ...n }));
  return { handleClick: f, handlePointerMove: c, handlePointerLeave: d, textContent: r, propsAndAttrs: m };
} });
function Lk(e, t, n, l, a, s) {
  var r;
  const i = nt("el-dropdown-item-impl"), u = nt("el-roving-focus-item"), c = nt("el-dropdown-collection-item");
  return k(), oe(c, { disabled: e.disabled, "text-value": (r = e.textValue) != null ? r : e.textContent }, { default: j(() => [z(u, { focusable: !e.disabled }, { default: j(() => [z(i, lt(e.propsAndAttrs, { onPointerleave: e.handlePointerLeave, onPointermove: e.handlePointerMove, onClickimpl: e.handleClick }), { default: j(() => [X(e.$slots, "default")]), _: 3 }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])]), _: 3 }, 8, ["focusable"])]), _: 3 }, 8, ["disabled", "text-value"]);
}
var Ff = ve(Rk, [["render", Lk], ["__file", "dropdown-item.vue"]]);
const Bk = K({ name: "ElDropdownMenu", props: mk, setup(e) {
  const t = de("dropdown"), { _elDropdownSize: n } = Af(), l = n.value, { focusTrapRef: a, onKeydown: s } = we(ei, void 0), { contentRef: r, role: i, triggerId: u } = we(ms, void 0), { collectionRef: c, getItems: d } = we(wk, void 0), { rovingFocusGroupRef: f, rovingFocusGroupRootStyle: m, tabIndex: h, onBlur: v, onFocus: p, onMousedown: b } = we(bi, void 0), { collectionRef: g } = we(gi, void 0), T = y(() => [t.b("menu"), t.bm("menu", l == null ? void 0 : l.value)]), w = hs(r, c, a, f, g), C = zt((E) => {
    var M;
    (M = e.onKeydown) == null || M.call(e, E);
  }, (E) => {
    const { currentTarget: M, code: O, target: _ } = E;
    if (M.contains(_), ye.tab === O && E.stopImmediatePropagation(), E.preventDefault(), _ !== o(r) || !bk.includes(O)) return;
    const R = d().filter((P) => !P.disabled).map((P) => P.ref);
    Vf.includes(O) && R.reverse(), yi(R);
  });
  return { size: l, rovingFocusGroupRootStyle: m, tabIndex: h, dropdownKls: T, role: i, triggerId: u, dropdownListWrapperRef: w, handleKeydown: (E) => {
    C(E), s(E);
  }, onBlur: v, onFocus: p, onMousedown: b };
} });
function Dk(e, t, n, l, a, s) {
  return k(), D("ul", { ref: e.dropdownListWrapperRef, class: $(e.dropdownKls), style: Me(e.rovingFocusGroupRootStyle), tabindex: -1, role: e.role, "aria-labelledby": e.triggerId, onBlur: e.onBlur, onFocus: e.onFocus, onKeydown: Re(e.handleKeydown, ["self"]), onMousedown: Re(e.onMousedown, ["self"]) }, [X(e.$slots, "default")], 46, ["role", "aria-labelledby", "onBlur", "onFocus", "onKeydown", "onMousedown"]);
}
var zf = ve(Bk, [["render", Dk], ["__file", "dropdown-menu.vue"]]);
const Vk = We(Tk, { DropdownItem: Ff, DropdownMenu: zf }), Ak = Vt(Ff), Fk = Vt(zf), zk = K({ name: "ImgEmpty" }), xk = K({ ...zk, setup(e) {
  const t = de("empty"), n = nn();
  return (l, a) => (k(), D("svg", { viewBox: "0 0 79 86", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, [x("defs", null, [x("linearGradient", { id: `linearGradient-1-${o(n)}`, x1: "38.8503086%", y1: "0%", x2: "61.1496914%", y2: "100%" }, [x("stop", { "stop-color": `var(${o(t).cssVarBlockName("fill-color-1")})`, offset: "0%" }, null, 8, ["stop-color"]), x("stop", { "stop-color": `var(${o(t).cssVarBlockName("fill-color-4")})`, offset: "100%" }, null, 8, ["stop-color"])], 8, ["id"]), x("linearGradient", { id: `linearGradient-2-${o(n)}`, x1: "0%", y1: "9.5%", x2: "100%", y2: "90.5%" }, [x("stop", { "stop-color": `var(${o(t).cssVarBlockName("fill-color-1")})`, offset: "0%" }, null, 8, ["stop-color"]), x("stop", { "stop-color": `var(${o(t).cssVarBlockName("fill-color-6")})`, offset: "100%" }, null, 8, ["stop-color"])], 8, ["id"]), x("rect", { id: `path-3-${o(n)}`, x: "0", y: "0", width: "17", height: "36" }, null, 8, ["id"])]), x("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [x("g", { transform: "translate(-1268.000000, -535.000000)" }, [x("g", { transform: "translate(1268.000000, 535.000000)" }, [x("path", { d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z", fill: `var(${o(t).cssVarBlockName("fill-color-3")})` }, null, 8, ["fill"]), x("polygon", { fill: `var(${o(t).cssVarBlockName("fill-color-7")})`, transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ", points: "13 58 53 58 42 45 2 45" }, null, 8, ["fill"]), x("g", { transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)" }, [x("polygon", { fill: `var(${o(t).cssVarBlockName("fill-color-7")})`, transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ", points: "2.84078316e-14 3 18 3 23 7 5 7" }, null, 8, ["fill"]), x("polygon", { fill: `var(${o(t).cssVarBlockName("fill-color-5")})`, points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43" }, null, 8, ["fill"]), x("rect", { fill: `url(#linearGradient-1-${o(n)})`, transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ", x: "38", y: "7", width: "17", height: "36" }, null, 8, ["fill"]), x("polygon", { fill: `var(${o(t).cssVarBlockName("fill-color-2")})`, transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ", points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12" }, null, 8, ["fill"])]), x("rect", { fill: `url(#linearGradient-2-${o(n)})`, x: "13", y: "45", width: "40", height: "36" }, null, 8, ["fill"]), x("g", { transform: "translate(53.000000, 45.000000)" }, [x("use", { fill: `var(${o(t).cssVarBlockName("fill-color-8")})`, transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ", "xlink:href": `#path-3-${o(n)}` }, null, 8, ["fill", "xlink:href"]), x("polygon", { fill: `var(${o(t).cssVarBlockName("fill-color-9")})`, mask: `url(#mask-4-${o(n)})`, transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ", points: "7 0 24 0 20 18 7 16.5" }, null, 8, ["fill", "mask"])]), x("polygon", { fill: `var(${o(t).cssVarBlockName("fill-color-2")})`, transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ", points: "62 45 79 45 70 58 53 58" }, null, 8, ["fill"])])])])]));
} });
var Hk = ve(xk, [["__file", "img-empty.vue"]]);
const Kk = pe({ image: { type: String, default: "" }, imageSize: Number, description: { type: String, default: "" } }), Wk = K({ name: "ElEmpty" }), jk = K({ ...Wk, props: Kk, setup(e) {
  const t = e, { t: n } = ft(), l = de("empty"), a = y(() => t.description || n("el.table.emptyText")), s = y(() => ({ width: At(t.imageSize) }));
  return (r, i) => (k(), D("div", { class: $(o(l).b()) }, [x("div", { class: $(o(l).e("image")), style: Me(o(s)) }, [r.image ? (k(), D("img", { key: 0, src: r.image, ondragstart: "return false" }, null, 8, ["src"])) : X(r.$slots, "image", { key: 1 }, () => [z(Hk)])], 6), x("div", { class: $(o(l).e("description")) }, [r.$slots.description ? X(r.$slots, "description", { key: 0 }) : (k(), D("p", { key: 1 }, he(o(a)), 1))], 2), r.$slots.default ? (k(), D("div", { key: 0, class: $(o(l).e("bottom")) }, [X(r.$slots, "default")], 2)) : J("v-if", true)], 2));
} });
var Uk = ve(jk, [["__file", "empty.vue"]]);
const xf = We(Uk), Yk = pe({ size: { type: String, values: Qn }, disabled: Boolean }), qk = pe({ ...Yk, model: Object, rules: { type: Y(Object) }, labelPosition: { type: String, values: ["left", "right", "top"], default: "right" }, requireAsteriskPosition: { type: String, values: ["left", "right"], default: "left" }, labelWidth: { type: [String, Number], default: "" }, labelSuffix: { type: String, default: "" }, inline: Boolean, inlineMessage: Boolean, statusIcon: Boolean, showMessage: { type: Boolean, default: true }, validateOnRuleChange: { type: Boolean, default: true }, hideRequiredAsterisk: Boolean, scrollToError: Boolean, scrollIntoViewOptions: { type: [Object, Boolean] } }), Gk = { validate: (e, t, n) => (Se(e) || Be(e)) && Tt(t) && Be(n) };
function Xk() {
  const e = N([]), t = y(() => {
    if (!e.value.length) return "0";
    const s = Math.max(...e.value);
    return s ? `${s}px` : "";
  });
  function n(s) {
    const r = e.value.indexOf(s);
    return r === -1 && t.value, r;
  }
  function l(s, r) {
    if (s && r) {
      const i = n(r);
      e.value.splice(i, 1, s);
    } else s && e.value.push(s);
  }
  function a(s) {
    const r = n(s);
    r > -1 && e.value.splice(r, 1);
  }
  return { autoLabelWidth: t, registerLabelWidth: l, deregisterLabelWidth: a };
}
const ya = (e, t) => {
  const n = pn(t);
  return n.length > 0 ? e.filter((l) => l.prop && n.includes(l.prop)) : e;
}, Zk = "ElForm", Jk = K({ name: Zk }), Qk = K({ ...Jk, props: qk, emits: Gk, setup(e, { expose: t, emit: n }) {
  const l = e, a = [], s = Ht(), r = de("form"), i = y(() => {
    const { labelPosition: w, inline: C } = l;
    return [r.b(), r.m(s.value || "default"), { [r.m(`label-${w}`)]: w, [r.m("inline")]: C }];
  }), u = (w) => a.find((C) => C.prop === w), c = (w) => {
    a.push(w);
  }, d = (w) => {
    w.prop && a.splice(a.indexOf(w), 1);
  }, f = (w = []) => {
    l.model && ya(a, w).forEach((C) => C.resetField());
  }, m = (w = []) => {
    ya(a, w).forEach((C) => C.clearValidate());
  }, h = y(() => !!l.model), v = (w) => {
    if (a.length === 0) return [];
    const C = ya(a, w);
    return C.length ? C : [];
  }, p = async (w) => g(void 0, w), b = async (w = []) => {
    if (!h.value) return false;
    const C = v(w);
    if (C.length === 0) return true;
    let S = {};
    for (const E of C) try {
      await E.validate(""), E.validateState === "error" && E.resetField();
    } catch (M) {
      S = { ...S, ...M };
    }
    return Object.keys(S).length === 0 ? true : Promise.reject(S);
  }, g = async (w = [], C) => {
    const S = !Qe(C);
    try {
      const E = await b(w);
      return E === true && await (C == null ? void 0 : C(E)), E;
    } catch (E) {
      if (E instanceof Error) throw E;
      const M = E;
      return l.scrollToError && T(Object.keys(M)[0]), await (C == null ? void 0 : C(false, M)), S && Promise.reject(M);
    }
  }, T = (w) => {
    var C;
    const S = ya(a, w)[0];
    S && ((C = S.$el) == null || C.scrollIntoView(l.scrollIntoViewOptions));
  };
  return ue(() => l.rules, () => {
    l.validateOnRuleChange && p().catch((w) => void 0);
  }, { deep: true, flush: "post" }), ut(ql, Ct({ ...tn(l), emit: n, resetFields: f, clearValidate: m, validateField: g, getField: u, addField: c, removeField: d, ...Xk() })), t({ validate: p, validateField: g, resetFields: f, clearValidate: m, scrollToField: T, fields: a }), (w, C) => (k(), D("form", { class: $(o(i)) }, [X(w.$slots, "default")], 2));
} });
var eE = ve(Qk, [["__file", "form.vue"]]);
const tE = ["", "error", "validating", "success"], nE = pe({ label: String, labelWidth: { type: [String, Number], default: "" }, labelPosition: { type: String, values: ["left", "right", "top", ""], default: "" }, prop: { type: Y([String, Array]) }, required: { type: Boolean, default: void 0 }, rules: { type: Y([Object, Array]) }, error: String, validateStatus: { type: String, values: tE }, for: String, inlineMessage: { type: [String, Boolean], default: "" }, showMessage: { type: Boolean, default: true }, size: { type: String, values: Qn } }), qu = "ElLabelWrap";
var lE = K({ name: qu, props: { isAutoWidth: Boolean, updateAll: Boolean }, setup(e, { slots: t }) {
  const n = we(ql, void 0), l = we(Jn);
  l || Kt(qu, "usage: <el-form-item><label-wrap /></el-form-item>");
  const a = de("form"), s = N(), r = N(0), i = () => {
    var d;
    if ((d = s.value) != null && d.firstElementChild) {
      const f = window.getComputedStyle(s.value.firstElementChild).width;
      return Math.ceil(Number.parseFloat(f));
    } else return 0;
  }, u = (d = "update") => {
    $e(() => {
      t.default && e.isAutoWidth && (d === "update" ? r.value = i() : d === "remove" && (n == null ? void 0 : n.deregisterLabelWidth(r.value)));
    });
  }, c = () => u("update");
  return Xe(() => {
    c();
  }), It(() => {
    u("remove");
  }), cl(() => c()), ue(r, (d, f) => {
    e.updateAll && (n == null ? void 0 : n.registerLabelWidth(d, f));
  }), Lt(y(() => {
    var d, f;
    return (f = (d = s.value) == null ? void 0 : d.firstElementChild) != null ? f : null;
  }), c), () => {
    var d, f;
    if (!t) return null;
    const { isAutoWidth: m } = e;
    if (m) {
      const h = n == null ? void 0 : n.autoLabelWidth, v = l == null ? void 0 : l.hasLabel, p = {};
      if (v && h && h !== "auto") {
        const b = Math.max(0, Number.parseInt(h, 10) - r.value), T = (l.labelPosition || n.labelPosition) === "left" ? "marginRight" : "marginLeft";
        b && (p[T] = `${b}px`);
      }
      return z("div", { ref: s, class: [a.be("item", "label-wrap")], style: p }, [(d = t.default) == null ? void 0 : d.call(t)]);
    } else return z(Pe, { ref: s }, [(f = t.default) == null ? void 0 : f.call(t)]);
  };
} });
const oE = K({ name: "ElFormItem" }), aE = K({ ...oE, props: nE, setup(e, { expose: t }) {
  const n = e, l = Yt(), a = we(ql, void 0), s = we(Jn, void 0), r = Ht(void 0, { formItem: false }), i = de("form-item"), u = nn().value, c = N([]), d = N(""), f = xh(d, 100), m = N(""), h = N();
  let v, p = false;
  const b = y(() => n.labelPosition || (a == null ? void 0 : a.labelPosition)), g = y(() => {
    if (b.value === "top") return {};
    const ie = At(n.labelWidth || (a == null ? void 0 : a.labelWidth) || "");
    return ie ? { width: ie } : {};
  }), T = y(() => {
    if (b.value === "top" || (a == null ? void 0 : a.inline)) return {};
    if (!n.label && !n.labelWidth && I) return {};
    const ie = At(n.labelWidth || (a == null ? void 0 : a.labelWidth) || "");
    return !n.label && !l.label ? { marginLeft: ie } : {};
  }), w = y(() => [i.b(), i.m(r.value), i.is("error", d.value === "error"), i.is("validating", d.value === "validating"), i.is("success", d.value === "success"), i.is("required", A.value || n.required), i.is("no-asterisk", a == null ? void 0 : a.hideRequiredAsterisk), (a == null ? void 0 : a.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left", { [i.m("feedback")]: a == null ? void 0 : a.statusIcon, [i.m(`label-${b.value}`)]: b.value }]), C = y(() => Tt(n.inlineMessage) ? n.inlineMessage : (a == null ? void 0 : a.inlineMessage) || false), S = y(() => [i.e("error"), { [i.em("error", "inline")]: C.value }]), E = y(() => n.prop ? Be(n.prop) ? n.prop : n.prop.join(".") : ""), M = y(() => !!(n.label || l.label)), O = y(() => n.for || (c.value.length === 1 ? c.value[0] : void 0)), _ = y(() => !O.value && M.value), I = !!s, R = y(() => {
    const ie = a == null ? void 0 : a.model;
    if (!(!ie || !n.prop)) return xo(ie, n.prop).value;
  }), P = y(() => {
    const { required: ie } = n, ce = [];
    n.rules && ce.push(...pn(n.rules));
    const Ie = a == null ? void 0 : a.rules;
    if (Ie && n.prop) {
      const me = xo(Ie, n.prop).value;
      me && ce.push(...pn(me));
    }
    if (ie !== void 0) {
      const me = ce.map((se, ke) => [se, ke]).filter(([se]) => Object.keys(se).includes("required"));
      if (me.length > 0) for (const [se, ke] of me) se.required !== ie && (ce[ke] = { ...se, required: ie });
      else ce.push({ required: ie });
    }
    return ce;
  }), W = y(() => P.value.length > 0), te = (ie) => P.value.filter((Ie) => !Ie.trigger || !ie ? true : Se(Ie.trigger) ? Ie.trigger.includes(ie) : Ie.trigger === ie).map(({ trigger: Ie, ...me }) => me), A = y(() => P.value.some((ie) => ie.required)), L = y(() => {
    var ie;
    return f.value === "error" && n.showMessage && ((ie = a == null ? void 0 : a.showMessage) != null ? ie : true);
  }), F = y(() => `${n.label || ""}${(a == null ? void 0 : a.labelSuffix) || ""}`), V = (ie) => {
    d.value = ie;
  }, B = (ie) => {
    var ce, Ie;
    const { errors: me, fields: se } = ie;
    (!me || !se) && console.error(ie), V("error"), m.value = me ? (Ie = (ce = me == null ? void 0 : me[0]) == null ? void 0 : ce.message) != null ? Ie : `${n.prop} is required` : "", a == null ? void 0 : a.emit("validate", n.prop, false, m.value);
  }, G = () => {
    V("success"), a == null ? void 0 : a.emit("validate", n.prop, true, "");
  }, U = async (ie) => {
    const ce = E.value;
    return new gh({ [ce]: ie }).validate({ [ce]: R.value }, { firstFields: true }).then(() => (G(), true)).catch((me) => (B(me), Promise.reject(me)));
  }, ne = async (ie, ce) => {
    if (p || !n.prop) return false;
    const Ie = Qe(ce);
    if (!W.value) return ce == null ? void 0 : ce(false), false;
    const me = te(ie);
    return me.length === 0 ? (ce == null ? void 0 : ce(true), true) : (V("validating"), U(me).then(() => (ce == null ? void 0 : ce(true), true)).catch((se) => {
      const { fields: ke } = se;
      return ce == null ? void 0 : ce(false, ke), Ie ? false : Promise.reject(ke);
    }));
  }, Z = () => {
    V(""), m.value = "", p = false;
  }, ee = async () => {
    const ie = a == null ? void 0 : a.model;
    if (!ie || !n.prop) return;
    const ce = xo(ie, n.prop);
    p = true, ce.value = Yi(v), await $e(), Z(), p = false;
  }, re = (ie) => {
    c.value.includes(ie) || c.value.push(ie);
  }, le = (ie) => {
    c.value = c.value.filter((ce) => ce !== ie);
  };
  ue(() => n.error, (ie) => {
    m.value = ie || "", V(ie ? "error" : "");
  }, { immediate: true }), ue(() => n.validateStatus, (ie) => V(ie || ""));
  const Q = Ct({ ...tn(n), $el: h, size: r, validateState: d, labelId: u, inputIds: c, isGroup: _, hasLabel: M, fieldValue: R, addInputId: re, removeInputId: le, resetField: ee, clearValidate: Z, validate: ne });
  return ut(Jn, Q), Xe(() => {
    n.prop && (a == null ? void 0 : a.addField(Q), v = Yi(R.value));
  }), It(() => {
    a == null ? void 0 : a.removeField(Q);
  }), t({ size: r, validateMessage: m, validateState: d, validate: ne, clearValidate: Z, resetField: ee }), (ie, ce) => {
    var Ie;
    return k(), D("div", { ref_key: "formItemRef", ref: h, class: $(o(w)), role: o(_) ? "group" : void 0, "aria-labelledby": o(_) ? o(u) : void 0 }, [z(o(lE), { "is-auto-width": o(g).width === "auto", "update-all": ((Ie = o(a)) == null ? void 0 : Ie.labelWidth) === "auto" }, { default: j(() => [o(M) ? (k(), oe(Je(o(O) ? "label" : "div"), { key: 0, id: o(u), for: o(O), class: $(o(i).e("label")), style: Me(o(g)) }, { default: j(() => [X(ie.$slots, "label", { label: o(F) }, () => [at(he(o(F)), 1)])]), _: 3 }, 8, ["id", "for", "class", "style"])) : J("v-if", true)]), _: 3 }, 8, ["is-auto-width", "update-all"]), x("div", { class: $(o(i).e("content")), style: Me(o(T)) }, [X(ie.$slots, "default"), z(Bc, { name: `${o(i).namespace.value}-zoom-in-top` }, { default: j(() => [o(L) ? X(ie.$slots, "error", { key: 0, error: m.value }, () => [x("div", { class: $(o(S)) }, he(m.value), 3)]) : J("v-if", true)]), _: 3 }, 8, ["name"])], 6)], 10, ["role", "aria-labelledby"]);
  };
} });
var Hf = ve(aE, [["__file", "form-item.vue"]]);
const sE = We(eE, { FormItem: Hf }), rE = Vt(Hf), iE = pe({ urlList: { type: Y(Array), default: () => Bt([]) }, zIndex: { type: Number }, initialIndex: { type: Number, default: 0 }, infinite: { type: Boolean, default: true }, hideOnClickModal: Boolean, teleported: Boolean, closeOnPressEscape: { type: Boolean, default: true }, zoomRate: { type: Number, default: 1.2 }, minScale: { type: Number, default: 0.2 }, maxScale: { type: Number, default: 7 }, showProgress: { type: Boolean, default: false }, crossorigin: { type: Y(String) } }), uE = { close: () => true, switch: (e) => _e(e), rotate: (e) => _e(e) }, cE = K({ name: "ElImageViewer" }), dE = K({ ...cE, props: iE, emits: uE, setup(e, { expose: t, emit: n }) {
  var l;
  const a = e, s = { CONTAIN: { name: "contain", icon: Cl(qv) }, ORIGINAL: { name: "original", icon: Cl(Yv) } };
  let r, i = "";
  const { t: u } = ft(), c = de("image-viewer"), { nextZIndex: d } = No(), f = N(), m = N([]), h = Pv(), v = N(true), p = N(a.initialIndex), b = Mt(s.CONTAIN), g = N({ scale: 1, deg: 0, offsetX: 0, offsetY: 0, enableTransition: false }), T = N((l = a.zIndex) != null ? l : d()), w = y(() => {
    const { urlList: le } = a;
    return le.length <= 1;
  }), C = y(() => p.value === 0), S = y(() => p.value === a.urlList.length - 1), E = y(() => a.urlList[p.value]), M = y(() => [c.e("btn"), c.e("prev"), c.is("disabled", !a.infinite && C.value)]), O = y(() => [c.e("btn"), c.e("next"), c.is("disabled", !a.infinite && S.value)]), _ = y(() => {
    const { scale: le, deg: Q, offsetX: ie, offsetY: ce, enableTransition: Ie } = g.value;
    let me = ie / le, se = ce / le;
    const ke = Q * Math.PI / 180, De = Math.cos(ke), qe = Math.sin(ke);
    me = me * De + se * qe, se = se * De - ie / le * qe;
    const je = { transform: `scale(${le}) rotate(${Q}deg) translate(${me}px, ${se}px)`, transition: Ie ? "transform .3s" : "" };
    return b.value.name === s.CONTAIN.name && (je.maxWidth = je.maxHeight = "100%"), je;
  }), I = y(() => `${p.value + 1} / ${a.urlList.length}`);
  function R() {
    W(), r == null ? void 0 : r(), document.body.style.overflow = i, n("close");
  }
  function P() {
    const le = zl((ie) => {
      switch (ie.code) {
        case ye.esc:
          a.closeOnPressEscape && R();
          break;
        case ye.space:
          V();
          break;
        case ye.left:
          G();
          break;
        case ye.up:
          ne("zoomIn");
          break;
        case ye.right:
          U();
          break;
        case ye.down:
          ne("zoomOut");
          break;
      }
    }), Q = zl((ie) => {
      const ce = ie.deltaY || ie.deltaX;
      ne(ce < 0 ? "zoomIn" : "zoomOut", { zoomRate: a.zoomRate, enableTransition: false });
    });
    h.run(() => {
      Et(document, "keydown", le), Et(document, "wheel", Q);
    });
  }
  function W() {
    h.stop();
  }
  function te() {
    v.value = false;
  }
  function A(le) {
    v.value = false, le.target.alt = u("el.image.error");
  }
  function L(le) {
    if (v.value || le.button !== 0 || !f.value) return;
    g.value.enableTransition = false;
    const { offsetX: Q, offsetY: ie } = g.value, ce = le.pageX, Ie = le.pageY, me = zl((ke) => {
      g.value = { ...g.value, offsetX: Q + ke.pageX - ce, offsetY: ie + ke.pageY - Ie };
    }), se = Et(document, "mousemove", me);
    Et(document, "mouseup", () => {
      se();
    }), le.preventDefault();
  }
  function F() {
    g.value = { scale: 1, deg: 0, offsetX: 0, offsetY: 0, enableTransition: false };
  }
  function V() {
    if (v.value) return;
    const le = bo(s), Q = Object.values(s), ie = b.value.name, Ie = (Q.findIndex((me) => me.name === ie) + 1) % le.length;
    b.value = s[le[Ie]], F();
  }
  function B(le) {
    const Q = a.urlList.length;
    p.value = (le + Q) % Q;
  }
  function G() {
    C.value && !a.infinite || B(p.value - 1);
  }
  function U() {
    S.value && !a.infinite || B(p.value + 1);
  }
  function ne(le, Q = {}) {
    if (v.value) return;
    const { minScale: ie, maxScale: ce } = a, { zoomRate: Ie, rotateDeg: me, enableTransition: se } = { zoomRate: a.zoomRate, rotateDeg: 90, enableTransition: true, ...Q };
    switch (le) {
      case "zoomOut":
        g.value.scale > ie && (g.value.scale = Number.parseFloat((g.value.scale / Ie).toFixed(3)));
        break;
      case "zoomIn":
        g.value.scale < ce && (g.value.scale = Number.parseFloat((g.value.scale * Ie).toFixed(3)));
        break;
      case "clockwise":
        g.value.deg += me, n("rotate", g.value.deg);
        break;
      case "anticlockwise":
        g.value.deg -= me, n("rotate", g.value.deg);
        break;
    }
    g.value.enableTransition = se;
  }
  function Z(le) {
    var Q;
    ((Q = le.detail) == null ? void 0 : Q.focusReason) === "pointer" && le.preventDefault();
  }
  function ee() {
    a.closeOnPressEscape && R();
  }
  function re(le) {
    if (le.ctrlKey) {
      if (le.deltaY < 0) return le.preventDefault(), false;
      if (le.deltaY > 0) return le.preventDefault(), false;
    }
  }
  return ue(E, () => {
    $e(() => {
      const le = m.value[0];
      (le == null ? void 0 : le.complete) || (v.value = true);
    });
  }), ue(p, (le) => {
    F(), n("switch", le);
  }), Xe(() => {
    P(), r = Et("wheel", re, { passive: false }), i = document.body.style.overflow, document.body.style.overflow = "hidden";
  }), t({ setActiveItem: B }), (le, Q) => (k(), oe(o(Mo), { to: "body", disabled: !le.teleported }, { default: j(() => [z(en, { name: "viewer-fade", appear: "" }, { default: j(() => [x("div", { ref_key: "wrapper", ref: f, tabindex: -1, class: $(o(c).e("wrapper")), style: Me({ zIndex: T.value }) }, [z(o(_o), { loop: "", trapped: "", "focus-trap-el": f.value, "focus-start-el": "container", onFocusoutPrevented: Z, onReleaseRequested: ee }, { default: j(() => [x("div", { class: $(o(c).e("mask")), onClick: Re((ie) => le.hideOnClickModal && R(), ["self"]) }, null, 10, ["onClick"]), J(" CLOSE "), x("span", { class: $([o(c).e("btn"), o(c).e("close")]), onClick: R }, [z(o(Ee), null, { default: j(() => [z(o(An))]), _: 1 })], 2), J(" ARROW "), o(w) ? J("v-if", true) : (k(), D(Pe, { key: 0 }, [x("span", { class: $(o(M)), onClick: G }, [z(o(Ee), null, { default: j(() => [z(o(El))]), _: 1 })], 2), x("span", { class: $(o(O)), onClick: U }, [z(o(Ee), null, { default: j(() => [z(o(kn))]), _: 1 })], 2)], 64)), le.$slots.progress || le.showProgress ? (k(), D("div", { key: 1, class: $([o(c).e("btn"), o(c).e("progress")]) }, [X(le.$slots, "progress", { activeIndex: p.value, total: le.urlList.length }, () => [at(he(o(I)), 1)])], 2)) : J("v-if", true), J(" ACTIONS "), x("div", { class: $([o(c).e("btn"), o(c).e("actions")]) }, [x("div", { class: $(o(c).e("actions__inner")) }, [X(le.$slots, "toolbar", { actions: ne, prev: G, next: U, reset: V, activeIndex: p.value, setActiveItem: B }, () => [z(o(Ee), { onClick: (ie) => ne("zoomOut") }, { default: j(() => [z(o(Gv))]), _: 1 }, 8, ["onClick"]), z(o(Ee), { onClick: (ie) => ne("zoomIn") }, { default: j(() => [z(o(xc))]), _: 1 }, 8, ["onClick"]), x("i", { class: $(o(c).e("actions__divider")) }, null, 2), z(o(Ee), { onClick: V }, { default: j(() => [(k(), oe(Je(o(b).icon)))]), _: 1 }), x("i", { class: $(o(c).e("actions__divider")) }, null, 2), z(o(Ee), { onClick: (ie) => ne("anticlockwise") }, { default: j(() => [z(o(Xv))]), _: 1 }, 8, ["onClick"]), z(o(Ee), { onClick: (ie) => ne("clockwise") }, { default: j(() => [z(o(Zv))]), _: 1 }, 8, ["onClick"])])], 2)], 2), J(" CANVAS "), x("div", { class: $(o(c).e("canvas")) }, [(k(true), D(Pe, null, it(le.urlList, (ie, ce) => Ye((k(), D("img", { ref_for: true, ref: (Ie) => m.value[ce] = Ie, key: ie, src: ie, style: Me(o(_)), class: $(o(c).e("img")), crossorigin: le.crossorigin, onLoad: te, onError: A, onMousedown: L }, null, 46, ["src", "crossorigin"])), [[pt, ce === p.value]])), 128))], 2), X(le.$slots, "default")]), _: 3 }, 8, ["focus-trap-el"])], 6)]), _: 3 })]), _: 3 }, 8, ["disabled"]));
} });
var fE = ve(dE, [["__file", "image-viewer.vue"]]);
const Kf = We(fE), pE = pe({ hideOnClickModal: Boolean, src: { type: String, default: "" }, fit: { type: String, values: ["", "contain", "cover", "fill", "none", "scale-down"], default: "" }, loading: { type: String, values: ["eager", "lazy"] }, lazy: Boolean, scrollContainer: { type: Y([String, Object]) }, previewSrcList: { type: Y(Array), default: () => Bt([]) }, previewTeleported: Boolean, zIndex: { type: Number }, initialIndex: { type: Number, default: 0 }, infinite: { type: Boolean, default: true }, closeOnPressEscape: { type: Boolean, default: true }, zoomRate: { type: Number, default: 1.2 }, minScale: { type: Number, default: 0.2 }, maxScale: { type: Number, default: 7 }, showProgress: { type: Boolean, default: false }, crossorigin: { type: Y(String) } }), vE = { load: (e) => e instanceof Event, error: (e) => e instanceof Event, switch: (e) => _e(e), close: () => true, show: () => true }, hE = K({ name: "ElImage", inheritAttrs: false }), mE = K({ ...hE, props: pE, emits: vE, setup(e, { expose: t, emit: n }) {
  const l = e, { t: a } = ft(), s = de("image"), r = ul(), i = y(() => Wo(Object.entries(r).filter(([L]) => /^(data-|on[A-Z])/i.test(L) || ["id", "style"].includes(L)))), u = oa({ excludeListeners: true, excludeKeys: y(() => Object.keys(i.value)) }), c = N(), d = N(false), f = N(true), m = N(false), h = N(), v = N(), p = dt && "loading" in HTMLImageElement.prototype;
  let b;
  const g = y(() => [s.e("inner"), w.value && s.e("preview"), f.value && s.is("loading")]), T = y(() => {
    const { fit: L } = l;
    return dt && L ? { objectFit: L } : {};
  }), w = y(() => {
    const { previewSrcList: L } = l;
    return Se(L) && L.length > 0;
  }), C = y(() => {
    const { previewSrcList: L, initialIndex: F } = l;
    let V = F;
    return F > L.length - 1 && (V = 0), V;
  }), S = y(() => l.loading === "eager" ? false : !p && l.loading === "lazy" || l.lazy), E = () => {
    dt && (f.value = true, d.value = false, c.value = l.src);
  };
  function M(L) {
    f.value = false, d.value = false, n("load", L);
  }
  function O(L) {
    f.value = false, d.value = true, n("error", L);
  }
  function _() {
    IC(h.value, v.value) && (E(), P());
  }
  const I = Jc(_, 200, true);
  async function R() {
    var L;
    if (!dt) return;
    await $e();
    const { scrollContainer: F } = l;
    En(F) ? v.value = F : Be(F) && F !== "" ? v.value = (L = document.querySelector(F)) != null ? L : void 0 : h.value && (v.value = Ur(h.value)), v.value && (b = Et(v, "scroll", I), setTimeout(() => _(), 100));
  }
  function P() {
    !dt || !v.value || !I || (b == null ? void 0 : b(), v.value = void 0);
  }
  function W() {
    w.value && (m.value = true, n("show"));
  }
  function te() {
    m.value = false, n("close");
  }
  function A(L) {
    n("switch", L);
  }
  return ue(() => l.src, () => {
    S.value ? (f.value = true, d.value = false, P(), R()) : E();
  }), Xe(() => {
    S.value ? R() : E();
  }), t({ showPreview: W }), (L, F) => (k(), D("div", lt({ ref_key: "container", ref: h }, o(i), { class: [o(s).b(), L.$attrs.class] }), [d.value ? X(L.$slots, "error", { key: 0 }, () => [x("div", { class: $(o(s).e("error")) }, he(o(a)("el.image.error")), 3)]) : (k(), D(Pe, { key: 1 }, [c.value !== void 0 ? (k(), D("img", lt({ key: 0 }, o(u), { src: c.value, loading: L.loading, style: o(T), class: o(g), crossorigin: L.crossorigin, onClick: W, onLoad: M, onError: O }), null, 16, ["src", "loading", "crossorigin"])) : J("v-if", true), f.value ? (k(), D("div", { key: 1, class: $(o(s).e("wrapper")) }, [X(L.$slots, "placeholder", {}, () => [x("div", { class: $(o(s).e("placeholder")) }, null, 2)])], 2)) : J("v-if", true)], 64)), o(w) ? (k(), D(Pe, { key: 2 }, [m.value ? (k(), oe(o(Kf), { key: 0, "z-index": L.zIndex, "initial-index": o(C), infinite: L.infinite, "zoom-rate": L.zoomRate, "min-scale": L.minScale, "max-scale": L.maxScale, "show-progress": L.showProgress, "url-list": L.previewSrcList, crossorigin: L.crossorigin, "hide-on-click-modal": L.hideOnClickModal, teleported: L.previewTeleported, "close-on-press-escape": L.closeOnPressEscape, onClose: te, onSwitch: A }, { progress: j((V) => [X(L.$slots, "progress", Mn(sl(V)))]), toolbar: j((V) => [X(L.$slots, "toolbar", Mn(sl(V)))]), default: j(() => [L.$slots.viewer ? (k(), D("div", { key: 0 }, [X(L.$slots, "viewer")])) : J("v-if", true)]), _: 3 }, 8, ["z-index", "initial-index", "infinite", "zoom-rate", "min-scale", "max-scale", "show-progress", "url-list", "crossorigin", "hide-on-click-modal", "teleported", "close-on-press-escape"])) : J("v-if", true)], 64)) : J("v-if", true)], 16));
} });
var gE = ve(mE, [["__file", "image.vue"]]);
const bE = We(gE), yE = pe({ id: { type: String, default: void 0 }, step: { type: Number, default: 1 }, stepStrictly: Boolean, max: { type: Number, default: Number.POSITIVE_INFINITY }, min: { type: Number, default: Number.NEGATIVE_INFINITY }, modelValue: Number, readonly: Boolean, disabled: Boolean, size: Wt, controls: { type: Boolean, default: true }, controlsPosition: { type: String, default: "", values: ["", "right"] }, valueOnClear: { type: [String, Number, null], validator: (e) => e === null || _e(e) || ["min", "max"].includes(e), default: null }, name: String, placeholder: String, precision: { type: Number, validator: (e) => e >= 0 && e === Number.parseInt(`${e}`, 10) }, validateEvent: { type: Boolean, default: true }, ...ln(["ariaLabel"]) }), CE = { [et]: (e, t) => t !== e, blur: (e) => e instanceof FocusEvent, focus: (e) => e instanceof FocusEvent, [Jt]: (e) => _e(e) || qt(e), [Ae]: (e) => _e(e) || qt(e) }, wE = K({ name: "ElInputNumber" }), SE = K({ ...wE, props: yE, emits: CE, setup(e, { expose: t, emit: n }) {
  const l = e, { t: a } = ft(), s = de("input-number"), r = N(), i = Ct({ currentValue: l.modelValue, userInput: null }), { formItem: u } = un(), c = y(() => _e(l.modelValue) && l.modelValue <= l.min), d = y(() => _e(l.modelValue) && l.modelValue >= l.max), f = y(() => {
    const A = g(l.step);
    return vt(l.precision) ? Math.max(g(l.modelValue), A) : (A > l.precision, l.precision);
  }), m = y(() => l.controls && l.controlsPosition === "right"), h = Ht(), v = cn(), p = y(() => {
    if (i.userInput !== null) return i.userInput;
    let A = i.currentValue;
    if (qt(A)) return "";
    if (_e(A)) {
      if (Number.isNaN(A)) return "";
      vt(l.precision) || (A = A.toFixed(l.precision));
    }
    return A;
  }), b = (A, L) => {
    if (vt(L) && (L = f.value), L === 0) return Math.round(A);
    let F = String(A);
    const V = F.indexOf(".");
    if (V === -1 || !F.replace(".", "").split("")[V + L]) return A;
    const U = F.length;
    return F.charAt(U - 1) === "5" && (F = `${F.slice(0, Math.max(0, U - 1))}6`), Number.parseFloat(Number(F).toFixed(L));
  }, g = (A) => {
    if (qt(A)) return 0;
    const L = A.toString(), F = L.indexOf(".");
    let V = 0;
    return F !== -1 && (V = L.length - F - 1), V;
  }, T = (A, L = 1) => _e(A) ? b(A + l.step * L) : i.currentValue, w = () => {
    if (l.readonly || v.value || d.value) return;
    const A = Number(p.value) || 0, L = T(A);
    E(L), n(Jt, i.currentValue), W();
  }, C = () => {
    if (l.readonly || v.value || c.value) return;
    const A = Number(p.value) || 0, L = T(A, -1);
    E(L), n(Jt, i.currentValue), W();
  }, S = (A, L) => {
    const { max: F, min: V, step: B, precision: G, stepStrictly: U, valueOnClear: ne } = l;
    F < V && Kt("InputNumber", "min should not be greater than max.");
    let Z = Number(A);
    if (qt(A) || Number.isNaN(Z)) return null;
    if (A === "") {
      if (ne === null) return null;
      Z = Be(ne) ? { min: V, max: F }[ne] : ne;
    }
    return U && (Z = b(Math.round(Z / B) * B, G), Z !== A && L && n(Ae, Z)), vt(G) || (Z = b(Z, G)), (Z > F || Z < V) && (Z = Z > F ? F : V, L && n(Ae, Z)), Z;
  }, E = (A, L = true) => {
    var F;
    const V = i.currentValue, B = S(A);
    if (!L) {
      n(Ae, B);
      return;
    }
    V === B && A || (i.userInput = null, n(Ae, B), V !== B && n(et, B, V), l.validateEvent && ((F = u == null ? void 0 : u.validate) == null || F.call(u, "change").catch((G) => void 0)), i.currentValue = B);
  }, M = (A) => {
    i.userInput = A;
    const L = A === "" ? null : Number(A);
    n(Jt, L), E(L, false);
  }, O = (A) => {
    const L = A !== "" ? Number(A) : "";
    (_e(L) && !Number.isNaN(L) || A === "") && E(L), W(), i.userInput = null;
  }, _ = () => {
    var A, L;
    (L = (A = r.value) == null ? void 0 : A.focus) == null || L.call(A);
  }, I = () => {
    var A, L;
    (L = (A = r.value) == null ? void 0 : A.blur) == null || L.call(A);
  }, R = (A) => {
    n("focus", A);
  }, P = (A) => {
    var L, F;
    i.userInput = null, cs() && i.currentValue === null && ((L = r.value) != null && L.input) && (r.value.input.value = ""), n("blur", A), l.validateEvent && ((F = u == null ? void 0 : u.validate) == null || F.call(u, "blur").catch((V) => void 0));
  }, W = () => {
    i.currentValue !== l.modelValue && (i.currentValue = l.modelValue);
  }, te = (A) => {
    document.activeElement === A.target && A.preventDefault();
  };
  return ue(() => l.modelValue, (A, L) => {
    const F = S(A, true);
    i.userInput === null && F !== L && (i.currentValue = F);
  }, { immediate: true }), Xe(() => {
    var A;
    const { min: L, max: F, modelValue: V } = l, B = (A = r.value) == null ? void 0 : A.input;
    if (B.setAttribute("role", "spinbutton"), Number.isFinite(F) ? B.setAttribute("aria-valuemax", String(F)) : B.removeAttribute("aria-valuemax"), Number.isFinite(L) ? B.setAttribute("aria-valuemin", String(L)) : B.removeAttribute("aria-valuemin"), B.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), B.setAttribute("aria-disabled", String(v.value)), !_e(V) && V != null) {
      let G = Number(V);
      Number.isNaN(G) && (G = null), n(Ae, G);
    }
    B.addEventListener("wheel", te, { passive: false });
  }), cl(() => {
    var A, L;
    const F = (A = r.value) == null ? void 0 : A.input;
    F == null ? void 0 : F.setAttribute("aria-valuenow", `${(L = i.currentValue) != null ? L : ""}`);
  }), t({ focus: _, blur: I }), (A, L) => (k(), D("div", { class: $([o(s).b(), o(s).m(o(h)), o(s).is("disabled", o(v)), o(s).is("without-controls", !A.controls), o(s).is("controls-right", o(m))]), onDragstart: Re(() => {
  }, ["prevent"]) }, [A.controls ? Ye((k(), D("span", { key: 0, role: "button", "aria-label": o(a)("el.inputNumber.decrease"), class: $([o(s).e("decrease"), o(s).is("disabled", o(c))]), onKeydown: $t(C, ["enter"]) }, [X(A.$slots, "decrease-icon", {}, () => [z(o(Ee), null, { default: j(() => [o(m) ? (k(), oe(o(fl), { key: 0 })) : (k(), oe(o(Jv), { key: 1 }))]), _: 1 })])], 42, ["aria-label", "onKeydown"])), [[o(za), C]]) : J("v-if", true), A.controls ? Ye((k(), D("span", { key: 1, role: "button", "aria-label": o(a)("el.inputNumber.increase"), class: $([o(s).e("increase"), o(s).is("disabled", o(d))]), onKeydown: $t(w, ["enter"]) }, [X(A.$slots, "increase-icon", {}, () => [z(o(Ee), null, { default: j(() => [o(m) ? (k(), oe(o(zr), { key: 0 })) : (k(), oe(o(Hc), { key: 1 }))]), _: 1 })])], 42, ["aria-label", "onKeydown"])), [[o(za), w]]) : J("v-if", true), z(o(hn), { id: A.id, ref_key: "input", ref: r, type: "number", step: A.step, "model-value": o(p), placeholder: A.placeholder, readonly: A.readonly, disabled: o(v), size: o(h), max: A.max, min: A.min, name: A.name, "aria-label": A.ariaLabel, "validate-event": false, onKeydown: [$t(Re(w, ["prevent"]), ["up"]), $t(Re(C, ["prevent"]), ["down"])], onBlur: P, onFocus: R, onInput: M, onChange: O }, On({ _: 2 }, [A.$slots.prefix ? { name: "prefix", fn: j(() => [X(A.$slots, "prefix")]) } : void 0, A.$slots.suffix ? { name: "suffix", fn: j(() => [X(A.$slots, "suffix")]) } : void 0]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])], 42, ["onDragstart"]));
} });
var kE = ve(SE, [["__file", "input-number.vue"]]);
const Wf = We(kE), EE = pe({ modelValue: { type: Y(Array) }, max: Number, tagType: { ...rl.type, default: "info" }, tagEffect: rl.effect, trigger: { type: Y(String), default: ye.enter }, draggable: { type: Boolean, default: false }, size: Wt, clearable: Boolean, disabled: { type: Boolean, default: void 0 }, validateEvent: { type: Boolean, default: true }, readonly: Boolean, autofocus: Boolean, id: { type: String, default: void 0 }, tabindex: { type: [String, Number], default: 0 }, maxlength: { type: [String, Number] }, minlength: { type: [String, Number] }, placeholder: String, autocomplete: { type: String, default: "off" }, saveOnBlur: { type: Boolean, default: true }, ariaLabel: String }), $E = { [Ae]: (e) => Se(e) || vt(e), [et]: (e) => Se(e) || vt(e), [Jt]: (e) => Be(e), "add-tag": (e) => Be(e), "remove-tag": (e) => Be(e), focus: (e) => e instanceof FocusEvent, blur: (e) => e instanceof FocusEvent, clear: () => true };
function TE({ props: e, emit: t, formItem: n }) {
  const l = cn(), a = Ht(), s = Mt(), r = N(), i = y(() => ["small"].includes(a.value) ? "small" : "default"), u = y(() => {
    var _;
    return (_ = e.modelValue) != null && _.length ? void 0 : e.placeholder;
  }), c = y(() => !(e.readonly || l.value)), d = y(() => {
    var _, I;
    return vt(e.max) ? false : ((I = (_ = e.modelValue) == null ? void 0 : _.length) != null ? I : 0) >= e.max;
  }), f = (_) => {
    if (d.value) {
      r.value = void 0;
      return;
    }
    S.value || t(Jt, _.target.value);
  }, m = (_) => {
    var I;
    if (!S.value) switch (_.code) {
      case e.trigger:
        _.preventDefault(), _.stopPropagation(), h();
        break;
      case ye.numpadEnter:
        e.trigger === ye.enter && (_.preventDefault(), _.stopPropagation(), h());
        break;
      case ye.backspace:
        !r.value && ((I = e.modelValue) != null && I.length) && (_.preventDefault(), _.stopPropagation(), v(e.modelValue.length - 1));
        break;
    }
  }, h = () => {
    var _, I;
    const R = (_ = r.value) == null ? void 0 : _.trim();
    if (!R || d.value) return;
    const P = [...(I = e.modelValue) != null ? I : [], R];
    t(Ae, P), t(et, P), t("add-tag", R), r.value = void 0;
  }, v = (_) => {
    var I;
    const R = ((I = e.modelValue) != null ? I : []).slice(), [P] = R.splice(_, 1);
    t(Ae, R), t(et, R), t("remove-tag", P);
  }, p = () => {
    r.value = void 0, t(Ae, void 0), t(et, void 0), t("clear");
  }, b = (_, I, R) => {
    var P;
    const W = ((P = e.modelValue) != null ? P : []).slice(), [te] = W.splice(_, 1), A = I > _ && R === "before" ? -1 : I < _ && R === "after" ? 1 : 0;
    W.splice(I + A, 0, te), t(Ae, W), t(et, W);
  }, g = () => {
    var _;
    (_ = s.value) == null || _.focus();
  }, T = () => {
    var _;
    (_ = s.value) == null || _.blur();
  }, { wrapperRef: w, isFocused: C } = Ol(s, { beforeFocus() {
    return l.value;
  }, afterBlur() {
    var _;
    e.saveOnBlur ? h() : r.value = void 0, e.validateEvent && ((_ = n == null ? void 0 : n.validate) == null || _.call(n, "blur").catch((I) => void 0));
  } }), { isComposing: S, handleCompositionStart: E, handleCompositionUpdate: M, handleCompositionEnd: O } = aa({ afterComposition: f });
  return ue(() => e.modelValue, () => {
    var _;
    e.validateEvent && ((_ = n == null ? void 0 : n.validate) == null || _.call(n, et).catch((I) => void 0));
  }), { inputRef: s, wrapperRef: w, isFocused: C, isComposing: S, inputValue: r, size: a, tagSize: i, placeholder: u, closable: c, disabled: l, inputLimit: d, handleDragged: b, handleInput: f, handleKeydown: m, handleAddTag: h, handleRemoveTag: v, handleClear: p, handleCompositionStart: E, handleCompositionUpdate: M, handleCompositionEnd: O, focus: g, blur: T };
}
function NE() {
  const e = N(false);
  return { hovering: e, handleMouseEnter: () => {
    e.value = true;
  }, handleMouseLeave: () => {
    e.value = false;
  } };
}
function Ci() {
  const e = Mt(), t = N(0), n = 11, l = y(() => ({ minWidth: `${Math.max(t.value, n)}px` }));
  return Lt(e, () => {
    var s, r;
    t.value = (r = (s = e.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? r : 0;
  }), { calculatorRef: e, calculatorWidth: t, inputStyle: l };
}
function IE({ wrapperRef: e, handleDragged: t, afterDragged: n }) {
  const l = de("input-tag"), a = Mt(), s = N(false);
  let r, i, u, c;
  function d(v) {
    return `.${l.e("inner")} .${l.namespace.value}-tag:nth-child(${v + 1})`;
  }
  function f(v, p) {
    r = p, i = e.value.querySelector(d(p)), i && (i.style.opacity = "0.5"), v.dataTransfer.effectAllowed = "move";
  }
  function m(v, p) {
    if (u = p, v.preventDefault(), v.dataTransfer.dropEffect = "move", vt(r) || r === p) {
      s.value = false;
      return;
    }
    const b = e.value.querySelector(d(p)).getBoundingClientRect(), g = r + 1 !== p, T = r - 1 !== p, w = v.clientX - b.left, C = g ? T ? 0.5 : 1 : -1, S = T ? g ? 0.5 : 0 : 1;
    w <= b.width * C ? c = "before" : w > b.width * S ? c = "after" : c = void 0;
    const E = e.value.querySelector(`.${l.e("inner")}`), M = E.getBoundingClientRect(), O = Number.parseFloat(ll(E, "gap")) / 2, _ = b.top - M.top;
    let I = -9999;
    if (c === "before") I = Math.max(b.left - M.left - O, Math.floor(-O / 2));
    else if (c === "after") {
      const R = b.right - M.left;
      I = R + (M.width === R ? Math.floor(O / 2) : O);
    }
    dd(a.value, { top: `${_}px`, left: `${I}px` }), s.value = !!c;
  }
  function h(v) {
    v.preventDefault(), i && (i.style.opacity = ""), c && !vt(r) && !vt(u) && r !== u && t(r, u, c), s.value = false, r = void 0, i = null, u = void 0, c = void 0, n == null ? void 0 : n();
  }
  return { dropIndicatorRef: a, showDropIndicator: s, handleDragStart: f, handleDragOver: m, handleDragEnd: h };
}
function _E({ props: e, isFocused: t, hovering: n, disabled: l, inputValue: a, size: s, validateState: r, validateIcon: i, needStatusIcon: u }) {
  const c = ul(), d = Yt(), f = de("input-tag"), m = de("input"), h = y(() => [f.b(), f.is("focused", t.value), f.is("hovering", n.value), f.is("disabled", l.value), f.m(s.value), f.e("wrapper"), c.class]), v = y(() => [c.style]), p = y(() => {
    var T, w;
    return [f.e("inner"), f.is("draggable", e.draggable), f.is("left-space", !((T = e.modelValue) != null && T.length) && !d.prefix), f.is("right-space", !((w = e.modelValue) != null && w.length) && !g.value)];
  }), b = y(() => {
    var T;
    return e.clearable && !l.value && !e.readonly && (((T = e.modelValue) == null ? void 0 : T.length) || a.value) && (t.value || n.value);
  }), g = y(() => d.suffix || b.value || r.value && i.value && u.value);
  return { ns: f, nsInput: m, containerKls: h, containerStyle: v, innerKls: p, showClear: b, showSuffix: g };
}
const ME = K({ name: "ElInputTag", inheritAttrs: false }), OE = K({ ...ME, props: EE, emits: $E, setup(e, { expose: t, emit: n }) {
  const l = e, a = oa(), s = Yt(), { form: r, formItem: i } = un(), { inputId: u } = zn(l, { formItemContext: i }), c = y(() => {
    var se;
    return (se = r == null ? void 0 : r.statusIcon) != null ? se : false;
  }), d = y(() => (i == null ? void 0 : i.validateState) || ""), f = y(() => d.value && us[d.value]), { inputRef: m, wrapperRef: h, isFocused: v, inputValue: p, size: b, tagSize: g, placeholder: T, closable: w, disabled: C, handleDragged: S, handleInput: E, handleKeydown: M, handleRemoveTag: O, handleClear: _, handleCompositionStart: I, handleCompositionUpdate: R, handleCompositionEnd: P, focus: W, blur: te } = TE({ props: l, emit: n, formItem: i }), { hovering: A, handleMouseEnter: L, handleMouseLeave: F } = NE(), { calculatorRef: V, inputStyle: B } = Ci(), { dropIndicatorRef: G, showDropIndicator: U, handleDragStart: ne, handleDragOver: Z, handleDragEnd: ee } = IE({ wrapperRef: h, handleDragged: S, afterDragged: W }), { ns: re, nsInput: le, containerKls: Q, containerStyle: ie, innerKls: ce, showClear: Ie, showSuffix: me } = _E({ props: l, hovering: A, isFocused: v, inputValue: p, disabled: C, size: b, validateState: d, validateIcon: f, needStatusIcon: c });
  return t({ focus: W, blur: te }), (se, ke) => (k(), D("div", { ref_key: "wrapperRef", ref: h, class: $(o(Q)), style: Me(o(ie)), onMouseenter: o(L), onMouseleave: o(F) }, [o(s).prefix ? (k(), D("div", { key: 0, class: $(o(re).e("prefix")) }, [X(se.$slots, "prefix")], 2)) : J("v-if", true), x("div", { class: $(o(ce)) }, [(k(true), D(Pe, null, it(se.modelValue, (De, qe) => (k(), oe(o(yo), { key: qe, size: o(g), closable: o(w), type: se.tagType, effect: se.tagEffect, draggable: o(w) && se.draggable, "disable-transitions": "", onClose: (je) => o(O)(qe), onDragstart: (je) => o(ne)(je, qe), onDragover: (je) => o(Z)(je, qe), onDragend: o(ee), onDrop: Re(() => {
  }, ["stop"]) }, { default: j(() => [X(se.$slots, "tag", { value: De, index: qe }, () => [at(he(De), 1)])]), _: 2 }, 1032, ["size", "closable", "type", "effect", "draggable", "onClose", "onDragstart", "onDragover", "onDragend", "onDrop"]))), 128)), x("div", { class: $(o(re).e("input-wrapper")) }, [Ye(x("input", lt({ id: o(u), ref_key: "inputRef", ref: m, "onUpdate:modelValue": (De) => mn(p) ? p.value = De : null }, o(a), { type: "text", minlength: se.minlength, maxlength: se.maxlength, disabled: o(C), readonly: se.readonly, autocomplete: se.autocomplete, tabindex: se.tabindex, placeholder: o(T), autofocus: se.autofocus, ariaLabel: se.ariaLabel, class: o(re).e("input"), style: o(B), onCompositionstart: o(I), onCompositionupdate: o(R), onCompositionend: o(P), onInput: o(E), onKeydown: o(M) }), null, 16, ["id", "onUpdate:modelValue", "minlength", "maxlength", "disabled", "readonly", "autocomplete", "tabindex", "placeholder", "autofocus", "ariaLabel", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onKeydown"]), [[ns, o(p)]]), x("span", { ref_key: "calculatorRef", ref: V, "aria-hidden": "true", class: $(o(re).e("input-calculator")), textContent: he(o(p)) }, null, 10, ["textContent"])], 2), Ye(x("div", { ref_key: "dropIndicatorRef", ref: G, class: $(o(re).e("drop-indicator")) }, null, 2), [[pt, o(U)]])], 2), o(me) ? (k(), D("div", { key: 1, class: $(o(re).e("suffix")) }, [X(se.$slots, "suffix"), o(Ie) ? (k(), oe(o(Ee), { key: 0, class: $([o(re).e("icon"), o(re).e("clear")]), onMousedown: Re(o(Rt), ["prevent"]), onClick: o(_) }, { default: j(() => [z(o(dl))]), _: 1 }, 8, ["class", "onMousedown", "onClick"])) : J("v-if", true), o(d) && o(f) && o(c) ? (k(), oe(o(Ee), { key: 1, class: $([o(le).e("icon"), o(le).e("validateIcon"), o(le).is("loading", o(d) === "validating")]) }, { default: j(() => [(k(), oe(Je(o(f))))]), _: 1 }, 8, ["class"])) : J("v-if", true)], 2)) : J("v-if", true)], 46, ["onMouseenter", "onMouseleave"]));
} });
var PE = ve(OE, [["__file", "input-tag.vue"]]);
const RE = We(PE), LE = pe({ type: { type: String, values: ["primary", "success", "warning", "info", "danger", "default"], default: "default" }, underline: { type: Boolean, default: true }, disabled: Boolean, href: { type: String, default: "" }, target: { type: String, default: "_self" }, icon: { type: St } }), BE = { click: (e) => e instanceof MouseEvent }, DE = K({ name: "ElLink" }), VE = K({ ...DE, props: LE, emits: BE, setup(e, { emit: t }) {
  const n = e, l = de("link"), a = y(() => [l.b(), l.m(n.type), l.is("disabled", n.disabled), l.is("underline", n.underline && !n.disabled)]);
  function s(r) {
    n.disabled || t("click", r);
  }
  return (r, i) => (k(), D("a", { class: $(o(a)), href: r.disabled || !r.href ? void 0 : r.href, target: r.disabled || !r.href ? void 0 : r.target, onClick: s }, [r.icon ? (k(), oe(o(Ee), { key: 0 }, { default: j(() => [(k(), oe(Je(r.icon)))]), _: 1 })) : J("v-if", true), r.$slots.default ? (k(), D("span", { key: 1, class: $(o(l).e("inner")) }, [X(r.$slots, "default")], 2)) : J("v-if", true), r.$slots.icon ? X(r.$slots, "icon", { key: 2 }) : J("v-if", true)], 10, ["href", "target"]));
} });
var AE = ve(VE, [["__file", "link.vue"]]);
const FE = We(AE);
let zE = class {
  constructor(t, n) {
    this.parent = t, this.domNode = n, this.subIndex = 0, this.subIndex = 0, this.init();
  }
  init() {
    this.subMenuItems = this.domNode.querySelectorAll("li"), this.addListeners();
  }
  gotoSubIndex(t) {
    t === this.subMenuItems.length ? t = 0 : t < 0 && (t = this.subMenuItems.length - 1), this.subMenuItems[t].focus(), this.subIndex = t;
  }
  addListeners() {
    const t = this.parent.domNode;
    Array.prototype.forEach.call(this.subMenuItems, (n) => {
      n.addEventListener("keydown", (l) => {
        let a = false;
        switch (l.code) {
          case ye.down: {
            this.gotoSubIndex(this.subIndex + 1), a = true;
            break;
          }
          case ye.up: {
            this.gotoSubIndex(this.subIndex - 1), a = true;
            break;
          }
          case ye.tab: {
            ka(t, "mouseleave");
            break;
          }
          case ye.enter:
          case ye.numpadEnter:
          case ye.space: {
            a = true, l.currentTarget.click();
            break;
          }
        }
        return a && (l.preventDefault(), l.stopPropagation()), false;
      });
    });
  }
}, xE = class {
  constructor(t, n) {
    this.domNode = t, this.submenu = null, this.submenu = null, this.init(n);
  }
  init(t) {
    this.domNode.setAttribute("tabindex", "0");
    const n = this.domNode.querySelector(`.${t}-menu`);
    n && (this.submenu = new zE(this, n)), this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (t) => {
      let n = false;
      switch (t.code) {
        case ye.down: {
          ka(t.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(0), n = true;
          break;
        }
        case ye.up: {
          ka(t.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1), n = true;
          break;
        }
        case ye.tab: {
          ka(t.currentTarget, "mouseleave");
          break;
        }
        case ye.enter:
        case ye.numpadEnter:
        case ye.space: {
          n = true, t.currentTarget.click();
          break;
        }
      }
      n && t.preventDefault();
    });
  }
}, HE = class {
  constructor(t, n) {
    this.domNode = t, this.init(n);
  }
  init(t) {
    const n = this.domNode.childNodes;
    Array.from(n).forEach((l) => {
      l.nodeType === 1 && new xE(l, t);
    });
  }
};
const KE = K({ name: "ElMenuCollapseTransition" }), WE = K({ ...KE, setup(e) {
  const t = de("menu"), n = { onBeforeEnter: (l) => l.style.opacity = "0.2", onEnter(l, a) {
    Dn(l, `${t.namespace.value}-opacity-transition`), l.style.opacity = "1", a();
  }, onAfterEnter(l) {
    gn(l, `${t.namespace.value}-opacity-transition`), l.style.opacity = "";
  }, onBeforeLeave(l) {
    l.dataset || (l.dataset = {}), Nn(l, t.m("collapse")) ? (gn(l, t.m("collapse")), l.dataset.oldOverflow = l.style.overflow, l.dataset.scrollWidth = l.clientWidth.toString(), Dn(l, t.m("collapse"))) : (Dn(l, t.m("collapse")), l.dataset.oldOverflow = l.style.overflow, l.dataset.scrollWidth = l.clientWidth.toString(), gn(l, t.m("collapse"))), l.style.width = `${l.scrollWidth}px`, l.style.overflow = "hidden";
  }, onLeave(l) {
    Dn(l, "horizontal-collapse-transition"), l.style.width = `${l.dataset.scrollWidth}px`;
  } };
  return (l, a) => (k(), oe(en, lt({ mode: "out-in" }, o(n)), { default: j(() => [X(l.$slots, "default")]), _: 3 }, 16));
} });
var jE = ve(WE, [["__file", "menu-collapse-transition.vue"]]);
function jf(e, t) {
  const n = y(() => {
    let a = e.parent;
    const s = [t.value];
    for (; a.type.name !== "ElMenu"; ) a.props.index && s.unshift(a.props.index), a = a.parent;
    return s;
  });
  return { parentMenu: y(() => {
    let a = e.parent;
    for (; a && !["ElMenu", "ElSubMenu"].includes(a.type.name); ) a = a.parent;
    return a;
  }), indexPath: n };
}
function UE(e) {
  return y(() => {
    const n = e.backgroundColor;
    return n ? new Wc(n).shade(20).toString() : "";
  });
}
const Uf = (e, t) => {
  const n = de("menu");
  return y(() => n.cssVarBlock({ "text-color": e.textColor || "", "hover-text-color": e.textColor || "", "bg-color": e.backgroundColor || "", "hover-bg-color": UE(e).value || "", "active-color": e.activeTextColor || "", level: `${t}` }));
}, YE = pe({ index: { type: String, required: true }, showTimeout: Number, hideTimeout: Number, popperClass: String, disabled: Boolean, teleported: { type: Boolean, default: void 0 }, popperOffset: Number, expandCloseIcon: { type: St }, expandOpenIcon: { type: St }, collapseCloseIcon: { type: St }, collapseOpenIcon: { type: St } }), Ds = "ElSubMenu";
var wi = K({ name: Ds, props: YE, setup(e, { slots: t, expose: n }) {
  const l = tt(), { indexPath: a, parentMenu: s } = jf(l, y(() => e.index)), r = de("menu"), i = de("sub-menu"), u = we("rootMenu");
  u || Kt(Ds, "can not inject root menu");
  const c = we(`subMenu:${s.value.uid}`);
  c || Kt(Ds, "can not inject sub menu");
  const d = N({}), f = N({});
  let m;
  const h = N(false), v = N(), p = N(), b = y(() => O.value === "horizontal" && T.value ? "bottom-start" : "right-start"), g = y(() => O.value === "horizontal" && T.value || O.value === "vertical" && !u.props.collapse ? e.expandCloseIcon && e.expandOpenIcon ? E.value ? e.expandOpenIcon : e.expandCloseIcon : fl : e.collapseCloseIcon && e.collapseOpenIcon ? E.value ? e.collapseOpenIcon : e.collapseCloseIcon : kn), T = y(() => c.level === 0), w = y(() => {
    const U = e.teleported;
    return U === void 0 ? T.value : U;
  }), C = y(() => u.props.collapse ? `${r.namespace.value}-zoom-in-left` : `${r.namespace.value}-zoom-in-top`), S = y(() => O.value === "horizontal" && T.value ? ["bottom-start", "bottom-end", "top-start", "top-end", "right-start", "left-start"] : ["right-start", "right", "right-end", "left-start", "bottom-start", "bottom-end", "top-start", "top-end"]), E = y(() => u.openedMenus.includes(e.index)), M = y(() => [...Object.values(d.value), ...Object.values(f.value)].some(({ active: U }) => U)), O = y(() => u.props.mode), _ = y(() => u.props.persistent), I = Ct({ index: e.index, indexPath: a, active: M }), R = Uf(u.props, c.level + 1), P = y(() => {
    var U;
    return (U = e.popperOffset) != null ? U : u.props.popperOffset;
  }), W = y(() => {
    var U;
    return (U = e.popperClass) != null ? U : u.props.popperClass;
  }), te = y(() => {
    var U;
    return (U = e.showTimeout) != null ? U : u.props.showTimeout;
  }), A = y(() => {
    var U;
    return (U = e.hideTimeout) != null ? U : u.props.hideTimeout;
  }), L = () => {
    var U, ne, Z;
    return (Z = (ne = (U = p.value) == null ? void 0 : U.popperRef) == null ? void 0 : ne.popperInstanceRef) == null ? void 0 : Z.destroy();
  }, F = (U) => {
    U || L();
  }, V = () => {
    u.props.menuTrigger === "hover" && u.props.mode === "horizontal" || u.props.collapse && u.props.mode === "vertical" || e.disabled || u.handleSubMenuClick({ index: e.index, indexPath: a.value, active: M.value });
  }, B = (U, ne = te.value) => {
    var Z;
    if (U.type !== "focus") {
      if (u.props.menuTrigger === "click" && u.props.mode === "horizontal" || !u.props.collapse && u.props.mode === "vertical" || e.disabled) {
        c.mouseInChild.value = true;
        return;
      }
      c.mouseInChild.value = true, m == null ? void 0 : m(), { stop: m } = Kl(() => {
        u.openMenu(e.index, a.value);
      }, ne), w.value && ((Z = s.value.vnode.el) == null || Z.dispatchEvent(new MouseEvent("mouseenter")));
    }
  }, G = (U = false) => {
    var ne;
    if (u.props.menuTrigger === "click" && u.props.mode === "horizontal" || !u.props.collapse && u.props.mode === "vertical") {
      c.mouseInChild.value = false;
      return;
    }
    m == null ? void 0 : m(), c.mouseInChild.value = false, { stop: m } = Kl(() => !h.value && u.closeMenu(e.index, a.value), A.value), w.value && U && ((ne = c.handleMouseleave) == null || ne.call(c, true));
  };
  ue(() => u.props.collapse, (U) => F(!!U));
  {
    const U = (Z) => {
      f.value[Z.index] = Z;
    }, ne = (Z) => {
      delete f.value[Z.index];
    };
    ut(`subMenu:${l.uid}`, { addSubMenu: U, removeSubMenu: ne, handleMouseleave: G, mouseInChild: h, level: c.level + 1 });
  }
  return n({ opened: E }), Xe(() => {
    u.addSubMenu(I), c.addSubMenu(I);
  }), It(() => {
    c.removeSubMenu(I), u.removeSubMenu(I);
  }), () => {
    var U;
    const ne = [(U = t.title) == null ? void 0 : U.call(t), Oe(Ee, { class: i.e("icon-arrow"), style: { transform: E.value ? e.expandCloseIcon && e.expandOpenIcon || e.collapseCloseIcon && e.collapseOpenIcon && u.props.collapse ? "none" : "rotateZ(180deg)" : "none" } }, { default: () => Be(g.value) ? Oe(l.appContext.components[g.value]) : Oe(g.value) })], Z = u.isMenuPopup ? Oe(rn, { ref: p, visible: E.value, effect: "light", pure: true, offset: P.value, showArrow: false, persistent: _.value, popperClass: W.value, placement: b.value, teleported: w.value, fallbackPlacements: S.value, transition: C.value, gpuAcceleration: false }, { content: () => {
      var ee;
      return Oe("div", { class: [r.m(O.value), r.m("popup-container"), W.value], onMouseenter: (re) => B(re, 100), onMouseleave: () => G(true), onFocus: (re) => B(re, 100) }, [Oe("ul", { class: [r.b(), r.m("popup"), r.m(`popup-${b.value}`)], style: R.value }, [(ee = t.default) == null ? void 0 : ee.call(t)])]);
    }, default: () => Oe("div", { class: i.e("title"), onClick: V }, ne) }) : Oe(Pe, {}, [Oe("div", { class: i.e("title"), ref: v, onClick: V }, ne), Oe(ps, {}, { default: () => {
      var ee;
      return Ye(Oe("ul", { role: "menu", class: [r.b(), r.m("inline")], style: R.value }, [(ee = t.default) == null ? void 0 : ee.call(t)]), [[pt, E.value]]);
    } })]);
    return Oe("li", { class: [i.b(), i.is("active", M.value), i.is("opened", E.value), i.is("disabled", e.disabled)], role: "menuitem", ariaHaspopup: true, ariaExpanded: E.value, onMouseenter: B, onMouseleave: () => G(), onFocus: B }, [Z]);
  };
} });
const qE = pe({ mode: { type: String, values: ["horizontal", "vertical"], default: "vertical" }, defaultActive: { type: String, default: "" }, defaultOpeneds: { type: Y(Array), default: () => Bt([]) }, uniqueOpened: Boolean, router: Boolean, menuTrigger: { type: String, values: ["hover", "click"], default: "hover" }, collapse: Boolean, backgroundColor: String, textColor: String, activeTextColor: String, closeOnClickOutside: Boolean, collapseTransition: { type: Boolean, default: true }, ellipsis: { type: Boolean, default: true }, popperOffset: { type: Number, default: 6 }, ellipsisIcon: { type: St, default: () => Qv }, popperEffect: { type: Y(String), default: "dark" }, popperClass: String, showTimeout: { type: Number, default: 300 }, hideTimeout: { type: Number, default: 300 }, persistent: { type: Boolean, default: true } }), Vs = (e) => Se(e) && e.every((t) => Be(t)), GE = { close: (e, t) => Be(e) && Vs(t), open: (e, t) => Be(e) && Vs(t), select: (e, t, n, l) => Be(e) && Vs(t) && gt(n) && (l === void 0 || l instanceof Promise) };
var XE = K({ name: "ElMenu", props: qE, emits: GE, setup(e, { emit: t, slots: n, expose: l }) {
  const a = tt(), s = a.appContext.config.globalProperties.$router, r = N(), i = de("menu"), u = de("sub-menu"), c = N(-1), d = N(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []), f = N(e.defaultActive), m = N({}), h = N({}), v = y(() => e.mode === "horizontal" || e.mode === "vertical" && e.collapse), p = () => {
    const A = f.value && m.value[f.value];
    if (!A || e.mode === "horizontal" || e.collapse) return;
    A.indexPath.forEach((F) => {
      const V = h.value[F];
      V && b(F, V.indexPath);
    });
  }, b = (A, L) => {
    d.value.includes(A) || (e.uniqueOpened && (d.value = d.value.filter((F) => L.includes(F))), d.value.push(A), t("open", A, L));
  }, g = (A) => {
    const L = d.value.indexOf(A);
    L !== -1 && d.value.splice(L, 1);
  }, T = (A, L) => {
    g(A), t("close", A, L);
  }, w = ({ index: A, indexPath: L }) => {
    d.value.includes(A) ? T(A, L) : b(A, L);
  }, C = (A) => {
    (e.mode === "horizontal" || e.collapse) && (d.value = []);
    const { index: L, indexPath: F } = A;
    if (!(qt(L) || qt(F))) if (e.router && s) {
      const V = A.route || L, B = s.push(V).then((G) => (G || (f.value = L), G));
      t("select", L, F, { index: L, indexPath: F, route: V }, B);
    } else f.value = L, t("select", L, F, { index: L, indexPath: F });
  }, S = (A) => {
    var L;
    const F = m.value, V = F[A] || f.value && F[f.value] || F[e.defaultActive];
    f.value = (L = V == null ? void 0 : V.index) != null ? L : A;
  }, E = (A) => {
    const L = getComputedStyle(A), F = Number.parseInt(L.marginLeft, 10), V = Number.parseInt(L.marginRight, 10);
    return A.offsetWidth + F + V || 0;
  }, M = () => {
    var A, L;
    if (!r.value) return -1;
    const F = Array.from((L = (A = r.value) == null ? void 0 : A.childNodes) != null ? L : []).filter((re) => re.nodeName !== "#text" || re.nodeValue), V = 64, B = getComputedStyle(r.value), G = Number.parseInt(B.paddingLeft, 10), U = Number.parseInt(B.paddingRight, 10), ne = r.value.clientWidth - G - U;
    let Z = 0, ee = 0;
    return F.forEach((re, le) => {
      re.nodeName !== "#comment" && (Z += E(re), Z <= ne - V && (ee = le + 1));
    }), ee === F.length ? -1 : ee;
  }, O = (A) => h.value[A].indexPath, _ = (A, L = 33.34) => {
    let F;
    return () => {
      F && clearTimeout(F), F = setTimeout(() => {
        A();
      }, L);
    };
  };
  let I = true;
  const R = () => {
    if (c.value === M()) return;
    const A = () => {
      c.value = -1, $e(() => {
        c.value = M();
      });
    };
    I ? A() : _(A)(), I = false;
  };
  ue(() => e.defaultActive, (A) => {
    m.value[A] || (f.value = ""), S(A);
  }), ue(() => e.collapse, (A) => {
    A && (d.value = []);
  }), ue(m.value, p);
  let P;
  an(() => {
    e.mode === "horizontal" && e.ellipsis ? P = Lt(r, R).stop : P == null ? void 0 : P();
  });
  const W = N(false);
  {
    const A = (B) => {
      h.value[B.index] = B;
    }, L = (B) => {
      delete h.value[B.index];
    };
    ut("rootMenu", Ct({ props: e, openedMenus: d, items: m, subMenus: h, activeIndex: f, isMenuPopup: v, addMenuItem: (B) => {
      m.value[B.index] = B;
    }, removeMenuItem: (B) => {
      delete m.value[B.index];
    }, addSubMenu: A, removeSubMenu: L, openMenu: b, closeMenu: T, handleMenuItemClick: C, handleSubMenuClick: w })), ut(`subMenu:${a.uid}`, { addSubMenu: A, removeSubMenu: L, mouseInChild: W, level: 0 });
  }
  Xe(() => {
    e.mode === "horizontal" && new HE(a.vnode.el, i.namespace.value);
  }), l({ open: (L) => {
    const { indexPath: F } = h.value[L];
    F.forEach((V) => b(V, F));
  }, close: g, updateActiveIndex: S, handleResize: R });
  const te = Uf(e, 0);
  return () => {
    var A, L;
    let F = (L = (A = n.default) == null ? void 0 : A.call(n)) != null ? L : [];
    const V = [];
    if (e.mode === "horizontal" && r.value) {
      const U = al(F), ne = c.value === -1 ? U : U.slice(0, c.value), Z = c.value === -1 ? [] : U.slice(c.value);
      (Z == null ? void 0 : Z.length) && e.ellipsis && (F = ne, V.push(Oe(wi, { index: "sub-menu-more", class: u.e("hide-arrow"), popperOffset: e.popperOffset }, { title: () => Oe(Ee, { class: u.e("icon-more") }, { default: () => Oe(e.ellipsisIcon) }), default: () => Z })));
    }
    const B = e.closeOnClickOutside ? [[il, () => {
      d.value.length && (W.value || (d.value.forEach((U) => t("close", U, O(U))), d.value = []));
    }]] : [], G = Ye(Oe("ul", { key: String(e.collapse), role: "menubar", ref: r, style: te.value, class: { [i.b()]: true, [i.m(e.mode)]: true, [i.m("collapse")]: e.collapse } }, [...F, ...V]), B);
    return e.collapseTransition && e.mode === "vertical" ? Oe(jE, () => G) : G;
  };
} });
const ZE = pe({ index: { type: Y([String, null]), default: null }, route: { type: Y([String, Object]) }, disabled: Boolean }), JE = { click: (e) => Be(e.index) && Se(e.indexPath) }, dr = "ElMenuItem", QE = K({ name: dr }), e1 = K({ ...QE, props: ZE, emits: JE, setup(e, { expose: t, emit: n }) {
  const l = e, a = tt(), s = we("rootMenu"), r = de("menu"), i = de("menu-item");
  s || Kt(dr, "can not inject root menu");
  const { parentMenu: u, indexPath: c } = jf(a, yt(l, "index")), d = we(`subMenu:${u.value.uid}`);
  d || Kt(dr, "can not inject sub menu");
  const f = y(() => l.index === s.activeIndex), m = Ct({ index: l.index, indexPath: c, active: f }), h = () => {
    l.disabled || (s.handleMenuItemClick({ index: l.index, indexPath: c.value, route: l.route }), n("click", m));
  };
  return Xe(() => {
    d.addSubMenu(m), s.addMenuItem(m);
  }), It(() => {
    d.removeSubMenu(m), s.removeMenuItem(m);
  }), t({ parentMenu: u, rootMenu: s, active: f, nsMenu: r, nsMenuItem: i, handleClick: h }), (v, p) => (k(), D("li", { class: $([o(i).b(), o(i).is("active", o(f)), o(i).is("disabled", v.disabled)]), role: "menuitem", tabindex: "-1", onClick: h }, [o(u).type.name === "ElMenu" && o(s).props.collapse && v.$slots.title ? (k(), oe(o(rn), { key: 0, effect: o(s).props.popperEffect, placement: "right", "fallback-placements": ["left"], persistent: o(s).props.persistent }, { content: j(() => [X(v.$slots, "title")]), default: j(() => [x("div", { class: $(o(r).be("tooltip", "trigger")) }, [X(v.$slots, "default")], 2)]), _: 3 }, 8, ["effect", "persistent"])) : (k(), D(Pe, { key: 1 }, [X(v.$slots, "default"), X(v.$slots, "title")], 64))], 2));
} });
var Yf = ve(e1, [["__file", "menu-item.vue"]]);
const t1 = { title: String }, n1 = K({ name: "ElMenuItemGroup" }), l1 = K({ ...n1, props: t1, setup(e) {
  const t = de("menu-item-group");
  return (n, l) => (k(), D("li", { class: $(o(t).b()) }, [x("div", { class: $(o(t).e("title")) }, [n.$slots.title ? X(n.$slots, "title", { key: 1 }) : (k(), D(Pe, { key: 0 }, [at(he(n.title), 1)], 64))], 2), x("ul", null, [X(n.$slots, "default")])], 2));
} });
var qf = ve(l1, [["__file", "menu-item-group.vue"]]);
const o1 = We(XE, { MenuItem: Yf, MenuItemGroup: qf, SubMenu: wi }), a1 = Vt(Yf), s1 = Vt(qf), r1 = Vt(wi), i1 = pe({ icon: { type: St, default: () => eh }, title: String, content: { type: String, default: "" } }), u1 = { back: () => true }, c1 = K({ name: "ElPageHeader" }), d1 = K({ ...c1, props: i1, emits: u1, setup(e, { emit: t }) {
  const { t: n } = ft(), l = de("page-header");
  function a() {
    t("back");
  }
  return (s, r) => (k(), D("div", { class: $([o(l).b(), { [o(l).m("has-breadcrumb")]: !!s.$slots.breadcrumb, [o(l).m("has-extra")]: !!s.$slots.extra, [o(l).is("contentful")]: !!s.$slots.default }]) }, [s.$slots.breadcrumb ? (k(), D("div", { key: 0, class: $(o(l).e("breadcrumb")) }, [X(s.$slots, "breadcrumb")], 2)) : J("v-if", true), x("div", { class: $(o(l).e("header")) }, [x("div", { class: $(o(l).e("left")) }, [x("div", { class: $(o(l).e("back")), role: "button", tabindex: "0", onClick: a }, [s.icon || s.$slots.icon ? (k(), D("div", { key: 0, "aria-label": s.title || o(n)("el.pageHeader.title"), class: $(o(l).e("icon")) }, [X(s.$slots, "icon", {}, () => [s.icon ? (k(), oe(o(Ee), { key: 0 }, { default: j(() => [(k(), oe(Je(s.icon)))]), _: 1 })) : J("v-if", true)])], 10, ["aria-label"])) : J("v-if", true), x("div", { class: $(o(l).e("title")) }, [X(s.$slots, "title", {}, () => [at(he(s.title || o(n)("el.pageHeader.title")), 1)])], 2)], 2), z(o(Pf), { direction: "vertical" }), x("div", { class: $(o(l).e("content")) }, [X(s.$slots, "content", {}, () => [at(he(s.content), 1)])], 2)], 2), s.$slots.extra ? (k(), D("div", { key: 0, class: $(o(l).e("extra")) }, [X(s.$slots, "extra")], 2)) : J("v-if", true)], 2), s.$slots.default ? (k(), D("div", { key: 1, class: $(o(l).e("main")) }, [X(s.$slots, "default")], 2)) : J("v-if", true)], 2));
} });
var f1 = ve(d1, [["__file", "page-header.vue"]]);
const p1 = We(f1), Gf = Symbol("elPaginationKey"), v1 = pe({ disabled: Boolean, currentPage: { type: Number, default: 1 }, prevText: { type: String }, prevIcon: { type: St } }), h1 = { click: (e) => e instanceof MouseEvent }, m1 = K({ name: "ElPaginationPrev" }), g1 = K({ ...m1, props: v1, emits: h1, setup(e) {
  const t = e, { t: n } = ft(), l = y(() => t.disabled || t.currentPage <= 1);
  return (a, s) => (k(), D("button", { type: "button", class: "btn-prev", disabled: o(l), "aria-label": a.prevText || o(n)("el.pagination.prev"), "aria-disabled": o(l), onClick: (r) => a.$emit("click", r) }, [a.prevText ? (k(), D("span", { key: 0 }, he(a.prevText), 1)) : (k(), oe(o(Ee), { key: 1 }, { default: j(() => [(k(), oe(Je(a.prevIcon)))]), _: 1 }))], 8, ["disabled", "aria-label", "aria-disabled", "onClick"]));
} });
var b1 = ve(g1, [["__file", "prev.vue"]]);
const y1 = pe({ disabled: Boolean, currentPage: { type: Number, default: 1 }, pageCount: { type: Number, default: 50 }, nextText: { type: String }, nextIcon: { type: St } }), C1 = K({ name: "ElPaginationNext" }), w1 = K({ ...C1, props: y1, emits: ["click"], setup(e) {
  const t = e, { t: n } = ft(), l = y(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
  return (a, s) => (k(), D("button", { type: "button", class: "btn-next", disabled: o(l), "aria-label": a.nextText || o(n)("el.pagination.next"), "aria-disabled": o(l), onClick: (r) => a.$emit("click", r) }, [a.nextText ? (k(), D("span", { key: 0 }, he(a.nextText), 1)) : (k(), oe(o(Ee), { key: 1 }, { default: j(() => [(k(), oe(Je(a.nextIcon)))]), _: 1 }))], 8, ["disabled", "aria-label", "aria-disabled", "onClick"]));
} });
var S1 = ve(w1, [["__file", "next.vue"]]);
const Xf = Symbol("ElSelectGroup"), Po = Symbol("ElSelect"), fr = "ElOption", k1 = pe({ value: { type: [String, Number, Boolean, Object], required: true }, label: { type: [String, Number] }, created: Boolean, disabled: Boolean });
function E1(e, t) {
  const n = we(Po);
  n || Kt(fr, "usage: <el-select><el-option /></el-select/>");
  const l = we(Xf, { disabled: false }), a = y(() => d(pn(n.props.modelValue), e.value)), s = y(() => {
    var h;
    if (n.props.multiple) {
      const v = pn((h = n.props.modelValue) != null ? h : []);
      return !a.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else return false;
  }), r = y(() => e.label || (gt(e.value) ? "" : e.value)), i = y(() => e.value || e.label || ""), u = y(() => e.disabled || t.groupDisabled || s.value), c = tt(), d = (h = [], v) => {
    if (gt(e.value)) {
      const p = n.props.valueKey;
      return h && h.some((b) => Ra(xt(b, p)) === xt(v, p));
    } else return h && h.includes(v);
  }, f = () => {
    !e.disabled && !l.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, m = (h) => {
    const v = new RegExp(ai(h), "i");
    t.visible = v.test(String(r.value)) || e.created;
  };
  return ue(() => r.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ue(() => e.value, (h, v) => {
    const { remote: p, valueKey: b } = n.props;
    if ((p ? h !== v : !Zt(h, v)) && (n.onOptionDestroy(v, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !p) {
      if (b && gt(h) && gt(v) && h[b] === v[b]) return;
      n.setSelected();
    }
  }), ue(() => l.disabled, () => {
    t.groupDisabled = l.disabled;
  }, { immediate: true }), { select: n, currentLabel: r, currentValue: i, itemSelected: a, isDisabled: u, hoverItem: f, updateOption: m };
}
const $1 = K({ name: fr, componentName: fr, props: k1, setup(e) {
  const t = de("select"), n = nn(), l = y(() => [t.be("dropdown", "item"), t.is("disabled", o(i)), t.is("selected", o(r)), t.is("hovering", o(m))]), a = Ct({ index: -1, groupDisabled: false, visible: true, hover: false }), { currentLabel: s, itemSelected: r, isDisabled: i, select: u, hoverItem: c, updateOption: d } = E1(e, a), { visible: f, hover: m } = tn(a), h = tt().proxy;
  u.onOptionCreate(h), It(() => {
    const p = h.value, { selected: b } = u.states, g = b.some((T) => T.value === h.value);
    $e(() => {
      u.states.cachedOptions.get(p) === h && !g && u.states.cachedOptions.delete(p);
    }), u.onOptionDestroy(p, h);
  });
  function v() {
    i.value || u.handleOptionSelect(h);
  }
  return { ns: t, id: n, containerKls: l, currentLabel: s, itemSelected: r, isDisabled: i, select: u, visible: f, hover: m, states: a, hoverItem: c, updateOption: d, selectOptionClick: v };
} });
function T1(e, t) {
  return Ye((k(), D("li", { id: e.id, class: $(e.containerKls), role: "option", "aria-disabled": e.isDisabled || void 0, "aria-selected": e.itemSelected, onMousemove: e.hoverItem, onClick: Re(e.selectOptionClick, ["stop"]) }, [X(e.$slots, "default", {}, () => [x("span", null, he(e.currentLabel), 1)])], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [[pt, e.visible]]);
}
var Si = ve($1, [["render", T1], ["__file", "option.vue"]]);
const N1 = K({ name: "ElSelectDropdown", componentName: "ElSelectDropdown", setup() {
  const e = we(Po), t = de("select"), n = y(() => e.props.popperClass), l = y(() => e.props.multiple), a = y(() => e.props.fitInputWidth), s = N("");
  function r() {
    var i;
    s.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
  }
  return Xe(() => {
    r(), Lt(e.selectRef, r);
  }), { ns: t, minWidth: s, popperClass: n, isMultiple: l, isFitInputWidth: a };
} });
function I1(e, t, n, l, a, s) {
  return k(), D("div", { class: $([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]), style: Me({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth }) }, [e.$slots.header ? (k(), D("div", { key: 0, class: $(e.ns.be("dropdown", "header")) }, [X(e.$slots, "header")], 2)) : J("v-if", true), X(e.$slots, "default"), e.$slots.footer ? (k(), D("div", { key: 1, class: $(e.ns.be("dropdown", "footer")) }, [X(e.$slots, "footer")], 2)) : J("v-if", true)], 6);
}
var _1 = ve(N1, [["render", I1], ["__file", "select-dropdown.vue"]]);
const M1 = (e, t) => {
  const { t: n } = ft(), l = nn(), a = de("select"), s = de("input"), r = Ct({ inputValue: "", options: /* @__PURE__ */ new Map(), cachedOptions: /* @__PURE__ */ new Map(), optionValues: [], selected: [], selectionWidth: 0, collapseItemWidth: 0, selectedLabel: "", hoveringIndex: -1, previousQuery: null, inputHovering: false, menuVisibleOnFocus: false, isBeforeHide: false }), i = N(), u = N(), c = N(), d = N(), f = N(), m = N(), h = N(), v = N(), p = N(), b = N(), g = N(), { isComposing: T, handleCompositionStart: w, handleCompositionUpdate: C, handleCompositionEnd: S } = aa({ afterComposition: (be) => Nt(be) }), { wrapperRef: E, isFocused: M, handleBlur: O } = Ol(f, { beforeFocus() {
    return L.value;
  }, afterFocus() {
    e.automaticDropdown && !_.value && (_.value = true, r.menuVisibleOnFocus = true);
  }, beforeBlur(be) {
    var ze, bt;
    return ((ze = c.value) == null ? void 0 : ze.isFocusInsideContent(be)) || ((bt = d.value) == null ? void 0 : bt.isFocusInsideContent(be));
  }, afterBlur() {
    var be;
    _.value = false, r.menuVisibleOnFocus = false, e.validateEvent && ((be = P == null ? void 0 : P.validate) == null || be.call(P, "blur").catch((ze) => void 0));
  } }), _ = N(false), I = N(), { form: R, formItem: P } = un(), { inputId: W } = zn(e, { formItemContext: P }), { valueOnClear: te, isEmptyValue: A } = ss(e), L = y(() => e.disabled || (R == null ? void 0 : R.disabled)), F = y(() => Se(e.modelValue) ? e.modelValue.length > 0 : !A(e.modelValue)), V = y(() => {
    var be;
    return (be = R == null ? void 0 : R.statusIcon) != null ? be : false;
  }), B = y(() => e.clearable && !L.value && r.inputHovering && F.value), G = y(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), U = y(() => a.is("reverse", !!(G.value && _.value))), ne = y(() => (P == null ? void 0 : P.validateState) || ""), Z = y(() => ne.value && us[ne.value]), ee = y(() => e.remote ? 300 : 0), re = y(() => e.remote && !r.inputValue && r.options.size === 0), le = y(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && r.inputValue && r.options.size > 0 && Q.value === 0 ? e.noMatchText || n("el.select.noMatch") : r.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Q = y(() => ie.value.filter((be) => be.visible).length), ie = y(() => {
    const be = Array.from(r.options.values()), ze = [];
    return r.optionValues.forEach((bt) => {
      const Ut = be.findIndex((fn) => fn.value === bt);
      Ut > -1 && ze.push(be[Ut]);
    }), ze.length >= be.length ? ze : be;
  }), ce = y(() => Array.from(r.cachedOptions.values())), Ie = y(() => {
    const be = ie.value.filter((ze) => !ze.created).some((ze) => ze.currentLabel === r.inputValue);
    return e.filterable && e.allowCreate && r.inputValue !== "" && !be;
  }), me = () => {
    e.filterable && Qe(e.filterMethod) || e.filterable && e.remote && Qe(e.remoteMethod) || ie.value.forEach((be) => {
      var ze;
      (ze = be.updateOption) == null || ze.call(be, r.inputValue);
    });
  }, se = Ht(), ke = y(() => ["small"].includes(se.value) ? "small" : "default"), De = y({ get() {
    return _.value && !re.value;
  }, set(be) {
    _.value = be;
  } }), qe = y(() => {
    if (e.multiple && !vt(e.modelValue)) return pn(e.modelValue).length === 0 && !r.inputValue;
    const be = Se(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || vt(be) ? !r.inputValue : true;
  }), je = y(() => {
    var be;
    const ze = (be = e.placeholder) != null ? be : n("el.select.placeholder");
    return e.multiple || !F.value ? ze : r.selectedLabel;
  }), Le = y(() => Da ? null : "mouseenter");
  ue(() => e.modelValue, (be, ze) => {
    e.multiple && e.filterable && !e.reserveKeyword && (r.inputValue = "", Ne("")), Ge(), !Zt(be, ze) && e.validateEvent && (P == null ? void 0 : P.validate("change").catch((bt) => void 0));
  }, { flush: "post", deep: true }), ue(() => _.value, (be) => {
    be ? Ne(r.inputValue) : (r.inputValue = "", r.previousQuery = null, r.isBeforeHide = true), t("visible-change", be);
  }), ue(() => r.options.entries(), () => {
    dt && (Ge(), e.defaultFirstOption && (e.filterable || e.remote) && Q.value && Te());
  }, { flush: "post" }), ue([() => r.hoveringIndex, ie], ([be]) => {
    _e(be) && be > -1 ? I.value = ie.value[be] || {} : I.value = {}, ie.value.forEach((ze) => {
      ze.hover = I.value === ze;
    });
  }), an(() => {
    r.isBeforeHide || me();
  });
  const Ne = (be) => {
    r.previousQuery === be || T.value || (r.previousQuery = be, e.filterable && Qe(e.filterMethod) ? e.filterMethod(be) : e.filterable && e.remote && Qe(e.remoteMethod) && e.remoteMethod(be), e.defaultFirstOption && (e.filterable || e.remote) && Q.value ? $e(Te) : $e(ot));
  }, Te = () => {
    const be = ie.value.filter((fn) => fn.visible && !fn.disabled && !fn.states.groupDisabled), ze = be.find((fn) => fn.created), bt = be[0], Ut = ie.value.map((fn) => fn.value);
    r.hoveringIndex = H(Ut, ze || bt);
  }, Ge = () => {
    if (e.multiple) r.selectedLabel = "";
    else {
      const ze = Se(e.modelValue) ? e.modelValue[0] : e.modelValue, bt = Ze(ze);
      r.selectedLabel = bt.currentLabel, r.selected = [bt];
      return;
    }
    const be = [];
    vt(e.modelValue) || pn(e.modelValue).forEach((ze) => {
      be.push(Ze(ze));
    }), r.selected = be;
  }, Ze = (be) => {
    let ze;
    const bt = qs(be);
    for (let pl = r.cachedOptions.size - 1; pl >= 0; pl--) {
      const qn = ce.value[pl];
      if (bt ? xt(qn.value, e.valueKey) === xt(be, e.valueKey) : qn.value === be) {
        ze = { value: be, currentLabel: qn.currentLabel, get isDisabled() {
          return qn.isDisabled;
        } };
        break;
      }
    }
    if (ze) return ze;
    const Ut = bt ? be.label : be ?? "";
    return { value: be, currentLabel: Ut };
  }, ot = () => {
    r.hoveringIndex = ie.value.findIndex((be) => r.selected.some((ze) => Pl(ze) === Pl(be)));
  }, st = () => {
    r.selectionWidth = u.value.getBoundingClientRect().width;
  }, Ce = () => {
    r.collapseItemWidth = b.value.getBoundingClientRect().width;
  }, Ue = () => {
    var be, ze;
    (ze = (be = c.value) == null ? void 0 : be.updatePopper) == null || ze.call(be);
  }, ht = () => {
    var be, ze;
    (ze = (be = d.value) == null ? void 0 : be.updatePopper) == null || ze.call(be);
  }, Pt = () => {
    r.inputValue.length > 0 && !_.value && (_.value = true), Ne(r.inputValue);
  }, Nt = (be) => {
    if (r.inputValue = be.target.value, e.remote) _t();
    else return Pt();
  }, _t = Pn(() => {
    Pt();
  }, ee.value), kt = (be) => {
    Zt(e.modelValue, be) || t(et, be);
  }, dn = (be) => Vc(be, (ze) => {
    const bt = r.cachedOptions.get(ze);
    return bt && !bt.disabled && !bt.states.groupDisabled;
  }), xe = (be) => {
    if (e.multiple && be.code !== ye.delete && be.target.value.length <= 0) {
      const ze = pn(e.modelValue).slice(), bt = dn(ze);
      if (bt < 0) return;
      const Ut = ze[bt];
      ze.splice(bt, 1), t(Ae, ze), kt(ze), t("remove-tag", Ut);
    }
  }, rt = (be, ze) => {
    const bt = r.selected.indexOf(ze);
    if (bt > -1 && !L.value) {
      const Ut = pn(e.modelValue).slice();
      Ut.splice(bt, 1), t(Ae, Ut), kt(Ut), t("remove-tag", ze.value);
    }
    be.stopPropagation(), jt();
  }, q = (be) => {
    be.stopPropagation();
    const ze = e.multiple ? [] : te.value;
    if (e.multiple) for (const bt of r.selected) bt.isDisabled && ze.push(bt.value);
    t(Ae, ze), kt(ze), r.hoveringIndex = -1, _.value = false, t("clear"), jt();
  }, ae = (be) => {
    var ze;
    if (e.multiple) {
      const bt = pn((ze = e.modelValue) != null ? ze : []).slice(), Ut = H(bt, be);
      Ut > -1 ? bt.splice(Ut, 1) : (e.multipleLimit <= 0 || bt.length < e.multipleLimit) && bt.push(be.value), t(Ae, bt), kt(bt), be.created && Ne(""), e.filterable && !e.reserveKeyword && (r.inputValue = "");
    } else t(Ae, be.value), kt(be.value), _.value = false;
    jt(), !_.value && $e(() => {
      fe(be);
    });
  }, H = (be, ze) => vt(ze) ? -1 : gt(ze.value) ? be.findIndex((bt) => Zt(xt(bt, e.valueKey), Pl(ze))) : be.indexOf(ze.value), fe = (be) => {
    var ze, bt, Ut, fn, pl;
    const qn = Se(be) ? be[0] : be;
    let vl = null;
    if (qn == null ? void 0 : qn.value) {
      const hl = ie.value.filter((Xl) => Xl.value === qn.value);
      hl.length > 0 && (vl = hl[0].$el);
    }
    if (c.value && vl) {
      const hl = (fn = (Ut = (bt = (ze = c.value) == null ? void 0 : ze.popperRef) == null ? void 0 : bt.contentRef) == null ? void 0 : Ut.querySelector) == null ? void 0 : fn.call(Ut, `.${a.be("dropdown", "wrap")}`);
      hl && Yr(hl, vl);
    }
    (pl = g.value) == null || pl.handleScroll();
  }, Fe = (be) => {
    r.options.set(be.value, be), r.cachedOptions.set(be.value, be);
  }, He = (be, ze) => {
    r.options.get(be) === ze && r.options.delete(be);
  }, wt = y(() => {
    var be, ze;
    return (ze = (be = c.value) == null ? void 0 : be.popperRef) == null ? void 0 : ze.contentRef;
  }), Rn = () => {
    r.isBeforeHide = false, $e(() => {
      var be;
      (be = g.value) == null || be.update(), fe(r.selected);
    });
  }, jt = () => {
    var be;
    (be = f.value) == null || be.focus();
  }, Gt = () => {
    var be;
    if (_.value) {
      _.value = false, $e(() => {
        var ze;
        return (ze = f.value) == null ? void 0 : ze.blur();
      });
      return;
    }
    (be = f.value) == null || be.blur();
  }, Ft = (be) => {
    q(be);
  }, Yn = (be) => {
    if (_.value = false, M.value) {
      const ze = new FocusEvent("focus", be);
      $e(() => O(ze));
    }
  }, Ot = () => {
    r.inputValue.length > 0 ? r.inputValue = "" : _.value = false;
  }, bn = () => {
    L.value || (Da && (r.inputHovering = true), r.menuVisibleOnFocus ? r.menuVisibleOnFocus = false : _.value = !_.value);
  }, Lo = () => {
    if (!_.value) bn();
    else {
      const be = ie.value[r.hoveringIndex];
      be && !be.isDisabled && ae(be);
    }
  }, Pl = (be) => gt(be.value) ? xt(be.value, e.valueKey) : be.value, ia = y(() => ie.value.filter((be) => be.visible).every((be) => be.isDisabled)), Ss = y(() => e.multiple ? e.collapseTags ? r.selected.slice(0, e.maxCollapseTags) : r.selected : []), Gl = y(() => e.multiple ? e.collapseTags ? r.selected.slice(e.maxCollapseTags) : [] : []), ua = (be) => {
    if (!_.value) {
      _.value = true;
      return;
    }
    if (!(r.options.size === 0 || Q.value === 0 || T.value) && !ia.value) {
      be === "next" ? (r.hoveringIndex++, r.hoveringIndex === r.options.size && (r.hoveringIndex = 0)) : be === "prev" && (r.hoveringIndex--, r.hoveringIndex < 0 && (r.hoveringIndex = r.options.size - 1));
      const ze = ie.value[r.hoveringIndex];
      (ze.isDisabled || !ze.visible) && ua(be), $e(() => fe(I.value));
    }
  }, ks = () => {
    if (!u.value) return 0;
    const be = window.getComputedStyle(u.value);
    return Number.parseFloat(be.gap || "6px");
  }, Es = y(() => {
    const be = ks();
    return { maxWidth: `${b.value && e.maxCollapseTags === 1 ? r.selectionWidth - r.collapseItemWidth - be : r.selectionWidth}px` };
  }), $s = y(() => ({ maxWidth: `${r.selectionWidth}px` })), Ts = (be) => {
    t("popup-scroll", be);
  };
  return Lt(u, st), Lt(v, Ue), Lt(E, Ue), Lt(p, ht), Lt(b, Ce), Xe(() => {
    Ge();
  }), { inputId: W, contentId: l, nsSelect: a, nsInput: s, states: r, isFocused: M, expanded: _, optionsArray: ie, hoverOption: I, selectSize: se, filteredOptionsCount: Q, updateTooltip: Ue, updateTagTooltip: ht, debouncedOnInputChange: _t, onInput: Nt, deletePrevTag: xe, deleteTag: rt, deleteSelected: q, handleOptionSelect: ae, scrollToOption: fe, hasModelValue: F, shouldShowPlaceholder: qe, currentPlaceholder: je, mouseEnterEventName: Le, needStatusIcon: V, showClose: B, iconComponent: G, iconReverse: U, validateState: ne, validateIcon: Z, showNewOption: Ie, updateOptions: me, collapseTagSize: ke, setSelected: Ge, selectDisabled: L, emptyText: le, handleCompositionStart: w, handleCompositionUpdate: C, handleCompositionEnd: S, onOptionCreate: Fe, onOptionDestroy: He, handleMenuEnter: Rn, focus: jt, blur: Gt, handleClearClick: Ft, handleClickOutside: Yn, handleEsc: Ot, toggleMenu: bn, selectOption: Lo, getValueKey: Pl, navigateOptions: ua, dropdownMenuVisible: De, showTagList: Ss, collapseTagList: Gl, popupScroll: Ts, tagStyle: Es, collapseTagStyle: $s, popperRef: wt, inputRef: f, tooltipRef: c, tagTooltipRef: d, prefixRef: m, suffixRef: h, selectRef: i, wrapperRef: E, selectionRef: u, scrollbarRef: g, menuRef: v, tagMenuRef: p, collapseItemRef: b };
};
var O1 = K({ name: "ElOptions", setup(e, { slots: t }) {
  const n = we(Po);
  let l = [];
  return () => {
    var a, s;
    const r = (a = t.default) == null ? void 0 : a.call(t), i = [];
    function u(c) {
      Se(c) && c.forEach((d) => {
        var f, m, h, v;
        const p = (f = (d == null ? void 0 : d.type) || {}) == null ? void 0 : f.name;
        p === "ElOptionGroup" ? u(!Be(d.children) && !Se(d.children) && Qe((m = d.children) == null ? void 0 : m.default) ? (h = d.children) == null ? void 0 : h.default() : d.children) : p === "ElOption" ? i.push((v = d.props) == null ? void 0 : v.value) : Se(d.children) && u(d.children);
      });
    }
    return r.length && u((s = r[0]) == null ? void 0 : s.children), Zt(i, l) || (l = i, n && (n.states.optionValues = i)), r;
  };
} });
const P1 = pe({ name: String, id: String, modelValue: { type: Y([Array, String, Number, Boolean, Object]), default: void 0 }, autocomplete: { type: String, default: "off" }, automaticDropdown: Boolean, size: Wt, effect: { type: Y(String), default: "light" }, disabled: Boolean, clearable: Boolean, filterable: Boolean, allowCreate: Boolean, loading: Boolean, popperClass: { type: String, default: "" }, popperOptions: { type: Y(Object), default: () => ({}) }, remote: Boolean, loadingText: String, noMatchText: String, noDataText: String, remoteMethod: Function, filterMethod: Function, multiple: Boolean, multipleLimit: { type: Number, default: 0 }, placeholder: { type: String }, defaultFirstOption: Boolean, reserveKeyword: { type: Boolean, default: true }, valueKey: { type: String, default: "value" }, collapseTags: Boolean, collapseTagsTooltip: Boolean, maxCollapseTags: { type: Number, default: 1 }, teleported: Xt.teleported, persistent: { type: Boolean, default: true }, clearIcon: { type: St, default: dl }, fitInputWidth: Boolean, suffixIcon: { type: St, default: fl }, tagType: { ...rl.type, default: "info" }, tagEffect: { ...rl.effect, default: "light" }, validateEvent: { type: Boolean, default: true }, remoteShowSuffix: Boolean, showArrow: { type: Boolean, default: true }, offset: { type: Number, default: 12 }, placement: { type: Y(String), values: Yl, default: "bottom-start" }, fallbackPlacements: { type: Y(Array), default: ["bottom-start", "top-start", "right", "left"] }, tabindex: { type: [String, Number], default: 0 }, appendTo: String, ...Io, ...ln(["ariaLabel"]) });
gd.scroll;
const Gu = "ElSelect", R1 = K({ name: Gu, componentName: Gu, components: { ElSelectMenu: _1, ElOption: Si, ElOptions: O1, ElTag: yo, ElScrollbar: el, ElTooltip: rn, ElIcon: Ee }, directives: { ClickOutside: il }, props: P1, emits: [Ae, et, "remove-tag", "clear", "visible-change", "focus", "blur", "popup-scroll"], setup(e, { emit: t }) {
  const n = y(() => {
    const { modelValue: u, multiple: c } = e, d = c ? [] : void 0;
    return Se(u) ? c ? u : d : c ? d : u;
  }), l = Ct({ ...tn(e), modelValue: n }), a = M1(l, t), { calculatorRef: s, inputStyle: r } = Ci();
  ut(Po, Ct({ props: l, states: a.states, selectRef: a.selectRef, optionsArray: a.optionsArray, setSelected: a.setSelected, handleOptionSelect: a.handleOptionSelect, onOptionCreate: a.onOptionCreate, onOptionDestroy: a.onOptionDestroy }));
  const i = y(() => e.multiple ? a.states.selected.map((u) => u.currentLabel) : a.states.selectedLabel);
  return { ...a, modelValue: n, selectedLabel: i, calculatorRef: s, inputStyle: r };
} });
function L1(e, t) {
  const n = nt("el-tag"), l = nt("el-tooltip"), a = nt("el-icon"), s = nt("el-option"), r = nt("el-options"), i = nt("el-scrollbar"), u = nt("el-select-menu"), c = ls("click-outside");
  return Ye((k(), D("div", { ref: "selectRef", class: $([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]), [Rv(e.mouseEnterEventName)]: (d) => e.states.inputHovering = true, onMouseleave: (d) => e.states.inputHovering = false }, [z(l, { ref: "tooltipRef", visible: e.dropdownMenuVisible, placement: e.placement, teleported: e.teleported, "popper-class": [e.nsSelect.e("popper"), e.popperClass], "popper-options": e.popperOptions, "fallback-placements": e.fallbackPlacements, effect: e.effect, pure: "", trigger: "click", transition: `${e.nsSelect.namespace.value}-zoom-in-top`, "stop-popper-mouse-event": false, "gpu-acceleration": false, persistent: e.persistent, "append-to": e.appendTo, "show-arrow": e.showArrow, offset: e.offset, onBeforeShow: e.handleMenuEnter, onHide: (d) => e.states.isBeforeHide = false }, { default: j(() => {
    var d;
    return [x("div", { ref: "wrapperRef", class: $([e.nsSelect.e("wrapper"), e.nsSelect.is("focused", e.isFocused), e.nsSelect.is("hovering", e.states.inputHovering), e.nsSelect.is("filterable", e.filterable), e.nsSelect.is("disabled", e.selectDisabled)]), onClick: Re(e.toggleMenu, ["prevent"]) }, [e.$slots.prefix ? (k(), D("div", { key: 0, ref: "prefixRef", class: $(e.nsSelect.e("prefix")) }, [X(e.$slots, "prefix")], 2)) : J("v-if", true), x("div", { ref: "selectionRef", class: $([e.nsSelect.e("selection"), e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)]) }, [e.multiple ? X(e.$slots, "tag", { key: 0 }, () => [(k(true), D(Pe, null, it(e.showTagList, (f) => (k(), D("div", { key: e.getValueKey(f), class: $(e.nsSelect.e("selected-item")) }, [z(n, { closable: !e.selectDisabled && !f.isDisabled, size: e.collapseTagSize, type: e.tagType, effect: e.tagEffect, "disable-transitions": "", style: Me(e.tagStyle), onClose: (m) => e.deleteTag(m, f) }, { default: j(() => [x("span", { class: $(e.nsSelect.e("tags-text")) }, [X(e.$slots, "label", { label: f.currentLabel, value: f.value }, () => [at(he(f.currentLabel), 1)])], 2)]), _: 2 }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])], 2))), 128)), e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (k(), oe(l, { key: 0, ref: "tagTooltipRef", disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip, "fallback-placements": ["bottom", "top", "right", "left"], effect: e.effect, placement: "bottom", teleported: e.teleported }, { default: j(() => [x("div", { ref: "collapseItemRef", class: $(e.nsSelect.e("selected-item")) }, [z(n, { closable: false, size: e.collapseTagSize, type: e.tagType, effect: e.tagEffect, "disable-transitions": "", style: Me(e.collapseTagStyle) }, { default: j(() => [x("span", { class: $(e.nsSelect.e("tags-text")) }, " + " + he(e.states.selected.length - e.maxCollapseTags), 3)]), _: 1 }, 8, ["size", "type", "effect", "style"])], 2)]), content: j(() => [x("div", { ref: "tagMenuRef", class: $(e.nsSelect.e("selection")) }, [(k(true), D(Pe, null, it(e.collapseTagList, (f) => (k(), D("div", { key: e.getValueKey(f), class: $(e.nsSelect.e("selected-item")) }, [z(n, { class: "in-tooltip", closable: !e.selectDisabled && !f.isDisabled, size: e.collapseTagSize, type: e.tagType, effect: e.tagEffect, "disable-transitions": "", onClose: (m) => e.deleteTag(m, f) }, { default: j(() => [x("span", { class: $(e.nsSelect.e("tags-text")) }, [X(e.$slots, "label", { label: f.currentLabel, value: f.value }, () => [at(he(f.currentLabel), 1)])], 2)]), _: 2 }, 1032, ["closable", "size", "type", "effect", "onClose"])], 2))), 128))], 2)]), _: 3 }, 8, ["disabled", "effect", "teleported"])) : J("v-if", true)]) : J("v-if", true), x("div", { class: $([e.nsSelect.e("selected-item"), e.nsSelect.e("input-wrapper"), e.nsSelect.is("hidden", !e.filterable)]) }, [Ye(x("input", { id: e.inputId, ref: "inputRef", "onUpdate:modelValue": (f) => e.states.inputValue = f, type: "text", name: e.name, class: $([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]), disabled: e.selectDisabled, autocomplete: e.autocomplete, style: Me(e.inputStyle), tabindex: e.tabindex, role: "combobox", readonly: !e.filterable, spellcheck: "false", "aria-activedescendant": ((d = e.hoverOption) == null ? void 0 : d.id) || "", "aria-controls": e.contentId, "aria-expanded": e.dropdownMenuVisible, "aria-label": e.ariaLabel, "aria-autocomplete": "none", "aria-haspopup": "listbox", onKeydown: [$t(Re((f) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]), $t(Re((f) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]), $t(Re(e.handleEsc, ["stop", "prevent"]), ["esc"]), $t(Re(e.selectOption, ["stop", "prevent"]), ["enter"]), $t(Re(e.deletePrevTag, ["stop"]), ["delete"])], onCompositionstart: e.handleCompositionStart, onCompositionupdate: e.handleCompositionUpdate, onCompositionend: e.handleCompositionEnd, onInput: e.onInput, onClick: Re(e.toggleMenu, ["stop"]) }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [[ns, e.states.inputValue]]), e.filterable ? (k(), D("span", { key: 0, ref: "calculatorRef", "aria-hidden": "true", class: $(e.nsSelect.e("input-calculator")), textContent: he(e.states.inputValue) }, null, 10, ["textContent"])) : J("v-if", true)], 2), e.shouldShowPlaceholder ? (k(), D("div", { key: 1, class: $([e.nsSelect.e("selected-item"), e.nsSelect.e("placeholder"), e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)]) }, [e.hasModelValue ? X(e.$slots, "label", { key: 0, label: e.currentPlaceholder, value: e.modelValue }, () => [x("span", null, he(e.currentPlaceholder), 1)]) : (k(), D("span", { key: 1 }, he(e.currentPlaceholder), 1))], 2)) : J("v-if", true)], 2), x("div", { ref: "suffixRef", class: $(e.nsSelect.e("suffix")) }, [e.iconComponent && !e.showClose ? (k(), oe(a, { key: 0, class: $([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse]) }, { default: j(() => [(k(), oe(Je(e.iconComponent)))]), _: 1 }, 8, ["class"])) : J("v-if", true), e.showClose && e.clearIcon ? (k(), oe(a, { key: 1, class: $([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.nsSelect.e("clear")]), onClick: e.handleClearClick }, { default: j(() => [(k(), oe(Je(e.clearIcon)))]), _: 1 }, 8, ["class", "onClick"])) : J("v-if", true), e.validateState && e.validateIcon && e.needStatusIcon ? (k(), oe(a, { key: 2, class: $([e.nsInput.e("icon"), e.nsInput.e("validateIcon"), e.nsInput.is("loading", e.validateState === "validating")]) }, { default: j(() => [(k(), oe(Je(e.validateIcon)))]), _: 1 }, 8, ["class"])) : J("v-if", true)], 2)], 10, ["onClick"])];
  }), content: j(() => [z(u, { ref: "menuRef" }, { default: j(() => [e.$slots.header ? (k(), D("div", { key: 0, class: $(e.nsSelect.be("dropdown", "header")), onClick: Re(() => {
  }, ["stop"]) }, [X(e.$slots, "header")], 10, ["onClick"])) : J("v-if", true), Ye(z(i, { id: e.contentId, ref: "scrollbarRef", tag: "ul", "wrap-class": e.nsSelect.be("dropdown", "wrap"), "view-class": e.nsSelect.be("dropdown", "list"), class: $([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]), role: "listbox", "aria-label": e.ariaLabel, "aria-orientation": "vertical", onScroll: e.popupScroll }, { default: j(() => [e.showNewOption ? (k(), oe(s, { key: 0, value: e.states.inputValue, created: true }, null, 8, ["value"])) : J("v-if", true), z(r, null, { default: j(() => [X(e.$slots, "default")]), _: 3 })]), _: 3 }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [[pt, e.states.options.size > 0 && !e.loading]]), e.$slots.loading && e.loading ? (k(), D("div", { key: 1, class: $(e.nsSelect.be("dropdown", "loading")) }, [X(e.$slots, "loading")], 2)) : e.loading || e.filteredOptionsCount === 0 ? (k(), D("div", { key: 2, class: $(e.nsSelect.be("dropdown", "empty")) }, [X(e.$slots, "empty", {}, () => [x("span", null, he(e.emptyText), 1)])], 2)) : J("v-if", true), e.$slots.footer ? (k(), D("div", { key: 3, class: $(e.nsSelect.be("dropdown", "footer")), onClick: Re(() => {
  }, ["stop"]) }, [X(e.$slots, "footer")], 10, ["onClick"])) : J("v-if", true)]), _: 3 }, 512)]), _: 3 }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])], 16, ["onMouseleave"])), [[c, e.handleClickOutside, e.popperRef]]);
}
var B1 = ve(R1, [["render", L1], ["__file", "select.vue"]]);
const D1 = K({ name: "ElOptionGroup", componentName: "ElOptionGroup", props: { label: String, disabled: Boolean }, setup(e) {
  const t = de("select"), n = N(), l = tt(), a = N([]);
  ut(Xf, Ct({ ...tn(e) }));
  const s = y(() => a.value.some((c) => c.visible === true)), r = (c) => {
    var d;
    return c.type.name === "ElOption" && !!((d = c.component) != null && d.proxy);
  }, i = (c) => {
    const d = pn(c), f = [];
    return d.forEach((m) => {
      var h;
      Dt(m) && (r(m) ? f.push(m.component.proxy) : Se(m.children) && m.children.length ? f.push(...i(m.children)) : (h = m.component) != null && h.subTree && f.push(...i(m.component.subTree)));
    }), f;
  }, u = () => {
    a.value = i(l.subTree);
  };
  return Xe(() => {
    u();
  }), ed(n, u, { attributes: true, subtree: true, childList: true }), { groupRef: n, visible: s, ns: t };
} });
function V1(e, t, n, l, a, s) {
  return Ye((k(), D("ul", { ref: "groupRef", class: $(e.ns.be("group", "wrap")) }, [x("li", { class: $(e.ns.be("group", "title")) }, he(e.label), 3), x("li", null, [x("ul", { class: $(e.ns.b("group")) }, [X(e.$slots, "default")], 2)])], 2)), [[pt, e.visible]]);
}
var Zf = ve(D1, [["render", V1], ["__file", "option-group.vue"]]);
const jl = We(B1, { Option: Si, OptionGroup: Zf }), Ka = Vt(Si), A1 = Vt(Zf), ki = () => we(Gf, {}), F1 = pe({ pageSize: { type: Number, required: true }, pageSizes: { type: Y(Array), default: () => Bt([10, 20, 30, 40, 50, 100]) }, popperClass: { type: String }, disabled: Boolean, teleported: Boolean, size: { type: String, values: Qn }, appendSizeTo: String }), z1 = K({ name: "ElPaginationSizes" }), x1 = K({ ...z1, props: F1, emits: ["page-size-change"], setup(e, { emit: t }) {
  const n = e, { t: l } = ft(), a = de("pagination"), s = ki(), r = N(n.pageSize);
  ue(() => n.pageSizes, (c, d) => {
    if (!Zt(c, d) && Se(c)) {
      const f = c.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
      t("page-size-change", f);
    }
  }), ue(() => n.pageSize, (c) => {
    r.value = c;
  });
  const i = y(() => n.pageSizes);
  function u(c) {
    var d;
    c !== r.value && (r.value = c, (d = s.handleSizeChange) == null || d.call(s, Number(c)));
  }
  return (c, d) => (k(), D("span", { class: $(o(a).e("sizes")) }, [z(o(jl), { "model-value": r.value, disabled: c.disabled, "popper-class": c.popperClass, size: c.size, teleported: c.teleported, "validate-event": false, "append-to": c.appendSizeTo, onChange: u }, { default: j(() => [(k(true), D(Pe, null, it(o(i), (f) => (k(), oe(o(Ka), { key: f, value: f, label: f + o(l)("el.pagination.pagesize") }, null, 8, ["value", "label"]))), 128))]), _: 1 }, 8, ["model-value", "disabled", "popper-class", "size", "teleported", "append-to"])], 2));
} });
var H1 = ve(x1, [["__file", "sizes.vue"]]);
const K1 = pe({ size: { type: String, values: Qn } }), W1 = K({ name: "ElPaginationJumper" }), j1 = K({ ...W1, props: K1, setup(e) {
  const { t } = ft(), n = de("pagination"), { pageCount: l, disabled: a, currentPage: s, changeEvent: r } = ki(), i = N(), u = y(() => {
    var f;
    return (f = i.value) != null ? f : s == null ? void 0 : s.value;
  });
  function c(f) {
    i.value = f ? +f : "";
  }
  function d(f) {
    f = Math.trunc(+f), r == null ? void 0 : r(f), i.value = void 0;
  }
  return (f, m) => (k(), D("span", { class: $(o(n).e("jump")), disabled: o(a) }, [x("span", { class: $([o(n).e("goto")]) }, he(o(t)("el.pagination.goto")), 3), z(o(hn), { size: f.size, class: $([o(n).e("editor"), o(n).is("in-pagination")]), min: 1, max: o(l), disabled: o(a), "model-value": o(u), "validate-event": false, "aria-label": o(t)("el.pagination.page"), type: "number", "onUpdate:modelValue": c, onChange: d }, null, 8, ["size", "class", "max", "disabled", "model-value", "aria-label"]), x("span", { class: $([o(n).e("classifier")]) }, he(o(t)("el.pagination.pageClassifier")), 3)], 10, ["disabled"]));
} });
var U1 = ve(j1, [["__file", "jumper.vue"]]);
const Y1 = pe({ total: { type: Number, default: 1e3 } }), q1 = K({ name: "ElPaginationTotal" }), G1 = K({ ...q1, props: Y1, setup(e) {
  const { t } = ft(), n = de("pagination"), { disabled: l } = ki();
  return (a, s) => (k(), D("span", { class: $(o(n).e("total")), disabled: o(l) }, he(o(t)("el.pagination.total", { total: a.total })), 11, ["disabled"]));
} });
var X1 = ve(G1, [["__file", "total.vue"]]);
const Z1 = pe({ currentPage: { type: Number, default: 1 }, pageCount: { type: Number, required: true }, pagerCount: { type: Number, default: 7 }, disabled: Boolean }), J1 = K({ name: "ElPaginationPager" }), Q1 = K({ ...J1, props: Z1, emits: [et], setup(e, { emit: t }) {
  const n = e, l = de("pager"), a = de("icon"), { t: s } = ft(), r = N(false), i = N(false), u = N(false), c = N(false), d = N(false), f = N(false), m = y(() => {
    const C = n.pagerCount, S = (C - 1) / 2, E = Number(n.currentPage), M = Number(n.pageCount);
    let O = false, _ = false;
    M > C && (E > C - S && (O = true), E < M - S && (_ = true));
    const I = [];
    if (O && !_) {
      const R = M - (C - 2);
      for (let P = R; P < M; P++) I.push(P);
    } else if (!O && _) for (let R = 2; R < C; R++) I.push(R);
    else if (O && _) {
      const R = Math.floor(C / 2) - 1;
      for (let P = E - R; P <= E + R; P++) I.push(P);
    } else for (let R = 2; R < M; R++) I.push(R);
    return I;
  }), h = y(() => ["more", "btn-quickprev", a.b(), l.is("disabled", n.disabled)]), v = y(() => ["more", "btn-quicknext", a.b(), l.is("disabled", n.disabled)]), p = y(() => n.disabled ? -1 : 0);
  an(() => {
    const C = (n.pagerCount - 1) / 2;
    r.value = false, i.value = false, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - C && (r.value = true), n.currentPage < n.pageCount - C && (i.value = true));
  });
  function b(C = false) {
    n.disabled || (C ? u.value = true : c.value = true);
  }
  function g(C = false) {
    C ? d.value = true : f.value = true;
  }
  function T(C) {
    const S = C.target;
    if (S.tagName.toLowerCase() === "li" && Array.from(S.classList).includes("number")) {
      const E = Number(S.textContent);
      E !== n.currentPage && t(et, E);
    } else S.tagName.toLowerCase() === "li" && Array.from(S.classList).includes("more") && w(C);
  }
  function w(C) {
    const S = C.target;
    if (S.tagName.toLowerCase() === "ul" || n.disabled) return;
    let E = Number(S.textContent);
    const M = n.pageCount, O = n.currentPage, _ = n.pagerCount - 2;
    S.className.includes("more") && (S.className.includes("quickprev") ? E = O - _ : S.className.includes("quicknext") && (E = O + _)), Number.isNaN(+E) || (E < 1 && (E = 1), E > M && (E = M)), E !== O && t(et, E);
  }
  return (C, S) => (k(), D("ul", { class: $(o(l).b()), onClick: w, onKeyup: $t(T, ["enter"]) }, [C.pageCount > 0 ? (k(), D("li", { key: 0, class: $([[o(l).is("active", C.currentPage === 1), o(l).is("disabled", C.disabled)], "number"]), "aria-current": C.currentPage === 1, "aria-label": o(s)("el.pagination.currentPage", { pager: 1 }), tabindex: o(p) }, " 1 ", 10, ["aria-current", "aria-label", "tabindex"])) : J("v-if", true), r.value ? (k(), D("li", { key: 1, class: $(o(h)), tabindex: o(p), "aria-label": o(s)("el.pagination.prevPages", { pager: C.pagerCount - 2 }), onMouseenter: (E) => b(true), onMouseleave: (E) => u.value = false, onFocus: (E) => g(true), onBlur: (E) => d.value = false }, [(u.value || d.value) && !C.disabled ? (k(), oe(o($l), { key: 0 })) : (k(), oe(o(qi), { key: 1 }))], 42, ["tabindex", "aria-label", "onMouseenter", "onMouseleave", "onFocus", "onBlur"])) : J("v-if", true), (k(true), D(Pe, null, it(o(m), (E) => (k(), D("li", { key: E, class: $([[o(l).is("active", C.currentPage === E), o(l).is("disabled", C.disabled)], "number"]), "aria-current": C.currentPage === E, "aria-label": o(s)("el.pagination.currentPage", { pager: E }), tabindex: o(p) }, he(E), 11, ["aria-current", "aria-label", "tabindex"]))), 128)), i.value ? (k(), D("li", { key: 2, class: $(o(v)), tabindex: o(p), "aria-label": o(s)("el.pagination.nextPages", { pager: C.pagerCount - 2 }), onMouseenter: (E) => b(), onMouseleave: (E) => c.value = false, onFocus: (E) => g(), onBlur: (E) => f.value = false }, [(c.value || f.value) && !C.disabled ? (k(), oe(o(Tl), { key: 0 })) : (k(), oe(o(qi), { key: 1 }))], 42, ["tabindex", "aria-label", "onMouseenter", "onMouseleave", "onFocus", "onBlur"])) : J("v-if", true), C.pageCount > 1 ? (k(), D("li", { key: 3, class: $([[o(l).is("active", C.currentPage === C.pageCount), o(l).is("disabled", C.disabled)], "number"]), "aria-current": C.currentPage === C.pageCount, "aria-label": o(s)("el.pagination.currentPage", { pager: C.pageCount }), tabindex: o(p) }, he(C.pageCount), 11, ["aria-current", "aria-label", "tabindex"])) : J("v-if", true)], 42, ["onKeyup"]));
} });
var e$ = ve(Q1, [["__file", "pager.vue"]]);
const yn = (e) => typeof e != "number", t$ = pe({ pageSize: Number, defaultPageSize: Number, total: Number, pageCount: Number, pagerCount: { type: Number, validator: (e) => _e(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1, default: 7 }, currentPage: Number, defaultCurrentPage: Number, layout: { type: String, default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ") }, pageSizes: { type: Y(Array), default: () => Bt([10, 20, 30, 40, 50, 100]) }, popperClass: { type: String, default: "" }, prevText: { type: String, default: "" }, prevIcon: { type: St, default: () => El }, nextText: { type: String, default: "" }, nextIcon: { type: St, default: () => kn }, teleported: { type: Boolean, default: true }, small: Boolean, size: Wt, background: Boolean, disabled: Boolean, hideOnSinglePage: Boolean, appendSizeTo: String }), n$ = { "update:current-page": (e) => _e(e), "update:page-size": (e) => _e(e), "size-change": (e) => _e(e), change: (e, t) => _e(e) && _e(t), "current-change": (e) => _e(e), "prev-click": (e) => _e(e), "next-click": (e) => _e(e) }, Xu = "ElPagination";
var l$ = K({ name: Xu, props: t$, emits: n$, setup(e, { emit: t, slots: n }) {
  const { t: l } = ft(), a = de("pagination"), s = tt().vnode.props || {}, r = rd(), i = y(() => {
    var S;
    return e.small ? "small" : (S = e.size) != null ? S : r.value;
  });
  wl({ from: "small", replacement: "size", version: "3.0.0", scope: "el-pagination", ref: "https://element-plus.org/zh-CN/component/pagination.html" }, y(() => !!e.small));
  const u = "onUpdate:currentPage" in s || "onUpdate:current-page" in s || "onCurrentChange" in s, c = "onUpdate:pageSize" in s || "onUpdate:page-size" in s || "onSizeChange" in s, d = y(() => {
    if (yn(e.total) && yn(e.pageCount) || !yn(e.currentPage) && !u) return false;
    if (e.layout.includes("sizes")) {
      if (yn(e.pageCount)) {
        if (!yn(e.total) && !yn(e.pageSize) && !c) return false;
      } else if (!c) return false;
    }
    return true;
  }), f = N(yn(e.defaultPageSize) ? 10 : e.defaultPageSize), m = N(yn(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), h = y({ get() {
    return yn(e.pageSize) ? f.value : e.pageSize;
  }, set(S) {
    yn(e.pageSize) && (f.value = S), c && (t("update:page-size", S), t("size-change", S));
  } }), v = y(() => {
    let S = 0;
    return yn(e.pageCount) ? yn(e.total) || (S = Math.max(1, Math.ceil(e.total / h.value))) : S = e.pageCount, S;
  }), p = y({ get() {
    return yn(e.currentPage) ? m.value : e.currentPage;
  }, set(S) {
    let E = S;
    S < 1 ? E = 1 : S > v.value && (E = v.value), yn(e.currentPage) && (m.value = E), u && (t("update:current-page", E), t("current-change", E));
  } });
  ue(v, (S) => {
    p.value > S && (p.value = S);
  }), ue([p, h], (S) => {
    t(et, ...S);
  }, { flush: "post" });
  function b(S) {
    p.value = S;
  }
  function g(S) {
    h.value = S;
    const E = v.value;
    p.value > E && (p.value = E);
  }
  function T() {
    e.disabled || (p.value -= 1, t("prev-click", p.value));
  }
  function w() {
    e.disabled || (p.value += 1, t("next-click", p.value));
  }
  function C(S, E) {
    S && (S.props || (S.props = {}), S.props.class = [S.props.class, E].join(" "));
  }
  return ut(Gf, { pageCount: v, disabled: y(() => e.disabled), currentPage: p, changeEvent: b, handleSizeChange: g }), () => {
    var S, E;
    if (!d.value) return l("el.pagination.deprecationWarning"), null;
    if (!e.layout || e.hideOnSinglePage && v.value <= 1) return null;
    const M = [], O = [], _ = Oe("div", { class: a.e("rightwrapper") }, O), I = { prev: Oe(b1, { disabled: e.disabled, currentPage: p.value, prevText: e.prevText, prevIcon: e.prevIcon, onClick: T }), jumper: Oe(U1, { size: i.value }), pager: Oe(e$, { currentPage: p.value, pageCount: v.value, pagerCount: e.pagerCount, onChange: b, disabled: e.disabled }), next: Oe(S1, { disabled: e.disabled, currentPage: p.value, pageCount: v.value, nextText: e.nextText, nextIcon: e.nextIcon, onClick: w }), sizes: Oe(H1, { pageSize: h.value, pageSizes: e.pageSizes, popperClass: e.popperClass, disabled: e.disabled, teleported: e.teleported, size: i.value, appendSizeTo: e.appendSizeTo }), slot: (E = (S = n == null ? void 0 : n.default) == null ? void 0 : S.call(n)) != null ? E : null, total: Oe(X1, { total: yn(e.total) ? 0 : e.total }) }, R = e.layout.split(",").map((W) => W.trim());
    let P = false;
    return R.forEach((W) => {
      if (W === "->") {
        P = true;
        return;
      }
      P ? O.push(I[W]) : M.push(I[W]);
    }), C(M[0], a.is("first")), C(M[M.length - 1], a.is("last")), P && O.length > 0 && (C(O[0], a.is("first")), C(O[O.length - 1], a.is("last")), M.push(_)), Oe("div", { class: [a.b(), a.is("background", e.background), a.m(i.value)] }, M);
  };
} });
const o$ = We(l$), a$ = pe({ title: String, confirmButtonText: String, cancelButtonText: String, confirmButtonType: { type: String, values: Zs, default: "primary" }, cancelButtonType: { type: String, values: Zs, default: "text" }, icon: { type: St, default: () => th }, iconColor: { type: String, default: "#f90" }, hideIcon: { type: Boolean, default: false }, hideAfter: { type: Number, default: 200 }, teleported: Xt.teleported, persistent: Xt.persistent, width: { type: [String, Number], default: 150 } }), s$ = { confirm: (e) => e instanceof MouseEvent, cancel: (e) => e instanceof MouseEvent }, r$ = K({ name: "ElPopconfirm" }), i$ = K({ ...r$, props: a$, emits: s$, setup(e, { emit: t }) {
  const n = e, { t: l } = ft(), a = de("popconfirm"), s = N(), r = () => {
    var m, h;
    (h = (m = s.value) == null ? void 0 : m.onClose) == null || h.call(m);
  }, i = y(() => ({ width: At(n.width) })), u = (m) => {
    t("confirm", m), r();
  }, c = (m) => {
    t("cancel", m), r();
  }, d = y(() => n.confirmButtonText || l("el.popconfirm.confirmButtonText")), f = y(() => n.cancelButtonText || l("el.popconfirm.cancelButtonText"));
  return (m, h) => (k(), oe(o(rn), lt({ ref_key: "tooltipRef", ref: s, trigger: "click", effect: "light" }, m.$attrs, { "popper-class": `${o(a).namespace.value}-popover`, "popper-style": o(i), teleported: m.teleported, "fallback-placements": ["bottom", "top", "right", "left"], "hide-after": m.hideAfter, persistent: m.persistent }), { content: j(() => [x("div", { class: $(o(a).b()) }, [x("div", { class: $(o(a).e("main")) }, [!m.hideIcon && m.icon ? (k(), oe(o(Ee), { key: 0, class: $(o(a).e("icon")), style: Me({ color: m.iconColor }) }, { default: j(() => [(k(), oe(Je(m.icon)))]), _: 1 }, 8, ["class", "style"])) : J("v-if", true), at(" " + he(m.title), 1)], 2), x("div", { class: $(o(a).e("action")) }, [X(m.$slots, "actions", { confirm: u, cancel: c }, () => [z(o(Qt), { size: "small", type: m.cancelButtonType === "text" ? "" : m.cancelButtonType, text: m.cancelButtonType === "text", onClick: c }, { default: j(() => [at(he(o(f)), 1)]), _: 1 }, 8, ["type", "text"]), z(o(Qt), { size: "small", type: m.confirmButtonType === "text" ? "" : m.confirmButtonType, text: m.confirmButtonType === "text", onClick: u }, { default: j(() => [at(he(o(d)), 1)]), _: 1 }, 8, ["type", "text"])])], 2)], 2)]), default: j(() => [m.$slots.reference ? X(m.$slots, "reference", { key: 0 }) : J("v-if", true)]), _: 3 }, 16, ["popper-class", "popper-style", "teleported", "hide-after", "persistent"]));
} });
var u$ = ve(i$, [["__file", "popconfirm.vue"]]);
const c$ = We(u$), d$ = pe({ trigger: co.trigger, triggerKeys: co.triggerKeys, placement: Ta.placement, disabled: co.disabled, visible: Xt.visible, transition: Xt.transition, popperOptions: Ta.popperOptions, tabindex: Ta.tabindex, content: Xt.content, popperStyle: Xt.popperStyle, popperClass: Xt.popperClass, enterable: { ...Xt.enterable, default: true }, effect: { ...Xt.effect, default: "light" }, teleported: Xt.teleported, title: String, width: { type: [String, Number], default: 150 }, offset: { type: Number, default: void 0 }, showAfter: { type: Number, default: 0 }, hideAfter: { type: Number, default: 200 }, autoClose: { type: Number, default: 0 }, showArrow: { type: Boolean, default: true }, persistent: { type: Boolean, default: true }, "onUpdate:visible": { type: Function } }), f$ = { "update:visible": (e) => Tt(e), "before-enter": () => true, "before-leave": () => true, "after-enter": () => true, "after-leave": () => true }, p$ = "onUpdate:visible", v$ = K({ name: "ElPopover" }), h$ = K({ ...v$, props: d$, emits: f$, setup(e, { expose: t, emit: n }) {
  const l = e, a = y(() => l[p$]), s = de("popover"), r = N(), i = y(() => {
    var b;
    return (b = o(r)) == null ? void 0 : b.popperRef;
  }), u = y(() => [{ width: At(l.width) }, l.popperStyle]), c = y(() => [s.b(), l.popperClass, { [s.m("plain")]: !!l.content }]), d = y(() => l.transition === `${s.namespace.value}-fade-in-linear`), f = () => {
    var b;
    (b = r.value) == null || b.hide();
  }, m = () => {
    n("before-enter");
  }, h = () => {
    n("before-leave");
  }, v = () => {
    n("after-enter");
  }, p = () => {
    n("update:visible", false), n("after-leave");
  };
  return t({ popperRef: i, hide: f }), (b, g) => (k(), oe(o(rn), lt({ ref_key: "tooltipRef", ref: r }, b.$attrs, { trigger: b.trigger, "trigger-keys": b.triggerKeys, placement: b.placement, disabled: b.disabled, visible: b.visible, transition: b.transition, "popper-options": b.popperOptions, tabindex: b.tabindex, content: b.content, offset: b.offset, "show-after": b.showAfter, "hide-after": b.hideAfter, "auto-close": b.autoClose, "show-arrow": b.showArrow, "aria-label": b.title, effect: b.effect, enterable: b.enterable, "popper-class": o(c), "popper-style": o(u), teleported: b.teleported, persistent: b.persistent, "gpu-acceleration": o(d), "onUpdate:visible": o(a), onBeforeShow: m, onBeforeHide: h, onShow: v, onHide: p }), { content: j(() => [b.title ? (k(), D("div", { key: 0, class: $(o(s).e("title")), role: "title" }, he(b.title), 3)) : J("v-if", true), X(b.$slots, "default", {}, () => [at(he(b.content), 1)])]), default: j(() => [b.$slots.reference ? X(b.$slots, "reference", { key: 0 }) : J("v-if", true)]), _: 3 }, 16, ["trigger", "trigger-keys", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
} });
var m$ = ve(h$, [["__file", "popover.vue"]]);
const Zu = (e, t) => {
  const n = t.arg || t.value, l = n == null ? void 0 : n.popperRef;
  l && (l.triggerRef = e);
};
var g$ = { mounted(e, t) {
  Zu(e, t);
}, updated(e, t) {
  Zu(e, t);
} };
const b$ = "popover", Jf = Em(g$, b$), y$ = We(m$, { directive: Jf }), C$ = pe({ type: { type: String, default: "line", values: ["line", "circle", "dashboard"] }, percentage: { type: Number, default: 0, validator: (e) => e >= 0 && e <= 100 }, status: { type: String, default: "", values: ["", "success", "exception", "warning"] }, indeterminate: Boolean, duration: { type: Number, default: 3 }, strokeWidth: { type: Number, default: 6 }, strokeLinecap: { type: Y(String), default: "round" }, textInside: Boolean, width: { type: Number, default: 126 }, showText: { type: Boolean, default: true }, color: { type: Y([String, Array, Function]), default: "" }, striped: Boolean, stripedFlow: Boolean, format: { type: Y(Function), default: (e) => `${e}%` } }), w$ = K({ name: "ElProgress" }), S$ = K({ ...w$, props: C$, setup(e) {
  const t = e, n = { success: "#13ce66", exception: "#ff4949", warning: "#e6a23c", default: "#20a0ff" }, l = de("progress"), a = y(() => {
    const w = { width: `${t.percentage}%`, animationDuration: `${t.duration}s` }, C = T(t.percentage);
    return C.includes("gradient") ? w.background = C : w.backgroundColor = C, w;
  }), s = y(() => (t.strokeWidth / t.width * 100).toFixed(1)), r = y(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(`${50 - Number.parseFloat(s.value) / 2}`, 10) : 0), i = y(() => {
    const w = r.value, C = t.type === "dashboard";
    return `
          M 50 50
          m 0 ${C ? "" : "-"}${w}
          a ${w} ${w} 0 1 1 0 ${C ? "-" : ""}${w * 2}
          a ${w} ${w} 0 1 1 0 ${C ? "" : "-"}${w * 2}
          `;
  }), u = y(() => 2 * Math.PI * r.value), c = y(() => t.type === "dashboard" ? 0.75 : 1), d = y(() => `${-1 * u.value * (1 - c.value) / 2}px`), f = y(() => ({ strokeDasharray: `${u.value * c.value}px, ${u.value}px`, strokeDashoffset: d.value })), m = y(() => ({ strokeDasharray: `${u.value * c.value * (t.percentage / 100)}px, ${u.value}px`, strokeDashoffset: d.value, transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s" })), h = y(() => {
    let w;
    return t.color ? w = T(t.percentage) : w = n[t.status] || n.default, w;
  }), v = y(() => t.status === "warning" ? os : t.type === "line" ? t.status === "success" ? Fr : dl : t.status === "success" ? na : An), p = y(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), b = y(() => t.format(t.percentage));
  function g(w) {
    const C = 100 / w.length;
    return w.map((E, M) => Be(E) ? { color: E, percentage: (M + 1) * C } : E).sort((E, M) => E.percentage - M.percentage);
  }
  const T = (w) => {
    var C;
    const { color: S } = t;
    if (Qe(S)) return S(w);
    if (Be(S)) return S;
    {
      const E = g(S);
      for (const M of E) if (M.percentage > w) return M.color;
      return (C = E[E.length - 1]) == null ? void 0 : C.color;
    }
  };
  return (w, C) => (k(), D("div", { class: $([o(l).b(), o(l).m(w.type), o(l).is(w.status), { [o(l).m("without-text")]: !w.showText, [o(l).m("text-inside")]: w.textInside }]), role: "progressbar", "aria-valuenow": w.percentage, "aria-valuemin": "0", "aria-valuemax": "100" }, [w.type === "line" ? (k(), D("div", { key: 0, class: $(o(l).b("bar")) }, [x("div", { class: $(o(l).be("bar", "outer")), style: Me({ height: `${w.strokeWidth}px` }) }, [x("div", { class: $([o(l).be("bar", "inner"), { [o(l).bem("bar", "inner", "indeterminate")]: w.indeterminate }, { [o(l).bem("bar", "inner", "striped")]: w.striped }, { [o(l).bem("bar", "inner", "striped-flow")]: w.stripedFlow }]), style: Me(o(a)) }, [(w.showText || w.$slots.default) && w.textInside ? (k(), D("div", { key: 0, class: $(o(l).be("bar", "innerText")) }, [X(w.$slots, "default", { percentage: w.percentage }, () => [x("span", null, he(o(b)), 1)])], 2)) : J("v-if", true)], 6)], 6)], 2)) : (k(), D("div", { key: 1, class: $(o(l).b("circle")), style: Me({ height: `${w.width}px`, width: `${w.width}px` }) }, [(k(), D("svg", { viewBox: "0 0 100 100" }, [x("path", { class: $(o(l).be("circle", "track")), d: o(i), stroke: `var(${o(l).cssVarName("fill-color-light")}, #e5e9f2)`, "stroke-linecap": w.strokeLinecap, "stroke-width": o(s), fill: "none", style: Me(o(f)) }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]), x("path", { class: $(o(l).be("circle", "path")), d: o(i), stroke: o(h), fill: "none", opacity: w.percentage ? 1 : 0, "stroke-linecap": w.strokeLinecap, "stroke-width": o(s), style: Me(o(m)) }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])]))], 6)), (w.showText || w.$slots.default) && !w.textInside ? (k(), D("div", { key: 2, class: $(o(l).e("text")), style: Me({ fontSize: `${o(p)}px` }) }, [X(w.$slots, "default", { percentage: w.percentage }, () => [w.status ? (k(), oe(o(Ee), { key: 1 }, { default: j(() => [(k(), oe(Je(o(v))))]), _: 1 })) : (k(), D("span", { key: 0 }, he(o(b)), 1))])], 6)) : J("v-if", true)], 10, ["aria-valuenow"]));
} });
var k$ = ve(S$, [["__file", "progress.vue"]]);
const Qf = We(k$), E$ = pe({ modelValue: { type: Number, default: 0 }, id: { type: String, default: void 0 }, lowThreshold: { type: Number, default: 2 }, highThreshold: { type: Number, default: 4 }, max: { type: Number, default: 5 }, colors: { type: Y([Array, Object]), default: () => Bt(["", "", ""]) }, voidColor: { type: String, default: "" }, disabledVoidColor: { type: String, default: "" }, icons: { type: Y([Array, Object]), default: () => [da, da, da] }, voidIcon: { type: St, default: () => nh }, disabledVoidIcon: { type: St, default: () => da }, disabled: Boolean, allowHalf: Boolean, showText: Boolean, showScore: Boolean, textColor: { type: String, default: "" }, texts: { type: Y(Array), default: () => Bt(["Extremely bad", "Disappointed", "Fair", "Satisfied", "Surprise"]) }, scoreTemplate: { type: String, default: "{value}" }, size: Wt, clearable: Boolean, ...ln(["ariaLabel"]) }), $$ = { [et]: (e) => _e(e), [Ae]: (e) => _e(e) }, T$ = K({ name: "ElRate" }), N$ = K({ ...T$, props: E$, emits: $$, setup(e, { expose: t, emit: n }) {
  const l = e;
  function a(L, F) {
    const V = (U) => gt(U), B = Object.keys(F).map((U) => +U).filter((U) => {
      const ne = F[U];
      return (V(ne) ? ne.excluded : false) ? L < U : L <= U;
    }).sort((U, ne) => U - ne), G = F[B[0]];
    return V(G) && G.value || G;
  }
  const s = we(ql, void 0), r = we(Jn, void 0), i = Ht(), u = de("rate"), { inputId: c, isLabeledByFormItem: d } = zn(l, { formItemContext: r }), f = N(l.modelValue), m = N(-1), h = N(true), v = y(() => [u.b(), u.m(i.value)]), p = y(() => l.disabled || (s == null ? void 0 : s.disabled)), b = y(() => u.cssVarBlock({ "void-color": l.voidColor, "disabled-void-color": l.disabledVoidColor, "fill-color": C.value })), g = y(() => {
    let L = "";
    return l.showScore ? L = l.scoreTemplate.replace(/\{\s*value\s*\}/, p.value ? `${l.modelValue}` : `${f.value}`) : l.showText && (L = l.texts[Math.ceil(f.value) - 1]), L;
  }), T = y(() => l.modelValue * 100 - Math.floor(l.modelValue) * 100), w = y(() => Se(l.colors) ? { [l.lowThreshold]: l.colors[0], [l.highThreshold]: { value: l.colors[1], excluded: true }, [l.max]: l.colors[2] } : l.colors), C = y(() => {
    const L = a(f.value, w.value);
    return gt(L) ? "" : L;
  }), S = y(() => {
    let L = "";
    return p.value ? L = `${T.value}%` : l.allowHalf && (L = "50%"), { color: C.value, width: L };
  }), E = y(() => {
    let L = Se(l.icons) ? [...l.icons] : { ...l.icons };
    return L = Cl(L), Se(L) ? { [l.lowThreshold]: L[0], [l.highThreshold]: { value: L[1], excluded: true }, [l.max]: L[2] } : L;
  }), M = y(() => a(l.modelValue, E.value)), O = y(() => p.value ? Be(l.disabledVoidIcon) ? l.disabledVoidIcon : Cl(l.disabledVoidIcon) : Be(l.voidIcon) ? l.voidIcon : Cl(l.voidIcon)), _ = y(() => a(f.value, E.value));
  function I(L) {
    const F = p.value && T.value > 0 && L - 1 < l.modelValue && L > l.modelValue, V = l.allowHalf && h.value && L - 0.5 <= f.value && L > f.value;
    return F || V;
  }
  function R(L) {
    l.clearable && L === l.modelValue && (L = 0), n(Ae, L), l.modelValue !== L && n(et, L);
  }
  function P(L) {
    p.value || (l.allowHalf && h.value ? R(f.value) : R(L));
  }
  function W(L) {
    if (p.value) return;
    let F = f.value;
    const V = L.code;
    return V === ye.up || V === ye.right ? (l.allowHalf ? F += 0.5 : F += 1, L.stopPropagation(), L.preventDefault()) : (V === ye.left || V === ye.down) && (l.allowHalf ? F -= 0.5 : F -= 1, L.stopPropagation(), L.preventDefault()), F = F < 0 ? 0 : F, F = F > l.max ? l.max : F, n(Ae, F), n(et, F), F;
  }
  function te(L, F) {
    if (!p.value) {
      if (l.allowHalf && F) {
        let V = F.target;
        Nn(V, u.e("item")) && (V = V.querySelector(`.${u.e("icon")}`)), (V.clientWidth === 0 || Nn(V, u.e("decimal"))) && (V = V.parentNode), h.value = F.offsetX * 2 <= V.clientWidth, f.value = h.value ? L - 0.5 : L;
      } else f.value = L;
      m.value = L;
    }
  }
  function A() {
    p.value || (l.allowHalf && (h.value = l.modelValue !== Math.floor(l.modelValue)), f.value = l.modelValue, m.value = -1);
  }
  return ue(() => l.modelValue, (L) => {
    f.value = L, h.value = l.modelValue !== Math.floor(l.modelValue);
  }), l.modelValue || n(Ae, 0), t({ setCurrentValue: te, resetCurrentValue: A }), (L, F) => {
    var V;
    return k(), D("div", { id: o(c), class: $([o(v), o(u).is("disabled", o(p))]), role: "slider", "aria-label": o(d) ? void 0 : L.ariaLabel || "rating", "aria-labelledby": o(d) ? (V = o(r)) == null ? void 0 : V.labelId : void 0, "aria-valuenow": f.value, "aria-valuetext": o(g) || void 0, "aria-valuemin": "0", "aria-valuemax": L.max, tabindex: "0", style: Me(o(b)), onKeydown: W }, [(k(true), D(Pe, null, it(L.max, (B, G) => (k(), D("span", { key: G, class: $(o(u).e("item")), onMousemove: (U) => te(B, U), onMouseleave: A, onClick: (U) => P(B) }, [z(o(Ee), { class: $([o(u).e("icon"), { hover: m.value === B }, o(u).is("active", B <= f.value)]) }, { default: j(() => [I(B) ? J("v-if", true) : (k(), D(Pe, { key: 0 }, [Ye((k(), oe(Je(o(_)), null, null, 512)), [[pt, B <= f.value]]), Ye((k(), oe(Je(o(O)), null, null, 512)), [[pt, !(B <= f.value)]])], 64)), I(B) ? (k(), D(Pe, { key: 1 }, [(k(), oe(Je(o(O)), { class: $([o(u).em("decimal", "box")]) }, null, 8, ["class"])), z(o(Ee), { style: Me(o(S)), class: $([o(u).e("icon"), o(u).e("decimal")]) }, { default: j(() => [(k(), oe(Je(o(M))))]), _: 1 }, 8, ["style", "class"])], 64)) : J("v-if", true)]), _: 2 }, 1032, ["class"])], 42, ["onMousemove", "onClick"]))), 128)), L.showText || L.showScore ? (k(), D("span", { key: 0, class: $(o(u).e("text")), style: Me({ color: L.textColor }) }, he(o(g)), 7)) : J("v-if", true)], 46, ["id", "aria-label", "aria-labelledby", "aria-valuenow", "aria-valuetext", "aria-valuemax"]);
  };
} });
var I$ = ve(N$, [["__file", "rate.vue"]]);
const _$ = We(I$), ro = { success: "icon-success", warning: "icon-warning", error: "icon-error", info: "icon-info" }, Ju = { [ro.success]: lh, [ro.warning]: os, [ro.error]: Ar, [ro.info]: Vr }, M$ = pe({ title: { type: String, default: "" }, subTitle: { type: String, default: "" }, icon: { type: String, values: ["success", "warning", "info", "error"], default: "info" } }), O$ = K({ name: "ElResult" }), P$ = K({ ...O$, props: M$, setup(e) {
  const t = e, n = de("result"), l = y(() => {
    const a = t.icon, s = a && ro[a] ? ro[a] : "icon-info", r = Ju[s] || Ju["icon-info"];
    return { class: s, component: r };
  });
  return (a, s) => (k(), D("div", { class: $(o(n).b()) }, [x("div", { class: $(o(n).e("icon")) }, [X(a.$slots, "icon", {}, () => [o(l).component ? (k(), oe(Je(o(l).component), { key: 0, class: $(o(l).class) }, null, 8, ["class"])) : J("v-if", true)])], 2), a.title || a.$slots.title ? (k(), D("div", { key: 0, class: $(o(n).e("title")) }, [X(a.$slots, "title", {}, () => [x("p", null, he(a.title), 1)])], 2)) : J("v-if", true), a.subTitle || a.$slots["sub-title"] ? (k(), D("div", { key: 1, class: $(o(n).e("subtitle")) }, [X(a.$slots, "sub-title", {}, () => [x("p", null, he(a.subTitle), 1)])], 2)) : J("v-if", true), a.$slots.extra ? (k(), D("div", { key: 2, class: $(o(n).e("extra")) }, [X(a.$slots, "extra")], 2)) : J("v-if", true)], 2));
} });
var R$ = ve(P$, [["__file", "result.vue"]]);
const L$ = We(R$), B$ = ["start", "center", "end", "space-around", "space-between", "space-evenly"], D$ = ["top", "middle", "bottom"], V$ = pe({ tag: { type: String, default: "div" }, gutter: { type: Number, default: 0 }, justify: { type: String, values: B$, default: "start" }, align: { type: String, values: D$ } }), A$ = K({ name: "ElRow" }), F$ = K({ ...A$, props: V$, setup(e) {
  const t = e, n = de("row"), l = y(() => t.gutter);
  ut(af, { gutter: l });
  const a = y(() => {
    const r = {};
    return t.gutter && (r.marginRight = r.marginLeft = `-${t.gutter / 2}px`), r;
  }), s = y(() => [n.b(), n.is(`justify-${t.justify}`, t.justify !== "start"), n.is(`align-${t.align}`, !!t.align)]);
  return (r, i) => (k(), oe(Je(r.tag), { class: $(o(s)), style: Me(o(a)) }, { default: j(() => [X(r.$slots, "default")]), _: 3 }, 8, ["class", "style"]));
} });
var z$ = ve(F$, [["__file", "row.vue"]]);
const x$ = We(z$), H$ = K({ props: { item: { type: Object, required: true }, style: { type: Object }, height: Number }, setup() {
  return { ns: de("select") };
} });
function K$(e, t, n, l, a, s) {
  return k(), D("div", { class: $(e.ns.be("group", "title")), style: Me({ ...e.style, lineHeight: `${e.height}px` }) }, he(e.item.label), 7);
}
var W$ = ve(H$, [["render", K$], ["__file", "group-item.vue"]]);
function j$(e, { emit: t }) {
  return { hoverItem: () => {
    e.disabled || t("hover", e.index);
  }, selectOptionClick: () => {
    e.disabled || t("select", e.item, e.index);
  } };
}
const ep = { label: "label", value: "value", disabled: "disabled", options: "options" };
function gs(e) {
  const t = y(() => ({ ...ep, ...e.props }));
  return { aliasProps: t, getLabel: (r) => xt(r, t.value.label), getValue: (r) => xt(r, t.value.value), getDisabled: (r) => xt(r, t.value.disabled), getOptions: (r) => xt(r, t.value.options) };
}
const U$ = pe({ allowCreate: Boolean, autocomplete: { type: Y(String), default: "none" }, automaticDropdown: Boolean, clearable: Boolean, clearIcon: { type: St, default: dl }, effect: { type: Y(String), default: "light" }, collapseTags: Boolean, collapseTagsTooltip: Boolean, maxCollapseTags: { type: Number, default: 1 }, defaultFirstOption: Boolean, disabled: Boolean, estimatedOptionHeight: { type: Number, default: void 0 }, filterable: Boolean, filterMethod: Function, height: { type: Number, default: 274 }, itemHeight: { type: Number, default: 34 }, id: String, loading: Boolean, loadingText: String, modelValue: { type: Y([Array, String, Number, Boolean, Object]) }, multiple: Boolean, multipleLimit: { type: Number, default: 0 }, name: String, noDataText: String, noMatchText: String, remoteMethod: Function, reserveKeyword: { type: Boolean, default: true }, options: { type: Y(Array), required: true }, placeholder: { type: String }, teleported: Xt.teleported, persistent: { type: Boolean, default: true }, popperClass: { type: String, default: "" }, popperOptions: { type: Y(Object), default: () => ({}) }, remote: Boolean, size: Wt, props: { type: Y(Object), default: () => ep }, valueKey: { type: String, default: "value" }, scrollbarAlwaysOn: Boolean, validateEvent: { type: Boolean, default: true }, offset: { type: Number, default: 12 }, showArrow: { type: Boolean, default: true }, placement: { type: Y(String), values: Yl, default: "bottom-start" }, fallbackPlacements: { type: Y(Array), default: ["bottom-start", "top-start", "right", "left"] }, tagType: { ...rl.type, default: "info" }, tagEffect: { ...rl.effect, default: "light" }, tabindex: { type: [String, Number], default: 0 }, appendTo: String, fitInputWidth: { type: [Boolean, Number], default: true, validator(e) {
  return Tt(e) || _e(e);
} }, suffixIcon: { type: St, default: fl }, ...Io, ...ln(["ariaLabel"]) }), Y$ = pe({ data: Array, disabled: Boolean, hovering: Boolean, item: { type: Y(Object), required: true }, index: Number, style: Object, selected: Boolean, created: Boolean }), q$ = { [Ae]: (e) => true, [et]: (e) => true, "remove-tag": (e) => true, "visible-change": (e) => true, focus: (e) => e instanceof FocusEvent, blur: (e) => e instanceof FocusEvent, clear: () => true }, G$ = { hover: (e) => _e(e), select: (e, t) => true }, Ei = Symbol("ElSelectV2Injection"), X$ = K({ props: Y$, emits: G$, setup(e, { emit: t }) {
  const n = we(Ei), l = de("select"), { hoverItem: a, selectOptionClick: s } = j$(e, { emit: t }), { getLabel: r } = gs(n.props);
  return { ns: l, hoverItem: a, selectOptionClick: s, getLabel: r };
} });
function Z$(e, t, n, l, a, s) {
  return k(), D("li", { "aria-selected": e.selected, style: Me(e.style), class: $([e.ns.be("dropdown", "item"), e.ns.is("selected", e.selected), e.ns.is("disabled", e.disabled), e.ns.is("created", e.created), e.ns.is("hovering", e.hovering)]), onMousemove: e.hoverItem, onClick: Re(e.selectOptionClick, ["stop"]) }, [X(e.$slots, "default", { item: e.item, index: e.index, disabled: e.disabled }, () => [x("span", null, he(e.getLabel(e.item)), 1)])], 46, ["aria-selected", "onMousemove", "onClick"]);
}
var J$ = ve(X$, [["render", Z$], ["__file", "option-item.vue"]]);
const tp = () => {
  const t = tt().proxy.$props;
  return y(() => {
    const n = (l, a, s) => ({});
    return t.perfMode ? zv(n) : bh(n);
  });
}, pr = 50, Wa = "itemRendered", ja = "scroll", io = "forward", Ua = "backward", Vn = "auto", bs = "smart", Yo = "start", Xn = "center", qo = "end", So = "horizontal", $i = "vertical", Q$ = "ltr", po = "rtl", Go = "negative", Ti = "positive-ascending", Ni = "positive-descending", eT = { [So]: "left", [$i]: "top" }, tT = 20, nT = { [So]: "deltaX", [$i]: "deltaY" }, lT = ({ atEndEdge: e, atStartEdge: t, layout: n }, l) => {
  let a, s = 0;
  const r = (u) => u < 0 && t.value || u > 0 && e.value;
  return { hasReachedEdge: r, onWheel: (u) => {
    Wl(a);
    const c = u[nT[n.value]];
    r(s) && r(s + c) || (s += c, cs() || u.preventDefault(), a = Il(() => {
      l(s), s = 0;
    }));
  } };
}, vr = jn({ type: Y([Number, Function]), required: true }), hr = jn({ type: Number }), mr = jn({ type: Number, default: 2 }), oT = jn({ type: String, values: ["ltr", "rtl"], default: "ltr" }), gr = jn({ type: Number, default: 0 }), Ya = jn({ type: Number, required: true }), np = jn({ type: String, values: ["horizontal", "vertical"], default: $i }), lp = pe({ className: { type: String, default: "" }, containerElement: { type: Y([String, Object]), default: "div" }, data: { type: Y(Array), default: () => Bt([]) }, direction: oT, height: { type: [String, Number], required: true }, innerElement: { type: [String, Object], default: "div" }, style: { type: Y([Object, String, Array]) }, useIsScrolling: { type: Boolean, default: false }, width: { type: [Number, String], required: false }, perfMode: { type: Boolean, default: true }, scrollbarAlwaysOn: { type: Boolean, default: false } }), op = pe({ cache: mr, estimatedItemSize: hr, layout: np, initScrollOffset: gr, total: Ya, itemSize: vr, ...lp }), br = { type: Number, default: 6 }, ap = { type: Number, default: 0 }, sp = { type: Number, default: 2 }, xl = pe({ columnCache: mr, columnWidth: vr, estimatedColumnWidth: hr, estimatedRowHeight: hr, initScrollLeft: gr, initScrollTop: gr, itemKey: { type: Y(Function), default: ({ columnIndex: e, rowIndex: t }) => `${t}:${e}` }, rowCache: mr, rowHeight: vr, totalColumn: Ya, totalRow: Ya, hScrollbarSize: br, vScrollbarSize: br, scrollbarStartGap: ap, scrollbarEndGap: sp, role: String, ...lp }), rp = pe({ alwaysOn: Boolean, class: String, layout: np, total: Ya, ratio: { type: Number, required: true }, clientSize: { type: Number, required: true }, scrollFrom: { type: Number, required: true }, scrollbarSize: br, startGap: ap, endGap: sp, visible: Boolean }), Vl = (e, t) => e < t ? io : Ua, Xo = (e) => e === Q$ || e === po || e === So, Qu = (e) => e === po;
let eo = null;
function qa(e = false) {
  if (eo === null || e) {
    const t = document.createElement("div"), n = t.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
    const l = document.createElement("div"), a = l.style;
    return a.width = "100px", a.height = "100px", t.appendChild(l), document.body.appendChild(t), t.scrollLeft > 0 ? eo = Ni : (t.scrollLeft = 1, t.scrollLeft === 0 ? eo = Go : eo = Ti), document.body.removeChild(t), eo;
  }
  return eo;
}
function aT({ move: e, size: t, bar: n }, l) {
  const a = {}, s = `translate${n.axis}(${e}px)`;
  return a[n.size] = t, a.transform = s, l === "horizontal" ? a.height = "100%" : a.width = "100%", a;
}
const yr = K({ name: "ElVirtualScrollBar", props: rp, emits: ["scroll", "start-move", "stop-move"], setup(e, { emit: t }) {
  const n = y(() => e.startGap + e.endGap), l = de("virtual-scrollbar"), a = de("scrollbar"), s = N(), r = N();
  let i = null, u = null;
  const c = Ct({ isDragging: false, traveled: 0 }), d = y(() => md[e.layout]), f = y(() => e.clientSize - o(n)), m = y(() => ({ position: "absolute", width: `${So === e.layout ? f.value : e.scrollbarSize}px`, height: `${So === e.layout ? e.scrollbarSize : f.value}px`, [eT[e.layout]]: "2px", right: "2px", bottom: "2px", borderRadius: "4px" })), h = y(() => {
    const E = e.ratio, M = e.clientSize;
    if (E >= 100) return Number.POSITIVE_INFINITY;
    if (E >= 50) return E * M / 100;
    const O = M / 3;
    return Math.floor(Math.min(Math.max(E * M, tT), O));
  }), v = y(() => {
    if (!Number.isFinite(h.value)) return { display: "none" };
    const E = `${h.value}px`;
    return aT({ bar: d.value, size: E, move: c.traveled }, e.layout);
  }), p = y(() => Math.floor(e.clientSize - h.value - o(n))), b = () => {
    window.addEventListener("mousemove", C), window.addEventListener("mouseup", w);
    const E = o(r);
    E && (u = document.onselectstart, document.onselectstart = () => false, E.addEventListener("touchmove", C, { passive: true }), E.addEventListener("touchend", w));
  }, g = () => {
    window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", w), document.onselectstart = u, u = null;
    const E = o(r);
    E && (E.removeEventListener("touchmove", C), E.removeEventListener("touchend", w));
  }, T = (E) => {
    E.stopImmediatePropagation(), !(E.ctrlKey || [1, 2].includes(E.button)) && (c.isDragging = true, c[d.value.axis] = E.currentTarget[d.value.offset] - (E[d.value.client] - E.currentTarget.getBoundingClientRect()[d.value.direction]), t("start-move"), b());
  }, w = () => {
    c.isDragging = false, c[d.value.axis] = 0, t("stop-move"), g();
  }, C = (E) => {
    const { isDragging: M } = c;
    if (!M || !r.value || !s.value) return;
    const O = c[d.value.axis];
    if (!O) return;
    Wl(i);
    const _ = (s.value.getBoundingClientRect()[d.value.direction] - E[d.value.client]) * -1, I = r.value[d.value.offset] - O, R = _ - I;
    i = Il(() => {
      c.traveled = Math.max(e.startGap, Math.min(R, p.value)), t("scroll", R, p.value);
    });
  }, S = (E) => {
    const M = Math.abs(E.target.getBoundingClientRect()[d.value.direction] - E[d.value.client]), O = r.value[d.value.offset] / 2, _ = M - O;
    c.traveled = Math.max(0, Math.min(_, p.value)), t("scroll", _, p.value);
  };
  return ue(() => e.scrollFrom, (E) => {
    c.isDragging || (c.traveled = Math.ceil(E * p.value));
  }), It(() => {
    g();
  }), () => Oe("div", { role: "presentation", ref: s, class: [l.b(), e.class, (e.alwaysOn || c.isDragging) && "always-on"], style: m.value, onMousedown: Re(S, ["stop", "prevent"]), onTouchstartPrevent: T }, Oe("div", { ref: r, class: a.e("thumb"), style: v.value, onMousedown: T }, []));
} }), ip = ({ name: e, getOffset: t, getItemSize: n, getItemOffset: l, getEstimatedTotalSize: a, getStartIndexForOffset: s, getStopIndexForStartIndex: r, initCache: i, clearCache: u, validateProps: c }) => K({ name: e ?? "ElVirtualList", props: op, emits: [Wa, ja], setup(d, { emit: f, expose: m }) {
  c(d);
  const h = tt(), v = de("vl"), p = N(i(d, h)), b = tp(), g = N(), T = N(), w = N(), C = N({ isScrolling: false, scrollDir: "forward", scrollOffset: _e(d.initScrollOffset) ? d.initScrollOffset : 0, updateRequested: false, isScrollbarDragging: false, scrollbarAlwaysOn: d.scrollbarAlwaysOn }), S = y(() => {
    const { total: Z, cache: ee } = d, { isScrolling: re, scrollDir: le, scrollOffset: Q } = o(C);
    if (Z === 0) return [0, 0, 0, 0];
    const ie = s(d, Q, o(p)), ce = r(d, ie, Q, o(p)), Ie = !re || le === Ua ? Math.max(1, ee) : 1, me = !re || le === io ? Math.max(1, ee) : 1;
    return [Math.max(0, ie - Ie), Math.max(0, Math.min(Z - 1, ce + me)), ie, ce];
  }), E = y(() => a(d, o(p))), M = y(() => Xo(d.layout)), O = y(() => [{ position: "relative", [`overflow-${M.value ? "x" : "y"}`]: "scroll", WebkitOverflowScrolling: "touch", willChange: "transform" }, { direction: d.direction, height: _e(d.height) ? `${d.height}px` : d.height, width: _e(d.width) ? `${d.width}px` : d.width }, d.style]), _ = y(() => {
    const Z = o(E), ee = o(M);
    return { height: ee ? "100%" : `${Z}px`, pointerEvents: o(C).isScrolling ? "none" : void 0, width: ee ? `${Z}px` : "100%" };
  }), I = y(() => M.value ? d.width : d.height), { onWheel: R } = lT({ atStartEdge: y(() => C.value.scrollOffset <= 0), atEndEdge: y(() => C.value.scrollOffset >= E.value), layout: y(() => d.layout) }, (Z) => {
    var ee, re;
    (re = (ee = w.value).onMouseUp) == null || re.call(ee), F(Math.min(C.value.scrollOffset + Z, E.value - I.value));
  });
  Et(g, "wheel", R, { passive: false });
  const P = () => {
    const { total: Z } = d;
    if (Z > 0) {
      const [Q, ie, ce, Ie] = o(S);
      f(Wa, Q, ie, ce, Ie);
    }
    const { scrollDir: ee, scrollOffset: re, updateRequested: le } = o(C);
    f(ja, ee, re, le);
  }, W = (Z) => {
    const { clientHeight: ee, scrollHeight: re, scrollTop: le } = Z.currentTarget, Q = o(C);
    if (Q.scrollOffset === le) return;
    const ie = Math.max(0, Math.min(le, re - ee));
    C.value = { ...Q, isScrolling: true, scrollDir: Vl(Q.scrollOffset, ie), scrollOffset: ie, updateRequested: false }, $e(G);
  }, te = (Z) => {
    const { clientWidth: ee, scrollLeft: re, scrollWidth: le } = Z.currentTarget, Q = o(C);
    if (Q.scrollOffset === re) return;
    const { direction: ie } = d;
    let ce = re;
    if (ie === po) switch (qa()) {
      case Go: {
        ce = -re;
        break;
      }
      case Ni: {
        ce = le - ee - re;
        break;
      }
    }
    ce = Math.max(0, Math.min(ce, le - ee)), C.value = { ...Q, isScrolling: true, scrollDir: Vl(Q.scrollOffset, ce), scrollOffset: ce, updateRequested: false }, $e(G);
  }, A = (Z) => {
    o(M) ? te(Z) : W(Z), P();
  }, L = (Z, ee) => {
    const re = (E.value - I.value) / ee * Z;
    F(Math.min(E.value - I.value, re));
  }, F = (Z) => {
    Z = Math.max(Z, 0), Z !== o(C).scrollOffset && (C.value = { ...o(C), scrollOffset: Z, scrollDir: Vl(o(C).scrollOffset, Z), updateRequested: true }, $e(G));
  }, V = (Z, ee = Vn) => {
    const { scrollOffset: re } = o(C);
    Z = Math.max(0, Math.min(Z, d.total - 1)), F(t(d, Z, ee, re, o(p)));
  }, B = (Z) => {
    const { direction: ee, itemSize: re, layout: le } = d, Q = b.value(u && re, u && le, u && ee);
    let ie;
    if (sn(Q, String(Z))) ie = Q[Z];
    else {
      const ce = l(d, Z, o(p)), Ie = n(d, Z, o(p)), me = o(M), se = ee === po, ke = me ? ce : 0;
      Q[Z] = ie = { position: "absolute", left: se ? void 0 : `${ke}px`, right: se ? `${ke}px` : void 0, top: me ? 0 : `${ce}px`, height: me ? "100%" : `${Ie}px`, width: me ? `${Ie}px` : "100%" };
    }
    return ie;
  }, G = () => {
    C.value.isScrolling = false, $e(() => {
      b.value(-1, null, null);
    });
  }, U = () => {
    const Z = g.value;
    Z && (Z.scrollTop = 0);
  };
  Xe(() => {
    if (!dt) return;
    const { initScrollOffset: Z } = d, ee = o(g);
    _e(Z) && ee && (o(M) ? ee.scrollLeft = Z : ee.scrollTop = Z), P();
  }), cl(() => {
    const { direction: Z, layout: ee } = d, { scrollOffset: re, updateRequested: le } = o(C), Q = o(g);
    if (le && Q) if (ee === So) if (Z === po) switch (qa()) {
      case Go: {
        Q.scrollLeft = -re;
        break;
      }
      case Ti: {
        Q.scrollLeft = re;
        break;
      }
      default: {
        const { clientWidth: ie, scrollWidth: ce } = Q;
        Q.scrollLeft = ce - ie - re;
        break;
      }
    }
    else Q.scrollLeft = re;
    else Q.scrollTop = re;
  }), Pc(() => {
    o(g).scrollTop = o(C).scrollOffset;
  });
  const ne = { ns: v, clientSize: I, estimatedTotalSize: E, windowStyle: O, windowRef: g, innerRef: T, innerStyle: _, itemsToRender: S, scrollbarRef: w, states: C, getItemStyle: B, onScroll: A, onScrollbarScroll: L, onWheel: R, scrollTo: F, scrollToItem: V, resetScrollTop: U };
  return m({ windowRef: g, innerRef: T, getItemStyleCache: b, scrollTo: F, scrollToItem: V, resetScrollTop: U, states: C }), ne;
}, render(d) {
  var f;
  const { $slots: m, className: h, clientSize: v, containerElement: p, data: b, getItemStyle: g, innerElement: T, itemsToRender: w, innerStyle: C, layout: S, total: E, onScroll: M, onScrollbarScroll: O, states: _, useIsScrolling: I, windowStyle: R, ns: P } = d, [W, te] = w, A = Je(p), L = Je(T), F = [];
  if (E > 0) for (let U = W; U <= te; U++) F.push(Oe(Pe, { key: U }, (f = m.default) == null ? void 0 : f.call(m, { data: b, index: U, isScrolling: I ? _.isScrolling : void 0, style: g(U) })));
  const V = [Oe(L, { style: C, ref: "innerRef" }, Be(L) ? F : { default: () => F })], B = Oe(yr, { ref: "scrollbarRef", clientSize: v, layout: S, onScroll: O, ratio: v * 100 / this.estimatedTotalSize, scrollFrom: _.scrollOffset / (this.estimatedTotalSize - v), total: E }), G = Oe(A, { class: [P.e("window"), h], style: R, onScroll: M, ref: "windowRef", key: 0 }, Be(A) ? [V] : { default: () => [V] });
  return Oe("div", { key: 0, class: [P.e("wrapper"), _.scrollbarAlwaysOn ? "always-on" : ""] }, [G, B]);
} }), up = ip({ name: "ElFixedSizeList", getItemOffset: ({ itemSize: e }, t) => t * e, getItemSize: ({ itemSize: e }) => e, getEstimatedTotalSize: ({ total: e, itemSize: t }) => t * e, getOffset: ({ height: e, total: t, itemSize: n, layout: l, width: a }, s, r, i) => {
  const u = Xo(l) ? a : e, c = Math.max(0, t * n - u), d = Math.min(c, s * n), f = Math.max(0, (s + 1) * n - u);
  switch (r === bs && (i >= f - u && i <= d + u ? r = Vn : r = Xn), r) {
    case Yo:
      return d;
    case qo:
      return f;
    case Xn: {
      const m = Math.round(f + (d - f) / 2);
      return m < Math.ceil(u / 2) ? 0 : m > c + Math.floor(u / 2) ? c : m;
    }
    case Vn:
    default:
      return i >= f && i <= d ? i : i < f ? f : d;
  }
}, getStartIndexForOffset: ({ total: e, itemSize: t }, n) => Math.max(0, Math.min(e - 1, Math.floor(n / t))), getStopIndexForStartIndex: ({ height: e, total: t, itemSize: n, layout: l, width: a }, s, r) => {
  const i = s * n, u = Xo(l) ? a : e, c = Math.ceil((u + r - i) / n);
  return Math.max(0, Math.min(t - 1, s + c - 1));
}, initCache() {
}, clearCache: true, validateProps() {
} }), uo = (e, t, n) => {
  const { itemSize: l } = e, { items: a, lastVisitedIndex: s } = n;
  if (t > s) {
    let r = 0;
    if (s >= 0) {
      const i = a[s];
      r = i.offset + i.size;
    }
    for (let i = s + 1; i <= t; i++) {
      const u = l(i);
      a[i] = { offset: r, size: u }, r += u;
    }
    n.lastVisitedIndex = t;
  }
  return a[t];
}, sT = (e, t, n) => {
  const { items: l, lastVisitedIndex: a } = t;
  return (a > 0 ? l[a].offset : 0) >= n ? cp(e, t, 0, a, n) : rT(e, t, Math.max(0, a), n);
}, cp = (e, t, n, l, a) => {
  for (; n <= l; ) {
    const s = n + Math.floor((l - n) / 2), r = uo(e, s, t).offset;
    if (r === a) return s;
    r < a ? n = s + 1 : r > a && (l = s - 1);
  }
  return Math.max(0, n - 1);
}, rT = (e, t, n, l) => {
  const { total: a } = e;
  let s = 1;
  for (; n < a && uo(e, n, t).offset < l; ) n += s, s *= 2;
  return cp(e, t, Math.floor(n / 2), Math.min(n, a - 1), l);
}, ec = ({ total: e }, { items: t, estimatedItemSize: n, lastVisitedIndex: l }) => {
  let a = 0;
  if (l >= e && (l = e - 1), l >= 0) {
    const i = t[l];
    a = i.offset + i.size;
  }
  const r = (e - l - 1) * n;
  return a + r;
}, iT = ip({ name: "ElDynamicSizeList", getItemOffset: (e, t, n) => uo(e, t, n).offset, getItemSize: (e, t, { items: n }) => n[t].size, getEstimatedTotalSize: ec, getOffset: (e, t, n, l, a) => {
  const { height: s, layout: r, width: i } = e, u = Xo(r) ? i : s, c = uo(e, t, a), d = ec(e, a), f = Math.max(0, Math.min(d - u, c.offset)), m = Math.max(0, c.offset - u + c.size);
  switch (n === bs && (l >= m - u && l <= f + u ? n = Vn : n = Xn), n) {
    case Yo:
      return f;
    case qo:
      return m;
    case Xn:
      return Math.round(m + (f - m) / 2);
    case Vn:
    default:
      return l >= m && l <= f ? l : l < m ? m : f;
  }
}, getStartIndexForOffset: (e, t, n) => sT(e, n, t), getStopIndexForStartIndex: (e, t, n, l) => {
  const { height: a, total: s, layout: r, width: i } = e, u = Xo(r) ? i : a, c = uo(e, t, l), d = n + u;
  let f = c.offset + c.size, m = t;
  for (; m < s - 1 && f < d; ) m++, f += uo(e, m, l).size;
  return m;
}, initCache({ estimatedItemSize: e = pr }, t) {
  const n = { items: {}, estimatedItemSize: e, lastVisitedIndex: -1 };
  return n.clearCacheAfterIndex = (l, a = true) => {
    var s, r;
    n.lastVisitedIndex = Math.min(n.lastVisitedIndex, l - 1), (s = t.exposed) == null || s.getItemStyleCache(-1), a && ((r = t.proxy) == null || r.$forceUpdate());
  }, n;
}, clearCache: false, validateProps: ({ itemSize: e }) => {
} }), uT = { loading: Boolean, data: { type: Array, required: true }, hoveringIndex: Number, width: Number };
var cT = K({ name: "ElSelectDropdown", props: uT, setup(e, { slots: t, expose: n }) {
  const l = we(Ei), a = de("select"), { getLabel: s, getValue: r, getDisabled: i } = gs(l.props), u = N([]), c = N(), d = y(() => e.data.length);
  ue(() => d.value, () => {
    var R, P;
    (P = (R = l.tooltipRef.value).updatePopper) == null || P.call(R);
  });
  const f = y(() => vt(l.props.estimatedOptionHeight)), m = y(() => f.value ? { itemSize: l.props.itemHeight } : { estimatedSize: l.props.estimatedOptionHeight, itemSize: (R) => u.value[R] }), h = (R = [], P) => {
    const { props: { valueKey: W } } = l;
    return gt(P) ? R && R.some((te) => Ra(xt(te, W)) === xt(P, W)) : R.includes(P);
  }, v = (R, P) => {
    if (gt(P)) {
      const { valueKey: W } = l.props;
      return xt(R, W) === xt(P, W);
    } else return R === P;
  }, p = (R, P) => l.props.multiple ? h(R, r(P)) : v(R, r(P)), b = (R, P) => {
    const { disabled: W, multiple: te, multipleLimit: A } = l.props;
    return W || !P && (te ? A > 0 && R.length >= A : false);
  }, g = (R) => e.hoveringIndex === R;
  n({ listRef: c, isSized: f, isItemDisabled: b, isItemHovering: g, isItemSelected: p, scrollToItem: (R) => {
    const P = c.value;
    P && P.scrollToItem(R);
  }, resetScrollTop: () => {
    const R = c.value;
    R && R.resetScrollTop();
  } });
  const S = (R) => {
    const { index: P, data: W, style: te } = R, A = o(f), { itemSize: L, estimatedSize: F } = o(m), { modelValue: V } = l.props, { onSelect: B, onHover: G } = l, U = W[P];
    if (U.type === "Group") return z(W$, { item: U, style: te, height: A ? L : F }, null);
    const ne = p(V, U), Z = b(V, ne), ee = g(P);
    return z(J$, lt(R, { selected: ne, disabled: i(U) || Z, created: !!U.created, hovering: ee, item: U, onSelect: B, onHover: G }), { default: (re) => {
      var le;
      return ((le = t.default) == null ? void 0 : le.call(t, re)) || z("span", null, [s(U)]);
    } });
  }, { onKeyboardNavigate: E, onKeyboardSelect: M } = l, O = () => {
    E("forward");
  }, _ = () => {
    E("backward");
  }, I = (R) => {
    const { code: P } = R, { tab: W, esc: te, down: A, up: L, enter: F, numpadEnter: V } = ye;
    switch ([te, A, L, F, V].includes(P) && (R.preventDefault(), R.stopPropagation()), P) {
      case W:
      case te:
        break;
      case A:
        O();
        break;
      case L:
        _();
        break;
      case F:
      case V:
        M();
        break;
    }
  };
  return () => {
    var R, P, W, te;
    const { data: A, width: L } = e, { height: F, multiple: V, scrollbarAlwaysOn: B } = l.props, G = y(() => Da ? true : B), U = o(f) ? up : iT;
    return z("div", { class: [a.b("dropdown"), a.is("multiple", V)], style: { width: `${L}px` } }, [(R = t.header) == null ? void 0 : R.call(t), ((P = t.loading) == null ? void 0 : P.call(t)) || ((W = t.empty) == null ? void 0 : W.call(t)) || z(U, lt({ ref: c }, o(m), { className: a.be("dropdown", "list"), scrollbarAlwaysOn: G.value, data: A, height: F, width: L, total: A.length, onKeydown: I }), { default: (ne) => z(S, ne, null) }), (te = t.footer) == null ? void 0 : te.call(t)]);
  };
} });
function dT(e, t) {
  const { aliasProps: n, getLabel: l, getValue: a } = gs(e), s = N(0), r = N(), i = y(() => e.allowCreate && e.filterable);
  function u(h) {
    const v = (p) => l(p) === h;
    return e.options && e.options.some(v) || t.createdOptions.some(v);
  }
  function c(h) {
    i.value && (e.multiple && h.created ? s.value++ : r.value = h);
  }
  function d(h) {
    if (i.value) if (h && h.length > 0) {
      if (u(h)) return;
      const v = { [n.value.value]: h, [n.value.label]: h, created: true, [n.value.disabled]: false };
      t.createdOptions.length >= s.value ? t.createdOptions[s.value] = v : t.createdOptions.push(v);
    } else if (e.multiple) t.createdOptions.length = s.value;
    else {
      const v = r.value;
      t.createdOptions.length = 0, v && v.created && t.createdOptions.push(v);
    }
  }
  function f(h) {
    if (!i.value || !h || !h.created || h.created && e.reserveKeyword && t.inputValue === l(h)) return;
    const v = t.createdOptions.findIndex((p) => a(p) === a(h));
    ~v && (t.createdOptions.splice(v, 1), s.value--);
  }
  function m() {
    i.value && (t.createdOptions.length = 0, s.value = 0);
  }
  return { createNewOption: d, removeNewOption: f, selectNewOption: c, clearAllNewOption: m };
}
const fT = (e, t) => {
  const { t: n } = ft(), l = de("select"), a = de("input"), { form: s, formItem: r } = un(), { inputId: i } = zn(e, { formItemContext: r }), { aliasProps: u, getLabel: c, getValue: d, getDisabled: f, getOptions: m } = gs(e), { valueOnClear: h, isEmptyValue: v } = ss(e), p = Ct({ inputValue: "", cachedOptions: [], createdOptions: [], hoveringIndex: -1, inputHovering: false, selectionWidth: 0, collapseItemWidth: 0, previousQuery: null, previousValue: void 0, selectedLabel: "", menuVisibleOnFocus: false, isBeforeHide: false }), b = N(-1), g = N(), T = N(), w = N(), C = N(), S = N(), E = N(), M = N(), O = N(), _ = N(), I = N(), { isComposing: R, handleCompositionStart: P, handleCompositionEnd: W, handleCompositionUpdate: te } = aa({ afterComposition: (ge) => fn(ge) }), { wrapperRef: A, isFocused: L, handleBlur: F } = Ol(S, { beforeFocus() {
    return ne.value;
  }, afterFocus() {
    e.automaticDropdown && !U.value && (U.value = true, p.menuVisibleOnFocus = true);
  }, beforeBlur(ge) {
    var Ve, ct;
    return ((Ve = w.value) == null ? void 0 : Ve.isFocusInsideContent(ge)) || ((ct = C.value) == null ? void 0 : ct.isFocusInsideContent(ge));
  }, afterBlur() {
    var ge;
    U.value = false, p.menuVisibleOnFocus = false, e.validateEvent && ((ge = r == null ? void 0 : r.validate) == null || ge.call(r, "blur").catch((Ve) => void 0));
  } }), V = y(() => ke("")), B = y(() => e.loading ? false : e.options.length > 0 || p.createdOptions.length > 0), G = N([]), U = N(false), ne = y(() => e.disabled || (s == null ? void 0 : s.disabled)), Z = y(() => {
    var ge;
    return (ge = s == null ? void 0 : s.statusIcon) != null ? ge : false;
  }), ee = y(() => {
    const ge = G.value.length * e.itemHeight;
    return ge > e.height ? e.height : ge;
  }), re = y(() => e.multiple ? Se(e.modelValue) && e.modelValue.length > 0 : !v(e.modelValue)), le = y(() => e.clearable && !ne.value && p.inputHovering && re.value), Q = y(() => e.remote && e.filterable ? "" : e.suffixIcon), ie = y(() => Q.value && l.is("reverse", U.value)), ce = y(() => (r == null ? void 0 : r.validateState) || ""), Ie = y(() => {
    if (ce.value) return us[ce.value];
  }), me = y(() => e.remote ? 300 : 0), se = y(() => e.loading ? e.loadingText || n("el.select.loading") : e.remote && !p.inputValue && !B.value ? false : e.filterable && p.inputValue && B.value && G.value.length === 0 ? e.noMatchText || n("el.select.noMatch") : B.value ? null : e.noDataText || n("el.select.noData")), ke = (ge) => {
    const Ve = new RegExp(ai(ge), "i"), ct = e.filterable && Qe(e.filterMethod), mt = e.filterable && e.remote && Qe(e.remoteMethod), on = (In) => ct || mt ? true : ge ? Ve.test(c(In) || "") : true;
    return e.loading ? [] : [...p.createdOptions, ...e.options].reduce((In, Rl) => {
      const Zl = m(Rl);
      if (Se(Zl)) {
        const ca = Zl.filter(on);
        ca.length > 0 && In.push({ label: c(Rl), type: "Group" }, ...ca);
      } else (e.remote || on(Rl)) && In.push(Rl);
      return In;
    }, []);
  }, De = () => {
    G.value = ke(p.inputValue);
  }, qe = y(() => {
    const ge = /* @__PURE__ */ new Map();
    return V.value.forEach((Ve, ct) => {
      ge.set(Ft(d(Ve)), { option: Ve, index: ct });
    }), ge;
  }), je = y(() => {
    const ge = /* @__PURE__ */ new Map();
    return G.value.forEach((Ve, ct) => {
      ge.set(Ft(d(Ve)), { option: Ve, index: ct });
    }), ge;
  }), Le = y(() => G.value.every((ge) => f(ge))), Ne = Ht(), Te = y(() => Ne.value === "small" ? "small" : "default"), Ge = () => {
    var ge;
    if (_e(e.fitInputWidth)) {
      b.value = e.fitInputWidth;
      return;
    }
    const Ve = ((ge = g.value) == null ? void 0 : ge.offsetWidth) || 200;
    !e.fitInputWidth && B.value ? $e(() => {
      b.value = Math.max(Ve, Ze());
    }) : b.value = Ve;
  }, Ze = () => {
    var ge, Ve;
    const mt = document.createElement("canvas").getContext("2d"), on = l.be("dropdown", "item"), Rl = (((Ve = (ge = O.value) == null ? void 0 : ge.listRef) == null ? void 0 : Ve.innerRef) || document).querySelector(`.${on}`);
    if (Rl === null || mt === null) return 0;
    const Zl = getComputedStyle(Rl), ca = Number.parseFloat(Zl.paddingLeft) + Number.parseFloat(Zl.paddingRight);
    return mt.font = Zl.font, G.value.reduce((Cv, wv) => {
      const Sv = mt.measureText(c(wv));
      return Math.max(Sv.width, Cv);
    }, 0) + ca;
  }, ot = () => {
    if (!T.value) return 0;
    const ge = window.getComputedStyle(T.value);
    return Number.parseFloat(ge.gap || "6px");
  }, st = y(() => {
    const ge = ot();
    return { maxWidth: `${I.value && e.maxCollapseTags === 1 ? p.selectionWidth - p.collapseItemWidth - ge : p.selectionWidth}px` };
  }), Ce = y(() => ({ maxWidth: `${p.selectionWidth}px` })), Ue = y(() => Se(e.modelValue) ? e.modelValue.length === 0 && !p.inputValue : e.filterable ? !p.inputValue : true), ht = y(() => {
    var ge;
    const Ve = (ge = e.placeholder) != null ? ge : n("el.select.placeholder");
    return e.multiple || !re.value ? Ve : p.selectedLabel;
  }), Pt = y(() => {
    var ge, Ve;
    return (Ve = (ge = w.value) == null ? void 0 : ge.popperRef) == null ? void 0 : Ve.contentRef;
  }), Nt = y(() => {
    if (e.multiple) {
      const ge = e.modelValue.length;
      if (e.modelValue.length > 0 && je.value.has(e.modelValue[ge - 1])) {
        const { index: Ve } = je.value.get(e.modelValue[ge - 1]);
        return Ve;
      }
    } else if (!v(e.modelValue) && je.value.has(e.modelValue)) {
      const { index: ge } = je.value.get(e.modelValue);
      return ge;
    }
    return -1;
  }), _t = y({ get() {
    return U.value && se.value !== false;
  }, set(ge) {
    U.value = ge;
  } }), kt = y(() => e.multiple ? e.collapseTags ? p.cachedOptions.slice(0, e.maxCollapseTags) : p.cachedOptions : []), dn = y(() => e.multiple ? e.collapseTags ? p.cachedOptions.slice(e.maxCollapseTags) : [] : []), { createNewOption: xe, removeNewOption: rt, selectNewOption: q, clearAllNewOption: ae } = dT(e, p), H = () => {
    ne.value || (p.menuVisibleOnFocus ? p.menuVisibleOnFocus = false : U.value = !U.value);
  }, fe = () => {
    p.inputValue.length > 0 && !U.value && (U.value = true), xe(p.inputValue), He(p.inputValue);
  }, Fe = Pn(fe, me.value), He = (ge) => {
    p.previousQuery === ge || R.value || (p.previousQuery = ge, e.filterable && Qe(e.filterMethod) ? e.filterMethod(ge) : e.filterable && e.remote && Qe(e.remoteMethod) && e.remoteMethod(ge), e.defaultFirstOption && (e.filterable || e.remote) && G.value.length ? $e(wt) : $e(Ut));
  }, wt = () => {
    const ge = G.value.filter((mt) => !mt.disabled && mt.type !== "Group"), Ve = ge.find((mt) => mt.created), ct = ge[0];
    p.hoveringIndex = Gt(G.value, Ve || ct);
  }, Rn = (ge) => {
    Zt(e.modelValue, ge) || t(et, ge);
  }, jt = (ge) => {
    t(Ae, ge), Rn(ge), p.previousValue = e.multiple ? String(ge) : ge, $e(() => {
      if (e.multiple && Se(e.modelValue)) {
        const Ve = e.modelValue.map((ct) => hl(ct));
        Zt(p.cachedOptions, Ve) || (p.cachedOptions = Ve);
      } else Xl(true);
    });
  }, Gt = (ge = [], Ve) => {
    if (!gt(Ve)) return ge.indexOf(Ve);
    const ct = e.valueKey;
    let mt = -1;
    return ge.some((on, In) => xt(on, ct) === xt(Ve, ct) ? (mt = In, true) : false), mt;
  }, Ft = (ge) => gt(ge) ? xt(ge, e.valueKey) : ge, Yn = () => {
    Ge();
  }, Ot = () => {
    p.selectionWidth = T.value.getBoundingClientRect().width;
  }, bn = () => {
    p.collapseItemWidth = I.value.getBoundingClientRect().width;
  }, Lo = () => {
    var ge, Ve;
    (Ve = (ge = w.value) == null ? void 0 : ge.updatePopper) == null || Ve.call(ge);
  }, Pl = () => {
    var ge, Ve;
    (Ve = (ge = C.value) == null ? void 0 : ge.updatePopper) == null || Ve.call(ge);
  }, ia = (ge) => {
    if (e.multiple) {
      let Ve = e.modelValue.slice();
      const ct = Gt(Ve, d(ge));
      ct > -1 ? (Ve = [...Ve.slice(0, ct), ...Ve.slice(ct + 1)], p.cachedOptions.splice(ct, 1), rt(ge)) : (e.multipleLimit <= 0 || Ve.length < e.multipleLimit) && (Ve = [...Ve, d(ge)], p.cachedOptions.push(ge), q(ge)), jt(Ve), ge.created && He(""), e.filterable && !e.reserveKeyword && (p.inputValue = "");
    } else p.selectedLabel = c(ge), jt(d(ge)), U.value = false, q(ge), ge.created || ae();
    Gl();
  }, Ss = (ge, Ve) => {
    let ct = e.modelValue.slice();
    const mt = Gt(ct, d(Ve));
    mt > -1 && !ne.value && (ct = [...e.modelValue.slice(0, mt), ...e.modelValue.slice(mt + 1)], p.cachedOptions.splice(mt, 1), jt(ct), t("remove-tag", d(Ve)), rt(Ve)), ge.stopPropagation(), Gl();
  }, Gl = () => {
    var ge;
    (ge = S.value) == null || ge.focus();
  }, ua = () => {
    var ge;
    if (U.value) {
      U.value = false, $e(() => {
        var Ve;
        return (Ve = S.value) == null ? void 0 : Ve.blur();
      });
      return;
    }
    (ge = S.value) == null || ge.blur();
  }, ks = () => {
    p.inputValue.length > 0 ? p.inputValue = "" : U.value = false;
  }, Es = (ge) => Vc(ge, (Ve) => !p.cachedOptions.some((ct) => d(ct) === Ve && f(ct))), $s = (ge) => {
    if (e.multiple && ge.code !== ye.delete && p.inputValue.length === 0) {
      ge.preventDefault();
      const Ve = e.modelValue.slice(), ct = Es(Ve);
      if (ct < 0) return;
      const mt = Ve[ct];
      Ve.splice(ct, 1);
      const on = p.cachedOptions[ct];
      p.cachedOptions.splice(ct, 1), rt(on), jt(Ve), t("remove-tag", mt);
    }
  }, Ts = () => {
    let ge;
    Se(e.modelValue) ? ge = [] : ge = h.value, p.selectedLabel = "", U.value = false, jt(ge), t("clear"), ae(), Gl();
  }, be = (ge, Ve = void 0) => {
    const ct = G.value;
    if (!["forward", "backward"].includes(ge) || ne.value || ct.length <= 0 || Le.value || R.value) return;
    if (!U.value) return H();
    Ve === void 0 && (Ve = p.hoveringIndex);
    let mt = -1;
    ge === "forward" ? (mt = Ve + 1, mt >= ct.length && (mt = 0)) : ge === "backward" && (mt = Ve - 1, (mt < 0 || mt >= ct.length) && (mt = ct.length - 1));
    const on = ct[mt];
    if (f(on) || on.type === "Group") return be(ge, mt);
    p.hoveringIndex = mt, vl(mt);
  }, ze = () => {
    if (U.value) ~p.hoveringIndex && G.value[p.hoveringIndex] && ia(G.value[p.hoveringIndex]);
    else return H();
  }, bt = (ge) => {
    p.hoveringIndex = ge ?? -1;
  }, Ut = () => {
    e.multiple ? p.hoveringIndex = G.value.findIndex((ge) => e.modelValue.some((Ve) => Ft(Ve) === Ft(ge))) : p.hoveringIndex = G.value.findIndex((ge) => Ft(ge) === Ft(e.modelValue));
  }, fn = (ge) => {
    if (p.inputValue = ge.target.value, e.remote) Fe();
    else return fe();
  }, pl = (ge) => {
    if (U.value = false, L.value) {
      const Ve = new FocusEvent("focus", ge);
      F(Ve);
    }
  }, qn = () => (p.isBeforeHide = false, $e(() => {
    ~Nt.value && vl(p.hoveringIndex);
  })), vl = (ge) => {
    O.value.scrollToItem(ge);
  }, hl = (ge, Ve) => {
    const ct = Ft(ge);
    if (qe.value.has(ct)) {
      const { option: mt } = qe.value.get(ct);
      return mt;
    }
    if (Ve && Ve.length) {
      const mt = Ve.find((on) => Ft(d(on)) === ct);
      if (mt) return mt;
    }
    return { [u.value.value]: ge, [u.value.label]: ge };
  }, Xl = (ge = false) => {
    if (e.multiple) if (e.modelValue.length > 0) {
      const Ve = p.cachedOptions.slice();
      p.cachedOptions.length = 0, p.previousValue = e.modelValue.toString();
      for (const ct of e.modelValue) {
        const mt = hl(ct, Ve);
        p.cachedOptions.push(mt);
      }
    } else p.cachedOptions = [], p.previousValue = void 0;
    else if (re.value) {
      p.previousValue = e.modelValue;
      const Ve = G.value, ct = Ve.findIndex((mt) => Ft(d(mt)) === Ft(e.modelValue));
      ~ct ? p.selectedLabel = c(Ve[ct]) : (!p.selectedLabel || ge) && (p.selectedLabel = Ft(e.modelValue));
    } else p.selectedLabel = "", p.previousValue = void 0;
    ae(), Ge();
  };
  return ue(() => e.fitInputWidth, () => {
    Ge();
  }), ue(U, (ge) => {
    ge ? (e.persistent || Ge(), He("")) : (p.inputValue = "", p.previousQuery = null, p.isBeforeHide = true, xe("")), t("visible-change", ge);
  }), ue(() => e.modelValue, (ge, Ve) => {
    var ct;
    (!ge || Se(ge) && ge.length === 0 || e.multiple && !Zt(ge.toString(), p.previousValue) || !e.multiple && Ft(ge) !== Ft(p.previousValue)) && Xl(true), !Zt(ge, Ve) && e.validateEvent && ((ct = r == null ? void 0 : r.validate) == null || ct.call(r, "change").catch((on) => void 0));
  }, { deep: true }), ue(() => e.options, () => {
    const ge = S.value;
    (!ge || ge && document.activeElement !== ge) && Xl();
  }, { deep: true, flush: "post" }), ue(() => G.value, () => (Ge(), O.value && $e(O.value.resetScrollTop))), an(() => {
    p.isBeforeHide || De();
  }), an(() => {
    const { valueKey: ge, options: Ve } = e, ct = /* @__PURE__ */ new Map();
    for (const mt of Ve) {
      const on = d(mt);
      let In = on;
      if (gt(In) && (In = xt(on, ge)), ct.get(In)) break;
      ct.set(In, true);
    }
  }), Xe(() => {
    Xl();
  }), Lt(g, Yn), Lt(T, Ot), Lt(O, Lo), Lt(A, Lo), Lt(_, Pl), Lt(I, bn), { inputId: i, collapseTagSize: Te, currentPlaceholder: ht, expanded: U, emptyText: se, popupHeight: ee, debounce: me, allOptions: V, filteredOptions: G, iconComponent: Q, iconReverse: ie, tagStyle: st, collapseTagStyle: Ce, popperSize: b, dropdownMenuVisible: _t, hasModelValue: re, shouldShowPlaceholder: Ue, selectDisabled: ne, selectSize: Ne, needStatusIcon: Z, showClearBtn: le, states: p, isFocused: L, nsSelect: l, nsInput: a, inputRef: S, menuRef: O, tagMenuRef: _, tooltipRef: w, tagTooltipRef: C, selectRef: g, wrapperRef: A, selectionRef: T, prefixRef: E, suffixRef: M, collapseItemRef: I, popperRef: Pt, validateState: ce, validateIcon: Ie, showTagList: kt, collapseTagList: dn, debouncedOnInputChange: Fe, deleteTag: Ss, getLabel: c, getValue: d, getDisabled: f, getValueKey: Ft, handleClear: Ts, handleClickOutside: pl, handleDel: $s, handleEsc: ks, focus: Gl, blur: ua, handleMenuEnter: qn, handleResize: Yn, resetSelectionWidth: Ot, updateTooltip: Lo, updateTagTooltip: Pl, updateOptions: De, toggleMenu: H, scrollTo: vl, onInput: fn, onKeyboardNavigate: be, onKeyboardSelect: ze, onSelect: ia, onHover: bt, handleCompositionStart: P, handleCompositionEnd: W, handleCompositionUpdate: te };
}, pT = K({ name: "ElSelectV2", components: { ElSelectMenu: cT, ElTag: yo, ElTooltip: rn, ElIcon: Ee }, directives: { ClickOutside: il }, props: U$, emits: q$, setup(e, { emit: t }) {
  const n = y(() => {
    const { modelValue: i, multiple: u } = e, c = u ? [] : void 0;
    return Se(i) ? u ? i : c : u ? c : i;
  }), l = fT(Ct({ ...tn(e), modelValue: n }), t), { calculatorRef: a, inputStyle: s } = Ci();
  ut(Ei, { props: Ct({ ...tn(e), height: l.popupHeight, modelValue: n }), expanded: l.expanded, tooltipRef: l.tooltipRef, onSelect: l.onSelect, onHover: l.onHover, onKeyboardNavigate: l.onKeyboardNavigate, onKeyboardSelect: l.onKeyboardSelect });
  const r = y(() => e.multiple ? l.states.cachedOptions.map((i) => i.label) : l.states.selectedLabel);
  return { ...l, modelValue: n, selectedLabel: r, calculatorRef: a, inputStyle: s };
} });
function vT(e, t, n, l, a, s) {
  const r = nt("el-tag"), i = nt("el-tooltip"), u = nt("el-icon"), c = nt("el-select-menu"), d = ls("click-outside");
  return Ye((k(), D("div", { ref: "selectRef", class: $([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]), onMouseenter: (f) => e.states.inputHovering = true, onMouseleave: (f) => e.states.inputHovering = false }, [z(i, { ref: "tooltipRef", visible: e.dropdownMenuVisible, teleported: e.teleported, "popper-class": [e.nsSelect.e("popper"), e.popperClass], "gpu-acceleration": false, "stop-popper-mouse-event": false, "popper-options": e.popperOptions, "fallback-placements": e.fallbackPlacements, effect: e.effect, placement: e.placement, pure: "", transition: `${e.nsSelect.namespace.value}-zoom-in-top`, trigger: "click", persistent: e.persistent, "append-to": e.appendTo, "show-arrow": e.showArrow, offset: e.offset, onBeforeShow: e.handleMenuEnter, onHide: (f) => e.states.isBeforeHide = false }, { default: j(() => [x("div", { ref: "wrapperRef", class: $([e.nsSelect.e("wrapper"), e.nsSelect.is("focused", e.isFocused), e.nsSelect.is("hovering", e.states.inputHovering), e.nsSelect.is("filterable", e.filterable), e.nsSelect.is("disabled", e.selectDisabled)]), onClick: Re(e.toggleMenu, ["prevent"]) }, [e.$slots.prefix ? (k(), D("div", { key: 0, ref: "prefixRef", class: $(e.nsSelect.e("prefix")) }, [X(e.$slots, "prefix")], 2)) : J("v-if", true), x("div", { ref: "selectionRef", class: $([e.nsSelect.e("selection"), e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.modelValue.length)]) }, [e.multiple ? X(e.$slots, "tag", { key: 0 }, () => [(k(true), D(Pe, null, it(e.showTagList, (f) => (k(), D("div", { key: e.getValueKey(e.getValue(f)), class: $(e.nsSelect.e("selected-item")) }, [z(r, { closable: !e.selectDisabled && !e.getDisabled(f), size: e.collapseTagSize, type: e.tagType, effect: e.tagEffect, "disable-transitions": "", style: Me(e.tagStyle), onClose: (m) => e.deleteTag(m, f) }, { default: j(() => [x("span", { class: $(e.nsSelect.e("tags-text")) }, [X(e.$slots, "label", { label: e.getLabel(f), value: e.getValue(f) }, () => [at(he(e.getLabel(f)), 1)])], 2)]), _: 2 }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])], 2))), 128)), e.collapseTags && e.modelValue.length > e.maxCollapseTags ? (k(), oe(i, { key: 0, ref: "tagTooltipRef", disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip, "fallback-placements": ["bottom", "top", "right", "left"], effect: e.effect, placement: "bottom", teleported: e.teleported }, { default: j(() => [x("div", { ref: "collapseItemRef", class: $(e.nsSelect.e("selected-item")) }, [z(r, { closable: false, size: e.collapseTagSize, type: e.tagType, effect: e.tagEffect, style: Me(e.collapseTagStyle), "disable-transitions": "" }, { default: j(() => [x("span", { class: $(e.nsSelect.e("tags-text")) }, " + " + he(e.modelValue.length - e.maxCollapseTags), 3)]), _: 1 }, 8, ["size", "type", "effect", "style"])], 2)]), content: j(() => [x("div", { ref: "tagMenuRef", class: $(e.nsSelect.e("selection")) }, [(k(true), D(Pe, null, it(e.collapseTagList, (f) => (k(), D("div", { key: e.getValueKey(e.getValue(f)), class: $(e.nsSelect.e("selected-item")) }, [z(r, { class: "in-tooltip", closable: !e.selectDisabled && !e.getDisabled(f), size: e.collapseTagSize, type: e.tagType, effect: e.tagEffect, "disable-transitions": "", onClose: (m) => e.deleteTag(m, f) }, { default: j(() => [x("span", { class: $(e.nsSelect.e("tags-text")) }, [X(e.$slots, "label", { label: e.getLabel(f), value: e.getValue(f) }, () => [at(he(e.getLabel(f)), 1)])], 2)]), _: 2 }, 1032, ["closable", "size", "type", "effect", "onClose"])], 2))), 128))], 2)]), _: 3 }, 8, ["disabled", "effect", "teleported"])) : J("v-if", true)]) : J("v-if", true), x("div", { class: $([e.nsSelect.e("selected-item"), e.nsSelect.e("input-wrapper"), e.nsSelect.is("hidden", !e.filterable)]) }, [Ye(x("input", { id: e.inputId, ref: "inputRef", "onUpdate:modelValue": (f) => e.states.inputValue = f, style: Me(e.inputStyle), autocomplete: e.autocomplete, tabindex: e.tabindex, "aria-autocomplete": "list", "aria-haspopup": "listbox", autocapitalize: "off", "aria-expanded": e.expanded, "aria-label": e.ariaLabel, class: $([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]), disabled: e.selectDisabled, role: "combobox", readonly: !e.filterable, spellcheck: "false", type: "text", name: e.name, onInput: e.onInput, onCompositionstart: e.handleCompositionStart, onCompositionupdate: e.handleCompositionUpdate, onCompositionend: e.handleCompositionEnd, onKeydown: [$t(Re((f) => e.onKeyboardNavigate("backward"), ["stop", "prevent"]), ["up"]), $t(Re((f) => e.onKeyboardNavigate("forward"), ["stop", "prevent"]), ["down"]), $t(Re(e.onKeyboardSelect, ["stop", "prevent"]), ["enter"]), $t(Re(e.handleEsc, ["stop", "prevent"]), ["esc"]), $t(Re(e.handleDel, ["stop"]), ["delete"])], onClick: Re(e.toggleMenu, ["stop"]) }, null, 46, ["id", "onUpdate:modelValue", "autocomplete", "tabindex", "aria-expanded", "aria-label", "disabled", "readonly", "name", "onInput", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown", "onClick"]), [[ns, e.states.inputValue]]), e.filterable ? (k(), D("span", { key: 0, ref: "calculatorRef", "aria-hidden": "true", class: $(e.nsSelect.e("input-calculator")), textContent: he(e.states.inputValue) }, null, 10, ["textContent"])) : J("v-if", true)], 2), e.shouldShowPlaceholder ? (k(), D("div", { key: 1, class: $([e.nsSelect.e("selected-item"), e.nsSelect.e("placeholder"), e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)]) }, [e.hasModelValue ? X(e.$slots, "label", { key: 0, label: e.currentPlaceholder, value: e.modelValue }, () => [x("span", null, he(e.currentPlaceholder), 1)]) : (k(), D("span", { key: 1 }, he(e.currentPlaceholder), 1))], 2)) : J("v-if", true)], 2), x("div", { ref: "suffixRef", class: $(e.nsSelect.e("suffix")) }, [e.iconComponent ? Ye((k(), oe(u, { key: 0, class: $([e.nsSelect.e("caret"), e.nsInput.e("icon"), e.iconReverse]) }, { default: j(() => [(k(), oe(Je(e.iconComponent)))]), _: 1 }, 8, ["class"])), [[pt, !e.showClearBtn]]) : J("v-if", true), e.showClearBtn && e.clearIcon ? (k(), oe(u, { key: 1, class: $([e.nsSelect.e("caret"), e.nsInput.e("icon"), e.nsSelect.e("clear")]), onClick: Re(e.handleClear, ["prevent", "stop"]) }, { default: j(() => [(k(), oe(Je(e.clearIcon)))]), _: 1 }, 8, ["class", "onClick"])) : J("v-if", true), e.validateState && e.validateIcon && e.needStatusIcon ? (k(), oe(u, { key: 2, class: $([e.nsInput.e("icon"), e.nsInput.e("validateIcon"), e.nsInput.is("loading", e.validateState === "validating")]) }, { default: j(() => [(k(), oe(Je(e.validateIcon)))]), _: 1 }, 8, ["class"])) : J("v-if", true)], 2)], 10, ["onClick"])]), content: j(() => [z(c, { ref: "menuRef", data: e.filteredOptions, width: e.popperSize, "hovering-index": e.states.hoveringIndex, "scrollbar-always-on": e.scrollbarAlwaysOn }, On({ default: j((f) => [X(e.$slots, "default", Mn(sl(f)))]), _: 2 }, [e.$slots.header ? { name: "header", fn: j(() => [x("div", { class: $(e.nsSelect.be("dropdown", "header")) }, [X(e.$slots, "header")], 2)]) } : void 0, e.$slots.loading && e.loading ? { name: "loading", fn: j(() => [x("div", { class: $(e.nsSelect.be("dropdown", "loading")) }, [X(e.$slots, "loading")], 2)]) } : e.loading || e.filteredOptions.length === 0 ? { name: "empty", fn: j(() => [x("div", { class: $(e.nsSelect.be("dropdown", "empty")) }, [X(e.$slots, "empty", {}, () => [x("span", null, he(e.emptyText), 1)])], 2)]) } : void 0, e.$slots.footer ? { name: "footer", fn: j(() => [x("div", { class: $(e.nsSelect.be("dropdown", "footer")) }, [X(e.$slots, "footer")], 2)]) } : void 0]), 1032, ["data", "width", "hovering-index", "scrollbar-always-on"])]), _: 3 }, 8, ["visible", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "placement", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])], 42, ["onMouseenter", "onMouseleave"])), [[d, e.handleClickOutside, e.popperRef]]);
}
var hT = ve(pT, [["render", vT], ["__file", "select.vue"]]);
const mT = We(hT), gT = pe({ animated: { type: Boolean, default: false }, count: { type: Number, default: 1 }, rows: { type: Number, default: 3 }, loading: { type: Boolean, default: true }, throttle: { type: Y([Number, Object]) } }), bT = pe({ variant: { type: String, values: ["circle", "rect", "h1", "h3", "text", "caption", "p", "image", "button"], default: "text" } }), yT = K({ name: "ElSkeletonItem" }), CT = K({ ...yT, props: bT, setup(e) {
  const t = de("skeleton");
  return (n, l) => (k(), D("div", { class: $([o(t).e("item"), o(t).e(n.variant)]) }, [n.variant === "image" ? (k(), oe(o(oh), { key: 0 })) : J("v-if", true)], 2));
} });
var Ga = ve(CT, [["__file", "skeleton-item.vue"]]);
const wT = (e, t = 0) => {
  if (t === 0) return e;
  const n = gt(t) && !!t.initVal, l = N(n);
  let a = null;
  const s = (i) => {
    if (vt(i)) {
      l.value = e.value;
      return;
    }
    a && clearTimeout(a), a = setTimeout(() => {
      l.value = e.value;
    }, i);
  }, r = (i) => {
    i === "leading" ? _e(t) ? s(t) : s(t.leading) : gt(t) ? s(t.trailing) : l.value = false;
  };
  return Xe(() => r("leading")), ue(() => e.value, (i) => {
    r(i ? "leading" : "trailing");
  }), l;
}, ST = K({ name: "ElSkeleton" }), kT = K({ ...ST, props: gT, setup(e, { expose: t }) {
  const n = e, l = de("skeleton"), a = wT(yt(n, "loading"), n.throttle);
  return t({ uiLoading: a }), (s, r) => o(a) ? (k(), D("div", lt({ key: 0, class: [o(l).b(), o(l).is("animated", s.animated)] }, s.$attrs), [(k(true), D(Pe, null, it(s.count, (i) => (k(), D(Pe, { key: i }, [o(a) ? X(s.$slots, "template", { key: i }, () => [z(Ga, { class: $(o(l).is("first")), variant: "p" }, null, 8, ["class"]), (k(true), D(Pe, null, it(s.rows, (u) => (k(), oe(Ga, { key: u, class: $([o(l).e("paragraph"), o(l).is("last", u === s.rows && s.rows > 1)]), variant: "p" }, null, 8, ["class"]))), 128))]) : J("v-if", true)], 64))), 128))], 16)) : X(s.$slots, "default", Mn(lt({ key: 1 }, s.$attrs)));
} });
var ET = ve(kT, [["__file", "skeleton.vue"]]);
const $T = We(ET, { SkeletonItem: Ga }), TT = Vt(Ga), dp = Symbol("sliderContextKey"), NT = pe({ modelValue: { type: Y([Number, Array]), default: 0 }, id: { type: String, default: void 0 }, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, step: { type: Number, default: 1 }, showInput: Boolean, showInputControls: { type: Boolean, default: true }, size: Wt, inputSize: Wt, showStops: Boolean, showTooltip: { type: Boolean, default: true }, formatTooltip: { type: Y(Function), default: void 0 }, disabled: Boolean, range: Boolean, vertical: Boolean, height: String, debounce: { type: Number, default: 300 }, rangeStartLabel: { type: String, default: void 0 }, rangeEndLabel: { type: String, default: void 0 }, formatValueText: { type: Y(Function), default: void 0 }, tooltipClass: { type: String, default: void 0 }, placement: { type: String, values: Yl, default: "top" }, marks: { type: Y(Object) }, validateEvent: { type: Boolean, default: true }, persistent: { type: Boolean, default: true }, ...ln(["ariaLabel"]) }), As = (e) => _e(e) || Se(e) && e.every(_e), IT = { [Ae]: As, [Jt]: As, [et]: As }, _T = pe({ modelValue: { type: Number, default: 0 }, vertical: Boolean, tooltipClass: String, placement: { type: String, values: Yl, default: "top" } }), MT = { [Ae]: (e) => _e(e) }, OT = (e, t, n) => {
  const l = N(), a = N(false), s = y(() => t.value instanceof Function), r = y(() => s.value && t.value(e.modelValue) || e.modelValue), i = Pn(() => {
    n.value && (a.value = true);
  }, 50), u = Pn(() => {
    n.value && (a.value = false);
  }, 50);
  return { tooltip: l, tooltipVisible: a, formatValue: r, displayTooltip: i, hideTooltip: u };
}, PT = (e, t, n) => {
  const { disabled: l, min: a, max: s, step: r, showTooltip: i, persistent: u, precision: c, sliderSize: d, formatTooltip: f, emitChange: m, resetSize: h, updateDragging: v } = we(dp), { tooltip: p, tooltipVisible: b, formatValue: g, displayTooltip: T, hideTooltip: w } = OT(e, f, i), C = N(), S = y(() => `${(e.modelValue - a.value) / (s.value - a.value) * 100}%`), E = y(() => e.vertical ? { bottom: S.value } : { left: S.value }), M = () => {
    t.hovering = true, T();
  }, O = () => {
    t.hovering = false, t.dragging || w();
  }, _ = (Z) => {
    l.value || (Z.preventDefault(), B(Z), window.addEventListener("mousemove", G), window.addEventListener("touchmove", G), window.addEventListener("mouseup", U), window.addEventListener("touchend", U), window.addEventListener("contextmenu", U), C.value.focus());
  }, I = (Z) => {
    l.value || (t.newPosition = Number.parseFloat(S.value) + Z / (s.value - a.value) * 100, ne(t.newPosition), m());
  }, R = () => {
    I(-r.value);
  }, P = () => {
    I(r.value);
  }, W = () => {
    I(-r.value * 4);
  }, te = () => {
    I(r.value * 4);
  }, A = () => {
    l.value || (ne(0), m());
  }, L = () => {
    l.value || (ne(100), m());
  }, F = (Z) => {
    let ee = true;
    switch (Z.code) {
      case ye.left:
      case ye.down:
        R();
        break;
      case ye.right:
      case ye.up:
        P();
        break;
      case ye.home:
        A();
        break;
      case ye.end:
        L();
        break;
      case ye.pageDown:
        W();
        break;
      case ye.pageUp:
        te();
        break;
      default:
        ee = false;
        break;
    }
    ee && Z.preventDefault();
  }, V = (Z) => {
    let ee, re;
    return Z.type.startsWith("touch") ? (re = Z.touches[0].clientY, ee = Z.touches[0].clientX) : (re = Z.clientY, ee = Z.clientX), { clientX: ee, clientY: re };
  }, B = (Z) => {
    t.dragging = true, t.isClick = true;
    const { clientX: ee, clientY: re } = V(Z);
    e.vertical ? t.startY = re : t.startX = ee, t.startPosition = Number.parseFloat(S.value), t.newPosition = t.startPosition;
  }, G = (Z) => {
    if (t.dragging) {
      t.isClick = false, T(), h();
      let ee;
      const { clientX: re, clientY: le } = V(Z);
      e.vertical ? (t.currentY = le, ee = (t.startY - t.currentY) / d.value * 100) : (t.currentX = re, ee = (t.currentX - t.startX) / d.value * 100), t.newPosition = t.startPosition + ee, ne(t.newPosition);
    }
  }, U = () => {
    t.dragging && (setTimeout(() => {
      t.dragging = false, t.hovering || w(), t.isClick || ne(t.newPosition), m();
    }, 0), window.removeEventListener("mousemove", G), window.removeEventListener("touchmove", G), window.removeEventListener("mouseup", U), window.removeEventListener("touchend", U), window.removeEventListener("contextmenu", U));
  }, ne = async (Z) => {
    if (Z === null || Number.isNaN(+Z)) return;
    Z < 0 ? Z = 0 : Z > 100 && (Z = 100);
    const ee = 100 / ((s.value - a.value) / r.value);
    let le = Math.round(Z / ee) * ee * (s.value - a.value) * 0.01 + a.value;
    le = Number.parseFloat(le.toFixed(c.value)), le !== e.modelValue && n(Ae, le), !t.dragging && e.modelValue !== t.oldValue && (t.oldValue = e.modelValue), await $e(), t.dragging && T(), p.value.updatePopper();
  };
  return ue(() => t.dragging, (Z) => {
    v(Z);
  }), Et(C, "touchstart", _, { passive: false }), { disabled: l, button: C, tooltip: p, tooltipVisible: b, showTooltip: i, persistent: u, wrapperStyle: E, formatValue: g, handleMouseEnter: M, handleMouseLeave: O, onButtonDown: _, onKeyDown: F, setPosition: ne };
}, RT = K({ name: "ElSliderButton" }), LT = K({ ...RT, props: _T, emits: MT, setup(e, { expose: t, emit: n }) {
  const l = e, a = de("slider"), s = Ct({ hovering: false, dragging: false, isClick: false, startX: 0, currentX: 0, startY: 0, currentY: 0, startPosition: 0, newPosition: 0, oldValue: l.modelValue }), r = y(() => d.value ? f.value : false), { disabled: i, button: u, tooltip: c, showTooltip: d, persistent: f, tooltipVisible: m, wrapperStyle: h, formatValue: v, handleMouseEnter: p, handleMouseLeave: b, onButtonDown: g, onKeyDown: T, setPosition: w } = PT(l, s, n), { hovering: C, dragging: S } = tn(s);
  return t({ onButtonDown: g, onKeyDown: T, setPosition: w, hovering: C, dragging: S }), (E, M) => (k(), D("div", { ref_key: "button", ref: u, class: $([o(a).e("button-wrapper"), { hover: o(C), dragging: o(S) }]), style: Me(o(h)), tabindex: o(i) ? -1 : 0, onMouseenter: o(p), onMouseleave: o(b), onMousedown: o(g), onFocus: o(p), onBlur: o(b), onKeydown: o(T) }, [z(o(rn), { ref_key: "tooltip", ref: c, visible: o(m), placement: E.placement, "fallback-placements": ["top", "bottom", "right", "left"], "stop-popper-mouse-event": false, "popper-class": E.tooltipClass, disabled: !o(d), persistent: o(r) }, { content: j(() => [x("span", null, he(o(v)), 1)]), default: j(() => [x("div", { class: $([o(a).e("button"), { hover: o(C), dragging: o(S) }]) }, null, 2)]), _: 1 }, 8, ["visible", "placement", "popper-class", "disabled", "persistent"])], 46, ["tabindex", "onMouseenter", "onMouseleave", "onMousedown", "onFocus", "onBlur", "onKeydown"]));
} });
var tc = ve(LT, [["__file", "button.vue"]]);
const BT = pe({ mark: { type: Y([String, Object]), default: void 0 } });
var DT = K({ name: "ElSliderMarker", props: BT, setup(e) {
  const t = de("slider"), n = y(() => Be(e.mark) ? e.mark : e.mark.label), l = y(() => Be(e.mark) ? void 0 : e.mark.style);
  return () => Oe("div", { class: t.e("marks-text"), style: l.value }, n.value);
} });
const VT = (e, t, n) => {
  const { form: l, formItem: a } = un(), s = Mt(), r = N(), i = N(), u = { firstButton: r, secondButton: i }, c = y(() => e.disabled || (l == null ? void 0 : l.disabled) || false), d = y(() => Math.min(t.firstValue, t.secondValue)), f = y(() => Math.max(t.firstValue, t.secondValue)), m = y(() => e.range ? `${100 * (f.value - d.value) / (e.max - e.min)}%` : `${100 * (t.firstValue - e.min) / (e.max - e.min)}%`), h = y(() => e.range ? `${100 * (d.value - e.min) / (e.max - e.min)}%` : "0%"), v = y(() => e.vertical ? { height: e.height } : {}), p = y(() => e.vertical ? { height: m.value, bottom: h.value } : { width: m.value, left: h.value }), b = () => {
    s.value && (t.sliderSize = s.value[`client${e.vertical ? "Height" : "Width"}`]);
  }, g = (P) => {
    const W = e.min + P * (e.max - e.min) / 100;
    if (!e.range) return r;
    let te;
    return Math.abs(d.value - W) < Math.abs(f.value - W) ? te = t.firstValue < t.secondValue ? "firstButton" : "secondButton" : te = t.firstValue > t.secondValue ? "firstButton" : "secondButton", u[te];
  }, T = (P) => {
    const W = g(P);
    return W.value.setPosition(P), W;
  }, w = (P) => {
    t.firstValue = P ?? e.min, S(e.range ? [d.value, f.value] : P ?? e.min);
  }, C = (P) => {
    t.secondValue = P, e.range && S([d.value, f.value]);
  }, S = (P) => {
    n(Ae, P), n(Jt, P);
  }, E = async () => {
    await $e(), n(et, e.range ? [d.value, f.value] : e.modelValue);
  }, M = (P) => {
    var W, te, A, L, F, V;
    if (c.value || t.dragging) return;
    b();
    let B = 0;
    if (e.vertical) {
      const G = (A = (te = (W = P.touches) == null ? void 0 : W.item(0)) == null ? void 0 : te.clientY) != null ? A : P.clientY;
      B = (s.value.getBoundingClientRect().bottom - G) / t.sliderSize * 100;
    } else {
      const G = (V = (F = (L = P.touches) == null ? void 0 : L.item(0)) == null ? void 0 : F.clientX) != null ? V : P.clientX, U = s.value.getBoundingClientRect().left;
      B = (G - U) / t.sliderSize * 100;
    }
    if (!(B < 0 || B > 100)) return T(B);
  };
  return { elFormItem: a, slider: s, firstButton: r, secondButton: i, sliderDisabled: c, minValue: d, maxValue: f, runwayStyle: v, barStyle: p, resetSize: b, setPosition: T, emitChange: E, onSliderWrapperPrevent: (P) => {
    var W, te;
    ((W = u.firstButton.value) != null && W.dragging || (te = u.secondButton.value) != null && te.dragging) && P.preventDefault();
  }, onSliderClick: (P) => {
    M(P) && E();
  }, onSliderDown: async (P) => {
    const W = M(P);
    W && (await $e(), W.value.onButtonDown(P));
  }, onSliderMarkerDown: (P) => {
    if (c.value || t.dragging) return;
    T(P) && E();
  }, setFirstValue: w, setSecondValue: C };
}, AT = (e, t, n, l) => ({ stops: y(() => {
  if (!e.showStops || e.min > e.max) return [];
  if (e.step === 0) return [];
  const r = (e.max - e.min) / e.step, i = 100 * e.step / (e.max - e.min), u = Array.from({ length: r - 1 }).map((c, d) => (d + 1) * i);
  return e.range ? u.filter((c) => c < 100 * (n.value - e.min) / (e.max - e.min) || c > 100 * (l.value - e.min) / (e.max - e.min)) : u.filter((c) => c > 100 * (t.firstValue - e.min) / (e.max - e.min));
}), getStopStyle: (r) => e.vertical ? { bottom: `${r}%` } : { left: `${r}%` } }), FT = (e) => y(() => e.marks ? Object.keys(e.marks).map(Number.parseFloat).sort((n, l) => n - l).filter((n) => n <= e.max && n >= e.min).map((n) => ({ point: n, position: (n - e.min) * 100 / (e.max - e.min), mark: e.marks[n] })) : []), zT = (e, t, n, l, a, s) => {
  const r = (c) => {
    a(Ae, c), a(Jt, c);
  }, i = () => e.range ? ![n.value, l.value].every((c, d) => c === t.oldValue[d]) : e.modelValue !== t.oldValue, u = () => {
    var c, d;
    e.min > e.max && Kt("Slider", "min should not be greater than max.");
    const f = e.modelValue;
    e.range && Se(f) ? f[1] < e.min ? r([e.min, e.min]) : f[0] > e.max ? r([e.max, e.max]) : f[0] < e.min ? r([e.min, f[1]]) : f[1] > e.max ? r([f[0], e.max]) : (t.firstValue = f[0], t.secondValue = f[1], i() && (e.validateEvent && ((c = s == null ? void 0 : s.validate) == null || c.call(s, "change").catch((m) => void 0)), t.oldValue = f.slice())) : !e.range && _e(f) && !Number.isNaN(f) && (f < e.min ? r(e.min) : f > e.max ? r(e.max) : (t.firstValue = f, i() && (e.validateEvent && ((d = s == null ? void 0 : s.validate) == null || d.call(s, "change").catch((m) => void 0)), t.oldValue = f)));
  };
  u(), ue(() => t.dragging, (c) => {
    c || u();
  }), ue(() => e.modelValue, (c, d) => {
    t.dragging || Se(c) && Se(d) && c.every((f, m) => f === d[m]) && t.firstValue === c[0] && t.secondValue === c[1] || u();
  }, { deep: true }), ue(() => [e.min, e.max], () => {
    u();
  });
}, xT = (e, t, n) => {
  const l = N();
  return Xe(async () => {
    e.range ? (Se(e.modelValue) ? (t.firstValue = Math.max(e.min, e.modelValue[0]), t.secondValue = Math.min(e.max, e.modelValue[1])) : (t.firstValue = e.min, t.secondValue = e.max), t.oldValue = [t.firstValue, t.secondValue]) : (!_e(e.modelValue) || Number.isNaN(e.modelValue) ? t.firstValue = e.min : t.firstValue = Math.min(e.max, Math.max(e.min, e.modelValue)), t.oldValue = t.firstValue), Et(window, "resize", n), await $e(), n();
  }), { sliderWrapper: l };
}, HT = K({ name: "ElSlider" }), KT = K({ ...HT, props: NT, emits: IT, setup(e, { expose: t, emit: n }) {
  const l = e, a = de("slider"), { t: s } = ft(), r = Ct({ firstValue: 0, secondValue: 0, oldValue: 0, dragging: false, sliderSize: 1 }), { elFormItem: i, slider: u, firstButton: c, secondButton: d, sliderDisabled: f, minValue: m, maxValue: h, runwayStyle: v, barStyle: p, resetSize: b, emitChange: g, onSliderWrapperPrevent: T, onSliderClick: w, onSliderDown: C, onSliderMarkerDown: S, setFirstValue: E, setSecondValue: M } = VT(l, r, n), { stops: O, getStopStyle: _ } = AT(l, r, m, h), { inputId: I, isLabeledByFormItem: R } = zn(l, { formItemContext: i }), P = Ht(), W = y(() => l.inputSize || P.value), te = y(() => l.ariaLabel || s("el.slider.defaultLabel", { min: l.min, max: l.max })), A = y(() => l.range ? l.rangeStartLabel || s("el.slider.defaultRangeStartLabel") : te.value), L = y(() => l.formatValueText ? l.formatValueText(Z.value) : `${Z.value}`), F = y(() => l.rangeEndLabel || s("el.slider.defaultRangeEndLabel")), V = y(() => l.formatValueText ? l.formatValueText(ee.value) : `${ee.value}`), B = y(() => [a.b(), a.m(P.value), a.is("vertical", l.vertical), { [a.m("with-input")]: l.showInput }]), G = FT(l);
  zT(l, r, m, h, n, i);
  const U = y(() => {
    const Q = [l.min, l.max, l.step].map((ie) => {
      const ce = `${ie}`.split(".")[1];
      return ce ? ce.length : 0;
    });
    return Math.max.apply(null, Q);
  }), { sliderWrapper: ne } = xT(l, r, b), { firstValue: Z, secondValue: ee, sliderSize: re } = tn(r), le = (Q) => {
    r.dragging = Q;
  };
  return Et(ne, "touchstart", T, { passive: false }), Et(ne, "touchmove", T, { passive: false }), ut(dp, { ...tn(l), sliderSize: re, disabled: f, precision: U, emitChange: g, resetSize: b, updateDragging: le }), t({ onSliderClick: w }), (Q, ie) => {
    var ce, Ie;
    return k(), D("div", { id: Q.range ? o(I) : void 0, ref_key: "sliderWrapper", ref: ne, class: $(o(B)), role: Q.range ? "group" : void 0, "aria-label": Q.range && !o(R) ? o(te) : void 0, "aria-labelledby": Q.range && o(R) ? (ce = o(i)) == null ? void 0 : ce.labelId : void 0 }, [x("div", { ref_key: "slider", ref: u, class: $([o(a).e("runway"), { "show-input": Q.showInput && !Q.range }, o(a).is("disabled", o(f))]), style: Me(o(v)), onMousedown: o(C), onTouchstartPassive: o(C) }, [x("div", { class: $(o(a).e("bar")), style: Me(o(p)) }, null, 6), z(tc, { id: Q.range ? void 0 : o(I), ref_key: "firstButton", ref: c, "model-value": o(Z), vertical: Q.vertical, "tooltip-class": Q.tooltipClass, placement: Q.placement, role: "slider", "aria-label": Q.range || !o(R) ? o(A) : void 0, "aria-labelledby": !Q.range && o(R) ? (Ie = o(i)) == null ? void 0 : Ie.labelId : void 0, "aria-valuemin": Q.min, "aria-valuemax": Q.range ? o(ee) : Q.max, "aria-valuenow": o(Z), "aria-valuetext": o(L), "aria-orientation": Q.vertical ? "vertical" : "horizontal", "aria-disabled": o(f), "onUpdate:modelValue": o(E) }, null, 8, ["id", "model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-labelledby", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"]), Q.range ? (k(), oe(tc, { key: 0, ref_key: "secondButton", ref: d, "model-value": o(ee), vertical: Q.vertical, "tooltip-class": Q.tooltipClass, placement: Q.placement, role: "slider", "aria-label": o(F), "aria-valuemin": o(Z), "aria-valuemax": Q.max, "aria-valuenow": o(ee), "aria-valuetext": o(V), "aria-orientation": Q.vertical ? "vertical" : "horizontal", "aria-disabled": o(f), "onUpdate:modelValue": o(M) }, null, 8, ["model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"])) : J("v-if", true), Q.showStops ? (k(), D("div", { key: 1 }, [(k(true), D(Pe, null, it(o(O), (me, se) => (k(), D("div", { key: se, class: $(o(a).e("stop")), style: Me(o(_)(me)) }, null, 6))), 128))])) : J("v-if", true), o(G).length > 0 ? (k(), D(Pe, { key: 2 }, [x("div", null, [(k(true), D(Pe, null, it(o(G), (me, se) => (k(), D("div", { key: se, style: Me(o(_)(me.position)), class: $([o(a).e("stop"), o(a).e("marks-stop")]) }, null, 6))), 128))]), x("div", { class: $(o(a).e("marks")) }, [(k(true), D(Pe, null, it(o(G), (me, se) => (k(), oe(o(DT), { key: se, mark: me.mark, style: Me(o(_)(me.position)), onMousedown: Re((ke) => o(S)(me.position), ["stop"]) }, null, 8, ["mark", "style", "onMousedown"]))), 128))], 2)], 64)) : J("v-if", true)], 46, ["onMousedown", "onTouchstartPassive"]), Q.showInput && !Q.range ? (k(), oe(o(Wf), { key: 0, ref: "input", "model-value": o(Z), class: $(o(a).e("input")), step: Q.step, disabled: o(f), controls: Q.showInputControls, min: Q.min, max: Q.max, precision: o(U), debounce: Q.debounce, size: o(W), "onUpdate:modelValue": o(E), onChange: o(g) }, null, 8, ["model-value", "class", "step", "disabled", "controls", "min", "max", "precision", "debounce", "size", "onUpdate:modelValue", "onChange"])) : J("v-if", true)], 10, ["id", "role", "aria-label", "aria-labelledby"]);
  };
} });
var WT = ve(KT, [["__file", "slider.vue"]]);
const jT = We(WT), UT = pe({ prefixCls: { type: String } }), nc = K({ name: "ElSpaceItem", props: UT, setup(e, { slots: t }) {
  const n = de("space"), l = y(() => `${e.prefixCls || n.b()}__item`);
  return () => Oe("div", { class: l.value }, X(t, "default"));
} }), lc = { small: 8, default: 12, large: 16 };
function YT(e) {
  const t = de("space"), n = y(() => [t.b(), t.m(e.direction), e.class]), l = N(0), a = N(0), s = y(() => {
    const i = e.wrap || e.fill ? { flexWrap: "wrap" } : {}, u = { alignItems: e.alignment }, c = { rowGap: `${a.value}px`, columnGap: `${l.value}px` };
    return [i, u, c, e.style];
  }), r = y(() => e.fill ? { flexGrow: 1, minWidth: `${e.fillRatio}%` } : {});
  return an(() => {
    const { size: i = "small", wrap: u, direction: c, fill: d } = e;
    if (Se(i)) {
      const [f = 0, m = 0] = i;
      l.value = f, a.value = m;
    } else {
      let f;
      _e(i) ? f = i : f = lc[i || "small"] || lc.small, (u || d) && c === "horizontal" ? l.value = a.value = f : c === "horizontal" ? (l.value = f, a.value = 0) : (a.value = f, l.value = 0);
    }
  }), { classes: n, containerStyle: s, itemStyle: r };
}
const qT = pe({ direction: { type: String, values: ["horizontal", "vertical"], default: "horizontal" }, class: { type: Y([String, Object, Array]), default: "" }, style: { type: Y([String, Array, Object]), default: "" }, alignment: { type: Y(String), default: "center" }, prefixCls: { type: String }, spacer: { type: Y([Object, String, Number, Array]), default: null, validator: (e) => Dt(e) || _e(e) || Be(e) }, wrap: Boolean, fill: Boolean, fillRatio: { type: Number, default: 100 }, size: { type: [String, Array, Number], values: Qn, validator: (e) => _e(e) || Se(e) && e.length === 2 && e.every(_e) } }), GT = K({ name: "ElSpace", props: qT, setup(e, { slots: t }) {
  const { classes: n, containerStyle: l, itemStyle: a } = YT(e);
  function s(r, i = "", u = []) {
    const { prefixCls: c } = e;
    return r.forEach((d, f) => {
      er(d) ? Se(d.children) && d.children.forEach((m, h) => {
        er(m) && Se(m.children) ? s(m.children, `${i + h}-`, u) : u.push(z(nc, { style: a.value, prefixCls: c, key: `nested-${i + h}` }, { default: () => [m] }, Ln.PROPS | Ln.STYLE, ["style", "prefixCls"]));
      }) : Ay(d) && u.push(z(nc, { style: a.value, prefixCls: c, key: `LoopKey${i + f}` }, { default: () => [d] }, Ln.PROPS | Ln.STYLE, ["style", "prefixCls"]));
    }), u;
  }
  return () => {
    var r;
    const { spacer: i, direction: u } = e, c = X(t, "default", { key: 0 }, () => []);
    if (((r = c.children) != null ? r : []).length === 0) return null;
    if (Se(c.children)) {
      let d = s(c.children);
      if (i) {
        const f = d.length - 1;
        d = d.reduce((m, h, v) => {
          const p = [...m, h];
          return v !== f && p.push(z("span", { style: [a.value, u === "vertical" ? "width: 100%" : null], key: v }, [Dt(i) ? i : at(i, Ln.TEXT)], Ln.STYLE)), p;
        }, []);
      }
      return z("div", { class: n.value, style: l.value }, d, Ln.STYLE | Ln.CLASS);
    }
    return c.children;
  };
} }), XT = We(GT), ZT = pe({ decimalSeparator: { type: String, default: "." }, groupSeparator: { type: String, default: "," }, precision: { type: Number, default: 0 }, formatter: Function, value: { type: Y([Number, Object]), default: 0 }, prefix: String, suffix: String, title: String, valueStyle: { type: Y([String, Object, Array]) } }), JT = K({ name: "ElStatistic" }), QT = K({ ...JT, props: ZT, setup(e, { expose: t }) {
  const n = e, l = de("statistic"), a = y(() => {
    const { value: s, formatter: r, precision: i, decimalSeparator: u, groupSeparator: c } = n;
    if (Qe(r)) return r(s);
    if (!_e(s) || Number.isNaN(s)) return s;
    let [d, f = ""] = String(s).split(".");
    return f = f.padEnd(i, "0").slice(0, i > 0 ? i : 0), d = d.replace(/\B(?=(\d{3})+(?!\d))/g, c), [d, f].join(f ? u : "");
  });
  return t({ displayValue: a }), (s, r) => (k(), D("div", { class: $(o(l).b()) }, [s.$slots.title || s.title ? (k(), D("div", { key: 0, class: $(o(l).e("head")) }, [X(s.$slots, "title", {}, () => [at(he(s.title), 1)])], 2)) : J("v-if", true), x("div", { class: $(o(l).e("content")) }, [s.$slots.prefix || s.prefix ? (k(), D("div", { key: 0, class: $(o(l).e("prefix")) }, [X(s.$slots, "prefix", {}, () => [x("span", null, he(s.prefix), 1)])], 2)) : J("v-if", true), x("span", { class: $(o(l).e("number")), style: Me(s.valueStyle) }, he(o(a)), 7), s.$slots.suffix || s.suffix ? (k(), D("div", { key: 1, class: $(o(l).e("suffix")) }, [X(s.$slots, "suffix", {}, () => [x("span", null, he(s.suffix), 1)])], 2)) : J("v-if", true)], 2)], 2));
} });
var eN = ve(QT, [["__file", "statistic.vue"]]);
const fp = We(eN), tN = pe({ format: { type: String, default: "HH:mm:ss" }, prefix: String, suffix: String, title: String, value: { type: Y([Number, Object]), default: 0 }, valueStyle: { type: Y([String, Object, Array]) } }), nN = { finish: () => true, [et]: (e) => _e(e) }, lN = [["Y", 1e3 * 60 * 60 * 24 * 365], ["M", 1e3 * 60 * 60 * 24 * 30], ["D", 1e3 * 60 * 60 * 24], ["H", 1e3 * 60 * 60], ["m", 1e3 * 60], ["s", 1e3], ["S", 1]], oc = (e) => _e(e) ? new Date(e).getTime() : e.valueOf(), ac = (e, t) => {
  let n = e;
  const l = /\[([^\]]*)]/g;
  return lN.reduce((s, [r, i]) => {
    const u = new RegExp(`${r}+(?![^\\[\\]]*\\])`, "g");
    if (u.test(s)) {
      const c = Math.floor(n / i);
      return n -= c * i, s.replace(u, (d) => String(c).padStart(d.length, "0"));
    }
    return s;
  }, t).replace(l, "$1");
}, oN = K({ name: "ElCountdown" }), aN = K({ ...oN, props: tN, emits: nN, setup(e, { expose: t, emit: n }) {
  const l = e;
  let a;
  const s = N(0), r = y(() => ac(s.value, l.format)), i = (d) => ac(d, l.format), u = () => {
    a && (Wl(a), a = void 0);
  }, c = () => {
    const d = oc(l.value), f = () => {
      let m = d - Date.now();
      n(et, m), m <= 0 ? (m = 0, u(), n("finish")) : a = Il(f), s.value = m;
    };
    a = Il(f);
  };
  return Xe(() => {
    s.value = oc(l.value) - Date.now(), ue(() => [l.value, l.format], () => {
      u(), c();
    }, { immediate: true });
  }), It(() => {
    u();
  }), t({ displayValue: r }), (d, f) => (k(), oe(o(fp), { value: s.value, title: d.title, prefix: d.prefix, suffix: d.suffix, "value-style": d.valueStyle, formatter: i }, On({ _: 2 }, [it(d.$slots, (m, h) => ({ name: h, fn: j(() => [X(d.$slots, h)]) }))]), 1032, ["value", "title", "prefix", "suffix", "value-style"]));
} });
var sN = ve(aN, [["__file", "countdown.vue"]]);
const rN = We(sN), iN = pe({ space: { type: [Number, String], default: "" }, active: { type: Number, default: 0 }, direction: { type: String, default: "horizontal", values: ["horizontal", "vertical"] }, alignCenter: { type: Boolean }, simple: { type: Boolean }, finishStatus: { type: String, values: ["wait", "process", "finish", "error", "success"], default: "finish" }, processStatus: { type: String, values: ["wait", "process", "finish", "error", "success"], default: "process" } }), uN = { [et]: (e, t) => [e, t].every(_e) }, cN = K({ name: "ElSteps" }), dN = K({ ...cN, props: iN, emits: uN, setup(e, { emit: t }) {
  const n = e, l = de("steps"), { children: a, addChild: s, removeChild: r } = li(tt(), "ElStep");
  return ue(a, () => {
    a.value.forEach((i, u) => {
      i.setIndex(u);
    });
  }), ut("ElSteps", { props: n, steps: a, addStep: s, removeStep: r }), ue(() => n.active, (i, u) => {
    t(et, i, u);
  }), (i, u) => (k(), D("div", { class: $([o(l).b(), o(l).m(i.simple ? "simple" : i.direction)]) }, [X(i.$slots, "default")], 2));
} });
var fN = ve(dN, [["__file", "steps.vue"]]);
const pN = pe({ title: { type: String, default: "" }, icon: { type: St }, description: { type: String, default: "" }, status: { type: String, values: ["", "wait", "process", "finish", "error", "success"], default: "" } }), vN = K({ name: "ElStep" }), hN = K({ ...vN, props: pN, setup(e) {
  const t = e, n = de("step"), l = N(-1), a = N({}), s = N(""), r = we("ElSteps"), i = tt();
  Xe(() => {
    ue([() => r.props.active, () => r.props.processStatus, () => r.props.finishStatus], ([E]) => {
      C(E);
    }, { immediate: true });
  }), It(() => {
    r.removeStep(S.uid);
  });
  const u = y(() => t.status || s.value), c = y(() => {
    const E = r.steps.value[l.value - 1];
    return E ? E.currentStatus : "wait";
  }), d = y(() => r.props.alignCenter), f = y(() => r.props.direction === "vertical"), m = y(() => r.props.simple), h = y(() => r.steps.value.length), v = y(() => {
    var E;
    return ((E = r.steps.value[h.value - 1]) == null ? void 0 : E.uid) === (i == null ? void 0 : i.uid);
  }), p = y(() => m.value ? "" : r.props.space), b = y(() => [n.b(), n.is(m.value ? "simple" : r.props.direction), n.is("flex", v.value && !p.value && !d.value), n.is("center", d.value && !f.value && !m.value)]), g = y(() => {
    const E = { flexBasis: _e(p.value) ? `${p.value}px` : p.value ? p.value : `${100 / (h.value - (d.value ? 0 : 1))}%` };
    return f.value || v.value && (E.maxWidth = `${100 / h.value}%`), E;
  }), T = (E) => {
    l.value = E;
  }, w = (E) => {
    const M = E === "wait", O = { transitionDelay: `${M ? "-" : ""}${150 * l.value}ms` }, _ = E === r.props.processStatus || M ? 0 : 100;
    O.borderWidth = _ && !m.value ? "1px" : 0, O[r.props.direction === "vertical" ? "height" : "width"] = `${_}%`, a.value = O;
  }, C = (E) => {
    E > l.value ? s.value = r.props.finishStatus : E === l.value && c.value !== "error" ? s.value = r.props.processStatus : s.value = "wait";
    const M = r.steps.value[l.value - 1];
    M && M.calcProgress(s.value);
  }, S = Ct({ uid: i.uid, currentStatus: u, setIndex: T, calcProgress: w });
  return r.addStep(S), (E, M) => (k(), D("div", { style: Me(o(g)), class: $(o(b)) }, [J(" icon & line "), x("div", { class: $([o(n).e("head"), o(n).is(o(u))]) }, [o(m) ? J("v-if", true) : (k(), D("div", { key: 0, class: $(o(n).e("line")) }, [x("i", { class: $(o(n).e("line-inner")), style: Me(a.value) }, null, 6)], 2)), x("div", { class: $([o(n).e("icon"), o(n).is(E.icon || E.$slots.icon ? "icon" : "text")]) }, [X(E.$slots, "icon", {}, () => [E.icon ? (k(), oe(o(Ee), { key: 0, class: $(o(n).e("icon-inner")) }, { default: j(() => [(k(), oe(Je(E.icon)))]), _: 1 }, 8, ["class"])) : o(u) === "success" ? (k(), oe(o(Ee), { key: 1, class: $([o(n).e("icon-inner"), o(n).is("status")]) }, { default: j(() => [z(o(na))]), _: 1 }, 8, ["class"])) : o(u) === "error" ? (k(), oe(o(Ee), { key: 2, class: $([o(n).e("icon-inner"), o(n).is("status")]) }, { default: j(() => [z(o(An))]), _: 1 }, 8, ["class"])) : o(m) ? J("v-if", true) : (k(), D("div", { key: 3, class: $(o(n).e("icon-inner")) }, he(l.value + 1), 3))])], 2)], 2), J(" title & description "), x("div", { class: $(o(n).e("main")) }, [x("div", { class: $([o(n).e("title"), o(n).is(o(u))]) }, [X(E.$slots, "title", {}, () => [at(he(E.title), 1)])], 2), o(m) ? (k(), D("div", { key: 0, class: $(o(n).e("arrow")) }, null, 2)) : (k(), D("div", { key: 1, class: $([o(n).e("description"), o(n).is(o(u))]) }, [X(E.$slots, "description", {}, () => [at(he(E.description), 1)])], 2))], 2)], 6));
} });
var pp = ve(hN, [["__file", "item.vue"]]);
const mN = We(fN, { Step: pp }), gN = Vt(pp), vp = (e) => ["", ...Qn].includes(e), bN = pe({ modelValue: { type: [Boolean, String, Number], default: false }, disabled: Boolean, loading: Boolean, size: { type: String, validator: vp }, width: { type: [String, Number], default: "" }, inlinePrompt: Boolean, inactiveActionIcon: { type: St }, activeActionIcon: { type: St }, activeIcon: { type: St }, inactiveIcon: { type: St }, activeText: { type: String, default: "" }, inactiveText: { type: String, default: "" }, activeValue: { type: [Boolean, String, Number], default: true }, inactiveValue: { type: [Boolean, String, Number], default: false }, name: { type: String, default: "" }, validateEvent: { type: Boolean, default: true }, beforeChange: { type: Y(Function) }, id: String, tabindex: { type: [String, Number] }, ...ln(["ariaLabel"]) }), yN = { [Ae]: (e) => Tt(e) || Be(e) || _e(e), [et]: (e) => Tt(e) || Be(e) || _e(e), [Jt]: (e) => Tt(e) || Be(e) || _e(e) }, hp = "ElSwitch", CN = K({ name: hp }), wN = K({ ...CN, props: bN, emits: yN, setup(e, { expose: t, emit: n }) {
  const l = e, { formItem: a } = un(), s = Ht(), r = de("switch"), { inputId: i } = zn(l, { formItemContext: a }), u = cn(y(() => l.loading)), c = N(l.modelValue !== false), d = N(), f = N(), m = y(() => [r.b(), r.m(s.value), r.is("disabled", u.value), r.is("checked", g.value)]), h = y(() => [r.e("label"), r.em("label", "left"), r.is("active", !g.value)]), v = y(() => [r.e("label"), r.em("label", "right"), r.is("active", g.value)]), p = y(() => ({ width: At(l.width) }));
  ue(() => l.modelValue, () => {
    c.value = true;
  });
  const b = y(() => c.value ? l.modelValue : false), g = y(() => b.value === l.activeValue);
  [l.activeValue, l.inactiveValue].includes(b.value) || (n(Ae, l.inactiveValue), n(et, l.inactiveValue), n(Jt, l.inactiveValue)), ue(g, (S) => {
    var E;
    d.value.checked = S, l.validateEvent && ((E = a == null ? void 0 : a.validate) == null || E.call(a, "change").catch((M) => void 0));
  });
  const T = () => {
    const S = g.value ? l.inactiveValue : l.activeValue;
    n(Ae, S), n(et, S), n(Jt, S), $e(() => {
      d.value.checked = g.value;
    });
  }, w = () => {
    if (u.value) return;
    const { beforeChange: S } = l;
    if (!S) {
      T();
      return;
    }
    const E = S();
    [Ys(E), Tt(E)].includes(true) || Kt(hp, "beforeChange must return type `Promise<boolean>` or `boolean`"), Ys(E) ? E.then((O) => {
      O && T();
    }).catch((O) => {
    }) : E && T();
  }, C = () => {
    var S, E;
    (E = (S = d.value) == null ? void 0 : S.focus) == null || E.call(S);
  };
  return Xe(() => {
    d.value.checked = g.value;
  }), t({ focus: C, checked: g }), (S, E) => (k(), D("div", { class: $(o(m)), onClick: Re(w, ["prevent"]) }, [x("input", { id: o(i), ref_key: "input", ref: d, class: $(o(r).e("input")), type: "checkbox", role: "switch", "aria-checked": o(g), "aria-disabled": o(u), "aria-label": S.ariaLabel, name: S.name, "true-value": S.activeValue, "false-value": S.inactiveValue, disabled: o(u), tabindex: S.tabindex, onChange: T, onKeydown: $t(w, ["enter"]) }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]), !S.inlinePrompt && (S.inactiveIcon || S.inactiveText) ? (k(), D("span", { key: 0, class: $(o(h)) }, [S.inactiveIcon ? (k(), oe(o(Ee), { key: 0 }, { default: j(() => [(k(), oe(Je(S.inactiveIcon)))]), _: 1 })) : J("v-if", true), !S.inactiveIcon && S.inactiveText ? (k(), D("span", { key: 1, "aria-hidden": o(g) }, he(S.inactiveText), 9, ["aria-hidden"])) : J("v-if", true)], 2)) : J("v-if", true), x("span", { ref_key: "core", ref: f, class: $(o(r).e("core")), style: Me(o(p)) }, [S.inlinePrompt ? (k(), D("div", { key: 0, class: $(o(r).e("inner")) }, [S.activeIcon || S.inactiveIcon ? (k(), oe(o(Ee), { key: 0, class: $(o(r).is("icon")) }, { default: j(() => [(k(), oe(Je(o(g) ? S.activeIcon : S.inactiveIcon)))]), _: 1 }, 8, ["class"])) : S.activeText || S.inactiveText ? (k(), D("span", { key: 1, class: $(o(r).is("text")), "aria-hidden": !o(g) }, he(o(g) ? S.activeText : S.inactiveText), 11, ["aria-hidden"])) : J("v-if", true)], 2)) : J("v-if", true), x("div", { class: $(o(r).e("action")) }, [S.loading ? (k(), oe(o(Ee), { key: 0, class: $(o(r).is("loading")) }, { default: j(() => [z(o(Zn))]), _: 1 }, 8, ["class"])) : o(g) ? X(S.$slots, "active-action", { key: 1 }, () => [S.activeActionIcon ? (k(), oe(o(Ee), { key: 0 }, { default: j(() => [(k(), oe(Je(S.activeActionIcon)))]), _: 1 })) : J("v-if", true)]) : o(g) ? J("v-if", true) : X(S.$slots, "inactive-action", { key: 2 }, () => [S.inactiveActionIcon ? (k(), oe(o(Ee), { key: 0 }, { default: j(() => [(k(), oe(Je(S.inactiveActionIcon)))]), _: 1 })) : J("v-if", true)])], 2)], 6), !S.inlinePrompt && (S.activeIcon || S.activeText) ? (k(), D("span", { key: 1, class: $(o(v)) }, [S.activeIcon ? (k(), oe(o(Ee), { key: 0 }, { default: j(() => [(k(), oe(Je(S.activeIcon)))]), _: 1 })) : J("v-if", true), !S.activeIcon && S.activeText ? (k(), D("span", { key: 1, "aria-hidden": !o(g) }, he(S.activeText), 9, ["aria-hidden"])) : J("v-if", true)], 2)) : J("v-if", true)], 10, ["onClick"]));
} });
var SN = ve(wN, [["__file", "switch.vue"]]);
const kN = We(SN), Fs = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, EN = function(e, t, n, l, a) {
  if (!t && !l && (!a || Se(a) && !a.length)) return e;
  Be(n) ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const s = l ? null : function(i, u) {
    return a ? (Se(a) || (a = [a]), a.map((c) => Be(c) ? xt(i, c) : c(i, u, e))) : (t !== "$key" && gt(i) && "$value" in i && (i = i.$value), [gt(i) ? xt(i, t) : i]);
  }, r = function(i, u) {
    if (l) return l(i.value, u.value);
    for (let c = 0, d = i.key.length; c < d; c++) {
      if (i.key[c] < u.key[c]) return -1;
      if (i.key[c] > u.key[c]) return 1;
    }
    return 0;
  };
  return e.map((i, u) => ({ value: i, index: u, key: s ? s(i, u) : null })).sort((i, u) => {
    let c = r(i, u);
    return c || (c = i.index - u.index), c * +n;
  }).map((i) => i.value);
}, mp = function(e, t) {
  let n = null;
  return e.columns.forEach((l) => {
    l.id === t && (n = l);
  }), n;
}, $N = function(e, t) {
  let n = null;
  for (let l = 0; l < e.columns.length; l++) {
    const a = e.columns[l];
    if (a.columnKey === t) {
      n = a;
      break;
    }
  }
  return n || Kt("ElTable", `No column matching with column-key: ${t}`), n;
}, sc = function(e, t, n) {
  const l = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return l ? mp(e, l[0]) : null;
}, vn = (e, t) => {
  if (!e) throw new Error("Row is required when get row identity");
  if (Be(t)) {
    if (!t.includes(".")) return `${e[t]}`;
    const n = t.split(".");
    let l = e;
    for (const a of n) l = l[a];
    return `${l}`;
  } else if (Qe(t)) return t.call(null, e);
}, vo = function(e, t, n = false, l = "children") {
  const a = e || [], s = {};
  return a.forEach((r, i) => {
    if (s[vn(r, t)] = { row: r, index: i }, n) {
      const u = r[l];
      Se(u) && Object.assign(s, vo(u, t, true, l));
    }
  }), s;
};
function TN(e, t) {
  const n = {};
  let l;
  for (l in e) n[l] = e[l];
  for (l in t) if (sn(t, l)) {
    const a = t[l];
    vt(a) || (n[l] = a);
  }
  return n;
}
function Ii(e) {
  return e === "" || vt(e) || (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function gp(e) {
  return e === "" || vt(e) || (e = Ii(e), Number.isNaN(e) && (e = 80)), e;
}
function NN(e) {
  return _e(e) ? e : Be(e) ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function IN(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...l) => t(n(...l)));
}
function Xa(e, t, n, l, a, s) {
  let r = s ?? 0, i = false;
  const u = e.indexOf(t), c = u !== -1, d = a == null ? void 0 : a.call(null, t, r), f = (h) => {
    h === "add" ? e.push(t) : e.splice(u, 1), i = true;
  }, m = (h) => {
    let v = 0;
    const p = (l == null ? void 0 : l.children) && h[l.children];
    return p && Se(p) && (v += p.length, p.forEach((b) => {
      v += m(b);
    })), v;
  };
  return (!a || d) && (Tt(n) ? n && !c ? f("add") : !n && c && f("remove") : f(c ? "remove" : "add")), !(l == null ? void 0 : l.checkStrictly) && (l == null ? void 0 : l.children) && Se(t[l.children]) && t[l.children].forEach((h) => {
    const v = Xa(e, h, n ?? !c, l, a, r + 1);
    r += m(h) + 1, v && (i = v);
  }), i;
}
function _N(e, t, n = "children", l = "hasChildren") {
  const a = (r) => !(Se(r) && r.length);
  function s(r, i, u) {
    t(r, i, u), i.forEach((c) => {
      if (c[l]) {
        t(c, null, u + 1);
        return;
      }
      const d = c[n];
      a(d) || s(c, d, u + 1);
    });
  }
  e.forEach((r) => {
    if (r[l]) {
      t(r, null, 0);
      return;
    }
    const i = r[n];
    a(i) || s(r, i, 0);
  });
}
const MN = (e, t, n, l) => {
  const a = { strategy: "fixed", ...e.popperOptions }, s = Qe(l.tooltipFormatter) ? l.tooltipFormatter({ row: n, column: l, cellValue: xo(n, l.property).value }) : void 0;
  return Dt(s) ? { slotContent: s, content: null, ...e, popperOptions: a } : { slotContent: null, content: s ?? t, ...e, popperOptions: a };
};
let Tn = null;
function ON(e, t, n, l, a, s) {
  const r = MN(e, t, n, l), i = { ...r, slotContent: void 0 };
  if ((Tn == null ? void 0 : Tn.trigger) === a) {
    const h = Tn.vm.component;
    Ac(h.props, i), r.slotContent && (h.slots.content = () => [r.slotContent]);
    return;
  }
  Tn == null ? void 0 : Tn();
  const u = s == null ? void 0 : s.refs.tableWrapper, c = u == null ? void 0 : u.dataset.prefix, d = z(rn, { virtualTriggering: true, virtualRef: a, appendTo: u, placement: "top", transition: "none", offset: 0, hideAfter: 0, ...i }, r.slotContent ? { content: () => r.slotContent } : void 0);
  d.appContext = { ...s.appContext, ...s };
  const f = document.createElement("div");
  kl(d, f), d.component.exposed.onOpen();
  const m = u == null ? void 0 : u.querySelector(`.${c}-scrollbar__wrap`);
  Tn = () => {
    kl(null, f), m == null ? void 0 : m.removeEventListener("scroll", Tn), Tn = null;
  }, Tn.trigger = a, Tn.vm = d, m == null ? void 0 : m.addEventListener("scroll", Tn);
}
function bp(e) {
  return e.children ? xv(e.children, bp) : [e];
}
function rc(e, t) {
  return e + t.colSpan;
}
const yp = (e, t, n, l) => {
  let a = 0, s = e;
  const r = n.states.columns.value;
  if (l) {
    const u = bp(l[e]);
    a = r.slice(0, r.indexOf(u[0])).reduce(rc, 0), s = a + u.reduce(rc, 0) - 1;
  } else a = e;
  let i;
  switch (t) {
    case "left":
      s < n.states.fixedLeafColumnsLength.value && (i = "left");
      break;
    case "right":
      a >= r.length - n.states.rightFixedLeafColumnsLength.value && (i = "right");
      break;
    default:
      s < n.states.fixedLeafColumnsLength.value ? i = "left" : a >= r.length - n.states.rightFixedLeafColumnsLength.value && (i = "right");
  }
  return i ? { direction: i, start: a, after: s } : {};
}, _i = (e, t, n, l, a, s = 0) => {
  const r = [], { direction: i, start: u, after: c } = yp(t, n, l, a);
  if (i) {
    const d = i === "left";
    r.push(`${e}-fixed-column--${i}`), d && c + s === l.states.fixedLeafColumnsLength.value - 1 ? r.push("is-last-column") : !d && u - s === l.states.columns.value.length - l.states.rightFixedLeafColumnsLength.value && r.push("is-first-column");
  }
  return r;
};
function ic(e, t) {
  return e + (ta(t.realWidth) || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const Mi = (e, t, n, l) => {
  const { direction: a, start: s = 0, after: r = 0 } = yp(e, t, n, l);
  if (!a) return;
  const i = {}, u = a === "left", c = n.states.columns.value;
  return u ? i.left = c.slice(0, s).reduce(ic, 0) : i.right = c.slice(r + 1).reverse().reduce(ic, 0), i;
}, ko = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function PN(e) {
  const t = tt(), n = N(false), l = N([]);
  return { updateExpandRows: () => {
    const u = e.data.value || [], c = e.rowKey.value;
    if (n.value) l.value = u.slice();
    else if (c) {
      const d = vo(l.value, c);
      l.value = u.reduce((f, m) => {
        const h = vn(m, c);
        return d[h] && f.push(m), f;
      }, []);
    } else l.value = [];
  }, toggleRowExpansion: (u, c) => {
    Xa(l.value, u, c) && t.emit("expand-change", u, l.value.slice());
  }, setExpandRowKeys: (u) => {
    t.store.assertRowKey();
    const c = e.data.value || [], d = e.rowKey.value, f = vo(c, d);
    l.value = u.reduce((m, h) => {
      const v = f[h];
      return v && m.push(v.row), m;
    }, []);
  }, isRowExpanded: (u) => {
    const c = e.rowKey.value;
    return c ? !!vo(l.value, c)[vn(u, c)] : l.value.includes(u);
  }, states: { expandRows: l, defaultExpandAll: n } };
}
function RN(e) {
  const t = tt(), n = N(null), l = N(null), a = (c) => {
    t.store.assertRowKey(), n.value = c, r(c);
  }, s = () => {
    n.value = null;
  }, r = (c) => {
    const { data: d, rowKey: f } = e;
    let m = null;
    f.value && (m = (o(d) || []).find((h) => vn(h, f.value) === c)), l.value = m, t.emit("current-change", l.value, null);
  };
  return { setCurrentRowKey: a, restoreCurrentRowKey: s, setCurrentRowByKey: r, updateCurrentRow: (c) => {
    const d = l.value;
    if (c && c !== d) {
      l.value = c, t.emit("current-change", l.value, d);
      return;
    }
    !c && d && (l.value = null, t.emit("current-change", null, d));
  }, updateCurrentRowData: () => {
    const c = e.rowKey.value, d = e.data.value || [], f = l.value;
    if (!d.includes(f) && f) {
      if (c) {
        const m = vn(f, c);
        r(m);
      } else l.value = null;
      ta(l.value) && t.emit("current-change", null, f);
    } else n.value && (r(n.value), s());
  }, states: { _currentRowKey: n, currentRow: l } };
}
function LN(e) {
  const t = N([]), n = N({}), l = N(16), a = N(false), s = N({}), r = N("hasChildren"), i = N("children"), u = N(false), c = tt(), d = y(() => {
    if (!e.rowKey.value) return {};
    const C = e.data.value || [];
    return m(C);
  }), f = y(() => {
    const C = e.rowKey.value, S = Object.keys(s.value), E = {};
    return S.length && S.forEach((M) => {
      if (s.value[M].length) {
        const O = { children: [] };
        s.value[M].forEach((_) => {
          const I = vn(_, C);
          O.children.push(I), _[r.value] && !E[I] && (E[I] = { children: [] });
        }), E[M] = O;
      }
    }), E;
  }), m = (C) => {
    const S = e.rowKey.value, E = {};
    return _N(C, (M, O, _) => {
      const I = vn(M, S);
      Se(O) ? E[I] = { children: O.map((R) => vn(R, S)), level: _ } : a.value && (E[I] = { children: [], lazy: true, level: _ });
    }, i.value, r.value), E;
  }, h = (C = false, S = ((E) => (E = c.store) == null ? void 0 : E.states.defaultExpandAll.value)()) => {
    var E;
    const M = d.value, O = f.value, _ = Object.keys(M), I = {};
    if (_.length) {
      const R = o(n), P = [], W = (A, L) => {
        if (C) return t.value ? S || t.value.includes(L) : !!(S || (A == null ? void 0 : A.expanded));
        {
          const F = S || t.value && t.value.includes(L);
          return !!((A == null ? void 0 : A.expanded) || F);
        }
      };
      _.forEach((A) => {
        const L = R[A], F = { ...M[A] };
        if (F.expanded = W(L, A), F.lazy) {
          const { loaded: V = false, loading: B = false } = L || {};
          F.loaded = !!V, F.loading = !!B, P.push(A);
        }
        I[A] = F;
      });
      const te = Object.keys(O);
      a.value && te.length && P.length && te.forEach((A) => {
        const L = R[A], F = O[A].children;
        if (P.includes(A)) {
          if (I[A].children.length !== 0) throw new Error("[ElTable]children must be an empty array.");
          I[A].children = F;
        } else {
          const { loaded: V = false, loading: B = false } = L || {};
          I[A] = { lazy: true, loaded: !!V, loading: !!B, expanded: W(L, A), children: F, level: "" };
        }
      });
    }
    n.value = I, (E = c.store) == null || E.updateTableScrollY();
  };
  ue(() => t.value, () => {
    h(true);
  }), ue(() => d.value, () => {
    h();
  }), ue(() => f.value, () => {
    h();
  });
  const v = (C) => {
    t.value = C, h();
  }, p = (C) => a.value && C && "loaded" in C && !C.loaded, b = (C, S) => {
    c.store.assertRowKey();
    const E = e.rowKey.value, M = vn(C, E), O = M && n.value[M];
    if (M && O && "expanded" in O) {
      const _ = O.expanded;
      S = vt(S) ? !O.expanded : S, n.value[M].expanded = S, _ !== S && c.emit("expand-change", C, S), p(O) && T(C, M, O), c.store.updateTableScrollY();
    }
  }, g = (C) => {
    c.store.assertRowKey();
    const S = e.rowKey.value, E = vn(C, S), M = n.value[E];
    p(M) ? T(C, E, M) : b(C, void 0);
  }, T = (C, S, E) => {
    const { load: M } = c.props;
    M && !n.value[S].loaded && (n.value[S].loading = true, M(C, E, (O) => {
      if (!Se(O)) throw new TypeError("[ElTable] data must be an array");
      n.value[S].loading = false, n.value[S].loaded = true, n.value[S].expanded = true, O.length && (s.value[S] = O), c.emit("expand-change", C, true);
    }));
  };
  return { loadData: T, loadOrToggle: g, toggleTreeExpansion: b, updateTreeExpandKeys: v, updateTreeData: h, updateKeyChildren: (C, S) => {
    const { lazy: E, rowKey: M } = c.props;
    if (E) {
      if (!M) throw new Error("[Table] rowKey is required in updateKeyChild");
      s.value[C] && (s.value[C] = S);
    }
  }, normalize: m, states: { expandRowKeys: t, treeData: n, indent: l, lazy: a, lazyTreeNodeMap: s, lazyColumnIdentifier: r, childrenColumnName: i, checkStrictly: u } };
}
const BN = (e, t) => {
  const n = t.sortingColumn;
  return !n || Be(n.sortable) ? e : EN(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, Na = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children && n.children.length > 0 ? t.push.apply(t, Na(n.children)) : t.push(n);
  }), t;
};
function DN() {
  var e;
  const t = tt(), { size: n } = tn((e = t.proxy) == null ? void 0 : e.$props), l = N(null), a = N([]), s = N([]), r = N(false), i = N([]), u = N([]), c = N([]), d = N([]), f = N([]), m = N([]), h = N([]), v = N([]), p = [], b = N(0), g = N(0), T = N(0), w = N(false), C = N([]), S = N(false), E = N(false), M = N(null), O = N({}), _ = N(null), I = N(null), R = N(null), P = N(null), W = N(null), te = y(() => l.value ? vo(C.value, l.value) : void 0);
  ue(a, () => {
    var xe;
    t.state && (V(false), t.props.tableLayout === "auto" && ((xe = t.refs.tableHeaderRef) == null || xe.updateFixedColumnStyle()));
  }, { deep: true });
  const A = () => {
    if (!l.value) throw new Error("[ElTable] prop row-key is required");
  }, L = (xe) => {
    var rt;
    (rt = xe.children) == null || rt.forEach((q) => {
      q.fixed = xe.fixed, L(q);
    });
  }, F = () => {
    var xe, rt;
    i.value.forEach((He) => {
      L(He);
    }), d.value = i.value.filter((He) => He.type !== "selection" && [true, "left"].includes(He.fixed));
    let q;
    if (((rt = (xe = i.value) == null ? void 0 : xe[0]) == null ? void 0 : rt.type) === "selection") {
      const He = i.value[0];
      q = [true, "left"].includes(He.fixed) || d.value.length && He.fixed !== "right", q && d.value.unshift(He);
    }
    f.value = i.value.filter((He) => He.fixed === "right");
    const ae = i.value.filter((He) => (q ? He.type !== "selection" : true) && !He.fixed);
    u.value = [].concat(d.value).concat(ae).concat(f.value);
    const H = Na(ae), fe = Na(d.value), Fe = Na(f.value);
    b.value = H.length, g.value = fe.length, T.value = Fe.length, c.value = [].concat(fe).concat(H).concat(Fe), r.value = d.value.length > 0 || f.value.length > 0;
  }, V = (xe, rt = false) => {
    xe && F(), rt ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, B = (xe) => te.value ? !!te.value[vn(xe, l.value)] : C.value.includes(xe), G = () => {
    w.value = false;
    const xe = C.value;
    C.value = [], xe.length && t.emit("selection-change", []);
  }, U = () => {
    var xe, rt;
    let q;
    if (l.value) {
      q = [];
      const ae = (rt = (xe = t == null ? void 0 : t.store) == null ? void 0 : xe.states) == null ? void 0 : rt.childrenColumnName.value, H = vo(a.value, l.value, true, ae);
      for (const fe in te.value) sn(te.value, fe) && !H[fe] && q.push(te.value[fe].row);
    } else q = C.value.filter((ae) => !a.value.includes(ae));
    if (q.length) {
      const ae = C.value.filter((H) => !q.includes(H));
      C.value = ae, t.emit("selection-change", ae.slice());
    }
  }, ne = () => (C.value || []).slice(), Z = (xe, rt, q = true, ae = false) => {
    var H, fe, Fe, He;
    const wt = { children: (fe = (H = t == null ? void 0 : t.store) == null ? void 0 : H.states) == null ? void 0 : fe.childrenColumnName.value, checkStrictly: (He = (Fe = t == null ? void 0 : t.store) == null ? void 0 : Fe.states) == null ? void 0 : He.checkStrictly.value };
    if (Xa(C.value, xe, rt, wt, ae ? void 0 : M.value, a.value.indexOf(xe))) {
      const jt = (C.value || []).slice();
      q && t.emit("select", jt, xe), t.emit("selection-change", jt);
    }
  }, ee = () => {
    var xe, rt;
    const q = E.value ? !w.value : !(w.value || C.value.length);
    w.value = q;
    let ae = false, H = 0;
    const fe = (rt = (xe = t == null ? void 0 : t.store) == null ? void 0 : xe.states) == null ? void 0 : rt.rowKey.value, { childrenColumnName: Fe } = t.store.states, He = { children: Fe.value, checkStrictly: false };
    a.value.forEach((wt, Rn) => {
      const jt = Rn + H;
      Xa(C.value, wt, q, He, M.value, jt) && (ae = true), H += Q(vn(wt, fe));
    }), ae && t.emit("selection-change", C.value ? C.value.slice() : []), t.emit("select-all", (C.value || []).slice());
  }, re = () => {
    a.value.forEach((xe) => {
      const rt = vn(xe, l.value), q = te.value[rt];
      q && (C.value[q.index] = xe);
    });
  }, le = () => {
    var xe;
    if (((xe = a.value) == null ? void 0 : xe.length) === 0) {
      w.value = false;
      return;
    }
    const { childrenColumnName: rt } = t.store.states;
    let q = 0, ae = 0;
    const H = (Fe) => {
      var He;
      for (const wt of Fe) {
        const Rn = M.value && M.value.call(null, wt, q);
        if (B(wt)) ae++;
        else if (!M.value || Rn) return false;
        if (q++, (He = wt[rt.value]) != null && He.length && !H(wt[rt.value])) return false;
      }
      return true;
    }, fe = H(a.value || []);
    w.value = ae === 0 ? false : fe;
  }, Q = (xe) => {
    var rt;
    if (!t || !t.store) return 0;
    const { treeData: q } = t.store.states;
    let ae = 0;
    const H = (rt = q.value[xe]) == null ? void 0 : rt.children;
    return H && (ae += H.length, H.forEach((fe) => {
      ae += Q(fe);
    })), ae;
  }, ie = (xe, rt) => {
    Se(xe) || (xe = [xe]);
    const q = {};
    return xe.forEach((ae) => {
      O.value[ae.id] = rt, q[ae.columnKey || ae.id] = rt;
    }), q;
  }, ce = (xe, rt, q) => {
    I.value && I.value !== xe && (I.value.order = null), I.value = xe, R.value = rt, P.value = q;
  }, Ie = () => {
    let xe = o(s);
    Object.keys(O.value).forEach((rt) => {
      const q = O.value[rt];
      if (!q || q.length === 0) return;
      const ae = mp({ columns: c.value }, rt);
      ae && ae.filterMethod && (xe = xe.filter((H) => q.some((fe) => ae.filterMethod.call(null, fe, H, ae))));
    }), _.value = xe;
  }, me = () => {
    a.value = BN(_.value, { sortingColumn: I.value, sortProp: R.value, sortOrder: P.value });
  }, se = (xe = void 0) => {
    xe && xe.filter || Ie(), me();
  }, ke = (xe) => {
    const { tableHeaderRef: rt } = t.refs;
    if (!rt) return;
    const q = Object.assign({}, rt.filterPanels), ae = Object.keys(q);
    if (ae.length) if (Be(xe) && (xe = [xe]), Se(xe)) {
      const H = xe.map((fe) => $N({ columns: c.value }, fe));
      ae.forEach((fe) => {
        const Fe = H.find((He) => He.id === fe);
        Fe && (Fe.filteredValue = []);
      }), t.store.commit("filterChange", { column: H, values: [], silent: true, multi: true });
    } else ae.forEach((H) => {
      const fe = c.value.find((Fe) => Fe.id === H);
      fe && (fe.filteredValue = []);
    }), O.value = {}, t.store.commit("filterChange", { column: {}, values: [], silent: true });
  }, De = () => {
    I.value && (ce(null, null, null), t.store.commit("changeSortCondition", { silent: true }));
  }, { setExpandRowKeys: qe, toggleRowExpansion: je, updateExpandRows: Le, states: Ne, isRowExpanded: Te } = PN({ data: a, rowKey: l }), { updateTreeExpandKeys: Ge, toggleTreeExpansion: Ze, updateTreeData: ot, updateKeyChildren: st, loadOrToggle: Ce, states: Ue } = LN({ data: a, rowKey: l }), { updateCurrentRowData: ht, updateCurrentRow: Pt, setCurrentRowKey: Nt, states: _t } = RN({ data: a, rowKey: l });
  return { assertRowKey: A, updateColumns: F, scheduleLayout: V, isSelected: B, clearSelection: G, cleanSelection: U, getSelectionRows: ne, toggleRowSelection: Z, _toggleAllSelection: ee, toggleAllSelection: null, updateSelectionByRowKey: re, updateAllSelected: le, updateFilters: ie, updateCurrentRow: Pt, updateSort: ce, execFilter: Ie, execSort: me, execQuery: se, clearFilter: ke, clearSort: De, toggleRowExpansion: je, setExpandRowKeysAdapter: (xe) => {
    qe(xe), Ge(xe);
  }, setCurrentRowKey: Nt, toggleRowExpansionAdapter: (xe, rt) => {
    c.value.some(({ type: ae }) => ae === "expand") ? je(xe, rt) : Ze(xe, rt);
  }, isRowExpanded: Te, updateExpandRows: Le, updateCurrentRowData: ht, loadOrToggle: Ce, updateTreeData: ot, updateKeyChildren: st, states: { tableSize: n, rowKey: l, data: a, _data: s, isComplex: r, _columns: i, originColumns: u, columns: c, fixedColumns: d, rightFixedColumns: f, leafColumns: m, fixedLeafColumns: h, rightFixedLeafColumns: v, updateOrderFns: p, leafColumnsLength: b, fixedLeafColumnsLength: g, rightFixedLeafColumnsLength: T, isAllSelected: w, selection: C, reserveSelection: S, selectOnIndeterminate: E, selectable: M, filters: O, filteredData: _, sortingColumn: I, sortProp: R, sortOrder: P, hoverRow: W, ...Ne, ...Ue, ..._t } };
}
function Cr(e, t) {
  return e.map((n) => {
    var l;
    return n.id === t.id ? t : ((l = n.children) != null && l.length && (n.children = Cr(n.children, t)), n);
  });
}
function wr(e) {
  e.forEach((t) => {
    var n, l;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (l = t.children) != null && l.length && wr(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function VN() {
  const e = tt(), t = DN();
  return { ns: de("table"), ...t, mutations: { setData(r, i) {
    const u = o(r._data) !== i;
    r.data.value = i, r._data.value = i, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), o(r.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : u ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
  }, insertColumn(r, i, u, c) {
    const d = o(r._columns);
    let f = [];
    u ? (u && !u.children && (u.children = []), u.children.push(i), f = Cr(d, u)) : (d.push(i), f = d), wr(f), r._columns.value = f, r.updateOrderFns.push(c), i.type === "selection" && (r.selectable.value = i.selectable, r.reserveSelection.value = i.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
  }, updateColumnOrder(r, i) {
    var u;
    ((u = i.getColumnIndex) == null ? void 0 : u.call(i)) !== i.no && (wr(r._columns.value), e.$ready && e.store.updateColumns());
  }, removeColumn(r, i, u, c) {
    const d = o(r._columns) || [];
    if (u) u.children.splice(u.children.findIndex((m) => m.id === i.id), 1), $e(() => {
      var m;
      ((m = u.children) == null ? void 0 : m.length) === 0 && delete u.children;
    }), r._columns.value = Cr(d, u);
    else {
      const m = d.indexOf(i);
      m > -1 && (d.splice(m, 1), r._columns.value = d);
    }
    const f = r.updateOrderFns.indexOf(c);
    f > -1 && r.updateOrderFns.splice(f, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
  }, sort(r, i) {
    const { prop: u, order: c, init: d } = i;
    if (u) {
      const f = o(r.columns).find((m) => m.property === u);
      f && (f.order = c, e.store.updateSort(f, u, c), e.store.commit("changeSortCondition", { init: d }));
    }
  }, changeSortCondition(r, i) {
    const { sortingColumn: u, sortProp: c, sortOrder: d } = r, f = o(u), m = o(c), h = o(d);
    ta(h) && (r.sortingColumn.value = null, r.sortProp.value = null);
    const v = { filter: true };
    e.store.execQuery(v), (!i || !(i.silent || i.init)) && e.emit("sort-change", { column: f, prop: m, order: h }), e.store.updateTableScrollY();
  }, filterChange(r, i) {
    const { column: u, values: c, silent: d } = i, f = e.store.updateFilters(u, c);
    e.store.execQuery(), d || e.emit("filter-change", f), e.store.updateTableScrollY();
  }, toggleAllSelection() {
    e.store.toggleAllSelection();
  }, rowSelectedChanged(r, i) {
    e.store.toggleRowSelection(i), e.store.updateAllSelected();
  }, setHoverRow(r, i) {
    r.hoverRow.value = i;
  }, setCurrentRow(r, i) {
    e.store.updateCurrentRow(i);
  } }, commit: function(r, ...i) {
    const u = e.store.mutations;
    if (u[r]) u[r].apply(e, [e.store.states].concat(i));
    else throw new Error(`Action not found: ${r}`);
  }, updateTableScrollY: function() {
    $e(() => e.layout.updateScrollY.apply(e.layout));
  } };
}
const Ko = { rowKey: "rowKey", defaultExpandAll: "defaultExpandAll", selectOnIndeterminate: "selectOnIndeterminate", indent: "indent", lazy: "lazy", data: "data", "treeProps.hasChildren": { key: "lazyColumnIdentifier", default: "hasChildren" }, "treeProps.children": { key: "childrenColumnName", default: "children" }, "treeProps.checkStrictly": { key: "checkStrictly", default: false } };
function AN(e, t) {
  if (!e) throw new Error("Table is required.");
  const n = VN();
  return n.toggleAllSelection = Pn(n._toggleAllSelection, 10), Object.keys(Ko).forEach((l) => {
    Cp(wp(t, l), l, n);
  }), FN(n, t), n;
}
function FN(e, t) {
  Object.keys(Ko).forEach((n) => {
    ue(() => wp(t, n), (l) => {
      Cp(l, n, e);
    });
  });
}
function Cp(e, t, n) {
  let l = e, a = Ko[t];
  gt(Ko[t]) && (a = a.key, l = l || Ko[t].default), n.states[a].value = l;
}
function wp(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let l = e;
    return n.forEach((a) => {
      l = l[a];
    }), l;
  } else return e[t];
}
class zN {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = true, this.showHeader = true, this.height = N(null), this.scrollX = N(false), this.scrollY = N(false), this.bodyWidth = N(null), this.fixedWidth = N(null), this.rightFixedWidth = N(null), this.gutterWidth = 0;
    for (const n in t) sn(t, n) && (mn(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
    if (!this.table) throw new Error("Table is required for Table Layout");
    if (!this.store) throw new Error("Store is required for Table Layout");
  }
  updateScrollY() {
    const t = this.height.value;
    if (ta(t)) return false;
    const n = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (n == null ? void 0 : n.wrapRef)) {
      let l = true;
      const a = this.scrollY.value;
      return l = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = l, a !== l;
    }
    return false;
  }
  setHeight(t, n = "height") {
    if (!dt) return;
    const l = this.table.vnode.el;
    if (t = NN(t), this.height.value = Number(t), !l && (t || t === 0)) return $e(() => this.setHeight(t, n));
    _e(t) ? (l.style[n] = `${t}px`, this.updateElsHeight()) : Be(t) && (l.style[n] = t, this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "max-height");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((l) => {
      l.isColumnGroup ? t.push.apply(t, l.columns) : t.push(l);
    }), t;
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers("scrollable");
  }
  headerDisplayNone(t) {
    if (!t) return true;
    let n = t;
    for (; n.tagName !== "DIV"; ) {
      if (getComputedStyle(n).display === "none") return true;
      n = n.parentElement;
    }
    return false;
  }
  updateColumnsWidth() {
    if (!dt) return;
    const t = this.fit, n = this.table.vnode.el.clientWidth;
    let l = 0;
    const a = this.getFlattenColumns(), s = a.filter((u) => !_e(u.width));
    if (a.forEach((u) => {
      _e(u.width) && u.realWidth && (u.realWidth = null);
    }), s.length > 0 && t) {
      if (a.forEach((u) => {
        l += Number(u.width || u.minWidth || 80);
      }), l <= n) {
        this.scrollX.value = false;
        const u = n - l;
        if (s.length === 1) s[0].realWidth = Number(s[0].minWidth || 80) + u;
        else {
          const c = s.reduce((m, h) => m + Number(h.minWidth || 80), 0), d = u / c;
          let f = 0;
          s.forEach((m, h) => {
            if (h === 0) return;
            const v = Math.floor(Number(m.minWidth || 80) * d);
            f += v, m.realWidth = Number(m.minWidth || 80) + v;
          }), s[0].realWidth = Number(s[0].minWidth || 80) + u - f;
        }
      } else this.scrollX.value = true, s.forEach((u) => {
        u.realWidth = Number(u.minWidth);
      });
      this.bodyWidth.value = Math.max(l, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else a.forEach((u) => {
      !u.width && !u.minWidth ? u.realWidth = 80 : u.realWidth = Number(u.width || u.minWidth), l += u.realWidth;
    }), this.scrollX.value = l > n, this.bodyWidth.value = l;
    const r = this.store.states.fixedColumns.value;
    if (r.length > 0) {
      let u = 0;
      r.forEach((c) => {
        u += Number(c.realWidth || c.width);
      }), this.fixedWidth.value = u;
    }
    const i = this.store.states.rightFixedColumns.value;
    if (i.length > 0) {
      let u = 0;
      i.forEach((c) => {
        u += Number(c.realWidth || c.width);
      }), this.rightFixedWidth.value = u;
    }
    this.notifyObservers("columns");
  }
  addObserver(t) {
    this.observers.push(t);
  }
  removeObserver(t) {
    const n = this.observers.indexOf(t);
    n !== -1 && this.observers.splice(n, 1);
  }
  notifyObservers(t) {
    this.observers.forEach((l) => {
      var a, s;
      switch (t) {
        case "columns":
          (a = l.state) == null || a.onColumnsChange(this);
          break;
        case "scrollable":
          (s = l.state) == null || s.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: xN } = Fn, HN = K({ name: "ElTableFilterPanel", components: { ElCheckbox: Fn, ElCheckboxGroup: xN, ElScrollbar: el, ElTooltip: rn, ElIcon: Ee, ArrowDown: fl, ArrowUp: zr }, directives: { ClickOutside: il }, props: { placement: { type: String, default: "bottom-start" }, store: { type: Object }, column: { type: Object }, upDataColumn: { type: Function }, appendTo: { type: String } }, setup(e) {
  const t = tt(), { t: n } = ft(), l = de("table-filter"), a = t == null ? void 0 : t.parent;
  a.filterPanels.value[e.column.id] || (a.filterPanels.value[e.column.id] = t);
  const s = N(false), r = N(null), i = y(() => e.column && e.column.filters), u = y(() => e.column.filterClassName ? `${l.b()} ${e.column.filterClassName}` : l.b()), c = y({ get: () => {
    var S;
    return (((S = e.column) == null ? void 0 : S.filteredValue) || [])[0];
  }, set: (S) => {
    d.value && (Wn(S) ? d.value.splice(0, 1) : d.value.splice(0, 1, S));
  } }), d = y({ get() {
    return e.column ? e.column.filteredValue || [] : [];
  }, set(S) {
    e.column && e.upDataColumn("filteredValue", S);
  } }), f = y(() => e.column ? e.column.filterMultiple : true), m = (S) => S.value === c.value, h = () => {
    s.value = false;
  }, v = (S) => {
    S.stopPropagation(), s.value = !s.value;
  }, p = () => {
    s.value = false;
  }, b = () => {
    w(d.value), h();
  }, g = () => {
    d.value = [], w(d.value), h();
  }, T = (S) => {
    c.value = S, Wn(S) ? w([]) : w(d.value), h();
  }, w = (S) => {
    e.store.commit("filterChange", { column: e.column, values: S }), e.store.updateAllSelected();
  };
  ue(s, (S) => {
    e.column && e.upDataColumn("filterOpened", S);
  }, { immediate: true });
  const C = y(() => {
    var S, E;
    return (E = (S = r.value) == null ? void 0 : S.popperRef) == null ? void 0 : E.contentRef;
  });
  return { tooltipVisible: s, multiple: f, filterClassName: u, filteredValue: d, filterValue: c, filters: i, handleConfirm: b, handleReset: g, handleSelect: T, isPropAbsent: Wn, isActive: m, t: n, ns: l, showFilterPanel: v, hideFilterPanel: p, popperPaneRef: C, tooltip: r };
} });
function KN(e, t, n, l, a, s) {
  const r = nt("el-checkbox"), i = nt("el-checkbox-group"), u = nt("el-scrollbar"), c = nt("arrow-up"), d = nt("arrow-down"), f = nt("el-icon"), m = nt("el-tooltip"), h = ls("click-outside");
  return k(), oe(m, { ref: "tooltip", visible: e.tooltipVisible, offset: 0, placement: e.placement, "show-arrow": false, "stop-popper-mouse-event": false, teleported: "", effect: "light", pure: "", "popper-class": e.filterClassName, persistent: "", "append-to": e.appendTo }, { content: j(() => [e.multiple ? (k(), D("div", { key: 0 }, [x("div", { class: $(e.ns.e("content")) }, [z(u, { "wrap-class": e.ns.e("wrap") }, { default: j(() => [z(i, { modelValue: e.filteredValue, "onUpdate:modelValue": (v) => e.filteredValue = v, class: $(e.ns.e("checkbox-group")) }, { default: j(() => [(k(true), D(Pe, null, it(e.filters, (v) => (k(), oe(r, { key: v.value, value: v.value }, { default: j(() => [at(he(v.text), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "class"])]), _: 1 }, 8, ["wrap-class"])], 2), x("div", { class: $(e.ns.e("bottom")) }, [x("button", { class: $({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }), disabled: e.filteredValue.length === 0, type: "button", onClick: e.handleConfirm }, he(e.t("el.table.confirmFilter")), 11, ["disabled", "onClick"]), x("button", { type: "button", onClick: e.handleReset }, he(e.t("el.table.resetFilter")), 9, ["onClick"])], 2)])) : (k(), D("ul", { key: 1, class: $(e.ns.e("list")) }, [x("li", { class: $([e.ns.e("list-item"), { [e.ns.is("active")]: e.isPropAbsent(e.filterValue) }]), onClick: (v) => e.handleSelect(null) }, he(e.t("el.table.clearFilter")), 11, ["onClick"]), (k(true), D(Pe, null, it(e.filters, (v) => (k(), D("li", { key: v.value, class: $([e.ns.e("list-item"), e.ns.is("active", e.isActive(v))]), label: v.value, onClick: (p) => e.handleSelect(v.value) }, he(v.text), 11, ["label", "onClick"]))), 128))], 2))]), default: j(() => [Ye((k(), D("span", { class: $([`${e.ns.namespace.value}-table__column-filter-trigger`, `${e.ns.namespace.value}-none-outline`]), onClick: e.showFilterPanel }, [z(f, null, { default: j(() => [X(e.$slots, "filter-icon", {}, () => [e.column.filterOpened ? (k(), oe(c, { key: 0 })) : (k(), oe(d, { key: 1 }))])]), _: 3 })], 10, ["onClick"])), [[h, e.hideFilterPanel, e.popperPaneRef]])]), _: 3 }, 8, ["visible", "placement", "popper-class", "append-to"]);
}
var WN = ve(HN, [["render", KN], ["__file", "filter-panel.vue"]]);
function Oi(e) {
  const t = tt();
  Dr(() => {
    n.value.addObserver(t);
  }), Xe(() => {
    l(n.value), a(n.value);
  }), cl(() => {
    l(n.value), a(n.value);
  }), To(() => {
    n.value.removeObserver(t);
  });
  const n = y(() => {
    const s = e.layout;
    if (!s) throw new Error("Can not find table layout.");
    return s;
  }), l = (s) => {
    var r;
    const i = ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll("colgroup > col")) || [];
    if (!i.length) return;
    const u = s.getFlattenColumns(), c = {};
    u.forEach((d) => {
      c[d.id] = d;
    });
    for (let d = 0, f = i.length; d < f; d++) {
      const m = i[d], h = m.getAttribute("name"), v = c[h];
      v && m.setAttribute("width", v.realWidth || v.width);
    }
  }, a = (s) => {
    var r, i;
    const u = ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let d = 0, f = u.length; d < f; d++) u[d].setAttribute("width", s.scrollY.value ? s.gutterWidth : "0");
    const c = ((i = e.vnode.el) == null ? void 0 : i.querySelectorAll("th.gutter")) || [];
    for (let d = 0, f = c.length; d < f; d++) {
      const m = c[d];
      m.style.width = s.scrollY.value ? `${s.gutterWidth}px` : "0", m.style.display = s.scrollY.value ? "" : "none";
    }
  };
  return { tableLayout: n.value, onColumnsChange: l, onScrollableChange: a };
}
const Un = Symbol("ElTable");
function jN(e, t) {
  const n = tt(), l = we(Un), a = (p) => {
    p.stopPropagation();
  }, s = (p, b) => {
    !b.filters && b.sortable ? v(p, b, false) : b.filterable && !b.sortable && a(p), l == null ? void 0 : l.emit("header-click", b, p);
  }, r = (p, b) => {
    l == null ? void 0 : l.emit("header-contextmenu", b, p);
  }, i = N(null), u = N(false), c = N({}), d = (p, b) => {
    if (dt && !(b.children && b.children.length > 0) && i.value && e.border) {
      u.value = true;
      const g = l;
      t("set-drag-visible", true);
      const w = (g == null ? void 0 : g.vnode.el).getBoundingClientRect().left, C = n.vnode.el.querySelector(`th.${b.id}`), S = C.getBoundingClientRect(), E = S.left - w + 30;
      Dn(C, "noclick"), c.value = { startMouseLeft: p.clientX, startLeft: S.right - w, startColumnLeft: S.left - w, tableLeft: w };
      const M = g == null ? void 0 : g.refs.resizeProxy;
      M.style.left = `${c.value.startLeft}px`, document.onselectstart = function() {
        return false;
      }, document.ondragstart = function() {
        return false;
      };
      const O = (I) => {
        const R = I.clientX - c.value.startMouseLeft, P = c.value.startLeft + R;
        M.style.left = `${Math.max(E, P)}px`;
      }, _ = () => {
        if (u.value) {
          const { startColumnLeft: I, startLeft: R } = c.value, W = Number.parseInt(M.style.left, 10) - I;
          b.width = b.realWidth = W, g == null ? void 0 : g.emit("header-dragend", b.width, R - I, b, p), requestAnimationFrame(() => {
            e.store.scheduleLayout(false, true);
          }), document.body.style.cursor = "", u.value = false, i.value = null, c.value = {}, t("set-drag-visible", false);
        }
        document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", _), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          gn(C, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", O), document.addEventListener("mouseup", _);
    }
  }, f = (p, b) => {
    var g;
    if (b.children && b.children.length > 0) return;
    const T = p.target;
    if (!En(T)) return;
    const w = T == null ? void 0 : T.closest("th");
    if (!(!b || !b.resizable || !w) && !u.value && e.border) {
      const C = w.getBoundingClientRect(), S = document.body.style, E = ((g = w.parentNode) == null ? void 0 : g.lastElementChild) === w, M = e.allowDragLastColumn || !E;
      C.width > 12 && C.right - p.clientX < 8 && M ? (S.cursor = "col-resize", Nn(w, "is-sortable") && (w.style.cursor = "col-resize"), i.value = b) : u.value || (S.cursor = "", Nn(w, "is-sortable") && (w.style.cursor = "pointer"), i.value = null);
    }
  }, m = () => {
    dt && (document.body.style.cursor = "");
  }, h = ({ order: p, sortOrders: b }) => {
    if (p === "") return b[0];
    const g = b.indexOf(p || null);
    return b[g > b.length - 2 ? 0 : g + 1];
  }, v = (p, b, g) => {
    var T;
    p.stopPropagation();
    const w = b.order === g ? null : g || h(b), C = (T = p.target) == null ? void 0 : T.closest("th");
    if (C && Nn(C, "noclick")) {
      gn(C, "noclick");
      return;
    }
    if (!b.sortable) return;
    const S = p.currentTarget;
    if (["ascending", "descending"].some((I) => Nn(S, I) && !b.sortOrders.includes(I))) return;
    const E = e.store.states;
    let M = E.sortProp.value, O;
    const _ = E.sortingColumn.value;
    (_ !== b || _ === b && ta(_.order)) && (_ && (_.order = null), E.sortingColumn.value = b, M = b.property), w ? O = b.order = w : O = b.order = null, E.sortProp.value = M, E.sortOrder.value = O, l == null ? void 0 : l.store.commit("changeSortCondition");
  };
  return { handleHeaderClick: s, handleHeaderContextMenu: r, handleMouseDown: d, handleMouseMove: f, handleMouseOut: m, handleSortClick: v, handleFilterClick: a };
}
function UN(e) {
  const t = we(Un), n = de("table");
  return { getHeaderRowStyle: (i) => {
    const u = t == null ? void 0 : t.props.headerRowStyle;
    return Qe(u) ? u.call(null, { rowIndex: i }) : u;
  }, getHeaderRowClass: (i) => {
    const u = [], c = t == null ? void 0 : t.props.headerRowClassName;
    return Be(c) ? u.push(c) : Qe(c) && u.push(c.call(null, { rowIndex: i })), u.join(" ");
  }, getHeaderCellStyle: (i, u, c, d) => {
    var f;
    let m = (f = t == null ? void 0 : t.props.headerCellStyle) != null ? f : {};
    Qe(m) && (m = m.call(null, { rowIndex: i, columnIndex: u, row: c, column: d }));
    const h = Mi(u, d.fixed, e.store, c);
    return ko(h, "left"), ko(h, "right"), Object.assign({}, m, h);
  }, getHeaderCellClass: (i, u, c, d) => {
    const f = _i(n.b(), u, d.fixed, e.store, c), m = [d.id, d.order, d.headerAlign, d.className, d.labelClassName, ...f];
    d.children || m.push("is-leaf"), d.sortable && m.push("is-sortable");
    const h = t == null ? void 0 : t.props.headerCellClassName;
    return Be(h) ? m.push(h) : Qe(h) && m.push(h.call(null, { rowIndex: i, columnIndex: u, row: c, column: d })), m.push(n.e("cell")), m.filter((v) => !!v).join(" ");
  } };
}
const Sp = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, Sp(n.children))) : t.push(n);
  }), t;
}, kp = (e) => {
  let t = 1;
  const n = (s, r) => {
    if (r && (s.level = r.level + 1, t < s.level && (t = s.level)), s.children) {
      let i = 0;
      s.children.forEach((u) => {
        n(u, s), i += u.colSpan;
      }), s.colSpan = i;
    } else s.colSpan = 1;
  };
  e.forEach((s) => {
    s.level = 1, n(s, void 0);
  });
  const l = [];
  for (let s = 0; s < t; s++) l.push([]);
  return Sp(e).forEach((s) => {
    s.children ? (s.rowSpan = 1, s.children.forEach((r) => r.isSubColumn = true)) : s.rowSpan = t - s.level + 1, l[s.level - 1].push(s);
  }), l;
};
function YN(e) {
  const t = we(Un), n = y(() => kp(e.store.states.originColumns.value));
  return { isGroup: y(() => {
    const s = n.value.length > 1;
    return s && t && (t.state.isGroup.value = true), s;
  }), toggleAllSelection: (s) => {
    s.stopPropagation(), t == null ? void 0 : t.store.commit("toggleAllSelection");
  }, columnRows: n };
}
var qN = K({ name: "ElTableHeader", components: { ElCheckbox: Fn }, props: { fixed: { type: String, default: "" }, store: { required: true, type: Object }, border: Boolean, defaultSort: { type: Object, default: () => ({ prop: "", order: "" }) }, appendFilterPanelTo: { type: String }, allowDragLastColumn: { type: Boolean } }, setup(e, { emit: t }) {
  const n = tt(), l = we(Un), a = de("table"), s = N({}), { onColumnsChange: r, onScrollableChange: i } = Oi(l), u = (l == null ? void 0 : l.props.tableLayout) === "auto", c = Ct(/* @__PURE__ */ new Map()), d = N(), f = () => {
    setTimeout(() => {
      c.size > 0 && (c.forEach((I, R) => {
        const P = d.value.querySelector(`.${R.replace(/\s/g, ".")}`);
        if (P) {
          const W = P.getBoundingClientRect().width;
          I.width = W;
        }
      }), c.clear());
    });
  };
  ue(c, f), Xe(async () => {
    await $e(), await $e();
    const { prop: I, order: R } = e.defaultSort;
    l == null ? void 0 : l.store.commit("sort", { prop: I, order: R, init: true }), f();
  });
  const { handleHeaderClick: m, handleHeaderContextMenu: h, handleMouseDown: v, handleMouseMove: p, handleMouseOut: b, handleSortClick: g, handleFilterClick: T } = jN(e, t), { getHeaderRowStyle: w, getHeaderRowClass: C, getHeaderCellStyle: S, getHeaderCellClass: E } = UN(e), { isGroup: M, toggleAllSelection: O, columnRows: _ } = YN(e);
  return n.state = { onColumnsChange: r, onScrollableChange: i }, n.filterPanels = s, { ns: a, filterPanels: s, onColumnsChange: r, onScrollableChange: i, columnRows: _, getHeaderRowClass: C, getHeaderRowStyle: w, getHeaderCellClass: E, getHeaderCellStyle: S, handleHeaderClick: m, handleHeaderContextMenu: h, handleMouseDown: v, handleMouseMove: p, handleMouseOut: b, handleSortClick: g, handleFilterClick: T, isGroup: M, toggleAllSelection: O, saveIndexSelection: c, isTableLayoutAuto: u, theadRef: d, updateFixedColumnStyle: f };
}, render() {
  const { ns: e, isGroup: t, columnRows: n, getHeaderCellStyle: l, getHeaderCellClass: a, getHeaderRowClass: s, getHeaderRowStyle: r, handleHeaderClick: i, handleHeaderContextMenu: u, handleMouseDown: c, handleMouseMove: d, handleSortClick: f, handleMouseOut: m, store: h, $parent: v, saveIndexSelection: p, isTableLayoutAuto: b } = this;
  let g = 1;
  return Oe("thead", { ref: "theadRef", class: { [e.is("group")]: t } }, n.map((T, w) => Oe("tr", { class: s(w), key: w, style: r(w) }, T.map((C, S) => {
    C.rowSpan > g && (g = C.rowSpan);
    const E = a(w, S, T, C);
    return b && C.fixed && p.set(E, C), Oe("th", { class: E, colspan: C.colSpan, key: `${C.id}-thead`, rowspan: C.rowSpan, style: l(w, S, T, C), onClick: (M) => {
      M.currentTarget.classList.contains("noclick") || i(M, C);
    }, onContextmenu: (M) => u(M, C), onMousedown: (M) => c(M, C), onMousemove: (M) => d(M, C), onMouseout: m }, [Oe("div", { class: ["cell", C.filteredValue && C.filteredValue.length > 0 ? "highlight" : ""] }, [C.renderHeader ? C.renderHeader({ column: C, $index: S, store: h, _self: v }) : C.label, C.sortable && Oe("span", { onClick: (M) => f(M, C), class: "caret-wrapper" }, [Oe("i", { onClick: (M) => f(M, C, "ascending"), class: "sort-caret ascending" }), Oe("i", { onClick: (M) => f(M, C, "descending"), class: "sort-caret descending" })]), C.filterable && Oe(WN, { store: h, placement: C.filterPlacement || "bottom-start", appendTo: v.appendFilterPanelTo, column: C, upDataColumn: (M, O) => {
      C[M] = O;
    } }, { "filter-icon": () => C.renderFilterIcon ? C.renderFilterIcon({ filterOpened: C.filterOpened }) : null })])]);
  }))));
} });
function zs(e, t, n = 0.03) {
  return e - t > n;
}
function GN(e) {
  const t = we(Un), n = N(""), l = N(Oe("div")), a = (v, p, b) => {
    var g;
    const T = t, w = Fs(v);
    let C;
    const S = (g = T == null ? void 0 : T.vnode.el) == null ? void 0 : g.dataset.prefix;
    w && (C = sc({ columns: e.store.states.columns.value }, w, S), C && (T == null ? void 0 : T.emit(`cell-${b}`, p, C, w, v))), T == null ? void 0 : T.emit(`row-${b}`, p, C, v);
  }, s = (v, p) => {
    a(v, p, "dblclick");
  }, r = (v, p) => {
    e.store.commit("setCurrentRow", p), a(v, p, "click");
  }, i = (v, p) => {
    a(v, p, "contextmenu");
  }, u = Pn((v) => {
    e.store.commit("setHoverRow", v);
  }, 30), c = Pn(() => {
    e.store.commit("setHoverRow", null);
  }, 30), d = (v) => {
    const p = window.getComputedStyle(v, null), b = Number.parseInt(p.paddingLeft, 10) || 0, g = Number.parseInt(p.paddingRight, 10) || 0, T = Number.parseInt(p.paddingTop, 10) || 0, w = Number.parseInt(p.paddingBottom, 10) || 0;
    return { left: b, right: g, top: T, bottom: w };
  }, f = (v, p, b) => {
    let g = p.target.parentNode;
    for (; v > 1 && (g = g == null ? void 0 : g.nextSibling, !(!g || g.nodeName !== "TR")); ) b(g, "hover-row hover-fixed-row"), v--;
  };
  return { handleDoubleClick: s, handleClick: r, handleContextMenu: i, handleMouseEnter: u, handleMouseLeave: c, handleCellMouseEnter: (v, p, b) => {
    var g, T, w;
    const C = t, S = Fs(v), E = (g = C == null ? void 0 : C.vnode.el) == null ? void 0 : g.dataset.prefix;
    let M;
    if (S) {
      M = sc({ columns: e.store.states.columns.value }, S, E), S.rowSpan > 1 && f(S.rowSpan, v, Dn);
      const G = C.hoverState = { cell: S, column: M, row: p };
      C == null ? void 0 : C.emit("cell-mouse-enter", G.row, G.column, G.cell, v);
    }
    if (!b) return;
    const O = v.target.querySelector(".cell");
    if (!(Nn(O, `${E}-tooltip`) && O.childNodes.length)) return;
    const _ = document.createRange();
    _.setStart(O, 0), _.setEnd(O, O.childNodes.length);
    const { width: I, height: R } = _.getBoundingClientRect(), { width: P, height: W } = O.getBoundingClientRect(), { top: te, left: A, right: L, bottom: F } = d(O), V = A + L, B = te + F;
    zs(I + V, P) || zs(R + B, W) || zs(O.scrollWidth, P) ? ON(b, S.innerText || S.textContent, p, M, S, C) : ((T = Tn) == null ? void 0 : T.trigger) === S && ((w = Tn) == null || w());
  }, handleCellMouseLeave: (v) => {
    const p = Fs(v);
    if (!p) return;
    p.rowSpan > 1 && f(p.rowSpan, v, gn);
    const b = t == null ? void 0 : t.hoverState;
    t == null ? void 0 : t.emit("cell-mouse-leave", b == null ? void 0 : b.row, b == null ? void 0 : b.column, b == null ? void 0 : b.cell, v);
  }, tooltipContent: n, tooltipTrigger: l };
}
function XN(e) {
  const t = we(Un), n = de("table");
  return { getRowStyle: (c, d) => {
    const f = t == null ? void 0 : t.props.rowStyle;
    return Qe(f) ? f.call(null, { row: c, rowIndex: d }) : f || null;
  }, getRowClass: (c, d) => {
    const f = [n.e("row")];
    (t == null ? void 0 : t.props.highlightCurrentRow) && c === e.store.states.currentRow.value && f.push("current-row"), e.stripe && d % 2 === 1 && f.push(n.em("row", "striped"));
    const m = t == null ? void 0 : t.props.rowClassName;
    return Be(m) ? f.push(m) : Qe(m) && f.push(m.call(null, { row: c, rowIndex: d })), f;
  }, getCellStyle: (c, d, f, m) => {
    const h = t == null ? void 0 : t.props.cellStyle;
    let v = h ?? {};
    Qe(h) && (v = h.call(null, { rowIndex: c, columnIndex: d, row: f, column: m }));
    const p = Mi(d, e == null ? void 0 : e.fixed, e.store);
    return ko(p, "left"), ko(p, "right"), Object.assign({}, v, p);
  }, getCellClass: (c, d, f, m, h) => {
    const v = _i(n.b(), d, e == null ? void 0 : e.fixed, e.store, void 0, h), p = [m.id, m.align, m.className, ...v], b = t == null ? void 0 : t.props.cellClassName;
    return Be(b) ? p.push(b) : Qe(b) && p.push(b.call(null, { rowIndex: c, columnIndex: d, row: f, column: m })), p.push(n.e("cell")), p.filter((g) => !!g).join(" ");
  }, getSpan: (c, d, f, m) => {
    let h = 1, v = 1;
    const p = t == null ? void 0 : t.props.spanMethod;
    if (Qe(p)) {
      const b = p({ row: c, column: d, rowIndex: f, columnIndex: m });
      Se(b) ? (h = b[0], v = b[1]) : gt(b) && (h = b.rowspan, v = b.colspan);
    }
    return { rowspan: h, colspan: v };
  }, getColspanRealWidth: (c, d, f) => {
    if (d < 1) return c[f].realWidth;
    const m = c.map(({ realWidth: h, width: v }) => h || v).slice(f, f + d);
    return Number(m.reduce((h, v) => Number(h) + Number(v), -1));
  } };
}
const ZN = K({ name: "TableTdWrapper" }), JN = K({ ...ZN, props: { colspan: { type: Number, default: 1 }, rowspan: { type: Number, default: 1 } }, setup(e) {
  return (t, n) => (k(), D("td", { colspan: e.colspan, rowspan: e.rowspan }, [X(t.$slots, "default")], 8, ["colspan", "rowspan"]));
} });
var QN = ve(JN, [["__file", "td-wrapper.vue"]]);
function eI(e) {
  const t = we(Un), n = de("table"), { handleDoubleClick: l, handleClick: a, handleContextMenu: s, handleMouseEnter: r, handleMouseLeave: i, handleCellMouseEnter: u, handleCellMouseLeave: c, tooltipContent: d, tooltipTrigger: f } = GN(e), { getRowStyle: m, getRowClass: h, getCellStyle: v, getCellClass: p, getSpan: b, getColspanRealWidth: g } = XN(e), T = y(() => e.store.states.columns.value.findIndex(({ type: M }) => M === "default")), w = (M, O) => {
    const _ = t.props.rowKey;
    return _ ? vn(M, _) : O;
  }, C = (M, O, _, I = false) => {
    const { tooltipEffect: R, tooltipOptions: P, store: W } = e, { indent: te, columns: A } = W.states, L = h(M, O);
    let F = true;
    return _ && (L.push(n.em("row", `level-${_.level}`)), F = _.display), Oe("tr", { style: [F ? null : { display: "none" }, m(M, O)], class: L, key: w(M, O), onDblclick: (B) => l(B, M), onClick: (B) => a(B, M), onContextmenu: (B) => s(B, M), onMouseenter: () => r(O), onMouseleave: i }, A.value.map((B, G) => {
      const { rowspan: U, colspan: ne } = b(M, B, O, G);
      if (!U || !ne) return null;
      const Z = Object.assign({}, B);
      Z.realWidth = g(A.value, ne, G);
      const ee = { store: e.store, _self: e.context || t, column: Z, row: M, $index: O, cellIndex: G, expanded: I };
      G === T.value && _ && (ee.treeNode = { indent: _.level * te.value, level: _.level }, Tt(_.expanded) && (ee.treeNode.expanded = _.expanded, "loading" in _ && (ee.treeNode.loading = _.loading), "noLazyChildren" in _ && (ee.treeNode.noLazyChildren = _.noLazyChildren)));
      const re = `${w(M, O)},${G}`, le = Z.columnKey || Z.rawColumnKey || "", Q = B.showOverflowTooltip && Ac({ effect: R }, P, B.showOverflowTooltip);
      return Oe(QN, { style: v(O, G, M, B), class: p(O, G, M, B, ne - 1), key: `${le}${re}`, rowspan: U, colspan: ne, onMouseenter: (ie) => u(ie, M, Q), onMouseleave: c }, { default: () => S(G, B, ee) });
    }));
  }, S = (M, O, _) => O.renderCell(_);
  return { wrappedRowRender: (M, O) => {
    const _ = e.store, { isRowExpanded: I, assertRowKey: R } = _, { treeData: P, lazyTreeNodeMap: W, childrenColumnName: te, rowKey: A } = _.states, L = _.states.columns.value;
    if (L.some(({ type: V }) => V === "expand")) {
      const V = I(M), B = C(M, O, void 0, V), G = t.renderExpanded;
      if (!G) return console.error("[Element Error]renderExpanded is required."), B;
      const U = [[B]];
      return (t.props.preserveExpandedContent || V) && U[0].push(Oe("tr", { key: `expanded-row__${B.key}`, style: { display: V ? "" : "none" } }, [Oe("td", { colspan: L.length, class: `${n.e("cell")} ${n.e("expanded-cell")}` }, [G({ row: M, $index: O, store: _, expanded: V })])])), U;
    } else if (Object.keys(P.value).length) {
      R();
      const V = vn(M, A.value);
      let B = P.value[V], G = null;
      B && (G = { expanded: B.expanded, level: B.level, display: true }, Tt(B.lazy) && (Tt(B.loaded) && B.loaded && (G.noLazyChildren = !(B.children && B.children.length)), G.loading = B.loading));
      const U = [C(M, O, G)];
      if (B) {
        let ne = 0;
        const Z = (re, le) => {
          re && re.length && le && re.forEach((Q) => {
            const ie = { display: le.display && le.expanded, level: le.level + 1, expanded: false, noLazyChildren: false, loading: false }, ce = vn(Q, A.value);
            if (Wn(ce)) throw new Error("For nested data item, row-key is required.");
            if (B = { ...P.value[ce] }, B && (ie.expanded = B.expanded, B.level = B.level || ie.level, B.display = !!(B.expanded && ie.display), Tt(B.lazy) && (Tt(B.loaded) && B.loaded && (ie.noLazyChildren = !(B.children && B.children.length)), ie.loading = B.loading)), ne++, U.push(C(Q, O + ne, ie)), B) {
              const Ie = W.value[ce] || Q[te.value];
              Z(Ie, B);
            }
          });
        };
        B.display = true;
        const ee = W.value[V] || M[te.value];
        Z(ee, B);
      }
      return U;
    } else return C(M, O, void 0);
  }, tooltipContent: d, tooltipTrigger: f };
}
const tI = { store: { required: true, type: Object }, stripe: Boolean, tooltipEffect: String, tooltipOptions: { type: Object }, context: { default: () => ({}), type: Object }, rowClassName: [String, Function], rowStyle: [Object, Function], fixed: { type: String, default: "" }, highlight: Boolean };
var nI = K({ name: "ElTableBody", props: tI, setup(e) {
  const t = tt(), n = we(Un), l = de("table"), { wrappedRowRender: a, tooltipContent: s, tooltipTrigger: r } = eI(e), { onColumnsChange: i, onScrollableChange: u } = Oi(n), c = [];
  return ue(e.store.states.hoverRow, (d, f) => {
    var m;
    const h = t == null ? void 0 : t.vnode.el, v = Array.from((h == null ? void 0 : h.children) || []).filter((g) => g == null ? void 0 : g.classList.contains(`${l.e("row")}`));
    let p = d;
    const b = (m = v[p]) == null ? void 0 : m.childNodes;
    if (b == null ? void 0 : b.length) {
      let g = 0;
      Array.from(b).reduce((w, C, S) => {
        var E, M;
        return ((E = b[S]) == null ? void 0 : E.colSpan) > 1 && (g = (M = b[S]) == null ? void 0 : M.colSpan), C.nodeName !== "TD" && g === 0 && w.push(S), g > 0 && g--, w;
      }, []).forEach((w) => {
        var C;
        for (p = d; p > 0; ) {
          const S = (C = v[p - 1]) == null ? void 0 : C.childNodes;
          if (S[w] && S[w].nodeName === "TD" && S[w].rowSpan > 1) {
            Dn(S[w], "hover-cell"), c.push(S[w]);
            break;
          }
          p--;
        }
      });
    } else c.forEach((g) => gn(g, "hover-cell")), c.length = 0;
    !e.store.states.isComplex.value || !dt || Il(() => {
      const g = v[f], T = v[d];
      g && !g.classList.contains("hover-fixed-row") && gn(g, "hover-row"), T && Dn(T, "hover-row");
    });
  }), To(() => {
    var d;
    (d = Tn) == null || d();
  }), { ns: l, onColumnsChange: i, onScrollableChange: u, wrappedRowRender: a, tooltipContent: s, tooltipTrigger: r };
}, render() {
  const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
  return Oe("tbody", { tabIndex: -1 }, [n.reduce((l, a) => l.concat(e(a, l.length)), [])]);
} });
function lI() {
  const e = we(Un), t = e == null ? void 0 : e.store, n = y(() => t.states.fixedLeafColumnsLength.value), l = y(() => t.states.rightFixedColumns.value.length), a = y(() => t.states.columns.value.length), s = y(() => t.states.fixedColumns.value.length), r = y(() => t.states.rightFixedColumns.value.length);
  return { leftFixedLeafCount: n, rightFixedLeafCount: l, columnsCount: a, leftFixedCount: s, rightFixedCount: r, columns: t.states.columns };
}
function oI(e) {
  const { columns: t } = lI(), n = de("table");
  return { getCellClasses: (s, r) => {
    const i = s[r], u = [n.e("cell"), i.id, i.align, i.labelClassName, ..._i(n.b(), r, i.fixed, e.store)];
    return i.className && u.push(i.className), i.children || u.push(n.is("leaf")), u;
  }, getCellStyles: (s, r) => {
    const i = Mi(r, s.fixed, e.store);
    return ko(i, "left"), ko(i, "right"), i;
  }, columns: t };
}
var aI = K({ name: "ElTableFooter", props: { fixed: { type: String, default: "" }, store: { required: true, type: Object }, summaryMethod: Function, sumText: String, border: Boolean, defaultSort: { type: Object, default: () => ({ prop: "", order: "" }) } }, setup(e) {
  const t = we(Un), n = de("table"), { getCellClasses: l, getCellStyles: a, columns: s } = oI(e), { onScrollableChange: r, onColumnsChange: i } = Oi(t);
  return { ns: n, onScrollableChange: r, onColumnsChange: i, getCellClasses: l, getCellStyles: a, columns: s };
}, render() {
  const { columns: e, getCellStyles: t, getCellClasses: n, summaryMethod: l, sumText: a } = this, s = this.store.states.data.value;
  let r = [];
  return l ? r = l({ columns: e, data: s }) : e.forEach((i, u) => {
    if (u === 0) {
      r[u] = a;
      return;
    }
    const c = s.map((h) => Number(h[i.property])), d = [];
    let f = true;
    c.forEach((h) => {
      if (!Number.isNaN(+h)) {
        f = false;
        const v = `${h}`.split(".")[1];
        d.push(v ? v.length : 0);
      }
    });
    const m = Math.max.apply(null, d);
    f ? r[u] = "" : r[u] = c.reduce((h, v) => {
      const p = Number(v);
      return Number.isNaN(+p) ? h : Number.parseFloat((h + v).toFixed(Math.min(m, 20)));
    }, 0);
  }), Oe(Oe("tfoot", [Oe("tr", {}, [...e.map((i, u) => Oe("td", { key: u, colspan: i.colSpan, rowspan: i.rowSpan, class: n(e, u), style: t(i, u) }, [Oe("div", { class: ["cell", i.labelClassName] }, [r[u]])]))])]));
} });
function sI(e) {
  return { setCurrentRow: (f) => {
    e.commit("setCurrentRow", f);
  }, getSelectionRows: () => e.getSelectionRows(), toggleRowSelection: (f, m, h = true) => {
    e.toggleRowSelection(f, m, false, h), e.updateAllSelected();
  }, clearSelection: () => {
    e.clearSelection();
  }, clearFilter: (f) => {
    e.clearFilter(f);
  }, toggleAllSelection: () => {
    e.commit("toggleAllSelection");
  }, toggleRowExpansion: (f, m) => {
    e.toggleRowExpansionAdapter(f, m);
  }, clearSort: () => {
    e.clearSort();
  }, sort: (f, m) => {
    e.commit("sort", { prop: f, order: m });
  }, updateKeyChildren: (f, m) => {
    e.updateKeyChildren(f, m);
  } };
}
function rI(e, t, n, l) {
  const a = N(false), s = N(null), r = N(false), i = (V) => {
    r.value = V;
  }, u = N({ width: null, height: null, headerHeight: null }), c = N(false), d = { display: "inline-block", verticalAlign: "middle" }, f = N(), m = N(0), h = N(0), v = N(0), p = N(0), b = N(0);
  an(() => {
    t.setHeight(e.height);
  }), an(() => {
    t.setMaxHeight(e.maxHeight);
  }), ue(() => [e.currentRowKey, n.states.rowKey], ([V, B]) => {
    !o(B) || !o(V) || n.setCurrentRowKey(`${V}`);
  }, { immediate: true }), ue(() => e.data, (V) => {
    l.store.commit("setData", V);
  }, { immediate: true, deep: true }), an(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const g = () => {
    l.store.commit("setHoverRow", null), l.hoverState && (l.hoverState = null);
  }, T = (V, B) => {
    const { pixelX: G, pixelY: U } = B;
    Math.abs(G) >= Math.abs(U) && (l.refs.bodyWrapper.scrollLeft += B.pixelX / 5);
  }, w = y(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), C = y(() => ({ width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : "" })), S = () => {
    w.value && t.updateElsHeight(), t.updateColumnsWidth(), !(typeof window > "u") && requestAnimationFrame(_);
  };
  Xe(async () => {
    await $e(), n.updateColumns(), I(), requestAnimationFrame(S);
    const V = l.vnode.el, B = l.refs.headerWrapper;
    e.flexible && V && V.parentElement && (V.parentElement.style.minWidth = "0"), u.value = { width: f.value = V.offsetWidth, height: V.offsetHeight, headerHeight: e.showHeader && B ? B.offsetHeight : null }, n.states.columns.value.forEach((G) => {
      G.filteredValue && G.filteredValue.length && l.store.commit("filterChange", { column: G, values: G.filteredValue, silent: true });
    }), l.$ready = true;
  });
  const E = (V, B) => {
    if (!V) return;
    const G = Array.from(V.classList).filter((U) => !U.startsWith("is-scrolling-"));
    G.push(t.scrollX.value ? B : "is-scrolling-none"), V.className = G.join(" ");
  }, M = (V) => {
    const { tableWrapper: B } = l.refs;
    E(B, V);
  }, O = (V) => {
    const { tableWrapper: B } = l.refs;
    return !!(B && B.classList.contains(V));
  }, _ = function() {
    if (!l.refs.scrollBarRef) return;
    if (!t.scrollX.value) {
      const re = "is-scrolling-none";
      O(re) || M(re);
      return;
    }
    const V = l.refs.scrollBarRef.wrapRef;
    if (!V) return;
    const { scrollLeft: B, offsetWidth: G, scrollWidth: U } = V, { headerWrapper: ne, footerWrapper: Z } = l.refs;
    ne && (ne.scrollLeft = B), Z && (Z.scrollLeft = B);
    const ee = U - G - 1;
    B >= ee ? M("is-scrolling-right") : M(B === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, I = () => {
    l.refs.scrollBarRef && (l.refs.scrollBarRef.wrapRef && Et(l.refs.scrollBarRef.wrapRef, "scroll", _, { passive: true }), e.fit ? Lt(l.vnode.el, R) : Et(window, "resize", R), Lt(l.refs.bodyWrapper, () => {
      var V, B;
      R(), (B = (V = l.refs) == null ? void 0 : V.scrollBarRef) == null || B.update();
    }));
  }, R = () => {
    var V, B, G, U;
    const ne = l.vnode.el;
    if (!l.$ready || !ne) return;
    let Z = false;
    const { width: ee, height: re, headerHeight: le } = u.value, Q = f.value = ne.offsetWidth;
    ee !== Q && (Z = true);
    const ie = ne.offsetHeight;
    (e.height || w.value) && re !== ie && (Z = true);
    const ce = e.tableLayout === "fixed" ? l.refs.headerWrapper : (V = l.refs.tableHeaderRef) == null ? void 0 : V.$el;
    e.showHeader && (ce == null ? void 0 : ce.offsetHeight) !== le && (Z = true), m.value = ((B = l.refs.tableWrapper) == null ? void 0 : B.scrollHeight) || 0, v.value = (ce == null ? void 0 : ce.scrollHeight) || 0, p.value = ((G = l.refs.footerWrapper) == null ? void 0 : G.offsetHeight) || 0, b.value = ((U = l.refs.appendWrapper) == null ? void 0 : U.offsetHeight) || 0, h.value = m.value - v.value - p.value - b.value, Z && (u.value = { width: Q, height: ie, headerHeight: e.showHeader && (ce == null ? void 0 : ce.offsetHeight) || 0 }, S());
  }, P = Ht(), W = y(() => {
    const { bodyWidth: V, scrollY: B, gutterWidth: G } = t;
    return V.value ? `${V.value - (B.value ? G : 0)}px` : "";
  }), te = y(() => e.maxHeight ? "fixed" : e.tableLayout), A = y(() => {
    if (e.data && e.data.length) return null;
    let V = "100%";
    e.height && h.value && (V = `${h.value}px`);
    const B = f.value;
    return { width: B ? `${B}px` : "", height: V };
  }), L = y(() => e.height ? { height: "100%" } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? { maxHeight: `calc(${e.maxHeight} - ${v.value + p.value}px)` } : { maxHeight: `${e.maxHeight - v.value - p.value}px` } : {});
  return { isHidden: a, renderExpanded: s, setDragVisible: i, isGroup: c, handleMouseLeave: g, handleHeaderFooterMousewheel: T, tableSize: P, emptyBlockStyle: A, handleFixedMousewheel: (V, B) => {
    const G = l.refs.bodyWrapper;
    if (Math.abs(B.spinY) > 0) {
      const U = G.scrollTop;
      B.pixelY < 0 && U !== 0 && V.preventDefault(), B.pixelY > 0 && G.scrollHeight - G.clientHeight > U && V.preventDefault(), G.scrollTop += Math.ceil(B.pixelY / 5);
    } else G.scrollLeft += Math.ceil(B.pixelX / 5);
  }, resizeProxyVisible: r, bodyWidth: W, resizeState: u, doLayout: S, tableBodyStyles: C, tableLayout: te, scrollbarViewStyle: d, scrollbarStyle: L };
}
function iI(e) {
  const t = N(), n = () => {
    const a = e.vnode.el.querySelector(".hidden-columns"), s = { childList: true, subtree: true }, r = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      r.forEach((i) => i());
    }), t.value.observe(a, s);
  };
  Xe(() => {
    n();
  }), To(() => {
    var l;
    (l = t.value) == null || l.disconnect();
  });
}
var uI = { data: { type: Array, default: () => [] }, size: Wt, width: [String, Number], height: [String, Number], maxHeight: [String, Number], fit: { type: Boolean, default: true }, stripe: Boolean, border: Boolean, rowKey: [String, Function], showHeader: { type: Boolean, default: true }, showSummary: Boolean, sumText: String, summaryMethod: Function, rowClassName: [String, Function], rowStyle: [Object, Function], cellClassName: [String, Function], cellStyle: [Object, Function], headerRowClassName: [String, Function], headerRowStyle: [Object, Function], headerCellClassName: [String, Function], headerCellStyle: [Object, Function], highlightCurrentRow: Boolean, currentRowKey: [String, Number], emptyText: String, expandRowKeys: Array, defaultExpandAll: Boolean, defaultSort: Object, tooltipEffect: String, tooltipOptions: Object, spanMethod: Function, selectOnIndeterminate: { type: Boolean, default: true }, indent: { type: Number, default: 16 }, treeProps: { type: Object, default: () => ({ hasChildren: "hasChildren", children: "children", checkStrictly: false }) }, lazy: Boolean, load: Function, style: { type: Object, default: () => ({}) }, className: { type: String, default: "" }, tableLayout: { type: String, default: "fixed" }, scrollbarAlwaysOn: Boolean, flexible: Boolean, showOverflowTooltip: [Boolean, Object], tooltipFormatter: Function, appendFilterPanelTo: String, scrollbarTabindex: { type: [Number, String], default: void 0 }, allowDragLastColumn: { type: Boolean, default: true }, preserveExpandedContent: { type: Boolean, default: false } };
function Ep(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every(({ width: a }) => vt(a)) && (n = []);
  const l = (a) => {
    const s = { key: `${e.tableLayout}_${a.id}`, style: {}, name: void 0 };
    return t ? s.style = { width: `${a.width}px` } : s.name = a.id, s;
  };
  return Oe("colgroup", {}, n.map((a) => Oe("col", l(a))));
}
Ep.props = ["columns", "tableLayout"];
const cI = () => {
  const e = N(), t = (s, r) => {
    const i = e.value;
    i && i.scrollTo(s, r);
  }, n = (s, r) => {
    const i = e.value;
    i && _e(r) && ["Top", "Left"].includes(s) && i[`setScroll${s}`](r);
  };
  return { scrollBarRef: e, scrollTo: t, setScrollTop: (s) => n("Top", s), setScrollLeft: (s) => n("Left", s) };
}, dI = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(l) {
      const a = yh(l);
      t && Reflect.apply(t, this, [l, a]);
    };
    e.addEventListener("wheel", n, { passive: true });
  }
}, fI = { beforeMount(e, t) {
  dI(e, t.value);
} };
let pI = 1;
const vI = K({ name: "ElTable", directives: { Mousewheel: fI }, components: { TableHeader: qN, TableBody: nI, TableFooter: aI, ElScrollbar: el, hColgroup: Ep }, props: uI, emits: ["select", "select-all", "selection-change", "cell-mouse-enter", "cell-mouse-leave", "cell-contextmenu", "cell-click", "cell-dblclick", "row-click", "row-contextmenu", "row-dblclick", "header-click", "header-contextmenu", "sort-change", "filter-change", "current-change", "header-dragend", "expand-change", "scroll"], setup(e) {
  const { t } = ft(), n = de("table"), l = tt();
  ut(Un, l);
  const a = AN(l, e);
  l.store = a;
  const s = new zN({ store: l.store, table: l, fit: e.fit, showHeader: e.showHeader });
  l.layout = s;
  const r = y(() => (a.states.data.value || []).length === 0), { setCurrentRow: i, getSelectionRows: u, toggleRowSelection: c, clearSelection: d, clearFilter: f, toggleAllSelection: m, toggleRowExpansion: h, clearSort: v, sort: p, updateKeyChildren: b } = sI(a), { isHidden: g, renderExpanded: T, setDragVisible: w, isGroup: C, handleMouseLeave: S, handleHeaderFooterMousewheel: E, tableSize: M, emptyBlockStyle: O, handleFixedMousewheel: _, resizeProxyVisible: I, bodyWidth: R, resizeState: P, doLayout: W, tableBodyStyles: te, tableLayout: A, scrollbarViewStyle: L, scrollbarStyle: F } = rI(e, s, a, l), { scrollBarRef: V, scrollTo: B, setScrollLeft: G, setScrollTop: U } = cI(), ne = Pn(W, 50), Z = `${n.namespace.value}-table_${pI++}`;
  l.tableId = Z, l.state = { isGroup: C, resizeState: P, doLayout: W, debouncedUpdateLayout: ne };
  const ee = y(() => {
    var Q;
    return (Q = e.sumText) != null ? Q : t("el.table.sumText");
  }), re = y(() => {
    var Q;
    return (Q = e.emptyText) != null ? Q : t("el.table.emptyText");
  }), le = y(() => kp(a.states.originColumns.value)[0]);
  return iI(l), It(() => {
    ne.cancel();
  }), { ns: n, layout: s, store: a, columns: le, handleHeaderFooterMousewheel: E, handleMouseLeave: S, tableId: Z, tableSize: M, isHidden: g, isEmpty: r, renderExpanded: T, resizeProxyVisible: I, resizeState: P, isGroup: C, bodyWidth: R, tableBodyStyles: te, emptyBlockStyle: O, debouncedUpdateLayout: ne, handleFixedMousewheel: _, setCurrentRow: i, getSelectionRows: u, toggleRowSelection: c, clearSelection: d, clearFilter: f, toggleAllSelection: m, toggleRowExpansion: h, clearSort: v, doLayout: W, sort: p, updateKeyChildren: b, t, setDragVisible: w, context: l, computedSumText: ee, computedEmptyText: re, tableLayout: A, scrollbarViewStyle: L, scrollbarStyle: F, scrollBarRef: V, scrollTo: B, setScrollLeft: G, setScrollTop: U, allowDragLastColumn: e.allowDragLastColumn };
} });
function hI(e, t, n, l, a, s) {
  const r = nt("hColgroup"), i = nt("table-header"), u = nt("table-body"), c = nt("table-footer"), d = nt("el-scrollbar"), f = ls("mousewheel");
  return k(), D("div", { ref: "tableWrapper", class: $([{ [e.ns.m("fit")]: e.fit, [e.ns.m("striped")]: e.stripe, [e.ns.m("border")]: e.border || e.isGroup, [e.ns.m("hidden")]: e.isHidden, [e.ns.m("group")]: e.isGroup, [e.ns.m("fluid-height")]: e.maxHeight, [e.ns.m("scrollable-x")]: e.layout.scrollX.value, [e.ns.m("scrollable-y")]: e.layout.scrollY.value, [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value, [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100, "has-footer": e.showSummary }, e.ns.m(e.tableSize), e.className, e.ns.b(), e.ns.m(`layout-${e.tableLayout}`)]), style: Me(e.style), "data-prefix": e.ns.namespace.value, onMouseleave: e.handleMouseLeave }, [x("div", { class: $(e.ns.e("inner-wrapper")) }, [x("div", { ref: "hiddenColumns", class: "hidden-columns" }, [X(e.$slots, "default")], 512), e.showHeader && e.tableLayout === "fixed" ? Ye((k(), D("div", { key: 0, ref: "headerWrapper", class: $(e.ns.e("header-wrapper")) }, [x("table", { ref: "tableHeader", class: $(e.ns.e("header")), style: Me(e.tableBodyStyles), border: "0", cellpadding: "0", cellspacing: "0" }, [z(r, { columns: e.store.states.columns.value, "table-layout": e.tableLayout }, null, 8, ["columns", "table-layout"]), z(i, { ref: "tableHeaderRef", border: e.border, "default-sort": e.defaultSort, store: e.store, "append-filter-panel-to": e.appendFilterPanelTo, "allow-drag-last-column": e.allowDragLastColumn, onSetDragVisible: e.setDragVisible }, null, 8, ["border", "default-sort", "store", "append-filter-panel-to", "allow-drag-last-column", "onSetDragVisible"])], 6)], 2)), [[f, e.handleHeaderFooterMousewheel]]) : J("v-if", true), x("div", { ref: "bodyWrapper", class: $(e.ns.e("body-wrapper")) }, [z(d, { ref: "scrollBarRef", "view-style": e.scrollbarViewStyle, "wrap-style": e.scrollbarStyle, always: e.scrollbarAlwaysOn, tabindex: e.scrollbarTabindex, onScroll: (m) => e.$emit("scroll", m) }, { default: j(() => [x("table", { ref: "tableBody", class: $(e.ns.e("body")), cellspacing: "0", cellpadding: "0", border: "0", style: Me({ width: e.bodyWidth, tableLayout: e.tableLayout }) }, [z(r, { columns: e.store.states.columns.value, "table-layout": e.tableLayout }, null, 8, ["columns", "table-layout"]), e.showHeader && e.tableLayout === "auto" ? (k(), oe(i, { key: 0, ref: "tableHeaderRef", class: $(e.ns.e("body-header")), border: e.border, "default-sort": e.defaultSort, store: e.store, "append-filter-panel-to": e.appendFilterPanelTo, onSetDragVisible: e.setDragVisible }, null, 8, ["class", "border", "default-sort", "store", "append-filter-panel-to", "onSetDragVisible"])) : J("v-if", true), z(u, { context: e.context, highlight: e.highlightCurrentRow, "row-class-name": e.rowClassName, "tooltip-effect": e.tooltipEffect, "tooltip-options": e.tooltipOptions, "row-style": e.rowStyle, store: e.store, stripe: e.stripe }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]), e.showSummary && e.tableLayout === "auto" ? (k(), oe(c, { key: 1, class: $(e.ns.e("body-footer")), border: e.border, "default-sort": e.defaultSort, store: e.store, "sum-text": e.computedSumText, "summary-method": e.summaryMethod }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : J("v-if", true)], 6), e.isEmpty ? (k(), D("div", { key: 0, ref: "emptyBlock", style: Me(e.emptyBlockStyle), class: $(e.ns.e("empty-block")) }, [x("span", { class: $(e.ns.e("empty-text")) }, [X(e.$slots, "empty", {}, () => [at(he(e.computedEmptyText), 1)])], 2)], 6)) : J("v-if", true), e.$slots.append ? (k(), D("div", { key: 1, ref: "appendWrapper", class: $(e.ns.e("append-wrapper")) }, [X(e.$slots, "append")], 2)) : J("v-if", true)]), _: 3 }, 8, ["view-style", "wrap-style", "always", "tabindex", "onScroll"])], 2), e.showSummary && e.tableLayout === "fixed" ? Ye((k(), D("div", { key: 1, ref: "footerWrapper", class: $(e.ns.e("footer-wrapper")) }, [x("table", { class: $(e.ns.e("footer")), cellspacing: "0", cellpadding: "0", border: "0", style: Me(e.tableBodyStyles) }, [z(r, { columns: e.store.states.columns.value, "table-layout": e.tableLayout }, null, 8, ["columns", "table-layout"]), z(c, { border: e.border, "default-sort": e.defaultSort, store: e.store, "sum-text": e.computedSumText, "summary-method": e.summaryMethod }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])], 6)], 2)), [[pt, !e.isEmpty], [f, e.handleHeaderFooterMousewheel]]) : J("v-if", true), e.border || e.isGroup ? (k(), D("div", { key: 2, class: $(e.ns.e("border-left-patch")) }, null, 2)) : J("v-if", true)], 2), Ye(x("div", { ref: "resizeProxy", class: $(e.ns.e("column-resize-proxy")) }, null, 2), [[pt, e.resizeProxyVisible]])], 46, ["data-prefix", "onMouseleave"]);
}
var mI = ve(vI, [["render", hI], ["__file", "table.vue"]]);
const gI = { selection: "table-column--selection", expand: "table__expand-column" }, bI = { default: { order: "" }, selection: { width: 48, minWidth: 48, realWidth: 48, order: "" }, expand: { width: 48, minWidth: 48, realWidth: 48, order: "" }, index: { width: 48, minWidth: 48, realWidth: 48, order: "" } }, yI = (e) => gI[e] || "", CI = { selection: { renderHeader({ store: e, column: t }) {
  function n() {
    return e.states.data.value && e.states.data.value.length === 0;
  }
  return Oe(Fn, { disabled: n(), size: e.states.tableSize.value, indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value, "onUpdate:modelValue": e.toggleAllSelection, modelValue: e.states.isAllSelected.value, ariaLabel: t.label });
}, renderCell({ row: e, column: t, store: n, $index: l }) {
  return Oe(Fn, { disabled: t.selectable ? !t.selectable.call(null, e, l) : false, size: n.states.tableSize.value, onChange: () => {
    n.commit("rowSelectedChanged", e);
  }, onClick: (a) => a.stopPropagation(), modelValue: n.isSelected(e), ariaLabel: t.label });
}, sortable: false, resizable: false }, index: { renderHeader({ column: e }) {
  return e.label || "#";
}, renderCell({ column: e, $index: t }) {
  let n = t + 1;
  const l = e.index;
  return _e(l) ? n = t + l : Qe(l) && (n = l(t)), Oe("div", {}, [n]);
}, sortable: false }, expand: { renderHeader({ column: e }) {
  return e.label || "";
}, renderCell({ row: e, store: t, expanded: n }) {
  const { ns: l } = t, a = [l.e("expand-icon")];
  return n && a.push(l.em("expand-icon", "expanded")), Oe("div", { class: a, onClick: function(r) {
    r.stopPropagation(), t.toggleRowExpansion(e);
  } }, { default: () => [Oe(Ee, null, { default: () => [Oe(kn)] })] });
}, sortable: false, resizable: false } };
function wI({ row: e, column: t, $index: n }) {
  var l;
  const a = t.property, s = a && xo(e, a).value;
  return t && t.formatter ? t.formatter(e, t, s, n) : ((l = s == null ? void 0 : s.toString) == null ? void 0 : l.call(s)) || "";
}
function SI({ row: e, treeNode: t, store: n }, l = false) {
  const { ns: a } = n;
  if (!t) return l ? [Oe("span", { class: a.e("placeholder") })] : null;
  const s = [], r = function(i) {
    i.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && s.push(Oe("span", { class: a.e("indent"), style: { "padding-left": `${t.indent}px` } })), Tt(t.expanded) && !t.noLazyChildren) {
    const i = [a.e("expand-icon"), t.expanded ? a.em("expand-icon", "expanded") : ""];
    let u = kn;
    t.loading && (u = Zn), s.push(Oe("div", { class: i, onClick: r }, { default: () => [Oe(Ee, { class: { [a.is("loading")]: t.loading } }, { default: () => [Oe(u)] })] }));
  } else s.push(Oe("span", { class: a.e("placeholder") }));
  return s;
}
function uc(e, t) {
  return e.reduce((n, l) => (n[l] = l, n), t);
}
function kI(e, t) {
  const n = tt();
  return { registerComplexWatchers: () => {
    const s = ["fixed"], r = { realWidth: "width", realMinWidth: "minWidth" }, i = uc(s, r);
    Object.keys(i).forEach((u) => {
      const c = r[u];
      sn(t, c) && ue(() => t[c], (d) => {
        let f = d;
        c === "width" && u === "realWidth" && (f = Ii(d)), c === "minWidth" && u === "realMinWidth" && (f = gp(d)), n.columnConfig.value[c] = f, n.columnConfig.value[u] = f;
        const m = c === "fixed";
        e.value.store.scheduleLayout(m);
      });
    });
  }, registerNormalWatchers: () => {
    const s = ["label", "filters", "filterMultiple", "filteredValue", "sortable", "index", "formatter", "className", "labelClassName", "filterClassName", "showOverflowTooltip", "tooltipFormatter"], r = { property: "prop", align: "realAlign", headerAlign: "realHeaderAlign" }, i = uc(s, r);
    Object.keys(i).forEach((u) => {
      const c = r[u];
      sn(t, c) && ue(() => t[c], (d) => {
        n.columnConfig.value[u] = d;
      });
    });
  } };
}
function EI(e, t, n) {
  const l = tt(), a = N(""), s = N(false), r = N(), i = N(), u = de("table");
  an(() => {
    r.value = e.align ? `is-${e.align}` : null, r.value;
  }), an(() => {
    i.value = e.headerAlign ? `is-${e.headerAlign}` : r.value, i.value;
  });
  const c = y(() => {
    let C = l.vnode.vParent || l.parent;
    for (; C && !C.tableId && !C.columnId; ) C = C.vnode.vParent || C.parent;
    return C;
  }), d = y(() => {
    const { store: C } = l.parent;
    if (!C) return false;
    const { treeData: S } = C.states, E = S.value;
    return E && Object.keys(E).length > 0;
  }), f = N(Ii(e.width)), m = N(gp(e.minWidth)), h = (C) => (f.value && (C.width = f.value), m.value && (C.minWidth = m.value), !f.value && m.value && (C.width = void 0), C.minWidth || (C.minWidth = 80), C.realWidth = Number(vt(C.width) ? C.minWidth : C.width), C), v = (C) => {
    const S = C.type, E = CI[S] || {};
    Object.keys(E).forEach((O) => {
      const _ = E[O];
      O !== "className" && !vt(_) && (C[O] = _);
    });
    const M = yI(S);
    if (M) {
      const O = `${o(u.namespace)}-${M}`;
      C.className = C.className ? `${C.className} ${O}` : O;
    }
    return C;
  }, p = (C) => {
    Se(C) ? C.forEach((E) => S(E)) : S(C);
    function S(E) {
      var M;
      ((M = E == null ? void 0 : E.type) == null ? void 0 : M.name) === "ElTableColumn" && (E.vParent = l);
    }
  };
  return { columnId: a, realAlign: r, isSubColumn: s, realHeaderAlign: i, columnOrTableParent: c, setColumnWidth: h, setColumnForcedProps: v, setColumnRenders: (C) => {
    e.renderHeader || C.type !== "selection" && (C.renderHeader = (E) => (l.columnConfig.value.label, X(t, "header", E, () => [C.label]))), t["filter-icon"] && (C.renderFilterIcon = (E) => X(t, "filter-icon", E));
    let S = C.renderCell;
    return C.type === "expand" ? (C.renderCell = (E) => Oe("div", { class: "cell" }, [S(E)]), n.value.renderExpanded = (E) => t.default ? t.default(E) : t.default) : (S = S || wI, C.renderCell = (E) => {
      let M = null;
      if (t.default) {
        const W = t.default(E);
        M = W.some((te) => te.type !== ts) ? W : S(E);
      } else M = S(E);
      const { columns: O } = n.value.store.states, _ = O.value.findIndex((W) => W.type === "default"), I = d.value && E.cellIndex === _, R = SI(E, I), P = { class: "cell", style: {} };
      return C.showOverflowTooltip && (P.class = `${P.class} ${o(u.namespace)}-tooltip`, P.style = { width: `${(E.column.realWidth || Number(E.column.width)) - 1}px` }), p(M), Oe("div", P, [R, M]);
    }), C;
  }, getPropsData: (...C) => C.reduce((S, E) => (Se(E) && E.forEach((M) => {
    S[M] = e[M];
  }), S), {}), getColumnElIndex: (C, S) => Array.prototype.indexOf.call(C, S), updateColumnOrder: () => {
    n.value.store.commit("updateColumnOrder", l.columnConfig.value);
  } };
}
var $I = { type: { type: String, default: "default" }, label: String, className: String, labelClassName: String, property: String, prop: String, width: { type: [String, Number], default: "" }, minWidth: { type: [String, Number], default: "" }, renderHeader: Function, sortable: { type: [Boolean, String], default: false }, sortMethod: Function, sortBy: [String, Function, Array], resizable: { type: Boolean, default: true }, columnKey: String, align: String, headerAlign: String, showOverflowTooltip: { type: [Boolean, Object], default: void 0 }, tooltipFormatter: Function, fixed: [Boolean, String], formatter: Function, selectable: Function, reserveSelection: Boolean, filterMethod: Function, filteredValue: Array, filters: Array, filterPlacement: String, filterMultiple: { type: Boolean, default: true }, filterClassName: String, index: [Number, Function], sortOrders: { type: Array, default: () => ["ascending", "descending", null], validator: (e) => e.every((t) => ["ascending", "descending", null].includes(t)) } };
let TI = 1;
var $p = K({ name: "ElTableColumn", components: { ElCheckbox: Fn }, props: $I, setup(e, { slots: t }) {
  const n = tt(), l = N({}), a = y(() => {
    let w = n.parent;
    for (; w && !w.tableId; ) w = w.parent;
    return w;
  }), { registerNormalWatchers: s, registerComplexWatchers: r } = kI(a, e), { columnId: i, isSubColumn: u, realHeaderAlign: c, columnOrTableParent: d, setColumnWidth: f, setColumnForcedProps: m, setColumnRenders: h, getPropsData: v, getColumnElIndex: p, realAlign: b, updateColumnOrder: g } = EI(e, t, a), T = d.value;
  i.value = `${T.tableId || T.columnId}_column_${TI++}`, Dr(() => {
    u.value = a.value !== T;
    const w = e.type || "default", C = e.sortable === "" ? true : e.sortable, S = w === "selection" ? false : vt(e.showOverflowTooltip) ? T.props.showOverflowTooltip : e.showOverflowTooltip, E = vt(e.tooltipFormatter) ? T.props.tooltipFormatter : e.tooltipFormatter, M = { ...bI[w], id: i.value, type: w, property: e.prop || e.property, align: b, headerAlign: c, showOverflowTooltip: S, tooltipFormatter: E, filterable: e.filters || e.filterMethod, filteredValue: [], filterPlacement: "", filterClassName: "", isColumnGroup: false, isSubColumn: false, filterOpened: false, sortable: C, index: e.index, rawColumnKey: n.vnode.key };
    let P = v(["columnKey", "label", "className", "labelClassName", "type", "renderHeader", "formatter", "fixed", "resizable"], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], ["filterMethod", "filters", "filterMultiple", "filterOpened", "filteredValue", "filterPlacement", "filterClassName"]);
    P = TN(M, P), P = IN(h, f, m)(P), l.value = P, s(), r();
  }), Xe(() => {
    var w;
    const C = d.value, S = u.value ? C.vnode.el.children : (w = C.refs.hiddenColumns) == null ? void 0 : w.children, E = () => p(S || [], n.vnode.el);
    l.value.getColumnIndex = E, E() > -1 && a.value.store.commit("insertColumn", l.value, u.value ? C.columnConfig.value : null, g);
  }), It(() => {
    const w = l.value.getColumnIndex;
    (w ? w() : -1) > -1 && a.value.store.commit("removeColumn", l.value, u.value ? T.columnConfig.value : null, g);
  }), n.columnId = i.value, n.columnConfig = l;
}, render() {
  var e, t, n;
  try {
    const l = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, { row: {}, column: {}, $index: -1 }), a = [];
    if (Se(l)) for (const r of l) ((n = r.type) == null ? void 0 : n.name) === "ElTableColumn" || r.shapeFlag & 2 ? a.push(r) : r.type === Pe && Se(r.children) && r.children.forEach((i) => {
      (i == null ? void 0 : i.patchFlag) !== 1024 && !Be(i == null ? void 0 : i.children) && a.push(i);
    });
    return Oe("div", a);
  } catch {
    return Oe("div", []);
  }
} });
const NI = We(mI, { TableColumn: $p }), II = Vt($p);
var Zo = ((e) => (e.ASC = "asc", e.DESC = "desc", e))(Zo || {}), Jo = ((e) => (e.CENTER = "center", e.RIGHT = "right", e))(Jo || {}), Tp = ((e) => (e.LEFT = "left", e.RIGHT = "right", e))(Tp || {});
const Sr = { asc: "desc", desc: "asc" }, Qo = Symbol("placeholder"), _I = (e, t, n) => {
  var l;
  const a = { flexGrow: 0, flexShrink: 0, ...n ? {} : { flexGrow: e.flexGrow || 0, flexShrink: e.flexShrink || 1 } };
  n || (a.flexShrink = 1);
  const s = { ...(l = e.style) != null ? l : {}, ...a, flexBasis: "auto", width: e.width };
  return t || (e.maxWidth && (s.maxWidth = e.maxWidth), e.minWidth && (s.minWidth = e.minWidth)), s;
};
function MI(e, t, n) {
  const l = y(() => o(t).map((b, g) => {
    var T, w;
    return { ...b, key: (w = (T = b.key) != null ? T : b.dataKey) != null ? w : g };
  })), a = y(() => o(l).filter((b) => !b.hidden)), s = y(() => o(a).filter((b) => b.fixed === "left" || b.fixed === true)), r = y(() => o(a).filter((b) => b.fixed === "right")), i = y(() => o(a).filter((b) => !b.fixed)), u = y(() => {
    const b = [];
    return o(s).forEach((g) => {
      b.push({ ...g, placeholderSign: Qo });
    }), o(i).forEach((g) => {
      b.push(g);
    }), o(r).forEach((g) => {
      b.push({ ...g, placeholderSign: Qo });
    }), b;
  }), c = y(() => o(s).length || o(r).length), d = y(() => o(l).reduce((b, g) => (b[g.key] = _I(g, o(n), e.fixed), b), {})), f = y(() => o(a).reduce((b, g) => b + g.width, 0)), m = (b) => o(l).find((g) => g.key === b), h = (b) => o(d)[b], v = (b, g) => {
    b.width = g;
  };
  function p(b) {
    var g;
    const { key: T } = b.currentTarget.dataset;
    if (!T) return;
    const { sortState: w, sortBy: C } = e;
    let S = Zo.ASC;
    gt(w) ? S = Sr[w[T]] : S = Sr[C.order], (g = e.onColumnSort) == null || g.call(e, { column: m(T), key: T, order: S });
  }
  return { columns: l, columnsStyles: d, columnsTotalWidth: f, fixedColumnsOnLeft: s, fixedColumnsOnRight: r, hasFixedColumns: c, mainColumns: u, normalColumns: i, visibleColumns: a, getColumn: m, getColumnStyle: h, updateColumnWidth: v, onColumnSorted: p };
}
const OI = (e, { mainTableRef: t, leftTableRef: n, rightTableRef: l, onMaybeEndReached: a }) => {
  const s = N({ scrollLeft: 0, scrollTop: 0 });
  function r(h) {
    var v, p, b;
    const { scrollTop: g } = h;
    (v = t.value) == null || v.scrollTo(h), (p = n.value) == null || p.scrollToTop(g), (b = l.value) == null || b.scrollToTop(g);
  }
  function i(h) {
    s.value = h, r(h);
  }
  function u(h) {
    s.value.scrollTop = h, r(o(s));
  }
  function c(h) {
    var v, p;
    s.value.scrollLeft = h, (p = (v = t.value) == null ? void 0 : v.scrollTo) == null || p.call(v, o(s));
  }
  function d(h) {
    var v;
    i(h), (v = e.onScroll) == null || v.call(e, h);
  }
  function f({ scrollTop: h }) {
    const { scrollTop: v } = o(s);
    h !== v && u(h);
  }
  function m(h, v = "auto") {
    var p;
    (p = t.value) == null || p.scrollToRow(h, v);
  }
  return ue(() => o(s).scrollTop, (h, v) => {
    h > v && a();
  }), { scrollPos: s, scrollTo: i, scrollToLeft: c, scrollToTop: u, scrollToRow: m, onScroll: d, onVerticalScroll: f };
}, PI = (e, { mainTableRef: t, leftTableRef: n, rightTableRef: l, tableInstance: a, ns: s, isScrolling: r }) => {
  const i = tt(), { emit: u } = i, c = Mt(false), d = N(e.defaultExpandedRowKeys || []), f = N(-1), m = Mt(null), h = N({}), v = N({}), p = Mt({}), b = Mt({}), g = Mt({}), T = y(() => _e(e.estimatedRowHeight));
  function w(I) {
    var R;
    (R = e.onRowsRendered) == null || R.call(e, I), I.rowCacheEnd > o(f) && (f.value = I.rowCacheEnd);
  }
  function C({ hovered: I, rowKey: R }) {
    if (r.value) return;
    a.vnode.el.querySelectorAll(`[rowkey="${String(R)}"]`).forEach((te) => {
      I ? te.classList.add(s.is("hovered")) : te.classList.remove(s.is("hovered"));
    });
  }
  function S({ expanded: I, rowData: R, rowIndex: P, rowKey: W }) {
    var te, A;
    const L = [...o(d)], F = L.indexOf(W);
    I ? F === -1 && L.push(W) : F > -1 && L.splice(F, 1), d.value = L, u("update:expandedRowKeys", L), (te = e.onRowExpand) == null || te.call(e, { expanded: I, rowData: R, rowIndex: P, rowKey: W }), (A = e.onExpandedRowsChange) == null || A.call(e, L);
  }
  const E = Pn(() => {
    var I, R, P, W;
    c.value = true, h.value = { ...o(h), ...o(v) }, M(o(m), false), v.value = {}, m.value = null, (I = t.value) == null || I.forceUpdate(), (R = n.value) == null || R.forceUpdate(), (P = l.value) == null || P.forceUpdate(), (W = i.proxy) == null || W.$forceUpdate(), c.value = false;
  }, 0);
  function M(I, R = false) {
    o(T) && [t, n, l].forEach((P) => {
      const W = o(P);
      W && W.resetAfterRowIndex(I, R);
    });
  }
  function O(I, R, P) {
    const W = o(m);
    (W === null || W > P) && (m.value = P), v.value[I] = R;
  }
  function _({ rowKey: I, height: R, rowIndex: P }, W) {
    W ? W === Tp.RIGHT ? g.value[I] = R : p.value[I] = R : b.value[I] = R;
    const te = Math.max(...[p, g, b].map((A) => A.value[I] || 0));
    o(h)[I] !== te && (O(I, te, P), E());
  }
  return { expandedRowKeys: d, lastRenderedRowIndex: f, isDynamic: T, isResetting: c, rowHeights: h, resetAfterIndex: M, onRowExpanded: S, onRowHovered: C, onRowsRendered: w, onRowHeightChange: _ };
}, RI = (e, { expandedRowKeys: t, lastRenderedRowIndex: n, resetAfterIndex: l }) => {
  const a = N({}), s = y(() => {
    const i = {}, { data: u, rowKey: c } = e, d = o(t);
    if (!d || !d.length) return u;
    const f = [], m = /* @__PURE__ */ new Set();
    d.forEach((v) => m.add(v));
    let h = u.slice();
    for (h.forEach((v) => i[v[c]] = 0); h.length > 0; ) {
      const v = h.shift();
      f.push(v), m.has(v[c]) && Se(v.children) && v.children.length > 0 && (h = [...v.children, ...h], v.children.forEach((p) => i[p[c]] = i[v[c]] + 1));
    }
    return a.value = i, f;
  }), r = y(() => {
    const { data: i, expandColumnKey: u } = e;
    return u ? o(s) : i;
  });
  return ue(r, (i, u) => {
    i !== u && (n.value = -1, l(0, true));
  }), { data: r, depthMap: a };
}, LI = (e, t) => e + t, Ia = (e) => Se(e) ? e.reduce(LI, 0) : e, Ul = (e, t, n = {}) => Qe(e) ? e(t) : e ?? n, yl = (e) => (["width", "maxWidth", "minWidth", "height"].forEach((t) => {
  e[t] = At(e[t]);
}), e), Np = (e) => Dt(e) ? (t) => Oe(e, t) : e, BI = (e, { columnsTotalWidth: t, rowsHeight: n, fixedColumnsOnLeft: l, fixedColumnsOnRight: a }) => {
  const s = y(() => {
    const { fixed: T, width: w, vScrollbarSize: C } = e, S = w - C;
    return T ? Math.max(Math.round(o(t)), S) : S;
  }), r = y(() => o(s) + e.vScrollbarSize), i = y(() => {
    const { height: T = 0, maxHeight: w = 0, footerHeight: C, hScrollbarSize: S } = e;
    if (w > 0) {
      const E = o(h), M = o(n), _ = o(m) + E + M + S;
      return Math.min(_, w - C);
    }
    return T - C;
  }), u = y(() => {
    const { maxHeight: T } = e, w = o(i);
    if (_e(T) && T > 0) return w;
    const C = o(n) + o(m) + o(h);
    return Math.min(w, C);
  }), c = (T) => T.width, d = y(() => Ia(o(l).map(c))), f = y(() => Ia(o(a).map(c))), m = y(() => Ia(e.headerHeight)), h = y(() => {
    var T;
    return (((T = e.fixedData) == null ? void 0 : T.length) || 0) * e.rowHeight;
  }), v = y(() => o(i) - o(m) - o(h)), p = y(() => {
    const { style: T = {}, height: w, width: C } = e;
    return yl({ ...T, height: w, width: C });
  }), b = y(() => yl({ height: e.footerHeight })), g = y(() => ({ top: At(o(m)), bottom: At(e.footerHeight), width: At(e.width) }));
  return { bodyWidth: s, fixedTableHeight: u, mainTableHeight: i, leftTableWidth: d, rightTableWidth: f, headerWidth: r, windowHeight: v, footerHeight: b, emptyStyle: g, rootStyle: p, headerHeight: m };
};
function DI(e) {
  const t = N(), n = N(), l = N(), { columns: a, columnsStyles: s, columnsTotalWidth: r, fixedColumnsOnLeft: i, fixedColumnsOnRight: u, hasFixedColumns: c, mainColumns: d, onColumnSorted: f } = MI(e, yt(e, "columns"), yt(e, "fixed")), { scrollTo: m, scrollToLeft: h, scrollToTop: v, scrollToRow: p, onScroll: b, onVerticalScroll: g, scrollPos: T } = OI(e, { mainTableRef: t, leftTableRef: n, rightTableRef: l, onMaybeEndReached: ke }), w = de("table-v2"), C = tt(), S = Mt(false), { expandedRowKeys: E, lastRenderedRowIndex: M, isDynamic: O, isResetting: _, rowHeights: I, resetAfterIndex: R, onRowExpanded: P, onRowHeightChange: W, onRowHovered: te, onRowsRendered: A } = PI(e, { mainTableRef: t, leftTableRef: n, rightTableRef: l, tableInstance: C, ns: w, isScrolling: S }), { data: L, depthMap: F } = RI(e, { expandedRowKeys: E, lastRenderedRowIndex: M, resetAfterIndex: R }), V = y(() => {
    const { estimatedRowHeight: De, rowHeight: qe } = e, je = o(L);
    return _e(De) ? Object.values(o(I)).reduce((Le, Ne) => Le + Ne, 0) : je.length * qe;
  }), { bodyWidth: B, fixedTableHeight: G, mainTableHeight: U, leftTableWidth: ne, rightTableWidth: Z, headerWidth: ee, windowHeight: re, footerHeight: le, emptyStyle: Q, rootStyle: ie, headerHeight: ce } = BI(e, { columnsTotalWidth: r, fixedColumnsOnLeft: i, fixedColumnsOnRight: u, rowsHeight: V }), Ie = N(), me = y(() => {
    const De = o(L).length === 0;
    return Se(e.fixedData) ? e.fixedData.length === 0 && De : De;
  });
  function se(De) {
    const { estimatedRowHeight: qe, rowHeight: je, rowKey: Le } = e;
    return qe ? o(I)[o(L)[De][Le]] || qe : je;
  }
  function ke() {
    const { onEndReached: De } = e;
    if (!De) return;
    const { scrollTop: qe } = o(T), je = o(V), Le = o(re), Ne = je - (qe + Le) + e.hScrollbarSize;
    o(M) >= 0 && je === qe + o(U) - o(ce) && De(Ne);
  }
  return ue(() => e.expandedRowKeys, (De) => E.value = De, { deep: true }), { columns: a, containerRef: Ie, mainTableRef: t, leftTableRef: n, rightTableRef: l, isDynamic: O, isResetting: _, isScrolling: S, hasFixedColumns: c, columnsStyles: s, columnsTotalWidth: r, data: L, expandedRowKeys: E, depthMap: F, fixedColumnsOnLeft: i, fixedColumnsOnRight: u, mainColumns: d, bodyWidth: B, emptyStyle: Q, rootStyle: ie, headerWidth: ee, footerHeight: le, mainTableHeight: U, fixedTableHeight: G, leftTableWidth: ne, rightTableWidth: Z, showEmpty: me, getRowHeight: se, onColumnSorted: f, onRowHovered: te, onRowExpanded: P, onRowsRendered: A, onRowHeightChange: W, scrollTo: m, scrollToLeft: h, scrollToTop: v, scrollToRow: p, onScroll: b, onVerticalScroll: g };
}
const Pi = Symbol("tableV2"), Ip = String, sa = { type: Y(Array), required: true }, Ri = { type: Y(Array) }, _p = { ...Ri, required: true }, VI = String, cc = { type: Y(Array), default: () => Bt([]) }, Dl = { type: Number, required: true }, Mp = { type: Y([String, Number, Symbol]), default: "id" }, dc = { type: Y(Object) }, Al = pe({ class: String, columns: sa, columnsStyles: { type: Y(Object), required: true }, depth: Number, expandColumnKey: VI, estimatedRowHeight: { ...xl.estimatedRowHeight, default: void 0 }, isScrolling: Boolean, onRowExpand: { type: Y(Function) }, onRowHover: { type: Y(Function) }, onRowHeightChange: { type: Y(Function) }, rowData: { type: Y(Object), required: true }, rowEventHandlers: { type: Y(Object) }, rowIndex: { type: Number, required: true }, rowKey: Mp, style: { type: Y(Object) } }), xs = { type: Number, required: true }, Li = pe({ class: String, columns: sa, fixedHeaderData: { type: Y(Array) }, headerData: { type: Y(Array), required: true }, headerHeight: { type: Y([Number, Array]), default: 50 }, rowWidth: xs, rowHeight: { type: Number, default: 50 }, height: xs, width: xs }), _a = pe({ columns: sa, data: _p, fixedData: Ri, estimatedRowHeight: Al.estimatedRowHeight, width: Dl, height: Dl, headerWidth: Dl, headerHeight: Li.headerHeight, bodyWidth: Dl, rowHeight: Dl, cache: op.cache, useIsScrolling: Boolean, scrollbarAlwaysOn: xl.scrollbarAlwaysOn, scrollbarStartGap: xl.scrollbarStartGap, scrollbarEndGap: xl.scrollbarEndGap, class: Ip, style: dc, containerStyle: dc, getRowHeight: { type: Y(Function), required: true }, rowKey: Al.rowKey, onRowsRendered: { type: Y(Function) }, onScroll: { type: Y(Function) } }), AI = pe({ cache: _a.cache, estimatedRowHeight: Al.estimatedRowHeight, rowKey: Mp, headerClass: { type: Y([String, Function]) }, headerProps: { type: Y([Object, Function]) }, headerCellProps: { type: Y([Object, Function]) }, headerHeight: Li.headerHeight, footerHeight: { type: Number, default: 0 }, rowClass: { type: Y([String, Function]) }, rowProps: { type: Y([Object, Function]) }, rowHeight: { type: Number, default: 50 }, cellProps: { type: Y([Object, Function]) }, columns: sa, data: _p, dataGetter: { type: Y(Function) }, fixedData: Ri, expandColumnKey: Al.expandColumnKey, expandedRowKeys: cc, defaultExpandedRowKeys: cc, class: Ip, fixed: Boolean, style: { type: Y(Object) }, width: Dl, height: Dl, maxHeight: Number, useIsScrolling: Boolean, indentSize: { type: Number, default: 12 }, iconSize: { type: Number, default: 12 }, hScrollbarSize: xl.hScrollbarSize, vScrollbarSize: xl.vScrollbarSize, scrollbarAlwaysOn: rp.alwaysOn, sortBy: { type: Y(Object), default: () => ({}) }, sortState: { type: Y(Object), default: void 0 }, onColumnSort: { type: Y(Function) }, onExpandedRowsChange: { type: Y(Function) }, onEndReached: { type: Y(Function) }, onRowExpand: Al.onRowExpand, onScroll: _a.onScroll, onRowsRendered: _a.onRowsRendered, rowEventHandlers: Al.rowEventHandlers }), FI = "ElTableV2Header", zI = K({ name: FI, props: Li, setup(e, { slots: t, expose: n }) {
  const l = de("table-v2"), a = we("tableV2GridScrollLeft"), s = N(), r = y(() => yl({ width: e.width, height: e.height })), i = y(() => yl({ width: e.rowWidth, height: e.height })), u = y(() => pn(o(e.headerHeight))), c = (m) => {
    const h = o(s);
    $e(() => {
      (h == null ? void 0 : h.scroll) && h.scroll({ left: m });
    });
  }, d = () => {
    const m = l.e("fixed-header-row"), { columns: h, fixedHeaderData: v, rowHeight: p } = e;
    return v == null ? void 0 : v.map((b, g) => {
      var T;
      const w = yl({ height: p, width: "100%" });
      return (T = t.fixed) == null ? void 0 : T.call(t, { class: m, columns: h, rowData: b, rowIndex: -(g + 1), style: w });
    });
  }, f = () => {
    const m = l.e("dynamic-header-row"), { columns: h } = e;
    return o(u).map((v, p) => {
      var b;
      const g = yl({ width: "100%", height: v });
      return (b = t.dynamic) == null ? void 0 : b.call(t, { class: m, columns: h, headerIndex: p, style: g });
    });
  };
  return cl(() => {
    (a == null ? void 0 : a.value) && c(a.value);
  }), n({ scrollToLeft: c }), () => {
    if (!(e.height <= 0)) return z("div", { ref: s, class: e.class, style: o(r), role: "rowgroup" }, [z("div", { style: o(i), class: l.e("header") }, [f(), d()])]);
  };
} });
var xI = zI;
const HI = ({ atXEndEdge: e, atXStartEdge: t, atYEndEdge: n, atYStartEdge: l }, a) => {
  let s = null, r = 0, i = 0;
  const u = (d, f) => {
    const m = d <= 0 && t.value || d >= 0 && e.value, h = f <= 0 && l.value || f >= 0 && n.value;
    return m && h;
  };
  return { hasReachedEdge: u, onWheel: (d) => {
    Wl(s);
    let f = d.deltaX, m = d.deltaY;
    Math.abs(f) > Math.abs(m) ? m = 0 : f = 0, d.shiftKey && m !== 0 && (f = m, m = 0), !(u(r, i) && u(r + f, i + m)) && (r += f, i += m, d.preventDefault(), s = Il(() => {
      a(r, i), r = 0, i = 0;
    }));
  } };
}, Op = ({ name: e, clearCache: t, getColumnPosition: n, getColumnStartIndexForOffset: l, getColumnStopIndexForStartIndex: a, getEstimatedTotalHeight: s, getEstimatedTotalWidth: r, getColumnOffset: i, getRowOffset: u, getRowPosition: c, getRowStartIndexForOffset: d, getRowStopIndexForStartIndex: f, initCache: m, injectToInstance: h, validateProps: v }) => K({ name: e ?? "ElVirtualList", props: xl, emits: [Wa, ja], setup(p, { emit: b, expose: g, slots: T }) {
  const w = de("vl");
  v(p);
  const C = tt(), S = N(m(p, C));
  h == null ? void 0 : h(C, S);
  const E = N(), M = N(), O = N(), _ = N(null), I = N({ isScrolling: false, scrollLeft: _e(p.initScrollLeft) ? p.initScrollLeft : 0, scrollTop: _e(p.initScrollTop) ? p.initScrollTop : 0, updateRequested: false, xAxisScrollDir: io, yAxisScrollDir: io }), R = tp(), P = y(() => Number.parseInt(`${p.height}`, 10)), W = y(() => Number.parseInt(`${p.width}`, 10)), te = y(() => {
    const { totalColumn: Le, totalRow: Ne, columnCache: Te } = p, { isScrolling: Ge, xAxisScrollDir: Ze, scrollLeft: ot } = o(I);
    if (Le === 0 || Ne === 0) return [0, 0, 0, 0];
    const st = l(p, ot, o(S)), Ce = a(p, st, ot, o(S)), Ue = !Ge || Ze === Ua ? Math.max(1, Te) : 1, ht = !Ge || Ze === io ? Math.max(1, Te) : 1;
    return [Math.max(0, st - Ue), Math.max(0, Math.min(Le - 1, Ce + ht)), st, Ce];
  }), A = y(() => {
    const { totalColumn: Le, totalRow: Ne, rowCache: Te } = p, { isScrolling: Ge, yAxisScrollDir: Ze, scrollTop: ot } = o(I);
    if (Le === 0 || Ne === 0) return [0, 0, 0, 0];
    const st = d(p, ot, o(S)), Ce = f(p, st, ot, o(S)), Ue = !Ge || Ze === Ua ? Math.max(1, Te) : 1, ht = !Ge || Ze === io ? Math.max(1, Te) : 1;
    return [Math.max(0, st - Ue), Math.max(0, Math.min(Ne - 1, Ce + ht)), st, Ce];
  }), L = y(() => s(p, o(S))), F = y(() => r(p, o(S))), V = y(() => {
    var Le;
    return [{ position: "relative", overflow: "hidden", WebkitOverflowScrolling: "touch", willChange: "transform" }, { direction: p.direction, height: _e(p.height) ? `${p.height}px` : p.height, width: _e(p.width) ? `${p.width}px` : p.width }, (Le = p.style) != null ? Le : {}];
  }), B = y(() => {
    const Le = `${o(F)}px`;
    return { height: `${o(L)}px`, pointerEvents: o(I).isScrolling ? "none" : void 0, width: Le };
  }), G = () => {
    const { totalColumn: Le, totalRow: Ne } = p;
    if (Le > 0 && Ne > 0) {
      const [Ce, Ue, ht, Pt] = o(te), [Nt, _t, kt, dn] = o(A);
      b(Wa, { columnCacheStart: Ce, columnCacheEnd: Ue, rowCacheStart: Nt, rowCacheEnd: _t, columnVisibleStart: ht, columnVisibleEnd: Pt, rowVisibleStart: kt, rowVisibleEnd: dn });
    }
    const { scrollLeft: Te, scrollTop: Ge, updateRequested: Ze, xAxisScrollDir: ot, yAxisScrollDir: st } = o(I);
    b(ja, { xAxisScrollDir: ot, scrollLeft: Te, yAxisScrollDir: st, scrollTop: Ge, updateRequested: Ze });
  }, U = (Le) => {
    const { clientHeight: Ne, clientWidth: Te, scrollHeight: Ge, scrollLeft: Ze, scrollTop: ot, scrollWidth: st } = Le.currentTarget, Ce = o(I);
    if (Ce.scrollTop === ot && Ce.scrollLeft === Ze) return;
    let Ue = Ze;
    if (Qu(p.direction)) switch (qa()) {
      case Go:
        Ue = -Ze;
        break;
      case Ni:
        Ue = st - Te - Ze;
        break;
    }
    I.value = { ...Ce, isScrolling: true, scrollLeft: Ue, scrollTop: Math.max(0, Math.min(ot, Ge - Ne)), updateRequested: true, xAxisScrollDir: Vl(Ce.scrollLeft, Ue), yAxisScrollDir: Vl(Ce.scrollTop, ot) }, $e(() => ie()), ce(), G();
  }, ne = (Le, Ne) => {
    const Te = o(P), Ge = (L.value - Te) / Ne * Le;
    re({ scrollTop: Math.min(L.value - Te, Ge) });
  }, Z = (Le, Ne) => {
    const Te = o(W), Ge = (F.value - Te) / Ne * Le;
    re({ scrollLeft: Math.min(F.value - Te, Ge) });
  }, { onWheel: ee } = HI({ atXStartEdge: y(() => I.value.scrollLeft <= 0), atXEndEdge: y(() => I.value.scrollLeft >= F.value - o(W)), atYStartEdge: y(() => I.value.scrollTop <= 0), atYEndEdge: y(() => I.value.scrollTop >= L.value - o(P)) }, (Le, Ne) => {
    var Te, Ge, Ze, ot;
    (Ge = (Te = M.value) == null ? void 0 : Te.onMouseUp) == null || Ge.call(Te), (ot = (Ze = O.value) == null ? void 0 : Ze.onMouseUp) == null || ot.call(Ze);
    const st = o(W), Ce = o(P);
    re({ scrollLeft: Math.min(I.value.scrollLeft + Le, F.value - st), scrollTop: Math.min(I.value.scrollTop + Ne, L.value - Ce) });
  });
  Et(E, "wheel", ee, { passive: false });
  const re = ({ scrollLeft: Le = I.value.scrollLeft, scrollTop: Ne = I.value.scrollTop }) => {
    Le = Math.max(Le, 0), Ne = Math.max(Ne, 0);
    const Te = o(I);
    Ne === Te.scrollTop && Le === Te.scrollLeft || (I.value = { ...Te, xAxisScrollDir: Vl(Te.scrollLeft, Le), yAxisScrollDir: Vl(Te.scrollTop, Ne), scrollLeft: Le, scrollTop: Ne, updateRequested: true }, $e(() => ie()), ce(), G());
  }, le = (Le = 0, Ne = 0, Te = Vn) => {
    const Ge = o(I);
    Ne = Math.max(0, Math.min(Ne, p.totalColumn - 1)), Le = Math.max(0, Math.min(Le, p.totalRow - 1));
    const Ze = fd(w.namespace.value), ot = o(S), st = s(p, ot), Ce = r(p, ot);
    re({ scrollLeft: i(p, Ne, Te, Ge.scrollLeft, ot, Ce > p.width ? Ze : 0), scrollTop: u(p, Le, Te, Ge.scrollTop, ot, st > p.height ? Ze : 0) });
  }, Q = (Le, Ne) => {
    const { columnWidth: Te, direction: Ge, rowHeight: Ze } = p, ot = R.value(t && Te, t && Ze, t && Ge), st = `${Le},${Ne}`;
    if (sn(ot, st)) return ot[st];
    {
      const [, Ce] = n(p, Ne, o(S)), Ue = o(S), ht = Qu(Ge), [Pt, Nt] = c(p, Le, Ue), [_t] = n(p, Ne, Ue);
      return ot[st] = { position: "absolute", left: ht ? void 0 : `${Ce}px`, right: ht ? `${Ce}px` : void 0, top: `${Nt}px`, height: `${Pt}px`, width: `${_t}px` }, ot[st];
    }
  }, ie = () => {
    I.value.isScrolling = false, $e(() => {
      R.value(-1, null, null);
    });
  };
  Xe(() => {
    if (!dt) return;
    const { initScrollLeft: Le, initScrollTop: Ne } = p, Te = o(E);
    Te && (_e(Le) && (Te.scrollLeft = Le), _e(Ne) && (Te.scrollTop = Ne)), G();
  });
  const ce = () => {
    const { direction: Le } = p, { scrollLeft: Ne, scrollTop: Te, updateRequested: Ge } = o(I), Ze = o(E);
    if (Ge && Ze) {
      if (Le === po) switch (qa()) {
        case Go: {
          Ze.scrollLeft = -Ne;
          break;
        }
        case Ti: {
          Ze.scrollLeft = Ne;
          break;
        }
        default: {
          const { clientWidth: ot, scrollWidth: st } = Ze;
          Ze.scrollLeft = st - ot - Ne;
          break;
        }
      }
      else Ze.scrollLeft = Math.max(0, Ne);
      Ze.scrollTop = Math.max(0, Te);
    }
  }, { resetAfterColumnIndex: Ie, resetAfterRowIndex: me, resetAfter: se } = C.proxy;
  g({ windowRef: E, innerRef: _, getItemStyleCache: R, scrollTo: re, scrollToItem: le, states: I, resetAfterColumnIndex: Ie, resetAfterRowIndex: me, resetAfter: se });
  const ke = () => {
    const { scrollbarAlwaysOn: Le, scrollbarStartGap: Ne, scrollbarEndGap: Te, totalColumn: Ge, totalRow: Ze } = p, ot = o(W), st = o(P), Ce = o(F), Ue = o(L), { scrollLeft: ht, scrollTop: Pt } = o(I), Nt = Oe(yr, { ref: M, alwaysOn: Le, startGap: Ne, endGap: Te, class: w.e("horizontal"), clientSize: ot, layout: "horizontal", onScroll: Z, ratio: ot * 100 / Ce, scrollFrom: ht / (Ce - ot), total: Ze, visible: true }), _t = Oe(yr, { ref: O, alwaysOn: Le, startGap: Ne, endGap: Te, class: w.e("vertical"), clientSize: st, layout: "vertical", onScroll: ne, ratio: st * 100 / Ue, scrollFrom: Pt / (Ue - st), total: Ge, visible: true });
    return { horizontalScrollbar: Nt, verticalScrollbar: _t };
  }, De = () => {
    var Le;
    const [Ne, Te] = o(te), [Ge, Ze] = o(A), { data: ot, totalColumn: st, totalRow: Ce, useIsScrolling: Ue, itemKey: ht } = p, Pt = [];
    if (Ce > 0 && st > 0) for (let Nt = Ge; Nt <= Ze; Nt++) for (let _t = Ne; _t <= Te; _t++) {
      const kt = ht({ columnIndex: _t, data: ot, rowIndex: Nt });
      Pt.push(Oe(Pe, { key: kt }, (Le = T.default) == null ? void 0 : Le.call(T, { columnIndex: _t, data: ot, isScrolling: Ue ? o(I).isScrolling : void 0, style: Q(Nt, _t), rowIndex: Nt })));
    }
    return Pt;
  }, qe = () => {
    const Le = Je(p.innerElement), Ne = De();
    return [Oe(Le, { style: o(B), ref: _ }, Be(Le) ? Ne : { default: () => Ne })];
  };
  return () => {
    const Le = Je(p.containerElement), { horizontalScrollbar: Ne, verticalScrollbar: Te } = ke(), Ge = qe();
    return Oe("div", { key: 0, class: w.e("wrapper"), role: p.role }, [Oe(Le, { class: p.className, style: o(V), onScroll: U, ref: E }, Be(Le) ? Ge : { default: () => Ge }), Ne, Te]);
  };
} }), { max: Za, min: Pp, floor: Rp } = Math, KI = { column: "columnWidth", row: "rowHeight" }, kr = { column: "lastVisitedColumnIndex", row: "lastVisitedRowIndex" }, nl = (e, t, n, l) => {
  const [a, s, r] = [n[l], e[KI[l]], n[kr[l]]];
  if (t > r) {
    let i = 0;
    if (r >= 0) {
      const u = a[r];
      i = u.offset + u.size;
    }
    for (let u = r + 1; u <= t; u++) {
      const c = s(u);
      a[u] = { offset: i, size: c }, i += c;
    }
    n[kr[l]] = t;
  }
  return a[t];
}, Lp = (e, t, n, l, a, s) => {
  for (; n <= l; ) {
    const r = n + Rp((l - n) / 2), i = nl(e, r, t, s).offset;
    if (i === a) return r;
    i < a ? n = r + 1 : l = r - 1;
  }
  return Za(0, n - 1);
}, WI = (e, t, n, l, a) => {
  const s = a === "column" ? e.totalColumn : e.totalRow;
  let r = 1;
  for (; n < s && nl(e, n, t, a).offset < l; ) n += r, r *= 2;
  return Lp(e, t, Rp(n / 2), Pp(n, s - 1), l, a);
}, fc = (e, t, n, l) => {
  const [a, s] = [t[l], t[kr[l]]];
  return (s > 0 ? a[s].offset : 0) >= n ? Lp(e, t, 0, s, n, l) : WI(e, t, Za(0, s), n, l);
}, Bp = ({ totalRow: e }, { estimatedRowHeight: t, lastVisitedRowIndex: n, row: l }) => {
  let a = 0;
  if (n >= e && (n = e - 1), n >= 0) {
    const i = l[n];
    a = i.offset + i.size;
  }
  const r = (e - n - 1) * t;
  return a + r;
}, Dp = ({ totalColumn: e }, { column: t, estimatedColumnWidth: n, lastVisitedColumnIndex: l }) => {
  let a = 0;
  if (l > e && (l = e - 1), l >= 0) {
    const i = t[l];
    a = i.offset + i.size;
  }
  const r = (e - l - 1) * n;
  return a + r;
}, jI = { column: Dp, row: Bp }, pc = (e, t, n, l, a, s, r) => {
  const [i, u] = [s === "row" ? e.height : e.width, jI[s]], c = nl(e, t, a, s), d = u(e, a), f = Za(0, Pp(d - i, c.offset)), m = Za(0, c.offset - i + r + c.size);
  switch (n === bs && (l >= m - i && l <= f + i ? n = Vn : n = Xn), n) {
    case Yo:
      return f;
    case qo:
      return m;
    case Xn:
      return Math.round(m + (f - m) / 2);
    case Vn:
    default:
      return l >= m && l <= f ? l : m > f || l < m ? m : f;
  }
}, UI = Op({ name: "ElDynamicSizeGrid", getColumnPosition: (e, t, n) => {
  const l = nl(e, t, n, "column");
  return [l.size, l.offset];
}, getRowPosition: (e, t, n) => {
  const l = nl(e, t, n, "row");
  return [l.size, l.offset];
}, getColumnOffset: (e, t, n, l, a, s) => pc(e, t, n, l, a, "column", s), getRowOffset: (e, t, n, l, a, s) => pc(e, t, n, l, a, "row", s), getColumnStartIndexForOffset: (e, t, n) => fc(e, n, t, "column"), getColumnStopIndexForStartIndex: (e, t, n, l) => {
  const a = nl(e, t, l, "column"), s = n + e.width;
  let r = a.offset + a.size, i = t;
  for (; i < e.totalColumn - 1 && r < s; ) i++, r += nl(e, t, l, "column").size;
  return i;
}, getEstimatedTotalHeight: Bp, getEstimatedTotalWidth: Dp, getRowStartIndexForOffset: (e, t, n) => fc(e, n, t, "row"), getRowStopIndexForStartIndex: (e, t, n, l) => {
  const { totalRow: a, height: s } = e, r = nl(e, t, l, "row"), i = n + s;
  let u = r.size + r.offset, c = t;
  for (; c < a - 1 && u < i; ) c++, u += nl(e, c, l, "row").size;
  return c;
}, injectToInstance: (e, t) => {
  const n = ({ columnIndex: s, rowIndex: r }, i) => {
    var u, c;
    i = vt(i) ? true : i, _e(s) && (t.value.lastVisitedColumnIndex = Math.min(t.value.lastVisitedColumnIndex, s - 1)), _e(r) && (t.value.lastVisitedRowIndex = Math.min(t.value.lastVisitedRowIndex, r - 1)), (u = e.exposed) == null || u.getItemStyleCache.value(-1, null, null), i && ((c = e.proxy) == null || c.$forceUpdate());
  }, l = (s, r) => {
    n({ columnIndex: s }, r);
  }, a = (s, r) => {
    n({ rowIndex: s }, r);
  };
  Object.assign(e.proxy, { resetAfterColumnIndex: l, resetAfterRowIndex: a, resetAfter: n });
}, initCache: ({ estimatedColumnWidth: e = pr, estimatedRowHeight: t = pr }) => ({ column: {}, estimatedColumnWidth: e, estimatedRowHeight: t, lastVisitedColumnIndex: -1, lastVisitedRowIndex: -1, row: {} }), clearCache: false, validateProps: ({ columnWidth: e, rowHeight: t }) => {
} }), YI = Op({ name: "ElFixedSizeGrid", getColumnPosition: ({ columnWidth: e }, t) => [e, t * e], getRowPosition: ({ rowHeight: e }, t) => [e, t * e], getEstimatedTotalHeight: ({ totalRow: e, rowHeight: t }) => t * e, getEstimatedTotalWidth: ({ totalColumn: e, columnWidth: t }) => t * e, getColumnOffset: ({ totalColumn: e, columnWidth: t, width: n }, l, a, s, r, i) => {
  n = Number(n);
  const u = Math.max(0, e * t - n), c = Math.min(u, l * t), d = Math.max(0, l * t - n + i + t);
  switch (a === "smart" && (s >= d - n && s <= c + n ? a = Vn : a = Xn), a) {
    case Yo:
      return c;
    case qo:
      return d;
    case Xn: {
      const f = Math.round(d + (c - d) / 2);
      return f < Math.ceil(n / 2) ? 0 : f > u + Math.floor(n / 2) ? u : f;
    }
    case Vn:
    default:
      return s >= d && s <= c ? s : d > c || s < d ? d : c;
  }
}, getRowOffset: ({ rowHeight: e, height: t, totalRow: n }, l, a, s, r, i) => {
  t = Number(t);
  const u = Math.max(0, n * e - t), c = Math.min(u, l * e), d = Math.max(0, l * e - t + i + e);
  switch (a === bs && (s >= d - t && s <= c + t ? a = Vn : a = Xn), a) {
    case Yo:
      return c;
    case qo:
      return d;
    case Xn: {
      const f = Math.round(d + (c - d) / 2);
      return f < Math.ceil(t / 2) ? 0 : f > u + Math.floor(t / 2) ? u : f;
    }
    case Vn:
    default:
      return s >= d && s <= c ? s : d > c || s < d ? d : c;
  }
}, getColumnStartIndexForOffset: ({ columnWidth: e, totalColumn: t }, n) => Math.max(0, Math.min(t - 1, Math.floor(n / e))), getColumnStopIndexForStartIndex: ({ columnWidth: e, totalColumn: t, width: n }, l, a) => {
  const s = l * e, r = Math.ceil((n + a - s) / e);
  return Math.max(0, Math.min(t - 1, l + r - 1));
}, getRowStartIndexForOffset: ({ rowHeight: e, totalRow: t }, n) => Math.max(0, Math.min(t - 1, Math.floor(n / e))), getRowStopIndexForStartIndex: ({ rowHeight: e, totalRow: t, height: n }, l, a) => {
  const s = l * e, r = Math.ceil((n + a - s) / e);
  return Math.max(0, Math.min(t - 1, l + r - 1));
}, initCache: () => {
}, clearCache: true, validateProps: ({ columnWidth: e, rowHeight: t }) => {
} }), qI = "ElTableV2Grid", GI = (e) => {
  const t = N(), n = N(), l = N(0), a = y(() => {
    const { data: b, rowHeight: g, estimatedRowHeight: T } = e;
    if (!T) return b.length * g;
  }), s = y(() => {
    const { fixedData: b, rowHeight: g } = e;
    return ((b == null ? void 0 : b.length) || 0) * g;
  }), r = y(() => Ia(e.headerHeight)), i = y(() => {
    const { height: b } = e;
    return Math.max(0, b - o(r) - o(s));
  }), u = y(() => o(r) + o(s) > 0), c = ({ data: b, rowIndex: g }) => b[g][e.rowKey];
  function d({ rowCacheStart: b, rowCacheEnd: g, rowVisibleStart: T, rowVisibleEnd: w }) {
    var C;
    (C = e.onRowsRendered) == null || C.call(e, { rowCacheStart: b, rowCacheEnd: g, rowVisibleStart: T, rowVisibleEnd: w });
  }
  function f(b, g) {
    var T;
    (T = n.value) == null || T.resetAfterRowIndex(b, g);
  }
  function m(b, g) {
    const T = o(t), w = o(n);
    gt(b) ? (T == null ? void 0 : T.scrollToLeft(b.scrollLeft), l.value = b.scrollLeft, w == null ? void 0 : w.scrollTo(b)) : (T == null ? void 0 : T.scrollToLeft(b), l.value = b, w == null ? void 0 : w.scrollTo({ scrollLeft: b, scrollTop: g }));
  }
  function h(b) {
    var g;
    (g = o(n)) == null || g.scrollTo({ scrollTop: b });
  }
  function v(b, g) {
    var T;
    (T = o(n)) == null || T.scrollToItem(b, 1, g);
  }
  function p() {
    var b, g;
    (b = o(n)) == null || b.$forceUpdate(), (g = o(t)) == null || g.$forceUpdate();
  }
  return ue(() => e.bodyWidth, () => {
    var b;
    _e(e.estimatedRowHeight) && ((b = n.value) == null || b.resetAfter({ columnIndex: 0 }, false));
  }), { bodyRef: n, forceUpdate: p, fixedRowHeight: s, gridHeight: i, hasHeader: u, headerHeight: r, headerRef: t, totalHeight: a, itemKey: c, onItemRendered: d, resetAfterRowIndex: f, scrollTo: m, scrollToTop: h, scrollToRow: v, scrollLeft: l };
}, XI = K({ name: qI, props: _a, setup(e, { slots: t, expose: n }) {
  const { ns: l } = we(Pi), { bodyRef: a, fixedRowHeight: s, gridHeight: r, hasHeader: i, headerRef: u, headerHeight: c, totalHeight: d, forceUpdate: f, itemKey: m, onItemRendered: h, resetAfterRowIndex: v, scrollTo: p, scrollToTop: b, scrollToRow: g, scrollLeft: T } = GI(e);
  ut("tableV2GridScrollLeft", T), n({ forceUpdate: f, totalHeight: d, scrollTo: p, scrollToTop: b, scrollToRow: g, resetAfterRowIndex: v });
  const w = () => e.bodyWidth;
  return () => {
    const { cache: C, columns: S, data: E, fixedData: M, useIsScrolling: O, scrollbarAlwaysOn: _, scrollbarEndGap: I, scrollbarStartGap: R, style: P, rowHeight: W, bodyWidth: te, estimatedRowHeight: A, headerWidth: L, height: F, width: V, getRowHeight: B, onScroll: G } = e, U = _e(A), ne = U ? UI : YI, Z = o(c);
    return z("div", { role: "table", class: [l.e("table"), e.class], style: P }, [z(ne, { ref: a, data: E, useIsScrolling: O, itemKey: m, columnCache: 0, columnWidth: U ? w : te, totalColumn: 1, totalRow: E.length, rowCache: C, rowHeight: U ? B : W, width: V, height: o(r), class: l.e("body"), role: "rowgroup", scrollbarStartGap: R, scrollbarEndGap: I, scrollbarAlwaysOn: _, onScroll: G, onItemRendered: h, perfMode: false }, { default: (ee) => {
      var re;
      const le = E[ee.rowIndex];
      return (re = t.row) == null ? void 0 : re.call(t, { ...ee, columns: S, rowData: le });
    } }), o(i) && z(xI, { ref: u, class: l.e("header-wrapper"), columns: S, headerData: E, headerHeight: e.headerHeight, fixedHeaderData: M, rowWidth: L, rowHeight: W, width: V, height: Math.min(Z + o(s), F) }, { dynamic: t.header, fixed: t.row })]);
  };
} });
var Bi = XI;
function ZI(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Dt(e);
}
const JI = (e, { slots: t }) => {
  const { mainTableRef: n, ...l } = e;
  return z(Bi, lt({ ref: n }, l), ZI(t) ? t : { default: () => [t] });
};
var QI = JI;
function e_(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Dt(e);
}
const t_ = (e, { slots: t }) => {
  if (!e.columns.length) return;
  const { leftTableRef: n, ...l } = e;
  return z(Bi, lt({ ref: n }, l), e_(t) ? t : { default: () => [t] });
};
var n_ = t_;
function l_(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Dt(e);
}
const o_ = (e, { slots: t }) => {
  if (!e.columns.length) return;
  const { rightTableRef: n, ...l } = e;
  return z(Bi, lt({ ref: n }, l), l_(t) ? t : { default: () => [t] });
};
var a_ = o_;
const s_ = (e) => {
  const { isScrolling: t } = we(Pi), n = N(false), l = N(), a = y(() => _e(e.estimatedRowHeight) && e.rowIndex >= 0), s = (u = false) => {
    const c = o(l);
    if (!c) return;
    const { columns: d, onRowHeightChange: f, rowKey: m, rowIndex: h, style: v } = e, { height: p } = c.getBoundingClientRect();
    n.value = true, $e(() => {
      if (u || p !== Number.parseInt(v.height)) {
        const b = d[0], g = (b == null ? void 0 : b.placeholderSign) === Qo;
        f == null ? void 0 : f({ rowKey: m, height: p, rowIndex: h }, b && !g && b.fixed);
      }
    });
  }, r = y(() => {
    const { rowData: u, rowIndex: c, rowKey: d, onRowHover: f } = e, m = e.rowEventHandlers || {}, h = {};
    return Object.entries(m).forEach(([v, p]) => {
      Qe(p) && (h[v] = (b) => {
        p({ event: b, rowData: u, rowIndex: c, rowKey: d });
      });
    }), f && [{ name: "onMouseleave", hovered: false }, { name: "onMouseenter", hovered: true }].forEach(({ name: v, hovered: p }) => {
      const b = h[v];
      h[v] = (g) => {
        f({ event: g, hovered: p, rowData: u, rowIndex: c, rowKey: d }), b == null ? void 0 : b(g);
      };
    }), h;
  }), i = (u) => {
    const { onRowExpand: c, rowData: d, rowIndex: f, rowKey: m } = e;
    c == null ? void 0 : c({ expanded: u, rowData: d, rowIndex: f, rowKey: m });
  };
  return Xe(() => {
    o(a) && s(true);
  }), { isScrolling: t, measurable: a, measured: n, rowRef: l, eventHandlers: r, onExpand: i };
}, r_ = "ElTableV2TableRow", i_ = K({ name: r_, props: Al, setup(e, { expose: t, slots: n, attrs: l }) {
  const { eventHandlers: a, isScrolling: s, measurable: r, measured: i, rowRef: u, onExpand: c } = s_(e);
  return t({ onExpand: c }), () => {
    const { columns: d, columnsStyles: f, expandColumnKey: m, depth: h, rowData: v, rowIndex: p, style: b } = e;
    let g = d.map((T, w) => {
      const C = Se(v.children) && v.children.length > 0 && T.key === m;
      return n.cell({ column: T, columns: d, columnIndex: w, depth: h, style: f[T.key], rowData: v, rowIndex: p, isScrolling: o(s), expandIconProps: C ? { rowData: v, rowIndex: p, onExpand: c } : void 0 });
    });
    if (n.row && (g = n.row({ cells: g.map((T) => Se(T) && T.length === 1 ? T[0] : T), style: b, columns: d, depth: h, rowData: v, rowIndex: p, isScrolling: o(s) })), o(r)) {
      const { height: T, ...w } = b || {}, C = o(i);
      return z("div", lt({ ref: u, class: e.class, style: C ? b : w, role: "row" }, l, o(a)), [g]);
    }
    return z("div", lt(l, { ref: u, class: e.class, style: b, role: "row" }, o(a)), [g]);
  };
} });
var u_ = i_;
function c_(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Dt(e);
}
const d_ = (e, { slots: t }) => {
  const { columns: n, columnsStyles: l, depthMap: a, expandColumnKey: s, expandedRowKeys: r, estimatedRowHeight: i, hasFixedColumns: u, rowData: c, rowIndex: d, style: f, isScrolling: m, rowProps: h, rowClass: v, rowKey: p, rowEventHandlers: b, ns: g, onRowHovered: T, onRowExpanded: w } = e, C = Ul(v, { columns: n, rowData: c, rowIndex: d }, ""), S = Ul(h, { columns: n, rowData: c, rowIndex: d }), E = c[p], M = a[E] || 0, O = !!s, _ = d < 0, I = [g.e("row"), C, { [g.e(`row-depth-${M}`)]: O && d >= 0, [g.is("expanded")]: O && r.includes(E), [g.is("fixed")]: !M && _, [g.is("customized")]: !!t.row }], R = u ? T : void 0, P = { ...S, columns: n, columnsStyles: l, class: I, depth: M, expandColumnKey: s, estimatedRowHeight: _ ? void 0 : i, isScrolling: m, rowIndex: d, rowData: c, rowKey: E, rowEventHandlers: b, style: f };
  return z(u_, lt(P, { onRowExpand: w, onMouseenter: (A) => {
    R == null ? void 0 : R({ hovered: true, rowKey: E, event: A, rowData: c, rowIndex: d });
  }, onMouseleave: (A) => {
    R == null ? void 0 : R({ hovered: false, rowKey: E, event: A, rowData: c, rowIndex: d });
  }, rowkey: E }), c_(t) ? t : { default: () => [t] });
};
var f_ = d_;
const Di = (e, { slots: t }) => {
  var n;
  const { cellData: l, style: a } = e, s = ((n = l == null ? void 0 : l.toString) == null ? void 0 : n.call(l)) || "", r = X(t, "default", e, () => [s]);
  return z("div", { class: e.class, title: s, style: a }, [r]);
};
Di.displayName = "ElTableV2Cell";
Di.inheritAttrs = false;
var p_ = Di;
const v_ = (e) => {
  const { expanded: t, expandable: n, onExpand: l, style: a, size: s } = e, r = { onClick: n ? () => l(!t) : void 0, class: e.class };
  return z(Ee, lt(r, { size: s, style: a }), { default: () => [z(kn, null, null)] });
};
var h_ = v_;
const Vp = ({ columns: e, column: t, columnIndex: n, depth: l, expandIconProps: a, isScrolling: s, rowData: r, rowIndex: i, style: u, expandedRowKeys: c, ns: d, cellProps: f, expandColumnKey: m, indentSize: h, iconSize: v, rowKey: p }, { slots: b }) => {
  const g = yl(u);
  if (t.placeholderSign === Qo) return z("div", { class: d.em("row-cell", "placeholder"), style: g }, null);
  const { cellRenderer: T, dataKey: w, dataGetter: C } = t, S = Qe(C) ? C({ columns: e, column: t, columnIndex: n, rowData: r, rowIndex: i }) : xt(r, w ?? ""), E = Ul(f, { cellData: S, columns: e, column: t, columnIndex: n, rowIndex: i, rowData: r }), M = { class: d.e("cell-text"), columns: e, column: t, columnIndex: n, cellData: S, isScrolling: s, rowData: r, rowIndex: i }, O = Np(T), _ = O ? O(M) : X(b, "default", M, () => [z(p_, M, null)]), I = [d.e("row-cell"), t.class, t.align === Jo.CENTER && d.is("align-center"), t.align === Jo.RIGHT && d.is("align-right")], R = i >= 0 && m && t.key === m, P = i >= 0 && c.includes(r[p]);
  let W;
  const te = `margin-inline-start: ${l * h}px;`;
  return R && (gt(a) ? W = z(h_, lt(a, { class: [d.e("expand-icon"), d.is("expanded", P)], size: v, expanded: P, style: te, expandable: true }), null) : W = z("div", { style: [te, `width: ${v}px; height: ${v}px;`].join(" ") }, null)), z("div", lt({ class: I, style: g }, E, { role: "cell" }), [W, _]);
};
Vp.inheritAttrs = false;
var vc = Vp;
const m_ = pe({ class: String, columns: sa, columnsStyles: { type: Y(Object), required: true }, headerIndex: Number, style: { type: Y(Object) } }), g_ = K({ name: "ElTableV2HeaderRow", props: m_, setup(e, { slots: t }) {
  return () => {
    const { columns: n, columnsStyles: l, headerIndex: a, style: s } = e;
    let r = n.map((i, u) => t.cell({ columns: n, column: i, columnIndex: u, headerIndex: a, style: l[i.key] }));
    return t.header && (r = t.header({ cells: r.map((i) => Se(i) && i.length === 1 ? i[0] : i), columns: n, headerIndex: a })), z("div", { class: e.class, style: s, role: "row" }, [r]);
  };
} });
var b_ = g_;
function y_(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Dt(e);
}
const C_ = ({ columns: e, columnsStyles: t, headerIndex: n, style: l, headerClass: a, headerProps: s, ns: r }, { slots: i }) => {
  const u = { columns: e, headerIndex: n }, c = [r.e("header-row"), Ul(a, u, ""), { [r.is("customized")]: !!i.header }], d = { ...Ul(s, u), columnsStyles: t, class: c, columns: e, headerIndex: n, style: l };
  return z(b_, d, y_(i) ? i : { default: () => [i] });
};
var w_ = C_;
const Vi = (e, { slots: t }) => X(t, "default", e, () => {
  var n, l;
  return [z("div", { class: e.class, title: (n = e.column) == null ? void 0 : n.title }, [(l = e.column) == null ? void 0 : l.title])];
});
Vi.displayName = "ElTableV2HeaderCell";
Vi.inheritAttrs = false;
var S_ = Vi;
const k_ = (e) => {
  const { sortOrder: t } = e;
  return z(Ee, { size: 14, class: e.class }, { default: () => [t === Zo.ASC ? z(ah, null, null) : z(sh, null, null)] });
};
var E_ = k_;
const $_ = (e, { slots: t }) => {
  const { column: n, ns: l, style: a, onColumnSorted: s } = e, r = yl(a);
  if (n.placeholderSign === Qo) return z("div", { class: l.em("header-row-cell", "placeholder"), style: r }, null);
  const { headerCellRenderer: i, headerClass: u, sortable: c } = n, d = { ...e, class: l.e("header-cell-text") }, f = Np(i), m = f ? f(d) : X(t, "default", d, () => [z(S_, d, null)]), { sortBy: h, sortState: v, headerCellProps: p } = e;
  let b, g;
  if (v) {
    const C = v[n.key];
    b = !!Sr[C], g = b ? C : Zo.ASC;
  } else b = n.key === h.key, g = b ? h.order : Zo.ASC;
  const T = [l.e("header-cell"), Ul(u, e, ""), n.align === Jo.CENTER && l.is("align-center"), n.align === Jo.RIGHT && l.is("align-right"), c && l.is("sortable")], w = { ...Ul(p, e), onClick: n.sortable ? s : void 0, class: T, style: r, "data-key": n.key };
  return z("div", lt(w, { role: "columnheader" }), [m, c && z(E_, { class: [l.e("sort-icon"), b && l.is("sorting")], sortOrder: g }, null)]);
};
var hc = $_;
const Ap = (e, { slots: t }) => {
  var n;
  return z("div", { class: e.class, style: e.style }, [(n = t.default) == null ? void 0 : n.call(t)]);
};
Ap.displayName = "ElTableV2Footer";
var T_ = Ap;
const Fp = (e, { slots: t }) => {
  const n = X(t, "default", {}, () => [z(xf, null, null)]);
  return z("div", { class: e.class, style: e.style }, [n]);
};
Fp.displayName = "ElTableV2Empty";
var N_ = Fp;
const zp = (e, { slots: t }) => {
  var n;
  return z("div", { class: e.class, style: e.style }, [(n = t.default) == null ? void 0 : n.call(t)]);
};
zp.displayName = "ElTableV2Overlay";
var I_ = zp;
function Vo(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Dt(e);
}
const __ = "ElTableV2", M_ = K({ name: __, props: AI, setup(e, { slots: t, expose: n }) {
  const l = de("table-v2"), { columnsStyles: a, fixedColumnsOnLeft: s, fixedColumnsOnRight: r, mainColumns: i, mainTableHeight: u, fixedTableHeight: c, leftTableWidth: d, rightTableWidth: f, data: m, depthMap: h, expandedRowKeys: v, hasFixedColumns: p, mainTableRef: b, leftTableRef: g, rightTableRef: T, isDynamic: w, isResetting: C, isScrolling: S, bodyWidth: E, emptyStyle: M, rootStyle: O, headerWidth: _, footerHeight: I, showEmpty: R, scrollTo: P, scrollToLeft: W, scrollToTop: te, scrollToRow: A, getRowHeight: L, onColumnSorted: F, onRowHeightChange: V, onRowHovered: B, onRowExpanded: G, onRowsRendered: U, onScroll: ne, onVerticalScroll: Z } = DI(e);
  return n({ scrollTo: P, scrollToLeft: W, scrollToTop: te, scrollToRow: A }), ut(Pi, { ns: l, isResetting: C, isScrolling: S }), () => {
    const { cache: ee, cellProps: re, estimatedRowHeight: le, expandColumnKey: Q, fixedData: ie, headerHeight: ce, headerClass: Ie, headerProps: me, headerCellProps: se, sortBy: ke, sortState: De, rowHeight: qe, rowClass: je, rowEventHandlers: Le, rowKey: Ne, rowProps: Te, scrollbarAlwaysOn: Ge, indentSize: Ze, iconSize: ot, useIsScrolling: st, vScrollbarSize: Ce, width: Ue } = e, ht = o(m), Pt = { cache: ee, class: l.e("main"), columns: o(i), data: ht, fixedData: ie, estimatedRowHeight: le, bodyWidth: o(E) + Ce, headerHeight: ce, headerWidth: o(_), height: o(u), mainTableRef: b, rowKey: Ne, rowHeight: qe, scrollbarAlwaysOn: Ge, scrollbarStartGap: 2, scrollbarEndGap: Ce, useIsScrolling: st, width: Ue, getRowHeight: L, onRowsRendered: U, onScroll: ne }, Nt = o(d), _t = o(c), kt = { cache: ee, class: l.e("left"), columns: o(s), data: ht, fixedData: ie, estimatedRowHeight: le, leftTableRef: g, rowHeight: qe, bodyWidth: Nt, headerWidth: Nt, headerHeight: ce, height: _t, rowKey: Ne, scrollbarAlwaysOn: Ge, scrollbarStartGap: 2, scrollbarEndGap: Ce, useIsScrolling: st, width: Nt, getRowHeight: L, onScroll: Z }, xe = o(f) + Ce, rt = { cache: ee, class: l.e("right"), columns: o(r), data: ht, fixedData: ie, estimatedRowHeight: le, rightTableRef: T, rowHeight: qe, bodyWidth: xe, headerWidth: xe, headerHeight: ce, height: _t, rowKey: Ne, scrollbarAlwaysOn: Ge, scrollbarStartGap: 2, scrollbarEndGap: Ce, width: xe, style: `--${o(l.namespace)}-table-scrollbar-size: ${Ce}px`, useIsScrolling: st, getRowHeight: L, onScroll: Z }, q = o(a), ae = { ns: l, depthMap: o(h), columnsStyles: q, expandColumnKey: Q, expandedRowKeys: o(v), estimatedRowHeight: le, hasFixedColumns: o(p), rowProps: Te, rowClass: je, rowKey: Ne, rowEventHandlers: Le, onRowHovered: B, onRowExpanded: G, onRowHeightChange: V }, H = { cellProps: re, expandColumnKey: Q, indentSize: Ze, iconSize: ot, rowKey: Ne, expandedRowKeys: o(v), ns: l }, fe = { ns: l, headerClass: Ie, headerProps: me, columnsStyles: q }, Fe = { ns: l, sortBy: ke, sortState: De, headerCellProps: se, onColumnSorted: F }, He = { row: (jt) => z(f_, lt(jt, ae), { row: t.row, cell: (Gt) => {
      let Ft;
      return t.cell ? z(vc, lt(Gt, H, { style: q[Gt.column.key] }), Vo(Ft = t.cell(Gt)) ? Ft : { default: () => [Ft] }) : z(vc, lt(Gt, H, { style: q[Gt.column.key] }), null);
    } }), header: (jt) => z(w_, lt(jt, fe), { header: t.header, cell: (Gt) => {
      let Ft;
      return t["header-cell"] ? z(hc, lt(Gt, Fe, { style: q[Gt.column.key] }), Vo(Ft = t["header-cell"](Gt)) ? Ft : { default: () => [Ft] }) : z(hc, lt(Gt, Fe, { style: q[Gt.column.key] }), null);
    } }) }, wt = [e.class, l.b(), l.e("root"), { [l.is("dynamic")]: o(w) }], Rn = { class: l.e("footer"), style: o(I) };
    return z("div", { class: wt, style: o(O) }, [z(QI, Pt, Vo(He) ? He : { default: () => [He] }), z(n_, kt, Vo(He) ? He : { default: () => [He] }), z(a_, rt, Vo(He) ? He : { default: () => [He] }), t.footer && z(T_, Rn, { default: t.footer }), o(R) && z(N_, { class: l.e("empty"), style: o(M) }, { default: t.empty }), t.overlay && z(I_, { class: l.e("overlay") }, { default: t.overlay })]);
  };
} });
var O_ = M_;
const P_ = pe({ disableWidth: Boolean, disableHeight: Boolean, onResize: { type: Y(Function) } }), R_ = (e) => {
  const t = N(), n = N(0), l = N(0);
  let a;
  return Xe(() => {
    a = Lt(t, ([s]) => {
      const { width: r, height: i } = s.contentRect, { paddingLeft: u, paddingRight: c, paddingTop: d, paddingBottom: f } = getComputedStyle(s.target), m = Number.parseInt(u) || 0, h = Number.parseInt(c) || 0, v = Number.parseInt(d) || 0, p = Number.parseInt(f) || 0;
      n.value = r - m - h, l.value = i - v - p;
    }).stop;
  }), It(() => {
    a == null ? void 0 : a();
  }), ue([n, l], ([s, r]) => {
    var i;
    (i = e.onResize) == null || i.call(e, { width: s, height: r });
  }), { sizer: t, width: n, height: l };
}, L_ = K({ name: "ElAutoResizer", props: P_, setup(e, { slots: t }) {
  const n = de("auto-resizer"), { height: l, width: a, sizer: s } = R_(e), r = { width: "100%", height: "100%" };
  return () => {
    var i;
    return z("div", { ref: s, class: n.b(), style: r }, [(i = t.default) == null ? void 0 : i.call(t, { height: l.value, width: a.value })]);
  };
} });
var B_ = L_;
const D_ = We(O_), V_ = We(B_), ys = Symbol("tabsRootContextKey"), A_ = pe({ tabs: { type: Y(Array), default: () => Bt([]) } }), xp = "ElTabBar", F_ = K({ name: xp }), z_ = K({ ...F_, props: A_, setup(e, { expose: t }) {
  const n = e, l = tt(), a = we(ys);
  a || Kt(xp, "<el-tabs><el-tab-bar /></el-tabs>");
  const s = de("tabs"), r = N(), i = N(), u = () => {
    let h = 0, v = 0;
    const p = ["top", "bottom"].includes(a.props.tabPosition) ? "width" : "height", b = p === "width" ? "x" : "y", g = b === "x" ? "left" : "top";
    return n.tabs.every((T) => {
      var w, C;
      const S = (C = (w = l.parent) == null ? void 0 : w.refs) == null ? void 0 : C[`tab-${T.uid}`];
      if (!S) return false;
      if (!T.active) return true;
      h = S[`offset${Gn(g)}`], v = S[`client${Gn(p)}`];
      const E = window.getComputedStyle(S);
      return p === "width" && (v -= Number.parseFloat(E.paddingLeft) + Number.parseFloat(E.paddingRight), h += Number.parseFloat(E.paddingLeft)), false;
    }), { [p]: `${v}px`, transform: `translate${Gn(b)}(${h}px)` };
  }, c = () => i.value = u(), d = [], f = () => {
    var h;
    d.forEach((p) => p.stop()), d.length = 0;
    const v = (h = l.parent) == null ? void 0 : h.refs;
    if (v) {
      for (const p in v) if (p.startsWith("tab-")) {
        const b = v[p];
        b && d.push(Lt(b, c));
      }
    }
  };
  ue(() => n.tabs, async () => {
    await $e(), c(), f();
  }, { immediate: true });
  const m = Lt(r, () => c());
  return It(() => {
    d.forEach((h) => h.stop()), d.length = 0, m.stop();
  }), t({ ref: r, update: c }), (h, v) => (k(), D("div", { ref_key: "barRef", ref: r, class: $([o(s).e("active-bar"), o(s).is(o(a).props.tabPosition)]), style: Me(i.value) }, null, 6));
} });
var x_ = ve(z_, [["__file", "tab-bar.vue"]]);
const H_ = pe({ panes: { type: Y(Array), default: () => Bt([]) }, currentName: { type: [String, Number], default: "" }, editable: Boolean, type: { type: String, values: ["card", "border-card", ""], default: "" }, stretch: Boolean }), K_ = { tabClick: (e, t, n) => n instanceof Event, tabRemove: (e, t) => t instanceof Event }, mc = "ElTabNav", W_ = K({ name: mc, props: H_, emits: K_, setup(e, { expose: t, emit: n }) {
  const l = we(ys);
  l || Kt(mc, "<el-tabs><tab-nav /></el-tabs>");
  const a = de("tabs"), s = Uh(), r = om(), i = N(), u = N(), c = N(), d = N(), f = N(false), m = N(0), h = N(false), v = N(true), p = y(() => ["top", "bottom"].includes(l.props.tabPosition) ? "width" : "height"), b = y(() => ({ transform: `translate${p.value === "width" ? "X" : "Y"}(-${m.value}px)` })), g = () => {
    if (!i.value) return;
    const O = i.value[`offset${Gn(p.value)}`], _ = m.value;
    if (!_) return;
    const I = _ > O ? _ - O : 0;
    m.value = I;
  }, T = () => {
    if (!i.value || !u.value) return;
    const O = u.value[`offset${Gn(p.value)}`], _ = i.value[`offset${Gn(p.value)}`], I = m.value;
    if (O - I <= _) return;
    const R = O - I > _ * 2 ? I + _ : O - _;
    m.value = R;
  }, w = async () => {
    const O = u.value;
    if (!f.value || !c.value || !i.value || !O) return;
    await $e();
    const _ = c.value.querySelector(".is-active");
    if (!_) return;
    const I = i.value, R = ["top", "bottom"].includes(l.props.tabPosition), P = _.getBoundingClientRect(), W = I.getBoundingClientRect(), te = R ? O.offsetWidth - W.width : O.offsetHeight - W.height, A = m.value;
    let L = A;
    R ? (P.left < W.left && (L = A - (W.left - P.left)), P.right > W.right && (L = A + P.right - W.right)) : (P.top < W.top && (L = A - (W.top - P.top)), P.bottom > W.bottom && (L = A + (P.bottom - W.bottom))), L = Math.max(L, 0), m.value = Math.min(L, te);
  }, C = () => {
    var O;
    if (!u.value || !i.value) return;
    e.stretch && ((O = d.value) == null || O.update());
    const _ = u.value[`offset${Gn(p.value)}`], I = i.value[`offset${Gn(p.value)}`], R = m.value;
    I < _ ? (f.value = f.value || {}, f.value.prev = R, f.value.next = R + I < _, _ - R < I && (m.value = _ - I)) : (f.value = false, R > 0 && (m.value = 0));
  }, S = (O) => {
    let _ = 0;
    switch (O.code) {
      case ye.left:
      case ye.up:
        _ = -1;
        break;
      case ye.right:
      case ye.down:
        _ = 1;
        break;
      default:
        return;
    }
    const I = Array.from(O.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));
    let P = I.indexOf(O.target) + _;
    P < 0 ? P = I.length - 1 : P >= I.length && (P = 0), I[P].focus({ preventScroll: true }), I[P].click(), E();
  }, E = () => {
    v.value && (h.value = true);
  }, M = () => h.value = false;
  return ue(s, (O) => {
    O === "hidden" ? v.value = false : O === "visible" && setTimeout(() => v.value = true, 50);
  }), ue(r, (O) => {
    O ? setTimeout(() => v.value = true, 50) : v.value = false;
  }), Lt(c, C), Xe(() => setTimeout(() => w(), 0)), cl(() => C()), t({ scrollToActiveTab: w, removeFocus: M }), () => {
    const O = f.value ? [z("span", { class: [a.e("nav-prev"), a.is("disabled", !f.value.prev)], onClick: g }, [z(Ee, null, { default: () => [z(El, null, null)] })]), z("span", { class: [a.e("nav-next"), a.is("disabled", !f.value.next)], onClick: T }, [z(Ee, null, { default: () => [z(kn, null, null)] })])] : null, _ = e.panes.map((I, R) => {
      var P, W, te, A;
      const L = I.uid, F = I.props.disabled, V = (W = (P = I.props.name) != null ? P : I.index) != null ? W : `${R}`, B = !F && (I.isClosable || e.editable);
      I.index = `${R}`;
      const G = B ? z(Ee, { class: "is-icon-close", onClick: (Z) => n("tabRemove", I, Z) }, { default: () => [z(An, null, null)] }) : null, U = ((A = (te = I.slots).label) == null ? void 0 : A.call(te)) || I.props.label, ne = !F && I.active ? 0 : -1;
      return z("div", { ref: `tab-${L}`, class: [a.e("item"), a.is(l.props.tabPosition), a.is("active", I.active), a.is("disabled", F), a.is("closable", B), a.is("focus", h.value)], id: `tab-${V}`, key: `tab-${L}`, "aria-controls": `pane-${V}`, role: "tab", "aria-selected": I.active, tabindex: ne, onFocus: () => E(), onBlur: () => M(), onClick: (Z) => {
        M(), n("tabClick", I, V, Z);
      }, onKeydown: (Z) => {
        B && (Z.code === ye.delete || Z.code === ye.backspace) && n("tabRemove", I, Z);
      } }, [U, G]);
    });
    return z("div", { ref: c, class: [a.e("nav-wrap"), a.is("scrollable", !!f.value), a.is(l.props.tabPosition)] }, [O, z("div", { class: a.e("nav-scroll"), ref: i }, [z("div", { class: [a.e("nav"), a.is(l.props.tabPosition), a.is("stretch", e.stretch && ["top", "bottom"].includes(l.props.tabPosition))], ref: u, style: b.value, role: "tablist", onKeydown: S }, [e.type ? null : z(x_, { ref: d, tabs: [...e.panes] }, null), _])])]);
  };
} }), j_ = pe({ type: { type: String, values: ["card", "border-card", ""], default: "" }, closable: Boolean, addable: Boolean, modelValue: { type: [String, Number] }, editable: Boolean, tabPosition: { type: String, values: ["top", "right", "bottom", "left"], default: "top" }, beforeLeave: { type: Y(Function), default: () => true }, stretch: Boolean }), Hs = (e) => Be(e) || _e(e), U_ = { [Ae]: (e) => Hs(e), tabClick: (e, t) => t instanceof Event, tabChange: (e) => Hs(e), edit: (e, t) => ["remove", "add"].includes(t), tabRemove: (e) => Hs(e), tabAdd: () => true }, Y_ = K({ name: "ElTabs", props: j_, emits: U_, setup(e, { emit: t, slots: n, expose: l }) {
  var a;
  const s = de("tabs"), r = y(() => ["left", "right"].includes(e.tabPosition)), { children: i, addChild: u, removeChild: c } = li(tt(), "ElTabPane"), d = N(), f = N((a = e.modelValue) != null ? a : "0"), m = async (g, T = false) => {
    var w, C;
    if (!(f.value === g || vt(g))) try {
      let S;
      if (e.beforeLeave) {
        const E = e.beforeLeave(g, f.value);
        S = E instanceof Promise ? await E : E;
      } else S = true;
      S !== false && (f.value = g, T && (t(Ae, g), t("tabChange", g)), (C = (w = d.value) == null ? void 0 : w.removeFocus) == null || C.call(w));
    } catch {
    }
  }, h = (g, T, w) => {
    g.props.disabled || (t("tabClick", g, w), m(T, true));
  }, v = (g, T) => {
    g.props.disabled || vt(g.props.name) || (T.stopPropagation(), t("edit", g.props.name, "remove"), t("tabRemove", g.props.name));
  }, p = () => {
    t("edit", void 0, "add"), t("tabAdd");
  };
  ue(() => e.modelValue, (g) => m(g)), ue(f, async () => {
    var g;
    await $e(), (g = d.value) == null || g.scrollToActiveTab();
  }), ut(ys, { props: e, currentName: f, registerPane: (g) => {
    i.value.push(g);
  }, sortPane: u, unregisterPane: c }), l({ currentName: f });
  const b = ({ render: g }) => g();
  return () => {
    const g = n["add-icon"], T = e.editable || e.addable ? z("div", { class: [s.e("new-tab"), r.value && s.e("new-tab-vertical")], tabindex: "0", onClick: p, onKeydown: (S) => {
      [ye.enter, ye.numpadEnter].includes(S.code) && p();
    } }, [g ? X(n, "add-icon") : z(Ee, { class: s.is("icon-plus") }, { default: () => [z(Hc, null, null)] })]) : null, w = z("div", { class: [s.e("header"), r.value && s.e("header-vertical"), s.is(e.tabPosition)] }, [z(b, { render: () => {
      const S = i.value.some((E) => E.slots.label);
      return z(W_, { ref: d, currentName: f.value, editable: e.editable, type: e.type, panes: i.value, stretch: e.stretch, onTabClick: h, onTabRemove: v }, { $stable: !S });
    } }, null), T]), C = z("div", { class: s.e("content") }, [X(n, "default")]);
    return z("div", { class: [s.b(), s.m(e.tabPosition), { [s.m("card")]: e.type === "card", [s.m("border-card")]: e.type === "border-card" }] }, [C, w]);
  };
} });
var q_ = Y_;
const G_ = pe({ label: { type: String, default: "" }, name: { type: [String, Number] }, closable: Boolean, disabled: Boolean, lazy: Boolean }), Hp = "ElTabPane", X_ = K({ name: Hp }), Z_ = K({ ...X_, props: G_, setup(e) {
  const t = e, n = tt(), l = Yt(), a = we(ys);
  a || Kt(Hp, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
  const s = de("tab-pane"), r = N(), i = y(() => t.closable || a.props.closable), u = Gs(() => {
    var h;
    return a.currentName.value === ((h = t.name) != null ? h : r.value);
  }), c = N(u.value), d = y(() => {
    var h;
    return (h = t.name) != null ? h : r.value;
  }), f = Gs(() => !t.lazy || c.value || u.value);
  ue(u, (h) => {
    h && (c.value = true);
  });
  const m = Ct({ uid: n.uid, slots: l, props: t, paneName: d, active: u, index: r, isClosable: i });
  return a.registerPane(m), Xe(() => {
    a.sortPane(m);
  }), To(() => {
    a.unregisterPane(m.uid);
  }), (h, v) => o(f) ? Ye((k(), D("div", { key: 0, id: `pane-${o(d)}`, class: $(o(s).b()), role: "tabpanel", "aria-hidden": !o(u), "aria-labelledby": `tab-${o(d)}` }, [X(h.$slots, "default")], 10, ["id", "aria-hidden", "aria-labelledby"])), [[pt, o(u)]]) : J("v-if", true);
} });
var Kp = ve(Z_, [["__file", "tab-pane.vue"]]);
const J_ = We(q_, { TabPane: Kp }), Q_ = Vt(Kp), eM = pe({ type: { type: String, values: ["primary", "success", "info", "warning", "danger", ""], default: "" }, size: { type: String, values: Qn, default: "" }, truncated: Boolean, lineClamp: { type: [String, Number] }, tag: { type: String, default: "span" } }), tM = K({ name: "ElText" }), nM = K({ ...tM, props: eM, setup(e) {
  const t = e, n = N(), l = Ht(), a = de("text"), s = y(() => [a.b(), a.m(t.type), a.m(l.value), a.is("truncated", t.truncated), a.is("line-clamp", !vt(t.lineClamp))]), r = ul().title, i = () => {
    var u, c, d, f, m;
    if (r) return;
    let h = false;
    const v = ((u = n.value) == null ? void 0 : u.textContent) || "";
    if (t.truncated) {
      const p = (c = n.value) == null ? void 0 : c.offsetWidth, b = (d = n.value) == null ? void 0 : d.scrollWidth;
      p && b && b > p && (h = true);
    } else if (!vt(t.lineClamp)) {
      const p = (f = n.value) == null ? void 0 : f.offsetHeight, b = (m = n.value) == null ? void 0 : m.scrollHeight;
      p && b && b > p && (h = true);
    }
    h ? n.value.setAttribute("title", v) : n.value.removeAttribute("title");
  };
  return Xe(i), cl(i), (u, c) => (k(), oe(Je(u.tag), { ref_key: "textRef", ref: n, class: $(o(s)), style: Me({ "-webkit-line-clamp": u.lineClamp }) }, { default: j(() => [X(u.$slots, "default")]), _: 3 }, 8, ["class", "style"]));
} });
var lM = ve(nM, [["__file", "text.vue"]]);
const oM = We(lM), aM = pe({ format: { type: String, default: "HH:mm" }, modelValue: String, disabled: Boolean, editable: { type: Boolean, default: true }, effect: { type: Y(String), default: "light" }, clearable: { type: Boolean, default: true }, size: Wt, placeholder: String, start: { type: String, default: "09:00" }, end: { type: String, default: "18:00" }, step: { type: String, default: "00:30" }, minTime: String, maxTime: String, includeEndTime: { type: Boolean, default: false }, name: String, prefixIcon: { type: Y([String, Object]), default: () => zc }, clearIcon: { type: Y([String, Object]), default: () => dl }, ...Io }), ol = (e) => {
  const t = (e || "").split(":");
  if (t.length >= 2) {
    let n = Number.parseInt(t[0], 10);
    const l = Number.parseInt(t[1], 10), a = e.toUpperCase();
    return a.includes("AM") && n === 12 ? n = 0 : a.includes("PM") && n !== 12 && (n += 12), { hours: n, minutes: l };
  }
  return null;
}, Ks = (e, t) => {
  const n = ol(e);
  if (!n) return -1;
  const l = ol(t);
  if (!l) return -1;
  const a = n.minutes + n.hours * 60, s = l.minutes + l.hours * 60;
  return a === s ? 0 : a > s ? 1 : -1;
}, gc = (e) => `${e}`.padStart(2, "0"), ao = (e) => `${gc(e.hours)}:${gc(e.minutes)}`, sM = (e, t) => {
  const n = ol(e);
  if (!n) return "";
  const l = ol(t);
  if (!l) return "";
  const a = { hours: n.hours, minutes: n.minutes };
  return a.minutes += l.minutes, a.hours += l.hours, a.hours += Math.floor(a.minutes / 60), a.minutes = a.minutes % 60, ao(a);
}, rM = K({ name: "ElTimeSelect" }), iM = K({ ...rM, props: aM, emits: [et, "blur", "focus", "clear", Ae], setup(e, { expose: t }) {
  const n = e;
  Ke.extend(xr);
  const { Option: l } = jl, a = de("input"), s = N(), r = cn(), { lang: i } = ft(), u = y(() => n.modelValue), c = y(() => {
    const g = ol(n.start);
    return g ? ao(g) : null;
  }), d = y(() => {
    const g = ol(n.end);
    return g ? ao(g) : null;
  }), f = y(() => {
    const g = ol(n.step);
    return g ? ao(g) : null;
  }), m = y(() => {
    const g = ol(n.minTime || "");
    return g ? ao(g) : null;
  }), h = y(() => {
    const g = ol(n.maxTime || "");
    return g ? ao(g) : null;
  }), v = y(() => {
    var g;
    const T = [], w = (C, S) => {
      T.push({ value: C, disabled: Ks(S, m.value || "-1:-1") <= 0 || Ks(S, h.value || "100:100") >= 0 });
    };
    if (n.start && n.end && n.step) {
      let C = c.value, S;
      for (; C && d.value && Ks(C, d.value) <= 0; ) S = Ke(C, "HH:mm").locale(i.value).format(n.format), w(S, C), C = sM(C, f.value);
      if (n.includeEndTime && d.value && ((g = T[T.length - 1]) == null ? void 0 : g.value) !== d.value) {
        const E = Ke(d.value, "HH:mm").locale(i.value).format(n.format);
        w(E, d.value);
      }
    }
    return T;
  });
  return t({ blur: () => {
    var g, T;
    (T = (g = s.value) == null ? void 0 : g.blur) == null || T.call(g);
  }, focus: () => {
    var g, T;
    (T = (g = s.value) == null ? void 0 : g.focus) == null || T.call(g);
  } }), (g, T) => (k(), oe(o(jl), { ref_key: "select", ref: s, "model-value": o(u), disabled: o(r), clearable: g.clearable, "clear-icon": g.clearIcon, size: g.size, effect: g.effect, placeholder: g.placeholder, "default-first-option": "", filterable: g.editable, "empty-values": g.emptyValues, "value-on-clear": g.valueOnClear, "onUpdate:modelValue": (w) => g.$emit(o(Ae), w), onChange: (w) => g.$emit(o(et), w), onBlur: (w) => g.$emit("blur", w), onFocus: (w) => g.$emit("focus", w), onClear: () => g.$emit("clear") }, { prefix: j(() => [g.prefixIcon ? (k(), oe(o(Ee), { key: 0, class: $(o(a).e("prefix-icon")) }, { default: j(() => [(k(), oe(Je(g.prefixIcon)))]), _: 1 }, 8, ["class"])) : J("v-if", true)]), default: j(() => [(k(true), D(Pe, null, it(o(v), (w) => (k(), oe(o(l), { key: w.value, label: w.value, value: w.value, disabled: w.disabled }, null, 8, ["label", "value", "disabled"]))), 128))]), _: 1 }, 8, ["model-value", "disabled", "clearable", "clear-icon", "size", "effect", "placeholder", "filterable", "empty-values", "value-on-clear", "onUpdate:modelValue", "onChange", "onBlur", "onFocus", "onClear"]));
} });
var uM = ve(iM, [["__file", "time-select.vue"]]);
const cM = We(uM), dM = K({ name: "ElTimeline", setup(e, { slots: t }) {
  const n = de("timeline");
  return ut("timeline", t), () => Oe("ul", { class: [n.b()] }, [X(t, "default")]);
} }), fM = pe({ timestamp: { type: String, default: "" }, hideTimestamp: Boolean, center: Boolean, placement: { type: String, values: ["top", "bottom"], default: "bottom" }, type: { type: String, values: ["primary", "success", "warning", "danger", "info"], default: "" }, color: { type: String, default: "" }, size: { type: String, values: ["normal", "large"], default: "normal" }, icon: { type: St }, hollow: Boolean }), pM = K({ name: "ElTimelineItem" }), vM = K({ ...pM, props: fM, setup(e) {
  const t = e, n = de("timeline-item"), l = y(() => [n.e("node"), n.em("node", t.size || ""), n.em("node", t.type || ""), n.is("hollow", t.hollow)]);
  return (a, s) => (k(), D("li", { class: $([o(n).b(), { [o(n).e("center")]: a.center }]) }, [x("div", { class: $(o(n).e("tail")) }, null, 2), a.$slots.dot ? J("v-if", true) : (k(), D("div", { key: 0, class: $(o(l)), style: Me({ backgroundColor: a.color }) }, [a.icon ? (k(), oe(o(Ee), { key: 0, class: $(o(n).e("icon")) }, { default: j(() => [(k(), oe(Je(a.icon)))]), _: 1 }, 8, ["class"])) : J("v-if", true)], 6)), a.$slots.dot ? (k(), D("div", { key: 1, class: $(o(n).e("dot")) }, [X(a.$slots, "dot")], 2)) : J("v-if", true), x("div", { class: $(o(n).e("wrapper")) }, [!a.hideTimestamp && a.placement === "top" ? (k(), D("div", { key: 0, class: $([o(n).e("timestamp"), o(n).is("top")]) }, he(a.timestamp), 3)) : J("v-if", true), x("div", { class: $(o(n).e("content")) }, [X(a.$slots, "default")], 2), !a.hideTimestamp && a.placement === "bottom" ? (k(), D("div", { key: 1, class: $([o(n).e("timestamp"), o(n).is("bottom")]) }, he(a.timestamp), 3)) : J("v-if", true)], 2)], 2));
} });
var Wp = ve(vM, [["__file", "timeline-item.vue"]]);
const hM = We(dM, { TimelineItem: Wp }), mM = Vt(Wp), jp = pe({ nowrap: Boolean });
var Up = ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Up || {});
const gM = Object.values(Up), Ai = pe({ width: { type: Number, default: 10 }, height: { type: Number, default: 10 }, style: { type: Y(Object), default: null } }), bM = pe({ side: { type: Y(String), values: gM, required: true } }), yM = ["absolute", "fixed"], CM = ["top-start", "top-end", "top", "bottom-start", "bottom-end", "bottom", "left-start", "left-end", "left", "right-start", "right-end", "right"], Fi = pe({ arrowPadding: { type: Y(Number), default: 5 }, effect: { type: Y(String), default: "light" }, contentClass: String, placement: { type: Y(String), values: CM, default: "bottom" }, reference: { type: Y(Object), default: null }, offset: { type: Number, default: 8 }, strategy: { type: Y(String), values: yM, default: "absolute" }, showArrow: Boolean, ...ln(["ariaLabel"]) }), zi = pe({ delayDuration: { type: Number, default: 300 }, defaultOpen: Boolean, open: { type: Boolean, default: void 0 }, onOpenChange: { type: Y(Function) }, "onUpdate:open": { type: Y(Function) } }), to = { type: Y(Function) }, xi = pe({ onBlur: to, onClick: to, onFocus: to, onMouseDown: to, onMouseEnter: to, onMouseLeave: to }), wM = pe({ ...zi, ...Ai, ...xi, ...Fi, alwaysOn: Boolean, fullTransition: Boolean, transitionProps: { type: Y(Object), default: null }, teleported: Boolean, to: { type: Y(String), default: "body" } }), Cs = Symbol("tooltipV2"), Yp = Symbol("tooltipV2Content"), Ws = "tooltip_v2.open", SM = K({ name: "ElTooltipV2Root" }), kM = K({ ...SM, props: zi, setup(e, { expose: t }) {
  const n = e, l = N(n.defaultOpen), a = N(null), s = y({ get: () => Wn(n.open) ? l.value : n.open, set: (b) => {
    var g;
    l.value = b, (g = n["onUpdate:open"]) == null || g.call(n, b);
  } }), r = y(() => _e(n.delayDuration) && n.delayDuration > 0), { start: i, stop: u } = Kl(() => {
    s.value = true;
  }, y(() => n.delayDuration), { immediate: false }), c = de("tooltip-v2"), d = nn(), f = () => {
    u(), s.value = true;
  }, m = () => {
    o(r) ? i() : f();
  }, h = f, v = () => {
    u(), s.value = false;
  };
  return ue(s, (b) => {
    var g;
    b && (document.dispatchEvent(new CustomEvent(Ws)), h()), (g = n.onOpenChange) == null || g.call(n, b);
  }), Xe(() => {
    document.addEventListener(Ws, v);
  }), It(() => {
    u(), document.removeEventListener(Ws, v);
  }), ut(Cs, { contentId: d, triggerRef: a, ns: c, onClose: v, onDelayOpen: m, onOpen: h }), t({ onOpen: h, onClose: v }), (b, g) => X(b.$slots, "default", { open: o(s) });
} });
var EM = ve(kM, [["__file", "root.vue"]]);
const $M = K({ name: "ElTooltipV2Arrow" }), TM = K({ ...$M, props: { ...Ai, ...bM }, setup(e) {
  const t = e, { ns: n } = we(Cs), { arrowRef: l } = we(Yp), a = y(() => {
    const { style: s, width: r, height: i } = t, u = n.namespace.value;
    return { [`--${u}-tooltip-v2-arrow-width`]: `${r}px`, [`--${u}-tooltip-v2-arrow-height`]: `${i}px`, [`--${u}-tooltip-v2-arrow-border-width`]: `${r / 2}px`, [`--${u}-tooltip-v2-arrow-cover-width`]: r / 2 - 1, ...s || {} };
  });
  return (s, r) => (k(), D("span", { ref_key: "arrowRef", ref: l, style: Me(o(a)), class: $(o(n).e("arrow")) }, null, 6));
} });
var bc = ve(TM, [["__file", "arrow.vue"]]);
const NM = pe({ style: { type: Y([String, Object, Array]), default: () => ({}) } }), IM = K({ name: "ElVisuallyHidden" }), _M = K({ ...IM, props: NM, setup(e) {
  const t = e, n = y(() => [t.style, { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }]);
  return (l, a) => (k(), D("span", lt(l.$attrs, { style: o(n) }), [X(l.$slots, "default")], 16));
} });
var MM = ve(_M, [["__file", "visual-hidden.vue"]]);
pe({});
const OM = (e) => {
  if (!dt) return;
  if (!e) return e;
  const t = Sn(e);
  return t || (mn(e) ? t : e);
}, PM = ({ middleware: e, placement: t, strategy: n }) => {
  const l = N(), a = N(), s = N(), r = N(), i = N({}), u = { x: s, y: r, placement: t, strategy: n, middlewareData: i }, c = async () => {
    if (!dt) return;
    const d = OM(l), f = Sn(a);
    if (!d || !f) return;
    const m = await Yc(d, f, { placement: o(t), strategy: o(n), middleware: o(e) });
    bo(u).forEach((h) => {
      u[h].value = m[h];
    });
  };
  return Xe(() => {
    an(() => {
      c();
    });
  }), { ...u, update: c, referenceRef: l, contentRef: a };
}, RM = ({ arrowRef: e, padding: t }) => ({ name: "arrow", options: { element: e, padding: t }, fn(n) {
  const l = o(e);
  return l ? Uc({ element: l, padding: t }).fn(n) : {};
} }), LM = K({ name: "ElTooltipV2Content" }), BM = K({ ...LM, props: { ...Fi, ...jp }, setup(e) {
  const t = e, { triggerRef: n, contentId: l } = we(Cs), a = N(t.placement), s = N(t.strategy), r = N(null), { referenceRef: i, contentRef: u, middlewareData: c, x: d, y: f, update: m } = PM({ placement: a, strategy: s, middleware: y(() => {
    const w = [qc(t.offset)];
    return t.showArrow && w.push(RM({ arrowRef: r })), w;
  }) }), h = No().nextZIndex(), v = de("tooltip-v2"), p = y(() => a.value.split("-")[0]), b = y(() => ({ position: o(s), top: `${o(f) || 0}px`, left: `${o(d) || 0}px`, zIndex: h })), g = y(() => {
    if (!t.showArrow) return {};
    const { arrow: w } = o(c);
    return { [`--${v.namespace.value}-tooltip-v2-arrow-x`]: `${w == null ? void 0 : w.x}px` || "", [`--${v.namespace.value}-tooltip-v2-arrow-y`]: `${w == null ? void 0 : w.y}px` || "" };
  }), T = y(() => [v.e("content"), v.is("dark", t.effect === "dark"), v.is(o(s)), t.contentClass]);
  return ue(r, () => m()), ue(() => t.placement, (w) => a.value = w), Xe(() => {
    ue(() => t.reference || n.value, (w) => {
      i.value = w || void 0;
    }, { immediate: true });
  }), ut(Yp, { arrowRef: r }), (w, C) => (k(), D("div", { ref_key: "contentRef", ref: u, style: Me(o(b)), "data-tooltip-v2-root": "" }, [w.nowrap ? J("v-if", true) : (k(), D("div", { key: 0, "data-side": o(p), class: $(o(T)) }, [X(w.$slots, "default", { contentStyle: o(b), contentClass: o(T) }), z(o(MM), { id: o(l), role: "tooltip" }, { default: j(() => [w.ariaLabel ? (k(), D(Pe, { key: 0 }, [at(he(w.ariaLabel), 1)], 64)) : X(w.$slots, "default", { key: 1 })]), _: 3 }, 8, ["id"]), X(w.$slots, "arrow", { style: Me(o(g)), side: o(p) })], 10, ["data-side"]))], 4));
} });
var yc = ve(BM, [["__file", "content.vue"]]);
const DM = pe({ setRef: { type: Y(Function), required: true }, onlyChild: Boolean });
var VM = K({ props: DM, setup(e, { slots: t }) {
  const n = N(), l = hs(n, (a) => {
    a ? e.setRef(a.nextElementSibling) : e.setRef(null);
  });
  return () => {
    var a;
    const [s] = ((a = t.default) == null ? void 0 : a.call(t)) || [], r = e.onlyChild ? zy(s.children) : s.children;
    return z(Pe, { ref: l }, [r]);
  };
} });
const AM = K({ name: "ElTooltipV2Trigger" }), FM = K({ ...AM, props: { ...jp, ...xi }, setup(e) {
  const t = e, { onClose: n, onOpen: l, onDelayOpen: a, triggerRef: s, contentId: r } = we(Cs);
  let i = false;
  const u = (T) => {
    s.value = T;
  }, c = () => {
    i = false;
  }, d = zt(t.onMouseEnter, a), f = zt(t.onMouseLeave, n), m = zt(t.onMouseDown, () => {
    n(), i = true, document.addEventListener("mouseup", c, { once: true });
  }), h = zt(t.onFocus, () => {
    i || l();
  }), v = zt(t.onBlur, n), p = zt(t.onClick, (T) => {
    T.detail === 0 && n();
  }), b = { blur: v, click: p, focus: h, mousedown: m, mouseenter: d, mouseleave: f }, g = (T, w, C) => {
    T && Object.entries(w).forEach(([S, E]) => {
      T[C](S, E);
    });
  };
  return ue(s, (T, w) => {
    g(T, b, "addEventListener"), g(w, b, "removeEventListener"), T && T.setAttribute("aria-describedby", r.value);
  }), It(() => {
    g(s.value, b, "removeEventListener"), document.removeEventListener("mouseup", c);
  }), (T, w) => T.nowrap ? (k(), oe(o(VM), { key: 0, "set-ref": u, "only-child": "" }, { default: j(() => [X(T.$slots, "default")]), _: 3 })) : (k(), D("button", lt({ key: 1, ref_key: "triggerRef", ref: s }, T.$attrs), [X(T.$slots, "default")], 16));
} });
var zM = ve(FM, [["__file", "trigger.vue"]]);
const xM = K({ name: "ElTooltipV2" }), HM = K({ ...xM, props: wM, setup(e) {
  const n = tn(e), l = Ct(Hn(n, Object.keys(Ai))), a = Ct(Hn(n, Object.keys(Fi))), s = Ct(Hn(n, Object.keys(zi))), r = Ct(Hn(n, Object.keys(xi)));
  return (i, u) => (k(), oe(EM, Mn(sl(s)), { default: j(({ open: c }) => [z(zM, lt(r, { nowrap: "" }), { default: j(() => [X(i.$slots, "trigger")]), _: 3 }, 16), z(o(Mo), { to: i.to, disabled: !i.teleported }, { default: j(() => [i.fullTransition ? (k(), oe(en, Mn(lt({ key: 0 }, i.transitionProps)), { default: j(() => [i.alwaysOn || c ? (k(), oe(yc, Mn(lt({ key: 0 }, a)), { arrow: j(({ style: d, side: f }) => [i.showArrow ? (k(), oe(bc, lt({ key: 0 }, l, { style: d, side: f }), null, 16, ["style", "side"])) : J("v-if", true)]), default: j(() => [X(i.$slots, "default")]), _: 3 }, 16)) : J("v-if", true)]), _: 2 }, 1040)) : (k(), D(Pe, { key: 1 }, [i.alwaysOn || c ? (k(), oe(yc, Mn(lt({ key: 0 }, a)), { arrow: j(({ style: d, side: f }) => [i.showArrow ? (k(), oe(bc, lt({ key: 0 }, l, { style: d, side: f }), null, 16, ["style", "side"])) : J("v-if", true)]), default: j(() => [X(i.$slots, "default")]), _: 3 }, 16)) : J("v-if", true)], 64))]), _: 2 }, 1032, ["to", "disabled"])]), _: 3 }, 16));
} });
var KM = ve(HM, [["__file", "tooltip.vue"]]);
const WM = We(KM), qp = "left-check-change", Gp = "right-check-change", so = pe({ data: { type: Y(Array), default: () => [] }, titles: { type: Y(Array), default: () => [] }, buttonTexts: { type: Y(Array), default: () => [] }, filterPlaceholder: String, filterMethod: { type: Y(Function) }, leftDefaultChecked: { type: Y(Array), default: () => [] }, rightDefaultChecked: { type: Y(Array), default: () => [] }, renderContent: { type: Y(Function) }, modelValue: { type: Y(Array), default: () => [] }, format: { type: Y(Object), default: () => ({}) }, filterable: Boolean, props: { type: Y(Object), default: () => Bt({ label: "label", key: "key", disabled: "disabled" }) }, targetOrder: { type: String, values: ["original", "push", "unshift"], default: "original" }, validateEvent: { type: Boolean, default: true } }), Er = (e, t) => [e, t].every(Se) || Se(e) && qt(t), jM = { [et]: (e, t, n) => [e, n].every(Se) && ["left", "right"].includes(t), [Ae]: (e) => Se(e), [qp]: Er, [Gp]: Er }, $r = "checked-change", UM = pe({ data: so.data, optionRender: { type: Y(Function) }, placeholder: String, title: String, filterable: Boolean, format: so.format, filterMethod: so.filterMethod, defaultChecked: so.leftDefaultChecked, props: so.props }), YM = { [$r]: Er }, ra = (e) => {
  const t = { label: "label", key: "key", disabled: "disabled" };
  return y(() => ({ ...t, ...e.props }));
}, qM = (e, t, n) => {
  const l = ra(e), a = y(() => e.data.filter((d) => Qe(e.filterMethod) ? e.filterMethod(t.query, d) : String(d[l.value.label] || d[l.value.key]).toLowerCase().includes(t.query.toLowerCase()))), s = y(() => a.value.filter((d) => !d[l.value.disabled])), r = y(() => {
    const d = t.checked.length, f = e.data.length, { noChecked: m, hasChecked: h } = e.format;
    return m && h ? d > 0 ? h.replace(/\${checked}/g, d.toString()).replace(/\${total}/g, f.toString()) : m.replace(/\${total}/g, f.toString()) : `${d}/${f}`;
  }), i = y(() => {
    const d = t.checked.length;
    return d > 0 && d < s.value.length;
  }), u = () => {
    const d = s.value.map((f) => f[l.value.key]);
    t.allChecked = d.length > 0 && d.every((f) => t.checked.includes(f));
  }, c = (d) => {
    t.checked = d ? s.value.map((f) => f[l.value.key]) : [];
  };
  return ue(() => t.checked, (d, f) => {
    if (u(), t.checkChangeByUser) {
      const m = d.concat(f).filter((h) => !d.includes(h) || !f.includes(h));
      n($r, d, m);
    } else n($r, d), t.checkChangeByUser = true;
  }), ue(s, () => {
    u();
  }), ue(() => e.data, () => {
    const d = [], f = a.value.map((m) => m[l.value.key]);
    t.checked.forEach((m) => {
      f.includes(m) && d.push(m);
    }), t.checkChangeByUser = false, t.checked = d;
  }), ue(() => e.defaultChecked, (d, f) => {
    if (f && d.length === f.length && d.every((v) => f.includes(v))) return;
    const m = [], h = s.value.map((v) => v[l.value.key]);
    d.forEach((v) => {
      h.includes(v) && m.push(v);
    }), t.checkChangeByUser = false, t.checked = m;
  }, { immediate: true }), { filteredData: a, checkableData: s, checkedSummary: r, isIndeterminate: i, updateAllChecked: u, handleAllCheckedChange: c };
}, GM = K({ name: "ElTransferPanel" }), XM = K({ ...GM, props: UM, emits: YM, setup(e, { expose: t, emit: n }) {
  const l = e, a = Yt(), s = ({ option: w }) => w, { t: r } = ft(), i = de("transfer"), u = Ct({ checked: [], allChecked: false, query: "", checkChangeByUser: true }), c = ra(l), { filteredData: d, checkedSummary: f, isIndeterminate: m, handleAllCheckedChange: h } = qM(l, u, n), v = y(() => !_n(u.query) && _n(d.value)), p = y(() => !_n(a.default()[0].children)), { checked: b, allChecked: g, query: T } = tn(u);
  return t({ query: T }), (w, C) => (k(), D("div", { class: $(o(i).b("panel")) }, [x("p", { class: $(o(i).be("panel", "header")) }, [z(o(Fn), { modelValue: o(g), "onUpdate:modelValue": (S) => mn(g) ? g.value = S : null, indeterminate: o(m), "validate-event": false, onChange: o(h) }, { default: j(() => [at(he(w.title) + " ", 1), x("span", null, he(o(f)), 1)]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "indeterminate", "onChange"])], 2), x("div", { class: $([o(i).be("panel", "body"), o(i).is("with-footer", o(p))]) }, [w.filterable ? (k(), oe(o(hn), { key: 0, modelValue: o(T), "onUpdate:modelValue": (S) => mn(T) ? T.value = S : null, class: $(o(i).be("panel", "filter")), size: "default", placeholder: w.placeholder, "prefix-icon": o(rh), clearable: "", "validate-event": false }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "placeholder", "prefix-icon"])) : J("v-if", true), Ye(z(o(Gd), { modelValue: o(b), "onUpdate:modelValue": (S) => mn(b) ? b.value = S : null, "validate-event": false, class: $([o(i).is("filterable", w.filterable), o(i).be("panel", "list")]) }, { default: j(() => [(k(true), D(Pe, null, it(o(d), (S) => (k(), oe(o(Fn), { key: S[o(c).key], class: $(o(i).be("panel", "item")), value: S[o(c).key], disabled: S[o(c).disabled], "validate-event": false }, { default: j(() => {
    var E;
    return [z(s, { option: (E = w.optionRender) == null ? void 0 : E.call(w, S) }, null, 8, ["option"])];
  }), _: 2 }, 1032, ["class", "value", "disabled"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "class"]), [[pt, !o(v) && !o(_n)(w.data)]]), Ye(x("div", { class: $(o(i).be("panel", "empty")) }, [X(w.$slots, "empty", {}, () => [at(he(o(v) ? o(r)("el.transfer.noMatch") : o(r)("el.transfer.noData")), 1)])], 2), [[pt, o(v) || o(_n)(w.data)]])], 2), o(p) ? (k(), D("p", { key: 0, class: $(o(i).be("panel", "footer")) }, [X(w.$slots, "default")], 2)) : J("v-if", true)], 2));
} });
var Cc = ve(XM, [["__file", "transfer-panel.vue"]]);
const ZM = (e) => {
  const t = ra(e), n = y(() => e.data.reduce((s, r) => (s[r[t.value.key]] = r) && s, {})), l = y(() => e.data.filter((s) => !e.modelValue.includes(s[t.value.key]))), a = y(() => e.targetOrder === "original" ? e.data.filter((s) => e.modelValue.includes(s[t.value.key])) : e.modelValue.reduce((s, r) => {
    const i = n.value[r];
    return i && s.push(i), s;
  }, []));
  return { sourceData: l, targetData: a };
}, JM = (e, t, n) => {
  const l = ra(e), a = (i, u, c) => {
    n(Ae, i), n(et, i, u, c);
  };
  return { addToLeft: () => {
    const i = e.modelValue.slice();
    t.rightChecked.forEach((u) => {
      const c = i.indexOf(u);
      c > -1 && i.splice(c, 1);
    }), a(i, "left", t.rightChecked);
  }, addToRight: () => {
    let i = e.modelValue.slice();
    const u = e.data.filter((c) => {
      const d = c[l.value.key];
      return t.leftChecked.includes(d) && !e.modelValue.includes(d);
    }).map((c) => c[l.value.key]);
    i = e.targetOrder === "unshift" ? u.concat(i) : i.concat(u), e.targetOrder === "original" && (i = e.data.filter((c) => i.includes(c[l.value.key])).map((c) => c[l.value.key])), a(i, "right", t.leftChecked);
  } };
}, QM = (e, t) => ({ onSourceCheckedChange: (a, s) => {
  e.leftChecked = a, s && t(qp, a, s);
}, onTargetCheckedChange: (a, s) => {
  e.rightChecked = a, s && t(Gp, a, s);
} }), eO = K({ name: "ElTransfer" }), tO = K({ ...eO, props: so, emits: jM, setup(e, { expose: t, emit: n }) {
  const l = e, a = Yt(), { t: s } = ft(), r = de("transfer"), { formItem: i } = un(), u = Ct({ leftChecked: [], rightChecked: [] }), c = ra(l), { sourceData: d, targetData: f } = ZM(l), { onSourceCheckedChange: m, onTargetCheckedChange: h } = QM(u, n), { addToLeft: v, addToRight: p } = JM(l, u, n), b = N(), g = N(), T = (O) => {
    switch (O) {
      case "left":
        b.value.query = "";
        break;
      case "right":
        g.value.query = "";
        break;
    }
  }, w = y(() => l.buttonTexts.length === 2), C = y(() => l.titles[0] || s("el.transfer.titles.0")), S = y(() => l.titles[1] || s("el.transfer.titles.1")), E = y(() => l.filterPlaceholder || s("el.transfer.filterPlaceholder"));
  ue(() => l.modelValue, () => {
    var O;
    l.validateEvent && ((O = i == null ? void 0 : i.validate) == null || O.call(i, "change").catch((_) => void 0));
  });
  const M = y(() => (O) => {
    var _;
    if (l.renderContent) return l.renderContent(Oe, O);
    const I = (((_ = a.default) == null ? void 0 : _.call(a, { option: O })) || []).filter((R) => R.type !== ts);
    return I.length ? I : Oe("span", O[c.value.label] || O[c.value.key]);
  });
  return t({ clearQuery: T, leftPanel: b, rightPanel: g }), (O, _) => (k(), D("div", { class: $(o(r).b()) }, [z(Cc, { ref_key: "leftPanel", ref: b, data: o(d), "option-render": o(M), placeholder: o(E), title: o(C), filterable: O.filterable, format: O.format, "filter-method": O.filterMethod, "default-checked": O.leftDefaultChecked, props: l.props, onCheckedChange: o(m) }, { empty: j(() => [X(O.$slots, "left-empty")]), default: j(() => [X(O.$slots, "left-footer")]), _: 3 }, 8, ["data", "option-render", "placeholder", "title", "filterable", "format", "filter-method", "default-checked", "props", "onCheckedChange"]), x("div", { class: $(o(r).e("buttons")) }, [z(o(Qt), { type: "primary", class: $([o(r).e("button"), o(r).is("with-texts", o(w))]), disabled: o(_n)(u.rightChecked), onClick: o(v) }, { default: j(() => [z(o(Ee), null, { default: j(() => [z(o(El))]), _: 1 }), o(vt)(O.buttonTexts[0]) ? J("v-if", true) : (k(), D("span", { key: 0 }, he(O.buttonTexts[0]), 1))]), _: 1 }, 8, ["class", "disabled", "onClick"]), z(o(Qt), { type: "primary", class: $([o(r).e("button"), o(r).is("with-texts", o(w))]), disabled: o(_n)(u.leftChecked), onClick: o(p) }, { default: j(() => [o(vt)(O.buttonTexts[1]) ? J("v-if", true) : (k(), D("span", { key: 0 }, he(O.buttonTexts[1]), 1)), z(o(Ee), null, { default: j(() => [z(o(kn))]), _: 1 })]), _: 1 }, 8, ["class", "disabled", "onClick"])], 2), z(Cc, { ref_key: "rightPanel", ref: g, data: o(f), "option-render": o(M), placeholder: o(E), filterable: O.filterable, format: O.format, "filter-method": O.filterMethod, title: o(S), "default-checked": O.rightDefaultChecked, props: l.props, onCheckedChange: o(h) }, { empty: j(() => [X(O.$slots, "right-empty")]), default: j(() => [X(O.$slots, "right-footer")]), _: 3 }, 8, ["data", "option-render", "placeholder", "filterable", "format", "filter-method", "title", "default-checked", "props", "onCheckedChange"])], 2));
} });
var nO = ve(tO, [["__file", "transfer.vue"]]);
const lO = We(nO), ho = "$treeNodeId", wc = function(e, t) {
  !t || t[ho] || Object.defineProperty(t, ho, { value: e.id, enumerable: false, configurable: false, writable: false });
}, Hi = (e, t) => t == null ? void 0 : t[e || ho], Tr = (e, t, n) => {
  const l = e.value.currentNode;
  n();
  const a = e.value.currentNode;
  l !== a && t("current-change", a ? a.data : null, a);
}, Nr = (e) => {
  let t = true, n = true, l = true;
  for (let a = 0, s = e.length; a < s; a++) {
    const r = e[a];
    (r.checked !== true || r.indeterminate) && (t = false, r.disabled || (l = false)), (r.checked !== false || r.indeterminate) && (n = false);
  }
  return { all: t, none: n, allWithoutDisable: l, half: !t && !n };
}, Ao = function(e) {
  if (e.childNodes.length === 0 || e.loading) return;
  const { all: t, none: n, half: l } = Nr(e.childNodes);
  t ? (e.checked = true, e.indeterminate = false) : l ? (e.checked = false, e.indeterminate = true) : n && (e.checked = false, e.indeterminate = false);
  const a = e.parent;
  !a || a.level === 0 || e.store.checkStrictly || Ao(a);
}, Ca = function(e, t) {
  const n = e.store.props, l = e.data || {}, a = n[t];
  if (Qe(a)) return a(l, e);
  if (Be(a)) return l[a];
  if (vt(a)) {
    const s = l[t];
    return s === void 0 ? "" : s;
  }
};
let oO = 0;
class Hl {
  constructor(t) {
    this.id = oO++, this.text = null, this.checked = false, this.indeterminate = false, this.data = null, this.expanded = false, this.parent = null, this.visible = true, this.isCurrent = false, this.canFocus = false;
    for (const n in t) sn(t, n) && (this[n] = t[n]);
    this.level = 0, this.loaded = false, this.childNodes = [], this.loading = false, this.parent && (this.level = this.parent.level + 1);
  }
  initialize() {
    const t = this.store;
    if (!t) throw new Error("[Node]store is required!");
    t.registerNode(this);
    const n = t.props;
    if (n && typeof n.isLeaf < "u") {
      const s = Ca(this, "isLeaf");
      Tt(s) && (this.isLeafByUser = s);
    }
    if (t.lazy !== true && this.data ? (this.setData(this.data), t.defaultExpandAll && (this.expanded = true, this.canFocus = true)) : this.level > 0 && t.lazy && t.defaultExpandAll && !this.isLeafByUser && this.expand(), Se(this.data) || wc(this, this.data), !this.data) return;
    const l = t.defaultExpandedKeys, a = t.key;
    a && l && l.includes(this.key) && this.expand(null, t.autoExpandParent), a && t.currentNodeKey !== void 0 && this.key === t.currentNodeKey && (t.currentNode = this, t.currentNode.isCurrent = true), t.lazy && t._initDefaultCheckedNode(this), this.updateLeafState(), this.parent && (this.level === 1 || this.parent.expanded === true) && (this.canFocus = true);
  }
  setData(t) {
    Se(t) || wc(this, t), this.data = t, this.childNodes = [];
    let n;
    this.level === 0 && Se(this.data) ? n = this.data : n = Ca(this, "children") || [];
    for (let l = 0, a = n.length; l < a; l++) this.insertChild({ data: n[l] });
  }
  get label() {
    return Ca(this, "label");
  }
  get key() {
    const t = this.store.key;
    return this.data ? this.data[t] : null;
  }
  get disabled() {
    return Ca(this, "disabled");
  }
  get nextSibling() {
    const t = this.parent;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1) return t.childNodes[n + 1];
    }
    return null;
  }
  get previousSibling() {
    const t = this.parent;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1) return n > 0 ? t.childNodes[n - 1] : null;
    }
    return null;
  }
  contains(t, n = true) {
    return (this.childNodes || []).some((l) => l === t || n && l.contains(t));
  }
  remove() {
    const t = this.parent;
    t && t.removeChild(this);
  }
  insertChild(t, n, l) {
    if (!t) throw new Error("InsertChild error: child is required.");
    if (!(t instanceof Hl)) {
      if (!l) {
        const a = this.getChildren(true);
        a.includes(t.data) || (vt(n) || n < 0 ? a.push(t.data) : a.splice(n, 0, t.data));
      }
      Object.assign(t, { parent: this, store: this.store }), t = Ct(new Hl(t)), t instanceof Hl && t.initialize();
    }
    t.level = this.level + 1, vt(n) || n < 0 ? this.childNodes.push(t) : this.childNodes.splice(n, 0, t), this.updateLeafState();
  }
  insertBefore(t, n) {
    let l;
    n && (l = this.childNodes.indexOf(n)), this.insertChild(t, l);
  }
  insertAfter(t, n) {
    let l;
    n && (l = this.childNodes.indexOf(n), l !== -1 && (l += 1)), this.insertChild(t, l);
  }
  removeChild(t) {
    const n = this.getChildren() || [], l = n.indexOf(t.data);
    l > -1 && n.splice(l, 1);
    const a = this.childNodes.indexOf(t);
    a > -1 && (this.store && this.store.deregisterNode(t), t.parent = null, this.childNodes.splice(a, 1)), this.updateLeafState();
  }
  removeChildByData(t) {
    let n = null;
    for (let l = 0; l < this.childNodes.length; l++) if (this.childNodes[l].data === t) {
      n = this.childNodes[l];
      break;
    }
    n && this.removeChild(n);
  }
  expand(t, n) {
    const l = () => {
      if (n) {
        let a = this.parent;
        for (; a.level > 0; ) a.expanded = true, a = a.parent;
      }
      this.expanded = true, t && t(), this.childNodes.forEach((a) => {
        a.canFocus = true;
      });
    };
    this.shouldLoadData() ? this.loadData((a) => {
      Se(a) && (this.checked ? this.setChecked(true, true) : this.store.checkStrictly || Ao(this), l());
    }) : l();
  }
  doCreateChildren(t, n = {}) {
    t.forEach((l) => {
      this.insertChild(Object.assign({ data: l }, n), void 0, true);
    });
  }
  collapse() {
    this.expanded = false, this.childNodes.forEach((t) => {
      t.canFocus = false;
    });
  }
  shouldLoadData() {
    return this.store.lazy === true && this.store.load && !this.loaded;
  }
  updateLeafState() {
    if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser < "u") {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    const t = this.childNodes;
    if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
      this.isLeaf = !t || t.length === 0;
      return;
    }
    this.isLeaf = false;
  }
  setChecked(t, n, l, a) {
    if (this.indeterminate = t === "half", this.checked = t === true, this.store.checkStrictly) return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all: r, allWithoutDisable: i } = Nr(this.childNodes);
      !this.isLeaf && !r && i && (this.checked = false, t = false);
      const u = () => {
        if (n) {
          const c = this.childNodes;
          for (let m = 0, h = c.length; m < h; m++) {
            const v = c[m];
            a = a || t !== false;
            const p = v.disabled ? v.checked : a;
            v.setChecked(p, n, true, a);
          }
          const { half: d, all: f } = Nr(c);
          f || (this.checked = f, this.indeterminate = d);
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          u(), Ao(this);
        }, { checked: t !== false });
        return;
      } else u();
    }
    const s = this.parent;
    !s || s.level === 0 || l || Ao(s);
  }
  getChildren(t = false) {
    if (this.level === 0) return this.data;
    const n = this.data;
    if (!n) return null;
    const l = this.store.props;
    let a = "children";
    return l && (a = l.children || "children"), n[a] === void 0 && (n[a] = null), t && !n[a] && (n[a] = []), n[a];
  }
  updateChildren() {
    const t = this.getChildren() || [], n = this.childNodes.map((s) => s.data), l = {}, a = [];
    t.forEach((s, r) => {
      const i = s[ho];
      !!i && n.findIndex((c) => c[ho] === i) >= 0 ? l[i] = { index: r, data: s } : a.push({ index: r, data: s });
    }), this.store.lazy || n.forEach((s) => {
      l[s[ho]] || this.removeChildByData(s);
    }), a.forEach(({ index: s, data: r }) => {
      this.insertChild({ data: r }, s);
    }), this.updateLeafState();
  }
  loadData(t, n = {}) {
    if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || Object.keys(n).length)) {
      this.loading = true;
      const l = (s) => {
        this.childNodes = [], this.doCreateChildren(s, n), this.loaded = true, this.loading = false, this.updateLeafState(), t && t.call(this, s);
      }, a = () => {
        this.loading = false;
      };
      this.store.load(this, l, a);
    } else t && t.call(this);
  }
  eachNode(t) {
    const n = [this];
    for (; n.length; ) {
      const l = n.shift();
      n.unshift(...l.childNodes), t(l);
    }
  }
  reInitChecked() {
    this.store.checkStrictly || Ao(this);
  }
}
class aO {
  constructor(t) {
    this.currentNode = null, this.currentNodeKey = null;
    for (const n in t) sn(t, n) && (this[n] = t[n]);
    this.nodesMap = {};
  }
  initialize() {
    if (this.root = new Hl({ data: this.data, store: this }), this.root.initialize(), this.lazy && this.load) {
      const t = this.load;
      t(this.root, (n) => {
        this.root.doCreateChildren(n), this._initDefaultCheckedNodes();
      });
    } else this._initDefaultCheckedNodes();
  }
  filter(t) {
    const n = this.filterNodeMethod, l = this.lazy, a = async function(s) {
      const r = s.root ? s.root.childNodes : s.childNodes;
      for (const [i, u] of r.entries()) u.visible = n.call(u, t, u.data, u), i % 80 === 0 && i > 0 && await $e(), a(u);
      if (!s.visible && r.length) {
        let i = true;
        i = !r.some((u) => u.visible), s.root ? s.root.visible = i === false : s.visible = i === false;
      }
      t && s.visible && !s.isLeaf && (!l || s.loaded) && s.expand();
    };
    a(this);
  }
  setData(t) {
    t !== this.root.data ? (this.nodesMap = {}, this.root.setData(t), this._initDefaultCheckedNodes(), this.setCurrentNodeKey(this.currentNodeKey)) : this.root.updateChildren();
  }
  getNode(t) {
    if (t instanceof Hl) return t;
    const n = gt(t) ? Hi(this.key, t) : t;
    return this.nodesMap[n] || null;
  }
  insertBefore(t, n) {
    const l = this.getNode(n);
    l.parent.insertBefore({ data: t }, l);
  }
  insertAfter(t, n) {
    const l = this.getNode(n);
    l.parent.insertAfter({ data: t }, l);
  }
  remove(t) {
    const n = this.getNode(t);
    n && n.parent && (n === this.currentNode && (this.currentNode = null), n.parent.removeChild(n));
  }
  append(t, n) {
    const l = Wn(n) ? this.root : this.getNode(n);
    l && l.insertChild({ data: t });
  }
  _initDefaultCheckedNodes() {
    const t = this.defaultCheckedKeys || [], n = this.nodesMap;
    t.forEach((l) => {
      const a = n[l];
      a && a.setChecked(true, !this.checkStrictly);
    });
  }
  _initDefaultCheckedNode(t) {
    (this.defaultCheckedKeys || []).includes(t.key) && t.setChecked(true, !this.checkStrictly);
  }
  setDefaultCheckedKey(t) {
    t !== this.defaultCheckedKeys && (this.defaultCheckedKeys = t, this._initDefaultCheckedNodes());
  }
  registerNode(t) {
    const n = this.key;
    !t || !t.data || (n ? t.key !== void 0 && (this.nodesMap[t.key] = t) : this.nodesMap[t.id] = t);
  }
  deregisterNode(t) {
    !this.key || !t || !t.data || (t.childNodes.forEach((l) => {
      this.deregisterNode(l);
    }), delete this.nodesMap[t.key]);
  }
  getCheckedNodes(t = false, n = false) {
    const l = [], a = function(s) {
      (s.root ? s.root.childNodes : s.childNodes).forEach((i) => {
        (i.checked || n && i.indeterminate) && (!t || t && i.isLeaf) && l.push(i.data), a(i);
      });
    };
    return a(this), l;
  }
  getCheckedKeys(t = false) {
    return this.getCheckedNodes(t).map((n) => (n || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const t = [], n = function(l) {
      (l.root ? l.root.childNodes : l.childNodes).forEach((s) => {
        s.indeterminate && t.push(s.data), n(s);
      });
    };
    return n(this), t;
  }
  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((t) => (t || {})[this.key]);
  }
  _getAllNodes() {
    const t = [], n = this.nodesMap;
    for (const l in n) sn(n, l) && t.push(n[l]);
    return t;
  }
  updateChildren(t, n) {
    const l = this.nodesMap[t];
    if (!l) return;
    const a = l.childNodes;
    for (let s = a.length - 1; s >= 0; s--) {
      const r = a[s];
      this.remove(r.data);
    }
    for (let s = 0, r = n.length; s < r; s++) {
      const i = n[s];
      this.append(i, l.data);
    }
  }
  _setCheckedKeys(t, n = false, l) {
    const a = this._getAllNodes().sort((u, c) => u.level - c.level), s = /* @__PURE__ */ Object.create(null), r = Object.keys(l);
    a.forEach((u) => u.setChecked(false, false));
    const i = (u) => {
      u.childNodes.forEach((c) => {
        var d;
        s[c.data[t]] = true, (d = c.childNodes) != null && d.length && i(c);
      });
    };
    for (let u = 0, c = a.length; u < c; u++) {
      const d = a[u], f = d.data[t].toString();
      if (!r.includes(f)) {
        d.checked && !s[f] && d.setChecked(false, false);
        continue;
      }
      if (d.childNodes.length && i(d), d.isLeaf || this.checkStrictly) {
        d.setChecked(true, false);
        continue;
      }
      if (d.setChecked(true, true), n) {
        d.setChecked(false, false);
        const h = function(v) {
          v.childNodes.forEach((b) => {
            b.isLeaf || b.setChecked(false, false), h(b);
          });
        };
        h(d);
      }
    }
  }
  setCheckedNodes(t, n = false) {
    const l = this.key, a = {};
    t.forEach((s) => {
      a[(s || {})[l]] = true;
    }), this._setCheckedKeys(l, n, a);
  }
  setCheckedKeys(t, n = false) {
    this.defaultCheckedKeys = t;
    const l = this.key, a = {};
    t.forEach((s) => {
      a[s] = true;
    }), this._setCheckedKeys(l, n, a);
  }
  setDefaultExpandedKeys(t) {
    t = t || [], this.defaultExpandedKeys = t, t.forEach((n) => {
      const l = this.getNode(n);
      l && l.expand(null, this.autoExpandParent);
    });
  }
  setChecked(t, n, l) {
    const a = this.getNode(t);
    a && a.setChecked(!!n, l);
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(t) {
    const n = this.currentNode;
    n && (n.isCurrent = false), this.currentNode = t, this.currentNode.isCurrent = true;
  }
  setUserCurrentNode(t, n = true) {
    const l = t[this.key], a = this.nodesMap[l];
    this.setCurrentNode(a), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, true);
  }
  setCurrentNodeKey(t, n = true) {
    if (this.currentNodeKey = t, t == null) {
      this.currentNode && (this.currentNode.isCurrent = false), this.currentNode = null;
      return;
    }
    const l = this.getNode(t);
    l && (this.setCurrentNode(l), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, true));
  }
}
const sO = K({ name: "ElTreeNodeContent", props: { node: { type: Object, required: true }, renderContent: Function }, setup(e) {
  const t = de("tree"), n = we("NodeInstance"), l = we("RootTree");
  return () => {
    const a = e.node, { data: s, store: r } = a;
    return e.renderContent ? e.renderContent(Oe, { _self: n, node: a, data: s, store: r }) : X(l.ctx.slots, "default", { node: a, data: s }, () => [Oe("span", { class: t.be("node", "label") }, [a.label])]);
  };
} });
var rO = ve(sO, [["__file", "tree-node-content.vue"]]);
function Xp(e) {
  const t = we("TreeNodeMap", null), n = { treeNodeExpand: (l) => {
    e.node !== l && e.node.collapse();
  }, children: [] };
  return t && t.children.push(n), ut("TreeNodeMap", n), { broadcastExpanded: (l) => {
    if (e.accordion) for (const a of n.children) a.treeNodeExpand(l);
  } };
}
const Zp = Symbol("dragEvents");
function iO({ props: e, ctx: t, el$: n, dropIndicator$: l, store: a }) {
  const s = de("tree"), r = N({ showDropIndicator: false, draggingNode: null, dropNode: null, allowDrop: true, dropType: null });
  return ut(Zp, { treeNodeDragStart: ({ event: d, treeNode: f }) => {
    if (Qe(e.allowDrag) && !e.allowDrag(f.node)) return d.preventDefault(), false;
    d.dataTransfer.effectAllowed = "move";
    try {
      d.dataTransfer.setData("text/plain", "");
    } catch {
    }
    r.value.draggingNode = f, t.emit("node-drag-start", f.node, d);
  }, treeNodeDragOver: ({ event: d, treeNode: f }) => {
    const m = f, h = r.value.dropNode;
    h && h.node.id !== m.node.id && gn(h.$el, s.is("drop-inner"));
    const v = r.value.draggingNode;
    if (!v || !m) return;
    let p = true, b = true, g = true, T = true;
    Qe(e.allowDrop) && (p = e.allowDrop(v.node, m.node, "prev"), T = b = e.allowDrop(v.node, m.node, "inner"), g = e.allowDrop(v.node, m.node, "next")), d.dataTransfer.dropEffect = b || p || g ? "move" : "none", (p || b || g) && (h == null ? void 0 : h.node.id) !== m.node.id && (h && t.emit("node-drag-leave", v.node, h.node, d), t.emit("node-drag-enter", v.node, m.node, d)), p || b || g ? r.value.dropNode = m : r.value.dropNode = null, m.node.nextSibling === v.node && (g = false), m.node.previousSibling === v.node && (p = false), m.node.contains(v.node, false) && (b = false), (v.node === m.node || v.node.contains(m.node)) && (p = false, b = false, g = false);
    const w = m.$el.querySelector(`.${s.be("node", "content")}`).getBoundingClientRect(), C = n.value.getBoundingClientRect();
    let S;
    const E = p ? b ? 0.25 : g ? 0.45 : 1 : -1, M = g ? b ? 0.75 : p ? 0.55 : 0 : 1;
    let O = -9999;
    const _ = d.clientY - w.top;
    _ < w.height * E ? S = "before" : _ > w.height * M ? S = "after" : b ? S = "inner" : S = "none";
    const I = m.$el.querySelector(`.${s.be("node", "expand-icon")}`).getBoundingClientRect(), R = l.value;
    S === "before" ? O = I.top - C.top : S === "after" && (O = I.bottom - C.top), R.style.top = `${O}px`, R.style.left = `${I.right - C.left}px`, S === "inner" ? Dn(m.$el, s.is("drop-inner")) : gn(m.$el, s.is("drop-inner")), r.value.showDropIndicator = S === "before" || S === "after", r.value.allowDrop = r.value.showDropIndicator || T, r.value.dropType = S, t.emit("node-drag-over", v.node, m.node, d);
  }, treeNodeDragEnd: (d) => {
    const { draggingNode: f, dropType: m, dropNode: h } = r.value;
    if (d.preventDefault(), d.dataTransfer && (d.dataTransfer.dropEffect = "move"), f && h) {
      const v = { data: f.node.data };
      m !== "none" && f.node.remove(), m === "before" ? h.node.parent.insertBefore(v, h.node) : m === "after" ? h.node.parent.insertAfter(v, h.node) : m === "inner" && h.node.insertChild(v), m !== "none" && (a.value.registerNode(v), a.value.key && f.node.eachNode((p) => {
        var b;
        (b = a.value.nodesMap[p.data[a.value.key]]) == null || b.setChecked(p.checked, !a.value.checkStrictly);
      })), gn(h.$el, s.is("drop-inner")), t.emit("node-drag-end", f.node, h.node, m, d), m !== "none" && t.emit("node-drop", f.node, h.node, m, d);
    }
    f && !h && t.emit("node-drag-end", f.node, null, m, d), r.value.showDropIndicator = false, r.value.draggingNode = null, r.value.dropNode = null, r.value.allowDrop = true;
  } }), { dragState: r };
}
const uO = K({ name: "ElTreeNode", components: { ElCollapseTransition: ps, ElCheckbox: Fn, NodeContent: rO, ElIcon: Ee, Loading: Zn }, props: { node: { type: Hl, default: () => ({}) }, props: { type: Object, default: () => ({}) }, accordion: Boolean, renderContent: Function, renderAfterExpand: Boolean, showCheckbox: { type: Boolean, default: false } }, emits: ["node-expand"], setup(e, t) {
  const n = de("tree"), { broadcastExpanded: l } = Xp(e), a = we("RootTree"), s = N(false), r = N(false), i = N(), u = N(), c = N(), d = we(Zp), f = tt();
  ut("NodeInstance", f), e.node.expanded && (s.value = true, r.value = true);
  const m = a.props.props.children || "children";
  ue(() => {
    var _;
    const I = (_ = e.node.data) == null ? void 0 : _[m];
    return I && [...I];
  }, () => {
    e.node.updateChildren();
  }), ue(() => e.node.indeterminate, (_) => {
    p(e.node.checked, _);
  }), ue(() => e.node.checked, (_) => {
    p(_, e.node.indeterminate);
  }), ue(() => e.node.childNodes.length, () => e.node.reInitChecked()), ue(() => e.node.expanded, (_) => {
    $e(() => s.value = _), _ && (r.value = true);
  });
  const h = (_) => Hi(a.props.nodeKey, _.data), v = (_) => {
    const I = e.props.class;
    if (!I) return {};
    let R;
    if (Qe(I)) {
      const { data: P } = _;
      R = I(P, _);
    } else R = I;
    return Be(R) ? { [R]: true } : R;
  }, p = (_, I) => {
    (i.value !== _ || u.value !== I) && a.ctx.emit("check-change", e.node.data, _, I), i.value = _, u.value = I;
  }, b = (_) => {
    Tr(a.store, a.ctx.emit, () => {
      var I;
      if ((I = a == null ? void 0 : a.props) == null ? void 0 : I.nodeKey) {
        const P = h(e.node);
        a.store.value.setCurrentNodeKey(P);
      } else a.store.value.setCurrentNode(e.node);
    }), a.currentNode.value = e.node, a.props.expandOnClickNode && T(), (a.props.checkOnClickNode || e.node.isLeaf && a.props.checkOnClickLeaf && e.showCheckbox) && !e.node.disabled && w(!e.node.checked), a.ctx.emit("node-click", e.node.data, e.node, f, _);
  }, g = (_) => {
    var I;
    (I = a.instance.vnode.props) != null && I.onNodeContextmenu && (_.stopPropagation(), _.preventDefault()), a.ctx.emit("node-contextmenu", _, e.node.data, e.node, f);
  }, T = () => {
    e.node.isLeaf || (s.value ? (a.ctx.emit("node-collapse", e.node.data, e.node, f), e.node.collapse()) : e.node.expand(() => {
      t.emit("node-expand", e.node.data, e.node, f);
    }));
  }, w = (_) => {
    e.node.setChecked(_, !(a == null ? void 0 : a.props.checkStrictly)), $e(() => {
      const I = a.store.value;
      a.ctx.emit("check", e.node.data, { checkedNodes: I.getCheckedNodes(), checkedKeys: I.getCheckedKeys(), halfCheckedNodes: I.getHalfCheckedNodes(), halfCheckedKeys: I.getHalfCheckedKeys() });
    });
  };
  return { ns: n, node$: c, tree: a, expanded: s, childNodeRendered: r, oldChecked: i, oldIndeterminate: u, getNodeKey: h, getNodeClass: v, handleSelectChange: p, handleClick: b, handleContextMenu: g, handleExpandIconClick: T, handleCheckChange: w, handleChildNodeExpand: (_, I, R) => {
    l(I), a.ctx.emit("node-expand", _, I, R);
  }, handleDragStart: (_) => {
    a.props.draggable && d.treeNodeDragStart({ event: _, treeNode: e });
  }, handleDragOver: (_) => {
    _.preventDefault(), a.props.draggable && d.treeNodeDragOver({ event: _, treeNode: { $el: c.value, node: e.node } });
  }, handleDrop: (_) => {
    _.preventDefault();
  }, handleDragEnd: (_) => {
    a.props.draggable && d.treeNodeDragEnd(_);
  }, CaretRight: Kc };
} });
function cO(e, t, n, l, a, s) {
  const r = nt("el-icon"), i = nt("el-checkbox"), u = nt("loading"), c = nt("node-content"), d = nt("el-tree-node"), f = nt("el-collapse-transition");
  return Ye((k(), D("div", { ref: "node$", class: $([e.ns.b("node"), e.ns.is("expanded", e.expanded), e.ns.is("current", e.node.isCurrent), e.ns.is("hidden", !e.node.visible), e.ns.is("focusable", !e.node.disabled), e.ns.is("checked", !e.node.disabled && e.node.checked), e.getNodeClass(e.node)]), role: "treeitem", tabindex: "-1", "aria-expanded": e.expanded, "aria-disabled": e.node.disabled, "aria-checked": e.node.checked, draggable: e.tree.props.draggable, "data-key": e.getNodeKey(e.node), onClick: Re(e.handleClick, ["stop"]), onContextmenu: e.handleContextMenu, onDragstart: Re(e.handleDragStart, ["stop"]), onDragover: Re(e.handleDragOver, ["stop"]), onDragend: Re(e.handleDragEnd, ["stop"]), onDrop: Re(e.handleDrop, ["stop"]) }, [x("div", { class: $(e.ns.be("node", "content")), style: Me({ paddingLeft: (e.node.level - 1) * e.tree.props.indent + "px" }) }, [e.tree.props.icon || e.CaretRight ? (k(), oe(r, { key: 0, class: $([e.ns.be("node", "expand-icon"), e.ns.is("leaf", e.node.isLeaf), { expanded: !e.node.isLeaf && e.expanded }]), onClick: Re(e.handleExpandIconClick, ["stop"]) }, { default: j(() => [(k(), oe(Je(e.tree.props.icon || e.CaretRight)))]), _: 1 }, 8, ["class", "onClick"])) : J("v-if", true), e.showCheckbox ? (k(), oe(i, { key: 1, "model-value": e.node.checked, indeterminate: e.node.indeterminate, disabled: !!e.node.disabled, onClick: Re(() => {
  }, ["stop"]), onChange: e.handleCheckChange }, null, 8, ["model-value", "indeterminate", "disabled", "onClick", "onChange"])) : J("v-if", true), e.node.loading ? (k(), oe(r, { key: 2, class: $([e.ns.be("node", "loading-icon"), e.ns.is("loading")]) }, { default: j(() => [z(u)]), _: 1 }, 8, ["class"])) : J("v-if", true), z(c, { node: e.node, "render-content": e.renderContent }, null, 8, ["node", "render-content"])], 6), z(f, null, { default: j(() => [!e.renderAfterExpand || e.childNodeRendered ? Ye((k(), D("div", { key: 0, class: $(e.ns.be("node", "children")), role: "group", "aria-expanded": e.expanded }, [(k(true), D(Pe, null, it(e.node.childNodes, (m) => (k(), oe(d, { key: e.getNodeKey(m), "render-content": e.renderContent, "render-after-expand": e.renderAfterExpand, "show-checkbox": e.showCheckbox, node: m, accordion: e.accordion, props: e.props, onNodeExpand: e.handleChildNodeExpand }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]))), 128))], 10, ["aria-expanded"])), [[pt, e.expanded]]) : J("v-if", true)]), _: 1 })], 42, ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key", "onClick", "onContextmenu", "onDragstart", "onDragover", "onDragend", "onDrop"])), [[pt, e.node.visible]]);
}
var dO = ve(uO, [["render", cO], ["__file", "tree-node.vue"]]);
function fO({ el$: e }, t) {
  const n = de("tree"), l = Mt([]), a = Mt([]);
  Xe(() => {
    r();
  }), cl(() => {
    l.value = Array.from(e.value.querySelectorAll("[role=treeitem]")), a.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
  }), ue(a, (i) => {
    i.forEach((u) => {
      u.setAttribute("tabindex", "-1");
    });
  }), Et(e, "keydown", (i) => {
    const u = i.target;
    if (!u.className.includes(n.b("node"))) return;
    const c = i.code;
    l.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));
    const d = l.value.indexOf(u);
    let f;
    if ([ye.up, ye.down].includes(c)) {
      if (i.preventDefault(), c === ye.up) {
        f = d === -1 ? 0 : d !== 0 ? d - 1 : l.value.length - 1;
        const h = f;
        for (; !t.value.getNode(l.value[f].dataset.key).canFocus; ) {
          if (f--, f === h) {
            f = -1;
            break;
          }
          f < 0 && (f = l.value.length - 1);
        }
      } else {
        f = d === -1 ? 0 : d < l.value.length - 1 ? d + 1 : 0;
        const h = f;
        for (; !t.value.getNode(l.value[f].dataset.key).canFocus; ) {
          if (f++, f === h) {
            f = -1;
            break;
          }
          f >= l.value.length && (f = 0);
        }
      }
      f !== -1 && l.value[f].focus();
    }
    [ye.left, ye.right].includes(c) && (i.preventDefault(), u.click());
    const m = u.querySelector('[type="checkbox"]');
    [ye.enter, ye.numpadEnter, ye.space].includes(c) && m && (i.preventDefault(), m.click());
  });
  const r = () => {
    var i;
    l.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)), a.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
    const u = e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);
    if (u.length) {
      u[0].setAttribute("tabindex", "0");
      return;
    }
    (i = l.value[0]) == null || i.setAttribute("tabindex", "0");
  };
}
const pO = K({ name: "ElTree", components: { ElTreeNode: dO }, props: { data: { type: Array, default: () => [] }, emptyText: { type: String }, renderAfterExpand: { type: Boolean, default: true }, nodeKey: String, checkStrictly: Boolean, defaultExpandAll: Boolean, expandOnClickNode: { type: Boolean, default: true }, checkOnClickNode: Boolean, checkOnClickLeaf: { type: Boolean, default: true }, checkDescendants: { type: Boolean, default: false }, autoExpandParent: { type: Boolean, default: true }, defaultCheckedKeys: Array, defaultExpandedKeys: Array, currentNodeKey: [String, Number], renderContent: Function, showCheckbox: { type: Boolean, default: false }, draggable: { type: Boolean, default: false }, allowDrag: Function, allowDrop: Function, props: { type: Object, default: () => ({ children: "children", label: "label", disabled: "disabled" }) }, lazy: { type: Boolean, default: false }, highlightCurrent: Boolean, load: Function, filterNodeMethod: Function, accordion: Boolean, indent: { type: Number, default: 18 }, icon: { type: St } }, emits: ["check-change", "current-change", "node-click", "node-contextmenu", "node-collapse", "node-expand", "check", "node-drag-start", "node-drag-end", "node-drop", "node-drag-leave", "node-drag-enter", "node-drag-over"], setup(e, t) {
  const { t: n } = ft(), l = de("tree"), a = we(Po, null), s = N(new aO({ key: e.nodeKey, data: e.data, lazy: e.lazy, props: e.props, load: e.load, currentNodeKey: e.currentNodeKey, checkStrictly: e.checkStrictly, checkDescendants: e.checkDescendants, defaultCheckedKeys: e.defaultCheckedKeys, defaultExpandedKeys: e.defaultExpandedKeys, autoExpandParent: e.autoExpandParent, defaultExpandAll: e.defaultExpandAll, filterNodeMethod: e.filterNodeMethod }));
  s.value.initialize();
  const r = N(s.value.root), i = N(null), u = N(null), c = N(null), { broadcastExpanded: d } = Xp(e), { dragState: f } = iO({ props: e, ctx: t, el$: u, dropIndicator$: c, store: s });
  fO({ el$: u }, s);
  const m = y(() => {
    const { childNodes: V } = r.value, B = a ? a.hasFilteredOptions !== 0 : false;
    return (!V || V.length === 0 || V.every(({ visible: G }) => !G)) && !B;
  });
  ue(() => e.currentNodeKey, (V) => {
    s.value.setCurrentNodeKey(V);
  }), ue(() => e.defaultCheckedKeys, (V) => {
    s.value.setDefaultCheckedKey(V);
  }), ue(() => e.defaultExpandedKeys, (V) => {
    s.value.setDefaultExpandedKeys(V);
  }), ue(() => e.data, (V) => {
    s.value.setData(V);
  }, { deep: true }), ue(() => e.checkStrictly, (V) => {
    s.value.checkStrictly = V;
  });
  const h = (V) => {
    if (!e.filterNodeMethod) throw new Error("[Tree] filterNodeMethod is required when filter");
    s.value.filter(V);
  }, v = (V) => Hi(e.nodeKey, V.data), p = (V) => {
    if (!e.nodeKey) throw new Error("[Tree] nodeKey is required in getNodePath");
    const B = s.value.getNode(V);
    if (!B) return [];
    const G = [B.data];
    let U = B.parent;
    for (; U && U !== r.value; ) G.push(U.data), U = U.parent;
    return G.reverse();
  }, b = (V, B) => s.value.getCheckedNodes(V, B), g = (V) => s.value.getCheckedKeys(V), T = () => {
    const V = s.value.getCurrentNode();
    return V ? V.data : null;
  }, w = () => {
    if (!e.nodeKey) throw new Error("[Tree] nodeKey is required in getCurrentKey");
    const V = T();
    return V ? V[e.nodeKey] : null;
  }, C = (V, B) => {
    if (!e.nodeKey) throw new Error("[Tree] nodeKey is required in setCheckedNodes");
    s.value.setCheckedNodes(V, B);
  }, S = (V, B) => {
    if (!e.nodeKey) throw new Error("[Tree] nodeKey is required in setCheckedKeys");
    s.value.setCheckedKeys(V, B);
  }, E = (V, B, G) => {
    s.value.setChecked(V, B, G);
  }, M = () => s.value.getHalfCheckedNodes(), O = () => s.value.getHalfCheckedKeys(), _ = (V, B = true) => {
    if (!e.nodeKey) throw new Error("[Tree] nodeKey is required in setCurrentNode");
    Tr(s, t.emit, () => {
      d(V), s.value.setUserCurrentNode(V, B);
    });
  }, I = (V, B = true) => {
    if (!e.nodeKey) throw new Error("[Tree] nodeKey is required in setCurrentKey");
    Tr(s, t.emit, () => {
      d(), s.value.setCurrentNodeKey(V, B);
    });
  }, R = (V) => s.value.getNode(V), P = (V) => {
    s.value.remove(V);
  }, W = (V, B) => {
    s.value.append(V, B);
  }, te = (V, B) => {
    s.value.insertBefore(V, B);
  }, A = (V, B) => {
    s.value.insertAfter(V, B);
  }, L = (V, B, G) => {
    d(B), t.emit("node-expand", V, B, G);
  }, F = (V, B) => {
    if (!e.nodeKey) throw new Error("[Tree] nodeKey is required in updateKeyChild");
    s.value.updateChildren(V, B);
  };
  return ut("RootTree", { ctx: t, props: e, store: s, root: r, currentNode: i, instance: tt() }), ut(Jn, void 0), { ns: l, store: s, root: r, currentNode: i, dragState: f, el$: u, dropIndicator$: c, isEmpty: m, filter: h, getNodeKey: v, getNodePath: p, getCheckedNodes: b, getCheckedKeys: g, getCurrentNode: T, getCurrentKey: w, setCheckedNodes: C, setCheckedKeys: S, setChecked: E, getHalfCheckedNodes: M, getHalfCheckedKeys: O, setCurrentNode: _, setCurrentKey: I, t: n, getNode: R, remove: P, append: W, insertBefore: te, insertAfter: A, handleNodeExpand: L, updateKeyChildren: F };
} });
function vO(e, t, n, l, a, s) {
  const r = nt("el-tree-node");
  return k(), D("div", { ref: "el$", class: $([e.ns.b(), e.ns.is("dragging", !!e.dragState.draggingNode), e.ns.is("drop-not-allow", !e.dragState.allowDrop), e.ns.is("drop-inner", e.dragState.dropType === "inner"), { [e.ns.m("highlight-current")]: e.highlightCurrent }]), role: "tree" }, [(k(true), D(Pe, null, it(e.root.childNodes, (i) => (k(), oe(r, { key: e.getNodeKey(i), node: i, props: e.props, accordion: e.accordion, "render-after-expand": e.renderAfterExpand, "show-checkbox": e.showCheckbox, "render-content": e.renderContent, onNodeExpand: e.handleNodeExpand }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]))), 128)), e.isEmpty ? (k(), D("div", { key: 0, class: $(e.ns.e("empty-block")) }, [X(e.$slots, "empty", {}, () => {
    var i;
    return [x("span", { class: $(e.ns.e("empty-text")) }, he((i = e.emptyText) != null ? i : e.t("el.tree.emptyText")), 3)];
  })], 2)) : J("v-if", true), Ye(x("div", { ref: "dropIndicator$", class: $(e.ns.e("drop-indicator")) }, null, 2), [[pt, e.dragState.showDropIndicator]])], 2);
}
var hO = ve(pO, [["render", vO], ["__file", "tree.vue"]]);
const Ja = We(hO), mO = (e, { attrs: t, emit: n }, { select: l, tree: a, key: s }) => {
  const r = de("tree-select");
  return ue(() => e.data, () => {
    e.filterable && $e(() => {
      var u, c;
      (c = a.value) == null || c.filter((u = l.value) == null ? void 0 : u.states.inputValue);
    });
  }, { flush: "post" }), { ...Hn(tn(e), Object.keys(jl.props)), ...t, class: y(() => t.class), style: y(() => t.style), "onUpdate:modelValue": (u) => n(Ae, u), valueKey: s, popperClass: y(() => {
    const u = [r.e("popper")];
    return e.popperClass && u.push(e.popperClass), u.join(" ");
  }), filterMethod: (u = "") => {
    var c;
    e.filterMethod ? e.filterMethod(u) : e.remoteMethod ? e.remoteMethod(u) : (c = a.value) == null || c.filter(u);
  } };
}, gO = K({ extends: Ka, setup(e, t) {
  const n = Ka.setup(e, t);
  delete n.selectOptionClick;
  const l = tt().proxy;
  return $e(() => {
    n.select.states.cachedOptions.get(l.value) || n.select.onOptionCreate(l);
  }), ue(() => t.attrs.visible, (a) => {
    $e(() => {
      n.states.visible = a;
    });
  }, { immediate: true }), n;
}, methods: { selectOptionClick() {
  this.$el.parentElement.click();
} } });
function Ir(e) {
  return e || e === 0;
}
function Ki(e) {
  return Se(e) && e.length;
}
function no(e) {
  return Se(e) ? e : Ir(e) ? [e] : [];
}
function Ma(e, t, n, l, a) {
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (t(r, s, e, a)) return l ? l(r, s, e, a) : r;
    {
      const i = n(r);
      if (Ki(i)) {
        const u = Ma(i, t, n, l, r);
        if (u) return u;
      }
    }
  }
}
function Oa(e, t, n, l) {
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    t(s, a, e, l);
    const r = n(s);
    Ki(r) && Oa(r, t, n, s);
  }
}
const bO = (e, { attrs: t, slots: n, emit: l }, { select: a, tree: s, key: r }) => {
  ue(() => e.modelValue, () => {
    e.showCheckbox && $e(() => {
      const m = s.value;
      m && !Zt(m.getCheckedKeys(), no(e.modelValue)) && m.setCheckedKeys(no(e.modelValue));
    });
  }, { immediate: true, deep: true });
  const i = y(() => ({ value: r.value, label: "label", children: "children", disabled: "disabled", isLeaf: "isLeaf", ...e.props })), u = (m, h) => {
    var v;
    const p = i.value[m];
    return Qe(p) ? p(h, (v = s.value) == null ? void 0 : v.getNode(u("value", h))) : h[p];
  }, c = no(e.modelValue).map((m) => Ma(e.data || [], (h) => u("value", h) === m, (h) => u("children", h), (h, v, p, b) => b && u("value", b))).filter((m) => Ir(m)), d = y(() => {
    if (!e.renderAfterExpand && !e.lazy) return [];
    const m = [];
    return Oa(e.data.concat(e.cacheData), (h) => {
      const v = u("value", h);
      m.push({ value: v, currentLabel: u("label", h), isDisabled: u("disabled", h) });
    }, (h) => u("children", h)), m;
  }), f = () => {
    var m;
    return (m = s.value) == null ? void 0 : m.getCheckedKeys().filter((h) => {
      var v;
      const p = (v = s.value) == null ? void 0 : v.getNode(h);
      return !qt(p) && _n(p.childNodes);
    });
  };
  return { ...Hn(tn(e), Object.keys(Ja.props)), ...t, nodeKey: r, expandOnClickNode: y(() => !e.checkStrictly && e.expandOnClickNode), defaultExpandedKeys: y(() => e.defaultExpandedKeys ? e.defaultExpandedKeys.concat(c) : c), renderContent: (m, { node: h, data: v, store: p }) => m(gO, { value: u("value", v), label: u("label", v), disabled: u("disabled", v), visible: h.visible }, e.renderContent ? () => e.renderContent(m, { node: h, data: v, store: p }) : n.default ? () => n.default({ node: h, data: v, store: p }) : void 0), filterNodeMethod: (m, h, v) => e.filterNodeMethod ? e.filterNodeMethod(m, h, v) : m ? new RegExp(ai(m), "i").test(u("label", h) || "") : true, onNodeClick: (m, h, v) => {
    var p, b, g, T;
    if ((p = t.onNodeClick) == null || p.call(t, m, h, v), !(e.showCheckbox && e.checkOnClickNode)) {
      if (!e.showCheckbox && (e.checkStrictly || h.isLeaf)) {
        if (!u("disabled", m)) {
          const w = (b = a.value) == null ? void 0 : b.states.options.get(u("value", m));
          (g = a.value) == null || g.handleOptionSelect(w);
        }
      } else e.expandOnClickNode && v.proxy.handleExpandIconClick();
      (T = a.value) == null || T.focus();
    }
  }, onCheck: (m, h) => {
    var v;
    if (!e.showCheckbox) return;
    const p = u("value", m), b = {};
    Oa([s.value.store.root], (C) => b[C.key] = C, (C) => C.childNodes);
    const g = h.checkedKeys, T = e.multiple ? no(e.modelValue).filter((C) => !(C in b) && !g.includes(C)) : [], w = T.concat(g);
    if (e.checkStrictly) l(Ae, e.multiple ? w : w.includes(p) ? p : void 0);
    else if (e.multiple) {
      const C = f();
      l(Ae, T.concat(C));
    } else {
      const C = Ma([m], (M) => !Ki(u("children", M)) && !u("disabled", M), (M) => u("children", M)), S = C ? u("value", C) : void 0, E = Ir(e.modelValue) && !!Ma([m], (M) => u("value", M) === e.modelValue, (M) => u("children", M));
      l(Ae, S === e.modelValue || E ? void 0 : S);
    }
    $e(() => {
      var C;
      const S = no(e.modelValue);
      s.value.setCheckedKeys(S), (C = t.onCheck) == null || C.call(t, m, { checkedKeys: s.value.getCheckedKeys(), checkedNodes: s.value.getCheckedNodes(), halfCheckedKeys: s.value.getHalfCheckedKeys(), halfCheckedNodes: s.value.getHalfCheckedNodes() });
    }), (v = a.value) == null || v.focus();
  }, onNodeExpand: (m, h, v) => {
    var p;
    (p = t.onNodeExpand) == null || p.call(t, m, h, v), $e(() => {
      if (!e.checkStrictly && e.lazy && e.multiple && h.checked) {
        const b = {}, g = s.value.getCheckedKeys();
        Oa([s.value.store.root], (C) => b[C.key] = C, (C) => C.childNodes);
        const T = no(e.modelValue).filter((C) => !(C in b) && !g.includes(C)), w = f();
        l(Ae, T.concat(w));
      }
    });
  }, cacheOptions: d };
};
var yO = K({ props: { data: { type: Array, default: () => [] } }, setup(e) {
  const t = we(Po);
  return ue(() => e.data, () => {
    var n;
    e.data.forEach((a) => {
      t.states.cachedOptions.has(a.value) || t.states.cachedOptions.set(a.value, a);
    });
    const l = ((n = t.selectRef) == null ? void 0 : n.querySelectorAll("input")) || [];
    dt && !Array.from(l).includes(document.activeElement) && t.setSelected();
  }, { flush: "post", immediate: true }), () => {
  };
} });
const CO = K({ name: "ElTreeSelect", inheritAttrs: false, props: { ...jl.props, ...Ja.props, cacheData: { type: Array, default: () => [] } }, setup(e, t) {
  const { slots: n, expose: l } = t, a = N(), s = N(), r = y(() => e.nodeKey || e.valueKey || "value"), i = mO(e, t, { select: a, tree: s, key: r }), { cacheOptions: u, ...c } = bO(e, t, { select: a, tree: s, key: r }), d = Ct({});
  return l(d), Xe(() => {
    Object.assign(d, { ...Hn(s.value, ["filter", "updateKeyChildren", "getCheckedNodes", "setCheckedNodes", "getCheckedKeys", "setCheckedKeys", "setChecked", "getHalfCheckedNodes", "getHalfCheckedKeys", "getCurrentKey", "getCurrentNode", "setCurrentKey", "setCurrentNode", "getNode", "remove", "append", "insertBefore", "insertAfter"]), ...Hn(a.value, ["focus", "blur", "selectedLabel"]) });
  }), () => Oe(jl, Ct({ ...i, ref: (f) => a.value = f }), { ...n, default: () => [Oe(yO, { data: u.value }), Oe(Ja, Ct({ ...c, ref: (f) => s.value = f }))] });
} });
var wO = ve(CO, [["__file", "tree-select.vue"]]);
const SO = We(wO), Wi = Symbol(), kO = { key: -1, level: -1, data: {} };
var Fo = ((e) => (e.KEY = "id", e.LABEL = "label", e.CHILDREN = "children", e.DISABLED = "disabled", e.CLASS = "", e))(Fo || {}), _r = ((e) => (e.ADD = "add", e.DELETE = "delete", e))(_r || {});
const Jp = { type: Number, default: 26 }, EO = pe({ data: { type: Y(Array), default: () => Bt([]) }, emptyText: { type: String }, height: { type: Number, default: 200 }, props: { type: Y(Object), default: () => Bt({ children: "children", label: "label", disabled: "disabled", value: "id", class: "" }) }, highlightCurrent: { type: Boolean, default: false }, showCheckbox: { type: Boolean, default: false }, defaultCheckedKeys: { type: Y(Array), default: () => Bt([]) }, checkStrictly: { type: Boolean, default: false }, defaultExpandedKeys: { type: Y(Array), default: () => Bt([]) }, indent: { type: Number, default: 16 }, itemSize: Jp, icon: { type: St }, expandOnClickNode: { type: Boolean, default: true }, checkOnClickNode: { type: Boolean, default: false }, checkOnClickLeaf: { type: Boolean, default: true }, currentNodeKey: { type: Y([String, Number]) }, accordion: { type: Boolean, default: false }, filterMethod: { type: Y(Function) }, perfMode: { type: Boolean, default: true } }), $O = pe({ node: { type: Y(Object), default: () => Bt(kO) }, expanded: { type: Boolean, default: false }, checked: { type: Boolean, default: false }, indeterminate: { type: Boolean, default: false }, showCheckbox: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, current: { type: Boolean, default: false }, hiddenExpandIcon: { type: Boolean, default: false }, itemSize: Jp }), TO = pe({ node: { type: Y(Object), required: true } }), Qp = "node-click", ev = "node-drop", tv = "node-expand", nv = "node-collapse", lv = "current-change", ov = "check", av = "check-change", sv = "node-contextmenu", NO = { [Qp]: (e, t, n) => e && t && n, [ev]: (e, t, n) => e && t && n, [tv]: (e, t) => e && t, [nv]: (e, t) => e && t, [lv]: (e, t) => e && t, [ov]: (e, t) => e && t, [av]: (e, t) => e && Tt(t), [sv]: (e, t, n) => e && t && n }, IO = { click: (e, t) => !!(e && t), drop: (e, t) => !!(e && t), toggle: (e) => !!e, check: (e, t) => e && Tt(t) };
function _O(e, t) {
  const n = N(/* @__PURE__ */ new Set()), l = N(/* @__PURE__ */ new Set()), { emit: a } = tt();
  ue([() => t.value, () => e.defaultCheckedKeys], () => $e(() => {
    T(e.defaultCheckedKeys);
  }), { immediate: true });
  const s = () => {
    if (!t.value || !e.showCheckbox || e.checkStrictly) return;
    const { levelTreeNodeMap: w, maxLevel: C } = t.value, S = n.value, E = /* @__PURE__ */ new Set();
    for (let M = C - 1; M >= 1; --M) {
      const O = w.get(M);
      O && O.forEach((_) => {
        const I = _.children;
        if (I) {
          let R = true, P = false;
          for (const W of I) {
            const te = W.key;
            if (S.has(te)) P = true;
            else if (E.has(te)) {
              R = false, P = true;
              break;
            } else R = false;
          }
          R ? S.add(_.key) : P ? (E.add(_.key), S.delete(_.key)) : (S.delete(_.key), E.delete(_.key));
        }
      });
    }
    l.value = E;
  }, r = (w) => n.value.has(w.key), i = (w) => l.value.has(w.key), u = (w, C, S = true, E = true) => {
    const M = n.value, O = (_, I) => {
      M[I ? _r.ADD : _r.DELETE](_.key);
      const R = _.children;
      !e.checkStrictly && R && R.forEach((P) => {
        P.disabled || O(P, I);
      });
    };
    O(w, C), E && s(), S && c(w, C);
  }, c = (w, C) => {
    const { checkedNodes: S, checkedKeys: E } = v(), { halfCheckedNodes: M, halfCheckedKeys: O } = p();
    a(ov, w.data, { checkedKeys: E, checkedNodes: S, halfCheckedKeys: O, halfCheckedNodes: M }), a(av, w.data, C);
  };
  function d(w = false) {
    return v(w).checkedKeys;
  }
  function f(w = false) {
    return v(w).checkedNodes;
  }
  function m() {
    return p().halfCheckedKeys;
  }
  function h() {
    return p().halfCheckedNodes;
  }
  function v(w = false) {
    const C = [], S = [];
    if ((t == null ? void 0 : t.value) && e.showCheckbox) {
      const { treeNodeMap: E } = t.value;
      n.value.forEach((M) => {
        const O = E.get(M);
        O && (!w || w && O.isLeaf) && (S.push(M), C.push(O.data));
      });
    }
    return { checkedKeys: S, checkedNodes: C };
  }
  function p() {
    const w = [], C = [];
    if ((t == null ? void 0 : t.value) && e.showCheckbox) {
      const { treeNodeMap: S } = t.value;
      l.value.forEach((E) => {
        const M = S.get(E);
        M && (C.push(E), w.push(M.data));
      });
    }
    return { halfCheckedNodes: w, halfCheckedKeys: C };
  }
  function b(w) {
    n.value.clear(), l.value.clear(), $e(() => {
      T(w);
    });
  }
  function g(w, C) {
    if ((t == null ? void 0 : t.value) && e.showCheckbox) {
      const S = t.value.treeNodeMap.get(w);
      S && u(S, C, false);
    }
  }
  function T(w) {
    if (t == null ? void 0 : t.value) {
      const { treeNodeMap: C } = t.value;
      if (e.showCheckbox && C && (w == null ? void 0 : w.length) > 0) {
        for (const S of w) {
          const E = C.get(S);
          E && !r(E) && u(E, true, false, false);
        }
        s();
      }
    }
  }
  return { updateCheckedKeys: s, toggleCheckbox: u, isChecked: r, isIndeterminate: i, getCheckedKeys: d, getCheckedNodes: f, getHalfCheckedKeys: m, getHalfCheckedNodes: h, setChecked: g, setCheckedKeys: b };
}
function MO(e, t) {
  const n = N(/* @__PURE__ */ new Set([])), l = N(/* @__PURE__ */ new Set([])), a = y(() => Qe(e.filterMethod));
  function s(i) {
    var u;
    if (!a.value) return;
    const c = /* @__PURE__ */ new Set(), d = l.value, f = n.value, m = [], h = ((u = t.value) == null ? void 0 : u.treeNodes) || [], v = e.filterMethod;
    f.clear();
    function p(b) {
      b.forEach((g) => {
        m.push(g), (v == null ? void 0 : v(i, g.data, g)) ? m.forEach((w) => {
          c.add(w.key);
        }) : g.isLeaf && f.add(g.key);
        const T = g.children;
        if (T && p(T), !g.isLeaf) {
          if (!c.has(g.key)) f.add(g.key);
          else if (T) {
            let w = true;
            for (const C of T) if (!f.has(C.key)) {
              w = false;
              break;
            }
            w ? d.add(g.key) : d.delete(g.key);
          }
        }
        m.pop();
      });
    }
    return p(h), c;
  }
  function r(i) {
    return l.value.has(i.key);
  }
  return { hiddenExpandIconKeySet: l, hiddenNodeKeySet: n, doFilter: s, isForceHiddenExpandIcon: r };
}
function OO(e, t) {
  const n = N(new Set(e.defaultExpandedKeys)), l = N(), a = Mt(), s = N();
  ue(() => e.currentNodeKey, (se) => {
    l.value = se;
  }, { immediate: true }), ue(() => e.data, (se) => {
    ie(se);
  }, { immediate: true });
  const { isIndeterminate: r, isChecked: i, toggleCheckbox: u, getCheckedKeys: c, getCheckedNodes: d, getHalfCheckedKeys: f, getHalfCheckedNodes: m, setChecked: h, setCheckedKeys: v } = _O(e, a), { doFilter: p, hiddenNodeKeySet: b, isForceHiddenExpandIcon: g } = MO(e, a), T = y(() => {
    var se;
    return ((se = e.props) == null ? void 0 : se.value) || Fo.KEY;
  }), w = y(() => {
    var se;
    return ((se = e.props) == null ? void 0 : se.children) || Fo.CHILDREN;
  }), C = y(() => {
    var se;
    return ((se = e.props) == null ? void 0 : se.disabled) || Fo.DISABLED;
  }), S = y(() => {
    var se;
    return ((se = e.props) == null ? void 0 : se.label) || Fo.LABEL;
  }), E = y(() => {
    var se;
    const ke = n.value, De = b.value, qe = [], je = ((se = a.value) == null ? void 0 : se.treeNodes) || [], Le = [];
    for (let Ne = je.length - 1; Ne >= 0; --Ne) Le.push(je[Ne]);
    for (; Le.length; ) {
      const Ne = Le.pop();
      if (!De.has(Ne.key) && (qe.push(Ne), Ne.children && ke.has(Ne.key))) for (let Te = Ne.children.length - 1; Te >= 0; --Te) Le.push(Ne.children[Te]);
    }
    return qe;
  }), M = y(() => E.value.length > 0);
  function O(se) {
    const ke = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map();
    let qe = 1;
    function je(Ne, Te = 1, Ge = void 0) {
      var Ze;
      const ot = [];
      for (const st of Ne) {
        const Ce = R(st), Ue = { level: Te, key: Ce, data: st };
        Ue.label = W(st), Ue.parent = Ge;
        const ht = I(st);
        Ue.disabled = P(st), Ue.isLeaf = !ht || ht.length === 0, ht && ht.length && (Ue.children = je(ht, Te + 1, Ue)), ot.push(Ue), ke.set(Ce, Ue), De.has(Te) || De.set(Te, []), (Ze = De.get(Te)) == null || Ze.push(Ue);
      }
      return Te > qe && (qe = Te), ot;
    }
    const Le = je(se);
    return { treeNodeMap: ke, levelTreeNodeMap: De, maxLevel: qe, treeNodes: Le };
  }
  function _(se) {
    const ke = p(se);
    ke && (n.value = ke);
  }
  function I(se) {
    return se[w.value];
  }
  function R(se) {
    return se ? se[T.value] : "";
  }
  function P(se) {
    return se[C.value];
  }
  function W(se) {
    return se[S.value];
  }
  function te(se) {
    n.value.has(se.key) ? U(se) : G(se);
  }
  function A(se) {
    const ke = /* @__PURE__ */ new Set(), De = a.value.treeNodeMap;
    se.forEach((qe) => {
      let je = De.get(qe);
      for (; je && !ke.has(je.key); ) ke.add(je.key), je = je.parent;
    }), n.value = ke;
  }
  function L(se, ke) {
    t(Qp, se.data, se, ke), V(se), e.expandOnClickNode && te(se), e.showCheckbox && (e.checkOnClickNode || se.isLeaf && e.checkOnClickLeaf) && !se.disabled && u(se, !i(se), true);
  }
  function F(se, ke) {
    t(ev, se.data, se, ke);
  }
  function V(se) {
    ee(se) || (l.value = se.key, t(lv, se.data, se));
  }
  function B(se, ke) {
    u(se, ke);
  }
  function G(se) {
    const ke = n.value;
    if (a.value && e.accordion) {
      const { treeNodeMap: De } = a.value;
      ke.forEach((qe) => {
        const je = De.get(qe);
        se && se.level === (je == null ? void 0 : je.level) && ke.delete(qe);
      });
    }
    ke.add(se.key), t(tv, se.data, se);
  }
  function U(se) {
    n.value.delete(se.key), t(nv, se.data, se);
  }
  function ne(se) {
    return n.value.has(se.key);
  }
  function Z(se) {
    return !!se.disabled;
  }
  function ee(se) {
    const ke = l.value;
    return ke !== void 0 && ke === se.key;
  }
  function re() {
    var se, ke;
    if (l.value) return (ke = (se = a.value) == null ? void 0 : se.treeNodeMap.get(l.value)) == null ? void 0 : ke.data;
  }
  function le() {
    return l.value;
  }
  function Q(se) {
    l.value = se;
  }
  function ie(se) {
    $e(() => a.value = O(se));
  }
  function ce(se) {
    var ke;
    const De = gt(se) ? R(se) : se;
    return (ke = a.value) == null ? void 0 : ke.treeNodeMap.get(De);
  }
  function Ie(se, ke = "auto") {
    const De = ce(se);
    De && s.value && s.value.scrollToItem(E.value.indexOf(De), ke);
  }
  function me(se) {
    var ke;
    (ke = s.value) == null || ke.scrollTo(se);
  }
  return { tree: a, flattenTree: E, isNotEmpty: M, listRef: s, getKey: R, getChildren: I, toggleExpand: te, toggleCheckbox: u, isExpanded: ne, isChecked: i, isIndeterminate: r, isDisabled: Z, isCurrent: ee, isForceHiddenExpandIcon: g, handleNodeClick: L, handleNodeDrop: F, handleNodeCheck: B, getCurrentNode: re, getCurrentKey: le, setCurrentKey: Q, getCheckedKeys: c, getCheckedNodes: d, getHalfCheckedKeys: f, getHalfCheckedNodes: m, setChecked: h, setCheckedKeys: v, filter: _, setData: ie, getNode: ce, expandNode: G, collapseNode: U, setExpandedKeys: A, scrollToNode: Ie, scrollTo: me };
}
var PO = K({ name: "ElTreeNodeContent", props: TO, setup(e) {
  const t = we(Wi), n = de("tree");
  return () => {
    const l = e.node, { data: a } = l;
    return (t == null ? void 0 : t.ctx.slots.default) ? t.ctx.slots.default({ node: l, data: a }) : Oe("span", { class: n.be("node", "label") }, [l == null ? void 0 : l.label]);
  };
} });
const RO = K({ name: "ElTreeNode" }), LO = K({ ...RO, props: $O, emits: IO, setup(e, { emit: t }) {
  const n = e, l = we(Wi), a = de("tree"), s = y(() => {
    var h;
    return (h = l == null ? void 0 : l.props.indent) != null ? h : 16;
  }), r = y(() => {
    var h;
    return (h = l == null ? void 0 : l.props.icon) != null ? h : Kc;
  }), i = (h) => {
    const v = l == null ? void 0 : l.props.props.class;
    if (!v) return {};
    let p;
    if (Qe(v)) {
      const { data: b } = h;
      p = v(b, h);
    } else p = v;
    return Be(p) ? { [p]: true } : p;
  }, u = (h) => {
    t("click", n.node, h);
  }, c = (h) => {
    t("drop", n.node, h);
  }, d = () => {
    t("toggle", n.node);
  }, f = (h) => {
    t("check", n.node, h);
  }, m = (h) => {
    var v, p, b, g;
    (b = (p = (v = l == null ? void 0 : l.instance) == null ? void 0 : v.vnode) == null ? void 0 : p.props) != null && b.onNodeContextmenu && (h.stopPropagation(), h.preventDefault()), l == null ? void 0 : l.ctx.emit(sv, h, (g = n.node) == null ? void 0 : g.data, n.node);
  };
  return (h, v) => {
    var p, b, g;
    return k(), D("div", { ref: "node$", class: $([o(a).b("node"), o(a).is("expanded", h.expanded), o(a).is("current", h.current), o(a).is("focusable", !h.disabled), o(a).is("checked", !h.disabled && h.checked), i(h.node)]), role: "treeitem", tabindex: "-1", "aria-expanded": h.expanded, "aria-disabled": h.disabled, "aria-checked": h.checked, "data-key": (p = h.node) == null ? void 0 : p.key, onClick: Re(u, ["stop"]), onContextmenu: m, onDragover: Re(() => {
    }, ["prevent"]), onDragenter: Re(() => {
    }, ["prevent"]), onDrop: Re(c, ["stop"]) }, [x("div", { class: $(o(a).be("node", "content")), style: Me({ paddingLeft: `${(h.node.level - 1) * o(s)}px`, height: h.itemSize + "px" }) }, [o(r) ? (k(), oe(o(Ee), { key: 0, class: $([o(a).is("leaf", !!((b = h.node) != null && b.isLeaf)), o(a).is("hidden", h.hiddenExpandIcon), { expanded: !((g = h.node) != null && g.isLeaf) && h.expanded }, o(a).be("node", "expand-icon")]), onClick: Re(d, ["stop"]) }, { default: j(() => [(k(), oe(Je(o(r))))]), _: 1 }, 8, ["class", "onClick"])) : J("v-if", true), h.showCheckbox ? (k(), oe(o(Fn), { key: 1, "model-value": h.checked, indeterminate: h.indeterminate, disabled: h.disabled, onChange: f, onClick: Re(() => {
    }, ["stop"]) }, null, 8, ["model-value", "indeterminate", "disabled", "onClick"])) : J("v-if", true), z(o(PO), { node: h.node }, null, 8, ["node"])], 6)], 42, ["aria-expanded", "aria-disabled", "aria-checked", "data-key", "onClick", "onDragover", "onDragenter", "onDrop"]);
  };
} });
var BO = ve(LO, [["__file", "tree-node.vue"]]);
const DO = K({ name: "ElTreeV2" }), VO = K({ ...DO, props: EO, emits: NO, setup(e, { expose: t, emit: n }) {
  const l = e, a = Yt(), s = y(() => l.itemSize);
  ut(Wi, { ctx: { emit: n, slots: a }, props: l, instance: tt() }), ut(Jn, void 0);
  const { t: r } = ft(), i = de("tree"), { flattenTree: u, isNotEmpty: c, listRef: d, toggleExpand: f, isExpanded: m, isIndeterminate: h, isChecked: v, isDisabled: p, isCurrent: b, isForceHiddenExpandIcon: g, handleNodeClick: T, handleNodeDrop: w, handleNodeCheck: C, toggleCheckbox: S, getCurrentNode: E, getCurrentKey: M, setCurrentKey: O, getCheckedKeys: _, getCheckedNodes: I, getHalfCheckedKeys: R, getHalfCheckedNodes: P, setChecked: W, setCheckedKeys: te, filter: A, setData: L, getNode: F, expandNode: V, collapseNode: B, setExpandedKeys: G, scrollToNode: U, scrollTo: ne } = OO(l, n);
  return t({ toggleCheckbox: S, getCurrentNode: E, getCurrentKey: M, setCurrentKey: O, getCheckedKeys: _, getCheckedNodes: I, getHalfCheckedKeys: R, getHalfCheckedNodes: P, setChecked: W, setCheckedKeys: te, filter: A, setData: L, getNode: F, expandNode: V, collapseNode: B, setExpandedKeys: G, scrollToNode: U, scrollTo: ne }), (Z, ee) => (k(), D("div", { class: $([o(i).b(), { [o(i).m("highlight-current")]: Z.highlightCurrent }]), role: "tree" }, [o(c) ? (k(), oe(o(up), { key: 0, ref_key: "listRef", ref: d, "class-name": o(i).b("virtual-list"), data: o(u), total: o(u).length, height: Z.height, "item-size": o(s), "perf-mode": Z.perfMode }, { default: j(({ data: re, index: le, style: Q }) => [(k(), oe(BO, { key: re[le].key, style: Me(Q), node: re[le], expanded: o(m)(re[le]), "show-checkbox": Z.showCheckbox, checked: o(v)(re[le]), indeterminate: o(h)(re[le]), "item-size": o(s), disabled: o(p)(re[le]), current: o(b)(re[le]), "hidden-expand-icon": o(g)(re[le]), onClick: o(T), onToggle: o(f), onCheck: o(C), onDrop: o(w) }, null, 8, ["style", "node", "expanded", "show-checkbox", "checked", "indeterminate", "item-size", "disabled", "current", "hidden-expand-icon", "onClick", "onToggle", "onCheck", "onDrop"]))]), _: 1 }, 8, ["class-name", "data", "total", "height", "item-size", "perf-mode"])) : (k(), D("div", { key: 1, class: $(o(i).e("empty-block")) }, [X(Z.$slots, "empty", {}, () => {
    var re;
    return [x("span", { class: $(o(i).e("empty-text")) }, he((re = Z.emptyText) != null ? re : o(r)("el.tree.emptyText")), 3)];
  })], 2))], 2));
} });
var AO = ve(VO, [["__file", "tree.vue"]]);
const FO = We(AO), rv = Symbol("uploadContextKey"), zO = "ElUpload";
class xO extends Error {
  constructor(t, n, l, a) {
    super(t), this.name = "UploadAjaxError", this.status = n, this.method = l, this.url = a;
  }
}
function Sc(e, t, n) {
  let l;
  return n.response ? l = `${n.response.error || n.response}` : n.responseText ? l = `${n.responseText}` : l = `fail to ${t.method} ${e} ${n.status}`, new xO(l, n.status, t.method, e);
}
function HO(e) {
  const t = e.responseText || e.response;
  if (!t) return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
const KO = (e) => {
  typeof XMLHttpRequest > "u" && Kt(zO, "XMLHttpRequest is undefined");
  const t = new XMLHttpRequest(), n = e.action;
  t.upload && t.upload.addEventListener("progress", (s) => {
    const r = s;
    r.percent = s.total > 0 ? s.loaded / s.total * 100 : 0, e.onProgress(r);
  });
  const l = new FormData();
  if (e.data) for (const [s, r] of Object.entries(e.data)) Se(r) && r.length ? l.append(s, ...r) : l.append(s, r);
  l.append(e.filename, e.file, e.file.name), t.addEventListener("error", () => {
    e.onError(Sc(n, e, t));
  }), t.addEventListener("load", () => {
    if (t.status < 200 || t.status >= 300) return e.onError(Sc(n, e, t));
    e.onSuccess(HO(t));
  }), t.open(e.method, n, true), e.withCredentials && "withCredentials" in t && (t.withCredentials = true);
  const a = e.headers || {};
  if (a instanceof Headers) a.forEach((s, r) => t.setRequestHeader(r, s));
  else for (const [s, r] of Object.entries(a)) qt(r) || t.setRequestHeader(s, String(r));
  return t.send(l), t;
}, iv = ["text", "picture", "picture-card"];
let WO = 1;
const Mr = () => Date.now() + WO++, uv = pe({ action: { type: String, default: "#" }, headers: { type: Y(Object) }, method: { type: String, default: "post" }, data: { type: Y([Object, Function, Promise]), default: () => Bt({}) }, multiple: Boolean, name: { type: String, default: "file" }, drag: Boolean, withCredentials: Boolean, showFileList: { type: Boolean, default: true }, accept: { type: String, default: "" }, fileList: { type: Y(Array), default: () => Bt([]) }, autoUpload: { type: Boolean, default: true }, listType: { type: String, values: iv, default: "text" }, httpRequest: { type: Y(Function), default: KO }, disabled: Boolean, limit: Number }), jO = pe({ ...uv, beforeUpload: { type: Y(Function), default: Rt }, beforeRemove: { type: Y(Function) }, onRemove: { type: Y(Function), default: Rt }, onChange: { type: Y(Function), default: Rt }, onPreview: { type: Y(Function), default: Rt }, onSuccess: { type: Y(Function), default: Rt }, onProgress: { type: Y(Function), default: Rt }, onError: { type: Y(Function), default: Rt }, onExceed: { type: Y(Function), default: Rt }, crossorigin: { type: Y(String) } }), UO = pe({ files: { type: Y(Array), default: () => Bt([]) }, disabled: { type: Boolean, default: false }, handlePreview: { type: Y(Function), default: Rt }, listType: { type: String, values: iv, default: "text" }, crossorigin: { type: Y(String) } }), YO = { remove: (e) => !!e }, qO = K({ name: "ElUploadList" }), GO = K({ ...qO, props: UO, emits: YO, setup(e, { emit: t }) {
  const n = e, { t: l } = ft(), a = de("upload"), s = de("icon"), r = de("list"), i = cn(), u = N(false), c = y(() => [a.b("list"), a.bm("list", n.listType), a.is("disabled", n.disabled)]), d = (f) => {
    t("remove", f);
  };
  return (f, m) => (k(), oe(Bc, { tag: "ul", class: $(o(c)), name: o(r).b() }, { default: j(() => [(k(true), D(Pe, null, it(f.files, (h, v) => (k(), D("li", { key: h.uid || h.name, class: $([o(a).be("list", "item"), o(a).is(h.status), { focusing: u.value }]), tabindex: "0", onKeydown: $t((p) => !o(i) && d(h), ["delete"]), onFocus: (p) => u.value = true, onBlur: (p) => u.value = false, onClick: (p) => u.value = false }, [X(f.$slots, "default", { file: h, index: v }, () => [f.listType === "picture" || h.status !== "uploading" && f.listType === "picture-card" ? (k(), D("img", { key: 0, class: $(o(a).be("list", "item-thumbnail")), src: h.url, crossorigin: f.crossorigin, alt: "" }, null, 10, ["src", "crossorigin"])) : J("v-if", true), h.status === "uploading" || f.listType !== "picture-card" ? (k(), D("div", { key: 1, class: $(o(a).be("list", "item-info")) }, [x("a", { class: $(o(a).be("list", "item-name")), onClick: Re((p) => f.handlePreview(h), ["prevent"]) }, [z(o(Ee), { class: $(o(s).m("document")) }, { default: j(() => [z(o(ih))]), _: 1 }, 8, ["class"]), x("span", { class: $(o(a).be("list", "item-file-name")), title: h.name }, he(h.name), 11, ["title"])], 10, ["onClick"]), h.status === "uploading" ? (k(), oe(o(Qf), { key: 0, type: f.listType === "picture-card" ? "circle" : "line", "stroke-width": f.listType === "picture-card" ? 6 : 2, percentage: Number(h.percentage), style: Me(f.listType === "picture-card" ? "" : "margin-top: 0.5rem") }, null, 8, ["type", "stroke-width", "percentage", "style"])) : J("v-if", true)], 2)) : J("v-if", true), x("label", { class: $(o(a).be("list", "item-status-label")) }, [f.listType === "text" ? (k(), oe(o(Ee), { key: 0, class: $([o(s).m("upload-success"), o(s).m("circle-check")]) }, { default: j(() => [z(o(Fr))]), _: 1 }, 8, ["class"])) : ["picture-card", "picture"].includes(f.listType) ? (k(), oe(o(Ee), { key: 1, class: $([o(s).m("upload-success"), o(s).m("check")]) }, { default: j(() => [z(o(na))]), _: 1 }, 8, ["class"])) : J("v-if", true)], 2), o(i) ? J("v-if", true) : (k(), oe(o(Ee), { key: 2, class: $(o(s).m("close")), onClick: (p) => d(h) }, { default: j(() => [z(o(An))]), _: 2 }, 1032, ["class", "onClick"])), J(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"), J(" This is a bug which needs to be fixed "), J(" TODO: Fix the incorrect navigation interaction "), o(i) ? J("v-if", true) : (k(), D("i", { key: 3, class: $(o(s).m("close-tip")) }, he(o(l)("el.upload.deleteTip")), 3)), f.listType === "picture-card" ? (k(), D("span", { key: 4, class: $(o(a).be("list", "item-actions")) }, [x("span", { class: $(o(a).be("list", "item-preview")), onClick: (p) => f.handlePreview(h) }, [z(o(Ee), { class: $(o(s).m("zoom-in")) }, { default: j(() => [z(o(xc))]), _: 1 }, 8, ["class"])], 10, ["onClick"]), o(i) ? J("v-if", true) : (k(), D("span", { key: 0, class: $(o(a).be("list", "item-delete")), onClick: (p) => d(h) }, [z(o(Ee), { class: $(o(s).m("delete")) }, { default: j(() => [z(o(uh))]), _: 1 }, 8, ["class"])], 10, ["onClick"]))], 2)) : J("v-if", true)])], 42, ["onKeydown", "onFocus", "onBlur", "onClick"]))), 128)), X(f.$slots, "append")]), _: 3 }, 8, ["class", "name"]));
} });
var kc = ve(GO, [["__file", "upload-list.vue"]]);
const XO = pe({ disabled: { type: Boolean, default: false } }), ZO = { file: (e) => Se(e) }, cv = "ElUploadDrag", JO = K({ name: cv }), QO = K({ ...JO, props: XO, emits: ZO, setup(e, { emit: t }) {
  we(rv) || Kt(cv, "usage: <el-upload><el-upload-dragger /></el-upload>");
  const l = de("upload"), a = N(false), s = cn(), r = (u) => {
    if (s.value) return;
    a.value = false, u.stopPropagation();
    const c = Array.from(u.dataTransfer.files), d = u.dataTransfer.items || [];
    c.forEach((f, m) => {
      var h;
      const v = d[m], p = (h = v == null ? void 0 : v.webkitGetAsEntry) == null ? void 0 : h.call(v);
      p && (f.isDirectory = p.isDirectory);
    }), t("file", c);
  }, i = () => {
    s.value || (a.value = true);
  };
  return (u, c) => (k(), D("div", { class: $([o(l).b("dragger"), o(l).is("dragover", a.value)]), onDrop: Re(r, ["prevent"]), onDragover: Re(i, ["prevent"]), onDragleave: Re((d) => a.value = false, ["prevent"]) }, [X(u.$slots, "default")], 42, ["onDrop", "onDragover", "onDragleave"]));
} });
var eP = ve(QO, [["__file", "upload-dragger.vue"]]);
const tP = pe({ ...uv, beforeUpload: { type: Y(Function), default: Rt }, onRemove: { type: Y(Function), default: Rt }, onStart: { type: Y(Function), default: Rt }, onSuccess: { type: Y(Function), default: Rt }, onProgress: { type: Y(Function), default: Rt }, onError: { type: Y(Function), default: Rt }, onExceed: { type: Y(Function), default: Rt } }), nP = K({ name: "ElUploadContent", inheritAttrs: false }), lP = K({ ...nP, props: tP, setup(e, { expose: t }) {
  const n = e, l = de("upload"), a = cn(), s = Mt({}), r = Mt(), i = (p) => {
    if (p.length === 0) return;
    const { autoUpload: b, limit: g, fileList: T, multiple: w, onStart: C, onExceed: S } = n;
    if (g && T.length + p.length > g) {
      S(p, T);
      return;
    }
    w || (p = p.slice(0, 1));
    for (const E of p) {
      const M = E;
      M.uid = Mr(), C(M), b && u(M);
    }
  }, u = async (p) => {
    if (r.value.value = "", !n.beforeUpload) return d(p);
    let b, g = {};
    try {
      const w = n.data, C = n.beforeUpload(p);
      g = qs(n.data) ? Ba(n.data) : n.data, b = await C, qs(n.data) && Zt(w, g) && (g = Ba(n.data));
    } catch {
      b = false;
    }
    if (b === false) {
      n.onRemove(p);
      return;
    }
    let T = p;
    b instanceof Blob && (b instanceof File ? T = b : T = new File([b], p.name, { type: p.type })), d(Object.assign(T, { uid: p.uid }), g);
  }, c = async (p, b) => Qe(p) ? p(b) : p, d = async (p, b) => {
    const { headers: g, data: T, method: w, withCredentials: C, name: S, action: E, onProgress: M, onSuccess: O, onError: _, httpRequest: I } = n;
    try {
      b = await c(b ?? T, p);
    } catch {
      n.onRemove(p);
      return;
    }
    const { uid: R } = p, P = { headers: g || {}, withCredentials: C, file: p, data: b, method: w, filename: S, action: E, onProgress: (te) => {
      M(te, p);
    }, onSuccess: (te) => {
      O(te, p), delete s.value[R];
    }, onError: (te) => {
      _(te, p), delete s.value[R];
    } }, W = I(P);
    s.value[R] = W, W instanceof Promise && W.then(P.onSuccess, P.onError);
  }, f = (p) => {
    const b = p.target.files;
    b && i(Array.from(b));
  }, m = () => {
    a.value || (r.value.value = "", r.value.click());
  }, h = () => {
    m();
  };
  return t({ abort: (p) => {
    ud(s.value).filter(p ? ([g]) => String(p.uid) === g : () => true).forEach(([g, T]) => {
      T instanceof XMLHttpRequest && T.abort(), delete s.value[g];
    });
  }, upload: u }), (p, b) => (k(), D("div", { class: $([o(l).b(), o(l).m(p.listType), o(l).is("drag", p.drag), o(l).is("disabled", o(a))]), tabindex: o(a) ? "-1" : "0", onClick: m, onKeydown: $t(Re(h, ["self"]), ["enter", "space"]) }, [p.drag ? (k(), oe(eP, { key: 0, disabled: o(a), onFile: i }, { default: j(() => [X(p.$slots, "default")]), _: 3 }, 8, ["disabled"])) : X(p.$slots, "default", { key: 1 }), x("input", { ref_key: "inputRef", ref: r, class: $(o(l).e("input")), name: p.name, disabled: o(a), multiple: p.multiple, accept: p.accept, type: "file", onChange: f, onClick: Re(() => {
  }, ["stop"]) }, null, 42, ["name", "disabled", "multiple", "accept", "onClick"])], 42, ["tabindex", "onKeydown"]));
} });
var Ec = ve(lP, [["__file", "upload-content.vue"]]);
const $c = "ElUpload", Tc = (e) => {
  var t;
  (t = e.url) != null && t.startsWith("blob:") && URL.revokeObjectURL(e.url);
}, oP = (e, t) => {
  const n = td(e, "fileList", void 0, { passive: true }), l = (h) => n.value.find((v) => v.uid === h.uid);
  function a(h) {
    var v;
    (v = t.value) == null || v.abort(h);
  }
  function s(h = ["ready", "uploading", "success", "fail"]) {
    n.value = n.value.filter((v) => !h.includes(v.status));
  }
  function r(h) {
    n.value = n.value.filter((v) => v.uid !== h.uid);
  }
  const i = (h, v) => {
    const p = l(v);
    p && (console.error(h), p.status = "fail", r(p), e.onError(h, p, n.value), e.onChange(p, n.value));
  }, u = (h, v) => {
    const p = l(v);
    p && (e.onProgress(h, p, n.value), p.status = "uploading", p.percentage = Math.round(h.percent));
  }, c = (h, v) => {
    const p = l(v);
    p && (p.status = "success", p.response = h, e.onSuccess(h, p, n.value), e.onChange(p, n.value));
  }, d = (h) => {
    qt(h.uid) && (h.uid = Mr());
    const v = { name: h.name, percentage: 0, status: "ready", size: h.size, raw: h, uid: h.uid };
    if (e.listType === "picture-card" || e.listType === "picture") try {
      v.url = URL.createObjectURL(h);
    } catch (p) {
      p.message, e.onError(p, v, n.value);
    }
    n.value = [...n.value, v], e.onChange(v, n.value);
  }, f = async (h) => {
    const v = h instanceof File ? l(h) : h;
    v || Kt($c, "file to be removed not found");
    const p = (b) => {
      a(b), r(b), e.onRemove(b, n.value), Tc(b);
    };
    e.beforeRemove ? await e.beforeRemove(v, n.value) !== false && p(v) : p(v);
  };
  function m() {
    n.value.filter(({ status: h }) => h === "ready").forEach(({ raw: h }) => {
      var v;
      return h && ((v = t.value) == null ? void 0 : v.upload(h));
    });
  }
  return ue(() => e.listType, (h) => {
    h !== "picture-card" && h !== "picture" || (n.value = n.value.map((v) => {
      const { raw: p, url: b } = v;
      if (!b && p) try {
        v.url = URL.createObjectURL(p);
      } catch (g) {
        e.onError(g, v, n.value);
      }
      return v;
    }));
  }), ue(n, (h) => {
    for (const v of h) v.uid || (v.uid = Mr()), v.status || (v.status = "success");
  }, { immediate: true, deep: true }), { uploadFiles: n, abort: a, clearFiles: s, handleError: i, handleProgress: u, handleStart: d, handleSuccess: c, handleRemove: f, submit: m, revokeFileObjectURL: Tc };
}, aP = K({ name: "ElUpload" }), sP = K({ ...aP, props: jO, setup(e, { expose: t }) {
  const n = e, l = cn(), a = Mt(), { abort: s, submit: r, clearFiles: i, uploadFiles: u, handleStart: c, handleError: d, handleRemove: f, handleSuccess: m, handleProgress: h, revokeFileObjectURL: v } = oP(n, a), p = y(() => n.listType === "picture-card"), b = y(() => ({ ...n, fileList: u.value, onStart: c, onProgress: h, onSuccess: m, onError: d, onRemove: f }));
  return It(() => {
    u.value.forEach(v);
  }), ut(rv, { accept: yt(n, "accept") }), t({ abort: s, submit: r, clearFiles: i, handleStart: c, handleRemove: f }), (g, T) => (k(), D("div", null, [o(p) && g.showFileList ? (k(), oe(kc, { key: 0, disabled: o(l), "list-type": g.listType, files: o(u), crossorigin: g.crossorigin, "handle-preview": g.onPreview, onRemove: o(f) }, On({ append: j(() => [z(Ec, lt({ ref_key: "uploadRef", ref: a }, o(b)), { default: j(() => [g.$slots.trigger ? X(g.$slots, "trigger", { key: 0 }) : J("v-if", true), !g.$slots.trigger && g.$slots.default ? X(g.$slots, "default", { key: 1 }) : J("v-if", true)]), _: 3 }, 16)]), _: 2 }, [g.$slots.file ? { name: "default", fn: j(({ file: w, index: C }) => [X(g.$slots, "file", { file: w, index: C })]) } : void 0]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : J("v-if", true), !o(p) || o(p) && !g.showFileList ? (k(), oe(Ec, lt({ key: 1, ref_key: "uploadRef", ref: a }, o(b)), { default: j(() => [g.$slots.trigger ? X(g.$slots, "trigger", { key: 0 }) : J("v-if", true), !g.$slots.trigger && g.$slots.default ? X(g.$slots, "default", { key: 1 }) : J("v-if", true)]), _: 3 }, 16)) : J("v-if", true), g.$slots.trigger ? X(g.$slots, "default", { key: 2 }) : J("v-if", true), X(g.$slots, "tip"), !o(p) && g.showFileList ? (k(), oe(kc, { key: 3, disabled: o(l), "list-type": g.listType, files: o(u), crossorigin: g.crossorigin, "handle-preview": g.onPreview, onRemove: o(f) }, On({ _: 2 }, [g.$slots.file ? { name: "default", fn: j(({ file: w, index: C }) => [X(g.$slots, "file", { file: w, index: C })]) } : void 0]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : J("v-if", true)]));
} });
var rP = ve(sP, [["__file", "upload.vue"]]);
const iP = We(rP), uP = pe({ zIndex: { type: Number, default: 9 }, rotate: { type: Number, default: -22 }, width: Number, height: Number, image: String, content: { type: Y([String, Array]), default: "Element Plus" }, font: { type: Y(Object) }, gap: { type: Y(Array), default: () => [100, 100] }, offset: { type: Y(Array) } });
function cP(e) {
  return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function dP(e) {
  return Object.keys(e).map((t) => `${cP(t)}: ${e[t]};`).join(" ");
}
function fP() {
  return window.devicePixelRatio || 1;
}
const pP = (e, t) => {
  let n = false;
  return e.removedNodes.length && t && (n = Array.from(e.removedNodes).includes(t)), e.type === "attributes" && e.target === t && (n = true), n;
}, dv = 3;
function js(e, t, n = 1) {
  const l = document.createElement("canvas"), a = l.getContext("2d"), s = e * n, r = t * n;
  return l.setAttribute("width", `${s}px`), l.setAttribute("height", `${r}px`), a.save(), [a, l, s, r];
}
function vP() {
  function e(t, n, l, a, s, r, i, u) {
    const [c, d, f, m] = js(a, s, l);
    if (t instanceof HTMLImageElement) c.drawImage(t, 0, 0, f, m);
    else {
      const { color: U, fontSize: ne, fontStyle: Z, fontWeight: ee, fontFamily: re, textAlign: le, textBaseline: Q } = r, ie = Number(ne) * l;
      c.font = `${Z} normal ${ee} ${ie}px/${s}px ${re}`, c.fillStyle = U, c.textAlign = le, c.textBaseline = Q;
      const ce = Se(t) ? t : [t];
      ce == null ? void 0 : ce.forEach((Ie, me) => {
        c.fillText(Ie ?? "", f / 2, me * (ie + dv * l));
      });
    }
    const h = Math.PI / 180 * Number(n), v = Math.max(a, s), [p, b, g] = js(v, v, l);
    p.translate(g / 2, g / 2), p.rotate(h), f > 0 && m > 0 && p.drawImage(d, -f / 2, -m / 2);
    function T(U, ne) {
      const Z = U * Math.cos(h) - ne * Math.sin(h), ee = U * Math.sin(h) + ne * Math.cos(h);
      return [Z, ee];
    }
    let w = 0, C = 0, S = 0, E = 0;
    const M = f / 2, O = m / 2;
    [[0 - M, 0 - O], [0 + M, 0 - O], [0 + M, 0 + O], [0 - M, 0 + O]].forEach(([U, ne]) => {
      const [Z, ee] = T(U, ne);
      w = Math.min(w, Z), C = Math.max(C, Z), S = Math.min(S, ee), E = Math.max(E, ee);
    });
    const I = w + g / 2, R = S + g / 2, P = C - w, W = E - S, te = i * l, A = u * l, L = (P + te) * 2, F = W + A, [V, B] = js(L, F);
    function G(U = 0, ne = 0) {
      V.drawImage(b, I, R, P, W, U, ne, P, W);
    }
    return G(), G(P + te, -W / 2 - A / 2), G(P + te, +W / 2 + A / 2), [B.toDataURL(), L / l, F / l];
  }
  return e;
}
const hP = K({ name: "ElWatermark" }), mP = K({ ...hP, props: uP, setup(e) {
  const t = e, n = { position: "relative" }, l = y(() => {
    var I, R;
    return (R = (I = t.font) == null ? void 0 : I.color) != null ? R : "rgba(0,0,0,.15)";
  }), a = y(() => {
    var I, R;
    return (R = (I = t.font) == null ? void 0 : I.fontSize) != null ? R : 16;
  }), s = y(() => {
    var I, R;
    return (R = (I = t.font) == null ? void 0 : I.fontWeight) != null ? R : "normal";
  }), r = y(() => {
    var I, R;
    return (R = (I = t.font) == null ? void 0 : I.fontStyle) != null ? R : "normal";
  }), i = y(() => {
    var I, R;
    return (R = (I = t.font) == null ? void 0 : I.fontFamily) != null ? R : "sans-serif";
  }), u = y(() => {
    var I, R;
    return (R = (I = t.font) == null ? void 0 : I.textAlign) != null ? R : "center";
  }), c = y(() => {
    var I, R;
    return (R = (I = t.font) == null ? void 0 : I.textBaseline) != null ? R : "hanging";
  }), d = y(() => t.gap[0]), f = y(() => t.gap[1]), m = y(() => d.value / 2), h = y(() => f.value / 2), v = y(() => {
    var I, R;
    return (R = (I = t.offset) == null ? void 0 : I[0]) != null ? R : m.value;
  }), p = y(() => {
    var I, R;
    return (R = (I = t.offset) == null ? void 0 : I[1]) != null ? R : h.value;
  }), b = () => {
    const I = { zIndex: t.zIndex, position: "absolute", left: 0, top: 0, width: "100%", height: "100%", pointerEvents: "none", backgroundRepeat: "repeat" };
    let R = v.value - m.value, P = p.value - h.value;
    return R > 0 && (I.left = `${R}px`, I.width = `calc(100% - ${R}px)`, R = 0), P > 0 && (I.top = `${P}px`, I.height = `calc(100% - ${P}px)`, P = 0), I.backgroundPosition = `${R}px ${P}px`, I;
  }, g = Mt(null), T = Mt(), w = N(false), C = () => {
    T.value && (T.value.remove(), T.value = void 0);
  }, S = (I, R) => {
    var P;
    g.value && T.value && (w.value = true, T.value.setAttribute("style", dP({ ...b(), backgroundImage: `url('${I}')`, backgroundSize: `${Math.floor(R)}px` })), (P = g.value) == null || P.append(T.value), setTimeout(() => {
      w.value = false;
    }));
  }, E = (I) => {
    let R = 120, P = 64;
    const { image: W, content: te, width: A, height: L, rotate: F } = t;
    if (!W && I.measureText) {
      I.font = `${Number(a.value)}px ${i.value}`;
      const V = Se(te) ? te : [te];
      let B = 0, G = 0;
      V.forEach((Z) => {
        const { width: ee, fontBoundingBoxAscent: re, fontBoundingBoxDescent: le, actualBoundingBoxAscent: Q, actualBoundingBoxDescent: ie } = I.measureText(Z), ce = vt(re) ? Q + ie : re + le;
        ee > B && (B = Math.ceil(ee)), ce > G && (G = Math.ceil(ce));
      }), R = B, P = G * V.length + (V.length - 1) * dv;
      const U = Math.PI / 180 * Number(F), ne = Math.ceil(Math.abs(Math.sin(U) * P) / 2);
      R += ne;
    }
    return [A ?? R, L ?? P];
  }, M = vP(), O = () => {
    const R = document.createElement("canvas").getContext("2d"), P = t.image, W = t.content, te = t.rotate;
    if (R) {
      T.value || (T.value = document.createElement("div"));
      const A = fP(), [L, F] = E(R), V = (B) => {
        const [G, U] = M(B || "", te, A, L, F, { color: l.value, fontSize: a.value, fontStyle: r.value, fontWeight: s.value, fontFamily: i.value, textAlign: u.value, textBaseline: c.value }, d.value, f.value);
        S(G, U);
      };
      if (P) {
        const B = new Image();
        B.onload = () => {
          V(B);
        }, B.onerror = () => {
          V(W);
        }, B.crossOrigin = "anonymous", B.referrerPolicy = "no-referrer", B.src = P;
      } else V(W);
    }
  };
  return Xe(() => {
    O();
  }), ue(() => t, () => {
    O();
  }, { deep: true, flush: "post" }), It(() => {
    C();
  }), ed(g, (I) => {
    w.value || I.forEach((R) => {
      pP(R, T.value) && (C(), O());
    });
  }, { attributes: true, subtree: true, childList: true }), (I, R) => (k(), D("div", { ref_key: "containerRef", ref: g, style: Me([n]) }, [X(I.$slots, "default")], 4));
} });
var gP = ve(mP, [["__file", "watermark.vue"]]);
const bP = We(gP), yP = pe({ zIndex: { type: Number, default: 1001 }, visible: Boolean, fill: { type: String, default: "rgba(0,0,0,0.5)" }, pos: { type: Y(Object) }, targetAreaClickable: { type: Boolean, default: true } }), CP = (e, t, n, l, a) => {
  const s = N(null), r = () => {
    let f;
    return Be(e.value) ? f = document.querySelector(e.value) : Qe(e.value) ? f = e.value() : f = e.value, f;
  }, i = () => {
    const f = r();
    if (!f || !t.value) {
      s.value = null;
      return;
    }
    wP(f) || f.scrollIntoView(a.value);
    const { left: m, top: h, width: v, height: p } = f.getBoundingClientRect();
    s.value = { left: m, top: h, width: v, height: p, radius: 0 };
  };
  Xe(() => {
    ue([t, e], () => {
      i();
    }, { immediate: true }), window.addEventListener("resize", i);
  }), It(() => {
    window.removeEventListener("resize", i);
  });
  const u = (f) => {
    var m;
    return (m = Se(n.value.offset) ? n.value.offset[f] : n.value.offset) != null ? m : 6;
  }, c = y(() => {
    var f;
    if (!s.value) return s.value;
    const m = u(0), h = u(1), v = ((f = n.value) == null ? void 0 : f.radius) || 2;
    return { left: s.value.left - m, top: s.value.top - h, width: s.value.width + m * 2, height: s.value.height + h * 2, radius: v };
  }), d = y(() => {
    const f = r();
    return !l.value || !f || !window.DOMRect ? f || void 0 : { getBoundingClientRect() {
      var m, h, v, p;
      return window.DOMRect.fromRect({ width: ((m = c.value) == null ? void 0 : m.width) || 0, height: ((h = c.value) == null ? void 0 : h.height) || 0, x: ((v = c.value) == null ? void 0 : v.left) || 0, y: ((p = c.value) == null ? void 0 : p.top) || 0 });
    } };
  });
  return { mergedPosInfo: c, triggerTarget: d };
}, ws = Symbol("ElTour");
function wP(e) {
  const t = window.innerWidth || document.documentElement.clientWidth, n = window.innerHeight || document.documentElement.clientHeight, { top: l, right: a, bottom: s, left: r } = e.getBoundingClientRect();
  return l >= 0 && r >= 0 && a <= t && s <= n;
}
const SP = (e, t, n, l, a, s, r, i) => {
  const u = N(), c = N(), d = N({}), f = { x: u, y: c, placement: l, strategy: a, middlewareData: d }, m = y(() => {
    const g = [qc(o(s)), Ch(), wh(), kP()];
    return o(i) && o(n) && g.push(Uc({ element: o(n) })), g;
  }), h = async () => {
    if (!dt) return;
    const g = o(e), T = o(t);
    if (!g || !T) return;
    const w = await Yc(g, T, { placement: o(l), strategy: o(a), middleware: o(m) });
    bo(f).forEach((C) => {
      f[C].value = w[C];
    });
  }, v = y(() => {
    if (!o(e)) return { position: "fixed", top: "50%", left: "50%", transform: "translate3d(-50%, -50%, 0)", maxWidth: "100vw", zIndex: o(r) };
    const { overflow: g } = o(d);
    return { position: o(a), zIndex: o(r), top: o(c) != null ? `${o(c)}px` : "", left: o(u) != null ? `${o(u)}px` : "", maxWidth: (g == null ? void 0 : g.maxWidth) ? `${g == null ? void 0 : g.maxWidth}px` : "" };
  }), p = y(() => {
    if (!o(i)) return {};
    const { arrow: g } = o(d);
    return { left: (g == null ? void 0 : g.x) != null ? `${g == null ? void 0 : g.x}px` : "", top: (g == null ? void 0 : g.y) != null ? `${g == null ? void 0 : g.y}px` : "" };
  });
  let b;
  return Xe(() => {
    const g = o(e), T = o(t);
    g && T && (b = Sh(g, T, h)), an(() => {
      h();
    });
  }), It(() => {
    b && b();
  }), { update: h, contentStyle: v, arrowStyle: p };
}, kP = () => ({ name: "overflow", async fn(e) {
  const t = await kh(e);
  let n = 0;
  return t.left > 0 && (n = t.left), t.right > 0 && (n = t.right), { data: { maxWidth: e.rects.floating.width - n } };
} }), EP = K({ name: "ElTourMask", inheritAttrs: false }), $P = K({ ...EP, props: yP, setup(e) {
  const t = e, { ns: n } = we(ws), l = y(() => {
    var i, u;
    return (u = (i = t.pos) == null ? void 0 : i.radius) != null ? u : 2;
  }), a = y(() => {
    const i = l.value, u = `a${i},${i} 0 0 1`;
    return { topRight: `${u} ${i},${i}`, bottomRight: `${u} ${-i},${i}`, bottomLeft: `${u} ${-i},${-i}`, topLeft: `${u} ${i},${-i}` };
  }), s = y(() => {
    const i = window.innerWidth, u = window.innerHeight, c = a.value, d = `M${i},0 L0,0 L0,${u} L${i},${u} L${i},0 Z`, f = l.value;
    return t.pos ? `${d} M${t.pos.left + f},${t.pos.top} h${t.pos.width - f * 2} ${c.topRight} v${t.pos.height - f * 2} ${c.bottomRight} h${-t.pos.width + f * 2} ${c.bottomLeft} v${-t.pos.height + f * 2} ${c.topLeft} z` : d;
  }), r = y(() => ({ fill: t.fill, pointerEvents: "auto", cursor: "auto" }));
  return mi(yt(t, "visible"), { ns: n }), (i, u) => i.visible ? (k(), D("div", lt({ key: 0, class: o(n).e("mask"), style: { position: "fixed", left: 0, right: 0, top: 0, bottom: 0, zIndex: i.zIndex, pointerEvents: i.pos && i.targetAreaClickable ? "none" : "auto" } }, i.$attrs), [(k(), D("svg", { style: { width: "100%", height: "100%" } }, [x("path", { class: $(o(n).e("hollow")), style: Me(o(r)), d: o(s) }, null, 14, ["d"])]))], 16)) : J("v-if", true);
} });
var TP = ve($P, [["__file", "mask.vue"]]);
const NP = ["absolute", "fixed"], IP = ["top-start", "top-end", "top", "bottom-start", "bottom-end", "bottom", "left-start", "left-end", "left", "right-start", "right-end", "right"], ji = pe({ placement: { type: Y(String), values: IP, default: "bottom" }, reference: { type: Y(Object), default: null }, strategy: { type: Y(String), values: NP, default: "absolute" }, offset: { type: Number, default: 10 }, showArrow: Boolean, zIndex: { type: Number, default: 2001 } }), _P = { close: () => true }, MP = K({ name: "ElTourContent" }), OP = K({ ...MP, props: ji, emits: _P, setup(e, { emit: t }) {
  const n = e, l = N(n.placement), a = N(n.strategy), s = N(null), r = N(null);
  ue(() => n.placement, () => {
    l.value = n.placement;
  });
  const { contentStyle: i, arrowStyle: u } = SP(yt(n, "reference"), s, r, l, a, yt(n, "offset"), yt(n, "zIndex"), yt(n, "showArrow")), c = y(() => l.value.split("-")[0]), { ns: d } = we(ws), f = () => {
    t("close");
  }, m = (h) => {
    h.detail.focusReason === "pointer" && h.preventDefault();
  };
  return (h, v) => (k(), D("div", { ref_key: "contentRef", ref: s, style: Me(o(i)), class: $(o(d).e("content")), "data-side": o(c), tabindex: "-1" }, [z(o(_o), { loop: "", trapped: "", "focus-start-el": "container", "focus-trap-el": s.value || void 0, onReleaseRequested: f, onFocusoutPrevented: m }, { default: j(() => [X(h.$slots, "default")]), _: 3 }, 8, ["focus-trap-el"]), h.showArrow ? (k(), D("span", { key: 0, ref_key: "arrowRef", ref: r, style: Me(o(u)), class: $(o(d).e("arrow")) }, null, 6)) : J("v-if", true)], 14, ["data-side"]));
} });
var PP = ve(OP, [["__file", "content.vue"]]), RP = K({ name: "ElTourSteps", props: { current: { type: Number, default: 0 } }, emits: ["update-total"], setup(e, { slots: t, emit: n }) {
  let l = 0;
  return () => {
    var a, s;
    const r = (a = t.default) == null ? void 0 : a.call(t), i = [];
    let u = 0;
    function c(d) {
      Se(d) && d.forEach((f) => {
        var m;
        ((m = (f == null ? void 0 : f.type) || {}) == null ? void 0 : m.name) === "ElTourStep" && (i.push(f), u += 1);
      });
    }
    return r.length && c(al((s = r[0]) == null ? void 0 : s.children)), l !== u && (l = u, n("update-total", u)), i.length ? i[e.current] : null;
  };
} });
const LP = pe({ modelValue: Boolean, current: { type: Number, default: 0 }, showArrow: { type: Boolean, default: true }, showClose: { type: Boolean, default: true }, closeIcon: { type: St }, placement: ji.placement, contentStyle: { type: Y([Object]) }, mask: { type: Y([Boolean, Object]), default: true }, gap: { type: Y(Object), default: () => ({ offset: 6, radius: 2 }) }, zIndex: { type: Number }, scrollIntoViewOptions: { type: Y([Boolean, Object]), default: () => ({ block: "center" }) }, type: { type: Y(String) }, appendTo: { type: Y([String, Object]), default: "body" }, closeOnPressEscape: { type: Boolean, default: true }, targetAreaClickable: { type: Boolean, default: true } }), BP = { [Ae]: (e) => Tt(e), "update:current": (e) => _e(e), close: (e) => _e(e), finish: () => true, change: (e) => _e(e) }, DP = K({ name: "ElTour" }), VP = K({ ...DP, props: LP, emits: BP, setup(e, { emit: t }) {
  const n = e, l = de("tour"), a = N(0), s = N(), r = td(n, "current", t, { passive: true }), i = y(() => {
    var _;
    return (_ = s.value) == null ? void 0 : _.target;
  }), u = y(() => [l.b(), b.value === "primary" ? l.m("primary") : ""]), c = y(() => {
    var _;
    return ((_ = s.value) == null ? void 0 : _.placement) || n.placement;
  }), d = y(() => {
    var _, I;
    return (I = (_ = s.value) == null ? void 0 : _.contentStyle) != null ? I : n.contentStyle;
  }), f = y(() => {
    var _, I;
    return (I = (_ = s.value) == null ? void 0 : _.mask) != null ? I : n.mask;
  }), m = y(() => !!f.value && n.modelValue), h = y(() => Tt(f.value) ? void 0 : f.value), v = y(() => {
    var _, I;
    return !!i.value && ((I = (_ = s.value) == null ? void 0 : _.showArrow) != null ? I : n.showArrow);
  }), p = y(() => {
    var _, I;
    return (I = (_ = s.value) == null ? void 0 : _.scrollIntoViewOptions) != null ? I : n.scrollIntoViewOptions;
  }), b = y(() => {
    var _, I;
    return (I = (_ = s.value) == null ? void 0 : _.type) != null ? I : n.type;
  }), { nextZIndex: g } = No(), T = g(), w = y(() => {
    var _;
    return (_ = n.zIndex) != null ? _ : T;
  }), { mergedPosInfo: C, triggerTarget: S } = CP(i, yt(n, "modelValue"), yt(n, "gap"), f, p);
  ue(() => n.modelValue, (_) => {
    _ || (r.value = 0);
  });
  const E = () => {
    n.closeOnPressEscape && (t(Ae, false), t("close", r.value));
  }, M = (_) => {
    a.value = _;
  }, O = Yt();
  return ut(ws, { currentStep: s, current: r, total: a, showClose: yt(n, "showClose"), closeIcon: yt(n, "closeIcon"), mergedType: b, ns: l, slots: O, updateModelValue(_) {
    t(Ae, _);
  }, onClose() {
    t("close", r.value);
  }, onFinish() {
    t("finish");
  }, onChange() {
    t(et, r.value);
  } }), (_, I) => (k(), D(Pe, null, [z(o(Mo), { to: _.appendTo }, { default: j(() => {
    var R, P;
    return [x("div", lt({ class: o(u) }, _.$attrs), [z(TP, { visible: o(m), fill: (R = o(h)) == null ? void 0 : R.color, style: Me((P = o(h)) == null ? void 0 : P.style), pos: o(C), "z-index": o(w), "target-area-clickable": _.targetAreaClickable }, null, 8, ["visible", "fill", "style", "pos", "z-index", "target-area-clickable"]), _.modelValue ? (k(), oe(PP, { key: o(r), reference: o(S), placement: o(c), "show-arrow": o(v), "z-index": o(w), style: Me(o(d)), onClose: E }, { default: j(() => [z(o(RP), { current: o(r), onUpdateTotal: M }, { default: j(() => [X(_.$slots, "default")]), _: 3 }, 8, ["current"])]), _: 3 }, 8, ["reference", "placement", "show-arrow", "z-index", "style"])) : J("v-if", true)], 16)];
  }), _: 3 }, 8, ["to"]), J(" just for IDE "), J("v-if", true)], 64));
} });
var AP = ve(VP, [["__file", "tour.vue"]]);
const FP = pe({ target: { type: Y([String, Object, Function]) }, title: String, description: String, showClose: { type: Boolean, default: void 0 }, closeIcon: { type: St }, showArrow: { type: Boolean, default: void 0 }, placement: ji.placement, mask: { type: Y([Boolean, Object]), default: void 0 }, contentStyle: { type: Y([Object]) }, prevButtonProps: { type: Y(Object) }, nextButtonProps: { type: Y(Object) }, scrollIntoViewOptions: { type: Y([Boolean, Object]), default: void 0 }, type: { type: Y(String) } }), zP = { close: () => true }, xP = K({ name: "ElTourStep" }), HP = K({ ...xP, props: FP, emits: zP, setup(e, { emit: t }) {
  const n = e, { Close: l } = hd, { t: a } = ft(), { currentStep: s, current: r, total: i, showClose: u, closeIcon: c, mergedType: d, ns: f, slots: m, updateModelValue: h, onClose: v, onFinish: p, onChange: b } = we(ws);
  ue(n, (O) => {
    s.value = O;
  }, { immediate: true });
  const g = y(() => {
    var O;
    return (O = n.showClose) != null ? O : u.value;
  }), T = y(() => {
    var O, _;
    return (_ = (O = n.closeIcon) != null ? O : c.value) != null ? _ : l;
  }), w = (O) => {
    if (O) return Hv(O, ["children", "onClick"]);
  }, C = () => {
    var O, _;
    r.value -= 1, (O = n.prevButtonProps) != null && O.onClick && ((_ = n.prevButtonProps) == null || _.onClick()), b();
  }, S = () => {
    var O;
    r.value >= i.value - 1 ? E() : r.value += 1, (O = n.nextButtonProps) != null && O.onClick && n.nextButtonProps.onClick(), b();
  }, E = () => {
    M(), p();
  }, M = () => {
    h(false), v(), t("close");
  };
  return (O, _) => (k(), D(Pe, null, [o(g) ? (k(), D("button", { key: 0, "aria-label": "Close", class: $(o(f).e("closebtn")), type: "button", onClick: M }, [z(o(Ee), { class: $(o(f).e("close")) }, { default: j(() => [(k(), oe(Je(o(T))))]), _: 1 }, 8, ["class"])], 2)) : J("v-if", true), x("header", { class: $([o(f).e("header"), { "show-close": o(u) }]) }, [X(O.$slots, "header", {}, () => [x("span", { role: "heading", class: $(o(f).e("title")) }, he(O.title), 3)])], 2), x("div", { class: $(o(f).e("body")) }, [X(O.$slots, "default", {}, () => [x("span", null, he(O.description), 1)])], 2), x("footer", { class: $(o(f).e("footer")) }, [x("div", { class: $(o(f).b("indicators")) }, [o(m).indicators ? (k(), oe(Je(o(m).indicators), { key: 0, current: o(r), total: o(i) }, null, 8, ["current", "total"])) : (k(true), D(Pe, { key: 1 }, it(o(i), (I, R) => (k(), D("span", { key: I, class: $([o(f).b("indicator"), R === o(r) ? "is-active" : ""]) }, null, 2))), 128))], 2), x("div", { class: $(o(f).b("buttons")) }, [o(r) > 0 ? (k(), oe(o(Qt), lt({ key: 0, size: "small", type: o(d) }, w(O.prevButtonProps), { onClick: C }), { default: j(() => {
    var I, R;
    return [at(he((R = (I = O.prevButtonProps) == null ? void 0 : I.children) != null ? R : o(a)("el.tour.previous")), 1)];
  }), _: 1 }, 16, ["type"])) : J("v-if", true), o(r) <= o(i) - 1 ? (k(), oe(o(Qt), lt({ key: 1, size: "small", type: o(d) === "primary" ? "default" : "primary" }, w(O.nextButtonProps), { onClick: S }), { default: j(() => {
    var I, R;
    return [at(he((R = (I = O.nextButtonProps) == null ? void 0 : I.children) != null ? R : o(r) === o(i) - 1 ? o(a)("el.tour.finish") : o(a)("el.tour.next")), 1)];
  }), _: 1 }, 16, ["type"])) : J("v-if", true)], 2)], 2)], 64));
} });
var fv = ve(HP, [["__file", "step.vue"]]);
const KP = We(AP, { TourStep: fv }), WP = Vt(fv), jP = pe({ container: { type: Y([String, Object]) }, offset: { type: Number, default: 0 }, bound: { type: Number, default: 15 }, duration: { type: Number, default: 300 }, marker: { type: Boolean, default: true }, type: { type: Y(String), default: "default" }, direction: { type: Y(String), default: "vertical" }, selectScrollTop: { type: Boolean, default: false } }), UP = { change: (e) => Be(e), click: (e, t) => e instanceof MouseEvent && (Be(t) || vt(t)) }, pv = Symbol("anchor"), wa = (e) => {
  if (!dt || e === "") return null;
  if (Be(e)) try {
    return document.querySelector(e);
  } catch {
    return null;
  }
  return e;
};
function YP(e) {
  let t = 0;
  const n = (...l) => {
    t && Wl(t), t = Il(() => {
      e(...l), t = 0;
    });
  };
  return n.cancel = () => {
    Wl(t), t = 0;
  }, n;
}
const qP = K({ name: "ElAnchor" }), GP = K({ ...qP, props: jP, emits: UP, setup(e, { expose: t, emit: n }) {
  const l = e, a = N(""), s = N(null), r = N(null), i = N(), u = {};
  let c = false, d = 0;
  const f = de("anchor"), m = y(() => [f.b(), l.type === "underline" ? f.m("underline") : "", f.m(l.direction)]), h = (O) => {
    u[O.href] = O.el;
  }, v = (O) => {
    delete u[O];
  }, p = (O) => {
    a.value !== O && (a.value = O, n(et, O));
  };
  let b = null;
  const g = (O) => {
    if (!i.value) return;
    const _ = wa(O);
    if (!_) return;
    b && b(), c = true;
    const I = du(_, i.value), R = or(_, I), P = I.scrollHeight - I.clientHeight, W = Math.min(R - l.offset, P);
    b = Cm(i.value, d, W, l.duration, () => {
      setTimeout(() => {
        c = false;
      }, 20);
    });
  }, T = (O) => {
    O && (p(O), g(O));
  }, w = (O, _) => {
    n("click", O, _), T(_);
  }, C = YP(() => {
    i.value && (d = fu(i.value));
    const O = S();
    c || vt(O) || p(O);
  }), S = () => {
    if (!i.value) return;
    const O = fu(i.value), _ = [];
    for (const I of Object.keys(u)) {
      const R = wa(I);
      if (!R) continue;
      const P = du(R, i.value), W = or(R, P);
      _.push({ top: W - l.offset - l.bound, href: I });
    }
    _.sort((I, R) => I.top - R.top);
    for (let I = 0; I < _.length; I++) {
      const R = _[I], P = _[I + 1];
      if (I === 0 && O === 0) return l.selectScrollTop ? R.href : "";
      if (R.top <= O && (!P || P.top > O)) return R.href;
    }
  }, E = () => {
    const O = wa(l.container);
    !O || as(O) ? i.value = window : i.value = O;
  };
  Et(i, "scroll", C);
  const M = y(() => {
    if (!s.value || !r.value || !a.value) return {};
    const O = u[a.value];
    if (!O) return {};
    const _ = s.value.getBoundingClientRect(), I = r.value.getBoundingClientRect(), R = O.getBoundingClientRect();
    return l.direction === "horizontal" ? { left: `${R.left - _.left}px`, width: `${R.width}px`, opacity: 1 } : { top: `${R.top - _.top + (R.height - I.height) / 2}px`, opacity: 1 };
  });
  return Xe(() => {
    E();
    const O = decodeURIComponent(window.location.hash);
    wa(O) ? T(O) : C();
  }), ue(() => l.container, () => {
    E();
  }), ut(pv, { ns: f, direction: l.direction, currentAnchor: a, addLink: h, removeLink: v, handleClick: w }), t({ scrollTo: T }), (O, _) => (k(), D("div", { ref_key: "anchorRef", ref: s, class: $(o(m)) }, [O.marker ? (k(), D("div", { key: 0, ref_key: "markerRef", ref: r, class: $(o(f).e("marker")), style: Me(o(M)) }, null, 6)) : J("v-if", true), x("div", { class: $(o(f).e("list")) }, [X(O.$slots, "default")], 2)], 2));
} });
var XP = ve(GP, [["__file", "anchor.vue"]]);
const ZP = pe({ title: String, href: String }), JP = K({ name: "ElAnchorLink" }), QP = K({ ...JP, props: ZP, setup(e) {
  const t = e, n = N(null), { ns: l, direction: a, currentAnchor: s, addLink: r, removeLink: i, handleClick: u } = we(pv), c = y(() => [l.e("link"), l.is("active", s.value === t.href)]), d = (f) => {
    u(f, t.href);
  };
  return ue(() => t.href, (f, m) => {
    $e(() => {
      m && i(m), f && r({ href: f, el: n.value });
    });
  }), Xe(() => {
    const { href: f } = t;
    f && r({ href: f, el: n.value });
  }), It(() => {
    const { href: f } = t;
    f && i(f);
  }), (f, m) => (k(), D("div", { class: $(o(l).e("item")) }, [x("a", { ref_key: "linkRef", ref: n, class: $(o(c)), href: f.href, onClick: d }, [X(f.$slots, "default", {}, () => [at(he(f.title), 1)])], 10, ["href"]), f.$slots["sub-link"] && o(a) === "vertical" ? (k(), D("div", { key: 0, class: $(o(l).e("list")) }, [X(f.$slots, "sub-link")], 2)) : J("v-if", true)], 2));
} });
var vv = ve(QP, [["__file", "anchor-link.vue"]]);
const eR = We(XP, { AnchorLink: vv }), tR = Vt(vv), hv = { label: "label", value: "value", disabled: "disabled" }, nR = pe({ direction: { type: Y(String), default: "horizontal" }, options: { type: Y(Array), default: () => [] }, modelValue: { type: [String, Number, Boolean], default: void 0 }, props: { type: Y(Object), default: () => hv }, block: Boolean, size: Wt, disabled: Boolean, validateEvent: { type: Boolean, default: true }, id: String, name: String, ...ln(["ariaLabel"]) }), lR = { [Ae]: (e) => Be(e) || _e(e) || Tt(e), [et]: (e) => Be(e) || _e(e) || Tt(e) }, oR = K({ name: "ElSegmented" }), aR = K({ ...oR, props: nR, emits: lR, setup(e, { emit: t }) {
  const n = e, l = de("segmented"), a = nn(), s = Ht(), r = cn(), { formItem: i } = un(), { inputId: u, isLabeledByFormItem: c } = zn(n, { formItemContext: i }), d = N(null), f = Kh(), m = Ct({ isInit: false, width: 0, height: 0, translateX: 0, translateY: 0, focusVisible: false }), h = (I) => {
    const R = p(I);
    t(Ae, R), t(et, R);
  }, v = y(() => ({ ...hv, ...n.props })), p = (I) => gt(I) ? I[v.value.value] : I, b = (I) => gt(I) ? I[v.value.label] : I, g = (I) => !!(r.value || gt(I) && I[v.value.disabled]), T = (I) => n.modelValue === p(I), w = (I) => n.options.find((R) => p(R) === I), C = (I) => [l.e("item"), l.is("selected", T(I)), l.is("disabled", g(I))], S = () => {
    if (!d.value) return;
    const I = d.value.querySelector(".is-selected"), R = d.value.querySelector(".is-selected input");
    if (!I || !R) {
      m.width = 0, m.height = 0, m.translateX = 0, m.translateY = 0, m.focusVisible = false;
      return;
    }
    const P = I.getBoundingClientRect();
    m.isInit = true, n.direction === "vertical" ? (m.height = P.height, m.translateY = I.offsetTop) : (m.width = P.width, m.translateX = I.offsetLeft);
    try {
      m.focusVisible = R.matches(":focus-visible");
    } catch {
    }
  }, E = y(() => [l.b(), l.m(s.value), l.is("block", n.block)]), M = y(() => ({ width: n.direction === "vertical" ? "100%" : `${m.width}px`, height: n.direction === "vertical" ? `${m.height}px` : "100%", transform: n.direction === "vertical" ? `translateY(${m.translateY}px)` : `translateX(${m.translateX}px)`, display: m.isInit ? "block" : "none" })), O = y(() => [l.e("item-selected"), l.is("disabled", g(w(n.modelValue))), l.is("focus-visible", m.focusVisible)]), _ = y(() => n.name || a.value);
  return Lt(d, S), ue(f, S), ue(() => n.modelValue, () => {
    var I;
    S(), n.validateEvent && ((I = i == null ? void 0 : i.validate) == null || I.call(i, "change").catch((R) => void 0));
  }, { flush: "post" }), (I, R) => I.options.length ? (k(), D("div", { key: 0, id: o(u), ref_key: "segmentedRef", ref: d, class: $(o(E)), role: "radiogroup", "aria-label": o(c) ? void 0 : I.ariaLabel || "segmented", "aria-labelledby": o(c) ? o(i).labelId : void 0 }, [x("div", { class: $([o(l).e("group"), o(l).m(n.direction)]) }, [x("div", { style: Me(o(M)), class: $(o(O)) }, null, 6), (k(true), D(Pe, null, it(I.options, (P, W) => (k(), D("label", { key: W, class: $(C(P)) }, [x("input", { class: $(o(l).e("item-input")), type: "radio", name: o(_), disabled: g(P), checked: T(P), onChange: (te) => h(P) }, null, 42, ["name", "disabled", "checked", "onChange"]), x("div", { class: $(o(l).e("item-label")) }, [X(I.$slots, "default", { item: P }, () => [at(he(b(P)), 1)])], 2)], 2))), 128))], 2)], 10, ["id", "aria-label", "aria-labelledby"])) : J("v-if", true);
} });
var sR = ve(aR, [["__file", "segmented.vue"]]);
const rR = We(sR), iR = (e, t) => {
  const n = e.toLowerCase();
  return (t.label || t.value).toLowerCase().includes(n);
}, uR = (e, t, n) => {
  const { selectionEnd: l } = e;
  if (l === null) return;
  const a = e.value, s = pn(t);
  let r = -1, i;
  for (let u = l - 1; u >= 0; --u) {
    const c = a[u];
    if (c === n || c === `
` || c === "\r") {
      r = u;
      continue;
    }
    if (s.includes(c)) {
      const d = r === -1 ? l : r;
      i = { pattern: a.slice(u + 1, d), start: u + 1, end: d, prefix: c, prefixIndex: u, splitIndex: r, selectionEnd: l };
      break;
    }
  }
  return i;
}, cR = (e, t = { debug: false, useSelectionEnd: false }) => {
  const n = e.selectionStart !== null ? e.selectionStart : 0, l = e.selectionEnd !== null ? e.selectionEnd : 0, a = t.useSelectionEnd ? l : n, s = ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"];
  if (t.debug) {
    const m = document.querySelector("#input-textarea-caret-position-mirror-div");
    (m == null ? void 0 : m.parentNode) && m.parentNode.removeChild(m);
  }
  const r = document.createElement("div");
  r.id = "input-textarea-caret-position-mirror-div", document.body.appendChild(r);
  const i = r.style, u = window.getComputedStyle(e), c = e.nodeName === "INPUT";
  i.whiteSpace = c ? "nowrap" : "pre-wrap", c || (i.wordWrap = "break-word"), i.position = "absolute", t.debug || (i.visibility = "hidden"), s.forEach((m) => {
    if (c && m === "lineHeight") if (u.boxSizing === "border-box") {
      const h = Number.parseInt(u.height), v = Number.parseInt(u.paddingTop) + Number.parseInt(u.paddingBottom) + Number.parseInt(u.borderTopWidth) + Number.parseInt(u.borderBottomWidth), p = v + Number.parseInt(u.lineHeight);
      h > p ? i.lineHeight = `${h - v}px` : h === p ? i.lineHeight = u.lineHeight : i.lineHeight = "0";
    } else i.lineHeight = u.height;
    else i[m] = u[m];
  }), cs() ? e.scrollHeight > Number.parseInt(u.height) && (i.overflowY = "scroll") : i.overflow = "hidden", r.textContent = e.value.slice(0, Math.max(0, a)), c && r.textContent && (r.textContent = r.textContent.replace(/\s/g, "\xA0"));
  const d = document.createElement("span");
  d.textContent = e.value.slice(Math.max(0, a)) || ".", d.style.position = "relative", d.style.left = `${-e.scrollLeft}px`, d.style.top = `${-e.scrollTop}px`, r.appendChild(d);
  const f = { top: d.offsetTop + Number.parseInt(u.borderTopWidth), left: d.offsetLeft + Number.parseInt(u.borderLeftWidth), height: Number.parseInt(u.fontSize) * 1.5 };
  return t.debug ? d.style.backgroundColor = "#aaa" : document.body.removeChild(r), f.left >= e.clientWidth && (f.left = e.clientWidth), f;
}, dR = pe({ ...Gr, options: { type: Y(Array), default: () => [] }, prefix: { type: Y([String, Array]), default: "@", validator: (e) => Be(e) ? e.length === 1 : e.every((t) => Be(t) && t.length === 1) }, split: { type: String, default: " ", validator: (e) => e.length === 1 }, filterOption: { type: Y([Boolean, Function]), default: () => iR, validator: (e) => e === false ? true : Qe(e) }, placement: { type: Y(String), default: "bottom" }, showArrow: Boolean, offset: { type: Number, default: 0 }, whole: Boolean, checkIsWhole: { type: Y(Function) }, modelValue: String, loading: Boolean, popperClass: { type: String, default: "" }, popperOptions: { type: Y(Object), default: () => ({}) } }), fR = { [Ae]: (e) => Be(e), search: (e, t) => Be(e) && Be(t), select: (e, t) => Be(e.value) && Be(t), focus: (e) => e instanceof FocusEvent, blur: (e) => e instanceof FocusEvent }, pR = pe({ options: { type: Y(Array), default: () => [] }, loading: Boolean, disabled: Boolean, contentId: String, ariaLabel: String }), vR = { select: (e) => Be(e.value) }, hR = K({ name: "ElMentionDropdown" }), mR = K({ ...hR, props: pR, emits: vR, setup(e, { expose: t, emit: n }) {
  const l = e, a = de("mention"), { t: s } = ft(), r = N(-1), i = N(), u = N(), c = N(), d = (w, C) => [a.be("dropdown", "item"), a.is("hovering", r.value === C), a.is("disabled", w.disabled || l.disabled)], f = (w) => {
    w.disabled || l.disabled || n("select", w);
  }, m = (w) => {
    r.value = w;
  }, h = y(() => l.disabled || l.options.every((w) => w.disabled)), v = y(() => l.options[r.value]), p = () => {
    v.value && n("select", v.value);
  }, b = (w) => {
    const { options: C } = l;
    if (C.length === 0 || h.value) return;
    w === "next" ? (r.value++, r.value === C.length && (r.value = 0)) : w === "prev" && (r.value--, r.value < 0 && (r.value = C.length - 1));
    const S = C[r.value];
    if (S.disabled) {
      b(w);
      return;
    }
    $e(() => g(S));
  }, g = (w) => {
    var C, S, E, M;
    const { options: O } = l, _ = O.findIndex((R) => R.value === w.value), I = (C = u.value) == null ? void 0 : C[_];
    if (I) {
      const R = (E = (S = c.value) == null ? void 0 : S.querySelector) == null ? void 0 : E.call(S, `.${a.be("dropdown", "wrap")}`);
      R && Yr(R, I);
    }
    (M = i.value) == null || M.handleScroll();
  };
  return ue(() => l.options, () => {
    h.value || l.options.length === 0 ? r.value = -1 : r.value = 0;
  }, { immediate: true }), t({ hoveringIndex: r, navigateOptions: b, selectHoverOption: p, hoverOption: v }), (w, C) => (k(), D("div", { ref_key: "dropdownRef", ref: c, class: $(o(a).b("dropdown")) }, [w.$slots.header ? (k(), D("div", { key: 0, class: $(o(a).be("dropdown", "header")) }, [X(w.$slots, "header")], 2)) : J("v-if", true), Ye(z(o(el), { id: w.contentId, ref_key: "scrollbarRef", ref: i, tag: "ul", "wrap-class": o(a).be("dropdown", "wrap"), "view-class": o(a).be("dropdown", "list"), role: "listbox", "aria-label": w.ariaLabel, "aria-orientation": "vertical" }, { default: j(() => [(k(true), D(Pe, null, it(w.options, (S, E) => (k(), D("li", { id: `${w.contentId}-${E}`, ref_for: true, ref_key: "optionRefs", ref: u, key: E, class: $(d(S, E)), role: "option", "aria-disabled": S.disabled || w.disabled || void 0, "aria-selected": r.value === E, onMousemove: (M) => m(E), onClick: Re((M) => f(S), ["stop"]) }, [X(w.$slots, "label", { item: S, index: E }, () => {
    var M;
    return [x("span", null, he((M = S.label) != null ? M : S.value), 1)];
  })], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"]))), 128))]), _: 3 }, 8, ["id", "wrap-class", "view-class", "aria-label"]), [[pt, w.options.length > 0 && !w.loading]]), w.loading ? (k(), D("div", { key: 1, class: $(o(a).be("dropdown", "loading")) }, [X(w.$slots, "loading", {}, () => [at(he(o(s)("el.mention.loading")), 1)])], 2)) : J("v-if", true), w.$slots.footer ? (k(), D("div", { key: 2, class: $(o(a).be("dropdown", "footer")) }, [X(w.$slots, "footer")], 2)) : J("v-if", true)], 2));
} });
var gR = ve(mR, [["__file", "mention-dropdown.vue"]]);
const bR = K({ name: "ElMention", inheritAttrs: false }), yR = K({ ...bR, props: dR, emits: fR, setup(e, { expose: t, emit: n }) {
  const l = e, a = y(() => Hn(l, Object.keys(Gr))), s = de("mention"), r = cn(), i = nn(), u = N(), c = N(), d = N(), f = N(false), m = N(), h = N(), v = y(() => l.showArrow ? l.placement : `${l.placement}-start`), p = y(() => l.showArrow ? ["bottom", "top"] : ["bottom-start", "top-start"]), b = y(() => {
    const { filterOption: P, options: W } = l;
    return !h.value || !P ? W : W.filter((te) => P(h.value.pattern, te));
  }), g = y(() => f.value && (!!b.value.length || l.loading)), T = y(() => {
    var P;
    return `${i.value}-${(P = d.value) == null ? void 0 : P.hoveringIndex}`;
  }), w = (P) => {
    n(Ae, P), _();
  }, C = (P) => {
    var W, te, A, L;
    if (!(!("code" in P) || (W = u.value) != null && W.isComposing)) switch (P.code) {
      case ye.left:
      case ye.right:
        _();
        break;
      case ye.up:
      case ye.down:
        if (!f.value) return;
        P.preventDefault(), (te = d.value) == null || te.navigateOptions(P.code === ye.up ? "prev" : "next");
        break;
      case ye.enter:
      case ye.numpadEnter:
        if (!f.value) return;
        P.preventDefault(), (A = d.value) != null && A.hoverOption ? (L = d.value) == null || L.selectHoverOption() : f.value = false;
        break;
      case ye.esc:
        if (!f.value) return;
        P.preventDefault(), f.value = false;
        break;
      case ye.backspace:
        if (l.whole && h.value) {
          const { splitIndex: F, selectionEnd: V, pattern: B, prefixIndex: G, prefix: U } = h.value, ne = O();
          if (!ne) return;
          const Z = ne.value, ee = l.options.find((le) => le.value === B);
          if ((Qe(l.checkIsWhole) ? l.checkIsWhole(B, U) : ee) && F !== -1 && F + 1 === V) {
            P.preventDefault();
            const le = Z.slice(0, G) + Z.slice(F + 1);
            n(Ae, le);
            const Q = G;
            $e(() => {
              ne.selectionStart = Q, ne.selectionEnd = Q, R();
            });
          }
        }
    }
  }, { wrapperRef: S } = Ol(u, { beforeFocus() {
    return r.value;
  }, afterFocus() {
    _();
  }, beforeBlur(P) {
    var W;
    return (W = c.value) == null ? void 0 : W.isFocusInsideContent(P);
  }, afterBlur() {
    f.value = false;
  } }), E = () => {
    _();
  }, M = (P) => {
    if (!h.value) return;
    const W = O();
    if (!W) return;
    const te = W.value, { split: A } = l, L = te.slice(h.value.end), F = L.startsWith(A), V = `${P.value}${F ? "" : A}`, B = te.slice(0, h.value.start) + V + L;
    n(Ae, B), n("select", P, h.value.prefix);
    const G = h.value.start + V.length + (F ? 1 : 0);
    $e(() => {
      W.selectionStart = G, W.selectionEnd = G, W.focus(), R();
    });
  }, O = () => {
    var P, W;
    return l.type === "textarea" ? (P = u.value) == null ? void 0 : P.textarea : (W = u.value) == null ? void 0 : W.input;
  }, _ = () => {
    setTimeout(() => {
      I(), R(), $e(() => {
        var P;
        return (P = c.value) == null ? void 0 : P.updatePopper();
      });
    }, 0);
  }, I = () => {
    const P = O();
    if (!P) return;
    const W = cR(P), te = P.getBoundingClientRect(), A = u.value.$el.getBoundingClientRect();
    m.value = { position: "absolute", width: 0, height: `${W.height}px`, left: `${W.left + te.left - A.left}px`, top: `${W.top + te.top - A.top}px` };
  }, R = () => {
    const P = O();
    if (document.activeElement !== P) {
      f.value = false;
      return;
    }
    const { prefix: W, split: te } = l;
    if (h.value = uR(P, W, te), h.value && h.value.splitIndex === -1) {
      f.value = true, n("search", h.value.pattern, h.value.prefix);
      return;
    }
    f.value = false;
  };
  return t({ input: u, tooltip: c, dropdownVisible: g }), (P, W) => (k(), D("div", { ref_key: "wrapperRef", ref: S, class: $(o(s).b()) }, [z(o(hn), lt(lt(o(a), P.$attrs), { ref_key: "elInputRef", ref: u, "model-value": P.modelValue, disabled: o(r), role: o(g) ? "combobox" : void 0, "aria-activedescendant": o(g) ? o(T) || "" : void 0, "aria-controls": o(g) ? o(i) : void 0, "aria-expanded": o(g) || void 0, "aria-label": P.ariaLabel, "aria-autocomplete": o(g) ? "none" : void 0, "aria-haspopup": o(g) ? "listbox" : void 0, onInput: w, onKeydown: C, onMousedown: E }), On({ _: 2 }, [it(P.$slots, (te, A) => ({ name: A, fn: j((L) => [X(P.$slots, A, Mn(sl(L)))]) }))]), 1040, ["model-value", "disabled", "role", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "aria-autocomplete", "aria-haspopup"]), z(o(rn), { ref_key: "tooltipRef", ref: c, visible: o(g), "popper-class": [o(s).e("popper"), P.popperClass], "popper-options": P.popperOptions, placement: o(v), "fallback-placements": o(p), effect: "light", pure: "", offset: P.offset, "show-arrow": P.showArrow }, { default: j(() => [x("div", { style: Me(m.value) }, null, 4)]), content: j(() => {
    var te;
    return [z(gR, { ref_key: "dropdownRef", ref: d, options: o(b), disabled: o(r), loading: P.loading, "content-id": o(i), "aria-label": P.ariaLabel, onSelect: M, onClick: Re((te = u.value) == null ? void 0 : te.focus, ["stop"]) }, On({ _: 2 }, [it(P.$slots, (A, L) => ({ name: L, fn: j((F) => [X(P.$slots, L, Mn(sl(F)))]) }))]), 1032, ["options", "disabled", "loading", "content-id", "aria-label", "onClick"])];
  }), _: 3 }, 8, ["visible", "popper-class", "popper-options", "placement", "fallback-placements", "offset", "show-arrow"])], 2));
} });
var CR = ve(yR, [["__file", "mention.vue"]]);
const wR = We(CR);
var SR = [$m, Dm, Nb, V_, Rb, zb, Ld, Jb, Qb, Qt, Fd, _y, Ly, Zy, Jy, J0, of, oC, Fn, f0, Gd, uC, $C, TC, ps, JC, tw, pw, vw, hw, mw, gw, hS, $S, TS, AS, Pf, qS, Vk, Ak, Fk, xf, sE, rE, Ee, bE, Kf, hn, Wf, RE, FE, o1, a1, s1, r1, p1, o$, c$, y$, Md, Qf, nf, $0, E0, _$, L$, x$, el, jl, Ka, A1, mT, $T, TT, jT, XT, fp, rN, mN, gN, kN, NI, II, D_, J_, Q_, yo, oM, Bw, cM, hM, mM, rn, WM, lO, Ja, SO, FO, iP, bP, KP, WP, eR, tR, rR, wR];
const Bn = "ElInfiniteScroll", kR = 50, ER = 200, $R = 0, TR = { delay: { type: Number, default: ER }, distance: { type: Number, default: $R }, disabled: { type: Boolean, default: false }, immediate: { type: Boolean, default: true } }, Ui = (e, t) => Object.entries(TR).reduce((n, [l, a]) => {
  var s, r;
  const { type: i, default: u } = a, c = e.getAttribute(`infinite-scroll-${l}`);
  let d = (r = (s = t[c]) != null ? s : c) != null ? r : u;
  return d = d === "false" ? false : d, d = i(d), n[l] = Number.isNaN(d) ? u : d, n;
}, {}), mv = (e) => {
  const { observer: t } = e[Bn];
  t && (t.disconnect(), delete e[Bn].observer);
}, NR = (e, t) => {
  const { container: n, containerEl: l, instance: a, observer: s, lastScrollTop: r } = e[Bn], { disabled: i, distance: u } = Ui(e, a), { clientHeight: c, scrollHeight: d, scrollTop: f } = l, m = f - r;
  if (e[Bn].lastScrollTop = f, s || i || m < 0) return;
  let h = false;
  if (n === e) h = d - (c + f) <= u;
  else {
    const { clientTop: v, scrollHeight: p } = e, b = or(e, l);
    h = f + c >= b + v + p - u;
  }
  h && t.call(a);
};
function Us(e, t) {
  const { containerEl: n, instance: l } = e[Bn], { disabled: a } = Ui(e, l);
  a || n.clientHeight === 0 || (n.scrollHeight <= n.clientHeight ? t.call(l) : mv(e));
}
const IR = { async mounted(e, t) {
  const { instance: n, value: l } = t;
  Qe(l) || Kt(Bn, "'v-infinite-scroll' binding value must be a function"), await $e();
  const { delay: a, immediate: s } = Ui(e, n), r = Ur(e, true), i = r === window ? document.documentElement : r, u = zl(NR.bind(null, e, l), a);
  if (r) {
    if (e[Bn] = { instance: n, container: r, containerEl: i, delay: a, cb: l, onScroll: u, lastScrollTop: i.scrollTop }, s) {
      const c = new MutationObserver(zl(Us.bind(null, e, l), kR));
      e[Bn].observer = c, c.observe(e, { childList: true, subtree: true }), Us(e, l);
    }
    r.addEventListener("scroll", u);
  }
}, unmounted(e) {
  if (!e[Bn]) return;
  const { container: t, onScroll: n } = e[Bn];
  t == null ? void 0 : t.removeEventListener("scroll", n), mv(e);
}, async updated(e) {
  if (!e[Bn]) await $e();
  else {
    const { containerEl: t, cb: n, observer: l } = e[Bn];
    t.clientHeight && l && Us(e, n);
  }
} }, Or = IR;
Or.install = (e) => {
  e.directive("InfiniteScroll", Or);
};
const _R = Or;
function MR(e) {
  let t;
  const n = N(false), l = Ct({ ...e, originalPosition: "", originalOverflow: "", visible: false });
  function a(m) {
    l.text = m;
  }
  function s() {
    const m = l.parent, h = f.ns;
    if (!m.vLoadingAddClassList) {
      let v = m.getAttribute("loading-number");
      v = Number.parseInt(v) - 1, v ? m.setAttribute("loading-number", v.toString()) : (gn(m, h.bm("parent", "relative")), m.removeAttribute("loading-number")), gn(m, h.bm("parent", "hidden"));
    }
    r(), d.unmount();
  }
  function r() {
    var m, h;
    (h = (m = f.$el) == null ? void 0 : m.parentNode) == null || h.removeChild(f.$el);
  }
  function i() {
    var m;
    e.beforeClose && !e.beforeClose() || (n.value = true, clearTimeout(t), t = setTimeout(u, 400), l.visible = false, (m = e.closed) == null || m.call(e));
  }
  function u() {
    if (!n.value) return;
    const m = l.parent;
    n.value = false, m.vLoadingAddClassList = void 0, s();
  }
  const c = K({ name: "ElLoading", setup(m, { expose: h }) {
    const { ns: v, zIndex: p } = is("loading");
    return h({ ns: v, zIndex: p }), () => {
      const b = l.spinner || l.svg, g = Oe("svg", { class: "circular", viewBox: l.svgViewBox ? l.svgViewBox : "0 0 50 50", ...b ? { innerHTML: b } : {} }, [Oe("circle", { class: "path", cx: "25", cy: "25", r: "20", fill: "none" })]), T = l.text ? Oe("p", { class: v.b("text") }, [l.text]) : void 0;
      return Oe(en, { name: v.b("fade"), onAfterLeave: u }, { default: j(() => [Ye(z("div", { style: { backgroundColor: l.background || "" }, class: [v.b("mask"), l.customClass, l.fullscreen ? "is-fullscreen" : ""] }, [Oe("div", { class: v.b("spinner") }, [g, T])]), [[pt, l.visible]])]) });
    };
  } }), d = Lv(c), f = d.mount(document.createElement("div"));
  return { ...tn(l), setText: a, removeElLoadingChild: r, close: i, handleAfterLeave: u, vm: f, get $el() {
    return f.$el;
  } };
}
let Sa;
const Pr = function(e = {}) {
  if (!dt) return;
  const t = OR(e);
  if (t.fullscreen && Sa) return Sa;
  const n = MR({ ...t, closed: () => {
    var a;
    (a = t.closed) == null || a.call(t), t.fullscreen && (Sa = void 0);
  } });
  PR(t, t.parent, n), Nc(t, t.parent, n), t.parent.vLoadingAddClassList = () => Nc(t, t.parent, n);
  let l = t.parent.getAttribute("loading-number");
  return l ? l = `${Number.parseInt(l) + 1}` : l = "1", t.parent.setAttribute("loading-number", l), t.parent.appendChild(n.$el), $e(() => n.visible.value = t.visible), t.fullscreen && (Sa = n), n;
}, OR = (e) => {
  var t, n, l, a;
  let s;
  return Be(e.target) ? s = (t = document.querySelector(e.target)) != null ? t : document.body : s = e.target || document.body, { parent: s === document.body || e.body ? document.body : s, background: e.background || "", svg: e.svg || "", svgViewBox: e.svgViewBox || "", spinner: e.spinner || false, text: e.text || "", fullscreen: s === document.body && ((n = e.fullscreen) != null ? n : true), lock: (l = e.lock) != null ? l : false, customClass: e.customClass || "", visible: (a = e.visible) != null ? a : true, beforeClose: e.beforeClose, closed: e.closed, target: s };
}, PR = async (e, t, n) => {
  const { nextZIndex: l } = n.vm.zIndex || n.vm._.exposed.zIndex, a = {};
  if (e.fullscreen) n.originalPosition.value = ll(document.body, "position"), n.originalOverflow.value = ll(document.body, "overflow"), a.zIndex = l();
  else if (e.parent === document.body) {
    n.originalPosition.value = ll(document.body, "position"), await $e();
    for (const s of ["top", "left"]) {
      const r = s === "top" ? "scrollTop" : "scrollLeft";
      a[s] = `${e.target.getBoundingClientRect()[s] + document.body[r] + document.documentElement[r] - Number.parseInt(ll(document.body, `margin-${s}`), 10)}px`;
    }
    for (const s of ["height", "width"]) a[s] = `${e.target.getBoundingClientRect()[s]}px`;
  } else n.originalPosition.value = ll(t, "position");
  for (const [s, r] of Object.entries(a)) n.$el.style[s] = r;
}, Nc = (e, t, n) => {
  const l = n.vm.ns || n.vm._.exposed.ns;
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? gn(t, l.bm("parent", "relative")) : Dn(t, l.bm("parent", "relative")), e.fullscreen && e.lock ? Dn(t, l.bm("parent", "hidden")) : gn(t, l.bm("parent", "hidden"));
}, Pa = Symbol("ElLoading"), Ic = (e, t) => {
  var n, l, a, s;
  const r = t.instance, i = (m) => gt(t.value) ? t.value[m] : void 0, u = (m) => {
    const h = Be(m) && (r == null ? void 0 : r[m]) || m;
    return h && N(h);
  }, c = (m) => u(i(m) || e.getAttribute(`element-loading-${Bv(m)}`)), d = (n = i("fullscreen")) != null ? n : t.modifiers.fullscreen, f = { text: c("text"), svg: c("svg"), svgViewBox: c("svgViewBox"), spinner: c("spinner"), background: c("background"), customClass: c("customClass"), fullscreen: d, target: (l = i("target")) != null ? l : d ? void 0 : e, body: (a = i("body")) != null ? a : t.modifiers.body, lock: (s = i("lock")) != null ? s : t.modifiers.lock };
  e[Pa] = { options: f, instance: Pr(f) };
}, RR = (e, t) => {
  for (const n of Object.keys(t)) mn(t[n]) && (t[n].value = e[n]);
}, _c = { mounted(e, t) {
  t.value && Ic(e, t);
}, updated(e, t) {
  const n = e[Pa];
  t.oldValue !== t.value && (t.value && !t.oldValue ? Ic(e, t) : t.value && t.oldValue ? gt(t.value) && RR(t.value, n.options) : n == null ? void 0 : n.instance.close());
}, unmounted(e) {
  var t;
  (t = e[Pa]) == null || t.instance.close(), e[Pa] = null;
} }, LR = { install(e) {
  e.directive("loading", _c), e.config.globalProperties.$loading = Pr;
}, directive: _c, service: Pr }, gv = ["success", "info", "warning", "error"], Cn = Bt({ customClass: "", dangerouslyUseHTMLString: false, duration: 3e3, icon: void 0, id: "", message: "", onClose: void 0, showClose: false, type: "info", plain: false, offset: 16, zIndex: 0, grouping: false, repeatNum: 1, appendTo: dt ? document.body : void 0 }), BR = pe({ customClass: { type: String, default: Cn.customClass }, dangerouslyUseHTMLString: { type: Boolean, default: Cn.dangerouslyUseHTMLString }, duration: { type: Number, default: Cn.duration }, icon: { type: St, default: Cn.icon }, id: { type: String, default: Cn.id }, message: { type: Y([String, Object, Function]), default: Cn.message }, onClose: { type: Y(Function), default: Cn.onClose }, showClose: { type: Boolean, default: Cn.showClose }, type: { type: String, values: gv, default: Cn.type }, plain: { type: Boolean, default: Cn.plain }, offset: { type: Number, default: Cn.offset }, zIndex: { type: Number, default: Cn.zIndex }, grouping: { type: Boolean, default: Cn.grouping }, repeatNum: { type: Number, default: Cn.repeatNum } }), DR = { destroy: () => true }, Kn = Dv([]), VR = (e) => {
  const t = Kn.findIndex((a) => a.id === e), n = Kn[t];
  let l;
  return t > 0 && (l = Kn[t - 1]), { current: n, prev: l };
}, AR = (e) => {
  const { prev: t } = VR(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, FR = (e, t) => Kn.findIndex((l) => l.id === e) > 0 ? 16 : t, zR = K({ name: "ElMessage" }), xR = K({ ...zR, props: BR, emits: DR, setup(e, { expose: t, emit: n }) {
  const l = e, { Close: a } = qr, s = N(false), { ns: r, zIndex: i } = is("message"), { currentZIndex: u, nextZIndex: c } = i, d = N(), f = N(false), m = N(0);
  let h;
  const v = y(() => l.type ? l.type === "error" ? "danger" : l.type : "info"), p = y(() => {
    const _ = l.type;
    return { [r.bm("icon", _)]: _ && _l[_] };
  }), b = y(() => l.icon || _l[l.type] || ""), g = y(() => AR(l.id)), T = y(() => FR(l.id, l.offset) + g.value), w = y(() => m.value + T.value), C = y(() => ({ top: `${T.value}px`, zIndex: u.value }));
  function S() {
    l.duration !== 0 && ({ stop: h } = Kl(() => {
      M();
    }, l.duration));
  }
  function E() {
    h == null ? void 0 : h();
  }
  function M() {
    f.value = false, $e(() => {
      var _;
      s.value || ((_ = l.onClose) == null || _.call(l), n("destroy"));
    });
  }
  function O({ code: _ }) {
    _ === ye.esc && M();
  }
  return Xe(() => {
    S(), c(), f.value = true;
  }), ue(() => l.repeatNum, () => {
    E(), S();
  }), Et(document, "keydown", O), Lt(d, () => {
    m.value = d.value.getBoundingClientRect().height;
  }), t({ visible: f, bottom: w, close: M }), (_, I) => (k(), oe(en, { name: o(r).b("fade"), onBeforeEnter: (R) => s.value = true, onBeforeLeave: _.onClose, onAfterLeave: (R) => _.$emit("destroy"), persisted: "" }, { default: j(() => [Ye(x("div", { id: _.id, ref_key: "messageRef", ref: d, class: $([o(r).b(), { [o(r).m(_.type)]: _.type }, o(r).is("closable", _.showClose), o(r).is("plain", _.plain), _.customClass]), style: Me(o(C)), role: "alert", onMouseenter: E, onMouseleave: S }, [_.repeatNum > 1 ? (k(), oe(o(Ld), { key: 0, value: _.repeatNum, type: o(v), class: $(o(r).e("badge")) }, null, 8, ["value", "type", "class"])) : J("v-if", true), o(b) ? (k(), oe(o(Ee), { key: 1, class: $([o(r).e("icon"), o(p)]) }, { default: j(() => [(k(), oe(Je(o(b))))]), _: 1 }, 8, ["class"])) : J("v-if", true), X(_.$slots, "default", {}, () => [_.dangerouslyUseHTMLString ? (k(), D(Pe, { key: 1 }, [J(" Caution here, message could've been compromised, never use user's input as message "), x("p", { class: $(o(r).e("content")), innerHTML: _.message }, null, 10, ["innerHTML"])], 2112)) : (k(), D("p", { key: 0, class: $(o(r).e("content")) }, he(_.message), 3))]), _.showClose ? (k(), oe(o(Ee), { key: 2, class: $(o(r).e("closeBtn")), onClick: Re(M, ["stop"]) }, { default: j(() => [z(o(a))]), _: 1 }, 8, ["class", "onClick"])) : J("v-if", true)], 46, ["id"]), [[pt, f.value]])]), _: 3 }, 8, ["name", "onBeforeEnter", "onBeforeLeave", "onAfterLeave"]));
} });
var HR = ve(xR, [["__file", "message.vue"]]);
let KR = 1;
const bv = (e) => {
  const t = !e || Be(e) || Dt(e) || Qe(e) ? { message: e } : e, n = { ...Cn, ...t };
  if (!n.appendTo) n.appendTo = document.body;
  else if (Be(n.appendTo)) {
    let l = document.querySelector(n.appendTo);
    En(l) || (l = document.body), n.appendTo = l;
  }
  return Tt(xn.grouping) && !n.grouping && (n.grouping = xn.grouping), _e(xn.duration) && n.duration === 3e3 && (n.duration = xn.duration), _e(xn.offset) && n.offset === 16 && (n.offset = xn.offset), Tt(xn.showClose) && !n.showClose && (n.showClose = xn.showClose), n;
}, WR = (e) => {
  const t = Kn.indexOf(e);
  if (t === -1) return;
  Kn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, jR = ({ appendTo: e, ...t }, n) => {
  const l = `message_${KR++}`, a = t.onClose, s = document.createElement("div"), r = { ...t, id: l, onClose: () => {
    a == null ? void 0 : a(), WR(d);
  }, onDestroy: () => {
    kl(null, s);
  } }, i = z(HR, r, Qe(r.message) || Dt(r.message) ? { default: Qe(r.message) ? r.message : () => r.message } : null);
  i.appContext = n || Eo._context, kl(i, s), e.appendChild(s.firstElementChild);
  const u = i.component, d = { id: l, vnode: i, vm: u, handler: { close: () => {
    u.exposed.close();
  } }, props: i.component.props };
  return d;
}, Eo = (e = {}, t) => {
  if (!dt) return { close: () => {
  } };
  const n = bv(e);
  if (n.grouping && Kn.length) {
    const a = Kn.find(({ vnode: s }) => {
      var r;
      return ((r = s.props) == null ? void 0 : r.message) === n.message;
    });
    if (a) return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (_e(xn.max) && Kn.length >= xn.max) return { close: () => {
  } };
  const l = jR(n, t);
  return Kn.push(l), l.handler;
};
gv.forEach((e) => {
  Eo[e] = (t = {}, n) => {
    const l = bv(t);
    return Eo({ ...l, type: e }, n);
  };
});
function UR(e) {
  const t = [...Kn];
  for (const n of t) (!e || e === n.props.type) && n.handler.close();
}
Eo.closeAll = UR;
Eo._context = null;
const YR = vd(Eo, "$message"), Rr = "_trap-focus-children", Fl = [], Mc = (e) => {
  if (Fl.length === 0) return;
  const t = Fl[Fl.length - 1][Rr];
  if (t.length > 0 && e.code === ye.tab) {
    if (t.length === 1) {
      e.preventDefault(), document.activeElement !== t[0] && t[0].focus();
      return;
    }
    const n = e.shiftKey, l = e.target === t[0], a = e.target === t[t.length - 1];
    l && n && (e.preventDefault(), t[t.length - 1].focus()), a && !n && (e.preventDefault(), t[0].focus());
  }
}, qR = { beforeMount(e) {
  e[Rr] = mu(e), Fl.push(e), Fl.length <= 1 && document.addEventListener("keydown", Mc);
}, updated(e) {
  $e(() => {
    e[Rr] = mu(e);
  });
}, unmounted() {
  Fl.shift(), Fl.length === 0 && document.removeEventListener("keydown", Mc);
} }, GR = K({ name: "ElMessageBox", directives: { TrapFocus: qR }, components: { ElButton: Qt, ElFocusTrap: _o, ElInput: hn, ElOverlay: hi, ElIcon: Ee, ...qr }, inheritAttrs: false, props: { buttonSize: { type: String, validator: vp }, modal: { type: Boolean, default: true }, lockScroll: { type: Boolean, default: true }, showClose: { type: Boolean, default: true }, closeOnClickModal: { type: Boolean, default: true }, closeOnPressEscape: { type: Boolean, default: true }, closeOnHashChange: { type: Boolean, default: true }, center: Boolean, draggable: Boolean, overflow: Boolean, roundButton: { default: false, type: Boolean }, container: { type: String, default: "body" }, boxType: { type: String, default: "" } }, emits: ["vanish", "action"], setup(e, { emit: t }) {
  const { locale: n, zIndex: l, ns: a, size: s } = is("message-box", y(() => e.buttonSize)), { t: r } = n, { nextZIndex: i } = l, u = N(false), c = Ct({ autofocus: true, beforeClose: null, callback: null, cancelButtonText: "", cancelButtonClass: "", confirmButtonText: "", confirmButtonClass: "", customClass: "", customStyle: {}, dangerouslyUseHTMLString: false, distinguishCancelAndClose: false, icon: "", closeIcon: "", inputPattern: null, inputPlaceholder: "", inputType: "text", inputValue: "", inputValidator: void 0, inputErrorMessage: "", message: "", modalFade: true, modalClass: "", showCancelButton: false, showConfirmButton: true, type: "", title: void 0, showInput: false, action: "", confirmButtonLoading: false, cancelButtonLoading: false, confirmButtonLoadingIcon: Cl(Zn), cancelButtonLoadingIcon: Cl(Zn), confirmButtonDisabled: false, editorErrorMessage: "", validateError: false, zIndex: i() }), d = y(() => {
    const L = c.type;
    return { [a.bm("icon", L)]: L && _l[L] };
  }), f = nn(), m = nn(), h = y(() => {
    const L = c.type;
    return c.icon || L && _l[L] || "";
  }), v = y(() => !!c.message), p = N(), b = N(), g = N(), T = N(), w = N(), C = y(() => c.confirmButtonClass);
  ue(() => c.inputValue, async (L) => {
    await $e(), e.boxType === "prompt" && L && P();
  }, { immediate: true }), ue(() => u.value, (L) => {
    var F, V;
    L && (e.boxType !== "prompt" && (c.autofocus ? g.value = (V = (F = w.value) == null ? void 0 : F.$el) != null ? V : p.value : g.value = p.value), c.zIndex = i()), e.boxType === "prompt" && (L ? $e().then(() => {
      var B;
      T.value && T.value.$el && (c.autofocus ? g.value = (B = W()) != null ? B : p.value : g.value = p.value);
    }) : (c.editorErrorMessage = "", c.validateError = false));
  });
  const S = y(() => e.draggable), E = y(() => e.overflow);
  If(p, b, S, E), Xe(async () => {
    await $e(), e.closeOnHashChange && window.addEventListener("hashchange", M);
  }), It(() => {
    e.closeOnHashChange && window.removeEventListener("hashchange", M);
  });
  function M() {
    u.value && (u.value = false, $e(() => {
      c.action && t("action", c.action);
    }));
  }
  const O = () => {
    e.closeOnClickModal && R(c.distinguishCancelAndClose ? "close" : "cancel");
  }, _ = vi(O), I = (L) => {
    if (c.inputType !== "textarea") return L.preventDefault(), R("confirm");
  }, R = (L) => {
    var F;
    e.boxType === "prompt" && L === "confirm" && !P() || (c.action = L, c.beforeClose ? (F = c.beforeClose) == null || F.call(c, L, c, M) : M());
  }, P = () => {
    if (e.boxType === "prompt") {
      const L = c.inputPattern;
      if (L && !L.test(c.inputValue || "")) return c.editorErrorMessage = c.inputErrorMessage || r("el.messagebox.error"), c.validateError = true, false;
      const F = c.inputValidator;
      if (Qe(F)) {
        const V = F(c.inputValue);
        if (V === false) return c.editorErrorMessage = c.inputErrorMessage || r("el.messagebox.error"), c.validateError = true, false;
        if (Be(V)) return c.editorErrorMessage = V, c.validateError = true, false;
      }
    }
    return c.editorErrorMessage = "", c.validateError = false, true;
  }, W = () => {
    var L, F;
    const V = (L = T.value) == null ? void 0 : L.$refs;
    return (F = V == null ? void 0 : V.input) != null ? F : V == null ? void 0 : V.textarea;
  }, te = () => {
    R("close");
  }, A = () => {
    e.closeOnPressEscape && te();
  };
  return e.lockScroll && mi(u), { ...tn(c), ns: a, overlayEvent: _, visible: u, hasMessage: v, typeClass: d, contentId: f, inputId: m, btnSize: s, iconComponent: h, confirmButtonClasses: C, rootRef: p, focusStartRef: g, headerRef: b, inputRef: T, confirmRef: w, doClose: M, handleClose: te, onCloseRequested: A, handleWrapperClick: O, handleInputEnter: I, handleAction: R, t: r };
} });
function XR(e, t, n, l, a, s) {
  const r = nt("el-icon"), i = nt("el-input"), u = nt("el-button"), c = nt("el-focus-trap"), d = nt("el-overlay");
  return k(), oe(en, { name: "fade-in-linear", onAfterLeave: (f) => e.$emit("vanish"), persisted: "" }, { default: j(() => [Ye(z(d, { "z-index": e.zIndex, "overlay-class": [e.ns.is("message-box"), e.modalClass], mask: e.modal }, { default: j(() => [x("div", { role: "dialog", "aria-label": e.title, "aria-modal": "true", "aria-describedby": e.showInput ? void 0 : e.contentId, class: $(`${e.ns.namespace.value}-overlay-message-box`), onClick: e.overlayEvent.onClick, onMousedown: e.overlayEvent.onMousedown, onMouseup: e.overlayEvent.onMouseup }, [z(c, { loop: "", trapped: e.visible, "focus-trap-el": e.rootRef, "focus-start-el": e.focusStartRef, onReleaseRequested: e.onCloseRequested }, { default: j(() => [x("div", { ref: "rootRef", class: $([e.ns.b(), e.customClass, e.ns.is("draggable", e.draggable), { [e.ns.m("center")]: e.center }]), style: Me(e.customStyle), tabindex: "-1", onClick: Re(() => {
  }, ["stop"]) }, [e.title !== null && e.title !== void 0 ? (k(), D("div", { key: 0, ref: "headerRef", class: $([e.ns.e("header"), { "show-close": e.showClose }]) }, [x("div", { class: $(e.ns.e("title")) }, [e.iconComponent && e.center ? (k(), oe(r, { key: 0, class: $([e.ns.e("status"), e.typeClass]) }, { default: j(() => [(k(), oe(Je(e.iconComponent)))]), _: 1 }, 8, ["class"])) : J("v-if", true), x("span", null, he(e.title), 1)], 2), e.showClose ? (k(), D("button", { key: 0, type: "button", class: $(e.ns.e("headerbtn")), "aria-label": e.t("el.messagebox.close"), onClick: (f) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"), onKeydown: $t(Re((f) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"]) }, [z(r, { class: $(e.ns.e("close")) }, { default: j(() => [(k(), oe(Je(e.closeIcon || "close")))]), _: 1 }, 8, ["class"])], 42, ["aria-label", "onClick", "onKeydown"])) : J("v-if", true)], 2)) : J("v-if", true), x("div", { id: e.contentId, class: $(e.ns.e("content")) }, [x("div", { class: $(e.ns.e("container")) }, [e.iconComponent && !e.center && e.hasMessage ? (k(), oe(r, { key: 0, class: $([e.ns.e("status"), e.typeClass]) }, { default: j(() => [(k(), oe(Je(e.iconComponent)))]), _: 1 }, 8, ["class"])) : J("v-if", true), e.hasMessage ? (k(), D("div", { key: 1, class: $(e.ns.e("message")) }, [X(e.$slots, "default", {}, () => [e.dangerouslyUseHTMLString ? (k(), oe(Je(e.showInput ? "label" : "p"), { key: 1, for: e.showInput ? e.inputId : void 0, innerHTML: e.message }, null, 8, ["for", "innerHTML"])) : (k(), oe(Je(e.showInput ? "label" : "p"), { key: 0, for: e.showInput ? e.inputId : void 0 }, { default: j(() => [at(he(e.dangerouslyUseHTMLString ? "" : e.message), 1)]), _: 1 }, 8, ["for"]))])], 2)) : J("v-if", true)], 2), Ye(x("div", { class: $(e.ns.e("input")) }, [z(i, { id: e.inputId, ref: "inputRef", modelValue: e.inputValue, "onUpdate:modelValue": (f) => e.inputValue = f, type: e.inputType, placeholder: e.inputPlaceholder, "aria-invalid": e.validateError, class: $({ invalid: e.validateError }), onKeydown: $t(e.handleInputEnter, ["enter"]) }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]), x("div", { class: $(e.ns.e("errormsg")), style: Me({ visibility: e.editorErrorMessage ? "visible" : "hidden" }) }, he(e.editorErrorMessage), 7)], 2), [[pt, e.showInput]])], 10, ["id"]), x("div", { class: $(e.ns.e("btns")) }, [e.showCancelButton ? (k(), oe(u, { key: 0, loading: e.cancelButtonLoading, "loading-icon": e.cancelButtonLoadingIcon, class: $([e.cancelButtonClass]), round: e.roundButton, size: e.btnSize, onClick: (f) => e.handleAction("cancel"), onKeydown: $t(Re((f) => e.handleAction("cancel"), ["prevent"]), ["enter"]) }, { default: j(() => [at(he(e.cancelButtonText || e.t("el.messagebox.cancel")), 1)]), _: 1 }, 8, ["loading", "loading-icon", "class", "round", "size", "onClick", "onKeydown"])) : J("v-if", true), Ye(z(u, { ref: "confirmRef", type: "primary", loading: e.confirmButtonLoading, "loading-icon": e.confirmButtonLoadingIcon, class: $([e.confirmButtonClasses]), round: e.roundButton, disabled: e.confirmButtonDisabled, size: e.btnSize, onClick: (f) => e.handleAction("confirm"), onKeydown: $t(Re((f) => e.handleAction("confirm"), ["prevent"]), ["enter"]) }, { default: j(() => [at(he(e.confirmButtonText || e.t("el.messagebox.confirm")), 1)]), _: 1 }, 8, ["loading", "loading-icon", "class", "round", "disabled", "size", "onClick", "onKeydown"]), [[pt, e.showConfirmButton]])], 2)], 14, ["onClick"])]), _: 3 }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])], 42, ["aria-label", "aria-describedby", "onClick", "onMousedown", "onMouseup"])]), _: 3 }, 8, ["z-index", "overlay-class", "mask"]), [[pt, e.visible]])]), _: 3 }, 8, ["onAfterLeave"]);
}
var ZR = ve(GR, [["render", XR], ["__file", "index.vue"]]);
const ea = /* @__PURE__ */ new Map(), JR = (e) => {
  let t = document.body;
  return e.appendTo && (Be(e.appendTo) && (t = document.querySelector(e.appendTo)), En(e.appendTo) && (t = e.appendTo), En(t) || (t = document.body)), t;
}, QR = (e, t, n = null) => {
  const l = z(ZR, e, Qe(e.message) || Dt(e.message) ? { default: Qe(e.message) ? e.message : () => e.message } : null);
  return l.appContext = n, kl(l, t), JR(e).appendChild(t.firstElementChild), l.component;
}, eL = () => document.createElement("div"), tL = (e, t) => {
  const n = eL();
  e.onVanish = () => {
    kl(null, n), ea.delete(a);
  }, e.onAction = (s) => {
    const r = ea.get(a);
    let i;
    e.showInput ? i = { value: a.inputValue, action: s } : i = s, e.callback ? e.callback(i, l.proxy) : s === "cancel" || s === "close" ? e.distinguishCancelAndClose && s !== "cancel" ? r.reject("close") : r.reject("cancel") : r.resolve(i);
  };
  const l = QR(e, n, t), a = l.proxy;
  for (const s in e) sn(e, s) && !sn(a.$props, s) && (s === "closeIcon" && gt(e[s]) ? a[s] = Cl(e[s]) : a[s] = e[s]);
  return a.visible = true, a;
};
function Ro(e, t = null) {
  if (!dt) return Promise.reject();
  let n;
  return Be(e) || Dt(e) ? e = { message: e } : n = e.callback, new Promise((l, a) => {
    const s = tL(e, t ?? Ro._context);
    ea.set(s, { options: e, callback: n, resolve: l, reject: a });
  });
}
const nL = ["alert", "confirm", "prompt"], lL = { alert: { closeOnPressEscape: false, closeOnClickModal: false }, confirm: { showCancelButton: true }, prompt: { showCancelButton: true, showInput: true } };
nL.forEach((e) => {
  Ro[e] = oL(e);
});
function oL(e) {
  return (t, n, l, a) => {
    let s = "";
    return gt(n) ? (l = n, s = "") : vt(n) ? s = "" : s = n, Ro(Object.assign({ title: s, message: t, type: "", ...lL[e] }, l, { boxType: e }), a);
  };
}
Ro.close = () => {
  ea.forEach((e, t) => {
    t.doClose();
  }), ea.clear();
};
Ro._context = null;
const bl = Ro;
bl.install = (e) => {
  bl._context = e._context, e.config.globalProperties.$msgbox = bl, e.config.globalProperties.$messageBox = bl, e.config.globalProperties.$alert = bl.alert, e.config.globalProperties.$confirm = bl.confirm, e.config.globalProperties.$prompt = bl.prompt;
};
const aL = bl, yv = ["success", "info", "warning", "error"], sL = pe({ customClass: { type: String, default: "" }, dangerouslyUseHTMLString: Boolean, duration: { type: Number, default: 4500 }, icon: { type: St }, id: { type: String, default: "" }, message: { type: Y([String, Object, Function]), default: "" }, offset: { type: Number, default: 0 }, onClick: { type: Y(Function), default: () => {
} }, onClose: { type: Y(Function), required: true }, position: { type: String, values: ["top-right", "top-left", "bottom-right", "bottom-left"], default: "top-right" }, showClose: { type: Boolean, default: true }, title: { type: String, default: "" }, type: { type: String, values: [...yv, ""], default: "" }, zIndex: Number, closeIcon: { type: St, default: An } }), rL = { destroy: () => true }, iL = K({ name: "ElNotification" }), uL = K({ ...iL, props: sL, emits: rL, setup(e, { expose: t }) {
  const n = e, { ns: l, zIndex: a } = is("notification"), { nextZIndex: s, currentZIndex: r } = a, i = N(false);
  let u;
  const c = y(() => {
    const T = n.type;
    return T && _l[n.type] ? l.m(T) : "";
  }), d = y(() => n.type && _l[n.type] || n.icon), f = y(() => n.position.endsWith("right") ? "right" : "left"), m = y(() => n.position.startsWith("top") ? "top" : "bottom"), h = y(() => {
    var T;
    return { [m.value]: `${n.offset}px`, zIndex: (T = n.zIndex) != null ? T : r.value };
  });
  function v() {
    n.duration > 0 && ({ stop: u } = Kl(() => {
      i.value && b();
    }, n.duration));
  }
  function p() {
    u == null ? void 0 : u();
  }
  function b() {
    i.value = false;
  }
  function g({ code: T }) {
    T === ye.delete || T === ye.backspace ? p() : T === ye.esc ? i.value && b() : v();
  }
  return Xe(() => {
    v(), s(), i.value = true;
  }), Et(document, "keydown", g), t({ visible: i, close: b }), (T, w) => (k(), oe(en, { name: o(l).b("fade"), onBeforeLeave: T.onClose, onAfterLeave: (C) => T.$emit("destroy"), persisted: "" }, { default: j(() => [Ye(x("div", { id: T.id, class: $([o(l).b(), T.customClass, o(f)]), style: Me(o(h)), role: "alert", onMouseenter: p, onMouseleave: v, onClick: T.onClick }, [o(d) ? (k(), oe(o(Ee), { key: 0, class: $([o(l).e("icon"), o(c)]) }, { default: j(() => [(k(), oe(Je(o(d))))]), _: 1 }, 8, ["class"])) : J("v-if", true), x("div", { class: $(o(l).e("group")) }, [x("h2", { class: $(o(l).e("title")), textContent: he(T.title) }, null, 10, ["textContent"]), Ye(x("div", { class: $(o(l).e("content")), style: Me(T.title ? void 0 : { margin: 0 }) }, [X(T.$slots, "default", {}, () => [T.dangerouslyUseHTMLString ? (k(), D(Pe, { key: 1 }, [J(" Caution here, message could've been compromised, never use user's input as message "), x("p", { innerHTML: T.message }, null, 8, ["innerHTML"])], 2112)) : (k(), D("p", { key: 0 }, he(T.message), 1))])], 6), [[pt, T.message]]), T.showClose ? (k(), oe(o(Ee), { key: 0, class: $(o(l).e("closeBtn")), onClick: Re(b, ["stop"]) }, { default: j(() => [(k(), oe(Je(T.closeIcon)))]), _: 1 }, 8, ["class", "onClick"])) : J("v-if", true)], 2)], 46, ["id", "onClick"]), [[pt, i.value]])]), _: 3 }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
} });
var cL = ve(uL, [["__file", "notification.vue"]]);
const Qa = { "top-left": [], "top-right": [], "bottom-left": [], "bottom-right": [] }, Lr = 16;
let dL = 1;
const $o = function(e = {}, t) {
  if (!dt) return { close: () => {
  } };
  (Be(e) || Dt(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let l = e.offset || 0;
  Qa[n].forEach(({ vm: d }) => {
    var f;
    l += (((f = d.el) == null ? void 0 : f.offsetHeight) || 0) + Lr;
  }), l += Lr;
  const a = `notification_${dL++}`, s = e.onClose, r = { ...e, offset: l, id: a, onClose: () => {
    fL(a, n, s);
  } };
  let i = document.body;
  En(e.appendTo) ? i = e.appendTo : Be(e.appendTo) && (i = document.querySelector(e.appendTo)), En(i) || (i = document.body);
  const u = document.createElement("div"), c = z(cL, r, Qe(r.message) ? r.message : Dt(r.message) ? () => r.message : null);
  return c.appContext = vt(t) ? $o._context : t, c.props.onDestroy = () => {
    kl(null, u);
  }, kl(c, u), Qa[n].push({ vm: c }), i.appendChild(u.firstElementChild), { close: () => {
    c.component.exposed.visible.value = false;
  } };
};
yv.forEach((e) => {
  $o[e] = (t = {}, n) => ((Be(t) || Dt(t)) && (t = { message: t }), $o({ ...t, type: e }, n));
});
function fL(e, t, n) {
  const l = Qa[t], a = l.findIndex(({ vm: c }) => {
    var d;
    return ((d = c.component) == null ? void 0 : d.props.id) === e;
  });
  if (a === -1) return;
  const { vm: s } = l[a];
  if (!s) return;
  n == null ? void 0 : n(s);
  const r = s.el.offsetHeight, i = t.split("-")[0];
  l.splice(a, 1);
  const u = l.length;
  if (!(u < 1)) for (let c = a; c < u; c++) {
    const { el: d, component: f } = l[c].vm, m = Number.parseInt(d.style[i], 10) - r - Lr;
    f.props.offset = m;
  }
}
function pL() {
  for (const e of Object.values(Qa)) e.forEach(({ vm: t }) => {
    t.component.exposed.visible.value = false;
  });
}
$o.closeAll = pL;
$o._context = null;
const vL = vd($o, "$notify");
var hL = [_R, LR, YR, aL, vL, Jf], ML = hm([...SR, ...hL]);
/*! Element Plus v2.9.8 */
var OL = { name: "zh-cn", el: { breadcrumb: { label: "\u9762\u5305\u5C51" }, colorpicker: { confirm: "\u786E\u5B9A", clear: "\u6E05\u7A7A", defaultLabel: "\u989C\u8272\u9009\u62E9\u5668", description: "\u5F53\u524D\u989C\u8272 {color}\uFF0C\u6309 Enter \u952E\u9009\u62E9\u65B0\u989C\u8272", alphaLabel: "\u9009\u62E9\u900F\u660E\u5EA6\u7684\u503C" }, datepicker: { now: "\u6B64\u523B", today: "\u4ECA\u5929", cancel: "\u53D6\u6D88", clear: "\u6E05\u7A7A", confirm: "\u786E\u5B9A", dateTablePrompt: "\u4F7F\u7528\u65B9\u5411\u952E\u4E0E Enter \u952E\u53EF\u9009\u62E9\u65E5\u671F", monthTablePrompt: "\u4F7F\u7528\u65B9\u5411\u952E\u4E0E Enter \u952E\u53EF\u9009\u62E9\u6708\u4EFD", yearTablePrompt: "\u4F7F\u7528\u65B9\u5411\u952E\u4E0E Enter \u952E\u53EF\u9009\u62E9\u5E74\u4EFD", selectedDate: "\u5DF2\u9009\u65E5\u671F", selectDate: "\u9009\u62E9\u65E5\u671F", selectTime: "\u9009\u62E9\u65F6\u95F4", startDate: "\u5F00\u59CB\u65E5\u671F", startTime: "\u5F00\u59CB\u65F6\u95F4", endDate: "\u7ED3\u675F\u65E5\u671F", endTime: "\u7ED3\u675F\u65F6\u95F4", prevYear: "\u524D\u4E00\u5E74", nextYear: "\u540E\u4E00\u5E74", prevMonth: "\u4E0A\u4E2A\u6708", nextMonth: "\u4E0B\u4E2A\u6708", year: "\u5E74", month1: "1 \u6708", month2: "2 \u6708", month3: "3 \u6708", month4: "4 \u6708", month5: "5 \u6708", month6: "6 \u6708", month7: "7 \u6708", month8: "8 \u6708", month9: "9 \u6708", month10: "10 \u6708", month11: "11 \u6708", month12: "12 \u6708", weeks: { sun: "\u65E5", mon: "\u4E00", tue: "\u4E8C", wed: "\u4E09", thu: "\u56DB", fri: "\u4E94", sat: "\u516D" }, weeksFull: { sun: "\u661F\u671F\u65E5", mon: "\u661F\u671F\u4E00", tue: "\u661F\u671F\u4E8C", wed: "\u661F\u671F\u4E09", thu: "\u661F\u671F\u56DB", fri: "\u661F\u671F\u4E94", sat: "\u661F\u671F\u516D" }, months: { jan: "\u4E00\u6708", feb: "\u4E8C\u6708", mar: "\u4E09\u6708", apr: "\u56DB\u6708", may: "\u4E94\u6708", jun: "\u516D\u6708", jul: "\u4E03\u6708", aug: "\u516B\u6708", sep: "\u4E5D\u6708", oct: "\u5341\u6708", nov: "\u5341\u4E00\u6708", dec: "\u5341\u4E8C\u6708" } }, inputNumber: { decrease: "\u51CF\u5C11\u6570\u503C", increase: "\u589E\u52A0\u6570\u503C" }, select: { loading: "\u52A0\u8F7D\u4E2D", noMatch: "\u65E0\u5339\u914D\u6570\u636E", noData: "\u65E0\u6570\u636E", placeholder: "\u8BF7\u9009\u62E9" }, dropdown: { toggleDropdown: "\u5207\u6362\u4E0B\u62C9\u9009\u9879" }, mention: { loading: "\u52A0\u8F7D\u4E2D" }, cascader: { noMatch: "\u65E0\u5339\u914D\u6570\u636E", loading: "\u52A0\u8F7D\u4E2D", placeholder: "\u8BF7\u9009\u62E9", noData: "\u6682\u65E0\u6570\u636E" }, pagination: { goto: "\u524D\u5F80", pagesize: "\u6761/\u9875", total: "\u5171 {total} \u6761", pageClassifier: "\u9875", page: "\u9875", prev: "\u4E0A\u4E00\u9875", next: "\u4E0B\u4E00\u9875", currentPage: "\u7B2C {pager} \u9875", prevPages: "\u5411\u524D {pager} \u9875", nextPages: "\u5411\u540E {pager} \u9875", deprecationWarning: "\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863" }, dialog: { close: "\u5173\u95ED\u6B64\u5BF9\u8BDD\u6846" }, drawer: { close: "\u5173\u95ED\u6B64\u5BF9\u8BDD\u6846" }, messagebox: { title: "\u63D0\u793A", confirm: "\u786E\u5B9A", cancel: "\u53D6\u6D88", error: "\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!", close: "\u5173\u95ED\u6B64\u5BF9\u8BDD\u6846" }, upload: { deleteTip: "\u6309 Delete \u952E\u53EF\u5220\u9664", delete: "\u5220\u9664", preview: "\u67E5\u770B\u56FE\u7247", continue: "\u7EE7\u7EED\u4E0A\u4F20" }, slider: { defaultLabel: "\u6ED1\u5757\u4ECB\u4E8E {min} \u81F3 {max}", defaultRangeStartLabel: "\u9009\u62E9\u8D77\u59CB\u503C", defaultRangeEndLabel: "\u9009\u62E9\u7ED3\u675F\u503C" }, table: { emptyText: "\u6682\u65E0\u6570\u636E", confirmFilter: "\u7B5B\u9009", resetFilter: "\u91CD\u7F6E", clearFilter: "\u5168\u90E8", sumText: "\u5408\u8BA1" }, tour: { next: "\u4E0B\u4E00\u6B65", previous: "\u4E0A\u4E00\u6B65", finish: "\u7ED3\u675F\u5BFC\u89C8" }, tree: { emptyText: "\u6682\u65E0\u6570\u636E" }, transfer: { noMatch: "\u65E0\u5339\u914D\u6570\u636E", noData: "\u65E0\u6570\u636E", titles: ["\u5217\u8868 1", "\u5217\u8868 2"], filterPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9", noCheckedFormat: "\u5171 {total} \u9879", hasCheckedFormat: "\u5DF2\u9009 {checked}/{total} \u9879" }, image: { error: "\u52A0\u8F7D\u5931\u8D25" }, pageHeader: { title: "\u8FD4\u56DE" }, popconfirm: { confirmButtonText: "\u786E\u5B9A", cancelButtonText: "\u53D6\u6D88" }, carousel: { leftArrow: "\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247", rightArrow: "\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247", indicator: "\u5E7B\u706F\u7247\u5207\u6362\u81F3\u7D22\u5F15 {index}" } } };
export {
  YR as E,
  LR as a,
  ML as i,
  OL as z
};
