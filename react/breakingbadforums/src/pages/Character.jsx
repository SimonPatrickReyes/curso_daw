import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {
    const [personaje, setPersonaje] = useState([])
    var  {id}  = useParams()
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer DdrSXY3HJFYGkRndX0tp'
          }
        fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`,{headers:headers})
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPersonaje(data)
            }
            )
    }, [])


    return (
        <div>
            <h1>{personaje.name}</h1>
            <img src={`${personaje.image}`} alt="{personaje.name}" />
            
          </div>
    )




}

export default Character