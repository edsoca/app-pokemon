<script setup>
    //import {ref} from 'vue'
    const props = defineProps(['cardInfo'])
</script>

<template>
    <div class="card" :id="props.cardInfo.id">
        <div class="img-container">
            <img :src="props.cardInfo.frontDefault" :alt="props.cardInfo.name">
        </div>
        <h2>{{ props.cardInfo.name.toUpperCase() }}</h2>
        <img :src="props.cardInfo.thumbnailUrl">
        <div class="estats">
            <div class="card-attack">
                <img src="assets/logos/defensa.svg" alt="atac">
                <span>{{ props.cardInfo.stats[1].base_stat}}</span>
            </div>
            <div class="card-defense">
                <img src="assets/logos/atac.svg" alt="atac">
                <span>{{ props.cardInfo.stats[2].base_stat}}</span>
            </div>
        </div>
        <button @click="$router.push({name: 'pokemon', params: {pokemonId: props.cardInfo.id} })">View more</button>
    </div>
</template>

<!-- 'scoped' fa que aquesta classe card sols afecti a aquest component -->
<style scoped>
    .card{
        display:flex;
        flex-direction: column;
        padding: 1rem;
        border: 2px solid #333;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: 0 0 5px 5px #eee;
        width: fit-content;
        min-width: 200px;
        max-width: 250px;
        background-color: var(--bg-card);
        color: var(--text-card);
    }

    .card button{
        margin-top:auto;
    } 
</style>