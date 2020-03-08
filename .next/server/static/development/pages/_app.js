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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/types.js":
/*!**************************!*\
  !*** ./actions/types.js ***!
  \**************************/
/*! exports provided: GET_POSTS_LIST, GET_POST_CODE, SEARCH_REQUEST, SEARCH_REQUEST_SUCCESS, SEARCH_REQUEST_FAILURE, SELECTED_TAB, GET_AREA_REQUEST, GET_MEDICAL_DEPARTMENT_REQUEST, GET_MEDICAL_UNIVERSITIE_REQUEST, SET_SEARCH_TYPE, SEARCH_AJAX, SET_CNT_TOTAL, FILTER_APPLY, FILTER_CLEAR, SET_DOCTOR_LIST, ADD_DOCTOR_LIST, RMV_DOCTOR_LIST, SELECTED_DOCTOR, SELECTED_DOCTOR_SUCCESS, SELECTED_DOCTOR_FAILURE, DOCTOR_AREA_FILTER_APPLY, DEPARTMENT_FILTER_APPLY, UNIVERSITIE_FILTER_APPLY, DOCTOR_FILTER_CLEAR, GET_DOCTOR_ALL_REVIEW, ADD_DOCTOR_PAPERS, SET_HOSPITAL_STATE, SET_HOSPITAL_LIST, ADD_HOSPITAL_LIST, RMV_HOSPITAL_LIST, SELECTED_HOSPITAL, SELECTED_HOSPITAL_SUCCESS, SELECTED_HOSPITAL_FAILURE, EXTENTION_HOSPITAL, HOSPITAL_AREA_FILTER_APPLY, HOSPITAL_FILTER_CLEAR, GET_HOSPITAL_ALL_REVIEW, SET_KAKAO_INFO, SET_KAKAO_LOGIN, SET_KAKAO_LOGOUT, FIXED_LOGIN, LOGIN_TOKEN_CHECK, GET_MYHOME_INFO, SET_FAVORITE_DOCTORS, GET_FAVORITE_DOCTORS, HOSPITAL_REVIEW_LIST, HOSPITAL_REVIEW_LIST_SUCCESS, HOSPITAL_REVIEW_LIST_FAILURE, DOCTOR_REVIEW_LIST, DOCTOR_REVIEW_LIST_SUCCESS, DOCTOR_REVIEW_LIST_FAILURE, ASK_SEND, ASK_SEND_SUCCESS, ASK_SEND_FAILURE, SET_MESSAGE, MESSAGE_OPEN, MESSAGE_CLOSE, SET_ERROR, ERROR_OPEN, ERROR_CLOSE, SET_WHETHER, WHETHER_OPEN, WHETHER_CLOSE, WHETHER_RESULT, LOADING_OPEN, LOADING_CLOSE, SET_COOKIE, GET_COOKIE, RMV_COOKIE, ADD_COOKIE, SUB_COOKIE, GET_COOKIE_ALL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_LIST", function() { return GET_POSTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_CODE", function() { return GET_POST_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_REQUEST", function() { return SEARCH_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_REQUEST_SUCCESS", function() { return SEARCH_REQUEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_REQUEST_FAILURE", function() { return SEARCH_REQUEST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_TAB", function() { return SELECTED_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AREA_REQUEST", function() { return GET_AREA_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MEDICAL_DEPARTMENT_REQUEST", function() { return GET_MEDICAL_DEPARTMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MEDICAL_UNIVERSITIE_REQUEST", function() { return GET_MEDICAL_UNIVERSITIE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH_TYPE", function() { return SET_SEARCH_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_AJAX", function() { return SEARCH_AJAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CNT_TOTAL", function() { return SET_CNT_TOTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_APPLY", function() { return FILTER_APPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CLEAR", function() { return FILTER_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DOCTOR_LIST", function() { return SET_DOCTOR_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DOCTOR_LIST", function() { return ADD_DOCTOR_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RMV_DOCTOR_LIST", function() { return RMV_DOCTOR_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_DOCTOR", function() { return SELECTED_DOCTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_DOCTOR_SUCCESS", function() { return SELECTED_DOCTOR_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_DOCTOR_FAILURE", function() { return SELECTED_DOCTOR_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTOR_AREA_FILTER_APPLY", function() { return DOCTOR_AREA_FILTER_APPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEPARTMENT_FILTER_APPLY", function() { return DEPARTMENT_FILTER_APPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIVERSITIE_FILTER_APPLY", function() { return UNIVERSITIE_FILTER_APPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTOR_FILTER_CLEAR", function() { return DOCTOR_FILTER_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DOCTOR_ALL_REVIEW", function() { return GET_DOCTOR_ALL_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DOCTOR_PAPERS", function() { return ADD_DOCTOR_PAPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_HOSPITAL_STATE", function() { return SET_HOSPITAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_HOSPITAL_LIST", function() { return SET_HOSPITAL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_HOSPITAL_LIST", function() { return ADD_HOSPITAL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RMV_HOSPITAL_LIST", function() { return RMV_HOSPITAL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_HOSPITAL", function() { return SELECTED_HOSPITAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_HOSPITAL_SUCCESS", function() { return SELECTED_HOSPITAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_HOSPITAL_FAILURE", function() { return SELECTED_HOSPITAL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENTION_HOSPITAL", function() { return EXTENTION_HOSPITAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSPITAL_AREA_FILTER_APPLY", function() { return HOSPITAL_AREA_FILTER_APPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSPITAL_FILTER_CLEAR", function() { return HOSPITAL_FILTER_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOSPITAL_ALL_REVIEW", function() { return GET_HOSPITAL_ALL_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_KAKAO_INFO", function() { return SET_KAKAO_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_KAKAO_LOGIN", function() { return SET_KAKAO_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_KAKAO_LOGOUT", function() { return SET_KAKAO_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIXED_LOGIN", function() { return FIXED_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_TOKEN_CHECK", function() { return LOGIN_TOKEN_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MYHOME_INFO", function() { return GET_MYHOME_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FAVORITE_DOCTORS", function() { return SET_FAVORITE_DOCTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_DOCTORS", function() { return GET_FAVORITE_DOCTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSPITAL_REVIEW_LIST", function() { return HOSPITAL_REVIEW_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSPITAL_REVIEW_LIST_SUCCESS", function() { return HOSPITAL_REVIEW_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSPITAL_REVIEW_LIST_FAILURE", function() { return HOSPITAL_REVIEW_LIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTOR_REVIEW_LIST", function() { return DOCTOR_REVIEW_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTOR_REVIEW_LIST_SUCCESS", function() { return DOCTOR_REVIEW_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTOR_REVIEW_LIST_FAILURE", function() { return DOCTOR_REVIEW_LIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASK_SEND", function() { return ASK_SEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASK_SEND_SUCCESS", function() { return ASK_SEND_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASK_SEND_FAILURE", function() { return ASK_SEND_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MESSAGE", function() { return SET_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_OPEN", function() { return MESSAGE_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_CLOSE", function() { return MESSAGE_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERROR", function() { return SET_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_OPEN", function() { return ERROR_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_CLOSE", function() { return ERROR_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_WHETHER", function() { return SET_WHETHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHETHER_OPEN", function() { return WHETHER_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHETHER_CLOSE", function() { return WHETHER_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHETHER_RESULT", function() { return WHETHER_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_OPEN", function() { return LOADING_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_CLOSE", function() { return LOADING_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COOKIE", function() { return SET_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COOKIE", function() { return GET_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RMV_COOKIE", function() { return RMV_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COOKIE", function() { return ADD_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_COOKIE", function() { return SUB_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COOKIE_ALL", function() { return GET_COOKIE_ALL; });
// Home Page
const GET_POSTS_LIST = "GET_POSTS_LIST";
const GET_POST_CODE = "GET_POST_CODE"; // Search Page

const SEARCH_REQUEST = "SEARCH_REQUEST";
const SEARCH_REQUEST_SUCCESS = "SEARCH_REQUEST_SUCCESS";
const SEARCH_REQUEST_FAILURE = "SEARCH_REQUEST_FAILURE";
const SELECTED_TAB = "SELECTED_TAB";
const GET_AREA_REQUEST = "GET_AREA_REQUEST";
const GET_MEDICAL_DEPARTMENT_REQUEST = "GET_MEDICAL_DEPARTMENT_REQUEST";
const GET_MEDICAL_UNIVERSITIE_REQUEST = "GET_MEDICAL_UNIVERSITIE_REQUEST";
const SET_SEARCH_TYPE = "SET_SEARCH_TYPE";
const SEARCH_AJAX = "SEARCH_AJAX";
const SET_CNT_TOTAL = "SET_CNT_TOTAL";
const FILTER_APPLY = "FILTER_APPLY";
const FILTER_CLEAR = "FILTER_CLEAR"; // Doctor Promise

const SET_DOCTOR_LIST = "SET_DOCTOR_LIST";
const ADD_DOCTOR_LIST = "ADD_DOCTOR_LIST";
const RMV_DOCTOR_LIST = "RMV_DOCTOR_LIST";
const SELECTED_DOCTOR = "SELECTED_DOCTOR";
const SELECTED_DOCTOR_SUCCESS = "SELECTED_DOCTOR_SUCCESS";
const SELECTED_DOCTOR_FAILURE = "SELECTED_DOCTOR_FAILURE";
const DOCTOR_AREA_FILTER_APPLY = "DOCTOR_AREA_FILTER_APPLY";
const DEPARTMENT_FILTER_APPLY = "DEPARTMENT_FILTER_APPLY";
const UNIVERSITIE_FILTER_APPLY = "UNIVERSITIE_FILTER_APPLY";
const DOCTOR_FILTER_CLEAR = "DOCTOR_FILTER_CLEAR";
const GET_DOCTOR_ALL_REVIEW = "GET_DOCTOR_ALL_REVIEW";
const ADD_DOCTOR_PAPERS = "ADD_DOCTOR_PAPERS"; // Hospital Promise

const SET_HOSPITAL_STATE = "SET_HOSPITAL_STATE";
const SET_HOSPITAL_LIST = "SET_HOSPITAL_LIST";
const ADD_HOSPITAL_LIST = "ADD_HOSPITAL_LIST";
const RMV_HOSPITAL_LIST = "RMV_HOSPITAL_LIST";
const SELECTED_HOSPITAL = "SELECTED_HOSPITAL";
const SELECTED_HOSPITAL_SUCCESS = "SELECTED_HOSPITAL_SUCCESS";
const SELECTED_HOSPITAL_FAILURE = "SELECTED_HOSPITAL_FAILURE";
const EXTENTION_HOSPITAL = "EXTENTION_HOSPITAL";
const HOSPITAL_AREA_FILTER_APPLY = "HOSPITAL_AREA_FILTER_APPLY";
const HOSPITAL_FILTER_CLEAR = "HOSPITAL_FILTER_CLEAR";
const GET_HOSPITAL_ALL_REVIEW = "GET_HOSPITAL_ALL_REVIEW"; // Kakao Promise

const SET_KAKAO_INFO = "SET_KAKAO_INFO";
const SET_KAKAO_LOGIN = "SET_KAKAO_LOGIN";
const SET_KAKAO_LOGOUT = "SET_KAKAO_LOGOUT";
const FIXED_LOGIN = "FIXED_LOGIN";
const LOGIN_TOKEN_CHECK = "LOGIN_TOKEN_CHECK"; // MyPage Promise

const GET_MYHOME_INFO = "GET_MYHOME_INFO";
const SET_FAVORITE_DOCTORS = "SET_FAVORITE_DOCTORS";
const GET_FAVORITE_DOCTORS = "GET_FAVORITE_DOCTORS";
const HOSPITAL_REVIEW_LIST = "HOSPITAL_REVIEW_LIST";
const HOSPITAL_REVIEW_LIST_SUCCESS = "HOSPITAL_REVIEW_LIST_SUCCESS";
const HOSPITAL_REVIEW_LIST_FAILURE = "HOSPITAL_REVIEW_LIST_FAILURE";
const DOCTOR_REVIEW_LIST = "DOCTOR_REVIEW_LIST";
const DOCTOR_REVIEW_LIST_SUCCESS = "DOCTOR_REVIEW_LIST_SUCCESS";
const DOCTOR_REVIEW_LIST_FAILURE = "DOCTOR_REVIEW_LIST_FAILURE"; // Contact Promise

const ASK_SEND = "ASK_SEND";
const ASK_SEND_SUCCESS = "ASK_SEND_SUCCESS";
const ASK_SEND_FAILURE = "ASK_SEND_FAILURE"; // Utils Promise

const SET_MESSAGE = "SET_MESSAGE";
const MESSAGE_OPEN = "MESSAGE_OPEN";
const MESSAGE_CLOSE = "MESSAGE_CLOSE";
const SET_ERROR = "SET_ERROR";
const ERROR_OPEN = "ERROR_OPEN";
const ERROR_CLOSE = "ERROR_CLOSE";
const SET_WHETHER = "SET_WHETHER";
const WHETHER_OPEN = "WHETHER_OPEN";
const WHETHER_CLOSE = "WHETHER_CLOSE";
const WHETHER_RESULT = "WHETHER_RESULT";
const LOADING_OPEN = "LOADING_OPEN";
const LOADING_CLOSE = "LOADING_CLOSE";
const SET_COOKIE = "SET_COOKIE";
const GET_COOKIE = "GET_COOKIE";
const RMV_COOKIE = "RMV_COOKIE";
const ADD_COOKIE = "ADD_COOKIE";
const SUB_COOKIE = "SUB_COOKIE";
const GET_COOKIE_ALL = "GET_COOKIE_ALL";

/***/ }),

