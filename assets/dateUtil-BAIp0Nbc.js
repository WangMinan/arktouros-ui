const S = (e) => {
  if (e === "0") return "unknown";
  let t = String(e);
  t.length > 13 ? t = t.slice(0, 13) : t.length < 13 && (t = t.padEnd(13, "0"));
  const n = new Date(Number(t)), r = n.getFullYear(), s = String(n.getMonth() + 1).padStart(2, "0"), a = String(n.getDate()).padStart(2, "0"), o = String(n.getHours()).padStart(2, "0"), i = String(n.getMinutes()).padStart(2, "0"), g = String(n.getSeconds()).padStart(2, "0"), d = String(n.getMilliseconds()).padStart(3, "0");
  return `${r}-${s}-${a} ${o}:${i}:${g}.${d}`;
};
export {
  S as t
};
