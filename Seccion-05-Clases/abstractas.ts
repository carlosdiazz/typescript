// Una clase abstracta funciona como una plantilla
// La idea es que siempre funvione como una Superclase
// Este tipo de clase no puede ser instanciada directmaente
// Recordar que sirve como plantilla de guia

abstract class SuperClarse {
    
    abstract metodo_a_sobreescribir():void;

    saludar():void{
        console.log("Hola")
    }

}

class Clase_Derivada extends SuperClarse{
    constructor(){
        super()
    }
    metodo_a_sobreescribir():void{
        console.log("Codigo Nuevo ")
    }
}

let instancia = new Clase_Derivada()
instancia.saludar()
instancia.metodo_a_sobreescribir()