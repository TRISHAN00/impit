"use strict";
(() => {
var exports = {};
exports.id = 679;
exports.ids = [679,476,918];
exports.modules = {

/***/ 1267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ApiParamKey */
const ApiParamKey = {
  type: 'type'
};

/***/ }),

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

/***/ 4424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ posts),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./pages/api/redux/home/index.js
var home = __webpack_require__(2806);
// EXTERNAL MODULE: ./pages/api/network/ApiServices.js
var ApiServices = __webpack_require__(2495);
// EXTERNAL MODULE: ./pages/api/network/ApiParamKey.js
var ApiParamKey = __webpack_require__(1267);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/post/Post.jsx










const Post = ({
  getPost
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  let api_services = ApiServices/* ApiServices.POSTS */.u.POSTS;
  return /*#__PURE__*/jsx_runtime_.jsx(StyeldHome, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "post-wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Posts"
      }), getPost?.loading ? /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Loading posts..."
      }) : /*#__PURE__*/jsx_runtime_.jsx("ul", {
        children: getPost?.posts?.slice(0, 10).map(data => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: 'this-is',
          children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: `posts/${data?.id}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: data?.title
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: data?.body
          })]
        }, data?.id))
      })]
    })
  });
};

const StyeldHome = external_styled_components_default().section.withConfig({
  displayName: "Post__StyeldHome",
  componentId: "sc-1ap22vt-0"
})([".post-wrap{width:85%;margin:auto;margin-top:50px;h3{margin-bottom:50px;}h4{font-weight:bold;font-size:18px;}p{margin-top:10px;font-weight:300;}ul{width:100%;list-style:none;padding:0;display:flex;flex-wrap:wrap;justify-content:space-between;li{width:calc(33.33333% - 5px);padding:10px;border:1px solid #DDD;box-sizing:border-box;margin-bottom:20px;position:relative;a{position:absolute;height:100%;width:100%;}}}}"]);
/* harmony default export */ const post_Post = (Post);
// EXTERNAL MODULE: ./pages/api/redux/post/index.js
var post = __webpack_require__(4589);
// EXTERNAL MODULE: ./pages/api/store/index.js
var store = __webpack_require__(1000);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/posts/index.jsx












const Home = props => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const getPost = (0,external_react_redux_.useSelector)(state => state.postReducer);
  const router = (0,router_.useRouter)(); // api call

  (0,external_react_.useEffect)(() => {
    if (!props.isServer) {
      let api_services = ApiServices/* ApiServices.POSTS */.u.POSTS;
      dispatch((0,post/* fetchPosts */.T6)([api_services]));
    }
  }, [props.isServer, router]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.NextSeo, {
      title: `Post | Web`,
      description: 'Building materials store in Dhaka'
    }), /*#__PURE__*/jsx_runtime_.jsx(post_Post, {
      getPost: getPost
    })]
  });
};

const getServerSideProps = store/* wrapper.getServerSideProps */.YS.getServerSideProps(store => async ({
  req
}) => {
  const isServer = !req.url.startsWith("/_next");

  if (isServer) {
    let api_services = ApiServices/* ApiServices.POSTS */.u.POSTS;
    await store.dispatch((0,post/* fetchPosts */.T6)([api_services]));
  }

  return {
    props: {
      isServer,
      title: "post"
    }
  };
});
/* harmony default export */ const posts = (Home);

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

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,664,0], () => (__webpack_exec__(4424)));
module.exports = __webpack_exports__;

})();