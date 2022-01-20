import chalk from 'chalk';
 
const success=(message) => console.log(chalk.green(message));
const warning=(message) => console.log(chalk.Yellow(message));

const error=(message) => console.log(chalk.red(message));



export {
    success,warning,error
};