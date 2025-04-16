import { c as f } from "./index-CsOYTb4P.js";
import { i as v } from "./echarts-DuzIGl-8.js";
import { b as S } from "./@vueuse-BrKJyrsM.js";
import { r as g, b as h, W as w, w as O, c as k, o as z } from "./@vue-CnBZ4jx_.js";
const _ = { id: "service-topology-dom" }, $ = { __name: "ServiceTopologyDiagram", props: { namespace: String, symbolSize: Number, repulsion: Number, edgeLength: Number }, setup(p, { expose: y }) {
  const r = p, c = g([]), u = g([]), m = async () => {
    const e = await f(r.namespace), n = e.result.nodes;
    c.value = n.map((t) => t.nodeObject !== null ? { draggable: true, name: t.nodeObject.name, category: t.nodeObject.status ? 0 : 1, symbolSize: [r.symbolSize, r.symbolSize], item: t, itemStyle: { color: t.nodeObject.status ? "#6EF780" : "#FF2700" } } : null);
    const l = e.result.calls;
    u.value = l.map((t) => t.source === null || t.target === null ? null : { source: t.source.nodeObject.name, target: t.target.nodeObject.name });
  };
  y({ getTopology: m });
  let s;
  h(async () => {
    await m(), d(), window.addEventListener("resize", i), s = new ResizeObserver(() => i), s.observe(document.getElementById("service-topology-dom"));
  }), w(() => {
    window.removeEventListener("resize", i), s.disconnect();
  });
  let o;
  const a = S("theme-appearance", "auto");
  function b(e) {
    const n = e.status ? "\u6B63\u5E38" : "\u8D85\u65F6\u5F02\u5E38\u6216\u79BB\u7EBF", l = e.tags.length === 0 ? "[]" : JSON.stringify(e.tags);
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
                        <li>\u6807\u7B7E: ${l}</li>
                    </ul>
                </div>`;
  }
  const d = () => {
    o && o.dispose();
    let e = { backgroundColor: a.value === "dark" ? "#212224" : "#fff", title: { text: "\u670D\u52A1\u5173\u7CFB\u56FE" }, legend: {}, tooltip: { trigger: "item", triggerOn: "mousemove", backgroundColor: a.value === "dark" ? "#212224" : "#fff", textStyle: { color: a.value === "dark" ? "#fff" : "#212224" }, formatter: function(n) {
      return b(n.data.item.nodeObject);
    } }, label: { normal: { show: true, position: "inside" } }, series: [{ type: "graph", edgeSymbol: ["none", "arrow"], focusNodeAdjacency: true, roam: true, layout: "force", symbol: "circle", data: c.value, links: u.value, label: { normal: { show: true, position: "inside" } }, force: { repulsion: r.repulsion, edgeLength: r.edgeLength, layoutAnimation: true }, animationEasingUpdate: "quinticInOut", animationDurationUpdate: 100, categories: [{ name: "\u670D\u52A1\u5728\u7EBF", itemStyle: { color: "#6EF780" } }, { name: "\u8D85\u65F6\u5F02\u5E38\u6216\u79BB\u7EBF", itemStyle: { color: "#FF2700" } }] }] };
    o = v(document.getElementById("service-topology-dom"), a.value === "dark" ? "dark" : "light"), o.setOption(e);
  }, i = () => {
    o && o.resize();
  };
  return O(a, () => {
    d();
  }), (e, n) => (z(), k("div", _));
} };
export {
  $ as _
};
