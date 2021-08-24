const fArray = [1, 2, 3, 8, 9];

const nArray = [5, 6, 11, 0];

const tArray = ['hola']

//const copy = farray

fArray.push(70)

console.log(fArray.concat(nArray, tArray)); // concatenar dos array,se obtiene un nuevo array, no se 
// modifica el array original, sino que se obtiene uno nuevo

console.log(fArray);
console.log(nArray);