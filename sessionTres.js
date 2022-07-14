//ESTRUCTURAS DE CONTROL -> usamos bifurcaciones y bucles
// Bifurcaciones: puedo tomar un camino u otro
// if - else
let saldo = 100;
let efectivo = 20
if (efectivo < saldo) {
    console.log('Puedes sacar');
}else{
    console.log('Saldo insuficiente');
}

let nota = 5;
if (nota === 5) {
    console.log('Haz obtenido un sobresaliente');
} else if (nota === 4){
    console.log('Buen trabajo, puedes hacerlo mejor');
} else if (nota === 3) {
    console.log('Suficiente');
} else if (nota === 2) {
    console.log('No aprobaste');
} else if (nota === 1) {
    console.log('No estudiaste, a trabajar más');
} else {
    console.log('Debes introducir una nota');
}

// switch
switch (nota) {
    case 5:
        console.log('Haz obtenido un sobresaliente');
        break;
    case 4:
        console.log('Buen trabajo, puedes hacerlo mejor');
        break;
    case 3:
        console.log('Suficiente');
        break;
    case 2:
        console.log('No aprobaste');
        break;
    case 1:
        console.log('No estudiaste, a trabajar más');
        break;
    default: //Buena práctica siempre el default
        console.log('Error');
        break;
}

// COMPARACIONES -----------------------------------------------
// == Igualdad simple(Solo checkea el valor) 
// === Igualdad estricta(Compara el valor y el tipo)

let a = 4;
let b = 5;
if (a != b) {  //Si es diferente
    console.log('a es diferente a b - Debil');
}
if (a !== b) {  //Si es diferente en valor o en tipo
    console.log('a es diferente a b - Estricta');
}

//Mayores y menores
let max = 10;
let min = 5;
if (max > min) {
    console.log("Max es mayor que min");
}
if (max >= min) { 
    console.log("Max es mayor o igual que min");
}
if (min < max) { 
    console.log("Min es menor que max");
}
if (min <= max) { 
    console.log("Min es menor o igual que max");
}

// BUCLES FOR Y WHILE---------------------------------------
/* for(inicializacion; condicion; actualizacion) {
    Se ejecutará todo el bucle mientras esta condicion se cumpla
} */

/* i = i + 1;
i += 1;
i++        De estas tres maneras podria poner en la actualizacion, pero el mas usado es el ultimo */
for(let i = 0; i < 10; i++) {
   console.log(i);
}

console.log('-------------');

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //Recorrer la lista
for(let i = 0; i < lista.length; i++){
    console.log(lista[i] * 20); //Accedemos al indice 
}

console.log('-------------');

// Estructura forof
for (let valor of lista){ //Es similar pero más especifico
    console.log(valor); 
}
//En cada una de las ejecuciones del bucle está declarando valor a cada uno de los elementos de esta lista

console.log('-------------');

// Estructura forEach
lista.forEach(valor => {
    console.log(valor);
})

// Estructura forin 
let persona = {
    nombre: "Daniela",
    apellido: "Calisaya",
    edad: 32,
    isDeveloper: true
}

let prop = "edad";
console.log(persona[prop]); //Asi accedo a una en especifico
for (let propiedad in persona){
    console.log(propiedad); //Me dice por consola solo la propiedad no su valor
    console.log(persona[propiedad]);
}


// BUCLE WHILE 
/* 
let i = 0;
let max = 10;
while(i < max){   Dentro de los paréntesis la condicion-Puede que creamos un bucle infinito
   console.log(i)  
}    -> Aqui i no se actualiza, porque i siempre valdrá cero y siempre va a ser menor que max se ejecutará indefinidamente
        para que no suceda tenemos que actualizar la variable dentro de while, x ejemplo i++
*/


//Do... while
/* do {   Ejecuta lo que está dentro de los paréntesis y después seguiria ejecutandolo si la condicion se cumple
   i++
} while (i < max); */
console.log('-------------');



// FORMAS DE CONTROLAR LOS BUCLES CON CONTINUE Y BREAK(el break y el continue pueden afectar la legibilidad del código)
// En casos muy especificos
// Podemos controlar un poco más nuestros bucles
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
for( let i = 0; i < numbers.length; i++ ){ //dentro del bucle let no var
    
    if(numbers[i] === 3){
        continue; 
    /* No imprime el 3, sino que continua */
    }
    
    console.log(numbers[i]);
    
    if(numbers[i] > 5){
        break; /* Salta lo demás */
    /* Si hay un elemento de los numeros que supere a 5 queremos que salga del bucle
    por ejemplo en este caso, recordemos que empieza en 0, y cuenta 5 posiciones y corta el bucle */
    }
}

// Y cuál es el ámbito de un bucle
/* Se refiere al alcanze que tienen las variables dentro de un bucle,
Es decir que forman parte solo del bucle, si hacemos un console.log del i, nos dirá que es undefined */