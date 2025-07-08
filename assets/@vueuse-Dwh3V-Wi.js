import { u as q, b as z, n as J, r as D, e as P, w as W, g as x, f as U, h as X, i as Y, t as Z, j as ee, s as te, k as E, l as ne } from "./@vue-ggRZ67L8.js";
function H(e) {
  return U() ? (X(e), true) : false;
}
function O(e) {
  return typeof e == "function" ? e() : q(e);
}
const re = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ae = Object.prototype.toString, oe = (e) => ae.call(e) === "[object Object]", B = () => {
};
function se(e, t) {
  function n(...o) {
    return new Promise((r, s) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(r).catch(s);
    });
  }
  return n;
}
const G = (e) => e();
function ie(e = G) {
  const t = D(true);
  function n() {
    t.value = false;
  }
  function o() {
    t.value = true;
  }
  const r = (...s) => {
    t.value && e(...s);
  };
  return { isActive: P(t), pause: n, resume: o, eventFilter: r };
}
function ue(e) {
  return x();
}
function le(...e) {
  if (e.length !== 1) return Z(...e);
  const t = e[0];
  return typeof t == "function" ? P(ee(() => ({ get: t, set: B }))) : D(t);
}
function ce(e, t, n = {}) {
  const { eventFilter: o = G, ...r } = n;
  return W(e, se(o, t), r);
}
function fe(e, t, n = {}) {
  const { eventFilter: o, ...r } = n, { eventFilter: s, pause: u, resume: i, isActive: l } = ie(o);
  return { stop: ce(e, t, { ...r, eventFilter: s }), pause: u, resume: i, isActive: l };
}
function I(e, t = true, n) {
  ue() ? z(e, n) : t ? e() : J(e);
}
function Ce(e = false, t = {}) {
  const { truthyValue: n = true, falsyValue: o = false } = t, r = Y(e), s = D(e);
  function u(i) {
    if (arguments.length) return s.value = i, s.value;
    {
      const l = O(n);
      return s.value = s.value === l ? O(o) : l, s.value;
    }
  }
  return r ? u : [s, u];
}
function K(e) {
  var t;
  const n = O(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const M = re ? window : void 0;
function R(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = M) : [t, n, o, r] = e, !t) return B;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], u = () => {
    s.forEach((h) => h()), s.length = 0;
  }, i = (h, c, S, g) => (h.addEventListener(c, S, g), () => h.removeEventListener(c, S, g)), l = W(() => [K(t), O(r)], ([h, c]) => {
    if (u(), !h) return;
    const S = oe(c) ? { ...c } : c;
    s.push(...n.flatMap((g) => o.map((v) => i(h, g, v, S))));
  }, { immediate: true, flush: "post" }), p = () => {
    l(), u();
  };
  return H(p), p;
}
function de() {
  const e = D(false), t = x();
  return t && z(() => {
    e.value = true;
  }, t), e;
}
function pe(e) {
  const t = de();
  return E(() => (t.value, !!e()));
}
function he(e, t = {}) {
  const { window: n = M } = t, o = pe(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const s = D(false), u = (p) => {
    s.value = p.matches;
  }, i = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", u) : r.removeListener(u));
  }, l = ne(() => {
    o.value && (i(), r = n.matchMedia(O(e)), "addEventListener" in r ? r.addEventListener("change", u) : r.addListener(u), s.value = r.matches);
  });
  return H(() => {
    l(), i(), r = void 0;
  }), s;
}
const j = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, F = "__vueuse_ssr_handlers__", me = ge();
function ge() {
  return F in j || (j[F] = j[F] || {}), j[F];
}
function Q(e, t) {
  return me[e] || t;
}
function ve(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const ye = { boolean: { read: (e) => e === "true", write: (e) => String(e) }, object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) }, number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) }, any: { read: (e) => e, write: (e) => String(e) }, string: { read: (e) => e, write: (e) => String(e) }, map: { read: (e) => new Map(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e.entries())) }, set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) }, date: { read: (e) => new Date(e), write: (e) => e.toISOString() } }, V = "vueuse-storage";
function we(e, t, n, o = {}) {
  var r;
  const { flush: s = "pre", deep: u = true, listenToStorageChanges: i = true, writeDefaults: l = true, mergeDefaults: p = false, shallow: h, window: c = M, eventFilter: S, onError: g = (a) => {
    console.error(a);
  }, initOnMounted: v } = o, m = (h ? te : D)(typeof t == "function" ? t() : t);
  if (!n) try {
    n = Q("getDefaultStorage", () => {
      var a;
      return (a = M) == null ? void 0 : a.localStorage;
    })();
  } catch (a) {
    g(a);
  }
  if (!n) return m;
  const w = O(t), L = ve(w), b = (r = o.serializer) != null ? r : ye[L], { pause: T, resume: f } = fe(m, () => _(m.value), { flush: s, deep: u, eventFilter: S });
  c && i && I(() => {
    R(c, "storage", y), R(c, V, N), v && y();
  }), v || y();
  function C(a, d) {
    c && c.dispatchEvent(new CustomEvent(V, { detail: { key: e, oldValue: a, newValue: d, storageArea: n } }));
  }
  function _(a) {
    try {
      const d = n.getItem(e);
      if (a == null) C(d, null), n.removeItem(e);
      else {
        const A = b.write(a);
        d !== A && (n.setItem(e, A), C(d, A));
      }
    } catch (d) {
      g(d);
    }
  }
  function k(a) {
    const d = a ? a.newValue : n.getItem(e);
    if (d == null) return l && w != null && n.setItem(e, b.write(w)), w;
    if (!a && p) {
      const A = b.read(d);
      return typeof p == "function" ? p(A, w) : L === "object" && !Array.isArray(A) ? { ...w, ...A } : A;
    } else return typeof d != "string" ? d : b.read(d);
  }
  function y(a) {
    if (!(a && a.storageArea !== n)) {
      if (a && a.key == null) {
        m.value = w;
        return;
      }
      if (!(a && a.key !== e)) {
        T();
        try {
          (a == null ? void 0 : a.newValue) !== b.write(m.value) && (m.value = k(a));
        } catch (d) {
          g(d);
        } finally {
          a ? J(f) : f();
        }
      }
    }
  }
  function N(a) {
    y(a.detail);
  }
  return m;
}
function $(e) {
  return he("(prefers-color-scheme: dark)", e);
}
function Se(e = {}) {
  const { selector: t = "html", attribute: n = "class", initialValue: o = "auto", window: r = M, storage: s, storageKey: u = "vueuse-color-scheme", listenToStorageChanges: i = true, storageRef: l, emitAuto: p, disableTransition: h = true } = e, c = { auto: "", light: "light", dark: "dark", ...e.modes || {} }, S = $({ window: r }), g = E(() => S.value ? "dark" : "light"), v = l || (u == null ? le(o) : we(u, o, s, { window: r, listenToStorageChanges: i })), m = E(() => v.value === "auto" ? g.value : v.value), w = Q("updateHTMLAttrs", (f, C, _) => {
    const k = typeof f == "string" ? r == null ? void 0 : r.document.querySelector(f) : K(f);
    if (!k) return;
    let y;
    if (h && (y = r.document.createElement("style"), y.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), r.document.head.appendChild(y)), C === "class") {
      const N = _.split(/\s/g);
      Object.values(c).flatMap((a) => (a || "").split(/\s/g)).filter(Boolean).forEach((a) => {
        N.includes(a) ? k.classList.add(a) : k.classList.remove(a);
      });
    } else k.setAttribute(C, _);
    h && (r.getComputedStyle(y).opacity, document.head.removeChild(y));
  });
  function L(f) {
    var C;
    w(t, n, (C = c[f]) != null ? C : f);
  }
  function b(f) {
    e.onChanged ? e.onChanged(f, L) : L(f);
  }
  W(m, b, { flush: "post", immediate: true }), I(() => b(m.value));
  const T = E({ get() {
    return p ? v.value : m.value;
  }, set(f) {
    v.value = f;
  } });
  try {
    return Object.assign(T, { store: v, system: g, state: m });
  } catch {
    return T;
  }
}
function Ae(e = {}) {
  const { valueDark: t = "dark", valueLight: n = "", window: o = M } = e, r = Se({ ...e, onChanged: (i, l) => {
    var p;
    e.onChanged ? (p = e.onChanged) == null || p.call(e, i === "dark", l, i) : l(i);
  }, modes: { dark: t, light: n } }), s = E(() => r.system ? r.system.value : $({ window: o }).value ? "dark" : "light");
  return E({ get() {
    return r.value === "dark";
  }, set(i) {
    const l = i ? "dark" : "light";
    s.value === l ? r.value = "auto" : r.value = l;
  } });
}
export {
  Ce as a,
  we as b,
  Ae as u
};
