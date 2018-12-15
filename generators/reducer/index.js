'use strict';
const Generator = require('yeoman-generator');
const changeCase = require('change-case');
const { get } = require('lodash');
const { projectFileHelper } = require('../../helpers');

module.exports = class extends Generator {
  constructor(...args) {
    super(...args);
    this._setFlags();
    this.props = {};
  }

  prompting() {
    this.projectConfig = projectFileHelper.getProjectConfig(
      this.destinationPath()
    );

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
          message: 'Name of the reducer?',
          validate(name) {
            if (!name || name === '') {
              return 'Name is required.';
            }

            return true;
          }
        }
      ]).then((props) => {
        this.props = props;
      });
    }
  }

  configurating() {
    const fileName = this.props.name.replace(/\\/g, '/');
    const splittedValue = fileName.split('/');
    const name = splittedValue[splittedValue.length - 1];
    this.props = {
      ...this.props,
      name: fileName,
      paramCaseName: changeCase.paramCase(name),
      route: this.props.name.replace(name, '')
    };
  }

  writing() {
    const creationFolder = get(
      this.projectConfig,
      'folders.reducers',
      './src/reducers'
    );
    const templatePath = this.templatePath('reducer.ejs');

    this.fs.copyTpl(
      templatePath,
      this.destinationPath(
        creationFolder,
        ...this.props.route.split('/'),
        `${this.props.paramCaseName}.reducer.js`
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
