import { _ as N } from "./tslib-BDyQ-Jie.js";
var kf = /* @__PURE__ */ function() {
  function r() {
    this.firefox = false, this.ie = false, this.edge = false, this.newEdge = false, this.weChat = false;
  }
  return r;
}(), Bf = /* @__PURE__ */ function() {
  function r() {
    this.browser = new kf(), this.node = false, this.wxa = false, this.worker = false, this.svgSupported = false, this.touchEventsSupported = false, this.pointerEventsSupported = false, this.domSupported = false, this.transformSupported = false, this.transform3dSupported = false, this.hasGlobalWindow = typeof window < "u";
  }
  return r;
}(), X = new Bf();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (X.wxa = true, X.touchEventsSupported = true) : typeof document > "u" && typeof self < "u" ? X.worker = true : !X.hasGlobalWindow || "Deno" in window ? (X.node = true, X.svgSupported = true) : Hf(navigator.userAgent, X);
function Hf(r, t) {
  var e = t.browser, i = r.match(/Firefox\/([\d.]+)/), a = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), n = r.match(/Edge?\/([\d.]+)/), s = /micromessenger/i.test(r);
  i && (e.firefox = true, e.version = i[1]), a && (e.ie = true, e.version = a[1]), n && (e.edge = true, e.version = n[1], e.newEdge = +n[1].split(".")[0] > 18), s && (e.weChat = true), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11), t.domSupported = typeof document < "u";
  var o = document.documentElement.style;
  t.transform3dSupported = (e.ie && "transition" in o || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in o) && !("OTransition" in o), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
}
var nn = 12, ho = "sans-serif", Qt = nn + "px " + ho, zf = 20, Nf = 100, Yf = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function Gf(r) {
  var t = {};
  if (typeof JSON > "u") return t;
  for (var e = 0; e < r.length; e++) {
    var i = String.fromCharCode(e + 32), a = (r.charCodeAt(e) - zf) / Nf;
    t[i] = a;
  }
  return t;
}
var Xf = Gf(Yf), Ci = { createCanvas: function() {
  return typeof document < "u" && document.createElement("canvas");
}, measureText: /* @__PURE__ */ function() {
  var r, t;
  return function(e, i) {
    if (!r) {
      var a = Ci.createCanvas();
      r = a && a.getContext("2d");
    }
    if (r) return t !== i && (t = r.font = i || Qt), r.measureText(e);
    e = e || "", i = i || Qt;
    var n = /((?:\d+)?\.?\d*)px/.exec(i), s = n && +n[1] || nn, o = 0;
    if (i.indexOf("mono") >= 0) o = s * e.length;
    else for (var f = 0; f < e.length; f++) {
      var h = Xf[e[f]];
      o += h == null ? s : h * s;
    }
    return { width: o };
  };
}(), loadImage: function(r, t, e) {
  var i = new Image();
  return i.onload = t, i.onerror = e, i.src = r, i;
} }, uo = Pi(["Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas"], function(r, t) {
  return r["[object " + t + "]"] = true, r;
}, {}), vo = Pi(["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64"], function(r, t) {
  return r["[object " + t + "Array]"] = true, r;
}, {}), Kr = Object.prototype.toString, Mi = Array.prototype, Uf = Mi.forEach, Wf = Mi.filter, sn = Mi.slice, qf = Mi.map, Pn = (function() {
}).constructor, Fe = Pn ? Pn.prototype : null, on = "__proto__", $f = 2311;
function lo() {
  return $f++;
}
function fn() {
  for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, r);
}
function Pr(r) {
  if (r == null || typeof r != "object") return r;
  var t = r, e = Kr.call(r);
  if (e === "[object Array]") {
    if (!de(r)) {
      t = [];
      for (var i = 0, a = r.length; i < a; i++) t[i] = Pr(r[i]);
    }
  } else if (vo[e]) {
    if (!de(r)) {
      var n = r.constructor;
      if (n.from) t = n.from(r);
      else {
        t = new n(r.length);
        for (var i = 0, a = r.length; i < a; i++) t[i] = r[i];
      }
    }
  } else if (!uo[e] && !de(r) && !Pa(r)) {
    t = {};
    for (var s in r) r.hasOwnProperty(s) && s !== on && (t[s] = Pr(r[s]));
  }
  return t;
}
function Br(r, t, e) {
  if (!Xt(t) || !Xt(r)) return e ? Pr(t) : r;
  for (var i in t) if (t.hasOwnProperty(i) && i !== on) {
    var a = r[i], n = t[i];
    Xt(n) && Xt(a) && !Vr(n) && !Vr(a) && !Pa(n) && !Pa(a) && !Ln(n) && !Ln(a) && !de(n) && !de(a) ? Br(a, n, e) : (e || !(i in r)) && (r[i] = Pr(t[i]));
  }
  return r;
}
function pc(r, t) {
  for (var e = r[0], i = 1, a = r.length; i < a; i++) e = Br(e, r[i], t);
  return e;
}
function z(r, t) {
  if (Object.assign) Object.assign(r, t);
  else for (var e in t) t.hasOwnProperty(e) && e !== on && (r[e] = t[e]);
  return r;
}
function wt(r, t, e) {
  for (var i = G(t), a = 0, n = i.length; a < n; a++) {
    var s = i[a];
    (e ? t[s] != null : r[s] == null) && (r[s] = t[s]);
  }
  return r;
}
function It(r, t) {
  if (r) {
    if (r.indexOf) return r.indexOf(t);
    for (var e = 0, i = r.length; e < i; e++) if (r[e] === t) return e;
  }
  return -1;
}
function gc(r, t) {
  var e = r.prototype;
  function i() {
  }
  i.prototype = t.prototype, r.prototype = new i();
  for (var a in e) e.hasOwnProperty(a) && (r.prototype[a] = e[a]);
  r.prototype.constructor = r, r.superClass = t;
}
function co(r, t, e) {
  if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames) for (var i = Object.getOwnPropertyNames(t), a = 0; a < i.length; a++) {
    var n = i[a];
    n !== "constructor" && (e ? t[n] != null : r[n] == null) && (r[n] = t[n]);
  }
  else wt(r, t, e);
}
function Ot(r) {
  return !r || typeof r == "string" ? false : typeof r.length == "number";
}
function nt(r, t, e) {
  if (r && t) if (r.forEach && r.forEach === Uf) r.forEach(t, e);
  else if (r.length === +r.length) for (var i = 0, a = r.length; i < a; i++) t.call(e, r[i], i, r);
  else for (var n in r) r.hasOwnProperty(n) && t.call(e, r[n], n, r);
}
function Z(r, t, e) {
  if (!r) return [];
  if (!t) return po(r);
  if (r.map && r.map === qf) return r.map(t, e);
  for (var i = [], a = 0, n = r.length; a < n; a++) i.push(t.call(e, r[a], a, r));
  return i;
}
function Pi(r, t, e, i) {
  if (r && t) {
    for (var a = 0, n = r.length; a < n; a++) e = t.call(i, e, r[a], a, r);
    return e;
  }
}
function Ma(r, t, e) {
  if (!r) return [];
  if (!t) return po(r);
  if (r.filter && r.filter === Wf) return r.filter(t, e);
  for (var i = [], a = 0, n = r.length; a < n; a++) t.call(e, r[a], a, r) && i.push(r[a]);
  return i;
}
function _c(r, t, e) {
  if (r && t) {
    for (var i = 0, a = r.length; i < a; i++) if (t.call(e, r[i], i, r)) return r[i];
  }
}
function G(r) {
  if (!r) return [];
  if (Object.keys) return Object.keys(r);
  var t = [];
  for (var e in r) r.hasOwnProperty(e) && t.push(e);
  return t;
}
function Vf(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++) e[i - 2] = arguments[i];
  return function() {
    return r.apply(t, e.concat(sn.call(arguments)));
  };
}
var yc = Fe && xe(Fe.bind) ? Fe.call.bind(Fe.bind) : Vf;
function mc(r) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  return function() {
    return r.apply(this, t.concat(sn.call(arguments)));
  };
}
function Vr(r) {
  return Array.isArray ? Array.isArray(r) : Kr.call(r) === "[object Array]";
}
function xe(r) {
  return typeof r == "function";
}
function kt(r) {
  return typeof r == "string";
}
function wc(r) {
  return Kr.call(r) === "[object String]";
}
function ce(r) {
  return typeof r == "number";
}
function Xt(r) {
  var t = typeof r;
  return t === "function" || !!r && t === "object";
}
function Ln(r) {
  return !!uo[Kr.call(r)];
}
function Zf(r) {
  return !!vo[Kr.call(r)];
}
function Pa(r) {
  return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
}
function Li(r) {
  return r.colorStops != null;
}
function Kf(r) {
  return r.image != null;
}
function Tc(r) {
  return Kr.call(r) === "[object RegExp]";
}
function Qf(r) {
  return r !== r;
}
function bc() {
  for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
  for (var e = 0, i = r.length; e < i; e++) if (r[e] != null) return r[e];
}
function $(r, t) {
  return r ?? t;
}
function ri(r, t, e) {
  return r ?? t ?? e;
}
function po(r) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  return sn.apply(r, t);
}
function Jf(r) {
  if (typeof r == "number") return [r, r, r, r];
  var t = r.length;
  return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
}
function xn(r, t) {
  if (!r) throw new Error(t);
}
function Hr(r) {
  return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var go = "__ec_primitive__";
function Sc(r) {
  r[go] = true;
}
function de(r) {
  return r[go];
}
var jf = function() {
  function r() {
    this.data = {};
  }
  return r.prototype.delete = function(t) {
    var e = this.has(t);
    return e && delete this.data[t], e;
  }, r.prototype.has = function(t) {
    return this.data.hasOwnProperty(t);
  }, r.prototype.get = function(t) {
    return this.data[t];
  }, r.prototype.set = function(t, e) {
    return this.data[t] = e, this;
  }, r.prototype.keys = function() {
    return G(this.data);
  }, r.prototype.forEach = function(t) {
    var e = this.data;
    for (var i in e) e.hasOwnProperty(i) && t(e[i], i);
  }, r;
}(), _o = typeof Map == "function";
function th() {
  return _o ? /* @__PURE__ */ new Map() : new jf();
}
var rh = function() {
  function r(t) {
    var e = Vr(t);
    this.data = th();
    var i = this;
    t instanceof r ? t.each(a) : t && nt(t, a);
    function a(n, s) {
      e ? i.set(n, s) : i.set(s, n);
    }
  }
  return r.prototype.hasKey = function(t) {
    return this.data.has(t);
  }, r.prototype.get = function(t) {
    return this.data.get(t);
  }, r.prototype.set = function(t, e) {
    return this.data.set(t, e), e;
  }, r.prototype.each = function(t, e) {
    this.data.forEach(function(i, a) {
      t.call(e, i, a);
    });
  }, r.prototype.keys = function() {
    var t = this.data.keys();
    return _o ? Array.from(t) : t;
  }, r.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, r;
}();
function Cc(r) {
  return new rh(r);
}
function Mc(r, t) {
  for (var e = new r.constructor(r.length + t.length), i = 0; i < r.length; i++) e[i] = r[i];
  for (var a = r.length, i = 0; i < t.length; i++) e[i + a] = t[i];
  return e;
}
function xi(r, t) {
  var e;
  if (Object.create) e = Object.create(r);
  else {
    var i = function() {
    };
    i.prototype = r, e = new i();
  }
  return t && z(e, t), e;
}
function yo(r) {
  var t = r.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function hi(r, t) {
  return r.hasOwnProperty(t);
}
function br() {
}
var ei = 180 / Math.PI;
function Qr(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function Pc(r, t) {
  return r[0] = t[0], r[1] = t[1], r;
}
function eh(r) {
  return [r[0], r[1]];
}
function Lc(r, t, e) {
  return r[0] = t, r[1] = e, r;
}
function Rn(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
}
function xc(r, t, e, i) {
  return r[0] = t[0] + e[0] * i, r[1] = t[1] + e[1] * i, r;
}
function ih(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
}
function ah(r) {
  return Math.sqrt(nh(r));
}
function nh(r) {
  return r[0] * r[0] + r[1] * r[1];
}
function Hi(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r;
}
function sh(r, t) {
  var e = ah(t);
  return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r;
}
function La(r, t) {
  return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
}
var oh = La;
function fh(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var qr = fh;
function hh(r, t, e, i) {
  return r[0] = t[0] + i * (e[0] - t[0]), r[1] = t[1] + i * (e[1] - t[1]), r;
}
function pe(r, t, e) {
  var i = t[0], a = t[1];
  return r[0] = e[0] * i + e[2] * a + e[4], r[1] = e[1] * i + e[3] * a + e[5], r;
}
function zr(r, t, e) {
  return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
}
function Nr(r, t, e) {
  return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
}
var Lr = /* @__PURE__ */ function() {
  function r(t, e) {
    this.target = t, this.topTarget = e && e.topTarget;
  }
  return r;
}(), uh = function() {
  function r(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return r.prototype._dragStart = function(t) {
    for (var e = t.target; e && !e.draggable; ) e = e.parent || e.__hostTarget;
    e && (this._draggingTarget = e, e.dragging = true, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Lr(e, t), "dragstart", t.event));
  }, r.prototype._drag = function(t) {
    var e = this._draggingTarget;
    if (e) {
      var i = t.offsetX, a = t.offsetY, n = i - this._x, s = a - this._y;
      this._x = i, this._y = a, e.drift(n, s, t), this.handler.dispatchToElement(new Lr(e, t), "drag", t.event);
      var o = this.handler.findHover(i, a, e).target, f = this._dropTarget;
      this._dropTarget = o, e !== o && (f && o !== f && this.handler.dispatchToElement(new Lr(f, t), "dragleave", t.event), o && o !== f && this.handler.dispatchToElement(new Lr(o, t), "dragenter", t.event));
    }
  }, r.prototype._dragEnd = function(t) {
    var e = this._draggingTarget;
    e && (e.dragging = false), this.handler.dispatchToElement(new Lr(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Lr(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, r;
}(), Jr = function() {
  function r(t) {
    t && (this._$eventProcessor = t);
  }
  return r.prototype.on = function(t, e, i, a) {
    this._$handlers || (this._$handlers = {});
    var n = this._$handlers;
    if (typeof e == "function" && (a = i, i = e, e = null), !i || !t) return this;
    var s = this._$eventProcessor;
    e != null && s && s.normalizeQuery && (e = s.normalizeQuery(e)), n[t] || (n[t] = []);
    for (var o = 0; o < n[t].length; o++) if (n[t][o].h === i) return this;
    var f = { h: i, query: e, ctx: a || this, callAtLast: i.zrEventfulCallAtLast }, h = n[t].length - 1, u = n[t][h];
    return u && u.callAtLast ? n[t].splice(h, 0, f) : n[t].push(f), this;
  }, r.prototype.isSilent = function(t) {
    var e = this._$handlers;
    return !e || !e[t] || !e[t].length;
  }, r.prototype.off = function(t, e) {
    var i = this._$handlers;
    if (!i) return this;
    if (!t) return this._$handlers = {}, this;
    if (e) {
      if (i[t]) {
        for (var a = [], n = 0, s = i[t].length; n < s; n++) i[t][n].h !== e && a.push(i[t][n]);
        i[t] = a;
      }
      i[t] && i[t].length === 0 && delete i[t];
    } else delete i[t];
    return this;
  }, r.prototype.trigger = function(t) {
    for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
    if (!this._$handlers) return this;
    var a = this._$handlers[t], n = this._$eventProcessor;
    if (a) for (var s = e.length, o = a.length, f = 0; f < o; f++) {
      var h = a[f];
      if (!(n && n.filter && h.query != null && !n.filter(t, h.query))) switch (s) {
        case 0:
          h.h.call(h.ctx);
          break;
        case 1:
          h.h.call(h.ctx, e[0]);
          break;
        case 2:
          h.h.call(h.ctx, e[0], e[1]);
          break;
        default:
          h.h.apply(h.ctx, e);
          break;
      }
    }
    return n && n.afterTrigger && n.afterTrigger(t), this;
  }, r.prototype.triggerWithContext = function(t) {
    for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
    if (!this._$handlers) return this;
    var a = this._$handlers[t], n = this._$eventProcessor;
    if (a) for (var s = e.length, o = e[s - 1], f = a.length, h = 0; h < f; h++) {
      var u = a[h];
      if (!(n && n.filter && u.query != null && !n.filter(t, u.query))) switch (s) {
        case 0:
          u.h.call(o);
          break;
        case 1:
          u.h.call(o, e[0]);
          break;
        case 2:
          u.h.call(o, e[0], e[1]);
          break;
        default:
          u.h.apply(o, e.slice(1, s - 1));
          break;
      }
    }
    return n && n.afterTrigger && n.afterTrigger(t), this;
  }, r;
}(), vh = Math.log(2);
function xa(r, t, e, i, a, n) {
  var s = i + "-" + a, o = r.length;
  if (n.hasOwnProperty(s)) return n[s];
  if (t === 1) {
    var f = Math.round(Math.log((1 << o) - 1 & ~a) / vh);
    return r[e][f];
  }
  for (var h = i | 1 << e, u = e + 1; i & 1 << u; ) u++;
  for (var v = 0, l = 0, c = 0; l < o; l++) {
    var p = 1 << l;
    p & a || (v += (c % 2 ? -1 : 1) * r[e][l] * xa(r, t - 1, u, h, a | p, n), c++);
  }
  return n[s] = v, v;
}
function An(r, t) {
  var e = [[r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]], [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]], [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]], [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]], [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]], [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]], [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]], [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]], i = {}, a = xa(e, 8, 0, 0, 0, i);
  if (a !== 0) {
    for (var n = [], s = 0; s < 8; s++) for (var o = 0; o < 8; o++) n[o] == null && (n[o] = 0), n[o] += ((s + o) % 2 ? -1 : 1) * xa(e, 7, s === 0 ? 1 : 0, 1 << s, 1 << o, i) / a * t[s];
    return function(f, h, u) {
      var v = h * n[6] + u * n[7] + 1;
      f[0] = (h * n[0] + u * n[1] + n[2]) / v, f[1] = (h * n[3] + u * n[4] + n[5]) / v;
    };
  }
}
var Dn = "___zrEVENTSAVED", zi = [];
function Rc(r, t, e, i, a) {
  return Ra(zi, t, i, a, true) && Ra(r, e, zi[0], zi[1]);
}
function Ra(r, t, e, i, a) {
  if (t.getBoundingClientRect && X.domSupported && !mo(t)) {
    var n = t[Dn] || (t[Dn] = {}), s = lh(t, n), o = ch(s, n, a);
    if (o) return o(r, e, i), true;
  }
  return false;
}
function lh(r, t) {
  var e = t.markers;
  if (e) return e;
  e = t.markers = [];
  for (var i = ["left", "right"], a = ["top", "bottom"], n = 0; n < 4; n++) {
    var s = document.createElement("div"), o = s.style, f = n % 2, h = (n >> 1) % 2;
    o.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", i[f] + ":0", a[h] + ":0", i[1 - f] + ":auto", a[1 - h] + ":auto", ""].join("!important;"), r.appendChild(s), e.push(s);
  }
  return e;
}
function ch(r, t, e) {
  for (var i = e ? "invTrans" : "trans", a = t[i], n = t.srcCoords, s = [], o = [], f = true, h = 0; h < 4; h++) {
    var u = r[h].getBoundingClientRect(), v = 2 * h, l = u.left, c = u.top;
    s.push(l, c), f = f && n && l === n[v] && c === n[v + 1], o.push(r[h].offsetLeft, r[h].offsetTop);
  }
  return f && a ? a : (t.srcCoords = s, t[i] = e ? An(o, s) : An(s, o));
}
function mo(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var dh = /([&<>"'])/g, ph = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function gh(r) {
  return r == null ? "" : (r + "").replace(dh, function(t, e) {
    return ph[e];
  });
}
var _h = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ni = [], yh = X.browser.firefox && +X.browser.version.split(".")[0] < 39;
function Aa(r, t, e, i) {
  return e = e || {}, i ? In(r, t, e) : yh && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : In(r, t, e), e;
}
function In(r, t, e) {
  if (X.domSupported && r.getBoundingClientRect) {
    var i = t.clientX, a = t.clientY;
    if (mo(r)) {
      var n = r.getBoundingClientRect();
      e.zrX = i - n.left, e.zrY = a - n.top;
      return;
    } else if (Ra(Ni, r, i, a)) {
      e.zrX = Ni[0], e.zrY = Ni[1];
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function hn(r) {
  return r || window.event;
}
function bt(r, t, e) {
  if (t = hn(t), t.zrX != null) return t;
  var i = t.type, a = i && i.indexOf("touch") >= 0;
  if (a) {
    var s = i !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    s && Aa(r, s, t, e);
  } else {
    Aa(r, t, t, e);
    var n = mh(t);
    t.zrDelta = n ? n / 120 : -(t.detail || 0) / 3;
  }
  var o = t.button;
  return t.which == null && o !== void 0 && _h.test(t.type) && (t.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), t;
}
function mh(r) {
  var t = r.wheelDelta;
  if (t) return t;
  var e = r.deltaX, i = r.deltaY;
  if (e == null || i == null) return t;
  var a = Math.abs(i !== 0 ? i : e), n = i > 0 ? -1 : i < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * a * n;
}
function wh(r, t, e, i) {
  r.addEventListener(t, e, i);
}
function Th(r, t, e, i) {
  r.removeEventListener(t, e, i);
}
var bh = function(r) {
  r.preventDefault(), r.stopPropagation(), r.cancelBubble = true;
};
function Ac(r) {
  return r.which === 2 || r.which === 3;
}
var Sh = function() {
  function r() {
    this._track = [];
  }
  return r.prototype.recognize = function(t, e, i) {
    return this._doTrack(t, e, i), this._recognize(t);
  }, r.prototype.clear = function() {
    return this._track.length = 0, this;
  }, r.prototype._doTrack = function(t, e, i) {
    var a = t.touches;
    if (a) {
      for (var n = { points: [], touches: [], target: e, event: t }, s = 0, o = a.length; s < o; s++) {
        var f = a[s], h = Aa(i, f, {});
        n.points.push([h.zrX, h.zrY]), n.touches.push(f);
      }
      this._track.push(n);
    }
  }, r.prototype._recognize = function(t) {
    for (var e in Yi) if (Yi.hasOwnProperty(e)) {
      var i = Yi[e](this._track, t);
      if (i) return i;
    }
  }, r;
}();
function En(r) {
  var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function Ch(r) {
  return [(r[0][0] + r[1][0]) / 2, (r[0][1] + r[1][1]) / 2];
}
var Yi = { pinch: function(r, t) {
  var e = r.length;
  if (e) {
    var i = (r[e - 1] || {}).points, a = (r[e - 2] || {}).points || i;
    if (a && a.length > 1 && i && i.length > 1) {
      var n = En(i) / En(a);
      !isFinite(n) && (n = 1), t.pinchScale = n;
      var s = Ch(i);
      return t.pinchX = s[0], t.pinchY = s[1], { type: "pinch", target: r[0].target, event: t };
    }
  }
} };
function Sr() {
  return [1, 0, 0, 1, 0, 0];
}
function Mh(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
}
function wo(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
}
function ge(r, t, e) {
  var i = t[0] * e[0] + t[2] * e[1], a = t[1] * e[0] + t[3] * e[1], n = t[0] * e[2] + t[2] * e[3], s = t[1] * e[2] + t[3] * e[3], o = t[0] * e[4] + t[2] * e[5] + t[4], f = t[1] * e[4] + t[3] * e[5] + t[5];
  return r[0] = i, r[1] = a, r[2] = n, r[3] = s, r[4] = o, r[5] = f, r;
}
function Da(r, t, e) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
}
function To(r, t, e, i) {
  i === void 0 && (i = [0, 0]);
  var a = t[0], n = t[2], s = t[4], o = t[1], f = t[3], h = t[5], u = Math.sin(e), v = Math.cos(e);
  return r[0] = a * v + o * u, r[1] = -a * u + o * v, r[2] = n * v + f * u, r[3] = -n * u + v * f, r[4] = v * (s - i[0]) + u * (h - i[1]) + i[0], r[5] = v * (h - i[1]) - u * (s - i[0]) + i[1], r;
}
function bo(r, t, e) {
  var i = e[0], a = e[1];
  return r[0] = t[0] * i, r[1] = t[1] * a, r[2] = t[2] * i, r[3] = t[3] * a, r[4] = t[4] * i, r[5] = t[5] * a, r;
}
function Ph(r, t) {
  var e = t[0], i = t[2], a = t[4], n = t[1], s = t[3], o = t[5], f = e * s - n * i;
  return f ? (f = 1 / f, r[0] = s * f, r[1] = -n * f, r[2] = -i * f, r[3] = e * f, r[4] = (i * o - s * a) * f, r[5] = (n * a - e * o) * f, r) : null;
}
function Dc(r) {
  var t = Sr();
  return wo(t, r), t;
}
var k = function() {
  function r(t, e) {
    this.x = t || 0, this.y = e || 0;
  }
  return r.prototype.copy = function(t) {
    return this.x = t.x, this.y = t.y, this;
  }, r.prototype.clone = function() {
    return new r(this.x, this.y);
  }, r.prototype.set = function(t, e) {
    return this.x = t, this.y = e, this;
  }, r.prototype.equal = function(t) {
    return t.x === this.x && t.y === this.y;
  }, r.prototype.add = function(t) {
    return this.x += t.x, this.y += t.y, this;
  }, r.prototype.scale = function(t) {
    this.x *= t, this.y *= t;
  }, r.prototype.scaleAndAdd = function(t, e) {
    this.x += t.x * e, this.y += t.y * e;
  }, r.prototype.sub = function(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }, r.prototype.dot = function(t) {
    return this.x * t.x + this.y * t.y;
  }, r.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, r.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, r.prototype.normalize = function() {
    var t = this.len();
    return this.x /= t, this.y /= t, this;
  }, r.prototype.distance = function(t) {
    var e = this.x - t.x, i = this.y - t.y;
    return Math.sqrt(e * e + i * i);
  }, r.prototype.distanceSquare = function(t) {
    var e = this.x - t.x, i = this.y - t.y;
    return e * e + i * i;
  }, r.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, r.prototype.transform = function(t) {
    if (t) {
      var e = this.x, i = this.y;
      return this.x = t[0] * e + t[2] * i + t[4], this.y = t[1] * e + t[3] * i + t[5], this;
    }
  }, r.prototype.toArray = function(t) {
    return t[0] = this.x, t[1] = this.y, t;
  }, r.prototype.fromArray = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.set = function(t, e, i) {
    t.x = e, t.y = i;
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y;
  }, r.len = function(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  }, r.lenSquare = function(t) {
    return t.x * t.x + t.y * t.y;
  }, r.dot = function(t, e) {
    return t.x * e.x + t.y * e.y;
  }, r.add = function(t, e, i) {
    t.x = e.x + i.x, t.y = e.y + i.y;
  }, r.sub = function(t, e, i) {
    t.x = e.x - i.x, t.y = e.y - i.y;
  }, r.scale = function(t, e, i) {
    t.x = e.x * i, t.y = e.y * i;
  }, r.scaleAndAdd = function(t, e, i, a) {
    t.x = e.x + i.x * a, t.y = e.y + i.y * a;
  }, r.lerp = function(t, e, i, a) {
    var n = 1 - a;
    t.x = n * e.x + a * i.x, t.y = n * e.y + a * i.y;
  }, r;
}(), Oe = Math.min, ke = Math.max, tr = new k(), rr = new k(), er = new k(), ir = new k(), te = new k(), re = new k(), U = function() {
  function r(t, e, i, a) {
    i < 0 && (t = t + i, i = -i), a < 0 && (e = e + a, a = -a), this.x = t, this.y = e, this.width = i, this.height = a;
  }
  return r.prototype.union = function(t) {
    var e = Oe(t.x, this.x), i = Oe(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = ke(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = ke(t.y + t.height, this.y + this.height) - i : this.height = t.height, this.x = e, this.y = i;
  }, r.prototype.applyTransform = function(t) {
    r.applyTransform(this, this, t);
  }, r.prototype.calculateTransform = function(t) {
    var e = this, i = t.width / e.width, a = t.height / e.height, n = Sr();
    return Da(n, n, [-e.x, -e.y]), bo(n, n, [i, a]), Da(n, n, [t.x, t.y]), n;
  }, r.prototype.intersect = function(t, e) {
    if (!t) return false;
    t instanceof r || (t = r.create(t));
    var i = this, a = i.x, n = i.x + i.width, s = i.y, o = i.y + i.height, f = t.x, h = t.x + t.width, u = t.y, v = t.y + t.height, l = !(n < f || h < a || o < u || v < s);
    if (e) {
      var c = 1 / 0, p = 0, _ = Math.abs(n - f), d = Math.abs(h - a), g = Math.abs(o - u), y = Math.abs(v - s), m = Math.min(_, d), w = Math.min(g, y);
      n < f || h < a ? m > p && (p = m, _ < d ? k.set(re, -_, 0) : k.set(re, d, 0)) : m < c && (c = m, _ < d ? k.set(te, _, 0) : k.set(te, -d, 0)), o < u || v < s ? w > p && (p = w, g < y ? k.set(re, 0, -g) : k.set(re, 0, y)) : m < c && (c = m, g < y ? k.set(te, 0, g) : k.set(te, 0, -y));
    }
    return e && k.copy(e, l ? te : re), l;
  }, r.prototype.contain = function(t, e) {
    var i = this;
    return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height;
  }, r.prototype.clone = function() {
    return new r(this.x, this.y, this.width, this.height);
  }, r.prototype.copy = function(t) {
    r.copy(this, t);
  }, r.prototype.plain = function() {
    return { x: this.x, y: this.y, width: this.width, height: this.height };
  }, r.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, r.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, r.create = function(t) {
    return new r(t.x, t.y, t.width, t.height);
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height;
  }, r.applyTransform = function(t, e, i) {
    if (!i) {
      t !== e && r.copy(t, e);
      return;
    }
    if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
      var a = i[0], n = i[3], s = i[4], o = i[5];
      t.x = e.x * a + s, t.y = e.y * n + o, t.width = e.width * a, t.height = e.height * n, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
      return;
    }
    tr.x = er.x = e.x, tr.y = ir.y = e.y, rr.x = ir.x = e.x + e.width, rr.y = er.y = e.y + e.height, tr.transform(i), ir.transform(i), rr.transform(i), er.transform(i), t.x = Oe(tr.x, rr.x, er.x, ir.x), t.y = Oe(tr.y, rr.y, er.y, ir.y);
    var f = ke(tr.x, rr.x, er.x, ir.x), h = ke(tr.y, rr.y, er.y, ir.y);
    t.width = f - t.x, t.height = h - t.y;
  }, r;
}(), So = "silent";
function Lh(r, t, e) {
  return { type: r, event: e, target: t.target, topTarget: t.topTarget, cancelBubble: false, offsetX: e.zrX, offsetY: e.zrY, gestureEvent: e.gestureEvent, pinchX: e.pinchX, pinchY: e.pinchY, pinchScale: e.pinchScale, wheelDelta: e.zrDelta, zrByTouch: e.zrByTouch, which: e.which, stop: xh };
}
function xh() {
  bh(this.event);
}
var Rh = function(r) {
  N(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.handler = null, e;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
}(Jr), ee = /* @__PURE__ */ function() {
  function r(t, e) {
    this.x = t, this.y = e;
  }
  return r;
}(), Ah = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], Gi = new U(0, 0, 0, 0), Co = function(r) {
  N(t, r);
  function t(e, i, a, n, s) {
    var o = r.call(this) || this;
    return o._hovered = new ee(0, 0), o.storage = e, o.painter = i, o.painterRoot = n, o._pointerSize = s, a = a || new Rh(), o.proxy = null, o.setHandlerProxy(a), o._draggingMgr = new uh(o), o;
  }
  return t.prototype.setHandlerProxy = function(e) {
    this.proxy && this.proxy.dispose(), e && (nt(Ah, function(i) {
      e.on && e.on(i, this[i], this);
    }, this), e.handler = this), this.proxy = e;
  }, t.prototype.mousemove = function(e) {
    var i = e.zrX, a = e.zrY, n = Mo(this, i, a), s = this._hovered, o = s.target;
    o && !o.__zr && (s = this.findHover(s.x, s.y), o = s.target);
    var f = this._hovered = n ? new ee(i, a) : this.findHover(i, a), h = f.target, u = this.proxy;
    u.setCursor && u.setCursor(h ? h.cursor : "default"), o && h !== o && this.dispatchToElement(s, "mouseout", e), this.dispatchToElement(f, "mousemove", e), h && h !== o && this.dispatchToElement(f, "mouseover", e);
  }, t.prototype.mouseout = function(e) {
    var i = e.zrEventControl;
    i !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), i !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: e });
  }, t.prototype.resize = function() {
    this._hovered = new ee(0, 0);
  }, t.prototype.dispatch = function(e, i) {
    var a = this[e];
    a && a.call(this, i);
  }, t.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, t.prototype.setCursorStyle = function(e) {
    var i = this.proxy;
    i.setCursor && i.setCursor(e);
  }, t.prototype.dispatchToElement = function(e, i, a) {
    e = e || {};
    var n = e.target;
    if (!(n && n.silent)) {
      for (var s = "on" + i, o = Lh(i, e, a); n && (n[s] && (o.cancelBubble = !!n[s].call(n, o)), n.trigger(i, o), n = n.__hostTarget ? n.__hostTarget : n.parent, !o.cancelBubble); ) ;
      o.cancelBubble || (this.trigger(i, o), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(f) {
        typeof f[s] == "function" && f[s].call(f, o), f.trigger && f.trigger(i, o);
      }));
    }
  }, t.prototype.findHover = function(e, i, a) {
    var n = this.storage.getDisplayList(), s = new ee(e, i);
    if (Fn(n, s, e, i, a), this._pointerSize && !s.target) {
      for (var o = [], f = this._pointerSize, h = f / 2, u = new U(e - h, i - h, f, f), v = n.length - 1; v >= 0; v--) {
        var l = n[v];
        l !== a && !l.ignore && !l.ignoreCoarsePointer && (!l.parent || !l.parent.ignoreCoarsePointer) && (Gi.copy(l.getBoundingRect()), l.transform && Gi.applyTransform(l.transform), Gi.intersect(u) && o.push(l));
      }
      if (o.length) for (var c = 4, p = Math.PI / 12, _ = Math.PI * 2, d = 0; d < h; d += c) for (var g = 0; g < _; g += p) {
        var y = e + d * Math.cos(g), m = i + d * Math.sin(g);
        if (Fn(o, s, y, m, a), s.target) return s;
      }
    }
    return s;
  }, t.prototype.processGesture = function(e, i) {
    this._gestureMgr || (this._gestureMgr = new Sh());
    var a = this._gestureMgr;
    i === "start" && a.clear();
    var n = a.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
    if (i === "end" && a.clear(), n) {
      var s = n.type;
      e.gestureEvent = s;
      var o = new ee();
      o.target = n.target, this.dispatchToElement(o, s, n.event);
    }
  }, t;
}(Jr);
nt(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
  Co.prototype[r] = function(t) {
    var e = t.zrX, i = t.zrY, a = Mo(this, e, i), n, s;
    if ((r !== "mouseup" || !a) && (n = this.findHover(e, i), s = n.target), r === "mousedown") this._downEl = s, this._downPoint = [t.zrX, t.zrY], this._upEl = s;
    else if (r === "mouseup") this._upEl = s;
    else if (r === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || oh(this._downPoint, [t.zrX, t.zrY]) > 4) return;
      this._downPoint = null;
    }
    this.dispatchToElement(n, r, t);
  };
});
function Dh(r, t, e) {
  if (r[r.rectHover ? "rectContain" : "contain"](t, e)) {
    for (var i = r, a = void 0, n = false; i; ) {
      if (i.ignoreClip && (n = true), !n) {
        var s = i.getClipPath();
        if (s && !s.contain(t, e)) return false;
      }
      i.silent && (a = true);
      var o = i.__hostTarget;
      i = o || i.parent;
    }
    return a ? So : true;
  }
  return false;
}
function Fn(r, t, e, i, a) {
  for (var n = r.length - 1; n >= 0; n--) {
    var s = r[n], o = void 0;
    if (s !== a && !s.ignore && (o = Dh(s, e, i)) && (!t.topTarget && (t.topTarget = s), o !== So)) {
      t.target = s;
      break;
    }
  }
}
function Mo(r, t, e) {
  var i = r.painter;
  return t < 0 || t > i.getWidth() || e < 0 || e > i.getHeight();
}
var Po = 32, ie = 7;
function Ih(r) {
  for (var t = 0; r >= Po; ) t |= r & 1, r >>= 1;
  return r + t;
}
function On(r, t, e, i) {
  var a = t + 1;
  if (a === e) return 1;
  if (i(r[a++], r[t]) < 0) {
    for (; a < e && i(r[a], r[a - 1]) < 0; ) a++;
    Eh(r, t, a);
  } else for (; a < e && i(r[a], r[a - 1]) >= 0; ) a++;
  return a - t;
}
function Eh(r, t, e) {
  for (e--; t < e; ) {
    var i = r[t];
    r[t++] = r[e], r[e--] = i;
  }
}
function kn(r, t, e, i, a) {
  for (i === t && i++; i < e; i++) {
    for (var n = r[i], s = t, o = i, f; s < o; ) f = s + o >>> 1, a(n, r[f]) < 0 ? o = f : s = f + 1;
    var h = i - s;
    switch (h) {
      case 3:
        r[s + 3] = r[s + 2];
      case 2:
        r[s + 2] = r[s + 1];
      case 1:
        r[s + 1] = r[s];
        break;
      default:
        for (; h > 0; ) r[s + h] = r[s + h - 1], h--;
    }
    r[s] = n;
  }
}
function Xi(r, t, e, i, a, n) {
  var s = 0, o = 0, f = 1;
  if (n(r, t[e + a]) > 0) {
    for (o = i - a; f < o && n(r, t[e + a + f]) > 0; ) s = f, f = (f << 1) + 1, f <= 0 && (f = o);
    f > o && (f = o), s += a, f += a;
  } else {
    for (o = a + 1; f < o && n(r, t[e + a - f]) <= 0; ) s = f, f = (f << 1) + 1, f <= 0 && (f = o);
    f > o && (f = o);
    var h = s;
    s = a - f, f = a - h;
  }
  for (s++; s < f; ) {
    var u = s + (f - s >>> 1);
    n(r, t[e + u]) > 0 ? s = u + 1 : f = u;
  }
  return f;
}
function Ui(r, t, e, i, a, n) {
  var s = 0, o = 0, f = 1;
  if (n(r, t[e + a]) < 0) {
    for (o = a + 1; f < o && n(r, t[e + a - f]) < 0; ) s = f, f = (f << 1) + 1, f <= 0 && (f = o);
    f > o && (f = o);
    var h = s;
    s = a - f, f = a - h;
  } else {
    for (o = i - a; f < o && n(r, t[e + a + f]) >= 0; ) s = f, f = (f << 1) + 1, f <= 0 && (f = o);
    f > o && (f = o), s += a, f += a;
  }
  for (s++; s < f; ) {
    var u = s + (f - s >>> 1);
    n(r, t[e + u]) < 0 ? f = u : s = u + 1;
  }
  return f;
}
function Fh(r, t) {
  var e = ie, i, a, n = 0, s = [];
  i = [], a = [];
  function o(c, p) {
    i[n] = c, a[n] = p, n += 1;
  }
  function f() {
    for (; n > 1; ) {
      var c = n - 2;
      if (c >= 1 && a[c - 1] <= a[c] + a[c + 1] || c >= 2 && a[c - 2] <= a[c] + a[c - 1]) a[c - 1] < a[c + 1] && c--;
      else if (a[c] > a[c + 1]) break;
      u(c);
    }
  }
  function h() {
    for (; n > 1; ) {
      var c = n - 2;
      c > 0 && a[c - 1] < a[c + 1] && c--, u(c);
    }
  }
  function u(c) {
    var p = i[c], _ = a[c], d = i[c + 1], g = a[c + 1];
    a[c] = _ + g, c === n - 3 && (i[c + 1] = i[c + 2], a[c + 1] = a[c + 2]), n--;
    var y = Ui(r[d], r, p, _, 0, t);
    p += y, _ -= y, _ !== 0 && (g = Xi(r[p + _ - 1], r, d, g, g - 1, t), g !== 0 && (_ <= g ? v(p, _, d, g) : l(p, _, d, g)));
  }
  function v(c, p, _, d) {
    var g = 0;
    for (g = 0; g < p; g++) s[g] = r[c + g];
    var y = 0, m = _, w = c;
    if (r[w++] = r[m++], --d === 0) {
      for (g = 0; g < p; g++) r[w + g] = s[y + g];
      return;
    }
    if (p === 1) {
      for (g = 0; g < d; g++) r[w + g] = r[m + g];
      r[w + d] = s[y];
      return;
    }
    for (var S = e, b, T, C; ; ) {
      b = 0, T = 0, C = false;
      do
        if (t(r[m], s[y]) < 0) {
          if (r[w++] = r[m++], T++, b = 0, --d === 0) {
            C = true;
            break;
          }
        } else if (r[w++] = s[y++], b++, T = 0, --p === 1) {
          C = true;
          break;
        }
      while ((b | T) < S);
      if (C) break;
      do {
        if (b = Ui(r[m], s, y, p, 0, t), b !== 0) {
          for (g = 0; g < b; g++) r[w + g] = s[y + g];
          if (w += b, y += b, p -= b, p <= 1) {
            C = true;
            break;
          }
        }
        if (r[w++] = r[m++], --d === 0) {
          C = true;
          break;
        }
        if (T = Xi(s[y], r, m, d, 0, t), T !== 0) {
          for (g = 0; g < T; g++) r[w + g] = r[m + g];
          if (w += T, m += T, d -= T, d === 0) {
            C = true;
            break;
          }
        }
        if (r[w++] = s[y++], --p === 1) {
          C = true;
          break;
        }
        S--;
      } while (b >= ie || T >= ie);
      if (C) break;
      S < 0 && (S = 0), S += 2;
    }
    if (e = S, e < 1 && (e = 1), p === 1) {
      for (g = 0; g < d; g++) r[w + g] = r[m + g];
      r[w + d] = s[y];
    } else {
      if (p === 0) throw new Error();
      for (g = 0; g < p; g++) r[w + g] = s[y + g];
    }
  }
  function l(c, p, _, d) {
    var g = 0;
    for (g = 0; g < d; g++) s[g] = r[_ + g];
    var y = c + p - 1, m = d - 1, w = _ + d - 1, S = 0, b = 0;
    if (r[w--] = r[y--], --p === 0) {
      for (S = w - (d - 1), g = 0; g < d; g++) r[S + g] = s[g];
      return;
    }
    if (d === 1) {
      for (w -= p, y -= p, b = w + 1, S = y + 1, g = p - 1; g >= 0; g--) r[b + g] = r[S + g];
      r[w] = s[m];
      return;
    }
    for (var T = e; ; ) {
      var C = 0, M = 0, P = false;
      do
        if (t(s[m], r[y]) < 0) {
          if (r[w--] = r[y--], C++, M = 0, --p === 0) {
            P = true;
            break;
          }
        } else if (r[w--] = s[m--], M++, C = 0, --d === 1) {
          P = true;
          break;
        }
      while ((C | M) < T);
      if (P) break;
      do {
        if (C = p - Ui(s[m], r, c, p, p - 1, t), C !== 0) {
          for (w -= C, y -= C, p -= C, b = w + 1, S = y + 1, g = C - 1; g >= 0; g--) r[b + g] = r[S + g];
          if (p === 0) {
            P = true;
            break;
          }
        }
        if (r[w--] = s[m--], --d === 1) {
          P = true;
          break;
        }
        if (M = d - Xi(r[y], s, 0, d, d - 1, t), M !== 0) {
          for (w -= M, m -= M, d -= M, b = w + 1, S = m + 1, g = 0; g < M; g++) r[b + g] = s[S + g];
          if (d <= 1) {
            P = true;
            break;
          }
        }
        if (r[w--] = r[y--], --p === 0) {
          P = true;
          break;
        }
        T--;
      } while (C >= ie || M >= ie);
      if (P) break;
      T < 0 && (T = 0), T += 2;
    }
    if (e = T, e < 1 && (e = 1), d === 1) {
      for (w -= p, y -= p, b = w + 1, S = y + 1, g = p - 1; g >= 0; g--) r[b + g] = r[S + g];
      r[w] = s[m];
    } else {
      if (d === 0) throw new Error();
      for (S = w - (d - 1), g = 0; g < d; g++) r[S + g] = s[g];
    }
  }
  return { mergeRuns: f, forceMergeRuns: h, pushRun: o };
}
function Oh(r, t, e, i) {
  e || (e = 0), i || (i = r.length);
  var a = i - e;
  if (!(a < 2)) {
    var n = 0;
    if (a < Po) {
      n = On(r, e, i, t), kn(r, e, i, e + n, t);
      return;
    }
    var s = Fh(r, t), o = Ih(a);
    do {
      if (n = On(r, e, i, t), n < o) {
        var f = a;
        f > o && (f = o), kn(r, e, e + f, e + n, t), n = f;
      }
      s.pushRun(e, n), s.mergeRuns(), a -= n, e += n;
    } while (a !== 0);
    s.forceMergeRuns();
  }
}
var Ft = 1, ii = 2, fe = 4, Bn = false;
function Wi() {
  Bn || (Bn = true, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function Hn(r, t) {
  return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
}
var kh = function() {
  function r() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Hn;
  }
  return r.prototype.traverse = function(t, e) {
    for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e);
  }, r.prototype.getDisplayList = function(t, e) {
    e = e || false;
    var i = this._displayList;
    return (t || !i.length) && this.updateDisplayList(e), i;
  }, r.prototype.updateDisplayList = function(t) {
    this._displayListLen = 0;
    for (var e = this._roots, i = this._displayList, a = 0, n = e.length; a < n; a++) this._updateAndAddDisplayable(e[a], null, t);
    i.length = this._displayListLen, Oh(i, Hn);
  }, r.prototype._updateAndAddDisplayable = function(t, e, i) {
    if (!(t.ignore && !i)) {
      t.beforeUpdate(), t.update(), t.afterUpdate();
      var a = t.getClipPath();
      if (t.ignoreClip) e = null;
      else if (a) {
        e ? e = e.slice() : e = [];
        for (var n = a, s = t; n; ) n.parent = s, n.updateTransform(), e.push(n), s = n, n = n.getClipPath();
      }
      if (t.childrenRef) {
        for (var o = t.childrenRef(), f = 0; f < o.length; f++) {
          var h = o[f];
          t.__dirty && (h.__dirty |= Ft), this._updateAndAddDisplayable(h, e, i);
        }
        t.__dirty = 0;
      } else {
        var u = t;
        e && e.length ? u.__clipPaths = e : u.__clipPaths && u.__clipPaths.length > 0 && (u.__clipPaths = []), isNaN(u.z) && (Wi(), u.z = 0), isNaN(u.z2) && (Wi(), u.z2 = 0), isNaN(u.zlevel) && (Wi(), u.zlevel = 0), this._displayList[this._displayListLen++] = u;
      }
      var v = t.getDecalElement && t.getDecalElement();
      v && this._updateAndAddDisplayable(v, e, i);
      var l = t.getTextGuideLine();
      l && this._updateAndAddDisplayable(l, e, i);
      var c = t.getTextContent();
      c && this._updateAndAddDisplayable(c, e, i);
    }
  }, r.prototype.addRoot = function(t) {
    t.__zr && t.__zr.storage === this || this._roots.push(t);
  }, r.prototype.delRoot = function(t) {
    if (t instanceof Array) {
      for (var e = 0, i = t.length; e < i; e++) this.delRoot(t[e]);
      return;
    }
    var a = It(this._roots, t);
    a >= 0 && this._roots.splice(a, 1);
  }, r.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, r.prototype.getRoots = function() {
    return this._roots;
  }, r.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, r;
}(), ui;
ui = X.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
  return setTimeout(r, 16);
};
var _e = { linear: function(r) {
  return r;
}, quadraticIn: function(r) {
  return r * r;
}, quadraticOut: function(r) {
  return r * (2 - r);
}, quadraticInOut: function(r) {
  return (r *= 2) < 1 ? 0.5 * r * r : -0.5 * (--r * (r - 2) - 1);
}, cubicIn: function(r) {
  return r * r * r;
}, cubicOut: function(r) {
  return --r * r * r + 1;
}, cubicInOut: function(r) {
  return (r *= 2) < 1 ? 0.5 * r * r * r : 0.5 * ((r -= 2) * r * r + 2);
}, quarticIn: function(r) {
  return r * r * r * r;
}, quarticOut: function(r) {
  return 1 - --r * r * r * r;
}, quarticInOut: function(r) {
  return (r *= 2) < 1 ? 0.5 * r * r * r * r : -0.5 * ((r -= 2) * r * r * r - 2);
}, quinticIn: function(r) {
  return r * r * r * r * r;
}, quinticOut: function(r) {
  return --r * r * r * r * r + 1;
}, quinticInOut: function(r) {
  return (r *= 2) < 1 ? 0.5 * r * r * r * r * r : 0.5 * ((r -= 2) * r * r * r * r + 2);
}, sinusoidalIn: function(r) {
  return 1 - Math.cos(r * Math.PI / 2);
}, sinusoidalOut: function(r) {
  return Math.sin(r * Math.PI / 2);
}, sinusoidalInOut: function(r) {
  return 0.5 * (1 - Math.cos(Math.PI * r));
}, exponentialIn: function(r) {
  return r === 0 ? 0 : Math.pow(1024, r - 1);
}, exponentialOut: function(r) {
  return r === 1 ? 1 : 1 - Math.pow(2, -10 * r);
}, exponentialInOut: function(r) {
  return r === 0 ? 0 : r === 1 ? 1 : (r *= 2) < 1 ? 0.5 * Math.pow(1024, r - 1) : 0.5 * (-Math.pow(2, -10 * (r - 1)) + 2);
}, circularIn: function(r) {
  return 1 - Math.sqrt(1 - r * r);
}, circularOut: function(r) {
  return Math.sqrt(1 - --r * r);
}, circularInOut: function(r) {
  return (r *= 2) < 1 ? -0.5 * (Math.sqrt(1 - r * r) - 1) : 0.5 * (Math.sqrt(1 - (r -= 2) * r) + 1);
}, elasticIn: function(r) {
  var t, e = 0.1, i = 0.4;
  return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i)));
}, elasticOut: function(r) {
  var t, e = 0.1, i = 0.4;
  return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * r) * Math.sin((r - t) * (2 * Math.PI) / i) + 1);
}, elasticInOut: function(r) {
  var t, e = 0.1, i = 0.4;
  return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), (r *= 2) < 1 ? -0.5 * (e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i)) : e * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i) * 0.5 + 1);
}, backIn: function(r) {
  var t = 1.70158;
  return r * r * ((t + 1) * r - t);
}, backOut: function(r) {
  var t = 1.70158;
  return --r * r * ((t + 1) * r + t) + 1;
}, backInOut: function(r) {
  var t = 2.5949095;
  return (r *= 2) < 1 ? 0.5 * (r * r * ((t + 1) * r - t)) : 0.5 * ((r -= 2) * r * ((t + 1) * r + t) + 2);
}, bounceIn: function(r) {
  return 1 - _e.bounceOut(1 - r);
}, bounceOut: function(r) {
  return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
}, bounceInOut: function(r) {
  return r < 0.5 ? _e.bounceIn(r * 2) * 0.5 : _e.bounceOut(r * 2 - 1) * 0.5 + 0.5;
} }, Be = Math.pow, Kt = Math.sqrt, Lo = 1e-8, xo = 1e-4, zn = Kt(3), He = 1 / 3, Et = Qr(), mt = Qr(), $r = Qr();
function $t(r) {
  return r > -1e-8 && r < Lo;
}
function Ro(r) {
  return r > Lo || r < -1e-8;
}
function rt(r, t, e, i, a) {
  var n = 1 - a;
  return n * n * (n * r + 3 * a * t) + a * a * (a * i + 3 * n * e);
}
function Nn(r, t, e, i, a) {
  var n = 1 - a;
  return 3 * (((t - r) * n + 2 * (e - t) * a) * n + (i - e) * a * a);
}
function Ao(r, t, e, i, a, n) {
  var s = i + 3 * (t - e) - r, o = 3 * (e - t * 2 + r), f = 3 * (t - r), h = r - a, u = o * o - 3 * s * f, v = o * f - 9 * s * h, l = f * f - 3 * o * h, c = 0;
  if ($t(u) && $t(v)) if ($t(o)) n[0] = 0;
  else {
    var p = -f / o;
    p >= 0 && p <= 1 && (n[c++] = p);
  }
  else {
    var _ = v * v - 4 * u * l;
    if ($t(_)) {
      var d = v / u, p = -o / s + d, g = -d / 2;
      p >= 0 && p <= 1 && (n[c++] = p), g >= 0 && g <= 1 && (n[c++] = g);
    } else if (_ > 0) {
      var y = Kt(_), m = u * o + 1.5 * s * (-v + y), w = u * o + 1.5 * s * (-v - y);
      m < 0 ? m = -Be(-m, He) : m = Be(m, He), w < 0 ? w = -Be(-w, He) : w = Be(w, He);
      var p = (-o - (m + w)) / (3 * s);
      p >= 0 && p <= 1 && (n[c++] = p);
    } else {
      var S = (2 * u * o - 3 * s * v) / (2 * Kt(u * u * u)), b = Math.acos(S) / 3, T = Kt(u), C = Math.cos(b), p = (-o - 2 * T * C) / (3 * s), g = (-o + T * (C + zn * Math.sin(b))) / (3 * s), M = (-o + T * (C - zn * Math.sin(b))) / (3 * s);
      p >= 0 && p <= 1 && (n[c++] = p), g >= 0 && g <= 1 && (n[c++] = g), M >= 0 && M <= 1 && (n[c++] = M);
    }
  }
  return c;
}
function Do(r, t, e, i, a) {
  var n = 6 * e - 12 * t + 6 * r, s = 9 * t + 3 * i - 3 * r - 9 * e, o = 3 * t - 3 * r, f = 0;
  if ($t(s)) {
    if (Ro(n)) {
      var h = -o / n;
      h >= 0 && h <= 1 && (a[f++] = h);
    }
  } else {
    var u = n * n - 4 * s * o;
    if ($t(u)) a[0] = -n / (2 * s);
    else if (u > 0) {
      var v = Kt(u), h = (-n + v) / (2 * s), l = (-n - v) / (2 * s);
      h >= 0 && h <= 1 && (a[f++] = h), l >= 0 && l <= 1 && (a[f++] = l);
    }
  }
  return f;
}
function Jt(r, t, e, i, a, n) {
  var s = (t - r) * a + r, o = (e - t) * a + t, f = (i - e) * a + e, h = (o - s) * a + s, u = (f - o) * a + o, v = (u - h) * a + h;
  n[0] = r, n[1] = s, n[2] = h, n[3] = v, n[4] = v, n[5] = u, n[6] = f, n[7] = i;
}
function Bh(r, t, e, i, a, n, s, o, f, h, u) {
  var v, l = 5e-3, c = 1 / 0, p, _, d, g;
  Et[0] = f, Et[1] = h;
  for (var y = 0; y < 1; y += 0.05) mt[0] = rt(r, e, a, s, y), mt[1] = rt(t, i, n, o, y), d = qr(Et, mt), d < c && (v = y, c = d);
  c = 1 / 0;
  for (var m = 0; m < 32 && !(l < xo); m++) p = v - l, _ = v + l, mt[0] = rt(r, e, a, s, p), mt[1] = rt(t, i, n, o, p), d = qr(mt, Et), p >= 0 && d < c ? (v = p, c = d) : ($r[0] = rt(r, e, a, s, _), $r[1] = rt(t, i, n, o, _), g = qr($r, Et), _ <= 1 && g < c ? (v = _, c = g) : l *= 0.5);
  return u && (u[0] = rt(r, e, a, s, v), u[1] = rt(t, i, n, o, v)), Kt(c);
}
function Hh(r, t, e, i, a, n, s, o, f) {
  for (var h = r, u = t, v = 0, l = 1 / f, c = 1; c <= f; c++) {
    var p = c * l, _ = rt(r, e, a, s, p), d = rt(t, i, n, o, p), g = _ - h, y = d - u;
    v += Math.sqrt(g * g + y * y), h = _, u = d;
  }
  return v;
}
function at(r, t, e, i) {
  var a = 1 - i;
  return a * (a * r + 2 * i * t) + i * i * e;
}
function Yn(r, t, e, i) {
  return 2 * ((1 - i) * (t - r) + i * (e - t));
}
function zh(r, t, e, i, a) {
  var n = r - 2 * t + e, s = 2 * (t - r), o = r - i, f = 0;
  if ($t(n)) {
    if (Ro(s)) {
      var h = -o / s;
      h >= 0 && h <= 1 && (a[f++] = h);
    }
  } else {
    var u = s * s - 4 * n * o;
    if ($t(u)) {
      var h = -s / (2 * n);
      h >= 0 && h <= 1 && (a[f++] = h);
    } else if (u > 0) {
      var v = Kt(u), h = (-s + v) / (2 * n), l = (-s - v) / (2 * n);
      h >= 0 && h <= 1 && (a[f++] = h), l >= 0 && l <= 1 && (a[f++] = l);
    }
  }
  return f;
}
function Io(r, t, e) {
  var i = r + e - 2 * t;
  return i === 0 ? 0.5 : (r - t) / i;
}
function vi(r, t, e, i, a) {
  var n = (t - r) * i + r, s = (e - t) * i + t, o = (s - n) * i + n;
  a[0] = r, a[1] = n, a[2] = o, a[3] = o, a[4] = s, a[5] = e;
}
function Nh(r, t, e, i, a, n, s, o, f) {
  var h, u = 5e-3, v = 1 / 0;
  Et[0] = s, Et[1] = o;
  for (var l = 0; l < 1; l += 0.05) {
    mt[0] = at(r, e, a, l), mt[1] = at(t, i, n, l);
    var c = qr(Et, mt);
    c < v && (h = l, v = c);
  }
  v = 1 / 0;
  for (var p = 0; p < 32 && !(u < xo); p++) {
    var _ = h - u, d = h + u;
    mt[0] = at(r, e, a, _), mt[1] = at(t, i, n, _);
    var c = qr(mt, Et);
    if (_ >= 0 && c < v) h = _, v = c;
    else {
      $r[0] = at(r, e, a, d), $r[1] = at(t, i, n, d);
      var g = qr($r, Et);
      d <= 1 && g < v ? (h = d, v = g) : u *= 0.5;
    }
  }
  return f && (f[0] = at(r, e, a, h), f[1] = at(t, i, n, h)), Kt(v);
}
function Yh(r, t, e, i, a, n, s) {
  for (var o = r, f = t, h = 0, u = 1 / s, v = 1; v <= s; v++) {
    var l = v * u, c = at(r, e, a, l), p = at(t, i, n, l), _ = c - o, d = p - f;
    h += Math.sqrt(_ * _ + d * d), o = c, f = p;
  }
  return h;
}
var Gh = /cubic-bezier\(([0-9,\.e ]+)\)/;
function un(r) {
  var t = r && Gh.exec(r);
  if (t) {
    var e = t[1].split(","), i = +Hr(e[0]), a = +Hr(e[1]), n = +Hr(e[2]), s = +Hr(e[3]);
    if (isNaN(i + a + n + s)) return;
    var o = [];
    return function(f) {
      return f <= 0 ? 0 : f >= 1 ? 1 : Ao(0, i, n, 1, f, o) && rt(0, a, s, 1, o[0]);
    };
  }
}
var Xh = function() {
  function r(t) {
    this._inited = false, this._startTime = 0, this._pausedTime = 0, this._paused = false, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || false, this.onframe = t.onframe || br, this.ondestroy = t.ondestroy || br, this.onrestart = t.onrestart || br, t.easing && this.setEasing(t.easing);
  }
  return r.prototype.step = function(t, e) {
    if (this._inited || (this._startTime = t + this._delay, this._inited = true), this._paused) {
      this._pausedTime += e;
      return;
    }
    var i = this._life, a = t - this._startTime - this._pausedTime, n = a / i;
    n < 0 && (n = 0), n = Math.min(n, 1);
    var s = this.easingFunc, o = s ? s(n) : n;
    if (this.onframe(o), n === 1) if (this.loop) {
      var f = a % i;
      this._startTime = t - f, this._pausedTime = 0, this.onrestart();
    } else return true;
    return false;
  }, r.prototype.pause = function() {
    this._paused = true;
  }, r.prototype.resume = function() {
    this._paused = false;
  }, r.prototype.setEasing = function(t) {
    this.easing = t, this.easingFunc = xe(t) ? t : _e[t] || un(t);
  }, r;
}(), Eo = /* @__PURE__ */ function() {
  function r(t) {
    this.value = t;
  }
  return r;
}(), Uh = function() {
  function r() {
    this._len = 0;
  }
  return r.prototype.insert = function(t) {
    var e = new Eo(t);
    return this.insertEntry(e), e;
  }, r.prototype.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, r.prototype.remove = function(t) {
    var e = t.prev, i = t.next;
    e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, r;
}(), Ri = function() {
  function r(t) {
    this._list = new Uh(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return r.prototype.put = function(t, e) {
    var i = this._list, a = this._map, n = null;
    if (a[t] == null) {
      var s = i.len(), o = this._lastRemovedEntry;
      if (s >= this._maxSize && s > 0) {
        var f = i.head;
        i.remove(f), delete a[f.key], n = f.value, this._lastRemovedEntry = f;
      }
      o ? o.value = e : o = new Eo(e), o.key = t, i.insertEntry(o), a[t] = o;
    }
    return n;
  }, r.prototype.get = function(t) {
    var e = this._map[t], i = this._list;
    if (e != null) return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value;
  }, r.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, r.prototype.len = function() {
    return this._list.len();
  }, r;
}(), Gn = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255, 1], antiquewhite: [250, 235, 215, 1], aqua: [0, 255, 255, 1], aquamarine: [127, 255, 212, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], bisque: [255, 228, 196, 1], black: [0, 0, 0, 1], blanchedalmond: [255, 235, 205, 1], blue: [0, 0, 255, 1], blueviolet: [138, 43, 226, 1], brown: [165, 42, 42, 1], burlywood: [222, 184, 135, 1], cadetblue: [95, 158, 160, 1], chartreuse: [127, 255, 0, 1], chocolate: [210, 105, 30, 1], coral: [255, 127, 80, 1], cornflowerblue: [100, 149, 237, 1], cornsilk: [255, 248, 220, 1], crimson: [220, 20, 60, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgoldenrod: [184, 134, 11, 1], darkgray: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkgrey: [169, 169, 169, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkseagreen: [143, 188, 143, 1], darkslateblue: [72, 61, 139, 1], darkslategray: [47, 79, 79, 1], darkslategrey: [47, 79, 79, 1], darkturquoise: [0, 206, 209, 1], darkviolet: [148, 0, 211, 1], deeppink: [255, 20, 147, 1], deepskyblue: [0, 191, 255, 1], dimgray: [105, 105, 105, 1], dimgrey: [105, 105, 105, 1], dodgerblue: [30, 144, 255, 1], firebrick: [178, 34, 34, 1], floralwhite: [255, 250, 240, 1], forestgreen: [34, 139, 34, 1], fuchsia: [255, 0, 255, 1], gainsboro: [220, 220, 220, 1], ghostwhite: [248, 248, 255, 1], gold: [255, 215, 0, 1], goldenrod: [218, 165, 32, 1], gray: [128, 128, 128, 1], green: [0, 128, 0, 1], greenyellow: [173, 255, 47, 1], grey: [128, 128, 128, 1], honeydew: [240, 255, 240, 1], hotpink: [255, 105, 180, 1], indianred: [205, 92, 92, 1], indigo: [75, 0, 130, 1], ivory: [255, 255, 240, 1], khaki: [240, 230, 140, 1], lavender: [230, 230, 250, 1], lavenderblush: [255, 240, 245, 1], lawngreen: [124, 252, 0, 1], lemonchiffon: [255, 250, 205, 1], lightblue: [173, 216, 230, 1], lightcoral: [240, 128, 128, 1], lightcyan: [224, 255, 255, 1], lightgoldenrodyellow: [250, 250, 210, 1], lightgray: [211, 211, 211, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightsalmon: [255, 160, 122, 1], lightseagreen: [32, 178, 170, 1], lightskyblue: [135, 206, 250, 1], lightslategray: [119, 136, 153, 1], lightslategrey: [119, 136, 153, 1], lightsteelblue: [176, 196, 222, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], limegreen: [50, 205, 50, 1], linen: [250, 240, 230, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], mediumaquamarine: [102, 205, 170, 1], mediumblue: [0, 0, 205, 1], mediumorchid: [186, 85, 211, 1], mediumpurple: [147, 112, 219, 1], mediumseagreen: [60, 179, 113, 1], mediumslateblue: [123, 104, 238, 1], mediumspringgreen: [0, 250, 154, 1], mediumturquoise: [72, 209, 204, 1], mediumvioletred: [199, 21, 133, 1], midnightblue: [25, 25, 112, 1], mintcream: [245, 255, 250, 1], mistyrose: [255, 228, 225, 1], moccasin: [255, 228, 181, 1], navajowhite: [255, 222, 173, 1], navy: [0, 0, 128, 1], oldlace: [253, 245, 230, 1], olive: [128, 128, 0, 1], olivedrab: [107, 142, 35, 1], orange: [255, 165, 0, 1], orangered: [255, 69, 0, 1], orchid: [218, 112, 214, 1], palegoldenrod: [238, 232, 170, 1], palegreen: [152, 251, 152, 1], paleturquoise: [175, 238, 238, 1], palevioletred: [219, 112, 147, 1], papayawhip: [255, 239, 213, 1], peachpuff: [255, 218, 185, 1], peru: [205, 133, 63, 1], pink: [255, 192, 203, 1], plum: [221, 160, 221, 1], powderblue: [176, 224, 230, 1], purple: [128, 0, 128, 1], red: [255, 0, 0, 1], rosybrown: [188, 143, 143, 1], royalblue: [65, 105, 225, 1], saddlebrown: [139, 69, 19, 1], salmon: [250, 128, 114, 1], sandybrown: [244, 164, 96, 1], seagreen: [46, 139, 87, 1], seashell: [255, 245, 238, 1], sienna: [160, 82, 45, 1], silver: [192, 192, 192, 1], skyblue: [135, 206, 235, 1], slateblue: [106, 90, 205, 1], slategray: [112, 128, 144, 1], slategrey: [112, 128, 144, 1], snow: [255, 250, 250, 1], springgreen: [0, 255, 127, 1], steelblue: [70, 130, 180, 1], tan: [210, 180, 140, 1], teal: [0, 128, 128, 1], thistle: [216, 191, 216, 1], tomato: [255, 99, 71, 1], turquoise: [64, 224, 208, 1], violet: [238, 130, 238, 1], wheat: [245, 222, 179, 1], white: [255, 255, 255, 1], whitesmoke: [245, 245, 245, 1], yellow: [255, 255, 0, 1], yellowgreen: [154, 205, 50, 1] };
function Ct(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
}
function Wh(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 360 ? 360 : r;
}
function we(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function qi(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? Ct(parseFloat(t) / 100 * 255) : Ct(parseInt(t, 10));
}
function Cr(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? we(parseFloat(t) / 100) : we(parseFloat(t));
}
function $i(r, t, e) {
  return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
}
function Vt(r, t, e) {
  return r + (t - r) * e;
}
function _t(r, t, e, i, a) {
  return r[0] = t, r[1] = e, r[2] = i, r[3] = a, r;
}
function Ia(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
}
var Fo = new Ri(20), ze = null;
function xr(r, t) {
  ze && Ia(ze, t), ze = Fo.put(r, ze || t.slice());
}
function Mt(r, t) {
  if (r) {
    t = t || [];
    var e = Fo.get(r);
    if (e) return Ia(t, e);
    r = r + "";
    var i = r.replace(/ /g, "").toLowerCase();
    if (i in Gn) return Ia(t, Gn[i]), xr(r, t), t;
    var a = i.length;
    if (i.charAt(0) === "#") {
      if (a === 4 || a === 5) {
        var n = parseInt(i.slice(1, 4), 16);
        if (!(n >= 0 && n <= 4095)) {
          _t(t, 0, 0, 0, 1);
          return;
        }
        return _t(t, (n & 3840) >> 4 | (n & 3840) >> 8, n & 240 | (n & 240) >> 4, n & 15 | (n & 15) << 4, a === 5 ? parseInt(i.slice(4), 16) / 15 : 1), xr(r, t), t;
      } else if (a === 7 || a === 9) {
        var n = parseInt(i.slice(1, 7), 16);
        if (!(n >= 0 && n <= 16777215)) {
          _t(t, 0, 0, 0, 1);
          return;
        }
        return _t(t, (n & 16711680) >> 16, (n & 65280) >> 8, n & 255, a === 9 ? parseInt(i.slice(7), 16) / 255 : 1), xr(r, t), t;
      }
      return;
    }
    var s = i.indexOf("("), o = i.indexOf(")");
    if (s !== -1 && o + 1 === a) {
      var f = i.substr(0, s), h = i.substr(s + 1, o - (s + 1)).split(","), u = 1;
      switch (f) {
        case "rgba":
          if (h.length !== 4) return h.length === 3 ? _t(t, +h[0], +h[1], +h[2], 1) : _t(t, 0, 0, 0, 1);
          u = Cr(h.pop());
        case "rgb":
          if (h.length >= 3) return _t(t, qi(h[0]), qi(h[1]), qi(h[2]), h.length === 3 ? u : Cr(h[3])), xr(r, t), t;
          _t(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (h.length !== 4) {
            _t(t, 0, 0, 0, 1);
            return;
          }
          return h[3] = Cr(h[3]), Ea(h, t), xr(r, t), t;
        case "hsl":
          if (h.length !== 3) {
            _t(t, 0, 0, 0, 1);
            return;
          }
          return Ea(h, t), xr(r, t), t;
        default:
          return;
      }
    }
    _t(t, 0, 0, 0, 1);
  }
}
function Ea(r, t) {
  var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, i = Cr(r[1]), a = Cr(r[2]), n = a <= 0.5 ? a * (i + 1) : a + i - a * i, s = a * 2 - n;
  return t = t || [], _t(t, Ct($i(s, n, e + 1 / 3) * 255), Ct($i(s, n, e) * 255), Ct($i(s, n, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
}
function qh(r) {
  if (r) {
    var t = r[0] / 255, e = r[1] / 255, i = r[2] / 255, a = Math.min(t, e, i), n = Math.max(t, e, i), s = n - a, o = (n + a) / 2, f, h;
    if (s === 0) f = 0, h = 0;
    else {
      o < 0.5 ? h = s / (n + a) : h = s / (2 - n - a);
      var u = ((n - t) / 6 + s / 2) / s, v = ((n - e) / 6 + s / 2) / s, l = ((n - i) / 6 + s / 2) / s;
      t === n ? f = l - v : e === n ? f = 1 / 3 + u - l : i === n && (f = 2 / 3 + v - u), f < 0 && (f += 1), f > 1 && (f -= 1);
    }
    var c = [f * 360, h, o];
    return r[3] != null && c.push(r[3]), c;
  }
}
function Xn(r, t) {
  var e = Mt(r);
  if (e) {
    for (var i = 0; i < 3; i++) t < 0 ? e[i] = e[i] * (1 - t) | 0 : e[i] = (255 - e[i]) * t + e[i] | 0, e[i] > 255 ? e[i] = 255 : e[i] < 0 && (e[i] = 0);
    return Re(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function Ic(r, t, e) {
  if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
    e = e || [];
    var i = r * (t.length - 1), a = Math.floor(i), n = Math.ceil(i), s = t[a], o = t[n], f = i - a;
    return e[0] = Ct(Vt(s[0], o[0], f)), e[1] = Ct(Vt(s[1], o[1], f)), e[2] = Ct(Vt(s[2], o[2], f)), e[3] = we(Vt(s[3], o[3], f)), e;
  }
}
function Ec(r, t, e) {
  if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
    var i = r * (t.length - 1), a = Math.floor(i), n = Math.ceil(i), s = Mt(t[a]), o = Mt(t[n]), f = i - a, h = Re([Ct(Vt(s[0], o[0], f)), Ct(Vt(s[1], o[1], f)), Ct(Vt(s[2], o[2], f)), we(Vt(s[3], o[3], f))], "rgba");
    return e ? { color: h, leftIndex: a, rightIndex: n, value: i } : h;
  }
}
function Fc(r, t, e, i) {
  var a = Mt(r);
  if (r) return a = qh(a), t != null && (a[0] = Wh(t)), e != null && (a[1] = Cr(e)), i != null && (a[2] = Cr(i)), Re(Ea(a), "rgba");
}
function Oc(r, t) {
  var e = Mt(r);
  if (e && t != null) return e[3] = we(t), Re(e, "rgba");
}
function Re(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
  }
}
function li(r, t) {
  var e = Mt(r);
  return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
}
var Un = new Ri(100);
function $h(r) {
  if (kt(r)) {
    var t = Un.get(r);
    return t || (t = Xn(r, -0.1), Un.put(r, t)), t;
  } else if (Li(r)) {
    var e = z({}, r);
    return e.colorStops = Z(r.colorStops, function(i) {
      return { offset: i.offset, color: Xn(i.color, -0.1) };
    }), e;
  }
  return r;
}
var ci = Math.round;
function Te(r) {
  var t;
  if (!r || r === "transparent") r = "none";
  else if (typeof r == "string" && r.indexOf("rgba") > -1) {
    var e = Mt(r);
    e && (r = "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")", t = e[3]);
  }
  return { color: r, opacity: t ?? 1 };
}
var Vh = 1e-4;
function Zt(r) {
  return r < Vh && r > -1e-4;
}
function Ne(r) {
  return ci(r * 1e3) / 1e3;
}
function Fa(r) {
  return ci(r * 1e4) / 1e4;
}
function Zh(r) {
  return "matrix(" + Ne(r[0]) + "," + Ne(r[1]) + "," + Ne(r[2]) + "," + Ne(r[3]) + "," + Fa(r[4]) + "," + Fa(r[5]) + ")";
}
var Kh = { left: "start", right: "end", center: "middle", middle: "middle" };
function Qh(r, t, e) {
  return e === "top" ? r += t / 2 : e === "bottom" && (r -= t / 2), r;
}
function Jh(r) {
  return r && (r.shadowBlur || r.shadowOffsetX || r.shadowOffsetY);
}
function jh(r) {
  var t = r.style, e = r.getGlobalScale();
  return [t.shadowColor, (t.shadowBlur || 0).toFixed(2), (t.shadowOffsetX || 0).toFixed(2), (t.shadowOffsetY || 0).toFixed(2), e[0], e[1]].join(",");
}
function Oo(r) {
  return r && !!r.image;
}
function tu(r) {
  return r && !!r.svgElement;
}
function vn(r) {
  return Oo(r) || tu(r);
}
function ko(r) {
  return r.type === "linear";
}
function Bo(r) {
  return r.type === "radial";
}
function Ho(r) {
  return r && (r.type === "linear" || r.type === "radial");
}
function Ai(r) {
  return "url(#" + r + ")";
}
function zo(r) {
  var t = r.getGlobalScale(), e = Math.max(t[0], t[1]);
  return Math.max(Math.ceil(Math.log(e) / Math.log(10)), 1);
}
function No(r) {
  var t = r.x || 0, e = r.y || 0, i = (r.rotation || 0) * ei, a = $(r.scaleX, 1), n = $(r.scaleY, 1), s = r.skewX || 0, o = r.skewY || 0, f = [];
  return (t || e) && f.push("translate(" + t + "px," + e + "px)"), i && f.push("rotate(" + i + ")"), (a !== 1 || n !== 1) && f.push("scale(" + a + "," + n + ")"), (s || o) && f.push("skew(" + ci(s * ei) + "deg, " + ci(o * ei) + "deg)"), f.join(" ");
}
var ru = function() {
  return X.hasGlobalWindow && xe(window.btoa) ? function(r) {
    return window.btoa(unescape(encodeURIComponent(r)));
  } : typeof Buffer < "u" ? function(r) {
    return Buffer.from(r).toString("base64");
  } : function(r) {
    return null;
  };
}(), Oa = Array.prototype.slice;
function Yt(r, t, e) {
  return (t - r) * e + r;
}
function Vi(r, t, e, i) {
  for (var a = t.length, n = 0; n < a; n++) r[n] = Yt(t[n], e[n], i);
  return r;
}
function eu(r, t, e, i) {
  for (var a = t.length, n = a && t[0].length, s = 0; s < a; s++) {
    r[s] || (r[s] = []);
    for (var o = 0; o < n; o++) r[s][o] = Yt(t[s][o], e[s][o], i);
  }
  return r;
}
function Ye(r, t, e, i) {
  for (var a = t.length, n = 0; n < a; n++) r[n] = t[n] + e[n] * i;
  return r;
}
function Wn(r, t, e, i) {
  for (var a = t.length, n = a && t[0].length, s = 0; s < a; s++) {
    r[s] || (r[s] = []);
    for (var o = 0; o < n; o++) r[s][o] = t[s][o] + e[s][o] * i;
  }
  return r;
}
function iu(r, t) {
  for (var e = r.length, i = t.length, a = e > i ? t : r, n = Math.min(e, i), s = a[n - 1] || { color: [0, 0, 0, 0], offset: 0 }, o = n; o < Math.max(e, i); o++) a.push({ offset: s.offset, color: s.color.slice() });
}
function au(r, t, e) {
  var i = r, a = t;
  if (!(!i.push || !a.push)) {
    var n = i.length, s = a.length;
    if (n !== s) {
      var o = n > s;
      if (o) i.length = s;
      else for (var f = n; f < s; f++) i.push(e === 1 ? a[f] : Oa.call(a[f]));
    }
    for (var h = i[0] && i[0].length, f = 0; f < i.length; f++) if (e === 1) isNaN(i[f]) && (i[f] = a[f]);
    else for (var u = 0; u < h; u++) isNaN(i[f][u]) && (i[f][u] = a[f][u]);
  }
}
function ai(r) {
  if (Ot(r)) {
    var t = r.length;
    if (Ot(r[0])) {
      for (var e = [], i = 0; i < t; i++) e.push(Oa.call(r[i]));
      return e;
    }
    return Oa.call(r);
  }
  return r;
}
function ni(r) {
  return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
}
function nu(r) {
  return Ot(r && r[0]) ? 2 : 1;
}
var Ge = 0, si = 1, Yo = 2, he = 3, ka = 4, Ba = 5, qn = 6;
function $n(r) {
  return r === ka || r === Ba;
}
function Xe(r) {
  return r === si || r === Yo;
}
var ae = [0, 0, 0, 0], su = function() {
  function r(t) {
    this.keyframes = [], this.discrete = false, this._invalid = false, this._needsSort = false, this._lastFr = 0, this._lastFrP = 0, this.propName = t;
  }
  return r.prototype.isFinished = function() {
    return this._finished;
  }, r.prototype.setFinished = function() {
    this._finished = true, this._additiveTrack && this._additiveTrack.setFinished();
  }, r.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, r.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, r.prototype.addKeyframe = function(t, e, i) {
    this._needsSort = true;
    var a = this.keyframes, n = a.length, s = false, o = qn, f = e;
    if (Ot(e)) {
      var h = nu(e);
      o = h, (h === 1 && !ce(e[0]) || h === 2 && !ce(e[0][0])) && (s = true);
    } else if (ce(e) && !Qf(e)) o = Ge;
    else if (kt(e)) if (!isNaN(+e)) o = Ge;
    else {
      var u = Mt(e);
      u && (f = u, o = he);
    }
    else if (Li(e)) {
      var v = z({}, f);
      v.colorStops = Z(e.colorStops, function(c) {
        return { offset: c.offset, color: Mt(c.color) };
      }), ko(e) ? o = ka : Bo(e) && (o = Ba), f = v;
    }
    n === 0 ? this.valType = o : (o !== this.valType || o === qn) && (s = true), this.discrete = this.discrete || s;
    var l = { time: t, value: f, rawValue: e, percent: 0 };
    return i && (l.easing = i, l.easingFunc = xe(i) ? i : _e[i] || un(i)), a.push(l), l;
  }, r.prototype.prepare = function(t, e) {
    var i = this.keyframes;
    this._needsSort && i.sort(function(_, d) {
      return _.time - d.time;
    });
    for (var a = this.valType, n = i.length, s = i[n - 1], o = this.discrete, f = Xe(a), h = $n(a), u = 0; u < n; u++) {
      var v = i[u], l = v.value, c = s.value;
      v.percent = v.time / t, o || (f && u !== n - 1 ? au(l, c, a) : h && iu(l.colorStops, c.colorStops));
    }
    if (!o && a !== Ba && e && this.needsAnimate() && e.needsAnimate() && a === e.valType && !e._finished) {
      this._additiveTrack = e;
      for (var p = i[0].value, u = 0; u < n; u++) a === Ge ? i[u].additiveValue = i[u].value - p : a === he ? i[u].additiveValue = Ye([], i[u].value, p, -1) : Xe(a) && (i[u].additiveValue = a === si ? Ye([], i[u].value, p, -1) : Wn([], i[u].value, p, -1));
    }
  }, r.prototype.step = function(t, e) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var i = this._additiveTrack != null, a = i ? "additiveValue" : "value", n = this.valType, s = this.keyframes, o = s.length, f = this.propName, h = n === he, u, v = this._lastFr, l = Math.min, c, p;
      if (o === 1) c = p = s[0];
      else {
        if (e < 0) u = 0;
        else if (e < this._lastFrP) {
          var _ = l(v + 1, o - 1);
          for (u = _; u >= 0 && !(s[u].percent <= e); u--) ;
          u = l(u, o - 2);
        } else {
          for (u = v; u < o && !(s[u].percent > e); u++) ;
          u = l(u - 1, o - 2);
        }
        p = s[u + 1], c = s[u];
      }
      if (c && p) {
        this._lastFr = u, this._lastFrP = e;
        var d = p.percent - c.percent, g = d === 0 ? 1 : l((e - c.percent) / d, 1);
        p.easingFunc && (g = p.easingFunc(g));
        var y = i ? this._additiveValue : h ? ae : t[f];
        if ((Xe(n) || h) && !y && (y = this._additiveValue = []), this.discrete) t[f] = g < 1 ? c.rawValue : p.rawValue;
        else if (Xe(n)) n === si ? Vi(y, c[a], p[a], g) : eu(y, c[a], p[a], g);
        else if ($n(n)) {
          var m = c[a], w = p[a], S = n === ka;
          t[f] = { type: S ? "linear" : "radial", x: Yt(m.x, w.x, g), y: Yt(m.y, w.y, g), colorStops: Z(m.colorStops, function(T, C) {
            var M = w.colorStops[C];
            return { offset: Yt(T.offset, M.offset, g), color: ni(Vi([], T.color, M.color, g)) };
          }), global: w.global }, S ? (t[f].x2 = Yt(m.x2, w.x2, g), t[f].y2 = Yt(m.y2, w.y2, g)) : t[f].r = Yt(m.r, w.r, g);
        } else if (h) Vi(y, c[a], p[a], g), i || (t[f] = ni(y));
        else {
          var b = Yt(c[a], p[a], g);
          i ? this._additiveValue = b : t[f] = b;
        }
        i && this._addToTarget(t);
      }
    }
  }, r.prototype._addToTarget = function(t) {
    var e = this.valType, i = this.propName, a = this._additiveValue;
    e === Ge ? t[i] = t[i] + a : e === he ? (Mt(t[i], ae), Ye(ae, ae, a, 1), t[i] = ni(ae)) : e === si ? Ye(t[i], t[i], a, 1) : e === Yo && Wn(t[i], t[i], a, 1);
  }, r;
}(), ln = function() {
  function r(t, e, i, a) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && a) {
      fn("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = a, this._allowDiscrete = i;
  }
  return r.prototype.getMaxTime = function() {
    return this._maxTime;
  }, r.prototype.getDelay = function() {
    return this._delay;
  }, r.prototype.getLoop = function() {
    return this._loop;
  }, r.prototype.getTarget = function() {
    return this._target;
  }, r.prototype.changeTarget = function(t) {
    this._target = t;
  }, r.prototype.when = function(t, e, i) {
    return this.whenWithKeys(t, e, G(e), i);
  }, r.prototype.whenWithKeys = function(t, e, i, a) {
    for (var n = this._tracks, s = 0; s < i.length; s++) {
      var o = i[s], f = n[o];
      if (!f) {
        f = n[o] = new su(o);
        var h = void 0, u = this._getAdditiveTrack(o);
        if (u) {
          var v = u.keyframes, l = v[v.length - 1];
          h = l && l.value, u.valType === he && h && (h = ni(h));
        } else h = this._target[o];
        if (h == null) continue;
        t > 0 && f.addKeyframe(0, ai(h), a), this._trackKeys.push(o);
      }
      f.addKeyframe(t, ai(e[o]), a);
    }
    return this._maxTime = Math.max(this._maxTime, t), this;
  }, r.prototype.pause = function() {
    this._clip.pause(), this._paused = true;
  }, r.prototype.resume = function() {
    this._clip.resume(), this._paused = false;
  }, r.prototype.isPaused = function() {
    return !!this._paused;
  }, r.prototype.duration = function(t) {
    return this._maxTime = t, this._force = true, this;
  }, r.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var t = this._doneCbs;
    if (t) for (var e = t.length, i = 0; i < e; i++) t[i].call(this);
  }, r.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var t = this.animation, e = this._abortedCbs;
    if (t && t.removeClip(this._clip), this._clip = null, e) for (var i = 0; i < e.length; i++) e[i].call(this);
  }, r.prototype._setTracksFinished = function() {
    for (var t = this._tracks, e = this._trackKeys, i = 0; i < e.length; i++) t[e[i]].setFinished();
  }, r.prototype._getAdditiveTrack = function(t) {
    var e, i = this._additiveAnimators;
    if (i) for (var a = 0; a < i.length; a++) {
      var n = i[a].getTrack(t);
      n && (e = n);
    }
    return e;
  }, r.prototype.start = function(t) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var e = this, i = [], a = this._maxTime || 0, n = 0; n < this._trackKeys.length; n++) {
        var s = this._trackKeys[n], o = this._tracks[s], f = this._getAdditiveTrack(s), h = o.keyframes, u = h.length;
        if (o.prepare(a, f), o.needsAnimate()) if (!this._allowDiscrete && o.discrete) {
          var v = h[u - 1];
          v && (e._target[o.propName] = v.rawValue), o.setFinished();
        } else i.push(o);
      }
      if (i.length || this._force) {
        var l = new Xh({ life: a, loop: this._loop, delay: this._delay || 0, onframe: function(c) {
          e._started = 2;
          var p = e._additiveAnimators;
          if (p) {
            for (var _ = false, d = 0; d < p.length; d++) if (p[d]._clip) {
              _ = true;
              break;
            }
            _ || (e._additiveAnimators = null);
          }
          for (var d = 0; d < i.length; d++) i[d].step(e._target, c);
          var g = e._onframeCbs;
          if (g) for (var d = 0; d < g.length; d++) g[d](e._target, c);
        }, ondestroy: function() {
          e._doneCallback();
        } });
        this._clip = l, this.animation && this.animation.addClip(l), t && l.setEasing(t);
      } else this._doneCallback();
      return this;
    }
  }, r.prototype.stop = function(t) {
    if (this._clip) {
      var e = this._clip;
      t && e.onframe(1), this._abortedCallback();
    }
  }, r.prototype.delay = function(t) {
    return this._delay = t, this;
  }, r.prototype.during = function(t) {
    return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this;
  }, r.prototype.done = function(t) {
    return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
  }, r.prototype.aborted = function(t) {
    return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this;
  }, r.prototype.getClip = function() {
    return this._clip;
  }, r.prototype.getTrack = function(t) {
    return this._tracks[t];
  }, r.prototype.getTracks = function() {
    var t = this;
    return Z(this._trackKeys, function(e) {
      return t._tracks[e];
    });
  }, r.prototype.stopTracks = function(t, e) {
    if (!t.length || !this._clip) return true;
    for (var i = this._tracks, a = this._trackKeys, n = 0; n < t.length; n++) {
      var s = i[t[n]];
      s && !s.isFinished() && (e ? s.step(this._target, 1) : this._started === 1 && s.step(this._target, 0), s.setFinished());
    }
    for (var o = true, n = 0; n < a.length; n++) if (!i[a[n]].isFinished()) {
      o = false;
      break;
    }
    return o && this._abortedCallback(), o;
  }, r.prototype.saveTo = function(t, e, i) {
    if (t) {
      e = e || this._trackKeys;
      for (var a = 0; a < e.length; a++) {
        var n = e[a], s = this._tracks[n];
        if (!(!s || s.isFinished())) {
          var o = s.keyframes, f = o[i ? 0 : o.length - 1];
          f && (t[n] = ai(f.rawValue));
        }
      }
    }
  }, r.prototype.__changeFinalValue = function(t, e) {
    e = e || G(t);
    for (var i = 0; i < e.length; i++) {
      var a = e[i], n = this._tracks[a];
      if (n) {
        var s = n.keyframes;
        if (s.length > 1) {
          var o = s.pop();
          n.addKeyframe(o.time, t[a]), n.prepare(this._maxTime, n.getAdditiveTrack());
        }
      }
    }
  }, r;
}();
function Yr() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var ou = function(r) {
  N(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i._running = false, i._time = 0, i._pausedTime = 0, i._pauseStart = 0, i._paused = false, e = e || {}, i.stage = e.stage || {}, i;
  }
  return t.prototype.addClip = function(e) {
    e.animation && this.removeClip(e), this._head ? (this._tail.next = e, e.prev = this._tail, e.next = null, this._tail = e) : this._head = this._tail = e, e.animation = this;
  }, t.prototype.addAnimator = function(e) {
    e.animation = this;
    var i = e.getClip();
    i && this.addClip(i);
  }, t.prototype.removeClip = function(e) {
    if (e.animation) {
      var i = e.prev, a = e.next;
      i ? i.next = a : this._head = a, a ? a.prev = i : this._tail = i, e.next = e.prev = e.animation = null;
    }
  }, t.prototype.removeAnimator = function(e) {
    var i = e.getClip();
    i && this.removeClip(i), e.animation = null;
  }, t.prototype.update = function(e) {
    for (var i = Yr() - this._pausedTime, a = i - this._time, n = this._head; n; ) {
      var s = n.next, o = n.step(i, a);
      o && (n.ondestroy(), this.removeClip(n)), n = s;
    }
    this._time = i, e || (this.trigger("frame", a), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var e = this;
    this._running = true;
    function i() {
      e._running && (ui(i), !e._paused && e.update());
    }
    ui(i);
  }, t.prototype.start = function() {
    this._running || (this._time = Yr(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = false;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = Yr(), this._paused = true);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += Yr() - this._pauseStart, this._paused = false);
  }, t.prototype.clear = function() {
    for (var e = this._head; e; ) {
      var i = e.next;
      e.prev = e.next = e.animation = null, e = i;
    }
    this._head = this._tail = null;
  }, t.prototype.isFinished = function() {
    return this._head == null;
  }, t.prototype.animate = function(e, i) {
    i = i || {}, this.start();
    var a = new ln(e, i.loop);
    return this.addAnimator(a), a;
  }, t;
}(Jr), fu = 300, Zi = X.domSupported, Ki = function() {
  var r = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], t = ["touchstart", "touchend", "touchmove"], e = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 }, i = Z(r, function(a) {
    var n = a.replace("mouse", "pointer");
    return e.hasOwnProperty(n) ? n : a;
  });
  return { mouse: r, touch: t, pointer: i };
}(), Vn = { mouse: ["mousemove", "mouseup"], pointer: ["pointermove", "pointerup"] }, Zn = false;
function Ha(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function hu(r) {
  r.touching = true, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
    r.touching = false, r.touchTimer = null;
  }, 700);
}
function Qi(r) {
  r && (r.zrByTouch = true);
}
function uu(r, t) {
  return bt(r.dom, new vu(r, t), true);
}
function Go(r, t) {
  for (var e = t, i = false; e && e.nodeType !== 9 && !(i = e.domBelongToZr || e !== t && e === r.painterRoot); ) e = e.parentNode;
  return i;
}
var vu = /* @__PURE__ */ function() {
  function r(t, e) {
    this.stopPropagation = br, this.stopImmediatePropagation = br, this.preventDefault = br, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }
  return r;
}(), St = { mousedown: function(r) {
  r = bt(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
}, mousemove: function(r) {
  r = bt(this.dom, r);
  var t = this.__mayPointerCapture;
  t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(true), this.trigger("mousemove", r);
}, mouseup: function(r) {
  r = bt(this.dom, r), this.__togglePointerCapture(false), this.trigger("mouseup", r);
}, mouseout: function(r) {
  r = bt(this.dom, r);
  var t = r.toElement || r.relatedTarget;
  Go(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
}, wheel: function(r) {
  Zn = true, r = bt(this.dom, r), this.trigger("mousewheel", r);
}, mousewheel: function(r) {
  Zn || (r = bt(this.dom, r), this.trigger("mousewheel", r));
}, touchstart: function(r) {
  r = bt(this.dom, r), Qi(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), St.mousemove.call(this, r), St.mousedown.call(this, r);
}, touchmove: function(r) {
  r = bt(this.dom, r), Qi(r), this.handler.processGesture(r, "change"), St.mousemove.call(this, r);
}, touchend: function(r) {
  r = bt(this.dom, r), Qi(r), this.handler.processGesture(r, "end"), St.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < fu && St.click.call(this, r);
}, pointerdown: function(r) {
  St.mousedown.call(this, r);
}, pointermove: function(r) {
  Ha(r) || St.mousemove.call(this, r);
}, pointerup: function(r) {
  St.mouseup.call(this, r);
}, pointerout: function(r) {
  Ha(r) || St.mouseout.call(this, r);
} };
nt(["click", "dblclick", "contextmenu"], function(r) {
  St[r] = function(t) {
    t = bt(this.dom, t), this.trigger(r, t);
  };
});
var za = { pointermove: function(r) {
  Ha(r) || za.mousemove.call(this, r);
}, pointerup: function(r) {
  za.mouseup.call(this, r);
}, mousemove: function(r) {
  this.trigger("mousemove", r);
}, mouseup: function(r) {
  var t = this.__pointerCapturing;
  this.__togglePointerCapture(false), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
} };
function lu(r, t) {
  var e = t.domHandlers;
  X.pointerEventsSupported ? nt(Ki.pointer, function(i) {
    oi(t, i, function(a) {
      e[i].call(r, a);
    });
  }) : (X.touchEventsSupported && nt(Ki.touch, function(i) {
    oi(t, i, function(a) {
      e[i].call(r, a), hu(t);
    });
  }), nt(Ki.mouse, function(i) {
    oi(t, i, function(a) {
      a = hn(a), t.touching || e[i].call(r, a);
    });
  }));
}
function cu(r, t) {
  X.pointerEventsSupported ? nt(Vn.pointer, e) : X.touchEventsSupported || nt(Vn.mouse, e);
  function e(i) {
    function a(n) {
      n = hn(n), Go(r, n.target) || (n = uu(r, n), t.domHandlers[i].call(r, n));
    }
    oi(t, i, a, { capture: true });
  }
}
function oi(r, t, e, i) {
  r.mounted[t] = e, r.listenerOpts[t] = i, wh(r.domTarget, t, e, i);
}
function Ji(r) {
  var t = r.mounted;
  for (var e in t) t.hasOwnProperty(e) && Th(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var Kn = /* @__PURE__ */ function() {
  function r(t, e) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = false, this.domTarget = t, this.domHandlers = e;
  }
  return r;
}(), du = function(r) {
  N(t, r);
  function t(e, i) {
    var a = r.call(this) || this;
    return a.__pointerCapturing = false, a.dom = e, a.painterRoot = i, a._localHandlerScope = new Kn(e, St), Zi && (a._globalHandlerScope = new Kn(document, za)), lu(a, a._localHandlerScope), a;
  }
  return t.prototype.dispose = function() {
    Ji(this._localHandlerScope), Zi && Ji(this._globalHandlerScope);
  }, t.prototype.setCursor = function(e) {
    this.dom.style && (this.dom.style.cursor = e || "default");
  }, t.prototype.__togglePointerCapture = function(e) {
    if (this.__mayPointerCapture = null, Zi && +this.__pointerCapturing ^ +e) {
      this.__pointerCapturing = e;
      var i = this._globalHandlerScope;
      e ? cu(this, i) : Ji(i);
    }
  }, t;
}(Jr), Xo = 1;
X.hasGlobalWindow && (Xo = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var di = Xo, Na = 0.4, Ya = "#333", Ga = "#ccc", pu = "#eee", Qn = Mh, gu = 5e-5;
function ar(r) {
  return r > gu || r < -5e-5;
}
var nr = [], Rr = [], ji = Sr(), ta = Math.abs, cn = function() {
  function r() {
  }
  return r.prototype.getLocalTransform = function(t) {
    return r.getLocalTransform(this, t);
  }, r.prototype.setPosition = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.prototype.setScale = function(t) {
    this.scaleX = t[0], this.scaleY = t[1];
  }, r.prototype.setSkew = function(t) {
    this.skewX = t[0], this.skewY = t[1];
  }, r.prototype.setOrigin = function(t) {
    this.originX = t[0], this.originY = t[1];
  }, r.prototype.needLocalTransform = function() {
    return ar(this.rotation) || ar(this.x) || ar(this.y) || ar(this.scaleX - 1) || ar(this.scaleY - 1) || ar(this.skewX) || ar(this.skewY);
  }, r.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, e = this.needLocalTransform(), i = this.transform;
    if (!(e || t)) {
      i && (Qn(i), this.invTransform = null);
      return;
    }
    i = i || Sr(), e ? this.getLocalTransform(i) : Qn(i), t && (e ? ge(i, t, i) : wo(i, t)), this.transform = i, this._resolveGlobalScaleRatio(i);
  }, r.prototype._resolveGlobalScaleRatio = function(t) {
    var e = this.globalScaleRatio;
    if (e != null && e !== 1) {
      this.getGlobalScale(nr);
      var i = nr[0] < 0 ? -1 : 1, a = nr[1] < 0 ? -1 : 1, n = ((nr[0] - i) * e + i) / nr[0] || 0, s = ((nr[1] - a) * e + a) / nr[1] || 0;
      t[0] *= n, t[1] *= n, t[2] *= s, t[3] *= s;
    }
    this.invTransform = this.invTransform || Sr(), Ph(this.invTransform, t);
  }, r.prototype.getComputedTransform = function() {
    for (var t = this, e = []; t; ) e.push(t), t = t.parent;
    for (; t = e.pop(); ) t.updateTransform();
    return this.transform;
  }, r.prototype.setLocalTransform = function(t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1], i = t[2] * t[2] + t[3] * t[3], a = Math.atan2(t[1], t[0]), n = Math.PI / 2 + a - Math.atan2(t[3], t[2]);
      i = Math.sqrt(i) * Math.cos(n), e = Math.sqrt(e), this.skewX = n, this.skewY = 0, this.rotation = -a, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = i, this.originX = 0, this.originY = 0;
    }
  }, r.prototype.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent, e = this.transform;
      t && t.transform && (t.invTransform = t.invTransform || Sr(), ge(Rr, t.invTransform, e), e = Rr);
      var i = this.originX, a = this.originY;
      (i || a) && (ji[4] = i, ji[5] = a, ge(Rr, e, ji), Rr[4] -= i, Rr[5] -= a, e = Rr), this.setLocalTransform(e);
    }
  }, r.prototype.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, r.prototype.transformCoordToLocal = function(t, e) {
    var i = [t, e], a = this.invTransform;
    return a && pe(i, i, a), i;
  }, r.prototype.transformCoordToGlobal = function(t, e) {
    var i = [t, e], a = this.transform;
    return a && pe(i, i, a), i;
  }, r.prototype.getLineScale = function() {
    var t = this.transform;
    return t && ta(t[0] - 1) > 1e-10 && ta(t[3] - 1) > 1e-10 ? Math.sqrt(ta(t[0] * t[3] - t[2] * t[1])) : 1;
  }, r.prototype.copyTransform = function(t) {
    Uo(this, t);
  }, r.getLocalTransform = function(t, e) {
    e = e || [];
    var i = t.originX || 0, a = t.originY || 0, n = t.scaleX, s = t.scaleY, o = t.anchorX, f = t.anchorY, h = t.rotation || 0, u = t.x, v = t.y, l = t.skewX ? Math.tan(t.skewX) : 0, c = t.skewY ? Math.tan(-t.skewY) : 0;
    if (i || a || o || f) {
      var p = i + o, _ = a + f;
      e[4] = -p * n - l * _ * s, e[5] = -_ * s - c * p * n;
    } else e[4] = e[5] = 0;
    return e[0] = n, e[3] = s, e[1] = c * n, e[2] = l * s, h && To(e, e, h), e[4] += i + u, e[5] += a + v, e;
  }, r.initDefaultProps = function() {
    var t = r.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  }(), r;
}(), be = ["x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY"];
function Uo(r, t) {
  for (var e = 0; e < be.length; e++) {
    var i = be[e];
    r[i] = t[i];
  }
}
var Jn = {};
function ct(r, t) {
  t = t || Qt;
  var e = Jn[t];
  e || (e = Jn[t] = new Ri(500));
  var i = e.get(r);
  return i == null && (i = Ci.measureText(r, t).width, e.put(r, i)), i;
}
function jn(r, t, e, i) {
  var a = ct(r, t), n = Di(t), s = ue(0, a, e), o = Or(0, n, i), f = new U(s, o, a, n);
  return f;
}
function _u(r, t, e, i) {
  var a = ((r || "") + "").split(`
`), n = a.length;
  if (n === 1) return jn(a[0], t, e, i);
  for (var s = new U(0, 0, 0, 0), o = 0; o < a.length; o++) {
    var f = jn(a[o], t, e, i);
    o === 0 ? s.copy(f) : s.union(f);
  }
  return s;
}
function ue(r, t, e) {
  return e === "right" ? r -= t : e === "center" && (r -= t / 2), r;
}
function Or(r, t, e) {
  return e === "middle" ? r -= t / 2 : e === "bottom" && (r -= t), r;
}
function Di(r) {
  return ct("\u56FD", r);
}
function Se(r, t) {
  return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
}
function yu(r, t, e) {
  var i = t.position || "inside", a = t.distance != null ? t.distance : 5, n = e.height, s = e.width, o = n / 2, f = e.x, h = e.y, u = "left", v = "top";
  if (i instanceof Array) f += Se(i[0], e.width), h += Se(i[1], e.height), u = null, v = null;
  else switch (i) {
    case "left":
      f -= a, h += o, u = "right", v = "middle";
      break;
    case "right":
      f += a + s, h += o, v = "middle";
      break;
    case "top":
      f += s / 2, h -= a, u = "center", v = "bottom";
      break;
    case "bottom":
      f += s / 2, h += n + a, u = "center";
      break;
    case "inside":
      f += s / 2, h += o, u = "center", v = "middle";
      break;
    case "insideLeft":
      f += a, h += o, v = "middle";
      break;
    case "insideRight":
      f += s - a, h += o, u = "right", v = "middle";
      break;
    case "insideTop":
      f += s / 2, h += a, u = "center";
      break;
    case "insideBottom":
      f += s / 2, h += n - a, u = "center", v = "bottom";
      break;
    case "insideTopLeft":
      f += a, h += a;
      break;
    case "insideTopRight":
      f += s - a, h += a, u = "right";
      break;
    case "insideBottomLeft":
      f += a, h += n - a, v = "bottom";
      break;
    case "insideBottomRight":
      f += s - a, h += n - a, u = "right", v = "bottom";
      break;
  }
  return r = r || {}, r.x = f, r.y = h, r.align = u, r.verticalAlign = v, r;
}
var ra = "__zr_normal__", ea = be.concat(["ignore"]), mu = Pi(be, function(r, t) {
  return r[t] = true, r;
}, { ignore: false }), Ar = {}, wu = new U(0, 0, 0, 0), Ii = function() {
  function r(t) {
    this.id = lo(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
  }
  return r.prototype._init = function(t) {
    this.attr(t);
  }, r.prototype.drift = function(t, e, i) {
    switch (this.draggable) {
      case "horizontal":
        e = 0;
        break;
      case "vertical":
        t = 0;
        break;
    }
    var a = this.transform;
    a || (a = this.transform = [1, 0, 0, 1, 0, 0]), a[4] += t, a[5] += e, this.decomposeTransform(), this.markRedraw();
  }, r.prototype.beforeUpdate = function() {
  }, r.prototype.afterUpdate = function() {
  }, r.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, r.prototype.updateInnerText = function(t) {
    var e = this._textContent;
    if (e && (!e.ignore || t)) {
      this.textConfig || (this.textConfig = {});
      var i = this.textConfig, a = i.local, n = e.innerTransformable, s = void 0, o = void 0, f = false;
      n.parent = a ? this : null;
      var h = false;
      if (n.copyTransform(e), i.position != null) {
        var u = wu;
        i.layoutRect ? u.copy(i.layoutRect) : u.copy(this.getBoundingRect()), a || u.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(Ar, i, u) : yu(Ar, i, u), n.x = Ar.x, n.y = Ar.y, s = Ar.align, o = Ar.verticalAlign;
        var v = i.origin;
        if (v && i.rotation != null) {
          var l = void 0, c = void 0;
          v === "center" ? (l = u.width * 0.5, c = u.height * 0.5) : (l = Se(v[0], u.width), c = Se(v[1], u.height)), h = true, n.originX = -n.x + l + (a ? 0 : u.x), n.originY = -n.y + c + (a ? 0 : u.y);
        }
      }
      i.rotation != null && (n.rotation = i.rotation);
      var p = i.offset;
      p && (n.x += p[0], n.y += p[1], h || (n.originX = -p[0], n.originY = -p[1]));
      var _ = i.inside == null ? typeof i.position == "string" && i.position.indexOf("inside") >= 0 : i.inside, d = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), g = void 0, y = void 0, m = void 0;
      _ && this.canBeInsideText() ? (g = i.insideFill, y = i.insideStroke, (g == null || g === "auto") && (g = this.getInsideTextFill()), (y == null || y === "auto") && (y = this.getInsideTextStroke(g), m = true)) : (g = i.outsideFill, y = i.outsideStroke, (g == null || g === "auto") && (g = this.getOutsideFill()), (y == null || y === "auto") && (y = this.getOutsideStroke(g), m = true)), g = g || "#000", (g !== d.fill || y !== d.stroke || m !== d.autoStroke || s !== d.align || o !== d.verticalAlign) && (f = true, d.fill = g, d.stroke = y, d.autoStroke = m, d.align = s, d.verticalAlign = o, e.setDefaultTextStyle(d)), e.__dirty |= Ft, f && e.dirtyStyle(true);
    }
  }, r.prototype.canBeInsideText = function() {
    return true;
  }, r.prototype.getInsideTextFill = function() {
    return "#fff";
  }, r.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, r.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? Ga : Ya;
  }, r.prototype.getOutsideStroke = function(t) {
    var e = this.__zr && this.__zr.getBackgroundColor(), i = typeof e == "string" && Mt(e);
    i || (i = [255, 255, 255, 1]);
    for (var a = i[3], n = this.__zr.isDarkMode(), s = 0; s < 3; s++) i[s] = i[s] * a + (n ? 0 : 255) * (1 - a);
    return i[3] = 1, Re(i, "rgba");
  }, r.prototype.traverse = function(t, e) {
  }, r.prototype.attrKV = function(t, e) {
    t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, z(this.extra, e)) : this[t] = e;
  }, r.prototype.hide = function() {
    this.ignore = true, this.markRedraw();
  }, r.prototype.show = function() {
    this.ignore = false, this.markRedraw();
  }, r.prototype.attr = function(t, e) {
    if (typeof t == "string") this.attrKV(t, e);
    else if (Xt(t)) for (var i = t, a = G(i), n = 0; n < a.length; n++) {
      var s = a[n];
      this.attrKV(s, t[s]);
    }
    return this.markRedraw(), this;
  }, r.prototype.saveCurrentToNormalState = function(t) {
    this._innerSaveToNormal(t);
    for (var e = this._normalState, i = 0; i < this.animators.length; i++) {
      var a = this.animators[i], n = a.__fromStateTransition;
      if (!(a.getLoop() || n && n !== ra)) {
        var s = a.targetName, o = s ? e[s] : e;
        a.saveTo(o);
      }
    }
  }, r.prototype._innerSaveToNormal = function(t) {
    var e = this._normalState;
    e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, ea);
  }, r.prototype._savePrimaryToNormal = function(t, e, i) {
    for (var a = 0; a < i.length; a++) {
      var n = i[a];
      t[n] != null && !(n in e) && (e[n] = this[n]);
    }
  }, r.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, r.prototype.getState = function(t) {
    return this.states[t];
  }, r.prototype.ensureState = function(t) {
    var e = this.states;
    return e[t] || (e[t] = {}), e[t];
  }, r.prototype.clearStates = function(t) {
    this.useState(ra, false, t);
  }, r.prototype.useState = function(t, e, i, a) {
    var n = t === ra, s = this.hasState();
    if (!(!s && n)) {
      var o = this.currentStates, f = this.stateTransition;
      if (!(It(o, t) >= 0 && (e || o.length === 1))) {
        var h;
        if (this.stateProxy && !n && (h = this.stateProxy(t)), h || (h = this.states && this.states[t]), !h && !n) {
          fn("State " + t + " not exists.");
          return;
        }
        n || this.saveCurrentToNormalState(h);
        var u = !!(h && h.hoverLayer || a);
        u && this._toggleHoverLayerFlag(true), this._applyStateObj(t, h, this._normalState, e, !i && !this.__inHover && f && f.duration > 0, f);
        var v = this._textContent, l = this._textGuide;
        return v && v.useState(t, e, i, u), l && l.useState(t, e, i, u), n ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !u && this.__inHover && (this._toggleHoverLayerFlag(false), this.__dirty &= -2), h;
      }
    }
  }, r.prototype.useStates = function(t, e, i) {
    if (!t.length) this.clearStates();
    else {
      var a = [], n = this.currentStates, s = t.length, o = s === n.length;
      if (o) {
        for (var f = 0; f < s; f++) if (t[f] !== n[f]) {
          o = false;
          break;
        }
      }
      if (o) return;
      for (var f = 0; f < s; f++) {
        var h = t[f], u = void 0;
        this.stateProxy && (u = this.stateProxy(h, t)), u || (u = this.states[h]), u && a.push(u);
      }
      var v = a[s - 1], l = !!(v && v.hoverLayer || i);
      l && this._toggleHoverLayerFlag(true);
      var c = this._mergeStates(a), p = this.stateTransition;
      this.saveCurrentToNormalState(c), this._applyStateObj(t.join(","), c, this._normalState, false, !e && !this.__inHover && p && p.duration > 0, p);
      var _ = this._textContent, d = this._textGuide;
      _ && _.useStates(t, e, l), d && d.useStates(t, e, l), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !l && this.__inHover && (this._toggleHoverLayerFlag(false), this.__dirty &= -2);
    }
  }, r.prototype.isSilent = function() {
    for (var t = this.silent, e = this.parent; !t && e; ) {
      if (e.silent) {
        t = true;
        break;
      }
      e = e.parent;
    }
    return t;
  }, r.prototype._updateAnimationTargets = function() {
    for (var t = 0; t < this.animators.length; t++) {
      var e = this.animators[t];
      e.targetName && e.changeTarget(this[e.targetName]);
    }
  }, r.prototype.removeState = function(t) {
    var e = It(this.currentStates, t);
    if (e >= 0) {
      var i = this.currentStates.slice();
      i.splice(e, 1), this.useStates(i);
    }
  }, r.prototype.replaceState = function(t, e, i) {
    var a = this.currentStates.slice(), n = It(a, t), s = It(a, e) >= 0;
    n >= 0 ? s ? a.splice(n, 1) : a[n] = e : i && !s && a.push(e), this.useStates(a);
  }, r.prototype.toggleState = function(t, e) {
    e ? this.useState(t, true) : this.removeState(t);
  }, r.prototype._mergeStates = function(t) {
    for (var e = {}, i, a = 0; a < t.length; a++) {
      var n = t[a];
      z(e, n), n.textConfig && (i = i || {}, z(i, n.textConfig));
    }
    return i && (e.textConfig = i), e;
  }, r.prototype._applyStateObj = function(t, e, i, a, n, s) {
    var o = !(e && a);
    e && e.textConfig ? (this.textConfig = z({}, a ? this.textConfig : i.textConfig), z(this.textConfig, e.textConfig)) : o && i.textConfig && (this.textConfig = i.textConfig);
    for (var f = {}, h = false, u = 0; u < ea.length; u++) {
      var v = ea[u], l = n && mu[v];
      e && e[v] != null ? l ? (h = true, f[v] = e[v]) : this[v] = e[v] : o && i[v] != null && (l ? (h = true, f[v] = i[v]) : this[v] = i[v]);
    }
    if (!n) for (var u = 0; u < this.animators.length; u++) {
      var c = this.animators[u], p = c.targetName;
      c.getLoop() || c.__changeFinalValue(p ? (e || i)[p] : e || i);
    }
    h && this._transitionState(t, f, s);
  }, r.prototype._attachComponent = function(t) {
    if (!(t.__zr && !t.__hostTarget) && t !== this) {
      var e = this.__zr;
      e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this;
    }
  }, r.prototype._detachComponent = function(t) {
    t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
  }, r.prototype.getClipPath = function() {
    return this._clipPath;
  }, r.prototype.setClipPath = function(t) {
    this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw();
  }, r.prototype.removeClipPath = function() {
    var t = this._clipPath;
    t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
  }, r.prototype.getTextContent = function() {
    return this._textContent;
  }, r.prototype.setTextContent = function(t) {
    var e = this._textContent;
    e !== t && (e && e !== t && this.removeTextContent(), t.innerTransformable = new cn(), this._attachComponent(t), this._textContent = t, this.markRedraw());
  }, r.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), z(this.textConfig, t), this.markRedraw();
  }, r.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, r.prototype.removeTextContent = function() {
    var t = this._textContent;
    t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, r.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, r.prototype.setTextGuideLine = function(t) {
    this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw();
  }, r.prototype.removeTextGuideLine = function() {
    var t = this._textGuide;
    t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
  }, r.prototype.markRedraw = function() {
    this.__dirty |= Ft;
    var t = this.__zr;
    t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, r.prototype.dirty = function() {
    this.markRedraw();
  }, r.prototype._toggleHoverLayerFlag = function(t) {
    this.__inHover = t;
    var e = this._textContent, i = this._textGuide;
    e && (e.__inHover = t), i && (i.__inHover = t);
  }, r.prototype.addSelfToZr = function(t) {
    if (this.__zr !== t) {
      this.__zr = t;
      var e = this.animators;
      if (e) for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
      this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t);
    }
  }, r.prototype.removeSelfFromZr = function(t) {
    if (this.__zr) {
      this.__zr = null;
      var e = this.animators;
      if (e) for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
      this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t);
    }
  }, r.prototype.animate = function(t, e, i) {
    var a = t ? this[t] : this, n = new ln(a, e, i);
    return t && (n.targetName = t), this.addAnimator(n, t), n;
  }, r.prototype.addAnimator = function(t, e) {
    var i = this.__zr, a = this;
    t.during(function() {
      a.updateDuringAnimation(e);
    }).done(function() {
      var n = a.animators, s = It(n, t);
      s >= 0 && n.splice(s, 1);
    }), this.animators.push(t), i && i.animation.addAnimator(t), i && i.wakeUp();
  }, r.prototype.updateDuringAnimation = function(t) {
    this.markRedraw();
  }, r.prototype.stopAnimation = function(t, e) {
    for (var i = this.animators, a = i.length, n = [], s = 0; s < a; s++) {
      var o = i[s];
      !t || t === o.scope ? o.stop(e) : n.push(o);
    }
    return this.animators = n, this;
  }, r.prototype.animateTo = function(t, e, i) {
    ia(this, t, e, i);
  }, r.prototype.animateFrom = function(t, e, i) {
    ia(this, t, e, i, true);
  }, r.prototype._transitionState = function(t, e, i, a) {
    for (var n = ia(this, e, i, a), s = 0; s < n.length; s++) n[s].__fromStateTransition = t;
  }, r.prototype.getBoundingRect = function() {
    return null;
  }, r.prototype.getPaintRect = function() {
    return null;
  }, r.initDefaultProps = function() {
    var t = r.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = false, t.__dirty = Ft;
    function e(i, a, n, s) {
      Object.defineProperty(t, i, { get: function() {
        if (!this[a]) {
          var f = this[a] = [];
          o(this, f);
        }
        return this[a];
      }, set: function(f) {
        this[n] = f[0], this[s] = f[1], this[a] = f, o(this, f);
      } });
      function o(f, h) {
        Object.defineProperty(h, 0, { get: function() {
          return f[n];
        }, set: function(u) {
          f[n] = u;
        } }), Object.defineProperty(h, 1, { get: function() {
          return f[s];
        }, set: function(u) {
          f[s] = u;
        } });
      }
    }
    Object.defineProperty && (e("position", "_legacyPos", "x", "y"), e("scale", "_legacyScale", "scaleX", "scaleY"), e("origin", "_legacyOrigin", "originX", "originY"));
  }(), r;
}();
co(Ii, Jr);
co(Ii, cn);
function ia(r, t, e, i, a) {
  e = e || {};
  var n = [];
  Wo(r, "", r, t, e, i, n, a);
  var s = n.length, o = false, f = e.done, h = e.aborted, u = function() {
    o = true, s--, s <= 0 && (o ? f && f() : h && h());
  }, v = function() {
    s--, s <= 0 && (o ? f && f() : h && h());
  };
  s || f && f(), n.length > 0 && e.during && n[0].during(function(p, _) {
    e.during(_);
  });
  for (var l = 0; l < n.length; l++) {
    var c = n[l];
    u && c.done(u), v && c.aborted(v), e.force && c.duration(e.duration), c.start(e.easing);
  }
  return n;
}
function aa(r, t, e) {
  for (var i = 0; i < e; i++) r[i] = t[i];
}
function Tu(r) {
  return Ot(r[0]);
}
function bu(r, t, e) {
  if (Ot(t[e])) if (Ot(r[e]) || (r[e] = []), Zf(t[e])) {
    var i = t[e].length;
    r[e].length !== i && (r[e] = new t[e].constructor(i), aa(r[e], t[e], i));
  } else {
    var a = t[e], n = r[e], s = a.length;
    if (Tu(a)) for (var o = a[0].length, f = 0; f < s; f++) n[f] ? aa(n[f], a[f], o) : n[f] = Array.prototype.slice.call(a[f]);
    else aa(n, a, s);
    n.length = a.length;
  }
  else r[e] = t[e];
}
function Su(r, t) {
  return r === t || Ot(r) && Ot(t) && Cu(r, t);
}
function Cu(r, t) {
  var e = r.length;
  if (e !== t.length) return false;
  for (var i = 0; i < e; i++) if (r[i] !== t[i]) return false;
  return true;
}
function Wo(r, t, e, i, a, n, s, o) {
  for (var f = G(i), h = a.duration, u = a.delay, v = a.additive, l = a.setToFinal, c = !Xt(n), p = r.animators, _ = [], d = 0; d < f.length; d++) {
    var g = f[d], y = i[g];
    if (y != null && e[g] != null && (c || n[g])) if (Xt(y) && !Ot(y) && !Li(y)) {
      if (t) {
        o || (e[g] = y, r.updateDuringAnimation(t));
        continue;
      }
      Wo(r, g, e[g], y, a, n && n[g], s, o);
    } else _.push(g);
    else o || (e[g] = y, r.updateDuringAnimation(t), _.push(g));
  }
  var m = _.length;
  if (!v && m) for (var w = 0; w < p.length; w++) {
    var S = p[w];
    if (S.targetName === t) {
      var b = S.stopTracks(_);
      if (b) {
        var T = It(p, S);
        p.splice(T, 1);
      }
    }
  }
  if (a.force || (_ = Ma(_, function(L) {
    return !Su(i[L], e[L]);
  }), m = _.length), m > 0 || a.force && !s.length) {
    var C = void 0, M = void 0, P = void 0;
    if (o) {
      M = {}, l && (C = {});
      for (var w = 0; w < m; w++) {
        var g = _[w];
        M[g] = e[g], l ? C[g] = i[g] : e[g] = i[g];
      }
    } else if (l) {
      P = {};
      for (var w = 0; w < m; w++) {
        var g = _[w];
        P[g] = ai(e[g]), bu(e, i, g);
      }
    }
    var S = new ln(e, false, false, v ? Ma(p, function(R) {
      return R.targetName === t;
    }) : null);
    S.targetName = t, a.scope && (S.scope = a.scope), l && C && S.whenWithKeys(0, C, _), P && S.whenWithKeys(0, P, _), S.whenWithKeys(h ?? 500, o ? M : i, _).delay(u || 0), r.addAnimator(S, t), s.push(S);
  }
}
var yr = function(r) {
  N(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i.isGroup = true, i._children = [], i.attr(e), i;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.children = function() {
    return this._children.slice();
  }, t.prototype.childAt = function(e) {
    return this._children[e];
  }, t.prototype.childOfName = function(e) {
    for (var i = this._children, a = 0; a < i.length; a++) if (i[a].name === e) return i[a];
  }, t.prototype.childCount = function() {
    return this._children.length;
  }, t.prototype.add = function(e) {
    return e && e !== this && e.parent !== this && (this._children.push(e), this._doAdd(e)), this;
  }, t.prototype.addBefore = function(e, i) {
    if (e && e !== this && e.parent !== this && i && i.parent === this) {
      var a = this._children, n = a.indexOf(i);
      n >= 0 && (a.splice(n, 0, e), this._doAdd(e));
    }
    return this;
  }, t.prototype.replace = function(e, i) {
    var a = It(this._children, e);
    return a >= 0 && this.replaceAt(i, a), this;
  }, t.prototype.replaceAt = function(e, i) {
    var a = this._children, n = a[i];
    if (e && e !== this && e.parent !== this && e !== n) {
      a[i] = e, n.parent = null;
      var s = this.__zr;
      s && n.removeSelfFromZr(s), this._doAdd(e);
    }
    return this;
  }, t.prototype._doAdd = function(e) {
    e.parent && e.parent.remove(e), e.parent = this;
    var i = this.__zr;
    i && i !== e.__zr && e.addSelfToZr(i), i && i.refresh();
  }, t.prototype.remove = function(e) {
    var i = this.__zr, a = this._children, n = It(a, e);
    return n < 0 ? this : (a.splice(n, 1), e.parent = null, i && e.removeSelfFromZr(i), i && i.refresh(), this);
  }, t.prototype.removeAll = function() {
    for (var e = this._children, i = this.__zr, a = 0; a < e.length; a++) {
      var n = e[a];
      i && n.removeSelfFromZr(i), n.parent = null;
    }
    return e.length = 0, this;
  }, t.prototype.eachChild = function(e, i) {
    for (var a = this._children, n = 0; n < a.length; n++) {
      var s = a[n];
      e.call(i, s, n);
    }
    return this;
  }, t.prototype.traverse = function(e, i) {
    for (var a = 0; a < this._children.length; a++) {
      var n = this._children[a], s = e.call(i, n);
      n.isGroup && !s && n.traverse(e, i);
    }
    return this;
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var i = 0; i < this._children.length; i++) {
      var a = this._children[i];
      a.addSelfToZr(e);
    }
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var i = 0; i < this._children.length; i++) {
      var a = this._children[i];
      a.removeSelfFromZr(e);
    }
  }, t.prototype.getBoundingRect = function(e) {
    for (var i = new U(0, 0, 0, 0), a = e || this._children, n = [], s = null, o = 0; o < a.length; o++) {
      var f = a[o];
      if (!(f.ignore || f.invisible)) {
        var h = f.getBoundingRect(), u = f.getLocalTransform(n);
        u ? (U.applyTransform(i, h, u), s = s || i.clone(), s.union(i)) : (s = s || h.clone(), s.union(h));
      }
    }
    return s || i;
  }, t;
}(Ii);
yr.prototype.type = "group";
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/
var fi = {}, qo = {};
function Mu(r) {
  delete qo[r];
}
function Pu(r) {
  if (!r) return false;
  if (typeof r == "string") return li(r, 1) < Na;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, i = t.length, a = 0; a < i; a++) e += li(t[a].color, 1);
    return e /= i, e < Na;
  }
  return false;
}
var Lu = function() {
  function r(t, e, i) {
    var a = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = true, this._needsRefreshHover = true, this._darkMode = false, i = i || {}, this.dom = e, this.id = t;
    var n = new kh(), s = i.renderer || "canvas";
    fi[s] || (s = G(fi)[0]), i.useDirtyRect = i.useDirtyRect == null ? false : i.useDirtyRect;
    var o = new fi[s](e, n, i, t), f = i.ssr || o.ssrOnly;
    this.storage = n, this.painter = o;
    var h = !X.node && !X.worker && !f ? new du(o.getViewportRoot(), o.root) : null, u = i.useCoarsePointer, v = u == null || u === "auto" ? X.touchEventsSupported : !!u, l = 44, c;
    v && (c = $(i.pointerSize, l)), this.handler = new Co(n, o, h, o.root, c), this.animation = new ou({ stage: { update: f ? null : function() {
      return a._flush(true);
    } } }), f || this.animation.start();
  }
  return r.prototype.add = function(t) {
    this._disposed || !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }, r.prototype.remove = function(t) {
    this._disposed || !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
  }, r.prototype.configLayer = function(t, e) {
    this._disposed || (this.painter.configLayer && this.painter.configLayer(t, e), this.refresh());
  }, r.prototype.setBackgroundColor = function(t) {
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = Pu(t));
  }, r.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, r.prototype.setDarkMode = function(t) {
    this._darkMode = t;
  }, r.prototype.isDarkMode = function() {
    return this._darkMode;
  }, r.prototype.refreshImmediately = function(t) {
    this._disposed || (t || this.animation.update(true), this._needsRefresh = false, this.painter.refresh(), this._needsRefresh = false);
  }, r.prototype.refresh = function() {
    this._disposed || (this._needsRefresh = true, this.animation.start());
  }, r.prototype.flush = function() {
    this._disposed || this._flush(false);
  }, r.prototype._flush = function(t) {
    var e, i = Yr();
    this._needsRefresh && (e = true, this.refreshImmediately(t)), this._needsRefreshHover && (e = true, this.refreshHoverImmediately());
    var a = Yr();
    e ? (this._stillFrameAccum = 0, this.trigger("rendered", { elapsedTime: a - i })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, r.prototype.setSleepAfterStill = function(t) {
    this._sleepAfterStill = t;
  }, r.prototype.wakeUp = function() {
    this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
  }, r.prototype.refreshHover = function() {
    this._needsRefreshHover = true;
  }, r.prototype.refreshHoverImmediately = function() {
    this._disposed || (this._needsRefreshHover = false, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover());
  }, r.prototype.resize = function(t) {
    this._disposed || (t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize());
  }, r.prototype.clearAnimation = function() {
    this._disposed || this.animation.clear();
  }, r.prototype.getWidth = function() {
    if (!this._disposed) return this.painter.getWidth();
  }, r.prototype.getHeight = function() {
    if (!this._disposed) return this.painter.getHeight();
  }, r.prototype.setCursorStyle = function(t) {
    this._disposed || this.handler.setCursorStyle(t);
  }, r.prototype.findHover = function(t, e) {
    if (!this._disposed) return this.handler.findHover(t, e);
  }, r.prototype.on = function(t, e, i) {
    return this._disposed || this.handler.on(t, e, i), this;
  }, r.prototype.off = function(t, e) {
    this._disposed || this.handler.off(t, e);
  }, r.prototype.trigger = function(t, e) {
    this._disposed || this.handler.trigger(t, e);
  }, r.prototype.clear = function() {
    if (!this._disposed) {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++) t[e] instanceof yr && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, r.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = true, Mu(this.id));
  }, r;
}();
function kc(r, t) {
  var e = new Lu(lo(), r, t);
  return qo[e.id] = e, e;
}
function Bc(r, t) {
  fi[r] = t;
}
var Xa;
function xu(r) {
  if (typeof Xa == "function") return Xa(r);
}
function Hc(r) {
  Xa = r;
}
var Ua = new Ri(50);
function Ru(r) {
  if (typeof r == "string") {
    var t = Ua.get(r);
    return t && t.image;
  } else return r;
}
function dn(r, t, e, i, a) {
  if (r) if (typeof r == "string") {
    if (t && t.__zrImageSrc === r || !e) return t;
    var n = Ua.get(r), s = { hostEl: e, cb: i, cbPayload: a };
    return n ? (t = n.image, !Ei(t) && n.pending.push(s)) : (t = Ci.loadImage(r, ts, ts), t.__zrImageSrc = r, Ua.put(r, t.__cachedImgObj = { image: t, pending: [s] })), t;
  } else return r;
  else return t;
}
function ts() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t], i = e.cb;
    i && i(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function Ei(r) {
  return r && r.width && r.height;
}
var na = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function Au(r, t, e, i, a, n) {
  if (!e) {
    r.text = "", r.isTruncated = false;
    return;
  }
  var s = (t + "").split(`
`);
  n = $o(e, i, a, n);
  for (var o = false, f = {}, h = 0, u = s.length; h < u; h++) Vo(f, s[h], n), s[h] = f.textLine, o = o || f.isTruncated;
  r.text = s.join(`
`), r.isTruncated = o;
}
function $o(r, t, e, i) {
  i = i || {};
  var a = z({}, i);
  a.font = t, e = $(e, "..."), a.maxIterations = $(i.maxIterations, 2);
  var n = a.minChar = $(i.minChar, 0);
  a.cnCharWidth = ct("\u56FD", t);
  var s = a.ascCharWidth = ct("a", t);
  a.placeholder = $(i.placeholder, "");
  for (var o = r = Math.max(0, r - 1), f = 0; f < n && o >= s; f++) o -= s;
  var h = ct(e, t);
  return h > o && (e = "", h = 0), o = r - h, a.ellipsis = e, a.ellipsisWidth = h, a.contentWidth = o, a.containerWidth = r, a;
}
function Vo(r, t, e) {
  var i = e.containerWidth, a = e.font, n = e.contentWidth;
  if (!i) {
    r.textLine = "", r.isTruncated = false;
    return;
  }
  var s = ct(t, a);
  if (s <= i) {
    r.textLine = t, r.isTruncated = false;
    return;
  }
  for (var o = 0; ; o++) {
    if (s <= n || o >= e.maxIterations) {
      t += e.ellipsis;
      break;
    }
    var f = o === 0 ? Du(t, n, e.ascCharWidth, e.cnCharWidth) : s > 0 ? Math.floor(t.length * n / s) : 0;
    t = t.substr(0, f), s = ct(t, a);
  }
  t === "" && (t = e.placeholder), r.textLine = t, r.isTruncated = true;
}
function Du(r, t, e, i) {
  for (var a = 0, n = 0, s = r.length; n < s && a < t; n++) {
    var o = r.charCodeAt(n);
    a += 0 <= o && o <= 127 ? e : i;
  }
  return n;
}
function Iu(r, t) {
  r != null && (r += "");
  var e = t.overflow, i = t.padding, a = t.font, n = e === "truncate", s = Di(a), o = $(t.lineHeight, s), f = !!t.backgroundColor, h = t.lineOverflow === "truncate", u = false, v = t.width, l;
  v != null && (e === "break" || e === "breakAll") ? l = r ? Zo(r, t.font, v, e === "breakAll", 0).lines : [] : l = r ? r.split(`
`) : [];
  var c = l.length * o, p = $(t.height, c);
  if (c > p && h) {
    var _ = Math.floor(p / o);
    u = u || l.length > _, l = l.slice(0, _);
  }
  if (r && n && v != null) for (var d = $o(v, a, t.ellipsis, { minChar: t.truncateMinChar, placeholder: t.placeholder }), g = {}, y = 0; y < l.length; y++) Vo(g, l[y], d), l[y] = g.textLine, u = u || g.isTruncated;
  for (var m = p, w = 0, y = 0; y < l.length; y++) w = Math.max(ct(l[y], a), w);
  v == null && (v = w);
  var S = w;
  return i && (m += i[0] + i[2], S += i[1] + i[3], v += i[1] + i[3]), f && (S = v), { lines: l, height: p, outerWidth: S, outerHeight: m, lineHeight: o, calculatedLineHeight: s, contentWidth: w, contentHeight: c, width: v, isTruncated: u };
}
var Eu = /* @__PURE__ */ function() {
  function r() {
  }
  return r;
}(), rs = /* @__PURE__ */ function() {
  function r(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return r;
}(), Fu = /* @__PURE__ */ function() {
  function r() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = false;
  }
  return r;
}();
function Ou(r, t) {
  var e = new Fu();
  if (r != null && (r += ""), !r) return e;
  for (var i = t.width, a = t.height, n = t.overflow, s = (n === "break" || n === "breakAll") && i != null ? { width: i, accumWidth: 0, breakAll: n === "breakAll" } : null, o = na.lastIndex = 0, f; (f = na.exec(r)) != null; ) {
    var h = f.index;
    h > o && sa(e, r.substring(o, h), t, s), sa(e, f[2], t, s, f[1]), o = na.lastIndex;
  }
  o < r.length && sa(e, r.substring(o, r.length), t, s);
  var u = [], v = 0, l = 0, c = t.padding, p = n === "truncate", _ = t.lineOverflow === "truncate", d = {};
  function g(V, W, Y) {
    V.width = W, V.lineHeight = Y, v += Y, l = Math.max(l, W);
  }
  t: for (var y = 0; y < e.lines.length; y++) {
    for (var m = e.lines[y], w = 0, S = 0, b = 0; b < m.tokens.length; b++) {
      var T = m.tokens[b], C = T.styleName && t.rich[T.styleName] || {}, M = T.textPadding = C.padding, P = M ? M[1] + M[3] : 0, L = T.font = C.font || t.font;
      T.contentHeight = Di(L);
      var R = $(C.height, T.contentHeight);
      if (T.innerHeight = R, M && (R += M[0] + M[2]), T.height = R, T.lineHeight = ri(C.lineHeight, t.lineHeight, R), T.align = C && C.align || t.align, T.verticalAlign = C && C.verticalAlign || "middle", _ && a != null && v + T.lineHeight > a) {
        var A = e.lines.length;
        b > 0 ? (m.tokens = m.tokens.slice(0, b), g(m, S, w), e.lines = e.lines.slice(0, y + 1)) : e.lines = e.lines.slice(0, y), e.isTruncated = e.isTruncated || e.lines.length < A;
        break t;
      }
      var x = C.width, E = x == null || x === "auto";
      if (typeof x == "string" && x.charAt(x.length - 1) === "%") T.percentWidth = x, u.push(T), T.contentWidth = ct(T.text, L);
      else {
        if (E) {
          var D = C.backgroundColor, F = D && D.image;
          F && (F = Ru(F), Ei(F) && (T.width = Math.max(T.width, F.width * R / F.height)));
        }
        var H = p && i != null ? i - S : null;
        H != null && H < T.width ? !E || H < P ? (T.text = "", T.width = T.contentWidth = 0) : (Au(d, T.text, H - P, L, t.ellipsis, { minChar: t.truncateMinChar }), T.text = d.text, e.isTruncated = e.isTruncated || d.isTruncated, T.width = T.contentWidth = ct(T.text, L)) : T.contentWidth = ct(T.text, L);
      }
      T.width += P, S += T.width, C && (w = Math.max(w, T.lineHeight));
    }
    g(m, S, w);
  }
  e.outerWidth = e.width = $(i, l), e.outerHeight = e.height = $(a, v), e.contentHeight = v, e.contentWidth = l, c && (e.outerWidth += c[1] + c[3], e.outerHeight += c[0] + c[2]);
  for (var y = 0; y < u.length; y++) {
    var T = u[y], j = T.percentWidth;
    T.width = parseInt(j, 10) / 100 * e.width;
  }
  return e;
}
function sa(r, t, e, i, a) {
  var n = t === "", s = a && e.rich[a] || {}, o = r.lines, f = s.font || e.font, h = false, u, v;
  if (i) {
    var l = s.padding, c = l ? l[1] + l[3] : 0;
    if (s.width != null && s.width !== "auto") {
      var p = Se(s.width, i.width) + c;
      o.length > 0 && p + i.accumWidth > i.width && (u = t.split(`
`), h = true), i.accumWidth = p;
    } else {
      var _ = Zo(t, f, i.width, i.breakAll, i.accumWidth);
      i.accumWidth = _.accumWidth + c, v = _.linesWidths, u = _.lines;
    }
  } else u = t.split(`
`);
  for (var d = 0; d < u.length; d++) {
    var g = u[d], y = new Eu();
    if (y.styleName = a, y.text = g, y.isLineHolder = !g && !n, typeof s.width == "number" ? y.width = s.width : y.width = v ? v[d] : ct(g, f), !d && !h) {
      var m = (o[o.length - 1] || (o[0] = new rs())).tokens, w = m.length;
      w === 1 && m[0].isLineHolder ? m[0] = y : (g || !w || n) && m.push(y);
    } else o.push(new rs([y]));
  }
}
function ku(r) {
  var t = r.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var Bu = Pi(",&?/;] ".split(""), function(r, t) {
  return r[t] = true, r;
}, {});
function Hu(r) {
  return ku(r) ? !!Bu[r] : true;
}
function Zo(r, t, e, i, a) {
  for (var n = [], s = [], o = "", f = "", h = 0, u = 0, v = 0; v < r.length; v++) {
    var l = r.charAt(v);
    if (l === `
`) {
      f && (o += f, u += h), n.push(o), s.push(u), o = "", f = "", h = 0, u = 0;
      continue;
    }
    var c = ct(l, t), p = i ? false : !Hu(l);
    if (n.length ? u + c > e : a + u + c > e) {
      u ? (o || f) && (p ? (o || (o = f, f = "", h = 0, u = h), n.push(o), s.push(u - h), f += l, h += c, o = "", u = h) : (f && (o += f, f = "", h = 0), n.push(o), s.push(u), o = l, u = c)) : p ? (n.push(f), s.push(h), f = l, h = c) : (n.push(l), s.push(c));
      continue;
    }
    u += c, p ? (f += l, h += c) : (f && (o += f, f = "", h = 0), o += l);
  }
  return !n.length && !o && (o = r, f = "", h = 0), f && (o += f), o && (n.push(o), s.push(u)), n.length === 1 && (u += a), { accumWidth: u, lines: n, linesWidths: s };
}
var Wa = "__zr_style_" + Math.round(Math.random() * 10), Mr = { shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: "#000", opacity: 1, blend: "source-over" }, Fi = { style: { shadowBlur: true, shadowOffsetX: true, shadowOffsetY: true, shadowColor: true, opacity: true } };
Mr[Wa] = true;
var es = ["z", "z2", "invisible"], zu = ["invisible"], Ae = function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype._init = function(e) {
    for (var i = G(e), a = 0; a < i.length; a++) {
      var n = i[a];
      n === "style" ? this.useStyle(e[n]) : r.prototype.attrKV.call(this, n, e[n]);
    }
    this.style || this.useStyle({});
  }, t.prototype.beforeBrush = function() {
  }, t.prototype.afterBrush = function() {
  }, t.prototype.innerBeforeBrush = function() {
  }, t.prototype.innerAfterBrush = function() {
  }, t.prototype.shouldBePainted = function(e, i, a, n) {
    var s = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && Nu(this, e, i) || s && !s[0] && !s[3]) return false;
    if (a && this.__clipPaths) {
      for (var o = 0; o < this.__clipPaths.length; ++o) if (this.__clipPaths[o].isZeroArea()) return false;
    }
    if (n && this.parent) for (var f = this.parent; f; ) {
      if (f.ignore) return false;
      f = f.parent;
    }
    return true;
  }, t.prototype.contain = function(e, i) {
    return this.rectContain(e, i);
  }, t.prototype.traverse = function(e, i) {
    e.call(i, this);
  }, t.prototype.rectContain = function(e, i) {
    var a = this.transformCoordToLocal(e, i), n = this.getBoundingRect();
    return n.contain(a[0], a[1]);
  }, t.prototype.getPaintRect = function() {
    var e = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var i = this.transform, a = this.getBoundingRect(), n = this.style, s = n.shadowBlur || 0, o = n.shadowOffsetX || 0, f = n.shadowOffsetY || 0;
      e = this._paintRect || (this._paintRect = new U(0, 0, 0, 0)), i ? U.applyTransform(e, a, i) : e.copy(a), (s || o || f) && (e.width += s * 2 + Math.abs(o), e.height += s * 2 + Math.abs(f), e.x = Math.min(e.x, e.x + o - s), e.y = Math.min(e.y, e.y + f - s));
      var h = this.dirtyRectTolerance;
      e.isZero() || (e.x = Math.floor(e.x - h), e.y = Math.floor(e.y - h), e.width = Math.ceil(e.width + 1 + h * 2), e.height = Math.ceil(e.height + 1 + h * 2));
    }
    return e;
  }, t.prototype.setPrevPaintRect = function(e) {
    e ? (this._prevPaintRect = this._prevPaintRect || new U(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
  }, t.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, t.prototype.animateStyle = function(e) {
    return this.animate("style", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : this.markRedraw();
  }, t.prototype.attrKV = function(e, i) {
    e !== "style" ? r.prototype.attrKV.call(this, e, i) : this.style ? this.setStyle(i) : this.useStyle(i);
  }, t.prototype.setStyle = function(e, i) {
    return typeof e == "string" ? this.style[e] = i : z(this.style, e), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(e) {
    e || this.markRedraw(), this.__dirty |= ii, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & ii);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= -3;
  }, t.prototype.createStyle = function(e) {
    return xi(Mr, e);
  }, t.prototype.useStyle = function(e) {
    e[Wa] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle();
  }, t.prototype.isStyleObject = function(e) {
    return e[Wa];
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.style && !i.style && (i.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, i, es);
  }, t.prototype._applyStateObj = function(e, i, a, n, s, o) {
    r.prototype._applyStateObj.call(this, e, i, a, n, s, o);
    var f = !(i && n), h;
    if (i && i.style ? s ? n ? h = i.style : (h = this._mergeStyle(this.createStyle(), a.style), this._mergeStyle(h, i.style)) : (h = this._mergeStyle(this.createStyle(), n ? this.style : a.style), this._mergeStyle(h, i.style)) : f && (h = a.style), h) if (s) {
      var u = this.style;
      if (this.style = this.createStyle(f ? {} : u), f) for (var v = G(u), l = 0; l < v.length; l++) {
        var c = v[l];
        c in h && (h[c] = h[c], this.style[c] = u[c]);
      }
      for (var p = G(h), l = 0; l < p.length; l++) {
        var c = p[l];
        this.style[c] = this.style[c];
      }
      this._transitionState(e, { style: h }, o, this.getAnimationStyleProps());
    } else this.useStyle(h);
    for (var _ = this.__inHover ? zu : es, l = 0; l < _.length; l++) {
      var c = _[l];
      i && i[c] != null ? this[c] = i[c] : f && a[c] != null && (this[c] = a[c]);
    }
  }, t.prototype._mergeStates = function(e) {
    for (var i = r.prototype._mergeStates.call(this, e), a, n = 0; n < e.length; n++) {
      var s = e[n];
      s.style && (a = a || {}, this._mergeStyle(a, s.style));
    }
    return a && (i.style = a), i;
  }, t.prototype._mergeStyle = function(e, i) {
    return z(e, i), e;
  }, t.prototype.getAnimationStyleProps = function() {
    return Fi;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.type = "displayable", e.invisible = false, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = false, e.cursor = "pointer", e.rectHover = false, e.incremental = false, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = Ft | ii;
  }(), t;
}(Ii), oa = new U(0, 0, 0, 0), fa = new U(0, 0, 0, 0);
function Nu(r, t, e) {
  return oa.copy(r.getBoundingRect()), r.transform && oa.applyTransform(r.transform), fa.width = t, fa.height = e, !oa.intersect(fa);
}
var ht = Math.min, ut = Math.max, ha = Math.sin, ua = Math.cos, sr = Math.PI * 2, Ue = Qr(), We = Qr(), qe = Qr();
function Ko(r, t, e) {
  if (r.length !== 0) {
    for (var i = r[0], a = i[0], n = i[0], s = i[1], o = i[1], f = 1; f < r.length; f++) i = r[f], a = ht(a, i[0]), n = ut(n, i[0]), s = ht(s, i[1]), o = ut(o, i[1]);
    t[0] = a, t[1] = s, e[0] = n, e[1] = o;
  }
}
function is(r, t, e, i, a, n) {
  a[0] = ht(r, e), a[1] = ht(t, i), n[0] = ut(r, e), n[1] = ut(t, i);
}
var as = [], ns = [];
function Yu(r, t, e, i, a, n, s, o, f, h) {
  var u = Do, v = rt, l = u(r, e, a, s, as);
  f[0] = 1 / 0, f[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0;
  for (var c = 0; c < l; c++) {
    var p = v(r, e, a, s, as[c]);
    f[0] = ht(p, f[0]), h[0] = ut(p, h[0]);
  }
  l = u(t, i, n, o, ns);
  for (var c = 0; c < l; c++) {
    var _ = v(t, i, n, o, ns[c]);
    f[1] = ht(_, f[1]), h[1] = ut(_, h[1]);
  }
  f[0] = ht(r, f[0]), h[0] = ut(r, h[0]), f[0] = ht(s, f[0]), h[0] = ut(s, h[0]), f[1] = ht(t, f[1]), h[1] = ut(t, h[1]), f[1] = ht(o, f[1]), h[1] = ut(o, h[1]);
}
function Gu(r, t, e, i, a, n, s, o) {
  var f = Io, h = at, u = ut(ht(f(r, e, a), 1), 0), v = ut(ht(f(t, i, n), 1), 0), l = h(r, e, a, u), c = h(t, i, n, v);
  s[0] = ht(r, a, l), s[1] = ht(t, n, c), o[0] = ut(r, a, l), o[1] = ut(t, n, c);
}
function Xu(r, t, e, i, a, n, s, o, f) {
  var h = zr, u = Nr, v = Math.abs(a - n);
  if (v % sr < 1e-4 && v > 1e-4) {
    o[0] = r - e, o[1] = t - i, f[0] = r + e, f[1] = t + i;
    return;
  }
  if (Ue[0] = ua(a) * e + r, Ue[1] = ha(a) * i + t, We[0] = ua(n) * e + r, We[1] = ha(n) * i + t, h(o, Ue, We), u(f, Ue, We), a = a % sr, a < 0 && (a = a + sr), n = n % sr, n < 0 && (n = n + sr), a > n && !s ? n += sr : a < n && s && (a += sr), s) {
    var l = n;
    n = a, a = l;
  }
  for (var c = 0; c < n; c += Math.PI / 2) c > a && (qe[0] = ua(c) * e + r, qe[1] = ha(c) * i + t, h(o, qe, o), u(f, qe, f));
}
var B = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 }, or = [], fr = [], Pt = [], Ut = [], Lt = [], xt = [], va = Math.min, la = Math.max, hr = Math.cos, ur = Math.sin, Nt = Math.abs, qa = Math.PI, qt = qa * 2, ca = typeof Float32Array < "u", ne = [];
function da(r) {
  var t = Math.round(r / qa * 1e8) / 1e8;
  return t % 2 * qa;
}
function Uu(r, t) {
  var e = da(r[0]);
  e < 0 && (e += qt);
  var i = e - r[0], a = r[1];
  a += i, !t && a - e >= qt ? a = e + qt : t && e - a >= qt ? a = e - qt : !t && e > a ? a = e + (qt - da(e - a)) : t && e < a && (a = e - (qt - da(a - e))), r[0] = e, r[1] = a;
}
var jt = function() {
  function r(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = false), this._saveData && (this.data = []);
  }
  return r.prototype.increaseVersion = function() {
    this._version++;
  }, r.prototype.getVersion = function() {
    return this._version;
  }, r.prototype.setScale = function(t, e, i) {
    i = i || 0, i > 0 && (this._ux = Nt(i / di / t) || 0, this._uy = Nt(i / di / e) || 0);
  }, r.prototype.setDPR = function(t) {
    this.dpr = t;
  }, r.prototype.setContext = function(t) {
    this._ctx = t;
  }, r.prototype.getContext = function() {
    return this._ctx;
  }, r.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, r.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, r.prototype.moveTo = function(t, e) {
    return this._drawPendingPt(), this.addData(B.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
  }, r.prototype.lineTo = function(t, e) {
    var i = Nt(t - this._xi), a = Nt(e - this._yi), n = i > this._ux || a > this._uy;
    if (this.addData(B.L, t, e), this._ctx && n && this._ctx.lineTo(t, e), n) this._xi = t, this._yi = e, this._pendingPtDist = 0;
    else {
      var s = i * i + a * a;
      s > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = s);
    }
    return this;
  }, r.prototype.bezierCurveTo = function(t, e, i, a, n, s) {
    return this._drawPendingPt(), this.addData(B.C, t, e, i, a, n, s), this._ctx && this._ctx.bezierCurveTo(t, e, i, a, n, s), this._xi = n, this._yi = s, this;
  }, r.prototype.quadraticCurveTo = function(t, e, i, a) {
    return this._drawPendingPt(), this.addData(B.Q, t, e, i, a), this._ctx && this._ctx.quadraticCurveTo(t, e, i, a), this._xi = i, this._yi = a, this;
  }, r.prototype.arc = function(t, e, i, a, n, s) {
    this._drawPendingPt(), ne[0] = a, ne[1] = n, Uu(ne, s), a = ne[0], n = ne[1];
    var o = n - a;
    return this.addData(B.A, t, e, i, i, a, o, 0, s ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, a, n, s), this._xi = hr(n) * i + t, this._yi = ur(n) * i + e, this;
  }, r.prototype.arcTo = function(t, e, i, a, n) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, i, a, n), this;
  }, r.prototype.rect = function(t, e, i, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, i, a), this.addData(B.R, t, e, i, a), this;
  }, r.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(B.Z);
    var t = this._ctx, e = this._x0, i = this._y0;
    return t && t.closePath(), this._xi = e, this._yi = i, this;
  }, r.prototype.fill = function(t) {
    t && t.fill(), this.toStatic();
  }, r.prototype.stroke = function(t) {
    t && t.stroke(), this.toStatic();
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.setData = function(t) {
    var e = t.length;
    !(this.data && this.data.length === e) && ca && (this.data = new Float32Array(e));
    for (var i = 0; i < e; i++) this.data[i] = t[i];
    this._len = e;
  }, r.prototype.appendPath = function(t) {
    t instanceof Array || (t = [t]);
    for (var e = t.length, i = 0, a = this._len, n = 0; n < e; n++) i += t[n].len();
    ca && this.data instanceof Float32Array && (this.data = new Float32Array(a + i));
    for (var n = 0; n < e; n++) for (var s = t[n].data, o = 0; o < s.length; o++) this.data[a++] = s[o];
    this._len = a;
  }, r.prototype.addData = function(t, e, i, a, n, s, o, f, h) {
    if (this._saveData) {
      var u = this.data;
      this._len + arguments.length > u.length && (this._expandData(), u = this.data);
      for (var v = 0; v < arguments.length; v++) u[this._len++] = arguments[v];
    }
  }, r.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, r.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
      this.data = t;
    }
  }, r.prototype.toStatic = function() {
    if (this._saveData) {
      this._drawPendingPt();
      var t = this.data;
      t instanceof Array && (t.length = this._len, ca && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, r.prototype.getBoundingRect = function() {
    Pt[0] = Pt[1] = Lt[0] = Lt[1] = Number.MAX_VALUE, Ut[0] = Ut[1] = xt[0] = xt[1] = -Number.MAX_VALUE;
    var t = this.data, e = 0, i = 0, a = 0, n = 0, s;
    for (s = 0; s < this._len; ) {
      var o = t[s++], f = s === 1;
      switch (f && (e = t[s], i = t[s + 1], a = e, n = i), o) {
        case B.M:
          e = a = t[s++], i = n = t[s++], Lt[0] = a, Lt[1] = n, xt[0] = a, xt[1] = n;
          break;
        case B.L:
          is(e, i, t[s], t[s + 1], Lt, xt), e = t[s++], i = t[s++];
          break;
        case B.C:
          Yu(e, i, t[s++], t[s++], t[s++], t[s++], t[s], t[s + 1], Lt, xt), e = t[s++], i = t[s++];
          break;
        case B.Q:
          Gu(e, i, t[s++], t[s++], t[s], t[s + 1], Lt, xt), e = t[s++], i = t[s++];
          break;
        case B.A:
          var h = t[s++], u = t[s++], v = t[s++], l = t[s++], c = t[s++], p = t[s++] + c;
          s += 1;
          var _ = !t[s++];
          f && (a = hr(c) * v + h, n = ur(c) * l + u), Xu(h, u, v, l, c, p, _, Lt, xt), e = hr(p) * v + h, i = ur(p) * l + u;
          break;
        case B.R:
          a = e = t[s++], n = i = t[s++];
          var d = t[s++], g = t[s++];
          is(a, n, a + d, n + g, Lt, xt);
          break;
        case B.Z:
          e = a, i = n;
          break;
      }
      zr(Pt, Pt, Lt), Nr(Ut, Ut, xt);
    }
    return s === 0 && (Pt[0] = Pt[1] = Ut[0] = Ut[1] = 0), new U(Pt[0], Pt[1], Ut[0] - Pt[0], Ut[1] - Pt[1]);
  }, r.prototype._calculateLength = function() {
    var t = this.data, e = this._len, i = this._ux, a = this._uy, n = 0, s = 0, o = 0, f = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var h = this._pathSegLen, u = 0, v = 0, l = 0; l < e; ) {
      var c = t[l++], p = l === 1;
      p && (n = t[l], s = t[l + 1], o = n, f = s);
      var _ = -1;
      switch (c) {
        case B.M:
          n = o = t[l++], s = f = t[l++];
          break;
        case B.L: {
          var d = t[l++], g = t[l++], y = d - n, m = g - s;
          (Nt(y) > i || Nt(m) > a || l === e - 1) && (_ = Math.sqrt(y * y + m * m), n = d, s = g);
          break;
        }
        case B.C: {
          var w = t[l++], S = t[l++], d = t[l++], g = t[l++], b = t[l++], T = t[l++];
          _ = Hh(n, s, w, S, d, g, b, T, 10), n = b, s = T;
          break;
        }
        case B.Q: {
          var w = t[l++], S = t[l++], d = t[l++], g = t[l++];
          _ = Yh(n, s, w, S, d, g, 10), n = d, s = g;
          break;
        }
        case B.A:
          var C = t[l++], M = t[l++], P = t[l++], L = t[l++], R = t[l++], A = t[l++], x = A + R;
          l += 1, p && (o = hr(R) * P + C, f = ur(R) * L + M), _ = la(P, L) * va(qt, Math.abs(A)), n = hr(x) * P + C, s = ur(x) * L + M;
          break;
        case B.R: {
          o = n = t[l++], f = s = t[l++];
          var E = t[l++], D = t[l++];
          _ = E * 2 + D * 2;
          break;
        }
        case B.Z: {
          var y = o - n, m = f - s;
          _ = Math.sqrt(y * y + m * m), n = o, s = f;
          break;
        }
      }
      _ >= 0 && (h[v++] = _, u += _);
    }
    return this._pathLen = u, u;
  }, r.prototype.rebuildPath = function(t, e) {
    var i = this.data, a = this._ux, n = this._uy, s = this._len, o, f, h, u, v, l, c = e < 1, p, _, d = 0, g = 0, y, m = 0, w, S;
    if (!(c && (this._pathSegLen || this._calculateLength(), p = this._pathSegLen, _ = this._pathLen, y = e * _, !y))) t: for (var b = 0; b < s; ) {
      var T = i[b++], C = b === 1;
      switch (C && (h = i[b], u = i[b + 1], o = h, f = u), T !== B.L && m > 0 && (t.lineTo(w, S), m = 0), T) {
        case B.M:
          o = h = i[b++], f = u = i[b++], t.moveTo(h, u);
          break;
        case B.L: {
          v = i[b++], l = i[b++];
          var M = Nt(v - h), P = Nt(l - u);
          if (M > a || P > n) {
            if (c) {
              var L = p[g++];
              if (d + L > y) {
                var R = (y - d) / L;
                t.lineTo(h * (1 - R) + v * R, u * (1 - R) + l * R);
                break t;
              }
              d += L;
            }
            t.lineTo(v, l), h = v, u = l, m = 0;
          } else {
            var A = M * M + P * P;
            A > m && (w = v, S = l, m = A);
          }
          break;
        }
        case B.C: {
          var x = i[b++], E = i[b++], D = i[b++], F = i[b++], H = i[b++], j = i[b++];
          if (c) {
            var L = p[g++];
            if (d + L > y) {
              var R = (y - d) / L;
              Jt(h, x, D, H, R, or), Jt(u, E, F, j, R, fr), t.bezierCurveTo(or[1], fr[1], or[2], fr[2], or[3], fr[3]);
              break t;
            }
            d += L;
          }
          t.bezierCurveTo(x, E, D, F, H, j), h = H, u = j;
          break;
        }
        case B.Q: {
          var x = i[b++], E = i[b++], D = i[b++], F = i[b++];
          if (c) {
            var L = p[g++];
            if (d + L > y) {
              var R = (y - d) / L;
              vi(h, x, D, R, or), vi(u, E, F, R, fr), t.quadraticCurveTo(or[1], fr[1], or[2], fr[2]);
              break t;
            }
            d += L;
          }
          t.quadraticCurveTo(x, E, D, F), h = D, u = F;
          break;
        }
        case B.A:
          var V = i[b++], W = i[b++], Y = i[b++], et = i[b++], tt = i[b++], dt = i[b++], Bt = i[b++], Ht = !i[b++], pt = Y > et ? Y : et, Q = Nt(Y - et) > 1e-3, q = tt + dt, I = false;
          if (c) {
            var L = p[g++];
            d + L > y && (q = tt + dt * (y - d) / L, I = true), d += L;
          }
          if (Q && t.ellipse ? t.ellipse(V, W, Y, et, Bt, tt, q, Ht) : t.arc(V, W, pt, tt, q, Ht), I) break t;
          C && (o = hr(tt) * Y + V, f = ur(tt) * et + W), h = hr(q) * Y + V, u = ur(q) * et + W;
          break;
        case B.R:
          o = h = i[b], f = u = i[b + 1], v = i[b++], l = i[b++];
          var O = i[b++], zt = i[b++];
          if (c) {
            var L = p[g++];
            if (d + L > y) {
              var ot = y - d;
              t.moveTo(v, l), t.lineTo(v + va(ot, O), l), ot -= O, ot > 0 && t.lineTo(v + O, l + va(ot, zt)), ot -= zt, ot > 0 && t.lineTo(v + la(O - ot, 0), l + zt), ot -= O, ot > 0 && t.lineTo(v, l + la(zt - ot, 0));
              break t;
            }
            d += L;
          }
          t.rect(v, l, O, zt);
          break;
        case B.Z:
          if (c) {
            var L = p[g++];
            if (d + L > y) {
              var R = (y - d) / L;
              t.lineTo(h * (1 - R) + o * R, u * (1 - R) + f * R);
              break t;
            }
            d += L;
          }
          t.closePath(), h = o, u = f;
      }
    }
  }, r.prototype.clone = function() {
    var t = new r(), e = this.data;
    return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, t;
  }, r.CMD = B, r.initDefaultProps = function() {
    var t = r.prototype;
    t._saveData = true, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  }(), r;
}();
function Dr(r, t, e, i, a, n, s) {
  if (a === 0) return false;
  var o = a, f = 0, h = r;
  if (s > t + o && s > i + o || s < t - o && s < i - o || n > r + o && n > e + o || n < r - o && n < e - o) return false;
  if (r !== e) f = (t - i) / (r - e), h = (r * i - e * t) / (r - e);
  else return Math.abs(n - r) <= o / 2;
  var u = f * n - s + h, v = u * u / (f * f + 1);
  return v <= o / 2 * o / 2;
}
function Wu(r, t, e, i, a, n, s, o, f, h, u) {
  if (f === 0) return false;
  var v = f;
  if (u > t + v && u > i + v && u > n + v && u > o + v || u < t - v && u < i - v && u < n - v && u < o - v || h > r + v && h > e + v && h > a + v && h > s + v || h < r - v && h < e - v && h < a - v && h < s - v) return false;
  var l = Bh(r, t, e, i, a, n, s, o, h, u, null);
  return l <= v / 2;
}
function qu(r, t, e, i, a, n, s, o, f) {
  if (s === 0) return false;
  var h = s;
  if (f > t + h && f > i + h && f > n + h || f < t - h && f < i - h && f < n - h || o > r + h && o > e + h && o > a + h || o < r - h && o < e - h && o < a - h) return false;
  var u = Nh(r, t, e, i, a, n, o, f, null);
  return u <= h / 2;
}
var ss = Math.PI * 2;
function $e(r) {
  return r %= ss, r < 0 && (r += ss), r;
}
var se = Math.PI * 2;
function $u(r, t, e, i, a, n, s, o, f) {
  if (s === 0) return false;
  var h = s;
  o -= r, f -= t;
  var u = Math.sqrt(o * o + f * f);
  if (u - h > e || u + h < e) return false;
  if (Math.abs(i - a) % se < 1e-4) return true;
  if (n) {
    var v = i;
    i = $e(a), a = $e(v);
  } else i = $e(i), a = $e(a);
  i > a && (a += se);
  var l = Math.atan2(f, o);
  return l < 0 && (l += se), l >= i && l <= a || l + se >= i && l + se <= a;
}
function Gt(r, t, e, i, a, n) {
  if (n > t && n > i || n < t && n < i || i === t) return 0;
  var s = (n - t) / (i - t), o = i < t ? 1 : -1;
  (s === 1 || s === 0) && (o = i < t ? 0.5 : -0.5);
  var f = s * (e - r) + r;
  return f === a ? 1 / 0 : f > a ? o : 0;
}
var Wt = jt.CMD, vr = Math.PI * 2, Vu = 1e-4;
function Zu(r, t) {
  return Math.abs(r - t) < Vu;
}
var st = [-1, -1, -1], yt = [-1, -1];
function Ku() {
  var r = yt[0];
  yt[0] = yt[1], yt[1] = r;
}
function Qu(r, t, e, i, a, n, s, o, f, h) {
  if (h > t && h > i && h > n && h > o || h < t && h < i && h < n && h < o) return 0;
  var u = Ao(t, i, n, o, h, st);
  if (u === 0) return 0;
  for (var v = 0, l = -1, c = void 0, p = void 0, _ = 0; _ < u; _++) {
    var d = st[_], g = d === 0 || d === 1 ? 0.5 : 1, y = rt(r, e, a, s, d);
    y < f || (l < 0 && (l = Do(t, i, n, o, yt), yt[1] < yt[0] && l > 1 && Ku(), c = rt(t, i, n, o, yt[0]), l > 1 && (p = rt(t, i, n, o, yt[1]))), l === 2 ? d < yt[0] ? v += c < t ? g : -g : d < yt[1] ? v += p < c ? g : -g : v += o < p ? g : -g : d < yt[0] ? v += c < t ? g : -g : v += o < c ? g : -g);
  }
  return v;
}
function Ju(r, t, e, i, a, n, s, o) {
  if (o > t && o > i && o > n || o < t && o < i && o < n) return 0;
  var f = zh(t, i, n, o, st);
  if (f === 0) return 0;
  var h = Io(t, i, n);
  if (h >= 0 && h <= 1) {
    for (var u = 0, v = at(t, i, n, h), l = 0; l < f; l++) {
      var c = st[l] === 0 || st[l] === 1 ? 0.5 : 1, p = at(r, e, a, st[l]);
      p < s || (st[l] < h ? u += v < t ? c : -c : u += n < v ? c : -c);
    }
    return u;
  } else {
    var c = st[0] === 0 || st[0] === 1 ? 0.5 : 1, p = at(r, e, a, st[0]);
    return p < s ? 0 : n < t ? c : -c;
  }
}
function ju(r, t, e, i, a, n, s, o) {
  if (o -= t, o > e || o < -e) return 0;
  var f = Math.sqrt(e * e - o * o);
  st[0] = -f, st[1] = f;
  var h = Math.abs(i - a);
  if (h < 1e-4) return 0;
  if (h >= vr - 1e-4) {
    i = 0, a = vr;
    var u = n ? 1 : -1;
    return s >= st[0] + r && s <= st[1] + r ? u : 0;
  }
  if (i > a) {
    var v = i;
    i = a, a = v;
  }
  i < 0 && (i += vr, a += vr);
  for (var l = 0, c = 0; c < 2; c++) {
    var p = st[c];
    if (p + r > s) {
      var _ = Math.atan2(o, p), u = n ? 1 : -1;
      _ < 0 && (_ = vr + _), (_ >= i && _ <= a || _ + vr >= i && _ + vr <= a) && (_ > Math.PI / 2 && _ < Math.PI * 1.5 && (u = -u), l += u);
    }
  }
  return l;
}
function Qo(r, t, e, i, a) {
  for (var n = r.data, s = r.len(), o = 0, f = 0, h = 0, u = 0, v = 0, l, c, p = 0; p < s; ) {
    var _ = n[p++], d = p === 1;
    switch (_ === Wt.M && p > 1 && (e || (o += Gt(f, h, u, v, i, a))), d && (f = n[p], h = n[p + 1], u = f, v = h), _) {
      case Wt.M:
        u = n[p++], v = n[p++], f = u, h = v;
        break;
      case Wt.L:
        if (e) {
          if (Dr(f, h, n[p], n[p + 1], t, i, a)) return true;
        } else o += Gt(f, h, n[p], n[p + 1], i, a) || 0;
        f = n[p++], h = n[p++];
        break;
      case Wt.C:
        if (e) {
          if (Wu(f, h, n[p++], n[p++], n[p++], n[p++], n[p], n[p + 1], t, i, a)) return true;
        } else o += Qu(f, h, n[p++], n[p++], n[p++], n[p++], n[p], n[p + 1], i, a) || 0;
        f = n[p++], h = n[p++];
        break;
      case Wt.Q:
        if (e) {
          if (qu(f, h, n[p++], n[p++], n[p], n[p + 1], t, i, a)) return true;
        } else o += Ju(f, h, n[p++], n[p++], n[p], n[p + 1], i, a) || 0;
        f = n[p++], h = n[p++];
        break;
      case Wt.A:
        var g = n[p++], y = n[p++], m = n[p++], w = n[p++], S = n[p++], b = n[p++];
        p += 1;
        var T = !!(1 - n[p++]);
        l = Math.cos(S) * m + g, c = Math.sin(S) * w + y, d ? (u = l, v = c) : o += Gt(f, h, l, c, i, a);
        var C = (i - g) * w / m + g;
        if (e) {
          if ($u(g, y, w, S, S + b, T, t, C, a)) return true;
        } else o += ju(g, y, w, S, S + b, T, C, a);
        f = Math.cos(S + b) * m + g, h = Math.sin(S + b) * w + y;
        break;
      case Wt.R:
        u = f = n[p++], v = h = n[p++];
        var M = n[p++], P = n[p++];
        if (l = u + M, c = v + P, e) {
          if (Dr(u, v, l, v, t, i, a) || Dr(l, v, l, c, t, i, a) || Dr(l, c, u, c, t, i, a) || Dr(u, c, u, v, t, i, a)) return true;
        } else o += Gt(l, v, l, c, i, a), o += Gt(u, c, u, v, i, a);
        break;
      case Wt.Z:
        if (e) {
          if (Dr(f, h, u, v, t, i, a)) return true;
        } else o += Gt(f, h, u, v, i, a);
        f = u, h = v;
        break;
    }
  }
  return !e && !Zu(h, v) && (o += Gt(f, h, u, v, i, a) || 0), o !== 0;
}
function tv(r, t, e) {
  return Qo(r, 0, false, t, e);
}
function rv(r, t, e, i) {
  return Qo(r, t, true, e, i);
}
var pi = wt({ fill: "#000", stroke: null, strokePercent: 1, fillOpacity: 1, strokeOpacity: 1, lineDashOffset: 0, lineWidth: 1, lineCap: "butt", miterLimit: 10, strokeNoScale: false, strokeFirst: false }, Mr), ev = { style: wt({ fill: true, stroke: true, strokePercent: true, fillOpacity: true, strokeOpacity: true, lineDashOffset: true, lineWidth: true, miterLimit: true }, Fi.style) }, pa = be.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]), K = function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.update = function() {
    var e = this;
    r.prototype.update.call(this);
    var i = this.style;
    if (i.decal) {
      var a = this._decalEl = this._decalEl || new t();
      a.buildPath === t.prototype.buildPath && (a.buildPath = function(f) {
        e.buildPath(f, e.shape);
      }), a.silent = true;
      var n = a.style;
      for (var s in i) n[s] !== i[s] && (n[s] = i[s]);
      n.fill = i.fill ? i.decal : null, n.decal = null, n.shadowColor = null, i.strokeFirst && (n.stroke = null);
      for (var o = 0; o < pa.length; ++o) a[pa[o]] = this[pa[o]];
      a.__dirty |= Ft;
    } else this._decalEl && (this._decalEl = null);
  }, t.prototype.getDecalElement = function() {
    return this._decalEl;
  }, t.prototype._init = function(e) {
    var i = G(e);
    this.shape = this.getDefaultShape();
    var a = this.getDefaultStyle();
    a && this.useStyle(a);
    for (var n = 0; n < i.length; n++) {
      var s = i[n], o = e[s];
      s === "style" ? this.style ? z(this.style, o) : this.useStyle(o) : s === "shape" ? z(this.shape, o) : r.prototype.attrKV.call(this, s, o);
    }
    this.style || this.useStyle({});
  }, t.prototype.getDefaultStyle = function() {
    return null;
  }, t.prototype.getDefaultShape = function() {
    return {};
  }, t.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, t.prototype.getInsideTextFill = function() {
    var e = this.style.fill;
    if (e !== "none") {
      if (kt(e)) {
        var i = li(e, 0);
        return i > 0.5 ? Ya : i > 0.2 ? pu : Ga;
      } else if (e) return Ga;
    }
    return Ya;
  }, t.prototype.getInsideTextStroke = function(e) {
    var i = this.style.fill;
    if (kt(i)) {
      var a = this.__zr, n = !!(a && a.isDarkMode()), s = li(e, 0) < Na;
      if (n === s) return i;
    }
  }, t.prototype.buildPath = function(e, i, a) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= -5;
  }, t.prototype.getUpdatedPathProxy = function(e) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new jt(false);
  }, t.prototype.hasStroke = function() {
    var e = this.style, i = e.stroke;
    return !(i == null || i === "none" || !(e.lineWidth > 0));
  }, t.prototype.hasFill = function() {
    var e = this.style, i = e.fill;
    return i != null && i !== "none";
  }, t.prototype.getBoundingRect = function() {
    var e = this._rect, i = this.style, a = !e;
    if (a) {
      var n = false;
      this.path || (n = true, this.createPathProxy());
      var s = this.path;
      (n || this.__dirty & fe) && (s.beginPath(), this.buildPath(s, this.shape, false), this.pathUpdated()), e = s.getBoundingRect();
    }
    if (this._rect = e, this.hasStroke() && this.path && this.path.len() > 0) {
      var o = this._rectStroke || (this._rectStroke = e.clone());
      if (this.__dirty || a) {
        o.copy(e);
        var f = i.strokeNoScale ? this.getLineScale() : 1, h = i.lineWidth;
        if (!this.hasFill()) {
          var u = this.strokeContainThreshold;
          h = Math.max(h, u ?? 4);
        }
        f > 1e-10 && (o.width += h / f, o.height += h / f, o.x -= h / f / 2, o.y -= h / f / 2);
      }
      return o;
    }
    return e;
  }, t.prototype.contain = function(e, i) {
    var a = this.transformCoordToLocal(e, i), n = this.getBoundingRect(), s = this.style;
    if (e = a[0], i = a[1], n.contain(e, i)) {
      var o = this.path;
      if (this.hasStroke()) {
        var f = s.lineWidth, h = s.strokeNoScale ? this.getLineScale() : 1;
        if (h > 1e-10 && (this.hasFill() || (f = Math.max(f, this.strokeContainThreshold)), rv(o, f / h, e, i))) return true;
      }
      if (this.hasFill()) return tv(o, e, i);
    }
    return false;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= fe, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, t.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, t.prototype.animateShape = function(e) {
    return this.animate("shape", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : e === "shape" ? this.dirtyShape() : this.markRedraw();
  }, t.prototype.attrKV = function(e, i) {
    e === "shape" ? this.setShape(i) : r.prototype.attrKV.call(this, e, i);
  }, t.prototype.setShape = function(e, i) {
    var a = this.shape;
    return a || (a = this.shape = {}), typeof e == "string" ? a[e] = i : z(a, e), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & fe);
  }, t.prototype.createStyle = function(e) {
    return xi(pi, e);
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.shape && !i.shape && (i.shape = z({}, this.shape));
  }, t.prototype._applyStateObj = function(e, i, a, n, s, o) {
    r.prototype._applyStateObj.call(this, e, i, a, n, s, o);
    var f = !(i && n), h;
    if (i && i.shape ? s ? n ? h = i.shape : (h = z({}, a.shape), z(h, i.shape)) : (h = z({}, n ? this.shape : a.shape), z(h, i.shape)) : f && (h = a.shape), h) if (s) {
      this.shape = z({}, this.shape);
      for (var u = {}, v = G(h), l = 0; l < v.length; l++) {
        var c = v[l];
        typeof h[c] == "object" ? this.shape[c] = h[c] : u[c] = h[c];
      }
      this._transitionState(e, { shape: u }, o);
    } else this.shape = h, this.dirtyShape();
  }, t.prototype._mergeStates = function(e) {
    for (var i = r.prototype._mergeStates.call(this, e), a, n = 0; n < e.length; n++) {
      var s = e[n];
      s.shape && (a = a || {}, this._mergeStyle(a, s.shape));
    }
    return a && (i.shape = a), i;
  }, t.prototype.getAnimationStyleProps = function() {
    return ev;
  }, t.prototype.isZeroArea = function() {
    return false;
  }, t.extend = function(e) {
    var i = function(n) {
      N(s, n);
      function s(o) {
        var f = n.call(this, o) || this;
        return e.init && e.init.call(f, o), f;
      }
      return s.prototype.getDefaultStyle = function() {
        return Pr(e.style);
      }, s.prototype.getDefaultShape = function() {
        return Pr(e.shape);
      }, s;
    }(t);
    for (var a in e) typeof e[a] == "function" && (i.prototype[a] = e[a]);
    return i;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = false, e.autoBatch = false, e.__dirty = Ft | ii | fe;
  }(), t;
}(Ae), iv = wt({ strokeFirst: true, font: Qt, x: 0, y: 0, textAlign: "left", textBaseline: "top", miterLimit: 2 }, pi), Zr = function(r) {
  N(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.hasStroke = function() {
    var e = this.style, i = e.stroke;
    return i != null && i !== "none" && e.lineWidth > 0;
  }, t.prototype.hasFill = function() {
    var e = this.style, i = e.fill;
    return i != null && i !== "none";
  }, t.prototype.createStyle = function(e) {
    return xi(iv, e);
  }, t.prototype.setBoundingRect = function(e) {
    this._rect = e;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    if (!this._rect) {
      var i = e.text;
      i != null ? i += "" : i = "";
      var a = _u(i, e.font, e.textAlign, e.textBaseline);
      if (a.x += e.x || 0, a.y += e.y || 0, this.hasStroke()) {
        var n = e.lineWidth;
        a.x -= n / 2, a.y -= n / 2, a.width += n, a.height += n;
      }
      this._rect = a;
    }
    return this._rect;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.dirtyRectTolerance = 10;
  }(), t;
}(Ae);
Zr.prototype.type = "tspan";
var av = wt({ x: 0, y: 0 }, Mr), nv = { style: wt({ x: true, y: true, width: true, height: true, sx: true, sy: true, sWidth: true, sHeight: true }, Fi.style) };
function sv(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var jr = function(r) {
  N(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(e) {
    return xi(av, e);
  }, t.prototype._getSize = function(e) {
    var i = this.style, a = i[e];
    if (a != null) return a;
    var n = sv(i.image) ? i.image : this.__image;
    if (!n) return 0;
    var s = e === "width" ? "height" : "width", o = i[s];
    return o == null ? n[e] : n[e] / n[s] * o;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return nv;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    return this._rect || (this._rect = new U(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
}(Ae);
jr.prototype.type = "image";
function ov(r, t) {
  var e = t.x, i = t.y, a = t.width, n = t.height, s = t.r, o, f, h, u;
  a < 0 && (e = e + a, a = -a), n < 0 && (i = i + n, n = -n), typeof s == "number" ? o = f = h = u = s : s instanceof Array ? s.length === 1 ? o = f = h = u = s[0] : s.length === 2 ? (o = h = s[0], f = u = s[1]) : s.length === 3 ? (o = s[0], f = u = s[1], h = s[2]) : (o = s[0], f = s[1], h = s[2], u = s[3]) : o = f = h = u = 0;
  var v;
  o + f > a && (v = o + f, o *= a / v, f *= a / v), h + u > a && (v = h + u, h *= a / v, u *= a / v), f + h > n && (v = f + h, f *= n / v, h *= n / v), o + u > n && (v = o + u, o *= n / v, u *= n / v), r.moveTo(e + o, i), r.lineTo(e + a - f, i), f !== 0 && r.arc(e + a - f, i + f, f, -Math.PI / 2, 0), r.lineTo(e + a, i + n - h), h !== 0 && r.arc(e + a - h, i + n - h, h, 0, Math.PI / 2), r.lineTo(e + u, i + n), u !== 0 && r.arc(e + u, i + n - u, u, Math.PI / 2, Math.PI), r.lineTo(e, i + o), o !== 0 && r.arc(e + o, i + o, o, Math.PI, Math.PI * 1.5);
}
var Gr = Math.round;
function fv(r, t, e) {
  if (t) {
    var i = t.x1, a = t.x2, n = t.y1, s = t.y2;
    r.x1 = i, r.x2 = a, r.y1 = n, r.y2 = s;
    var o = e && e.lineWidth;
    return o && (Gr(i * 2) === Gr(a * 2) && (r.x1 = r.x2 = Xr(i, o, true)), Gr(n * 2) === Gr(s * 2) && (r.y1 = r.y2 = Xr(n, o, true))), r;
  }
}
function hv(r, t, e) {
  if (t) {
    var i = t.x, a = t.y, n = t.width, s = t.height;
    r.x = i, r.y = a, r.width = n, r.height = s;
    var o = e && e.lineWidth;
    return o && (r.x = Xr(i, o, true), r.y = Xr(a, o, true), r.width = Math.max(Xr(i + n, o, false) - r.x, n === 0 ? 0 : 1), r.height = Math.max(Xr(a + s, o, false) - r.y, s === 0 ? 0 : 1)), r;
  }
}
function Xr(r, t, e) {
  if (!t) return r;
  var i = Gr(r * 2);
  return (i + Gr(t)) % 2 === 0 ? i / 2 : (i + (e ? 1 : -1)) / 2;
}
var uv = /* @__PURE__ */ function() {
  function r() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return r;
}(), vv = {}, Ce = function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new uv();
  }, t.prototype.buildPath = function(e, i) {
    var a, n, s, o;
    if (this.subPixelOptimize) {
      var f = hv(vv, i, this.style);
      a = f.x, n = f.y, s = f.width, o = f.height, f.r = i.r, i = f;
    } else a = i.x, n = i.y, s = i.width, o = i.height;
    i.r ? ov(e, i) : e.rect(a, n, s, o);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
}(K);
Ce.prototype.type = "rect";
var os = { fill: "#000" }, fs = 2, lv = { style: wt({ fill: true, stroke: true, fillOpacity: true, strokeOpacity: true, lineWidth: true, fontSize: true, lineHeight: true, width: true, height: true, textShadowColor: true, textShadowBlur: true, textShadowOffsetX: true, textShadowOffsetY: true, backgroundColor: true, padding: true, borderColor: true, borderWidth: true, borderRadius: true }, Fi.style) }, cv = function(r) {
  N(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i.type = "text", i._children = [], i._defaultStyle = os, i.attr(e), i;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.update = function() {
    r.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var e = 0; e < this._children.length; e++) {
      var i = this._children[e];
      i.zlevel = this.zlevel, i.z = this.z, i.z2 = this.z2, i.culling = this.culling, i.cursor = this.cursor, i.invisible = this.invisible;
    }
  }, t.prototype.updateTransform = function() {
    var e = this.innerTransformable;
    e ? (e.updateTransform(), e.transform && (this.transform = e.transform)) : r.prototype.updateTransform.call(this);
  }, t.prototype.getLocalTransform = function(e) {
    var i = this.innerTransformable;
    return i ? i.getLocalTransform(e) : r.prototype.getLocalTransform.call(this, e);
  }, t.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(true)), r.prototype.getComputedTransform.call(this);
  }, t.prototype._updateSubTexts = function() {
    this._childCursor = 0, gv(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var i = 0; i < this._children.length; i++) this._children[i].__zr = e;
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var i = 0; i < this._children.length; i++) this._children[i].__zr = null;
  }, t.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var e = new U(0, 0, 0, 0), i = this._children, a = [], n = null, s = 0; s < i.length; s++) {
        var o = i[s], f = o.getBoundingRect(), h = o.getLocalTransform(a);
        h ? (e.copy(f), e.applyTransform(h), n = n || e.clone(), n.union(e)) : (n = n || f.clone(), n.union(f));
      }
      this._rect = n || e;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(e) {
    this._defaultStyle = e || os;
  }, t.prototype.setTextContent = function(e) {
  }, t.prototype._mergeStyle = function(e, i) {
    if (!i) return e;
    var a = i.rich, n = e.rich || a && {};
    return z(e, i), a && n ? (this._mergeRich(n, a), e.rich = n) : n && (e.rich = n), e;
  }, t.prototype._mergeRich = function(e, i) {
    for (var a = G(i), n = 0; n < a.length; n++) {
      var s = a[n];
      e[s] = e[s] || {}, z(e[s], i[s]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return lv;
  }, t.prototype._getOrCreateChild = function(e) {
    var i = this._children[this._childCursor];
    return (!i || !(i instanceof e)) && (i = new e()), this._children[this._childCursor++] = i, i.__zr = this.__zr, i.parent = this, i;
  }, t.prototype._updatePlainTexts = function() {
    var e = this.style, i = e.font || Qt, a = e.padding, n = ps(e), s = Iu(n, e), o = ga(e), f = !!e.backgroundColor, h = s.outerHeight, u = s.outerWidth, v = s.contentWidth, l = s.lines, c = s.lineHeight, p = this._defaultStyle;
    this.isTruncated = !!s.isTruncated;
    var _ = e.x || 0, d = e.y || 0, g = e.align || p.align || "left", y = e.verticalAlign || p.verticalAlign || "top", m = _, w = Or(d, s.contentHeight, y);
    if (o || a) {
      var S = ue(_, u, g), b = Or(d, h, y);
      o && this._renderBackground(e, e, S, b, u, h);
    }
    w += c / 2, a && (m = ds(_, g, a), y === "top" ? w += a[0] : y === "bottom" && (w -= a[2]));
    for (var T = 0, C = false, M = cs("fill" in e ? e.fill : (C = true, p.fill)), P = ls("stroke" in e ? e.stroke : !f && (!p.autoStroke || C) ? (T = fs, p.stroke) : null), L = e.textShadowBlur > 0, R = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), A = s.calculatedLineHeight, x = 0; x < l.length; x++) {
      var E = this._getOrCreateChild(Zr), D = E.createStyle();
      E.useStyle(D), D.text = l[x], D.x = m, D.y = w, D.textAlign = g, D.textBaseline = "middle", D.opacity = e.opacity, D.strokeFirst = true, L && (D.shadowBlur = e.textShadowBlur || 0, D.shadowColor = e.textShadowColor || "transparent", D.shadowOffsetX = e.textShadowOffsetX || 0, D.shadowOffsetY = e.textShadowOffsetY || 0), D.stroke = P, D.fill = M, P && (D.lineWidth = e.lineWidth || T, D.lineDash = e.lineDash, D.lineDashOffset = e.lineDashOffset || 0), D.font = i, us(D, e), w += c, R && E.setBoundingRect(new U(ue(D.x, v, D.textAlign), Or(D.y, A, D.textBaseline), v, A));
    }
  }, t.prototype._updateRichTexts = function() {
    var e = this.style, i = ps(e), a = Ou(i, e), n = a.width, s = a.outerWidth, o = a.outerHeight, f = e.padding, h = e.x || 0, u = e.y || 0, v = this._defaultStyle, l = e.align || v.align, c = e.verticalAlign || v.verticalAlign;
    this.isTruncated = !!a.isTruncated;
    var p = ue(h, s, l), _ = Or(u, o, c), d = p, g = _;
    f && (d += f[3], g += f[0]);
    var y = d + n;
    ga(e) && this._renderBackground(e, e, p, _, s, o);
    for (var m = !!e.backgroundColor, w = 0; w < a.lines.length; w++) {
      for (var S = a.lines[w], b = S.tokens, T = b.length, C = S.lineHeight, M = S.width, P = 0, L = d, R = y, A = T - 1, x = void 0; P < T && (x = b[P], !x.align || x.align === "left"); ) this._placeToken(x, e, C, g, L, "left", m), M -= x.width, L += x.width, P++;
      for (; A >= 0 && (x = b[A], x.align === "right"); ) this._placeToken(x, e, C, g, R, "right", m), M -= x.width, R -= x.width, A--;
      for (L += (n - (L - d) - (y - R) - M) / 2; P <= A; ) x = b[P], this._placeToken(x, e, C, g, L + x.width / 2, "center", m), L += x.width, P++;
      g += C;
    }
  }, t.prototype._placeToken = function(e, i, a, n, s, o, f) {
    var h = i.rich[e.styleName] || {};
    h.text = e.text;
    var u = e.verticalAlign, v = n + a / 2;
    u === "top" ? v = n + e.height / 2 : u === "bottom" && (v = n + a - e.height / 2);
    var l = !e.isLineHolder && ga(h);
    l && this._renderBackground(h, i, o === "right" ? s - e.width : o === "center" ? s - e.width / 2 : s, v - e.height / 2, e.width, e.height);
    var c = !!h.backgroundColor, p = e.textPadding;
    p && (s = ds(s, o, p), v -= e.height / 2 - p[0] - e.innerHeight / 2);
    var _ = this._getOrCreateChild(Zr), d = _.createStyle();
    _.useStyle(d);
    var g = this._defaultStyle, y = false, m = 0, w = cs("fill" in h ? h.fill : "fill" in i ? i.fill : (y = true, g.fill)), S = ls("stroke" in h ? h.stroke : "stroke" in i ? i.stroke : !c && !f && (!g.autoStroke || y) ? (m = fs, g.stroke) : null), b = h.textShadowBlur > 0 || i.textShadowBlur > 0;
    d.text = e.text, d.x = s, d.y = v, b && (d.shadowBlur = h.textShadowBlur || i.textShadowBlur || 0, d.shadowColor = h.textShadowColor || i.textShadowColor || "transparent", d.shadowOffsetX = h.textShadowOffsetX || i.textShadowOffsetX || 0, d.shadowOffsetY = h.textShadowOffsetY || i.textShadowOffsetY || 0), d.textAlign = o, d.textBaseline = "middle", d.font = e.font || Qt, d.opacity = ri(h.opacity, i.opacity, 1), us(d, h), S && (d.lineWidth = ri(h.lineWidth, i.lineWidth, m), d.lineDash = $(h.lineDash, i.lineDash), d.lineDashOffset = i.lineDashOffset || 0, d.stroke = S), w && (d.fill = w);
    var T = e.contentWidth, C = e.contentHeight;
    _.setBoundingRect(new U(ue(d.x, T, d.textAlign), Or(d.y, C, d.textBaseline), T, C));
  }, t.prototype._renderBackground = function(e, i, a, n, s, o) {
    var f = e.backgroundColor, h = e.borderWidth, u = e.borderColor, v = f && f.image, l = f && !v, c = e.borderRadius, p = this, _, d;
    if (l || e.lineHeight || h && u) {
      _ = this._getOrCreateChild(Ce), _.useStyle(_.createStyle()), _.style.fill = null;
      var g = _.shape;
      g.x = a, g.y = n, g.width = s, g.height = o, g.r = c, _.dirtyShape();
    }
    if (l) {
      var y = _.style;
      y.fill = f || null, y.fillOpacity = $(e.fillOpacity, 1);
    } else if (v) {
      d = this._getOrCreateChild(jr), d.onload = function() {
        p.dirtyStyle();
      };
      var m = d.style;
      m.image = f.image, m.x = a, m.y = n, m.width = s, m.height = o;
    }
    if (h && u) {
      var y = _.style;
      y.lineWidth = h, y.stroke = u, y.strokeOpacity = $(e.strokeOpacity, 1), y.lineDash = e.borderDash, y.lineDashOffset = e.borderDashOffset || 0, _.strokeContainThreshold = 0, _.hasFill() && _.hasStroke() && (y.strokeFirst = true, y.lineWidth *= 2);
    }
    var w = (_ || d).style;
    w.shadowBlur = e.shadowBlur || 0, w.shadowColor = e.shadowColor || "transparent", w.shadowOffsetX = e.shadowOffsetX || 0, w.shadowOffsetY = e.shadowOffsetY || 0, w.opacity = ri(e.opacity, i.opacity, 1);
  }, t.makeFont = function(e) {
    var i = "";
    return jo(e) && (i = [e.fontStyle, e.fontWeight, Jo(e.fontSize), e.fontFamily || "sans-serif"].join(" ")), i && Hr(i) || e.textFont || e.font;
  }, t;
}(Ae), dv = { left: true, right: 1, center: 1 }, pv = { top: 1, bottom: 1, middle: 1 }, hs = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function Jo(r) {
  return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? nn + "px" : r + "px";
}
function us(r, t) {
  for (var e = 0; e < hs.length; e++) {
    var i = hs[e], a = t[i];
    a != null && (r[i] = a);
  }
}
function jo(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function gv(r) {
  return vs(r), nt(r.rich, vs), r;
}
function vs(r) {
  if (r) {
    r.font = cv.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"), r.align = t == null || dv[t] ? t : "left";
    var e = r.verticalAlign;
    e === "center" && (e = "middle"), r.verticalAlign = e == null || pv[e] ? e : "top";
    var i = r.padding;
    i && (r.padding = Jf(r.padding));
  }
}
function ls(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function cs(r) {
  return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function ds(r, t, e) {
  return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
}
function ps(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function ga(r) {
  return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
}
var Ir = jt.CMD, _v = [[], [], []], gs = Math.sqrt, yv = Math.atan2;
function tf(r, t) {
  if (t) {
    var e = r.data, i = r.len(), a, n, s, o, f, h, u = Ir.M, v = Ir.C, l = Ir.L, c = Ir.R, p = Ir.A, _ = Ir.Q;
    for (s = 0, o = 0; s < i; ) {
      switch (a = e[s++], o = s, n = 0, a) {
        case u:
          n = 1;
          break;
        case l:
          n = 1;
          break;
        case v:
          n = 3;
          break;
        case _:
          n = 2;
          break;
        case p:
          var d = t[4], g = t[5], y = gs(t[0] * t[0] + t[1] * t[1]), m = gs(t[2] * t[2] + t[3] * t[3]), w = yv(-t[1] / m, t[0] / y);
          e[s] *= y, e[s++] += d, e[s] *= m, e[s++] += g, e[s++] *= y, e[s++] *= m, e[s++] += w, e[s++] += w, s += 2, o = s;
          break;
        case c:
          h[0] = e[s++], h[1] = e[s++], pe(h, h, t), e[o++] = h[0], e[o++] = h[1], h[0] += e[s++], h[1] += e[s++], pe(h, h, t), e[o++] = h[0], e[o++] = h[1];
      }
      for (f = 0; f < n; f++) {
        var S = _v[f];
        S[0] = e[s++], S[1] = e[s++], pe(S, S, t), e[o++] = S[0], e[o++] = S[1];
      }
    }
    r.increaseVersion();
  }
}
var _a = Math.sqrt, Ve = Math.sin, Ze = Math.cos, oe = Math.PI;
function _s(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function $a(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (_s(r) * _s(t));
}
function ys(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos($a(r, t));
}
function ms(r, t, e, i, a, n, s, o, f, h, u) {
  var v = f * (oe / 180), l = Ze(v) * (r - e) / 2 + Ve(v) * (t - i) / 2, c = -1 * Ve(v) * (r - e) / 2 + Ze(v) * (t - i) / 2, p = l * l / (s * s) + c * c / (o * o);
  p > 1 && (s *= _a(p), o *= _a(p));
  var _ = (a === n ? -1 : 1) * _a((s * s * (o * o) - s * s * (c * c) - o * o * (l * l)) / (s * s * (c * c) + o * o * (l * l))) || 0, d = _ * s * c / o, g = _ * -o * l / s, y = (r + e) / 2 + Ze(v) * d - Ve(v) * g, m = (t + i) / 2 + Ve(v) * d + Ze(v) * g, w = ys([1, 0], [(l - d) / s, (c - g) / o]), S = [(l - d) / s, (c - g) / o], b = [(-1 * l - d) / s, (-1 * c - g) / o], T = ys(S, b);
  if ($a(S, b) <= -1 && (T = oe), $a(S, b) >= 1 && (T = 0), T < 0) {
    var C = Math.round(T / oe * 1e6) / 1e6;
    T = oe * 2 + C % 2 * oe;
  }
  u.addData(h, y, m, s, o, w, T, v, n);
}
var mv = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, wv = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function Tv(r) {
  var t = new jt();
  if (!r) return t;
  var e = 0, i = 0, a = e, n = i, s, o = jt.CMD, f = r.match(mv);
  if (!f) return t;
  for (var h = 0; h < f.length; h++) {
    for (var u = f[h], v = u.charAt(0), l = void 0, c = u.match(wv) || [], p = c.length, _ = 0; _ < p; _++) c[_] = parseFloat(c[_]);
    for (var d = 0; d < p; ) {
      var g = void 0, y = void 0, m = void 0, w = void 0, S = void 0, b = void 0, T = void 0, C = e, M = i, P = void 0, L = void 0;
      switch (v) {
        case "l":
          e += c[d++], i += c[d++], l = o.L, t.addData(l, e, i);
          break;
        case "L":
          e = c[d++], i = c[d++], l = o.L, t.addData(l, e, i);
          break;
        case "m":
          e += c[d++], i += c[d++], l = o.M, t.addData(l, e, i), a = e, n = i, v = "l";
          break;
        case "M":
          e = c[d++], i = c[d++], l = o.M, t.addData(l, e, i), a = e, n = i, v = "L";
          break;
        case "h":
          e += c[d++], l = o.L, t.addData(l, e, i);
          break;
        case "H":
          e = c[d++], l = o.L, t.addData(l, e, i);
          break;
        case "v":
          i += c[d++], l = o.L, t.addData(l, e, i);
          break;
        case "V":
          i = c[d++], l = o.L, t.addData(l, e, i);
          break;
        case "C":
          l = o.C, t.addData(l, c[d++], c[d++], c[d++], c[d++], c[d++], c[d++]), e = c[d - 2], i = c[d - 1];
          break;
        case "c":
          l = o.C, t.addData(l, c[d++] + e, c[d++] + i, c[d++] + e, c[d++] + i, c[d++] + e, c[d++] + i), e += c[d - 2], i += c[d - 1];
          break;
        case "S":
          g = e, y = i, P = t.len(), L = t.data, s === o.C && (g += e - L[P - 4], y += i - L[P - 3]), l = o.C, C = c[d++], M = c[d++], e = c[d++], i = c[d++], t.addData(l, g, y, C, M, e, i);
          break;
        case "s":
          g = e, y = i, P = t.len(), L = t.data, s === o.C && (g += e - L[P - 4], y += i - L[P - 3]), l = o.C, C = e + c[d++], M = i + c[d++], e += c[d++], i += c[d++], t.addData(l, g, y, C, M, e, i);
          break;
        case "Q":
          C = c[d++], M = c[d++], e = c[d++], i = c[d++], l = o.Q, t.addData(l, C, M, e, i);
          break;
        case "q":
          C = c[d++] + e, M = c[d++] + i, e += c[d++], i += c[d++], l = o.Q, t.addData(l, C, M, e, i);
          break;
        case "T":
          g = e, y = i, P = t.len(), L = t.data, s === o.Q && (g += e - L[P - 4], y += i - L[P - 3]), e = c[d++], i = c[d++], l = o.Q, t.addData(l, g, y, e, i);
          break;
        case "t":
          g = e, y = i, P = t.len(), L = t.data, s === o.Q && (g += e - L[P - 4], y += i - L[P - 3]), e += c[d++], i += c[d++], l = o.Q, t.addData(l, g, y, e, i);
          break;
        case "A":
          m = c[d++], w = c[d++], S = c[d++], b = c[d++], T = c[d++], C = e, M = i, e = c[d++], i = c[d++], l = o.A, ms(C, M, e, i, b, T, m, w, S, l, t);
          break;
        case "a":
          m = c[d++], w = c[d++], S = c[d++], b = c[d++], T = c[d++], C = e, M = i, e += c[d++], i += c[d++], l = o.A, ms(C, M, e, i, b, T, m, w, S, l, t);
          break;
      }
    }
    (v === "z" || v === "Z") && (l = o.Z, t.addData(l), e = a, i = n), s = l;
  }
  return t.toStatic(), t;
}
var rf = function(r) {
  N(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(e) {
  }, t;
}(K);
function ef(r) {
  return r.setData != null;
}
function af(r, t) {
  var e = Tv(r), i = z({}, t);
  return i.buildPath = function(a) {
    if (ef(a)) {
      a.setData(e.data);
      var n = a.getContext();
      n && a.rebuildPath(n, 1);
    } else {
      var n = a;
      e.rebuildPath(n, 1);
    }
  }, i.applyTransform = function(a) {
    tf(e, a), this.dirtyShape();
  }, i;
}
function bv(r, t) {
  return new rf(af(r, t));
}
function zc(r, t) {
  var e = af(r, t), i = function(a) {
    N(n, a);
    function n(s) {
      var o = a.call(this, s) || this;
      return o.applyTransform = e.applyTransform, o.buildPath = e.buildPath, o;
    }
    return n;
  }(rf);
  return i;
}
function Nc(r, t) {
  for (var e = [], i = r.length, a = 0; a < i; a++) {
    var n = r[a];
    e.push(n.getUpdatedPathProxy(true));
  }
  var s = new K(t);
  return s.createPathProxy(), s.buildPath = function(o) {
    if (ef(o)) {
      o.appendPath(e);
      var f = o.getContext();
      f && o.rebuildPath(f, 1);
    }
  }, s;
}
function nf(r, t) {
  t = t || {};
  var e = new K();
  return r.shape && e.setShape(r.shape), e.setStyle(r.style), t.bakeTransform ? tf(e.path, r.getComputedTransform()) : t.toLocal ? e.setLocalTransform(r.getComputedTransform()) : e.copyTransform(r), e.buildPath = r.buildPath, e.applyTransform = e.applyTransform, e.z = r.z, e.z2 = r.z2, e.zlevel = r.zlevel, e;
}
var Sv = /* @__PURE__ */ function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return r;
}(), sf = function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Sv();
  }, t.prototype.buildPath = function(e, i) {
    e.moveTo(i.cx + i.r, i.cy), e.arc(i.cx, i.cy, i.r, 0, Math.PI * 2);
  }, t;
}(K);
sf.prototype.type = "circle";
var Cv = /* @__PURE__ */ function() {
  function r() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return r;
}(), of = function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Cv();
  }, t.prototype.buildPath = function(e, i) {
    var a = 0.5522848, n = i.cx, s = i.cy, o = i.rx, f = i.ry, h = o * a, u = f * a;
    e.moveTo(n - o, s), e.bezierCurveTo(n - o, s - u, n - h, s - f, n, s - f), e.bezierCurveTo(n + h, s - f, n + o, s - u, n + o, s), e.bezierCurveTo(n + o, s + u, n + h, s + f, n, s + f), e.bezierCurveTo(n - h, s + f, n - o, s + u, n - o, s), e.closePath();
  }, t;
}(K);
of.prototype.type = "ellipse";
var ff = Math.PI, ya = ff * 2, lr = Math.sin, Er = Math.cos, Mv = Math.acos, it = Math.atan2, ws = Math.abs, ye = Math.sqrt, ve = Math.max, Rt = Math.min, Tt = 1e-4;
function Pv(r, t, e, i, a, n, s, o) {
  var f = e - r, h = i - t, u = s - a, v = o - n, l = v * f - u * h;
  if (!(l * l < Tt)) return l = (u * (t - n) - v * (r - a)) / l, [r + l * f, t + l * h];
}
function Ke(r, t, e, i, a, n, s) {
  var o = r - e, f = t - i, h = (s ? n : -n) / ye(o * o + f * f), u = h * f, v = -h * o, l = r + u, c = t + v, p = e + u, _ = i + v, d = (l + p) / 2, g = (c + _) / 2, y = p - l, m = _ - c, w = y * y + m * m, S = a - n, b = l * _ - p * c, T = (m < 0 ? -1 : 1) * ye(ve(0, S * S * w - b * b)), C = (b * m - y * T) / w, M = (-b * y - m * T) / w, P = (b * m + y * T) / w, L = (-b * y + m * T) / w, R = C - d, A = M - g, x = P - d, E = L - g;
  return R * R + A * A > x * x + E * E && (C = P, M = L), { cx: C, cy: M, x0: -u, y0: -v, x1: C * (a / S - 1), y1: M * (a / S - 1) };
}
function Lv(r) {
  var t;
  if (Vr(r)) {
    var e = r.length;
    if (!e) return r;
    e === 1 ? t = [r[0], r[0], 0, 0] : e === 2 ? t = [r[0], r[0], r[1], r[1]] : e === 3 ? t = r.concat(r[2]) : t = r;
  } else t = [r, r, r, r];
  return t;
}
function xv(r, t) {
  var e, i = ve(t.r, 0), a = ve(t.r0 || 0, 0), n = i > 0, s = a > 0;
  if (!(!n && !s)) {
    if (n || (i = a, a = 0), a > i) {
      var o = i;
      i = a, a = o;
    }
    var f = t.startAngle, h = t.endAngle;
    if (!(isNaN(f) || isNaN(h))) {
      var u = t.cx, v = t.cy, l = !!t.clockwise, c = ws(h - f), p = c > ya && c % ya;
      if (p > Tt && (c = p), !(i > Tt)) r.moveTo(u, v);
      else if (c > ya - Tt) r.moveTo(u + i * Er(f), v + i * lr(f)), r.arc(u, v, i, f, h, !l), a > Tt && (r.moveTo(u + a * Er(h), v + a * lr(h)), r.arc(u, v, a, h, f, l));
      else {
        var _ = void 0, d = void 0, g = void 0, y = void 0, m = void 0, w = void 0, S = void 0, b = void 0, T = void 0, C = void 0, M = void 0, P = void 0, L = void 0, R = void 0, A = void 0, x = void 0, E = i * Er(f), D = i * lr(f), F = a * Er(h), H = a * lr(h), j = c > Tt;
        if (j) {
          var V = t.cornerRadius;
          V && (e = Lv(V), _ = e[0], d = e[1], g = e[2], y = e[3]);
          var W = ws(i - a) / 2;
          if (m = Rt(W, g), w = Rt(W, y), S = Rt(W, _), b = Rt(W, d), M = T = ve(m, w), P = C = ve(S, b), (T > Tt || C > Tt) && (L = i * Er(h), R = i * lr(h), A = a * Er(f), x = a * lr(f), c < ff)) {
            var Y = Pv(E, D, A, x, L, R, F, H);
            if (Y) {
              var et = E - Y[0], tt = D - Y[1], dt = L - Y[0], Bt = R - Y[1], Ht = 1 / lr(Mv((et * dt + tt * Bt) / (ye(et * et + tt * tt) * ye(dt * dt + Bt * Bt))) / 2), pt = ye(Y[0] * Y[0] + Y[1] * Y[1]);
              M = Rt(T, (i - pt) / (Ht + 1)), P = Rt(C, (a - pt) / (Ht - 1));
            }
          }
        }
        if (!j) r.moveTo(u + E, v + D);
        else if (M > Tt) {
          var Q = Rt(g, M), q = Rt(y, M), I = Ke(A, x, E, D, i, Q, l), O = Ke(L, R, F, H, i, q, l);
          r.moveTo(u + I.cx + I.x0, v + I.cy + I.y0), M < T && Q === q ? r.arc(u + I.cx, v + I.cy, M, it(I.y0, I.x0), it(O.y0, O.x0), !l) : (Q > 0 && r.arc(u + I.cx, v + I.cy, Q, it(I.y0, I.x0), it(I.y1, I.x1), !l), r.arc(u, v, i, it(I.cy + I.y1, I.cx + I.x1), it(O.cy + O.y1, O.cx + O.x1), !l), q > 0 && r.arc(u + O.cx, v + O.cy, q, it(O.y1, O.x1), it(O.y0, O.x0), !l));
        } else r.moveTo(u + E, v + D), r.arc(u, v, i, f, h, !l);
        if (!(a > Tt) || !j) r.lineTo(u + F, v + H);
        else if (P > Tt) {
          var Q = Rt(_, P), q = Rt(d, P), I = Ke(F, H, L, R, a, -q, l), O = Ke(E, D, A, x, a, -Q, l);
          r.lineTo(u + I.cx + I.x0, v + I.cy + I.y0), P < C && Q === q ? r.arc(u + I.cx, v + I.cy, P, it(I.y0, I.x0), it(O.y0, O.x0), !l) : (q > 0 && r.arc(u + I.cx, v + I.cy, q, it(I.y0, I.x0), it(I.y1, I.x1), !l), r.arc(u, v, a, it(I.cy + I.y1, I.cx + I.x1), it(O.cy + O.y1, O.cx + O.x1), l), Q > 0 && r.arc(u + O.cx, v + O.cy, Q, it(O.y1, O.x1), it(O.y0, O.x0), !l));
        } else r.lineTo(u + F, v + H), r.arc(u, v, a, h, f, l);
      }
      r.closePath();
    }
  }
}
var Rv = /* @__PURE__ */ function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = true, this.cornerRadius = 0;
  }
  return r;
}(), Va = function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Rv();
  }, t.prototype.buildPath = function(e, i) {
    xv(e, i);
  }, t.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, t;
}(K);
Va.prototype.type = "sector";
var Av = /* @__PURE__ */ function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return r;
}(), Dv = function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Av();
  }, t.prototype.buildPath = function(e, i) {
    var a = i.cx, n = i.cy, s = Math.PI * 2;
    e.moveTo(a + i.r, n), e.arc(a, n, i.r, 0, s, false), e.moveTo(a + i.r0, n), e.arc(a, n, i.r0, 0, s, true);
  }, t;
}(K);
Dv.prototype.type = "ring";
function Iv(r, t, e, i) {
  var a = [], n = [], s = [], o = [], f, h, u, v;
  if (i) {
    u = [1 / 0, 1 / 0], v = [-1 / 0, -1 / 0];
    for (var l = 0, c = r.length; l < c; l++) zr(u, u, r[l]), Nr(v, v, r[l]);
    zr(u, u, i[0]), Nr(v, v, i[1]);
  }
  for (var l = 0, c = r.length; l < c; l++) {
    var p = r[l];
    if (e) f = r[l ? l - 1 : c - 1], h = r[(l + 1) % c];
    else if (l === 0 || l === c - 1) {
      a.push(eh(r[l]));
      continue;
    } else f = r[l - 1], h = r[l + 1];
    ih(n, h, f), Hi(n, n, t);
    var _ = La(p, f), d = La(p, h), g = _ + d;
    g !== 0 && (_ /= g, d /= g), Hi(s, n, -_), Hi(o, n, d);
    var y = Rn([], p, s), m = Rn([], p, o);
    i && (Nr(y, y, u), zr(y, y, v), Nr(m, m, u), zr(m, m, v)), a.push(y), a.push(m);
  }
  return e && a.push(a.shift()), a;
}
function hf(r, t, e) {
  var i = t.smooth, a = t.points;
  if (a && a.length >= 2) {
    if (i) {
      var n = Iv(a, i, e, t.smoothConstraint);
      r.moveTo(a[0][0], a[0][1]);
      for (var s = a.length, o = 0; o < (e ? s : s - 1); o++) {
        var f = n[o * 2], h = n[o * 2 + 1], u = a[(o + 1) % s];
        r.bezierCurveTo(f[0], f[1], h[0], h[1], u[0], u[1]);
      }
    } else {
      r.moveTo(a[0][0], a[0][1]);
      for (var o = 1, v = a.length; o < v; o++) r.lineTo(a[o][0], a[o][1]);
    }
    e && r.closePath();
  }
}
var Ev = /* @__PURE__ */ function() {
  function r() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
}(), pn = function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Ev();
  }, t.prototype.buildPath = function(e, i) {
    hf(e, i, true);
  }, t;
}(K);
pn.prototype.type = "polygon";
var Fv = /* @__PURE__ */ function() {
  function r() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
}(), uf = function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return { stroke: "#000", fill: null };
  }, t.prototype.getDefaultShape = function() {
    return new Fv();
  }, t.prototype.buildPath = function(e, i) {
    hf(e, i, false);
  }, t;
}(K);
uf.prototype.type = "polyline";
var Ov = {}, kv = /* @__PURE__ */ function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return r;
}(), vf = function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return { stroke: "#000", fill: null };
  }, t.prototype.getDefaultShape = function() {
    return new kv();
  }, t.prototype.buildPath = function(e, i) {
    var a, n, s, o;
    if (this.subPixelOptimize) {
      var f = fv(Ov, i, this.style);
      a = f.x1, n = f.y1, s = f.x2, o = f.y2;
    } else a = i.x1, n = i.y1, s = i.x2, o = i.y2;
    var h = i.percent;
    h !== 0 && (e.moveTo(a, n), h < 1 && (s = a * (1 - h) + s * h, o = n * (1 - h) + o * h), e.lineTo(s, o));
  }, t.prototype.pointAt = function(e) {
    var i = this.shape;
    return [i.x1 * (1 - e) + i.x2 * e, i.y1 * (1 - e) + i.y2 * e];
  }, t;
}(K);
vf.prototype.type = "line";
var ft = [], Bv = /* @__PURE__ */ function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return r;
}();
function Ts(r, t, e) {
  var i = r.cpx2, a = r.cpy2;
  return i != null || a != null ? [(e ? Nn : rt)(r.x1, r.cpx1, r.cpx2, r.x2, t), (e ? Nn : rt)(r.y1, r.cpy1, r.cpy2, r.y2, t)] : [(e ? Yn : at)(r.x1, r.cpx1, r.x2, t), (e ? Yn : at)(r.y1, r.cpy1, r.y2, t)];
}
var Hv = function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return { stroke: "#000", fill: null };
  }, t.prototype.getDefaultShape = function() {
    return new Bv();
  }, t.prototype.buildPath = function(e, i) {
    var a = i.x1, n = i.y1, s = i.x2, o = i.y2, f = i.cpx1, h = i.cpy1, u = i.cpx2, v = i.cpy2, l = i.percent;
    l !== 0 && (e.moveTo(a, n), u == null || v == null ? (l < 1 && (vi(a, f, s, l, ft), f = ft[1], s = ft[2], vi(n, h, o, l, ft), h = ft[1], o = ft[2]), e.quadraticCurveTo(f, h, s, o)) : (l < 1 && (Jt(a, f, u, s, l, ft), f = ft[1], u = ft[2], s = ft[3], Jt(n, h, v, o, l, ft), h = ft[1], v = ft[2], o = ft[3]), e.bezierCurveTo(f, h, u, v, s, o)));
  }, t.prototype.pointAt = function(e) {
    return Ts(this.shape, e, false);
  }, t.prototype.tangentAt = function(e) {
    var i = Ts(this.shape, e, true);
    return sh(i, i);
  }, t;
}(K);
Hv.prototype.type = "bezier-curve";
var zv = /* @__PURE__ */ function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = true;
  }
  return r;
}(), Nv = function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return { stroke: "#000", fill: null };
  }, t.prototype.getDefaultShape = function() {
    return new zv();
  }, t.prototype.buildPath = function(e, i) {
    var a = i.cx, n = i.cy, s = Math.max(i.r, 0), o = i.startAngle, f = i.endAngle, h = i.clockwise, u = Math.cos(o), v = Math.sin(o);
    e.moveTo(u * s + a, v * s + n), e.arc(a, n, s, o, f, !h);
  }, t;
}(K);
Nv.prototype.type = "arc";
var Yv = function(r) {
  N(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.type = "compound", e;
  }
  return t.prototype._updatePathDirty = function() {
    for (var e = this.shape.paths, i = this.shapeChanged(), a = 0; a < e.length; a++) i = i || e[a].shapeChanged();
    i && this.dirtyShape();
  }, t.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var e = this.shape.paths || [], i = this.getGlobalScale(), a = 0; a < e.length; a++) e[a].path || e[a].createPathProxy(), e[a].path.setScale(i[0], i[1], e[a].segmentIgnoreThreshold);
  }, t.prototype.buildPath = function(e, i) {
    for (var a = i.paths || [], n = 0; n < a.length; n++) a[n].buildPath(e, a[n].shape, true);
  }, t.prototype.afterBrush = function() {
    for (var e = this.shape.paths || [], i = 0; i < e.length; i++) e[i].pathUpdated();
  }, t.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), K.prototype.getBoundingRect.call(this);
  }, t;
}(K), lf = function() {
  function r(t) {
    this.colorStops = t || [];
  }
  return r.prototype.addColorStop = function(t, e) {
    this.colorStops.push({ offset: t, color: e });
  }, r;
}(), Gv = function(r) {
  N(t, r);
  function t(e, i, a, n, s, o) {
    var f = r.call(this, s) || this;
    return f.x = e ?? 0, f.y = i ?? 0, f.x2 = a ?? 1, f.y2 = n ?? 0, f.type = "linear", f.global = o || false, f;
  }
  return t;
}(lf), Xv = function(r) {
  N(t, r);
  function t(e, i, a, n, s) {
    var o = r.call(this, n) || this;
    return o.x = e ?? 0.5, o.y = i ?? 0.5, o.r = a ?? 0.5, o.type = "radial", o.global = s || false, o;
  }
  return t;
}(lf), cr = [0, 0], dr = [0, 0], Qe = new k(), Je = new k(), Yc = function() {
  function r(t, e) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var i = 0; i < 4; i++) this._corners[i] = new k();
    for (var i = 0; i < 2; i++) this._axes[i] = new k();
    t && this.fromBoundingRect(t, e);
  }
  return r.prototype.fromBoundingRect = function(t, e) {
    var i = this._corners, a = this._axes, n = t.x, s = t.y, o = n + t.width, f = s + t.height;
    if (i[0].set(n, s), i[1].set(o, s), i[2].set(o, f), i[3].set(n, f), e) for (var h = 0; h < 4; h++) i[h].transform(e);
    k.sub(a[0], i[1], i[0]), k.sub(a[1], i[3], i[0]), a[0].normalize(), a[1].normalize();
    for (var h = 0; h < 2; h++) this._origin[h] = a[h].dot(i[0]);
  }, r.prototype.intersect = function(t, e) {
    var i = true, a = !e;
    return Qe.set(1 / 0, 1 / 0), Je.set(0, 0), !this._intersectCheckOneSide(this, t, Qe, Je, a, 1) && (i = false, a) || !this._intersectCheckOneSide(t, this, Qe, Je, a, -1) && (i = false, a) || a || k.copy(e, i ? Qe : Je), i;
  }, r.prototype._intersectCheckOneSide = function(t, e, i, a, n, s) {
    for (var o = true, f = 0; f < 2; f++) {
      var h = this._axes[f];
      if (this._getProjMinMaxOnAxis(f, t._corners, cr), this._getProjMinMaxOnAxis(f, e._corners, dr), cr[1] < dr[0] || cr[0] > dr[1]) {
        if (o = false, n) return o;
        var u = Math.abs(dr[0] - cr[1]), v = Math.abs(cr[0] - dr[1]);
        Math.min(u, v) > a.len() && (u < v ? k.scale(a, h, -u * s) : k.scale(a, h, v * s));
      } else if (i) {
        var u = Math.abs(dr[0] - cr[1]), v = Math.abs(cr[0] - dr[1]);
        Math.min(u, v) < i.len() && (u < v ? k.scale(i, h, u * s) : k.scale(i, h, -v * s));
      }
    }
    return o;
  }, r.prototype._getProjMinMaxOnAxis = function(t, e, i) {
    for (var a = this._axes[t], n = this._origin, s = e[0].dot(a) + n[t], o = s, f = s, h = 1; h < e.length; h++) {
      var u = e[h].dot(a) + n[t];
      o = Math.min(u, o), f = Math.max(u, f);
    }
    i[0] = o, i[1] = f;
  }, r;
}(), Uv = [], Gc = function(r) {
  N(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.notClear = true, e.incremental = true, e._displayables = [], e._temporaryDisplayables = [], e._cursor = 0, e;
  }
  return t.prototype.traverse = function(e, i) {
    e.call(i, this);
  }, t.prototype.useStyle = function() {
    this.style = {};
  }, t.prototype.getCursor = function() {
    return this._cursor;
  }, t.prototype.innerAfterBrush = function() {
    this._cursor = this._displayables.length;
  }, t.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = false;
  }, t.prototype.clearTemporalDisplayables = function() {
    this._temporaryDisplayables = [];
  }, t.prototype.addDisplayable = function(e, i) {
    i ? this._temporaryDisplayables.push(e) : this._displayables.push(e), this.markRedraw();
  }, t.prototype.addDisplayables = function(e, i) {
    i = i || false;
    for (var a = 0; a < e.length; a++) this.addDisplayable(e[a], i);
  }, t.prototype.getDisplayables = function() {
    return this._displayables;
  }, t.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, t.prototype.eachPendingDisplayable = function(e) {
    for (var i = this._cursor; i < this._displayables.length; i++) e && e(this._displayables[i]);
    for (var i = 0; i < this._temporaryDisplayables.length; i++) e && e(this._temporaryDisplayables[i]);
  }, t.prototype.update = function() {
    this.updateTransform();
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var i = this._displayables[e];
      i.parent = this, i.update(), i.parent = null;
    }
    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var i = this._temporaryDisplayables[e];
      i.parent = this, i.update(), i.parent = null;
    }
  }, t.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var e = new U(1 / 0, 1 / 0, -1 / 0, -1 / 0), i = 0; i < this._displayables.length; i++) {
        var a = this._displayables[i], n = a.getBoundingRect().clone();
        a.needLocalTransform() && n.applyTransform(a.getLocalTransform(Uv)), e.union(n);
      }
      this._rect = e;
    }
    return this._rect;
  }, t.prototype.contain = function(e, i) {
    var a = this.transformCoordToLocal(e, i), n = this.getBoundingRect();
    if (n.contain(a[0], a[1])) for (var s = 0; s < this._displayables.length; s++) {
      var o = this._displayables[s];
      if (o.contain(e, i)) return true;
    }
    return false;
  }, t;
}(Ae), Wv = Math.round(Math.random() * 9), qv = typeof Object.defineProperty == "function", Xc = function() {
  function r() {
    this._id = "__ec_inner_" + Wv++;
  }
  return r.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, r.prototype.set = function(t, e) {
    var i = this._guard(t);
    return qv ? Object.defineProperty(i, this._id, { value: e, enumerable: false, configurable: true }) : i[this._id] = e, this;
  }, r.prototype.delete = function(t) {
    return this.has(t) ? (delete this._guard(t)[this._id], true) : false;
  }, r.prototype.has = function(t) {
    return !!this._guard(t)[this._id];
  }, r.prototype._guard = function(t) {
    if (t !== Object(t)) throw TypeError("Value of WeakMap is not a non-null object.");
    return t;
  }, r;
}();
function wr(r) {
  return isFinite(r);
}
function $v(r, t, e) {
  var i = t.x == null ? 0 : t.x, a = t.x2 == null ? 1 : t.x2, n = t.y == null ? 0 : t.y, s = t.y2 == null ? 0 : t.y2;
  t.global || (i = i * e.width + e.x, a = a * e.width + e.x, n = n * e.height + e.y, s = s * e.height + e.y), i = wr(i) ? i : 0, a = wr(a) ? a : 1, n = wr(n) ? n : 0, s = wr(s) ? s : 0;
  var o = r.createLinearGradient(i, n, a, s);
  return o;
}
function Vv(r, t, e) {
  var i = e.width, a = e.height, n = Math.min(i, a), s = t.x == null ? 0.5 : t.x, o = t.y == null ? 0.5 : t.y, f = t.r == null ? 0.5 : t.r;
  t.global || (s = s * i + e.x, o = o * a + e.y, f = f * n), s = wr(s) ? s : 0.5, o = wr(o) ? o : 0.5, f = f >= 0 && wr(f) ? f : 0.5;
  var h = r.createRadialGradient(s, o, 0, s, o, f);
  return h;
}
function Za(r, t, e) {
  for (var i = t.type === "radial" ? Vv(r, t, e) : $v(r, t, e), a = t.colorStops, n = 0; n < a.length; n++) i.addColorStop(a[n].offset, a[n].color);
  return i;
}
function Zv(r, t) {
  if (r === t || !r && !t) return false;
  if (!r || !t || r.length !== t.length) return true;
  for (var e = 0; e < r.length; e++) if (r[e] !== t[e]) return true;
  return false;
}
function je(r) {
  return parseInt(r, 10);
}
function Ur(r, t, e) {
  var i = ["width", "height"][t], a = ["clientWidth", "clientHeight"][t], n = ["paddingLeft", "paddingTop"][t], s = ["paddingRight", "paddingBottom"][t];
  if (e[i] != null && e[i] !== "auto") return parseFloat(e[i]);
  var o = document.defaultView.getComputedStyle(r);
  return (r[a] || je(o[i]) || je(r.style[i])) - (je(o[n]) || 0) - (je(o[s]) || 0) | 0;
}
function Kv(r, t) {
  return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : ce(r) ? [r] : Vr(r) ? r : null;
}
function gn(r) {
  var t = r.style, e = t.lineDash && t.lineWidth > 0 && Kv(t.lineDash, t.lineWidth), i = t.lineDashOffset;
  if (e) {
    var a = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    a && a !== 1 && (e = Z(e, function(n) {
      return n / a;
    }), i /= a);
  }
  return [e, i];
}
var Qv = new jt(true);
function gi(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function bs(r) {
  return typeof r == "string" && r !== "none";
}
function _i(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function Ss(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
  } else r.fill();
}
function Cs(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
  } else r.stroke();
}
function Ka(r, t, e) {
  var i = dn(t.image, t.__image, e);
  if (Ei(i)) {
    var a = r.createPattern(i, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && a && a.setTransform) {
      var n = new DOMMatrix();
      n.translateSelf(t.x || 0, t.y || 0), n.rotateSelf(0, 0, (t.rotation || 0) * ei), n.scaleSelf(t.scaleX || 1, t.scaleY || 1), a.setTransform(n);
    }
    return a;
  }
}
function Jv(r, t, e, i) {
  var a, n = gi(e), s = _i(e), o = e.strokePercent, f = o < 1, h = !t.path;
  (!t.silent || f) && h && t.createPathProxy();
  var u = t.path || Qv, v = t.__dirty;
  if (!i) {
    var l = e.fill, c = e.stroke, p = s && !!l.colorStops, _ = n && !!c.colorStops, d = s && !!l.image, g = n && !!c.image, y = void 0, m = void 0, w = void 0, S = void 0, b = void 0;
    (p || _) && (b = t.getBoundingRect()), p && (y = v ? Za(r, l, b) : t.__canvasFillGradient, t.__canvasFillGradient = y), _ && (m = v ? Za(r, c, b) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = m), d && (w = v || !t.__canvasFillPattern ? Ka(r, l, t) : t.__canvasFillPattern, t.__canvasFillPattern = w), g && (S = v || !t.__canvasStrokePattern ? Ka(r, c, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = w), p ? r.fillStyle = y : d && (w ? r.fillStyle = w : s = false), _ ? r.strokeStyle = m : g && (S ? r.strokeStyle = S : n = false);
  }
  var T = t.getGlobalScale();
  u.setScale(T[0], T[1], t.segmentIgnoreThreshold);
  var C, M;
  r.setLineDash && e.lineDash && (a = gn(t), C = a[0], M = a[1]);
  var P = true;
  (h || v & fe) && (u.setDPR(r.dpr), f ? u.setContext(null) : (u.setContext(r), P = false), u.reset(), t.buildPath(u, t.shape, i), u.toStatic(), t.pathUpdated()), P && u.rebuildPath(r, f ? o : 1), C && (r.setLineDash(C), r.lineDashOffset = M), i || (e.strokeFirst ? (n && Cs(r, e), s && Ss(r, e)) : (s && Ss(r, e), n && Cs(r, e))), C && r.setLineDash([]);
}
function jv(r, t, e) {
  var i = t.__image = dn(e.image, t.__image, t, t.onload);
  if (!(!i || !Ei(i))) {
    var a = e.x || 0, n = e.y || 0, s = t.getWidth(), o = t.getHeight(), f = i.width / i.height;
    if (s == null && o != null ? s = o * f : o == null && s != null ? o = s / f : s == null && o == null && (s = i.width, o = i.height), e.sWidth && e.sHeight) {
      var h = e.sx || 0, u = e.sy || 0;
      r.drawImage(i, h, u, e.sWidth, e.sHeight, a, n, s, o);
    } else if (e.sx && e.sy) {
      var h = e.sx, u = e.sy, v = s - h, l = o - u;
      r.drawImage(i, h, u, v, l, a, n, s, o);
    } else r.drawImage(i, a, n, s, o);
  }
}
function tl(r, t, e) {
  var i, a = e.text;
  if (a != null && (a += ""), a) {
    r.font = e.font || Qt, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
    var n = void 0, s = void 0;
    r.setLineDash && e.lineDash && (i = gn(t), n = i[0], s = i[1]), n && (r.setLineDash(n), r.lineDashOffset = s), e.strokeFirst ? (gi(e) && r.strokeText(a, e.x, e.y), _i(e) && r.fillText(a, e.x, e.y)) : (_i(e) && r.fillText(a, e.x, e.y), gi(e) && r.strokeText(a, e.x, e.y)), n && r.setLineDash([]);
  }
}
var Ms = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], Ps = [["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]];
function cf(r, t, e, i, a) {
  var n = false;
  if (!i && (e = e || {}, t === e)) return false;
  if (i || t.opacity !== e.opacity) {
    vt(r, a), n = true;
    var s = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(s) ? Mr.opacity : s;
  }
  (i || t.blend !== e.blend) && (n || (vt(r, a), n = true), r.globalCompositeOperation = t.blend || Mr.blend);
  for (var o = 0; o < Ms.length; o++) {
    var f = Ms[o];
    (i || t[f] !== e[f]) && (n || (vt(r, a), n = true), r[f] = r.dpr * (t[f] || 0));
  }
  return (i || t.shadowColor !== e.shadowColor) && (n || (vt(r, a), n = true), r.shadowColor = t.shadowColor || Mr.shadowColor), n;
}
function Ls(r, t, e, i, a) {
  var n = Me(t, a.inHover), s = i ? null : e && Me(e, a.inHover) || {};
  if (n === s) return false;
  var o = cf(r, n, s, i, a);
  if ((i || n.fill !== s.fill) && (o || (vt(r, a), o = true), bs(n.fill) && (r.fillStyle = n.fill)), (i || n.stroke !== s.stroke) && (o || (vt(r, a), o = true), bs(n.stroke) && (r.strokeStyle = n.stroke)), (i || n.opacity !== s.opacity) && (o || (vt(r, a), o = true), r.globalAlpha = n.opacity == null ? 1 : n.opacity), t.hasStroke()) {
    var f = n.lineWidth, h = f / (n.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== h && (o || (vt(r, a), o = true), r.lineWidth = h);
  }
  for (var u = 0; u < Ps.length; u++) {
    var v = Ps[u], l = v[0];
    (i || n[l] !== s[l]) && (o || (vt(r, a), o = true), r[l] = n[l] || v[1]);
  }
  return o;
}
function rl(r, t, e, i, a) {
  return cf(r, Me(t, a.inHover), e && Me(e, a.inHover), i, a);
}
function df(r, t) {
  var e = t.transform, i = r.dpr || 1;
  e ? r.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : r.setTransform(i, 0, 0, i, 0, 0);
}
function el(r, t, e) {
  for (var i = false, a = 0; a < r.length; a++) {
    var n = r[a];
    i = i || n.isZeroArea(), df(t, n), t.beginPath(), n.buildPath(t, n.shape), t.clip();
  }
  e.allClipped = i;
}
function il(r, t) {
  return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
}
var xs = 1, Rs = 2, As = 3, Ds = 4;
function al(r) {
  var t = _i(r), e = gi(r);
  return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
}
function vt(r, t) {
  t.batchFill && r.fill(), t.batchStroke && r.stroke(), t.batchFill = "", t.batchStroke = "";
}
function Me(r, t) {
  return t && r.__hoverStyle || r.style;
}
function nl(r, t) {
  Tr(r, t, { inHover: false, viewWidth: 0, viewHeight: 0 }, true);
}
function Tr(r, t, e, i) {
  var a = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, false, false)) {
    t.__dirty &= -2, t.__isRendered = false;
    return;
  }
  var n = t.__clipPaths, s = e.prevElClipPaths, o = false, f = false;
  if ((!s || Zv(n, s)) && (s && s.length && (vt(r, e), r.restore(), f = o = true, e.prevElClipPaths = null, e.allClipped = false, e.prevEl = null), n && n.length && (vt(r, e), r.save(), el(n, r, e), o = true), e.prevElClipPaths = n), e.allClipped) {
    t.__isRendered = false;
    return;
  }
  t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
  var h = e.prevEl;
  h || (f = o = true);
  var u = t instanceof K && t.autoBatch && al(t.style);
  o || il(a, h.transform) ? (vt(r, e), df(r, t)) : u || vt(r, e);
  var v = Me(t, e.inHover);
  t instanceof K ? (e.lastDrawType !== xs && (f = true, e.lastDrawType = xs), Ls(r, t, h, f, e), (!u || !e.batchFill && !e.batchStroke) && r.beginPath(), Jv(r, t, v, u), u && (e.batchFill = v.fill || "", e.batchStroke = v.stroke || "")) : t instanceof Zr ? (e.lastDrawType !== As && (f = true, e.lastDrawType = As), Ls(r, t, h, f, e), tl(r, t, v)) : t instanceof jr ? (e.lastDrawType !== Rs && (f = true, e.lastDrawType = Rs), rl(r, t, h, f, e), jv(r, t, v)) : t.getTemporalDisplayables && (e.lastDrawType !== Ds && (f = true, e.lastDrawType = Ds), sl(r, t, e)), u && i && vt(r, e), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), e.prevEl = t, t.__dirty = 0, t.__isRendered = true;
}
function sl(r, t, e) {
  var i = t.getDisplayables(), a = t.getTemporalDisplayables();
  r.save();
  var n = { prevElClipPaths: null, prevEl: null, allClipped: false, viewWidth: e.viewWidth, viewHeight: e.viewHeight, inHover: e.inHover }, s, o;
  for (s = t.getCursor(), o = i.length; s < o; s++) {
    var f = i[s];
    f.beforeBrush && f.beforeBrush(), f.innerBeforeBrush(), Tr(r, f, n, s === o - 1), f.innerAfterBrush(), f.afterBrush && f.afterBrush(), n.prevEl = f;
  }
  for (var h = 0, u = a.length; h < u; h++) {
    var f = a[h];
    f.beforeBrush && f.beforeBrush(), f.innerBeforeBrush(), Tr(r, f, n, h === u - 1), f.innerAfterBrush(), f.afterBrush && f.afterBrush(), n.prevEl = f;
  }
  t.clearTemporalDisplayables(), t.notClear = true, r.restore();
}
var ol = 1e-8;
function Is(r, t) {
  return Math.abs(r - t) < ol;
}
function Uc(r, t, e) {
  var i = 0, a = r[0];
  if (!a) return false;
  for (var n = 1; n < r.length; n++) {
    var s = r[n];
    i += Gt(a[0], a[1], s[0], s[1], t, e), a = s;
  }
  var o = r[0];
  return (!Is(a[0], o[0]) || !Is(a[1], o[1])) && (i += Gt(a[0], a[1], o[0], o[1], t, e)), i !== 0;
}
var ma = Math.sin, wa = Math.cos, pf = Math.PI, pr = Math.PI * 2, fl = 180 / pf, gf = function() {
  function r() {
  }
  return r.prototype.reset = function(t) {
    this._start = true, this._d = [], this._str = "", this._p = Math.pow(10, t || 4);
  }, r.prototype.moveTo = function(t, e) {
    this._add("M", t, e);
  }, r.prototype.lineTo = function(t, e) {
    this._add("L", t, e);
  }, r.prototype.bezierCurveTo = function(t, e, i, a, n, s) {
    this._add("C", t, e, i, a, n, s);
  }, r.prototype.quadraticCurveTo = function(t, e, i, a) {
    this._add("Q", t, e, i, a);
  }, r.prototype.arc = function(t, e, i, a, n, s) {
    this.ellipse(t, e, i, i, 0, a, n, s);
  }, r.prototype.ellipse = function(t, e, i, a, n, s, o, f) {
    var h = o - s, u = !f, v = Math.abs(h), l = Zt(v - pr) || (u ? h >= pr : -h >= pr), c = h > 0 ? h % pr : h % pr + pr, p = false;
    l ? p = true : Zt(v) ? p = false : p = c >= pf == !!u;
    var _ = t + i * wa(s), d = e + a * ma(s);
    this._start && this._add("M", _, d);
    var g = Math.round(n * fl);
    if (l) {
      var y = 1 / this._p, m = (u ? 1 : -1) * (pr - y);
      this._add("A", i, a, g, 1, +u, t + i * wa(s + m), e + a * ma(s + m)), y > 0.01 && this._add("A", i, a, g, 0, +u, _, d);
    } else {
      var w = t + i * wa(o), S = e + a * ma(o);
      this._add("A", i, a, g, +p, +u, w, S);
    }
  }, r.prototype.rect = function(t, e, i, a) {
    this._add("M", t, e), this._add("l", i, 0), this._add("l", 0, a), this._add("l", -i, 0), this._add("Z");
  }, r.prototype.closePath = function() {
    this._d.length > 0 && this._add("Z");
  }, r.prototype._add = function(t, e, i, a, n, s, o, f, h) {
    for (var u = [], v = this._p, l = 1; l < arguments.length; l++) {
      var c = arguments[l];
      if (isNaN(c)) {
        this._invalid = true;
        return;
      }
      u.push(Math.round(c * v) / v);
    }
    this._d.push(t + u.join(" ")), this._start = t === "Z";
  }, r.prototype.generateStr = function() {
    this._str = this._invalid ? "" : this._d.join(""), this._d = [];
  }, r.prototype.getStr = function() {
    return this._str;
  }, r;
}(), _n = "none", hl = Math.round;
function ul(r) {
  var t = r.fill;
  return t != null && t !== _n;
}
function vl(r) {
  var t = r.stroke;
  return t != null && t !== _n;
}
var Qa = ["lineCap", "miterLimit", "lineJoin"], ll = Z(Qa, function(r) {
  return "stroke-" + r.toLowerCase();
});
function cl(r, t, e, i) {
  var a = t.opacity == null ? 1 : t.opacity;
  if (e instanceof jr) {
    r("opacity", a);
    return;
  }
  if (ul(t)) {
    var n = Te(t.fill);
    r("fill", n.color);
    var s = t.fillOpacity != null ? t.fillOpacity * n.opacity * a : n.opacity * a;
    s < 1 && r("fill-opacity", s);
  } else r("fill", _n);
  if (vl(t)) {
    var o = Te(t.stroke);
    r("stroke", o.color);
    var f = t.strokeNoScale ? e.getLineScale() : 1, h = f ? (t.lineWidth || 0) / f : 0, u = t.strokeOpacity != null ? t.strokeOpacity * o.opacity * a : o.opacity * a, v = t.strokeFirst;
    if (h !== 1 && r("stroke-width", h), v && r("paint-order", v ? "stroke" : "fill"), u < 1 && r("stroke-opacity", u), t.lineDash) {
      var l = gn(e), c = l[0], p = l[1];
      c && (p = hl(p || 0), r("stroke-dasharray", c.join(",")), (p || i) && r("stroke-dashoffset", p));
    }
    for (var _ = 0; _ < Qa.length; _++) {
      var d = Qa[_];
      if (t[d] !== pi[d]) {
        var g = t[d] || pi[d];
        g && r(ll[_], g);
      }
    }
  }
}
var _f = "http://www.w3.org/2000/svg", yf = "http://www.w3.org/1999/xlink", dl = "http://www.w3.org/2000/xmlns/", pl = "http://www.w3.org/XML/1998/namespace", Es = "ecmeta_";
function mf(r) {
  return document.createElementNS(_f, r);
}
function J(r, t, e, i, a) {
  return { tag: r, attrs: e || {}, children: i, text: a, key: t };
}
function gl(r, t) {
  var e = [];
  if (t) for (var i in t) {
    var a = t[i], n = i;
    a !== false && (a !== true && a != null && (n += '="' + a + '"'), e.push(n));
  }
  return "<" + r + " " + e.join(" ") + ">";
}
function _l(r) {
  return "</" + r + ">";
}
function yn(r, t) {
  t = t || {};
  var e = t.newline ? `
` : "";
  function i(a) {
    var n = a.children, s = a.tag, o = a.attrs, f = a.text;
    return gl(s, o) + (s !== "style" ? gh(f) : f || "") + (n ? "" + e + Z(n, function(h) {
      return i(h);
    }).join(e) + e : "") + _l(s);
  }
  return i(r);
}
function yl(r, t, e) {
  e = e || {};
  var i = e.newline ? `
` : "", a = " {" + i, n = i + "}", s = Z(G(r), function(f) {
    return f + a + Z(G(r[f]), function(h) {
      return h + ":" + r[f][h] + ";";
    }).join(i) + n;
  }).join(i), o = Z(G(t), function(f) {
    return "@keyframes " + f + a + Z(G(t[f]), function(h) {
      return h + a + Z(G(t[f][h]), function(u) {
        var v = t[f][h][u];
        return u === "d" && (v = 'path("' + v + '")'), u + ":" + v + ";";
      }).join(i) + n;
    }).join(i) + n;
  }).join(i);
  return !s && !o ? "" : ["<![CDATA[", s, o, "]]>"].join(i);
}
function Ja(r) {
  return { zrId: r, shadowCache: {}, patternCache: {}, gradientCache: {}, clipPathCache: {}, defs: {}, cssNodes: {}, cssAnims: {}, cssStyleCache: {}, cssAnimIdx: 0, shadowIdx: 0, gradientIdx: 0, patternIdx: 0, clipPathIdx: 0 };
}
function Fs(r, t, e, i) {
  return J("svg", "root", { width: r, height: t, xmlns: _f, "xmlns:xlink": yf, version: "1.1", baseProfile: "full", viewBox: i ? "0 0 " + r + " " + t : false }, e);
}
var ml = 0;
function wf() {
  return ml++;
}
var Os = { cubicIn: "0.32,0,0.67,0", cubicOut: "0.33,1,0.68,1", cubicInOut: "0.65,0,0.35,1", quadraticIn: "0.11,0,0.5,0", quadraticOut: "0.5,1,0.89,1", quadraticInOut: "0.45,0,0.55,1", quarticIn: "0.5,0,0.75,0", quarticOut: "0.25,1,0.5,1", quarticInOut: "0.76,0,0.24,1", quinticIn: "0.64,0,0.78,0", quinticOut: "0.22,1,0.36,1", quinticInOut: "0.83,0,0.17,1", sinusoidalIn: "0.12,0,0.39,0", sinusoidalOut: "0.61,1,0.88,1", sinusoidalInOut: "0.37,0,0.63,1", exponentialIn: "0.7,0,0.84,0", exponentialOut: "0.16,1,0.3,1", exponentialInOut: "0.87,0,0.13,1", circularIn: "0.55,0,1,0.45", circularOut: "0,0.55,0.45,1", circularInOut: "0.85,0,0.15,1" }, _r = "transform-origin";
function wl(r, t, e) {
  var i = z({}, r.shape);
  z(i, t), r.buildPath(e, i);
  var a = new gf();
  return a.reset(zo(r)), e.rebuildPath(a, 1), a.generateStr(), a.getStr();
}
function Tl(r, t) {
  var e = t.originX, i = t.originY;
  (e || i) && (r[_r] = e + "px " + i + "px");
}
var bl = { fill: "fill", opacity: "opacity", lineWidth: "stroke-width", lineDashOffset: "stroke-dashoffset" };
function Tf(r, t) {
  var e = t.zrId + "-ani-" + t.cssAnimIdx++;
  return t.cssAnims[e] = r, e;
}
function Sl(r, t, e) {
  var i = r.shape.paths, a = {}, n, s;
  if (nt(i, function(f) {
    var h = Ja(e.zrId);
    h.animation = true, Oi(f, {}, h, true);
    var u = h.cssAnims, v = h.cssNodes, l = G(u), c = l.length;
    if (c) {
      s = l[c - 1];
      var p = u[s];
      for (var _ in p) {
        var d = p[_];
        a[_] = a[_] || { d: "" }, a[_].d += d.d || "";
      }
      for (var g in v) {
        var y = v[g].animation;
        y.indexOf(s) >= 0 && (n = y);
      }
    }
  }), !!n) {
    t.d = false;
    var o = Tf(a, e);
    return n.replace(s, o);
  }
}
function ks(r) {
  return kt(r) ? Os[r] ? "cubic-bezier(" + Os[r] + ")" : un(r) ? r : "" : "";
}
function Oi(r, t, e, i) {
  var a = r.animators, n = a.length, s = [];
  if (r instanceof Yv) {
    var o = Sl(r, t, e);
    if (o) s.push(o);
    else if (!n) return;
  } else if (!n) return;
  for (var f = {}, h = 0; h < n; h++) {
    var u = a[h], v = [u.getMaxTime() / 1e3 + "s"], l = ks(u.getClip().easing), c = u.getDelay();
    l ? v.push(l) : v.push("linear"), c && v.push(c / 1e3 + "s"), u.getLoop() && v.push("infinite");
    var p = v.join(" ");
    f[p] = f[p] || [p, []], f[p][1].push(u);
  }
  function _(y) {
    var m = y[1], w = m.length, S = {}, b = {}, T = {}, C = "animation-timing-function";
    function M(pt, Q, q) {
      for (var I = pt.getTracks(), O = pt.getMaxTime(), zt = 0; zt < I.length; zt++) {
        var ot = I[zt];
        if (ot.needsAnimate()) {
          var Sn = ot.keyframes, De = ot.propName;
          if (q && (De = q(De)), De) for (var Bi = 0; Bi < Sn.length; Bi++) {
            var Ie = Sn[Bi], Ee = Math.round(Ie.time / O * 100) + "%", Cn = ks(Ie.easing), Mn = Ie.rawValue;
            (kt(Mn) || ce(Mn)) && (Q[Ee] = Q[Ee] || {}, Q[Ee][De] = Ie.rawValue, Cn && (Q[Ee][C] = Cn));
          }
        }
      }
    }
    for (var P = 0; P < w; P++) {
      var L = m[P], R = L.targetName;
      R ? R === "shape" && M(L, b) : !i && M(L, S);
    }
    for (var A in S) {
      var x = {};
      Uo(x, r), z(x, S[A]);
      var E = No(x), D = S[A][C];
      T[A] = E ? { transform: E } : {}, Tl(T[A], x), D && (T[A][C] = D);
    }
    var F, H = true;
    for (var A in b) {
      T[A] = T[A] || {};
      var j = !F, D = b[A][C];
      j && (F = new jt());
      var V = F.len();
      F.reset(), T[A].d = wl(r, b[A], F);
      var W = F.len();
      if (!j && V !== W) {
        H = false;
        break;
      }
      D && (T[A][C] = D);
    }
    if (!H) for (var A in T) delete T[A].d;
    if (!i) for (var P = 0; P < w; P++) {
      var L = m[P], R = L.targetName;
      R === "style" && M(L, T, function(I) {
        return bl[I];
      });
    }
    for (var Y = G(T), et = true, tt, P = 1; P < Y.length; P++) {
      var dt = Y[P - 1], Bt = Y[P];
      if (T[dt][_r] !== T[Bt][_r]) {
        et = false;
        break;
      }
      tt = T[dt][_r];
    }
    if (et && tt) {
      for (var A in T) T[A][_r] && delete T[A][_r];
      t[_r] = tt;
    }
    if (Ma(Y, function(pt) {
      return G(T[pt]).length > 0;
    }).length) {
      var Ht = Tf(T, e);
      return Ht + " " + y[0] + " both";
    }
  }
  for (var d in f) {
    var o = _(f[d]);
    o && s.push(o);
  }
  if (s.length) {
    var g = e.zrId + "-cls-" + wf();
    e.cssNodes["." + g] = { animation: s.join(",") }, t.class = g;
  }
}
function Cl(r, t, e) {
  if (!r.ignore) if (r.isSilent()) {
    var i = { "pointer-events": "none" };
    Bs(i, t, e);
  } else {
    var a = r.states.emphasis && r.states.emphasis.style ? r.states.emphasis.style : {}, n = a.fill;
    if (!n) {
      var s = r.style && r.style.fill, o = r.states.select && r.states.select.style && r.states.select.style.fill, f = r.currentStates.indexOf("select") >= 0 && o || s;
      f && (n = $h(f));
    }
    var h = a.lineWidth;
    if (h) {
      var u = !a.strokeNoScale && r.transform ? r.transform[0] : 1;
      h = h / u;
    }
    var i = { cursor: "pointer" };
    n && (i.fill = n), a.stroke && (i.stroke = a.stroke), h && (i["stroke-width"] = h), Bs(i, t, e);
  }
}
function Bs(r, t, e, i) {
  var a = JSON.stringify(r), n = e.cssStyleCache[a];
  n || (n = e.zrId + "-cls-" + wf(), e.cssStyleCache[a] = n, e.cssNodes["." + n + ":hover"] = r), t.class = t.class ? t.class + " " + n : n;
}
var Pe = Math.round;
function bf(r) {
  return r && kt(r.src);
}
function Sf(r) {
  return r && xe(r.toDataURL);
}
function mn(r, t, e, i) {
  cl(function(a, n) {
    var s = a === "fill" || a === "stroke";
    s && Ho(n) ? Mf(t, r, a, i) : s && vn(n) ? Pf(e, r, a, i) : r[a] = n, s && i.ssr && n === "none" && (r["pointer-events"] = "visible");
  }, t, e, false), Dl(e, r, i);
}
function wn(r, t) {
  var e = xu(t);
  e && (e.each(function(i, a) {
    i != null && (r[(Es + a).toLowerCase()] = i + "");
  }), t.isSilent() && (r[Es + "silent"] = "true"));
}
function Hs(r) {
  return Zt(r[0] - 1) && Zt(r[1]) && Zt(r[2]) && Zt(r[3] - 1);
}
function Ml(r) {
  return Zt(r[4]) && Zt(r[5]);
}
function Tn(r, t, e) {
  if (t && !(Ml(t) && Hs(t))) {
    var i = 1e4;
    r.transform = Hs(t) ? "translate(" + Pe(t[4] * i) / i + " " + Pe(t[5] * i) / i + ")" : Zh(t);
  }
}
function zs(r, t, e) {
  for (var i = r.points, a = [], n = 0; n < i.length; n++) a.push(Pe(i[n][0] * e) / e), a.push(Pe(i[n][1] * e) / e);
  t.points = a.join(" ");
}
function Ns(r) {
  return !r.smooth;
}
function Pl(r) {
  var t = Z(r, function(e) {
    return typeof e == "string" ? [e, e] : e;
  });
  return function(e, i, a) {
    for (var n = 0; n < t.length; n++) {
      var s = t[n], o = e[s[0]];
      o != null && (i[s[1]] = Pe(o * a) / a);
    }
  };
}
var Ll = { circle: [Pl(["cx", "cy", "r"])], polyline: [zs, Ns], polygon: [zs, Ns] };
function xl(r) {
  for (var t = r.animators, e = 0; e < t.length; e++) if (t[e].targetName === "shape") return true;
  return false;
}
function Cf(r, t) {
  var e = r.style, i = r.shape, a = Ll[r.type], n = {}, s = t.animation, o = "path", f = r.style.strokePercent, h = t.compress && zo(r) || 4;
  if (a && !t.willUpdate && !(a[1] && !a[1](i)) && !(s && xl(r)) && !(f < 1)) {
    o = r.type;
    var u = Math.pow(10, h);
    a[0](i, n, u);
  } else {
    var v = !r.path || r.shapeChanged();
    r.path || r.createPathProxy();
    var l = r.path;
    v && (l.beginPath(), r.buildPath(l, r.shape), r.pathUpdated());
    var c = l.getVersion(), p = r, _ = p.__svgPathBuilder;
    (p.__svgPathVersion !== c || !_ || f !== p.__svgPathStrokePercent) && (_ || (_ = p.__svgPathBuilder = new gf()), _.reset(h), l.rebuildPath(_, f), _.generateStr(), p.__svgPathVersion = c, p.__svgPathStrokePercent = f), n.d = _.getStr();
  }
  return Tn(n, r.transform), mn(n, e, r, t), wn(n, r), t.animation && Oi(r, n, t), t.emphasis && Cl(r, n, t), J(o, r.id + "", n);
}
function Rl(r, t) {
  var e = r.style, i = e.image;
  if (i && !kt(i) && (bf(i) ? i = i.src : Sf(i) && (i = i.toDataURL())), !!i) {
    var a = e.x || 0, n = e.y || 0, s = e.width, o = e.height, f = { href: i, width: s, height: o };
    return a && (f.x = a), n && (f.y = n), Tn(f, r.transform), mn(f, e, r, t), wn(f, r), t.animation && Oi(r, f, t), J("image", r.id + "", f);
  }
}
function Al(r, t) {
  var e = r.style, i = e.text;
  if (i != null && (i += ""), !(!i || isNaN(e.x) || isNaN(e.y))) {
    var a = e.font || Qt, n = e.x || 0, s = Qh(e.y || 0, Di(a), e.textBaseline), o = Kh[e.textAlign] || e.textAlign, f = { "dominant-baseline": "central", "text-anchor": o };
    if (jo(e)) {
      var h = "", u = e.fontStyle, v = Jo(e.fontSize);
      if (!parseFloat(v)) return;
      var l = e.fontFamily || ho, c = e.fontWeight;
      h += "font-size:" + v + ";font-family:" + l + ";", u && u !== "normal" && (h += "font-style:" + u + ";"), c && c !== "normal" && (h += "font-weight:" + c + ";"), f.style = h;
    } else f.style = "font: " + a;
    return i.match(/\s/) && (f["xml:space"] = "preserve"), n && (f.x = n), s && (f.y = s), Tn(f, r.transform), mn(f, e, r, t), wn(f, r), t.animation && Oi(r, f, t), J("text", r.id + "", f, void 0, i);
  }
}
function Ys(r, t) {
  if (r instanceof K) return Cf(r, t);
  if (r instanceof jr) return Rl(r, t);
  if (r instanceof Zr) return Al(r, t);
}
function Dl(r, t, e) {
  var i = r.style;
  if (Jh(i)) {
    var a = jh(r), n = e.shadowCache, s = n[a];
    if (!s) {
      var o = r.getGlobalScale(), f = o[0], h = o[1];
      if (!f || !h) return;
      var u = i.shadowOffsetX || 0, v = i.shadowOffsetY || 0, l = i.shadowBlur, c = Te(i.shadowColor), p = c.opacity, _ = c.color, d = l / 2 / f, g = l / 2 / h, y = d + " " + g;
      s = e.zrId + "-s" + e.shadowIdx++, e.defs[s] = J("filter", s, { id: s, x: "-100%", y: "-100%", width: "300%", height: "300%" }, [J("feDropShadow", "", { dx: u / f, dy: v / h, stdDeviation: y, "flood-color": _, "flood-opacity": p })]), n[a] = s;
    }
    t.filter = Ai(s);
  }
}
function Mf(r, t, e, i) {
  var a = r[e], n, s = { gradientUnits: a.global ? "userSpaceOnUse" : "objectBoundingBox" };
  if (ko(a)) n = "linearGradient", s.x1 = a.x, s.y1 = a.y, s.x2 = a.x2, s.y2 = a.y2;
  else if (Bo(a)) n = "radialGradient", s.cx = $(a.x, 0.5), s.cy = $(a.y, 0.5), s.r = $(a.r, 0.5);
  else return;
  for (var o = a.colorStops, f = [], h = 0, u = o.length; h < u; ++h) {
    var v = Fa(o[h].offset) * 100 + "%", l = o[h].color, c = Te(l), p = c.color, _ = c.opacity, d = { offset: v };
    d["stop-color"] = p, _ < 1 && (d["stop-opacity"] = _), f.push(J("stop", h + "", d));
  }
  var g = J(n, "", s, f), y = yn(g), m = i.gradientCache, w = m[y];
  w || (w = i.zrId + "-g" + i.gradientIdx++, m[y] = w, s.id = w, i.defs[w] = J(n, w, s, f)), t[e] = Ai(w);
}
function Pf(r, t, e, i) {
  var a = r.style[e], n = r.getBoundingRect(), s = {}, o = a.repeat, f = o === "no-repeat", h = o === "repeat-x", u = o === "repeat-y", v;
  if (Oo(a)) {
    var l = a.imageWidth, c = a.imageHeight, p = void 0, _ = a.image;
    if (kt(_) ? p = _ : bf(_) ? p = _.src : Sf(_) && (p = _.toDataURL()), typeof Image > "u") {
      var d = "Image width/height must been given explictly in svg-ssr renderer.";
      xn(l, d), xn(c, d);
    } else if (l == null || c == null) {
      var g = function(P, L) {
        if (P) {
          var R = P.elm, A = l || L.width, x = c || L.height;
          P.tag === "pattern" && (h ? (x = 1, A /= n.width) : u && (A = 1, x /= n.height)), P.attrs.width = A, P.attrs.height = x, R && (R.setAttribute("width", A), R.setAttribute("height", x));
        }
      }, y = dn(p, null, r, function(P) {
        f || g(b, P), g(v, P);
      });
      y && y.width && y.height && (l = l || y.width, c = c || y.height);
    }
    v = J("image", "img", { href: p, width: l, height: c }), s.width = l, s.height = c;
  } else a.svgElement && (v = Pr(a.svgElement), s.width = a.svgWidth, s.height = a.svgHeight);
  if (v) {
    var m, w;
    f ? m = w = 1 : h ? (w = 1, m = s.width / n.width) : u ? (m = 1, w = s.height / n.height) : s.patternUnits = "userSpaceOnUse", m != null && !isNaN(m) && (s.width = m), w != null && !isNaN(w) && (s.height = w);
    var S = No(a);
    S && (s.patternTransform = S);
    var b = J("pattern", "", s, [v]), T = yn(b), C = i.patternCache, M = C[T];
    M || (M = i.zrId + "-p" + i.patternIdx++, C[T] = M, s.id = M, b = i.defs[M] = J("pattern", M, s, [v])), t[e] = Ai(M);
  }
}
function Il(r, t, e) {
  var i = e.clipPathCache, a = e.defs, n = i[r.id];
  if (!n) {
    n = e.zrId + "-c" + e.clipPathIdx++;
    var s = { id: n };
    i[r.id] = n, a[n] = J("clipPath", n, s, [Cf(r, e)]);
  }
  t["clip-path"] = Ai(n);
}
function Gs(r) {
  return document.createTextNode(r);
}
function mr(r, t, e) {
  r.insertBefore(t, e);
}
function Xs(r, t) {
  r.removeChild(t);
}
function Us(r, t) {
  r.appendChild(t);
}
function Lf(r) {
  return r.parentNode;
}
function xf(r) {
  return r.nextSibling;
}
function Ta(r, t) {
  r.textContent = t;
}
var Ws = 58, El = 120, Fl = J("", "");
function ja(r) {
  return r === void 0;
}
function Dt(r) {
  return r !== void 0;
}
function Ol(r, t, e) {
  for (var i = {}, a = t; a <= e; ++a) {
    var n = r[a].key;
    n !== void 0 && (i[n] = a);
  }
  return i;
}
function le(r, t) {
  var e = r.key === t.key, i = r.tag === t.tag;
  return i && e;
}
function Le(r) {
  var t, e = r.children, i = r.tag;
  if (Dt(i)) {
    var a = r.elm = mf(i);
    if (bn(Fl, r), Vr(e)) for (t = 0; t < e.length; ++t) {
      var n = e[t];
      n != null && Us(a, Le(n));
    }
    else Dt(r.text) && !Xt(r.text) && Us(a, Gs(r.text));
  } else r.elm = Gs(r.text);
  return r.elm;
}
function Rf(r, t, e, i, a) {
  for (; i <= a; ++i) {
    var n = e[i];
    n != null && mr(r, Le(n), t);
  }
}
function yi(r, t, e, i) {
  for (; e <= i; ++e) {
    var a = t[e];
    if (a != null) if (Dt(a.tag)) {
      var n = Lf(a.elm);
      Xs(n, a.elm);
    } else Xs(r, a.elm);
  }
}
function bn(r, t) {
  var e, i = t.elm, a = r && r.attrs || {}, n = t.attrs || {};
  if (a !== n) {
    for (e in n) {
      var s = n[e], o = a[e];
      o !== s && (s === true ? i.setAttribute(e, "") : s === false ? i.removeAttribute(e) : e === "style" ? i.style.cssText = s : e.charCodeAt(0) !== El ? i.setAttribute(e, s) : e === "xmlns:xlink" || e === "xmlns" ? i.setAttributeNS(dl, e, s) : e.charCodeAt(3) === Ws ? i.setAttributeNS(pl, e, s) : e.charCodeAt(5) === Ws ? i.setAttributeNS(yf, e, s) : i.setAttribute(e, s));
    }
    for (e in a) e in n || i.removeAttribute(e);
  }
}
function kl(r, t, e) {
  for (var i = 0, a = 0, n = t.length - 1, s = t[0], o = t[n], f = e.length - 1, h = e[0], u = e[f], v, l, c, p; i <= n && a <= f; ) s == null ? s = t[++i] : o == null ? o = t[--n] : h == null ? h = e[++a] : u == null ? u = e[--f] : le(s, h) ? (kr(s, h), s = t[++i], h = e[++a]) : le(o, u) ? (kr(o, u), o = t[--n], u = e[--f]) : le(s, u) ? (kr(s, u), mr(r, s.elm, xf(o.elm)), s = t[++i], u = e[--f]) : le(o, h) ? (kr(o, h), mr(r, o.elm, s.elm), o = t[--n], h = e[++a]) : (ja(v) && (v = Ol(t, i, n)), l = v[h.key], ja(l) ? mr(r, Le(h), s.elm) : (c = t[l], c.tag !== h.tag ? mr(r, Le(h), s.elm) : (kr(c, h), t[l] = void 0, mr(r, c.elm, s.elm))), h = e[++a]);
  (i <= n || a <= f) && (i > n ? (p = e[f + 1] == null ? null : e[f + 1].elm, Rf(r, p, e, a, f)) : yi(r, t, i, n));
}
function kr(r, t) {
  var e = t.elm = r.elm, i = r.children, a = t.children;
  r !== t && (bn(r, t), ja(t.text) ? Dt(i) && Dt(a) ? i !== a && kl(e, i, a) : Dt(a) ? (Dt(r.text) && Ta(e, ""), Rf(e, null, a, 0, a.length - 1)) : Dt(i) ? yi(e, i, 0, i.length - 1) : Dt(r.text) && Ta(e, "") : r.text !== t.text && (Dt(i) && yi(e, i, 0, i.length - 1), Ta(e, t.text)));
}
function Bl(r, t) {
  if (le(r, t)) kr(r, t);
  else {
    var e = r.elm, i = Lf(e);
    Le(t), i !== null && (mr(i, t.elm, xf(e)), yi(i, [r], 0, 0));
  }
  return t;
}
var Hl = 0, Wc = function() {
  function r(t, e, i) {
    if (this.type = "svg", this.refreshHover = qs(), this.configLayer = qs(), this.storage = e, this._opts = i = z({}, i), this.root = t, this._id = "zr" + Hl++, this._oldVNode = Fs(i.width, i.height), t && !i.ssr) {
      var a = this._viewport = document.createElement("div");
      a.style.cssText = "position:relative;overflow:hidden";
      var n = this._svgDom = this._oldVNode.elm = mf("svg");
      bn(null, this._oldVNode), a.appendChild(n), t.appendChild(a);
    }
    this.resize(i.width, i.height);
  }
  return r.prototype.getType = function() {
    return this.type;
  }, r.prototype.getViewportRoot = function() {
    return this._viewport;
  }, r.prototype.getViewportRootOffset = function() {
    var t = this.getViewportRoot();
    if (t) return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 };
  }, r.prototype.getSvgDom = function() {
    return this._svgDom;
  }, r.prototype.refresh = function() {
    if (this.root) {
      var t = this.renderToVNode({ willUpdate: true });
      t.attrs.style = "position:absolute;left:0;top:0;user-select:none", Bl(this._oldVNode, t), this._oldVNode = t;
    }
  }, r.prototype.renderOneToVNode = function(t) {
    return Ys(t, Ja(this._id));
  }, r.prototype.renderToVNode = function(t) {
    t = t || {};
    var e = this.storage.getDisplayList(true), i = this._width, a = this._height, n = Ja(this._id);
    n.animation = t.animation, n.willUpdate = t.willUpdate, n.compress = t.compress, n.emphasis = t.emphasis, n.ssr = this._opts.ssr;
    var s = [], o = this._bgVNode = zl(i, a, this._backgroundColor, n);
    o && s.push(o);
    var f = t.compress ? null : this._mainVNode = J("g", "main", {}, []);
    this._paintList(e, n, f ? f.children : s), f && s.push(f);
    var h = Z(G(n.defs), function(l) {
      return n.defs[l];
    });
    if (h.length && s.push(J("defs", "defs", {}, h)), t.animation) {
      var u = yl(n.cssNodes, n.cssAnims, { newline: true });
      if (u) {
        var v = J("style", "stl", {}, [], u);
        s.push(v);
      }
    }
    return Fs(i, a, s, t.useViewBox);
  }, r.prototype.renderToString = function(t) {
    return t = t || {}, yn(this.renderToVNode({ animation: $(t.cssAnimation, true), emphasis: $(t.cssEmphasis, true), willUpdate: false, compress: true, useViewBox: $(t.useViewBox, true) }), { newline: true });
  }, r.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t;
  }, r.prototype.getSvgRoot = function() {
    return this._mainVNode && this._mainVNode.elm;
  }, r.prototype._paintList = function(t, e, i) {
    for (var a = t.length, n = [], s = 0, o, f, h = 0, u = 0; u < a; u++) {
      var v = t[u];
      if (!v.invisible) {
        var l = v.__clipPaths, c = l && l.length || 0, p = f && f.length || 0, _ = void 0;
        for (_ = Math.max(c - 1, p - 1); _ >= 0 && !(l && f && l[_] === f[_]); _--) ;
        for (var d = p - 1; d > _; d--) s--, o = n[s - 1];
        for (var g = _ + 1; g < c; g++) {
          var y = {};
          Il(l[g], y, e);
          var m = J("g", "clip-g-" + h++, y, []);
          (o ? o.children : i).push(m), n[s++] = m, o = m;
        }
        f = l;
        var w = Ys(v, e);
        w && (o ? o.children : i).push(w);
      }
    }
  }, r.prototype.resize = function(t, e) {
    var i = this._opts, a = this.root, n = this._viewport;
    if (t != null && (i.width = t), e != null && (i.height = e), a && n && (n.style.display = "none", t = Ur(a, 0, i), e = Ur(a, 1, i), n.style.display = ""), this._width !== t || this._height !== e) {
      if (this._width = t, this._height = e, n) {
        var s = n.style;
        s.width = t + "px", s.height = e + "px";
      }
      if (vn(this._backgroundColor)) this.refresh();
      else {
        var o = this._svgDom;
        o && (o.setAttribute("width", t), o.setAttribute("height", e));
        var f = this._bgVNode && this._bgVNode.elm;
        f && (f.setAttribute("width", t), f.setAttribute("height", e));
      }
    }
  }, r.prototype.getWidth = function() {
    return this._width;
  }, r.prototype.getHeight = function() {
    return this._height;
  }, r.prototype.dispose = function() {
    this.root && (this.root.innerHTML = ""), this._svgDom = this._viewport = this.storage = this._oldVNode = this._bgVNode = this._mainVNode = null;
  }, r.prototype.clear = function() {
    this._svgDom && (this._svgDom.innerHTML = null), this._oldVNode = null;
  }, r.prototype.toDataURL = function(t) {
    var e = this.renderToString(), i = "data:image/svg+xml;";
    return t ? (e = ru(e), e && i + "base64," + e) : i + "charset=UTF-8," + encodeURIComponent(e);
  }, r;
}();
function qs(r) {
  return function() {
  };
}
function zl(r, t, e, i) {
  var a;
  if (e && e !== "none") if (a = J("rect", "bg", { width: r, height: t, x: "0", y: "0" }), Ho(e)) Mf({ fill: e }, a.attrs, "fill", i);
  else if (vn(e)) Pf({ style: { fill: e }, dirty: br, getBoundingRect: function() {
    return { width: r, height: t };
  } }, a.attrs, "fill", i);
  else {
    var n = Te(e), s = n.color, o = n.opacity;
    a.attrs.fill = s, o < 1 && (a.attrs["fill-opacity"] = o);
  }
  return a;
}
function $s(r, t, e) {
  var i = Ci.createCanvas(), a = t.getWidth(), n = t.getHeight(), s = i.style;
  return s && (s.position = "absolute", s.left = "0", s.top = "0", s.width = a + "px", s.height = n + "px", i.setAttribute("data-zr-dom-id", r)), i.width = a * e, i.height = n * e, i;
}
var ba = function(r) {
  N(t, r);
  function t(e, i, a) {
    var n = r.call(this) || this;
    n.motionBlur = false, n.lastFrameAlpha = 0.7, n.dpr = 1, n.virtual = false, n.config = {}, n.incremental = false, n.zlevel = 0, n.maxRepaintRectCount = 5, n.__dirty = true, n.__firstTimePaint = true, n.__used = false, n.__drawIndex = 0, n.__startIndex = 0, n.__endIndex = 0, n.__prevStartIndex = null, n.__prevEndIndex = null;
    var s;
    a = a || di, typeof e == "string" ? s = $s(e, i, a) : Xt(e) && (s = e, e = s.id), n.id = e, n.dom = s;
    var o = s.style;
    return o && (yo(s), s.onselectstart = function() {
      return false;
    }, o.padding = "0", o.margin = "0", o.borderWidth = "0"), n.painter = i, n.dpr = a, n;
  }
  return t.prototype.getElementCount = function() {
    return this.__endIndex - this.__startIndex;
  }, t.prototype.afterBrush = function() {
    this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
  }, t.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, t.prototype.setUnpainted = function() {
    this.__firstTimePaint = true;
  }, t.prototype.createBackBuffer = function() {
    var e = this.dpr;
    this.domBack = $s("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
  }, t.prototype.createRepaintRects = function(e, i, a, n) {
    if (this.__firstTimePaint) return this.__firstTimePaint = false, null;
    var s = [], o = this.maxRepaintRectCount, f = false, h = new U(0, 0, 0, 0);
    function u(y) {
      if (!(!y.isFinite() || y.isZero())) if (s.length === 0) {
        var m = new U(0, 0, 0, 0);
        m.copy(y), s.push(m);
      } else {
        for (var w = false, S = 1 / 0, b = 0, T = 0; T < s.length; ++T) {
          var C = s[T];
          if (C.intersect(y)) {
            var M = new U(0, 0, 0, 0);
            M.copy(C), M.union(y), s[T] = M, w = true;
            break;
          } else if (f) {
            h.copy(y), h.union(C);
            var P = y.width * y.height, L = C.width * C.height, R = h.width * h.height, A = R - P - L;
            A < S && (S = A, b = T);
          }
        }
        if (f && (s[b].union(y), w = true), !w) {
          var m = new U(0, 0, 0, 0);
          m.copy(y), s.push(m);
        }
        f || (f = s.length >= o);
      }
    }
    for (var v = this.__startIndex; v < this.__endIndex; ++v) {
      var l = e[v];
      if (l) {
        var c = l.shouldBePainted(a, n, true, true), p = l.__isRendered && (l.__dirty & Ft || !c) ? l.getPrevPaintRect() : null;
        p && u(p);
        var _ = c && (l.__dirty & Ft || !l.__isRendered) ? l.getPaintRect() : null;
        _ && u(_);
      }
    }
    for (var v = this.__prevStartIndex; v < this.__prevEndIndex; ++v) {
      var l = i[v], c = l && l.shouldBePainted(a, n, true, true);
      if (l && (!c || !l.__zr) && l.__isRendered) {
        var p = l.getPrevPaintRect();
        p && u(p);
      }
    }
    var d;
    do {
      d = false;
      for (var v = 0; v < s.length; ) {
        if (s[v].isZero()) {
          s.splice(v, 1);
          continue;
        }
        for (var g = v + 1; g < s.length; ) s[v].intersect(s[g]) ? (d = true, s[v].union(s[g]), s.splice(g, 1)) : g++;
        v++;
      }
    } while (d);
    return this._paintRects = s, s;
  }, t.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, t.prototype.resize = function(e, i) {
    var a = this.dpr, n = this.dom, s = n.style, o = this.domBack;
    s && (s.width = e + "px", s.height = i + "px"), n.width = e * a, n.height = i * a, o && (o.width = e * a, o.height = i * a, a !== 1 && this.ctxBack.scale(a, a));
  }, t.prototype.clear = function(e, i, a) {
    var n = this.dom, s = this.ctx, o = n.width, f = n.height;
    i = i || this.clearColor;
    var h = this.motionBlur && !e, u = this.lastFrameAlpha, v = this.dpr, l = this;
    h && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, o / v, f / v));
    var c = this.domBack;
    function p(_, d, g, y) {
      if (s.clearRect(_, d, g, y), i && i !== "transparent") {
        var m = void 0;
        if (Li(i)) {
          var w = i.global || i.__width === g && i.__height === y;
          m = w && i.__canvasGradient || Za(s, i, { x: 0, y: 0, width: g, height: y }), i.__canvasGradient = m, i.__width = g, i.__height = y;
        } else Kf(i) && (i.scaleX = i.scaleX || v, i.scaleY = i.scaleY || v, m = Ka(s, i, { dirty: function() {
          l.setUnpainted(), l.painter.refresh();
        } }));
        s.save(), s.fillStyle = m || i, s.fillRect(_, d, g, y), s.restore();
      }
      h && (s.save(), s.globalAlpha = u, s.drawImage(c, _, d, g, y), s.restore());
    }
    !a || h ? p(0, 0, o, f) : a.length && nt(a, function(_) {
      p(_.x * v, _.y * v, _.width * v, _.height * v);
    });
  }, t;
}(Jr), Vs = 1e5, gr = 314159, ti = 0.01, Nl = 1e-3;
function Yl(r) {
  return r ? r.__builtin__ ? true : !(typeof r.resize != "function" || typeof r.refresh != "function") : false;
}
function Gl(r, t) {
  var e = document.createElement("div");
  return e.style.cssText = ["position:relative", "width:" + r + "px", "height:" + t + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", e;
}
var qc = function() {
  function r(t, e, i, a) {
    this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = false, this.type = "canvas";
    var n = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = i = z({}, i || {}), this.dpr = i.devicePixelRatio || di, this._singleCanvas = n, this.root = t;
    var s = t.style;
    s && (yo(t), t.innerHTML = ""), this.storage = e;
    var o = this._zlevelList;
    this._prevDisplayList = [];
    var f = this._layers;
    if (n) {
      var u = t, v = u.width, l = u.height;
      i.width != null && (v = i.width), i.height != null && (l = i.height), this.dpr = i.devicePixelRatio || 1, u.width = v * this.dpr, u.height = l * this.dpr, this._width = v, this._height = l;
      var c = new ba(u, this, this.dpr);
      c.__builtin__ = true, c.initContext(), f[gr] = c, c.zlevel = gr, o.push(gr), this._domRoot = t;
    } else {
      this._width = Ur(t, 0, i), this._height = Ur(t, 1, i);
      var h = this._domRoot = Gl(this._width, this._height);
      t.appendChild(h);
    }
  }
  return r.prototype.getType = function() {
    return "canvas";
  }, r.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, r.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, r.prototype.getViewportRootOffset = function() {
    var t = this.getViewportRoot();
    if (t) return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 };
  }, r.prototype.refresh = function(t) {
    var e = this.storage.getDisplayList(true), i = this._prevDisplayList, a = this._zlevelList;
    this._redrawId = Math.random(), this._paintList(e, i, t, this._redrawId);
    for (var n = 0; n < a.length; n++) {
      var s = a[n], o = this._layers[s];
      if (!o.__builtin__ && o.refresh) {
        var f = n === 0 ? this._backgroundColor : null;
        o.refresh(f);
      }
    }
    return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this;
  }, r.prototype.refreshHover = function() {
    this._paintHoverList(this.storage.getDisplayList(false));
  }, r.prototype._paintHoverList = function(t) {
    var e = t.length, i = this._hoverlayer;
    if (i && i.clear(), !!e) {
      for (var a = { inHover: true, viewWidth: this._width, viewHeight: this._height }, n, s = 0; s < e; s++) {
        var o = t[s];
        o.__inHover && (i || (i = this._hoverlayer = this.getLayer(Vs)), n || (n = i.ctx, n.save()), Tr(n, o, a, s === e - 1));
      }
      n && n.restore();
    }
  }, r.prototype.getHoverLayer = function() {
    return this.getLayer(Vs);
  }, r.prototype.paintOne = function(t, e) {
    nl(t, e);
  }, r.prototype._paintList = function(t, e, i, a) {
    if (this._redrawId === a) {
      i = i || false, this._updateLayerStatus(t);
      var n = this._doPaintList(t, e, i), s = n.finished, o = n.needsRefreshHover;
      if (this._needsManuallyCompositing && this._compositeManually(), o && this._paintHoverList(t), s) this.eachLayer(function(h) {
        h.afterBrush && h.afterBrush();
      });
      else {
        var f = this;
        ui(function() {
          f._paintList(t, e, i, a);
        });
      }
    }
  }, r.prototype._compositeManually = function() {
    var t = this.getLayer(gr).ctx, e = this._domRoot.width, i = this._domRoot.height;
    t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function(a) {
      a.virtual && t.drawImage(a.dom, 0, 0, e, i);
    });
  }, r.prototype._doPaintList = function(t, e, i) {
    for (var a = this, n = [], s = this._opts.useDirtyRect, o = 0; o < this._zlevelList.length; o++) {
      var f = this._zlevelList[o], h = this._layers[f];
      h.__builtin__ && h !== this._hoverlayer && (h.__dirty || i) && n.push(h);
    }
    for (var u = true, v = false, l = function(_) {
      var d = n[_], g = d.ctx, y = s && d.createRepaintRects(t, e, c._width, c._height), m = i ? d.__startIndex : d.__drawIndex, w = !i && d.incremental && Date.now, S = w && Date.now(), b = d.zlevel === c._zlevelList[0] ? c._backgroundColor : null;
      if (d.__startIndex === d.__endIndex) d.clear(false, b, y);
      else if (m === d.__startIndex) {
        var T = t[m];
        (!T.incremental || !T.notClear || i) && d.clear(false, b, y);
      }
      m === -1 && (console.error("For some unknown reason. drawIndex is -1"), m = d.__startIndex);
      var C, M = function(A) {
        var x = { inHover: false, allClipped: false, prevEl: null, viewWidth: a._width, viewHeight: a._height };
        for (C = m; C < d.__endIndex; C++) {
          var E = t[C];
          if (E.__inHover && (v = true), a._doPaintEl(E, d, s, A, x, C === d.__endIndex - 1), w) {
            var D = Date.now() - S;
            if (D > 15) break;
          }
        }
        x.prevElClipPaths && g.restore();
      };
      if (y) if (y.length === 0) C = d.__endIndex;
      else for (var P = c.dpr, L = 0; L < y.length; ++L) {
        var R = y[L];
        g.save(), g.beginPath(), g.rect(R.x * P, R.y * P, R.width * P, R.height * P), g.clip(), M(R), g.restore();
      }
      else g.save(), M(), g.restore();
      d.__drawIndex = C, d.__drawIndex < d.__endIndex && (u = false);
    }, c = this, p = 0; p < n.length; p++) l(p);
    return X.wxa && nt(this._layers, function(_) {
      _ && _.ctx && _.ctx.draw && _.ctx.draw();
    }), { finished: u, needsRefreshHover: v };
  }, r.prototype._doPaintEl = function(t, e, i, a, n, s) {
    var o = e.ctx;
    if (i) {
      var f = t.getPaintRect();
      (!a || f && f.intersect(a)) && (Tr(o, t, n, s), t.setPrevPaintRect(f));
    } else Tr(o, t, n, s);
  }, r.prototype.getLayer = function(t, e) {
    this._singleCanvas && !this._needsManuallyCompositing && (t = gr);
    var i = this._layers[t];
    return i || (i = new ba("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = true, this._layerConfig[t] ? Br(i, this._layerConfig[t], true) : this._layerConfig[t - ti] && Br(i, this._layerConfig[t - ti], true), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i;
  }, r.prototype.insertLayer = function(t, e) {
    var i = this._layers, a = this._zlevelList, n = a.length, s = this._domRoot, o = null, f = -1;
    if (!i[t] && Yl(e)) {
      if (n > 0 && t > a[0]) {
        for (f = 0; f < n - 1 && !(a[f] < t && a[f + 1] > t); f++) ;
        o = i[a[f]];
      }
      if (a.splice(f + 1, 0, t), i[t] = e, !e.virtual) if (o) {
        var h = o.dom;
        h.nextSibling ? s.insertBefore(e.dom, h.nextSibling) : s.appendChild(e.dom);
      } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
      e.painter || (e.painter = this);
    }
  }, r.prototype.eachLayer = function(t, e) {
    for (var i = this._zlevelList, a = 0; a < i.length; a++) {
      var n = i[a];
      t.call(e, this._layers[n], n);
    }
  }, r.prototype.eachBuiltinLayer = function(t, e) {
    for (var i = this._zlevelList, a = 0; a < i.length; a++) {
      var n = i[a], s = this._layers[n];
      s.__builtin__ && t.call(e, s, n);
    }
  }, r.prototype.eachOtherLayer = function(t, e) {
    for (var i = this._zlevelList, a = 0; a < i.length; a++) {
      var n = i[a], s = this._layers[n];
      s.__builtin__ || t.call(e, s, n);
    }
  }, r.prototype.getLayers = function() {
    return this._layers;
  }, r.prototype._updateLayerStatus = function(t) {
    this.eachBuiltinLayer(function(v, l) {
      v.__dirty = v.__used = false;
    });
    function e(v) {
      n && (n.__endIndex !== v && (n.__dirty = true), n.__endIndex = v);
    }
    if (this._singleCanvas) for (var i = 1; i < t.length; i++) {
      var a = t[i];
      if (a.zlevel !== t[i - 1].zlevel || a.incremental) {
        this._needsManuallyCompositing = true;
        break;
      }
    }
    var n = null, s = 0, o, f;
    for (f = 0; f < t.length; f++) {
      var a = t[f], h = a.zlevel, u = void 0;
      o !== h && (o = h, s = 0), a.incremental ? (u = this.getLayer(h + Nl, this._needsManuallyCompositing), u.incremental = true, s = 1) : u = this.getLayer(h + (s > 0 ? ti : 0), this._needsManuallyCompositing), u.__builtin__ || fn("ZLevel " + h + " has been used by unkown layer " + u.id), u !== n && (u.__used = true, u.__startIndex !== f && (u.__dirty = true), u.__startIndex = f, u.incremental ? u.__drawIndex = -1 : u.__drawIndex = f, e(f), n = u), a.__dirty & Ft && !a.__inHover && (u.__dirty = true, u.incremental && u.__drawIndex < 0 && (u.__drawIndex = f));
    }
    e(f), this.eachBuiltinLayer(function(v, l) {
      !v.__used && v.getElementCount() > 0 && (v.__dirty = true, v.__startIndex = v.__endIndex = v.__drawIndex = 0), v.__dirty && v.__drawIndex < 0 && (v.__drawIndex = v.__startIndex);
    });
  }, r.prototype.clear = function() {
    return this.eachBuiltinLayer(this._clearLayer), this;
  }, r.prototype._clearLayer = function(t) {
    t.clear();
  }, r.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t, nt(this._layers, function(e) {
      e.setUnpainted();
    });
  }, r.prototype.configLayer = function(t, e) {
    if (e) {
      var i = this._layerConfig;
      i[t] ? Br(i[t], e, true) : i[t] = e;
      for (var a = 0; a < this._zlevelList.length; a++) {
        var n = this._zlevelList[a];
        if (n === t || n === t + ti) {
          var s = this._layers[n];
          Br(s, i[t], true);
        }
      }
    }
  }, r.prototype.delLayer = function(t) {
    var e = this._layers, i = this._zlevelList, a = e[t];
    a && (a.dom.parentNode.removeChild(a.dom), delete e[t], i.splice(It(i, t), 1));
  }, r.prototype.resize = function(t, e) {
    if (this._domRoot.style) {
      var i = this._domRoot;
      i.style.display = "none";
      var a = this._opts, n = this.root;
      if (t != null && (a.width = t), e != null && (a.height = e), t = Ur(n, 0, a), e = Ur(n, 1, a), i.style.display = "", this._width !== t || e !== this._height) {
        i.style.width = t + "px", i.style.height = e + "px";
        for (var s in this._layers) this._layers.hasOwnProperty(s) && this._layers[s].resize(t, e);
        this.refresh(true);
      }
      this._width = t, this._height = e;
    } else {
      if (t == null || e == null) return;
      this._width = t, this._height = e, this.getLayer(gr).resize(t, e);
    }
    return this;
  }, r.prototype.clearLayer = function(t) {
    var e = this._layers[t];
    e && e.clear();
  }, r.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
  }, r.prototype.getRenderedCanvas = function(t) {
    if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[gr].dom;
    var e = new ba("image", this, t.pixelRatio || this.dpr);
    e.initContext(), e.clear(false, t.backgroundColor || this._backgroundColor);
    var i = e.ctx;
    if (t.pixelRatio <= this.dpr) {
      this.refresh();
      var a = e.dom.width, n = e.dom.height;
      this.eachLayer(function(v) {
        v.__builtin__ ? i.drawImage(v.dom, 0, 0, a, n) : v.renderToCanvas && (i.save(), v.renderToCanvas(i), i.restore());
      });
    } else for (var s = { inHover: false, viewWidth: this._width, viewHeight: this._height }, o = this.storage.getDisplayList(true), f = 0, h = o.length; f < h; f++) {
      var u = o[f];
      Tr(i, u, s, f === h - 1);
    }
    return e.dom;
  }, r.prototype.getWidth = function() {
    return this._width;
  }, r.prototype.getHeight = function() {
    return this._height;
  }, r;
}();
function Xl(r) {
  if (kt(r)) {
    var t = new DOMParser();
    r = t.parseFromString(r, "text/xml");
  }
  var e = r;
  for (e.nodeType === 9 && (e = e.firstChild); e.nodeName.toLowerCase() !== "svg" || e.nodeType !== 1; ) e = e.nextSibling;
  return e;
}
var Sa, mi = { fill: "fill", stroke: "stroke", "stroke-width": "lineWidth", opacity: "opacity", "fill-opacity": "fillOpacity", "stroke-opacity": "strokeOpacity", "stroke-dasharray": "lineDash", "stroke-dashoffset": "lineDashOffset", "stroke-linecap": "lineCap", "stroke-linejoin": "lineJoin", "stroke-miterlimit": "miterLimit", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "text-anchor": "textAlign", visibility: "visibility", display: "display" }, Zs = G(mi), wi = { "alignment-baseline": "textBaseline", "stop-color": "stopColor" }, Ks = G(wi), Ul = function() {
  function r() {
    this._defs = {}, this._root = null;
  }
  return r.prototype.parse = function(t, e) {
    e = e || {};
    var i = Xl(t);
    this._defsUsePending = [];
    var a = new yr();
    this._root = a;
    var n = [], s = i.getAttribute("viewBox") || "", o = parseFloat(i.getAttribute("width") || e.width), f = parseFloat(i.getAttribute("height") || e.height);
    isNaN(o) && (o = null), isNaN(f) && (f = null), lt(i, a, null, true, false);
    for (var h = i.firstChild; h; ) this._parseNode(h, a, n, null, false, false), h = h.nextSibling;
    $l(this._defs, this._defsUsePending), this._defsUsePending = [];
    var u, v;
    if (s) {
      var l = ki(s);
      l.length >= 4 && (u = { x: parseFloat(l[0] || 0), y: parseFloat(l[1] || 0), width: parseFloat(l[2]), height: parseFloat(l[3]) });
    }
    if (u && o != null && f != null && (v = Jl(u, { x: 0, y: 0, width: o, height: f }), !e.ignoreViewBox)) {
      var c = a;
      a = new yr(), a.add(c), c.scaleX = c.scaleY = v.scale, c.x = v.x, c.y = v.y;
    }
    return !e.ignoreRootClip && o != null && f != null && a.setClipPath(new Ce({ shape: { x: 0, y: 0, width: o, height: f } })), { root: a, width: o, height: f, viewBoxRect: u, viewBoxTransform: v, named: n };
  }, r.prototype._parseNode = function(t, e, i, a, n, s) {
    var o = t.nodeName.toLowerCase(), f, h = a;
    if (o === "defs" && (n = true), o === "text" && (s = true), o === "defs" || o === "switch") f = e;
    else {
      if (!n) {
        var u = Sa[o];
        if (u && hi(Sa, o)) {
          f = u.call(this, t, e);
          var v = t.getAttribute("name");
          if (v) {
            var l = { name: v, namedFrom: null, svgNodeTagLower: o, el: f };
            i.push(l), o === "g" && (h = l);
          } else a && i.push({ name: a.name, namedFrom: a, svgNodeTagLower: o, el: f });
          e.add(f);
        }
      }
      var c = Qs[o];
      if (c && hi(Qs, o)) {
        var p = c.call(this, t), _ = t.getAttribute("id");
        _ && (this._defs[_] = p);
      }
    }
    if (f && f.isGroup) for (var d = t.firstChild; d; ) d.nodeType === 1 ? this._parseNode(d, f, i, h, n, s) : d.nodeType === 3 && s && this._parseText(d, f), d = d.nextSibling;
  }, r.prototype._parseText = function(t, e) {
    var i = new Zr({ style: { text: t.textContent }, silent: true, x: this._textX || 0, y: this._textY || 0 });
    gt(e, i), lt(t, i, this._defsUsePending, false, false), Wl(i, e);
    var a = i.style, n = a.fontSize;
    n && n < 9 && (a.fontSize = 9, i.scaleX *= n / 9, i.scaleY *= n / 9);
    var s = (a.fontSize || a.fontFamily) && [a.fontStyle, a.fontWeight, (a.fontSize || 12) + "px", a.fontFamily || "sans-serif"].join(" ");
    a.font = s;
    var o = i.getBoundingRect();
    return this._textX += o.width, e.add(i), i;
  }, r.internalField = function() {
    Sa = { g: function(t, e) {
      var i = new yr();
      return gt(e, i), lt(t, i, this._defsUsePending, false, false), i;
    }, rect: function(t, e) {
      var i = new Ce();
      return gt(e, i), lt(t, i, this._defsUsePending, false, false), i.setShape({ x: parseFloat(t.getAttribute("x") || "0"), y: parseFloat(t.getAttribute("y") || "0"), width: parseFloat(t.getAttribute("width") || "0"), height: parseFloat(t.getAttribute("height") || "0") }), i.silent = true, i;
    }, circle: function(t, e) {
      var i = new sf();
      return gt(e, i), lt(t, i, this._defsUsePending, false, false), i.setShape({ cx: parseFloat(t.getAttribute("cx") || "0"), cy: parseFloat(t.getAttribute("cy") || "0"), r: parseFloat(t.getAttribute("r") || "0") }), i.silent = true, i;
    }, line: function(t, e) {
      var i = new vf();
      return gt(e, i), lt(t, i, this._defsUsePending, false, false), i.setShape({ x1: parseFloat(t.getAttribute("x1") || "0"), y1: parseFloat(t.getAttribute("y1") || "0"), x2: parseFloat(t.getAttribute("x2") || "0"), y2: parseFloat(t.getAttribute("y2") || "0") }), i.silent = true, i;
    }, ellipse: function(t, e) {
      var i = new of();
      return gt(e, i), lt(t, i, this._defsUsePending, false, false), i.setShape({ cx: parseFloat(t.getAttribute("cx") || "0"), cy: parseFloat(t.getAttribute("cy") || "0"), rx: parseFloat(t.getAttribute("rx") || "0"), ry: parseFloat(t.getAttribute("ry") || "0") }), i.silent = true, i;
    }, polygon: function(t, e) {
      var i = t.getAttribute("points"), a;
      i && (a = to(i));
      var n = new pn({ shape: { points: a || [] }, silent: true });
      return gt(e, n), lt(t, n, this._defsUsePending, false, false), n;
    }, polyline: function(t, e) {
      var i = t.getAttribute("points"), a;
      i && (a = to(i));
      var n = new uf({ shape: { points: a || [] }, silent: true });
      return gt(e, n), lt(t, n, this._defsUsePending, false, false), n;
    }, image: function(t, e) {
      var i = new jr();
      return gt(e, i), lt(t, i, this._defsUsePending, false, false), i.setStyle({ image: t.getAttribute("xlink:href") || t.getAttribute("href"), x: +t.getAttribute("x"), y: +t.getAttribute("y"), width: +t.getAttribute("width"), height: +t.getAttribute("height") }), i.silent = true, i;
    }, text: function(t, e) {
      var i = t.getAttribute("x") || "0", a = t.getAttribute("y") || "0", n = t.getAttribute("dx") || "0", s = t.getAttribute("dy") || "0";
      this._textX = parseFloat(i) + parseFloat(n), this._textY = parseFloat(a) + parseFloat(s);
      var o = new yr();
      return gt(e, o), lt(t, o, this._defsUsePending, false, true), o;
    }, tspan: function(t, e) {
      var i = t.getAttribute("x"), a = t.getAttribute("y");
      i != null && (this._textX = parseFloat(i)), a != null && (this._textY = parseFloat(a));
      var n = t.getAttribute("dx") || "0", s = t.getAttribute("dy") || "0", o = new yr();
      return gt(e, o), lt(t, o, this._defsUsePending, false, true), this._textX += parseFloat(n), this._textY += parseFloat(s), o;
    }, path: function(t, e) {
      var i = t.getAttribute("d") || "", a = bv(i);
      return gt(e, a), lt(t, a, this._defsUsePending, false, false), a.silent = true, a;
    } };
  }(), r;
}(), Qs = { lineargradient: function(r) {
  var t = parseInt(r.getAttribute("x1") || "0", 10), e = parseInt(r.getAttribute("y1") || "0", 10), i = parseInt(r.getAttribute("x2") || "10", 10), a = parseInt(r.getAttribute("y2") || "0", 10), n = new Gv(t, e, i, a);
  return Js(r, n), js(r, n), n;
}, radialgradient: function(r) {
  var t = parseInt(r.getAttribute("cx") || "0", 10), e = parseInt(r.getAttribute("cy") || "0", 10), i = parseInt(r.getAttribute("r") || "0", 10), a = new Xv(t, e, i);
  return Js(r, a), js(r, a), a;
} };
function Js(r, t) {
  var e = r.getAttribute("gradientUnits");
  e === "userSpaceOnUse" && (t.global = true);
}
function js(r, t) {
  for (var e = r.firstChild; e; ) {
    if (e.nodeType === 1 && e.nodeName.toLocaleLowerCase() === "stop") {
      var i = e.getAttribute("offset"), a = void 0;
      i && i.indexOf("%") > 0 ? a = parseInt(i, 10) / 100 : i ? a = parseFloat(i) : a = 0;
      var n = {};
      Af(e, n, n);
      var s = n.stopColor || e.getAttribute("stop-color") || "#000000";
      t.colorStops.push({ offset: a, color: s });
    }
    e = e.nextSibling;
  }
}
function gt(r, t) {
  r && r.__inheritedStyle && (t.__inheritedStyle || (t.__inheritedStyle = {}), wt(t.__inheritedStyle, r.__inheritedStyle));
}
function to(r) {
  for (var t = ki(r), e = [], i = 0; i < t.length; i += 2) {
    var a = parseFloat(t[i]), n = parseFloat(t[i + 1]);
    e.push([a, n]);
  }
  return e;
}
function lt(r, t, e, i, a) {
  var n = t, s = n.__inheritedStyle = n.__inheritedStyle || {}, o = {};
  r.nodeType === 1 && (Kl(r, t), Af(r, s, o), i || Ql(r, s, o)), n.style = n.style || {}, s.fill != null && (n.style.fill = ro(n, "fill", s.fill, e)), s.stroke != null && (n.style.stroke = ro(n, "stroke", s.stroke, e)), nt(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function(f) {
    s[f] != null && (n.style[f] = parseFloat(s[f]));
  }), nt(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign"], function(f) {
    s[f] != null && (n.style[f] = s[f]);
  }), a && (n.__selfStyle = o), s.lineDash && (n.style.lineDash = Z(ki(s.lineDash), function(f) {
    return parseFloat(f);
  })), (s.visibility === "hidden" || s.visibility === "collapse") && (n.invisible = true), s.display === "none" && (n.ignore = true);
}
function Wl(r, t) {
  var e = t.__selfStyle;
  if (e) {
    var i = e.textBaseline, a = i;
    !i || i === "auto" || i === "baseline" ? a = "alphabetic" : i === "before-edge" || i === "text-before-edge" ? a = "top" : i === "after-edge" || i === "text-after-edge" ? a = "bottom" : (i === "central" || i === "mathematical") && (a = "middle"), r.style.textBaseline = a;
  }
  var n = t.__inheritedStyle;
  if (n) {
    var s = n.textAlign, o = s;
    s && (s === "middle" && (o = "center"), r.style.textAlign = o);
  }
}
var ql = /^url\(\s*#(.*?)\)/;
function ro(r, t, e, i) {
  var a = e && e.match(ql);
  if (a) {
    var n = Hr(a[1]);
    i.push([r, t, n]);
    return;
  }
  return e === "none" && (e = null), e;
}
function $l(r, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    i[0].style[i[1]] = r[i[2]];
  }
}
var Vl = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function ki(r) {
  return r.match(Vl) || [];
}
var Zl = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.eE,]*)\)/g, Ca = Math.PI / 180;
function Kl(r, t) {
  var e = r.getAttribute("transform");
  if (e) {
    e = e.replace(/,/g, " ");
    var i = [], a = null;
    e.replace(Zl, function(v, l, c) {
      return i.push(l, c), "";
    });
    for (var n = i.length - 1; n > 0; n -= 2) {
      var s = i[n], o = i[n - 1], f = ki(s);
      switch (a = a || Sr(), o) {
        case "translate":
          Da(a, a, [parseFloat(f[0]), parseFloat(f[1] || "0")]);
          break;
        case "scale":
          bo(a, a, [parseFloat(f[0]), parseFloat(f[1] || f[0])]);
          break;
        case "rotate":
          To(a, a, -parseFloat(f[0]) * Ca, [parseFloat(f[1] || "0"), parseFloat(f[2] || "0")]);
          break;
        case "skewX":
          var h = Math.tan(parseFloat(f[0]) * Ca);
          ge(a, [1, 0, h, 1, 0, 0], a);
          break;
        case "skewY":
          var u = Math.tan(parseFloat(f[0]) * Ca);
          ge(a, [1, u, 0, 1, 0, 0], a);
          break;
        case "matrix":
          a[0] = parseFloat(f[0]), a[1] = parseFloat(f[1]), a[2] = parseFloat(f[2]), a[3] = parseFloat(f[3]), a[4] = parseFloat(f[4]), a[5] = parseFloat(f[5]);
          break;
      }
    }
    t.setLocalTransform(a);
  }
}
var eo = /([^\s:;]+)\s*:\s*([^:;]+)/g;
function Af(r, t, e) {
  var i = r.getAttribute("style");
  if (i) {
    eo.lastIndex = 0;
    for (var a; (a = eo.exec(i)) != null; ) {
      var n = a[1], s = hi(mi, n) ? mi[n] : null;
      s && (t[s] = a[2]);
      var o = hi(wi, n) ? wi[n] : null;
      o && (e[o] = a[2]);
    }
  }
}
function Ql(r, t, e) {
  for (var i = 0; i < Zs.length; i++) {
    var a = Zs[i], n = r.getAttribute(a);
    n != null && (t[mi[a]] = n);
  }
  for (var i = 0; i < Ks.length; i++) {
    var a = Ks[i], n = r.getAttribute(a);
    n != null && (e[wi[a]] = n);
  }
}
function Jl(r, t) {
  var e = t.width / r.width, i = t.height / r.height, a = Math.min(e, i);
  return { scale: a, x: -(r.x + r.width / 2) * a + (t.x + t.width / 2), y: -(r.y + r.height / 2) * a + (t.y + t.height / 2) };
}
function $c(r, t) {
  var e = new Ul();
  return e.parse(r, t);
}
var At = jt.CMD;
function Wr(r, t) {
  return Math.abs(r - t) < 1e-5;
}
function tn(r) {
  var t = r.data, e = r.len(), i = [], a, n = 0, s = 0, o = 0, f = 0;
  function h(A, x) {
    a && a.length > 2 && i.push(a), a = [A, x];
  }
  function u(A, x, E, D) {
    Wr(A, E) && Wr(x, D) || a.push(A, x, E, D, E, D);
  }
  function v(A, x, E, D, F, H) {
    var j = Math.abs(x - A), V = Math.tan(j / 4) * 4 / 3, W = x < A ? -1 : 1, Y = Math.cos(A), et = Math.sin(A), tt = Math.cos(x), dt = Math.sin(x), Bt = Y * F + E, Ht = et * H + D, pt = tt * F + E, Q = dt * H + D, q = F * V * W, I = H * V * W;
    a.push(Bt - q * et, Ht + I * Y, pt + q * dt, Q - I * tt, pt, Q);
  }
  for (var l, c, p, _, d = 0; d < e; ) {
    var g = t[d++], y = d === 1;
    switch (y && (n = t[d], s = t[d + 1], o = n, f = s, (g === At.L || g === At.C || g === At.Q) && (a = [o, f])), g) {
      case At.M:
        n = o = t[d++], s = f = t[d++], h(o, f);
        break;
      case At.L:
        l = t[d++], c = t[d++], u(n, s, l, c), n = l, s = c;
        break;
      case At.C:
        a.push(t[d++], t[d++], t[d++], t[d++], n = t[d++], s = t[d++]);
        break;
      case At.Q:
        l = t[d++], c = t[d++], p = t[d++], _ = t[d++], a.push(n + 2 / 3 * (l - n), s + 2 / 3 * (c - s), p + 2 / 3 * (l - p), _ + 2 / 3 * (c - _), p, _), n = p, s = _;
        break;
      case At.A:
        var m = t[d++], w = t[d++], S = t[d++], b = t[d++], T = t[d++], C = t[d++] + T;
        d += 1;
        var M = !t[d++];
        l = Math.cos(T) * S + m, c = Math.sin(T) * b + w, y ? (o = l, f = c, h(o, f)) : u(n, s, l, c), n = Math.cos(C) * S + m, s = Math.sin(C) * b + w;
        for (var P = (M ? -1 : 1) * Math.PI / 2, L = T; M ? L > C : L < C; L += P) {
          var R = M ? Math.max(L + P, C) : Math.min(L + P, C);
          v(L, R, m, w, S, b);
        }
        break;
      case At.R:
        o = n = t[d++], f = s = t[d++], l = o + t[d++], c = f + t[d++], h(l, f), u(l, f, l, c), u(l, c, o, c), u(o, c, o, f), u(o, f, l, f);
        break;
      case At.Z:
        a && u(n, s, o, f), n = o, s = f;
        break;
    }
  }
  return a && a.length > 2 && i.push(a), i;
}
function rn(r, t, e, i, a, n, s, o, f, h) {
  if (Wr(r, e) && Wr(t, i) && Wr(a, s) && Wr(n, o)) {
    f.push(s, o);
    return;
  }
  var u = 2 / h, v = u * u, l = s - r, c = o - t, p = Math.sqrt(l * l + c * c);
  l /= p, c /= p;
  var _ = e - r, d = i - t, g = a - s, y = n - o, m = _ * _ + d * d, w = g * g + y * y;
  if (m < v && w < v) {
    f.push(s, o);
    return;
  }
  var S = l * _ + c * d, b = -l * g - c * y, T = m - S * S, C = w - b * b;
  if (T < v && S >= 0 && C < v && b >= 0) {
    f.push(s, o);
    return;
  }
  var M = [], P = [];
  Jt(r, e, a, s, 0.5, M), Jt(t, i, n, o, 0.5, P), rn(M[0], P[0], M[1], P[1], M[2], P[2], M[3], P[3], f, h), rn(M[4], P[4], M[5], P[5], M[6], P[6], M[7], P[7], f, h);
}
function jl(r, t) {
  var e = tn(r), i = [];
  t = t || 1;
  for (var a = 0; a < e.length; a++) {
    var n = e[a], s = [], o = n[0], f = n[1];
    s.push(o, f);
    for (var h = 2; h < n.length; ) {
      var u = n[h++], v = n[h++], l = n[h++], c = n[h++], p = n[h++], _ = n[h++];
      rn(o, f, u, v, l, c, p, _, s, t), o = p, f = _;
    }
    i.push(s);
  }
  return i;
}
function Df(r, t, e) {
  var i = r[t], a = r[1 - t], n = Math.abs(i / a), s = Math.ceil(Math.sqrt(n * e)), o = Math.floor(e / s);
  o === 0 && (o = 1, s = e);
  for (var f = [], h = 0; h < s; h++) f.push(o);
  var u = s * o, v = e - u;
  if (v > 0) for (var h = 0; h < v; h++) f[h % s] += 1;
  return f;
}
function io(r, t, e) {
  for (var i = r.r0, a = r.r, n = r.startAngle, s = r.endAngle, o = Math.abs(s - n), f = o * a, h = a - i, u = f > Math.abs(h), v = Df([f, h], u ? 0 : 1, t), l = (u ? o : h) / v.length, c = 0; c < v.length; c++) for (var p = (u ? h : o) / v[c], _ = 0; _ < v[c]; _++) {
    var d = {};
    u ? (d.startAngle = n + l * c, d.endAngle = n + l * (c + 1), d.r0 = i + p * _, d.r = i + p * (_ + 1)) : (d.startAngle = n + p * _, d.endAngle = n + p * (_ + 1), d.r0 = i + l * c, d.r = i + l * (c + 1)), d.clockwise = r.clockwise, d.cx = r.cx, d.cy = r.cy, e.push(d);
  }
}
function tc(r, t, e) {
  for (var i = r.width, a = r.height, n = i > a, s = Df([i, a], n ? 0 : 1, t), o = n ? "width" : "height", f = n ? "height" : "width", h = n ? "x" : "y", u = n ? "y" : "x", v = r[o] / s.length, l = 0; l < s.length; l++) for (var c = r[f] / s[l], p = 0; p < s[l]; p++) {
    var _ = {};
    _[h] = l * v, _[u] = p * c, _[o] = v, _[f] = c, _.x += r.x, _.y += r.y, e.push(_);
  }
}
function ao(r, t, e, i) {
  return r * i - e * t;
}
function rc(r, t, e, i, a, n, s, o) {
  var f = e - r, h = i - t, u = s - a, v = o - n, l = ao(u, v, f, h);
  if (Math.abs(l) < 1e-6) return null;
  var c = r - a, p = t - n, _ = ao(c, p, u, v) / l;
  return _ < 0 || _ > 1 ? null : new k(_ * f + r, _ * h + t);
}
function ec(r, t, e) {
  var i = new k();
  k.sub(i, e, t), i.normalize();
  var a = new k();
  k.sub(a, r, t);
  var n = a.dot(i);
  return n;
}
function Fr(r, t) {
  var e = r[r.length - 1];
  e && e[0] === t[0] && e[1] === t[1] || r.push(t);
}
function ic(r, t, e) {
  for (var i = r.length, a = [], n = 0; n < i; n++) {
    var s = r[n], o = r[(n + 1) % i], f = rc(s[0], s[1], o[0], o[1], t.x, t.y, e.x, e.y);
    f && a.push({ projPt: ec(f, t, e), pt: f, idx: n });
  }
  if (a.length < 2) return [{ points: r }, { points: r }];
  a.sort(function(d, g) {
    return d.projPt - g.projPt;
  });
  var h = a[0], u = a[a.length - 1];
  if (u.idx < h.idx) {
    var v = h;
    h = u, u = v;
  }
  for (var l = [h.pt.x, h.pt.y], c = [u.pt.x, u.pt.y], p = [l], _ = [c], n = h.idx + 1; n <= u.idx; n++) Fr(p, r[n].slice());
  Fr(p, c), Fr(p, l);
  for (var n = u.idx + 1; n <= h.idx + i; n++) Fr(_, r[n % i].slice());
  return Fr(_, l), Fr(_, c), [{ points: p }, { points: _ }];
}
function no(r) {
  var t = r.points, e = [], i = [];
  Ko(t, e, i);
  var a = new U(e[0], e[1], i[0] - e[0], i[1] - e[1]), n = a.width, s = a.height, o = a.x, f = a.y, h = new k(), u = new k();
  return n > s ? (h.x = u.x = o + n / 2, h.y = f, u.y = f + s) : (h.y = u.y = f + s / 2, h.x = o, u.x = o + n), ic(t, h, u);
}
function Ti(r, t, e, i) {
  if (e === 1) i.push(t);
  else {
    var a = Math.floor(e / 2), n = r(t);
    Ti(r, n[0], a, i), Ti(r, n[1], e - a, i);
  }
  return i;
}
function ac(r, t) {
  for (var e = [], i = 0; i < t; i++) e.push(nf(r));
  return e;
}
function nc(r, t) {
  t.setStyle(r.style), t.z = r.z, t.z2 = r.z2, t.zlevel = r.zlevel;
}
function sc(r) {
  for (var t = [], e = 0; e < r.length; ) t.push([r[e++], r[e++]]);
  return t;
}
function oc(r, t) {
  var e = [], i = r.shape, a;
  switch (r.type) {
    case "rect":
      tc(i, t, e), a = Ce;
      break;
    case "sector":
      io(i, t, e), a = Va;
      break;
    case "circle":
      io({ r0: 0, r: i.r, startAngle: 0, endAngle: Math.PI * 2, cx: i.cx, cy: i.cy }, t, e), a = Va;
      break;
    default:
      var n = r.getComputedTransform(), s = n ? Math.sqrt(Math.max(n[0] * n[0] + n[1] * n[1], n[2] * n[2] + n[3] * n[3])) : 1, o = Z(jl(r.getUpdatedPathProxy(), s), function(g) {
        return sc(g);
      }), f = o.length;
      if (f === 0) Ti(no, { points: o[0] }, t, e);
      else if (f === t) for (var h = 0; h < f; h++) e.push({ points: o[h] });
      else {
        var u = 0, v = Z(o, function(g) {
          var y = [], m = [];
          Ko(g, y, m);
          var w = (m[1] - y[1]) * (m[0] - y[0]);
          return u += w, { poly: g, area: w };
        });
        v.sort(function(g, y) {
          return y.area - g.area;
        });
        for (var l = t, h = 0; h < f; h++) {
          var c = v[h];
          if (l <= 0) break;
          var p = h === f - 1 ? l : Math.ceil(c.area / u * t);
          p < 0 || (Ti(no, { points: c.poly }, p, e), l -= p);
        }
      }
      a = pn;
      break;
  }
  if (!a) return ac(r, t);
  for (var _ = [], h = 0; h < e.length; h++) {
    var d = new a();
    d.setShape(e[h]), nc(r, d), _.push(d);
  }
  return _;
}
function fc(r, t) {
  var e = r.length, i = t.length;
  if (e === i) return [r, t];
  for (var a = [], n = [], s = e < i ? r : t, o = Math.min(e, i), f = Math.abs(i - e) / 6, h = (o - 2) / 6, u = Math.ceil(f / h) + 1, v = [s[0], s[1]], l = f, c = 2; c < o; ) {
    var p = s[c - 2], _ = s[c - 1], d = s[c++], g = s[c++], y = s[c++], m = s[c++], w = s[c++], S = s[c++];
    if (l <= 0) {
      v.push(d, g, y, m, w, S);
      continue;
    }
    for (var b = Math.min(l, u - 1) + 1, T = 1; T <= b; T++) {
      var C = T / b;
      Jt(p, d, y, w, C, a), Jt(_, g, m, S, C, n), p = a[3], _ = n[3], v.push(a[1], n[1], a[2], n[2], p, _), d = a[5], g = n[5], y = a[6], m = n[6];
    }
    l -= b - 1;
  }
  return s === r ? [v, t] : [r, v];
}
function so(r, t) {
  for (var e = r.length, i = r[e - 2], a = r[e - 1], n = [], s = 0; s < t.length; ) n[s++] = i, n[s++] = a;
  return n;
}
function hc(r, t) {
  for (var e, i, a, n = [], s = [], o = 0; o < Math.max(r.length, t.length); o++) {
    var f = r[o], h = t[o], u = void 0, v = void 0;
    f ? h ? (e = fc(f, h), u = e[0], v = e[1], i = u, a = v) : (v = so(a || f, f), u = f) : (u = so(i || h, h), v = h), n.push(u), s.push(v);
  }
  return [n, s];
}
function oo(r) {
  for (var t = 0, e = 0, i = 0, a = r.length, n = 0, s = a - 2; n < a; s = n, n += 2) {
    var o = r[s], f = r[s + 1], h = r[n], u = r[n + 1], v = o * u - h * f;
    t += v, e += (o + h) * v, i += (f + u) * v;
  }
  return t === 0 ? [r[0] || 0, r[1] || 0] : [e / t / 3, i / t / 3, t];
}
function uc(r, t, e, i) {
  for (var a = (r.length - 2) / 6, n = 1 / 0, s = 0, o = r.length, f = o - 2, h = 0; h < a; h++) {
    for (var u = h * 6, v = 0, l = 0; l < o; l += 2) {
      var c = l === 0 ? u : (u + l - 2) % f + 2, p = r[c] - e[0], _ = r[c + 1] - e[1], d = t[l] - i[0], g = t[l + 1] - i[1], y = d - p, m = g - _;
      v += y * y + m * m;
    }
    v < n && (n = v, s = h);
  }
  return s;
}
function vc(r) {
  for (var t = [], e = r.length, i = 0; i < e; i += 2) t[i] = r[e - i - 2], t[i + 1] = r[e - i - 1];
  return t;
}
function lc(r, t, e, i) {
  for (var a = [], n, s = 0; s < r.length; s++) {
    var o = r[s], f = t[s], h = oo(o), u = oo(f);
    n == null && (n = h[2] < 0 != u[2] < 0);
    var v = [], l = [], c = 0, p = 1 / 0, _ = [], d = o.length;
    n && (o = vc(o));
    for (var g = uc(o, f, h, u) * 6, y = d - 2, m = 0; m < y; m += 2) {
      var w = (g + m) % y + 2;
      v[m + 2] = o[w] - h[0], v[m + 3] = o[w + 1] - h[1];
    }
    v[0] = o[g] - h[0], v[1] = o[g + 1] - h[1];
    for (var S = i / e, b = -i / 2; b <= i / 2; b += S) {
      for (var T = Math.sin(b), C = Math.cos(b), M = 0, m = 0; m < o.length; m += 2) {
        var P = v[m], L = v[m + 1], R = f[m] - u[0], A = f[m + 1] - u[1], x = R * C - A * T, E = R * T + A * C;
        _[m] = x, _[m + 1] = E;
        var D = x - P, F = E - L;
        M += D * D + F * F;
      }
      if (M < p) {
        p = M, c = b;
        for (var H = 0; H < _.length; H++) l[H] = _[H];
      }
    }
    a.push({ from: v, to: l, fromCp: h, toCp: u, rotation: -c });
  }
  return a;
}
function en(r) {
  return r.__isCombineMorphing;
}
var If = "__mOriginal_";
function bi(r, t, e) {
  var i = If + t, a = r[i] || r[t];
  r[i] || (r[i] = r[t]);
  var n = e.replace, s = e.after, o = e.before;
  r[t] = function() {
    var f = arguments, h;
    return o && o.apply(this, f), n ? h = n.apply(this, f) : h = a.apply(this, f), s && s.apply(this, f), h;
  };
}
function me(r, t) {
  var e = If + t;
  r[e] && (r[t] = r[e], r[e] = null);
}
function fo(r, t) {
  for (var e = 0; e < r.length; e++) for (var i = r[e], a = 0; a < i.length; ) {
    var n = i[a], s = i[a + 1];
    i[a++] = t[0] * n + t[2] * s + t[4], i[a++] = t[1] * n + t[3] * s + t[5];
  }
}
function Ef(r, t) {
  var e = r.getUpdatedPathProxy(), i = t.getUpdatedPathProxy(), a = hc(tn(e), tn(i)), n = a[0], s = a[1], o = r.getComputedTransform(), f = t.getComputedTransform();
  function h() {
    this.transform = null;
  }
  o && fo(n, o), f && fo(s, f), bi(t, "updateTransform", { replace: h }), t.transform = null;
  var u = lc(n, s, 10, Math.PI), v = [];
  bi(t, "buildPath", { replace: function(l) {
    for (var c = t.__morphT, p = 1 - c, _ = [], d = 0; d < u.length; d++) {
      var g = u[d], y = g.from, m = g.to, w = g.rotation * c, S = g.fromCp, b = g.toCp, T = Math.sin(w), C = Math.cos(w);
      hh(_, S, b, c);
      for (var M = 0; M < y.length; M += 2) {
        var P = y[M], L = y[M + 1], R = m[M], A = m[M + 1], x = P * p + R * c, E = L * p + A * c;
        v[M] = x * C - E * T + _[0], v[M + 1] = x * T + E * C + _[1];
      }
      var D = v[0], F = v[1];
      l.moveTo(D, F);
      for (var M = 2; M < y.length; ) {
        var R = v[M++], A = v[M++], H = v[M++], j = v[M++], V = v[M++], W = v[M++];
        D === R && F === A && H === V && j === W ? l.lineTo(V, W) : l.bezierCurveTo(R, A, H, j, V, W), D = V, F = W;
      }
    }
  } });
}
function Ff(r, t, e) {
  if (!r || !t) return t;
  var i = e.done, a = e.during;
  Ef(r, t), t.__morphT = 0;
  function n() {
    me(t, "buildPath"), me(t, "updateTransform"), t.__morphT = -1, t.createPathProxy(), t.dirtyShape();
  }
  return t.animateTo({ __morphT: 1 }, wt({ during: function(s) {
    t.dirtyShape(), a && a(s);
  }, done: function() {
    n(), i && i();
  } }, e)), t;
}
function cc(r, t, e, i, a, n) {
  var s = 16;
  r = a === e ? 0 : Math.round(32767 * (r - e) / (a - e)), t = n === i ? 0 : Math.round(32767 * (t - i) / (n - i));
  for (var o = 0, f, h = (1 << s) / 2; h > 0; h /= 2) {
    var u = 0, v = 0;
    (r & h) > 0 && (u = 1), (t & h) > 0 && (v = 1), o += h * h * (3 * u ^ v), v === 0 && (u === 1 && (r = h - 1 - r, t = h - 1 - t), f = r, r = t, t = f);
  }
  return o;
}
function Si(r) {
  var t = 1 / 0, e = 1 / 0, i = -1 / 0, a = -1 / 0, n = Z(r, function(o) {
    var f = o.getBoundingRect(), h = o.getComputedTransform(), u = f.x + f.width / 2 + (h ? h[4] : 0), v = f.y + f.height / 2 + (h ? h[5] : 0);
    return t = Math.min(u, t), e = Math.min(v, e), i = Math.max(u, i), a = Math.max(v, a), [u, v];
  }), s = Z(n, function(o, f) {
    return { cp: o, z: cc(o[0], o[1], t, e, i, a), path: r[f] };
  });
  return s.sort(function(o, f) {
    return o.z - f.z;
  }).map(function(o) {
    return o.path;
  });
}
function Of(r) {
  return oc(r.path, r.count);
}
function an() {
  return { fromIndividuals: [], toIndividuals: [], count: 0 };
}
function Vc(r, t, e) {
  var i = [];
  function a(S) {
    for (var b = 0; b < S.length; b++) {
      var T = S[b];
      en(T) ? a(T.childrenRef()) : T instanceof K && i.push(T);
    }
  }
  a(r);
  var n = i.length;
  if (!n) return an();
  var s = e.dividePath || Of, o = s({ path: t, count: n });
  if (o.length !== n) return console.error("Invalid morphing: unmatched splitted path"), an();
  i = Si(i), o = Si(o);
  for (var f = e.done, h = e.during, u = e.individualDelay, v = new cn(), l = 0; l < n; l++) {
    var c = i[l], p = o[l];
    p.parent = t, p.copyTransform(v), u || Ef(c, p);
  }
  t.__isCombineMorphing = true, t.childrenRef = function() {
    return o;
  };
  function _(S) {
    for (var b = 0; b < o.length; b++) o[b].addSelfToZr(S);
  }
  bi(t, "addSelfToZr", { after: function(S) {
    _(S);
  } }), bi(t, "removeSelfFromZr", { after: function(S) {
    for (var b = 0; b < o.length; b++) o[b].removeSelfFromZr(S);
  } });
  function d() {
    t.__isCombineMorphing = false, t.__morphT = -1, t.childrenRef = null, me(t, "addSelfToZr"), me(t, "removeSelfFromZr");
  }
  var g = o.length;
  if (u) for (var y = g, m = function() {
    y--, y === 0 && (d(), f && f());
  }, l = 0; l < g; l++) {
    var w = u ? wt({ delay: (e.delay || 0) + u(l, g, i[l], o[l]), done: m }, e) : e;
    Ff(i[l], o[l], w);
  }
  else t.__morphT = 0, t.animateTo({ __morphT: 1 }, wt({ during: function(S) {
    for (var b = 0; b < g; b++) {
      var T = o[b];
      T.__morphT = t.__morphT, T.dirtyShape();
    }
    h && h(S);
  }, done: function() {
    d();
    for (var S = 0; S < r.length; S++) me(r[S], "updateTransform");
    f && f();
  } }, e));
  return t.__zr && _(t.__zr), { fromIndividuals: i, toIndividuals: o, count: g };
}
function Zc(r, t, e) {
  var i = t.length, a = [], n = e.dividePath || Of;
  function s(c) {
    for (var p = 0; p < c.length; p++) {
      var _ = c[p];
      en(_) ? s(_.childrenRef()) : _ instanceof K && a.push(_);
    }
  }
  if (en(r)) {
    s(r.childrenRef());
    var o = a.length;
    if (o < i) for (var f = 0, h = o; h < i; h++) a.push(nf(a[f++ % o]));
    a.length = i;
  } else {
    a = n({ path: r, count: i });
    for (var u = r.getComputedTransform(), h = 0; h < a.length; h++) a[h].setLocalTransform(u);
    if (a.length !== i) return console.error("Invalid morphing: unmatched splitted path"), an();
  }
  a = Si(a), t = Si(t);
  for (var v = e.individualDelay, h = 0; h < i; h++) {
    var l = v ? wt({ delay: (e.delay || 0) + v(h, i, a[h], t[h]) }, e) : e;
    Ff(a[h], t[h], l);
  }
  return { fromIndividuals: a, toIndividuals: t, count: t.length };
}
export {
  Hr as $,
  Mh as A,
  ge as B,
  zc as C,
  fv as D,
  hv as E,
  sf as F,
  of as G,
  pn as H,
  uf as I,
  Ce as J,
  Hv as K,
  vf as L,
  Nv as M,
  U as N,
  Yv as O,
  K as P,
  yr as Q,
  Dv as R,
  Va as S,
  cn as T,
  Gc as U,
  Gv as V,
  Yc as W,
  k as X,
  Xv as Y,
  jr as Z,
  cv as _,
  It as a,
  eh as a$,
  Br as a0,
  Pr as a1,
  co as a2,
  Jf as a3,
  gh as a4,
  mc as a5,
  Zf as a6,
  Ma as a7,
  yc as a8,
  Sc as a9,
  qc as aA,
  Ao as aB,
  rt as aC,
  Ec as aD,
  Uu as aE,
  ri as aF,
  bc as aG,
  To as aH,
  _c as aI,
  Ac as aJ,
  bh as aK,
  Xl as aL,
  $c as aM,
  Jl as aN,
  Ae as aO,
  wo as aP,
  Sr as aQ,
  Pc as aR,
  pc as aS,
  Ko as aT,
  Da as aU,
  bo as aV,
  Mt as aW,
  Re as aX,
  Ic as aY,
  Oc as aZ,
  Fc as a_,
  Mc as aa,
  br as ab,
  yu as ac,
  Xc as ad,
  Ri as ae,
  Ci as af,
  nl as ag,
  Jr as ah,
  kc as ai,
  Oh as aj,
  Hc as ak,
  Bc as al,
  po as am,
  Se as an,
  Qf as ao,
  Uc as ap,
  zr as aq,
  Nr as ar,
  _u as as,
  oh as at,
  hh as au,
  jt as av,
  Nh as aw,
  Bh as ax,
  $e as ay,
  Wc as az,
  Xt as b,
  sh as b0,
  Hi as b1,
  Qr as b2,
  ih as b3,
  ah as b4,
  xc as b5,
  Lc as b6,
  vi as b7,
  at as b8,
  qr as b9,
  Dc as ba,
  Yn as bb,
  Dr as bc,
  qu as bd,
  Xn as be,
  be as bf,
  ai as bg,
  Pa as bh,
  wh as bi,
  bt as bj,
  Rc as bk,
  Tc as bl,
  en as bm,
  Ff as bn,
  Vc as bo,
  Zc as bp,
  nf as bq,
  Cc as c,
  ce as d,
  nt as e,
  wc as f,
  xn as g,
  Vr as h,
  kt as i,
  X as j,
  gc as k,
  z as l,
  Z as m,
  xe as n,
  Ot as o,
  G as p,
  $h as q,
  Pi as r,
  $ as s,
  bv as t,
  Xr as u,
  Nc as v,
  hi as w,
  wt as x,
  Ph as y,
  pe as z
};
