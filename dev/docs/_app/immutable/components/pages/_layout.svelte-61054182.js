import{S as C,i as M,s as P,k as w,a as H,q as k,l as m,m as g,h as u,c as V,r as D,n as S,b as R,C as l,D as B,B as A,E as Q,p as W,u as G,F as X,G as Y,H as Z,I as x,w as j,x as F,y as J,J as ee,K as te,L as se,M as ne,f as N,t as z,z as K}from"../../chunks/index-51b99f04.js";function ae(n){let e,t,a,_,d,o,f,r,b,p,y,v,I,$,T;return{c(){e=w("nav"),t=w("div"),a=w("button"),_=H(),d=w("h3"),o=k("LOGO HERE"),f=H(),r=w("div"),b=w("a"),p=w("i"),y=H(),v=w("a"),I=w("i"),this.h()},l(h){e=m(h,"NAV",{class:!0});var s=g(e);t=m(s,"DIV",{class:!0});var i=g(t);a=m(i,"BUTTON",{class:!0}),g(a).forEach(u),i.forEach(u),_=V(s),d=m(s,"H3",{class:!0});var E=g(d);o=D(E,"LOGO HERE"),E.forEach(u),f=V(s),r=m(s,"DIV",{class:!0});var c=g(r);b=m(c,"A",{class:!0,href:!0});var q=g(b);p=m(q,"I",{}),g(p).forEach(u),q.forEach(u),y=V(c),v=m(c,"A",{class:!0,href:!0});var O=g(v);I=m(O,"I",{}),g(I).forEach(u),O.forEach(u),c.forEach(u),s.forEach(u),this.h()},h(){S(a,"class","item bi bi-list svelte-1lyd04n"),S(t,"class","left svelte-1lyd04n"),S(d,"class","logo m-0"),S(b,"class","item bi bi-github svelte-1lyd04n"),S(b,"href","./"),S(v,"class","item bi bi-moon svelte-1lyd04n"),S(v,"href","./"),S(r,"class","right svelte-1lyd04n"),S(e,"class","svelte-1lyd04n")},m(h,s){R(h,e,s),l(e,t),l(t,a),l(e,_),l(e,d),l(d,o),l(e,f),l(e,r),l(r,b),l(b,p),l(r,y),l(r,v),l(v,I),$||(T=B(a,"click",n[0]),$=!0)},p:A,i:A,o:A,d(h){h&&u(e),$=!1,T()}}}function le(n,e,t){let{showSidenav:a=!0}=e;function _(){t(1,a=!a),console.log("showSidenav:",a)}return n.$$set=d=>{"showSidenav"in d&&t(1,a=d.showSidenav)},[_,a]}class oe extends C{constructor(e){super(),M(this,e,le,ae,P,{showSidenav:1})}}function ie(n){let e,t,a,_,d,o,f,r,b,p,y,v,I,$,T,h,s;return Q(n[6]),{c(){e=w("div"),t=w("div"),a=w("h1"),_=k("Sidenav"),d=H(),o=w("p"),f=k("hidden: "),r=k(n[1]),b=H(),p=w("p"),y=k("window width: "),v=k(n[0]),I=H(),$=w("button"),T=k("Toggle"),this.h()},l(i){e=m(i,"DIV",{class:!0,style:!0});var E=g(e);t=m(E,"DIV",{class:!0});var c=g(t);a=m(c,"H1",{});var q=g(a);_=D(q,"Sidenav"),q.forEach(u),d=V(c),o=m(c,"P",{});var O=g(o);f=D(O,"hidden: "),r=D(O,n[1]),O.forEach(u),b=V(c),p=m(c,"P",{});var L=g(p);y=D(L,"window width: "),v=D(L,n[0]),L.forEach(u),I=V(c),$=m(c,"BUTTON",{class:!0});var U=g($);T=D(U,"Toggle"),U.forEach(u),c.forEach(u),E.forEach(u),this.h()},h(){S($,"class","btn btn-primary"),S(t,"class","p-3"),S(e,"class","container p-0 svelte-1kk27jx"),W(e,"width",n[3].width)},m(i,E){R(i,e,E),l(e,t),l(t,a),l(a,_),l(t,d),l(t,o),l(o,f),l(o,r),l(t,b),l(t,p),l(p,y),l(p,v),l(t,I),l(t,$),l($,T),h||(s=[B(window,"resize",n[6]),B($,"click",n[4])],h=!0)},p(i,[E]){E&2&&G(r,i[1]),E&1&&G(v,i[0]),E&8&&W(e,"width",i[3].width)},i:A,o:A,d(i){i&&u(e),h=!1,X(s)}}}function re(n,e,t){let a,_;const d={open:"max(20vw, 270px)",close:"0"};let{shown:o=!0}=e,f,r;function b(){f&&(t(5,o=!o),console.log(o))}function p(){t(0,a=window.innerWidth),t(2,_=window.innerHeight)}return n.$$set=y=>{"shown"in y&&t(5,o=y.shown)},n.$$.update=()=>{n.$$.dirty&1&&t(1,f=a>900),n.$$.dirty&2&&t(5,o=f),n.$$.dirty&32&&t(3,r={width:o?d.open:d.close})},[a,f,_,r,b,o,p]}class de extends C{constructor(e){super(),M(this,e,re,ie,P,{shown:5})}}function he(n){let e,t,a,_,d,o,f,r,b,p,y,v;function I(s){n[3](s)}let $={};n[0]!==void 0&&($.showSidenav=n[0]),a=new oe({props:$}),Y.push(()=>Z(a,"showSidenav",I,n[0])),o=new de({props:{shown:n[0]}});const T=n[2].default,h=x(T,n,n[1],null);return{c(){e=w("div"),t=w("div"),j(a.$$.fragment),d=H(),j(o.$$.fragment),f=H(),r=w("main"),b=k("showSidenav: "),p=k(n[0]),y=H(),h&&h.c(),this.h()},l(s){e=m(s,"DIV",{class:!0});var i=g(e);t=m(i,"DIV",{class:!0});var E=g(t);F(a.$$.fragment,E),E.forEach(u),d=V(i),F(o.$$.fragment,i),f=V(i),r=m(i,"MAIN",{class:!0});var c=g(r);b=D(c,"showSidenav: "),p=D(c,n[0]),y=V(c),h&&h.l(c),c.forEach(u),i.forEach(u),this.h()},h(){S(t,"class","nav svelte-fgomtq"),S(r,"class","svelte-fgomtq"),S(e,"class","app svelte-fgomtq")},m(s,i){R(s,e,i),l(e,t),J(a,t,null),l(e,d),J(o,e,null),l(e,f),l(e,r),l(r,b),l(r,p),l(r,y),h&&h.m(r,null),v=!0},p(s,[i]){const E={};!_&&i&1&&(_=!0,E.showSidenav=s[0],ee(()=>_=!1)),a.$set(E);const c={};i&1&&(c.shown=s[0]),o.$set(c),(!v||i&1)&&G(p,s[0]),h&&h.p&&(!v||i&2)&&te(h,T,s,s[1],v?ne(T,s[1],i,null):se(s[1]),null)},i(s){v||(N(a.$$.fragment,s),N(o.$$.fragment,s),N(h,s),v=!0)},o(s){z(a.$$.fragment,s),z(o.$$.fragment,s),z(h,s),v=!1},d(s){s&&u(e),K(a),K(o),h&&h.d(s)}}}function ce(n,e,t){let{$$slots:a={},$$scope:_}=e,d=!0;function o(f){d=f,t(0,d)}return n.$$set=f=>{"$$scope"in f&&t(1,_=f.$$scope)},[d,_,a,o]}class ue extends C{constructor(e){super(),M(this,e,ce,he,P,{})}}export{ue as default};
