import { d as z } from "./destr-BPvN1X9m.js";
import { d as m, a as h } from "./deep-pick-omit-CegYQlcN.js";
function y(e, { storage: c, serializer: r, key: s, debug: i, pick: a, omit: d, beforeHydrate: o, afterHydrate: t }, n, f = true) {
  try {
    f && (o == null ? void 0 : o(n));
    const l = c.getItem(s);
    if (l) {
      const u = r.deserialize(l), g = a ? m(u, a) : u, $ = d ? h(g, d) : g;
      e.$patch($);
    }
    f && (t == null ? void 0 : t(n));
  } catch (l) {
    i && console.error("[pinia-plugin-persistedstate]", l);
  }
}
function p(e, { storage: c, serializer: r, key: s, debug: i, pick: a, omit: d }) {
  try {
    const o = a ? m(e, a) : e, t = d ? h(o, d) : o, n = r.serialize(t);
    c.setItem(s, n);
  } catch (o) {
    i && console.error("[pinia-plugin-persistedstate]", o);
  }
}
function S(e, c, r) {
  const { pinia: s, store: i, options: { persist: a = r } } = e;
  if (!a) return;
  if (!(i.$id in s.state.value)) {
    const t = s._s.get(i.$id.replace("__hot:", ""));
    t && Promise.resolve().then(() => t.$persist());
    return;
  }
  const o = (Array.isArray(a) ? a : a === true ? [{}] : [a]).map(c);
  i.$hydrate = ({ runHooks: t = true } = {}) => {
    o.forEach((n) => {
      y(i, n, e, t);
    });
  }, i.$persist = () => {
    o.forEach((t) => {
      p(i.$state, t);
    });
  }, o.forEach((t) => {
    y(i, t, e), i.$subscribe((n, f) => p(f, t), { detached: true });
  });
}
function b(e = {}) {
  return function(c) {
    S(c, (r) => ({ key: (e.key ? e.key : (s) => s)(r.key ?? c.store.$id), debug: r.debug ?? e.debug ?? false, serializer: r.serializer ?? e.serializer ?? { serialize: (s) => JSON.stringify(s), deserialize: (s) => z(s) }, storage: r.storage ?? e.storage ?? window.localStorage, beforeHydrate: r.beforeHydrate, afterHydrate: r.afterHydrate, pick: r.pick, omit: r.omit }), e.auto ?? false);
  };
}
var O = b();
export {
  O as s
};
