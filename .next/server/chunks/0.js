exports.id = 0;
exports.ids = [0];
exports.modules = {

/***/ 9276:
/***/ ((module) => {

module.exports = {
  BASE_URL: 'https://jsonplaceholder.typicode.com/',
  MAP_API_KEY: 'AIzaSyB3nEqKsliw_EQSpaxAq6R8hOUwpGyxJ9s'
};

/***/ }),

/***/ 8838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U2": () => (/* binding */ get)
/* harmony export */ });
/* unused harmony exports post, postFile */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9276);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);


function get(params) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'get',
    url: `${(_config__WEBPACK_IMPORTED_MODULE_1___default().BASE_URL)}${params[0] ? params[0] : ''}`,
    params: params[1] ? params[1] : '',
    headers: params[2] ? params[2] : {
      'Content-Type': 'application/json'
    }
  }).then(response => response.data);
}
async function post(params) {
  try {
    const result = await axios({
      method: 'post',
      url: `${config.BASE_URL}${params[0]}`,
      data: params[1],
      headers: params[2] ? params[2] : {
        'Content-Type': 'application/json'
      }
    });
    return result.data;
  } catch (err) {
    throw err;
  }
}
async function postFile(params) {
  try {
    const result = await axios({
      method: 'post',
      url: `${config.BASE_URL}${params[0]}`,
      data: params[1],
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
}

/***/ }),

/***/ 2806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ fetchHome),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network_AxiosService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8838);

 // import {fetchPosts} from "../../thunk/home";

const initialState = {
  loading: false,
  posts: [],
  error: ""
};
const fetchHome = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("home", params => {
  return (0,_network_AxiosService__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(params);
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

/***/ 4589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QL": () => (/* binding */ fetchPostDetail),
/* harmony export */   "T6": () => (/* binding */ fetchPosts),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network_AxiosService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8838);

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
  return (0,_network_AxiosService__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(params);
});
const fetchPostDetail = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("posts/fetchPostsDetail", params => {
  return (0,_network_AxiosService__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(params);
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

/***/ }),

/***/ 1000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YS": () => (/* binding */ wrapper)
/* harmony export */ });
/* unused harmony exports SET_IS_SERVER, store */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2806);
/* harmony import */ var _redux_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4589);
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


const combinedReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  serverCheck,
  homeReducer: _redux_home__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  postReducer: _redux_post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP
}); // master reducer

const masterReducer = (state, actions) => {
  if (actions.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {
    return _objectSpread(_objectSpread({}, state), actions.payload);
  } else {
    return combinedReducer(state, actions);
  }
}; // main store


const store = () => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: masterReducer // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

});
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(store); //,{debug: true} -- if need debug

/***/ })

};
;