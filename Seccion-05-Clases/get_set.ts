// Un get se utiliza para obtener informacion
// Un set se utiliza para modficar informacion
//Para compilar este codigo escirbo lo siguiente en el temrinar............ 
// tsc --target ES2016 get_Set

let permiso:boolean=true;

class Trabajador{
    private nombre:string=" ";
 
    public get nombre_completo() : string {
        return this.nombre
    }

    set colocar_nombre(nombre_:string){
        if(permiso){
            this.nombre=nombre_
        }else{
            console.log("Sin permiso")
        }
    }
}

let empleado = new Trabajador()
//empleado.nombre="Jose"
console.log(empleado.nombre_completo)

empleado.colocar_nombre="Juan"
console.log(empleado.nombre_completo)