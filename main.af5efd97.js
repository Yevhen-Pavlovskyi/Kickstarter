parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")}),window.addEventListener("DOMContentLoaded",function(e){var t=document.getElementById("left-features"),d=document.getElementById("right-features");t.addEventListener("click",function(){n(-1)}),d.addEventListener("click",function(){n(1)})});var e=document.getElementById("now"),t=1;function n(e){d(t+=e)}function d(n){var d,o=document.getElementsByClassName("features__slide");for(n>o.length&&(t=1),n<1&&(t=o.length),d=0;d<o.length;d++)o[d].style.display="none";o[t-1].style.display="block",e.textContent="0"+t}d(t);var o=document.getElementById("form");o.onsubmit=function(){return document.getElementById("form").reset(),!1};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.af5efd97.js.map