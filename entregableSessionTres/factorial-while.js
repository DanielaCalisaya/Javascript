/* factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while */

let i = 0;
let ten = 10;  //Defino mis variables

while (i < ten) {  //La condicion
    console.log(`Los números son ${i}`); 
    i++; //Necesita que actualicemos la variable dentro del while para no crear un bucle infinito
}