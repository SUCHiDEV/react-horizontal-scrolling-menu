webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alex_react_horizontal_scrolling_menu_example_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _helpers_safari_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/safari-polyfill */ \"./helpers/safari-polyfill.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/useHideBodyScroll */ \"./helpers/useHideBodyScroll/index.ts\");\n/* harmony import */ var _helpers_useDrag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/useDrag */ \"./helpers/useDrag.ts\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/home/alex/react-horizontal-scrolling-menu/example-nextjs/pages/index.tsx\",\n    _process,\n    _process$env,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\n\n\n // NOTE: prevent scrolling on main page\n\n // NOTE drag with mouse\n\n // NOTE hide scrollbar in _app.js\n\n\nconst isTest = (_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.NEXT_PUBLIC_IS_TEST;\nconst elemPrefix = 'test';\n\nconst getId = index => \"\".concat(elemPrefix).concat(index);\n\nconst getItems = () => Array(20).fill(0).map((_, ind) => ({\n  id: getId(ind)\n}));\n\nconst onWheel = (apiObj, ev) => {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else if (ev.deltaY > 0) {\n    apiObj.scrollPrev();\n  }\n};\n\nfunction App() {\n  _s();\n\n  const [items] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(getItems);\n  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0); // React.useEffect(() => {\n  //   if (items.length < 25) {\n  //     setTimeout(() => {\n  //       const newItems = items.concat(\n  //         Array(5)\n  //           .fill(0)\n  //           .map((_, ind) => ({ id: getId(items.length + ind) }))\n  //       );\n  //       console.log('push new items');\n  //       setItems(newItems);\n  //     }, 3000);\n  //   }\n  // }, [items]);\n\n  const isItemSelected = id => !!selected.find(el => el === id);\n\n  const {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging\n  } = Object(_helpers_useDrag__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n  const handleDrag = ({\n    scrollContainer\n  }) => ev => dragMove(ev, newPos => {\n    if (scrollContainer.current) {\n      const currentScroll = scrollContainer.current.scrollLeft;\n      scrollContainer.current.scrollLeft = currentScroll + newPos;\n    }\n  });\n\n  const handleItemClick = itemId => ({\n    getItemById,\n    scrollToItem\n  }) => {\n    console.log('item click', itemId);\n\n    if (dragging) {\n      return false;\n    }\n\n    const itemSelected = isItemSelected(itemId);\n    setSelected(currentSelected => itemSelected ? currentSelected.filter(el => el !== itemId) : currentSelected.concat(itemId));\n\n    if (!itemSelected) {\n      var _getItemById, _getItemById$entry;\n\n      // NOTE: center item on select\n      scrollToItem((_getItemById = getItemById(itemId)) === null || _getItemById === void 0 ? void 0 : (_getItemById$entry = _getItemById.entry) === null || _getItemById$entry === void 0 ? void 0 : _getItemById$entry.target, 'smooth', 'center', 'nearest');\n    }\n  };\n\n  const restorePosition = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback((_ref) => {\n    let {\n      scrollContainer\n    } = _ref,\n        rest = Object(_home_alex_react_horizontal_scrolling_menu_example_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"scrollContainer\"]);\n\n    if (scrollContainer.current) {\n      scrollContainer.current.scrollLeft = position;\n    }\n  }, [position]); // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  const savePosition = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default()(({\n    scrollContainer\n  }) => !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft), 500), []);\n  const {\n    hideScroll,\n    showScroll\n  } = Object(_helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"example\",\n      style: {\n        height: '200vh',\n        paddingTop: '200px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseEnter: hideScroll,\n        onMouseLeave: showScroll,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onMouseLeave: dragStop,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7__[\"ScrollMenu\"], {\n            LeftArrow: LeftArrow,\n            RightArrow: RightArrow,\n            onInit: restorePosition,\n            onScroll: savePosition,\n            onWheel: onWheel,\n            onMouseDown: () => ev => dragStart(ev),\n            onMouseUp: () => dragStop,\n            onMouseMove: handleDrag,\n            children: items.map(({\n              id\n            }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n              title: id,\n              itemId: id // NOTE: itemId is required for track items\n              ,\n              onClick: handleItemClick(id),\n              selected: isItemSelected(id)\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 147,\n              columnNumber: 17\n            }, this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 132,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"c+pIa2VPxpNyb27OEdP/PlhntNc=\", false, function () {\n  return [_helpers_useDrag__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = App;\n\nfunction LeftArrow() {\n  _s2();\n\n  const {\n    initComplete,\n    isFirstItemVisible,\n    scrollPrev\n  } = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7__[\"VisibilityContext\"]); // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: !initComplete || initComplete && isFirstItemVisible,\n    onClick: () => scrollPrev(isTest ? 'auto' : 'smooth'),\n    children: \"Left\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 170,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(LeftArrow, \"2u9dvBRCES5pVRMXIGOF3Ug5BzY=\");\n\n_c2 = LeftArrow;\n\nfunction RightArrow() {\n  _s3();\n\n  const {\n    initComplete,\n    isLastItemVisible,\n    scrollNext\n  } = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7__[\"VisibilityContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: initComplete && isLastItemVisible,\n    onClick: () => scrollNext(isTest ? 'auto' : 'smooth'),\n    children: \"Right\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 184,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(RightArrow, \"PATf83e6EP2QcNJjlk2fI328v74=\");\n\n_c3 = RightArrow;\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    disabled: disabled,\n    onClick: onClick,\n    style: {\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      right: '1%',\n      opacity: disabled ? '0' : '1',\n      userSelect: 'none'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 203,\n    columnNumber: 5\n  }, this);\n}\n\n_c4 = Arrow;\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId\n}) {\n  _s4();\n\n  const visibility = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7__[\"VisibilityContext\"]);\n  const visible = !visibility.initComplete || visibility.initComplete && visibility.isItemVisible(itemId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    onClick: () => onClick(visibility),\n    onKeyDown: ev => {\n      ev.code === 'Enter' && onClick(visibility);\n    },\n    role: \"button\",\n    style: {\n      border: '1px solid',\n      display: 'inline-block',\n      margin: '0 10px',\n      width: '160px',\n      userSelect: 'none'\n    },\n    tabIndex: 0,\n    className: \"card\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 257,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          backgroundColor: visible ? 'transparent' : 'gray'\n        },\n        children: [\"visible: \", JSON.stringify(visible)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 258,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"selected: \", JSON.stringify(!!selected)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 261,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 256,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        backgroundColor: selected ? 'green' : 'bisque',\n        height: '200px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 263,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 240,\n    columnNumber: 5\n  }, this);\n} // TODO: nextjs complains about useLayoutEffect\n\n\n_s4(Card, \"wzCNnUK2b4GmsbLaFyuDONa1PJI=\");\n\n_c5 = Card;\n\nconst Wrapper = () => {\n  _s5();\n\n  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(() => {\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 281,\n    columnNumber: 20\n  }, undefined) : null;\n};\n\n_s5(Wrapper, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c6 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"LeftArrow\");\n$RefreshReg$(_c3, \"RightArrow\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"Card\");\n$RefreshReg$(_c6, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaXNUZXN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lTX1RFU1QiLCJlbGVtUHJlZml4IiwiZ2V0SWQiLCJpbmRleCIsImdldEl0ZW1zIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZCIsImlkIiwib25XaGVlbCIsImFwaU9iaiIsImV2IiwiaXNUaG91Y2hwYWQiLCJNYXRoIiwiYWJzIiwiZGVsdGFYIiwiZGVsdGFZIiwic3RvcFByb3BhZ2F0aW9uIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJBcHAiLCJpdGVtcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImlzSXRlbVNlbGVjdGVkIiwiZmluZCIsImVsIiwiZHJhZ1N0YXJ0IiwiZHJhZ1N0b3AiLCJkcmFnTW92ZSIsImRyYWdnaW5nIiwidXNlRHJhZyIsImhhbmRsZURyYWciLCJzY3JvbGxDb250YWluZXIiLCJuZXdQb3MiLCJjdXJyZW50IiwiY3VycmVudFNjcm9sbCIsInNjcm9sbExlZnQiLCJoYW5kbGVJdGVtQ2xpY2siLCJpdGVtSWQiLCJnZXRJdGVtQnlJZCIsInNjcm9sbFRvSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtU2VsZWN0ZWQiLCJjdXJyZW50U2VsZWN0ZWQiLCJmaWx0ZXIiLCJjb25jYXQiLCJlbnRyeSIsInRhcmdldCIsInJlc3RvcmVQb3NpdGlvbiIsInVzZUNhbGxiYWNrIiwicmVzdCIsInNhdmVQb3NpdGlvbiIsInRocm90dGxlIiwiaGlkZVNjcm9sbCIsInNob3dTY3JvbGwiLCJ1c2VIaWRlQm9keVNjcm9sbCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJMZWZ0QXJyb3ciLCJSaWdodEFycm93IiwiaW5pdENvbXBsZXRlIiwiaXNGaXJzdEl0ZW1WaXNpYmxlIiwidXNlQ29udGV4dCIsIlZpc2liaWxpdHlDb250ZXh0IiwiaXNMYXN0SXRlbVZpc2libGUiLCJBcnJvdyIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiY3Vyc29yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInJpZ2h0Iiwib3BhY2l0eSIsInVzZXJTZWxlY3QiLCJDYXJkIiwidGl0bGUiLCJ2aXNpYmlsaXR5IiwidmlzaWJsZSIsImlzSXRlbVZpc2libGUiLCJjb2RlIiwiYm9yZGVyIiwibWFyZ2luIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiV3JhcHBlciIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUlBOztDQUdBOztDQUdBOztBQUVBO0FBRUEsTUFBTUEsTUFBTSxlQUFHQyxPQUFILDZEQUFHLFNBQVNDLEdBQVosaURBQUcsYUFBY0MsbUJBQTdCO0FBSUEsTUFBTUMsVUFBVSxHQUFHLE1BQW5COztBQUNBLE1BQU1DLEtBQUssR0FBSUMsS0FBRCxjQUFzQkYsVUFBdEIsU0FBbUNFLEtBQW5DLENBQWQ7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLE1BQ2ZDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLENBRFIsRUFFR0MsR0FGSCxDQUVPLENBQUNDLENBQUQsRUFBSUMsR0FBSixNQUFhO0FBQUVDLElBQUUsRUFBRVIsS0FBSyxDQUFDTyxHQUFEO0FBQVgsQ0FBYixDQUZQLENBREY7O0FBS0EsTUFBTUUsT0FBTyxHQUFHLENBQ2RDLE1BRGMsRUFFZEMsRUFGYyxLQUdMO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsRUFBRSxDQUFDSSxNQUFaLE1BQXdCLENBQXhCLElBQTZCRixJQUFJLENBQUNDLEdBQUwsQ0FBU0gsRUFBRSxDQUFDSyxNQUFa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QWdCRTtBQUFBLDhCQUNFO0FBQUEsa0JBQU1FO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxhQUFLLEVBQUU7QUFBRVEseUJBQWUsRUFBRU4sT0FBTyxHQUFHLGFBQUgsR0FBbUI7QUFBN0MsU0FBWjtBQUFBLGdDQUNZTyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsT0FBZixDQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0U7QUFBQSxpQ0FBZ0JPLElBQUksQ0FBQ0MsU0FBTCxDQUFlLENBQUMsQ0FBQ3JFLFFBQWpCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixlQXVCRTtBQUNFLFdBQUssRUFBRTtBQUNMbUUsdUJBQWUsRUFBRW5FLFFBQVEsR0FBRyxPQUFILEdBQWEsUUFEakM7QUFFTHNDLGNBQU0sRUFBRTtBQUZIO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdDRCxDLENBRUQ7OztJQXBEU29CLEk7O01BQUFBLEk7O0FBcURULE1BQU1ZLE9BQU8sR0FBRyxNQUFNO0FBQUE7O0FBQ3BCLFFBQU0sQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLElBQXdCMUUsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBOUI7QUFFQUQsOENBQUssQ0FBQzJFLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQkQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBRkQsRUFFRyxFQUZIO0FBSUEsU0FBT0QsT0FBTyxnQkFBRyxxRUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUFhLElBQTNCO0FBQ0QsQ0FSRDs7SUFBTUQsTzs7TUFBQUEsTztBQVVTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vaGVscGVycy9zYWZhcmktcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5cbi8vIE5PVEU6IHByZXZlbnQgc2Nyb2xsaW5nIG9uIG1haW4gcGFnZVxuaW1wb3J0IHVzZUhpZGVCb2R5U2Nyb2xsIGZyb20gJy4uL2hlbHBlcnMvdXNlSGlkZUJvZHlTY3JvbGwnO1xuXG4vLyBOT1RFIGRyYWcgd2l0aCBtb3VzZVxuaW1wb3J0IHVzZURyYWcgZnJvbSAnLi4vaGVscGVycy91c2VEcmFnJztcblxuLy8gTk9URSBoaWRlIHNjcm9sbGJhciBpbiBfYXBwLmpzXG5cbmltcG9ydCB7IFNjcm9sbE1lbnUsIFZpc2liaWxpdHlDb250ZXh0IH0gZnJvbSAncmVhY3QtaG9yaXpvbnRhbC1zY3JvbGxpbmctbWVudSc7XG5cbmNvbnN0IGlzVGVzdCA9IHByb2Nlc3M/LmVudj8uTkVYVF9QVUJMSUNfSVNfVEVTVDtcblxudHlwZSBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSA9IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBWaXNpYmlsaXR5Q29udGV4dD47XG5cbmNvbnN0IGVsZW1QcmVmaXggPSAndGVzdCc7XG5jb25zdCBnZXRJZCA9IChpbmRleDogbnVtYmVyKSA9PiBgJHtlbGVtUHJlZml4fSR7aW5kZXh9YDtcblxuY29uc3QgZ2V0SXRlbXMgPSAoKSA9PlxuICBBcnJheSgyMClcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKF8sIGluZCkgPT4gKHsgaWQ6IGdldElkKGluZCkgfSkpO1xuXG5jb25zdCBvbldoZWVsID0gKFxuICBhcGlPYmo6IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlLFxuICBldjogUmVhY3QuV2hlZWxFdmVudFxuKTogdm9pZCA9PiB7XG4gIC8vIE5PVEU6IG5vIGdvb2Qgc3RhbmRhcnQgd2F5IHRvIGRpc3Rpbmd1aXNoIHRvdWNocGFkIHNjcm9sbGluZyBnZXN0dXJlc1xuICAvLyBidXQgY2FuIGFzc3VtZSB0aGF0IGdlc3R1cmUgd2lsbCBhZmZlY3QgWCBheGlzLCBtb3VzZSBzY3JvbGwgb25seSBZIGF4aXNcbiAgLy8gb2YgaWYgZGVsdGFZIHRvbyBzbWFsbCBwcm9iYWJseSBpcyBpdCB0b3VjaHBhZFxuICBjb25zdCBpc1Rob3VjaHBhZCA9IE1hdGguYWJzKGV2LmRlbHRhWCkgIT09IDAgfHwgTWF0aC5hYnMoZXYuZGVsdGFZKSA8IDE1O1xuXG4gIGlmIChpc1Rob3VjaHBhZCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChldi5kZWx0YVkgPCAwKSB7XG4gICAgYXBpT2JqLnNjcm9sbE5leHQoKTtcbiAgfSBlbHNlIGlmIChldi5kZWx0YVkgPiAwKSB7XG4gICAgYXBpT2JqLnNjcm9sbFByZXYoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbaXRlbXNdID0gUmVhY3QudXNlU3RhdGUoZ2V0SXRlbXMpO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoaXRlbXMubGVuZ3RoIDwgMjUpIHtcbiAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgICBjb25zdCBuZXdJdGVtcyA9IGl0ZW1zLmNvbmNhdChcbiAgLy8gICAgICAgICBBcnJheSg1KVxuICAvLyAgICAgICAgICAgLmZpbGwoMClcbiAgLy8gICAgICAgICAgIC5tYXAoKF8sIGluZCkgPT4gKHsgaWQ6IGdldElkKGl0ZW1zLmxlbmd0aCArIGluZCkgfSkpXG4gIC8vICAgICAgICk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdwdXNoIG5ldyBpdGVtcycpO1xuICAvLyAgICAgICBzZXRJdGVtcyhuZXdJdGVtcyk7XG4gIC8vICAgICB9LCAzMDAwKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtpdGVtc10pO1xuXG4gIGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+XG4gICAgISFzZWxlY3RlZC5maW5kKChlbCkgPT4gZWwgPT09IGlkKTtcblxuICBjb25zdCB7IGRyYWdTdGFydCwgZHJhZ1N0b3AsIGRyYWdNb3ZlLCBkcmFnZ2luZyB9ID0gdXNlRHJhZygpO1xuXG4gIGNvbnN0IGhhbmRsZURyYWcgPVxuICAgICh7IHNjcm9sbENvbnRhaW5lciB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT5cbiAgICAoZXY6IFJlYWN0Lk1vdXNlRXZlbnQpID0+XG4gICAgICBkcmFnTW92ZShldiwgKG5ld1BvcykgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgICBzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gY3VycmVudFNjcm9sbCArIG5ld1BvcztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID1cbiAgICAoaXRlbUlkOiBzdHJpbmcpID0+XG4gICAgKHsgZ2V0SXRlbUJ5SWQsIHNjcm9sbFRvSXRlbSB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2l0ZW0gY2xpY2snLCBpdGVtSWQpO1xuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW1TZWxlY3RlZCA9IGlzSXRlbVNlbGVjdGVkKGl0ZW1JZCk7XG5cbiAgICAgIHNldFNlbGVjdGVkKChjdXJyZW50U2VsZWN0ZWQ6IHN0cmluZ1tdKSA9PlxuICAgICAgICBpdGVtU2VsZWN0ZWRcbiAgICAgICAgICA/IGN1cnJlbnRTZWxlY3RlZC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gaXRlbUlkKVxuICAgICAgICAgIDogY3VycmVudFNlbGVjdGVkLmNvbmNhdChpdGVtSWQpXG4gICAgICApO1xuXG4gICAgICBpZiAoIWl0ZW1TZWxlY3RlZCkge1xuICAgICAgICAvLyBOT1RFOiBjZW50ZXIgaXRlbSBvbiBzZWxlY3RcbiAgICAgICAgc2Nyb2xsVG9JdGVtKFxuICAgICAgICAgIGdldEl0ZW1CeUlkKGl0ZW1JZCk/LmVudHJ5Py50YXJnZXQsXG4gICAgICAgICAgJ3Ntb290aCcsXG4gICAgICAgICAgJ2NlbnRlcicsXG4gICAgICAgICAgJ25lYXJlc3QnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICBjb25zdCByZXN0b3JlUG9zaXRpb24gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoeyBzY3JvbGxDb250YWluZXIsIC4uLnJlc3QgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+IHtcbiAgICAgIGlmIChzY3JvbGxDb250YWluZXIuY3VycmVudCkge1xuICAgICAgICBzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gcG9zaXRpb247XG4gICAgICB9XG4gICAgfSxcbiAgICBbcG9zaXRpb25dXG4gICk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBjb25zdCBzYXZlUG9zaXRpb24gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICB0aHJvdHRsZShcbiAgICAgICh7IHNjcm9sbENvbnRhaW5lciB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT5cbiAgICAgICAgISFzY3JvbGxDb250YWluZXIuY3VycmVudCAmJlxuICAgICAgICBzZXRQb3NpdGlvbihzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0KSxcbiAgICAgIDUwMFxuICAgICksXG4gICAgW11cbiAgKTtcblxuICBjb25zdCB7IGhpZGVTY3JvbGwsIHNob3dTY3JvbGwgfSA9IHVzZUhpZGVCb2R5U2Nyb2xsKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMjAwdmgnLCBwYWRkaW5nVG9wOiAnMjAwcHgnIH19PlxuICAgICAgICA8ZGl2IG9uTW91c2VFbnRlcj17aGlkZVNjcm9sbH0gb25Nb3VzZUxlYXZlPXtzaG93U2Nyb2xsfT5cbiAgICAgICAgICA8ZGl2IG9uTW91c2VMZWF2ZT17ZHJhZ1N0b3B9PlxuICAgICAgICAgICAgPFNjcm9sbE1lbnVcbiAgICAgICAgICAgICAgTGVmdEFycm93PXtMZWZ0QXJyb3d9XG4gICAgICAgICAgICAgIFJpZ2h0QXJyb3c9e1JpZ2h0QXJyb3d9XG4gICAgICAgICAgICAgIG9uSW5pdD17cmVzdG9yZVBvc2l0aW9ufVxuICAgICAgICAgICAgICBvblNjcm9sbD17c2F2ZVBvc2l0aW9ufVxuICAgICAgICAgICAgICBvbldoZWVsPXtvbldoZWVsfVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gKGV2KSA9PiBkcmFnU3RhcnQoZXYpfVxuICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IGRyYWdTdG9wfVxuICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlRHJhZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyBpZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpZH1cbiAgICAgICAgICAgICAgICAgIGl0ZW1JZD17aWR9IC8vIE5PVEU6IGl0ZW1JZCBpcyByZXF1aXJlZCBmb3IgdHJhY2sgaXRlbXNcbiAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJdGVtQ2xpY2soaWQpfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2lzSXRlbVNlbGVjdGVkKGlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2Nyb2xsTWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTGVmdEFycm93KCkge1xuICBjb25zdCB7IGluaXRDb21wbGV0ZSwgaXNGaXJzdEl0ZW1WaXNpYmxlLCBzY3JvbGxQcmV2IH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuXG4gIC8vIE5PVEUgaW5pdENvbXBsZXRlIGlzIGEgaGFjayBmb3IgIHByZXZlbnQgYmxpbmtpbmcgb24gaW5pdFxuICAvLyBDYW4gZ2V0IHZpc2liaWxpdHkgb2YgaXRlbSBvbmx5IGFmdGVyIGl0J3MgcmVuZGVyZWRcbiAgcmV0dXJuIChcbiAgICA8QXJyb3dcbiAgICAgIGRpc2FibGVkPXshaW5pdENvbXBsZXRlIHx8IChpbml0Q29tcGxldGUgJiYgaXNGaXJzdEl0ZW1WaXNpYmxlKX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFByZXYoaXNUZXN0ID8gJ2F1dG8nIDogJ3Ntb290aCcpfVxuICAgID5cbiAgICAgIExlZnRcbiAgICA8L0Fycm93PlxuICApO1xufVxuXG5mdW5jdGlvbiBSaWdodEFycm93KCkge1xuICBjb25zdCB7IGluaXRDb21wbGV0ZSwgaXNMYXN0SXRlbVZpc2libGUsIHNjcm9sbE5leHQgfSA9XG4gICAgUmVhY3QudXNlQ29udGV4dChWaXNpYmlsaXR5Q29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXJyb3dcbiAgICAgIGRpc2FibGVkPXtpbml0Q29tcGxldGUgJiYgaXNMYXN0SXRlbVZpc2libGV9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxOZXh0KGlzVGVzdCA/ICdhdXRvJyA6ICdzbW9vdGgnKX1cbiAgICA+XG4gICAgICBSaWdodFxuICAgIDwvQXJyb3c+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEFycm93KHtcbiAgY2hpbGRyZW4sXG4gIGRpc2FibGVkLFxuICBvbkNsaWNrLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgb25DbGljazogVm9pZEZ1bmN0aW9uO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICByaWdodDogJzElJyxcbiAgICAgICAgb3BhY2l0eTogZGlzYWJsZWQgPyAnMCcgOiAnMScsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBDYXJkKHtcbiAgb25DbGljayxcbiAgc2VsZWN0ZWQsXG4gIHRpdGxlLFxuICBpdGVtSWQsXG59OiB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb25DbGljazogRnVuY3Rpb247XG4gIHNlbGVjdGVkOiBib29sZWFuO1xuICB0aXRsZTogc3RyaW5nO1xuICBpdGVtSWQ6IHN0cmluZztcbn0pIHtcbiAgY29uc3QgdmlzaWJpbGl0eSA9IFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuXG4gIGNvbnN0IHZpc2libGUgPVxuICAgICF2aXNpYmlsaXR5LmluaXRDb21wbGV0ZSB8fFxuICAgICh2aXNpYmlsaXR5LmluaXRDb21wbGV0ZSAmJiB2aXNpYmlsaXR5LmlzSXRlbVZpc2libGUoaXRlbUlkKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHZpc2liaWxpdHkpfVxuICAgICAgb25LZXlEb3duPXsoZXYpID0+IHtcbiAgICAgICAgZXYuY29kZSA9PT0gJ0VudGVyJyAmJiBvbkNsaWNrKHZpc2liaWxpdHkpO1xuICAgICAgfX1cbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1hcmdpbjogJzAgMTBweCcsXG4gICAgICAgIHdpZHRoOiAnMTYwcHgnLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB9fVxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICBjbGFzc05hbWU9XCJjYXJkXCJcbiAgICA+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHZpc2libGUgPyAndHJhbnNwYXJlbnQnIDogJ2dyYXknIH19PlxuICAgICAgICAgIHZpc2libGU6IHtKU09OLnN0cmluZ2lmeSh2aXNpYmxlKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+c2VsZWN0ZWQ6IHtKU09OLnN0cmluZ2lmeSghIXNlbGVjdGVkKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWQgPyAnZ3JlZW4nIDogJ2Jpc3F1ZScsXG4gICAgICAgICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gVE9ETzogbmV4dGpzIGNvbXBsYWlucyBhYm91dCB1c2VMYXlvdXRFZmZlY3RcbmNvbnN0IFdyYXBwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbW91bnRlZCA/IDxBcHAgLz4gOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})