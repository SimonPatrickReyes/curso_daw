
<template> 
   <div v-if="games"
      v-for="game in games"
      :key="game.id" class="tienda">
      <a href='#'><img :src="`/images/${game.img}`" alt=""><h3>{{ game.nombre }} <p>{{ game.precio+"€" }}</p></h3></a> 
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
      const res = await fetch('http://localhost:3001/api/v1/videojuegos')
            const data = await res.json()
            console.log(data)
            return data
    }
  },
}
</script>