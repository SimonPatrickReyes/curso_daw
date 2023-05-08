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
        <main className='character'>
        <aside className='character__aside'>
        <h3 class="character__h3">{personaje.name}</h3>
        <img src={`${personaje.image}`} alt="{personaje.name}" className='character__img'/>
        <div class="character__details">
        <span class="details__tittle">Voiced by</span> <span>{personaje.voicedBy}</span>




        <span class="details__tittle">Gender</span> <span>{personaje.gender}</span>


        <span class="details__tittle">Hair color</span> <span>{personaje.hairColor}</span>
       
        <span class="details__tittle">Ocupation</span> <span>{personaje.occupation}</span>


        <span class="details__tittle">First episode</span> <span>{personaje.firstEpisode}</span>


      </div>
        </aside>
        </main>
    )








}


export default Character

