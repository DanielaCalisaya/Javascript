/* CHALK
Cambia el color de fuente de la consola de NodeJs
npm install chalk 
*/

import chalk from "chalk";
import { suma, multiplica } from './controller.js'

console.log(chalk.blue('Hello world!'));

const log = console.log;
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

console.log(suma);
console.log(multiplica);

let sum = suma(1, 2);
let multi = multiplica(4, 5) 
console.log(sum);
console.log(chalk.green(multi) + " Soy un numero verde!");