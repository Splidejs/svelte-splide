import{S as K,i as L,s as M,e as _,t as I,k as S,x as N,c as d,a as g,h as D,d as c,m as E,y as T,b as h,g as $,J as m,z as V,r as y,p as k,C as q,f as O,l as z,o as U,q as j,K as F,L as Q,n as R}from"../../chunks/index-71ff52dc.js";import{S as W,a as X,b as Y}from"../../chunks/SplideSlide-3ecbb5b2.js";import{g as Z}from"../../chunks/generateSlides-2c575ba3.js";function G(u,t,o){const l=u.slice();return l[2]=t[o],l}function ee(u){let t,o,l;return{c(){t=_("img"),l=S(),this.h()},l(e){t=d(e,"IMG",{src:!0,alt:!0}),l=E(e),this.h()},h(){Q(t.src,o=u[2].src)||h(t,"src",o),h(t,"alt",u[2].alt)},m(e,i){$(e,t,i),$(e,l,i)},p:R,d(e){e&&c(t),e&&c(l)}}}function H(u){let t,o;return t=new Y({props:{$$slots:{default:[ee]},$$scope:{ctx:u}}}),{c(){N(t.$$.fragment)},l(l){T(t.$$.fragment,l)},m(l,e){V(t,l,e),o=!0},p(l,e){const i={};e&32&&(i.$$scope={dirty:e,ctx:l}),t.$set(i)},i(l){o||(y(t.$$.fragment,l),o=!0)},o(l){k(t.$$.fragment,l),o=!1},d(l){q(t,l)}}}function te(u){let t,o,l=u[0],e=[];for(let r=0;r<l.length;r+=1)e[r]=H(G(u,l,r));const i=r=>k(e[r],1,1,()=>{e[r]=null});return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=z()},l(r){for(let s=0;s<e.length;s+=1)e[s].l(r);t=z()},m(r,s){for(let a=0;a<e.length;a+=1)e[a].m(r,s);$(r,t,s),o=!0},p(r,s){if(s&1){l=r[0];let a;for(a=0;a<l.length;a+=1){const p=G(r,l,a);e[a]?(e[a].p(p,s),y(e[a],1)):(e[a]=H(p),e[a].c(),y(e[a],1),e[a].m(t.parentNode,t))}for(U(),a=l.length;a<e.length;a+=1)i(a);j()}},i(r){if(!o){for(let s=0;s<l.length;s+=1)y(e[s]);o=!0}},o(r){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)k(e[s]);o=!1},d(r){F(e,r),r&&c(t)}}}function se(u){let t,o,l,e,i,r,s,a,p,P,v,A,x;return o=new X({props:{$$slots:{default:[te]},$$scope:{ctx:u}}}),{c(){t=_("div"),N(o.$$.fragment),l=S(),e=_("div"),i=_("div"),r=S(),s=_("button"),a=_("span"),p=I("Play"),P=S(),v=_("span"),A=I("Pause"),this.h()},l(n){t=d(n,"DIV",{style:!0});var f=g(t);T(o.$$.fragment,f),f.forEach(c),l=E(n),e=d(n,"DIV",{class:!0});var b=g(e);i=d(b,"DIV",{class:!0});var J=g(i);J.forEach(c),b.forEach(c),r=E(n),s=d(n,"BUTTON",{class:!0});var w=g(s);a=d(w,"SPAN",{class:!0});var B=g(a);p=D(B,"Play"),B.forEach(c),P=E(w),v=d(w,"SPAN",{class:!0});var C=g(v);A=D(C,"Pause"),C.forEach(c),w.forEach(c),this.h()},h(){O(t,"position","relative"),h(i,"class","splide__progress__bar"),h(e,"class","splide__progress"),h(a,"class","splide__toggle__play"),h(v,"class","splide__toggle__pause"),h(s,"class","splide__toggle")},m(n,f){$(n,t,f),V(o,t,null),$(n,l,f),$(n,e,f),m(e,i),$(n,r,f),$(n,s,f),m(s,a),m(a,p),m(s,P),m(s,v),m(v,A),x=!0},p(n,f){const b={};f&32&&(b.$$scope={dirty:f,ctx:n}),o.$set(b)},i(n){x||(y(o.$$.fragment,n),x=!0)},o(n){k(o.$$.fragment,n),x=!1},d(n){n&&c(t),q(o),n&&c(l),n&&c(e),n&&c(r),n&&c(s)}}}function le(u){let t,o,l,e,i,r;return i=new W({props:{options:u[1],hasTrack:!1,"aria-labelledby":"autoplay-example-heading",$$slots:{default:[se]},$$scope:{ctx:u}}}),{c(){t=_("div"),o=_("h2"),l=I("Autoplay"),e=S(),N(i.$$.fragment),this.h()},l(s){t=d(s,"DIV",{class:!0});var a=g(t);o=d(a,"H2",{id:!0});var p=g(o);l=D(p,"Autoplay"),p.forEach(c),e=E(a),T(i.$$.fragment,a),a.forEach(c),this.h()},h(){h(o,"id","autoplay-example-heading"),h(t,"class","wrapper")},m(s,a){$(s,t,a),m(t,o),m(o,l),m(t,e),V(i,t,null),r=!0},p(s,[a]){const p={};a&32&&(p.$$scope={dirty:a,ctx:s}),i.$set(p)},i(s){r||(y(i.$$.fragment,s),r=!0)},o(s){k(i.$$.fragment,s),r=!1},d(s){s&&c(t),q(i)}}}function ae(u){return[Z(),{rewind:!0,gap:"1rem",autoplay:!0,arrows:!0,height:"15rem"}]}class ie extends K{constructor(t){super(),L(this,t,ae,le,M,{})}}export{ie as default};
