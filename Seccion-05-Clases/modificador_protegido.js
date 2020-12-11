// Los modificadores protegidos, actuan igual que un mdoificador privado, escepto que pueden ser accedidos desde la subclases
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
var Instrumentos = /** @class */ (function () {
    function Instrumentos(nombre_) {
        this.nombre = nombre_;
    }
    return Instrumentos;
}());
var Piano = /** @class */ (function (_super) {
    __extends(Piano, _super);
    function Piano(nombre_) {
        var _this = _super.call(this, nombre_) || this;
        _this.de_cuerda = false;
        return _this;
    }
    Piano.prototype.obtener_nombre = function () {
        console.log(this.nombre);
    };
    return Piano;
}(Instrumentos));
var mi_piano = new Piano("EL piano Azul");
mi_piano.obtener_nombre();
