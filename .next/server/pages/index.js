(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,476,918];
exports.modules = {

/***/ 6619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globalStyleVars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8312);
/* harmony import */ var swipernew_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9265);
/* harmony import */ var swipernew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7965);
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(152);
/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9575);
/* harmony import */ var _public_images_dynamic_solution_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _public_images_dynamic_solution_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_images_dynamic_solution_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swipernew_react__WEBPACK_IMPORTED_MODULE_3__, swipernew__WEBPACK_IMPORTED_MODULE_4__]);
([swipernew_react__WEBPACK_IMPORTED_MODULE_3__, swipernew__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const Solution = ({
  background,
  data,
  id,
  top,
  bottom,
  bg
}) => {
  const nextRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const prevRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: current,
    1: setCurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('1');
  const {
    0: buttonDisabled,
    1: setButtonDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: offset,
    1: setOffset
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(90);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setOffset(document.querySelector(' .container').offsetLeft);
  }, []);

  const handleSliderCurrent = () => {
    setTimeout(() => {
      if (document.querySelector('.sustain .swiper-pagination-current')) {
        setCurrent(document.querySelector('.sustain .swiper-pagination-current').innerHTML);
      }
    }, 200);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(StyledComponent, {
    id: id ? id : 'Sustainability',
    offset: offset,
    bg: bg,
    background: background,
    top: top,
    bottom: bottom,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
      offset: offset,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
        className: 'prev_swipper',
        ref: prevRef,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "52",
          height: "52",
          viewBox: "0 0 52 52",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("g", {
            id: "Button_-_Nav_Button",
            "data-name": "Button - Nav Button",
            transform: "translate(52 52) rotate(180)",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("circle", {
              id: "Ellipse_4377",
              "data-name": "Ellipse 437",
              cx: "26",
              cy: "26",
              r: "26",
              fill: "#f9f9f9"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("circle", {
              id: "Ellipse_4378",
              "data-name": "Ellipse 437",
              cx: "26",
              cy: "26",
              r: "0",
              fill: "#f9f9f9"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("g", {
              id: "Group_15984",
              "data-name": "Group 15984",
              transform: "translate(-97 -5894.5)",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("line", {
                id: "Line_3865",
                "data-name": "Line 3865",
                x2: "5",
                y2: "5",
                transform: "translate(120.5 5915.5)",
                fill: "none",
                stroke: "#D80028",
                "stroke-linecap": "round",
                "stroke-width": "1"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("line", {
                id: "Line_3866",
                "data-name": "Line 3866",
                y1: "5",
                x2: "5",
                transform: "translate(120.5 5920.5)",
                fill: "none",
                stroke: "#D80028",
                "stroke-linecap": "round",
                "stroke-width": "1"
              })]
            })]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
        className: 'next_swipper',
        ref: nextRef,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
          id: "Button_-_Nav_Button",
          "data-name": "Button - Nav Button",
          xmlns: "http://www.w3.org/2000/svg",
          width: "52",
          height: "52",
          viewBox: "0 0 52 52",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("circle", {
            id: "Ellipse_4377",
            "data-name": "Ellipse 437",
            cx: "26",
            cy: "26",
            r: "26",
            fill: "#f9f9f9"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("circle", {
            id: "Ellipse_4378",
            "data-name": "Ellipse 437",
            cx: "26",
            cy: "26",
            r: "0",
            fill: "#f9f9f9"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("g", {
            id: "Group_15984",
            "data-name": "Group 15984",
            transform: "translate(-97 -5894.5)",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("line", {
              id: "Line_3865",
              "data-name": "Line 3865",
              x2: "5",
              y2: "5",
              transform: "translate(120.5 5915.5)",
              fill: "none",
              stroke: "#D80028",
              "stroke-linecap": "round",
              "stroke-width": "1"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("line", {
              id: "Line_3866",
              "data-name": "Line 3866",
              y1: "5",
              x2: "5",
              transform: "translate(120.5 5920.5)",
              fill: "none",
              stroke: "#D80028",
              "stroke-linecap": "round",
              "stroke-width": "1"
            })]
          })]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
      fluid: true,
      className: 'sustain',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(swipernew_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
        Swiper: true,
        modules: [swipernew__WEBPACK_IMPORTED_MODULE_4__.Autoplay, swipernew__WEBPACK_IMPORTED_MODULE_4__.Pagination, swipernew__WEBPACK_IMPORTED_MODULE_4__.Navigation, swipernew__WEBPACK_IMPORTED_MODULE_4__.EffectFade],
        allowTouchMove: true,
        longSwipesMs: 900,
        slidesPerView: 1,
        pagination: {
          // el: '.swiper-pagination',
          type: "fraction"
        },
        effect: "fade",
        navigation: {
          prevEl: prevRef.current,
          nextEl: nextRef.current
        },
        onBeforeInit: swiper => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        },
        shouldSwiperUpdate: (prev, next) => {
          if (prev.activeIndex === next.slides.length - 1) {
            setButtonDisabled(true);
          } else {
            setButtonDisabled(false);
          }
        },
        loop: true,
        speed: 600,
        onSlideChange: s => handleSliderCurrent(),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: 'sustain__top',
          style: {
            paddingRight: offset + 15 + 'px'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            text: 'Impit Solution',
            color: '#F0EDE3',
            borderColor: 'rgba(240,237,227,0.8)'
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(swipernew_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
            className: 'sustainability',
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
              md: 6,
              className: 'sustainability__left',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: 'sustainability__left__data',
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h3", {
                  className: 'fade-up',
                  children: "Title"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  className: "text fade-up",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, similique."
                  })
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
              md: 6,
              className: 'p-0',
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: "sustainability__right",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Img__WEBPACK_IMPORTED_MODULE_5__/* .Img */ .E, {
                  src: '/images/dynamic/solution.jpg',
                  alt: 'esrs'
                })
              })
            })]
          })
        }, 1), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(swipernew_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
            className: 'sustainability',
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
              md: 6,
              className: 'sustainability__left',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: 'sustainability__left__data',
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h3", {
                  className: 'fade-up',
                  children: "Title"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  className: "text fade-up",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, similique."
                  })
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
              md: 6,
              className: 'p-0',
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: "sustainability__right",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Img__WEBPACK_IMPORTED_MODULE_5__/* .Img */ .E, {
                  src: '/images/dynamic/solution.jpg',
                  alt: 'esrs'
                })
              })
            })]
          })
        }, 1), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(swipernew_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
            className: 'sustainability',
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
              md: 6,
              className: 'sustainability__left',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: 'sustainability__left__data',
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h3", {
                  className: 'fade-up',
                  children: "Title"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  className: "text fade-up",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, similique."
                  })
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
              md: 6,
              className: 'p-0',
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: "sustainability__right",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Img__WEBPACK_IMPORTED_MODULE_5__/* .Img */ .E, {
                  src: '/images/dynamic/about.jpg',
                  alt: 'esrs'
                })
              })
            })]
          })
        }, 1), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(swipernew_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
            className: 'sustainability',
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
              md: 6,
              className: 'sustainability__left',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: 'sustainability__left__data',
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h3", {
                  className: 'fade-up',
                  children: "Title"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  className: "text fade-up",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, similique."
                  })
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
              md: 6,
              className: 'p-0',
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: "sustainability__right",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Img__WEBPACK_IMPORTED_MODULE_5__/* .Img */ .E, {
                  src: '/images/dynamic/about.jpg',
                  alt: 'esrs'
                })
              })
            })]
          })
        }, 1)]
      })
    })]
  });
};

