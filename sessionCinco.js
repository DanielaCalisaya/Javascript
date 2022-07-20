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