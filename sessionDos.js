/* Javascript usa un tipado inferido 
Es decir que cuando definimos una variable, la hacemos de forma general
VENTAJAS 
DESVENTAJAS quizás no nos dará error al volver asignar una variable
TIPOS: -> Primitivos: Number, String, Boolean, Null, Undefined
       -> Objetos

VARIABLES:
var caja donde se almacena un valor, ese valor puede variar
let 
const
Ejemplo: Si uso una variable var y le asigno un valor,
y después hago un for y dentro vuelvo a declararla, seria una mala practica, solo la llamo y el =


Atajo:  ctrl + }    -> me comenta esa linea
console.log(typeof nombreDeAlgo) -> Me dice el tipo, si es string, booleano o number, etc

NOTACION:
;   -> Delimitar el final de una linea
.   -> Utilizado en los objetos para acceder a los atributos
[]  -> Listas o arrays o para acceder a algun valor del array
()  -> Para funciones
{}  -> Llaves para objetos, funciones y estructuras de control

LISTAS, arrays o arreglos -> Puede tener diferentes tipos de datos, y haber listas dentro de listas
const lista = []

OBJETOS Javascript es un lenguaje orientado a objetos,
los objetos dentro de javascript son representaciones en datos de objetos de la vida real
const movil = {    -> Objeto con diferentes atributos, no podemos reasignarlo si cambiar sus valores
    altura: 10,
    anchura: 5,
    marca: "Samsung",
    contactos: ["sofia", "carlos"]
}
Suponiendo que uno de esos atributos queremos que se llame
altura_tarjeta, lo pondriamos dentro de comillas y le damos valor,
si no lo ponemos dentro de comillas me dará error

FECHAS
new Date() -> asi creamos una fecha

*/

const ahora = new Date();
console.log(ahora);
const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();
console.log(dia, mes, anyo);