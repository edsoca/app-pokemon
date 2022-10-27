
<script setup>
  import TurtleCard from '../components/TurtleCard.vue'
  import {ref} from 'vue'

  const turtles = [
    {id:1, name: 'Leonardo', weapon: 'Katana', color:'blue'},
    {id:2, name: 'Raphael', weapon: 'Sai', color:'red'},
    {id:3, name: 'Donatello', weapon: 'Jo', color:'purple'},
    {id:4, name: 'Michaelangelo', weapon: 'Nunchuk', color:'orange'}
  ]

  const totalCount = ref(0)
  const tName = ref('')
  const tWeap = ref('')

  const updateCounter = (turtleName, turtleWeapon) => {
    totalCount.value++
    tName.value = turtleName
    tWeap.value = turtleWeapon
  } 
</script>

<template>
  <div class="for">
    <h1>V-for component exemple</h1>
    <p>Total counter: {{ totalCount }}</p>
    <p v-if="tName!=''">Turtle: {{ tName }} uses {{ tWeap }}</p>
    <section class="cards">
      <TurtleCard v-for="turtle in turtles" :key="turtle.id" :info="turtle" @response="updateCounter"/>
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
}
</style>
