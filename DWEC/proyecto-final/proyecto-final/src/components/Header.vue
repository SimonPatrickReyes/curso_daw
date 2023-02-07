<template>
    <header class="header">
        <div class="container"> 
        <router-link to="/">Tienda</router-link>    
        <router-link to="/novedades">Novedades</router-link>    
        <router-link to="/soporte">Soporte</router-link>    
        <router-link to="/comunidad">Comunidad</router-link>
        </div>
    </header>
</template>
<script>
    export default{
        name: "Header",
    }
</script>