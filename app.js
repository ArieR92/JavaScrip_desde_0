//Ariel vs Moises, pelea de Flechas.//

function Jugador (nombre) { // esta fuciona es el objeto que contiene los puntos de vida, y puntos especiales por defecto del jugador//
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;


    this.curar = function( jugadorObjetivo ){ // esta funcion cura al jugador objetivo con 20 special points//
        
    if  (this.sp >=40 ) {
        this.sp -= 40;
        jugadorObjetivo.pv += 20;

       }else {
        console.info (this.nombre + 'no tiene sp');

       }

       this.estado(jugadorObjetivo);

       
        
    }


    this.tirarFlecha = function(jugadorObjetivo) {

       if (jugadorObjetivo.pv > 40){

        jugadorObjetivo.pv -= 40;

       }
       else{
           jugadorObjetivo.pv = 0;
           console.error(jugadorObjetivo.nombre + ' esta muerto');
       }

       


    };

  




    this.estado = function( jugadorObjetivo) {

        console.info(this);
        console.info(jugadorObjetivo);

    }

};

var ariel = new Jugador('Ariel');    // aqui se definen los nombres de los jugadores, con el New y los valores por defecto//
var moises = new Jugador('Moises');


console.log( ariel);
console.log(moises);


ariel.curar(moises);
