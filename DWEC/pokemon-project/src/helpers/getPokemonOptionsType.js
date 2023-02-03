import pokemonAPI from "../api/pokemonAPI"

const getPokemons =()=>{
    const pokemonsArr= Array.from(Array(19))
    return pokemonsArr.map((arg, index) => index+1)
}

const getPokemonOptionsType = async()=>{
    const mixedPokemons= getPokemons().sort(() => Math.random()-0.5)
    const pokemons = await getPokemonTypes(mixedPokemons.splice(0,4))
    return pokemons
}

const getPokemonTypes=async ([p1,p2,p3,p4])=>{

    const promiseArr =[
        pokemonAPI.get(`/${p1}`),
        pokemonAPI.get(`/${p2}`),
        pokemonAPI.get(`/${p3}`),
        pokemonAPI.get(`/${p4}`)
    ]

const [pokemon1,pokemon2,pokemon3,pokemon4]= await Promise.all(promiseArr)

return[
    {type: pokemon1.data.type,id: pokemon1.data.id},
    {type: pokemon2.data.type,id: pokemon2.data.id},
    {type: pokemon3.data.type,id: pokemon3.data.id},
    {type: pokemon4.data.type,id: pokemon4.data.id},

]
}

export default getPokemonOptionsType