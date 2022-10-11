/* Crea un nuevo proyecto de Node

- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente todos los errores
- Ejecuta el script a través del terminal 
*/


/* Sesión 04-Textos */

let palabras = "Soy un texto"; 
console.log(palabras);

let masPalabras = "Soy \"un\" texto"; 
console.log(masPalabras);

let masPalabritas = 'Soy "un" texto';
console.log(masPalabritas);

/* Backticks - comillas invertidas */
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
console.log(plantilla); 

// Introducción de variables en HTML 
let libros = ["El corredor del laberinto", "La fábrica de chocolate"]
console.log(libros);

let string = "Soy un string"
console.log(string.length); 

//Obtener partes de cadenas de caracteres
// slice() substring() substr()
let Slice = string.slice(0, 8)
console.log(Slice); 
let Substring = string.substring(5, 10)
console.log(Substring); 
let Substr = string.substr(2, 8)
console.log(Substr); 

// Reemplazar parte del contenido de una cadena de texto
let cadena = "soy una cadena"; 
console.log(cadena.replace("cadena", "persona")); 
let textoLargo = "lorem lorem lorem lorem lo rem lo remlorem"
console.log(textoLargo.replace("lorem", "hola")); 
console.log(textoLargo.replace(/lorem/g, "hola")); 

/* MANIPULACIÓN DE CADENAS DE TEXTO II*/
let input = "Enero"
let db = "enero"
console.log(input === db); 

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase() === db.toLowerCase()); 
console.log(input.toLowerCase()) 
console.log(input.toUpperCase()) 

console.log(input.toLocaleLowerCase()) 

//Formas de concatenar dos cadenas de carácteres
let cadenaUno = "Soy la primer cadena.";
let cadenaDos = " Soy la segunda cadena";
console.log(cadenaUno.concat(cadenaDos)); 
console.log(cadenaUno + " " + cadenaDos); 
console.log(`${cadenaUno} ${cadenaDos}`); 

//Eliminar espacios al inicio y al final
let espacio = "    Soy un string con espacios al final     ";
console.log(espacio.length); 
//trim()
console.log(espacio.trim().length); 
console.log(espacio.trimStart().length); 
console.log(espacio.trimEnd().length); 

// Obtener el caracter que hay en cierta posición
let numero = "Soy el string numero 4"
console.log(numero.charAt(2)); 
console.log(numero[2]); 

// Obtener una palabra dentro de una cadena de carácteres
let caracteres = "Hello, mi name is Daniela";
console.log(caracteres.indexOf("Daniela")); 
console.log(caracteres.charAt(1)); 
console.log(caracteres.lastIndexOf("Daniela"));

/* Métodos de cadenas de texto III */
/* https://regexr.com  -> expresiones regulares */ 
/* match */
let texto = "lorem lorem lorem rrelon tron"
console.log(texto.match(/lorem/g)); 

/* includes - si existe */
console.log(texto.includes("lorem")); 

/* si empieza con una palabra */
console.log(texto.startsWith("o"));

/* si termina con una palabra */
console.log(texto.endsWith("m")); 