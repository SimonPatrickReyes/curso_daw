//IMPORTAMOS MODULO EXPRESS
const express = require("express")
//CREAR UNA APLICACION EXPRESS
const app = express()

app.set("view engine", "ejs")

app.get('/', (request, response) => {
    response.render("index")
})


const PORT = 3001
app.listen(PORT, ()=>{
    console.log("\x1b[41m%s\x1b[0m", `Servidor escuchando en puerto ${PORT}`);
})