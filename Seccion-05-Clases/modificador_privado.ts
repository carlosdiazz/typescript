//Si tenemos algo privado no podemos acceder a ella fuera de la clase contenedora

class Jugador{

    //A esta variable yo no puedo acceder si no la modifico por el mismo metodo de clase
    private posicion:string;

    constructor(posiccion_:string){
        this.posicion = posiccion_
    }

    obtener_posicion():void{
        console.log(this.posicion)
        
        //Aqui estoy llamando la funcion que esta privada desde la clase
        this.sobreescribir()
    }

    private obtener_posicion_privado():void{
        console.log(this.posicion)
    }
    
    private sobreescribir():void{
        this.posicion="Segundo"
        console.log(this.posicion)
    }
}


let Carlos=new Jugador("Primero")
Carlos.obtener_posicion()