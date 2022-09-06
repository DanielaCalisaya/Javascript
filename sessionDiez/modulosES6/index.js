import { suma, eleva, nombre  } from './modulos/matematicasDos.js' // -> Si o si tengo que poner la extension: js
//import * as moduloMatematicas from './modulos/matematicasDos.js'  -> otra forma de traerme todo

const sum = suma(4, 8);
console.log(sum);

const potencia = eleva(2, 2);
console.log(potencia);

/* En el package.json debajo de main agregamos el type con el valor module (da dos opciones el common y el module) */

console.log(nombre);
//console.log(moduloMatematicas.nombre);  -> entonces si me traigo todo(*) puedo hacerlo asi tambien

import getAutor, { libro } from './modulos/literatura.js';
console.log(getAutor());
console.log(libro);