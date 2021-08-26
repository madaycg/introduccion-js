// foreach
const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 200 },
    {nombre: 'Televisor', precio: 500 },
    {nombre: 'Tablet', precio: 200 },
    {nombre: 'Audifonos', precio: 80 },
    {nombre: 'Teclado', precio: 100 },
    {nombre: 'Celular', precio: 400 },
    {nombre: 'Bocina', precio: 600 },
    {nombre: 'Laptop', precio: 250 },
]

// forEach SE UTILIZA PARA MANDAR POR CONSOLA O EN EL HTML EL ARREGLO
// el forEach reliza un accion para cada elemento

// carrito.forEach(valores => console.log(valores.precio));
// console.log(
//     carrito.map((producto, index) => {
//         return {...producto, id: index, tony: false};
//     })
// );

const data = [
    {nombre: 'maday', apellido: 'concepcion', edad: 27},
    {nombre: 'tony', apellido: 'duran', edad: 29}
]

// console.log(
//     data.map(persona => ({name: persona.nombre, lastName: persona.apellido, age: persona.edad}))
// );

console.log(
    data.map(persona => persona.edad)
);
console.log(
        data.map(persona => ({name: `${persona.nombre} ${persona.apellido}`, age: persona.edad}))
     );
// el map se utiliza para crear un nuevo arreglo