function accionSegunEdad(edad, mayorAccion, menorAccion) {
  if (edad > 18) {
    mayorAccion();
  } else {
    menorAccion();
  }
}

function holaMayor() {
  console.log("mayor");
}
function holaMenor() {
  console.log("menor");
}

accionSegunEdad(12, holaMayor, () => console.log("hola menor"));

//************ */

function obtenerUsuario(fn) {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json())
    .then((user) => fn(user));
}

obtenerUsuario((usuarioObtenido) => console.log(usuarioObtenido));

function saludarSegunEdad(edad) {
  return edad > 18
    ? "Hola MAYOR de edad"
    : edad < 10
        ? "Hola NINO"
        : "Hola JOVEN";
}
