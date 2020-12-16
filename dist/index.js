"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactCookie = require("react-cookie");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootDiv = document.getElementById('trackersConsent');
(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_reactCookie.CookiesProvider, null, /*#__PURE__*/_react["default"].createElement(_App["default"], null)), rootDiv);