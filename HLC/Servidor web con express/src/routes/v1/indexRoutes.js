const express = require("express")
const router = express.Router()
const videogamesRouter = require("./videogamesRoutes")
const imagesRouter = require("./imagesRoutes")
const users = require("./usersRoutes")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1

router.route("/")
    .get((req, res, next)=>{
        res.send("<h1>Hola Mundo</h1>").end();
        res.locals.mensaje = "OK"
        next()
    });
router.use("/videogames", videogamesRouter);
router.use("/users",users);
router.use("/images", imagesRouter);

module.exports.router = router
