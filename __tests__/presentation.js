'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-reatux:presentation', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/presentation'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
