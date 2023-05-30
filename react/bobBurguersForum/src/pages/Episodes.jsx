import React, { useEffect, useState } from 'react'
import Paginacion from '../components/Paginacion'
import { Link } from 'react-router-dom'



const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
        }
        fetch('https://bobsburgers-api.herokuapp.com/episodes', { headers: headers })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setEpisodes(data)
            }
            )
        console.log(episodes)
    }, [])

    const itemsPerPage = 20;
    useEffect(() => {
        setItems([...episodes].splice(0, itemsPerPage))
    }, [episodes])

    const [items, setItems] = useState([...episodes].splice(0, itemsPerPage))

    const [currentPage, setCurrentPage] = useState(0);



    const nextHandler = () => {
        const totalItems = episodes.length;

        const nextPage = currentPage + 1;

        const firstIndex = nextPage * itemsPerPage;

        if (firstIndex === totalItems) return;

        setItems([...episodes].splice(firstIndex, itemsPerPage))
        setCurrentPage(nextPage)
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1;
        if (prevPage < 0) return;

        const firstIndex = prevPage * itemsPerPage;

        setItems([...episodes].splice(firstIndex, itemsPerPage))
        setCurrentPage(prevPage)
    }


    return (
        <main className='characters'>
            <h1 className='char__tittle'>Episodes</h1>
            <div className='char__images'>
               {
                items.map((episodios) => (
                    <Link to={`/episodes/${episodios.id}`} className='episodes'>
                        <h3 className='episode__h3'>{episodios.name}</h3>
                    </Link>
                )
                )} 
            </div>
            <Paginacion currentPage={0} nextHandler={nextHandler} prevHandler={prevHandler}></Paginacion>

        </main>
    )
}

export default Episodes