<template>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>

</template>

<script setup>
import {computed, onMounted} from "vue";
import MealItem from "../components/MealItem.vue";
import store from "../store/index.js";
import {useRoute} from "vue-router";

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient)
console.log(route.params)

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

</script>