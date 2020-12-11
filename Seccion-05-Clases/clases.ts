
class Vehiculo{

    //Los atributos o propiedades sin inicialiar
    marca:string;
    fecha_creacion:string;
    color:string;
    puerta:number;
    kilometraje:number=0;

    constructor(marca_:string,fecha_creacion_:string,color_:string, puerta_:number){
        this.marca= marca_
        this.fecha_creacion=fecha_creacion_
        this.color=color_
        this.puerta=puerta_
 
    }

    //Aqui creamos un metodo
    avanzar(){
        this.kilometraje=this.kilometraje + 100
    }
}


let mi_carro=new Vehiculo("Honda","2020","Rojo",4)      //Aqui creo una nueva instancia

console.log(mi_carro.marca)                            //Imprime la marca
console.log(mi_carro.kilometraje)                      //Imprime el kilometraje
mi_carro.avanzar()                                     //ejecuta la funcion avanzar
console.log(mi_carro.kilometraje)                      //imprime kilometraje actual

let mi_carro2= new Vehiculo("Toyota","2020","Blanco",2)
console.log(mi_carro2.kilometraje)