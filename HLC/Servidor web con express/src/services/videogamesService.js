const videogamesModelo = require("../database/videogamesModelo");
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
  const allvideogames = videogamesModelo.getAllVideogames();
  return allvideogames;
};

const getOneVideogame = (nombre) => {
  const videogame = videogamesModelo.getOneVideogame(nombre);
  return videogame;
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

  return videogamesModelo.createOneVideogame(newVideogame);
};

const deleteOneVideogame = (nombre) => {
    //Si ese producto no existe en la base de datos, devuelvo false
  const videogame = videogamesModelo.getOneVideogame(nombre);
  if (!videogame) {
    return false;
  }

  //Elimino el producto
  videogamesModelo.deleteOneVideogame(nombre);

  //Si en este punto ese producto ya no se encuentra en la BDD, entonces es que se ha eliminado bien
  if(!videogamesModelo.getOneVideogame(nombre)){
    return videogame
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