/***/ "./components/public/seo.js":
/*!**********************************!*\
  !*** ./components/public/seo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daehankim/Documents/GitHub/blogshot/components/public/seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Seo(props) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.title), __jsx("meta", {
    name: "description",
    content: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Seo);

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

/***/ "./logic/errorLogic.js":
/*!*****************************!*\
  !*** ./logic/errorLogic.js ***!
  \*****************************/
/*! exports provided: setDispatch, setStateFuc, errorExcute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDispatch", function() { return setDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStateFuc", function() { return setStateFuc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorExcute", function() { return errorExcute; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_utilsinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/utilsinfo */ "./reducers/utilsinfo.js");


let dispatch;
let getState;
const setDispatch = dispatch => {
  dispatch = dispatch;
};
const setStateFuc = getState => {
  getState = getState;
};
const errorExcute = (code, params, cb) => {
  switch (code) {
    case 403:
      alert("사용자의 다른 기기에서 로그인되었습니다. 로그아웃됩니다.");
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/");
      if (cb) cb();
      break;

    case 500:
      let errorObj = {
        code: code,
        ok: "다시 시도",
        cancel: "홈으로",
        msg: "이런, 일시적으로 서비스에 장애가 발생한 것 같습니다. 다시 시도해보시고 이러한 증상이 계속되면 앱을 재실행해보시기 바랍니다."
      };
      return (dispatch, getState) => {
        Object(_reducers_utilsinfo__WEBPACK_IMPORTED_MODULE_1__["error_open"])(errorObj)(dispatch, getState);
      };
      break;

    default:
      break;
  }
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores */ "./stores.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _components_public_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/public/seo */ "./components/public/seo.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _logic_errorLogic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../logic/errorLogic */ "./logic/errorLogic.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/daehankim/Documents/GitHub/blogshot/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















class BlogApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    Object(_logic_errorLogic__WEBPACK_IMPORTED_MODULE_10__["setDispatch"])(this.props.store.dispatch);
    Object(_logic_errorLogic__WEBPACK_IMPORTED_MODULE_10__["setStateFuc"])(this.props.store.getState);
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const cookie = next_cookies__WEBPACK_IMPORTED_MODULE_9___default()(ctx);
    return {
      pageProps,
      cookies: cookie
    };
  }

  renderHead() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("meta", {
      name: "viewport",
      content: "width=device-width height=device-height, initial-scale=1 user-scalable=no maximum-scale=1 minimum-scale=1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }));
  }

  render() {
    const _this$props = this.props,
          {
      Component,
      pageProps,
      store,
      cookies
    } = _this$props,
          others = _objectWithoutProperties(_this$props, ["Component", "pageProps", "store", "cookies"]);

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), this.renderHead(), __jsx(_components_public_seo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: "BlogShot",
      description: "blogshot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["StylesProvider"], {
      injectFirst: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_12__["ThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_7__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_7__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(Component, _extends({}, pageProps, {
      store: store,
      cookies: cookies
    }, others, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_stores__WEBPACK_IMPORTED_MODULE_4__["default"], {
  debug: false
})(BlogApp));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _postsinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postsinfo */ "./reducers/postsinfo.js");

 //did not immer

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  postsinfo: _postsinfo__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./reducers/postsinfo.js":
/*!*******************************!*\
  !*** ./reducers/postsinfo.js ***!
  \*******************************/
