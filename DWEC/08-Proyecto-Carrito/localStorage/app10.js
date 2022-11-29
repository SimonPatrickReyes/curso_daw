//Como recuperamos esos datos...

const nombbre=localStorage.getItem('nombre')

console.log(nombre)

const productoJSON= localStorage.getItem('carrito')
console.log(productoJSON)

const producto=JSON.parse(productoJSON)
console.log(producto)

console.log(JSON.parse(localStorage.getItem(meses)))

