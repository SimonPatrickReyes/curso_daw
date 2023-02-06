const express = require("express")
const router = express.Router()
const videojuegosController = require("../../controllers/videojuegosController")

router.route("/")
    .get(videojuegosController.getAllVideogames) //http://localhost:3001/api/v1/videojuegos/
    .post()
router.route("/:prod")
    .get(videojuegosController.getOneVideogame) //http://localhost:3001/api/v1/videojuegos/colacao
    .delete(videojuegosController.deleteOneVideogame)
    .put(videojuegosController.putOneVideogame)
    .post(videojuegosController.postOneVideogame)

module.exports = router
