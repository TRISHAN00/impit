"use strict";
exports.id = 692;
exports.ids = [692];
exports.modules = {

/***/ 692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fetchPostDetail": () => (/* binding */ fetchPostDetail),
/* harmony export */   "fetchPosts": () => (/* binding */ fetchPosts)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network_AxiosService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8179);

 // import {fetchPosts} from "../../thunk/home";

const initialState = {
  loading: false,
  posts: [],
  error: "",
  detail: [],
  detailLoading: false,
  detailError: ""
};
const fetchPosts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("post/fetchPost", params => {
  return (0,_network_AxiosService__WEBPACK_IMPORTED_MODULE_1__.get)(params);
});
const fetchPostDetail = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("posts/fetchPostsDetail", params => {
  return (0,_network_AxiosService__WEBPACK_IMPORTED_MODULE_1__.get)(params);
});
const postSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "post",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.loading = true;
      state.posts = [];
      state.error = "";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error;
    });
    builder.addCase(fetchPostDetail.pending, (state, action) => {
      state.detailLoading = true;
      state.detail = [];
      state.detailError = "";
    });
    builder.addCase(fetchPostDetail.fulfilled, (state, action) => {
      state.detailLoading = false;
      state.detail = action.payload;
      state.detailError = "";
    });
    builder.addCase(fetchPostDetail.rejected, (state, action) => {
      state.detailLoading = false;
      state.detail = [];
      state.detailError = action.error;
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postSlice.reducer);

/***/ })

};
;