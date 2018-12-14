'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fse = require('fs-extra');

describe('Reducer Generator', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../../generators/reducer'))
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

  it('should create a js reducer file.', () => {
    assert.file(['src/reducers/x.reducer.js']);
  });
});
