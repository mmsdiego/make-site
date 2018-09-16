#!/usr/bin/env node

const chalk = require('chalk');
const packageJson = require('../package.json');

const lib = require('../lib/index.js');
const program = require('commander');

program.version(packageJson.version, '-v, --version')
  .option('-n, --name <profect-name>', 'project name')
  .usage(`-n ${chalk.cyan('<project-name>')}`)
  .parse(process.argv);

lib(program.name);