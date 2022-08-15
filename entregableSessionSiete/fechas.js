/* Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos) 
*/

const fecha = new Date(); 
console.log(fecha);

const miNacimiento = new Date(1990, 0, 23);
console.log(miNacimiento);

const masTarde = fecha > miNacimiento;
console.log(masTarde);

const dia = miNacimiento.getDate();
console.log(dia);

const mes = miNacimiento.getMonth() + 1;
console.log(mes);

const anio = miNacimiento.getFullYear();
console.log(anio);