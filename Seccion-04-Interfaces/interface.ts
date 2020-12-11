interface Perro{
    //Un atributo
    nombre:string;

}

function adoptar(masscota:Perro):void{
    console.log(`Yo adopte a ${masscota.nombre}`)
}

let mi_mascota = {nombre:"Ruby"}


adoptar(mi_mascota)