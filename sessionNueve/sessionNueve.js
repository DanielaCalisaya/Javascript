/* Errores en Javascript */

const miFuncion = valor => {
    if(typeof valor === "number") { //verificamos si ese tipo de valor es numero y no string, sino dará false
        return 2 * valor
    }
    return false;
    //throw new Error("El valor debe ser solo tipo numérico") //lanzar
}
/* console.log(miFuncion("hhjkk")) */ //Pasa el doble del número que le hemos pasado
/* Suponiendo que no queremos recibir un string 
para la función y asi tener errores. Para eso
podemos lanzar un error cuando lo que está dentro de los
paréntesis no se pueda ejecutar
 */ 
console.log(miFuncion(8));

try {
    //quiero que trates de ejecutar este código de aquí que puede fallar
    console.log("Ejecutando de manera correcta");
} catch (error) {
    //si falla, ejecutá lo que está dentro de estas llaves
    console.log("Error");
    console.error(error);
} finally {
    console.log("Esto se ejecuta si es que hay error o no");
}
//Tenemos que envolver nuestro código con try catch para prevenir los errores


/* 
InternalError -> se lanza cada vez que hay un problema interno
SyntaxError -> fallo de sintaxis
TypeError -> cuando le pasamos un numero a una funcion y espera un booleano
RangeError -> range significa rango, queremos acceder a una posicion que no está, en un array de 10, acceder al 12
ReferenceError -> no existe esa referencia a la que tratamos de acceder
*/

/* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error */