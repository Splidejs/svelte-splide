function T(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(P)}function H(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function st(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function I(t){return Object.keys(t).length===0}function ut(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],l=Math.max(n.dirty.length,r.length);for(let o=0;o<l;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,u){if(r){const l=q(n,e,i,u);t.p(l,r)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function ht(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let v=!1;function W(){v=!0}function G(){v=!1}function J(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:J(1,r,y=>n[e[y]].claim_order,s))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const u=[],l=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);o>=c;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);u.reverse(),l.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<l.length;c++){for(;s<u.length&&l[c].claim_order>=u[s].claim_order;)s++;const a=s<u.length?u[s]:null;t.insertBefore(l[c],a)}}function Q(t,n){if(v){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){v&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function yt(){return A(" ")}function gt(){return A("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function V(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function bt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:V(t,i,n[i])}function $t(t){return t===""?null:+t}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){Y(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Z(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const u=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];e[o.name]||u.push(o.name)}u.forEach(l=>r.removeAttribute(l))},()=>i(n))}function vt(t,n,e){return Z(t,n,e,U)}function tt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function Et(t){return tt(t," ")}function wt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n){t.value=n==null?"":n}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function nt(t,n,e=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e,!1,n),i}let m;function h(t){m=t}function E(){if(!m)throw new Error("Function called outside component initialization");return m}function At(t){E().$$.on_mount.push(t)}function Nt(t){E().$$.after_update.push(t)}function St(){const t=E();return(n,e)=>{const i=t.$$.callbacks[n];if(i){const r=nt(n,e);i.slice().forEach(u=>{u.call(t,r)})}}}function Ct(t,n){E().$$.context.set(t,n)}const d=[],M=[],b=[],O=[],D=Promise.resolve();let k=!1;function L(){k||(k=!0,D.then(z))}function Mt(){return L(),D}function j(t){b.push(t)}const w=new Set;let x=0;function z(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),et(n.$$)}for(h(null),d.length=0,x=0;M.length;)M.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];w.has(e)||(w.add(e),e())}b.length=0}while(d.length);for(;O.length;)O.pop()();k=!1,w.clear(),h(t)}function et(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const $=new Set;let _;function Ot(){_={r:0,c:[],p:_}}function Tt(){_.r||p(_.c),_=_.p}function it(t,n){t&&t.i&&($.delete(t),t.i(n))}function Pt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function qt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const l=t[u],o=n[u];if(o){for(const c in l)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[u]=o}else for(const c in l)r[c]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Dt(t){t&&t.c()}function Lt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:l,after_update:o}=t.$$;r&&r.m(n,e),i||j(()=>{const c=u.map(P).filter(H);l?l.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(j)}function ct(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(d.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,r,u,l,o=[-1]){const c=m;h(t);const s=t.$$={fragment:null,ctx:null,props:u,update:T,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};l&&l(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,y,...N)=>{const S=N.length?N[0]:y;return s.ctx&&r(s.ctx[f],s.ctx[f]=S)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](S),a&&lt(t,f)),y}):[],s.update(),a=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){W();const f=X(n.target);s.fragment&&s.fragment.l(f),f.forEach(R)}else s.fragment&&s.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),G(),z()}h(c)}class Ft{$destroy(){ct(this,1),this.$destroy=T}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{qt as A,Bt as B,ct as C,F as D,Mt as E,ut as F,at as G,_t as H,ft as I,Q as J,pt as K,st as L,xt as M,p as N,kt as O,$t as P,M as Q,z as R,Ft as S,bt as T,ht as U,St as V,dt as W,X as a,V as b,vt as c,R as d,U as e,jt as f,mt as g,tt as h,zt as i,wt as j,yt as k,gt as l,Et as m,T as n,Ot as o,Pt as p,Tt as q,it as r,ot as s,A as t,Ct as u,Nt as v,At as w,Dt as x,Lt as y,rt as z};
