/**
 * Operadores
 */
/*

= Asignacion
* Multiplicacion
/ Divicion
- Resta
+ Suma
+= Suma y asigna
-= Resta y asigna
/= Divide y asiga
*= Multiplica y asigna



*/

/**
 * Operadores logicos
 * todos retornan un booleano (true o false)
 */
/*

== Igualdad
=== Igualdad estricta
!= Desigualdad
!== Desigualdad estricta
< Meno que
> Mayor que
<= Menor o igual
>= Mayor o igual
&& Y
|| O
?? Si es undefined o null

*/

/**
 * Sentencias
 */
/*

if() {}
if() {} else {}
if() {} else if() {}

*/

/**
 * Object (Objeto)
 * Es una abstraccion de una unidad de la vida real
 * tiene un estado, comportamiento y puede interactuar con otros objetos
 * 
 * Estructura
 * {clave: valor} 
 * Ej:
var fogon = {
    color: 'blanco',
    alto: 1.5,
    ancho: 1,
    fuego: 0,
    encender: function () {
        this.fuego = 1
    },
    apagar: function () {
        this.fuego = 0
    },
    isEncendido: function() {
        return this.fuego !== 0
    },
    pintar: function (color) {
        this.color = color
    }
}
 */
// objetos se crean con llaves

const vaso = {
    color: 'verde',
    alto: 11,
    area: 10,
    volumen: 10,
    texto: undefined,
    llenarTodo: function () {
        this.volumen = this.area
    },
    llenarMedio: function () {
        this.volumen = this.area / 2
    },
    vaciar: function () {
        this.volumen = 0
    },
    isLleno: function () {
        return this.volumen == this.area
    },
    isMedio: function () {
        const mitadArea = this.area / 2;

        return 
        this.volumen ==  mitadArea ||
        this.volumen == mitadArea + 1 ||
        this.volumen == mitadArea - 1
    },
    isVacio: function () {
        return this.volumen == 0
    },
    pintar: function (color) {
        this.color = color;
    },
    dibujar: function (texto) {
        this.texto = texto
    },
    recipientes: {
        lapiz: {
            altura: 1
        },
        lapicero: 'normal'
    }
}


console.log('esta vacio', vaso.isVacio(), vaso);
vaso.vaciar()
console.log('esta vacio', vaso.isVacio(), vaso);

vaso.pintar('rojo')

vaso.dibujar('Juan 3:16')
console.log(vaso);


console.log(vaso.recipientes.lapiz.altura);



