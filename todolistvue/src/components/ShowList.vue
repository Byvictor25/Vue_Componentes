<script>
import { store } from "../store";

import TodoItem from "./TodoItem.vue";
export default {
    props: ["title"],
    components: {
        TodoItem
    },
    data() {
        return {
        todos: store.state.todos
    }
    },
    methods: {
        borraitem(id) {
            this.todos = this.todos.filter((item) => item.id !== id)
        }
    }
};
</script>

<template>
<p>Total de cosas: {{todos.length}}</p>
        <ul>
            <todo-item
            v-for="elem in todos"
            :key="elem.id"
            v-bind:elem="elem"
            @delitem="borraitem"
            ></todo-item>
        </ul>
        <span v-if="todos.length == 0">No hay tareas que mostrar</span>
</template>

