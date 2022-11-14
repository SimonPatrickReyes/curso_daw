//Variable global con provincias
const provinciasValidas = [
  "Almería",
  "Jaén",
  "Granada",
  "Málaga",
  "Córdoba",
  "Sevilla",
  "Cádiz",
  "Huelva"
];

//Variable global con localizaciones válidas
const locValidas = [
  "CIUDAD,PROVINCIA,CP",
  "CIUDAD2,PROVINCIA2,CP2",
  "CIUDAD3,PROVINCIA3,CP3"
];

/*
************************************
************EJERCICIO 1*************
************************************
Implementar una función que compruebe la validez de los datos introducidos de los inputs relacionados con la ciudad, la provincia y el CP
Ciudad -> Sólo puede contener letras (sin números o carácteres especiales). La longitud máxima de la ciudad puede ser de 44 carácteres
Provincia -> Se debe comprobar que la provincia seleccionada existe dentro del array de provincias válidas (var global)
CP -> Sólo puede contener números y debe tener una longitud OBLIGATORIA de 5 números (XXXXX)

Por último, se debe comprobar que el CP corresponde con la provincia. Se comprueban los 2 primeros números
04XXX -> Almería
23XXX -> Jaén
18XXX -> Granada
29XXX -> Málaga
14XXX -> Córdoba
41XXX -> Sevilla
11XXX -> Cádiz
21XXX -> Huelva

Si la validación va correctamente, se deben concatenar todos los campos, sin espacios en blanco, en mayúsculas, separándose con "," y añadirse al principio del array de localizaciones válidas (locValidas) que es una variable global.
Si alguna de las validaciones no va correctamente, se debe imprimir por pantalla un mensaje de error. Los mensajes de error pueden ser mediante alert o mediante la modificación de los elementos del DOM.
Si se opta por usar alerts, el puntaje será menor que si se opta por modificar los elementos del DOM

Finalmente, almacenar ese String en el objeto predefinido LocalStorage con la key correspondiente.
*/
const checkLocation = () => {

}

/*
************************************
************EJERCICIO 2*************
************************************
Implementar una función que compruebe que la fecha de nacimiento es una fecha válida.
El año de la fecha introducida debe ser menor que el año en el que estamos.
Si no fuera así, se debe mostrar un mensaje advirtiendo que el año introducido no es correcto.

Si todo va bien, almacenar la fecha completa en el objeto predefinido LocalStorage
*/
const checkYear = () => {

}


/*
************************************
************EJERCICIO 3*************
************************************
Se especifica que la aplicación debe mantener los datos introducidos por el usuario
aunque este cierre y abra la ventana del navegador.
Para ello se debe usar el objeto LocalStorage.
Poner el valor de la key específica para cada uno de los inputs en cada input.
Ejemplo:
  Para el input Usuario -> Se debe poner el valor de la key "user"

KEYS para el objeto LocalStorage
Usuario -> "user"
Password -> "password"
Email -> "email"
FechaNacimiento -> "dBirth"
Localizacion -> "location"
*/
const putInfo = () => {

}

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
