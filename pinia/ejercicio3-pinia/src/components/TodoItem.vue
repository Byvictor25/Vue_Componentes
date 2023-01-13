<script>
import { mapActions } from 'pinia';
import { useTareasStore } from '../stores/tareas'
export default{
    props: {
        elem: Object,
    },
    data() {
        return {

        }
    },
    methods: {
        ...mapActions(useTareasStore, ['delTodo','changeDone']),
        remove() {
            if(confirm('Quieres borrar la tarea ' + this.elem.id)) {
                this.delTodo(this.elem.id);
            }
        },
        cambiarDone() {
            this.changeDone(this.elem)
        }
    }
};
</script>

<template>
    <tr class="text-center">
        <td><input type="checkbox" @click="cambiarDone" v-model="elem.done"></td>
        <td>{{ elem.id }}</td>
        <td>{{ elem.title }}</td>
        <td v-if="elem.done"><i class="bi bi-bookmark-check"></i></td>
        <td v-else ><i class="bi bi-bookmark-x"></i></td>
        <td>
            <button @click="remove" class="btn btn-danger">
                <span class="material-icons">delete_forever</span>
            </button>
        </td>
    </tr>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>