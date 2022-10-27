<script setup>
  import {ref, onMounted} from 'vue'
  import petition from '../services/APIservice'
  const props = defineProps(['photoId'])

  const photoData = ref({})

  onMounted(() => {
    petition.getSinglePhoto( props.photoId ).then( response => photoData.value = response.data)
  })

</script>

<template>
  <div class="new">
    <h2>{{ photoData.title }}</h2>
    <img :src="photoData.url">
    <p> ID: {{ photoData.id }}</p>
  </div>
</template>

<style>
.new{
  display: grid;
}
</style>
