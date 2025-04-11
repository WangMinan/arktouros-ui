var $ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function B(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
var M = { exports: {} };
/*!
* clipboard.js v2.0.11
* https://clipboardjs.com/
*
* Licensed MIT © Zeno Rocha
*/
(function(_, K) {
  (function(S, m) {
    _.exports = m();
  })($, function() {
    return function() {
      var P = { 686: function(l, c, t) {
        t.d(c, { default: function() {
          return X;
        } });
        var a = t(279), f = t.n(a), s = t(370), h = t.n(s), y = t(817), g = t.n(y);
        function d(i) {
          try {
            return document.execCommand(i);
          } catch {
            return false;
          }
        }
        var v = function(n) {
          var e = g()(n);
          return d("cut"), e;
        }, p = v;
        function E(i) {
          var n = document.documentElement.getAttribute("dir") === "rtl", e = document.createElement("textarea");
          e.style.fontSize = "12pt", e.style.border = "0", e.style.padding = "0", e.style.margin = "0", e.style.position = "absolute", e.style[n ? "right" : "left"] = "-9999px";
          var r = window.pageYOffset || document.documentElement.scrollTop;
          return e.style.top = "".concat(r, "px"), e.setAttribute("readonly", ""), e.value = i, e;
        }
        var k = function(n, e) {
          var r = E(n);
          e.container.appendChild(r);
          var o = g()(r);
          return d("copy"), r.remove(), o;
        }, N = function(n) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { container: document.body }, r = "";
          return typeof n == "string" ? r = k(n, e) : n instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(n == null ? void 0 : n.type) ? r = k(n.value, e) : (r = g()(n), d("copy")), r;
        }, C = N;
        function T(i) {
          "@babel/helpers - typeof";
          return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? T = function(e) {
            return typeof e;
          } : T = function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, T(i);
        }
        var j = function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = n.action, r = e === void 0 ? "copy" : e, o = n.container, u = n.target, b = n.text;
          if (r !== "copy" && r !== "cut") throw new Error('Invalid "action" value, use either "copy" or "cut"');
          if (u !== void 0) if (u && T(u) === "object" && u.nodeType === 1) {
            if (r === "copy" && u.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            if (r === "cut" && (u.hasAttribute("readonly") || u.hasAttribute("disabled"))) throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
          } else throw new Error('Invalid "target" value, use a valid Element');
          if (b) return C(b, { container: o });
          if (u) return r === "cut" ? p(u) : C(u, { container: o });
        }, D = j;
        function w(i) {
          "@babel/helpers - typeof";
          return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? w = function(e) {
            return typeof e;
          } : w = function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, w(i);
        }
        function F(i, n) {
          if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        function R(i, n) {
          for (var e = 0; e < n.length; e++) {
            var r = n[e];
            r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(i, r.key, r);
          }
        }
        function H(i, n, e) {
          return n && R(i.prototype, n), e && R(i, e), i;
        }
        function I(i, n) {
          if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
          i.prototype = Object.create(n && n.prototype, { constructor: { value: i, writable: true, configurable: true } }), n && O(i, n);
        }
        function O(i, n) {
          return O = Object.setPrototypeOf || function(r, o) {
            return r.__proto__ = o, r;
          }, O(i, n);
        }
        function z(i) {
          var n = G();
          return function() {
            var r = x(i), o;
            if (n) {
              var u = x(this).constructor;
              o = Reflect.construct(r, arguments, u);
            } else o = r.apply(this, arguments);
            return U(this, o);
          };
        }
        function U(i, n) {
          return n && (w(n) === "object" || typeof n == "function") ? n : Y(i);
        }
        function Y(i) {
          if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return i;
        }
        function G() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
          if (typeof Proxy == "function") return true;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), true;
          } catch {
            return false;
          }
        }
        function x(i) {
          return x = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }, x(i);
        }
        function L(i, n) {
          var e = "data-clipboard-".concat(i);
          if (n.hasAttribute(e)) return n.getAttribute(e);
        }
        var V = function(i) {
          I(e, i);
          var n = z(e);
          function e(r, o) {
            var u;
            return F(this, e), u = n.call(this), u.resolveOptions(o), u.listenClick(r), u;
          }
          return H(e, [{ key: "resolveOptions", value: function() {
            var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.action = typeof o.action == "function" ? o.action : this.defaultAction, this.target = typeof o.target == "function" ? o.target : this.defaultTarget, this.text = typeof o.text == "function" ? o.text : this.defaultText, this.container = w(o.container) === "object" ? o.container : document.body;
          } }, { key: "listenClick", value: function(o) {
            var u = this;
            this.listener = h()(o, "click", function(b) {
              return u.onClick(b);
            });
          } }, { key: "onClick", value: function(o) {
            var u = o.delegateTarget || o.currentTarget, b = this.action(u) || "copy", A = D({ action: b, container: this.container, target: this.target(u), text: this.text(u) });
            this.emit(A ? "success" : "error", { action: b, text: A, trigger: u, clearSelection: function() {
              u && u.focus(), window.getSelection().removeAllRanges();
            } });
          } }, { key: "defaultAction", value: function(o) {
            return L("action", o);
          } }, { key: "defaultTarget", value: function(o) {
            var u = L("target", o);
            if (u) return document.querySelector(u);
          } }, { key: "defaultText", value: function(o) {
            return L("text", o);
          } }, { key: "destroy", value: function() {
            this.listener.destroy();
          } }], [{ key: "copy", value: function(o) {
            var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { container: document.body };
            return C(o, u);
          } }, { key: "cut", value: function(o) {
            return p(o);
          } }, { key: "isSupported", value: function() {
            var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], u = typeof o == "string" ? [o] : o, b = !!document.queryCommandSupported;
            return u.forEach(function(A) {
              b = b && !!document.queryCommandSupported(A);
            }), b;
          } }]), e;
        }(f()), X = V;
      }, 828: function(l) {
        var c = 9;
        if (typeof Element < "u" && !Element.prototype.matches) {
          var t = Element.prototype;
          t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
        }
        function a(f, s) {
          for (; f && f.nodeType !== c; ) {
            if (typeof f.matches == "function" && f.matches(s)) return f;
            f = f.parentNode;
          }
        }
        l.exports = a;
      }, 438: function(l, c, t) {
        var a = t(828);
        function f(y, g, d, v, p) {
          var E = h.apply(this, arguments);
          return y.addEventListener(d, E, p), { destroy: function() {
            y.removeEventListener(d, E, p);
          } };
        }
        function s(y, g, d, v, p) {
          return typeof y.addEventListener == "function" ? f.apply(null, arguments) : typeof d == "function" ? f.bind(null, document).apply(null, arguments) : (typeof y == "string" && (y = document.querySelectorAll(y)), Array.prototype.map.call(y, function(E) {
            return f(E, g, d, v, p);
          }));
        }
        function h(y, g, d, v) {
          return function(p) {
            p.delegateTarget = a(p.target, g), p.delegateTarget && v.call(y, p);
          };
        }
        l.exports = s;
      }, 879: function(l, c) {
        c.node = function(t) {
          return t !== void 0 && t instanceof HTMLElement && t.nodeType === 1;
        }, c.nodeList = function(t) {
          var a = Object.prototype.toString.call(t);
          return t !== void 0 && (a === "[object NodeList]" || a === "[object HTMLCollection]") && "length" in t && (t.length === 0 || c.node(t[0]));
        }, c.string = function(t) {
          return typeof t == "string" || t instanceof String;
        }, c.fn = function(t) {
          var a = Object.prototype.toString.call(t);
          return a === "[object Function]";
        };
      }, 370: function(l, c, t) {
        var a = t(879), f = t(438);
        function s(d, v, p) {
          if (!d && !v && !p) throw new Error("Missing required arguments");
          if (!a.string(v)) throw new TypeError("Second argument must be a String");
          if (!a.fn(p)) throw new TypeError("Third argument must be a Function");
          if (a.node(d)) return h(d, v, p);
          if (a.nodeList(d)) return y(d, v, p);
          if (a.string(d)) return g(d, v, p);
          throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
        }
        function h(d, v, p) {
          return d.addEventListener(v, p), { destroy: function() {
            d.removeEventListener(v, p);
          } };
        }
        function y(d, v, p) {
          return Array.prototype.forEach.call(d, function(E) {
            E.addEventListener(v, p);
          }), { destroy: function() {
            Array.prototype.forEach.call(d, function(E) {
              E.removeEventListener(v, p);
            });
          } };
        }
        function g(d, v, p) {
          return f(document.body, d, v, p);
        }
        l.exports = s;
      }, 817: function(l) {
        function c(t) {
          var a;
          if (t.nodeName === "SELECT") t.focus(), a = t.value;
          else if (t.nodeName === "INPUT" || t.nodeName === "TEXTAREA") {
            var f = t.hasAttribute("readonly");
            f || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), f || t.removeAttribute("readonly"), a = t.value;
          } else {
            t.hasAttribute("contenteditable") && t.focus();
            var s = window.getSelection(), h = document.createRange();
            h.selectNodeContents(t), s.removeAllRanges(), s.addRange(h), a = s.toString();
          }
          return a;
        }
        l.exports = c;
      }, 279: function(l) {
        function c() {
        }
        c.prototype = { on: function(t, a, f) {
          var s = this.e || (this.e = {});
          return (s[t] || (s[t] = [])).push({ fn: a, ctx: f }), this;
        }, once: function(t, a, f) {
          var s = this;
          function h() {
            s.off(t, h), a.apply(f, arguments);
          }
          return h._ = a, this.on(t, h, f);
        }, emit: function(t) {
          var a = [].slice.call(arguments, 1), f = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, h = f.length;
          for (s; s < h; s++) f[s].fn.apply(f[s].ctx, a);
          return this;
        }, off: function(t, a) {
          var f = this.e || (this.e = {}), s = f[t], h = [];
          if (s && a) for (var y = 0, g = s.length; y < g; y++) s[y].fn !== a && s[y].fn._ !== a && h.push(s[y]);
          return h.length ? f[t] = h : delete f[t], this;
        } }, l.exports = c, l.exports.TinyEmitter = c;
      } }, S = {};
      function m(l) {
        if (S[l]) return S[l].exports;
        var c = S[l] = { exports: {} };
        return P[l](c, c.exports, m), c.exports;
      }
      return function() {
        m.n = function(l) {
          var c = l && l.__esModule ? function() {
            return l.default;
          } : function() {
            return l;
          };
          return m.d(c, { a: c }), c;
        };
      }(), function() {
        m.d = function(l, c) {
          for (var t in c) m.o(c, t) && !m.o(l, t) && Object.defineProperty(l, t, { enumerable: true, get: c[t] });
        };
      }(), function() {
        m.o = function(l, c) {
          return Object.prototype.hasOwnProperty.call(l, c);
        };
      }(), m(686);
    }().default;
  });
})(M);
var J = M.exports;
const W = B(J);
export {
  W as C,
  $ as c,
  B as g
};
