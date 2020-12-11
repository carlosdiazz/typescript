// Una clase abstracta funciona como una plantilla
// La idea es que siempre funvione como una Superclase
// Este tipo de clase no puede ser instanciada directmaente
// Recordar que sirve como plantilla de guia
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SuperClarse = /** @class */ (function () {
    function SuperClarse() {
    }
    SuperClarse.prototype.saludar = function () {
        console.log("Hola");
    };
    return SuperClarse;
}());
var Clase_Derivada = /** @class */ (function (_super) {
    __extends(Clase_Derivada, _super);
    function Clase_Derivada() {
        return _super.call(this) || this;
    }
    Clase_Derivada.prototype.metodo_a_sobreescribir = function () {
        console.log("Codigo Nuevo ");
    };
    return Clase_Derivada;
}(SuperClarse));
var instancia = new Clase_Derivada();
instancia.saludar();
instancia.metodo_a_sobreescribir();
