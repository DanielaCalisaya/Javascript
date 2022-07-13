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