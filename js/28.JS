// CLASSES

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene el siguiente precio: ${this.precio}`;
    }

    retornarPrecio() {
        return `El precio del producto es: ${this.precio}`;
    }
}

const producto1 = new Producto('Monitor curvo de 20 Pg', 800);
const producto2 = new Producto('tablet', 100);

// console.log(producto1);
console.log(producto2.formatearProducto());
console.log(producto1.retornarPrecio());

// Herencia

class Libro extends Producto {
      constructor(nombre, precio, isbn) {
            super(nombre, precio);
            this.isbn = isbn;
      }
      formatearProducto() {
          return`${super.formatearProducto()} y su ISBN es ${this.isbn}`;
      }
}

const libro = new Libro('La revolucion de JavaScript', 120, 4646232248663);

console.log(libro.formatearProducto());