"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/RegistrationForm.js":
/*!****************************************!*\
  !*** ./components/RegistrationForm.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/registrationForm.module.css */ \"./styles/registrationForm.module.css\");\n/* harmony import */ var _styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst RegistrationForm = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var cookiesValue = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"IsLoggedIn\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        email: \"\",\n        password: \"\"\n    });\n    var handleInputChange = (event)=>{\n        var { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (cookiesValue == undefined) {\n            js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"IsLoggedIn\", formData.username, {\n                expires: 7\n            });\n            var dataObj = JSON.stringify(formData);\n            js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"userData\", dataObj, {\n                expires: 7\n            });\n            console.log(\"Cookie Create\");\n            console.log(formData);\n        }\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().registration_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().registration_form),\n                onSubmit: handleSubmit,\n                id: \"register_form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().form_group),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"username\",\n                                name: \"username\",\n                                value: formData.username,\n                                onChange: handleInputChange,\n                                required: true,\n                                className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputFields)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().form_group),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: handleInputChange,\n                                required: true,\n                                className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputFields)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().form_group),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                name: \"password\",\n                                value: formData.password,\n                                onChange: handleInputChange,\n                                required: true,\n                                className: (_styles_registrationForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputFields)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pritish.ghosh\\\\Documents\\\\Office\\\\Projects\\\\Gameskart\\\\components\\\\RegistrationForm.js\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, undefined);\n};\n_s(RegistrationForm, \"y5A5e4vM3mCVrljR+AeF56lOeBA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = RegistrationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationForm);\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbkZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQzBCO0FBQzFCO0FBQ087QUFFeEMsTUFBTUksbUJBQW1COztJQUNyQixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsSUFBSUcsZUFBZUoscURBQVcsQ0FBQztJQUMvQixNQUFNLENBQUNNLFVBQVdDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7UUFDdENVLFVBQVU7UUFDVkMsT0FBTTtRQUNOQyxVQUFTO0lBQ2I7SUFJQSxJQUFJQyxvQkFBbUIsQ0FBQ0M7UUFDcEIsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBQyxHQUFHRixNQUFNRyxNQUFNO1FBQ2pDUixZQUFZO1lBQUUsR0FBR0QsUUFBUTtZQUFFLENBQUNPLEtBQUssRUFBRUM7UUFBTTtJQUM3QztJQUVBLE1BQU1FLGVBQWMsQ0FBQ0o7UUFDakJBLE1BQU1LLGNBQWM7UUFDcEIsSUFBSWIsZ0JBQWdCYyxXQUFXO1lBQzNCbEIscURBQVcsQ0FBQyxjQUFjTSxTQUFTRSxRQUFRLEVBQUU7Z0JBQUNZLFNBQVU7WUFBQztZQUN6RCxJQUFJQyxVQUFVQyxLQUFLQyxTQUFTLENBQUNqQjtZQUM3Qk4scURBQVcsQ0FBQyxZQUFZcUIsU0FBUztnQkFBQ0QsU0FBVTtZQUFDO1lBQzdDSSxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDbkI7UUFDaEI7UUFDQUgsT0FBT3VCLElBQUksQ0FBQztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXN0IsbUdBQTZCOzswQkFDN0MsOERBQUMrQjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0gsV0FBVzdCLDhGQUF3QjtnQkFBRWtDLFVBQVVqQjtnQkFBY2tCLElBQUc7O2tDQUNwRSw4REFBQ1A7d0JBQUlDLFdBQVc3Qix1RkFBaUI7OzBDQUMvQiw4REFBQ3FDO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQzFCLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEwsSUFBRztnQ0FDSHJCLE1BQUs7Z0NBQ0xDLE9BQU9SLFNBQVNFLFFBQVE7Z0NBQ3hCZ0MsVUFBVTdCO2dDQUNWOEIsUUFBUTtnQ0FDUmIsV0FBVzdCLHdGQUFrQjs7Ozs7Ozs7Ozs7O2tDQUdqQyw4REFBQzRCO3dCQUFJQyxXQUFXN0IsdUZBQWlCOzswQ0FDL0IsOERBQUNxQztnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xMLElBQUc7Z0NBQ0hyQixNQUFLO2dDQUNMQyxPQUFPUixTQUFTRyxLQUFLO2dDQUNyQitCLFVBQVU3QjtnQ0FDVjhCLFFBQVE7Z0NBQ1JiLFdBQVc3Qix3RkFBa0I7Ozs7Ozs7Ozs7OztrQ0FHakMsOERBQUM0Qjt3QkFBSUMsV0FBVzdCLHVGQUFpQjs7MENBQy9CLDhEQUFDcUM7Z0NBQU1DLFNBQVE7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMTCxJQUFHO2dDQUNIckIsTUFBSztnQ0FDTEMsT0FBT1IsU0FBU0ksUUFBUTtnQ0FDeEI4QixVQUFVN0I7Z0NBQ1Y4QixRQUFRO2dDQUNSYixXQUFXN0Isd0ZBQWtCOzs7Ozs7Ozs7Ozs7a0NBR2pDLDhEQUFDNEM7d0JBQU9KLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQXhFTXJDOztRQUNhRCxrREFBU0E7OztLQUR0QkM7QUEwRU4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbkZvcm0uanM/NDlhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9yZWdpc3RyYXRpb25Gb3JtLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgIENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFJlZ2lzdHJhdGlvbkZvcm0gPSAoKSA9PntcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgdmFyIGNvb2tpZXNWYWx1ZSA9IENvb2tpZXMuZ2V0KCdJc0xvZ2dlZEluJyk7XHJcbiAgICBjb25zdCBbZm9ybURhdGEgLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOicnLFxyXG4gICAgICAgIHBhc3N3b3JkOicnXHJcbiAgICB9KTtcclxuXHJcbiAgIFxyXG4gICAgXHJcbiAgICB2YXIgaGFuZGxlSW5wdXRDaGFuZ2UgPShldmVudCk9PntcclxuICAgICAgICB2YXIgeyBuYW1lLCB2YWx1ZX0gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPShldmVudCk9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChjb29raWVzVmFsdWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KCdJc0xvZ2dlZEluJywgZm9ybURhdGEudXNlcm5hbWUsIHtleHBpcmVzIDogN30pO1xyXG4gICAgICAgICAgICB2YXIgZGF0YU9iaiA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgQ29va2llcy5zZXQoJ3VzZXJEYXRhJywgZGF0YU9iaiwge2V4cGlyZXMgOiA3fSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb29raWUgQ3JlYXRlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWdpc3RyYXRpb25fY29udGFpbmVyfT5cclxuICAgICAgPGgyPlJlZ2lzdGVyPC9oMj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMucmVnaXN0cmF0aW9uX2Zvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGlkPVwicmVnaXN0ZXJfZm9ybVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9ncm91cH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGaWVsZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9ncm91cH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RmllbGRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fZ3JvdXB9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiQ29va2llcyIsInVzZVJvdXRlciIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJyb3V0ZXIiLCJjb29raWVzVmFsdWUiLCJnZXQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidW5kZWZpbmVkIiwic2V0IiwiZXhwaXJlcyIsImRhdGFPYmoiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJyZWdpc3RyYXRpb25fY29udGFpbmVyIiwiaDIiLCJmb3JtIiwicmVnaXN0cmF0aW9uX2Zvcm0iLCJvblN1Ym1pdCIsImlkIiwiZm9ybV9ncm91cCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJpbnB1dEZpZWxkcyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RegistrationForm.js\n"));

/***/ })

});