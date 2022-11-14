//FUNCION VALIDAR_DNI
function validarDni() {
    //Coger el contenido del input
    var dni = document.getElementById("input").value;
    //Mostrar lo que has cogido por consola
    console.log(dni);
    //Convertimos el dni a array (Array.from(lo que queremos convertir))
    Array.from(dni);
    //Variables
    var dni_regular = /^\d{8}(-|\/|\s)?[a-zA-Z]$/;
    var numeros;
    var letra;
    var let;
    //Mayusculas
    dni = dni.toUpperCase();
    //Condicion del if que comprueba que los caracteres sean correctos)
    if (dni_regular.test(dni)) {
        //Obtencion valor de variable numeros
        numeros = dni.substr(0, 8);
        console.log(numeros);
        numeros = numeros % 23;
        //Obtencion valor de variable letra
        let = dni.substr(dni.length - 1, 1);
        letra = "TRWAGMYFPDXBNJZSQVHLCKET";
        letra = letra.substring(numeros, numeros + 1);
        //Condicion del if que comprueba que la letra corresponda a los numeros introducidos)
        if (letra != let) {
            alert("Dni erroneo, la letra del NIF no se corresponde");
            return false;
        } else {
            alert("Dni correcto");
            return true;
        }
    } else {
        alert("Dni erroneo, formato no válido");
        return false;
    }
}
//FUNCION GENERAR_DNI
function generarDni() {
    //Variables
    var numeros;
    var letra;
    var dni_random;
    //Generador de 8 digitos
    numeros = Math.random().toString().slice(2, 10);
    //Calculo letra del DNI
    numero_letra = numeros % 23;
    letra = "TRWAGMYFPDXBNJZSQVHLCKET";
    letra = letra.substring(numero_letra, numero_letra + 1);
    //Concatenamos los numeros con su letra correspondiente
    dni_random = numeros + letra;
    //Muestra el resultado final
    alert(dni_random);
}