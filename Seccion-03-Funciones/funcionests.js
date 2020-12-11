//Funciones en Type
function multiplicar(x, y) {
    return x * y;
}
var producto = multiplicar(2, 4);
console.log(producto, "Producto");
var sumatoria = 10;
console.log(sumatoria, "Sumatoria sin funcion");
function sumar() {
    sumatoria++;
}
sumar();
console.log(sumatoria, "Sumatoria con funcion");
