import Zip from 'adm-zip';

/**
 * @param {Type}
 * @return {Type}
 */
export default function (filePath) {
  let courseZip = new Zip(filePath);

  let courseFileScanner = {
    getZipObject: () => {
      return courseZip;
    },

    getCourseFiles: () => {
      return courseZip.getEntries().filter(courseFileScanner._isCourseFile).map(courseFileScanner._getCourseFileId);
    },

    _isCourseFile: (file) => {
      return file.entryName.match(/^(?=.*\bcsfiles\/home_dir\b)(?!.*\b.xml\b).*$/ig);
    },

    _getCourseFileId: (file) => {
      let fileName = file.entryName;
      let startIndex = fileName.lastIndexOf('xid-') + 4;
      let endIndex = fileName.indexOf('_', startIndex);
      file.courseFileId = fileName.substring(startIndex, endIndex);

      return file;
    },

    getDatFiles: () => {
      return courseZip.getEntries().filter(courseFileScanner._isDatFile);
    },

    _isDatFile: (file) => {
      return file.entryName.match(/^(?=.*res)(?=.*\b\.dat\b).*$/g);
    }
  };

  return courseFileScanner;
}
