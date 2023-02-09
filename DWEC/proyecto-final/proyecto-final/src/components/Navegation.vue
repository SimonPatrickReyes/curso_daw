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
    text-shadow: 1px 1px 20px black, 0 0 1em #eee, 0 0 0.2em #eee;
    font-weight: 600;
    font-size: 1rem;
}
</style>