'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _mjmlCore = require('mjml-core');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reverse = require('lodash/reverse');

var _reverse2 = _interopRequireDefault(_reverse);

var _mjmlText = require('mjml-text');

var _mjmlText2 = _interopRequireDefault(_mjmlText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Tag Name
var tagName = 'mj-for';
// List of parent tags
var parentTag = ['mj-body', 'mj-container', 'mj-section', 'mj-column'];
// If false, the component can contain MJML; if true, it can contain only plain HTML
var endingTag = false;

var defaultMJMLDefinition = {
  attributes: {
    'each': [],
    'iterator': ''
  }
};

var MjFor = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {
  _inherits(MjFor, _Component);

  function MjFor() {
    _classCallCheck(this, MjFor);

    return _possibleConstructorReturn(this, (MjFor.__proto__ || Object.getPrototypeOf(MjFor)).apply(this, arguments));
  }

  _createClass(MjFor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          mjAttribute = _props.mjAttribute,
          mjContent = _props.mjContent;

      var eachStr = mjAttribute('each');
      var iterate = mjAttribute('iterator');
      var eachArr = eachStr.split(',');
      console.log(this.props.children.find(function (x) {
        return x.type = "mj-text";
      }));
      return _react2.default.createElement(
        'div',
        null,
        this.prop.children
      );
    }
  }]);

  return MjFor;
}(_react.Component)) || _class;

MjFor.tagName = tagName;
MjFor.parentTag = parentTag;
MjFor.endingTag = endingTag;
MjFor.defaultMJMLDefinition = defaultMJMLDefinition;

exports.default = MjFor;