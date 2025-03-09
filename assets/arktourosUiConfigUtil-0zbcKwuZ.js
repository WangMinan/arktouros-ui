function n(o) {
  return window.hasOwnProperty("arktourosUiConfig") ? window.arktourosUiConfig[o] : null;
}
function r() {
  return console.log(n("VITE_BASE_URL")), n("VITE_BASE_URL") ? n("VITE_BASE_URL") : "http://10.68.115.112:50050/api/v0";
}
function t() {
  return console.log(n("VITE_BIG_SCREEN_URL")), n("VITE_BIG_SCREEN_URL") ? n("VITE_BIG_SCREEN_URL") : "http://10.68.115.112:50053";
}
export {
  r as a,
  t as g
};
