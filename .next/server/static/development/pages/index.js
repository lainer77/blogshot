module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/area/HomeArea1.js":
/*!**************************************!*\
  !*** ./components/area/HomeArea1.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeArea1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contants/constants */ "./contants/constants.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/typography */ "./styles/typography.js");
var _jsxFileName = "/Users/daehankim/Documents/GitHub/blogshot/components/area/HomeArea1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  appbar: {
    flexGrow: 1,
    top: 0,
    left: 0,
    right: 0,
    position: "sticky",
    zIndex: 1,
    padding: `${Object(_styles_typography__WEBPACK_IMPORTED_MODULE_5__["pTr"])(20)} ${Object(_styles_typography__WEBPACK_IMPORTED_MODULE_5__["pTr"])(20)} 0 ${Object(_styles_typography__WEBPACK_IMPORTED_MODULE_5__["pTr"])(20)}`
  }
});
const ContantStyle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  && {
    margin-top: ${Object(_styles_typography__WEBPACK_IMPORTED_MODULE_5__["pTr"])(27)};
    margin-bottom: ${Object(_styles_typography__WEBPACK_IMPORTED_MODULE_5__["pTr"])(33)};
  }
`;
const TypographyStyle = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"])`
  && {
    color: ${_styles_typography__WEBPACK_IMPORTED_MODULE_5__["BASE_COLOR"]};
    font-size: ${Object(_styles_typography__WEBPACK_IMPORTED_MODULE_5__["pTr"])(30)};
    letter-spacing: 0;
    display: inline-block;
  }
`;
const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  && {
    min-height: ${Object(_styles_typography__WEBPACK_IMPORTED_MODULE_5__["pTr"])(42)};
    padding: ${Object(_styles_typography__WEBPACK_IMPORTED_MODULE_5__["pTr"])(2)} 0 ${Object(_styles_typography__WEBPACK_IMPORTED_MODULE_5__["pTr"])(2)} 0;
    display: inline-block;
    text-align: center;
  }
`;
function HomeArea1() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(ContantStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(TextContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(TypographyStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, _contants_constants__WEBPACK_IMPORTED_MODULE_2__["INFO"].HOME.MAIN_TITLE))));
}

/***/ }),

/***/ "./components/area/HomeArea2.js":
/*!**************************************!*\
  !*** ./components/area/HomeArea2.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tab_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab/Tabs */ "./components/tab/Tabs.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/typography */ "./styles/typography.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/daehankim/Documents/GitHub/blogshot/components/area/HomeArea2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    flexGrow: 1
  },
  item: {
    marginBottom: "20px",
    paddingLeft: "10px",
    textAlign: "left",
    cursor: "pointer"
  },
  proccess: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
const GridGutterA = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  && {
    padding: ${Object(_styles_typography__WEBPACK_IMPORTED_MODULE_5__["pTr"])(15)};
    text-align: center;
  }
`;
const GridGutterB = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  && {
    padding: ${Object(_styles_typography__WEBPACK_IMPORTED_MODULE_5__["pTr"])(15)};
    text-align: left;
  }
`;
const GridGutterC = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  && {
    padding: ${Object(_styles_typography__WEBPACK_IMPORTED_MODULE_5__["pTr"])(15)};
    text-align: left;
  }
