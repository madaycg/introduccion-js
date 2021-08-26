// THIS

const reservacion = {
    nombre: 'Maday',
    apellido: 'Concepcion',
    total: 455,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y el total a pagar es ${this.total}`);
    }
}

const parrafoSaludo = document.getElementById('saludo')

function pruebaThis(){
    console.log(this.nomber);
}

parrafoSaludo.addEventListener('click', pruebaThis)

reservacion.informacion()

