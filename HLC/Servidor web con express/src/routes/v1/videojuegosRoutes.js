const express = require("express")
const router = express.Router()
const videogamesController = require("../../controllers/videogamesController")

router.route("/")
    .get(videogamesController.getAllVideogames) //http://localhost:3001/api/v1/videogames/
    .post()
router.route("/:prod")
    .get(videogamesController.getOneVideogame) //http://localhost:3001/api/v1/videogames/deadspace
    .delete(videogamesController.deleteOneVideogame)
    .put(videogamesController.putOneVideogame)
    .post(videogamesController.postOneVideogame)

module.exports = router
