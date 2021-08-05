const porciento = document.getElementById('porciento')
const aceptar = document.getElementById('aceptar')
const agua = document.querySelector('.agua')

const vaso = {
    area: 300,
    volumen: 0,
    llenar: function(porciento) {
        this.volumen = this.area * porciento / 100;
        agua.style.height = this.volumen + 'px';
    }
}


aceptar.addEventListener('click', function() {
    vaso.llenar(porciento.value)
})

porciento.addEventListener('change', function() {
    vaso.llenar(porciento.value)
})

