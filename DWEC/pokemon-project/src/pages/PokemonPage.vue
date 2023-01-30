<template>
  <div>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPictures :pokemonId='4'/>
    <PokemonOptions />
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPictures from '@/components/PokemonPictures.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions';

console.log(getPokemonOptions)

//const pokemons=[pok1,pok2,pok3,pok4]

export default {components:{PokemonOptions,PokemonPictures}}
</script>