const StyledComponent = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "Solution__StyledComponent",
  componentId: "sc-m5r3wc-0"
})(["height:600px;position:relative;overflow:hidden;margin-top:100px;&:after{content:\"\";position:absolute;height:50%;width:100%;background-color:rgb(28,23,24);left:0px;bottom:0px;}padding-left:", ";@media (max-width:767px){padding-left:0 !important;margin-top:0;}.swiper-button-prev,.swiper-button-next{opacity:0;visibility:hidden;}.title{h2{line-height:60px;}}ul{position:absolute;top:203px;right:120px;z-index:150;display:flex;li{cursor:pointer;svg{#Ellipse_4378{transition:all 0.7s cubic-bezier(0.4,0,0,1);r:0;}line{stroke:#170C3D;}&:hover{#Ellipse_4378{fill:", ";transition:all 0.7s cubic-bezier(0.4,0,0,1);r:26;}g{line{stroke:#f9f9f9;}}}}}li:first-child{padding-right:20px;}}.sustain{padding-left:0;padding-right:0;&__top{position:absolute;top:120px;z-index:150;width:100%;display:flex;padding-left:100px;p{color:#f9f9f9;}}.sustainability{margin:0;height:100%;&__left{background-color:#ED5333;margin-left:0;&__data{position:relative;padding-right:", ";padding-left:85px;margin-top:190px;padding-bottom:100px;h3{margin-bottom:80px;width:100%;z-index:5;font-size:60px;line-height:60px;font-weight:600;color:#F1F0E9;position:relative;}.text,p{color:rgba(240,237,227,0.8);font-size:16px;line-height:24px;}}}&__right{position:relative;padding-top:calc(600 / 634 * 100%);height:100%;img{position:absolute;top:0;left:0;height:100%;width:100%;object-fit:cover;}}}}@media (max-width:767px){.sustain{&__top{top:40px;padding:0 15px;width:100%;padding-right:0;p{height:36px;}}.sustainability{flex-direction:column-reverse;margin:0;&__left{&__data{margin-top:0;margin-bottom:120px;padding:0px;h3{margin-left:0;margin-bottom:40px;font-size:40px;line-height:40px;margin-top:-25px;width:initial;}}}&__right{position:relative;padding-top:calc(375 / 375 * 100%);img{position:absolute;top:0;left:0;height:100%;width:100%;object-fit:cover;}}}}}@media (max-width:767px){ul{position:absolute;top:250px;left:15px;z-index:150;}}.swiper-pagination{opacity:0;visibility:hidden;}"], props => props.offset ? props.offset + 15 + 'px' : '90px', _styles_globalStyleVars__WEBPACK_IMPORTED_MODULE_9__/* .hover */ .Mr, props => props.offset ? props.offset + 15 + 'px' : '90px');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Solution);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5935);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globalStyleVars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8312);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const Title = ({
  text,
  fontSize,
  fontWeight,
  color,
  letterSpacing,
  lineHeight,
  textTransform,
  margin,
  padding,
  borderColor,
  marginMb
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StyledTitle, {
    className: `sub-title fade-up`,
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
    lineHeight: lineHeight,
    LetterSpacing: letterSpacing,
    textTransform: textTransform,
    margin: margin,
    marginMb: marginMb,
    padding: padding,
    borderColor: borderColor,
    children: text ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h3", {
      className: 'fade-up',
      children: [react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(text), " "]
    }) : ''
  });
};

