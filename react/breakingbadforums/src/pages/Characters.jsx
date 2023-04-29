
import React, { useEffect, useState } from 'react'
import Paginacion from '../components/Paginacion'



const Characters = () => {
    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
        }
        fetch('https://bobsburgers-api.herokuapp.com/characters', { headers: headers })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPersonajes(data)
            }
            )
        console.log(personajes)
    }, [])

    const itemsPerPage = 20;
    useEffect(() => {
        setItems([...personajes].splice(0, itemsPerPage))
    }, [personajes])

    const [items, setItems] = useState([...personajes].splice(0, itemsPerPage))

    const [currentPage, setCurrentPage] = useState(0);



    const nextHandler = () => {
        const totalItems = personajes.length;

        const nextPage = currentPage + 1;

        const firstIndex = nextPage * itemsPerPage;

        if (firstIndex === totalItems) return;

        setItems([...personajes].splice(firstIndex, itemsPerPage))
        setCurrentPage(nextPage)
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1;
        if (prevPage < 0) return;

        const firstIndex = prevPage * itemsPerPage;

        setItems([...personajes].splice(firstIndex, itemsPerPage))
        setCurrentPage(prevPage)
    }


    return (
        <main className='characters'>
            <h1 className='char__tittle'>Characters</h1>
            <Paginacion currentPage={0} items={items} nextHandler={nextHandler} prevHandler={prevHandler}></Paginacion>
        </main>
    )
}

export default Characters