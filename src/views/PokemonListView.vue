<script setup>
import PokemonCard from '../components/PokemonCard.vue'
import { onMounted, ref } from 'vue'
import petition from '../services/APIservice'
import { computed } from '@vue/reactivity';

//Definim la variable per als blocs condicionals
const complete = false;

//Sempre que tenim una variable amb ref, per canviar o llegir s'ha de posar variable.value
const pokemons = ref([])
//Variable assignada a la caixa de text amb v-model
const search = ref("")

const maxPokeNumber = 905

//Generem 10 números aleatoris entre 1 i el màxim número de Pokemons
const randomPokemons = () => {
  const pokenumbers = ref([]);                // Array of selected Pokemons

  for(let i=0; i<10; i++) {
    let pokenumber = (Math.floor(Math.random() * maxPokeNumber)+1).toString();
    if (!pokenumbers.value.includes(pokenumber) && pokenumber > 0) {
      pokenumbers.value.push(pokenumber);
    }
  }
  //Guardem els números de Pokemon generats al LocalStorage
  localStorage.setItem("currentPokemons", pokenumbers.value.join(","));
  return pokenumbers;
}

//Fem la petició quan tota la vista està carregada
onMounted(() => {
  const listPokemons = randomPokemons();
  listPokemons.value.forEach (pokemon => {
    petition.getPokemon(pokemon).then(response => {
      pokemons.value.push(response.data)
    })
  })

})

//Computed és una variable que va canviant
const filteredPokemons = computed(
  () => {
    return pokemons.value.filter((itemPokemon) => {
      return itemPokemon.name.toLowerCase().includes(search.value.toLowerCase())
    })
  }
)

</script>

<template>
  <div class="for">
    <!-- a dintre de v-model podem posar el nom d'una variable que s'anirà actualitzant a mesura que s'ompli la caixa de text -->
    <input v-model="search" type="text" placeholder="Type to search...">
    <br />
    <section class="cards">
      <PokemonCard v-for="pokemon in filteredPokemons" :key="pokemon.id" :cardInfo="pokemon" shape="simple" />
    </section>

  </div>
</template>

<style>
.new {
  display: grid;
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

input[type=text] {
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
