<script setup>
    //import {ref} from 'vue'
    const props = defineProps(['photoInfo'])
</script>

<template>
    <article class="card">
        I'm a photo!
        <h2>{{ props.photoInfo.title }}</h2>
        <img :src="props.photoInfo.thumbnailUrl">
        <button @click="$router.push({name: 'photo', params: {photoId: props.photoInfo.id} })">View more</button>
    </article>
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