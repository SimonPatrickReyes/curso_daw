//const { next } = require("cheerio/lib/api/traversing");
const videogamesService = require("../services/videogamesService");
/*
CONTROLADOR
En el controlador se implementa la lógica de la aplicación.
Desde el controlador, se llaman a los diferentes servicios que realizarán la interacción
con la Base de Datos.
En el controlador simplemente "se reparte el juego".
*/
const getAllVideogames = (req, res, next) => {
  const allVideogames = videogamesService.getAllVideogames();
  res.send(allVideogames).end();
  res.locals.mensaje = "OK";
  next();
};

/*
  Ejercicio para la clase, implementa la funcionalidad que debe tener "getOneVideogame"
  Realiza la división entre "controlador" "servicio" "modelo"
*/
const getOneVideogame = (req, res, next) => {
  let nameVideogame = req.params.prod;
  const Videogame = videogamesService.getOneVideogame(nameVideogame);
  res.send(Videogame).end();
  res.locals.mensaje = "OK";
  next();
};

//En esta funcion se define el método post de un Videogameo
//SOLO se implementa la logica de la aplicacion, es decir, simplemente
//valida que existen datos en el cuerpo de la petición y que
//si se inserta, manda una página con el Videogameo insertado
//y si no, envía el código de estado correspondiente y una página de error
const postOneVideogame = (req, res, next) => {
  const { body } = req;

  if (!body.name || !body.price) {
    res.status(400).send({ mensaje: "Datos Incompletos" }).end();
    res.locals.mensaje = "NOT OK";
  } else {
    const newVideogame = {
      id: body.id,
      name: body.name,
      description: body.description,
      price: body.price,
      tags: body.tags,
      development: body.development,
      img:body.img
    };

    const createdVideogame = videogamesService.createOneVideogame(newVideogame);

    if (createdVideogame) {
      res.send(createdVideogame).end();
      res.locals.mensaje = "OK";
    } else {
      res.status(409).send({ mensaje: "Entrada duplicada" }).end();
      res.locals.mensaje = "NOT OK";
    }
  }
  next();
};

const putOneVideogame = (req, res, next) => {
  let nameVideogame = req.params.prod;
  res.send(`<h1>PUT ${nameVideogame}</h1>`).end();
  res.locals.mensaje = "OK";
  next();
};

const deleteOneVideogame = (req, res, next) => {
  let { prod } = req.params;

  const deletedVideogame = videogamesService.deleteOneVideogame(prod);

  if (!deletedVideogame) {
    res.status(400).send({ mensaje: "Videojuego no eliminado" }).end();
    res.locals.mensaje = "NOT OK";
  } else {
    res.send(deletedVideogame).end();
    res.locals.mensaje = "OK";
  }
  next();
};

module.exports.getAllVideogames = getAllVideogames;
module.exports.getOneVideogame = getOneVideogame;
module.exports.postOneVideogame = postOneVideogame;
module.exports.putOneVideogame = putOneVideogame;
module.exports.deleteOneVideogame = deleteOneVideogame;