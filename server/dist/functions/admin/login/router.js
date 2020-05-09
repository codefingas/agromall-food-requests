"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var adminRoute = function adminRoute(_ref) {
  var req = _ref.req,
      res = _ref.res,
      Orm = _ref.Orm;
  var Methods = new Orm('admin');
  var router = (0, _express.Router)();
  router.post("/", function (req, res) {
    _controller["default"].login(req, res, Methods);
  });
  return router;
};

var _default = adminRoute;
exports["default"] = _default;