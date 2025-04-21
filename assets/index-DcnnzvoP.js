const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DataScreen-D3q0dS2r.js","./@vueuse-BrKJyrsM.js","./@vue-CnBZ4jx_.js","./vue-router-DZ3MrWk1.js","./index-DQDgIJ2e.js","./pinia-B3EJDjGG.js","./ServiceTopologyDiagram-CZzJJSs2.js","./index-DexSeZ02.js","./axios-t--hEgTQ.js","./nprogress-Bhg-JNl3.js","./clipboard-BFgOkOlC.js","./nprogress-BgDCIyLK.css","./arktourosUiConfigUtil-0zbcKwuZ.js","./element-plus-BOJqSAUc.js","./lodash-es-C-xrcuFl.js","./@element-plus-Rv25Faa4.js","./@popperjs-DB1lLFnh.js","./@ctrl-r5W6hzzQ.js","./dayjs-dlSZ-o3N.js","./async-validator-CRx4dHSJ.js","./memoize-one-BdPwpGay.js","./normalize-wheel-es-BQoi3Ox2.js","./@floating-ui-BCLhozDd.js","./element-plus-C92IwHuM.css","./echarts-DuzIGl-8.js","./tslib-BDyQ-Jie.js","./zrender-Cg4aFrUj.js","./index-DIjlsIS2.js","./dateUtil-BAIp0Nbc.js","./TraceTopologyDiagram-CMPm3_Kx.js","./index-D2Y5XtG6.js","./TraceTopologyDiagram-C_trcKwp.css","./MetricDiagram-DqL-UrtD.js","./MetricDiagram-CvbIfpNR.css","./pinia-plugin-persistedstate-DNriL1Fj.js","./destr-BPvN1X9m.js","./deep-pick-omit-CegYQlcN.js","./DataScreen-lWE-J5Rz.css","./DashBoard-BOGl3IYj.js","./DashBoard-BPq_y3ZL.css","./DashBoardMain-ZfkRlFyJ.js","./DashBoardMain-CyZrpX6P.css","./ServiceTable-BWqzwjPQ.js","./ServiceTable-C2DUByYo.css","./ServiceTopology-BYIKuSVW.js","./ServiceTopology-VNOROQz0.css","./LogMain-CF9-8OWx.js","./vue-clipboard3-xH3hfcUF.js","./LogMain-CX8Jc3UG.css","./MetricDashboard-s4XaYKjU.js","./MetricDashboard-CQY3QMOf.css","./TraceDashboard-CnFpL48W.js","./TraceDashboard-DQjEftsd.css","./TraceTimeout-Dt7TLjKZ.js","./TraceTimeout-wYNuiRT-.css","./404-D_71Q6yk.js","./404-DAXvqb-w.css"])))=>i.map(i=>d[i]);
import { H as A, ag as y, o as g, at as P } from "./@vue-CnBZ4jx_.js";
import { c as L } from "./pinia-B3EJDjGG.js";
import { c as O, a as T } from "./vue-router-DZ3MrWk1.js";
import { Q as b } from "./@element-plus-Rv25Faa4.js";
import { i as k, z as R } from "./element-plus-BOJqSAUc.js";
import { s as D } from "./pinia-plugin-persistedstate-DNriL1Fj.js";
import "./lodash-es-C-xrcuFl.js";
import "./@popperjs-DB1lLFnh.js";
import "./@ctrl-r5W6hzzQ.js";
import "./dayjs-dlSZ-o3N.js";
import "./clipboard-BFgOkOlC.js";
import "./async-validator-CRx4dHSJ.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BCLhozDd.js";
import "./destr-BPvN1X9m.js";
import "./deep-pick-omit-CegYQlcN.js";
let I, h;
let __tla = (async () => {
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e);
    new MutationObserver((e) => {
      for (const t of e) if (t.type === "childList") for (const i of t.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && l(i);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(e) {
      const t = {};
      return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
    }
    function l(e) {
      if (e.ep) return;
      e.ep = true;
      const t = n(e);
      fetch(e.href, t);
    }
  })();
  let S;
  I = (o, r) => {
    const n = o.__vccOpts || o;
    for (const [l, e] of r) n[l] = e;
    return n;
  };
  S = {};
  function V(o, r) {
    const n = y("router-view");
    return g(), A(n);
  }
  let w, N, B, _, a, C;
  w = I(S, [
    [
      "render",
      V
    ]
  ]);
  N = "modulepreload";
  B = function(o, r) {
    return new URL(o, r).href;
  };
  _ = {};
  a = function(r, n, l) {
    let e = Promise.resolve();
    if (n && n.length > 0) {
      const i = document.getElementsByTagName("link"), c = document.querySelector("meta[property=csp-nonce]"), f = (c == null ? void 0 : c.nonce) || (c == null ? void 0 : c.getAttribute("nonce"));
      e = Promise.allSettled(n.map((s) => {
        if (s = B(s, l), s in _) return;
        _[s] = true;
        const u = s.endsWith(".css"), E = u ? '[rel="stylesheet"]' : "";
        if (!!l) for (let p = i.length - 1; p >= 0; p--) {
          const d = i[p];
          if (d.href === s && (!u || d.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${s}"]${E}`)) return;
        const m = document.createElement("link");
        if (m.rel = u ? "stylesheet" : N, u || (m.as = "script"), m.crossOrigin = "", m.href = s, f && m.setAttribute("nonce", f), document.head.appendChild(m), u) return new Promise((p, d) => {
          m.addEventListener("load", p), m.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${s}`)));
        });
      }));
    }
    function t(i) {
      const c = new Event("vite:preloadError", {
        cancelable: true
      });
      if (c.payload = i, window.dispatchEvent(c), !c.defaultPrevented) throw i;
    }
    return e.then((i) => {
      for (const c of i || []) c.status === "rejected" && t(c.reason);
      return r().catch(t);
    });
  };
  C = [
    {
      path: "/",
      name: "root",
      redirect: "/main"
    },
    {
      path: "/screen",
      name: "dataScreen",
      meta: {
        title: "Arktouros-DataScreen"
      },
      component: () => a(() => import("./DataScreen-D3q0dS2r.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]), import.meta.url)
    },
    {
      path: "/main",
      name: "main",
      meta: {
        title: "Arktouros-UI"
      },
      component: () => a(() => import("./DashBoard-BOGl3IYj.js"), __vite__mapDeps([38,4,5,2,1,3,12,15,13,14,16,17,18,10,19,20,21,22,23,34,35,36,39]), import.meta.url),
      redirect: "/main/default",
      children: [
        {
          path: "default",
          name: "default",
          meta: {
            title: "Arktouros|Default"
          },
          component: () => a(() => import("./DashBoardMain-ZfkRlFyJ.js"), __vite__mapDeps([40,2,5,3,15,13,14,16,17,18,10,19,20,21,22,23,34,35,36,41]), import.meta.url)
        },
        {
          path: "service",
          name: "service",
          meta: {
            title: "Arktouros|Service"
          },
          children: [
            {
              path: "table",
              name: "table",
              meta: {
                title: "Arktouros|Service|Table"
              },
              component: () => a(() => import("./ServiceTable-BWqzwjPQ.js"), __vite__mapDeps([42,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,23,3,5,34,35,36,43]), import.meta.url)
            },
            {
              path: "topology",
              name: "topology",
              meta: {
                title: "Arktouros|Service|Topology"
              },
              component: () => a(() => import("./ServiceTopology-BYIKuSVW.js"), __vite__mapDeps([44,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,23,6,24,25,26,1,4,5,3,28,34,35,36,45]), import.meta.url)
            }
          ]
        },
        {
          path: "log",
          name: "log",
          meta: {
            title: "Arktouros|Log"
          },
          component: () => a(() => import("./LogMain-CF9-8OWx.js"), __vite__mapDeps([46,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,23,27,3,28,4,5,47,34,35,36,48]), import.meta.url)
        },
        {
          path: "metric",
          name: "metric",
          meta: {
            title: "Arktouros|Metric"
          },
          component: () => a(() => import("./MetricDashboard-s4XaYKjU.js"), __vite__mapDeps([49,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,23,32,1,24,25,26,28,33,3,5,34,35,36,50]), import.meta.url)
        },
        {
          path: "trace",
          name: "trace",
          meta: {
            title: "Arktouros|Trace"
          },
          children: [
            {
              path: "dashboard",
              name: "traceDashboard",
              meta: {
                title: "Arktouros|Trace|Dashboard"
              },
              component: () => a(() => import("./TraceDashboard-CnFpL48W.js"), __vite__mapDeps([51,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,23,30,3,29,1,28,24,25,26,31,5,34,35,36,52]), import.meta.url)
            },
            {
              path: "timeout",
              name: "traceTimeout",
              meta: {
                title: "Arktouros|Trace|Timeout"
              },
              component: () => a(() => import("./TraceTimeout-Dt7TLjKZ.js"), __vite__mapDeps([53,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,23,30,1,24,25,26,28,4,5,3,34,35,36,54]), import.meta.url)
            }
          ]
        }
      ]
    },
    {
      path: "/404",
      name: "NotFound",
      component: () => a(() => import("./404-D_71Q6yk.js"), __vite__mapDeps([55,3,2,5,15,13,14,16,17,18,10,19,20,21,22,23,34,35,36,56]), import.meta.url),
      meta: {
        title: "\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728"
      }
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404"
    }
  ];
  h = O({
    history: T(),
    routes: C
  });
  h.beforeEach((o, r, n) => (o.meta.title && (document.title = o.meta.title), n()));
  const v = P(w).use(L().use(D)).use(h).use(k, {
    locale: R
  });
  for (const [o, r] of Object.entries(b)) v.component(o, r);
  v.mount("#app");
})();
export {
  I as _,
  __tla,
  h as r
};
