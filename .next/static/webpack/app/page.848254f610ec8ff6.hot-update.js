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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst PokemonCard = (param)=>{\n    let { id, name, types, sprite } = param;\n    _s();\n    const defaultSprite = 'https://images.app.goo.gl/wfy1T5SxTX9LzQ2p7'; // Placeholder image\n    const [isFlipped, setIsFlipped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pokemonDetails, setPokemonDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Fetch detailed data from the API when the card is flipped\n    const fetchPokemonDetails = async ()=>{\n        try {\n            const response = await fetch(\"https://pokeapi.co/api/v2/pokemon/\".concat(name.toLowerCase()));\n            const data = await response.json();\n            setPokemonDetails(data);\n            console.log(\"\");\n        } catch (err) {\n            console.error('Failed to fetch Pokémon details:', err);\n        }\n    };\n    // Use effect to fetch Pokémon details when card is clicked and it is flipped\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PokemonCard.useEffect\": ()=>{\n            if (isFlipped && !pokemonDetails) {\n                fetchPokemonDetails();\n            }\n        }\n    }[\"PokemonCard.useEffect\"], [\n        isFlipped,\n        pokemonDetails\n    ]);\n    // Toggle card flip on click\n    const handleCardClick = ()=>{\n        setIsFlipped(!isFlipped);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-48 h-64 bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer\",\n        onClick: handleCardClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative w-full h-full transition-transform transform \".concat(isFlipped ? 'rotateY-180' : ''),\n            style: {\n                transformStyle: 'preserve-3d',\n                perspective: '1000px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-full h-full backface-hidden flex flex-col items-center justify-center\",\n                    style: {\n                        transform: 'rotateY(0deg)'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: sprite || defaultSprite,\n                            alt: name,\n                            className: \"w-24 h-24 mb-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-bold\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-500\",\n                            children: [\n                                \"#\",\n                                id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: types.map((type)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"bg-gray-200 text-sm px-2 py-1 rounded-full mr-2\",\n                                    children: type\n                                }, type, false, {\n                                    fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-full h-full backface-hidden bg-gray-100 p-4\",\n                    style: {\n                        transform: 'rotateY(180deg)'\n                    },\n                    children: pokemonDetails ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-semibold mb-2\",\n                                children: \"Stats\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Height: \",\n                                    pokemonDetails.height / 10,\n                                    \" m\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Weight: \",\n                                    pokemonDetails.weight / 10,\n                                    \" kg\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Base Experience: \",\n                                    pokemonDetails.base_experience\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"mt-2\",\n                                children: \"Abilities:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: pokemonDetails.abilities.map((ability)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: ability.ability.name\n                                    }, ability.ability.name, false, {\n                                        fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Desktop\\\\PokemonWebApp\\\\my-pokemon-app\\\\components\\\\PokemonCard.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PokemonCard, \"RGWzislGGOLgkY5/Bt8GepdcSvw=\");\n_c = PokemonCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonCard);\nvar _c;\n$RefreshReg$(_c, \"PokemonCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUG9rZW1vbkNhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQXdCbkQsTUFBTUcsY0FBMEM7UUFBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUU7O0lBQzFFLE1BQU1DLGdCQUFnQiwrQ0FBK0Msb0JBQW9CO0lBQ3pGLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNVLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUF3QjtJQUU1RSw0REFBNEQ7SUFDNUQsTUFBTVksc0JBQXNCO1FBQzFCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0scUNBQXdELE9BQW5CVixLQUFLVyxXQUFXO1lBQ2xGLE1BQU1DLE9BQU8sTUFBTUgsU0FBU0ksSUFBSTtZQUNoQ04sa0JBQWtCSztZQUNsQkUsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxLQUFLO1lBQ1pGLFFBQVFHLEtBQUssQ0FBQyxvQ0FBb0NEO1FBQ3BEO0lBQ0Y7SUFFQSw2RUFBNkU7SUFDN0VuQixnREFBU0E7aUNBQUM7WUFDUixJQUFJTyxhQUFhLENBQUNFLGdCQUFnQjtnQkFDaENFO1lBQ0Y7UUFDRjtnQ0FBRztRQUFDSjtRQUFXRTtLQUFlO0lBRTlCLDRCQUE0QjtJQUM1QixNQUFNWSxrQkFBa0I7UUFDdEJiLGFBQWEsQ0FBQ0Q7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ2U7UUFDQ0MsV0FBVTtRQUNWQyxTQUFTSDtrQkFHVCw0RUFBQ0M7WUFDQ0MsV0FBVyx5REFFVixPQURDaEIsWUFBWSxnQkFBZ0I7WUFFOUJrQixPQUFPO2dCQUFFQyxnQkFBZ0I7Z0JBQWVDLGFBQWE7WUFBUzs7OEJBRzlELDhEQUFDTDtvQkFDQ0MsV0FBVTtvQkFDVkUsT0FBTzt3QkFBRUcsV0FBVztvQkFBZ0I7O3NDQUVwQyw4REFBQ0M7NEJBQ0NDLEtBQUt6QixVQUFVQzs0QkFDZnlCLEtBQUs1Qjs0QkFDTG9CLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ1M7NEJBQUdULFdBQVU7c0NBQXFCcEI7Ozs7OztzQ0FDbkMsOERBQUM4Qjs0QkFBRVYsV0FBVTs7Z0NBQXdCO2dDQUFFckI7Ozs7Ozs7c0NBQ3ZDLDhEQUFDb0I7c0NBQ0VsQixNQUFNOEIsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDQztvQ0FFQ2IsV0FBVTs4Q0FFVFk7bUNBSElBOzs7Ozs7Ozs7Ozs7Ozs7OzhCQVViLDhEQUFDYjtvQkFDQ0MsV0FBVTtvQkFDVkUsT0FBTzt3QkFBRUcsV0FBVztvQkFBa0I7OEJBRXJDbkIsK0JBQ0M7OzBDQUNFLDhEQUFDNEI7Z0NBQUdkLFdBQVU7MENBQTZCOzs7Ozs7MENBQzNDLDhEQUFDVTs7b0NBQUU7b0NBQVN4QixlQUFlNkIsTUFBTSxHQUFHO29DQUFHOzs7Ozs7OzRCQUFNOzBDQUM3Qyw4REFBQ0w7O29DQUFFO29DQUFTeEIsZUFBZThCLE1BQU0sR0FBRztvQ0FBRzs7Ozs7Ozs0QkFBTzswQ0FDOUMsOERBQUNOOztvQ0FBRTtvQ0FBa0J4QixlQUFlK0IsZUFBZTs7Ozs7OzswQ0FDbkQsOERBQUNDO2dDQUFHbEIsV0FBVTswQ0FBTzs7Ozs7OzBDQUNyQiw4REFBQ21COzBDQUNFakMsZUFBZWtDLFNBQVMsQ0FBQ1QsR0FBRyxDQUFDLENBQUNVLHdCQUM3Qiw4REFBQ0M7a0RBQStCRCxRQUFRQSxPQUFPLENBQUN6QyxJQUFJO3VDQUEzQ3lDLFFBQVFBLE9BQU8sQ0FBQ3pDLElBQUk7Ozs7Ozs7Ozs7O3FEQUtuQyw4REFBQzhCO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWY7R0ExRk1oQztLQUFBQTtBQTRGTixpRUFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxrYXJ0aVxcT25lRHJpdmVcXERlc2t0b3BcXFBva2Vtb25XZWJBcHBcXG15LXBva2Vtb24tYXBwXFxjb21wb25lbnRzXFxQb2tlbW9uQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUG9rZW1vbkNhcmRQcm9wcyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdHlwZXM6IHN0cmluZ1tdO1xyXG4gIHNwcml0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUG9rZW1vbkFiaWxpdHkge1xyXG4gIGFiaWxpdHk6IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUG9rZW1vbkRldGFpbHMge1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHdlaWdodDogbnVtYmVyO1xyXG4gIGJhc2VfZXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gIGFiaWxpdGllczogUG9rZW1vbkFiaWxpdHlbXTtcclxuICB0eXBlczogeyB0eXBlOiB7IG5hbWU6IHN0cmluZyB9IH1bXTtcclxuICBzcHJpdGVzOiB7IGZyb250X2RlZmF1bHQ6IHN0cmluZyB9O1xyXG59XHJcblxyXG5jb25zdCBQb2tlbW9uQ2FyZDogUmVhY3QuRkM8UG9rZW1vbkNhcmRQcm9wcz4gPSAoeyBpZCwgbmFtZSwgdHlwZXMsIHNwcml0ZSB9KSA9PiB7XHJcbiAgY29uc3QgZGVmYXVsdFNwcml0ZSA9ICdodHRwczovL2ltYWdlcy5hcHAuZ29vLmdsL3dmeTFUNVN4VFg5THpRMnA3JzsgLy8gUGxhY2Vob2xkZXIgaW1hZ2VcclxuICBjb25zdCBbaXNGbGlwcGVkLCBzZXRJc0ZsaXBwZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwb2tlbW9uRGV0YWlscywgc2V0UG9rZW1vbkRldGFpbHNdID0gdXNlU3RhdGU8UG9rZW1vbkRldGFpbHMgfCBudWxsPihudWxsKTtcclxuXHJcbiAgLy8gRmV0Y2ggZGV0YWlsZWQgZGF0YSBmcm9tIHRoZSBBUEkgd2hlbiB0aGUgY2FyZCBpcyBmbGlwcGVkXHJcbiAgY29uc3QgZmV0Y2hQb2tlbW9uRGV0YWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke25hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0UG9rZW1vbkRldGFpbHMoZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiXCIpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIFBva8OpbW9uIGRldGFpbHM6JywgZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBVc2UgZWZmZWN0IHRvIGZldGNoIFBva8OpbW9uIGRldGFpbHMgd2hlbiBjYXJkIGlzIGNsaWNrZWQgYW5kIGl0IGlzIGZsaXBwZWRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzRmxpcHBlZCAmJiAhcG9rZW1vbkRldGFpbHMpIHtcclxuICAgICAgZmV0Y2hQb2tlbW9uRGV0YWlscygpO1xyXG4gICAgfVxyXG4gIH0sIFtpc0ZsaXBwZWQsIHBva2Vtb25EZXRhaWxzXSk7XHJcblxyXG4gIC8vIFRvZ2dsZSBjYXJkIGZsaXAgb24gY2xpY2tcclxuICBjb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0ZsaXBwZWQoIWlzRmxpcHBlZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwidy00OCBoLTY0IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnIHAtNCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1zaGFkb3cgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDYXJkQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIHsvKiBDYXJkIGNvbnRhaW5lciB3aXRoIGZsaXAgZWZmZWN0ICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgdy1mdWxsIGgtZnVsbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSB0cmFuc2Zvcm0gJHtcclxuICAgICAgICAgIGlzRmxpcHBlZCA/ICdyb3RhdGVZLTE4MCcgOiAnJ1xyXG4gICAgICAgIH1gfVxyXG4gICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybVN0eWxlOiAncHJlc2VydmUtM2QnLCBwZXJzcGVjdGl2ZTogJzEwMDBweCcgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBGcm9udCBvZiB0aGUgY2FyZCAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIGJhY2tmYWNlLWhpZGRlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGVZKDBkZWcpJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtzcHJpdGUgfHwgZGVmYXVsdFNwcml0ZX1cclxuICAgICAgICAgICAgYWx0PXtuYW1lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgbWItNFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+e25hbWV9PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPiN7aWR9PC9wPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3R5cGVzLm1hcCgodHlwZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBrZXk9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCB0ZXh0LXNtIHB4LTIgcHktMSByb3VuZGVkLWZ1bGwgbXItMlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogQmFjayBvZiB0aGUgY2FyZCAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIGJhY2tmYWNlLWhpZGRlbiBiZy1ncmF5LTEwMCBwLTRcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiAncm90YXRlWSgxODBkZWcpJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwb2tlbW9uRGV0YWlscyA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTJcIj5TdGF0czwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+SGVpZ2h0OiB7cG9rZW1vbkRldGFpbHMuaGVpZ2h0IC8gMTB9IG08L3A+IHsvKiBDb252ZXJ0ZWQgaGVpZ2h0IGZyb20gZGVjaW1ldGVycyB0byBtZXRlcnMgKi99XHJcbiAgICAgICAgICAgICAgPHA+V2VpZ2h0OiB7cG9rZW1vbkRldGFpbHMud2VpZ2h0IC8gMTB9IGtnPC9wPiB7LyogQ29udmVydGVkIHdlaWdodCBmcm9tIGhlY3RvZ3JhbXMgdG8ga2cgKi99XHJcbiAgICAgICAgICAgICAgPHA+QmFzZSBFeHBlcmllbmNlOiB7cG9rZW1vbkRldGFpbHMuYmFzZV9leHBlcmllbmNlfTwvcD5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXQtMlwiPkFiaWxpdGllczo8L2g0PlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtwb2tlbW9uRGV0YWlscy5hYmlsaXRpZXMubWFwKChhYmlsaXR5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2FiaWxpdHkuYWJpbGl0eS5uYW1lfT57YWJpbGl0eS5hYmlsaXR5Lm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25DYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBva2Vtb25DYXJkIiwiaWQiLCJuYW1lIiwidHlwZXMiLCJzcHJpdGUiLCJkZWZhdWx0U3ByaXRlIiwiaXNGbGlwcGVkIiwic2V0SXNGbGlwcGVkIiwicG9rZW1vbkRldGFpbHMiLCJzZXRQb2tlbW9uRGV0YWlscyIsImZldGNoUG9rZW1vbkRldGFpbHMiLCJyZXNwb25zZSIsImZldGNoIiwidG9Mb3dlckNhc2UiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImhhbmRsZUNhcmRDbGljayIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzdHlsZSIsInRyYW5zZm9ybVN0eWxlIiwicGVyc3BlY3RpdmUiLCJ0cmFuc2Zvcm0iLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsInAiLCJtYXAiLCJ0eXBlIiwic3BhbiIsImgzIiwiaGVpZ2h0Iiwid2VpZ2h0IiwiYmFzZV9leHBlcmllbmNlIiwiaDQiLCJ1bCIsImFiaWxpdGllcyIsImFiaWxpdHkiLCJsaSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/PokemonCard.tsx\n"));

/***/ })

});