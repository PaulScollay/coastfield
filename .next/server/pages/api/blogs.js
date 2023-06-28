"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/blogs";
exports.ids = ["pages/api/blogs"];
exports.modules = {

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@sanity/client");;

/***/ }),

/***/ "(api)/./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllBlogs: () => (/* binding */ getAllBlogs),\n/* harmony export */   getBlogBySlug: () => (/* binding */ getBlogBySlug),\n/* harmony export */   urlFor: () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sanity */ \"(api)/./lib/sanity.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity__WEBPACK_IMPORTED_MODULE_0__]);\n_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst blogFields = `\n    title,\n    subtitle,\n    'slug': slug.current,\n    date,\n    'coverImage': coverImage.asset->url,\n    'author': author->{name, 'avatar': avatar.asset->url},\n`;\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(_sanity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nfunction urlFor(source) {\n    return builder.image(source);\n}\nasync function getAllBlogs() {\n    const results = await _sanity__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(`*[_type == \"blog\"] | order(date desc) {${blogFields}}`);\n    return results;\n}\nasync function getBlogBySlug(slug) {\n    const result = await _sanity__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(`*[_type == \"blog\" && slug.current == $slug]{\n            ${blogFields}\n            content[]{..., \"asset\": asset->}\n        }`, {\n        slug\n    }).then((res)=>res?.[0]);\n    return result;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNrQjtBQUUvQyxNQUFNRSxhQUFhLENBQUM7Ozs7Ozs7QUFPcEIsQ0FBQztBQUVELE1BQU1DLFVBQVVGLHdEQUFlQSxDQUFDRCwrQ0FBTUE7QUFFL0IsU0FBU0ksT0FBT0MsTUFBTTtJQUN6QixPQUFPRixRQUFRRyxNQUFNRDtBQUN6QjtBQUVPLGVBQWVFO0lBQ2xCLE1BQU1DLFVBQVUsTUFBTVIscURBQ1pTLENBQUMsQ0FBQyx1Q0FBdUMsRUFBRVAsV0FBVyxDQUFDLENBQUM7SUFDbEUsT0FBT007QUFDWDtBQUVPLGVBQWVFLGNBQWNDLElBQUk7SUFDcEMsTUFBTUMsU0FBUyxNQUFNWixxREFDWFMsQ0FBQyxDQUFDO1lBQ0osRUFBRVAsV0FBVzs7U0FFaEIsQ0FBQyxFQUFFO1FBQUNTO0lBQUksR0FBR0UsS0FBS0MsQ0FBQUEsTUFBT0EsS0FBSyxDQUFDLEVBQUU7SUFFcEMsT0FBT0Y7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctY2xpZW50Ly4vbGliL2FwaS5qcz80NTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnQgZnJvbSAnLi9zYW5pdHknXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuXG5jb25zdCBibG9nRmllbGRzID0gYFxuICAgIHRpdGxlLFxuICAgIHN1YnRpdGxlLFxuICAgICdzbHVnJzogc2x1Zy5jdXJyZW50LFxuICAgIGRhdGUsXG4gICAgJ2NvdmVySW1hZ2UnOiBjb3ZlckltYWdlLmFzc2V0LT51cmwsXG4gICAgJ2F1dGhvcic6IGF1dGhvci0+e25hbWUsICdhdmF0YXInOiBhdmF0YXIuYXNzZXQtPnVybH0sXG5gXG5cbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICAgIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEJsb2dzKCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjbGllbnRcbiAgICAgICAgLmZldGNoKGAqW190eXBlID09IFwiYmxvZ1wiXSB8IG9yZGVyKGRhdGUgZGVzYykgeyR7YmxvZ0ZpZWxkc319YCk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCbG9nQnlTbHVnKHNsdWcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnRcbiAgICAgICAgLmZldGNoKGAqW190eXBlID09IFwiYmxvZ1wiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z117XG4gICAgICAgICAgICAke2Jsb2dGaWVsZHN9XG4gICAgICAgICAgICBjb250ZW50W117Li4uLCBcImFzc2V0XCI6IGFzc2V0LT59XG4gICAgICAgIH1gLCB7c2x1Z30pLnRoZW4ocmVzID0+IHJlcz8uWzBdKVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iXSwibmFtZXMiOlsiY2xpZW50IiwiaW1hZ2VVcmxCdWlsZGVyIiwiYmxvZ0ZpZWxkcyIsImJ1aWxkZXIiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsImdldEFsbEJsb2dzIiwicmVzdWx0cyIsImZldGNoIiwiZ2V0QmxvZ0J5U2x1ZyIsInNsdWciLCJyZXN1bHQiLCJ0aGVuIiwicmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/api.js\n");

