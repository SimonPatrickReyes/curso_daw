<template>
    <header>
        <router-link to="/">Tienda</router-link>    |
        <router-link to="/novedades">Novedades</router-link>    |
        <router-link to="/soporte">Soporte</router-link>    |
        <router-link to="/comunidad">Comunidad</router-link>
        <div class="container">
            <router-view></router-view>
        </div>
    </header>
</template>
<script>
    export default{
        name: "Header",
    }
</script>