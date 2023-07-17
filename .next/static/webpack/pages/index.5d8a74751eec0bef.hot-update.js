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

/***/ "./src/pages/FooterLinks.jsx":
/*!***********************************!*\
  !*** ./src/pages/FooterLinks.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-react */ \"./node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.js\");\n/* harmony import */ var _massadoptionlogo_copy_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./massadoptionlogo copy.jpeg */ \"./src/pages/massadoptionlogo copy.jpeg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.createStyles)((theme)=>({\n        footer: {\n            marginTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.rem)(120),\n            paddingTop: \"calc(\".concat(theme.spacing.xl, \" * 2)\"),\n            paddingBottom: \"calc(\".concat(theme.spacing.xl, \" * 2)\"),\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[6] : theme.colors.gray[0],\n            borderTop: \"\".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.rem)(1), \" solid \").concat(theme.colorScheme === \"dark\" ? theme.colors.dark[5] : theme.colors.gray[2])\n        },\n        logo: {\n            maxWidth: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.rem)(200),\n            [\"@media (max-width: \".concat(theme.breakpoints.sm, \"px)\")]: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                alignItems: \"center\"\n            }\n        },\n        description: {\n            marginTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.rem)(5),\n            [\"@media (max-width: \".concat(theme.breakpoints.sm, \"px)\")]: {\n                marginTop: theme.spacing.xs,\n                textAlign: \"center\"\n            }\n        },\n        inner: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            [\"@media (max-width: \".concat(theme.breakpoints.sm, \"px)\")]: {\n                flexDirection: \"column\",\n                alignItems: \"center\"\n            }\n        },\n        groups: {\n            display: \"flex\",\n            flexWrap: \"wrap\",\n            [\"@media (max-width: \".concat(theme.breakpoints.sm, \"px)\")]: {\n                display: \"none\"\n            }\n        },\n        wrapper: {\n            width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.rem)(160)\n        },\n        link: {\n            display: \"block\",\n            color: theme.colorScheme === \"dark\" ? theme.colors.dark[1] : theme.colors.gray[6],\n            fontSize: theme.fontSizes.sm,\n            paddingTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.rem)(3),\n            paddingBottom: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.rem)(3),\n            \"&:hover\": {\n                textDecoration: \"underline\"\n            }\n        },\n        title: {\n            fontSize: theme.fontSizes.lg,\n            fontWeight: 700,\n            fontFamily: \"Greycliff CF, \".concat(theme.fontFamily),\n            marginBottom: \"calc(\".concat(theme.spacing.xs, \" / 2)\"),\n            color: theme.colorScheme === \"dark\" ? theme.white : theme.black\n        },\n        afterFooter: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            marginTop: theme.spacing.xl,\n            paddingTop: theme.spacing.xl,\n            paddingBottom: theme.spacing.xl,\n            borderTop: \"\".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.rem)(1), \" solid \").concat(theme.colorScheme === \"dark\" ? theme.colors.dark[4] : theme.colors.gray[2]),\n            [\"@media (max-width: \".concat(theme.breakpoints.sm, \"px)\")]: {\n                flexDirection: \"column\"\n            }\n        },\n        social: {\n            [\"@media (max-width: \".concat(theme.breakpoints.sm, \"px)\")]: {\n                marginTop: theme.spacing.xs\n            }\n        }\n    }));\nfunction FooterLinks(param) {\n    let { data  } = param;\n    _s();\n    const { classes  } = useStyles();\n    const groups = data.map((group)=>{\n        const links = group.links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                className: classes.link,\n                component: \"a\",\n                href: link.link,\n                onClick: (event)=>event.preventDefault(),\n                children: link.label\n            }, index, false, {\n                fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this));\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classes.wrapper,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    className: classes.title,\n                    children: group.title\n                }, void 0, false, {\n                    fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this),\n                links\n            ]\n        }, group.title, true, {\n            fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: classes.footer,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                className: classes.inner,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: classes.logo,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: _massadoptionlogo_copy_jpeg__WEBPACK_IMPORTED_MODULE_2__.image,\n                                alt: \"Mass Adoption Logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                size: \"xs\",\n                                color: \"dimmed\",\n                                className: classes.description,\n                                children: \"Meet Bitcoiners in person. Use AI to find out what you need to know about the world's best money.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                                lineNumber: 131,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: classes.groups,\n                        children: groups\n                    }, void 0, false, {\n                        fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                className: classes.afterFooter,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        color: \"dimmed\",\n                        size: \"sm\",\n                        children: \"\\xa9 2023 MassAdoption. All rights reserved.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Group, {\n                        spacing: 0,\n                        className: classes.social,\n                        position: \"right\",\n                        noWrap: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {\n                                size: \"lg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.IconBrandTwitter, {\n                                    size: \"1.05rem\",\n                                    stroke: 1.5\n                                }, void 0, false, {\n                                    fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                                    lineNumber: 144,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {\n                                size: \"lg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.IconBrandYoutube, {\n                                    size: \"1.05rem\",\n                                    stroke: 1.5\n                                }, void 0, false, {\n                                    fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                                    lineNumber: 147,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                                lineNumber: 146,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {\n                                size: \"lg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.IconBrandInstagram, {\n                                    size: \"1.05rem\",\n                                    stroke: 1.5\n                                }, void 0, false, {\n                                    fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                                lineNumber: 149,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/conorchepenik/Desktop/MassAdoptionAI/src/pages/FooterLinks.jsx\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, this);\n}\n_s(FooterLinks, \"pLBpBp6WiWV8odSNq6A1zI9Ay/Y=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = FooterLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FooterLinks);\nvar _c;\n$RefreshReg$(_c, \"FooterLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEIsS0FBSzs7a0NBQ2pDLDhEQUFDa0M7d0JBQUlQLFdBQVdMLFFBQVFoQyxJQUFJOzswQ0FDMUIsOERBQUM2QztnQ0FBSUMsS0FBSzdELDhEQUFLQTtnQ0FBRThELEtBQUk7Ozs7OzswQ0FDckIsOERBQUN0RSwrQ0FBSUE7Z0NBQUN1RSxNQUFLO2dDQUFLL0IsT0FBTTtnQ0FBU29CLFdBQVdMLFFBQVF6QixXQUFXOzBDQUFFOzs7Ozs7Ozs7Ozs7a0NBSWpFLDhEQUFDcUM7d0JBQUlQLFdBQVdMLFFBQVFwQixNQUFNO2tDQUFHQTs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ2xDLG9EQUFTQTtnQkFBQzJELFdBQVdMLFFBQVFKLFdBQVc7O2tDQUN2Qyw4REFBQ25ELCtDQUFJQTt3QkFBQ3dDLE9BQU07d0JBQVMrQixNQUFLO2tDQUFLOzs7Ozs7a0NBSS9CLDhEQUFDcEUsZ0RBQUtBO3dCQUFDVyxTQUFTO3dCQUFHOEMsV0FBV0wsUUFBUUgsTUFBTTt3QkFBRW9CLFVBQVM7d0JBQVFDLE1BQU07OzBDQUNuRSw4REFBQ3ZFLHFEQUFVQTtnQ0FBQ3FFLE1BQUs7MENBQ2YsNEVBQUNsRSxpRUFBZ0JBO29DQUFDa0UsTUFBSztvQ0FBVUcsUUFBUTs7Ozs7Ozs7Ozs7MENBRTNDLDhEQUFDeEUscURBQVVBO2dDQUFDcUUsTUFBSzswQ0FDZiw0RUFBQ2pFLGlFQUFnQkE7b0NBQUNpRSxNQUFLO29DQUFVRyxRQUFROzs7Ozs7Ozs7OzswQ0FFM0MsOERBQUN4RSxxREFBVUE7Z0NBQUNxRSxNQUFLOzBDQUNmLDRFQUFDaEUsbUVBQWtCQTtvQ0FBQ2dFLE1BQUs7b0NBQVVHLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZEO0dBdERTckI7O1FBQ2E1Qzs7O0tBRGI0QztBQXdEVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvRm9vdGVyTGlua3MuanN4Pzg0NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgVGV4dCwgQ29udGFpbmVyLCBBY3Rpb25JY29uLCBHcm91cCwgcmVtIH0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XG5pbXBvcnQgeyBJY29uQnJhbmRUd2l0dGVyLCBJY29uQnJhbmRZb3V0dWJlLCBJY29uQnJhbmRJbnN0YWdyYW0gfSBmcm9tICdAdGFibGVyL2ljb25zLXJlYWN0JztcbmltcG9ydCB7IGltYWdlIH0gZnJvbSAnLi9tYXNzYWRvcHRpb25sb2dvIGNvcHkuanBlZyc7IFxuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBmb290ZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHJlbSgxMjApLFxuICAgIHBhZGRpbmdUb3A6IGBjYWxjKCR7dGhlbWUuc3BhY2luZy54bH0gKiAyKWAsXG4gICAgcGFkZGluZ0JvdHRvbTogYGNhbGMoJHt0aGVtZS5zcGFjaW5nLnhsfSAqIDIpYCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS5jb2xvcnMuZGFya1s2XSA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICAgIGJvcmRlclRvcDogYCR7cmVtKDEpfSBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09ICdkYXJrJyA/IHRoZW1lLmNvbG9ycy5kYXJrWzVdIDogdGhlbWUuY29sb3JzLmdyYXlbMl1cbiAgICB9YCxcbiAgfSxcblxuICBsb2dvOiB7XG4gICAgbWF4V2lkdGg6IHJlbSgyMDApLFxuXG4gICAgW2BAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy5zbX1weClgXToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB9LFxuICB9LFxuXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgbWFyZ2luVG9wOiByZW0oNSksXG5cbiAgICBbYEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnNtfXB4KWBdOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcueHMsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gIH0sXG5cbiAgaW5uZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcblxuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219cHgpYF06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfSxcbiAgfSxcblxuICBncm91cHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcblxuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219cHgpYF06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogcmVtKDE2MCksXG4gIH0sXG5cbiAgbGluazoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS5jb2xvcnMuZGFya1sxXSA6IHRoZW1lLmNvbG9ycy5ncmF5WzZdLFxuICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc20sXG4gICAgcGFkZGluZ1RvcDogcmVtKDMpLFxuICAgIHBhZGRpbmdCb3R0b206IHJlbSgzKSxcblxuICAgICcmOmhvdmVyJzoge1xuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICAgIH0sXG4gIH0sXG5cbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLmxnLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBmb250RmFtaWx5OiBgR3JleWNsaWZmIENGLCAke3RoZW1lLmZvbnRGYW1pbHl9YCxcbiAgICBtYXJnaW5Cb3R0b206IGBjYWxjKCR7dGhlbWUuc3BhY2luZy54c30gLyAyKWAsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS53aGl0ZSA6IHRoZW1lLmJsYWNrLFxuICB9LFxuXG4gIGFmdGVyRm9vdGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnhsLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcueGwsXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy54bCxcbiAgICBib3JkZXJUb3A6IGAke3JlbSgxKX0gc29saWQgJHtcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS5jb2xvcnMuZGFya1s0XSA6IHRoZW1lLmNvbG9ycy5ncmF5WzJdXG4gICAgfWAsXG5cbiAgICBbYEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnNtfXB4KWBdOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICB9LFxuXG4gIHNvY2lhbDoge1xuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMuc219cHgpYF06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy54cyxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5mdW5jdGlvbiBGb290ZXJMaW5rcyh7IGRhdGEgfSkge1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGdyb3VwcyA9IGRhdGEubWFwKChncm91cCkgPT4ge1xuICAgIGNvbnN0IGxpbmtzID0gZ3JvdXAubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgPFRleHRcbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICBocmVmPXtsaW5rLmxpbmt9XG4gICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKX1cbiAgICAgID5cbiAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICA8L1RleHQ+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0ga2V5PXtncm91cC50aXRsZX0+XG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e2dyb3VwLnRpdGxlfTwvVGV4dD5cbiAgICAgICAge2xpbmtzfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cIk1hc3MgQWRvcHRpb24gTG9nb1wiIC8+XG4gICAgICAgICAgPFRleHQgc2l6ZT1cInhzXCIgY29sb3I9XCJkaW1tZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgTWVldCBCaXRjb2luZXJzIGluIHBlcnNvbi4gVXNlIEFJIHRvIGZpbmQgb3V0IHdoYXQgeW91IG5lZWQgdG8ga25vdyBhYm91dCB0aGUgd29ybGQncyBiZXN0IG1vbmV5LlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3Vwc30+e2dyb3Vwc308L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuYWZ0ZXJGb290ZXJ9PlxuICAgICAgICA8VGV4dCBjb2xvcj1cImRpbW1lZFwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgIMKpIDIwMjMgTWFzc0Fkb3B0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgPEdyb3VwIHNwYWNpbmc9ezB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWx9IHBvc2l0aW9uPVwicmlnaHRcIiBub1dyYXA+XG4gICAgICAgICAgPEFjdGlvbkljb24gc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICA8SWNvbkJyYW5kVHdpdHRlciBzaXplPVwiMS4wNXJlbVwiIHN0cm9rZT17MS41fSAvPlxuICAgICAgICAgIDwvQWN0aW9uSWNvbj5cbiAgICAgICAgICA8QWN0aW9uSWNvbiBzaXplPVwibGdcIj5cbiAgICAgICAgICAgIDxJY29uQnJhbmRZb3V0dWJlIHNpemU9XCIxLjA1cmVtXCIgc3Ryb2tlPXsxLjV9IC8+XG4gICAgICAgICAgPC9BY3Rpb25JY29uPlxuICAgICAgICAgIDxBY3Rpb25JY29uIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgPEljb25CcmFuZEluc3RhZ3JhbSBzaXplPVwiMS4wNXJlbVwiIHN0cm9rZT17MS41fSAvPlxuICAgICAgICAgIDwvQWN0aW9uSWNvbj5cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJMaW5rczsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVTdHlsZXMiLCJUZXh0IiwiQ29udGFpbmVyIiwiQWN0aW9uSWNvbiIsIkdyb3VwIiwicmVtIiwiSWNvbkJyYW5kVHdpdHRlciIsIkljb25CcmFuZFlvdXR1YmUiLCJJY29uQnJhbmRJbnN0YWdyYW0iLCJpbWFnZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiZm9vdGVyIiwibWFyZ2luVG9wIiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJ4bCIsInBhZGRpbmdCb3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvclNjaGVtZSIsImNvbG9ycyIsImRhcmsiLCJncmF5IiwiYm9yZGVyVG9wIiwibG9nbyIsIm1heFdpZHRoIiwiYnJlYWtwb2ludHMiLCJzbSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImRlc2NyaXB0aW9uIiwieHMiLCJ0ZXh0QWxpZ24iLCJpbm5lciIsImp1c3RpZnlDb250ZW50IiwiZ3JvdXBzIiwiZmxleFdyYXAiLCJ3cmFwcGVyIiwid2lkdGgiLCJsaW5rIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRTaXplcyIsInRleHREZWNvcmF0aW9uIiwidGl0bGUiLCJsZyIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwibWFyZ2luQm90dG9tIiwid2hpdGUiLCJibGFjayIsImFmdGVyRm9vdGVyIiwic29jaWFsIiwiRm9vdGVyTGlua3MiLCJkYXRhIiwiY2xhc3NlcyIsIm1hcCIsImdyb3VwIiwibGlua3MiLCJpbmRleCIsImNsYXNzTmFtZSIsImNvbXBvbmVudCIsImhyZWYiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxhYmVsIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0Iiwic2l6ZSIsInBvc2l0aW9uIiwibm9XcmFwIiwic3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/FooterLinks.jsx\n"));

/***/ })

});