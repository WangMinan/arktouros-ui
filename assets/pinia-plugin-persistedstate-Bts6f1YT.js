function y(r){return typeof r=="object"&&r!==null}function p(r,t){return r=y(r)?r:Object.create(null),new Proxy(r,{get(s,o,e){return o==="key"?Reflect.get(s,o,e):Reflect.get(s,o,e)||Reflect.get(t,o,e)}})}function h(r,t){return t.reduce((s,o)=>s==null?void 0:s[o],r)}function b(r,t,s){return t.slice(0,-1).reduce((o,e)=>/^(__proto__)$/.test(e)?{}:o[e]=o[e]||{},r)[t[t.length-1]]=s,r}function R(r,t){return t.reduce((s,o)=>{const e=o.split(".");return b(s,e,h(r,e))},{})}function $(r,t){return s=>{var o;try{const{storage:e=localStorage,beforeRestore:n=void 0,afterRestore:c=void 0,serializer:i={serialize:JSON.stringify,deserialize:JSON.parse},key:a=t.$id,paths:l=null,debug:u=!1}=s;return{storage:e,beforeRestore:n,afterRestore:c,serializer:i,key:((o=r.key)!=null?o:f=>f)(typeof a=="string"?a:a(t.$id)),paths:l,debug:u}}catch(e){return s.debug&&console.error("[pinia-plugin-persistedstate]",e),null}}}function d(r,{storage:t,serializer:s,key:o,debug:e}){try{const n=t==null?void 0:t.getItem(o);n&&r.$patch(s==null?void 0:s.deserialize(n))}catch(n){e&&console.error("[pinia-plugin-persistedstate]",n)}}function g(r,{storage:t,serializer:s,key:o,paths:e,debug:n}){try{const c=Array.isArray(e)?R(r,e):r;t.setItem(o,s.serialize(c))}catch(c){n&&console.error("[pinia-plugin-persistedstate]",c)}}function z(r={}){return t=>{const{auto:s=!1}=r,{options:{persist:o=s},store:e,pinia:n}=t;if(!o)return;if(!(e.$id in n.state.value)){const i=n._s.get(e.$id.replace("__hot:",""));i&&Promise.resolve().then(()=>i.$persist());return}const c=(Array.isArray(o)?o.map(i=>p(i,r)):[p(o,r)]).map($(r,e)).filter(Boolean);e.$persist=()=>{c.forEach(i=>{g(e.$state,i)})},e.$hydrate=({runHooks:i=!0}={})=>{c.forEach(a=>{const{beforeRestore:l,afterRestore:u}=a;i&&(l==null||l(t)),d(e,a),i&&(u==null||u(t))})},c.forEach(i=>{const{beforeRestore:a,afterRestore:l}=i;a==null||a(t),d(e,i),l==null||l(t),e.$subscribe((u,f)=>{g(f,i)},{detached:!0})})}}var _=z();export{_ as s};