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
var Animales = /** @class */ (function () {
    function Animales(nombre_) {
        //console.log("Entre en el constructor de Animales")
        this.nombre = nombre_;
    }
    Animales.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log(this.nombre + " camino " + distancia + " metros");
    };
    return Animales;
}());
var Serpierte = /** @class */ (function (_super) {
    __extends(Serpierte, _super);
    //Si nosotros tenemos una sub clase y queremos crear la funcion cosntructor, debemos de llamar la funcion super
    //Y pasarle lo necesario para llenar la funcion contructor de la clase grande
    function Serpierte(nombre_, longitud_) {
        var _this = 
        //console.log("Entre en el constructor de sepriente")
        _super.call(this, nombre_) //Es un cnaal de envio, enviamos informacion a la super clases Animal
         || this;
        _this.longitud = longitud_;
        return _this;
    }
    //Aqui vamos a sobreescibir un metodo
    Serpierte.prototype.caminar = function (distancia_) {
        if (distancia_ === void 0) { distancia_ = 5; }
        console.log("Deslizando..." + distancia_ + " metros");
        //Aqui llamamos a el metodo de la clase amdre
        //super.caminar(distancia_)
    };
    return Serpierte;
}(Animales));
var caballo = /** @class */ (function (_super) {
    __extends(caballo, _super);
    function caballo(nombre_) {
        return _super.call(this, nombre_) || this;
    }
    return caballo;
}(Animales));
var sam = new Serpierte("San la serpiente", 23);
var zeus = new caballo("Zeus el caballo");
sam.caminar();
sam.caminar(14);
zeus.caminar(5);
