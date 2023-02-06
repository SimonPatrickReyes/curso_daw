const express = require("express")
const router = express.Router()
const videojuegosRouter = require("./videojuegosRoutes")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1

router.route("/")
    .get((req, res, next)=>{
        res.send("<h1>Hola Mundo</h1>").end();
        res.locals.mensaje = "OK"
        next()
    });
router.use("/videojuegos", videojuegosRouter);

module.exports.router = router
