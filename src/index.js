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
    }
  };

  return courseFileScanner;
}
