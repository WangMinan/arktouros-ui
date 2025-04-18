import { c as S } from "./index-C9YZnyy9.js";
import { i as h } from "./echarts-DuzIGl-8.js";
import { b as w } from "./@vueuse-BrKJyrsM.js";
import { a as k } from "./element-plus-hbUA32rR.js";
import { r as m, b as O, W as E, w as C, c as z, o as j } from "./@vue-CnBZ4jx_.js";
const _ = { id: "service-topology-dom" }, B = { __name: "ServiceTopologyDiagram", props: { namespace: String, symbolSize: Number, repulsion: Number, edgeLength: Number }, setup(g, { expose: p }) {
  const a = g, u = m([]), d = m([]), y = async (e) => {
    let n = k.service({ lock: true, text: "\u6B63\u5728\u751F\u6210\u670D\u52A1\u62D3\u6251\uFF0C\u8BF7\u7B49\u5F85\u3002", background: "rgba(0, 0, 0, 0.7)" });
    try {
      const r = await S(a.namespace, e), f = r.result.nodes;
      u.value = f.map((t) => t.nodeObject !== null ? { draggable: true, name: t.nodeObject.name, category: t.nodeObject.status ? 0 : 1, symbolSize: [a.symbolSize, a.symbolSize], item: t, itemStyle: { color: t.nodeObject.status ? "#C7EDCC" : "#FF2700", borderColor: t.nodeObject.status ? "#6EF780" : "#FFEE00" } } : null);
      const v = r.result.calls;
      d.value = v.map((t) => t.source === null || t.target === null ? null : { source: t.source.nodeObject.name, target: t.target.nodeObject.name });
    } finally {
      n.close();
    }
  };
  let i;
  O(async () => {
    await l(), window.addEventListener("resize", c), i = new ResizeObserver(() => c), i.observe(document.getElementById("service-topology-dom"));
  }), E(() => {
    window.removeEventListener("resize", c), i.disconnect();
  });
  let o;
  const s = w("theme-appearance", "auto");
  function b(e) {
    const n = e.status ? "\u6B63\u5E38" : "\u8D85\u65F6\u5F02\u5E38\u6216\u79BB\u7EBF", r = e.tags.length === 0 ? "[]" : JSON.stringify(e.tags);
    return `<div>
                    <div>
                        <b>\u5F53\u524DService\u8BE6\u7EC6\u60C5\u51B5</b>
                    </div>
                    <ul>
                        <li>id: ${e.id}</li>
                        <li>\u540D\u79F0: ${e.name}</li>
                        <li>\u547D\u540D\u7A7A\u95F4: ${e.namespace}</li>
                        <li>\u5EF6\u8FDF: ${e.latency} ms</li>
                        <li>\u72B6\u6001: ${n}</li>
                        <li>\u6807\u7B7E: ${r}</li>
                    </ul>
                </div>`;
  }
  const l = async (e) => {
    await y(e), o && o.dispose();
    let n = { backgroundColor: s.value === "dark" ? "#212224" : "#fff", title: { text: "\u670D\u52A1\u5173\u7CFB\u56FE" }, legend: {}, tooltip: { trigger: "item", triggerOn: "mousemove", backgroundColor: s.value === "dark" ? "#212224" : "#fff", textStyle: { color: s.value === "dark" ? "#fff" : "#212224" }, formatter: function(r) {
      return b(r.data.item.nodeObject);
    } }, label: { normal: { show: true, position: "inside" } }, series: [{ type: "graph", edgeSymbol: ["none", "arrow"], focusNodeAdjacency: true, roam: true, layout: "force", symbol: "circle", data: u.value, links: d.value, label: { normal: { show: true, position: "inside" } }, force: { repulsion: a.repulsion, edgeLength: a.edgeLength, layoutAnimation: true }, animationEasingUpdate: "quinticInOut", animationDurationUpdate: 100, categories: [{ name: "\u670D\u52A1\u5728\u7EBF", itemStyle: { color: "#C7EDCC" } }, { name: "\u8D85\u65F6\u5F02\u5E38\u6216\u79BB\u7EBF", itemStyle: { color: "#FF2700" } }] }] };
    o = h(document.getElementById("service-topology-dom"), s.value === "dark" ? "dark" : "light"), o.setOption(n);
  }, c = () => {
    o && o.resize();
  };
  return C(s, async () => {
    await l();
  }), p({ drawServiceTopology: l }), (e, n) => (j(), z("div", _));
} };
export {
  B as _
};
