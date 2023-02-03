<template>
  <nav>
    <button @click="guestPokemon">Adivinar Pokemon</button>
    <button @click="guestGeneration">Adivinar Generación</button>
    <button @click="guestType">Adivinar Tipo</button>
  </nav>
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPictures :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonsArray" @selection="checkPokemon"/>
  </div>
  <template v-if="showPokemon">
    <h2 >{{ message }}</h2>
    <button @click="newGame">Jugar de nuevo</button>
  </template>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPictures from '@/components/PokemonPictures.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions';
import getPokemonType from '@/helpers/getPokemonType'

console.log(getPokemonOptions)

//const pokemons=[pok1,pok2,pok3,pok4]

export default {
  components:{PokemonOptions,PokemonPictures},
  data(){
    return{
      modePokemon:true,
      modeType:false,
      modeGeneration:false,
      pokemon: null,
      pokemonsArray: [],
      showPokemon: false,
      showAnswer:false,
      message: '',
    }
  },
  methods:{
    guestPokemon(){
      this.modePokemon=true
      this.modeType=false
      this.modeGeneration=false
    },
    guestGeneration(){
      this.modePokemon=false
      this.modeType=false
      this.modeGeneration=true


    },
    guestType(){
      this.modePokemon=false
      this.modeType=true
      this.modeGeneration=false
    },


    async mixedPokemons(){
      this.pokemonsArray = await getPokemonOptions()
      const randomPokemon = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonsArray[randomPokemon]
    },
    checkPokemon(pokemonId) {
      this.showPokemon = true
      if (pokemonId === this.pokemon.id) {
        this.message = "Has acertado!"
      } else {
        this.message = `Respuesta incorrecta, ${this.pokemon.name}`
      }
    },
    newGame(){
      this.pokemon= null
      this.pokemonsArray= []
      this.showPokemon= false
      this.showAnswer=false
      this.message= ''
      this.mixedPokemons()
    }

  },
  mounted(){
    this.mixedPokemons()
  },
  }
</script>