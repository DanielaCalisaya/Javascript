/* Módulos, es una parte de código que se puede reutilizar */

//Formas de importar/exportar modulos
//1. CommonJS - require
//2. Import ES6 - import

const moduloMatematicas = require('./modulos/matematicas');
//console.log(moduloMatematicas);  puedo acceder a ellas -> moduloMatematicas.eleva
const { factorial, suma } = require('./modulos/matematicas') //otra forma de importar

const fact = moduloMatematicas.factorial(5) //factorial de 5 es 120
console.log(fact);

const multi = moduloMatematicas.multiplica(4, 4)
console.log(multi); 