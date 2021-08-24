const numerosDePrueba = [12, 3, 4, 6, 38, 15, 50, 60, 70];

function elevarAlCuadradoSinBonus(numerosEnteros) {
  const result = [];
  for (let index = 0; index < numerosEnteros.length; index++) {
    if (index % 2 === 0) {
      const elementoActual = numerosEnteros[index];
      result.push(elementoActual ** 2);
    }
  }
  return result;
}

function elevarAlCuadradoSinBonus22(numerosEnteros) {
  const result = [];

  numerosEnteros.forEach(function (elementoActual, index) {
    if (index % 2 === 0) {
      result.push(elementoActual ** 2);
    }
  });

  return result;
}

function elevarAlCuadradoSinBonus44(numerosEnteros) {
  return numerosEnteros
    .filter((_, i) => i % 2 === 0)
    .map((elementoActual) => elementoActual ** 2);
}

// console.log(elevarAlCuadradoSinBonus44(numerosDePrueba));

const arrayNuevo = [10, 12, 11, 5, 22, 31];

function elevarNumerosAlCuadrado(valores) {
  const result = [];
  for (let index = 0; index < valores.length; index++) {
    const value = valores[index];
    if (value % 2 === 0) {
      result.push(value ** 2);
    }
  }
  return result;
}
// console.log(elevarNumerosAlCuadrado(arrayNuevo));

arrayNuevo.forEach(function (element, index) {
  // console.log(element, index);
});

const arrayUno = [1, 8, 8, 11, 31];

const arraydos = [15, 89, 25, 96, 15, 0];

const unoAlDiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primerEjercicio = arrayUno.concat(arraydos);

// console.log(primerEjercicio);
// filtar elementos pares de un array y devolverlo en uno nuevo.
function filtrarValores(valores) {
  const nuevoFiltrado = [];

  for (let index = 0; index < valores.length; index++) {
    const item = valores[index];
    if (item % 2 === 0) {
      nuevoFiltrado.push(item);
    }
  }
  return nuevoFiltrado;
}

const segundoEjercicioConFor = filtrarValores(arrayUno);

function isParNumber(number) {
  return number % 2 == 0;
}

const tercerEjercicioConFilter = filter(unoAlDiez, (number) => false);
const filtrarEnSegundoArray = arraydos.filter((number) => number % 2 === 0);

console.log(tercerEjercicioConFilter);

function ejemploDeRecibirUnCallback(callback) {
  console.log("mi logica");
  callback();
}

function sayHello() {
  console.log("Hellow");
}

// ejemploDeRecibirUnCallback(sayHello)

const parrafoDelHtml = document.getElementById("saludo");

parrafoDelHtml.addEventListener("click", sayHello);

function filter(array, callback) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (typeof callback === "function" && callback(element, index, array)) {
      result.push(element);
    }
  }

  return result;
}
