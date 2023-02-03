import axios from "axios";

const pokemonAPI= axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

const typeAPI= axios.create({
    baseURL: 'https://pokeapi.co/api/v2/type'
})

export default {pokemonAPI,typeAPI}
