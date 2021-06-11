/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ */ \"./src/js/index.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n// JS\n // SCSS\n\n // SVG\n\nfunction requireAll(r) {\n  r.keys().forEach(r);\n}\n\nrequireAll(__webpack_require__(\"./src/img/svg sync recursive \\\\.svg$\")); // CSS//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL2luZGV4LmpzP2RhODQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSlNcbmltcG9ydCAnLi9qcy8nOyAvLyBTQ1NTXG5cbmltcG9ydCAnLi9zY3NzL21haW4uc2Nzcyc7IC8vIFNWR1xuXG5mdW5jdGlvbiByZXF1aXJlQWxsKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKTtcbn1cblxucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4vaW1nL3N2Zy8nLCB0cnVlLCAvXFwuc3ZnJC8pKTsgLy8gQ1NTIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/components/hello.js":
/*!************************************!*\
  !*** ./src/js/components/hello.js ***!
  \************************************/
/***/ (function() {

eval("console.log('hello from component');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVsbG8uanM/MzVkYSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVoiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnaGVsbG8gZnJvbSBjb21wb25lbnQnKTsiXSwiZmlsZSI6Ii4vc3JjL2pzL2NvbXBvbmVudHMvaGVsbG8uanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/hello.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hello */ \"./src/js/components/hello.js\");\n/* harmony import */ var _components_hello__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_hello__WEBPACK_IMPORTED_MODULE_0__);\n // import  './components/scrollspy';\n// import './components/formComponent';\n// import textFit from 'textfit';\n// Main js file\n\nvar isTouch = false;\n\nif ('ontouchstart' in document.documentElement) {\n  isTouch = true;\n}\n\ndocument.body.className += isTouch ? ' touch' : ' no-touch';\nvar mainWrap = document.querySelector('main');\n\nfunction toggle(selector, cls) {\n  var target = document.querySelectorAll(selector);\n\n  if (target) {\n    target.forEach(function (text) {\n      text.addEventListener('click', function () {\n        this.classList.toggle(cls);\n      });\n    });\n  }\n} //\n// toggle('.header__trigger','is-open');\n//example footer height detect\n// function _getAbsoluteHeight(el) {\n//     el = (typeof el === 'string') ? document.querySelector(el) : el;\n//     var styles = window.getComputedStyle(el);\n//     var margin = parseFloat(styles['marginTop']) +\n//                  parseFloat(styles['marginBottom']);\n//     return Math.ceil(el.offsetHeight + margin);\n// }\n// //footer height variable\n// function setVariableFooterHeight(){\n//     setTimeout(() => {\n//         const footerH = _getAbsoluteHeight('.footer');\n//         if(footerH !== 0){\n//             document.documentElement.style.setProperty('--footerHeight', footerH + 'px');\n//         }\n//     }, 200);\n// }\n// setVariableFooterHeight();\n// window.addEventListener(\"orientationchange\", function() {\n//     setVariableFooterHeight();\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL2pzL2luZGV4LmpzP2QyZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NvbXBvbmVudHMvaGVsbG8nOyAvLyBpbXBvcnQgICcuL2NvbXBvbmVudHMvc2Nyb2xsc3B5Jztcbi8vIGltcG9ydCAnLi9jb21wb25lbnRzL2Zvcm1Db21wb25lbnQnO1xuLy8gaW1wb3J0IHRleHRGaXQgZnJvbSAndGV4dGZpdCc7XG4vLyBNYWluIGpzIGZpbGVcblxudmFyIGlzVG91Y2ggPSBmYWxzZTtcblxuaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICBpc1RvdWNoID0gdHJ1ZTtcbn1cblxuZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgKz0gaXNUb3VjaCA/ICcgdG91Y2gnIDogJyBuby10b3VjaCc7XG52YXIgbWFpbldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmZ1bmN0aW9uIHRvZ2dsZShzZWxlY3RvciwgY2xzKSB7XG4gIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICBpZiAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0gLy9cbi8vIHRvZ2dsZSgnLmhlYWRlcl9fdHJpZ2dlcicsJ2lzLW9wZW4nKTtcbi8vZXhhbXBsZSBmb290ZXIgaGVpZ2h0IGRldGVjdFxuLy8gZnVuY3Rpb24gX2dldEFic29sdXRlSGVpZ2h0KGVsKSB7XG4vLyAgICAgZWwgPSAodHlwZW9mIGVsID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xuLy8gICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4vLyAgICAgdmFyIG1hcmdpbiA9IHBhcnNlRmxvYXQoc3R5bGVzWydtYXJnaW5Ub3AnXSkgK1xuLy8gICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHN0eWxlc1snbWFyZ2luQm90dG9tJ10pO1xuLy8gICAgIHJldHVybiBNYXRoLmNlaWwoZWwub2Zmc2V0SGVpZ2h0ICsgbWFyZ2luKTtcbi8vIH1cbi8vIC8vZm9vdGVyIGhlaWdodCB2YXJpYWJsZVxuLy8gZnVuY3Rpb24gc2V0VmFyaWFibGVGb290ZXJIZWlnaHQoKXtcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgY29uc3QgZm9vdGVySCA9IF9nZXRBYnNvbHV0ZUhlaWdodCgnLmZvb3RlcicpO1xuLy8gICAgICAgICBpZihmb290ZXJIICE9PSAwKXtcbi8vICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb290ZXJIZWlnaHQnLCBmb290ZXJIICsgJ3B4Jyk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9LCAyMDApO1xuLy8gfVxuLy8gc2V0VmFyaWFibGVGb290ZXJIZWlnaHQoKTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgc2V0VmFyaWFibGVGb290ZXJIZWlnaHQoKTtcbi8vIH0pOyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[4]!./src/scss/main.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[4]!./src/scss/main.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function() {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s1XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s1XS51c2VbNF0hLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL3Njc3MvbWFpbi5zY3NzPzQwZjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[4]!./src/scss/main.scss\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!../../node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[3]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[4]!./main.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[4]!./src/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL3Njc3MvbWFpbi5zY3NzPzJjOWQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNV0udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNV0udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s1XS51c2VbNF0hLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ }),

/***/ "./src/img/svg/arrow.svg":
/*!*******************************!*\
  !*** ./src/img/svg/arrow.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({\n  \"id\": \"arrow\",\n  \"use\": \"arrow-usage\",\n  \"viewBox\": \"0 0 156.73 83.36\",\n  \"content\": \"<symbol xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 156.73 83.36\\\" id=\\\"arrow\\\">\\r\\n    <defs>\\r\\n        <style>\\r\\n            #arrow .cls-1 {\\r\\n                fill: none;\\r\\n                stroke-linecap: round;\\r\\n                stroke-linejoin: round;\\r\\n                stroke-width: 10px;\\r\\n            }\\r\\n        </style>\\r\\n    </defs>\\r\\n    <polyline class=\\\"cls-1\\\" points=\\\"151.73 5 78.36 78.36 5 5\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL3N2Zy9hcnJvdy5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL2ltZy9zdmcvYXJyb3cuc3ZnP2Q1MjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiYXJyb3dcIixcbiAgXCJ1c2VcIjogXCJhcnJvdy11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTU2LjczIDgzLjM2XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTU2LjczIDgzLjM2XFxcIiBpZD1cXFwiYXJyb3dcXFwiPlxcclxcbiAgICA8ZGVmcz5cXHJcXG4gICAgICAgIDxzdHlsZT5cXHJcXG4gICAgICAgICAgICAjYXJyb3cgLmNscy0xIHtcXHJcXG4gICAgICAgICAgICAgICAgZmlsbDogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcclxcbiAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcclxcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg6IDEwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgPC9zdHlsZT5cXHJcXG4gICAgPC9kZWZzPlxcclxcbiAgICA8cG9seWxpbmUgY2xhc3M9XFxcImNscy0xXFxcIiBwb2ludHM9XFxcIjE1MS43MyA1IDc4LjM2IDc4LjM2IDUgNVxcXCIgLz5cXHJcXG48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/svg/arrow.svg\n");

/***/ }),

/***/ "./src/img/svg sync recursive \\.svg$":
/*!**********************************!*\
  !*** ./src/img/svg/ sync \.svg$ ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./arrow.svg": "./src/img/svg/arrow.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img/svg sync recursive \\.svg$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkname"] = self["webpackChunkname"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0&port=8081"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map