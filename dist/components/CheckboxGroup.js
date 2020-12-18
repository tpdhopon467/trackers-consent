"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CheckboxGroup;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactI18next = require("react-i18next");

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _mockdata = require("../constants/mockdata");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    checkbox: {
      marginLeft: theme.spacing(3.5),
      marginTop: theme.spacing(-1)
    },
    hidden: {
      visibility: 'hidden'
    }
  };
});

function CheckboxGroup(props) {
  var classes = useStyles(props);

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)({
    personalization: false,
    analytical: false,
    marketing: false,
    socialMedia: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = (0, _react.useState)(_mockdata.checkBoxs),
      _useState4 = _slicedToArray(_useState3, 2),
      checkboxList = _useState4[0],
      setCheckboxList = _useState4[1];

  var handleCheckbox = props.handleCheckbox,
      trackers = props.trackers;
  var personalization = state.personalization,
      analytical = state.analytical,
      marketing = state.marketing,
      socialMedia = state.socialMedia;

  var handleChange = function handleChange(event) {
    setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, event.target.name, event.target.checked)));
  };

  (0, _react.useEffect)(function () {
    handleCheckbox(state);
  }, [state]);
  (0, _react.useEffect)(function () {
    var filterArr = [_mockdata.checkBoxs[0]];

    var _loop = function _loop(i) {
      var filter = void 0;

      if (Object.values(trackers)[i]) {
        filter = _mockdata.checkBoxs.filter(function (item) {
          return item.name === Object.keys(trackers)[i];
        });
        filterArr.push.apply(filterArr, _toConsumableArray(filter));
      }
    };

    for (var i = 0; i < Object.keys(trackers).length; i++) {
      _loop(i);
    }

    setCheckboxList(filterArr);
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_FormGroup["default"], null, checkboxList.map(function (item) {
    var checked = item.name === 'necessary' ? true : item.name === 'personalization' ? personalization : item.name === 'analytical' ? analytical : item.name === 'marketing' ? marketing : socialMedia;
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.name
    }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
      control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        checked: checked,
        onChange: handleChange,
        name: item.name,
        className: item.name === 'necessary' ? classes.hidden : ''
      }),
      label: t(item.title)
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.checkbox
    }, t(item.title_con)));
  }));
}

CheckboxGroup.defaultProps = {
  trackers: {
    personalization: true,
    analytical: true,
    marketing: true,
    socialMedia: true
  }
};
CheckboxGroup.propTypes = {
  handleCheckbox: _propTypes["default"].func.isRequired,
  trackers: _propTypes["default"].shape({
    personalization: _propTypes["default"].bool,
    analytical: _propTypes["default"].bool,
    marketing: _propTypes["default"].bool,
    socialMedia: _propTypes["default"].bool
  })
};
