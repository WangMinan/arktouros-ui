const o = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, s = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, u = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function i(r, t) {
  if (r === "__proto__" || r === "constructor" && t && typeof t == "object" && "prototype" in t) {
    c(r);
    return;
  }
  return t;
}
function c(r) {
  console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`);
}
function f(r, t = {}) {
  if (typeof r != "string") return r;
  if (r[0] === '"' && r[r.length - 1] === '"' && r.indexOf("\\") === -1) return r.slice(1, -1);
  const n = r.trim();
  if (n.length <= 9) switch (n.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY;
  }
  if (!u.test(r)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return r;
  }
  try {
    if (o.test(r) || s.test(r)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(r, i);
    }
    return JSON.parse(r);
  } catch (e) {
    if (t.strict) throw e;
    return r;
  }
}
export {
  f as d
};
