//Aqui usamos la palabra public para indicar cuando una variable es publica o un metodo sea publico

class Persona{

    public nombre:string;
    public apellido: string;

    public constructor(nombre_:string,apellido_:string){
        this.nombre=nombre_
        this.apellido=apellido_
    }

    public hablar(mensaje:string):void{
        console.log(mensaje)
    }
}


let instancia = new Persona("Carlos","Diaz")
instancia.hablar("Holaa")
console.log(instancia.apellido)
