// ARREGLOS O Arrays
// sirven para agrupar elementos del mismo tipo o relacionados.
// por ejemplo la forma en que facebock muestra un listado de amigos
// se crean  con corchetes mientras que los objetos se crean con llaves
//puede tener de todo tipo de valores ej en linea 15

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.table(meses);

/*const arreglo = ['Hola', 10, 'si', null, {nombre: 'Juan', trabajo: 'Programador'}, [1,2,3]];

console.log(arreglo);*/

// Acceder a los valores de una arreglo:
// console.log(numeros[4]);

//  Conocer la extension de un arreglo/ cuantos elementos tiene

// console.log(meses.length);

// Iterador

//numeros.forEach( function(numero) {
// console.log(numero);
//  })

// como agregar elementos al inicio o al final del arreglo

numeros.push(60,70,80);  //agrega al final del arreglo

numeros.unshift(-10,-20,-30);  // agrega al principio del arreglo

console.table(numeros);

// meses.pop(); //elimina el ultimo elemento del arreglo
// meses.shift(); // elimina el primer elemento del arreglo

meses.splice(2 ,1); // el primer valor que toma es que elemento va a eliminar basado en su indice
// el segundo valor es cuantos vas a eliminar a partir de ahi.
console.table(meses);

// Rest Operator o Spred Operator
// mantener los datos originales y crear un arreglo muevo

const nuevoArreglo = [...meses, 'Junio']; // si cambias el valor final dentro
 //  del parentesis al inicio se agrega el valor al principio

console.log(nuevoArreglo);
