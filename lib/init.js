/**
 * @Desc: the entry of the project
 * @Date: 2018-06-21
 */

// resolve commands and params
const program = require('commander');
// set font style
const chalk = require('chalk');
const file = require('./file');

/**
 * Usage.
 */
  program
  .usage('init [h5-template]')
  .version('1.0.0', '-v, --version')
  .command('init <name>')
  .action(name => {
    main(name);
  });

/**
 * Help.
 */
program.on('--help', () => {
  console.log()
  console.log('  Examples:')
  console.log()
  console.log(chalk.green('    # create a new project with an local template: init <h5-tempalte>'))
  console.log('    $ h5-cli init koa2')
  console.log()
  console.log(chalk.green('    # create a new project from a github template: init <username/repo>'))
  console.log(chalk.white('    $ h5-cli init comeonbob/h5-template-koa2'))
  console.log()
})

/**
 * Help.
 */
function help () {
  // no command
  if (process.argv.length < 3) {
    return program.help();
  }
}
help();

/**
 * main
 */
function main(name) {
  file.generate(name);
}

program.parse(process.argv);

