exports.id = 179;
exports.ids = [179,589];
exports.modules = {

/***/ 9920:
/***/ ((module) => {

module.exports = {
  BASE_URL: 'https://jsonplaceholder.typicode.com/',
  MAP_API_KEY: 'AIzaSyB3nEqKsliw_EQSpaxAq6R8hOUwpGyxJ9s'
};

/***/ }),

/***/ 8179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "post": () => (/* binding */ post),
/* harmony export */   "postFile": () => (/* binding */ postFile)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9920);
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
    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: 'post',
      url: `${(_config__WEBPACK_IMPORTED_MODULE_1___default().BASE_URL)}${params[0]}`,
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
    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: 'post',
      url: `${(_config__WEBPACK_IMPORTED_MODULE_1___default().BASE_URL)}${params[0]}`,
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

/***/ })

};
;