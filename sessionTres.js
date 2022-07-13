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