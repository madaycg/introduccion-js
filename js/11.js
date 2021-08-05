// Objeto 
const primerProducto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    isDisponible: false
}
// como puedo seleccionar una propiedad del objeto y hacer una variable
//forma anterior de hacerlo
/*const precioprimerProducto = primerProducto.precio;

console.log(precioprimerProducto)

const nombreProductoprimerProducto = primerProducto.nombreProducto
console.log(nombreProductoprimerProducto)*/

//Destructuring

const {precio, nombreProducto } = primerProducto;

console.log(precio, nombreProducto);
