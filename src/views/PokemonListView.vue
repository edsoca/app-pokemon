
<script setup>
  import PokemonCard from '../components/PokemonCard.vue'
  import {onMounted, ref} from 'vue'
  import petition from '../services/APIservice'
  import { computed } from '@vue/reactivity';

  //Sempre que tenim una variable amb ref, per canviar o llegir s'ha de posar variable.value
  const pokemons = ref([])
  //Variable assignada a la caixa de text amb v-model
  const search = ref("")

  
  //Fem la petició quan tota la vista està carregada
  onMounted(() => {
    petition.getPokemons().then( response => pokemons.value = response.results)
  })
  
  //Computed és una variable que va canviant
  const filteredPokemons = computed(
    () => {
      return pokemons.value.filter( (itemPokemon) => {
        return itemPokemon.name.toLowerCase().includes( search.value.toLowerCase() )
      })
    }
  )

</script>

<template>
  <div class="for">
    <h1>API exemple</h1>
    <!-- a dintre de v-model podem posar el nom d'una variable que s'anirà actualitzant a mesura que s'ompli la caixa de text -->
    <input v-model="search" type="text" placeholder="Type to search...">
    <br/>
    <section class="cards">
      <PhotoCard v-for="pokemon in filteredPokemons" :key="pokemon.url.split('/')[7]" :photoInfo="pokemon"/>
    </section>
    
  </div>
</template>

<style>
.new{
  display: grid;
}

li {
  cursor: pointer;
}

li:hover{
  color: hsla(160,100%,37%,1);
}

.cards{
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  color: var(--text-card);
}
</style>
