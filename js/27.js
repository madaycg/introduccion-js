// Objeto literal

const producto = {
    nombre: 'tablet',
    precio: 300
}

// objeto-constructor
// Una clase es el contenedor de todos los datos, la forma, informacion que va ha tener un objeto
// en el.
function Producto(nombre, precio, isDisponible, isNew = true) {
      this.nombre = nombre;
      this.precio = precio;
      this.renombrar = function(nombre) {
          this.nombre = nombre;
      }
      this.isDisponible = isDisponible;
      this.isNew = isNew
}

 
Producto.prototype.formatearProducto = function() {
    return `Este producto ${this.nombre} tiene un precio de ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 20 PG', 800, true);
const producto3 = new Producto('Celular', 500, false);

console.log(producto2.formatearProducto(), producto3);


