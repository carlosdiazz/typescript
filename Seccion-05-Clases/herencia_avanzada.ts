class Animales{

    nombre:string

    constructor(nombre_:string){
        //console.log("Entre en el constructor de Animales")
        this.nombre=nombre_
    }
    
    caminar(distancia:number=0):void{
        console.log(`${this.nombre} camino ${distancia} metros`)
    }
}

class Serpierte extends Animales{
    longitud:number;
    //Si nosotros tenemos una sub clase y queremos crear la funcion cosntructor, debemos de llamar la funcion super
    //Y pasarle lo necesario para llenar la funcion contructor de la clase grande
    constructor(nombre_:string,longitud_:number){
        //console.log("Entre en el constructor de sepriente")
        super (nombre_)                                                 //Es un cnaal de envio, enviamos informacion a la super clases Animal
        this.longitud=longitud_                                        

    }

    //Aqui vamos a sobreescibir un metodo
    caminar(distancia_:number=5){
        console.log("Deslizando..."+distancia_+" metros")
        //Aqui llamamos a el metodo de la clase amdre
        //super.caminar(distancia_)
    }

}


class caballo extends Animales{
    constructor(nombre_:string){
        super(nombre_)
    }
}


let sam = new Serpierte("San la serpiente",23)

let zeus = new caballo("Zeus el caballo")

sam.caminar()
sam.caminar(14)



zeus.caminar(5)