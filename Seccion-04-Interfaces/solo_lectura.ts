
//Nosotros no podemos reescribir la cordenadas X, poruqe el atributo es solo de lectura
interface Punto{
    readonly coordenada_x:number;
    readonly coordenada_y:number;
}

let punto: Punto = {coordenada_x:10,coordenada_y:10}
console.log(punto)