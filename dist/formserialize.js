!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(5),o=n(6),u=n(7);t.exports=function(t){return r(t)||o(t)||u()}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return s});var r=n(2),o=n.n(r),u=n(0),i=n.n(u),a=n(3),c=n.n(a),f=n(1),l=n.n(f),s=function(){function t(e){c()(this,t),this.form=t.serialize(e)}return l()(t,null,[{key:"BLACK_LIST",get:function(){return{elements:["button","file","reset","submit"]}}}]),l()(t,[{key:"getData",value:function(e){switch(e){case"array":return t.getFormDataArray(this.form);case"object":return t.getFormDataObject(this.form);default:return this.form.join("&").replace(/%20/g,"+")}}}],[{key:"getFormDataArray",value:function(t){return i()(t.map(function(t){var e=t.split("=");return{name:e[0],value:e[1]}}))}},{key:"getFormDataObject",value:function(t){var e={};return t.forEach(function(t){var n=t.split("=");e[n[0]]=n[1]}),e}},{key:"isValidForm",value:function(t){return"object"===o()(t)&&"FORM"===t.nodeName}},{key:"isvalidElement",value:function(e){return e.name&&!e.disabled&&!t.BLACK_LIST.elements.includes(e.type)}},{key:"serialize",value:function(e){var n=[];return t.isValidForm(e)&&i()(e.elements).forEach(function(e){t.isvalidElement(e)&&("checkbox"!==e.type&&"radio"!==e.type||e.checked?n.push("".concat(e.name,"=").concat(e.value)):"select-multiple"===e.type&&e.options.forEach(function(t){t.selected&&n.push("".concat(e.name,"=").concat(t.value))}))}),n}}]),t}()},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}]);
//# sourceMappingURL=formserialize.js.map