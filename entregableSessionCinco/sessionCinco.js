/* Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript */

let alturaCentimetros = 162;
let alturaMetro = 1.62;
let peso = 54.0;
let alturaRedondeada = 1.62;
let pesoRedondeado = 54.3;
let max = Number.EPSILON;


console.log(alturaCentimetros);
console.log(alturaMetro);
console.log(peso);
console.log(Math.round(alturaRedondeada)); //Redondeo hacia arriba ?
console.log(Math.round(pesoRedondeado)); //Redondeo hacia abajo
console.log(max);