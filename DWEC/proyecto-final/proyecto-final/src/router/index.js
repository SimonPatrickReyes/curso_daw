import { createRouter, createWebHistory } from "vue-router"
import Tienda from '../pages/Tienda.vue'



const routes = [
    {path: '/',name: 'Tienda', component: Tienda},
    {path: '/novedades',name: 'Novedades', component: ()=>import('@/pages/Novedades.vue')},
    {path: '/soporte',name: 'Soporte', component:  ()=>import('@/pages/Soporte.vue')},
    {path: '/comunidad',name: 'Comunidad', component:  ()=>import('@/pages/Comunidad.vue')},
    {path: '/videogames/:id', name: 'videogames.show', component: ()=>import('@/pages/VideogamesShow.vue')}
]



const router=createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'vue-active-link'
})

export default router