/***/ }),

/***/ "(api)/./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity_client__WEBPACK_IMPORTED_MODULE_0__]);\n_sanity_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst options = {\n    dataset: process.env.SANITY_DATASET_NAME,\n    projectId: \"uxmjxksn\",\n    useCdn: \"development\" === \"production\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_sanity_client__WEBPACK_IMPORTED_MODULE_0__.createClient)(options));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2FuaXR5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLFVBQVU7SUFDZEMsU0FBU0MsUUFBUUMsSUFBSUM7SUFDckJDLFdBQVdILFVBQTZCSTtJQUN4Q0MsUUFBUUwsa0JBQXlCO0FBS25DO0FBRUEsaUVBQWVILDREQUFZQSxDQUFDQyxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1jbGllbnQvLi9saWIvc2FuaXR5LmpzP2Q4YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHNhbml0eS9jbGllbnQnO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBkYXRhc2V0OiBwcm9jZXNzLmVudi5TQU5JVFlfREFUQVNFVF9OQU1FLFxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlNBTklUWV9QUk9KRUNUX0lELFxuICB1c2VDZG46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgLy8gdXNlQ2RuID09PSB0cnVlLCBnaXZlcyB5b3UgZmFzdCByZXNwb25zZSwgaXQgd2lsbCBnZXQgeW91XG4gIC8vIGNhY2hlZCBkYXRhXG4gIC8vIHVzZUNkbiA9PT0gZmFsc2UsIGdpdmUgeW91IGxpdHRsZSBiaXQgc2xvd2VyIHJlc3BvbnNlLCBidXRcbiAgLy8gbGF0ZXN0IGRhdGFcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNsaWVudChvcHRpb25zKSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJvcHRpb25zIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJTQU5JVFlfREFUQVNFVF9OQU1FIiwicHJvamVjdElkIiwiU0FOSVRZX1BST0pFQ1RfSUQiLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/sanity.js\n");

/***/ }),

/***/ "(api)/./pages/api/blogs.js":
/*!****************************!*\
  !*** ./pages/api/blogs.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getBlogs)\n/* harmony export */ });\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/api */ \"(api)/./lib/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function getBlogs(req, res) {\n    const data = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_0__.getAllBlogs)();\n    res.status(200).json(data);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFFeEIsZUFBZUMsU0FBU0MsR0FBRyxFQUFFQyxHQUFHO0lBQzNDLE1BQU1DLE9BQU8sTUFBTUoscURBQVdBO0lBQzlCRyxJQUFJRSxPQUFPLEtBQUtDLEtBQUtGO0FBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1jbGllbnQvLi9wYWdlcy9hcGkvYmxvZ3MuanM/ZWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBbGxCbG9ncyB9IGZyb20gXCJAL2xpYi9hcGlcIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRCbG9ncyhyZXEsIHJlcykge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBbGxCbG9ncygpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpXG59Il0sIm5hbWVzIjpbImdldEFsbEJsb2dzIiwiZ2V0QmxvZ3MiLCJyZXEiLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogs.js"));
module.exports = __webpack_exports__;

})();