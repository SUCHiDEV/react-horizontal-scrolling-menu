webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_safari_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/safari-polyfill */ \"./helpers/safari-polyfill.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/useHideBodyScroll */ \"./helpers/useHideBodyScroll/index.ts\");\n/* harmony import */ var _helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/useDrag */ \"./helpers/useDrag.ts\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/alex/react-horizontal-scrolling-menu/example-nextjs/pages/index.tsx\",\n    _process,\n    _process$env,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\n\n\n // NOTE: prevent scrolling on main page\n\n // NOTE drag with mouse\n\n // NOTE hide scrollbar in _app.js\n\n\nconst isTest = (_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : \"true\";\nconst elemPrefix = 'test';\n\nconst getId = index => \"\".concat(elemPrefix).concat(index);\n\nconst getItems = () => Array(20).fill(0).map((_, ind) => ({\n  id: getId(ind)\n}));\n\nconst onWheel = (apiObj, ev) => {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else if (ev.deltaY > 0) {\n    apiObj.scrollPrev();\n  }\n};\n\nfunction App() {\n  _s();\n\n  const [items] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(getItems);\n  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0); // React.useEffect(() => {\n  //   if (items.length < 25) {\n  //     setTimeout(() => {\n  //       const newItems = items.concat(\n  //         Array(5)\n  //           .fill(0)\n  //           .map((_, ind) => ({ id: getId(items.length + ind) }))\n  //       );\n  //       console.log('push new items');\n  //       setItems(newItems);\n  //     }, 3000);\n  //   }\n  // }, [items]);\n\n  const isItemSelected = id => !!selected.find(el => el === id);\n\n  const {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging\n  } = Object(_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n  const handleDrag = ({\n    scrollContainer\n  }) => ev => dragMove(ev, newPos => {\n    if (scrollContainer.current) {\n      const currentScroll = scrollContainer.current.scrollLeft;\n      scrollContainer.current.scrollLeft = currentScroll + newPos;\n    }\n  });\n\n  const handleItemClick = itemId => ({\n    getItemById,\n    scrollToItem\n  }) => {\n    if (dragging) {\n      return false;\n    }\n\n    const itemSelected = isItemSelected(itemId);\n    setSelected(currentSelected => itemSelected ? currentSelected.filter(el => el !== itemId) : currentSelected.concat(itemId));\n\n    if (!itemSelected) {\n      var _getItemById, _getItemById$entry;\n\n      // NOTE: center item on select\n      scrollToItem((_getItemById = getItemById(itemId)) === null || _getItemById === void 0 ? void 0 : (_getItemById$entry = _getItemById.entry) === null || _getItemById$entry === void 0 ? void 0 : _getItemById$entry.target, 'smooth', 'center', 'nearest');\n    }\n  };\n\n  const restorePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(({\n    scrollContainer,\n    getItemById,\n    scrollToItem\n  }) => {// NOTE: scroll to item, auto/smooth for animation\n    // scrollToItem(getItemById('test15')?.entry?.target, 'auto');\n    // NOTE: or restore exact position by pixels\n    // scrollContainer.current.scrollLeft = position;\n  }, [position]); // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  const savePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(({\n    scrollContainer\n  }) => !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft), 500), []);\n  const {\n    hideScroll,\n    showScroll\n  } = Object(_helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"example\",\n      style: {\n        height: '200vh',\n        paddingTop: '200px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseEnter: hideScroll,\n        onMouseLeave: showScroll,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onMouseLeave: dragStop,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"ScrollMenu\"], {\n            LeftArrow: LeftArrow,\n            RightArrow: RightArrow,\n            onInit: restorePosition,\n            onScroll: savePosition,\n            onWheel: onWheel,\n            onMouseDown: () => ev => dragStart(ev),\n            onMouseUp: () => dragStop,\n            onMouseMove: handleDrag,\n            children: items.map(({\n              id\n            }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n              title: id,\n              itemId: id // NOTE: itemId is required for track items\n              ,\n              onClick: handleItemClick(id),\n              selected: isItemSelected(id)\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 152,\n              columnNumber: 17\n            }, this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 141,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 137,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"c+pIa2VPxpNyb27OEdP/PlhntNc=\", false, function () {\n  return [_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = App;\n\nfunction LeftArrow() {\n  _s2();\n\n  const {\n    initComplete,\n    isFirstItemVisible,\n    scrollPrev\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]); // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: !initComplete || initComplete && isFirstItemVisible,\n    onClick: () => scrollPrev(isTest ? 'auto' : 'smooth'),\n    children: \"Left\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 175,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(LeftArrow, \"2u9dvBRCES5pVRMXIGOF3Ug5BzY=\");\n\n_c2 = LeftArrow;\n\nfunction RightArrow() {\n  _s3();\n\n  const {\n    initComplete,\n    isLastItemVisible,\n    scrollNext\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: initComplete && isLastItemVisible,\n    onClick: () => scrollNext(isTest ? 'auto' : 'smooth'),\n    children: \"Right\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 189,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(RightArrow, \"PATf83e6EP2QcNJjlk2fI328v74=\");\n\n_c3 = RightArrow;\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    disabled: disabled,\n    onClick: onClick,\n    style: {\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      right: '1%',\n      opacity: disabled ? '0' : '1',\n      userSelect: 'none'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 208,\n    columnNumber: 5\n  }, this);\n}\n\n_c4 = Arrow;\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId\n}) {\n  _s4();\n\n  const visibility = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  const visible = !visibility.initComplete || visibility.initComplete && visibility.isItemVisible(itemId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    onClick: () => onClick(visibility),\n    onKeyDown: ev => {\n      ev.code === 'Enter' && onClick(visibility);\n    },\n    role: \"button\",\n    style: {\n      border: '1px solid',\n      display: 'inline-block',\n      margin: '0 10px',\n      width: '160px',\n      userSelect: 'none'\n    },\n    tabIndex: 0,\n    className: \"card\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 262,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          backgroundColor: visible ? 'transparent' : 'gray'\n        },\n        children: [\"visible: \", JSON.stringify(visible)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 263,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"selected: \", JSON.stringify(!!selected)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 266,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 261,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        backgroundColor: selected ? 'green' : 'bisque',\n        height: '200px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 268,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 245,\n    columnNumber: 5\n  }, this);\n} // TODO: nextjs complains about useLayoutEffect\n\n\n_s4(Card, \"wzCNnUK2b4GmsbLaFyuDONa1PJI=\");\n\n_c5 = Card;\n\nconst Wrapper = () => {\n  _s5();\n\n  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 286,\n    columnNumber: 20\n  }, undefined) : null;\n};\n\n_s5(Wrapper, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c6 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"LeftArrow\");\n$RefreshReg$(_c3, \"RightArrow\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"Card\");\n$RefreshReg$(_c6, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaXNUZXN0IiwicHJvY2VzcyIsImVudiIsImVsZW1QcmVmaXgiLCJnZXRJZCIsImluZGV4IiwiZ2V0SXRlbXMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaW5kIiwiaWQiLCJvbldoZWVsIiwiYXBpT2JqIiwiZXYiLCJpc1Rob3VjaHBhZCIsIk1hdGgiLCJhYnMiLCJkZWx0YVgiLCJkZWx0YVkiLCJzdG9wUHJvcGFnYXRpb24iLCJzY3JvbGxOZXh0Iiwic2Nyb2xsUHJldiIsIkFwcCIsIml0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiaXNJdGVtU2VsZWN0ZWQiLCJmaW5kIiwiZWwiLCJkcmFnU3RhcnQiLCJkcmFnU3RvcCIsImRyYWdNb3ZlIiwiZHJhZ2dpbmciLCJ1c2VEcmFnIiwiaGFuZGxlRHJhZyIsInNjcm9sbENvbnRhaW5lciIsIm5ld1BvcyIsImN1cnJlbnQiLCJjdXJyZW50U2Nyb2xsIiwic2Nyb2xsTGVmdCIsImhhbmRsZUl0ZW1DbGljayIsIml0ZW1JZCIsImdldEl0ZW1CeUlkIiwic2Nyb2xsVG9JdGVtIiwiaXRlbVNlbGVjdGVkIiwiY3VycmVudFNlbGVjdGVkIiwiZmlsdGVyIiwiY29uY2F0IiwiZW50cnkiLCJ0YXJnZXQiLCJyZXN0b3JlUG9zaXRpb24iLCJ1c2VDYWxsYmFjayIsInNhdmVQb3NpdGlvbiIsInRocm90dGxlIiwiaGlkZVNjcm9sbCIsInNob3dTY3JvbGwiLCJ1c2VIaWRlQm9keVNjcm9sbCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJMZWZ0QXJyb3ciLCJSaWdodEFycm93IiwiaW5pdENvbXBsZXRlIiwiaXNGaXJzdEl0ZW1WaXNpYmxlIiwidXNlQ29udGV4dCIsIlZpc2liaWxpdHlDb250ZXh0IiwiaXNMYXN0SXRlbVZpc2libGUiLCJBcnJvdyIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiY3Vyc29yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInJpZ2h0Iiwib3BhY2l0eSIsInVzZXJTZWxlY3QiLCJDYXJkIiwidGl0bGUiLCJ2aXNpYmlsaXR5IiwidmlzaWJsZSIsImlzSXRlbVZpc2libGUiLCJjb2RlIiwiYm9yZGVyIiwibWFyZ2luIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiV3JhcHBlciIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FJQTs7Q0FHQTs7Q0FHQTs7QUFFQTtBQUVBLE1BQU1BLE1BQU0sZUFBR0MsT0FBSCw2REFBRyxTQUFTQyxHQUFaLGlEQUFHLE1BQWY7QUFJQSxNQUFNQyxVQUFVLEdBQUcsTUFBbkI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFJQyxLQUFELGNBQXNCRixVQUF0QixTQUFtQ0UsS0FBbkMsQ0FBZDs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFDZkMsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsQ0FEUixFQUVHQyxHQUZILENBRU8sQ0FBQ0MsQ0FBRCxFQUFJQyxHQUFKLE1BQWE7QUFBRUMsSUFBRSxFQUFFUixLQUFLLENBQUNPLEdBQUQ7QUFBWCxDQUFiLENBRlAsQ0FERjs7QUFLQSxNQUFNRSxPQUFPLEdBQUcsQ0FDZEMsTUFEYyxFQUVkQyxFQUZjLEtBR0w7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxFQUFFLENBQUNJLE1BQVosTUFBd0IsQ0FBeEIsSUFBNkJGLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxFQUFFLENBQUNLLE1BQVosSUFBc0IsRUFBdkU7O0FBRUEsTUFBSUosV0FBSixFQUFpQjtBQUNmRCxNQUFFLENBQUNNLGVBQUg7QUFDQTtBQUNEOztBQUVELE1BQUlOLEVBQUUsQ0FBQ0ssTUFBSCxHQUFZLENBQWhCLEVBQW1CO0FBQ2pCTixVQUFNLENBQUNRLFVBQVA7QUFDRCxHQUZELE1BRU8sSUFBSVAsRUFBRSxDQUFDSyxNQUFILEdBQVksQ0FBaEIsRUFBbUI7QUFDeEJOLFVBQU0sQ0FBQ1MsVUFBUDtBQUNEO0FBQ0YsQ0FuQkQ7O0FBcUJBLFNBQVNDLEdBQVQsR0FBZTtBQUFBOztBQUNiLFFBQU0sQ0FBQ0MsS0FBRCxJQUFVQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVyQixRQUFmLENBQWhCO0FBQ0EsUUFBTSxDQUFDc0IsUUFBRCxFQUFXQyxXQUFYLElBQTBCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQXlCLEVBQXpCLENBQWhDO0FBQ0EsUUFBTSxDQUFDRyxRQUFELEVBQVdDLFdBQVgsSUFBMEJMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQWhDLENBSGEsQ0FLYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFNSyxjQUFjLEdBQUlwQixFQUFELElBQ3JCLENBQUMsQ0FBQ2dCLFFBQVEsQ0FBQ0ssSUFBVCxDQUFlQyxFQUFELElBQVFBLEVBQUUsS0FBS3RCLEVBQTdCLENBREo7O0FBR0EsUUFBTTtBQUFFdUIsYUFBRjtBQUFhQyxZQUFiO0FBQXVCQyxZQUF2QjtBQUFpQ0M7QUFBakMsTUFBOENDLGdFQUFPLEVBQTNEOztBQUVBLFFBQU1DLFVBQVUsR0FDZCxDQUFDO0FBQUVDO0FBQUYsR0FBRCxLQUNDMUIsRUFBRCxJQUNFc0IsUUFBUSxDQUFDdEIsRUFBRCxFQUFNMkIsTUFBRCxJQUFZO0FBQ3ZCLFFBQUlELGVBQWUsQ0FBQ0UsT0FBcEIsRUFBNkI7QUFDM0IsWUFBTUMsYUFBYSxHQUFHSCxlQUFlLENBQUNFLE9BQWhCLENBQXdCRSxVQUE5QztBQUNBSixxQkFBZSxDQUFDRSxPQUFoQixDQUF3QkUsVUFBeEIsR0FBcUNELGFBQWEsR0FBR0YsTUFBckQ7QUFDRDtBQUNGLEdBTE8sQ0FIWjs7QUFVQSxRQUFNSSxlQUFlLEdBQ2xCQyxNQUFELElBQ0EsQ0FBQztBQUFFQyxlQUFGO0FBQWVDO0FBQWYsR0FBRCxLQUE0RDtBQUMxRCxRQUFJWCxRQUFKLEVBQWM7QUFDWixhQUFPLEtBQVA7QUFDRDs7QUFDRCxVQUFNWSxZQUFZLEdBQUdsQixjQUFjLENBQUNlLE1BQUQsQ0FBbkM7QUFFQWxCLGVBQVcsQ0FBRXNCLGVBQUQsSUFDVkQsWUFBWSxHQUNSQyxlQUFlLENBQUNDLE1BQWhCLENBQXdCbEIsRUFBRCxJQUFRQSxFQUFFLEtBQUthLE1BQXRDLENBRFEsR0FFUkksZUFBZSxDQUFDRSxNQUFoQixDQUF1Qk4sTUFBdkIsQ0FISyxDQUFYOztBQU1BLFFBQUksQ0FBQ0csWUFBTCxFQUFtQjtBQUFBOztBQUNqQjtBQUNBRCxrQkFBWSxpQkFDVkQsV0FBVyxDQUFDRCxNQUFELENBREQsdUVBQ1YsYUFBcUJPLEtBRFgsdURBQ1YsbUJBQTRCQyxNQURsQixFQUVWLFFBRlUsRUFHVixRQUhVLEVBSVYsU0FKVSxDQUFaO0FBTUQ7QUFDRixHQXZCSDs7QUF5QkEsUUFBTUMsZUFBZSxHQUFHOUIsNENBQUssQ0FBQytCLFdBQU4sQ0FDdEIsQ0FBQztBQUNDaEIsbUJBREQ7QUFFQ08sZUFGRDtBQUdDQztBQUhELEdBQUQsS0FJK0IsQ0FDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVZxQixFQVd0QixDQUFDbkIsUUFBRCxDQVhzQixDQUF4QixDQTNEYSxDQXlFYjs7QUFDQSxRQUFNNEIsWUFBWSxHQUFHaEMsNENBQUssQ0FBQytCLFdBQU4sQ0FDbkJFLHNEQUFRLENBQ04sQ0FBQztBQUFFbEI7QUFBRixHQUFELEtBQ0UsQ0FBQyxDQUFDQSxlQUFlLENBQUNFLE9BQWxCLElBQ0FaLFdBQVcsQ0FBQ1UsZUFBZSxDQUFDRSxPQUFoQixDQUF3QkUsVUFBekIsQ0FIUCxFQUlOLEdBSk0sQ0FEVyxFQU9uQixFQVBtQixDQUFyQjtBQVVBLFFBQU07QUFBRWUsY0FBRjtBQUFjQztBQUFkLE1BQTZCQywwRUFBaUIsRUFBcEQ7QUFFQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBeUIsV0FBSyxFQUFFO0FBQUVDLGNBQU0sRUFBRSxPQUFWO0FBQW1CQyxrQkFBVSxFQUFFO0FBQS9CLE9BQWhDO0FBQUEsNkJBQ0U7QUFBSyxvQkFBWSxFQUFFSixVQUFuQjtBQUErQixvQkFBWSxFQUFFQyxVQUE3QztBQUFBLCtCQUNFO0FBQUssc0JBQVksRUFBRXpCLFFBQW5CO0FBQUEsaUNBQ0UscUVBQUMsMEVBQUQ7QUFDRSxxQkFBUyxFQUFFNkIsU0FEYjtBQUVFLHNCQUFVLEVBQUVDLFVBRmQ7QUFHRSxrQkFBTSxFQUFFVixlQUhWO0FBSUUsb0JBQVEsRUFBRUUsWUFKWjtBQUtFLG1CQUFPLEVBQUU3QyxPQUxYO0FBTUUsdUJBQVcsRUFBRSxNQUFPRSxFQUFELElBQVFvQixTQUFTLENBQUNwQixFQUFELENBTnRDO0FBT0UscUJBQVMsRUFBRSxNQUFNcUIsUUFQbkI7QUFRRSx1QkFBVyxFQUFFSSxVQVJmO0FBQUEsc0JBVUdmLEtBQUssQ0FBQ2hCLEdBQU4sQ0FBVSxDQUFDO0FBQUVHO0FBQUYsYUFBRCxrQkFDVCxxRUFBQyxJQUFEO0FBQ0UsbUJBQUssRUFBRUEsRUFEVDtBQUVFLG9CQUFNLEVBQUVBLEVBRlYsQ0FFYztBQUZkO0FBSUUscUJBQU8sRUFBRWtDLGVBQWUsQ0FBQ2xDLEVBQUQsQ0FKMUI7QUFLRSxzQkFBUSxFQUFFb0IsY0FBYyxDQUFDcEIsRUFBRDtBQUwxQixlQUdPQSxFQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQ7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEOztHQXBIUVksRztVQXNCNkNlLHdELEVBOERqQnVCLGtFOzs7S0FwRjVCdEMsRzs7QUFzSFQsU0FBU3lDLFNBQVQsR0FBcUI7QUFBQTs7QUFDbkIsUUFBTTtBQUFFRSxnQkFBRjtBQUFnQkMsc0JBQWhCO0FBQW9DN0M7QUFBcEMsTUFDSkcsNENBQUssQ0FBQzJDLFVBQU4sQ0FBaUJDLGlGQUFqQixDQURGLENBRG1CLENBSW5CO0FBQ0E7O0FBQ0Esc0JBQ0UscUVBQUMsS0FBRDtBQUNFLFlBQVEsRUFBRSxDQUFDSCxZQUFELElBQWtCQSxZQUFZLElBQUlDLGtCQUQ5QztBQUVFLFdBQU8sRUFBRSxNQUFNN0MsVUFBVSxDQUFDdkIsTUFBTSxHQUFHLE1BQUgsR0FBWSxRQUFuQixDQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0lBZFFpRSxTOztNQUFBQSxTOztBQWdCVCxTQUFTQyxVQUFULEdBQXNCO0FBQUE7O0FBQ3BCLFFBQU07QUFBRUMsZ0JBQUY7QUFBZ0JJLHFCQUFoQjtBQUFtQ2pEO0FBQW5DLE1BQ0pJLDRDQUFLLENBQUMyQyxVQUFOLENBQWlCQyxpRkFBakIsQ0FERjtBQUdBLHNCQUNFLHFFQUFDLEtBQUQ7QUFDRSxZQUFRLEVBQUVILFlBQVksSUFBSUksaUJBRDVCO0FBRUUsV0FBTyxFQUFFLE1BQU1qRCxVQUFVLENBQUN0QixNQUFNLEdBQUcsTUFBSCxHQUFZLFFBQW5CLENBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7SUFaUWtFLFU7O01BQUFBLFU7O0FBY1QsU0FBU00sS0FBVCxDQUFlO0FBQ2JDLFVBRGE7QUFFYkMsVUFGYTtBQUdiQztBQUhhLENBQWYsRUFRRztBQUNELHNCQUNFO0FBQ0UsWUFBUSxFQUFFRCxRQURaO0FBRUUsV0FBTyxFQUFFQyxPQUZYO0FBR0UsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxTQURIO0FBRUxDLGFBQU8sRUFBRSxNQUZKO0FBR0xDLG1CQUFhLEVBQUUsUUFIVjtBQUlMQyxvQkFBYyxFQUFFLFFBSlg7QUFLTEMsV0FBSyxFQUFFLElBTEY7QUFNTEMsYUFBTyxFQUFFUCxRQUFRLEdBQUcsR0FBSCxHQUFTLEdBTnJCO0FBT0xRLGdCQUFVLEVBQUU7QUFQUCxLQUhUO0FBQUEsY0FhR1Q7QUFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O01BMUJRRCxLOztBQTRCVCxTQUFTVyxJQUFULENBQWM7QUFDWlIsU0FEWTtBQUVaL0MsVUFGWTtBQUdad0QsT0FIWTtBQUlackM7QUFKWSxDQUFkLEVBV0c7QUFBQTs7QUFDRCxRQUFNc0MsVUFBVSxHQUFHM0QsNENBQUssQ0FBQzJDLFVBQU4sQ0FBaUJDLGlGQUFqQixDQUFuQjtBQUVBLFFBQU1nQixPQUFPLEdBQ1gsQ0FBQ0QsVUFBVSxDQUFDbEIsWUFBWixJQUNDa0IsVUFBVSxDQUFDbEIsWUFBWCxJQUEyQmtCLFVBQVUsQ0FBQ0UsYUFBWCxDQUF5QnhDLE1BQXpCLENBRjlCO0FBSUEsc0JBQ0U7QUFDRSxXQUFPLEVBQUUsTUFBTTRCLE9BQU8sQ0FBQ1UsVUFBRCxDQUR4QjtBQUVFLGFBQVMsRUFBR3RFLEVBQUQsSUFBUTtBQUNqQkEsUUFBRSxDQUFDeUUsSUFBSCxLQUFZLE9BQVosSUFBdUJiLE9BQU8sQ0FBQ1UsVUFBRCxDQUE5QjtBQUNELEtBSkg7QUFLRSxRQUFJLEVBQUMsUUFMUDtBQU1FLFNBQUssRUFBRTtBQUNMSSxZQUFNLEVBQUUsV0FESDtBQUVMWixhQUFPLEVBQUUsY0FGSjtBQUdMYSxZQUFNLEVBQUUsUUFISDtBQUlMQyxXQUFLLEVBQUUsT0FKRjtBQUtMVCxnQkFBVSxFQUFFO0FBTFAsS0FOVDtBQWFFLFlBQVEsRUFBRSxDQWJaO0FBY0UsYUFBUyxFQUFDLE1BZFo7QUFBQSw0QkFnQkU7QUFBQSw4QkFDRTtBQUFBLGtCQUFNRTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssYUFBSyxFQUFFO0FBQUVRLHlCQUFlLEVBQUVOLE9BQU8sR0FBRyxhQUFILEdBQW1CO0FBQTdDLFNBQVo7QUFBQSxnQ0FDWU8sSUFBSSxDQUFDQyxTQUFMLENBQWVSLE9BQWYsQ0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUtFO0FBQUEsaUNBQWdCTyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxDQUFDLENBQUNsRSxRQUFqQixDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkYsZUF1QkU7QUFDRSxXQUFLLEVBQUU7QUFDTGdFLHVCQUFlLEVBQUVoRSxRQUFRLEdBQUcsT0FBSCxHQUFhLFFBRGpDO0FBRUxtQyxjQUFNLEVBQUU7QUFGSDtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0QsQyxDQUVEOzs7SUFwRFNvQixJOztNQUFBQSxJOztBQXFEVCxNQUFNWSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNwQixRQUFNLENBQUNDLE9BQUQsRUFBVUMsVUFBVixJQUF3QnZFLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQTlCO0FBRUFELDhDQUFLLENBQUN3RSxTQUFOLENBQWdCLE1BQU07QUFDcEJELGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxHQUZELEVBRUcsRUFGSDtBQUlBLFNBQU9ELE9BQU8sZ0JBQUcscUVBQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsR0FBYSxJQUEzQjtBQUNELENBUkQ7O0lBQU1ELE87O01BQUFBLE87QUFVU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2hlbHBlcnMvc2FmYXJpLXBvbHlmaWxsJztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5cbi8vIE5PVEU6IHByZXZlbnQgc2Nyb2xsaW5nIG9uIG1haW4gcGFnZVxuaW1wb3J0IHVzZUhpZGVCb2R5U2Nyb2xsIGZyb20gJy4uL2hlbHBlcnMvdXNlSGlkZUJvZHlTY3JvbGwnO1xuXG4vLyBOT1RFIGRyYWcgd2l0aCBtb3VzZVxuaW1wb3J0IHVzZURyYWcgZnJvbSAnLi4vaGVscGVycy91c2VEcmFnJztcblxuLy8gTk9URSBoaWRlIHNjcm9sbGJhciBpbiBfYXBwLmpzXG5cbmltcG9ydCB7IFNjcm9sbE1lbnUsIFZpc2liaWxpdHlDb250ZXh0IH0gZnJvbSAncmVhY3QtaG9yaXpvbnRhbC1zY3JvbGxpbmctbWVudSc7XG5cbmNvbnN0IGlzVGVzdCA9IHByb2Nlc3M/LmVudj8uTkVYVF9QVUJMSUNfSVNfVEVTVDtcblxudHlwZSBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSA9IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBWaXNpYmlsaXR5Q29udGV4dD47XG5cbmNvbnN0IGVsZW1QcmVmaXggPSAndGVzdCc7XG5jb25zdCBnZXRJZCA9IChpbmRleDogbnVtYmVyKSA9PiBgJHtlbGVtUHJlZml4fSR7aW5kZXh9YDtcblxuY29uc3QgZ2V0SXRlbXMgPSAoKSA9PlxuICBBcnJheSgyMClcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKF8sIGluZCkgPT4gKHsgaWQ6IGdldElkKGluZCkgfSkpO1xuXG5jb25zdCBvbldoZWVsID0gKFxuICBhcGlPYmo6IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlLFxuICBldjogUmVhY3QuV2hlZWxFdmVudFxuKTogdm9pZCA9PiB7XG4gIC8vIE5PVEU6IG5vIGdvb2Qgc3RhbmRhcnQgd2F5IHRvIGRpc3Rpbmd1aXNoIHRvdWNocGFkIHNjcm9sbGluZyBnZXN0dXJlc1xuICAvLyBidXQgY2FuIGFzc3VtZSB0aGF0IGdlc3R1cmUgd2lsbCBhZmZlY3QgWCBheGlzLCBtb3VzZSBzY3JvbGwgb25seSBZIGF4aXNcbiAgLy8gb2YgaWYgZGVsdGFZIHRvbyBzbWFsbCBwcm9iYWJseSBpcyBpdCB0b3VjaHBhZFxuICBjb25zdCBpc1Rob3VjaHBhZCA9IE1hdGguYWJzKGV2LmRlbHRhWCkgIT09IDAgfHwgTWF0aC5hYnMoZXYuZGVsdGFZKSA8IDE1O1xuXG4gIGlmIChpc1Rob3VjaHBhZCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChldi5kZWx0YVkgPCAwKSB7XG4gICAgYXBpT2JqLnNjcm9sbE5leHQoKTtcbiAgfSBlbHNlIGlmIChldi5kZWx0YVkgPiAwKSB7XG4gICAgYXBpT2JqLnNjcm9sbFByZXYoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbaXRlbXNdID0gUmVhY3QudXNlU3RhdGUoZ2V0SXRlbXMpO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoaXRlbXMubGVuZ3RoIDwgMjUpIHtcbiAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgICBjb25zdCBuZXdJdGVtcyA9IGl0ZW1zLmNvbmNhdChcbiAgLy8gICAgICAgICBBcnJheSg1KVxuICAvLyAgICAgICAgICAgLmZpbGwoMClcbiAgLy8gICAgICAgICAgIC5tYXAoKF8sIGluZCkgPT4gKHsgaWQ6IGdldElkKGl0ZW1zLmxlbmd0aCArIGluZCkgfSkpXG4gIC8vICAgICAgICk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdwdXNoIG5ldyBpdGVtcycpO1xuICAvLyAgICAgICBzZXRJdGVtcyhuZXdJdGVtcyk7XG4gIC8vICAgICB9LCAzMDAwKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtpdGVtc10pO1xuXG4gIGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+XG4gICAgISFzZWxlY3RlZC5maW5kKChlbCkgPT4gZWwgPT09IGlkKTtcblxuICBjb25zdCB7IGRyYWdTdGFydCwgZHJhZ1N0b3AsIGRyYWdNb3ZlLCBkcmFnZ2luZyB9ID0gdXNlRHJhZygpO1xuXG4gIGNvbnN0IGhhbmRsZURyYWcgPVxuICAgICh7IHNjcm9sbENvbnRhaW5lciB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT5cbiAgICAoZXY6IFJlYWN0Lk1vdXNlRXZlbnQpID0+XG4gICAgICBkcmFnTW92ZShldiwgKG5ld1BvcykgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgICBzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gY3VycmVudFNjcm9sbCArIG5ld1BvcztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID1cbiAgICAoaXRlbUlkOiBzdHJpbmcpID0+XG4gICAgKHsgZ2V0SXRlbUJ5SWQsIHNjcm9sbFRvSXRlbSB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW1TZWxlY3RlZCA9IGlzSXRlbVNlbGVjdGVkKGl0ZW1JZCk7XG5cbiAgICAgIHNldFNlbGVjdGVkKChjdXJyZW50U2VsZWN0ZWQ6IHN0cmluZ1tdKSA9PlxuICAgICAgICBpdGVtU2VsZWN0ZWRcbiAgICAgICAgICA/IGN1cnJlbnRTZWxlY3RlZC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gaXRlbUlkKVxuICAgICAgICAgIDogY3VycmVudFNlbGVjdGVkLmNvbmNhdChpdGVtSWQpXG4gICAgICApO1xuXG4gICAgICBpZiAoIWl0ZW1TZWxlY3RlZCkge1xuICAgICAgICAvLyBOT1RFOiBjZW50ZXIgaXRlbSBvbiBzZWxlY3RcbiAgICAgICAgc2Nyb2xsVG9JdGVtKFxuICAgICAgICAgIGdldEl0ZW1CeUlkKGl0ZW1JZCk/LmVudHJ5Py50YXJnZXQsXG4gICAgICAgICAgJ3Ntb290aCcsXG4gICAgICAgICAgJ2NlbnRlcicsXG4gICAgICAgICAgJ25lYXJlc3QnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICBjb25zdCByZXN0b3JlUG9zaXRpb24gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoe1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLFxuICAgICAgZ2V0SXRlbUJ5SWQsXG4gICAgICBzY3JvbGxUb0l0ZW0sXG4gICAgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+IHtcbiAgICAgIC8vIE5PVEU6IHNjcm9sbCB0byBpdGVtLCBhdXRvL3Ntb290aCBmb3IgYW5pbWF0aW9uXG4gICAgICAvLyBzY3JvbGxUb0l0ZW0oZ2V0SXRlbUJ5SWQoJ3Rlc3QxNScpPy5lbnRyeT8udGFyZ2V0LCAnYXV0bycpO1xuICAgICAgLy8gTk9URTogb3IgcmVzdG9yZSBleGFjdCBwb3NpdGlvbiBieSBwaXhlbHNcbiAgICAgIC8vIHNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBwb3NpdGlvbjtcbiAgICB9LFxuICAgIFtwb3NpdGlvbl1cbiAgKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIGNvbnN0IHNhdmVQb3NpdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIHRocm90dGxlKFxuICAgICAgKHsgc2Nyb2xsQ29udGFpbmVyIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PlxuICAgICAgICAhIXNjcm9sbENvbnRhaW5lci5jdXJyZW50ICYmXG4gICAgICAgIHNldFBvc2l0aW9uKHNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQpLFxuICAgICAgNTAwXG4gICAgKSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IHsgaGlkZVNjcm9sbCwgc2hvd1Njcm9sbCB9ID0gdXNlSGlkZUJvZHlTY3JvbGwoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIiBzdHlsZT17eyBoZWlnaHQ6ICcyMDB2aCcsIHBhZGRpbmdUb3A6ICcyMDBweCcgfX0+XG4gICAgICAgIDxkaXYgb25Nb3VzZUVudGVyPXtoaWRlU2Nyb2xsfSBvbk1vdXNlTGVhdmU9e3Nob3dTY3JvbGx9PlxuICAgICAgICAgIDxkaXYgb25Nb3VzZUxlYXZlPXtkcmFnU3RvcH0+XG4gICAgICAgICAgICA8U2Nyb2xsTWVudVxuICAgICAgICAgICAgICBMZWZ0QXJyb3c9e0xlZnRBcnJvd31cbiAgICAgICAgICAgICAgUmlnaHRBcnJvdz17UmlnaHRBcnJvd31cbiAgICAgICAgICAgICAgb25Jbml0PXtyZXN0b3JlUG9zaXRpb259XG4gICAgICAgICAgICAgIG9uU2Nyb2xsPXtzYXZlUG9zaXRpb259XG4gICAgICAgICAgICAgIG9uV2hlZWw9e29uV2hlZWx9XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiAoZXYpID0+IGRyYWdTdGFydChldil9XG4gICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gZHJhZ1N0b3B9XG4gICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVEcmFnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbXMubWFwKCh7IGlkIH0pID0+IChcbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2lkfVxuICAgICAgICAgICAgICAgICAgaXRlbUlkPXtpZH0gLy8gTk9URTogaXRlbUlkIGlzIHJlcXVpcmVkIGZvciB0cmFjayBpdGVtc1xuICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUl0ZW1DbGljayhpZCl9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17aXNJdGVtU2VsZWN0ZWQoaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TY3JvbGxNZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBMZWZ0QXJyb3coKSB7XG4gIGNvbnN0IHsgaW5pdENvbXBsZXRlLCBpc0ZpcnN0SXRlbVZpc2libGUsIHNjcm9sbFByZXYgfSA9XG4gICAgUmVhY3QudXNlQ29udGV4dChWaXNpYmlsaXR5Q29udGV4dCk7XG5cbiAgLy8gTk9URSBpbml0Q29tcGxldGUgaXMgYSBoYWNrIGZvciAgcHJldmVudCBibGlua2luZyBvbiBpbml0XG4gIC8vIENhbiBnZXQgdmlzaWJpbGl0eSBvZiBpdGVtIG9ubHkgYWZ0ZXIgaXQncyByZW5kZXJlZFxuICByZXR1cm4gKFxuICAgIDxBcnJvd1xuICAgICAgZGlzYWJsZWQ9eyFpbml0Q29tcGxldGUgfHwgKGluaXRDb21wbGV0ZSAmJiBpc0ZpcnN0SXRlbVZpc2libGUpfVxuICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsUHJldihpc1Rlc3QgPyAnYXV0bycgOiAnc21vb3RoJyl9XG4gICAgPlxuICAgICAgTGVmdFxuICAgIDwvQXJyb3c+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFJpZ2h0QXJyb3coKSB7XG4gIGNvbnN0IHsgaW5pdENvbXBsZXRlLCBpc0xhc3RJdGVtVmlzaWJsZSwgc2Nyb2xsTmV4dCB9ID1cbiAgICBSZWFjdC51c2VDb250ZXh0KFZpc2liaWxpdHlDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxBcnJvd1xuICAgICAgZGlzYWJsZWQ9e2luaXRDb21wbGV0ZSAmJiBpc0xhc3RJdGVtVmlzaWJsZX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbE5leHQoaXNUZXN0ID8gJ2F1dG8nIDogJ3Ntb290aCcpfVxuICAgID5cbiAgICAgIFJpZ2h0XG4gICAgPC9BcnJvdz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQXJyb3coe1xuICBjaGlsZHJlbixcbiAgZGlzYWJsZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBvbkNsaWNrOiBWb2lkRnVuY3Rpb247XG59KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIHJpZ2h0OiAnMSUnLFxuICAgICAgICBvcGFjaXR5OiBkaXNhYmxlZCA/ICcwJyA6ICcxJyxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhcmQoe1xuICBvbkNsaWNrLFxuICBzZWxlY3RlZCxcbiAgdGl0bGUsXG4gIGl0ZW1JZCxcbn06IHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBGdW5jdGlvbjtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGl0ZW1JZDogc3RyaW5nO1xufSkge1xuICBjb25zdCB2aXNpYmlsaXR5ID0gUmVhY3QudXNlQ29udGV4dChWaXNpYmlsaXR5Q29udGV4dCk7XG5cbiAgY29uc3QgdmlzaWJsZSA9XG4gICAgIXZpc2liaWxpdHkuaW5pdENvbXBsZXRlIHx8XG4gICAgKHZpc2liaWxpdHkuaW5pdENvbXBsZXRlICYmIHZpc2liaWxpdHkuaXNJdGVtVmlzaWJsZShpdGVtSWQpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2sodmlzaWJpbGl0eSl9XG4gICAgICBvbktleURvd249eyhldikgPT4ge1xuICAgICAgICBldi5jb2RlID09PSAnRW50ZXInICYmIG9uQ2xpY2sodmlzaWJpbGl0eSk7XG4gICAgICB9fVxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWFyZ2luOiAnMCAxMHB4JyxcbiAgICAgICAgd2lkdGg6ICcxNjBweCcsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIH19XG4gICAgICB0YWJJbmRleD17MH1cbiAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdmlzaWJsZSA/ICd0cmFuc3BhcmVudCcgOiAnZ3JheScgfX0+XG4gICAgICAgICAgdmlzaWJsZToge0pTT04uc3RyaW5naWZ5KHZpc2libGUpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5zZWxlY3RlZDoge0pTT04uc3RyaW5naWZ5KCEhc2VsZWN0ZWQpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZCA/ICdncmVlbicgOiAnYmlzcXVlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBUT0RPOiBuZXh0anMgY29tcGxhaW5zIGFib3V0IHVzZUxheW91dEVmZmVjdFxuY29uc3QgV3JhcHBlciA9ICgpID0+IHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBtb3VudGVkID8gPEFwcCAvPiA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})