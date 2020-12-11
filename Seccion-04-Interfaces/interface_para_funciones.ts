interface Login{
    (email:string, password:string):boolean;
}

let sesion: Login;

sesion=function(email_:string,password_:string){
    if (email_.length>10 && password_.length>10){
        return true
    }else{
        return false
    }
}