/**
 * @Desc: download h5 template from github
 * @Date: 2018-06-22
 */

const path = require('path');
const dl = require('download-git-repo');

const imp = {};
// base h5-template
const baseTempalte = `comeonbob/h5-template-`;

imp.download = name => {
  return new Promise((resolve, reject) => {
    // ht-tempalte project url
    let url = getUrl(name);
    // download temp path
    let destination = path.resolve(__dirname, '../template');
    // use http download
    let option = { clone: false };
    // download
    dl(url, destination, option, err => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
};

/**
 * get github url
 */
function getUrl(name) {
  if (name.indexOf('/') > -1) {
    return name;
  }
  return baseTempalte+name;
}

module.exports = imp;