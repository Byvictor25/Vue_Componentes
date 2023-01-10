<script>
import { store } from "../store";
import axios from 'axios'
const url = 'http://localhost:3000'

export default {
    props: {
        id: String,
    },
    data() {
        return {
            categorias: store.state.categorias,
            newProd: {},
        }
    },
    methods: {
        addProd() {
            if(this.newProd) {
                if(this.newProd.id) {
                    store.editProd(this.newProd)
                    this.newProd = {}
                    this.$router.push('/')
                } else {
                    store.addProd(this.newProd)
                    this.newProd = {}
                    this.$router.push('/')
                }
            }
        },
        async getProduct() {
            if(this.id) {
                try {
                    const response = await axios.get(url + '/products/' + this.id)
                    this.newProd = response.data;
                } catch(error) {
                    store.addMessage("Error al cargar el producto: " + error)
                }
            }
        }
    },
    mounted() {
        this.getProduct()
    }
}


</script>

<template>
    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-sm-6 col-md-4 col-lg-4 m-2" id="add-producto">
            <form @submit="addProd">
                <fieldset>
                    <legend class="bg-dark text-white text-center">Añadir producto</legend>
                    <!-- Aquí los inputs y botones del form -->
                    <div class="form-group">
                        <label for="newprod-id">ID:</label>
                        <input type="text" class="form-control" id="newprod-id" v-model="newProd.id" disabled>
                    </div>
                    <div class="form-group">
                        <label for="newprod-name">Nombre:</label>
                        <input type="text" id="newprod-name" v-model="newProd.name" class="form-control" required minlength="5" maxlength="50">
                        <span class="error"></span>
                    </div>
                    <div class="form-group">
                        <label for="newprod-cat">Categoría:</label>
                        <select class="form-control" id="newprod-cat" v-model="newProd.category" required>
                            <option
                            v-for="cat in categorias"
                            :key="cat.id"
                            v-bind:cat="cat"
                            :value="cat.id"
                            >
                            {{cat.name}}
                            </option>
                        </select>
                        <span class="error"></span>
                    </div>
                    <div class="form-group">
                        <label for="newprod-units">Unidades.:</label>
                        <input type="number" id="newprod-units" v-model="newProd.units" class="form-control" min="0" max="100">
                        <span class="error"></span>
                    </div>
                    <div class="form-group">
                        <label for="newprod-price">Precio/u.:</label>
                        <input type="number" id="newprod-price" v-model="newProd.price" class="form-control" required min="0" step="0.01">
                        <span class="error"></span>
                    </div>
                    <br>
                    <button type="submit" id="newprod-submit" class="btn btn-default btn-dark">Añadir</button>
                    <button type="reset" class="btn btn-danger">Reset</button>
                </fieldset>
            </form>
        </div>
    </div>
</template>