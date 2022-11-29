//ejemplo local Storage

//Para almacenar
localStorage.setItem('nombre','Manuel')


//No podemos almacenar objetos
const producto = {
    nombre: 'curso javascript',
    precio: 20
}

//Lo convertimos en JSON
const productoString=JSON.stringify(producto)
console.log(productoString)
localStorage.setItem('carrito',productoString)

//Lo mismo con arrays

const meses=['Enero','Febrero','Marzo']
localStorage.setItem('meses',JSON.stringify(meses))