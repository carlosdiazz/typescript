
function asignar_posicion(nombre:string, numero:number, posicion:string="Por defecto"):string{
    return `${nombre} Jugara con el numero ${numero} en la posicion de ${posicion}`
}

//En typescript todos los parametros son requeridos
let jugador1:string = asignar_posicion("Carlos",1,"Primero")
console.log(jugador1)

//Aqui toma un parametros por defectos, si no se le agrega un parametro toma el aprametro por defecto
let jugador2:string = asignar_posicion("Jose",5)
console.log(jugador2)