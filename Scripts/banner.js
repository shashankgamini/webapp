﻿(function(h,g,c,j,d,l,k){/*! Jssor */
    new(function(){});var e={bd:function(a){return-c.cos(a*c.PI)/2+.5},cd:function(a){return a},he:function(a){return a*a},ud:function(a){return-a*(a-2)},Me:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},Qe:function(a){return a*a*a},le:function(a){return(a-=1)*a*a+1},re:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},ke:function(a){return a*a*a*a},Nd:function(a){return-((a-=1)*a*a*a-1)},Be:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},Ae:function(a){return a*a*a*a*a},ze:function(a){return(a-=1)*a*a*a*a+1},ye:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},xe:function(a){return 1-c.cos(c.PI/2*a)},we:function(a){return c.sin(c.PI/2*a)},ve:function(a){return-1/2*(c.cos(c.PI*a)-1)},ue:function(a){return a==0?0:c.pow(2,10*(a-1))},te:function(a){return a==1?1:-c.pow(2,-10*a)+1},se:function(a){return a==0||a==1?a:(a*=2)<1?1/2*c.pow(2,10*(a-1)):1/2*(-c.pow(2,-10*--a)+2)},qe:function(a){return-(c.sqrt(1-a*a)-1)},pe:function(a){return c.sqrt(1-(a-=1)*a)},me:function(a){return(a*=2)<1?-1/2*(c.sqrt(1-a*a)-1):1/2*(c.sqrt(1-(a-=2)*a)+1)},Ee:function(a){if(!a||a==1)return a;var b=.3,d=.075;return-(c.pow(2,10*(a-=1))*c.sin((a-d)*2*c.PI/b))},Fe:function(a){if(!a||a==1)return a;var b=.3,d=.075;return c.pow(2,-10*a)*c.sin((a-d)*2*c.PI/b)+1},We:function(a){if(!a||a==1)return a;var b=.45,d=.1125;return(a*=2)<1?-.5*c.pow(2,10*(a-=1))*c.sin((a-d)*2*c.PI/b):c.pow(2,-10*(a-=1))*c.sin((a-d)*2*c.PI/b)*.5+1},Ve:function(a){var b=1.70158;return a*a*((b+1)*a-b)},Se:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},Re:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},ld:function(a){return 1-e.jc(1-a)},jc:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},Le:function(a){return a<1/2?e.ld(a*2)*.5:e.jc(a*2-1)*.5+.5},Je:function(){return 1-c.abs(1)},Ie:function(a){return 1-c.cos(a*c.PI*2)},He:function(a){return c.sin(a*c.PI*2)},ie:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},Xd:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},f={Id:e.bd,Hd:e.cd,Ed:e.he,Cd:e.ud,Bd:e.Me,Ad:e.Qe,wd:e.le,Dd:e.re,Md:e.ke,fe:e.Nd,ee:e.Be,de:e.Ae,ed:e.ze,ce:e.ye,ae:e.xe,Zd:e.we,Vd:e.ve,Td:e.ue,Sd:e.te,Rd:e.se,Qd:e.qe,Ne:e.pe,af:e.me,ag:e.Ee,Yf:e.Fe,Xf:e.We,Wf:e.Ve,Ze:e.Se,Vf:e.Re,Sf:e.ld,Rf:e.jc,Pf:e.Le,Nf:e.Je,Mf:e.Ie,bg:e.He,cg:e.ie,hg:e.Xd};var b=new function(){var f=this,Ab=/\S+/g,F=1,yb=2,fb=3,eb=4,jb=5,G,r=0,i=0,s=0,X=0,z=0,I=navigator,ob=I.appName,o=I.userAgent,p=parseFloat;function Ib(){if(!G){G={sf:"ontouchstart"in h||"createTouch"in g};var a;if(I.pointerEnabled||(a=I.msPointerEnabled))G.od=a?"msTouchAction":"touchAction"}return G}function v(j){if(!r){r=-1;if(ob=="Microsoft Internet Explorer"&&!!h.attachEvent&&!!h.ActiveXObject){var e=o.indexOf("MSIE");r=F;s=p(o.substring(e+5,o.indexOf(";",e)));/*@cc_on X=@_jscript_version@*/;i=g.documentMode||s}else if(ob=="Netscape"&&!!h.addEventListener){var d=o.indexOf("Firefox"),b=o.indexOf("Safari"),f=o.indexOf("Chrome"),c=o.indexOf("AppleWebKit");if(d>=0){r=yb;i=p(o.substring(d+8))}else if(b>=0){var k=o.substring(0,b).lastIndexOf("/");r=f>=0?eb:fb;i=p(o.substring(k+1,b))}else{var a=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);if(a){r=F;i=s=p(a[1])}}if(c>=0)z=p(o.substring(c+12))}else{var a=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);if(a){r=jb;i=p(a[2])}}}return j==r}function q(){return v(F)}function Q(){return q()&&(i<6||g.compatMode=="BackCompat")}function db(){return v(fb)}function ib(){return v(jb)}function vb(){return db()&&z>534&&z<535}function J(){v();return z>537||i>42||r==F&&i>=11}function O(){return q()&&i<9}function wb(a){var b,c;return function(f){if(!b){b=d;var e=a.substr(0,1).toUpperCase()+a.substr(1);n([a].concat(["WebKit","ms","Moz","O","webkit"]),function(g,d){var b=a;if(d)b=g+e;if(f.style[b]!=k)return c=b})}return c}}function ub(b){var a;return function(c){a=a||wb(b)(c)||b;return a}}var K=ub("transform");function nb(a){return{}.toString.call(a)}var kb={};n(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){kb["[object "+a+"]"]=a.toLowerCase()});function n(b,d){var a,c;if(nb(b)=="[object Array]"){for(a=0;a<b.length;a++)if(c=d(b[a],a,b))return c}else for(a in b)if(c=d(b[a],a,b))return c}function C(a){return a==j?String(a):kb[nb(a)]||"object"}function lb(a){for(var b in a)return d}function A(a){try{return C(a)=="object"&&!a.nodeType&&a!=a.window&&(!a.constructor||{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))}catch(b){}}function u(a,b){return{x:a,y:b}}function rb(b,a){setTimeout(b,a||0)}function H(b,d,c){var a=!b||b=="inherit"?"":b;n(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.index+b[0].length+1,a.length-1);a=d+e}});a=c+(!a.indexOf(" ")?"":" ")+a;return a}function tb(b,a){if(i<9)b.style.filter=a}f.Hf=Ib;f.pd=q;f.Cf=db;f.vf=J;f.rd=O;wb("transform");f.vd=function(){return i};f.sd=rb;function Y(a){a.constructor===Y.caller&&a.td&&a.td.apply(a,Y.caller.arguments)}f.td=Y;f.nb=function(a){if(f.uf(a))a=g.getElementById(a);return a};function t(a){return a||h.event}f.dd=t;f.ic=function(b){b=t(b);var a=b.target||b.srcElement||g;if(a.nodeType==3)a=f.Zc(a);return a};f.Ec=function(a){a=t(a);return{x:a.pageX||a.clientX||0,y:a.pageY||a.clientY||0}};function D(c,d,a){if(a!==k)c.style[d]=a==k?"":a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&h.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,j);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function ab(b,c,a,d){if(a!==k){if(a==j)a="";else d&&(a+="px");D(b,c,a)}else return p(D(b,c))}function m(c,a){var d=a?ab:D,b;if(a&4)b=ub(c);return function(e,f){return d(e,b?b(e):c,f,a&2)}}function Db(b){if(q()&&s<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?p(a[1])/100:1}else return p(b.style.opacity||"1")}function Fb(b,a,f){if(q()&&s<9){var h=b.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=c.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=H(h,[i],d);tb(b,g)}else b.style.opacity=a==1?"":c.round(a*100)/100}var L={db:["rotate"],V:["rotateX"],T:["rotateY"],Gb:["skewX"],Fb:["skewY"]};if(!J())L=B(L,{p:["scaleX",2],q:["scaleY",2],U:["translateZ",1]});function M(d,a){var c="";if(a){if(q()&&i&&i<10){delete a.V;delete a.T;delete a.U}b.f(a,function(d,b){var a=L[b];if(a){var e=a[1]||0;if(N[b]!=d)c+=" "+a[0]+"("+d+(["deg","px",""])[e]+")"}});if(J()){if(a.cb||a.fb||a.U)c+=" translate3d("+(a.cb||0)+"px,"+(a.fb||0)+"px,"+(a.U||0)+"px)";if(a.p==k)a.p=1;if(a.q==k)a.q=1;if(a.p!=1||a.q!=1)c+=" scale3d("+a.p+", "+a.q+", 1)"}}d.style[K(d)]=c}f.uc=m("transformOrigin",4);f.xf=m("backfaceVisibility",4);f.yf=m("transformStyle",4);f.zf=m("perspective",6);f.Af=m("perspectiveOrigin",4);f.Bf=function(a,b){if(q()&&s<9||s<10&&Q())a.style.zoom=b==1?"":b;else{var c=K(a),f="scale("+b+")",e=a.style[c],g=new RegExp(/[\s]*scale\(.*?\)/g),d=H(e,[g],f);a.style[c]=d}};f.ac=function(b,a){return function(c){c=t(c);var e=c.type,d=c.relatedTarget||(e=="mouseout"?c.toElement:c.fromElement);(!d||d!==a&&!f.Df(a,d))&&b(c)}};f.a=function(a,d,b,c){a=f.nb(a);if(a.addEventListener){d=="mousewheel"&&a.addEventListener("DOMMouseScroll",b,c);a.addEventListener(d,b,c)}else if(a.attachEvent){a.attachEvent("on"+d,b);c&&a.setCapture&&a.setCapture()}};f.H=function(a,c,d,b){a=f.nb(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};f.Eb=function(a){a=t(a);a.preventDefault&&a.preventDefault();a.cancel=d;a.returnValue=l};f.Gf=function(a){a=t(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=d};f.K=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,b)};return b};f.tf=function(a,b){if(b==k)return a.textContent||a.innerText;var c=g.createTextNode(b);f.Zb(a);a.appendChild(c)};f.tb=function(d,c){for(var b=[],a=d.firstChild;a;a=a.nextSibling)(c||a.nodeType==1)&&b.push(a);return b};function mb(a,c,e,b){b=b||"u";for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){if(U(a,b)==c)return a;if(!e){var d=mb(a,c,e,b);if(d)return d}}}f.D=mb;function S(a,d,f,b){b=b||"u";var c=[];for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){U(a,b)==d&&c.push(a);if(!f){var e=S(a,d,f,b);if(e.length)c=c.concat(e)}}return c}function gb(a,c,d){for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(!d){var b=gb(a,c,d);if(b)return b}}}f.gf=gb;f.qf=function(b,a){return b.getElementsByTagName(a)};function B(){var e=arguments,d,c,b,a,g=1&e[0],f=1+g;d=e[f-1]||{};for(;f<e.length;f++)if(c=e[f])for(b in c){a=c[b];if(a!==k){a=c[b];var h=d[b];d[b]=g&&(A(h)||A(a))?B(g,{},h,a):a}}return d}f.I=B;function Z(f,g){var d={},c,a,b;for(c in f){a=f[c];b=g[c];if(a!==b){var e;if(A(a)&&A(b)){a=Z(a,b);e=!lb(a)}!e&&(d[c]=a)}}return d}f.Nc=function(a){return C(a)=="function"};f.uf=function(a){return C(a)=="string"};f.Xb=function(a){return!isNaN(p(a))&&isFinite(a)};f.f=n;f.nf=A;function R(a){return g.createElement(a)}f.Ab=function(){return R("DIV")};f.pf=function(){return R("SPAN")};f.yc=function(){};function V(b,c,a){if(a==k)return b.getAttribute(c);b.setAttribute(c,a)}function U(a,b){return V(a,b)||V(a,"data-"+b)}f.A=V;f.i=U;function x(b,a){if(a==k)return b.className;b.className=a}f.Lc=x;function qb(b){var a={};n(b,function(b){a[b]=b});return a}function sb(b,a){return b.match(a||Ab)}function P(b,a){return qb(sb(b||"",a))}f.lg=sb;function bb(b,c){var a="";n(c,function(c){a&&(a+=b);a+=c});return a}function E(a,c,b){x(a,bb(" ",B(Z(P(x(a)),P(c)),P(b))))}f.Zc=function(a){return a.parentNode};f.Q=function(a){f.N(a,"none")};f.M=function(a,b){f.N(a,b?"none":"")};f.kg=function(b,a){b.removeAttribute(a)};f.og=function(){return q()&&i<10};f.pg=function(d,a){if(a)d.style.clip="rect("+c.round(a.j||a.z||0)+"px "+c.round(a.B)+"px "+c.round(a.C)+"px "+c.round(a.k||a.s||0)+"px)";else if(a!==k){var g=d.style.cssText,f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=H(g,f,"");b.Cb(d,e)}};f.O=function(){return+new Date};f.R=function(b,a){b.appendChild(a)};f.Bb=function(b,a,c){(c||a.parentNode).insertBefore(b,a)};f.Hb=function(b,a){a=a||b.parentNode;a&&a.removeChild(b)};f.Tf=function(a,b){n(a,function(a){f.Hb(a,b)})};f.Zb=function(a){f.Tf(f.tb(a,d),a)};f.Uf=function(a,b){var c=f.Zc(a);b&1&&f.G(a,(f.m(c)-f.m(a))/2);b&2&&f.F(a,(f.n(c)-f.n(a))/2)};f.Rb=function(b,a){return parseInt(b,a||10)};f.Zf=p;f.Df=function(b,a){var c=g.body;while(a&&b!==a&&c!==a)try{a=a.parentNode}catch(d){return l}return b===a};function W(d,c,b){var a=d.cloneNode(!c);!b&&f.kg(a,"id");return a}f.xb=W;f.ob=function(e,g){var a=new Image;function b(e,d){f.H(a,"load",b);f.H(a,"abort",c);f.H(a,"error",c);g&&g(a,d)}function c(a){b(a,d)}if(ib()&&i<11.6||!e)b(!e);else{f.a(a,"load",b);f.a(a,"abort",c);f.a(a,"error",c);a.src=e}};f.mf=function(d,a,e){var c=d.length+1;function b(b){c--;if(a&&b&&b.src==a.src)a=b;!c&&e&&e(a)}n(d,function(a){f.ob(a.src,b)});b()};f.Ye=function(a,g,i,h){if(h)a=W(a);var c=S(a,g);if(!c.length)c=b.qf(a,g);for(var f=c.length-1;f>-1;f--){var d=c[f],e=W(i);x(e,x(d));b.Cb(e,d.style.cssText);b.Bb(e,d);b.Hb(d)}return a};function Gb(a){var l=this,p="",r=["av","pv","ds","dn"],e=[],q,j=0,h=0,d=0;function i(){E(a,q,e[d||j||h&2||h]);b.S(a,"pointer-events",d?"none":"")}function c(){j=0;i();f.H(g,"mouseup",c);f.H(g,"touchend",c);f.H(g,"touchcancel",c)}function o(a){if(d)f.Eb(a);else{j=4;i();f.a(g,"mouseup",c);f.a(g,"touchend",c);f.a(g,"touchcancel",c)}}l.Pd=function(a){if(a===k)return h;h=a&2||a&1;i()};l.Dc=function(a){if(a===k)return!d;d=a?0:3;i()};l.L=a=f.nb(a);var m=b.lg(x(a));if(m)p=m.shift();n(r,function(a){e.push(p+a)});q=bb(" ",e);e.unshift("");f.a(a,"mousedown",o);f.a(a,"touchstart",o)}f.mc=function(a){return new Gb(a)};f.S=D;f.Jb=m("overflow");f.F=m("top",2);f.G=m("left",2);f.m=m("width",2);f.n=m("height",2);f.Yd=m("marginLeft",2);f.dg=m("marginTop",2);f.E=m("position");f.N=m("display");f.u=m("zIndex",1);f.sc=function(b,a,c){if(a!=k)Fb(b,a,c);else return Db(b)};f.Cb=function(a,b){if(b!=k)a.style.cssText=b;else return a.style.cssText};var T={kb:f.sc,j:f.F,k:f.G,lb:f.m,mb:f.n,pb:f.E,Bg:f.N,qb:f.u};function w(g,l){var e=O(),b=J(),d=vb(),h=K(g);function i(b,d,a){var e=b.gb(u(-d/2,-a/2)),f=b.gb(u(d/2,-a/2)),g=b.gb(u(d/2,a/2)),h=b.gb(u(-d/2,a/2));b.gb(u(300,300));return u(c.min(e.x,f.x,g.x,h.x)+d/2,c.min(e.y,f.y,g.y,h.y)+a/2)}function a(d,a){a=a||{};var g=a.U||0,l=(a.V||0)%360,m=(a.T||0)%360,o=(a.db||0)%360,p=a.Ag;if(e){g=0;l=0;m=0;p=0}var c=new Cb(a.cb,a.fb,g);c.V(l);c.T(m);c.yd(o);c.zd(a.Gb,a.Fb);c.qc(a.p,a.q,p);if(b){c.sb(a.s,a.z);d.style[h]=c.Ld()}else if(!X||X<9){var j="";if(o||a.p!=k&&a.p!=1||a.q!=k&&a.q!=1){var n=i(c,a.Y,a.Z);f.dg(d,n.y);f.Yd(d,n.x);j=c.Fd()}var r=d.style.filter,s=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),q=H(r,[s],j);tb(d,q)}}w=function(e,c){c=c||{};var h=c.s,i=c.z,g;n(T,function(a,b){g=c[b];g!==k&&a(e,g)});f.pg(e,c.g);if(!b){h!=k&&f.G(e,(c.Hc||0)+h);i!=k&&f.F(e,(c.Uc||0)+i)}if(c.Kd)if(d)rb(f.K(j,M,e,c));else a(e,c)};f.Qb=M;if(d)f.Qb=w;if(e)f.Qb=a;else if(!b)a=M;f.P=w;w(g,l)}f.Qb=w;f.P=w;function Cb(i,l,p){var d=this,b=[1,0,0,0,0,1,0,0,0,0,1,0,i||0,l||0,p||0,1],h=c.sin,g=c.cos,m=c.tan;function f(a){return a*c.PI/180}function o(a,b){return{x:a,y:b}}function n(c,e,l,m,o,r,t,u,w,z,A,C,E,b,f,k,a,g,i,n,p,q,s,v,x,y,B,D,F,d,h,j){return[c*a+e*p+l*x+m*F,c*g+e*q+l*y+m*d,c*i+e*s+l*B+m*h,c*n+e*v+l*D+m*j,o*a+r*p+t*x+u*F,o*g+r*q+t*y+u*d,o*i+r*s+t*B+u*h,o*n+r*v+t*D+u*j,w*a+z*p+A*x+C*F,w*g+z*q+A*y+C*d,w*i+z*s+A*B+C*h,w*n+z*v+A*D+C*j,E*a+b*p+f*x+k*F,E*g+b*q+f*y+k*d,E*i+b*s+f*B+k*h,E*n+b*v+f*D+k*j]}function e(c,a){return n.apply(j,(a||b).concat(c))}d.qc=function(a,c,d){if(a==k)a=1;if(c==k)c=1;if(d==k)d=1;if(a!=1||c!=1||d!=1)b=e([a,0,0,0,0,c,0,0,0,0,d,0,0,0,0,1])};d.sb=function(a,c,d){b[12]+=a||0;b[13]+=c||0;b[14]+=d||0};d.V=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([1,0,0,0,0,d,i,0,0,-i,d,0,0,0,0,1])}};d.T=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([d,0,-i,0,0,1,0,0,i,0,d,0,0,0,0,1])}};d.yd=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([d,i,0,0,-i,d,0,0,0,0,1,0,0,0,0,1])}};d.zd=function(a,c){if(a||c){i=f(a);l=f(c);b=e([1,m(l),0,0,m(i),1,0,0,0,0,1,0,0,0,0,1])}};d.gb=function(c){var a=e(b,[1,0,0,0,0,1,0,0,0,0,1,0,c.x,c.y,0,1]);return o(a[12],a[13])};d.Ld=function(){return"matrix3d("+b.join(",")+")"};d.Fd=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+b[0]+", M12="+b[4]+", M21="+b[1]+", M22="+b[5]+", SizingMethod='auto expand')"}}new function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.p=function(b,c){return a.Sc(b,c,0)};a.q=function(b,c){return a.Sc(b,0,c)};a.Sc=function(a,c,d){return b(a,[[c,0],[0,d]])};a.gb=function(d,c){var a=b(d,[[c.x],[c.y]]);return u(a[0][0],a[1][0])}};var N={Hc:0,Uc:0,s:0,z:0,ab:1,p:1,q:1,db:0,V:0,T:0,cb:0,fb:0,U:0,Gb:0,Fb:0};f.Rc=function(a){var c=a||{};if(a)if(b.Nc(a))c={rc:c};else if(b.Nc(a.g))c.g={rc:a.g};return c};function pb(c,a){var b={};n(c,function(c,d){var e=c;if(a[d]!=k)if(f.Xb(c))e=c+a[d];else e=pb(c,a[d]);b[d]=e});return b}f.Oe=pb;f.Pe=function(l,m,x,q,z,A,n){var a=m;if(l){a={};for(var g in m){var B=A[g]||1,w=z[g]||[0,1],f=(x-w[0])/w[1];f=c.min(c.max(f,0),1);f=f*B;var u=c.floor(f);if(f!=u)f-=u;var h=q.rc||e.bd,i,C=l[g],o=m[g];if(b.Xb(o)){h=q[g]||h;var y=h(f);i=C+o*y}else{i=b.I({Mb:{}},l[g]);var v=q[g]||{};b.f(o.Mb||o,function(d,a){h=v[a]||v.rc||h;var c=h(f),b=d*c;i.Mb[a]=b;i[a]+=b})}a[g]=i}var t=b.f(m,function(b,a){return N[a]!=k});t&&b.f(N,function(c,b){if(a[b]==k&&l[b]!==k)a[b]=l[b]});if(t){if(a.ab)a.p=a.q=a.ab;a.Y=n.Y;a.Z=n.Z;a.Kd=d}}if(m.g&&n.sb){var p=a.g.Mb,s=(p.j||0)+(p.C||0),r=(p.k||0)+(p.B||0);a.k=(a.k||0)+r;a.j=(a.j||0)+s;a.g.k-=r;a.g.B-=r;a.g.j-=s;a.g.C-=s}if(a.g&&b.og()&&!a.g.j&&!a.g.k&&!a.g.z&&!a.g.s&&a.g.B==n.Y&&a.g.C==n.Z)a.g=j;return a}};function n(){var a=this,d=[];function i(a,b){d.push({oc:a,kc:b})}function g(a,c){b.f(d,function(b,e){b.oc==a&&b.kc===c&&d.splice(e,1)})}a.rb=a.addEventListener=i;a.removeEventListener=g;a.l=function(a){var c=[].slice.call(arguments,1);b.f(d,function(b){b.oc==a&&b.kc.apply(h,c)})}}var m=function(z,C,i,J,M,L){z=z||0;var a=this,q,n,o,u,A=0,G,H,F,B,y=0,g=0,m=0,D,k,f,e,p,w=[],x;function O(a){f+=a;e+=a;k+=a;g+=a;m+=a;y+=a}function t(o){var h=o;if(p&&(h>=e||h<=f))h=((h-f)%p+p)%p+f;if(!D||u||g!=h){var j=c.min(h,e);j=c.max(j,f);if(!D||u||j!=m){if(L){var l=(j-k)/(C||1);if(i.oe)l=1-l;var n=b.Pe(M,L,l,G,F,H,i);if(x)b.f(n,function(b,a){x[a]&&x[a](J,b)});else b.P(J,n)}a.Wb(m-k,j-k);m=j;b.f(w,function(b,c){var a=o<g?w[w.length-c-1]:b;a.v(m-y)});var r=g,q=m;g=h;D=d;a.Ob(r,q)}}}function E(a,b,d){b&&a.Pb(e);if(!d){f=c.min(f,a.Vb()+y);e=c.max(e,a.Kb()+y)}w.push(a)}var r=h.requestAnimationFrame||h.webkitRequestAnimationFrame||h.mozRequestAnimationFrame||h.msRequestAnimationFrame;if(b.Cf()&&b.vd()<7)r=j;r=r||function(a){b.sd(a,i.Tc)};function I(){if(q){var d=b.O(),e=c.min(d-A,i.Vc),a=g+e*o;A=d;if(a*o>=n*o)a=n;t(a);if(!u&&a*o>=n*o)K(B);else r(I)}}function s(h,i,j){if(!q){q=d;u=j;B=i;h=c.max(h,f);h=c.min(h,e);n=h;o=n<g?-1:1;a.Xc();A=b.O();r(I)}}function K(b){if(q){u=q=B=l;a.Ic();b&&b()}}a.Yc=function(a,b,c){s(a?g+a:e,b,c)};a.Gc=s;a.bb=K;a.ne=function(a){s(a)};a.X=function(){return g};a.wc=function(){return n};a.wb=function(){return m};a.v=t;a.sb=function(a){t(g+a)};a.xc=function(){return q};a.Ud=function(a){p=a};a.Pb=O;a.vb=function(a,b){E(a,0,b)};a.bc=function(a){E(a,1)};a.Ke=function(a){e+=a};a.Vb=function(){return f};a.Kb=function(){return e};a.Ob=a.Xc=a.Ic=a.Wb=b.yc;a.cc=b.O();i=b.I({Tc:16,Vc:50},i);p=i.Bc;x=i.qg;f=k=z;e=z+C;H=i.mg||{};F=i.ig||{};G=b.Rc(i.W)};new(function(){});var i=function(p,fc){var f=this;function Bc(){var a=this;m.call(a,-1e8,2e8);a.bf=function(){var b=a.wb(),d=c.floor(b),f=t(d),e=b-c.floor(b);return{eb:f,df:d,pb:e}};a.Ob=function(b,a){var e=c.floor(a);if(e!=a&&a>b)e++;Tb(e,d);f.l(i.ef,t(a),t(b),a,b)}}function Ac(){var a=this;m.call(a,0,0,{Bc:r});b.f(C,function(b){D&1&&b.Ud(r);a.bc(b);b.Pb(kb/bc)})}function zc(){var a=this,b=Ub.L;m.call(a,-1,2,{W:e.cd,qg:{pb:Zb},Bc:r},b,{pb:1},{pb:-2});a.ec=b}function mc(o,n){var b=this,e,g,h,k,c;m.call(b,-1e8,2e8,{Vc:100});b.Xc=function(){M=d;R=j;f.l(i.fg,t(w.X()),w.X())};b.Ic=function(){M=l;k=l;var a=w.bf();f.l(i.Jd,t(w.X()),w.X());!a.pb&&Dc(a.df,s)};b.Ob=function(i,f){var b;if(k)b=c;else{b=g;if(h){var d=f/h;b=a.zc(d)*(g-e)+e}}w.v(b)};b.Nb=function(a,d,c,f){e=a;g=d;h=c;w.v(a);b.v(0);b.Gc(c,f)};b.Od=function(a){k=d;c=a;b.Yc(a,j,d)};b.De=function(a){c=a};w=new Bc;w.vb(o);w.vb(n)}function oc(){var c=this,a=Xb();b.u(a,0);b.S(a,"pointerEvents","none");c.L=a;c.Lb=function(){b.Q(a);b.Zb(a)}}function xc(o,g){var e=this,q,L,v,k,y=[],x,B,W,G,Q,F,h,w,p;m.call(e,-u,u+1,{});function E(a){q&&q.vc();T(o,a,0);F=d;q=new I.J(o,I,b.Zf(b.i(o,"idle"))||lc);q.v(0)}function Z(){q.cc<I.cc&&E()}function M(p,r,o){if(!G){G=d;if(k&&o){var h=o.width,c=o.height,n=h,m=c;if(h&&c&&a.ub){if(a.ub&3&&(!(a.ub&4)||h>K||c>J)){var j=l,q=K/J*c/h;if(a.ub&1)j=q>1;else if(a.ub&2)j=q<1;n=j?h*J/c:K;m=j?J:c*K/h}b.m(k,n);b.n(k,m);b.F(k,(J-m)/2);b.G(k,(K-n)/2)}b.E(k,"absolute");f.l(i.Ce,g)}}b.Q(r);p&&p(e)}function Y(b,c,d,f){if(f==R&&s==g&&N)if(!Cc){var a=t(b);A.Ef(a,g,c,e,d);c.Xe();U.Pb(a-U.Vb()-1);U.v(a);z.Nb(b,b,0)}}function bb(b){if(b==R&&s==g){if(!h){var a=j;if(A)if(A.eb==g)a=A.rf();else A.Lb();Z();h=new vc(o,g,a,q);h.Oc(p)}!h.xc()&&h.lc()}}function S(d,f,l){if(d==g){if(d!=f)C[f]&&C[f].Ue();else!l&&h&&h.Te();p&&p.Dc();var m=R=b.O();e.ob(b.K(j,bb,m))}else{var k=c.min(g,d),i=c.max(g,d),o=c.min(i-k,k+r-i),n=u+a.Ge-1;(!Q||o<=n)&&e.ob()}}function db(){if(s==g&&h){h.bb();p&&p.je();p&&p.xd();h.Fc()}}function eb(){s==g&&h&&h.bb()}function ab(a){!P&&f.l(i.ge,g,a)}function O(){p=w.pInstance;h&&h.Oc(p)}e.ob=function(c,a){a=a||v;if(y.length&&!G){b.M(a);if(!W){W=d;f.l(i.be,g);b.f(y,function(a){if(!b.A(a,"src")){a.src=b.i(a,"src2");b.N(a,a["display-origin"])}})}b.mf(y,k,b.K(j,M,c,a))}else M(c,a)};e.Wd=function(){var h=g;if(a.Ac<0)h-=r;var d=h+a.Ac*tc;if(D&2)d=t(d);if(!(D&1)&&!ib)d=c.max(0,c.min(d,r-u));if(d!=g){if(A){var e=A.wf(r);if(e){var i=R=b.O(),f=C[t(d)];return f.ob(b.K(j,Y,d,f,e,i),v)}}cb(d)}};e.nc=function(){S(g,g,d)};e.Ue=function(){p&&p.je();p&&p.xd();e.Cc();h&&h.Qf();h=j;E()};e.Xe=function(){b.Q(o)};e.Cc=function(){b.M(o)};e.ng=function(){p&&p.Dc()};function T(a,c,e){if(b.A(a,"jssor-slider"))return;if(!F){if(a.tagName=="IMG"){y.push(a);if(!b.A(a,"src")){Q=d;a["display-origin"]=b.N(a);b.Q(a)}}b.rd()&&b.u(a,(b.u(a)||0)+1)}var f=b.tb(a);b.f(f,function(f){var h=f.tagName,i=b.i(f,"u");if(i=="player"&&!w){w=f;if(w.pInstance)O();else b.a(w,"dataavailable",O)}if(i=="caption"){if(c){b.uc(f,b.i(f,"to"));b.xf(f,b.i(f,"bf"));b.i(f,"3d")&&b.yf(f,"preserve-3d")}else if(!b.pd()){var g=b.xb(f,l,d);b.Bb(g,f,a);b.Hb(f,a);f=g;c=d}}else if(!F&&!e&&!k){if(h=="A"){if(b.i(f,"u")=="image")k=b.gf(f,"IMG");else k=b.D(f,"image",d);if(k){x=f;b.N(x,"block");b.P(x,V);B=b.xb(x,d);b.E(x,"relative");b.sc(B,0);b.S(B,"backgroundColor","#000")}}else if(h=="IMG"&&b.i(f,"u")=="image")k=f;if(k){k.border=0;b.P(k,V)}}T(f,c,e+1)})}e.Wb=function(c,b){var a=u-b;Zb(L,a)};e.eb=g;n.call(e);b.zf(o,b.i(o,"p"));b.Af(o,b.i(o,"po"));var H=b.D(o,"thumb",d);if(H){b.xb(H);b.Q(H)}b.M(o);v=b.xb(gb);b.u(v,1e3);b.a(o,"click",ab);E(d);e.Ff=k;e.Qc=B;e.ec=L=o;b.R(L,v);f.rb(203,S);f.rb(28,eb);f.rb(24,db)}function vc(y,g,p,q){var a=this,n=0,u=0,h,j,e,c,k,t,r,o=C[g];m.call(a,0,0);function v(){b.Zb(L);cc&&k&&o.Qc&&b.R(L,o.Qc);b.M(L,!k&&o.Ff)}function w(){a.lc()}function x(b){r=b;a.bb();a.lc()}a.lc=function(){var b=a.wb();if(!B&&!M&&!r&&s==g){if(!b){if(h&&!k){k=d;a.Fc(d);f.l(i.gg,g,n,u,h,c)}v()}var l,p=i.Pc;if(b!=c)if(b==e)l=c;else if(b==j)l=e;else if(!b)l=j;else l=a.wc();f.l(p,g,b,n,j,e,c);var m=N&&(!E||F);if(b==c)(e!=c&&!(E&12)||m)&&o.Wd();else(m||b!=e)&&a.Gc(l,w)}};a.Te=function(){e==c&&e==a.wb()&&a.v(j)};a.Qf=function(){A&&A.eb==g&&A.Lb();var b=a.wb();b<c&&f.l(i.Pc,g,-b-1,n,j,e,c)};a.Fc=function(a){p&&b.Jb(lb,a&&p.fc.zg?"":"hidden")};a.Wb=function(b,a){if(k&&a>=h){k=l;v();o.Cc();A.Lb();f.l(i.Lf,g,n,u,h,c)}f.l(i.Of,g,a,n,j,e,c)};a.Oc=function(a){if(a&&!t){t=a;a.rb($JssorPlayer$.kf,x)}};p&&a.bc(p);h=a.Kb();a.bc(q);j=h+q.Jc;e=h+q.Kc;c=a.Kb()}function Kb(a,c,d){b.G(a,c);b.F(a,d)}function Zb(c,b){var a=x>0?x:fb,d=zb*b*(a&1),e=Ab*b*(a>>1&1);Kb(c,d,e)}function Pb(){qb=M;Ib=z.wc();G=w.X()}function gc(){Pb();if(B||!F&&E&12){z.bb();f.l(i.Kf)}}function ec(f){if(!B&&(F||!(E&12))&&!z.xc()){var d=w.X(),b=c.ceil(G);if(f&&c.abs(H)>=a.Mc){b=c.ceil(d);b+=jb}if(!(D&1))b=c.min(r-u,c.max(b,0));var e=c.abs(b-d);e=1-c.pow(1-e,5);if(!P&&qb)z.ne(Ib);else if(d==b){tb.ng();tb.nc()}else z.Nb(d,b,e*Vb)}}function Hb(a){!b.i(b.ic(a),"nodrag")&&b.Eb(a)}function rc(a){Yb(a,1)}function Yb(a,c){a=b.dd(a);var k=b.ic(a);if(!O&&!b.i(k,"nodrag")&&sc()&&(!c||a.touches.length==1)){B=d;yb=l;R=j;b.a(g,c?"touchmove":"mousemove",Bb);b.O();P=0;gc();if(!qb)x=0;if(c){var h=a.touches[0];ub=h.clientX;vb=h.clientY}else{var e=b.Ec(a);ub=e.x;vb=e.y}H=0;hb=0;jb=0;f.l(i.lf,t(G),G,a)}}function Bb(e){if(B){e=b.dd(e);var f;if(e.type!="mousemove"){var l=e.touches[0];f={x:l.clientX,y:l.clientY}}else f=b.Ec(e);if(f){var j=f.x-ub,k=f.y-vb;if(c.floor(G)!=G)x=x||fb&O;if((j||k)&&!x){if(O==3)if(c.abs(k)>c.abs(j))x=2;else x=1;else x=O;if(ob&&x==1&&c.abs(k)-c.abs(j)>3)yb=d}if(x){var a=k,i=Ab;if(x==1){a=j;i=zb}if(!(D&1)){if(a>0){var g=i*s,h=a-g;if(h>0)a=g+c.sqrt(h)*5}if(a<0){var g=i*(r-u-s),h=-a-g;if(h>0)a=-g-c.sqrt(h)*5}}if(H-hb<-2)jb=0;else if(H-hb>2)jb=-1;hb=H;H=a;sb=G-H/i/(Y||1);if(H&&x&&!yb){b.Eb(e);if(!M)z.Od(sb);else z.De(sb)}}}}}function bb(){qc();if(B){B=l;b.O();b.H(g,"mousemove",Bb);b.H(g,"touchmove",Bb);P=H;z.bb();var a=w.X();f.l(i.jf,t(a),a,t(G),G);E&12&&Pb();ec(d)}}function jc(c){if(P){b.Gf(c);var a=b.ic(c);while(a&&v!==a){a.tagName=="A"&&b.Eb(c);try{a=a.parentNode}catch(d){break}}}}function Jb(a){C[s];s=t(a);tb=C[s];Tb(a);return s}function Dc(a,b){x=0;Jb(a);f.l(i.ff,t(a),b)}function Tb(a,c){wb=a;b.f(S,function(b){b.gc(t(a),a,c)})}function sc(){var b=i.ad||0,a=X;if(ob)a&1&&(a&=1);i.ad|=a;return O=a&~b}function qc(){if(O){i.ad&=~X;O=0}}function Xb(){var a=b.Ab();b.P(a,V);b.E(a,"absolute");return a}function t(a){return(a%r+r)%r}function kc(b,d){if(d)if(!D){b=c.min(c.max(b+wb,0),r-u);d=l}else if(D&2){b=t(b+wb);d=l}cb(b,a.zb,d)}function xb(){b.f(S,function(a){a.Yb(a.Db.ug<=F)})}function hc(){if(!F){F=1;xb();if(!B){E&12&&ec();E&3&&C[s].nc()}}}function Ec(){if(F){F=0;xb();B||!(E&12)||gc()}}function ic(){V={lb:K,mb:J,j:0,k:0};b.f(T,function(a){b.P(a,V);b.E(a,"absolute");b.Jb(a,"hidden");b.Q(a)});b.P(gb,V)}function ab(b,a){cb(b,a,d)}function cb(g,f,j){if(Rb&&(!B&&(F||!(E&12))||a.Wc)){M=d;B=l;z.bb();if(f==k)f=Vb;var e=Cb.wb(),b=g;if(j){b=e+g;if(g>0)b=c.ceil(b);else b=c.floor(b)}if(D&2)b=t(b);if(!(D&1))b=c.max(0,c.min(b,r-u));var i=(b-e)%r;b=e+i;var h=e==b?0:f*c.abs(i);h=c.min(h,f*u*1.5);z.Nb(e,b,h||1)}}f.Yc=function(){if(!N){N=d;C[s]&&C[s].nc()}};function W(){return b.m(y||p)}function nb(){return b.n(y||p)}f.Y=W;f.Z=nb;function Eb(c,d){if(c==k)return b.m(p);if(!y){var a=b.Ab(g);b.Lc(a,b.Lc(p));b.Cb(a,b.Cb(p));b.N(a,"block");b.E(a,"relative");b.F(a,0);b.G(a,0);b.Jb(a,"visible");y=b.Ab(g);b.E(y,"absolute");b.F(y,0);b.G(y,0);b.m(y,b.m(p));b.n(y,b.n(p));b.uc(y,"0 0");b.R(y,a);var h=b.tb(p);b.R(p,y);b.S(p,"backgroundImage","");b.f(h,function(c){b.R(b.i(c,"noscale")?p:a,c);b.i(c,"autocenter")&&Lb.push(c)})}Y=c/(d?b.n:b.m)(y);b.Bf(y,Y);var f=d?Y*W():c,e=d?c:Y*nb();b.m(p,f);b.n(p,e);b.f(Lb,function(a){var c=b.Rb(b.i(a,"autocenter"));b.Uf(a,c)})}f.cf=Eb;n.call(f);f.L=p=b.nb(p);var a=b.I({ub:0,Ge:1,Ub:1,Tb:0,Sb:l,Ib:1,yb:d,Wc:d,Ac:1,kd:3e3,qd:1,zb:500,zc:e.ud,Mc:20,jd:0,hb:1,id:0,of:1,hc:1,hd:1},fc);a.yb=a.yb&&b.vf();if(a.If!=k)a.kd=a.If;if(a.Jf!=k)a.id=a.Jf;var fb=a.hc&3,tc=(a.hc&4)/-4||1,mb=a.vg,I=b.I({J:q,yb:a.yb},a.eg);I.jb=I.jb||I.yg;var Fb=a.jg,Z=a.tg,eb=a.xg,Q=!a.of,y,v=b.D(p,"slides",Q),gb=b.D(p,"loading",Q)||b.Ab(g),Nb=b.D(p,"navigator",Q),dc=b.D(p,"arrowleft",Q),ac=b.D(p,"arrowright",Q),Mb=b.D(p,"thumbnavigator",Q),pc=b.m(v),nc=b.n(v),V,T=[],uc=b.tb(v);b.f(uc,function(a){if(a.tagName=="DIV"&&!b.i(a,"u"))T.push(a);else b.rd()&&b.u(a,(b.u(a)||0)+1)});var s=-1,wb,tb,r=T.length,K=a.rg||pc,J=a.sg||nc,Wb=a.jd,zb=K+Wb,Ab=J+Wb,bc=fb&1?zb:Ab,u=c.min(a.hb,r),lb,x,O,yb,S=[],Qb,Sb,Ob,cc,Cc,N,E=a.qd,lc=a.kd,Vb=a.zb,rb,ib,kb,Rb=u<r,D=Rb?a.Ib:0,X,P,F=1,M,B,R,ub=0,vb=0,H,hb,jb,Cb,w,U,z,Ub=new oc,Y,Lb=[];if(r){if(a.yb)Kb=function(a,c,d){b.Qb(a,{cb:c,fb:d})};N=a.Sb;f.Db=fc;ic();b.A(p,"jssor-slider",d);b.u(v,b.u(v)||0);b.E(v,"absolute");lb=b.xb(v,d);b.Bb(lb,v);if(mb){cc=mb.wg;rb=mb.J;ib=u==1&&r>1&&rb&&(!b.pd()||b.vd()>=8)}kb=ib||u>=r||!(D&1)?0:a.id;X=(u>1||kb?fb:-1)&a.hd;var Gb=v,C=[],A,L,Db=b.Hf(),ob=Db.sf,G,qb,Ib,sb;Db.od&&b.S(Gb,Db.od,([j,"pan-y","pan-x","none"])[X]||"");U=new zc;if(ib)A=new rb(Ub,K,J,mb,ob);b.R(lb,U.ec);b.Jb(v,"hidden");L=Xb();b.S(L,"backgroundColor","#000");b.sc(L,0);b.Bb(L,Gb.firstChild,Gb);for(var db=0;db<T.length;db++){var wc=T[db],yc=new xc(wc,db);C.push(yc)}b.Q(gb);Cb=new Ac;z=new mc(Cb,U);if(X){b.a(v,"mousedown",Yb);b.a(v,"touchstart",rc);b.a(v,"dragstart",Hb);b.a(v,"selectstart",Hb);b.a(g,"mouseup",bb);b.a(g,"touchend",bb);b.a(g,"touchcancel",bb);b.a(h,"blur",bb)}E&=ob?10:5;if(Nb&&Fb){Qb=new Fb.J(Nb,Fb,W(),nb());S.push(Qb)}if(Z&&dc&&ac){Z.Ib=D;Z.hb=u;Sb=new Z.J(dc,ac,Z,W(),nb());S.push(Sb)}if(Mb&&eb){eb.Tb=a.Tb;Ob=new eb.J(Mb,eb);S.push(Ob)}b.f(S,function(a){a.tc(r,C,gb);a.rb(o.pc,kc)});b.S(p,"visibility","visible");Eb(W());b.a(v,"click",jc,d);b.a(p,"mouseout",b.ac(hc,p));b.a(p,"mouseover",b.ac(Ec,p));xb();a.Ub&&b.a(g,"keydown",function(b){if(b.keyCode==37)ab(-a.Ub);else b.keyCode==39&&ab(a.Ub)});var pb=a.Tb;if(!(D&1))pb=c.max(0,c.min(pb,r-u));z.Nb(pb,pb,0)}};i.ge=21;i.lf=22;i.jf=23;i.fg=24;i.Jd=25;i.be=26;i.Ce=27;i.Kf=28;i.ef=202;i.ff=203;i.gg=206;i.Lf=207;i.Of=208;i.Pc=209;var o={pc:1},r=function(e,C){var f=this;n.call(f);e=b.nb(e);var s,A,z,r,k=0,a,m,i,w,x,h,g,q,p,B=[],y=[];function v(a){a!=-1&&y[a].Pd(a==k)}function t(a){f.l(o.pc,a*m)}f.L=e;f.gc=function(a){if(a!=r){var d=k,b=c.floor(a/m);k=b;r=a;v(d);v(b)}};f.Yb=function(a){b.M(e,a)};var u;f.tc=function(D){if(!u){s=c.ceil(D/m);k=0;var o=q+w,r=p+x,n=c.ceil(s/i)-1;A=q+o*(!h?n:i-1);z=p+r*(h?n:i-1);b.m(e,A);b.n(e,z);for(var f=0;f<s;f++){var C=b.pf();b.tf(C,f+1);var l=b.Ye(g,"numbertemplate",C,d);b.E(l,"absolute");var v=f%(n+1);b.G(l,!h?o*v:f%i*o);b.F(l,h?r*v:c.floor(f/(n+1))*r);b.R(e,l);B[f]=l;a.dc&1&&b.a(l,"click",b.K(j,t,f));a.dc&2&&b.a(l,"mouseover",b.ac(b.K(j,t,f),l));y[f]=b.mc(l)}u=d}};f.Db=a=b.I({fd:10,gd:10,md:1,dc:1},C);g=b.D(e,"prototype");q=b.m(g);p=b.n(g);b.Hb(g,e);m=a.nd||1;i=a.hf||1;w=a.fd;x=a.gd;h=a.md-1;a.qc==l&&b.A(e,"noscale",d);a.ib&&b.A(e,"autocenter",a.ib)},s=function(a,g,h){var c=this;n.call(c);var r,q,e,f,i;b.m(a);b.n(a);function k(a){c.l(o.pc,a,d)}function p(c){b.M(a,c||!h.Ib&&e==0);b.M(g,c||!h.Ib&&e>=q-h.hb);r=c}c.gc=function(b,a,c){if(c)e=a;else{e=b;p(r)}};c.Yb=p;var m;c.tc=function(c){q=c;e=0;if(!m){b.a(a,"click",b.K(j,k,-i));b.a(g,"click",b.K(j,k,i));b.mc(a);b.mc(g);m=d}};c.Db=f=b.I({nd:1},h);i=f.nd;if(f.qc==l){b.A(a,"noscale",d);b.A(g,"noscale",d)}if(f.ib){b.A(a,"autocenter",f.ib);b.A(g,"autocenter",f.ib)}};function q(e,d,c){var a=this;m.call(a,0,c);a.vc=b.yc;a.Jc=0;a.Kc=c}var t=function(n,g,l){var a=this,o,h={},i=g.jb,c=new m(0,0);m.call(a,0,0);function j(d,c){var a={};b.f(d,function(d,f){var e=h[f];if(e){if(b.nf(d))d=j(d,c||f=="e");else if(c)if(b.Xb(d))d=o[d];a[e]=d}});return a}function k(e,c){var a=[],d=b.tb(e);b.f(d,function(d){var h=b.i(d,"u")=="caption";if(h){var e=b.i(d,"t"),g=i[b.Rb(e)]||i[e],f={L:d,fc:g};a.push(f)}if(c<5)a=a.concat(k(d,c+1))});return a}function r(e,f,a){b.f(f,function(h){var f=b.I(d,{},j(h)),g=b.Rc(f.W);delete f.W;if(f.k){f.s=f.k;g.s=g.k;delete f.k}if(f.j){f.z=f.j;g.z=g.j;delete f.j}var k={W:g,Y:a.lb,Z:a.mb},i=new m(h.b,h.d,k,e,a,f);c.vb(i);a=b.Oe(a,f)});return a}function q(a){b.f(a,function(d){var a=d.L,f=b.m(a),e=b.n(a),c={k:b.G(a),j:b.F(a),s:0,z:0,kb:1,qb:b.u(a)||0,db:0,V:0,T:0,p:1,q:1,cb:0,fb:0,U:0,Gb:0,Fb:0,lb:f,mb:e,g:{j:0,B:f,C:e,k:0}};c.Hc=c.k;c.Uc=c.j;r(a,d.fc,c)})}function t(g,f,h){var e=g.b-f;if(e){var b=new m(f,e);b.vb(c,d);b.Pb(h);a.vb(b)}a.Ke(g.d);return e}function s(f){var d=c.Vb(),e=0;b.f(f,function(c,f){c=b.I({d:l},c);t(c,d,e);d=c.b;e+=c.d;if(!f||c.t==2){a.Jc=d;a.Kc=d+c.d}})}a.vc=function(){a.v(-1,d)};o=[f.Id,f.Hd,f.Ed,f.Cd,f.Bd,f.Ad,f.wd,f.Dd,f.Md,f.fe,f.ee,f.de,f.ed,f.ce,f.ae,f.Zd,f.Vd,f.Td,f.Sd,f.Rd,f.Qd,f.Ne,f.af,f.ag,f.Yf,f.Xf,f.Wf,f.Ze,f.Vf,f.Sf,f.Rf,f.Pf,f.Nf,f.Mf,f.bg,f.cg,f.hg];var u={j:"y",k:"x",C:"m",B:"t",db:"r",V:"rX",T:"rY",p:"sX",q:"sY",cb:"tX",fb:"tY",U:"tZ",Gb:"kX",Fb:"kY",kb:"o",W:"e",qb:"i",g:"c"};b.f(u,function(b,a){h[b]=a});q(k(n,1));c.v(-1);var p=g.Cg||[],e=[].concat(p[b.Rb(b.i(n,"b"))]||[]);e.push({b:c.Kb(),d:e.length?0:l});s(e);a.v(-1)};jssor_1_slider_init=function(){var g=[[{b:5500,d:3e3,o:-1,r:240,e:{r:2}}],[{b:-1,d:1,o:-1,c:{x:51,t:-51}},{b:0,d:1e3,o:1,c:{x:-51,t:51},e:{o:7,c:{x:7,t:7}}}],[{b:-1,d:1,o:-1,sX:9,sY:9},{b:1e3,d:1e3,o:1,sX:-9,sY:-9,e:{sX:2,sY:2}}],[{b:-1,d:1,o:-1,r:-180,sX:9,sY:9},{b:2e3,d:1e3,o:1,r:180,sX:-9,sY:-9,e:{r:2,sX:2,sY:2}}],[{b:-1,d:1,o:-1},{b:3e3,d:2e3,y:180,o:1,e:{y:16}}],[{b:-1,d:1,o:-1,r:-150},{b:7500,d:1600,o:1,r:150,e:{r:3}}],[{b:1e4,d:2e3,x:-379,e:{x:7}}],[{b:1e4,d:2e3,x:-379,e:{x:7}}],[{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:9100,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:1e4,d:1600,x:-200,o:-1,e:{x:16}}]],j={Sb:d,zb:800,zc:f.ed,eg:{J:t,jb:g},tg:{J:s},jg:{J:r}},e=new i("jssor_1",j);function a(){var b=e.L.parentNode.clientWidth;if(b){b=c.min(b,1920);e.cf(b)}else h.setTimeout(a,30)}a();b.a(h,"load",a);b.a(h,"resize",a);b.a(h,"orientationchange",a)}})(window,document,Math,null,true,false)