import { ao as V, r as B, an as D, m as T, ax as tt, X as et, i as x, ay as W, ad as J, f as st, h as nt, w as ot, n as ct, af as rt, k as K, t as ut } from "./@vue-ggRZ67L8.js";
/*!
* pinia v3.0.3
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
let X;
const R = (t) => X = t, q = Symbol();
function I(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var g;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(g || (g = {}));
function St() {
  const t = V(true), o = t.run(() => B({}));
  let s = [], e = [];
  const r = D({ install(u) {
    R(r), r._a = u, u.provide(q, r), u.config.globalProperties.$pinia = r, e.forEach((a) => s.push(a)), e = [];
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
function p(t, ...o) {
  t.slice().forEach((s) => {
    s(...o);
  });
}
const at = (t) => t(), M = Symbol(), k = Symbol();
function L(t, o) {
  t instanceof Map && o instanceof Map ? o.forEach((s, e) => t.set(e, s)) : t instanceof Set && o instanceof Set && o.forEach(t.add, t);
  for (const s in o) {
    if (!o.hasOwnProperty(s)) continue;
    const e = o[s], r = t[s];
    I(r) && I(e) && t.hasOwnProperty(s) && !x(e) && !W(e) ? t[s] = L(r, e) : t[s] = e;
  }
  return t;
}
const ft = Symbol();
function lt(t) {
  return !I(t) || !Object.prototype.hasOwnProperty.call(t, ft);
}
const { assign: h } = Object;
function it(t) {
  return !!(x(t) && t.effect);
}
function ht(t, o, s, e) {
  const { state: r, actions: u, getters: a } = o, O = s.state.value[t];
  let y;
  function b() {
    O || (s.state.value[t] = r ? r() : {});
    const S = rt(s.state.value[t]);
    return h(S, u, Object.keys(a || {}).reduce((v, m) => (v[m] = D(K(() => {
      R(s);
      const _ = s._s.get(t);
      return a[m].call(_, _);
    })), v), {}));
  }
  return y = Q(t, b, o, s, e, true), y;
}
function Q(t, o, s = {}, e, r, u) {
  let a;
  const O = h({ actions: {} }, s), y = { deep: true };
  let b, S, v = [], m = [], _;
  const d = e.state.value[t];
  !u && !d && (e.state.value[t] = {}), B({});
  let N;
  function F(c) {
    let n;
    b = S = false, typeof c == "function" ? (c(e.state.value[t]), n = { type: g.patchFunction, storeId: t, events: _ }) : (L(e.state.value[t], c), n = { type: g.patchObject, payload: c, storeId: t, events: _ });
    const f = N = Symbol();
    ct().then(() => {
      N === f && (b = true);
    }), S = true, p(v, n, e.state.value[t]);
  }
  const U = u ? function() {
    const { state: n } = s, f = n ? n() : {};
    this.$patch((j) => {
      h(j, f);
    });
  } : z;
  function Y() {
    a.stop(), v = [], m = [], e._s.delete(t);
  }
  const A = (c, n = "") => {
    if (M in c) return c[k] = n, c;
    const f = function() {
      R(e);
      const j = Array.from(arguments), w = [], E = [];
      function G(l) {
        w.push(l);
      }
      function $(l) {
        E.push(l);
      }
      p(m, { args: j, name: f[k], store: i, after: G, onError: $ });
      let C;
      try {
        C = c.apply(this && this.$id === t ? this : i, j);
      } catch (l) {
        throw p(E, l), l;
      }
      return C instanceof Promise ? C.then((l) => (p(w, l), l)).catch((l) => (p(E, l), Promise.reject(l))) : (p(w, C), C);
    };
    return f[M] = true, f[k] = n, f;
  }, Z = { _p: e, $id: t, $onAction: H.bind(null, m), $patch: F, $reset: U, $subscribe(c, n = {}) {
    const f = H(v, c, n.detached, () => j()), j = a.run(() => ot(() => e.state.value[t], (w) => {
      (n.flush === "sync" ? S : b) && c({ storeId: t, type: g.direct, events: _ }, w);
    }, h({}, y, n)));
    return f;
  }, $dispose: Y }, i = et(Z);
  e._s.set(t, i);
  const P = (e._a && e._a.runWithContext || at)(() => e._e.run(() => (a = V()).run(() => o({ action: A }))));
  for (const c in P) {
    const n = P[c];
    if (x(n) && !it(n) || W(n)) u || (d && lt(n) && (x(n) ? n.value = d[c] : L(n, d[c])), e.state.value[t][c] = n);
    else if (typeof n == "function") {
      const f = A(n, c);
      P[c] = f, O.actions[c] = n;
    }
  }
  return h(i, P), h(J(i), P), Object.defineProperty(i, "$state", { get: () => e.state.value[t], set: (c) => {
    F((n) => {
      h(n, c);
    });
  } }), e._p.forEach((c) => {
    h(i, a.run(() => c({ store: i, app: e._a, pinia: e, options: O })));
  }), d && u && s.hydrate && s.hydrate(i.$state, d), b = true, S = true, i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vt(t, o, s) {
  let e;
  const r = typeof o == "function";
  e = r ? s : o;
  function u(a, O) {
    const y = tt();
    return a = a || (y ? T(q, null) : null), a && R(a), a = X, a._s.has(t) || (r ? Q(t, o, e, a) : ht(t, e, a)), a._s.get(t);
  }
  return u.$id = t, u;
}
function mt(t) {
  const o = J(t), s = {};
  for (const e in o) {
    const r = o[e];
    r.effect ? s[e] = K({ get: () => t[e], set(u) {
      t[e] = u;
    } }) : (x(r) || W(r)) && (s[e] = ut(t, e));
  }
  return s;
}
export {
  St as c,
  vt as d,
  mt as s
};
