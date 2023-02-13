<template>
   <section v-if="videogame">
    <body class="videogame">
        
    <img :src=imgPath+videogame.img alt="">
    <h1>{{ videogame.name}}</h1>
    <div>
        <p>{{ videogame.description }}</p>
    </div></body>
   </section>
</template>
<script>
export default {
    data() {
        return {
            imgPath: "/src/images/",
            games: [],
        }
    },

    async created() {
        this.games = await this.fecthAPI()
    },
    methods: {
        async fecthAPI() {
            const res = await fetch('http://localhost:3001/api/v1/videogames')
            const data = Object.values(await res.json())
            return data
        }
    },
    computed:{
        videogameId(){
            return parseInt(this.$route.params.id)
        },
        videogame(){
            return this.games.find(videogame=>videogame.id === this.videogameId)
        }
    }
}

</script>