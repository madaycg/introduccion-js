// Variables

var producto = 'Audifonos Gamer'; // Iniciar variable y asignarle valor

var disponible; // iniciamos la variable pero sin valor. 

// producto = true; // Reasignando el valor de la variable - ya tenia un valor pero le estamos dando uno nuevo

// moltiples variables en una sola linea:

var pruducto1 = 'computadora',
    disponible1 = true,
    categoria = 'computadoras';
/* 
no pueden comenzar una variable con numero ni guion intermedio
var 1disponible; 
var -disponible;
*/
var disponible_;

// Estilos para variables
var nombre_producto = 'Monitor HD'; // underscore
var nombreProducto = 'Monitor HD'; // Camelcase
var NombreProducto = 'Monitor HD'; // Pascal Case
var nombreproducto = 'Monitor HD';

console.log(producto);

// ALGUNOS APUNTES IMPORTANTES
 
// la variable es un contenedor de un valor
// tanto let como var podemos cambiar su valor luego de haberle asignado uno anteriormente.
var a = 5
a = 10
// pero sin embargo con la palabra reservada const, no podemos modificar el valor
// ya establecido ej
 const b = 10,
 b = 5 // esto marcara un error
 // const nos ayuda a definir variables que no deben ser modificadas posteriormente p inmutables.

// si queremos definir variables que no tenemos un valor preestablecido se utiliza la variable var
// mientras que con la palabra reservada let, siempre tenemos que definir su valor