"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxcad = _interopRequireDefault(require("jsxcad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Component = _jsxcad.default.createElement(_jsxcad.default.Fragment, null, _jsxcad.default.createElement(_jsxcad.Sphere, {
  r: 2,
  center: true
}));

var _default = _jsxcad.default.render(Component);

exports.default = _default;
module.exports = exports.default;