//funciones intrucciones que relicen una accion, son reutilizables
// existen tres formas de crear funciones


// Declaracion de una funcion
// entre los parentesis se colocan los argumentos de una funcion

function sumar() {
    console.log(10 + 10);
}
sumar() //siempre debes de mandar a llamar la funcion

//Expresion de la funcion

const sumar2 = function() {
    console.log(3 + 3);
}
sumar2();


// cual es la diferencia entre las dos formas anteriores de crear funciones
// en el primer caso la puedes mandar a llamar y lugo crearla, en el segundo caso no lo puedes hacer
// esto pasa porque javascript se ejecuta en dos vueltas se conoce como Hoisting en la primera vuelta se registran
//las funciones (se conoce comp etapa de registro)en la segunda se registran las ejecuciines
// la segunda fincion(suma 2) es tomado mas bien como una variable

//--------------------------------------------
// IIFE funciones que se invocan ellas mismas
//sirven para proteger las variables que no se 
//mezclen con otro archivo
//previene que no se pueda leer desde otro archivo

/*(function() {
console.log('Esto es una funcion');
})();*/

