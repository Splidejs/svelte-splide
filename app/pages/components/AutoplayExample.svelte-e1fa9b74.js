import{S as N,i as O,s as q,e as _,t as k,k as S,j,c as d,a as m,g as w,d as c,n as y,m as D,b as h,f as $,H as p,o as P,x as v,u as E,v as T,l as V,r as U,w as C,J as G,K as J,I as K}from"../../chunks/vendor-cdeceb07.js";import{S as M,a as W}from"../../chunks/SplideSlide-013cd6ce.js";import{g as z}from"../../chunks/generateSlides-2c575ba3.js";function A(i,t,o){const s=i.slice();return s[2]=t[o],s}function F(i){let t,o,s;return{c(){t=_("img"),s=S(),this.h()},l(e){t=d(e,"IMG",{src:!0,alt:!0}),s=y(e),this.h()},h(){J(t.src,o=i[2].src)||h(t,"src",o),h(t,"alt",i[2].alt)},m(e,n){$(e,t,n),$(e,s,n)},p:K,d(e){e&&c(t),e&&c(s)}}}function B(i){let t,o;return t=new W({props:{$$slots:{default:[F]},$$scope:{ctx:i}}}),{c(){j(t.$$.fragment)},l(s){D(t.$$.fragment,s)},m(s,e){P(t,s,e),o=!0},p(s,e){const n={};e&32&&(n.$$scope={dirty:e,ctx:s}),t.$set(n)},i(s){o||(v(t.$$.fragment,s),o=!0)},o(s){E(t.$$.fragment,s),o=!1},d(s){T(t,s)}}}function L(i){let t,o,s=i[0],e=[];for(let a=0;a<s.length;a+=1)e[a]=B(A(i,s,a));const n=a=>E(e[a],1,1,()=>{e[a]=null});return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=V()},l(a){for(let r=0;r<e.length;r+=1)e[r].l(a);t=V()},m(a,r){for(let l=0;l<e.length;l+=1)e[l].m(a,r);$(a,t,r),o=!0},p(a,r){if(r&1){s=a[0];let l;for(l=0;l<s.length;l+=1){const u=A(a,s,l);e[l]?(e[l].p(u,r),v(e[l],1)):(e[l]=B(u),e[l].c(),v(e[l],1),e[l].m(t.parentNode,t))}for(U(),l=s.length;l<e.length;l+=1)n(l);C()}},i(a){if(!o){for(let r=0;r<s.length;r+=1)v(e[r]);o=!0}},o(a){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)E(e[r]);o=!1},d(a){G(e,a),a&&c(t)}}}function Q(i){let t,o,s,e,n,a,r,l,u;return{c(){t=_("div"),o=_("div"),s=S(),e=_("div"),n=_("button"),a=k("Play"),r=S(),l=_("button"),u=k("Pause"),this.h()},l(f){t=d(f,"DIV",{class:!0});var g=m(t);o=d(g,"DIV",{class:!0});var H=m(o);H.forEach(c),g.forEach(c),s=y(f),e=d(f,"DIV",{class:!0});var b=m(e);n=d(b,"BUTTON",{class:!0});var x=m(n);a=w(x,"Play"),x.forEach(c),r=y(b),l=d(b,"BUTTON",{class:!0});var I=m(l);u=w(I,"Pause"),I.forEach(c),b.forEach(c),this.h()},h(){h(o,"class","splide__progress__bar"),h(t,"class","splide__progress"),h(n,"class","splide__play"),h(l,"class","splide__pause"),h(e,"class","splide__autoplay")},m(f,g){$(f,t,g),p(t,o),$(f,s,g),$(f,e,g),p(e,n),p(n,a),p(e,r),p(e,l),p(l,u)},d(f){f&&c(t),f&&c(s),f&&c(e)}}}function R(i){let t,o,s,e,n,a;return n=new M({props:{options:i[1],hasSliderWrapper:!0,$$slots:{"after-slider":[Q],default:[L]},$$scope:{ctx:i}}}),{c(){t=_("div"),o=_("h2"),s=k("Autoplay"),e=S(),j(n.$$.fragment),this.h()},l(r){t=d(r,"DIV",{class:!0});var l=m(t);o=d(l,"H2",{});var u=m(o);s=w(u,"Autoplay"),u.forEach(c),e=y(l),D(n.$$.fragment,l),l.forEach(c),this.h()},h(){h(t,"class","wrapper")},m(r,l){$(r,t,l),p(t,o),p(o,s),p(t,e),P(n,t,null),a=!0},p(r,[l]){const u={};l&32&&(u.$$scope={dirty:l,ctx:r}),n.$set(u)},i(r){a||(v(n.$$.fragment,r),a=!0)},o(r){E(n.$$.fragment,r),a=!1},d(r){r&&c(t),T(n)}}}function X(i){return[z(),{rewind:!0,gap:"1rem",autoplay:!0,pauseOnHover:!1,arrows:"slider",height:"15rem"}]}class te extends N{constructor(t){super();O(this,t,X,R,q,{})}}export{te as default};
