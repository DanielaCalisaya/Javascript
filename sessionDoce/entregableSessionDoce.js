/* Crea un nuevo fichero JS que contenga las siguientes líneas

- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números 
  de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función 

*/

/* Sucesión de Fibonacci 
En matemáticas, la sucesión o serie de Fibonacci es la siguiente sucesión infinita de números naturales:
La espiral de Fibonacci: una aproximación de la espiral áurea generada dibujando arcos circulares conectando las esquinas opuestas 
de los cuadrados ajustados a los valores de la sucesión;1​ adosando sucesivamente cuadrados de lado 0, 1, 1, 2, 3, 5, 8, 13, 21 y 34.

La sucesión comienza con los números 0 y 1;2​ a partir de estos, «cada término es la suma de los dos anteriores», 
es la relación de recurrencia que la define.

A los elementos de esta sucesión se les llama hijos de Fibonacci. Esta sucesión fue descrita en Europa por Leonardo de Pisa, 
matemático italiano del siglo xiii también conocido como Fibonacci. Tiene numerosas aplicaciones en ciencias de la computación, 
matemática y teoría de juegos. También aparece en configuraciones biológicas, como por ejemplo en las ramas de los árboles, 
en la disposición de las hojas en el tallo, en las flores de alcachofas y girasoles, en las inflorescencias del brécol romanesco, 
en la configuración de las piñas de las coníferas, en la reproducción de los conejos 
y en cómo el ADN codifica el crecimiento de formas orgánicas complejas. 
De igual manera, se encuentra en la estructura espiral del caparazón de algunos moluscos, como el nautilus. 
*/

function fibonacci(num) {
  if (num === 1) return [1]
  if (num === 2) return [1, 1]
  let list = [1, 1]
  for (let i = 2; i < num; i++) {
      list.push(list[i - 1] + list[i - 2])
  }
  return list
}

console.log(fibonacci(20))