const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SubTitle__StyledTitle",
  componentId: "sc-dx2gpd-0"
})(["position:relative;width:100%;h3{font-weight:", ";margin:", ";color:", ";text-transform:", ";font-size:", "px;line-height:", "px;border-bottom:1px solid ", ";padding-bottom:20px;}@media (max-width:767px){h2{margin:", ";font-size:", "px;line-height:", "px;}}"], props => props.fontWeight || '500', props => props.margin || '0px 0 60px 0', props => props.color || '#1C1718', props => props.textTransform || 'capitalize', p => p.fontSize || '16', p => p.lineHeight || '20', p => p.borderColor || _styles_globalStyleVars__WEBPACK_IMPORTED_MODULE_4__/* .text */ .fL, p => p.marginMb || '0 0 40px 0', p => p.fontSize || '16', p => p.lineHeight || '20');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ 3115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(152);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6981);
/* harmony import */ var _styles_globalStyleVars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8312);
/* harmony import */ var _public_images_dynamic_about_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8071);
/* harmony import */ var _public_images_dynamic_about_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_images_dynamic_about_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9575);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











const LubeSolution = () => {
  const {
    0: offset,
    1: setOffset
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setOffset(document.querySelector(".container").offsetLeft);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(StyledLubeSolution, {
    className: "lube-testing pt-100 pb-100",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          text: 'About Impit'
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "lube-testing__title",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h2", {
            children: "IMPIT utilizes a vast network of independent USA based vendors who are truly the stimulus force of the business."
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
      fluid: true,
      className: "p-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
        className: 'no-gutters',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
          sm: 5,
          className: "lube-testing__img",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "lube-testing__img__inner",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Img__WEBPACK_IMPORTED_MODULE_3__/* .Img */ .E, {
              src: '/images/dynamic/about.jpg'
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "lube-testing__img__box",
            style: {
              left: offset + 15 + "px"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "lube-testing__img__box__inner",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h2", {
                children: "An organization dedicated to producing excellence"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                src: "/lube-oil-testing",
                text: "Read More",
                margin: "30px 0 0 0",
                background: "#FFF",
                color: "#221F1F",
                hoverBackground: "#221F1F"
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
          sm: {
            span: 6,
            offset: 1
          },
          className: "lube-testing__text",
          style: {
            paddingRight: offset + 30 + "px"
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h4", {
            children: "We have the expertise in all kinds of renovation, repair, residential inspection, property preservation & maintenance services "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
            children: "With a strong foundation of leadership, experience, and expertise we have successfully completed more than 40,000 projects and maintained more than 10,000 properties. Our aim is to focus on creative ways to satisfy each clients requirement by developing service approaches tailored to their specific needs. IMPIT has built a unique value proposition that offers unmatched services to deliver every project in the shortest amount of time."
          })]
        })]
      })
    })]
  });
};

