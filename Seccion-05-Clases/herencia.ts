class Animal{

    caminar(distancia:number):void{
        console.log(`Se mueve ${distancia} metros`)
    }

}

//Creamos la sub Clases

class Gato extends Animal{

    maullar():void{
        console.log("Miaaauuuuu")
    }
}


let gatito = new Gato();            //Aqui creamos una isntancia


gatito.caminar(41)

gatito.maullar()