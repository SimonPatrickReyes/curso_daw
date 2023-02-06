<script>
import Tienda from './pages/Tienda.vue'
import Novedades from './pages/Novedades.vue'
import Comunidad from './pages/Comunidad.vue'
import Soporte from './pages/Soporte.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const routes = {
  '/': Tienda,
  '/novedades': Novedades,
  '/comunidad': Comunidad,
  '/soporte': Soporte,
}

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      currentPath: window.location.hash,
      games: [],
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  },
  created() {
    this.games = this.fecthAPI()
  },
  methods: {
    async fecthAPI() {
      const res = await fetch('http://localhost:3001/api/v1/videojuegos')
      const data = await res.json()
      return data
    }
  },
}
</script>

<template>
  <Header />
  <component :is="currentView" />
  <router-link to="/">Tienda</router-link>
  <router-link to="/novedades">Novedades</router-link>
  <router-link to="/soporte">Soporte</router-link>
  <router-link to="/comunidad">Comunidad</router-link>
  <router-view></router-view>
  <Footer />
</template>