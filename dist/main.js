(()=>{"use strict";var e={735:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"body{\n  background-color: #BBA584;\n  \n};\n\n#header{\n  display: flex;\n  margin: 0\n}\n\n#nav{\n  margin-left: 39%;\n  width: fit-content;\n  display: flex;\n  justify-content: center;\n\n}\n\n#content{\n  padding-top: 25px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nnav > button{\n  border: none;\n  background: none;\n  font-size: 25px;\n  margin: 25px;\n}\n\nnav > button:hover{\n  color: #523d52;\n}\n\n#title{\n  font-size: 25px;\n  margin-bottom: 25px;\n  border: thin dashed #223030;\n  padding: 15px;\n  width: 50%;\n}\n\n",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),d=t(540),u=t.n(d),l=t(113),p=t.n(l),f=t(735),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),n()(f.A,m),f.A&&f.A.locals&&f.A.locals;const v=document.getElementById("content");function h(){if(v.hasChildNodes())for(;v.firstChild;)v.removeChild(v.firstChild)}function y(){h();const e=document.createElement("div");e.setAttribute("id","title"),e.innerHTML="Coziest Cafe";const n=document.createElement("div");n.innerHTML="Welcome to the Coziest Cafe this side of the Mississippi! Bring a friend or grab a book and cozy on in with bverage and a bite";const t=document.createElement("div"),r=document.createElement("p"),o=document.createElement("p"),a=document.createElement("p");r.innerHTML="Mon - Fri: 8AM-7PM",o.innerHTML="Sat: 8AM - 9PM",a.innerHTML="Sun: Closed",t.append(r,o,a),v.append(e,n,t)}console.log("src index load"),y();const g=document.getElementById("home"),b=document.getElementById("menu"),x=document.getElementById("contact");g.addEventListener("click",(()=>{y()})),b.addEventListener("click",(()=>{!function(){h();const e=document.createElement("div");e.innerHTML="Coffee Orders here";const n=document.createElement("div");n.innerHTML="Teas here";const t=document.createElement("div");t.innerHTML="yummy pastires",v.append(e,n,t)}()})),x.addEventListener("click",(()=>{!function(){h();const e=document.createElement("div");e.innerHTML="To make a reservation call 213-867-5309";const n=document.createElement("div");n.innerHTML="For catering services call 867-999-8212";const t=document.createElement("div");t.innerHTML="You can also email us at email@email.com",v.append(e,n,t)}()}))})()})();