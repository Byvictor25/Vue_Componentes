<script>
import { store } from '../store';
export default {
    data() {
        return {
            newTodo: ""
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo) {
                store.addTodo(this.newTodo)
                this.newTodo = ''
            }
        }
    }
};
</script>
<template>
    <input v-model="newTodo">
    <button v-on:click="addTodo">Añadir</button>
</template>