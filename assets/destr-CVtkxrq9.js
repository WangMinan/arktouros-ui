const e = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, s = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, i = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function u(r, n) {
  if (r === "__proto__" || r === "constructor" && n && typeof n == "object" && "prototype" in n) {
    f(r);
    return;
  }
  return n;
}
function f(r) {
  console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`);
}
function c(r, n = {}) {
  if (typeof r != "string") return r;
  const o = r.trim();
  if (r[0] === '"' && r.endsWith('"') && !r.includes("\\")) return o.slice(1, -1);
  if (o.length <= 9) {
    const t = o.toLowerCase();
    if (t === "true") return true;
    if (t === "false") return false;
    if (t === "undefined") return;
    if (t === "null") return null;
    if (t === "nan") return Number.NaN;
    if (t === "infinity") return Number.POSITIVE_INFINITY;
    if (t === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!i.test(r)) {
    if (n.strict) throw new SyntaxError("[destr] Invalid JSON");
    return r;
  }
  try {
    if (e.test(r) || s.test(r)) {
      if (n.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(r, u);
    }
    return JSON.parse(r);
  } catch (t) {
    if (n.strict) throw t;
    return r;
  }
}
export {
  c as d
};
