import axios from 'axios'

const todosPersonajes = async(state)=>{
    const peticion =  axios.get('https://www.breakingbadapi.com/api/characters')
    state(peticion.data.results)
}

export{
    todosPersonajes
}