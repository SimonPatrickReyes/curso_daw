<template><div class="container"> 
    <router-link to="/">Tienda</router-link>    
    <router-link to="/novedades">Novedades</router-link>    
    <router-link to="/soporte">Soporte</router-link>    
    <router-link to="/comunidad">Comunidad</router-link>
</div>
</template>
<script>
    export default{
        name: "Navegation",
        methods:{
            async fetchVideogame(){
                const res=await fetch("http://localhost:3001/api/v1/videogames")
                const gamesData= Object.values(await res.json())
                return gamesData
            }
        }
    }
</script>

<style>
.container .vue-active-link{
    text-shadow: 0px 1px 8px black, 0 0 0 rgb(5, 10, 10), 0 0 0.2em #eee;
    font-weight: 600;
    font-size: 1rem;
    border-width: 1rem;
}
</style>