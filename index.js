'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var ai = require('react-icons/ai');
var fi = require('react-icons/fi');

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 60px;\n  align-items: center;\n  @media (max-width: 813px) {\n    transition: all 1s;\n    height: ", "px;\n    overflow: scroll;\n    flex-direction: column;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  width: 100%;\n  margin: 0;\n  min-height: 60px;\n  text-align: left;\n  color: white;\n  background-color: ", ";\n  position: ", ";\n  z-index: 2;\n  overflow: hidden;\n  @media (max-width: 813px) {\n    transition: all 1s;\n    text-align: center;\n  }\n"]);

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

var MenuContainer = function MenuContainer(_ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "black" : _ref$color;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openmenu = _useState2[0],
      setOpenmenu = _useState2[1];

  var handleMenu = function handleMenu(e) {
    setOpenmenu(!openmenu);
    e.stopPropagation();
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Container, {
    color: color
  }, openmenu ? /*#__PURE__*/React__default.createElement(CloseMenuIcon, {
    size: 30,
    onClick: handleMenu
  }) : /*#__PURE__*/React__default.createElement(MenuIcon, {
    size: 30,
    onClick: handleMenu
  }), /*#__PURE__*/React__default.createElement(Content, {
    visible: openmenu,
    count: React__default.Children.count(children)
  }, children)), /*#__PURE__*/React__default.createElement(Spacing, null));
};

var rotate = styled.keyframes(_templateObject());
var rotateClose = styled.keyframes(_templateObject2());
var MenuIcon = styled__default(fi.FiMenu)(_templateObject3(), rotate, rotate);
var CloseMenuIcon = styled__default(ai.AiOutlineCloseCircle)(_templateObject4(), rotateClose, rotateClose);
var Spacing = styled__default.div(_templateObject5());
var Container = styled__default.nav(_templateObject6(), function (_ref2) {
  var color = _ref2.color;
  return color;
}, function (props) {
  return props.isContent ? "initial" : "fixed";
});

var getSize = function getSize(size) {
  return size > 300 ? 300 : size;
};

var Content = styled__default.div(_templateObject7(), function (_ref3) {
  var visible = _ref3.visible,
      count = _ref3.count;
  return visible ? getSize(count * 60 + 60) : 0;
});

var MENU_HEIGHT = 50; // ALTURA DEL MENU PARA DESCONTARLA DEL COMPONENTE

var navigate = (function (id, duration) {
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
});

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  height: 60px;\n  margin: 5px 20px;\n  padding: 10px;\n  font-weight: normal;\n  justify-content: center;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var MenuItem = styled__default.h3(_templateObject$1());

exports.MenuContainer = MenuContainer;
exports.MenuItem = MenuItem;
exports.navigate = navigate;
