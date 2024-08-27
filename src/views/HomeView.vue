<template>
  <div class="flex flex-col p-8 justify-center">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals">

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
import {computed, onMounted} from "vue";
import store from "../store/index.js";
import axiosClient from "../axiosClient.js";

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data)
})
</script>

<style scoped>

</style>