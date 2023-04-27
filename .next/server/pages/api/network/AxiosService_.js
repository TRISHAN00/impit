(() => {
var exports = {};
exports.id = 691;
exports.ids = [691,589,476];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9920:
/***/ ((module) => {

module.exports = {
  BASE_URL: 'https://jsonplaceholder.typicode.com/',
  MAP_API_KEY: 'AIzaSyB3nEqKsliw_EQSpaxAq6R8hOUwpGyxJ9s'
};

/***/ }),

/***/ 3126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AxiosServices": () => (/* binding */ AxiosServices)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9920);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);



function getIRequestProp() {
  let serverUrl = (_config__WEBPACK_IMPORTED_MODULE_1___default().BASE_URL);
  return {
    serverUrl: serverUrl,
    requestHeader: {
      'Content-Type': 'application/json'
    }
  };
}

async function get(url, parameter) {
  let {
    serverUrl,
    requestHeader
  } = getIRequestProp();
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(serverUrl + url, {
    params: parameter,
    headers: requestHeader
  });
}

async function post(url, body) {
  let {
    serverUrl,
    requestHeader
  } = getIRequestProp();
  return await axios__WEBPACK_IMPORTED_MODULE_0___default().post(serverUrl + url, body, {
    headers: requestHeader
  });
}

async function put(url, body) {
  let {
    serverUrl,
    requestHeader
  } = getIRequestProp();
  return await axios__WEBPACK_IMPORTED_MODULE_0___default().put(serverUrl + url, body, {
    headers: requestHeader
  });
}

async function patch(url, body) {
  let {
    serverUrl,
    requestHeader
  } = getIRequestProp();
  return await axios__WEBPACK_IMPORTED_MODULE_0___default().patch(serverUrl + url, body, {
    headers: requestHeader
  });
}

async function remove(url, body) {
  let {
    serverUrl,
    requestHeader
  } = getIRequestProp();
  return await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](serverUrl + url, {
    data: body,
    headers: requestHeader
  });
}

const AxiosServices = {
  get,
  post,
  put,
  patch,
  remove
};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3126));
module.exports = __webpack_exports__;

})();