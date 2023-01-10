<script>
import { store } from "../store";
import axios from 'axios'
const url = 'http://localhost:3000'

export default {
    data() {
        return {
            categorias: store.state.categorias,
            newCat: {}
        }
    },
    methods: {
        addCat() {
            if(this.newCat) {
                store.addCat(this.newCat)
                this.newCat = {}
            }
        }
    }
}

</script>
<template>
    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-sm-6 col-md-4 col-lg-4 m-2" id="add-producto">
            <form @submit="addCat">
                <fieldset>
					<legend class="bg-dark text-white text-center">Añadir categoría</legend>
					<div class="form-group">
						<label for="newcat-id">ID:</label>
						<input type="text" class="form-control" disabled>
					</div>
					<div class="form-group">
						<label for="newcat-name">Nombre:</label>
						<input type="text" id="newcat-name" v-model="newCat.name" class="form-control">
                    </div>
					<div class="form-group">
						<label for="newpcat-desc">descripción:</label>
						<input type="text" id="newcat-desc" v-model="newCat.description" class="form-control">
					</div>
					<br>
					<button type="submit" class="btn btn-default btn-dark">Añadir</button>
                    <button type="reset" class="btn btn-danger">Reset</button>
				</fieldset>
            </form>
        </div>
    </div>
</template>