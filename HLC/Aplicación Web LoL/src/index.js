const express = require("express");
const app = express();

const cors = require("cors");

const process = require("process");

const today = new Date().toLocaleString();
const datosPersonajes = require("./data/personajes_es.json");

app.use(cors());

app.use((req, res, next) => {
  console.log(`\x1b[36m%s\x1b[0m`, `[INFO] Peticion recibida: ${today}`);

  console.log(`\x1b[36m%s\x1b[0m`, `[INFO] Metodo usado: ${req.method}`);
  console.log(`\x1b[36m%s\x1b[0m`, `[INFO] URL usada: ${req.originalUrl}`);
  next();
});

app.get("/", (req, res, next) => {
  res.sendFile("/html/index.html", { root: __dirname });
});

app.get("/datosPersonajes.json", (req, res, next) => {
  res.send(datosPersonajes);
});

app.get("/logica.js", (req, res, next) => {
  res.sendFile("/js/logica.js", { root: __dirname });
});

app.get("/styles.css", (req, res, next) => {
  res.sendFile("/css/styles.css", { root: __dirname });
});

app.get("/sprites/campeonesMD/:nombrePj", (req, res, next) => {
  let nombrePj = req.params.nombrePj;
  console.log(`\x1b[36m%s\x1b[0m`, `[GET] Pidiendo PJ: ${nombrePj}`);
  res.sendFile(`/images/campeonesMD/${nombrePj}.jpg`, { root: __dirname });
});

app.get("/favicon.ico", (req, res, next) => {
  res.sendFile("/images/logo/favicon.ico", { root: __dirname });
});

app.get("/images/logo/logo_vector.svg", (req, res, next) => {
  res.sendFile("/images/logo/logo_vector.svg", { root: __dirname });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("\x1b[41m%s\x1b[0m", `Servidor escuchando en puerto ${PORT}`);
});
