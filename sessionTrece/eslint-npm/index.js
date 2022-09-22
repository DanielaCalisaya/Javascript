/* La anterior manera de usarlo era manual, de muestra.
Lo mejor seria usar esta manera:
Al ingresar a la página, vamos a get started

npm init
npm init @eslint/config 

Me hará varias preguntas sobre el proyecto o el entorno que estoy usando, y qué correcciones quiero en mi proyecto

En el package.json al final, me dice la dependencia instalada y su version */

/* NO HACE ALGUNAS CORRECCIONES DEL VIDEO PORQUE EN UN PRINCIPIO LO CONFIGURE MAL */
const nombre = "Daniela" 
console.log(nombre)
/* Override: "no-unused-vars": "off" colocamos lo anterior en el json, sobreescribimos, 
pero es de forma permanente en todo el proyecto, no solo en esa línea */

const persona2 = "Maria" 
console.log(persona2)
/* cómo desactivar solo en esta linea las comilas simples?
eslint-disable
eslint-enable */ 
const nuevoString = 'nuevo string' // eslint-disable-line

/* eslint-disable-next-line indent */ 
/* es temporal, en una sola linea */
   const string1 = "otro string"
   console.log(string1)
   const string2 = 'otro string'
   console.log(string2)

/*  "scripts": {
    "lint": "eslint index.js"
} 
Asi le estoy diciendo que solo corrija ese archivo 
en cambio si uso: eslint . le digo que toda la carpeta
*/
  
/* 
Esto que habiamos puesto no me deja, me pone error
"no-unused-vars": "off",
"no-console": "error" 
*/

/* Este comando uso para correr y que me diga los errores por consola
yarn run eslint index.js 

"lint-fix": "eslint --fix ."
Con la linea anterior en el script del package.json le digo que corrija todos los problemas 

npm run lint-fix  -> corregiria los errores, pero eslint se actualizó no funciona
*/