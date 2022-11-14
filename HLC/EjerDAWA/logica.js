//Simon Patrick Dominguez de los Reyes

//Variable global con direcciones válidas
const dirValidas = [
  "C/SENDA PERDIDA,88",
  "C/ALFARERIAS,56,1,A",
  "C/PINTOR ZULOAGA,56,4,D",
];

/*
************************************
************EJERCICIO 1*************
************************************
Implementar una función que compruebe los datos relativos a la dirección
Calle-> El formato debe seguir un formato tipo C/xxxxx, donde las x pueden ser sólo letras.
  Nota*. Si los caracteres “C/” no aparecen, el programa se lo concatena al principio de la cadena
Numero y Piso -> Deben ser sólo números. No se especifica longitud máxima
Puerta-> Puede estar compuesto únicamente por 1 letra.

TODA la información relativa a la dirección debe estar en MAYÚSCULAS

Si la validación va correctamente, se deben concatenar todos los campos, separándose con ","
y añadirse al principio del array de direcciones (dirValidas) que es una variable global

Finalmente, si todo va bien, almacenar el string creado en el paso anterior en el objeto predefinido LocalStorage
*/

/*Expresiones Regulares*/

var RegExp_calle = /^((\w+)\s(\w+))*[A-Z]\s*$/;

var RegExp_num_piso = /^[0-9]*$/;

var RegExp_puerta = /^[A-Z]{1}$/;

/*Valores*/

var fecha_nac = document.getElementById("inputFechaNac").value;

var calle = document.getElementById("inputCalle").value;

var numero = document.getElementById("inputNumero").value;

var piso = document.getElementById("inputPiso").value;

var puerta = document.getElementById("inputPuerta").value;

var cadena=new Array();

let fecha_actual = "2022-11-08";

const checkDirInfo = () => {
  console.log("Ejer 1. Método check Direccion");

  //Condicional para calle
  if (RegExp_calle.test(calle)) {
    console.log("correcto");
    cadena.push("C/"+calle);  //Cuando se introduce la calle, si cumple con la RegExp, le añade el "C/"

  } else {
    alert("Nombre de calle inválido");
  }

  //Condicional tanto para el numero como el piso
  if (RegExp_num_piso.test(numero,piso)) {
    console.log("correcto");
    cadena.push(numero);
    cadena.push(piso);

  } else {
    alert("Piso y/o numero inválido");
  }

  //Condicional para puerta
  if (RegExp_puerta.test(puerta)) {
    console.log("correcto");
    cadena.push(puerta);
    //Se separa el array con todos los datos con ","
    dirValidas.push(cadena.join(','));
    //Se añade al array de direcciones validas
    console.log(dirValidas);

  } else {
    alert("Letra puerta inválida");
  }


  console.log("Array:"+cadena);
};

/*
************************************
************EJERCICIO 2*************
************************************
Implementar una función que compruebe que la fecha de nacimiento es una fecha válida.
El año de la fecha introducida debe ser menor o igual que el año en el que estamos.
Si no fuera así, se debe mostrar un mensaje advirtiendo que el año introducido no es correcto.

Si todo va bien, almacenar la fecha completa en el objeto predefinido LocalStorage
*/
const checkYear = () => {
  console.log("Ejer 2. Método checkYear");
  if (fecha_nac > fecha_actual) {
    alert("Fecha invalida");
  } else {
    localStorage.setItem("fecha_valuida", "fecha_nac");
    console.log("Fecha de nacimiento: "+fecha_nac);
  }
};

/*
************************************
************EJERCICIO 3*************
************************************
Se especifica que la aplicación debe mantener los datos introducidos por el usuario
aunque este cierre y abra la ventana del navegador.
Para ello se debe usar el objeto LocalStorage.
Poner el valor, de la key específica para cada uno de los inputs, en cada input.
Ejemplo:
  Para el input Usuario -> Se debe poner el valor de la key "user"

KEYS para el objeto LocalStorage
Usuario -> "user"
Password -> "password"
Email -> "email"
Fecha de Nacimiento -> "dBirth"
Direccion Válida -> "direction"
*/
const putInfo = () => {
  console.log("Ejer 3. Método putInfo");
  localStorage.key
};

/**
 * No modificar este método. Permite la ejecución del programa de forma correcta.
 * Para la resolución de los ejercicios, simplemente codifica lo que se pide dentro
 * de la función correspondiente.
 * @param {*} e
 */
const checkForm = (e) => {
  e.preventDefault();

  checkDirInfo();
  checkYear();
};

function onIniciar() {
  const formulario = document.querySelector("#formularioEjercicio");
  formulario.addEventListener("submit", checkForm);
  putInfo();
}

window.onload = onIniciar();
