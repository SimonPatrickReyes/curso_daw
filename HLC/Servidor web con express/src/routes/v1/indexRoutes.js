const express = require("express")
const router = express.Router()
const videogamesRouter = require("./videogamesRoutes")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1

router.route("/")
    .get((req, res, next)=>{
        res.send("<h1>Hola Mundo</h1>").end();
        res.locals.mensaje = "OK"
        next()
    });
router.use("/videogames", videogamesRouter);

module.exports.router = router
