"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _brace = _interopRequireDefault(require("brace"));
var _reactAce = _interopRequireDefault(require("react-ace"));
var _reactFrameComponent = _interopRequireWildcard(require("react-frame-component"));
require("brace/mode/jsx");
require("brace/theme/monokai");
var _componentRenderer = _interopRequireDefault(require("./component-renderer"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
window.component = null;
var Wrapper = /*#__PURE__*/function (_React$Component) {
  function Wrapper(props) {
    var _this;
    _classCallCheck(this, Wrapper);
    _this = _callSuper(this, Wrapper, [props]);
    window.component = window.component || {};
    _this.iframeRef = /*#__PURE__*/_react["default"].createRef();
    _this.handleChange = _this.handleChange.bind(_this);
    _this.toggleEditor = _this.toggleEditor.bind(_this);
    var example = props.example;
    example = example || 'return (<div>Example</div>)';
    _this.state = {
      example: example,
      height: 200,
      showEditor: false
    };
    _this.executeScript(example);
    return _this;
  }
  _inherits(Wrapper, _React$Component);
  return _createClass(Wrapper, [{
    key: "executeScript",
    value: function executeScript(source) {
      var uniqId = this.props.uniqId;
      var script = document.createElement('script');
      var self = this;
      script.onload = script.onerror = function () {
        this.remove();
        self.setState(function (state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            component: window.component[uniqId] || ''
          });
        });
      };
      var wrapper = "window.component['".concat(uniqId, "'] = (() => {\n      ").concat(Object.keys(reactComponents).map(function (k) {
        return "const ".concat(k, " = reactComponents['").concat(k, "'];");
      }).join('\n'), "\n      try {\n        ").concat(source, "\n      } catch (error) {\n        console.log(error)\n      }\n    })()");
      try {
        var src = Babel.transform(wrapper, {
          presets: ['react', 'es2015']
        }).code;
        script.src = 'data:text/plain;base64,' + btoa(src);
      } catch (error) {
        console.log(error);
      }
      document.body.appendChild(script);
    }
  }, {
    key: "handleChange",
    value: function handleChange(code) {
      this.executeScript(code);
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          example: code
        });
      });
    }
  }, {
    key: "computeHeight",
    value: function computeHeight() {
      var height = this.state.height;
      var padding = 5; // buffer for any unstyled margins
      if (this.iframeRef.current && this.iframeRef.current.node.contentDocument && this.iframeRef.current.node.contentDocument.body.offsetHeight !== 0 && this.iframeRef.current.node.contentDocument.body.offsetHeight !== height - padding) {
        this.setState({
          height: this.iframeRef.current.node.contentDocument.body.offsetHeight + padding
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.computeHeight();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.heightInterval = setInterval(function () {
        _this2.computeHeight();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.heightInterval);
    }
  }, {
    key: "toggleEditor",
    value: function toggleEditor(event) {
      event.preventDefault();
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          showEditor: !state.showEditor
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state = this.state,
        component = _this$state.component,
        height = _this$state.height,
        showEditor = _this$state.showEditor;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactFrameComponent["default"], {
        className: "component-wrapper",
        ref: this.iframeRef,
        style: {
          width: '100%',
          height: height
        },
        onLoad: this.computeHeight()
      }, /*#__PURE__*/_react["default"].createElement("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "./build/entry.css"
      }), /*#__PURE__*/_react["default"].createElement(_reactFrameComponent.FrameContextConsumer, null, function (frameContext) {
        return /*#__PURE__*/_react["default"].createElement(_componentRenderer["default"], {
          frameContext: frameContext
        }, component);
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "bd__button"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "#",
        onClick: this.toggleEditor
      }, "Modify Example Code")), showEditor ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "field"
      }, /*#__PURE__*/_react["default"].createElement(_reactAce["default"], {
        style: {
          width: '100%',
          height: '200px',
          marginBottom: '20px'
        },
        value: this.state.example,
        mode: "jsx",
        theme: "monokai",
        onChange: function onChange(code) {
          return _this3.handleChange(code);
        },
        name: "editor-div",
        editorProps: {
          $useSoftTabs: true
        }
      })) : '');
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = function _default(props) {
  return /*#__PURE__*/_react["default"].createElement(Wrapper, props);
};