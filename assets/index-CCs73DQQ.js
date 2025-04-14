import { a as c } from "./axios-t--hEgTQ.js";
import { N as n } from "./nprogress-Bhg-JNl3.js";
import { r as s } from "./index-BwJ3HXHG.js";
import { a as u } from "./arktourosUiConfigUtil-0zbcKwuZ.js";
import { E as t } from "./element-plus-hbUA32rR.js";
n.configure({ easing: "ease", speed: 1e3, showSpinner: false, trickleSpeed: 200, minimum: 0.3, parent: "body" });
const l = () => {
  n.start();
}, o = () => {
  n.done();
}, a = c.create({ baseURL: u() });
a.interceptors.request.use((e) => (l(), e), (e) => Promise.reject(e));
a.interceptors.response.use(async (e) => {
  if (o(), e.data.code === void 0) t.error("\u540E\u7AEF\u670D\u52A1\u5668\u5F02\u5E38,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458");
  else switch (e.data.code) {
    case 2e3:
      return e;
    case 400:
      return t.error(e.data.msg), Promise.reject(e);
    case 4040:
      t.error("\u60A8\u7684\u8BF7\u6C42\u7684\u8D44\u6E90\u4E0D\u5B58\u5728,\u5F53\u524D\u9875\u9762\u5C06\u88AB\u5237\u65B0"), s.push(s.currentRoute.value.fullPath).then((r) => r);
      break;
    case 5e3:
      t.error("\u540E\u7AEF\u670D\u52A1\u5F02\u5E38,\u5F53\u524D\u9875\u9762\u5C06\u88AB\u5237\u65B0,\u82E5\u65E0\u6548\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"), s.push(s.currentRoute.value.fullPath).then((r) => r);
      break;
    default:
      return e;
  }
}, (e) => (o(), t.error("\u540E\u7AEF\u670D\u52A1\u5668\u5F02\u5E38,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"), Promise.reject(e)));
const f = async (e) => {
  try {
    const { data: r } = await a.get("/service/namespaces", { params: { query: e } });
    return r.code !== null && r.code === 2e3 ? r : r.code !== null ? (t.error(`\u83B7\u53D6\u547D\u540D\u7A7A\u95F4\u5217\u8868\u5931\u8D25, ${r.message}`), null) : (t.error("\u83B7\u53D6\u547D\u540D\u7A7A\u95F4\u5217\u8868\u5931\u8D25"), null);
  } catch (r) {
    t.error(`\u83B7\u53D6\u547D\u540D\u7A7A\u95F4\u5217\u8868\u5931\u8D25, ${r.message}`);
  }
  return null;
}, h = async (e) => {
  try {
    const { data: r } = await a.get("/services", { params: { query: e.query, namespace: e.namespace, pageNum: e.pageNum, pageSize: e.pageSize } });
    return r.code !== null && r.code === 2e3 ? r : r.code !== null ? (t.error(`\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25, ${r.message}`), null) : (t.error("\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25"), null);
  } catch (r) {
    t.error(`\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25, ${r.message}`);
  }
  return null;
}, y = async (e) => {
  try {
    e || (e = "default");
    const { data: r } = await a.get("/service/topology", { params: { namespace: e } });
    return r.code !== null && r.code === 2e3 ? r : r.code !== null ? (t.error(`\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25, ${r.message}`), null) : (t.error("\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25"), null);
  } catch (r) {
    t.error(`\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25, ${r.message}`);
  }
  return null;
}, v = async () => {
  try {
    const { data: e } = await a.get("/service/time-range", {});
    if (e.code !== null && e.code === 2e3) return e;
    if (e.code !== null) return t.error(`\u83B7\u53D6\u670D\u52A1\u65F6\u95F4\u8303\u56F4\u5931\u8D25, ${e.message}`), null;
  } catch (e) {
    t.error(`\u83B7\u53D6\u670D\u52A1\u65F6\u95F4\u8303\u56F4\u5931\u8D25, ${e.message}`);
  }
  return null;
};
export {
  a as _,
  f as a,
  v as b,
  y as c,
  h as g
};
