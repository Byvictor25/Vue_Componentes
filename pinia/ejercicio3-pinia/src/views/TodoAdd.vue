<script>
import { mapActions } from 'pinia';
import { useTareasStore } from '../stores/tareas'

export default {
    data() {
        return {
            newTodo: ""
        };
    },
    methods: {
        ...mapActions(useTareasStore, ['addTodo']),
        async addTodoInStore() {
            if (this.newTodo) {
                await this.addTodo(this.newTodo)
                this.newTodo = ""
                this.$router.push('/')
            }
        }
    }
};
</script>

<template>
    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-sm-6 col-md-4 col-lg-4 m-2" id="add-todo">
            <form @submit.prevent="addTodoInStore">
                <fieldset>
                    <legend class="bg-dark text-white text-center">Añadir Tarea</legend>
                    <div class="form-group">
                        <label for="new-Todo">Tarea:</label>
                        <input type="text" class="form-control" id="new-Todo" v-model="newTodo">
                    </div>
                    <br>
                    <button type="submit" id="newTodo-submit" class="btn btn-default btn-dark">Guardar</button>
                    <button type="reset" class="btn btn-danger">Reset</button>
                </fieldset>
            </form>
        </div>
    </div>
</template>