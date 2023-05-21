const authenticationModelo = require("../database/authenticationModelo")
const {v4: uuid} = require("uuid")


const checkUser = (credenciales) => {

    //Comprobar si el user existe
    const usuario = authenticationModelo.checkUser(credenciales.email, credenciales.password)
    if(!usuario) return false
    return usuario.id
};

const generateSessionId = (id_usuario) => {

    //COMPROBAMOS SI EL USUARIO TIENE UNA SESION ACTIVA
    const sessionId = authenticationModelo.checkSession(id_usuario)
    
    if(!sessionId){
        const sessionId = uuid()
        authenticationModelo.addSession(id_usuario, sessionId)
        return sessionId
    }

    return sessionId

};

const checkCookieSession = (id_session) => {
    const usuario = authenticationModelo.getUserBySessionId(id_session);
    return usuario
};

const getUser = (id_session) => {
    const usuario = authenticationModelo.getUserBySessionId(id_session);
    return usuario
}

//UPDATE

const updateUser = (user) => {
    authenticationModelo.updateUser(user)
}

//SIGNUP
const checkEmail = (email) => {
    return authenticationModelo.checkEmail(email)
}
const createUser = (datos) => {
    const {name, email, password} = datos
    const newUser = { id: uuid(),name: name, email: email, password: password, videogamesPurchased:[]};
    authenticationModelo.createUser(newUser)
}

const deleteSession = (sessionId) => {
    return authenticationModelo.deleteSession(sessionId)
  }



module.exports = {
    checkUser,
    generateSessionId,
    checkCookieSession,
    checkEmail,
    createUser,
    getUser,
    deleteSession,
    updateUser
}