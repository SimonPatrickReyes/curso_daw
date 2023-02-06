const videojuegosModelo = require("../database/videojuegosModelo");
const { v4: uuid } = require("uuid");
/*
SERVICIOS
En esta parte de la aplicación vamos a implementar toda la parte de interacción
con la base de datos.
Aquí implementaríamos la lógica del negocio. Es decir, las reglas que se aplican
a la hora de resolver "problemas reales".
https://stackoverflow.com/questions/4816692/what-is-a-good-example-of-a-service-layer-in-asp-net-mvc/4817935#4817935
*/
const getAllVideogames = () => {
  const allVideojuegos = videojuegosModelo.getAllVideogames();
  return allVideojuegos;
};

const getOneVideogame = (nombre) => {
  const videojuego = videojuegosModelo.getOneVideogame(nombre);
  return videojuego;
};

const createOneVideogame = (newVideogame) => {
  let today = new Date().toISOString();

  //"Construyo" el nuevo objeto, estableciendo un id
  newVideogame = {
    ...newVideogame,
    id: uuid(),
    createdAt: today,
    updatedAt: today,
  };

  return videojuegosModelo.createOneVideogame(newVideogame);
};

const deleteOneVideogame = (nombre) => {
    //Si ese producto no existe en la base de datos, devuelvo false
  const videojuego = videojuegosModelo.getOneVideogame(nombre);
  if (!videojuego) {
    return false;
  }

  //Elimino el producto
  videojuegosModelo.deleteOneVideogame(nombre);

  //Si en este punto ese producto ya no se encuentra en la BDD, entonces es que se ha eliminado bien
  if(!videojuegosModelo.getOneVideogame(nombre)){
    return videojuego
  } else {
    return false
  }
};

module.exports = {
  getAllVideogames,
  getOneVideogame,
  createOneVideogame,
  deleteOneVideogame
};