//Inheritance - herencia
class Persona {
    _nombre
    _edad
    constructor(nombre, edad){
        this._nombre = nombre 
        this._edad = edad
    }
    saludo(){ 
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`); //no accedo a la variable sino al atributo de este método
    }
} 

class Desarrollador extends Persona { //tendrá una herencia de persona por eso usamos extends
    constructor(nombre, edad, lenguaje) { //persona ya tiene un constructor, no nos permite armar de nuevo asi
        super(nombre, edad) //super nos permite utilizar el constructor de la clase padre 
        this.lenguaje = lenguaje
    }
    saludo() {
        super.saludo() //si coloco esto aquí, accedo a los dos
        console.log("Hola soy developer"); //estamos sobreescribiendo la definición del método saludo(override)
    }
}
const nuevoDev = new Desarrollador("Daniela", 32, "Javascript")
console.log(nuevoDev);
nuevoDev.saludo()

//Polimorfismo -> varias formas
//por ejemplo podriamos volver a definir el método saludo