/* Trabajando con Sets */
//Sets o conjuntos
const array = [1, 8, 4, 9, 3, 4]; //Arrays es un conjunto ordenado de valores y objetos 
const miSet = new Set(array); //Sets no ordenados de valores únicos
console.log(miSet); //Set(5) { 1, 8, 4, 9, 3 }

// .add()
miSet.add(2); //Solo agrega si es un valor diferente al que ya está en el array
console.log(miSet);

// .delete()
miSet.delete(1); //Eliminó el valor 1 de la lista
console.log(miSet);

// .clear() que elimine todos los valores del set
/* miSet.clear();
console.log(miSet); */

// .has() contiene... es similar al método includes
console.log(array.includes(2)); //Si es que array tiene un 2
console.log(miSet.has(5)); 

// .size -> propiedad y no método
console.log(miSet.size); //Me dirá cuántos valores tiene

miSet.forEach(valor => {
    console.log(valor);
})

const itMiSet = miSet.values(); //Iterable
console.log(itMiSet);
//Podemos convertir el set en un array de nuevo
const arraySet = [ ...miSet ];
console.log(arraySet[1]);
console.log("-------------");


/* Objetos en Javascript */
const obj = {
    id: 3,
    nombre: "Daniela",
    apellido: "Calisaya",
    isDeveloper: true,
    librosFavoritos: [
        "Charly y la fábrica de chocolate",
        "El corredor del laberinto"
    ],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.librosFavoritos); //Accedo a una propiedad de ese objeto
console.log(obj["4-juegos"]); //Asi podemos acceder a este
//Definir una propiedad con variables
const prop = "isDeveloper";
console.log(obj[prop]);
//Entonces asi accedemos a métodos a traves de variables

//Replicando
const objDos = obj; 
/* Cuando yo defino un objeto a partir de otro objeto de esta manera 
en lugar de copiar solo el valor y hacer un duplicado del objeto, 
copia el mismo objeto y se cambian los dos */
console.log(objDos); 
objDos.nombre = "Helen";
console.log(objDos.nombre);

let valor = 4;
let otroValor = valor;

otroValor = 6; //No afecta a 'valor'
console.log(valor);
console.log(otroValor);
// A la hora de iguar valores primitivos, hace una copia y lo almacena en otro lugar de memoria,
// con los objetos no ocurre eso

const objTres = { ...obj}
console.log(obj.nombre);
console.log(objTres.nombre);

obj.nombre = "Ñañe"; //Afecta solo al objeto que acabo de crear
console.log(obj.nombre);
console.log(objTres.nombre);

//Cómo ordenar listas de objetos en función de una propiedad
const listaPeliculas = [
    {titulo: "Lo que el viento se llevó", anio: 1939},
    {titulo: "Titanic", anio: 1997},
    {titulo: "Moana", anio: 2016},
    {titulo: "El efecto mariposa", anio: 2004},
    {titulo: "Ted", anio: 2012}
]
console.log(listaPeliculas);

// .sort() -> Muta el valor del array original(ordena en este caso por año)
listaPeliculas.sort((a, b) => a.anio - b.anio)
console.log(listaPeliculas);