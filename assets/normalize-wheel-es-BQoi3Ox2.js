var h = false, o, l, f, u, d, D, c, s, p, m, b, w, x, O, X;
function a() {
  if (!h) {
    h = true;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (w = /\b(iPhone|iP[ao]d)/.exec(e), x = /\b(iP[ao]d)/.exec(e), m = /Android/i.exec(e), O = /FBAN\/\w+;/i.exec(e), X = /Mobile/i.exec(e), b = !!/Win64/.exec(e), t) {
      o = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, o && document && document.documentMode && (o = document.documentMode);
      var r = /(?:Trident\/(\d+.\d+))/.exec(e);
      D = r ? parseFloat(r[1]) + 4 : o, l = t[2] ? parseFloat(t[2]) : NaN, f = t[3] ? parseFloat(t[3]) : NaN, u = t[4] ? parseFloat(t[4]) : NaN, u ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), d = t && t[1] ? parseFloat(t[1]) : NaN) : d = NaN;
    } else o = l = f = d = u = NaN;
    if (n) {
      if (n[1]) {
        var i = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        c = i ? parseFloat(i[1].replace("_", ".")) : true;
      } else c = false;
      s = !!n[2], p = !!n[3];
    } else c = s = p = false;
  }
}
var v = { ie: function() {
  return a() || o;
}, ieCompatibilityMode: function() {
  return a() || D > o;
}, ie64: function() {
  return v.ie() && b;
}, firefox: function() {
  return a() || l;
}, opera: function() {
  return a() || f;
}, webkit: function() {
  return a() || u;
}, safari: function() {
  return v.webkit();
}, chrome: function() {
  return a() || d;
}, windows: function() {
  return a() || s;
}, osx: function() {
  return a() || c;
}, linux: function() {
  return a() || p;
}, iphone: function() {
  return a() || w;
}, mobile: function() {
  return a() || w || x || m || X;
}, nativeApp: function() {
  return a() || O;
}, android: function() {
  return a() || m;
}, ipad: function() {
  return a() || x;
} }, S = v, I = !!(typeof window < "u" && window.document && window.document.createElement), P = { canUseDOM: I }, A = P, E;
A.canUseDOM && (E = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true);
function T(e, t) {
  if (!A.canUseDOM || t && !("addEventListener" in document)) return false;
  var n = "on" + e, r = n in document;
  if (!r) {
    var i = document.createElement("div");
    i.setAttribute(n, "return;"), r = typeof i[n] == "function";
  }
  return !r && E && e === "wheel" && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
}
var y = T, N = 10, M = 40, F = 800;
function Y(e) {
  var t = 0, n = 0, r = 0, i = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = t * N, i = n * N, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || i) && e.deltaMode && (e.deltaMode == 1 ? (r *= M, i *= M) : (r *= F, i *= F)), r && !t && (t = r < 1 ? -1 : 1), i && !n && (n = i < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: r, pixelY: i };
}
Y.getEventType = function() {
  return S.firefox() ? "DOMMouseScroll" : y("wheel") ? "wheel" : "mousewheel";
};
var U = Y;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
export {
  U as Y
};
