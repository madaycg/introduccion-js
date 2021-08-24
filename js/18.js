function sumar(numero1 = 0, numero2 = 0) { //numero1, 2 son parametros
    console.log(numero1 + numero2);
}
sumar(10, 10); // Argumentos o los valores reales.
// de esta manera la funcion es mas reutilizable y dinamica
sumar(3, 3);
sumar(2, 6);
sumar(3); //en este caso se activa el parametro por defaul
// que seria numero1 = 0

//los parametros por defaul van ha ser ejecutados
// cuando no esten presentes los argumentos
const sumar2 = function(n1,n2) {
    console.log(n1 + n2);
}
sumar2(5, 10);