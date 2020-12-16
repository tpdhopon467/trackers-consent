"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _routes = _interopRequireDefault(require("./constants/routes"));

var _Theme = _interopRequireDefault(require("./theme/Theme"));

var _HomeScreen = _interopRequireDefault(require("./containers/HomeScreen"));

require("./i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return /*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider, {
    theme: _Theme["default"]
  }, /*#__PURE__*/_react["default"].createElement(_CssBaseline["default"], null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: _routes["default"].Home,
    component: _HomeScreen["default"]
  }))));
}

var _default = App;
exports["default"] = _default;