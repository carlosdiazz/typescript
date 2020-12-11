function asignar_posicion(nombre, numero, posicion) {
    if (posicion === void 0) { posicion = "Por defecto"; }
    return nombre + " Jugara con el numero " + numero + " en la posicion de " + posicion;
}
//En typescript todos los parametros son requeridos
var jugador1 = asignar_posicion("Carlos", 1, "Primero");
console.log(jugador1);
//Aqui toma un parametros por defectos, si no se le agrega un parametro toma el aprametro por defecto
var jugador2 = asignar_posicion("Jose", 5);
console.log(jugador2);
