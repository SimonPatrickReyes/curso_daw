import React, { useRef } from 'react'

export const FormNoControl = () => {
  
const formulario = useRef(null)
//console.log(formulario)

const handleSubmit = e => {
    e.preventDefault()
    console.log("object");

    const datos = new FormData(formulario.current)
    //console.log(...datos.entries())
    const objetoDatos= Object.fromEntries([...datos.entries()])
    console.log(objetoDatos)

    const {todoName, todoDescripcion}= objetoDatos

    if(!todoName.trim()){
        console.log("error");
        return
    }
    console.log("Enviado al servidor");
}

    return (
    <div className='container'>
    <p>Formularios no controlados</p>
    



    <form ref={formulario} onSubmit={handleSubmit}>
        <input
        name='todoName'
        type="text"
        className='form-control mb-2'
        placeholder='Introduce el nombre de la tarea'
        />

        <input
        name='todoDescripcion'
        type="text"
        className='form-control mb-2'
        placeholder='Introduce el nombre de la tarea'
        />
        <select 
        name="todoEstado"  
        className="form-controlmb-2">     
        <option value="pendiente">Pendiente</option>
        <option value="pendiente">Completada</option>
        </select>
        <button
        className='btn btn-primary'
        type='submit'
        >Añadir
        </button>



    </form>
    
    
    
    
    </div>
  )
}

export default FormNoControl