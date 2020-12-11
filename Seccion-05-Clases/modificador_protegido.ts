// Los modificadores protegidos, actuan igual que un mdoificador privado, escepto que pueden ser accedidos desde la subclases

class Instrumentos{
    protected nombre:string;
    constructor(nombre_:string){
        this.nombre=nombre_
    }
}

class Piano extends Instrumentos{
    private de_cuerda:boolean =false
    constructor(nombre_:string){
        super(nombre_)
    }

    public obtener_nombre():void{
        console.log(this.nombre)
    }
} 
let mi_piano= new Piano("EL piano Azul")
mi_piano.obtener_nombre()