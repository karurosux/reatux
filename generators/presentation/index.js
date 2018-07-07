'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const changeCase = require('change-case');
const folderScanner = require('folder-scanner');
const path = require('path');

module.exports = class extends Generator {
  constructor(...args) {
    super(...args);
    this._setFlags();
    this.props = {};
  }

  prompting() {
    if (this.options.name) {
      if (this.options.name === '') {
        throw new Error('Name is required.');
      }
      this.props.name = this.options.name;
    } else {
      return this.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Name of the presentation component?',
          validate(name) {
            if (!name || name === '') {
              return 'Name is required.';
            }

            return true;
          }
        }
      ]).then(props => {
        this.props = props;
      });
    }
  }

  configurating() {
    this.props.name = this.props.name.replace(/\\/g, '/');

    const splittedValue = this.props.name.split('/');
    const name = splittedValue[splittedValue.length - 1];
    this.props.paramCaseName = changeCase.paramCase(name);
    this.props.titleCaseName = changeCase.titleCase(name);
    this.props.pascalCaseName = changeCase.pascalCase(name);
    this.props.route = this.props.name.replace(name, '');
  }

  writing() {
    const templatePath = this.templatePath('template.jade');
    const styleTemplatePath = this.templatePath('styles-template.jade');
    this.fs.copyTpl(
      templatePath,
      this.destinationPath(
        'src',
        'presentation',
        ...this.props.route.split('/'),
        this.props.paramCaseName,
        `${this.props.paramCaseName}.presentation.js`
      ),
      this.props
    );
    this.fs.copyTpl(
      styleTemplatePath,
      this.destinationPath(
        'src',
        'presentation',
        ...this.props.route.split('/'),
        this.props.paramCaseName,
        `${this.props.paramCaseName}.presentation.scss`
      ),
      this.props
    );
  }

  _setFlags() {
    this.option('name', {
      type: String
    });
  }
};
