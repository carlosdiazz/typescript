
//Aqui los parametro son obligatorios
function nombre_completo(nombre:string, apellido:string):string{
    return `${nombre} ${apellido}`
}

//En TS los parametros son obligarorios
//En JS los parametros no son obligatorios 
let resultado:string = nombre_completo("Carlos","Diaz")
console.log(resultado)



//Aqui los parametros no son obligatorios
function nombre_completo2(nombre:string, apellido?:string):string{
    if(apellido){
        return `${nombre} ${apellido}`
    }else{ 
        return nombre
    }
}

let resultado2:string = nombre_completo2("Jose","Diaz")
console.log(resultado2)