const authenticationService = require("../services/authenticationService")

const login = (req, res, next) => {
  //0. Obtenemos los diferentes datos de la petición
  const { email, password } = req.body;
  const sessionId = req.cookies.sessionId;
  if (!email && !password && !sessionId) {
    res.status(401).send({ mensaje: "NO AUTORIZADO" }).end();
  }
  if (email && password) {
    const credenciales = {
      email,
      password
    }
    const idUserLogueado = authenticationService.checkUser(credenciales)
    if (!idUserLogueado) {
      res.status(401).send({ mensaje: "NO AUTORIZADO" }).end();
    }
    const sessionId = authenticationService.generateSessionId(idUserLogueado)
    res.cookie("sessionId", sessionId, { httpOnly: false })
    const userData = authenticationService.getUser(sessionId)
    res.status(200).send({ message: "AUTORIZADO", user: userData }).end();
  }
  else if (sessionId) {
    if (authenticationService.checkCookieSession(sessionId)) {
      res.cookie("sessionId", sessionId, { httpOnly: false })
      const userData = authenticationService.getUser(sessionId)
      res.status(200).send({ message: "AUTORIZADO", user: userData }).end()
    }
  }
  res.status(500).send("NO AUTORIZADO").end()
};

const signup = (req, res, next) => {

  //0. Obtenemos los diferentes datos de la petición
  const { name, email, password } = req.body;
  //1º Comprobar si el email ya está en uso
  if (authenticationService.checkEmail(email)) {
    res.status(401).send({ mensaje: "EMAIL EN USO" });
    return;
  }
  //2º Registrar el usuario
  const datos = {
    name,
    email,
    password
  }
  authenticationService.createUser(datos)
  return res.status(200).json({ message: 'Usuario creado con éxito' });
};

const logout = (req, res, next) => {
  authenticationService.deleteSession(req.cookies.sessionId);
  // // No enviar la cookie en futuras respuestas
  res.clearCookie("sessionId");
  res.status(200).send(req.cookies.sessionId).end();
}

const getUser = (req, res, next) => {
  const sessionId = req.cookies.sessionId;
  const userData = authenticationService.getUser(sessionId)
  res.status(200).send(userData).end();
}

const updateUser = (req, res, next) => {
  const { newUser } = req.body;
  const sessionId = req.cookies.sessionId;
  authenticationService.updateUser(newUser)
  res.status(200).send("update user").end();
};

module.exports = {
  login,
  signup,
  logout,
  getUser,
  updateUser
};