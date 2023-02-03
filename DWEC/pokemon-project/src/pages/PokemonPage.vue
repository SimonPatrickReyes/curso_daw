<template>
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else>
    <h1>¿Quien es este pokemon?</h1>
    <p>Numero de aciertos seguidos: {{wins}}</p>
    <p>Numero de fallos seguidos: {{fails}}</p>
    <PokemonPictures :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonsArray" @selection="checkPokemon"/>
  </div>
  <template v-if="endGame">
    <h2 >{{ message }}</h2>
    <button @click="newGame">Jugar de nuevo</button>
  </template>
  <button @click="clue" class="clue_button">Pista</button>
  <p>Si activas la pista, pierdes tu racha de aciertos</p>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPictures from '@/components/PokemonPictures.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions';

console.log(getPokemonOptions)

export default {
  components:{PokemonOptions,PokemonPictures,},
  data(){
    return{
      pokemon: null,
      pokemonsArray: [],
      showPokemon: false,
      showAnswer:false,
      message: '',
      endGame:false,
      fails:0,
      wins:0
      
    }
  },
  methods:{
    async mixedPokemons(){
      this.pokemonsArray = await getPokemonOptions()
      const randomPokemon = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonsArray[randomPokemon]
    },
    checkPokemon(pokemonId) {
      this.showPokemon = true
      if (pokemonId === this.pokemon.id) {
        this.message = "¡Has acertado!"
        this.fails=0
        this.wins++
      } else {
        this.message = `Respuesta incorrecta, era ${this.pokemon.name}`
        this.fails++
        this.wins=0
      }
      this.endGame=true
    },
    newGame(){
      this.endGame=false
      this.pokemon= null
      this.pokemonsArray= []
      this.showPokemon=false
      this.showAnswer=false
      this.message= ''
      this.mixedPokemons()
      
    },
    clue(){
      this.showPokemon = true
      this.wins=0
      this.fails=0
    },
    

  },
  mounted(){
    this.mixedPokemons()
  },
  }
</script>

<style>
.clue_button{
  width:200px;
}
</style>