const StyledLubeSolution = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "About__StyledLubeSolution",
  componentId: "sc-1d7kpc9-0"
})([".lube-testing__img{position:relative;&__inner{padding-top:calc(420 / 598 * 100%);position:relative;min-height:100%;}&__box{width:50%;position:absolute;bottom:-50px;&__inner{padding-top:calc(255 / 400 * 100%);position:relative;background-color:", ";h2{font-size:24px;line-height:28px;font-weight:500;color:#ffffff;position:absolute;top:30px;left:30px;right:30px;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;white-space:normal;overflow:hidden;}}.dc-btn{position:absolute;bottom:30px;left:30px;}}}.lube-testing__title{h2{margin-bottom:60px;font-size:36px;font-weight:500;line-height:40px;}}.lube-testing__text{justify-content:center;display:flex;flex-direction:column;h4{font-size:24px;font-weight:500;line-height:28px;margin-bottom:48px;color:#1C1718;}p{font-size:16px;line-height:20px;margin-bottom:20px;&:nth-last-child(1){margin-bottom:0;}}}@media (min-width:768px) and (max-width:1150px){.lube-testing__img__box{width:65%;&__inner h2{font-size:22px;line-height:26px;}}}@media (max-width:767px){padding-bottom:75px;.col-sm-5,.col-sm-6{min-width:100%;margin:0;}.lube-testing__img__box{bottom:-150px;width:70%;}.lube-testing__text{padding:0 30px;margin-top:210px;}}"], _styles_globalStyleVars__WEBPACK_IMPORTED_MODULE_8__/* .hover */ .Mr);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LubeSolution);

/***/ }),

/***/ 5257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_Counter)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./styles/globalStyle.js
var globalStyle = __webpack_require__(2000);
// EXTERNAL MODULE: ./components/Button.jsx
var Button = __webpack_require__(6981);
;// CONCATENATED MODULE: external "react-countup"
const external_react_countup_namespaceObject = require("react-countup");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_namespaceObject);
// EXTERNAL MODULE: ./components/Title.jsx
var Title = __webpack_require__(3264);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
;// CONCATENATED MODULE: external "react-visibility-sensor"
const external_react_visibility_sensor_namespaceObject = require("react-visibility-sensor");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_namespaceObject);
// EXTERNAL MODULE: ./components/Img.jsx + 1 modules
var Img = __webpack_require__(152);
// EXTERNAL MODULE: ./public/images/dynamic/count.png
var count = __webpack_require__(5780);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/home/Counter.jsx





 // import VisibilitySensor from "react-visibility-sensor";











