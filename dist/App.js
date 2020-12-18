"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _reactI18next = require("react-i18next");

var _reactCookie = require("react-cookie");

var _BottomDialog = _interopRequireDefault(require("./components/BottomDialog"));

var _Theme = _interopRequireDefault(require("./theme/Theme"));

require("./i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }
  };
});

function App(props) {
  var classes = useStyles();

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      initial = _useState2[0],
      setInitial = _useState2[1];

  var _useCookies = (0, _reactCookie.useCookies)(['personalization', 'analytical', 'marketing', 'socialMedia']),
      _useCookies2 = _slicedToArray(_useCookies, 2),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1];

  var isCookieSet = Object.keys(cookies).length > 0;
  var language = props.language,
      trackers = props.trackers;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var settingCookies = function settingCookies() {
    setInitial(false);
  };

  (0, _react.useEffect)(function () {
    localStorage.setItem('language', language);
  }, []);

  var handleSelectedCookie = function handleSelectedCookie(state) {
    if (state.personalization) {
      setCookie('personalization', true);
    } else {
      setCookie('personalization', false);
    }

    if (state.analytical) {
      setCookie('analytical', true);
    } else {
      setCookie('analytical', false);
    }

    if (state.advertising) {
      setCookie('marketing', true);
    } else {
      setCookie('marketing', false);
    }

    if (state.social) {
      setCookie('socialMedia', true);
    } else {
      setCookie('socialMedia', false);
    }
  };

  var handleAllCookie = function handleAllCookie() {
    setCookie('personalization', true);
    setCookie('analytical', true);
    setCookie('marketing', true);
    setCookie('social', true);
  };

  var handleOnlyNecessary = function handleOnlyNecessary() {
    setCookie('personalization', false);
    setCookie('analytical', false);
    setCookie('marketing', false);
    setCookie('socialMedia', false);
  };

  return /*#__PURE__*/_react["default"].createElement(_reactCookie.CookiesProvider, null, /*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider, {
    theme: _Theme["default"]
  }, /*#__PURE__*/_react["default"].createElement(_CssBaseline["default"], null), !isCookieSet && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, initial ? /*#__PURE__*/_react["default"].createElement(_BottomDialog["default"], {
    settingCookies: settingCookies,
    leftButton: t('cookies_settings'),
    rightButton: t('accept_all'),
    centerButton: t('accept_only_necessary'),
    height: "25vh",
    initial: initial,
    handleCookie: handleAllCookie,
    handleOnlyNecessary: handleOnlyNecessary,
    trackers: trackers
  }) : /*#__PURE__*/_react["default"].createElement(_BottomDialog["default"], {
    settingCookies: handleSelectedCookie,
    leftButton: t('accept_selected'),
    rightButton: t('accept_all'),
    centerButton: t('accept_only_necessary'),
    height: "60vh",
    initial: initial,
    handleCookie: handleAllCookie,
    handleOnlyNecessary: handleOnlyNecessary,
    trackers: trackers
  }))));
}

App.defaultProps = {
  language: 'en',
  trackers: {
    personalization: true,
    analytical: true,
    marketing: true,
    socialMedia: true
  }
};
App.propTypes = {
  language: _propTypes["default"].string,
  trackers: _propTypes["default"].shape({
    personalization: _propTypes["default"].bool,
    analytical: _propTypes["default"].bool,
    marketing: _propTypes["default"].bool,
    socialMedia: _propTypes["default"].bool
  })
};
var _default = App;
exports["default"] = _default;