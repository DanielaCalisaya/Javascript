/* Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos 

*/

function devolver() {
   console.log(true);
}
devolver();


setTimeout(function(){
    console.log("Hola soy una promesa");
}, 5000);
console.log("setTimeout() Ejemplo..."); 


function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}
idsPares()