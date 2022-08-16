// Funciones 
/* Bloques de código que se ejecutan con un fin específico */

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("Daniela"); //Pasar parámetros para que no sea undefined

function despedir(nombre) {
    console.log(`Adiós ${nombre}`);
}
let otroNombre = "Helen";
despedir(otroNombre);


let persona = {nombre: "Juan", apellido: "Gonzales"};

saludarPersona(persona);
function saludarPersona(objeto) {
    objeto.apellido = "Alvarez" 
    /* Si decidimos cambiar el apellido, lo cambia, pero ya cambia el objeto original */
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}
 

function imprimeNumero(numero = 4) { //Parámetros opcionales (pero puedo establecer un valor acá en el caso de que no haya, por defecto)
    console.log(numero);
}
imprimeNumero();//Si no le paso nada será undefined


function imprimir(...parametros) { //Imprimirá todo lo que le pasemos
    console.log(parametros);
}
imprimir(1, 2, 3, 4, "Hola", {id:1});


/* function suma(...nums) {
    return nums.reduce((a, b) => a + b);
}
nums(1, 2, 3, 4); */

function multiplicar(a = 0, b = 0) {
    return a * b //Todo lo que está aquí dentro estará dentro de este ámbito
}
/* Si establezco una variable fuera de la función, desde adentro puedo acceder a ella,
en cambio si hago una variable dentro, desde afuera no puedo acceder a ella,
dirá que es undefined */
console.log(multiplicar(4, 9));
console.log("---------------------");


/* Funciones de tipo flecha y anónimas(a partir del 2015 se introdujeron) */
const array = [1, 2, 4, 6, 10, 14];  
/* 
const arrayDos = array.map(function(valor) {
    return valor * 2
})
Seria mejor si usamos las funciones de tipo flecha 
*/
const arrayDos = array.map((valor) => valor * 2) // -> Función anónima porque no la estamos asignando a ningún nombre
console.log(arrayDos); //Obtengo el doble

/* Para definir una función de tipo flecha se la puede 
asignar a una variable, tipo var, let o const */

/* const dobleDelValor = valor => {
    return valor * 2
}    Es lo mismo */

const dobleDelValor = valor => valor * 2
console.log(dobleDelValor(6)); 
//Da bien el resultado en la función anterior pero si pongo el console antes de la función me da error porque me dice que no se ha inicializado(hoisting)
//Estas funciones flecha se puede acceder a ellas, después de que se hayan inicializado

function doble(valor) {
    return valor * 2
}
console.log(doble(4)); //Este console si lo pongo aca o antes de la función tradicional no me dará error