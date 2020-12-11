//En este caso, estoy creando una funcion que podemos agregar tantos item como sea posible
function deportes(persona) {
    var deportes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        deportes[_i - 1] = arguments[_i];
    }
    console.log(deportes);
    return "A " + persona + " le gusta los siguientes deportes: " + deportes.join(", ");
}
console.log(deportes("Jose", "Basquebot", "Besisbol", "Tennis", "Ciclismo"));
//Conclusion de los parametros
function nombre_completo(nombre1_requerido, apellido1_porfecto, apellido2_Opcional) {
    if (apellido1_porfecto === void 0) { apellido1_porfecto = "Apellido"; }
    return "EL primer nombre es: " + nombre1_requerido + ", el primer apellido es: " + apellido1_porfecto + " y su segundo apellido: " + apellido2_Opcional;
}
console.log(nombre_completo("Jose", "Diaz"));
