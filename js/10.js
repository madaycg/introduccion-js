// objetos
// gracias a un abjeto puedes pasar de tener tres variables a una variable ej:

/*const nombreProducto = 'monitor 20 pulgadas';
const prescioProducto = 300;
const isProductDisponible = true;
*/
const primerProducto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    isDisponible: false
}
// console.log({primerProducto});

// console.log(primerProducto.precio);
// console.log(primerProducto.nombre);
// console.log(primerProducto.isDisponible);

/*console.log(primerProducto['precio']); es otra opcion de hacer lo anterior*/

// Agregar nuevas propiedades :
primerProducto.imagen = 'imagen.jpg';
// Eliminar propiedades:
delete primerProducto.isDisponible;
console.log({primerProducto})




