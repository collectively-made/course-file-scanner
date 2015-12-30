'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (filePath) {
  var courseZip = new _admZip2.default(filePath);

  var courseFileScanner = {
    getZipObject: function getZipObject() {
      return courseZip;
    },

    getCourseFiles: function getCourseFiles() {
      return courseZip.getEntries().filter(courseFileScanner._isCourseFile);
    },

    _isCourseFile: function _isCourseFile(file) {
      return file.entryName.match(/^(?=.*\bcsfiles\/home_dir\b)(?!.*\b.xml\b).*$/ig);
    },

    getCourseFileIds: function getCourseFileIds() {
      return courseFileScanner.getCourseFiles().map(courseFileScanner._getCourseFileId);
    },

    _getCourseFileId: function _getCourseFileId(file) {
      var fileName = file.entryName;
      var startIndex = fileName.lastIndexOf('xid-') + 4;
      var endIndex = fileName.indexOf('_', startIndex);
      return fileName.substring(startIndex, endIndex);
    }
  };

  return courseFileScanner;
};

var _admZip = require('adm-zip');

var _admZip2 = _interopRequireDefault(_admZip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }