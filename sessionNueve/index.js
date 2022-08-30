/* console.log("Salgo por pantalla");
console.info("Mensaje informativo");
console.warn("Mensaje de advertencia");
console.error("Esto es un error");
console.debug("Esto es un mensaje de debug"); */

/* winston 
es una libreria que nos permitirá gestionar los logs de manera profesional 
https://www.npmjs.com/package/winston

-npm install winston 
-creará la carpeta node modules
*/

const logger = require('./logger') // -> Requerimos y modularizamos

//logger.log("Salgo por pantalla");
logger.info("Mensaje informativo");
logger.warn("Mensaje de advertencia");
logger.error("Esto es un error");
logger.debug("Esto es un mensaje de debug");

/* al comentar los console.log y cambiarlos por logger,
hacemos npm start y nos creó dos archivos el combined y el error */

/* const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
};  
Estos son los niveles, es algo que alguien lo ha definido que tiene que ser asi */