/* Inicialización de Mapas en HTML */
/* Link: https://developers.google.com/maps/documentation/javascript */

/* cuando cargamos el script, el callback llama a una funcion que se llama initMap que hay que crearla */
function initMap() {
   //console.log("Hello maps!");
   //definir una posicion
   const posicion = { 
        /* lat: -25.363,   -> australia
        lng: 131.044 */
        lat: -38.958,
        lng: -68.0702
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

    //Obtener la geolocalizacion y desp hacer un setPosition
    //market.setPosition({ lat, lng })
    geoPosiciona()
}

//Si queremos que el mapa se posicione en nuestra ubicación

function geoPosiciona() {  
    if (navigator.geolocation) {
       const geoLoc = navigator.geolocation 
       const posicion = geoLoc.watchPosition()
    } else {
        alert("Tu navegador no admite geolocalización")
        //Quizas hayan navegadores muy antiguos que no soporten
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    market.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se produjo un error");
    console.error(error);
}

/* usando la consola del navegador se puede acceder a la geolocalizacion
      -> asi accedemos a la propiedad de este navegador y watchPosition acepta 3 metodos
    navigator.geolocation.watchPosition(position => {
        console.log(position)
    })

    Me devuelve un objeto GeolocationPosition
*/