const Counter = ({
  url,
  title
}) => {
  (0,external_react_.useEffect)(() => {
    external_gsap_.gsap.registerPlugin(ScrollTrigger_.ScrollTrigger);

    if (window.innerWidth > 767) {
      // parallax
      let container = external_gsap_.gsap.utils.toArray(".image-parallax");
      container.forEach(cont => {
        let img = cont.querySelector("svg");
        external_gsap_.gsap.to(img, {
          yPercent: 40,
          // y: 150,
          ease: "none",
          scrollTrigger: {
            trigger: cont,
            // markers: true,
            scrub: true
          }
        });
      }); // fade up

      let allAnim = document.querySelectorAll('.fade-up');
      allAnim.forEach((el, index) => {
        external_gsap_.gsap.fromTo(el, {
          autoAlpha: 0,
          y: 50,
          ease: "none"
        }, {
          y: 0,
          autoAlpha: 1,
          ease: "power2",
          duration: 1,
          scrollTrigger: {
            id: `${index + 1}`,
            trigger: el,
            // start: 'top center+=100',
            toggleActions: 'play none none reverse'
          }
        });
      });
    }
  }, [null]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledDetail, {
      className: "pt-100 pb-100",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Img/* Img */.E, {
        src: '/images/dynamic/count.png'
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
            md: 12,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "content-large",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "counter",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                  className: 'fade-up',
                  children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_countup_default()), {
                    start: 0,
                    end: 4000,
                    duration: 1,
                    separator: ",",
                    decimals: 0,
                    decimal: ",",
                    children: ({
                      countUpRef,
                      start
                    }) => /*#__PURE__*/jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                      onChange: start,
                      partialVisibility: {
                        top: 0,
                        bottom: 20
                      },
                      delayedCall: true,
                      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                        ref: countUpRef
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: 'plus',
                    children: "+"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: 'fade-up',
                children: "Customers served and counting"
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
          className: 'counter-bottom pb-200',
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
            className: 'counter-bottom_single',
            md: 4,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "counter",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: 'fade-up',
                children: /*#__PURE__*/jsx_runtime_.jsx((external_react_countup_default()), {
                  start: 3599,
                  end: 10000,
                  duration: 1,
                  separator: ",",
                  decimals: '',
                  decimal: ",",
                  suffix: "+",
                  children: ({
                    countUpRef,
                    start
                  }) => /*#__PURE__*/jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                    onChange: start,
                    partialVisibility: {
                      top: 0,
                      bottom: 20
                    },
                    delayedCall: true,
                    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                      ref: countUpRef
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: 'fade-up',
                children: "Properties Managed"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
            className: 'counter-bottom_single',
            md: 4,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "counter",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: 'fade-up',
                children: /*#__PURE__*/jsx_runtime_.jsx((external_react_countup_default()), {
                  start: 0,
                  end: 30,
                  duration: 1,
                  separator: ",",
                  decimals: '',
                  decimal: ",",
                  suffix: "+",
                  children: ({
                    countUpRef,
                    start
                  }) => /*#__PURE__*/jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                    onChange: start,
                    partialVisibility: {
                      top: 0,
                      bottom: 20
                    },
                    delayedCall: true,
                    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                      ref: countUpRef
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: 'fade-up',
                children: "Sub branches around the world"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
            className: 'counter-bottom_single',
            md: 4,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "counter",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: 'fade-up',
                children: "500+ "
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: 'fade-up',
                children: "Staffs happily employed"
              })]
            })
          })]
        })]
      })]
    })
  });
};

