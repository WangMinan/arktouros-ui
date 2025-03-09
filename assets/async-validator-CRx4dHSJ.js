function _() {
  return _ = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (i[t] = r[t]);
    }
    return i;
  }, _.apply(this, arguments);
}
function ee(i, e) {
  i.prototype = Object.create(e.prototype), i.prototype.constructor = i, S(i, e);
}
function U(i) {
  return U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, U(i);
}
function S(i, e) {
  return S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, S(i, e);
}
function re() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function M(i, e, r) {
  return re() ? M = Reflect.construct.bind() : M = function(n, f, a) {
    var s = [null];
    s.push.apply(s, f);
    var d = Function.bind.apply(n, s), q = new d();
    return a && S(q, a.prototype), q;
  }, M.apply(null, arguments);
}
function te(i) {
  return Function.toString.call(i).indexOf("[native code]") !== -1;
}
function J(i) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return J = function(t) {
    if (t === null || !te(t)) return t;
    if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(t)) return e.get(t);
      e.set(t, n);
    }
    function n() {
      return M(t, arguments, U(this).constructor);
    }
    return n.prototype = Object.create(t.prototype, { constructor: { value: n, enumerable: false, writable: true, configurable: true } }), S(n, t);
  }, J(i);
}
var ne = /%[sdj%]/g, ie = function() {
};
function Z(i) {
  if (!i || !i.length) return null;
  var e = {};
  return i.forEach(function(r) {
    var t = r.field;
    e[t] = e[t] || [], e[t].push(r);
  }), e;
}
function F(i) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++) r[t - 1] = arguments[t];
  var n = 0, f = r.length;
  if (typeof i == "function") return i.apply(null, r);
  if (typeof i == "string") {
    var a = i.replace(ne, function(s) {
      if (s === "%%") return "%";
      if (n >= f) return s;
      switch (s) {
        case "%s":
          return String(r[n++]);
        case "%d":
          return Number(r[n++]);
        case "%j":
          try {
            return JSON.stringify(r[n++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return a;
  }
  return i;
}
function ae(i) {
  return i === "string" || i === "url" || i === "hex" || i === "email" || i === "date" || i === "pattern";
}
function h(i, e) {
  return !!(i == null || e === "array" && Array.isArray(i) && !i.length || ae(e) && typeof i == "string" && !i);
}
function fe(i, e, r) {
  var t = [], n = 0, f = i.length;
  function a(s) {
    t.push.apply(t, s || []), n++, n === f && r(t);
  }
  i.forEach(function(s) {
    e(s, a);
  });
}
function G(i, e, r) {
  var t = 0, n = i.length;
  function f(a) {
    if (a && a.length) {
      r(a);
      return;
    }
    var s = t;
    t = t + 1, s < n ? e(i[s], f) : r([]);
  }
  f([]);
}
function se(i) {
  var e = [];
  return Object.keys(i).forEach(function(r) {
    e.push.apply(e, i[r] || []);
  }), e;
}
var H = function(i) {
  ee(e, i);
  function e(r, t) {
    var n;
    return n = i.call(this, "Async Validation Error") || this, n.errors = r, n.fields = t, n;
  }
  return e;
}(J(Error));
function oe(i, e, r, t, n) {
  if (e.first) {
    var f = new Promise(function(l, O) {
      var x = function(o) {
        return t(o), o.length ? O(new H(o, Z(o))) : l(n);
      }, u = se(i);
      G(u, r, x);
    });
    return f.catch(function(l) {
      return l;
    }), f;
  }
  var a = e.firstFields === true ? Object.keys(i) : e.firstFields || [], s = Object.keys(i), d = s.length, q = 0, v = [], m = new Promise(function(l, O) {
    var x = function(g) {
      if (v.push.apply(v, g), q++, q === d) return t(v), v.length ? O(new H(v, Z(v))) : l(n);
    };
    s.length || (t(v), l(n)), s.forEach(function(u) {
      var g = i[u];
      a.indexOf(u) !== -1 ? G(g, r, x) : fe(g, r, x);
    });
  });
  return m.catch(function(l) {
    return l;
  }), m;
}
function de(i) {
  return !!(i && i.message !== void 0);
}
function ue(i, e) {
  for (var r = i, t = 0; t < e.length; t++) {
    if (r == null) return r;
    r = r[e[t]];
  }
  return r;
}
function I(i, e) {
  return function(r) {
    var t;
    return i.fullFields ? t = ue(e, i.fullFields) : t = e[r.field || i.fullField], de(r) ? (r.field = r.field || i.fullField, r.fieldValue = t, r) : { message: typeof r == "function" ? r() : r, fieldValue: t, field: r.field || i.fullField };
  };
}
function Q(i, e) {
  if (e) {
    for (var r in e) if (e.hasOwnProperty(r)) {
      var t = e[r];
      typeof t == "object" && typeof i[r] == "object" ? i[r] = _({}, i[r], t) : i[r] = t;
    }
  }
  return i;
}
var C = function(e, r, t, n, f, a) {
  e.required && (!t.hasOwnProperty(e.field) || h(r, a || e.type)) && n.push(F(f.messages.required, e.fullField));
}, ce = function(e, r, t, n, f) {
  (/^\s+$/.test(r) || r === "") && n.push(F(f.messages.whitespace, e.fullField));
}, T, pe = function() {
  if (T) return T;
  var i = "[a-fA-F\\d:]", e = function(y) {
    return y && y.includeBoundaries ? "(?:(?<=\\s|^)(?=" + i + ")|(?<=" + i + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", t = "[a-fA-F\\d]{1,4}", n = (`
(?:
(?:` + t + ":){7}(?:" + t + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + t + ":){6}(?:" + r + "|:" + t + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + t + ":){5}(?::" + r + "|(?::" + t + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + t + ":){4}(?:(?::" + t + "){0,1}:" + r + "|(?::" + t + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + t + ":){3}(?:(?::" + t + "){0,2}:" + r + "|(?::" + t + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + t + ":){2}(?:(?::" + t + "){0,3}:" + r + "|(?::" + t + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + t + ":){1}(?:(?::" + t + "){0,4}:" + r + "|(?::" + t + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + t + "){0,5}:" + r + "|(?::" + t + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), f = new RegExp("(?:^" + r + "$)|(?:^" + n + "$)"), a = new RegExp("^" + r + "$"), s = new RegExp("^" + n + "$"), d = function(y) {
    return y && y.exact ? f : new RegExp("(?:" + e(y) + r + e(y) + ")|(?:" + e(y) + n + e(y) + ")", "g");
  };
  d.v4 = function(p) {
    return p && p.exact ? a : new RegExp("" + e(p) + r + e(p), "g");
  }, d.v6 = function(p) {
    return p && p.exact ? s : new RegExp("" + e(p) + n + e(p), "g");
  };
  var q = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", m = d.v4().source, l = d.v6().source, O = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", x = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", u = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", g = "(?::\\d{2,5})?", o = '(?:[/?#][^\\s"]*)?', A = "(?:" + q + "|www\\.)" + v + "(?:localhost|" + m + "|" + l + "|" + O + x + u + ")" + g + o;
  return T = new RegExp("(?:^" + A + "$)", "i"), T;
}, X = { email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/, hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i }, $ = { integer: function(e) {
  return $.number(e) && parseInt(e, 10) === e;
}, float: function(e) {
  return $.number(e) && !$.integer(e);
}, array: function(e) {
  return Array.isArray(e);
}, regexp: function(e) {
  if (e instanceof RegExp) return true;
  try {
    return !!new RegExp(e);
  } catch {
    return false;
  }
}, date: function(e) {
  return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
}, number: function(e) {
  return isNaN(e) ? false : typeof e == "number";
}, object: function(e) {
  return typeof e == "object" && !$.array(e);
}, method: function(e) {
  return typeof e == "function";
}, email: function(e) {
  return typeof e == "string" && e.length <= 320 && !!e.match(X.email);
}, url: function(e) {
  return typeof e == "string" && e.length <= 2048 && !!e.match(pe());
}, hex: function(e) {
  return typeof e == "string" && !!e.match(X.hex);
} }, ye = function(e, r, t, n, f) {
  if (e.required && r === void 0) {
    C(e, r, t, n, f);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = e.type;
  a.indexOf(s) > -1 ? $[s](r) || n.push(F(f.messages.types[s], e.fullField, e.type)) : s && typeof r !== e.type && n.push(F(f.messages.types[s], e.fullField, e.type));
}, ge = function(e, r, t, n, f) {
  var a = typeof e.len == "number", s = typeof e.min == "number", d = typeof e.max == "number", q = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, v = r, m = null, l = typeof r == "number", O = typeof r == "string", x = Array.isArray(r);
  if (l ? m = "number" : O ? m = "string" : x && (m = "array"), !m) return false;
  x && (v = r.length), O && (v = r.replace(q, "_").length), a ? v !== e.len && n.push(F(f.messages[m].len, e.fullField, e.len)) : s && !d && v < e.min ? n.push(F(f.messages[m].min, e.fullField, e.min)) : d && !s && v > e.max ? n.push(F(f.messages[m].max, e.fullField, e.max)) : s && d && (v < e.min || v > e.max) && n.push(F(f.messages[m].range, e.fullField, e.min, e.max));
}, N = "enum", ve = function(e, r, t, n, f) {
  e[N] = Array.isArray(e[N]) ? e[N] : [], e[N].indexOf(r) === -1 && n.push(F(f.messages[N], e.fullField, e[N].join(", ")));
}, he = function(e, r, t, n, f) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp) e.pattern.lastIndex = 0, e.pattern.test(r) || n.push(F(f.messages.pattern.mismatch, e.fullField, r, e.pattern));
    else if (typeof e.pattern == "string") {
      var a = new RegExp(e.pattern);
      a.test(r) || n.push(F(f.messages.pattern.mismatch, e.fullField, r, e.pattern));
    }
  }
}, c = { required: C, whitespace: ce, type: ye, range: ge, enum: ve, pattern: he }, me = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (h(r, "string") && !e.required) return t();
    c.required(e, r, n, a, f, "string"), h(r, "string") || (c.type(e, r, n, a, f), c.range(e, r, n, a, f), c.pattern(e, r, n, a, f), e.whitespace === true && c.whitespace(e, r, n, a, f));
  }
  t(a);
}, le = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required) return t();
    c.required(e, r, n, a, f), r !== void 0 && c.type(e, r, n, a, f);
  }
  t(a);
}, qe = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (r === "" && (r = void 0), h(r) && !e.required) return t();
    c.required(e, r, n, a, f), r !== void 0 && (c.type(e, r, n, a, f), c.range(e, r, n, a, f));
  }
  t(a);
}, we = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required) return t();
    c.required(e, r, n, a, f), r !== void 0 && c.type(e, r, n, a, f);
  }
  t(a);
}, be = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required) return t();
    c.required(e, r, n, a, f), h(r) || c.type(e, r, n, a, f);
  }
  t(a);
}, Fe = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required) return t();
    c.required(e, r, n, a, f), r !== void 0 && (c.type(e, r, n, a, f), c.range(e, r, n, a, f));
  }
  t(a);
}, xe = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required) return t();
    c.required(e, r, n, a, f), r !== void 0 && (c.type(e, r, n, a, f), c.range(e, r, n, a, f));
  }
  t(a);
}, Oe = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (r == null && !e.required) return t();
    c.required(e, r, n, a, f, "array"), r != null && (c.type(e, r, n, a, f), c.range(e, r, n, a, f));
  }
  t(a);
}, Ee = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required) return t();
    c.required(e, r, n, a, f), r !== void 0 && c.type(e, r, n, a, f);
  }
  t(a);
}, Ae = "enum", Pe = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required) return t();
    c.required(e, r, n, a, f), r !== void 0 && c[Ae](e, r, n, a, f);
  }
  t(a);
}, je = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (h(r, "string") && !e.required) return t();
    c.required(e, r, n, a, f), h(r, "string") || c.pattern(e, r, n, a, f);
  }
  t(a);
}, Re = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (h(r, "date") && !e.required) return t();
    if (c.required(e, r, n, a, f), !h(r, "date")) {
      var d;
      r instanceof Date ? d = r : d = new Date(r), c.type(e, d, n, a, f), d && c.range(e, d.getTime(), n, a, f);
    }
  }
  t(a);
}, _e = function(e, r, t, n, f) {
  var a = [], s = Array.isArray(r) ? "array" : typeof r;
  c.required(e, r, n, a, f, s), t(a);
}, B = function(e, r, t, n, f) {
  var a = e.type, s = [], d = e.required || !e.required && n.hasOwnProperty(e.field);
  if (d) {
    if (h(r, a) && !e.required) return t();
    c.required(e, r, n, s, f, a), h(r, a) || c.type(e, r, n, s, f);
  }
  t(s);
}, Ne = function(e, r, t, n, f) {
  var a = [], s = e.required || !e.required && n.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required) return t();
    c.required(e, r, n, a, f);
  }
  t(a);
}, D = { string: me, method: le, number: qe, boolean: we, regexp: be, integer: Fe, float: xe, array: Oe, object: Ee, enum: Pe, pattern: je, date: Re, url: B, hex: B, email: B, required: _e, any: Ne };
function W() {
  return { default: "Validation error on field %s", required: "%s is required", enum: "%s must be one of %s", whitespace: "%s cannot be empty", date: { format: "%s date %s is invalid for format %s", parse: "%s date could not be parsed, %s is invalid ", invalid: "%s date %s is invalid" }, types: { string: "%s is not a %s", method: "%s is not a %s (function)", array: "%s is not an %s", object: "%s is not an %s", number: "%s is not a %s", date: "%s is not a %s", boolean: "%s is not a %s", integer: "%s is not an %s", float: "%s is not a %s", regexp: "%s is not a valid %s", email: "%s is not a valid %s", url: "%s is not a valid %s", hex: "%s is not a valid %s" }, string: { len: "%s must be exactly %s characters", min: "%s must be at least %s characters", max: "%s cannot be longer than %s characters", range: "%s must be between %s and %s characters" }, number: { len: "%s must equal %s", min: "%s cannot be less than %s", max: "%s cannot be greater than %s", range: "%s must be between %s and %s" }, array: { len: "%s must be exactly %s in length", min: "%s cannot be less than %s in length", max: "%s cannot be greater than %s in length", range: "%s must be between %s and %s in length" }, pattern: { mismatch: "%s value %s does not match pattern %s" }, clone: function() {
    var e = JSON.parse(JSON.stringify(this));
    return e.clone = this.clone, e;
  } };
}
var z = W(), L = function() {
  function i(r) {
    this.rules = null, this._messages = z, this.define(r);
  }
  var e = i.prototype;
  return e.define = function(t) {
    var n = this;
    if (!t) throw new Error("Cannot configure a schema with no rules");
    if (typeof t != "object" || Array.isArray(t)) throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(t).forEach(function(f) {
      var a = t[f];
      n.rules[f] = Array.isArray(a) ? a : [a];
    });
  }, e.messages = function(t) {
    return t && (this._messages = Q(W(), t)), this._messages;
  }, e.validate = function(t, n, f) {
    var a = this;
    n === void 0 && (n = {}), f === void 0 && (f = function() {
    });
    var s = t, d = n, q = f;
    if (typeof d == "function" && (q = d, d = {}), !this.rules || Object.keys(this.rules).length === 0) return q && q(null, s), Promise.resolve(s);
    function v(u) {
      var g = [], o = {};
      function A(y) {
        if (Array.isArray(y)) {
          var b;
          g = (b = g).concat.apply(b, y);
        } else g.push(y);
      }
      for (var p = 0; p < u.length; p++) A(u[p]);
      g.length ? (o = Z(g), q(g, o)) : q(null, s);
    }
    if (d.messages) {
      var m = this.messages();
      m === z && (m = W()), Q(m, d.messages), d.messages = m;
    } else d.messages = this.messages();
    var l = {}, O = d.keys || Object.keys(this.rules);
    O.forEach(function(u) {
      var g = a.rules[u], o = s[u];
      g.forEach(function(A) {
        var p = A;
        typeof p.transform == "function" && (s === t && (s = _({}, s)), o = s[u] = p.transform(o)), typeof p == "function" ? p = { validator: p } : p = _({}, p), p.validator = a.getValidationMethod(p), p.validator && (p.field = u, p.fullField = p.fullField || u, p.type = a.getType(p), l[u] = l[u] || [], l[u].push({ rule: p, value: o, source: s, field: u }));
      });
    });
    var x = {};
    return oe(l, d, function(u, g) {
      var _a;
      var o = u.rule, A = (o.type === "object" || o.type === "array") && (typeof o.fields == "object" || typeof o.defaultField == "object");
      A = A && (o.required || !o.required && u.value), o.field = u.field;
      function p(w, R) {
        return _({}, R, { fullField: o.fullField + "." + w, fullFields: o.fullFields ? [].concat(o.fullFields, [w]) : [w] });
      }
      function y(w) {
        w === void 0 && (w = []);
        var R = Array.isArray(w) ? w : [w];
        !d.suppressWarning && R.length && i.warning("async-validator:", R), R.length && o.message !== void 0 && (R = [].concat(o.message));
        var P = R.map(I(o, s));
        if (d.first && P.length) return x[o.field] = 1, g(P);
        if (!A) g(P);
        else {
          if (o.required && !u.value) return o.message !== void 0 ? P = [].concat(o.message).map(I(o, s)) : d.error && (P = [d.error(o, F(d.messages.required, o.field))]), g(P);
          var V = {};
          o.defaultField && Object.keys(u.value).map(function(j) {
            V[j] = o.defaultField;
          }), V = _({}, V, u.rule.fields);
          var K = {};
          Object.keys(V).forEach(function(j) {
            var E = V[j], k = Array.isArray(E) ? E : [E];
            K[j] = k.map(p.bind(null, j));
          });
          var Y = new i(K);
          Y.messages(d.messages), u.rule.options && (u.rule.options.messages = d.messages, u.rule.options.error = d.error), Y.validate(u.value, u.rule.options || d, function(j) {
            var E = [];
            P && P.length && E.push.apply(E, P), j && j.length && E.push.apply(E, j), g(E.length ? E : null);
          });
        }
      }
      var b;
      if (o.asyncValidator) b = o.asyncValidator(o, u.value, y, u.source, d);
      else if (o.validator) {
        try {
          b = o.validator(o, u.value, y, u.source, d);
        } catch (w) {
          (_a = console.error) == null ? void 0 : _a.call(console, w), d.suppressValidatorError || setTimeout(function() {
            throw w;
          }, 0), y(w.message);
        }
        b === true ? y() : b === false ? y(typeof o.message == "function" ? o.message(o.fullField || o.field) : o.message || (o.fullField || o.field) + " fails") : b instanceof Array ? y(b) : b instanceof Error && y(b.message);
      }
      b && b.then && b.then(function() {
        return y();
      }, function(w) {
        return y(w);
      });
    }, function(u) {
      v(u);
    }, s);
  }, e.getType = function(t) {
    if (t.type === void 0 && t.pattern instanceof RegExp && (t.type = "pattern"), typeof t.validator != "function" && t.type && !D.hasOwnProperty(t.type)) throw new Error(F("Unknown rule type %s", t.type));
    return t.type || "string";
  }, e.getValidationMethod = function(t) {
    if (typeof t.validator == "function") return t.validator;
    var n = Object.keys(t), f = n.indexOf("message");
    return f !== -1 && n.splice(f, 1), n.length === 1 && n[0] === "required" ? D.required : D[this.getType(t)] || void 0;
  }, i;
}();
L.register = function(e, r) {
  if (typeof r != "function") throw new Error("Cannot register a validator by type, validator is not a function");
  D[e] = r;
};
L.warning = ie;
L.messages = z;
L.validators = D;
export {
  L as S
};
