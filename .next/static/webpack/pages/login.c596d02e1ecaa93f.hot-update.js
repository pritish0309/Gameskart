"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/registrationForm.module.css */ \"./styles/registrationForm.module.css\");\n/* harmony import */ var _styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var cookiesData = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"userData\");\n    if (cookiesData) {\n        var cookieOutput = JSON.parse(cookiesData);\n    }\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        username: \"\",\n        email: \"\",\n        password: \"\"\n    });\n    var handleInputChange = (event)=>{\n        var { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(formData);\n        console.log(cookieOutput);\n        if (formData && cookieOutput) {\n            if (formData.username == cookieOutput.username) {\n                router.push(\"/\");\n            }\n        }\n        return false;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().registration_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().registration_form),\n                onSubmit: handleSubmit,\n                id: \"register_form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().form_group),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"username\",\n                                name: \"username\",\n                                value: formData.username,\n                                onChange: handleInputChange,\n                                required: true,\n                                className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputFields)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().form_group),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: handleInputChange,\n                                required: true,\n                                className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputFields)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().form_group),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                name: \"password\",\n                                value: formData.password,\n                                onChange: handleInputChange,\n                                required: true,\n                                className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputFields)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\pages\\\\login.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"y5A5e4vM3mCVrljR+AeF56lOeBA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDMEI7QUFDMUI7QUFDTztBQUd4QyxNQUFNSSxRQUFROztJQUNWLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixJQUFJRyxjQUFjTixxREFBVyxDQUFDO0lBQzlCLElBQUlNLGFBQWE7UUFDYixJQUFJRSxlQUFlQyxLQUFLQyxLQUFLLENBQUNKO0lBQ2xDO0lBRUEsTUFBTSxDQUFDSyxVQUFXQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO1FBQ3RDVyxVQUFVO1FBQ1ZDLE9BQU07UUFDTkMsVUFBUztJQUNiO0lBSUEsSUFBSUMsb0JBQW1CLENBQUNDO1FBQ3BCLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUMsR0FBR0YsTUFBTUcsTUFBTTtRQUNqQ1IsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDTyxLQUFLLEVBQUVDO1FBQU07SUFDN0M7SUFFQSxNQUFNRSxlQUFjLENBQUNKO1FBQ2pCQSxNQUFNSyxjQUFjO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUNiO1FBQ1pZLFFBQVFDLEdBQUcsQ0FBQ2hCO1FBQ1osSUFBSUcsWUFBWUgsY0FBYztZQUMxQixJQUFJRyxTQUFTRSxRQUFRLElBQUlMLGFBQWFLLFFBQVEsRUFBRTtnQkFDNUNSLE9BQU9vQixJQUFJLENBQUM7WUFDaEI7UUFDSjtRQUNBLE9BQU87SUFDWDtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXMUIsbUdBQTZCOzswQkFDekMsOERBQUM0QjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0gsV0FBVzFCLDhGQUF3QjtnQkFBRStCLFVBQVVYO2dCQUFjWSxJQUFHOztrQ0FDdEUsOERBQUNQO3dCQUFJQyxXQUFXMUIsdUZBQWlCOzswQ0FDakMsOERBQUNrQztnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQ0dDLE1BQUs7Z0NBQ0xMLElBQUc7Z0NBQ0hmLE1BQUs7Z0NBQ0xDLE9BQU9SLFNBQVNFLFFBQVE7Z0NBQ3hCMEIsVUFBVXZCO2dDQUNWd0IsUUFBUTtnQ0FDUmIsV0FBVzFCLHdGQUFrQjs7Ozs7Ozs7Ozs7O2tDQUdqQyw4REFBQ3lCO3dCQUFJQyxXQUFXMUIsdUZBQWlCOzswQ0FDakMsOERBQUNrQztnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQ0dDLE1BQUs7Z0NBQ0xMLElBQUc7Z0NBQ0hmLE1BQUs7Z0NBQ0xDLE9BQU9SLFNBQVNHLEtBQUs7Z0NBQ3JCeUIsVUFBVXZCO2dDQUNWd0IsUUFBUTtnQ0FDUmIsV0FBVzFCLHdGQUFrQjs7Ozs7Ozs7Ozs7O2tDQUdqQyw4REFBQ3lCO3dCQUFJQyxXQUFXMUIsdUZBQWlCOzswQ0FDakMsOERBQUNrQztnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQ0dDLE1BQUs7Z0NBQ0xMLElBQUc7Z0NBQ0hmLE1BQUs7Z0NBQ0xDLE9BQU9SLFNBQVNJLFFBQVE7Z0NBQ3hCd0IsVUFBVXZCO2dDQUNWd0IsUUFBUTtnQ0FDUmIsV0FBVzFCLHdGQUFrQjs7Ozs7Ozs7Ozs7O2tDQUdqQyw4REFBQ3lDO3dCQUFPSixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEM7R0E3RU1sQzs7UUFDYUQsa0RBQVNBOzs7S0FEdEJDO0FBOEVOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvcmVnaXN0cmF0aW9uRm9ybS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PntcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHZhciBjb29raWVzRGF0YSA9IENvb2tpZXMuZ2V0KCd1c2VyRGF0YScpO1xyXG4gICAgaWYgKGNvb2tpZXNEYXRhKSB7XHJcbiAgICAgICAgdmFyIGNvb2tpZU91dHB1dCA9IEpTT04ucGFyc2UoY29va2llc0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtmb3JtRGF0YSAsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6JycsXHJcbiAgICAgICAgcGFzc3dvcmQ6JydcclxuICAgIH0pO1xyXG5cclxuICAgXHJcbiAgICBcclxuICAgIHZhciBoYW5kbGVJbnB1dENoYW5nZSA9KGV2ZW50KT0+e1xyXG4gICAgICAgIHZhciB7IG5hbWUsIHZhbHVlfSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9KGV2ZW50KT0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb2tpZU91dHB1dCk7XHJcbiAgICAgICAgaWYgKGZvcm1EYXRhICYmIGNvb2tpZU91dHB1dCkge1xyXG4gICAgICAgICAgICBpZiAoZm9ybURhdGEudXNlcm5hbWUgPT0gY29va2llT3V0cHV0LnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWdpc3RyYXRpb25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGgyPkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMucmVnaXN0cmF0aW9uX2Zvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGlkPVwicmVnaXN0ZXJfZm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fZ3JvdXB9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGaWVsZHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fZ3JvdXB9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RmllbGRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2dyb3VwfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwibmFtZXMiOlsiQ29va2llcyIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTG9naW4iLCJyb3V0ZXIiLCJjb29raWVzRGF0YSIsImdldCIsImNvb2tpZU91dHB1dCIsIkpTT04iLCJwYXJzZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInJlZ2lzdHJhdGlvbl9jb250YWluZXIiLCJoMiIsImZvcm0iLCJyZWdpc3RyYXRpb25fZm9ybSIsIm9uU3VibWl0IiwiaWQiLCJmb3JtX2dyb3VwIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImlucHV0RmllbGRzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});