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
      return courseZip.getEntries().filter(courseFileScanner._isCourseFile);
    },

    _isCourseFile: (file) => {
      return file.entryName.match(/^(?=.*\bcsfiles\/home_dir\b)(?!.*\b.xml\b).*$/ig);
    },

    getCourseFileIds: () => {
      return courseFileScanner.getCourseFiles().map(courseFileScanner._getCourseFileId);
    },

    _getCourseFileId: (file) => {
      let fileName = file.entryName;
      let startIndex = fileName.lastIndexOf('xid-') + 4;
      let endIndex = fileName.indexOf('_', startIndex);
      return fileName.substring(startIndex, endIndex);
    }
  };

  return courseFileScanner;
}
