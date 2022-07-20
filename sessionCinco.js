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