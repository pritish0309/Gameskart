exports.id = 216;
exports.ids = [216];
exports.modules = {

/***/ 6498:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__66x_3",
	"logo": "Navbar_logo__E_Sw_",
	"links": "Navbar_links__JmvAX",
	"navlink": "Navbar_navlink__w4k_R"
};


/***/ }),

/***/ 7832:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__E_Uzl",
	"brand": "footer_brand__jsLM0"
};


/***/ }),

/***/ 9216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(6498);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/Navbar.js




const Navbar = ()=>{
    // Selecting cart from global state
    const cart = (0,external_react_redux_.useSelector)((state)=>state.cart);
    // Getting the count of items
    const getItemsCount = ()=>{
        return cart.reduce((accumulator, item)=>accumulator + item.quantity, 0);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: (Navbar_module_default()).navbar,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                className: (Navbar_module_default()).logo,
                children: "GamesKart"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                className: (Navbar_module_default()).links,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: (Navbar_module_default()).navlink,
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: (Navbar_module_default()).navlink,
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/shop",
                            children: "Shop"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: (Navbar_module_default()).navlink,
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/cart",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    "Cart (",
                                    getItemsCount(),
                                    ")"
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: ./styles/footer.module.css
var footer_module = __webpack_require__(7832);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: (footer_module_default()).footer,
        children: [
            "Copyright ",
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: (footer_module_default()).brand,
                children: "GamesKart"
            }),
            " ",
            new Date().getFullYear()
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__(9605);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./redux/cart.slice.js
var cart_slice = __webpack_require__(2963);
;// CONCATENATED MODULE: ./redux/store.js


const reducer = {
    cart: cart_slice/* cartReducer */.C$
};
const store = (0,toolkit_.configureStore)({
    reducer
});
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
        store: redux_store,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(components_Navbar, {}),
                /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime.jsx(components_Footer, {})
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C$: () => (/* binding */ cartReducer),
/* harmony export */   X1: () => (/* binding */ decrementQuantity),
/* harmony export */   Xq: () => (/* binding */ addToCart),
/* harmony export */   g1: () => (/* binding */ incrementQuantity),
/* harmony export */   h2: () => (/* binding */ removeFromCart)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action)=>{
            const itemExists = state.find((item)=>item.id === action.payload.id);
            if (itemExists) {
                itemExists.quantity++;
            } else {
                state.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        incrementQuantity: (state, action)=>{
            const item = state.find((item)=>item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action)=>{
            const item = state.find((item)=>item.id === action.payload);
            if (item.quantity === 1) {
                const index = state.findIndex((item)=>item.id === action.payload);
                state.splice(index, 1);
            } else {
                item.quantity--;
            }
        },
        removeFromCart: (state, action)=>{
            const index = state.findIndex((item)=>item.id === action.payload);
            state.splice(index, 1);
        }
    }
});
const cartReducer = cartSlice.reducer;
const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;


/***/ }),

/***/ 9605:
/***/ (() => {



/***/ })

};
;