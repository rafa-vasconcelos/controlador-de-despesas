"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatarMoeda: function() { return /* binding */ formatarMoeda; }\n/* harmony export */ });\nfunction formatarMoeda(valor) {\n    if (valor == null || isNaN(valor)) {\n        return \"R$ 0,00\";\n    }\n    return new Intl.NumberFormat(\"pt-BR\", {\n        style: \"currency\",\n        currency: \"BRL\",\n        minimumFractionDigits: 2,\n        maximumFractionDigits: 2\n    }).format(valor);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi91dGlscy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsY0FBY0MsS0FBYztJQUMxQyxJQUFJQSxTQUFTLFFBQVFDLE1BQU1ELFFBQVE7UUFDakMsT0FBTztJQUNUO0lBRUEsT0FBTyxJQUFJRSxLQUFLQyxZQUFZLENBQUMsU0FBUztRQUNwQ0MsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLHVCQUF1QjtRQUN2QkMsdUJBQXVCO0lBQ3pCLEdBQUdDLE1BQU0sQ0FBQ1I7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvdXRpbHMudHM/Zjc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZm9ybWF0YXJNb2VkYSh2YWxvcj86IG51bWJlcik6IHN0cmluZyB7XG4gIGlmICh2YWxvciA9PSBudWxsIHx8IGlzTmFOKHZhbG9yKSkge1xuICAgIHJldHVybiBcIlIkIDAsMDBcIjtcbiAgfVxuXG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJwdC1CUlwiLCB7XG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICBjdXJyZW5jeTogXCJCUkxcIixcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICB9KS5mb3JtYXQodmFsb3IpO1xufVxuIl0sIm5hbWVzIjpbImZvcm1hdGFyTW9lZGEiLCJ2YWxvciIsImlzTmFOIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/utils.ts\n"));

/***/ })

});