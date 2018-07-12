'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const changeCase = require('change-case');
const folderScanner = require('folder-scanner');
const path = require('path');
let prompts = require('./prompts');

module.exports = class extends Generator {
  constructor(...args) {
    super(...args);
    this._configurateOptions();
    this._declareVariables();
  }

  prompting() {
    if (this.options.appName) {
      prompts = prompts.splice(1, prompts.length - 1);
    }

    return this.prompt(prompts).then(props => {
      this.props = props;

      if (this.options.appName) {
        this.props.appName = this.options.appName;
      }
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

  _declareVariables() {
    this.props = {};
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

  _configurateOptions() {
    this.option('appName', { type: String });
  }
};
