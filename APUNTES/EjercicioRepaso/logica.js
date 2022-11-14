const usuariosRegistrados = [
  { user: "diego", email: "diego@g.educaand.es", pass: "1234567890" },
  { user: "demonSlayer_xX", email: "fulanita@g.educaand.es", pass: "shurmana69" },
  { user: "javi_2000", email: "jsm.berja.2000@g.educaand.es", pass: "tiranosaurusRex1999" },
  { user: "sofi_guirao", email: "sofi_guirao@g.educaand.es", pass: "sofi_guirao" },
  { user: "Aman_Ortiga", email: "erTitoAmanci@g.educaand.es", pass: "iLuvExploitingPple" },
];

const inputPass = document.querySelector("#inputPassword");
const inputUser = document.querySelector("#inputUser");

const checkUser = function(){

  let user = inputUser.value;
  let pass = inputPass.value;
  let userEnElSistema = false

  for (const usuarioRegistrado of usuariosRegistrados) {
    
    if(usuarioRegistrado.user === user && usuarioRegistrado.pass === pass){
      userEnElSistema = true;
      break
    }
  }

  if (userEnElSistema) {
    putInfo(user, pass);
    window.location.href = "landing.html";
  }

}

const putInfo = function(user, pass) {

  window.localStorage.setItem("user", user)
  window.localStorage.setItem("password", pass)

}

const getInfo = function(){
  if(window.localStorage.getItem("user")){
    inputUser.value = window.localStorage.getItem("user");
  }

  if (window.localStorage.getItem("pass")) {
    inputPass.value = window.localStorage.getItem("pass");
  }
}


/**
 * Funcion para comprobar el formulario
 * @param {*} e : Event -> Evento que se pasa por defecto. Se pone e.preventDefault para que no se recargue la página
 */
const checkForm = (e) => {
  e.preventDefault()

  checkUser()
}

function onIniciar() {
  const formulario = document.querySelector("#formularioEjercicio");
  formulario.addEventListener("submit", checkForm);
  getInfo()
}

window.onload = onIniciar();
