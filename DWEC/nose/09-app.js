const reproductor = {
  repoducir: function (id) {
    return `Reproduciendo la cancion...${id}`;
  },
  pausar: function () {
    return `Pausando la cancion...`;
  },
  borrar: function (id) {
    return `Borrando la cancion...${id}`;
  },
  reproducirPLaylist: function (nombre, id) {
    return `Reproduciendo la playlist ${nombre}...${id}`;
  },
};
console.log(first)(reproductor.repoducir(20));
console.log(first)(reproductor.pausar());
