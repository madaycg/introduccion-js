// Notification api
const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) => {
    if (resultado == "granted") {
      new Notification("Esta es una notificacion", {
        icon: "/img/avatar.jpg",
        body: "codigo con Juan",
      });
    }
  });
});
