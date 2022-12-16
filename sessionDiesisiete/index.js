/* Inicialización de Mapas en HTML */
/* Link: https://developers.google.com/maps/documentation/javascript */

/* cuando cargamos el script, el callback llama a una funcion que se llama initMap que hay que crearla */
function initMap() {
   //console.log("Hello maps!");
   //definir una posicion
   const posicion = { 
        lat: -25.363,
        lng: 131.044
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        //segundo parámetro nos pide un objeto con dos atributos
        zoom: 4,
        center: posicion
    }) 
    /* definimos el mapa, nueva instancia de google maps, 
    pasamos dos parámetros, en qué elemento del DOM se va a utilizar*/

    const market = new google.maps.Market({ //este seria para marcar un punto rojo, una ubicacion determinada, pasamos un objeto
    position: posicion,
    map,
    title: "Posicion inicial"
    })
}