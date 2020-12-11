//Funciones en Type

function multiplicar(x:number,y:number):number{
    return x*y
}

let producto:number = multiplicar(2,4)
console.log(producto,"Producto")


let sumatoria:number = 10
console.log(sumatoria,"Sumatoria sin funcion")

function sumar():void{
    sumatoria++
}
sumar()
console.log(sumatoria,"Sumatoria con funcion")