"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable promise/catch-or-return */
var controller = function controller() {
  return {
    login: function login(req, res, _ref) {
      var signIn = _ref.signIn;
      var _req$body = req.body,
          email = _req$body.email,
          password = _req$body.password;
      return signIn(email).then(function (user) {
        return res.status(user.status).json(user.data);
      })["catch"](function (err) {
        return err;
      });
    }
  };
};

var _default = controller();

exports["default"] = _default;