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
console.log("--------------------");


/* Carga y sobrecarga de funciones */

function saludarDos() {
    hola()
}
function hola() {
    console.log("Hola soy la función hola()");
}
saludarDos();
/* Entonces primero se interpreta el código, de arriba a abajo
Hasta que no encuentra dicha ejecución de la función no la guarda en memoria, no entra en caché */
/* 
1. carga la function global() 
2. saludar() pasa por encima de la function global()
3. function hola() saludar() global()
4. cuando termina de cargar la function hola la quita de la carga y pasa a saludar() global()
5. global()
*/

/* 
function recursivo() {
    recursivo()
} 
recursivo() Esta continuamente llamando a la función, llega al tamaño máximo de call stack.
*/


/* Funciones asincronas y promesas */
function miAsync() {
    /* Función que hace una llamada a una base de datos externa,
    puede dar errores */
}

//promesas
const miPromesa = new Promise((resolve, reject) => { //admite un callback
    const i = Math.floor(Math.random() * 2)
    //si está todo correcto
    if(i !== 0){
        resolve()
    }else{
        reject()
    }
})//Funciones que pueden o no, ejecutarse de forma exitosa

miPromesa
    .then(() => console.log("Se ejecutó correctamente"))
    .catch(() => console.log("Error"))
    .finally(() => console.log("Me ejecuto siempre")) //Si se ha ejecutado correctamente o con errores esta linea siempre se va a ejecutar


/* Funciones generadoras */
//Función generadora de ID incremental
function* generaId() {
    let id = 0;
    while(true){
        id++
        if(id > 10) {
            return id
        }
        yield id // -> hace como una especie de return, no sale sino que espera hasta que se vuelva a llamar
    }
}/*Cada vez que llamemos a la función nos envia un número, 
para y cuando la volvemos a llamar a la funcion volverá a ejecutarse, 
dara el numero y quedará parado*/
const generador = generaId();
console.log(generador.next().value); //Object [Generator] {} 
console.log(generador.next().value);
console.log(generador.next());
console.log(generador.next());