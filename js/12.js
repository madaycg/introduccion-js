const primerProducto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    isDisponible: false
}

Object.freeze(primerProducto); /*con ests funcion no podemos 
añadir mas valores al objeto ni que sea modificado*/
primerProducto.imagen = 'imagen.jpg';
// Object.seal(primerProducto) tine la misma funcion que el freeze pero si te permite modificar
// las propiedades de un objeto,ej
/* producto.precio = 'NUEVO PRECIO';

/*PARA SABER SI UN OBJETO HA SIDO SELLADO*/

console.log(Object.isFrozen(primerProducto)) /*figurara un true en la consola*/

console.log(primerProducto)