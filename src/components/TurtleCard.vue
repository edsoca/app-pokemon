<script setup>
    import {ref} from 'vue'
    const props = defineProps(['info'])
    const count = ref(0)
    const emit = defineEmits(['response'])
    const increment = () => {
        count.value++
        //response és el nom de l'esdeveniment o senyal que emetem
        //Després podem posar tants paràmetres com vulguem que són els que rebrà la funció de tractament de l'esdeveniment.
        emit('response', props.info.name, props.info.weapon)
    }
</script>

<template>
    <article class="card" :class="props.info.color">
        I'm a turtle!
        <h2>{{ props.info.name }}</h2>
        <p>{{ props.info.weapon }}</p>
        <button @click="$router.push({name: 'single', params: {turtleId: props.info.id} })">View more</button>
        <button :class="{max : count>=10}" @click="increment">Counter {{count}}</button>
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
    }

    .card button{
        margin-top:auto;
    } 

    .orange {
        box-shadow: 0 0 10px 5px orange;
    }

    .blue {
        box-shadow: 0 0 10px 5px blue;
    }

    .red {
        box-shadow: 0 0 10px 5px red;
    }

    .purple {
        box-shadow: 0 0 10px 5px purple;
    }

    .max {
        background-color: gold;
    }
</style>