/*! exports provided: getPostsList, getPostCode, set_doctor_list, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsList", function() { return getPostsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostCode", function() { return getPostCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_doctor_list", function() { return set_doctor_list; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./actions/types.js");
/* harmony import */ var _contants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contants/constants */ "./contants/constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const tableName = "posts";

function getListAPI(params) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`http://${_contants_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"]}/${tableName}`, {
    params: params,
    timeout: _contants_constants__WEBPACK_IMPORTED_MODULE_1__["API_TIME_OUT"] / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주

  });
}

function getCodeAPI(code) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`http://${_contants_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"]}/${tableName}/${code}`, {
    timeout: _contants_constants__WEBPACK_IMPORTED_MODULE_1__["API_TIME_OUT"] / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주

  });
}

const initialState = {
  posts: [],
  selectedPost: {}
};
const getPostsList = () => {
  return (dispatch, getState) => {
    getListAPI({
      limit: 30
    }).then(res => {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS_LIST"],
        payload: {
          data: res.data
        }
      });
    });
  };
};
const getPostCode = code => {
  return (dispatch, getState) => {
    getCodeAPI(code).then(res => {
      dispatch({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_POST_CODE"],
        payload: {
          data: res.data
        }
      });
    });
  };
};
function set_doctor_list(response, more) {
  return (dispatch, getState) => {
    const list_doctor = response.data.list_doctor.list;
    const cnt_doctor = response.data.list_doctor.cnt_doctor;
    const is_filter = getState().doctorinfo.is_filter;

    if (!more) {
      dispatch({
        type: SET_DOCTOR_LIST,
        payload: {
          list_doctor: list_doctor,
          cnt_doctor: cnt_doctor
        }
      });
    } else {
      if (isFilter(is_filter)) {
        const filter_doctor_list = filter_logic(list_doctor, is_filter, getState().doctorinfo.value_filter);
        dispatch({
          type: ADD_DOCTOR_LIST,
          payload: {
            filter_doctor_list: filter_doctor_list
          }
        });
      } else {
        dispatch({
          type: ADD_DOCTOR_LIST,
          payload: {
            list_doctor: list_doctor
          }
        });
      }
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS_LIST"]:
      return _objectSpread({}, state, {
        posts: action.payload.data
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_POST_CODE"]:
      return _objectSpread({}, state, {
        selectedPost: action.payload.data
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/utilsinfo.js":
/*!*******************************!*\
  !*** ./reducers/utilsinfo.js ***!
  \*******************************/
/*! exports provided: get_cookie_all, set_cookie, add_cookie, get_cookie, set_loading, set_message, message_open, message_close, set_error, error_open, error_close, set_whether, whether_result, whether_open, whether_close, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_cookie_all", function() { return get_cookie_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_cookie", function() { return set_cookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_cookie", function() { return add_cookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_cookie", function() { return get_cookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_loading", function() { return set_loading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_message", function() { return set_message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message_open", function() { return message_open; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message_close", function() { return message_close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_error", function() { return set_error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error_open", function() { return error_open; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error_close", function() { return error_close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_whether", function() { return set_whether; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whether_result", function() { return whether_result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whether_open", function() { return whether_open; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whether_close", function() { return whether_close; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  msg: "",
  open: false,
  cookies: {
    recent: []
  },
  loading: false,
  is_error: false,
  errorObj: {
    code: null,
    ok: null,
    cancel: null,
    msg: null
  },
  is_whether: false,
  whetherObj: {
    code: null,
    ok: null,
    cancel: null,
    msg: null,
    value: null
  },
  whetherResult: {
    value: null,
    state: null
  }
};
const get_cookie_all = datas => {
  return async (dispatch, getState) => {
    let cookies = getState().utilsinfo.cookies;
    Object.keys(datas).map(item => {
      if (cookies[item]) cookies[item] = JSON.parse(datas[item]);
    });
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_COOKIE_ALL"],
      payload: {
        cookies
      }
    });
  };
};
const set_cookie = (name, value, path) => {
  return async (dispatch, getState) => {
    // document.cookie = `${name}=${encodeURIComponent(value) ||
    //     ""}; path=${path | "/"}`;
    if (value && value != null && value != "null") localStorage.setItem(name, value);
  };
};
const add_cookie = (name, value, path) => {
  return async (dispatch, getState) => {
    let cookies = getState().utilsinfo.cookies;
    let valueJSON;
    let tem = cookies[name];

    if (cookies[name]) {
      if (cookies[name][0] == value) return;
      cookies[name].unshift(value);
      tem = tem.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      });
      if (tem.length > 10) tem.pop();
      valueJSON = JSON.stringify(tem);
    } // document.cookie = `${name}=${encodeURIComponent(valueJSON || value) ||
    //     ""}; path=${path | "/"}`;


    localStorage.setItem(name, valueJSON || value);
    cookies[name] = tem;
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_COOKIE_ALL"],
      payload: {
        cookies
      }
    });
  };
};
const get_cookie = name => {
  console.log(document.cookie);
};
const set_loading = bOl => {
  return (dispatch, getState) => {
    if (bOl) dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOADING_OPEN"]
    });else dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOADING_CLOSE"]
    });
  };
};
const set_message = text => {
  return (dispatch, getState) => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_MESSAGE"],
      payload: {
        text: text
      }
    });
  };
};
const message_open = text => {
  return (dispatch, getState) => {
    let obj = {};
    obj["type"] = _actions_types__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_OPEN"];
    if (text && text != "") obj["payload"] = {
      text: text
    };else obj["payload"] = {
      text: getState().utilsinfo.msg
    };
    if (obj["payload"].text != "") dispatch(obj);
  };
};
const message_close = () => {
  return (dispatch, getState) => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_CLOSE"]
    });
  };
};
const set_error = text => {
  return (dispatch, getState) => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_ERROR"],
      payload: {
        text: text
      }
    });
  };
};
const error_open = obj => {
  return (dispatch, getState) => {
    let objs = {};
    objs["type"] = _actions_types__WEBPACK_IMPORTED_MODULE_0__["ERROR_OPEN"];
    if (obj && typeof obj === "object") objs["payload"] = {
      obj: obj
    };else objs["payload"] = {
      obj: getState().utilsinfo.errorObj
    };
    if (objs["payload"].text != "") dispatch(objs);
  };
};
const error_close = () => {
  return (dispatch, getState) => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["ERROR_CLOSE"]
    });
  };
};
const set_whether = text => {
  return (dispatch, getState) => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_WHETHER"],
      payload: {
        text: text
      }
    });
  };
};
const whether_result = result => {
  return (dispatch, getState) => {
    dispatch({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["WHETHER_RESULT"],
      payload: {
        result: {
          value: result ? result.value : null,
          state: result ? result.state : null
        }
      }
    });
  };
};
const whether_open = obj => {
  return (dispatch, getState) => {
    let objs = {};
    objs["type"] = _actions_types__WEBPACK_IMPORTED_MODULE_0__["WHETHER_OPEN"];
    if (obj && typeof obj === "object") objs["payload"] = {
      obj: obj
    };else objs["payload"] = {
      obj: getState().utilsinfo.whetherObj
    };
    if (objs["payload"].text != "") dispatch(objs);
  };
};
const whether_close = result => {
  return (dispatch, getState) => {
    let obj = {
      type: _actions_types__WEBPACK_IMPORTED_MODULE_0__["WHETHER_CLOSE"]
    };
    dispatch(obj);
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_MESSAGE"]:
      return _objectSpread({}, state, {
        msg: action.payload ? action.payload.text : state.msg
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_OPEN"]:
      return _objectSpread({}, state, {
        msg: action.payload ? action.payload.text : state.msg,
        open: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_CLOSE"]:
      return _objectSpread({}, state, {
        msg: "",
        open: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_ERROR"]:
      return _objectSpread({}, state, {
        errorObj: action.payload ? action.payload.obj : state.errorObj
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ERROR_OPEN"]:
      return _objectSpread({}, state, {
        errorObj: action.payload ? action.payload.obj : state.errorObj,
        is_error: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ERROR_CLOSE"]:
      return _objectSpread({}, state, {
        errorObj: {
          code: null,
          ok: null,
          cancel: null,
          msg: ""
        },
        is_error: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_WHETHER"]:
      return _objectSpread({}, state, {
        whetherObj: action.payload ? action.payload.obj : state.whetherObj
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["WHETHER_OPEN"]:
      return _objectSpread({}, state, {
        whetherObj: action.payload ? action.payload.obj : state.whetherObj,
        is_whether: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["WHETHER_CLOSE"]:
      return _objectSpread({}, state, {
        whetherObj: {
          code: null,
          ok: null,
          cancel: null,
          msg: ""
        },
        is_whether: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["WHETHER_RESULT"]:
      return _objectSpread({}, state, {
        whetherResult: action.payload.result
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOADING_OPEN"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOADING_CLOSE"]:
      return _objectSpread({}, state, {
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_COOKIE"]:
      return _objectSpread({}, state, {
        cookies: _objectSpread({}, state.cookies, {
          [action.payload.name]: action.payload.cookie || {
            name: action.payload.name,
            data: action.payload.data
          }
        })
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ADD_COOKIE"]:
      return _objectSpread({}, state, {
        cookies: state.cookies.map(x => {
          if (x.name !== action.payload.cookie.name) return x;
          return _objectSpread({}, x, {
            data: [...x.data, action.payload.data]
          });
        })
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SUB_COOKIE"]:
      return _objectSpread({}, state, {
        cookies: state.cookies.map(x => {
          if (x.name !== action.payload.cookie.name) return x;
          return _objectSpread({}, x, {
            data: [...x.data.filter(x => x !== action.payload.data)]
          });
        })
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["RMV_COOKIE"]:
      return _objectSpread({}, state, {
        cookies: state.cookies.filter(x => x.name !== (action.payload.name || action.payload.cookie.name))
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_COOKIE_ALL"]:
      return _objectSpread({}, state, {
        cookies: _objectSpread({}, state.cookies, {}, action.payload.cookies)
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./stores.js":
/*!*******************!*\
  !*** ./stores.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/index */ "./reducers/index.js");



const finalCreateStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"]);
/* harmony default export */ __webpack_exports__["default"] = ((initialState, options) => {
  return finalCreateStore(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);
});

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  // overrides: {
  //     MuiButton: {}
  // },
  typography: {
    fontFamily: [// "-apple-system",
    // "BlinkMacSystemFont",
    // '"Segoe UI"',
    // "Roboto",
    // '"Helvetica Neue"',
    // "Arial",
    // "sans-serif",
    // '"Apple Color Emoji"',
    // '"Segoe UI Emoji"',
    // '"Segoe UI Symbol"',
    // "SpoqaHanSans-Regular",
    // "NanumSquareOTF_acR",
    "NanumSquare"].join(",")
  }
}));

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

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

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map