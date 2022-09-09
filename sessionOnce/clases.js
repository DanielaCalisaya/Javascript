/* Cómo declarar una clase */
class Persona { // usamos class, palabra reservada, y el nombre que le damos en mayuscula
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre //asi es como se declaran las variables de una clase
        this.edad = edad
        this.isDeveloper = isDeveloper //este this hace referencia a este objeto en el cual está
    }
    saludo(){ //todas las funciones en clases o objetos se denominan métodos
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`); //no accedo a la variable sino al atributo de este método
    }
} //Asi creamos un objeto de tipo persona

const nuevaPersona = new Persona("Karen", 26, true) //al decir new, crea un objeto, al pasarle Persona le pasamos un objeto de la clase persona
console.log(nuevaPersona); //Obtengo un objeto de clase persona
nuevaPersona.saludo()

//Instancias... una forma de inicializar las clases

let numero = 60 //inicializar
console.log(typeof numero);
let persona_2 = new Persona("Maria", 34, false) //instanciar
console.log(typeof persona_2);
console.log(persona_2 instanceof Persona); //true

//instanceof -> similar a typeof pero para clases