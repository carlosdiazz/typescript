//Aqui usamos la palabra public para indicar cuando una variable es publica o un metodo sea publico
var Persona = /** @class */ (function () {
    function Persona(nombre_, apellido_) {
        this.nombre = nombre_;
        this.apellido = apellido_;
    }
    Persona.prototype.hablar = function (mensaje) {
        console.log(mensaje);
    };
    return Persona;
}());
var instancia = new Persona("Carlos", "Diaz");
instancia.hablar("Holaa");
console.log(instancia.apellido);
