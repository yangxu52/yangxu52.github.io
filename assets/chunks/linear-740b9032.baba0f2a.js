import{W as D,X as cn,Y as Z,Z as U,$ as hn}from"../app.e984890f.js";import{i as sn}from"./init-cc95ec8e.77b53fdd.js";function F(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function mn(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function nn(n){let t,i,r;n.length!==2?(t=F,i=(u,h)=>F(n(u),h),r=(u,h)=>n(u)-h):(t=n===F||n===mn?n:ln,i=n,r=n);function e(u,h,f=0,l=u.length){if(f<l){if(t(h,h)!==0)return l;do{const c=f+l>>>1;i(u[c],h)<0?f=c+1:l=c}while(f<l)}return f}function o(u,h,f=0,l=u.length){if(f<l){if(t(h,h)!==0)return l;do{const c=f+l>>>1;i(u[c],h)<=0?f=c+1:l=c}while(f<l)}return f}function a(u,h,f=0,l=u.length){const c=e(u,h,f,l-1);return c>f&&r(u[c-1],h)>-r(u[c],h)?c-1:c}return{left:e,center:a,right:o}}function ln(){return 0}function gn(n){return n===null?NaN:+n}const dn=nn(F),Mn=dn.right;nn(gn).center;const yn=Mn;var T=Math.sqrt(50),I=Math.sqrt(10),q=Math.sqrt(2);function pn(n,t,i){var r,e=-1,o,a,u;if(t=+t,n=+n,i=+i,n===t&&i>0)return[n];if((r=t<n)&&(o=n,n=t,t=o),(u=tn(n,t,i))===0||!isFinite(u))return[];if(u>0){let h=Math.round(n/u),f=Math.round(t/u);for(h*u<n&&++h,f*u>t&&--f,a=new Array(o=f-h+1);++e<o;)a[e]=(h+e)*u}else{u=-u;let h=Math.round(n*u),f=Math.round(t*u);for(h/u<n&&++h,f/u>t&&--f,a=new Array(o=f-h+1);++e<o;)a[e]=(h+e)/u}return r&&a.reverse(),a}function tn(n,t,i){var r=(t-n)/Math.max(0,i),e=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,e);return e>=0?(o>=T?10:o>=I?5:o>=q?2:1)*Math.pow(10,e):-Math.pow(10,-e)/(o>=T?10:o>=I?5:o>=q?2:1)}function wn(n,t,i){var r=Math.abs(t-n)/Math.max(0,i),e=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/e;return o>=T?e*=10:o>=I?e*=5:o>=q&&(e*=2),t<n?-e:e}function vn(n,t){t||(t=[]);var i=n?Math.min(t.length,n.length):0,r=t.slice(),e;return function(o){for(e=0;e<i;++e)r[e]=n[e]*(1-o)+t[e]*o;return r}}function Nn(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function kn(n,t){var i=t?t.length:0,r=n?Math.min(i,n.length):0,e=new Array(r),o=new Array(i),a;for(a=0;a<r;++a)e[a]=X(n[a],t[a]);for(;a<i;++a)o[a]=t[a];return function(u){for(a=0;a<r;++a)o[a]=e[a](u);return o}}function xn(n,t){var i=new Date;return n=+n,t=+t,function(r){return i.setTime(n*(1-r)+t*r),i}}function An(n,t){var i={},r={},e;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(e in t)e in n?i[e]=X(n[e],t[e]):r[e]=t[e];return function(o){for(e in i)r[e]=i[e](o);return r}}function X(n,t){var i=typeof t,r;return t==null||i==="boolean"?cn(t):(i==="number"?D:i==="string"?(r=Z(t))?(t=r,U):hn:t instanceof Z?U:t instanceof Date?xn:Nn(t)?vn:Array.isArray(t)?kn:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?An:D)(n,t)}function Sn(n,t){return n=+n,t=+t,function(i){return Math.round(n*(1-i)+t*i)}}function bn(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function R(n,t){if((i=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var i,r=n.slice(0,i);return[r.length>1?r[0]+r.slice(2):r,+n.slice(i+1)]}function A(n){return n=R(Math.abs(n)),n?n[1]:NaN}function jn(n,t){return function(i,r){for(var e=i.length,o=[],a=0,u=n[0],h=0;e>0&&u>0&&(h+u+1>r&&(u=Math.max(1,r-h)),o.push(i.substring(e-=u,e+u)),!((h+=u+1)>r));)u=n[a=(a+1)%n.length];return o.reverse().join(t)}}function Pn(n){return function(t){return t.replace(/[0-9]/g,function(i){return n[+i]})}}var zn=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function E(n){if(!(t=zn.exec(n)))throw new Error("invalid format: "+n);var t;return new B({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}E.prototype=B.prototype;function B(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}B.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function $n(n){n:for(var t=n.length,i=1,r=-1,e;i<t;++i)switch(n[i]){case".":r=e=i;break;case"0":r===0&&(r=i),e=i;break;default:if(!+n[i])break n;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(e+1):n}var rn;function Fn(n,t){var i=R(n,t);if(!i)return n+"";var r=i[0],e=i[1],o=e-(rn=Math.max(-8,Math.min(8,Math.floor(e/3)))*3)+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+R(n,Math.max(0,t+o-1))[0]}function W(n,t){var i=R(n,t);if(!i)return n+"";var r=i[0],e=i[1];return e<0?"0."+new Array(-e).join("0")+r:r.length>e+1?r.slice(0,e+1)+"."+r.slice(e+1):r+new Array(e-r.length+2).join("0")}const H={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:bn,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>W(n*100,t),r:W,s:Fn,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function J(n){return n}var K=Array.prototype.map,Q=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Rn(n){var t=n.grouping===void 0||n.thousands===void 0?J:jn(K.call(n.grouping,Number),n.thousands+""),i=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",e=n.decimal===void 0?".":n.decimal+"",o=n.numerals===void 0?J:Pn(K.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",u=n.minus===void 0?"−":n.minus+"",h=n.nan===void 0?"NaN":n.nan+"";function f(c){c=E(c);var m=c.fill,p=c.align,M=c.sign,S=c.symbol,N=c.zero,b=c.width,L=c.comma,w=c.precision,G=c.trim,g=c.type;g==="n"?(L=!0,g="g"):H[g]||(w===void 0&&(w=12),G=!0,g="g"),(N||m==="0"&&p==="=")&&(N=!0,m="0",p="=");var an=S==="$"?i:S==="#"&&/[boxX]/.test(g)?"0"+g.toLowerCase():"",un=S==="$"?r:/[%p]/.test(g)?a:"",O=H[g],fn=/[defgprs%]/.test(g);w=w===void 0?6:/[gprs]/.test(g)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function V(s){var v=an,d=un,k,Y,j;if(g==="c")d=O(s)+d,s="";else{s=+s;var P=s<0||1/s<0;if(s=isNaN(s)?h:O(Math.abs(s),w),G&&(s=$n(s)),P&&+s==0&&M!=="+"&&(P=!1),v=(P?M==="("?M:u:M==="-"||M==="("?"":M)+v,d=(g==="s"?Q[8+rn/3]:"")+d+(P&&M==="("?")":""),fn){for(k=-1,Y=s.length;++k<Y;)if(j=s.charCodeAt(k),48>j||j>57){d=(j===46?e+s.slice(k+1):s.slice(k))+d,s=s.slice(0,k);break}}}L&&!N&&(s=t(s,1/0));var z=v.length+s.length+d.length,y=z<b?new Array(b-z+1).join(m):"";switch(L&&N&&(s=t(y+s,y.length?b-d.length:1/0),y=""),p){case"<":s=v+s+d+y;break;case"=":s=v+y+s+d;break;case"^":s=y.slice(0,z=y.length>>1)+v+s+d+y.slice(z);break;default:s=y+v+s+d;break}return o(s)}return V.toString=function(){return c+""},V}function l(c,m){var p=f((c=E(c),c.type="f",c)),M=Math.max(-8,Math.min(8,Math.floor(A(m)/3)))*3,S=Math.pow(10,-M),N=Q[8+M/3];return function(b){return p(S*b)+N}}return{format:f,formatPrefix:l}}var $,en,on;En({thousands:",",grouping:[3],currency:["$",""]});function En(n){return $=Rn(n),en=$.format,on=$.formatPrefix,$}function Ln(n){return Math.max(0,-A(Math.abs(n)))}function Dn(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(A(t)/3)))*3-A(Math.abs(n)))}function Tn(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,A(t)-A(n))+1}function In(n){return function(){return n}}function qn(n){return+n}var _=[0,1];function x(n){return n}function C(n,t){return(t-=n=+n)?function(i){return(i-n)/t}:In(isNaN(t)?NaN:.5)}function Cn(n,t){var i;return n>t&&(i=n,n=t,t=i),function(r){return Math.max(n,Math.min(t,r))}}function Xn(n,t,i){var r=n[0],e=n[1],o=t[0],a=t[1];return e<r?(r=C(e,r),o=i(a,o)):(r=C(r,e),o=i(o,a)),function(u){return o(r(u))}}function Bn(n,t,i){var r=Math.min(n.length,t.length)-1,e=new Array(r),o=new Array(r),a=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<r;)e[a]=C(n[a],n[a+1]),o[a]=i(t[a],t[a+1]);return function(u){var h=yn(n,u,1,r)-1;return o[h](e[h](u))}}function Gn(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function On(){var n=_,t=_,i=X,r,e,o,a=x,u,h,f;function l(){var m=Math.min(n.length,t.length);return a!==x&&(a=Cn(n[0],n[m-1])),u=m>2?Bn:Xn,h=f=null,c}function c(m){return m==null||isNaN(m=+m)?o:(h||(h=u(n.map(r),t,i)))(r(a(m)))}return c.invert=function(m){return a(e((f||(f=u(t,n.map(r),D)))(m)))},c.domain=function(m){return arguments.length?(n=Array.from(m,qn),l()):n.slice()},c.range=function(m){return arguments.length?(t=Array.from(m),l()):t.slice()},c.rangeRound=function(m){return t=Array.from(m),i=Sn,l()},c.clamp=function(m){return arguments.length?(a=m?!0:x,l()):a!==x},c.interpolate=function(m){return arguments.length?(i=m,l()):i},c.unknown=function(m){return arguments.length?(o=m,c):o},function(m,p){return r=m,e=p,l()}}function Vn(){return On()(x,x)}function Yn(n,t,i,r){var e=wn(n,t,i),o;switch(r=E(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(t));return r.precision==null&&!isNaN(o=Dn(e,a))&&(r.precision=o),on(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(o=Tn(e,Math.max(Math.abs(n),Math.abs(t))))&&(r.precision=o-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(o=Ln(e))&&(r.precision=o-(r.type==="%")*2);break}}return en(r)}function Zn(n){var t=n.domain;return n.ticks=function(i){var r=t();return pn(r[0],r[r.length-1],i??10)},n.tickFormat=function(i,r){var e=t();return Yn(e[0],e[e.length-1],i??10,r)},n.nice=function(i){i==null&&(i=10);var r=t(),e=0,o=r.length-1,a=r[e],u=r[o],h,f,l=10;for(u<a&&(f=a,a=u,u=f,f=e,e=o,o=f);l-- >0;){if(f=tn(a,u,i),f===h)return r[e]=a,r[o]=u,t(r);if(f>0)a=Math.floor(a/f)*f,u=Math.ceil(u/f)*f;else if(f<0)a=Math.ceil(a*f)/f,u=Math.floor(u*f)/f;else break;h=f}return n},n}function Un(){var n=Vn();return n.copy=function(){return Gn(n,Un())},sn.apply(n,arguments),Zn(n)}export{Gn as a,nn as b,Vn as c,Un as l,wn as t};
