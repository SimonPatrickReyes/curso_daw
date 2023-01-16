
import React,{useEffect, useState} from 'react'
import { todosPersonajes } from '../functions/funcionts'

const Characters = () => {

    const [personajes, setPersonajes]= useState(null)

    useEffect(()=>{
        todosPersonajes(setPersonajes)
    },[])

    return(           
        <div>
        {personajes != null ? (
                personajes.map(personaje=> (
                    <div key={personaje.id}>
                        <a href="#">{personaje.name}</a>
                        <img src={personaje.image} alt="" />
                    </div>
                ))        
            ):('No characters available')}
            </div>
    )
}

export default Characters