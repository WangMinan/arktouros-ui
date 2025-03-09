import { ao as V, r as B, an as D, m as T, aw as tt, X as et, i as E, ax as W, ab as J, f as st, h as nt, w as ot, n as ct, ad as rt, k as K, t as ut } from "./@vue-CnBZ4jx_.js";
/*!
* pinia v2.3.1
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
let X;
const k = (t) => X = t, q = Symbol();
function L(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var R;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(R || (R = {}));
function St() {
  const t = V(true), o = t.run(() => B({}));
  let s = [], e = [];
  const r = D({ install(u) {
    k(r), r._a = u, u.provide(q, r), u.config.globalProperties.$pinia = r, e.forEach((f) => s.push(f)), e = [];
  }, use(u) {
    return this._a ? s.push(u) : e.push(u), this;
  }, _p: s, _a: null, _e: t, _s: /* @__PURE__ */ new Map(), state: o });
  return r;
}
const z = () => {
};
function H(t, o, s, e = z) {
  t.push(o);
  const r = () => {
    const u = t.indexOf(o);
    u > -1 && (t.splice(u, 1), e());
  };
  return !s && st() && nt(r), r;
}
function w(t, ...o) {
  t.slice().forEach((s) => {
    s(...o);
  });
}
const at = (t) => t(), M = Symbol(), I = Symbol();
function O(t, o) {
  t instanceof Map && o instanceof Map ? o.forEach((s, e) => t.set(e, s)) : t instanceof Set && o instanceof Set && o.forEach(t.add, t);
  for (const s in o) {
    if (!o.hasOwnProperty(s)) continue;
    const e = o[s], r = t[s];
    L(r) && L(e) && t.hasOwnProperty(s) && !E(e) && !W(e) ? t[s] = O(r, e) : t[s] = e;
  }
  return t;
}
const ft = Symbol();
function it(t) {
  return !L(t) || !t.hasOwnProperty(ft);
}
const { assign: y } = Object;
function lt(t) {
  return !!(E(t) && t.effect);
}
function ht(t, o, s, e) {
  const { state: r, actions: u, getters: f } = o, a = s.state.value[t];
  let P;
  function b() {
    a || (s.state.value[t] = r ? r() : {});
    const S = rt(s.state.value[t]);
    return y(S, u, Object.keys(f || {}).reduce((v, m) => (v[m] = D(K(() => {
      k(s);
      const _ = s._s.get(t);
      return f[m].call(_, _);
    })), v), {}));
  }
  return P = Q(t, b, o, s, e, true), P;
}
function Q(t, o, s = {}, e, r, u) {
  let f;
  const a = y({ actions: {} }, s), P = { deep: true };
  let b, S, v = [], m = [], _;
  const d = e.state.value[t];
  !u && !d && (e.state.value[t] = {}), B({});
  let N;
  function F(c) {
    let n;
    b = S = false, typeof c == "function" ? (c(e.state.value[t]), n = { type: R.patchFunction, storeId: t, events: _ }) : (O(e.state.value[t], c), n = { type: R.patchObject, payload: c, storeId: t, events: _ });
    const i = N = Symbol();
    ct().then(() => {
      N === i && (b = true);
    }), S = true, w(v, n, e.state.value[t]);
  }
  const U = u ? function() {
    const { state: n } = s, i = n ? n() : {};
    this.$patch((j) => {
      y(j, i);
    });
  } : z;
  function Y() {
    f.stop(), v = [], m = [], e._s.delete(t);
  }
  const A = (c, n = "") => {
    if (M in c) return c[I] = n, c;
    const i = function() {
      k(e);
      const j = Array.from(arguments), C = [], p = [];
      function G(l) {
        C.push(l);
      }
      function $(l) {
        p.push(l);
      }
      w(m, { args: j, name: i[I], store: h, after: G, onError: $ });
      let x;
      try {
        x = c.apply(this && this.$id === t ? this : h, j);
      } catch (l) {
        throw w(p, l), l;
      }
      return x instanceof Promise ? x.then((l) => (w(C, l), l)).catch((l) => (w(p, l), Promise.reject(l))) : (w(C, x), x);
    };
    return i[M] = true, i[I] = n, i;
  }, Z = { _p: e, $id: t, $onAction: H.bind(null, m), $patch: F, $reset: U, $subscribe(c, n = {}) {
    const i = H(v, c, n.detached, () => j()), j = f.run(() => ot(() => e.state.value[t], (C) => {
      (n.flush === "sync" ? S : b) && c({ storeId: t, type: R.direct, events: _ }, C);
    }, y({}, P, n)));
    return i;
  }, $dispose: Y }, h = et(Z);
  e._s.set(t, h);
  const g = (e._a && e._a.runWithContext || at)(() => e._e.run(() => (f = V()).run(() => o({ action: A }))));
  for (const c in g) {
    const n = g[c];
    if (E(n) && !lt(n) || W(n)) u || (d && it(n) && (E(n) ? n.value = d[c] : O(n, d[c])), e.state.value[t][c] = n);
    else if (typeof n == "function") {
      const i = A(n, c);
      g[c] = i, a.actions[c] = n;
    }
  }
  return y(h, g), y(J(h), g), Object.defineProperty(h, "$state", { get: () => e.state.value[t], set: (c) => {
    F((n) => {
      y(n, c);
    });
  } }), e._p.forEach((c) => {
    y(h, f.run(() => c({ store: h, app: e._a, pinia: e, options: a })));
  }), d && u && s.hydrate && s.hydrate(h.$state, d), b = true, S = true, h;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vt(t, o, s) {
  let e, r;
  const u = typeof o == "function";
  typeof t == "string" ? (e = t, r = u ? s : o) : (r = t, e = t.id);
  function f(a, P) {
    const b = tt();
    return a = a || (b ? T(q, null) : null), a && k(a), a = X, a._s.has(e) || (u ? Q(e, o, r, a) : ht(e, r, a)), a._s.get(e);
  }
  return f.$id = e, f;
}
function mt(t) {
  {
    const o = J(t), s = {};
    for (const e in o) {
      const r = o[e];
      r.effect ? s[e] = K({ get: () => t[e], set(u) {
        t[e] = u;
      } }) : (E(r) || W(r)) && (s[e] = ut(t, e));
    }
    return s;
  }
}
export {
  St as c,
  vt as d,
  mt as s
};
