<script setup>
const props = defineProps(['turtleId'])
</script>

<template>
  <div class="for">
    <h1>This is the single view</h1>
    <p> ID: {{ props.turtleId }}</p>
  </div>
</template>

<style>
.new{
  display: grid;
}
</style>
