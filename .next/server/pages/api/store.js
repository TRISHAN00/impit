"use strict";
(() => {
var exports = {};
exports.id = 262;
exports.ids = [262,476,653,918];
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

/***/ }),

/***/ 2793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SET_IS_SERVER": () => (/* binding */ SET_IS_SERVER),
  "store": () => (/* binding */ store),
  "wrapper": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: ./pages/api/redux/home/index.js
var home = __webpack_require__(3373);
// EXTERNAL MODULE: ./pages/api/redux/post/index.js
var post = __webpack_require__(692);
;// CONCATENATED MODULE: ./pages/api/store/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // this is to set a flag for initial server renders

const SET_IS_SERVER = 'SET_IS_SERVER';

function serverCheck(state = {
  isServer: false
}, action) {
  const {
    type
  } = action;

  switch (type) {
    case SET_IS_SERVER:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isServer: true
        });
      }

    default:
      return state;
  }
} // combined all reducers


const combinedReducer = (0,toolkit_.combineReducers)({
  serverCheck,
  homeReducer: home["default"],
  postReducer: post["default"]
}); // master reducer

const masterReducer = (state, actions) => {
  if (actions.type === external_next_redux_wrapper_namespaceObject.HYDRATE) {
    return _objectSpread(_objectSpread({}, state), actions.payload);
  } else {
    return combinedReducer(state, actions);
  }
}; // main store


const store = () => (0,toolkit_.configureStore)({
  reducer: masterReducer // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

});
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(store); //,{debug: true} -- if need debug

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [179,692], () => (__webpack_exec__(2793)));
module.exports = __webpack_exports__;

})();