import{an as C,r as J,am as N,ad as W,i as E,av as I,t as T,E as U,w as V,Z as X,aw as Y,g as tt,f as nt,n as et,_ as st,k as ot}from"./@vue-CM_iQ-Ml.js";var ct=!1;/*!
* pinia v2.1.7
* (c) 2023 Eduardo San Martin Morote
* @license MIT
*/let Z;const x=t=>Z=t,q=Symbol();function M(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var P;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(P||(P={}));function at(){const t=C(!0),s=t.run(()=>J({}));let e=[],n=[];const a=N({install(r){x(a),a._a=r,r.provide(q,a),r.config.globalProperties.$pinia=a,n.forEach(u=>e.push(u)),n=[]},use(r){return!this._a&&!ct?n.push(r):e.push(r),this},_p:e,_a:null,_e:t,_s:new Map,state:s});return a}const z=()=>{};function B(t,s,e,n=z){t.push(s);const a=()=>{const r=t.indexOf(s);r>-1&&(t.splice(r,1),n())};return!e&&tt()&&nt(a),a}function O(t,...s){t.slice().forEach(e=>{e(...s)})}const rt=t=>t();function k(t,s){t instanceof Map&&s instanceof Map&&s.forEach((e,n)=>t.set(n,e)),t instanceof Set&&s instanceof Set&&s.forEach(t.add,t);for(const e in s){if(!s.hasOwnProperty(e))continue;const n=s[e],a=t[e];M(a)&&M(n)&&t.hasOwnProperty(e)&&!E(n)&&!I(n)?t[e]=k(a,n):t[e]=n}return t}const it=Symbol();function ut(t){return!M(t)||!t.hasOwnProperty(it)}const{assign:y}=Object;function ft(t){return!!(E(t)&&t.effect)}function pt(t,s,e,n){const{state:a,actions:r,getters:u}=s,i=e.state.value[t];let $;function h(){i||(e.state.value[t]=a?a():{});const d=st(e.state.value[t]);return y(d,r,Object.keys(u||{}).reduce((b,v)=>(b[v]=N(ot(()=>{x(e);const _=e._s.get(t);return u[v].call(_,_)})),b),{}))}return $=D(t,h,s,e,n,!0),$}function D(t,s,e={},n,a,r){let u;const i=y({actions:{}},e),$={deep:!0};let h,d,b=[],v=[],_;const m=n.state.value[t];!r&&!m&&(n.state.value[t]={}),J({});let A;function F(c){let o;h=d=!1,typeof c=="function"?(c(n.state.value[t]),o={type:P.patchFunction,storeId:t,events:_}):(k(n.state.value[t],c),o={type:P.patchObject,payload:c,storeId:t,events:_});const l=A=Symbol();et().then(()=>{A===l&&(h=!0)}),d=!0,O(b,o,n.state.value[t])}const G=r?function(){const{state:c}=e,o=c?c():{};this.$patch(l=>{y(l,o)})}:z;function H(){u.stop(),b=[],v=[],n._s.delete(t)}function K(c,o){return function(){x(n);const l=Array.from(arguments),j=[],w=[];function Q(f){j.push(f)}function R(f){w.push(f)}O(v,{args:l,name:c,store:p,after:Q,onError:R});let S;try{S=o.apply(this&&this.$id===t?this:p,l)}catch(f){throw O(w,f),f}return S instanceof Promise?S.then(f=>(O(j,f),f)).catch(f=>(O(w,f),Promise.reject(f))):(O(j,S),S)}}const L={_p:n,$id:t,$onAction:B.bind(null,v),$patch:F,$reset:G,$subscribe(c,o={}){const l=B(b,c,o.detached,()=>j()),j=u.run(()=>V(()=>n.state.value[t],w=>{(o.flush==="sync"?d:h)&&c({storeId:t,type:P.direct,events:_},w)},y({},$,o)));return l},$dispose:H},p=X(L);n._s.set(t,p);const g=(n._a&&n._a.runWithContext||rt)(()=>n._e.run(()=>(u=C()).run(s)));for(const c in g){const o=g[c];if(E(o)&&!ft(o)||I(o))r||(m&&ut(o)&&(E(o)?o.value=m[c]:k(o,m[c])),n.state.value[t][c]=o);else if(typeof o=="function"){const l=K(c,o);g[c]=l,i.actions[c]=o}}return y(p,g),y(W(p),g),Object.defineProperty(p,"$state",{get:()=>n.state.value[t],set:c=>{F(o=>{y(o,c)})}}),n._p.forEach(c=>{y(p,u.run(()=>c({store:p,app:n._a,pinia:n,options:i})))}),m&&r&&e.hydrate&&e.hydrate(p.$state,m),h=!0,d=!0,p}function lt(t,s,e){let n,a;const r=typeof s=="function";n=t,a=r?e:s;function u(i,$){const h=Y();return i=i||(h?U(q,null):null),i&&x(i),i=Z,i._s.has(n)||(r?D(n,s,a,i):pt(n,a,i)),i._s.get(n)}return u.$id=n,u}function ht(t){{t=W(t);const s={};for(const e in t){const n=t[e];(E(n)||I(n))&&(s[e]=T(t,e))}return s}}export{at as c,lt as d,ht as s};
