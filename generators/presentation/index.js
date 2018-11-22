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
					message: 'Name of the presentational component?',
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
			titleCaseName: changeCase.titleCase(name),
			pascalCaseName: changeCase.pascalCase(name),
			route: this.props.name.replace(name, '')
		};
	}

	writing() {
		const creationFolder = get(
			this.projectConfig,
			'folders.presentations',
			'./src/presentations'
		);
		const templatePath = this.templatePath('template.ejs');
		const styleTemplatePath = this.templatePath('styles-template.ejs');

		this.fs.copyTpl(
			templatePath,
			this.destinationPath(
				creationFolder,
				...this.props.route.split('/'),
				this.props.paramCaseName,
				`${this.props.paramCaseName}.presentation.js`
			),
			this.props
		);

		this.fs.copyTpl(
			styleTemplatePath,
			this.destinationPath(
				creationFolder,
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
