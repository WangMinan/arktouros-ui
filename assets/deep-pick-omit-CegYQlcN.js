function u(e, n) {
  if (e == null) return;
  let r = e;
  for (let t = 0; t < n.length; t++) {
    if (r == null || r[n[t]] == null) return;
    r = r[n[t]];
  }
  return r;
}
function i(e, n, r) {
  if (r.length === 0) return n;
  const t = r[0];
  return r.length > 1 && (n = i(typeof e != "object" || e === null || !Object.prototype.hasOwnProperty.call(e, t) ? Number.isInteger(Number(r[1])) ? [] : {} : e[t], n, Array.prototype.slice.call(r, 1))), Number.isInteger(Number(t)) && Array.isArray(e) ? e.slice()[t] : Object.assign({}, e, { [t]: n });
}
function l(e, n) {
  if (e == null || n.length === 0) return e;
  if (n.length === 1) {
    if (e == null) return e;
    if (Number.isInteger(n[0]) && Array.isArray(e)) return Array.prototype.slice.call(e, 0).splice(n[0], 1);
    const r = {};
    for (const t in e) r[t] = e[t];
    return delete r[n[0]], r;
  }
  if (e[n[0]] == null) {
    if (Number.isInteger(n[0]) && Array.isArray(e)) return Array.prototype.concat.call([], e);
    const r = {};
    for (const t in e) r[t] = e[t];
    return r;
  }
  return i(e, l(e[n[0]], Array.prototype.slice.call(n, 1)), [n[0]]);
}
function s(e, n) {
  return n.map((r) => r.split(".")).map((r) => [r, u(e, r)]).filter((r) => r[1] !== void 0).reduce((r, t) => i(r, t[1], t[0]), {});
}
function c(e, n) {
  return n.map((r) => r.split(".")).reduce((r, t) => l(r, t), e);
}
export {
  c as a,
  s as d
};
