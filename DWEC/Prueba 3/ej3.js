//Declararmos el array bidimensional
arrayBi = [
    [5, 4, 6],
    [2, 9, 3],
    [8, 1, 7],
];
//Declararmos el array en el que iremos introduciendo las variables
arraySimple = [];

/*Declararmos la funcion aplanarArray en la que declaramos un bucle para que recorra 
la "primera dimension", y otro bucle para recorrer su segunda dimension, y cuando lo haga,
que los valores que lea los vaya metiendo en el otro array*/
function aplanarArray() {
    for (let i = 0; i < arrayBi.length; i++) {
        for (let j = 0; j < arrayBi[i].length; j++) {
            arraySimple.push(arrayBi[i][j]);
        }
    }
    document.write("Array aplanada: "+arraySimple)//    =[ 5, 4, 6, 2, 9, 3, 8, 1, 7 ]
}
//Llamada a la funcion
aplanarArray(arrayBi);

/*Una vez aplanado el array, creamos otra funcion en la que mediante tres variables(i,j y aux)
intercambiamos las posiciones de los valores y una vez que se cumpla la condicion del if
este se detendra con el array ordenador de menor a mayor*/
function ordenar(arraySimple) {
    for (let i = 0; i < arraySimple.length - 1; i++) {
        for (let j = i + 1; j < arraySimple.length; j++) {
            if (arraySimple[i] > arraySimple[j]) {
                //Intercambiamos valores
                let aux = arraySimple[i];
                arraySimple[i] = arraySimple[j];
                arraySimple[j] = aux;
            }
        }
    }
}
//Llamada a la funcion
ordenar(arraySimple);
document.write("<br>Array ordenada: "+arraySimple);//    =[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
