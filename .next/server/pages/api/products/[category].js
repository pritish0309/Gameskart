"use strict";
(() => {
var exports = {};
exports.id = 458;
exports.ids = [458];
exports.modules = {

/***/ 4851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   getProductsByCategory: () => (/* binding */ getProductsByCategory)
/* harmony export */ });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5066);

function getProductsByCategory(category) {
    const products = _data_json__WEBPACK_IMPORTED_MODULE_0__.filter((product)=>product.category === category);
    return products;
}
function handler(req, res) {
    if (req.method !== "GET") {
        res.setHeader("Allow", [
            "GET"
        ]);
        res.status(405).json({
            message: `Method ${req.method} is not allowed`
        });
    } else {
        const products = getProductsByCategory(req.query.category);
        res.status(200).json(products);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [66], () => (__webpack_exec__(4851)));
module.exports = __webpack_exports__;

})();