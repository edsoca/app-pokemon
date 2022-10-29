
<script setup>
import PokemonCard from '../components/PokemonCard.vue'
import { onMounted, ref } from 'vue'
import petition from '../services/APIservice'
import Swal from 'sweetalert2'

//Variable per guardar els pokemons que fan Duel
const pokeDuel = ref([])

//Definim la funció per a quan salti l'esdeveniment de l'emit
const calculateDuel = (dades, elem) => {
  elem.classList.add('flipped')
  if (!pokeDuel.value.length) {
    pokeDuel.value.push(dades)
  } else {
    pokeDuel.value.push(dades)
    solveDuel()
  }
}

const solveDuel = () => {
  const pok1 = pokeDuel.value.pop()
  const pok2 = pokeDuel.value.pop()
  const winner = ref('Nobody')

  console.log(pok1, pok2)

  if (pok1.stats[1].base_stat > pok2.stats[2].base_stat) winner.value = pok1.name
  else if (pok2.stats[1].base_stat > pok1.stats[2].base_stat) winner.value = pok2.name

  Swal.fire({
    title: '<strong>Combat!</strong>',
    html:
      '<img src="' + pok1.sprites.front_default +'">' +
      '<h2>VS</h2>'+
      '<img src="'+pok2.sprites.front_default+'">' +
      '<h3>' + winner.value.toUpperCase() + ' wins!</h3>',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: 'OK',
    customClass:{
      container: 'secular'
    }
  })
}

//Sempre que tenim una variable amb ref, per canviar o llegir s'ha de posar variable.value
const pokemons = ref([])
//Variable assignada a la caixa de text amb v-model
const search = ref("")

//Fem la petició quan tota la vista està carregada
onMounted(() => {
  const listPokemons = localStorage.getItem("currentPokemons").split(",")
  listPokemons.forEach (pokemon => {
    petition.getPokemon(pokemon).then(response => {
      pokemons.value.push(response.data)
    })
  })

})

</script>

<template>
  <div class="for">
    <br />
    <section class="cards">
      <PokemonCard class="combat" v-for="pokemon in pokemons" :key="pokemon.id" :cardInfo="pokemon" shape="combat"
        @pokemonDuel="calculateDuel" />
    </section>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

.new {
  display: grid;
}

.secular {
  font-size: 2em;
    font-weight: bolder;
    font-family: 'Secular One', sans-serif;
}
li {
  cursor: pointer;
}

li:hover {
  color: hsla(160, 100%, 37%, 1);
}

.cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  color: var(--text-card);
  justify-content: center;
}

input {
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid var(--input-border);
  border-radius: 4px;
  margin: 5px auto;
  display: block;
}
</style>