const StyledDetail = external_styled_components_default().section.withConfig({
  displayName: "Counter__StyledDetail",
  componentId: "sc-nwfxv7-0"
})(["background:rgb(28,23,24);position:relative;height:1200px;margin-top:-10px;.fixed-image-parallax{position:absolute;right:20px;object-fit:contain;height:100%;top:-100px;}p{color:#F0EDE3;}.content-large{margin:120px 0;h3{font-size:160px;line-height:160px;font-weight:500;position:relative;padding-bottom:20px;margin-bottom:20px;display:flex;align-items:center;color:#ED5333;&:after{position:absolute;left:0;right:0;width:100%;background:#D80028;height:1px;content:\"\";bottom:0;}p{font-size:160px;line-height:160px;font-weight:500;color:#ED5333;}}p{color:#ED5333;font-size:18px;line-height:40px;}}.counter-bottom{.counter{h4{font-size:60px;line-height:60px;font-weight:500;color:#F0EDE3;position:relative;padding-bottom:12px;margin-bottom:12px;&:after{position:absolute;left:0;right:0;width:100%;background:#F0EDE3;height:1px;content:\"\";bottom:0;}}}}@media (max-width:1024px) and (min-width:768px){.content-large{h3{font-size:100px;line-height:100px;p{font-size:100px;line-height:100px;}}}}@media (max-width:992px) and (min-width:768px){.counter-bottom{.counter-bottom_single{flex:0 0 50%;max-width:50%;margin-bottom:40px;&:last-child{margin-bottom:0;}}}}@media (max-width:767px){padding:100px 0;height:unset;.fixed-image-parallax{height:auto;right:0;left:0;bottom:100px;svg{height:100%;width:100%;}}.counter-left{h2{font-size:32px;line-height:40px;margin-bottom:40px;}}.content-large{margin:100px 0 40px;h3{color:#D80028;font-size:40px;line-height:40px;padding-bottom:12px;margin-bottom:12px;p{color:#D80028;font-size:40px;line-height:40px;}}}.counter-bottom{.counter{p{font-size:16px;}h4{font-size:40px;line-height:40px;}}.counter-bottom_single{margin-bottom:40px;&:last-child{margin-bottom:0;}}}}"]);
/* harmony default export */ const home_Counter = (Counter);

/***/ }),

/***/ 1779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9575);
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(152);
/* harmony import */ var _public_images_dynamic_message_01_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4837);
/* harmony import */ var _public_images_dynamic_message_01_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_images_dynamic_message_01_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const MyComponent = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(StyledComponent, {
    className: 'leaders-area',
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
          sm: 4,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "leaders-area__text",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              text: 'Our Leaders'
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h4", {
              children: "Message from the leaders of Impit"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
          sm: 4,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "leaders-area__single",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Img__WEBPACK_IMPORTED_MODULE_5__/* .Img */ .E, {
              src: '/images/dynamic/message-01.jpg'
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
          sm: 4
        })]
      })
    })
  });
};

const StyledComponent = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "Leaders__StyledComponent",
  componentId: "sc-17pw7c1-0"
})([".leaders-area{}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyComponent);

/***/ }),

/***/ 4757:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_api_redux_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2806);
/* harmony import */ var _pages_api_network_ApiServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2495);
/* harmony import */ var _pages_api_network_ApiParamKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1267);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const Post = ({
  getPost
}) => {
  const dispatch = useDispatch();
  let api_services = ApiServices.POSTS;
  return /*#__PURE__*/_jsx(StyeldHome, {
    children: /*#__PURE__*/_jsxs("div", {
      className: "post-wrap",
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Images"
      }), getPost?.loading ? /*#__PURE__*/_jsx("p", {
        children: "Loading posts..."
      }) : /*#__PURE__*/_jsx("ul", {
        children: getPost?.posts?.slice(0, 10).map(data => /*#__PURE__*/_jsx("li", {
          className: "this-is",
          children: /*#__PURE__*/_jsx("img", {
            src: data?.url,
            alt: ""
          })
        }, data?.id))
      })]
    })
  });
};

