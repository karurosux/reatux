'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const changeCase = require('change-case');
const folderScanner = require('folder-scanner');
const path = require('path');
const prompts = require('./prompts');

module.exports = class extends Generator {
  prompting() {
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  configurating() {
    this._setCalculatedProperties();
  }

  writing() {
    const templateFolderPath = this.templatePath();
    const filePaths = folderScanner.scanPath(templateFolderPath);
    this._copyFileList(filePaths, templateFolderPath);
  }

  install() {
    switch (this.props.packageManager) {
      case 'npm':
        this.npmInstall();
        break;
      case 'yarn':
        this.yarnInstall();
        break;
    }
  }

  _setCalculatedProperties() {
    this.props.paramCaseAppName = changeCase.paramCase(this.props.appName);
  }

  _copyFileList(filePaths, templateFolderPath) {
    filePaths.forEach(filePath => {
      this._copyFile(templateFolderPath, filePath);
    });
  }

  _copyFile(templateFolderPath, filePath) {
    const relativeFilePath = path.relative(templateFolderPath, filePath);
    this.fs.copyTpl(
      filePath,
      this.destinationPath(relativeFilePath.replace('.jade', '')),
      this.props
    );
  }
};
