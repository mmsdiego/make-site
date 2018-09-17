const makeDir = require('make-dir');
const chalk = require('chalk');
const fs = require("fs");
const vars = require("./vars");

module.exports = function (name) {
	Promise.all([
    makeDir(`${name}/style/base`),
    makeDir(`${name}/style/modules`),
    makeDir(`${name}/style/layouts`),
    makeDir(`${name}/style/pages`),
    makeDir(`${name}/img`),
    makeDir(`${name}/js`)
  ]).then(paths => {
    const createStyle = fs.createWriteStream(`${name}/style/style.scss`);
    createStyle.write(vars.styleContent);
    createStyle.end();

    const createVariables = fs.createWriteStream(`${name}/style/base/_variables.scss`);
    createVariables.end();

    const createMixins = fs.createWriteStream(`${name}/style/base/_mixins.scss`);
    createMixins.end();

    const createReset = fs.createWriteStream(`${name}/style/base/_reset.scss`);
    createReset.write(vars.resetContent);
    createReset.end();

    const createBootstrap4Grid = fs.createWriteStream(`${name}/style/layouts/bootstrap-4-grid.scss`);
    createBootstrap4Grid.write(vars.bootstrap4Grid);
    createBootstrap4Grid.end();

    const createBootstrap3Grid = fs.createWriteStream(`${name}/style/layouts/bootstrap-3-grid.scss`);
    createBootstrap3Grid.write(vars.bootstrap3Grid);
    createBootstrap3Grid.end();

    const createHTML = fs.createWriteStream(`${name}/index.html`);
    createHTML.write(vars.htmlContent);
    createHTML.end();

    const createPackageJson = fs.createWriteStream(`${name}/package.json`);
    createPackageJson.write(`{\n  "name": "${name}",\n${vars.packageJsonContent}`)
    createPackageJson.end();

    console.log(`success, your project ${chalk.cyan(name)} created!!!`);
  });
}