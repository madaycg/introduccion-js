function saludar(nombre) {
  return "Hola " + nombre;
}

function elevarPorDiez(valor) {
  return valor ** 10;
}

function pingPong(valor) {
  if (valor % 3 == 0 && valor % 5 == 0) {
    return "pingPong";
  }
  if (valor % 3 == 0) {
    return "ping";
  }
  if (valor % 5 == 0) {
    return "pong";
  }
  return valor;
}

const cuadrado = function (x) {
  return x * x;
};

const potencia = function (base = 0, exponente = 0) {
  let result = base;

  for (let index = 1; index < exponente; index++) {
    result *= base;
  }

  return result;
};

class Televisor {
  id;
  ancho;
  alto;
  pulgadas = 50;
  isHD = true;
  isOn = false;

  constructor(id, ancho, alto) {
    this.id = id;
    this.ancho = ancho;
    this.alto = alto;
  }

  encender() {
    this.isOn = true;
  }

  isEqual(televidor) {
    return this.id === televidor.id;
  }
}

class Persona {
  nombre;
  constructor(nombre) {
    this.nombre = nombre;
  }
}

const maday = new Persona("Maday");
const tony = new Persona("Tony");

const notas = [1, 2, 3, 4, 5];

notas.forEach(function (elementoActual) {});

function sumarMultiplosDe10Hasta(limit) {
  let result = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % 10 === 0) {
      result += i;
    }
  }

  return result;
}

function product(n1) {
  if (n1 % 2 === 0) {
    return `el numero ${n1} es par`;
  } else {
    return `el numero ${n1} es impar`;
  }
}

for (let index = 0; index < 10; index++) {
  console.log(product(index));
}

function edad(valor) {
  if (valor > 18) {
    return "Es mayor de edad";
  } else {
    return "Es menor de edad";
  }
}
console.log(edad(9));

function multiplicar(n1, n2) {
  let result = 0;

  for (let i = 0; i < n2; i++) {
    result += n1;
  }

  return result;
}
function sumarPares(limite) {
  let resultado = 0;

  for (let i = 0; i < limite; i++) {
    if (i % 2 === 0) {
      resultado += i;
    }
  }
  return resultado;
}
console.log(sumarPares(10));

function contarMultiplosDeCinco(limit) {
  let contador = 0;
  for (let index = 0; index < limit; index++) {
    if (index % 5 === 0) contador++;
  }
  return contador;
}

/**
 * Bubble sort
 * https://en.wikipedia.org/wiki/Bubble_sort
 */
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}
