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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var components_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/PageLayout */ \"./components/PageLayout.js\");\n/* harmony import */ var _components_AuthorIntro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AuthorIntro */ \"./components/AuthorIntro.js\");\n/* harmony import */ var _components_CardListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CardListItem */ \"./components/CardListItem.js\");\n/* harmony import */ var _components_CardItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/CardItem */ \"./components/CardItem.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/actions */ \"./actions/index.js\");\n/* harmony import */ var components_FilteringMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/FilteringMenu */ \"./components/FilteringMenu.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((r)=>r.json());\nvar __N_SSG = true;\nfunction Home(param) {\n    let { blogs } = param;\n    _s();\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        view: {\n            list: 0\n        }\n    });\n    const { data: blogsData, error } = (0,_actions__WEBPACK_IMPORTED_MODULE_6__.useGetBlogs)();\n    if (blogsData) {\n        alert(JSON.stringify(blogsData));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_PageLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthorIntro__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_FilteringMenu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    filter: filter,\n                    onChange: (option, value)=>{\n                        debugger;\n                        setFilter({\n                            ...filter,\n                            [option]: value\n                        });\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {\n                    className: \"mb-5\",\n                    children: blogs.map((blog)=>filter.view.list ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {\n                            md: \"9\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                author: blog.author,\n                                title: blog.title,\n                                subtitle: blog.subtitle,\n                                date: blog.date,\n                                link: {\n                                    href: \"/blogs/[slug]\",\n                                    as: \"/blogs/\".concat(blog.slug)\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, this)\n                        }, \"\".concat(blog.slug, \"-list\"), false, {\n                            fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {\n                            md: \"4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                author: blog.author,\n                                title: blog.title,\n                                subtitle: blog.subtitle,\n                                date: blog.date,\n                                image: blog.coverImage,\n                                link: {\n                                    href: \"/blogs/[slug]\",\n                                    as: \"/blogs/\".concat(blog.slug)\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, this)\n                        }, blog.slug, false, {\n                            fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/paulscollay/Development/Projects/UdemyProjects/Sanity/coastfield/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"yw7VnXzyAvZqnAcixNVbTbUSQgg=\", false, function() {\n    return [\n        _actions__WEBPACK_IMPORTED_MODULE_6__.useGetBlogs\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWU1BO0FBWjJCO0FBRVM7QUFFSztBQUNJO0FBQ0U7QUFDUjtBQUNMO0FBQ2E7QUFDNUI7QUFJekIsTUFBTVcsVUFBVSxDQUFDQyxNQUFTQyxNQUFNRCxLQUFLRSxLQUFLQyxDQUFBQSxJQUFLQSxFQUFFQzs7QUFFbEMsU0FBU0MsS0FBSyxLQUFPO1FBQVAsRUFBQ0MsS0FBSyxFQUFDLEdBQVA7O0lBQzNCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHbkIsK0NBQVFBLENBQUM7UUFDbkNvQixNQUFNO1lBQUVDLE1BQU07UUFBRTtJQUNsQjtJQUVBLE1BQU0sRUFBRUMsTUFBS0MsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FBR2pCLHFEQUFXQTtJQUM3QyxJQUFJZ0IsV0FBVztRQUNiRSxNQUFNQyxLQUFLQyxVQUFVSjtJQUN2QjtJQUVBLHFCQUNFLDhEQUFDSztrQkFDRCw0RUFBQ3pCLDZEQUFVQTs7OEJBQ1QsOERBQUNDLCtEQUFXQTs7Ozs7OEJBQ1osOERBQUNJLGdFQUFhQTtvQkFDWlUsUUFBUUE7b0JBQ1JXLFVBQVUsQ0FBQ0MsUUFBUUM7d0JBQ2pCLFFBQVE7d0JBQ1JaLFVBQVU7NEJBQUMsR0FBR0QsTUFBTTs0QkFBRSxDQUFDWSxPQUFPLEVBQUVDO3dCQUFLO29CQUN2Qzs7Ozs7OzhCQUVGLDhEQUFDQzs7Ozs7OEJBRUQsOERBQUMvQixnREFBR0E7b0JBQUNnQyxXQUFVOzhCQUNYaEIsTUFBTWlCLElBQUlDLENBQUFBLE9BQ1JqQixPQUFPRSxLQUFLQyxxQkFDWiw4REFBQ25CLGdEQUFHQTs0QkFBMkJrQyxJQUFHO3NDQUNoQyw0RUFBQy9CLGdFQUFZQTtnQ0FDWGdDLFFBQVFGLEtBQUtFO2dDQUNiQyxPQUFPSCxLQUFLRztnQ0FDWkMsVUFBVUosS0FBS0k7Z0NBQ2ZDLE1BQU1MLEtBQUtLO2dDQUNYQyxNQUFNO29DQUNKQyxNQUFNO29DQUNOQyxJQUFJLFVBQW9CLE9BQVZSLEtBQUtTO2dDQUNyQjs7Ozs7OzJCQVRNLEdBQWEsT0FBVlQsS0FBS1MsTUFBSzs7OztpREFhdkIsOERBQUMxQyxnREFBR0E7NEJBQWlCa0MsSUFBRztzQ0FDdEIsNEVBQUM5Qiw0REFBUUE7Z0NBQ1ArQixRQUFRRixLQUFLRTtnQ0FDYkMsT0FBT0gsS0FBS0c7Z0NBQ1pDLFVBQVVKLEtBQUtJO2dDQUNmQyxNQUFNTCxLQUFLSztnQ0FDWEssT0FBT1YsS0FBS1c7Z0NBQ1pMLE1BQU07b0NBQ0pDLE1BQU07b0NBQ05DLElBQUksVUFBb0IsT0FBVlIsS0FBS1M7Z0NBQ3JCOzs7Ozs7MkJBVk1ULEtBQUtTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQjNCO0dBMUR3QjVCOztRQUtZVCxpREFBV0E7OztLQUx2QlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCB7IFJvdywgQ29sfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgZ2V0QWxsQmxvZ3MgfSBmcm9tICcvbGliL2FwaSc7XG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICdjb21wb25lbnRzL1BhZ2VMYXlvdXQnO1xuaW1wb3J0IEF1dGhvckludHJvIGZyb20gJ0AvY29tcG9uZW50cy9BdXRob3JJbnRybyc7XG5pbXBvcnQgQ2FyZExpc3RJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9DYXJkTGlzdEl0ZW0nO1xuaW1wb3J0IENhcmRJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9DYXJkSXRlbSc7XG5pbXBvcnQgeyB1c2VHZXRCbG9ncyB9IGZyb20gJ0AvYWN0aW9ucyc7XG5pbXBvcnQgRmlsdGVyaW5nTWVudSBmcm9tICdjb21wb25lbnRzL0ZpbHRlcmluZ01lbnUnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiAgZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtibG9nc30pIHtcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHtcbiAgICB2aWV3OiB7IGxpc3Q6IDAgfVxuICB9KTtcblxuICBjb25zdCB7IGRhdGE6YmxvZ3NEYXRhLCBlcnJvciB9ID0gdXNlR2V0QmxvZ3MoKTtcbiAgaWYgKGJsb2dzRGF0YSkge1xuICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGJsb2dzRGF0YSkpO1xuICB9XG5cbiAgcmV0dXJuICggXG4gICAgPGRpdj5cbiAgICA8UGFnZUxheW91dD5cbiAgICAgIDxBdXRob3JJbnRybyAvPlxuICAgICAgPEZpbHRlcmluZ01lbnVcbiAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXsob3B0aW9uLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgc2V0RmlsdGVyKHsuLi5maWx0ZXIsIFtvcHRpb25dOiB2YWx1ZX0pO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxoci8+XG4gICAgICB7LyogY2xhc3NOYW1lIGZyb20gcHJvcHMgKi99XG4gICAgICA8Um93IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgeyBibG9ncy5tYXAoYmxvZyA9PlxuICAgICAgICAgICAgZmlsdGVyLnZpZXcubGlzdCA/XG4gICAgICAgICAgICA8Q29sIGtleT17YCR7YmxvZy5zbHVnfS1saXN0YH0gbWQ9XCI5XCI+XG4gICAgICAgICAgICAgIDxDYXJkTGlzdEl0ZW1cbiAgICAgICAgICAgICAgICBhdXRob3I9e2Jsb2cuYXV0aG9yfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtibG9nLnRpdGxlfVxuICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtibG9nLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgIGRhdGU9e2Jsb2cuZGF0ZX1cbiAgICAgICAgICAgICAgICBsaW5rPXt7XG4gICAgICAgICAgICAgICAgICBocmVmOiAnL2Jsb2dzL1tzbHVnXScsXG4gICAgICAgICAgICAgICAgICBhczogYC9ibG9ncy8ke2Jsb2cuc2x1Z31gXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPENvbCBrZXk9e2Jsb2cuc2x1Z30gbWQ9XCI0XCI+XG4gICAgICAgICAgICAgIDxDYXJkSXRlbVxuICAgICAgICAgICAgICAgIGF1dGhvcj17YmxvZy5hdXRob3J9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2Jsb2cudGl0bGV9XG4gICAgICAgICAgICAgICAgc3VidGl0bGU9e2Jsb2cuc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgZGF0ZT17YmxvZy5kYXRlfVxuICAgICAgICAgICAgICAgIGltYWdlPXtibG9nLmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgICAgbGluaz17e1xuICAgICAgICAgICAgICAgICAgaHJlZjogJy9ibG9ncy9bc2x1Z10nLFxuICAgICAgICAgICAgICAgICAgYXM6IGAvYmxvZ3MvJHtibG9nLnNsdWd9YFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICApIH1cbiAgICAgIDwvUm93PlxuICAgIDwvUGFnZUxheW91dD5cbiAgICAgIHsvKiA8aHIvPntKU09OLnN0cmluZ2lmeShibG9ncyl9ICovfVxuICAgICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBibG9ncyA9IGF3YWl0IGdldEFsbEJsb2dzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJsb2dzXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJ1c2VTdGF0ZSIsIlJvdyIsIkNvbCIsIlBhZ2VMYXlvdXQiLCJBdXRob3JJbnRybyIsIkNhcmRMaXN0SXRlbSIsIkNhcmRJdGVtIiwidXNlR2V0QmxvZ3MiLCJGaWx0ZXJpbmdNZW51IiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiSG9tZSIsImJsb2dzIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwidmlldyIsImxpc3QiLCJkYXRhIiwiYmxvZ3NEYXRhIiwiZXJyb3IiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJvbkNoYW5nZSIsIm9wdGlvbiIsInZhbHVlIiwiaHIiLCJjbGFzc05hbWUiLCJtYXAiLCJibG9nIiwibWQiLCJhdXRob3IiLCJ0aXRsZSIsInN1YnRpdGxlIiwiZGF0ZSIsImxpbmsiLCJocmVmIiwiYXMiLCJzbHVnIiwiaW1hZ2UiLCJjb3ZlckltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});