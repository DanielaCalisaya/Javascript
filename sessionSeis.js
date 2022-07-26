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

console.log("-----------------");
/* MÉTODOS DE ITERACIÓN EN LISTAS */
//Iterar los valores de una lista
const iteracion = ["hola", 2, 8, 85, false, 96];

//Forma de acceder al valor, quedo antigua y poco eficiente
for(let i = 0; i < iteracion.length; i++){ 
    console.log(iteracion[i]);
}

//Forma es6, mas eficiente -> .forEach()
iteracion.forEach(valor => {
    console.log(valor)
})
/* Le estamos asignando cada uno de los valores del array "iteracion"
a la variable valor cada vez que entra dentro de este forEach,
cada vez que entra está haciendo este valor */

let suma = 0;
const arrayNums = [5, 9, 7, 2, 3, 1];
arrayNums.forEach(valor => { //En este forEach usamos un callback
    suma += valor;
    console.log(valor)
});
console.log(suma);

//Búsqueda de un valor dentro de una lista .find()
//Encontrar el elemento de esta lista
const variable = iteracion.find(valor => {
    if(valor === 96) {
        return true
    }
})
console.log(variable);

const listaObjetos = [
    {nombre: "Marisa", edad: 42},
    {nombre: "Margarita", edad: 60},
    {nombre: "Daniela", edad: 22},
    {nombre: "Jenni", edad: 33},
    {nombre: "Ramon", edad: 70}
]

/* const objeto = listaObjetos.find(o => {
    if(o.nombre === "Daniela") {
        return true
    }
}) 
console.log(objeto.edad);  
Obtenemos la edad de ese objeto que estamos buscando
*/

/* const objeto = listaObjetos.find(o => {
    return o.nombre === "Daniela" 
}) 
console.log(objeto.edad); 
Mas corto el codigo, nos pasa un true */

const objeto = listaObjetos.find(o => o.nombre === "Daniela") 
console.log(objeto.edad); 
//O más corto todavia, en una sola linea

//Podemos destructurar, mejor aun
const { edad } = listaObjetos.find(o => o.nombre === "Daniela")
console.log(edad);

console.log("-----------------");
/* Métodos avanzados, obtención de listas a partir de listas */
// .map()
const miArray = ["Argentina", "Neuquén", "Brasil", "Nueva York", "Madagascar"]
const dev = miArray.forEach(v => {
    console.log(v);
}) //En consola vemos la lista
console.log(dev); //Si miArray lo asigno a una variable y me da undefined, el objetivo del forEach en este caso no es hacer nada

//Si utilizo map, ahi si me devuelve el valor
const miNewArray = miArray.map((value, indice) => {
    /* console.log(indice); */
    return `${indice + 1} - ${value}`  //Podriamos sacar los corchetes y subir la linea a una sola
    /* return value.concat(" Hello") */
})
console.log(miNewArray);


// .filter()
const listObjeto = [
    {nombre: "Marta", edad: 40},
    {nombre: "Pedro", edad: 80},
    {nombre: "Tomás", edad: 31},
    {nombre: "Silvana", edad: 30}
]
/* const personasMayores = listObjeto.filter(obj => {
    if(obj.edad > 30){
        return true
    }else{
        return false Entonces map si me trae y me devuelve algo
    }
})
console.log(personasMayores);  */

//Mucho más corto el código y fácil de leer->
const personasMayores = listObjeto.filter(obj => obj.edad > 30); //Nos devulve un true y un false cada vez q no se cumple
console.log(personasMayores);

const nuevaLista = listObjeto.filter(obj => obj.nombre !== "Pedro");
console.log(nuevaLista);


// .reduce() Sirve para obtener algo, un valor
const valores = [8, 4, 9, 2, 15, 63];
const added = valores.reduce((anterior, actual, i, arrayOriginal) => { //Acepta 4 parámetros
    console.log(anterior); //El objetivo del reduce es q este valor "anterior" también sea acumulativo
    console.log(actual);
    console.log(i);
    console.log(arrayOriginal);
    return anterior + actual
}) 
console.log(added);