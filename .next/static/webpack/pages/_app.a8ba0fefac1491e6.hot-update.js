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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = (props)=>{\n    _s();\n    // Selecting cart from global state\n    const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart);\n    // Getting the count of items\n    const getItemsCount = ()=>{\n        return cart.reduce((accumulator, item)=>accumulator + item.quantity, 0);\n    };\n    var cookiesExists = props.cookieValue;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: \"Gamerkart\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                    lineNumber: 18,\n                    columnNumber: 35\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().links),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/shop\",\n                            children: \"Shop\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/cart\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Cart (\",\n                                    getItemsCount(),\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    cookiesExists ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"\",\n                            children: cookiesExists\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined) : \"\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\Navbar.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"F/eUaK1jsOscSpo7EHWodw6fhDE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBQ2E7QUFDTztBQUVqRCxNQUFNRyxTQUFTLENBQUNDOztJQUVkLG1DQUFtQztJQUNuQyxNQUFNQyxPQUFPSix3REFBV0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNRCxJQUFJO0lBRTlDLDZCQUE2QjtJQUM3QixNQUFNRSxnQkFBZ0I7UUFDcEIsT0FBT0YsS0FBS0csTUFBTSxDQUFDLENBQUNDLGFBQWFDLE9BQVNELGNBQWNDLEtBQUtDLFFBQVEsRUFBRTtJQUN6RTtJQUNBLElBQUlDLGdCQUFnQlIsTUFBTVMsV0FBVztJQUVyQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2IseUVBQWE7OzBCQUMzQiw4REFBQ2U7Z0JBQUdGLFdBQVdiLHVFQUFXOzBCQUFFLDRFQUFDRixrREFBSUE7b0JBQUNtQixNQUFLOzhCQUFJOzs7Ozs7Ozs7OzswQkFDM0MsOERBQUNDO2dCQUFHTCxXQUFXYix3RUFBWTs7a0NBQ3pCLDhEQUFDb0I7d0JBQUdQLFdBQVdiLDBFQUFjO2tDQUMzQiw0RUFBQ0Ysa0RBQUlBOzRCQUFDbUIsTUFBSztzQ0FBSTs7Ozs7Ozs7Ozs7a0NBRWpCLDhEQUFDRzt3QkFBR1AsV0FBV2IsMEVBQWM7a0NBQzNCLDRFQUFDRixrREFBSUE7NEJBQUNtQixNQUFLO3NDQUFROzs7Ozs7Ozs7OztrQ0FFckIsOERBQUNHO3dCQUFHUCxXQUFXYiwwRUFBYztrQ0FDM0IsNEVBQUNGLGtEQUFJQTs0QkFBQ21CLE1BQUs7c0NBQ1QsNEVBQUNLOztvQ0FBRTtvQ0FBT2pCO29DQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBRzdCSyw4QkFDRCw4REFBQ1U7d0JBQUdQLFdBQVdiLDBFQUFjO2tDQUMzQiw0RUFBQ0Ysa0RBQUlBOzRCQUFDbUIsTUFBSztzQ0FBSVA7Ozs7Ozs7Ozs7b0NBRWhCOzs7Ozs7Ozs7Ozs7O0FBS1Q7R0FuQ01UOztRQUdTRixvREFBV0E7OztLQUhwQkU7QUFxQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIC8vIFNlbGVjdGluZyBjYXJ0IGZyb20gZ2xvYmFsIHN0YXRlXHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydCk7XHJcblxyXG4gIC8vIEdldHRpbmcgdGhlIGNvdW50IG9mIGl0ZW1zXHJcbiAgY29uc3QgZ2V0SXRlbXNDb3VudCA9ICgpID0+IHtcclxuICAgIHJldHVybiBjYXJ0LnJlZHVjZSgoYWNjdW11bGF0b3IsIGl0ZW0pID0+IGFjY3VtdWxhdG9yICsgaXRlbS5xdWFudGl0eSwgMCk7XHJcbiAgfTtcclxuICB2YXIgY29va2llc0V4aXN0cyA9IHByb3BzLmNvb2tpZVZhbHVlO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgIDxoNiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT48TGluayBocmVmPVwiL1wiPkdhbWVya2FydDwvTGluaz48L2g2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZsaW5rfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZsaW5rfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlNob3A8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2bGlua30+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgPHA+Q2FydCAoe2dldEl0ZW1zQ291bnQoKX0pPC9wPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge2Nvb2tpZXNFeGlzdHMgPyBcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2bGlua30+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiXCI+e2Nvb2tpZXNFeGlzdHN9PC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgOicnXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiTGluayIsInVzZVNlbGVjdG9yIiwic3R5bGVzIiwiTmF2YmFyIiwicHJvcHMiLCJjYXJ0Iiwic3RhdGUiLCJnZXRJdGVtc0NvdW50IiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpdGVtIiwicXVhbnRpdHkiLCJjb29raWVzRXhpc3RzIiwiY29va2llVmFsdWUiLCJuYXYiLCJjbGFzc05hbWUiLCJuYXZiYXIiLCJoNiIsImxvZ28iLCJocmVmIiwidWwiLCJsaW5rcyIsImxpIiwibmF2bGluayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});