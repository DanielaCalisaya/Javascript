/* Tipos de declaración de strings(cadena de caracteres) y cuando utilizarlos */

let palabras = "Soy un texto"; 
// Con dobles comillas o simples, no hay problema en eso.
console.log(palabras);

let masPalabras = "Soy \"un\" texto"; 
// Si quisiera que una palabra, dentro tuviera comillas podria usar las barras invertidas y las comillas
console.log(masPalabras);

let masPalabritas = 'Soy "un" texto';
// Sino la otra opción es por fuera hacer comillas simples y por dentro las comillas dobles, o al reves tambien puede ser, por dentro comillas simples y por fuera dobles
console.log(masPalabritas);

/* Backticks - comillas invertidas */
// Nos permiten introducir variables en nuestros strings y permite saltos de linea y no saldrá error
let nombre = "Ñañe";
let saludo = `Hola ${nombre}`
console.log(saludo);

// Plantillas HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Mi texto</p>
</html>
`
console.log(plantilla); // En consola veremos el html

// Introducción de variables en HTML 
let libros = ["El corredor del laberinto", "La fábrica de chocolate"]
console.log(libros);