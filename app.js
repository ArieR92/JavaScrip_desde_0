//Ariel vs Moises, pelea de Flechas.//

function Jugador (nombre) {
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;


    this.curar = function( jugadorObjetivo ){

    }
}

var ariel = new Jugador('Ariel');
var moises = new Jugador('Moises');


console.log( ariel);
console.log(moises);