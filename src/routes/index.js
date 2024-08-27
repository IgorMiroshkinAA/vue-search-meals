import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import SearchByIngredients from "../views/SearchByIngredients.vue";
import SearchByName from "../views/SearchByName.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealDetails from "../views/MealDetails.vue";

const routes = [
    {
      path: '/',
      component: DefaultLayout,
      children: [
          {
              path: '/',
              name: 'home',
              component: HomeView
          },
          {
              path: '/by-letter/:letter?',
              name: 'byLetter',
              component: SearchByLetter
          },
          {
              path: '/by-name/:name?',
              name: 'byName',
              component: SearchByName
          },
          {
              path: '/by-ingredient/:ingredient?',
              name: 'byIngredient',
              component: SearchByIngredients
          },
          {
              path: '/meal/:id',
              name: 'mealDetails',
              component: MealDetails
          }
      ]
    },
    {
        path: '/guest',
        component: GuestLayout,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router