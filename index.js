#!/usr/bin/env node
'use strict';
const pkg = require('./package.json');
const program = require('commander');
const yeoman = require('yeoman-environment');
const actions = require('./actions');
const env = yeoman.createEnv();

const props = {
  env
};

env.register(require.resolve('./generators/app'), 'reatux');
env.register(require.resolve('./generators/presentation'), 'presentation');

program.version(pkg.version);

program
  .command('app [name]')
  .alias('a')
  .description('creates a new react redux project.')
  .action(actions.app(props));

program
  .command('presentation <name>')
  .alias('p')
  .description('creates a new react redux presentation.')
  .action(actions.presentation(props));

program.parse(process.argv);

if (program.args.length < 1) {
  program.help();
}
