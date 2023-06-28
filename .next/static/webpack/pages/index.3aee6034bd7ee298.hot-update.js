"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var components_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/PageLayout */ \"./components/PageLayout.js\");\n/* harmony import */ var _components_AuthorIntro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AuthorIntro */ \"./components/AuthorIntro.js\");\n/* harmony import */ var _components_CardListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CardListItem */ \"./components/CardListItem.js\");\n/* harmony import */ var _components_CardItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/CardItem */ \"./components/CardItem.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/actions */ \"./actions/index.js\");\n/* harmony import */ var components_FilteringMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/FilteringMenu */ \"./components/FilteringMenu.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((r)=>r.json());\nvar __N_SSG = true;\nfunction Home(param) {\n    let { blogs: initalData } = param;\n    _s();\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        view: {\n            list: 0\n        }\n    });\n    const { data: blogs, error } = (0,_actions__WEBPACK_IMPORTED_MODULE_6__.useGetBlogs)(initalData);\n    if (!blogs) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n        lineNumber: 23,\n        columnNumber: 22\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_PageLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthorIntro__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_FilteringMenu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    filter: filter,\n                    onChange: (option, value)=>{\n                        debugger;\n                        setFilter({\n                            ...filter,\n                            [option]: value\n                        });\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {\n                    className: \"mb-5\",\n                    children: blogs.map((blog)=>filter.view.list ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {\n                            md: \"9\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                author: blog.author,\n                                title: blog.title,\n                                subtitle: blog.subtitle,\n                                date: blog.date,\n                                link: {\n                                    href: \"/blogs/[slug]\",\n                                    as: \"/blogs/\".concat(blog.slug)\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this)\n                        }, \"\".concat(blog.slug, \"-list\"), false, {\n                            fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {\n                            md: \"4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                author: blog.author,\n                                title: blog.title,\n                                subtitle: blog.subtitle,\n                                date: blog.date,\n                                image: blog.coverImage,\n                                link: {\n                                    href: \"/blogs/[slug]\",\n                                    as: \"/blogs/\".concat(blog.slug)\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, this)\n                        }, blog.slug, false, {\n                            fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n            lineNumber: 27,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lpVZQJTpi7oT15HMb+LPUXXkbdg=\", false, function() {\n    return [\n        _actions__WEBPACK_IMPORTED_MODULE_6__.useGetBlogs\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWU1BO0FBWjJCO0FBRVM7QUFFSztBQUNJO0FBQ0U7QUFDUjtBQUNMO0FBQ2E7QUFDNUI7QUFJekIsTUFBTVcsVUFBVSxDQUFDQyxNQUFTQyxNQUFNRCxLQUFLRSxLQUFLQyxDQUFBQSxJQUFLQSxFQUFFQzs7QUFFbEMsU0FBU0MsS0FBSyxLQUFtQjtRQUFuQixFQUFDQyxPQUFPQyxVQUFVLEVBQUMsR0FBbkI7O0lBQzNCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHcEIsK0NBQVFBLENBQUM7UUFDbkNxQixNQUFNO1lBQUVDLE1BQU07UUFBRTtJQUNsQjtJQUVBLE1BQU0sRUFBRUMsTUFBS04sS0FBSyxFQUFFTyxLQUFLLEVBQUUsR0FBR2pCLHFEQUFXQSxDQUFDVztJQUMxQyxJQUFJLENBQUNELE9BQU8scUJBQU8sOERBQUNRO2tCQUFFOzs7Ozs7SUFFdEIscUJBQ0UsOERBQUNDO2tCQUNELDRFQUFDdkIsNkRBQVVBOzs4QkFDVCw4REFBQ0MsK0RBQVdBOzs7Ozs4QkFDWiw4REFBQ0ksZ0VBQWFBO29CQUNaVyxRQUFRQTtvQkFDUlEsVUFBVSxDQUFDQyxRQUFRQzt3QkFDakIsUUFBUTt3QkFDUlQsVUFBVTs0QkFBQyxHQUFHRCxNQUFNOzRCQUFFLENBQUNTLE9BQU8sRUFBRUM7d0JBQUs7b0JBQ3ZDOzs7Ozs7OEJBRUYsOERBQUNDOzs7Ozs4QkFFRCw4REFBQzdCLGdEQUFHQTtvQkFBQzhCLFdBQVU7OEJBQ1hkLE1BQU1lLElBQUlDLENBQUFBLE9BQ1JkLE9BQU9FLEtBQUtDLHFCQUNaLDhEQUFDcEIsZ0RBQUdBOzRCQUEyQmdDLElBQUc7c0NBQ2hDLDRFQUFDN0IsZ0VBQVlBO2dDQUNYOEIsUUFBUUYsS0FBS0U7Z0NBQ2JDLE9BQU9ILEtBQUtHO2dDQUNaQyxVQUFVSixLQUFLSTtnQ0FDZkMsTUFBTUwsS0FBS0s7Z0NBQ1hDLE1BQU07b0NBQ0pDLE1BQU07b0NBQ05DLElBQUksVUFBb0IsT0FBVlIsS0FBS1M7Z0NBQ3JCOzs7Ozs7MkJBVE0sR0FBYSxPQUFWVCxLQUFLUyxNQUFLOzs7O2lEQWF2Qiw4REFBQ3hDLGdEQUFHQTs0QkFBaUJnQyxJQUFHO3NDQUN0Qiw0RUFBQzVCLDREQUFRQTtnQ0FDUDZCLFFBQVFGLEtBQUtFO2dDQUNiQyxPQUFPSCxLQUFLRztnQ0FDWkMsVUFBVUosS0FBS0k7Z0NBQ2ZDLE1BQU1MLEtBQUtLO2dDQUNYSyxPQUFPVixLQUFLVztnQ0FDWkwsTUFBTTtvQ0FDSkMsTUFBTTtvQ0FDTkMsSUFBSSxVQUFvQixPQUFWUixLQUFLUztnQ0FDckI7Ozs7OzsyQkFWTVQsS0FBS1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CM0I7R0F4RHdCMUI7O1FBS1FULGlEQUFXQTs7O0tBTG5CUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHsgUm93LCBDb2x9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBnZXRBbGxCbG9ncyB9IGZyb20gJy9saWIvYXBpJztcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvUGFnZUxheW91dCc7XG5pbXBvcnQgQXV0aG9ySW50cm8gZnJvbSAnQC9jb21wb25lbnRzL0F1dGhvckludHJvJztcbmltcG9ydCBDYXJkTGlzdEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL0NhcmRMaXN0SXRlbSc7XG5pbXBvcnQgQ2FyZEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL0NhcmRJdGVtJztcbmltcG9ydCB7IHVzZUdldEJsb2dzIH0gZnJvbSAnQC9hY3Rpb25zJztcbmltcG9ydCBGaWx0ZXJpbmdNZW51IGZyb20gJ2NvbXBvbmVudHMvRmlsdGVyaW5nTWVudSc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+ICBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2Jsb2dzOiBpbml0YWxEYXRhfSkge1xuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoe1xuICAgIHZpZXc6IHsgbGlzdDogMCB9XG4gIH0pO1xuXG4gIGNvbnN0IHsgZGF0YTpibG9ncywgZXJyb3IgfSA9IHVzZUdldEJsb2dzKGluaXRhbERhdGEpO1xuICBpZiAoIWJsb2dzKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG5cbiAgcmV0dXJuICggXG4gICAgPGRpdj5cbiAgICA8UGFnZUxheW91dD5cbiAgICAgIDxBdXRob3JJbnRybyAvPlxuICAgICAgPEZpbHRlcmluZ01lbnVcbiAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXsob3B0aW9uLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgc2V0RmlsdGVyKHsuLi5maWx0ZXIsIFtvcHRpb25dOiB2YWx1ZX0pO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxoci8+XG4gICAgICB7LyogY2xhc3NOYW1lIGZyb20gcHJvcHMgKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgeyBibG9ncy5tYXAoYmxvZyA9PlxuICAgICAgICAgICAgZmlsdGVyLnZpZXcubGlzdCA/XG4gICAgICAgICAgICA8Q29sIGtleT17YCR7YmxvZy5zbHVnfS1saXN0YH0gbWQ9XCI5XCI+XG4gICAgICAgICAgICAgIDxDYXJkTGlzdEl0ZW1cbiAgICAgICAgICAgICAgICBhdXRob3I9e2Jsb2cuYXV0aG9yfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtibG9nLnRpdGxlfVxuICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtibG9nLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgIGRhdGU9e2Jsb2cuZGF0ZX1cbiAgICAgICAgICAgICAgICBsaW5rPXt7XG4gICAgICAgICAgICAgICAgICBocmVmOiAnL2Jsb2dzL1tzbHVnXScsXG4gICAgICAgICAgICAgICAgICBhczogYC9ibG9ncy8ke2Jsb2cuc2x1Z31gXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPENvbCBrZXk9e2Jsb2cuc2x1Z30gbWQ9XCI0XCI+XG4gICAgICAgICAgICAgIDxDYXJkSXRlbVxuICAgICAgICAgICAgICAgIGF1dGhvcj17YmxvZy5hdXRob3J9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2Jsb2cudGl0bGV9XG4gICAgICAgICAgICAgICAgc3VidGl0bGU9e2Jsb2cuc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgZGF0ZT17YmxvZy5kYXRlfVxuICAgICAgICAgICAgICAgIGltYWdlPXtibG9nLmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgICAgbGluaz17e1xuICAgICAgICAgICAgICAgICAgaHJlZjogJy9ibG9ncy9bc2x1Z10nLFxuICAgICAgICAgICAgICAgICAgYXM6IGAvYmxvZ3MvJHtibG9nLnNsdWd9YFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICApIH1cbiAgICAgIDwvUm93PlxuICAgIDwvUGFnZUxheW91dD5cbiAgICAgIHsvKiA8aHIvPntKU09OLnN0cmluZ2lmeShibG9ncyl9ICovfVxuICAgICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBibG9ncyA9IGF3YWl0IGdldEFsbEJsb2dzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJsb2dzXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJ1c2VTdGF0ZSIsIlJvdyIsIkNvbCIsIlBhZ2VMYXlvdXQiLCJBdXRob3JJbnRybyIsIkNhcmRMaXN0SXRlbSIsIkNhcmRJdGVtIiwidXNlR2V0QmxvZ3MiLCJGaWx0ZXJpbmdNZW51IiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiSG9tZSIsImJsb2dzIiwiaW5pdGFsRGF0YSIsImZpbHRlciIsInNldEZpbHRlciIsInZpZXciLCJsaXN0IiwiZGF0YSIsImVycm9yIiwicCIsImRpdiIsIm9uQ2hhbmdlIiwib3B0aW9uIiwidmFsdWUiLCJociIsImNsYXNzTmFtZSIsIm1hcCIsImJsb2ciLCJtZCIsImF1dGhvciIsInRpdGxlIiwic3VidGl0bGUiLCJkYXRlIiwibGluayIsImhyZWYiLCJhcyIsInNsdWciLCJpbWFnZSIsImNvdmVySW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});