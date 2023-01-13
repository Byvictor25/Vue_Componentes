<script>
import { mapActions } from 'pinia';
import { useTareasStore } from './stores/tareas'
import ShowList from "./views/ShowList.vue";
import TodoAdd from "./views/TodoAdd.vue";
import TodoDelAll from "./views/TodoDelAll.vue";
import TodoItem from "./components/TodoItem.vue";
import AppMenu from './components/AppMenu.vue'

export default {
  components: {
        AppMenu,
        ShowList,
        TodoAdd,
        TodoDelAll,
        TodoItem,
  },
  methods: {
    ...mapActions(useTareasStore, ['loadTareas'])
  },  
  mounted() {
    this.loadTareas()
  }
};
</script>

<template>
<app-menu></app-menu>
<router-view></router-view>
<footer>Ejercicio 3 - Tareas</footer>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
</style>