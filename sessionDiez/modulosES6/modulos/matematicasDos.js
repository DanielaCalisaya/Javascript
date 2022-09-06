export function suma(a, b) {
    return a + b
}

export function multiplica(a, b) {
    return a * b
}

export function eleva(a, b) {
    return a ** b
}

export function factorial(a) {
    //factorial de 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for(let i = 1; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}

//console.log(module)
/* module.exports = {   -> y esto ya no nos serviria, pongo exports al inicio de todas las funciones
    suma,
    multiplica,
    eleva,
    factorial
} */

//Podemos exportar constantes, funciones, etc
export const nombre = 'matematicas';