<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" 
            :key="pokemon.id"
            @click="$emit('selection',pokemon.id)"
            >
            {{pokemon.name}}

          </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
          pokemons:{
            type: Array,
            required: true,
          }
        }
    }
</script>

<style >
/* Pokemon Options */
ul {
  list-style-type: none;
}
li {
  background-color: rgb(196, 194, 194);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 600;
  height: 20px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.109);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>

