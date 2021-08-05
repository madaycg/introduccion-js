// String o Cadenas de Texto

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo"';
const producto2 = 'Monitor HD"'
// lenhth para extension

console.log(tweet.length); /*nos indica cuantos caracteres tiene la cadena de texto producto*/ 
// usar el .length hace a la funcion un metodo

// IndexOf te va ha decir en que posicion se encuentra un texto que estas buscando.(RETORNA POSICION)

console.log(tweet.indexOf('JavaScript'))
console.log(producto2.indexOf('tablet')) /* En este caso como no lo va a poder encontrar en la consolta va ha figurar
                                        un numero negativo*/

// Includes (retorna true o false)

console.log(tweet.includes('JavaScript'))
console.log(producto2.includes('tablet'))