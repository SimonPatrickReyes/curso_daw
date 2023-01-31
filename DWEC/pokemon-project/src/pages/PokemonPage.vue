<template>
  <div>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPictures :pokemonId="pokemon.id"/>
    <PokemonOptions />
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPictures from '@/components/PokemonPictures.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions';

console.log(getPokemonOptions)

//const pokemons=[pok1,pok2,pok3,pok4]

export default {
  components:{PokemonOptions,PokemonPictures},
  data(){
    return{
      pokemon:{},
      pokemonsArray:[],

    }
  },
  methods:{
    async mixedPokemons(){
      this.pokemonsArray= await getPokemonOptions()
      const randomPokemon = Math.floor(Math.random()*4)
      this.pokemon = this.pokemonsArray[randomPokemon]

    },
  },
  mounted(){
    this.mixedPokemons()
  },
  }
</script>