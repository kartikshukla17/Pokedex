"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/PokemonCard.tsx":
/*!************************************!*\
  !*** ./components/PokemonCard.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst PokemonCard = (param)=>{\n    let { id, name, types, sprite } = param;\n    _s();\n    const [flipped, setFlipped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pokemonDetails, setPokemonDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const defaultSprite = \"https://via.placeholder.com/150\";\n    const fetchPokemonDetails = async ()=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const response = await fetch(\"https://pokeapi.co/api/v2/pokemon/\".concat(name.toLowerCase()));\n            if (!response.ok) throw new Error(\"Failed to fetch data for \".concat(name));\n            const data = await response.json();\n            setPokemonDetails(data);\n        } catch (err) {\n            console.error(\"Failed to fetch Pokémon details:\", err);\n            setError(\"Could not fetch Pokémon details. Please try again.\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PokemonCard.useEffect\": ()=>{\n            if (flipped && !pokemonDetails) {\n                fetchPokemonDetails();\n            }\n        }\n    }[\"PokemonCard.useEffect\"], [\n        flipped,\n        pokemonDetails\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-64 h-80 perspective cursor-pointer\",\n        onClick: ()=>setFlipped((prev)=>!prev),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"absolute w-full h-full transition-transform duration-500 transform-style-3d \".concat(flipped ? \"rotate-y-180\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-full h-full bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center backface-hidden\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: sprite || defaultSprite,\n                            alt: name,\n                            className: \"w-24 h-24 mb-4 mx-auto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-bold\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-500\",\n                            children: [\n                                \"#\",\n                                id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: types.map((type)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"bg-gray-200 text-sm px-2 py-1 rounded-full mr-2\",\n                                    children: type\n                                }, type, false, {\n                                    fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-full h-full bg-blue-100 text-center text-black p-4 flex flex-col items-center justify-center backface-hidden transform rotate-y-180\",\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, undefined) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, undefined) : pokemonDetails ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold\",\n                                children: pokemonDetails.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Height: \",\n                                    pokemonDetails.height / 10,\n                                    \" m\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Weight: \",\n                                    pokemonDetails.weight / 10,\n                                    \" kg\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Base Experience: \",\n                                    pokemonDetails.base_experience\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Abilities\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    pokemonDetails.abilities.map((ability)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: ability.ability.name\n                                        }, ability.ability.name, false, {\n                                            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 19\n                                        }, undefined))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No details available.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PokemonCard, \"k436Tlpomqy+9ZyUL7VzvjjbDIE=\");\n_c = PokemonCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonCard);\nvar _c;\n$RefreshReg$(_c, \"PokemonCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUG9rZW1vbkNhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQXVCbkQsTUFBTUcsY0FBMEM7UUFBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUU7O0lBQzFFLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNTLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxDQUF3QjtJQUM1RSxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFnQjtJQUVsRCxNQUFNZSxnQkFBZ0I7SUFFdEIsTUFBTUMsc0JBQXNCO1FBQzFCSixXQUFXO1FBQ1hFLFNBQVM7UUFDVCxJQUFJO1lBQ0YsTUFBTUcsV0FBVyxNQUFNQyxNQUNyQixxQ0FBd0QsT0FBbkJkLEtBQUtlLFdBQVc7WUFFdkQsSUFBSSxDQUFDRixTQUFTRyxFQUFFLEVBQUUsTUFBTSxJQUFJQyxNQUFNLDRCQUFpQyxPQUFMakI7WUFDOUQsTUFBTWtCLE9BQU8sTUFBTUwsU0FBU00sSUFBSTtZQUNoQ2Isa0JBQWtCWTtRQUNwQixFQUFFLE9BQU9FLEtBQUs7WUFDWkMsUUFBUVosS0FBSyxDQUFDLG9DQUFvQ1c7WUFDbERWLFNBQVM7UUFDWCxTQUFVO1lBQ1JGLFdBQVc7UUFDYjtJQUNGO0lBRUFYLGdEQUFTQTtpQ0FBQztZQUNSLElBQUlNLFdBQVcsQ0FBQ0UsZ0JBQWdCO2dCQUM5Qk87WUFDRjtRQUNGO2dDQUFHO1FBQUNUO1FBQVNFO0tBQWU7SUFFNUIscUJBQ0UsOERBQUNpQjtRQUNDQyxXQUFVO1FBQ1ZDLFNBQVMsSUFBTXBCLFdBQVcsQ0FBQ3FCLE9BQVMsQ0FBQ0E7a0JBRXJDLDRFQUFDSDtZQUNDQyxXQUFXLCtFQUVWLE9BRENwQixVQUFVLGlCQUFpQjs7OEJBSTdCLDhEQUFDbUI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFDQ0MsS0FBS3pCLFVBQVVTOzRCQUNmaUIsS0FBSzVCOzRCQUNMdUIsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDTTs0QkFBR04sV0FBVTtzQ0FBcUJ2Qjs7Ozs7O3NDQUNuQyw4REFBQzhCOzRCQUFFUCxXQUFVOztnQ0FBd0I7Z0NBQUV4Qjs7Ozs7OztzQ0FDdkMsOERBQUN1QjtzQ0FDRXJCLE1BQU04QixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNDO29DQUVDVixXQUFVOzhDQUVUUzttQ0FISUE7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBVWIsOERBQUNWO29CQUFJQyxXQUFVOzhCQUNaaEIsd0JBQ0MsOERBQUN1QjtrQ0FBRTs7Ozs7b0NBQ0RyQixzQkFDRiw4REFBQ3FCO3dCQUFFUCxXQUFVO2tDQUFnQmQ7Ozs7O29DQUMzQkosK0JBQ0Y7OzBDQUNFLDhEQUFDd0I7Z0NBQUdOLFdBQVU7MENBQXFCbEIsZUFBZUwsSUFBSTs7Ozs7OzBDQUN0RCw4REFBQzhCOztvQ0FBRTtvQ0FBU3pCLGVBQWU2QixNQUFNLEdBQUc7b0NBQUc7Ozs7Ozs7MENBQ3ZDLDhEQUFDSjs7b0NBQUU7b0NBQVN6QixlQUFlOEIsTUFBTSxHQUFHO29DQUFHOzs7Ozs7OzBDQUN2Qyw4REFBQ0w7O29DQUFFO29DQUFrQnpCLGVBQWUrQixlQUFlOzs7Ozs7OzBDQUNuRCw4REFBQ2Q7O2tEQUNDLDhEQUFDZTt3Q0FBR2QsV0FBVTtrREFBZ0I7Ozs7OztvQ0FDN0JsQixlQUFlaUMsU0FBUyxDQUFDUCxHQUFHLENBQUMsQ0FBQ1Esd0JBQzdCLDhEQUFDVDtzREFBOEJTLFFBQVFBLE9BQU8sQ0FBQ3ZDLElBQUk7MkNBQTNDdUMsUUFBUUEsT0FBTyxDQUFDdkMsSUFBSTs7Ozs7Ozs7Ozs7O3FEQUtsQyw4REFBQzhCO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWY7R0F6Rk1oQztLQUFBQTtBQTJGTixpRUFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxrYXJ0aVxcT25lRHJpdmVcXERlc2t0b3BcXFBva2Vtb25XZWJBcHBcXG15LXBva2Vtb24tYXBwXFxjb21wb25lbnRzXFxQb2tlbW9uQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQb2tlbW9uQ2FyZFByb3BzIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0eXBlczogc3RyaW5nW107XHJcbiAgc3ByaXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBYmlsaXR5IHtcclxuICBhYmlsaXR5OiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBva2Vtb25EZXRhaWxzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgd2VpZ2h0OiBudW1iZXI7XHJcbiAgYmFzZV9leHBlcmllbmNlOiBudW1iZXI7XHJcbiAgYWJpbGl0aWVzOiBBYmlsaXR5W107XHJcbn1cclxuXHJcbmNvbnN0IFBva2Vtb25DYXJkOiBSZWFjdC5GQzxQb2tlbW9uQ2FyZFByb3BzPiA9ICh7IGlkLCBuYW1lLCB0eXBlcywgc3ByaXRlIH0pID0+IHtcclxuICBjb25zdCBbZmxpcHBlZCwgc2V0RmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Bva2Vtb25EZXRhaWxzLCBzZXRQb2tlbW9uRGV0YWlsc10gPSB1c2VTdGF0ZTxQb2tlbW9uRGV0YWlscyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBkZWZhdWx0U3ByaXRlID0gXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCI7XHJcblxyXG4gIGNvbnN0IGZldGNoUG9rZW1vbkRldGFpbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtuYW1lLnRvTG93ZXJDYXNlKCl9YFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBkYXRhIGZvciAke25hbWV9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldFBva2Vtb25EZXRhaWxzKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggUG9rw6ltb24gZGV0YWlsczpcIiwgZXJyKTtcclxuICAgICAgc2V0RXJyb3IoXCJDb3VsZCBub3QgZmV0Y2ggUG9rw6ltb24gZGV0YWlscy4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGZsaXBwZWQgJiYgIXBva2Vtb25EZXRhaWxzKSB7XHJcbiAgICAgIGZldGNoUG9rZW1vbkRldGFpbHMoKTtcclxuICAgIH1cclxuICB9LCBbZmxpcHBlZCwgcG9rZW1vbkRldGFpbHNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy02NCBoLTgwIHBlcnNwZWN0aXZlIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgb25DbGljaz17KCkgPT4gc2V0RmxpcHBlZCgocHJldikgPT4gIXByZXYpfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgdHJhbnNmb3JtLXN0eWxlLTNkICR7XHJcbiAgICAgICAgICBmbGlwcGVkID8gXCJyb3RhdGUteS0xODBcIiA6IFwiXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBGcm9udCBzaWRlICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1sZyBwLTQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmFja2ZhY2UtaGlkZGVuXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17c3ByaXRlIHx8IGRlZmF1bHRTcHJpdGV9XHJcbiAgICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yNCBoLTI0IG1iLTQgbXgtYXV0b1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+e25hbWV9PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPiN7aWR9PC9wPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3R5cGVzLm1hcCgodHlwZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBrZXk9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCB0ZXh0LXNtIHB4LTIgcHktMSByb3VuZGVkLWZ1bGwgbXItMlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogQmFjayBzaWRlICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBiZy1ibHVlLTEwMCB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrIHAtNCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiYWNrZmFjZS1oaWRkZW4gdHJhbnNmb3JtIHJvdGF0ZS15LTE4MFwiPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICApIDogZXJyb3IgPyAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPntlcnJvcn08L3A+XHJcbiAgICAgICAgICApIDogcG9rZW1vbkRldGFpbHMgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e3Bva2Vtb25EZXRhaWxzLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICA8cD5IZWlnaHQ6IHtwb2tlbW9uRGV0YWlscy5oZWlnaHQgLyAxMH0gbTwvcD5cclxuICAgICAgICAgICAgICA8cD5XZWlnaHQ6IHtwb2tlbW9uRGV0YWlscy53ZWlnaHQgLyAxMH0ga2c8L3A+XHJcbiAgICAgICAgICAgICAgPHA+QmFzZSBFeHBlcmllbmNlOiB7cG9rZW1vbkRldGFpbHMuYmFzZV9leHBlcmllbmNlfTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5BYmlsaXRpZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAge3Bva2Vtb25EZXRhaWxzLmFiaWxpdGllcy5tYXAoKGFiaWxpdHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHAga2V5PXthYmlsaXR5LmFiaWxpdHkubmFtZX0+e2FiaWxpdHkuYWJpbGl0eS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwPk5vIGRldGFpbHMgYXZhaWxhYmxlLjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25DYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBva2Vtb25DYXJkIiwiaWQiLCJuYW1lIiwidHlwZXMiLCJzcHJpdGUiLCJmbGlwcGVkIiwic2V0RmxpcHBlZCIsInBva2Vtb25EZXRhaWxzIiwic2V0UG9rZW1vbkRldGFpbHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJkZWZhdWx0U3ByaXRlIiwiZmV0Y2hQb2tlbW9uRGV0YWlscyIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0b0xvd2VyQ2FzZSIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHJldiIsImltZyIsInNyYyIsImFsdCIsImgyIiwicCIsIm1hcCIsInR5cGUiLCJzcGFuIiwiaGVpZ2h0Iiwid2VpZ2h0IiwiYmFzZV9leHBlcmllbmNlIiwiaDMiLCJhYmlsaXRpZXMiLCJhYmlsaXR5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/PokemonCard.tsx\n"));

/***/ })

});