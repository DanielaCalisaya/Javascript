/* Crea un fichero index.html (utiliza el comando "!")

- Crea un fichero index.js
- Integra el fichero index.js en el html
- En el fichero index.js:
- Crea una variable con tu nombre
- Crea una variable con tu apellido
- Crea un objeto con tu nombre y tu apellido
- Almacena el objeto anterior en la SessionStorage
- Almacena el objeto anterior en la LocalStorage
- Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
- Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies
- Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo
- Observa cómo la SessionStorage está vacía
- Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador
- Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado
*/

const nombre = "daniela";
const apellido = "calisaya";
let objeto = [ "daniela", "calisaya" ]
//console.log(objeto);

//sessionStorage
sessionStorage.setItem(nombre, apellido);

//localStorage
localStorage.setItem(nombre, apellido)

//cookies
document.cookie = nombre
const timeMiliseconds = 120000 //2 min
document.cookie = "caducaNombre" + new Date(Date.now() + timeMiliseconds) 
console.log(document.cookie);