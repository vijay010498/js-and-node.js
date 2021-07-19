// // file system module
// const fs = require('fs');
// //fs.writeFileSync('notes.txt','This is a new file');
// fs.appendFileSync('notes.txt','Appending a new text');
//require("./utility");
//
// const {exportName, add} = require('./utility');
// console.log(exportName);
// console.log(add(1,3));
// const {getNotes} = require("./notes.");
// console.log(getNotes());

const chalk = require('chalk');
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('60000%')}
DISK: ${chalk.yellow('70%')}
`);