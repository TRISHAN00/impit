"use strict";
exports.id = 981;
exports.ids = [981];
exports.modules = {

/***/ 6981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globalStyleVars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8312);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const Button = ({
  onSubmit,
  text,
  src,
  img,
  hoverImg,
  fontSize,
  fontWeight,
  color,
  letterSpacing,
  lineHeight,
  margin,
  background,
  borderRadius,
  border,
  width,
  height,
  hoverBackground,
  target,
  borderColor,
  hoverColor
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StyledBtn, {
    className: `dc-btn fade-up`,
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
    background: background,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
    margin: margin,
    border: border,
    img: img,
    borderRadius: borderRadius,
    width: width,
    hoverImg: hoverImg,
    hoverBackground: hoverBackground,
    height: height,
    borderColor: borderColor,
    target: target,
    hoverColor: hoverColor,
    onSubmit: onSubmit,
    children: src ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: src || '/',
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
        target: target || '_self',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
          children: [" ", text, "  "]
        })
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
      target: target || '_self',
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
        children: text
      })
    })
  });
};

const StyledBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Button__StyledBtn",
  componentId: "sc-1qz5gh2-0"
})(["&.dc-btn{margin:", ";width:", ";height:", "px;cursor:pointer;a{display:flex;width:fit-content;height:100%;align-items:center;justify-content:center;font-size:", "px;font-weight:", ";margin:0;line-height:", "px;background-color:", ";position:relative;border-radius:", "px;overflow:hidden;z-index:0;transition:border .3s ease;padding:16px 36px;box-sizing:border-box;span{transition:color .3s ease;color:", ";position:relative;z-index:2;}&:before{bottom:0;content:\"\";display:block;position:absolute;right:0;top:0;left:0;background-color:", ";height:0%;width:0%;margin:auto;transition:all .5s ease;border-radius:22px;}&:hover{span{color:", ";}svg{line{stroke:", ";}}&:before{height:100%;width:100%;}}&:focus{color:#222222;}}}"], props => props.margin || '0', props => props.width || '100%', props => props.height || '44', props => props.fontSize || '16', props => props.fontWeight || 600, props => props.lineHeight || '20', props => props.background || `#1C1718`, props => props.borderRadius || '22', props => props.color || `#FFF`, p => p.hoverBackground || _styles_globalStyleVars__WEBPACK_IMPORTED_MODULE_4__/* .hover */ .Mr, props => props.hoverColor || `#FFF`, props => props.hoverColor || '#FFF');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 8312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mr": () => (/* binding */ hover),
/* harmony export */   "TN": () => (/* binding */ title),
/* harmony export */   "fL": () => (/* binding */ text)
/* harmony export */ });
const text = '#221F1F';
const hover = '#ED5333';
const title = '';

/***/ })

};
;