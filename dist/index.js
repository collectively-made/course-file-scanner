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
      return courseZip.getEntries().filter(courseFileScanner._isCourseFile).map(courseFileScanner._getCourseFileId);
    },

    _isCourseFile: function _isCourseFile(file) {
      return file.entryName.match(/^(?=.*\bcsfiles\/home_dir\b)(?!.*\b.xml\b).*$/ig);
    },

    _getCourseFileId: function _getCourseFileId(file) {
      var fileName = file.entryName;
      var startIndex = fileName.lastIndexOf('xid-') + 4;
      var endIndex = fileName.indexOf('_', startIndex);
      file.courseFileId = fileName.substring(startIndex, endIndex);

      return file;
    },

    getDatFiles: function getDatFiles() {
      return courseZip.getEntries().filter(courseFileScanner._isDatFile);
    },

    _isDatFile: function _isDatFile(file) {
      return file.entryName.match(/^(?=.*res)(?=.*\b\.dat\b).*$/g);
    }
  };

  return courseFileScanner;
};

var _admZip = require('adm-zip');

var _admZip2 = _interopRequireDefault(_admZip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }