// como unir dos objetos
const primerProducto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    isDisponible: false
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}
// De esta manera uno dos objetos
const nuevoProducto = {...primerProducto, ...medidas};

console.log({primerProducto, medidas, nuevoProducto});