/* POO - Programación Orientada a Objetos */
const persona = {
    nombre: "Dani",
    edad: 32,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola');
    }
}
console.log(persona);
persona.saludo();

//y si yo quiero crear otra persona?
const otraPersona = {
    nombre: "Lore",
    edad: 33,
    isDeveloper: false,
    saludo: function() {
        console.log('Hola');
    }
}
otraPersona.saludo();
//es muy tedioso repetir código por cada persona

//Function factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, //nombre: nombre
        edad,
        isDeveloper,
        saludo: function() {
            console.log('Hello');
        }
    }
}
const nuevaPersona = creaPersona("Arnold", 9, false); //creamos nuevas personas con la función anterior, pero también hay otras maneras
console.log(nuevaPersona);