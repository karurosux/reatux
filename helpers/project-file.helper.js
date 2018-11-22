const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

module.exports = {
  getProjectConfig(src, name) {
    const config = fse.readJSONSync(path.join(src, name || '.reatux.json'));

    if (!config) {
      throw Error('No .reatux project file found.');
    }

    return config;
  },
  isProjectFolder(src) {
    try {
      this.getProjectConfig(src);
      return true;
    } catch (error) {
      return false;
    }
  },
  ifProjectFolder() {
    return new Promise(resolve => {
      if (this.isProjectFolder(process.cwd())) {
        resolve();
      } else {
        console.log(chalk.red('Not a reatux folder.'));
      }
    });
  },
  ifNotProjectFolder() {
    return new Promise(resolve => {
      if (this.isProjectFolder(process.cwd())) {
        console.log(chalk.red('This is a reatux project folder already.'));
      } else {
        resolve();
      }
    });
  }
};
