//Any se puede usar por si no sabemos que tipo de dato es lo que no dara la variable, para evitar errores ponemos any que aceptar cualquier dato

let objecto:any

objecto=4
console.log(objecto)
objecto=true
console.log(objecto)
objecto="No se"
console.log(objecto)

//Asi podemos crear una lista con cualqueir datos
let list:any[] = [10,20,"No se",true,"12"]
//Es mejor evitar usar any