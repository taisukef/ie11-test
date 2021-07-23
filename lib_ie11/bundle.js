"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

require("core-js/stable");

var Test = function Test() {
  (0, _classCallCheck2.default)(this, Test);
  console.log("Test");
};

var sleep = function sleep(msec) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, msec);
  });
};

var main = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var a, _i, _a, n, b, n1;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("sleep 1sec");
            _context.next = 3;
            return sleep(1000);

          case 3:
            console.log([1, 2, 3].map(function (n) {
              return n + 1;
            }).join(","));
            new Test();
            a = ["a", "b", "c"];

            for (_i = 0, _a = a; _i < _a.length; _i++) {
              n = _a[_i];
              console.log(n);
            }

            b = {
              a: 123,
              b: 456
            };

            for (n1 in b) {
              console.log(n1, b[n1]);
            }

            console.log("abc".startsWith("ab"));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

main();
var set = new Set();
set.add("a");
console.log(set);