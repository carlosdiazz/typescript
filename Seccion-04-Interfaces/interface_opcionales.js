//Atributos opcionales
function dimensiones(medidas) {
    var area = medidas.ancho * medidas.largo;
    if (medidas.alto) {
        return "El area de tu casa es de: " + area + " mts y de alto es de " + medidas.alto + " mts";
    }
    else {
        return "El area de tu casa es de: " + area + " mts";
    }
}
console.log(dimensiones({ ancho: 10, largo: 10 }));
console.log(dimensiones({ ancho: 10, largo: 10, alto: 10 }));
