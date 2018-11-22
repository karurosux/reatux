const fse = require('fs-extra');
const path = require('path');

module.exports = {
  getProjectConfig(src, name) {
    const config = fse.readJSONSync(path.join(src, name || '.reatux.json'));

    if (!config) {
      throw Error('No .reatux file found.');
    }

    return config;
  }
};
