var i=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function a(t,r){return!!(t===r||i(t)&&i(r))}function f(t,r){if(t.length!==r.length)return!1;for(var n=0;n<t.length;n++)if(!a(t[n],r[n]))return!1;return!0}function o(t,r){r===void 0&&(r=f);var n=null;function l(){for(var u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];if(n&&n.lastThis===this&&r(u,n.lastArgs))return n.lastResult;var e=t.apply(this,u);return n={lastResult:e,lastArgs:u,lastThis:this},e}return l.clear=function(){n=null},l}export{o as m};
