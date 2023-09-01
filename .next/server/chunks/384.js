exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 3893:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "product_card__FeHbG",
	"title": "product_title__i4WJq",
	"category": "product_category__sd9y5",
	"button": "product_button__B_IOD"
};


/***/ }),

/***/ 1812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_cart_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2963);
/* harmony import */ var _styles_product_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3893);
/* harmony import */ var _styles_product_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_product_module_css__WEBPACK_IMPORTED_MODULE_4__);





const ProductCard = ({ product })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_4___default()),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: product.image,
                height: 300,
                width: 220
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
                children: product.product
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_4___default().category),
                children: product.category
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "$ ",
                    product.price
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>dispatch((0,_redux_cart_slice__WEBPACK_IMPORTED_MODULE_3__/* .addToCart */ .Xq)(product)),
                className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
                children: "Add to Cart"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);


/***/ }),

/***/ 5385:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":1,"product":"Cyberpunk 2077","category":"xbox","image":"https://imgur.com/3CF1UhY.png","price":36.49},{"id":2,"product":"Grand Theft Auto 5","category":"xbox","image":"https://imgur.com/BqNWnDB.png","price":21.99},{"id":3,"product":"Minecraft","category":"xbox","image":"https://imgur.com/LXnUnd2.png","price":49.99},{"id":4,"product":"PUBG","category":"xbox","image":"https://imgur.com/Ondg3Jn.png","price":5.09},{"id":5,"product":"FIFA 21","category":"xbox","image":"https://imgur.com/AzT9YMP.png","price":17.49},{"id":6,"product":"Battlefield 5","category":"xbox","image":"https://imgur.com/X3MQNVs.png","price":29.35},{"id":7,"product":"Watch Dogs 2","category":"xbox","image":"https://imgur.com/v3lqCEb.png","price":18.99},{"id":8,"product":"Fortnite","category":"ps5","image":"https://imgur.com/3lTxDpl.png","price":29.99},{"id":9,"product":"Call of Duty: Black Ops","category":"ps5","image":"https://imgur.com/4GvUw3G.png","price":69.99},{"id":10,"product":"NBA2K21 Next Generation","category":"ps5","image":"https://imgur.com/Mxjvkws.png","price":69.99},{"id":11,"product":"Spider-Man Miles Morales","category":"ps5","image":"https://imgur.com/guV5cUF.png","price":29.99},{"id":12,"product":"Resident Evil Village","category":"ps5","image":"https://imgur.com/1CxJz8E.png","price":59.99},{"id":13,"product":"Assassin\'s Creed Valhalla","category":"ps5","image":"https://imgur.com/xJD093X.png","price":59.99},{"id":14,"product":"Animal Crossing","category":"switch","image":"https://imgur.com/1SVaEBk.png","price":59.99},{"id":15,"product":"The Legend of Zelda","category":"switch","image":"https://imgur.com/IX5eunc.png","price":59.99},{"id":16,"product":"Stardew Valley","category":"switch","image":"https://imgur.com/aL3nj5t.png","price":14.99},{"id":17,"product":"Mario Golf Super Rush","category":"switch","image":"https://imgur.com/CPxlyEg.png","price":59.99},{"id":18,"product":"Super Smash Bros","category":"switch","image":"https://imgur.com/ZuLatzs.png","price":59.99},{"id":19,"product":"Grand Theft Auto 5","category":"pc","image":"https://imgur.com/9LRil4N.png","price":29.99},{"id":20,"product":"Battlefield V","category":"pc","image":"https://imgur.com/T3v629h.png","price":39.99},{"id":21,"product":"Red Dead Redemption 2","category":"pc","image":"https://imgur.com/aLObdQK.png","price":39.99},{"id":22,"product":"Flight Simulator 2020","category":"pc","image":"https://imgur.com/2IeocI8.png","price":59.99},{"id":23,"product":"Forza Horizon 4","category":"pc","image":"https://imgur.com/gLQsp6N.png","price":59.99},{"id":24,"product":"Minecraft","category":"pc","image":"https://imgur.com/qm1gaGD.png","price":29.99},{"id":25,"product":"Rainbow Six Seige","category":"pc","image":"https://imgur.com/JIgzykM.png","price":7.99},{"id":26,"product":"Xbox Controller","category":"accessories","image":"https://imgur.com/a964vBm.png","price":59},{"id":27,"product":"Xbox Controller","category":"accessories","image":"https://imgur.com/ntrEPb1.png","price":69},{"id":28,"product":"Gaming Keyboard","category":"accessories","image":"https://imgur.com/VMe3WBk.png","price":49.99},{"id":29,"product":"Gaming Mouse","category":"accessories","image":"https://imgur.com/wvpHOCm.png","price":29.99},{"id":30,"product":"Switch Joy-Con","category":"accessories","image":"https://imgur.com/faQ0IXH.png","price":13.99}]');

/***/ })

};
;