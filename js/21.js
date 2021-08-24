// arrow functions
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);
// si solo es una linea se puede utilizar sin las llaves

const aprendiendo = (tecnologia) => {
  console.log(`Aprendiendo: ${tecnologia}`); // templet de string
  console.log("Aprendiendo: " + tecnologia); // normal string
};
aprendiendo("JavaScript");

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
// arreglo unidimencional el arreglo anterior

// Arreglo con objetos
const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Television 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

// ForEach pra acceder a cada uno de los elementos y comprobar
//si un elemento existe o no en un arreglo

meses.forEach( mes => {
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});

// includes es parecido al forEch

let resultado = meses.includes("Marzo");
console.log(resultado);

// en arreglos que tienen varios objetos se utiliza some
resultado = carrito.some( producto => producto.nombre === "Celular");
// reduce sumar
resultado = carrito.reduce((total, producto) => {
   total + producto.precio;
}, 0);

//filter
resultado = carrito.filter(producto => producto.precio > 400);

resultado = carrito.filter(producto => producto.nombre === "Celular");

console.log(resultado);
