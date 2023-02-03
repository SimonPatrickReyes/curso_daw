import axios from "axios"

const pokemonTypeAPI= axios.create({
    baseURL: 'https://pokeapi.co/api/v2/type'
})

export default pokemonTypeAPI
