"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var adminRoute = function adminRoute(req, res) {
  // console.log(arguments)
  var router = (0, _express.Router)();
  router.get("/", function (req, res) {
    _controller["default"].get(req, res);
  });
  return router;
};

var _default = adminRoute;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9mdW5jdGlvbnMvYWRtaW4vbG9naW4vcm91dGVyLmpzIl0sIm5hbWVzIjpbImFkbWluUm91dGUiLCJyZXEiLCJyZXMiLCJyb3V0ZXIiLCJnZXQiLCJjb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM3QjtBQUVGLE1BQU1DLE1BQU0sR0FBRyxzQkFBZjtBQUNBQSxFQUFBQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLFVBQUNILEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzVCRywyQkFBV0QsR0FBWCxDQUFlSCxHQUFmLEVBQW9CQyxHQUFwQjtBQUNELEdBRkQ7QUFJQSxTQUFPQyxNQUFQO0FBQ0QsQ0FURDs7ZUFXZUgsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbmNvbnN0IGFkbWluUm91dGUgPSAocmVxLCByZXMpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhhcmd1bWVudHMpXG5cbiAgY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG4gIHJvdXRlci5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnRyb2xsZXIuZ2V0KHJlcSwgcmVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvdXRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkbWluUm91dGU7XG4iXX0=