<script setup>
  import PokemonCard from '../components/PokemonCard.vue'
  import {ref, onMounted} from 'vue'
  import petition from '../services/APIservice'

  const props = defineProps(['pokemonId'])

  const pokemonData = ref({})

  const data_fetched = ref(false)

  onMounted(() => {
    petition.getPokemon( props.pokemonId ).then( response => {
      pokemonData.value = response.data
      data_fetched.value = true
    })
  })

</script>

<template>
  <div class="card">
    <PokemonCard v-if="data_fetched" :cardInfo="pokemonData" shape="complete"/>
  </div>
</template>

<style>
.new{
  display: grid;
}
</style>
