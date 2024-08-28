<template>
  <div class="flex flex-col p-8 justify-center">

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";


const ingredients = ref([])

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  ingredients.value = response.data
})
</script>

<style scoped>

</style>