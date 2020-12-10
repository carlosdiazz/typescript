
let nombre:string = "Carlos"
let nombre2:string = "Jose"
let apellido:string = "Diaz"

let completo:string = "El nombre es: " + nombre + " y el apellido es: " + apellido 

console.log(completo)


let completo2:string=`
        El nombre es ${nombre} y el apellido es ${apellido}
`

console.log(completo2)



let numero3:number = 12

let suma:string=`La suma es: ${numero3+1}`

console.log(suma)



//Metodos sencillos
//Para saber que se encuentra en la posocion 10 del string
console.log(completo2.charAt(10))

//Convertir el string en mayuscula
console.log(completo2.toUpperCase())
