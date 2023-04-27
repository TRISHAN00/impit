"use strict";
(() => {
var exports = {};
exports.id = 653;
exports.ids = [653,476,918];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fetchHome": () => (/* binding */ fetchHome)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network_AxiosService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8179);

 // import {fetchPosts} from "../../thunk/home";

const initialState = {
  loading: false,
  posts: [],
  error: ""
};
const fetchHome = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("home", params => {
  return (0,_network_AxiosService__WEBPACK_IMPORTED_MODULE_1__.get)(params);
});
const postSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "home",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchHome.pending, state => {
      state.loading = true;
      state.posts = [];
      state.error = "";
    });
    builder.addCase(fetchHome.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchHome.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error;
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postSlice.reducer);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [179], () => (__webpack_exec__(3373)));
module.exports = __webpack_exports__;

})();