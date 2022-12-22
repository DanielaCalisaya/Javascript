/* Drag and Drop con JavaScript: Arrastrar y soltar elementos dentro de una pagina web */
const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    /* parrafo.addEventListener("click", () => {
        console.log("click")
    }) 
    */
    parrafo.addEventListener("dragstart", event => { //cuando empiezo a arrastrar
        //console.log("Inicio de arrastre");
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerHTML); //mostrará el texto que tiene dentro
        parrafo.classList.add("dragging") /* le agregué otra clase que le da la opacidad cuando lo agarro */
        event.dataTransfer.setData("id", parrafo.id) //permite transferir datos, moverlos
        const elemento_fantasma = document.querySelector(".img-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0) //vemos moverse la img 
    })
    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging") 
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move" //puedo pasarle como valor el copy, link y none(por default es copy)
        //console.log("Drag Over");
    })
    seccion.addEventListener("drop", event => { //cuando se suelta lo que tomo
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Párrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo) //que lo ponga como un elemento hijo
    })
})