// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,V=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,i,t,a,o,p,l,u,f;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=$(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,i,t,n;for(i=[],n=0,t=T.exec(e);t;)(r=e.slice(n,T.lastIndex-t[0].length)).length&&i.push(r),i.push(I(t)),n=T.lastIndex,t=T.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function j(e){return"string"==typeof e}function _(e){var r,i;if(!j(e))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return F.apply(null,r)}var C,R=Object.prototype,Z=R.toString,O=R.__defineGetter__,W=R.__defineSetter__,L=R.__lookupGetter__,P=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(_("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===Z.call(i))throw new TypeError(_("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(L.call(e,r)||P.call(e,r)?(t=e.__proto__,e.__proto__=R,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,i.get),o&&W&&W.call(e,r,i.set),e};var G=C;function N(e,r,i){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function U(e){return"string"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return X&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var D=B()?function(e){var r,i,t,n,a;if(null==e)return M.call(e);i=e[q],a=q,r=null!=(n=e)&&z.call(n,a);try{e[q]=void 0}catch(r){return M.call(e)}return t=M.call(e),r?e[q]=i:delete e[q],t}:function(e){return M.call(e)},H=String.prototype.valueOf;var K=B();function Q(e){return"object"==typeof e&&(e instanceof String||(K?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object String]"===D(e)))}function Y(e){return U(e)||Q(e)}N(Y,"isPrimitive",U),N(Y,"isObject",Q);var ee=/./;function re(e){return"boolean"==typeof e}var ie=Boolean,te=Boolean.prototype.toString;var ne=B();function ae(e){return"object"==typeof e&&(e instanceof ie||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function oe(e){return re(e)||ae(e)}function se(e){return"number"==typeof e}function ce(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function pe(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ce(n):ce(n)+e,t&&(e="-"+e)),e}N(oe,"isPrimitive",re),N(oe,"isObject",ae);var le=String.prototype.toLowerCase,ue=String.prototype.toUpperCase;function fe(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!se(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=pe(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=pe(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ue.call(e.specifier)?ue.call(i):le.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ge(e){return"string"==typeof e}var de=Math.abs,he=String.prototype.toLowerCase,we=String.prototype.toUpperCase,be=String.prototype.replace,ve=/e\+(\d)$/,ye=/e-(\d)$/,me=/^(\d+)$/,Ee=/^(\d+)e/,xe=/\.0$/,ke=/\.0*e/,Se=/(\..*[^0])0*e/;function Ve(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!se(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":de(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=be.call(i,Se,"$1e"),i=be.call(i,ke,"e"),i=be.call(i,xe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=be.call(i,ve,"e+0$1"),i=be.call(i,ye,"e-0$1"),e.alternate&&(i=be.call(i,me,"$1."),i=be.call(i,Ee,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===we.call(e.specifier)?we.call(i):he.call(i)}function $e(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Fe(e,r,i){var t=r-e.length;return t<0?e:e=i?e+$e(t):$e(t)+e}var Te=String.fromCharCode,Ie=isNaN,Ae=Array.isArray;function je(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _e(e){var r,i,t,n,a,o,s,c,p;if(!Ae(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ge(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=je(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ie(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ie(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=fe(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ie(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ie(a)?String(t.arg):Te(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ve(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=pe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Fe(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ce=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Re(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ze(e){var r,i,t,n;for(i=[],n=0,t=Ce.exec(e);t;)(r=e.slice(n,Ce.lastIndex-t[0].length)).length&&i.push(r),i.push(Re(t)),n=Ce.lastIndex,t=Ce.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Oe(e){return"string"==typeof e}function We(e){var r,i;if(!Oe(e))throw new TypeError(We("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ze(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return _e.apply(null,r)}function Le(){return new Function("return this;")()}var Pe="object"==typeof self?self:null,Ge="object"==typeof window?window:null,Ne="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ue="object"==typeof Ne?Ne:null,Xe="object"==typeof globalThis?globalThis:null;var Be=function(e){if(arguments.length){if(!re(e))throw new TypeError(We("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Le()}if(Xe)return Xe;if(Pe)return Pe;if(Ge)return Ge;if(Ue)return Ue;throw new Error("unexpected error. Unable to resolve global object.")}(),Me=Be.document&&Be.document.childNodes,ze=Int8Array;function Je(){return/^\s*function\s*([^(]*)/i}var qe=/^\s*function\s*([^(]*)/i;N(Je,"REGEXP",qe);var De=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};function He(e){return"number"==typeof e}function Ke(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Qe(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Ke(n):Ke(n)+e,t&&(e="-"+e)),e}var Ye=String.prototype.toLowerCase,er=String.prototype.toUpperCase;function rr(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!He(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Qe(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Qe(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===er.call(e.specifier)?er.call(i):Ye.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ir(e){return"string"==typeof e}var tr=Math.abs,nr=String.prototype.toLowerCase,ar=String.prototype.toUpperCase,or=String.prototype.replace,sr=/e\+(\d)$/,cr=/e-(\d)$/,pr=/^(\d+)$/,lr=/^(\d+)e/,ur=/\.0$/,fr=/\.0*e/,gr=/(\..*[^0])0*e/;function dr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!He(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":tr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=or.call(i,gr,"$1e"),i=or.call(i,fr,"e"),i=or.call(i,ur,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=or.call(i,sr,"e+0$1"),i=or.call(i,cr,"e-0$1"),e.alternate&&(i=or.call(i,pr,"$1."),i=or.call(i,lr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ar.call(e.specifier)?ar.call(i):nr.call(i)}function hr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function wr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+hr(t):hr(t)+e}var br=String.fromCharCode,vr=isNaN,yr=Array.isArray;function mr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Er(e){var r,i,t,n,a,o,s,c,p;if(!yr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ir(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=mr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,vr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,vr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=rr(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!vr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=vr(a)?String(t.arg):br(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=dr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Qe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=wr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var xr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function kr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Sr(e){var r,i,t,n;for(i=[],n=0,t=xr.exec(e);t;)(r=e.slice(n,xr.lastIndex-t[0].length)).length&&i.push(r),i.push(kr(t)),n=xr.lastIndex,t=xr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Vr(e){return"string"==typeof e}function $r(e){var r,i;if(!Vr(e))throw new TypeError($r("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Sr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Er.apply(null,r)}function Fr(e){return null!==e&&"object"==typeof e}function Tr(e){var r,i,t,n;if(("Object"===(i=D(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=qe.exec(t.toString()))return r[1]}return Fr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}N(Fr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError($r("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!De(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Fr));var Ir="function"==typeof ee||"object"==typeof ze||"function"==typeof Me?function(e){return Tr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Tr(e).toLowerCase():r};function Ar(e){return"function"===Ir(e)}function jr(e){return"number"==typeof e}function _r(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Cr(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+_r(n):_r(n)+e,t&&(e="-"+e)),e}var Rr=String.prototype.toLowerCase,Zr=String.prototype.toUpperCase;function Or(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!jr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Cr(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Cr(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Zr.call(e.specifier)?Zr.call(i):Rr.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Wr(e){return"string"==typeof e}var Lr=Math.abs,Pr=String.prototype.toLowerCase,Gr=String.prototype.toUpperCase,Nr=String.prototype.replace,Ur=/e\+(\d)$/,Xr=/e-(\d)$/,Br=/^(\d+)$/,Mr=/^(\d+)e/,zr=/\.0$/,Jr=/\.0*e/,qr=/(\..*[^0])0*e/;function Dr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!jr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Lr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Nr.call(i,qr,"$1e"),i=Nr.call(i,Jr,"e"),i=Nr.call(i,zr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Nr.call(i,Ur,"e+0$1"),i=Nr.call(i,Xr,"e-0$1"),e.alternate&&(i=Nr.call(i,Br,"$1."),i=Nr.call(i,Mr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Gr.call(e.specifier)?Gr.call(i):Pr.call(i)}function Hr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Kr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Hr(t):Hr(t)+e}var Qr=String.fromCharCode,Yr=isNaN,ei=Array.isArray;function ri(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ii(e){var r,i,t,n,a,o,s,c,p;if(!ei(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Wr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=ri(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Yr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Yr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Or(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Yr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Yr(a)?String(t.arg):Qr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Dr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Cr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Kr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var ti=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ni(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ai(e){var r,i,t,n;for(i=[],n=0,t=ti.exec(e);t;)(r=e.slice(n,ti.lastIndex-t[0].length)).length&&i.push(r),i.push(ni(t)),n=ti.lastIndex,t=ti.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function oi(e){return"string"==typeof e}function si(e){var r,i,t;if(!oi(e))throw new TypeError(si("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ai(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return ii.apply(null,i)}function ci(e,r){if(!U(e))throw new TypeError(si("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1&&!Ar(r))throw new TypeError(si("invalid argument. Reviver argument must be a function. Value: `%s`.",r));try{return JSON.parse(e,r)}catch(e){return e}}export{ci as default};
//# sourceMappingURL=mod.js.map