const StyeldHome = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "Post__StyeldHome",
  componentId: "sc-19z6bry-0"
})([".post-wrap{width:85%;margin:auto;margin-top:50px;h3{margin-bottom:50px;}ul{width:100%;list-style:none;padding:0;display:flex;flex-wrap:wrap;justify-content:space-between;li{width:calc(33.33333% - 5px);padding:10px;border:1px solid #ddd;box-sizing:border-box;margin-bottom:20px;img{max-width:100%;object-fit:cover;}}}}"]);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Post)));

/***/ }),

/***/ 1866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(152);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3264);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7446);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5935);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_images_dynamic_below_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2848);
/* harmony import */ var _public_images_dynamic_below_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_images_dynamic_below_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6981);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














const ParralaxHome = () => {
  const getData = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.homeReducer);
  const filterData = getData?.posts[0]?.about_section;
  const {
    0: offset,
    1: setOffset
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setOffset(document.querySelector(".container").offsetLeft);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(StyledParralaxHome, {
    offset: offset,
    background: "#F2F0F0",
    className: `about_image_with_text pt-200 pb-200`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__.ParallaxProvider, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
        fluid: true,
        className: "version_one p-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
          className: "about_image_with_text_wrapper",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
            md: {
              span: 5
            },
            className: "p-0 pr-0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__.Parallax, {
              className: "parrallax_two",
              speed: -10,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                className: "image_wrapper_whole",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                  className: "image_right",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Img__WEBPACK_IMPORTED_MODULE_3__/* .Img */ .E, {
                    src: "/images/dynamic/right.jpg"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
            md: {
              span: 7
            },
            className: "pr-0 pl-0 right_text_content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "right_text_content_wrp",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                margin: "0 0 80px",
                text: "Why Us",
                textTransform: 'none'
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                className: "fade-up",
                children: react_html_parser__WEBPACK_IMPORTED_MODULE_7___default()("<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>")
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                margin: '30px 0px 0px 0px',
                hoverBackground: '#1C1718',
                color: '#1C1718',
                background: '#F0EDE3',
                text: 'Join Us Today!'
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
      className: "imageFixed",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "wrapper",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Img__WEBPACK_IMPORTED_MODULE_3__/* .Img */ .E, {
          src: "/images/dynamic/below.jpg"
        })
      })
    })]
  });
};

const StyledParralaxHome = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "Whyus__StyledParralaxHome",
  componentId: "sc-o0pgov-0"
})(["background:", ";position:relative;display:flex;height:100%;h2{color:#F1F0E9;font-size:60px;line-height:60px;font-weight:600;}p{color:#F1F0E9;}.fade-up{transform:none !important;opacity:1 !important;visibility:visible !important;}.underline-btn{a{position:relative;&:before{}}span{&:before{background:#010a1a;transition:height 0.4s linear;}&:after{display:none;}}&:after{display:none;}&:before{display:none;}span{&:before{background:#010a1a;}&:after{display:none;}}&:hover{&:after{width:100%;}span{&:after{width:100%;}&:before{height:4px;}}}}.parallax_one{position:relative;z-index:1;}.parrallax_two{position:relative;z-index:2;}.imageFixed{position:absolute;left:0;top:200px;width:50vh;min-height:100vh;z-index:0;@media (min-width:1500px) and (max-width:1800px){min-height:calc(100vh - 200px);}@media (max-width:767px){display:none;}}.about_image_with_text_wrapper{.pr-0{padding-right:0 !important;margin-left:-1px;}}.small_title{margin-bottom:0 !important;}.version_one{padding-left:", ";position:relative;z-index:2;top:-250px;@media (max-width:767px){top:0;padding-left:15px !important;padding-right:15px !important;}.parrallax_two{@media (max-width:767px){margin-top:120px;}}.right_text_content{.right_text_content_wrp{padding-left:70px;padding-right:", ";padding-top:120px;padding-bottom:120px;background:#ED5333;@media (max-width:767px){padding-top:150px;padding-bottom:0px;padding-left:0 !important;padding-right:0 !important;background:transparent;}}}.image_wrapper_whole{position:relative;.image_left{position:relative;height:768px;z-index:1;@media (max-width:767px){}}.image_right{padding-top:calc(768 / 530 * 100%);z-index:0;width:100%;min-height:768px;@media (max-width:767px){}}@media (max-width:767px){margin-top:30px;}}}@media (max-width:767px){padding-top:0px !important;.pr-0{padding-right:15px !important;}.pl-0{padding-left:15px !important;}}&:after{height:200px;content:\"\";position:absolute;top:0;left:0;right:0;background:rgb(28,23,24);}"], props => props.background || "#E9E9E9", props => props.offset + 30 + "px !important" || 0, props => props.offset + 30 + "px !important" || 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParralaxHome);

