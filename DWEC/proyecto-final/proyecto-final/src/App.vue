<script>
import Tienda from './pages/Tienda.vue'
import Novedades from './pages/Novedades.vue'
import Comunidad from './pages/Comunidad.vue'
import Soporte from './pages/Soporte.vue'
import Header from './components/Header.vue'


const routes = {
  '/': Tienda,
  '/novedades': Novedades,
  '/comunidad': Comunidad,
  '/soporte': Soporte
}

export default {
  components:{
    Header
  },
  data() {
    return {
      currentPath: window.location.hash
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
  }
}
</script>

<template>
  <Header/>
  <component :is="currentView" />
</template>