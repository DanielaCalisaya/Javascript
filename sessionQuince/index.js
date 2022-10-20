/* Persistencia de datos */
/* El navegador puede guardar los datos a travez de cookies, localStorage o sessionStorage
Solo se guarda en el navegador, si usamos crhome, se guardará ahi, no en otros.
Cuando aceptamos las cookies, permitimos que esas paginas accedan a nuestras cookies para que guarde info.
Su tamaño es pequeño, se guardan a nivel navegador.
La sessionStorage solo se puede acceder en la pestaña, si la cerramos se pierde.
Puede que algunas cookies duren poco tiempo o mucho, o nunca se pierdan, o que dure mientras se abre session.
LocalStorage nunca caduca. 
¿Donde se almacena? Las cookies se almacenan en el navegador y el servidor. 
SessionStorage y LocalStorage se almacenan a nivel navegador.
Laas cookies cuanto más pequeñas sean mejor, será más rápido.
*/

//localStorage.setItem("nombre", "Daniela")  //setear o crear un nuevo item -> clave/valor

/* local */
console.log(localStorage.getItem("nombre"));
localStorage.setItem("persona", JSON.stringify({nombre:"Daniela", edad:32})) //guardamos el objeto en forma de string
console.log(JSON.parse(localStorage.getItem("persona"))); //se guarda como objeto
localStorage.removeItem("nombre") //eliminamos la key: nombre

/* session */
sessionStorage.setItem("nombre-sesion", "Daniela") 
//pero este dato no estará en una próxima pestaña que abra, como localStorage

/* cookies */
document.cookie = "nombreCookie=Ñañe"
document.cookie = "caducidad=nombre" + new Date(2023, 0, 23).toUTCString() //damos un tiempo a la cookie
console.log(document.cookie);