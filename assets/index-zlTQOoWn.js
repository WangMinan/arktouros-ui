import { a as u } from "./axios-t--hEgTQ.js";
import { N as n } from "./nprogress-Dx41icWA.js";
import { r as s } from "./index-Bhs3FTqI.js";
import { a as c } from "./arktourosUiConfigUtil-0zbcKwuZ.js";
import { E as t } from "./element-plus-BzJ0EF8k.js";
n.configure({ easing: "ease", speed: 1e3, showSpinner: false, trickleSpeed: 200, minimum: 0.3, parent: "body" });
const l = () => {
  n.start();
}, o = () => {
  n.done();
}, a = u.create({ baseURL: c() });
a.interceptors.request.use((r) => (l(), r), (r) => Promise.reject(r));
a.interceptors.response.use(async (r) => {
  if (o(), r.data.code === void 0) t.error("\u540E\u7AEF\u670D\u52A1\u5668\u5F02\u5E38,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458");
  else switch (r.data.code) {
    case 2e3:
      return r;
    case 400:
      return t.error(r.data.msg), Promise.reject(r);
    case 4040:
      t.error("\u60A8\u7684\u8BF7\u6C42\u7684\u8D44\u6E90\u4E0D\u5B58\u5728,\u5F53\u524D\u9875\u9762\u5C06\u88AB\u5237\u65B0"), s.push(s.currentRoute.value.fullPath).then((e) => e);
      break;
    case 5e3:
      t.error("\u540E\u7AEF\u670D\u52A1\u5F02\u5E38,\u5F53\u524D\u9875\u9762\u5C06\u88AB\u5237\u65B0,\u82E5\u65E0\u6548\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"), s.push(s.currentRoute.value.fullPath).then((e) => e);
      break;
    default:
      return r;
  }
}, (r) => (o(), t.error("\u540E\u7AEF\u670D\u52A1\u5668\u5F02\u5E38,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"), Promise.reject(r)));
const f = async (r) => {
  try {
    const { data: e } = await a.get("/service/namespaces", { params: { query: r } });
    return e.code !== null && e.code === 2e3 ? e : e.code !== null ? (t.error(`\u83B7\u53D6\u547D\u540D\u7A7A\u95F4\u5217\u8868\u5931\u8D25, ${e.message}`), null) : (t.error("\u83B7\u53D6\u547D\u540D\u7A7A\u95F4\u5217\u8868\u5931\u8D25"), null);
  } catch (e) {
    t.error(`\u83B7\u53D6\u547D\u540D\u7A7A\u95F4\u5217\u8868\u5931\u8D25, ${e.message}`);
  }
  return null;
}, h = async (r) => {
  try {
    const { data: e } = await a.get("/services", { params: { query: r.query, namespace: r.namespace, pageNum: r.pageNum, pageSize: r.pageSize } });
    return e.code !== null && e.code === 2e3 ? e : e.code !== null ? (t.error(`\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25, ${e.message}`), null) : (t.error("\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25"), null);
  } catch (e) {
    t.error(`\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25, ${e.message}`);
  }
  return null;
}, y = async (r) => {
  try {
    r || (r = "default");
    const { data: e } = await a.get("/service/topology", { params: { namespace: r } });
    return e.code !== null && e.code === 2e3 ? e : e.code !== null ? (t.error(`\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25, ${e.message}`), null) : (t.error("\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25"), null);
  } catch (e) {
    t.error(`\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25, ${e.message}`);
  }
  return null;
};
export {
  a as _,
  f as a,
  y as b,
  h as g
};
