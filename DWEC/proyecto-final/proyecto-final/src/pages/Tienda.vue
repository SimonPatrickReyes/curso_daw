
<template> 
   <div v-if="games"
      v-for="game in games"
      :key="game.id" class="tienda">
      <router-link class="tienda_router" :to="{ name: 'videogames.show', params: { id: game.id } }">
      <img :src=imgSrc(game) alt="videogame.name"> <h3>{{ game.name }}</h3> </router-link><ul><li v-for="tag in game.tags">{{tag}}</li></ul> <h4>{{ game.price+"€" }}</h4>
    </div>
</template>
<script>
export default {
  name:"Tienda",
data() {
    return {
      games: [],
      ruta : "../images/"
    }
  },
  async created() {
    this.games = Object.values(await this.fecthAPI())
    console.log(this.games)
  },
  methods:{
    async fecthAPI(){
        console.log("fetch")
      const res = await fetch('http://localhost:3001/api/v1/videogames')
            const data = await res.json()
            console.log(data)
            return data
    },
    imgSrc(videogame){
            return `/src/images/${videogame.img}`
        }
  },
}
</script>