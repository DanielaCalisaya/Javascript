/* ESlint 
-> Encuentra y arregla problemas en el código Javascript, en tiempo real
link - https://eslint.org/

Se pueden configurar de tal modo que nos ayude a homogeneizar el código, 
por ejemplo el tema de las comillas, los espacios, las tabulaciones, etc.
*/

const nombre = "Daniela"
    var nombreDos = 'Chingu';
    /* en teoria está bien, pero tiene ciertas inconsistencias
    (comillas dobles y simples, const y var, espacios) */

/* En este caso me diria que hay errores al posicionarnos sobre la palabra */

var objeto = {
    nombre: 'Circulo',
    radio: 2,
    nombre: "Rectángulo"
}

/* Otra extención que puede ser útil, es Error Lens, marca el error en la misma línea */