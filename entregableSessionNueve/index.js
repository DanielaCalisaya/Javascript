/* Crea un nuevo proyecto de Node

- Instala la dependencia Winston
- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
- Registra el error en un archivo a través de un try...catch */

function creandoError() {
    console.log("Tienes un error");
}

try {
    creandoError();
} catch (error) {
    console.log("Error");
    console.error(error);
} finally {
    console.log("Me ejecuto de todos modos");
} 