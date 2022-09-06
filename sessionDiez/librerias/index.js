//instalación de la libreria axios para hacer llamadas de servicios externos por ejemplo PokeAPI
// npm i axios
//nos instala node_modules

import axios from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/ditto') //hacemos la llamada; pegar la url que queremos chequear
    .then(function(response) { //cuando obtengamos la respuesta, será esta porción de código
        console.log('Success!');
        console.log(response.data); // -> si agregamos el .data obtendremos la información que necesitamos saber
    })
    .catch(function(error) { //si ocurre un error, saldrá esto
        console.log('error');
        console.log(error);
    })
    //aqui puede ir el finaly

/* Recibimos una respuesta de status 200 y toda la información
Si pusieramos en la url algun otro nombre daria error y el dato no seria encontrado, osea error 404 */