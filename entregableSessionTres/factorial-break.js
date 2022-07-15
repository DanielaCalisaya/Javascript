/* factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, 
  una bifurcación if y una sentencia break */

let i = 0;
let max = 10;  // Establecemos las variables

while (i < max) {  // Le indicamos que debe ser menor a 10
    if (i === 6) {  // Si el valor de i es igual a 6, lo para
        break;
    }
    console.log(`Tu numero es ${i}`);
    i++;
}
