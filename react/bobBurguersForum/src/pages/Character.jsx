import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Character = () => {
    const [personaje, setPersonaje] = useState([])
    var { id } = useParams()
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer DdrSXY3HJFYGkRndX0tp'
        }
        fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`, { headers: headers })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPersonaje(data)
            }
            )
    },
        [])

    const [favoriteMessage, setFavoriteMessage] = useState(false)

    function closeMessage() {
        setFavoriteMessage(false)
      }


    useEffect(() => {
        setFavoriteMessage(false);
        setTimeout(() => {
            setFavoriteMessage(true);setTimeout(() => {
         setFavoriteMessage(false);
        },  6000)
        }, 3000);

        


    }, [])




    return (
        <main className='character'>
            <div className='character__divSpan'>

                {favoriteMessage && <span className='character__span'>
                    <button onClick={() => setFavoriteMessage(false)} className='character__closeSpan'>✖</button>
                    ¡No olvides guardar a tus personajes favoritos haciendo click en el corazon!</span>}
            </div>
            <aside className='character__aside'>
                <h3 className="character__h3">{personaje.name}</h3>
                <img src={`${personaje.image}`} alt="{personaje.name}" className='character__img' />
                <div className="character__details">
                    <span className="details__tittle">Voiced by</span> <span>{personaje.voicedBy}</span>

                    <span className="details__tittle">Age</span> <span>{personaje.age}</span>


                    <span className="details__tittle">Gender</span> <span>{personaje.gender}</span>


                    <span className="details__tittle">Hair color</span> <span>{personaje.hairColor}</span>

                    <span className="details__tittle">Ocupation</span> <span>{personaje.occupation}</span>


                    <span className="details__tittle">First episode</span> <span>{personaje.firstEpisode}</span>


                </div>
            </aside>
        </main>
    )








}


export default Character

