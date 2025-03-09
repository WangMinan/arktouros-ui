const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DataScreen-ChNBm1ip.js","./@vueuse-BrKJyrsM.js","./@vue-CnBZ4jx_.js","./vue-router-DZ3MrWk1.js","./index-DQDgIJ2e.js","./pinia-B3EJDjGG.js","./ServiceTopologyDiagram-CG1fzdgT.js","./index-BPCCi87A.js","./axios-BtuGy7By.js","./nprogress-Dx41icWA.js","./dayjs-B_aAqRSu.js","./nprogress-BgDCIyLK.css","./arktourosUiConfigUtil-0zbcKwuZ.js","./element-plus-ChqUdKh3.js","./lodash-es-C-xrcuFl.js","./@element-plus-Rv25Faa4.js","./@popperjs-DB1lLFnh.js","./@ctrl-r5W6hzzQ.js","./async-validator-CRx4dHSJ.js","./memoize-one-BdPwpGay.js","./normalize-wheel-es-BQoi3Ox2.js","./@floating-ui-BCLhozDd.js","./element-plus-CiRujH-w.css","./echarts-DuzIGl-8.js","./tslib-BDyQ-Jie.js","./zrender-Cg4aFrUj.js","./ServiceTopologyDiagram-DW2JPl9k.css","./index-CfJzNW8w.js","./dateUtil-NlCD2qvi.js","./TraceTopologyDiagram-BcpBfgqL.js","./index-kdN5_kf3.js","./TraceTopologyDiagram-Ckoi2_UH.css","./MetricDiagram-69UD443s.js","./MetricDiagram-CvbIfpNR.css","./pinia-plugin-persistedstate-8SpmOswp.js","./destr-CVtkxrq9.js","./deep-pick-omit-CegYQlcN.js","./DataScreen-lWE-J5Rz.css","./DashBoard-uTWAKZn6.js","./DashBoard-CcSqpmFN.css","./DashBoardMain-Bhgvcpqn.js","./DashBoardMain-CyZrpX6P.css","./ServiceTable-DWuVXjmR.js","./ServiceTable-D_DVADUB.css","./ServiceTopology-BiZmXEGA.js","./ServiceTopology-BOalK92K.css","./LogMain-C-FjoznH.js","./LogMain-UgsBxROX.css","./MetricDashboard-CW-R_BCw.js","./MetricDashboard-CQY3QMOf.css","./TraceDashboard-DomSJ4OV.js","./TraceDashboard-gkSiKxC1.css","./TraceTimeout-DBKR6rqj.js","./TraceTimeout-DLZW8Fma.css","./404-tY_SBrbZ.js","./404-DAXvqb-w.css"])))=>i.map(i=>d[i]);
import { H as A, ag as y, o as g, at as P } from "./@vue-CnBZ4jx_.js";
import { c as L } from "./pinia-B3EJDjGG.js";
import { c as O, a as T } from "./vue-router-DZ3MrWk1.js";
import { Q as b } from "./@element-plus-Rv25Faa4.js";
import { i as k, z as R } from "./element-plus-ChqUdKh3.js";
import { s as D } from "./pinia-plugin-persistedstate-8SpmOswp.js";
import "./lodash-es-C-xrcuFl.js";
import "./@popperjs-DB1lLFnh.js";
import "./@ctrl-r5W6hzzQ.js";
import "./dayjs-B_aAqRSu.js";
import "./async-validator-CRx4dHSJ.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BCLhozDd.js";
import "./destr-CVtkxrq9.js";
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
      component: () => a(() => import("./DataScreen-ChNBm1ip.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]), import.meta.url)
    },
    {
      path: "/main",
      name: "main",
      meta: {
        title: "Arktouros-UI"
      },
      component: () => a(() => import("./DashBoard-uTWAKZn6.js"), __vite__mapDeps([38,4,5,2,1,3,12,15,13,14,16,17,10,18,19,20,21,22,34,35,36,39]), import.meta.url),
      redirect: "/main/default",
      children: [
        {
          path: "default",
          name: "default",
          meta: {
            title: "Arktouros|Default"
          },
          component: () => a(() => import("./DashBoardMain-Bhgvcpqn.js"), __vite__mapDeps([40,2,5,3,15,13,14,16,17,10,18,19,20,21,22,34,35,36,41]), import.meta.url)
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
              component: () => a(() => import("./ServiceTable-DWuVXjmR.js"), __vite__mapDeps([42,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,3,5,34,35,36,43]), import.meta.url)
            },
            {
              path: "topology",
              name: "topology",
              meta: {
                title: "Arktouros|Service|Topology"
              },
              component: () => a(() => import("./ServiceTopology-BiZmXEGA.js"), __vite__mapDeps([44,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,6,23,24,25,1,26,5,3,34,35,36,45]), import.meta.url)
            }
          ]
        },
        {
          path: "log",
          name: "log",
          meta: {
            title: "Arktouros|Log"
          },
          component: () => a(() => import("./LogMain-C-FjoznH.js"), __vite__mapDeps([46,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,27,3,28,4,5,34,35,36,47]), import.meta.url)
        },
        {
          path: "metric",
          name: "metric",
          meta: {
            title: "Arktouros|Metric"
          },
          component: () => a(() => import("./MetricDashboard-CW-R_BCw.js"), __vite__mapDeps([48,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,32,1,23,24,25,28,33,3,5,34,35,36,49]), import.meta.url)
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
              component: () => a(() => import("./TraceDashboard-DomSJ4OV.js"), __vite__mapDeps([50,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,30,3,29,1,28,23,24,25,31,5,34,35,36,51]), import.meta.url)
            },
            {
              path: "timeout",
              name: "traceTimeout",
              meta: {
                title: "Arktouros|Trace|Timeout"
              },
              component: () => a(() => import("./TraceTimeout-DBKR6rqj.js"), __vite__mapDeps([52,7,8,9,10,11,12,13,2,14,15,16,17,18,19,20,21,22,30,1,23,24,25,28,4,5,3,34,35,36,53]), import.meta.url)
            }
          ]
        }
      ]
    },
    {
      path: "/404",
      name: "NotFound",
      component: () => a(() => import("./404-tY_SBrbZ.js"), __vite__mapDeps([54,3,2,5,15,13,14,16,17,10,18,19,20,21,22,34,35,36,55]), import.meta.url),
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
