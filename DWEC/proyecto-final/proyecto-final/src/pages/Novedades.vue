<template>
    <div class="novedades">
        <h1>Novedades</h1>
        <div v-if="games">
           <router-link v-for="videogame in games" :key="videogame.id"
                :to="{ name: 'videogames.show', params: { id: videogame.id } }">
                <img :src=imgSrc(videogame) alt="videogame.name">
                <h2>{{ videogame.name }}</h2>
            </router-link>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            games: [],
        }
    },

    async created() {
        this.games = await this.fecthAPI()
    },
    methods: {
        imgSrc(videogame){
            return `/src/images/${videogame.img}`
        },
        async fecthAPI() {
            const res = await fetch('http://localhost:3001/api/v1/videogames')
            const data = Object.values(await res.json())
            return data
        }
    },
    computed: {
        videogameId() {
            return parseInt(this.$route.params.id)
        },
        videogame() {
            return this.games.find(videogame => videogame.id === this.videogameId)
        }
    },
    name: "Novedades"
}

</script>