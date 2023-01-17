
import React,{useEffect, useState} from 'react'


const Characters = () => {
    const [personajes, setPersonajes] = useState([])
    fetch('https://thronesapi.com/api/v2/Characters')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        setPersonajes(data)
    }
    )

    
        
    return(   
        <main className='characters'>
        <h1 className='char_tittle'>Characters</h1>        
        <div className='char__images'>
        {personajes != null ? (
                personajes.map(personaje=> (
                    <div key={personaje.id} className='char__images'>
                        <a href={"https://thronesapi.com/assets/images/"+personaje.image}>{personaje.name}
                        <p className='char__names'>{personaje.name}</p>
                        <img src={"https://thronesapi.com/assets/images/"+personaje.image} alt="" />
                        <h3 className='char__h3'>{personaje.name}</h3>
                    </a>
                    </div>
                ))        
            ):('No characters available')}
            </div>
            </main>
    )
}

export default Characters