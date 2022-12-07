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
 


const handleChange = e => {
        setTodo({...todo,
            [e.target.name]:[e.target.value]})

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
        onChange={e=>handleChange(e)}
        />

        <input
        name='todoDescripcion'
        type="text"
        className='form-control mb-2'
        placeholder='Introduce el nombre de la tarea'
        onChange={e=> handleChange(e)}
        />
    
        <select>
        name="todoEstado"  
        className="form-controlmb-2"   
        <option value="pendiente">Pendiente</option>
        <option value="pendiente">Completada</option>
        onChange={e=> handleChange(e)}
        </select>

        <div className='form-check mb-2'>
            <input className='form-check-input' type="checkbox" value="" name="todoCheck" checked={todo.todoEstado} onChange={e=>handleChange(e)}></input>
            <label className='form-check-lable' htmlFor='flexCheckDefault'>Prioridad</label>
        </div>


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