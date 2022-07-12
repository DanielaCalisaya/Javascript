/* 
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url) 
*/

let miLista = [
    "Daniela", 
    32, 
    true, 
    new Date("Jan 23 1990"),
    libroFavorito = {
        titulo : "El corredor del laberinto",
        autor : "James Dashner",
        fecha : new Date("Oct 2009"),
        url : "https://www.casadellibro.com/libro-el-corredor-del-laberinto-1/9788493801311/1811437" 
    }
]

console.log(miLista);