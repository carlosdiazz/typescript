//En este caso, estoy creando una funcion que podemos agregar tantos item como sea posible

function deportes(persona:string,...deportes:string[]):string{
    console.log(deportes)
    return `A ${persona} le gusta los siguientes deportes: ${deportes.join(", ")}`
}


console.log(deportes("Jose", "Basquebot","Besisbol","Tennis","Ciclismo"))

//Conclusion de los parametros

function nombre_completo(nombre1_requerido:string,apellido1_porfecto:string="Apellido",apellido2_Opcional?:string,):string{
    return `EL primer nombre es: ${nombre1_requerido}, el primer apellido es: ${apellido1_porfecto} y su segundo apellido: ${apellido2_Opcional}`
}

console.log(nombre_completo("Jose","Diaz"))