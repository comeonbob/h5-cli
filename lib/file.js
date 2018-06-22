/**
 * @Desc: generate project
 * @Date: 2018-06-13
 */

const path = require('path');
const fse = require('fs-extra');
const download = require('./download');
const imp = {};

/**
 * get project path
 * @param {String} projectName
 * @return {String}
 */
imp.getDstPath = (projectName) => {
  if (!projectName) {
    projectName = 'demo-project';
  }
  projectName += '-project';
  return path.join(process.cwd(), projectName);
};

/**
 * generate project
 * @param {String} projectName
 */
imp.generate = async (projectName) => {
  try {
    await download.download(projectName);
    // src path
    let srcPath = path.resolve(__dirname, '../template')
    let dstPath = imp.getDstPath(projectName);
    // copy folder
    await fse.copy(srcPath, dstPath);
    console.log('generate project success');
    console.log(`project path: ${dstPath}`);

  } catch (err) {
    if (err.statusCode === 404) {
      console.log(`h5 template not found, please check the support template in README.md`);
    } else {
      console.log('download error,', err.message);
    }
  }
};

module.exports = imp;