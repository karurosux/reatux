const gulpIf = require('gulp-if');
const gulpMatch = require('gulp-match');
const gulpPrettier = require('gulp-prettier');

module.exports = {
  prettierFormatModifier(context) {
    context.registerTransformStream(
      gulpIf(file => {
        const excludedFiles = ['*/typings.d.ts', '*/test.ts', '*.md'];
        const isTs = ['*.js', '*.scss', '*.json'].some(i => gulpMatch(file, i));
        const isExcluded = excludedFiles.some(fileName =>
          gulpMatch(file, fileName)
        );

        return isTs && !isExcluded;
      }, gulpPrettier({ singleQuote: true, useTabs: false, trailingComma: 'all', tabWidth: 2 }))
    );
  }
};
