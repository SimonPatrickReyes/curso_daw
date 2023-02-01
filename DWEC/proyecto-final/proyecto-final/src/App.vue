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
  '/soporte': Soporte
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
    this.games = [
      {
        id: 1,
        tittle:'Dead Space',
        gender:['Action', 'Adventure'],
        description:"You are Isaac Clarke, an engineer on the spacecraft USG Ishimura. You're not a warrior. You're not a soldier. You are, however, the last line of defense for the remaining living crew.",
        price:'19,99€',
      },
      {
        id: 2,
        tittle:'Red Dead Redemption 2',
        gender:['Action', 'Adventure'],
        description:"Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.",
        price:'19,79€',
      },


    ]
  }
}
</script>

<template>
  <Header />
  <component :is="currentView" />
  <Footer />
</template>