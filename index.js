"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.navigate = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ai = require("react-icons/ai");

var _fi = require("react-icons/fi");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 60px;\n  align-items: center;\n  @media (max-width: 813px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  width: 100%;\n  margin: 0;\n  min-height: 60px;\n  text-align: left;\n  color: white;\n  background-color: black;\n  position: ", ";\n  z-index: 2;\n  overflow: hidden;\n  @media (max-width: 813px) {\n    transition: all 1s;\n    height: ", "px;\n    text-align: center;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 60px;\n  width: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background-color: transparent;\n  color: red;\n  padding: 15px 10px;\n  -webkit-animation: ", " 0.9s ease-in-out;\n  animation: ", " 0.9s ease-in-out;\n  @media (min-width: 813px) {\n    display: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background-color: transparent;\n  padding: 15px 10px;\n  -webkit-animation: ", " 0.9s ease-in-out;\n  animation: ", " 0.9s ease-in-out;\n  @media (min-width: 813px) {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MENU_HEIGHT = 50; // ALTURA DEL MENU PARA DESCONTARLA DEL COMPONENTE

var navigate = function navigate(id, duration) {
  var menuHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MENU_HEIGHT;
  var component = document.getElementById(id);

  if (component && duration > 0) {
    var positionY = component.offsetTop - menuHeight;
    if (document.scrollingElement.scrollTop === positionY) return;
    var totalScrollDistance = Math.abs(document.scrollingElement.scrollTop - positionY);
    var scrollY = document.scrollingElement.scrollTop,
        oldTimestamp = null;

    var stepMore = function stepMore(newTimestamp) {
      if (oldTimestamp !== null) {
        scrollY += totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
        if (scrollY >= positionY) return document.scrollingElement.scrollTop = positionY;
        document.scrollingElement.scrollTop = scrollY;
      }

      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(stepMore);
    };

    var stepLess = function stepLess(newTimestamp) {
      if (oldTimestamp !== null) {
        scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
        if (scrollY <= positionY) return document.scrollingElement.scrollTop = positionY;
        document.scrollingElement.scrollTop = scrollY;
      }

      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(stepLess);
    };

    var step = function step(newTimestamp) {
      if (scrollY < positionY) stepMore(newTimestamp);else stepLess(newTimestamp);
    };

    window.requestAnimationFrame(step);
  }
};

exports.navigate = navigate;

var MenuContainer = function MenuContainer(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openmenu = _useState2[0],
      setOpenmenu = _useState2[1];

  var handleMenu = function handleMenu(e) {
    setOpenmenu(!openmenu);
    e.stopPropagation();
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Container, {
    visible: openmenu,
    count: _react["default"].Children.count(children)
  }, openmenu ? /*#__PURE__*/_react["default"].createElement(CloseMenuIcon, {
    size: 30,
    onClick: handleMenu
  }) : /*#__PURE__*/_react["default"].createElement(MenuIcon, {
    size: 30,
    onClick: handleMenu
  }), /*#__PURE__*/_react["default"].createElement(Content, null, children)), /*#__PURE__*/_react["default"].createElement(Spacing, null));
};

var rotate = (0, _styledComponents.keyframes)(_templateObject());
var rotateClose = (0, _styledComponents.keyframes)(_templateObject2());
var MenuIcon = (0, _styledComponents["default"])(_fi.FiMenu)(_templateObject3(), rotate, rotate);
var CloseMenuIcon = (0, _styledComponents["default"])(_ai.AiOutlineCloseCircle)(_templateObject4(), rotateClose, rotateClose);

var Spacing = _styledComponents["default"].div(_templateObject5());

var Container = _styledComponents["default"].nav(_templateObject6(), function (props) {
  return props.isContent ? "initial" : "fixed";
}, function (_ref2) {
  var visible = _ref2.visible,
      count = _ref2.count;
  return visible ? count * 65 : 60;
});

var Content = _styledComponents["default"].div(_templateObject7());

var _default = MenuContainer;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var MENU_HEIGHT = 50; // ALTURA DEL MENU PARA DESCONTARLA DEL COMPONENTE

var _default = function _default(id, duration) {
  var menuHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MENU_HEIGHT;
  var component = document.getElementById(id);

  if (component && duration > 0) {
    var positionY = component.offsetTop - menuHeight;
    if (document.scrollingElement.scrollTop === positionY) return;
    var totalScrollDistance = Math.abs(document.scrollingElement.scrollTop - positionY);
    var scrollY = document.scrollingElement.scrollTop,
        oldTimestamp = null;

    var stepMore = function stepMore(newTimestamp) {
      if (oldTimestamp !== null) {
        scrollY += totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
        if (scrollY >= positionY) return document.scrollingElement.scrollTop = positionY;
        document.scrollingElement.scrollTop = scrollY;
      }

      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(stepMore);
    };

    var stepLess = function stepLess(newTimestamp) {
      if (oldTimestamp !== null) {
        scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
        if (scrollY <= positionY) return document.scrollingElement.scrollTop = positionY;
        document.scrollingElement.scrollTop = scrollY;
      }

      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(stepLess);
    };

    var step = function step(newTimestamp) {
      if (scrollY < positionY) stepMore(newTimestamp);else stepLess(newTimestamp);
    };

    window.requestAnimationFrame(step);
  }
};

exports["default"] = _default;
