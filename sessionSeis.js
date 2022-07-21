/* LISTAS Y MÉTODOS DE MUTACIÓN DE LISTAS */
//Cómo trabajar con listas(arrays, arreglos, vectores)
let array = [1, 2, 3, 4, "hola", false, {id : 3}, null]; //Puede tener muchas cosas el array, incluso una variable
console.log(array);

//Cómo acceder a los valores de un array a traves de su posición
//array[indice] => 0, 1, 2, 3
console.log(array[4]); 

//Métodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => Cambia el valor de nuestro array
array.push("final"); //Agregamos valores al final, 1 o más
console.log(array);
// .unshift() -> valores que se introducen al principio
array.unshift("inicio", 3);
console.log(array);

// Métodos para eliminar valores en nuestros arrays
// .pop() .shift() -> Cambian el valor del array
let nuevoArray = [1, 9, 8, "algo"];
nuevoArray.pop(); //Quita elementos al final
console.log(nuevoArray); 
// .shift() -> quita valores al principio
nuevoArray.shift();
console.log(nuevoArray); 

/* Método para eliminar, modificar o añadir valores en nuestro array */
// .splice (x, y, z)
let tercerArray = [5, 4, 3, 2, 1];
//Elimina valores (.splice(indice, numValoresAEliminar))
tercerArray.splice(2, 1); //El primer valor es la ubicación del indice, y el segundo valor es la cantidad de valores a eliminar
console.log(tercerArray);
//Añadir valores con splice(indice, 0, valores)
tercerArray.splice(2, 0, "hola"); //En la 2da ubicación le decimos cero, porque no queremos que reste, 
//sino que sume y después pasamos lo que queremos agregar
console.log(tercerArray);
//Modificar valores .splice(indice, 1, valores)
tercerArray.splice(0, 1, "chau") //Se puede sustituir uno o más valores
console.log(tercerArray);

console.log("-------------");
/* Concatenación y obtención de fragmentos de listas */
//Cómo unir dos listas .concat
const listaUno = ["hola", null, 2, 600]; //No modifica el valor de las listas
const listaDos = ["chau", undefined, 9, true];
console.log(listaUno.concat(listaDos)); //Me une todos los valores en un solo array
const listaTres = listaUno.concat(listaDos);
console.log(listaTres);

//Cómo unir dos listas con el factor de propagación o SPREAD OPERATOR
console.log(...listaTres); //Me da por separado los valores de la lista 3
const listaCuatro = [...listaUno, ...listaDos];
console.log(listaCuatro);

//ERROR : Mal entendido el concepto de factor de propagación
const listaCinco = [listaUno, listaDos];
console.log(listaCinco); //Obtuvimos las dos listas, pero por separado

//Cómo obtener una lista a partir de otra .slice() -> No modifica el valor original del array
const newArray = ["hola", 9, 7, true, null, 2, 1]
console.log(newArray.slice(0, 3)); //Necesita indice de inicio y de fin
//Un nuevo array, en este caso a partir del indice 0 hasta el 3 [ 'hola', 9, 7 ]
const nextArray = newArray.slice(1, 4); //Puedo guardar ese array en una nueva constante
console.log(nextArray);

const newNextArray = newArray.slice(2, -2);
console.log(newNextArray); //No toma el indice -2