'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
);

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);

var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
);

var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inherits')
);

var _react = _interopRequireWildcard(require('react'));

require('./index.css');

var ImageProcessor =
  /*#__PURE__*/
  (function(_Component) {
    (0, _inherits2.default)(ImageProcessor, _Component);

    function ImageProcessor() {
      (0, _classCallCheck2.default)(this, ImageProcessor);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(ImageProcessor).apply(this, arguments)
      );
    }

    (0, _createClass2.default)(ImageProcessor, [
      {
        key: 'render',
        value: function render() {
          return _react.default.createElement('h1', null, '12345');
        },
      },
    ]);
    return ImageProcessor;
  })(_react.Component);

var _default = ImageProcessor;
exports.default = _default;
