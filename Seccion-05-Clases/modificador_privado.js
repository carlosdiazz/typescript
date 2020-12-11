//Si tenemos algo privado no podemos acceder a ella fuera de la clase contenedora
var Jugador = /** @class */ (function () {
    function Jugador(posiccion_) {
        this.posicion = posiccion_;
    }
    Jugador.prototype.obtener_posicion = function () {
        console.log(this.posicion);
        this.sobreescribir();
    };
    Jugador.prototype.obtener_posicion_privado = function () {
        console.log(this.posicion);
    };
    Jugador.prototype.sobreescribir = function () {
        this.posicion = "Segundo";
        console.log(this.posicion);
    };
    return Jugador;
}());
var Carlos = new Jugador("Primero");
Carlos.obtener_posicion();

