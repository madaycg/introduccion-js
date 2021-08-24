var nombre = "Maday";
//alert(nombre);

// TIPOS DE DATOS
//* Numericos - float(decimal), ej
function saludar(params) {
    return `Hola ${params}`
}
var numero = 2;

//*string o cadenas de texto

var miTexto = 'Hola';
var newText = 'mundo'
// el tamplate string te permite concatenar string y ejecutar codigo JS
console.log(`${miTexto} ${newText}: ${2+2} ${saludar(nombre)}`);

//* Array o arreglo

var meses = ['Enero', 'Febrero', 'marzo'];

console.log(meses[2])

//* Objeto
/*
* Es una abstraccion de una unidad de la vida real
 * tiene un estado, comportamiento y puede interactuar con otros objetos
 *
 * Estructura
 * {clave: valor} 
 * Ej:*/
var fogon = {
    color: 'blanco',
    alto: 1.5,
    ancho: 1,
    fuego: 0,
    hasHorno: true,
    encender: function () {
        this.fuego = 1
    },
    apagar: function () {
        this.fuego = 0
    },
    isEncendido: function() {
        return this.fuego !== 0
    },
    pintar: function (color) {
        this.color = color
    }
}
// la clase es una plantilla o molde para crear objetos
class Persona {
    nombre = 'Carlos'
    edad = 16
    alto 
    constructor(nombre) {
        this.nombre = nombre
    }
}

const tony = new Persona('Tony')
console.log(tony)

//* Boolean

