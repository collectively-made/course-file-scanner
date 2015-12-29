'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (filePath) {
  var zip = new _admZip2.default(filePath);

  return zip;
};

var _admZip = require('adm-zip');

var _admZip2 = _interopRequireDefault(_admZip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }