/* NUMBERS Y PRECISIÓN EN JS */
//Declaración de variables numéricas (enteros y decimales)
let a = 5;
console.log(5);

let b = 0.1;
console.log(b);

//Precisión
let c = 0.2;
console.log(c);

console.log(b + c);
/* En consola esta suma me da 0.30000000000000004
está mal matemáticamente hablando, 
pasa esto por cómo está almacenado en memoria este dato.
En realidad debe dar 0.3 */
//QUÉ SE PODRIA HACER? una opción -> 
//Redondear hacia abajo sin decimales, asi obtenemos un valor más real
console.log(Math.round((0.1 + 0.2) * 100) / 100); //también hay librerias que podrian ayudar en esto

console.log("----------------------");
/* OPERACIONES Y REDONDEO */
//Principales operaciones aritméticas
let d = 3.5;
let e = 4.8;
//Suma
console.log(d + e);
//Resta
console.log(d - e);
//Multiplicación
console.log(d * e);
//División
console.log(d / e);

//Representación de los números en cadenas de texto
console.log(typeof d); //Me indica que 'd' es un number
let string = d.toString()

console.log(string);
console.log(typeof string); //Me indica que es un string

//Redondeo de números decimales
let f = 3.3;
let g = e * 3;
console.log(g);
console.log(typeof g); //number

//toFixed() - Limita el numero de decimales al valor x
console.log(g.toFixed(5)); 
//Dentro de los parentesis le indico cuantos numeros decimales quiero tener
console.log(typeof g.toFixed(5)); //string
//Pero nos está convirtiendo en string lo que le pasamos

//toPrecision(x) - redondeo cientifico - limita el numero de cifras significativas
let h = 1552.222222255
let j = 16266256265959536
console.log(h.toPrecision(6)); 
//Le paso por parentesis solo la cantidad de numeros que quiero que me traiga
console.log(j.toPrecision(6));
/* En consola me da 1.62663e+16. El e+12 quiere decir
que es multiplicado por 10 y elevado a 12 */
console.log( typeof j.toPrecision(6)); //devuelve un string

console.log("----------------------");
/* MÉTODOS DE NUMBERS Y LIMITES EN JS */
//Operador valueOf() - Obtener valores numéricos a partir de literales
//En javascript los objetos que nosotros declaramos estan basados en prototipos
let n = 2; //Se pueden definir asi
let m = new Number(3) //Se inicia de forma numerica un valor, obtiene literalmente el valor numerico
console.log(m); //[Number: 3]
console.log(n + m);
console.log(n.valueOf() + m.valueOf()); //Suma directamente el valor
console.log(m.valueOf()); //Entonces asi obtenemos un valor primitivo

let palabras = new String("Hola Mundo");
console.log(palabras); //[String: 'Hola Mundo']
console.log(palabras.valueOf()); //Hola Mundo

//NaN - (Not a Number) - Infinity
//Puede ser que uno este usando algo en donde no es numérico
let number = Number('adios');
console.log(number); //NaN -> no es un numero
console.log(isNaN(number)); //true - nos adelantamos y le decimos que es un NaN

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor); //Me tira Infinity
//La regla matemática dice que algo dividido a 0 es 0
let divisorDos = null;
console.log(numerador / divisorDos); //Me tira Infinity

//Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
//Number
let numero = '5.08';
console.log(typeof numero);
let numeroDos = 17.2;
console.log(numero + numeroDos); //Me da 5.0817.2
/* Entonces el primer número era string y el segundo es number, 
los suma, no es buena práctica, error de concepto */
console.log(Number(numero) + numeroDos); //Ese string lo pasa a number, y ahi nos suma correctamente(22.28)
//parseInt && parseFloat
console.log(parseInt(numero)); //Lo convierte en un número entero
console.log(parseFloat(numero)); //Lo convierte en un número decimal

//Numeros hexadecimales (base 16)
let numHex = '0x3a5b7'; 
//Todos los números hexadecimales empezarán con 0x, 
//en este caso es inventado pero no sabemos lo que vale
console.log(parseInt(numHex, 16));

//Obtener los valores máximo y mínimo en Javascript
let max = Number.EPSILON //Minima diferencia que puede haber entre uno y otro número
let minPrecision = Number.EPSILON;
let minValor = Number.MIN_VALUE;
let maxValor = Number.MAX_VALUE;

console.log(max);
console.log(minPrecision); // La precision minima que podemos tener para pasar a otro valor es 2.220446049250313e-16, el minimo valor en el que podemos trabajar en JS
console.log(minValor); // El valor más pequeño a tener es 5e-324(es un 0 con 324 ceros por delante y al final un 5)
console.log(maxValor); // El mayor valor que podemos tener dentro de JS es 1.7976931348623157e+308(con 308 números por detrás)
console.log(2 ** 5000); // 2 elevado a lo que tenga que ser, pasando el máximo ya nos dice por consola que es infinito