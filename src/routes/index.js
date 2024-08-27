import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import SearchByIngredients from "../views/SearchByIngredients.vue";
import SearchByName from "../views/SearchByName.vue";
import SearchByLetter from "../views/SearchByLetter.vue";

const routes = [
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router