import { b } from "./index-C_VSxqW3.js";
import { i as v } from "./echarts-DuzIGl-8.js";
import { b as S } from "./@vueuse-BrKJyrsM.js";
import { _ } from "./index-Ddllqwnv.js";
import { r as p, b as h, W as w, w as O, c as k, o as z, Q as j, I as E, a as N, ag as x } from "./@vue-CnBZ4jx_.js";
const B = { class: "card-container" }, C = { __name: "ServiceTopologyDiagram", props: { namespace: String, symbolSize: Number, repulsion: Number, edgeLength: Number }, setup(g, { expose: f }) {
  const a = g, c = p([]), d = p([]), u = async () => {
    const e = await b(a.namespace), t = e.result.nodes;
    c.value = t.map((o) => o.nodeObject !== null ? { draggable: true, name: o.nodeObject.name, category: o.nodeObject.status ? 0 : 1, symbolSize: [a.symbolSize, a.symbolSize], item: o, itemStyle: { color: o.nodeObject.status ? "#6EF780" : "#FF2700" } } : null);
    const s = e.result.calls;
    d.value = s.map((o) => o.source === null || o.target === null ? null : { source: o.source.nodeObject.name, target: o.target.nodeObject.name });
  };
  f({ getTopology: u });
  let i;
  h(async () => {
    await u(), m(), window.addEventListener("resize", l), i = new ResizeObserver(() => l), i.observe(document.getElementById("service-topology-dom"));
  }), w(() => {
    window.removeEventListener("resize", l), i.disconnect();
  });
  let n;
  const r = S("theme-appearance", "auto");
  function y(e) {
    const t = e.status ? "\u6B63\u5E38" : "\u8D85\u65F6\u5F02\u5E38\u6216\u79BB\u7EBF", s = e.tags.length === 0 ? "[]" : JSON.stringify(e.tags);
    return `<div>
                    <div>
                        <b>\u5F53\u524DService\u8BE6\u7EC6\u60C5\u51B5</b>
                    </div>
                    <ul>
                        <li>id: ${e.id}</li>
                        <li>\u540D\u79F0: ${e.name}</li>
                        <li>\u547D\u540D\u7A7A\u95F4: ${e.namespace}</li>
                        <li>\u5EF6\u8FDF: ${e.latency} ms</li>
                        <li>\u72B6\u6001: ${t}</li>
                        <li>\u6807\u7B7E: ${s}</li>
                    </ul>
                </div>`;
  }
  const m = () => {
    n && n.dispose();
    let e = { backgroundColor: r.value === "dark" ? "#212224" : "#fff", title: { text: "\u670D\u52A1\u5173\u7CFB\u56FE" }, legend: {}, tooltip: { trigger: "item", triggerOn: "mousemove", backgroundColor: r.value === "dark" ? "#212224" : "#fff", textStyle: { color: r.value === "dark" ? "#fff" : "#212224" }, formatter: function(t) {
      return y(t.data.item.nodeObject);
    } }, label: { normal: { show: true, position: "inside" } }, series: [{ type: "graph", edgeSymbol: ["none", "arrow"], focusNodeAdjacency: true, roam: true, layout: "force", symbol: "circle", data: c.value, links: d.value, label: { normal: { show: true, position: "inside" } }, force: { repulsion: a.repulsion, edgeLength: a.edgeLength, layoutAnimation: true }, animationEasingUpdate: "quinticInOut", animationDurationUpdate: 100, categories: [{ name: "\u670D\u52A1\u5728\u7EBF", itemStyle: { color: "#6EF780" } }, { name: "\u8D85\u65F6\u5F02\u5E38\u6216\u79BB\u7EBF", itemStyle: { color: "#FF2700" } }] }] };
    n = v(document.getElementById("service-topology-dom"), r.value === "dark" ? "dark" : "light"), n.setOption(e);
  }, l = () => {
    n && n.resize();
  };
  return O(r, () => {
    m();
  }), (e, t) => {
    const s = x("el-card");
    return z(), k("div", B, [j(s, null, { default: E(() => t[0] || (t[0] = [N("div", { id: "service-topology-dom" }, null, -1)])), _: 1 })]);
  };
} }, D = _(C, [["__scopeId", "data-v-52702f1e"]]);
export {
  D as S
};
