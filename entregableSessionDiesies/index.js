/* 
- Replica el ejercicio completo del vídeo
- Añade dos párrafos más en cada una de las secciones
- Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: 
    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)
- Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine 
*/

const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelector(".papelera")

parrafos.forEach(parrafo => {

    parrafo.addEventListener("dragstart", e => {
        console.log("Tomo el parrafo")
    })
    
    parrafo.addEventListener("dragend", e => {
        parrafo.remove() 
    })
 
    parrafo.addEventListener("drop", e => {
        parrafo.remove()
    })
    

    /* parrafo.addEventListener("dragenter", e => {
        console.log("parrafo")
    })
    parrafo.addEventListener("drop", e => {
        console.log("parrafo");
    }) */
})

/* 

   ZONA DONDE TOMAMOS EL ELEMENTO
   dragstart -> cuando empieza a arrastrarse un elemento
   dragend -> cuando termina, momento que terminamos ese arrastre
   drag -> afectará constantemente al mover el mousse

   ZONA DONDE SOLTAMOS EL ELEMENTO
   dragenter -> cuando el elemento llega al sector sensible
   dragleave -> despues de pasar por la zona sensible y 'salimos' del contenedor
   dragover -> cuando arrastramos el elemento sobre una zona sensible, se añadirá e.preventDefault() para que reaccione el drop
   drop -> evento que reacciona cuando se suelta el elemento en la zona sensible

*/

