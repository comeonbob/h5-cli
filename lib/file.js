/**
 * @Desc: generate project
 * @Date: 2018-06-13
 */

const path = require('path');
const fse = require('fs-extra');
const ora = require('ora');
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
  const spinner = ora('generate project start');
  try {
    spinner.start('download ...');
    await download.download(projectName);
    spinner.succeed('download template success');
  
    // src path
    let srcPath = path.resolve(__dirname, '../template')
    let dstPath = imp.getDstPath(projectName);
    // copy folder
    await fse.copy(srcPath, dstPath);

    spinner.succeed('generate project success');
    spinner.info(`project path: ${dstPath}`)

  } catch (err) {
    spinner.fail('generate project failed');
    if (err.statusCode === 404) {
      spinner.warn(`h5 template not found, please check the support template in README.md`)
    } else {
      spinner.warn(`download error, ${err.message}`);
    }
  }
};

module.exports = imp;