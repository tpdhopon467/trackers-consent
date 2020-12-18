"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BottomDialog;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _reactI18next = require("react-i18next");

var _CheckboxGroup = _interopRequireDefault(require("./CheckboxGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    content: {
      fontSize: 16
    },
    checkbox: {
      marginLeft: theme.spacing(3.5),
      marginTop: theme.spacing(-1)
    },
    link: {
      marginLeft: theme.spacing(1)
    },
    '@global': {
      '.MuiDialog-paper': {
        height: function height(props) {
          return props.height;
        }
      }
    }
  };
});

function BottomDialog(props) {
  var classes = useStyles(props);

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedState = _useState4[0],
      setSelectedState = _useState4[1];

  var fullWidth = true;
  var maxWidth = 'xl';
  var url = 'https://www.pantone.com/';
  var settingCookies = props.settingCookies,
      leftButton = props.leftButton,
      rightButton = props.rightButton,
      centerButton = props.centerButton,
      initial = props.initial,
      handleCookie = props.handleCookie,
      handleOnlyNecessary = props.handleOnlyNecessary,
      trackers = props.trackers;

  var handleClose = function handleClose() {
    handleCookie();
    setOpen(false);
  };

  var handleSetting = function handleSetting() {
    settingCookies(selectedState);

    if (!initial) {
      setOpen(false);
    }
  };

  var handleCheckbox = function handleCheckbox(state) {
    setSelectedState(state);
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    fullWidth: fullWidth,
    maxWidth: maxWidth,
    open: open,
    "aria-labelledby": "max-width-dialog-title"
  }, /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], {
    className: classes.content
  }, t('cookies_description'), /*#__PURE__*/_react["default"].createElement("br", null), t('cookies_moreinfo'), /*#__PURE__*/_react["default"].createElement("a", {
    href: url,
    className: classes.link
  }, t('privacy_policy')), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), t('by_continue'), /*#__PURE__*/_react["default"].createElement("a", {
    href: url,
    className: classes.link
  }, t('terms_use')), !initial && /*#__PURE__*/_react["default"].createElement(_CheckboxGroup["default"], {
    handleCheckbox: handleCheckbox,
    trackers: trackers
  })), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    onClick: handleSetting
  }, leftButton), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    onClick: handleOnlyNecessary
  }, centerButton), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    onClick: handleClose
  }, rightButton))));
}

BottomDialog.defaultProps = {
  leftButton: '',
  rightButton: '',
  centerButton: '',
  initial: false,
  trackers: {
    personalization: true,
    analytical: true,
    marketing: true,
    socialMedia: true
  }
};
BottomDialog.propTypes = {
  settingCookies: _propTypes["default"].func.isRequired,
  handleCookie: _propTypes["default"].func.isRequired,
  handleOnlyNecessary: _propTypes["default"].func.isRequired,
  leftButton: _propTypes["default"].string,
  rightButton: _propTypes["default"].string,
  centerButton: _propTypes["default"].string,
  initial: _propTypes["default"].bool,
  trackers: _propTypes["default"].shape({
    personalization: _propTypes["default"].bool,
    analytical: _propTypes["default"].bool,
    marketing: _propTypes["default"].bool,
    socialMedia: _propTypes["default"].bool
  })
};