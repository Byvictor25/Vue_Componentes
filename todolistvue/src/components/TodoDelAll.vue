<script>
import { store } from "../store";
export default {
    data() {

    },

    methods: {
        removeAll() {
            if(confirm("Vas a borrar todas las tareas")) {
                store.delTodos();
            }
        }
    }
};
</script>

<template>
    <br><button v-on:click="removeAll">Borrar toda la lista</button>
</template>
