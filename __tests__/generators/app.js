'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('Base Project Application', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../../generators/app')).withPrompts({
      appName: 'app',
      packageManager: 'none',
      titleCaseAppName: '',
      paramCaseAppName: ''
    });
  });

  it('shoud create reatux project files', () => {
    assert.file([
      'package.json',
      '.reatux.json',
      'README.md',
      '__tests__/README.md',
      'config/env.js',
      'config/jest/cssTransform.js',
      'config/jest/fileTransform.js',
      'config/paths.js',
      'config/polyfills.js',
      'config/webpack.config.dev.js',
      'config/webpack.config.prod.js',
      'config/webpackDevServer.config.js',
      'public/favicon.ico',
      'public/index.html',
      'public/manifest.json',
      'scripts/build.js',
      'scripts/start.js',
      'scripts/test.js',
      'src/actions/index.js',
      'src/app.js',
      'src/app.router.js',
      'src/app.store.js',
      'src/containers/welcome/welcome.container.js',
      'src/containers/welcome/welcome.container.scss',
      'src/index.js',
      'src/presentations/README.md',
      'src/reducers/index.js',
      'src/styles.scss',
      'src/types/index.js'
    ]);
  });
});
