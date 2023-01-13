<script>
import { mapState, mapActions } from 'pinia';
import { useTareasStore } from '../stores/tareas'
import TodoItem from "../components/TodoItem.vue";
export default {
    components: {
        TodoItem
    },
    computed: {
        ...mapState(useTareasStore, {
            todos: 'tareas',
        })
    },
    methods: {
        
    }
};
</script>

<template>
    <header>
        <h1>Listado de Tareas</h1>
    </header>
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
            <table class="table table-striped table-hover table-responsive">
                <thead class="bg-dark">
                    <tr class="text-white text-center">
                        <th>Marcar</th>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Realizada</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <todo-item v-for="elem in todos" :key="elem.id" v-bind:elem="elem"
                        ></todo-item>
                </tbody>
                <tfoot id="totalImport">
                    <th colspan="1">Total tareas:</th>
                    <th class="text-center">{{ this.todos.length }}</th>
                </tfoot>
            </table>
        </div>
    </div>
</template>

