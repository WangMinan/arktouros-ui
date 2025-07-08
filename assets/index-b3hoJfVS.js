import { d as s } from "./pinia-B9sBSOYd.js";
import { r } from "./@vue-ggRZ67L8.js";
const a = s("aside", () => {
  const e = r({ active: "", isCollapse: false });
  return { currentAside: e, resetActive: () => {
    e.value.active = "";
  } };
}, { persist: { storage: sessionStorage, paths: ["currentAside"], key: "currentAside" } });
export {
  a as u
};
