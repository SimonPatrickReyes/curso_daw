//Planteamiento

//*** Variables ***
const carrito = document.querySelector('#carrito')

const contenedorCarrito = document.querySelector('#lista-carrito tbody')

const vaciarBtn = document.querySelector('#vaciar-carrito')

const listaCursos = document.querySelector('#lista-cursos')

//Declaramoos una variable para almacenar los cursos
let articulosCarrito=[]

//*** Listeners ***

//*** Funcion que carga todos los listeners ***
cargarEventListeners()
function cargarEventListeners() {
    //Cuando haces click, añade un curso al carrito

    listaCursos.addEventListener('click', añadirCurso)

}

//*** Funciones ***

function añadirCurso(e) {
    e.preventDefault()
    if (e.target.classList.contains('agregar-carrito')) {
        //console.log('agregar al carrito')
        const curso = e.target.parentElement.parentElement
        leerDatosCurso(curso)

    }
}

function leerDatosCurso(curso) {
    console.log(curso)

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,

    }
    articulosCarrito=[...articulosCarrito, infoCurso]
    carritoHTML()
}
// Mostrar el contenido del carrito en el HTML
function carritoHTML() {
    articulosCarrito.forEach((curso) => {
        const row=document.createElement('tr')
        console.log(curso.titulo)
        row.innerHTML=`
            <td>${curso.titulo}</td>        
        `
        contenedorCarrito.appendChild(row)
    })
}


