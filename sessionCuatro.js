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

/* MÉTODOS MÁS UTILIZADOS CON CADENAS DE CARÁCTERES */

// Cómo obtener la longitud de un string
let string = "Soy un string"
console.log(string.length); //Me indica 13, la cantidad de carácteres

//Obtener partes de cadenas de caracteres
// slice() substring() substr()
let Slice = string.slice(0, 8)
console.log(Slice); //Me traerá de la posición 0 a la 8, el rango que le doy
let Substring = string.substring(5, 10)
console.log(Substring); //No hay mucha diferencia con la anterior
let Substr = string.substr(2, 8)
console.log(Substr); //Nos traerá una cadena de 10 caracteres pero empezando desde la posición 5

// Reemplazar parte del contenido de una cadena de texto
let cadena = "soy una cadena"; 
console.log(cadena.replace("cadena", "persona")); // Lo que quiero sacar, lo que quiero agregar
let textoLargo = "lorem lorem lorem lorem lo rem lo remlorem"
console.log(textoLargo.replace("lorem", "hola")); // Me reemplaza solo el primer lorem|la primer instancia
console.log(textoLargo.replace(/lorem/g, "hola")); // Me reemplaza todas las palabras similares