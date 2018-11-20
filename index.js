#!/usr/bin/env node
'use strict';
const pkg = require('./package.json');
const program = require('commander');
const yeoman = require('yeoman-environment');
const actions = require('./actions');
const env = yeoman.createEnv();

env.register(require.resolve('./generators/app'), 'reatux');
env.register(require.resolve('./generators/presentation'), 'presentation');

program.version(pkg.version);

program
  .command('app [name]')
  .alias('a')
  .description('creates a new react redux project.')
  .action((name, options) => actions.app(name, options, env));

program
  .command('presentation <name>')
  .alias('p')
  .description('creates a new react redux presentation.')
  .action((name, options) => actions.presentation(name, options, env));

program.parse(process.argv);
