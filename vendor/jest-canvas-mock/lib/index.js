"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ver = void 0;

var _window = _interopRequireDefault(require("./window"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hustcc 17/12/25.
 * Contract: i@hust.cc
 */
// mock global window
// TODO: Force coverage to ignore this branch
if (typeof window !== 'undefined') {
  // global.window = (0, _window.default)(window);
  //console.log(window.HTMLCanvasElement.prototype.getContext)
  Object.defineProperty(global, "window", (0, _window.default)(window));
  //console.log(window.HTMLCanvasElement.prototype.getContext)
}

const ver = "2.3.1";
exports.ver = ver;