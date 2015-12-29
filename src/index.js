import Zip from 'adm-zip';

/**
 * @param {Type}
 * @return {Type}
 */
export default function (filePath) {
  let zip = new Zip(filePath);

  return zip;
}
