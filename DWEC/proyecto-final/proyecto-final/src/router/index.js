import { createRouter, createWebHistory } from "vue-router"
import Tienda from '../pages/Tienda.vue'
import Novedades from '../pages/Novedades.vue'
import Soporte from '../pages/Soporte.vue'
import Comunidad from '../pages/Comunidad.vue'


const routes = [
    {path: '/',name: 'Tienda', component: Tienda},
    {path: '/novedades',name: 'Novedades', component: ()=>import('@/pages/Novedades.vue')},
    {path: '/soporte',name: 'Soporte', component:  ()=>import('@/pages/Soporte.vue')},
    {path: '/comunidad',name: 'Comunidad', component:  ()=>import('@/pages/Comunidad.vue')},
]



const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router