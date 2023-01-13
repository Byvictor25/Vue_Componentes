import { createRouter, createWebHistory } from 'vue-router'
import ShowList from '../views/ShowList.vue'
import TodoAdd from '../views/TodoAdd.vue'
import TodoDelAll from '../views/TodoDelAll.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listaTareas',
      component: ShowList
    },
    {
      path: '/addTarea',
      name: 'addTarea',
      component: TodoAdd
    },
    {
      path: '/delTareas',
      name: 'delTareas',
      component: TodoDelAll
    },
  ]
})

export default router
