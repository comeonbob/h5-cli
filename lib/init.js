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
  .usage('init [project-name]')
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
  console.log(chalk.green('    # create a new project with an official template'))
  console.log('    $ h5-cli init my-project')
  console.log()
  console.log(chalk.gray('    # todo: create a new project straight from a github template'))
  console.log(chalk.gray('    $ h5-cli init username/repo my-project'))
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
  console.log('generate project start');
  file.generate(name);
}

program.parse(process.argv);

