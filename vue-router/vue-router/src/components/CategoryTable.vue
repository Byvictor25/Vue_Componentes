<script>
import { store } from "../store";

import axios from 'axios'
const url = 'http://localhost:3000'
import CategoryItem from "./CategoryItem.vue";


export default {
    components: {
        CategoryItem,
    },
    data() {
        return {
            categorias: store.state.categorias
        }
    },
    computed: {
        totalCats() {
            return this.categorias.length;
        },
    },
    methods: {
        async delCat(cat) {
            if (confirm('Deseas borrar la categoria ' + cat.name)) {
                try {
                    const response = await axios.delete(url + '/categories/' + cat.id)
                    this.categorias = this.categorias.filter((item) => item.id !== cat.id)
                } catch (error) {
                    store.addMessage("Error al eliminar la categoria: " + error);
                }
            }
        }
    }
}
</script>

<template>
    <div id="listado-categorias">
		<header>
            <h1>Listado de Categorias</h1>
        </header>
		<div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12" id="almacen2">
                <table class="table table-striped table-hover table-responsive">
                    <thead class="bg-dark">
                        <tr class="text-white text-center">
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CategoryItem v-for="cat in categorias" :key="cat.id" v-bind:cat="cat" @delCat="delCat">
                        </CategoryItem>
                    </tbody>
                    <tbody>
                        <th colspan="1">Categorias:</th>
                        <th class="text-center">{{ this.totalCats }}</th>
					</tbody>
                </table>
            </div>
        </div>
		</div>
</template>