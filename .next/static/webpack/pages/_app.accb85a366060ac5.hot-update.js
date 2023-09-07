"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    // Selecting cart from global state\n    const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart);\n    // Getting the count of items\n    const getItemsCount = ()=>{\n        return cart.reduce((accumulator, item)=>accumulator + item.quantity, 0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navbar),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: \"Gamerkart\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                    lineNumber: 20,\n                    columnNumber: 35\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().links),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navlink),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navlink),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/shop\",\n                            children: \"Shop\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navlink),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/cart\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Cart (\",\n                                    getItemsCount(),\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"F/eUaK1jsOscSpo7EHWodw6fhDE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2E7QUFDTztBQUNoQjtBQUNVO0FBRTNDLE1BQU1NLFNBQVM7O0lBRWIsbUNBQW1DO0lBQ25DLE1BQU1DLE9BQU9OLHdEQUFXQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1ELElBQUk7SUFFOUMsNkJBQTZCO0lBQzdCLE1BQU1FLGdCQUFnQjtRQUNwQixPQUFPRixLQUFLRyxNQUFNLENBQUMsQ0FBQ0MsYUFBYUMsT0FBU0QsY0FBY0MsS0FBS0MsUUFBUSxFQUFFO0lBQ3pFO0lBR0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdiLHlFQUFhOzswQkFDM0IsOERBQUNlO2dCQUFHRixXQUFXYix1RUFBVzswQkFBRSw0RUFBQ0Ysa0RBQUlBO29CQUFDbUIsTUFBSzs4QkFBSTs7Ozs7Ozs7Ozs7MEJBQzNDLDhEQUFDQztnQkFBR0wsV0FBV2Isd0VBQVk7O2tDQUN6Qiw4REFBQ29CO3dCQUFHUCxXQUFXYiwwRUFBYztrQ0FDM0IsNEVBQUNGLGtEQUFJQTs0QkFBQ21CLE1BQUs7c0NBQUk7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQ0c7d0JBQUdQLFdBQVdiLDBFQUFjO2tDQUMzQiw0RUFBQ0Ysa0RBQUlBOzRCQUFDbUIsTUFBSztzQ0FBUTs7Ozs7Ozs7Ozs7a0NBRXJCLDhEQUFDRzt3QkFBR1AsV0FBV2IsMEVBQWM7a0NBQzNCLDRFQUFDRixrREFBSUE7NEJBQUNtQixNQUFLO3NDQUNULDRFQUFDSzs7b0NBQUU7b0NBQU9mO29DQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEM7R0E3Qk1IOztRQUdTTCxvREFBV0E7OztLQUhwQks7QUErQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgIENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuXHJcbiAgLy8gU2VsZWN0aW5nIGNhcnQgZnJvbSBnbG9iYWwgc3RhdGVcclxuICBjb25zdCBjYXJ0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0KTtcclxuXHJcbiAgLy8gR2V0dGluZyB0aGUgY291bnQgb2YgaXRlbXNcclxuICBjb25zdCBnZXRJdGVtc0NvdW50ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnQucmVkdWNlKChhY2N1bXVsYXRvciwgaXRlbSkgPT4gYWNjdW11bGF0b3IgKyBpdGVtLnF1YW50aXR5LCAwKTtcclxuICB9O1xyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICA8aDYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+PExpbmsgaHJlZj1cIi9cIj5HYW1lcmthcnQ8L0xpbms+PC9oNj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2bGlua30+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2bGlua30+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5TaG9wPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmxpbmt9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgIDxwPkNhcnQgKHtnZXRJdGVtc0NvdW50KCl9KTwvcD5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiTGluayIsInVzZVNlbGVjdG9yIiwic3R5bGVzIiwiQ29va2llcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiY2FydCIsInN0YXRlIiwiZ2V0SXRlbXNDb3VudCIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiaXRlbSIsInF1YW50aXR5IiwibmF2IiwiY2xhc3NOYW1lIiwibmF2YmFyIiwiaDYiLCJsb2dvIiwiaHJlZiIsInVsIiwibGlua3MiLCJsaSIsIm5hdmxpbmsiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});