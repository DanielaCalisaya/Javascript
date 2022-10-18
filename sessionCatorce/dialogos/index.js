const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {
    //console.log("click");
    //alert("Se ha hecho click")
    //confirm("¿Estas de acuerdo?") && console.log("ok") si ponemos cancelar por consola no aparecerá nada
    //confirm("¿Estás de acuerdo?") ? console.log("ok") : console.log("no");  ->  con operador ternario
    
    const respuesta = confirm("¿seguro?")
    if(respuesta) {
        console.log("Estoy de acuerdo");
    } else {
        console.log("No estoy de acuerdo");
    }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?")
    if(nombre) {
        console.log("Tu nombre es " + nombre);
    } else {
        console.log("No haz introducido nada");
    }
})

const lista = [{
    nombre: "Daniela",
    edad: 32
},{
    nombre: "Ara",
    edad: 22
},{
    nombre: "Bren",
    edad: 22
}]
//console.log(lista);
console.table(lista) //veremos este array a modo de tabla en la consola