//Aqui los parametro son obligatorios
function nombre_completo(nombre, apellido) {
    return nombre + " " + apellido;
}
//En TS los parametros son obligarorios
//En JS los parametros no son obligatorios 
var resultado = nombre_completo("Carlos", "Diaz");
console.log(resultado);
//Aqui los parametros no son obligatorios
function nombre_completo2(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return nombre;
    }
}
var resultado2 = nombre_completo2("Jose", "Diaz");
console.log(resultado2);
