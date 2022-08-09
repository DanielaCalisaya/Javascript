/* Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que contenga la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que contenga la lista de directores y la lista de los títulos (utilizando el factor de propagación) */

// Agrego -> push()
const compras = ["Pan", "Queso", "Galletas", "Azúcar", "Jabón", "Papel higiénico"];
compras.push("Aceite de Girasol");
console.log(compras);

// Remuevo -> pop()
compras.pop();
console.log(compras);

const peliculasFavoritas = [
    { titulo: "La propuesta", director: "Anne Fletcher", fecha: 2009 },
    { titulo: "El corredor del laberinto", director: "Wes Ball ", fecha: 2014 },
    { titulo: "Orgullo y prejuicio", director: "Joe Wright", fecha: 2005 }
];

//filter()
const filter = peliculasFavoritas.filter(peli => peli.fecha > 2010);
console.log(filter);

//map()
const map = peliculasFavoritas.map(dire => dire.director);
console.log(map); 
console.log("-----");
const segundoMap = peliculasFavoritas.map(title => title.titulo);
console.log(segundoMap);

//concat() En los siguientes dos casos los une en un solo array
const concatenando = map.concat(segundoMap);
console.log(concatenando);
console.log("-----");

//factor de propagación
const newConcatenado = [...map, ...segundoMap];
console.log(newConcatenado);