/* Inicialización de Mapas en HTML */
/* Link: https://developers.google.com/maps/documentation/javascript */

let market, map; //a nivel global
/* cuando cargamos el script, el callback llama a una funcion que se llama initMap que hay que crearla */
function initMap() {
   //console.log("Hello maps!");
   //definir una posicion
   const posicion = { 
        /* lat: -25.363,   -> australia
        lng: 131.044  */
        lat: -38.958,
        lng: -68.0702 
    }

    map = new google.maps.Map(document.getElementById("map"), {
        //segundo parámetro nos pide un objeto con dos atributos
        zoom: 4,
        center: posicion
    }) 
    /* definimos el mapa, nueva instancia de google maps, 
    pasamos dos parámetros, en qué elemento del DOM se va a utilizar*/

    market = new google.maps.Market({ //este seria para marcar un punto rojo, una ubicacion determinada, pasamos un objeto
    position: posicion,
    map,
    title: "Posicion inicial"
    })

    //Obtener la geolocalizacion y desp hacer un setPosition
    //market.setPosition({ lat, lng })
    geoPosiciona()
}

//Si queremos que el mapa se posicione en nuestra ubicación ->

function geoPosiciona() {  
    //Chromme soporta geolocation pero quizas hayan navegadores muy antiguos que no, por eso el if
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation 
        const options = { timeout: 60000 } //cada 60 segundos se actualiza
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)    
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    //console.log(nuevaPos)
    market.setPosition(nuevaPos) //obtener la geolocalizacion
    map.setCenter(nuevaPos) //que se me centre en mi posicion
}

function onError(error) {
    console.log("Se produjo un error");
    console.error(error);
}

/* usando la consola del navegador se puede acceder a la geolocalizacion
    -> asi accedemos a la propiedad de este navegador y watchPosition(nos sigue para saber en qué posición) acepta 3 métodos,
    el que es obligatorio es el callback, este nos da una posicion

    navigator.geolocation.watchPosition(position => {
        console.log(position)
    })

    Me devuelve un objeto GeolocationPosition
*/