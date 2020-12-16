"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _en = _interopRequireDefault(require("./en.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var translationsMap = {
  en: _en["default"]
};
Object.keys(translationsMap).forEach(function (key) {
  translationsMap[key] = {
    translation: translationsMap[key]
  };
});
var language = localStorage.getItem('language') || 'en';

_i18next["default"].use(_reactI18next.initReactI18next).init({
  resources: translationsMap,
  lng: language,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

var _default = _i18next["default"];
exports["default"] = _default;