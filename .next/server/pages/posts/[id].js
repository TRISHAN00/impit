"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646,476,918];
exports.modules = {

/***/ 2495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ ApiServices)
/* harmony export */ });
const ApiServices = {
  POSTS: 'posts',
  PHOTOS: 'photos'
};

/***/ }),

/***/ 2930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1000);
/* harmony import */ var _api_network_ApiServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2495);
/* harmony import */ var _api_redux_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4589);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const PostDetail = () => {
  let detailData = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.postReducer);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h1", {
      children: [detailData?.detail?.id, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), detailData?.detail?.title]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
      children: detailData?.detail?.body
    })]
  });
};

const getServerSideProps = _api_store__WEBPACK_IMPORTED_MODULE_1__/* .wrapper.getServerSideProps */ .YS.getServerSideProps(store => async ({
  req,
  query
}) => {
  let api_services = _api_network_ApiServices__WEBPACK_IMPORTED_MODULE_2__/* .ApiServices.POSTS */ .u.POSTS;
  await store.dispatch((0,_api_redux_post__WEBPACK_IMPORTED_MODULE_3__/* .fetchPostDetail */ .QL)([api_services + `/${query.id}`]));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostDetail);

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [0], () => (__webpack_exec__(2930)));
module.exports = __webpack_exports__;

})();