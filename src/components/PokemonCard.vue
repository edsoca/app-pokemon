<script setup>
    //import {ref} from 'vue'
    const props = defineProps(['cardInfo','complete'])
    console.log(props.cardInfo.types.name)
</script>

<template>
    <div class="card" :id="props.cardInfo.id">
        <div class="img-container">
            <img :src="props.cardInfo.sprites.front_default" :alt="props.cardInfo.name">
            <img v-if="complete" :src="props.cardInfo.sprites.back_default" :alt="props.cardInfo.name">
        </div>
        <h2>{{ props.cardInfo.name.toUpperCase() }}</h2>
        <div class="estats">
            <div class="card-attack">
                <img src="../assets/logos/defensa.svg" alt="atac">
                <span>{{ props.cardInfo.stats[1].base_stat}}</span>
            </div>
            <div class="card-defense">
                <img src="../assets/logos/atac.svg" alt="defensa">
                <span>{{ props.cardInfo.stats[2].base_stat}}</span>
            </div>
        </div>
        <div v-if="complete" class="tipus-pokemon">
            <img v-for="(tipus,index) in props.cardInfo.types" :key="index" :src="'/src/assets/tipus/'+ tipus.type.name +'.png'" :title="tipus.type.name" :alt="tipus.type.name">
        </div>

        <button v-if="!complete" @click="$router.push({name: 'pokemon', params: {pokemonId: props.cardInfo.id} })">View more</button>
    </div>
</template>

<!-- 'scoped' fa que aquesta classe card sols afecti a aquest component -->
<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        height: 280px;
        border: 2px solid grey;
        border-radius: 5px;
        background-color: var(--bg-card);
        color: var(--text-card);
        min-width: 230px;

        /*Estil per a l'efecte de gir */
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    .card>img:first-of-type {
        height: 96px;
        width: 96px;
        align-self: center;
        margin-top: 1rem;
    }

    .card>p {
        text-align: center;
    }

    .card h2 {
        font-size: 2rem;
        font-weight: 600;
        font-family: 'Pokemon Solid', sans-serif;
        text-shadow: var(--vora-text);
        white-space: nowrap;
    }
    .card .estats {
        display: flex;
        justify-content: space-evenly;
        gap: 1em;
    }
    .card .card-attack, .card .card-defense {
        display: flex;
        padding: .5em 0em;
        align-items: center;
        font-size: 2em;
        font-weight: bolder;
        font-family: 'Secular One', sans-serif;
    }

    .card .card-attack img, .card .card-defense img{
        height: 45px;
        flex-grow:0;
        flex-shrink:0;
    }

    .card .card-defense img{
        padding-right: .2em;
    }

    .card .tipus-pokemon img{
        height: 3em;
        margin: 0.5em 1em;
    }
</style>