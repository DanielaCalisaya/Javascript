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