const userRegistrado ="Beni"
const passwordRegistrado="patata"

function onLogin(usuario,contrasea) {
    if(usuario === userRegistrado && contrasea === passwordRegistrado){
        return "Bienvenid@"
    }else{ return "Usuario desconocido"
    }
}

module.exports.funLoggeo= onLogin
module.exports.usuario=userRegistrado;
