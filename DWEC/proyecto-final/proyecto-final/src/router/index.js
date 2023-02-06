import { createRouter, createWebHistory } from "vue-router"
import Tienda from '../pages/Tienda.vue'
import Novedades from '../pages/Novedades.vue'
import Soporte from '../pages/Soporte.vue'
import Comunidad from '../pages/Comunidad.vue'


const routes = [
    {path: '/',name: 'Tienda', component: Tienda},
    {path: '/novedades',name: 'Novedades', component: Novedades},
    {path: '/soporte',name: 'Soporte', component: Soporte},
    {path: '/comunidad',name: 'Comunidad', component: Comunidad},
]



const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router