/***/ }),

/***/ 1267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export ApiParamKey */
const ApiParamKey = {
  type: 'type'
};

/***/ }),

/***/ 2495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ ApiServices)
/* harmony export */ });
const ApiServices = {
  POSTS: 'posts',
  PHOTOS: 'photos'
};

/***/ }),

/***/ 3539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_home_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4757);
/* harmony import */ var _api_network_ApiServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2495);
/* harmony import */ var _api_redux_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2806);
/* harmony import */ var _api_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1000);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6981);
/* harmony import */ var _components_InnerBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4629);
/* harmony import */ var _components_home_About__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3115);
/* harmony import */ var _components_Solution__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6619);
/* harmony import */ var _components_home_Counter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5257);
/* harmony import */ var _components_home_Whyus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1866);
/* harmony import */ var _components_home_Leaders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1779);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Solution__WEBPACK_IMPORTED_MODULE_10__]);
_components_Solution__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


















const Home = () => {
  const getPost = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.homeReducer);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {// let param = {
    //     [ApiParamKey.type]: 'type',
    //     [ApiParamKey.location]: 'location'
    // }
    // let headers = {
    //     auth: '2JSU0A013FASDFI'
    // }
    // dispatch(fetchPosts([api_services, param, headers]))
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_6__.NextSeo, {
      title: `Impit Limited`,
      description: 'store in Dhaka'
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_InnerBanner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_home_About__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Solution__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_home_Counter__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_home_Whyus__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_home_Leaders__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})]
  });
};

Home.getInitialProps = _api_store__WEBPACK_IMPORTED_MODULE_5__/* .wrapper.getInitialPageProps */ .YS.getInitialPageProps(store => async () => {
  let api_services = _api_network_ApiServices__WEBPACK_IMPORTED_MODULE_3__/* .ApiServices.PHOTOS */ .u.PHOTOS;
  await store.dispatch((0,_api_redux_home__WEBPACK_IMPORTED_MODULE_4__/* .fetchHome */ .X)([api_services]));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8071:
/***/ ((module) => {

module.exports = "/_next/static/images/about-072390feb1a152237910589d0bae3779.jpg";

/***/ }),

/***/ 2848:
/***/ ((module) => {

module.exports = "/_next/static/images/below-5ae6d8400d0d58e62a14dca01b9499c8.jpg";

/***/ }),

/***/ 5780:
/***/ ((module) => {

module.exports = "/_next/static/images/count-602717037d58b6e14852a259ae243cde.png";

/***/ }),

/***/ 4837:
/***/ ((module) => {

module.exports = "/_next/static/images/message-01-db961680f7da8b531d09ceb8a71a1dfc.jpg";

/***/ }),

/***/ 9:
/***/ ((module) => {

module.exports = "/_next/static/images/solution-e8c0f3c0a9289ac9b3b10253d2f7e461.jpg";

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 4287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 4965:
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 5935:
/***/ ((module) => {

"use strict";
module.exports = require("react-html-parser");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 7446:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-parallax");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 7965:
/***/ ((module) => {

"use strict";
module.exports = import("swipernew");;

/***/ }),

/***/ 9265:
/***/ ((module) => {

"use strict";
module.exports = import("swipernew/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,664,0,981,314,169], () => (__webpack_exec__(3539)));
module.exports = __webpack_exports__;

})();