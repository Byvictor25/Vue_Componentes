<script>
import { mapActions } from 'pinia';
import { useTareasStore } from '../stores/tareas'
export default {
    data() {

    },

    methods: {
        ...mapActions(useTareasStore, ['delAllTodos']),
        removeAll() {
            if(confirm("Vas a borrar todas las tareas")) {
                this.delAllTodos();
                this.$router.push('/')
            }
        }
    }
};
</script>

<template>
    <div class="card">
        <div class="card-header">
        Borrar Todas las tareas
        </div>
        <div class="card-body">
            <h5 class="card-title">Deseas borrar todas las Tareas?</h5>
            <button @click="removeAll" class="btn btn-primary">Borrar Todas</button>
        </div>
    </div>
</template>
