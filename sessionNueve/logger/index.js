/* aquí en realidad definimos todo el objeto logger, si es que lo queremos implementar en un proyecto propio
y después lo exportamos */

const winston = require('winston'); //requerimos

const logger = winston.createLogger({ //creamos un objeto:logger y permitirá un control de todos los logs que vayan apareciendo
  level: 'debug', //aqui le decimos que tiene un nivel info, le hará caso a niveles que esten iguales o por debajo de el, si le pasamos debug, nos traerá más
  format: winston.format.json(), //tiene otros formatos también
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(), //llamamos a console, y ahora en la terminal nos muestra todos los errores
    new winston.transports.File({ filename: 'error.log', level: 'error' }), //si no existen estos archivos los crea
    new winston.transports.File({ filename: 'combined.log' }), //si no existen estos archivos los crea, tendrá todos los errores
  ],
});

module.exports = logger;