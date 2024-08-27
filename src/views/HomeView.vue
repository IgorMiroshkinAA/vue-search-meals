<template>
  <div class="flex flex-col p-8 justify-center">
    <div class="flex gap-2 justify-center mt-2">
      <router-link
          :key="letter"
          :to="{name: 'byLetter', params: {letter}}"
          v-for="letter of letters"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const ingredients = ref([])

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  ingredients.value = response.data
})
</script>

<style scoped>

</style>