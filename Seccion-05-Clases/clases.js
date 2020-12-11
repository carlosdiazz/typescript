var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_creacion_, color_, puerta_) {
        this.kilometraje = 0;
        this.marca = marca_;
        this.fecha_creacion = fecha_creacion_;
        this.color = color_;
        this.puerta = puerta_;
    }
    //Aqui creamos un metodo
    Vehiculo.prototype.avanzar = function () {
        this.kilometraje = this.kilometraje + 100;
    };
    return Vehiculo;
}());
var mi_carro = new Vehiculo("Honda", "2020", "Rojo", 4); //Aqui creo una nueva instancia
console.log(mi_carro.marca); //Imprime la marca
console.log(mi_carro.kilometraje); //Imprime el kilometraje
mi_carro.avanzar(); //ejecuta la funcion avanzar
console.log(mi_carro.kilometraje); //imprime kilometraje actual
var mi_carro2 = new Vehiculo("Toyota", "2020", "Blanco", 2);
console.log(mi_carro2.kilometraje);
