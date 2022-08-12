/* 
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) 
*/

const nombre = ["Ramón", "Claudia", "Daniela", "Karen"];
const set = new Set(nombre);
console.log(set);

set.add("Daniela");
console.log(set);

set.add("Javascript");
console.log(set);