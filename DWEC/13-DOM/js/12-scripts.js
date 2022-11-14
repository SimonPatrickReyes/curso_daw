//Seleccionamos el boton
const btnflotante = document.querySelector('.btn-flotante')

//Seleccionamos el footer
const footer = document.querySelector('.footer')

//Añadimos el evento
btnflotante.addEventListener('click', mostrarFooter)//Encargado de llamar a la funcion

function mostrarFooter() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo')
        this.classList.remove('activo')
    } else {
        footer.classList.add('activo')
        this.classList.add('activo')//btn se puede sustituir por this, porque es el encargado de llamar a la funcion
    }
}

