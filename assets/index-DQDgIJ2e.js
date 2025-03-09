import { d as s } from "./pinia-B3EJDjGG.js";
import { r } from "./@vue-CnBZ4jx_.js";
const a = s("aside", () => {
  const e = r({ active: "", isCollapse: false });
  return { currentAside: e, resetActive: () => {
    e.value.active = "";
  } };
}, { persist: { storage: sessionStorage, paths: ["currentAside"], key: "currentAside" } });
export {
  a as u
};
