'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fse = require('fs-extra');

describe('Presentation Generator', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../../generators/presentation'))
      .withPrompts({
        name: 'x',
        paramCaseName: 'x',
        titleCaseName: 'x',
        pascalCaseName: 'x'
      })
      .inTmpDir((dir) => {
        const configFile = {
          appName: 'app',
          folders: {
            reducers: './src/reducers/',
            actions: './src/actions/',
            containers: './src/containers/',
            presentations: './src/presentations/',
            types: './src/types/',
            tests: './__tests__/'
          }
        };
        fse.writeJSONSync(path.join(dir, '.reatux.json'), configFile, 'utf8');
      });
  });

  it('should create a presentation js component file.', () => {
    assert.file(['src/presentations/x/x.presentation.js']);
  });

  it('should create a presentation scss component file.', () => {
    assert.file(['src/presentations/x/x.presentation.scss']);
  });
});
