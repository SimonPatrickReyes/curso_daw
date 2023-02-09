<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      games: [],
    }
  },
  
  created() {
    this.games = this.fecthAPI()
  },
  methods: {
    async fecthAPI() {
      const res = await fetch('http://localhost:3001/api/v1/videogames')
      const data = await res.json()
      return data
    }
  },
}
</script>

<template>
  <Header />
  <!--<component :is="currentView" />-->
  <div>
      <RouterView :key="$route.path"/>
  </div>
  <Footer />
</template>