"use strict";
(() => {
var exports = {};
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 2300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "emailValidation": () => (/* binding */ emailValidation),
  "emptyNumber": () => (/* binding */ emptyNumber),
  "emptyValidation": () => (/* binding */ emptyValidation)
});

;// CONCATENATED MODULE: external "validator"
const external_validator_namespaceObject = require("validator");
var external_validator_default = /*#__PURE__*/__webpack_require__.n(external_validator_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/config/validator.js

const emailValidation = email => {
  return external_validator_default().isEmail(email);
};
const emptyValidation = str => {
  return external_validator_default().isEmpty(str);
};
const emptyNumber = num => {
  return external_validator_default().isMobilePhone(num);
};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2300));
module.exports = __webpack_exports__;

})();