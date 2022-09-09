/* Ámbito de las clases, métodos y atributos públicos, privados y protegidos */

class Persona { 
    //Private -> #
    #nombre
    #edad //digo que son atributos privados y solo se pueden acceder desde dentro de la clase y no de fuera
    #obtenerEdad

    //Protected -> _  solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true
    constructor(nombre, edad){
        this.#nombre = nombre 
        this.#edad = edad //le digo que se guarde dentro del atributo en donde no pueda acceder desde afuera
    }
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`); //no accedo a la variable sino al atributo de este método
    }
    obtenerNombre(){
        return this.#nombre
    }
    #obtenerEdad(){
        return this.#edad
    }
}

const persona = new Persona("Helga", 9);
console.log(persona);
console.log(persona.nombre); //-> solo asi no nos dejaba obtener el nombre
persona.saludo()

console.log(persona.obtenerNombre());
console.log(persona.#obtenerEdad());
console.log(persona._isDeveloper); //no puedo acceder a isDeveloper