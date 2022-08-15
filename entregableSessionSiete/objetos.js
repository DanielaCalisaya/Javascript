/* 
Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor 
*/

const data = {
    nombre: "Daniela",
    apellido: "Calisaya",
    edad: 32,
    altura: 1.62,
    eresDesarrollador: true
}
console.log(data);

const age = data.edad;
console.log(age);

const amiga = data;
amiga.nombre = "Aracely";
amiga.apellido = "Valda";
amiga.edad = 22;
amiga.altura = 1.65;
amiga.eresDesarrollador = false
console.log(amiga); 

console.log("----------------------");

/* const masDatos = {    Objeto anidado
    nombre: "Daniela",
    apellido: "Calisaya",
    edad: 32,
    altura: 1.62,
    eresDesarrollador: true,
    amiga: {
        nombre: "Aracely",
        apellido:"Valda",
        edad: 22,
        altura: 1.67,
        eresDesarrollador: false
    }
}
console.log(masDatos);  */

const masDatos = [
    {nombre: "Daniela", apellido: "Calisaya", edad: 32, altura: 1.62, eresDesarrollador: true},
    {nombre: "Aracely", apellido: "Valda", edad: 22, altura: 1.67, eresDesarrollador: false},
    {nombre: "Alejandra", apellido: "Santibañez", edad: 42, altura: 1.55, eresDesarrollador: false}
]
masDatos.sort((a, b) => a.edad - b.edad) //Ordeno de manera ascendente
console.log(masDatos.reverse()); //Con reverse lo hace al revés, de manera descendente

/* El método reverse() invierte el orden de los elementos de un array in place. 
El primer elemento pasa a ser el último y el último pasa a ser el primero. */