function s(t, e) {
  return t.length > e ? t.slice(0, e) : t.padEnd(e, "0");
}
const M = (t) => {
  if (t === "0") return "unknown";
  t = s(t, 13), t = Number(t);
  let e = new Date(t), n = e.getFullYear() + "-", g = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-", o = (e.getDate() < 10 ? "0" + e.getDate() : e.getDate()) + " ", r = (e.getHours() < 10 ? "0" + e.getHours() : e.getHours()) + ":", u = (e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()) + ":", l = e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds();
  return n + g + o + r + u + l;
};
export {
  M as t
};
