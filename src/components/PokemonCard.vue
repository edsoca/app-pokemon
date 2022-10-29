<script setup>
import {ref} from 'vue'
const props = defineProps(['cardInfo', 'shape'])

const duel = ref(0)

const flipCard = (e) => {
    const currentCard = e.currentTarget;
    currentCard.parentNode.classList.add('flipped')
    currentCard.emit('pokemonDuel', props.cardInfo)

}
</script>

<template>
    <div class="card" :id="props.cardInfo.id">
        <div v-if="shape == 'combat'" class="back" @click="$emit('pokemonDuel',props.cardInfo,$event.currentTarget.parentNode)"></div>
        <div :class="shape=='combat'?'front':''">
            <div class="img-container">
                <img :src="props.cardInfo.sprites.front_default" :alt="props.cardInfo.name">
                <img v-if="shape == 'complete'" :src="props.cardInfo.sprites.back_default" :alt="props.cardInfo.name">
            </div>
            <h2>{{ props.cardInfo.name.toUpperCase().substring(0,9) }}</h2>
            <div class="estats">
                <div class="card-attack">
                    <img src="../assets/logos/atac.svg" alt="atac">
                    <span>{{ props.cardInfo.stats[1].base_stat }}</span>
                </div>
                <div class="card-defense">
                    <img src="../assets/logos/defensa.svg" alt="defensa">
                    <span>{{ props.cardInfo.stats[2].base_stat }}</span>
                </div>
            </div>
            <div v-if="shape == 'complete'" class="tipus-pokemon">
                <img v-for="(tipus, index) in props.cardInfo.types" :key="index"
                    :src="'/src/assets/tipus/' + tipus.type.name + '.png'" :title="tipus.type.name"
                    :alt="tipus.type.name">
            </div>

            <img v-if="shape == 'simple'" src="../assets/logos/info-icon.svg" class="info-icon"
                @click="$router.push({ name: 'pokemon', params: { pokemonId: props.cardInfo.id } })">
        </div>

    </div>
</template>

<!-- 'scoped' fa que aquesta classe card sols afecti a aquest component -->
<style scoped>
@import url('http://fonts.cdnfonts.com/css/pokemon-solid');
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
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
    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
        1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
    white-space: nowrap;
    color: #222;
}

.card .estats {
    display: flex;
    justify-content: space-evenly;
    gap: 1em;
    color: #222;
}

.card .card-attack,
.card .card-defense {
    display: flex;
    padding: .5em 0em;
    align-items: center;
    font-size: 2em;
    font-weight: bolder;
    font-family: 'Secular One', sans-serif;
}

.card .card-attack img,
.card .card-defense img {
    height: 45px;
    flex-grow: 0;
    flex-shrink: 0;
}

.card .card-defense img {
    padding-right: .2em;
}

.card .tipus-pokemon img {
    height: 3em;
    margin: 0.5em 1em;
}

.card .back {
    background-image: repeating-linear-gradient(-45deg, #ececec, #ececec 10px, #dedede 10px, #dedede 20px);
}

.front,
.back {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: block;
    overflow: hidden;
}

.card .front {
    background: var(--card-bg-color);
    transform: rotateY(180deg);
}
.card.flipped {
    transform: rotateY(180deg);
}

.info-icon{
    height: 2rem;
    width: 2rem;
    cursor: pointer;
}
</style>