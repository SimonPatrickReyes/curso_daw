//Como eliminar elemetos de localStorage

localStorage.removeItem()


//NO tenemos un metodo para modificar, si queremos modificar...

const meses= JSON.parse(localStorage.getItem(meses))

meses.push('nuevoMes')

localStorage.setItem('')
