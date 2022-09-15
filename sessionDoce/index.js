/* Depuración */
const persona = {
    nombre: "Daniela",
    edad: 32
}
console.log(persona);

function obtenDobleEdad(edad) {
    return 2 * edad
}

const dobleEdad = obtenDobleEdad(persona.edad) 
console.log(dobleEdad);

/* Tenemos en nuestro panel la opcion ejecutar y depurar 
Podemos ejecutar con edge, chrome o con node, 
esta seria una manera simple de depurar sin instalación de nada.
También del lado izquierdo puedo usar los breakpoint(puntos de ruptura), 
es decir los puntos rojos, para poder depurar solo una parte,
comienza desde arriba y para en el punto.
Podemos ver nuestras variables a nivel local o global, 
también inspeccionar y escribir las variables y ver si son correctas. 
Podemos inspeccionar las variables, métodos y funciones */

/* Podemos controlar la depuración también, con el cuadro flotante que aparece,
podemos pararla 
step over -> que pase a la siguiente linea
step into -> que ingrese a la funcion y analize
*/


// Continuando con el ejemplo
function obtenArray(edad) {

    let arrayNumero = []

    for (let i = 0; i < 10; i++){
        const numero = edad + i
        console.log(numero);
        //arrayNumero.push(numero) cada vez que entre ingresará un número
        arrayNumero = [...arrayNumero, numero]
    }
    return arrayNumero
}

const array = obtenArray(persona.edad)
console.log(array);
/* Si hacemos un punto de interrupcion dentro de la función,
correrá vuelta por vuelta, hasta terminar las iteraciones.
step out -> para salir de la función y seguir por otra 
restart -> que vuelva a iniciar la depuración
Dentro de una linea de código pueden haber más de un breackpoint */