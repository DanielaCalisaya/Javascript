/* Se utiliza, con signo dolar y dentro el identificador, después lo que queremos hacer 
$(selector).accion
*/

//$("li").hide() 
//en este caso ocultará las li

/* $(document).ready(() => {
    para no tener problemas podriamos usar la forma simplificada ->
}) */

$(() => {

    /* selectores: 
        id="el-1"  ->  "#el-1" 
        class="el-1"  ->  ".el-1" 
    */
    //Ejemplo: $("#el-1").hide() 

    $(".hide-btn").click(() => {
        //console.log("Ocultando...")
        //$("h1").hide() oculta de manera rápida
        $("h1").fadeOut() //Utilizando fadeOut y fadeIn lo hará más lento
    })
    $(".show-btn").click(() => {
        //$("h1").show() muestra de manera rápida
        $("h1").fadeIn()
    })

    //color
    $("li").click(() => {
       $("h1").css({ color: "blue" }) 
    })
    $("li").dblclick(() => { //al hacer doble click
        $("h1").css({ color: "pink" }) 
    })

    //añade más elementos
    /* $(".new-element").click(() => {
        $("ul").append("<li>New element</li>") 
    })       al final me crea el nuevo item */
    $(".new-element").click(() => {
        $("ul").prepend("<li>New element</li>")
        //lo crea al principio
    })

    //hoover
    $("li").mouseenter((elem) => {
        elem.target.style.color = "violet" //hover sobre el li, asi cambiará de color
    })
    $("li").mouseleave(elem => {
        elem.target.style.color = "black" //al salir de hover vuelve a poner la letra en color negro
    })
})