`;

const ButtonGridA = props => {
  const route = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const classes = useStyles();

  if (props.loading) {
    return __jsx("div", {
      className: classes.proccess,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }));
  }

  return __jsx(GridGutterA, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, props.data.length > 0 && props.data.map((item = {
    code: "",
    title: ""
  }) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      key: "title-" + item.code + item.id + "-a",
      className: props.classes.item,
      onClick: () => {
        route.push(`/post?code=${item.code}`);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, item.code), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, item.title));
  }));
};

const ButtonGridB = props => {
  const route = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const classes = useStyles();

  if (props.loading) {
    return __jsx("div", {
      className: classes.proccess,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    }));
  }

  return __jsx(GridGutterB, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, props.data.length > 0 && props.data.map((item = {
    code: "",
    title: ""
  }) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      key: "title-" + item.code + item.id + "-b",
      className: props.classes.item,
      onClick: () => {
        route.push(`/posting?code=${item.code}`);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: undefined
    }, item.code), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: undefined
    }, item.title));
  }));
};

const ButtonGridC = props => {
  const route = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const classes = useStyles();

  if (props.loading) {
    return __jsx("div", {
      className: classes.proccess,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: undefined
    }));
  }

  return __jsx(GridGutterC, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  });
};

function HomeArea2(props) {
  const classes = useStyles();
  const {
    loading,
    posts,
    posting
  } = props;
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_tab_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titles: ["미정포스트", "티스토리", "네이버"],
    contents: [__jsx(ButtonGridA, {
      data: posts,
      classes: classes,
      loading: loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }), __jsx(ButtonGridB, {
      data: posting,
      classes: classes,
      loading: loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), __jsx(ButtonGridC, {
      data: [],
      classes: classes,
      loading: loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    })],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HomeArea2);

/***/ }),

/***/ "./components/layouts/Layout.js":
/*!**************************************!*\
  !*** ./components/layouts/Layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/typography */ "./styles/typography.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/daehankim/Documents/GitHub/blogshot/components/layouts/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const IpadSize = "768px";
const IpadProSize = "1024px";

const Layout = props => {
  const route = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (localStorage.getItem("rjt")) {} else if (route.pathname !== "/login" && route.pathname !== "/signup") {
      route.push("/login", "/");
    }
  }, []);
  return __jsx("div", {
    id: "layout",
    className: "jsx-538338241 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3632397611", [_styles_typography__WEBPACK_IMPORTED_MODULE_4__["VIEWPORT_RESPONSIVE_FONT_SIZE"], IpadSize]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, props.content, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "538338241",
    __self: undefined
  }, "p.jsx-538338241{color:black;}div.jsx-538338241{background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWVoYW5raW0vRG9jdW1lbnRzL0dpdEh1Yi9ibG9nc2hvdC9jb21wb25lbnRzL2xheW91dHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCa0IsQUFHdUIsQUFHSyxZQUZuQixLQUdBIiwiZmlsZSI6Ii9Vc2Vycy9kYWVoYW5raW0vRG9jdW1lbnRzL0dpdEh1Yi9ibG9nc2hvdC9jb21wb25lbnRzL2xheW91dHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCB7IFZJRVdQT1JUX1JFU1BPTlNJVkVfRk9OVF9TSVpFIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy90eXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgSXBhZFNpemUgPSBcIjc2OHB4XCI7XG5jb25zdCBJcGFkUHJvU2l6ZSA9IFwiMTAyNHB4XCI7XG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IHtcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyanRcIikpIHtcbiAgICB9IGVsc2UgaWYgKHJvdXRlLnBhdGhuYW1lICE9PSBcIi9sb2dpblwiICYmIHJvdXRlLnBhdGhuYW1lICE9PSBcIi9zaWdudXBcIikge1xuICAgICAgcm91dGUucHVzaChcIi9sb2dpblwiLCBcIi9cIik7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImxheW91dFwiPlxuICAgICAge3Byb3BzLmNvbnRlbnR9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHAge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC8qIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKi9cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICAvKiBmb250LXNpemU6ICR7VklFV1BPUlRfUkVTUE9OU0lWRV9GT05UX1NJWkV9OyAqL1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBAbWVkaWEgKG1pbi13aWR0aDogJHtJcGFkU2l6ZX0pIHtcbiAgICAgICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKi9cbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5XHRcdHsgZm9udC1mYW1pbHk6ICdOYW51bVNxdWFyZScsIHNhbnMtc2VyaWY7IH1cbiAgICAgICAgICAgIC5ub3JtYWxcdFx0eyBmb250LXdlaWdodDogNDAwIH1cbiAgICAgICAgICAgIC5ib2xkXHRcdHsgZm9udC13ZWlnaHQ6IDcwMCB9XG4gICAgICAgICAgICAuYm9sZGVyXHRcdHsgZm9udC13ZWlnaHQ6IDgwMCB9XG4gICAgICAgICAgICAubGlnaHRcdFx0eyBmb250LXdlaWdodDogMzAwIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/daehankim/Documents/GitHub/blogshot/components/layouts/Layout.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3632397611",
    dynamic: [_styles_typography__WEBPACK_IMPORTED_MODULE_4__["VIEWPORT_RESPONSIVE_FONT_SIZE"], IpadSize],
    __self: undefined
  }, "html{font-size:16px;height:100%;background:gray;max-width:1024px;margin:0 auto;}body{height:100%;font-size:16px;max-width:1024px;background:white;}body{font-family:'NanumSquare',sans-serif;}.normal{font-weight:400;}.bold{font-weight:700;}.bolder{font-weight:800;}.light{font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWVoYW5raW0vRG9jdW1lbnRzL0dpdEh1Yi9ibG9nc2hvdC9jb21wb25lbnRzL2xheW91dHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDeUIsQUFJZ0MsQUFjSCxBQUs2QixBQUNuQixBQUNGLEFBQ0UsQUFDRCxZQVJOLEdBZEgsQ0FtQlcsQUFDRixBQUNFLEFBQ0QsV0FyQk4sQUFjQyxVQUd5QixNQWhCekIsQ0FjQSxnQkFiSCxDQWNsQixhQVpBIiwiZmlsZSI6Ii9Vc2Vycy9kYWVoYW5raW0vRG9jdW1lbnRzL0dpdEh1Yi9ibG9nc2hvdC9jb21wb25lbnRzL2xheW91dHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCB7IFZJRVdQT1JUX1JFU1BPTlNJVkVfRk9OVF9TSVpFIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy90eXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgSXBhZFNpemUgPSBcIjc2OHB4XCI7XG5jb25zdCBJcGFkUHJvU2l6ZSA9IFwiMTAyNHB4XCI7XG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IHtcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyanRcIikpIHtcbiAgICB9IGVsc2UgaWYgKHJvdXRlLnBhdGhuYW1lICE9PSBcIi9sb2dpblwiICYmIHJvdXRlLnBhdGhuYW1lICE9PSBcIi9zaWdudXBcIikge1xuICAgICAgcm91dGUucHVzaChcIi9sb2dpblwiLCBcIi9cIik7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImxheW91dFwiPlxuICAgICAge3Byb3BzLmNvbnRlbnR9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHAge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC8qIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKi9cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICAvKiBmb250LXNpemU6ICR7VklFV1BPUlRfUkVTUE9OU0lWRV9GT05UX1NJWkV9OyAqL1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBAbWVkaWEgKG1pbi13aWR0aDogJHtJcGFkU2l6ZX0pIHtcbiAgICAgICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKi9cbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5XHRcdHsgZm9udC1mYW1pbHk6ICdOYW51bVNxdWFyZScsIHNhbnMtc2VyaWY7IH1cbiAgICAgICAgICAgIC5ub3JtYWxcdFx0eyBmb250LXdlaWdodDogNDAwIH1cbiAgICAgICAgICAgIC5ib2xkXHRcdHsgZm9udC13ZWlnaHQ6IDcwMCB9XG4gICAgICAgICAgICAuYm9sZGVyXHRcdHsgZm9udC13ZWlnaHQ6IDgwMCB9XG4gICAgICAgICAgICAubGlnaHRcdFx0eyBmb250LXdlaWdodDogMzAwIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/daehankim/Documents/GitHub/blogshot/components/layouts/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/tab/Tabs.js":
/*!********************************!*\
  !*** ./components/tab/Tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/typography */ "./styles/typography.js");
var _jsxFileName = "/Users/daehankim/Documents/GitHub/blogshot/components/tab/Tabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: Object(_styles_typography__WEBPACK_IMPORTED_MODULE_7__["pTr"])(20)
  },
  box: {
    backgroundColor: "rgb(246 246 246)"
  },
  errorRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), value === index && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, children));
}

TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function Tabss({
  errMsg = "",
  titles = [""],
  contents = [{}],
  selected_tab = ""
}) {
  const classes = useStyles();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event, newValue) => {
    setValue(newValue);
  }, []);

  const handleChangeIndex = index => {
    setValue(index);
  };

  let contentCountMissMatch = false;

  if (contentCountMissMatch) {
    return __jsx("div", {
      className: classes.errorRoot,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    });
  }

  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: classes.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["AppBar"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
    value: value,
    onChange: handleChange,
    "aria-label": "simple tabs example",
    variant: "fullWidth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, titles.map((title, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tab"], _extends({
    key: title + index,
    label: title
  }, a11yProps(index), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }))))), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default.a, {
    index: value,
    onChangeIndex: handleChangeIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, contents.map((content, index) => __jsx(TabPanel, {
    key: titles[index] + "-" + index,
    value: value,
    index: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, content))))));
}

function mapStateToProps(state) {
  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Tabss));

/***/ }),

/***/ "./contants/constants.js":
/*!*******************************!*\
  !*** ./contants/constants.js ***!
  \*******************************/
/*! exports provided: NAVER, INFO, BASE_URL, HOME_URL, API_TIME_OUT, SEARCH_REQUST_RESULT_LIMIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVER", function() { return NAVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO", function() { return INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_URL", function() { return HOME_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_TIME_OUT", function() { return API_TIME_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_REQUST_RESULT_LIMIT", function() { return SEARCH_REQUST_RESULT_LIMIT; });
/*----------------------------------------------------------------------------*
 *
 *  Copyright (C) 2019 daehank@qbuz.io  All rights reserved
 *
 *
 *  MODULE: constants.js
 *
 *  FUNCTIONS: constants
 *
 *  COMMENTS:
 *
 *  AUTHOR: qizbuz
 *
 *  DATE: 2019-07-30
 *
 *  LAST EDITED:
 *
 *  TO-DO:
 *
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*
 *                                 CONTANT                                    *
 *----------------------------------------------------------------------------*/
const NAVER = {
  ncpClientId: "l7atafik57",
  URL_SCHEME: {
    WEB_BROWSER: {
      IOS: {
        url: "nmap://actionPath?parameter=value&appname={YOUR_APP_NAME}",
        store: "http://itunes.apple.com/app/id311867728?mt=8"
      },
      ANDROID: {
        url: "intent://actionPath?parameter=value&appname={YOUR_APP_NAME}#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end"
      }
    }
  }
};
const INFO = {
  HOME: {
    MAIN_TITLE: "BlogShot",
    MEDICO_THINK: {
      title: "메디코스코프의 생각, \n \
                '연구하는 의사가 실력있는 의사'",
      content1: {
        label: "의학은 계속 발전합니다",
        text: "5년 전의 의학 지식이 현재의 최선이 아닐 수 있으며, \
                    10년 전의 치료 방법은 더 이상은 잘 사용되지 않는 \
                    방법일 수 있습니다. "
      },
      content2: {
        label: "의료는 과학적으로 검증되어야 합니다.",
        text: "어떤 의사 선생님만 한다는 ‘주사 치료’는 제대로 연구되지 \
                    못한 치료 방법일 수 있고, 어떤 병원의 값비싼 ‘재생 치료’는\
                    철저한 과학적 검증이 되지 않은 치료일 수도 있습니다. "
      },
      content3: "그래서, 의사는 발전하는 의학을 공부하고, 자신의 치료를 과학적으로 \
                연구해야 합니다. ",
      content4: "하지만, 진짜 실력 있는 의사는 단순히 받아들이는 공부를 넘어, 자신의 \
                연구를 통해 의학을 발전시키고, 결과를 발표하여 끊임없이 국내외 의학계의 \
                검증을 받는 의사입니다. ",
      content5: "연구하는 실력있는 의사를 찾는 방법, 메디코스코프."
    }
  },
  DOCTOR: {
    FACT: {
      medico: {
        title: "메디코팩트",
        content: "한 의사가 연구논물을 학술지에 발표한 모든 실적을 \
                종합한 점수입니다.\n\n 예를 들면 정형외과 의사로서 ‘회전근개’,\n \
                ‘대퇴사두근’이라는 주제부문별로 논문을\n 발표했다면, 각 주제부문의 \
                점수를 모두 합산한\n 것이 메디코팩트 점수가 됩니다."
      },
      special: {
        title: "전문분야팩트",
        content: "전문분야팩트는 의사가 학술지에 발표한 개별논문의 연구점수를, \
                    전문분야별로 합산하여 집계합니다.\n\n \
                    예를 들어 같은 정형외과 의사라도 '회전근개'부문의 점수가 높은 \
                    의사와, '추간판'부문의 점수가 높은 의사의 차이는 해당 질병을 \
                    가진 환자입장에서 의미있는 정보가 될 것입니다."
      },
      feat: {
        title: "업적팩트",
        content: "의사가 연구업적을 학술지에 발표한 실적으로 점수로 표현한 것입니다. \n\n \
                    업적팩트는 업적이 게재된 학술지의 권위와 저술자로서의 포지션 등을 \
                    반영하여 산정되며, 검색하신 질병이나 수술 등 주제가 다르면 동일한 의사라도 \
                    업적팩트가 다르게 나타날 수 있습니다."
      }
    }
  },
  HOSPITAL: {
    FACT: {
      hospital: {
        title: "병원팩트",
        content: "병원팩트는, 해당 병원에 소속된 의사들의 메디코팩트 합계를 나타냅니다.\n\n \
                    각 의사들의 메디코팩트 수준과 인원수에 따라 병원팩트의 차이가 발생하며, \
                    같은 병원이라도 시기에 따라 의사들의 입/퇴사가 발생하면 점수는 변동될 \
                    수 있습니다."
      }
    }
  },
  FILTER: {
    AREA: ["서울", "경기", "인천", "부산", "세종시", "대전", "대구", "울산", "경주", "광주", "군산"],
    MEDICAL_DEPARTMENT: ["내과계열", "외과계열", "정형외과", "성형외과", "산부인과", "소아청소년과", "정신건강의학과", "신경과", "안과", "이비인후과", "피부과", "비뇨의학과", "가정의학과", "마취통증의학과", "재활의학과", "치과", "진료지원과", "학의학", "기타"]
  },
  FOOTER: {
    ADDRESS: "서울시 관악구 보라매로5가길 7 813",
    COMPANY: "아키소스템 바이오스트래지티스",
    COPYRIGHT: "Copyright © 2019 메디코스코프  All rights reserved"
  },
  TUTORIAL: {
    PAGE1: {
      TITLE: "메디코스코프의 생각은 연구하는\n 의사가 실력 있는 의사입니다.",
      DESCRIPTION: "메디코스코프는 질병과 치료방법에 대한 의사들의 \n \
                역량을 분석하는 새로운 알고리즘,\n \
                메디코팩트(Medicofact)로 가장 신뢰할 수 있는 의사를\n \
                찾아드립니다."
    },
    PAGE2: {
      TITLE: "무슨 과를 가야하지?\n \
                고민말고 질병명, 시술명, 수술명으로",
      DESCRIPTION: "검색한 질병과 치료에 대한 과학적 검증을 받은\n 신뢰할 수 있는 의사를 찾아드립니다."
    },
    PAGE3: {
      TITLE: "환자로서의 경험을 나눠 보세요.",
      DESCRIPTION: "의사의 친절함, 병원의 청결함, 겪어보고 느낀 경험을\n 리뷰하고 지인과 공유하세요."
    },
    PAGE4: {
      TITLE: "카카오톡으로 바로\n 시작하실 수 있습니다.",
      DESCRIPTION: "번거로운 가입절차가 필요없습니다.\n 카카오톡으로 바로 시작해보세요."
    }
  }
}; // medico api
// export const BASE_URL = "medico-api.devbox.app/v1";

const BASE_URL = "localhost:3003";
const HOME_URL = "localhost:3003"; // api params

const API_TIME_OUT = 30000;
const SEARCH_REQUST_RESULT_LIMIT = 10;

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_area_HomeArea1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/area/HomeArea1 */ "./components/area/HomeArea1.js");
/* harmony import */ var _components_area_HomeArea2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/area/HomeArea2 */ "./components/area/HomeArea2.js");
/* harmony import */ var _useActions_useDataList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useActions/useDataList */ "./useActions/useDataList.js");
var _jsxFileName = "/Users/daehankim/Documents/GitHub/blogshot/pages/home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





 // import AppBar from "../components/component/AppBar";

const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    minHeight: "calc(100vh)"
  }
}));

const HomePage = props => {
  const classes = useStyles();
  const {
    data: posts,
    loading
  } = Object(_useActions_useDataList__WEBPACK_IMPORTED_MODULE_4__["default"])("posts");
  const {
    data: posting,
    loading2
  } = Object(_useActions_useDataList__WEBPACK_IMPORTED_MODULE_4__["default"])("posting");
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_components_area_HomeArea1__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx(_components_area_HomeArea2__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    posts: posts,
    posting: posting,
    loading: loading || loading2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/Layout */ "./components/layouts/Layout.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./pages/home.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/daehankim/Documents/GitHub/blogshot/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 // import cookies from "next-cookies";

const IndexPage = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_home__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })));
};

const Page = props => {
  return __jsx(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cookies: props.cookies,
    content: __jsx(IndexPage, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./styles/typography.js":
/*!******************************!*\
  !*** ./styles/typography.js ***!
  \******************************/
/*! exports provided: BASE_APP_SIZE, BASE_APP_HEIGHT, BASE_COLOR, VIEWPORT_RESPONSIVE_FONT_SIZE, BASE_LINE_HEIGHT, pTr, pTx, responsiveHeight, pInt, getWindow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_APP_SIZE", function() { return BASE_APP_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_APP_HEIGHT", function() { return BASE_APP_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_COLOR", function() { return BASE_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RESPONSIVE_FONT_SIZE", function() { return VIEWPORT_RESPONSIVE_FONT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_LINE_HEIGHT", function() { return BASE_LINE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pTr", function() { return pTr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pTx", function() { return pTx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveHeight", function() { return responsiveHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pInt", function() { return pInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global */ "global");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_0__);


const parseDeci = (num = "") => parseInt(num, 10); // viewportResponsiveBaseFontSize 계산을 위한 상수. 어떤 값을 사용해도 상관없다.


const BASE_FONT_SIZE = "16px"; // 디자인에서 제시한 앱 사이즈. pTr 계산에는 디자인에 제시한 사이즈를 기준으로 해야 한다.

const BASE_APP_SIZE = "375px";
const BASE_APP_HEIGHT = "812px";
const BASE_COLOR = "rgb(0 49 82)"; // lightpuple
// export const BASE_COLOR = "rgb(174 87 251)";

/**
 * 모바일에서는 뷰포트 넓이에 대응해서 폰트 사이즈가 커지도록 한다.
 * html 폰트 사이즈를 vw 단위로 설정한 후, 모든 요소의 사이즈를 rem 단위로 설정하면 크기가 디바이스 크기에
 * 반응해서 커지게 된다.
 * vw 값은 임의로 지정한 가상 베이스 폰트 사이즈와 디자인에서 사용한 앱의 넓이를 사용해서 계산한다.
 * 디자이너가 지정한 앱의 넓이가 414px, 가상 베이스 폰트사이즈가 25px이라면 실제 베이스 폰트사이즈는
 * 100 / 414 * 25 vw 가 된다.
 *
 * 데스크탑 뷰에서는 vw 단위로 베이스 폰트사이즈를 지정하면 앱 요소의 사이즈가 너무 커지기 때문에 vw 대신
 * 가상 베이스폰트 사이즈를 사용하고 앱의 넓이도 디자인의 넓이를 그대로 사용한다.
 */
// export const VIEWPORT_RESPONSIVE_FONT_SIZE = `100vw`;

const VIEWPORT_RESPONSIVE_FONT_SIZE = `${parseDeci(BASE_FONT_SIZE) / parseDeci(BASE_APP_SIZE) * 100}vw`;
const BASE_LINE_HEIGHT = 1.4;
/**
 * point(pixel) to rem
 * 가상 베이스 폰트 사이즈를 기준으로 rem 값을 계산한다.
 */

const pTr = (pt = 16) => {
  // return `${parseInt(pt) / parseInt(BASE_FONT_SIZE)}rem`;
  return `${pt}px`;
};
const pTx = (px = 16) => {
  // if (!window) return null;
  // let width = window.innerWidth < 768 ? window.innerWidth : 768;
  // return `${px * (width / parseInt(BASE_APP_SIZE))}px`;
  return `${px}px`;
};
const responsiveHeight = (px = 16) => {
  // if (!window) return null;
  // let height = px < window.innerHeight ? px : window.innerHeight;
  // return `${px * (height / parseInt(BASE_APP_HEIGHT))}px`;
  return `${px}px`;
};
const pInt = (pt = 16) => {
  // return parseInt(pt) * (window.innerWidth / parseInt(BASE_APP_SIZE));
  // return pt;
  return parseInt(pt);
};
const getWindow = () => {
  if (!global__WEBPACK_IMPORTED_MODULE_0___default.a) return null;
  return global__WEBPACK_IMPORTED_MODULE_0___default.a;
}; // export const pTr = (pt = 16) => {
//     return `${parseInt(pt, 10) / parseInt(BASE_FONT_SIZE, 10)}rem`;
// };

/* harmony default export */ __webpack_exports__["default"] = ({
  VIEWPORT_RESPONSIVE_FONT_SIZE,
  BASE_FONT_SIZE,
  BASE_LINE_HEIGHT,
  pTr
});

/***/ }),

/***/ "./useActions/useDataList.js":
/*!***********************************!*\
  !*** ./useActions/useDataList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/constants */ "./contants/constants.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


 // import { useDispatch } from "react-redux";




function useDataList(tableName, params = {
  limit: 100
}) {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const route = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(); //   const dispatch = useDispatch();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setLoading(true);
    const token = localStorage.getItem("rjt");
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`http://${_contants_constants__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"]}/${tableName}`, {
      params: params,
      timeout: _contants_constants__WEBPACK_IMPORTED_MODULE_3__["API_TIME_OUT"] / 2,
      // 15초 이내에 응답이 오지 않으면 에러로 간주
      headers: {
        "x-api-key": token
      }
    }).then(res => {
      setData(res.data);
      setLoading(false); // dispatch({ type: GET_POSTS_LIST, payload: { data: res.data } });
    }).catch(error => {
      setError(error);
      console.log(error);
      if (error.response && error.response.data && error.response.data.msg) alert(error.response.data.msg);

      if (error.response.status === 401) {
        localStorage.removeItem("rjt");
        route.push("/login", "/");
      }

      setLoading(false);
    });
  }, []);
  return {
    data,
    loading,
    error
  };
}

useDataList.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (useDataList);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daehankim/Documents/GitHub/blogshot/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "global":
/*!*************************!*\
  !*** external "global" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("global");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map