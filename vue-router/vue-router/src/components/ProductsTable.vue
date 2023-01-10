<script>
import { store } from "../store";

import axios from 'axios'
const url = 'http://localhost:3000'
import ProductItem from './ProductItem.vue'


export default {
    components: {
        ProductItem,
    },
    data() {
        return {
            categorias: store.state.categorias,
            productos: store.state.productos
        }
    },
    computed: {
        totalProds() {
            return this.productos.length;
        },
        getTotalImport() {
            return this.productos.reduce((total, producto) => total += (producto.price * producto.units), 0)
        }
    },
    methods: {
        async delProd(prod) {
            if (confirm('Deseas borrar el producto ' + prod.name)) {
                try {
                    const response = await axios.delete(url + '/products/' + prod.id)
                    this.productos = this.productos.filter((item) => item.id !== prod.id)
                } catch (error) {
                    store.addMessage("Error al eliminar el producto: " + error);
                }
            }
        },
        async addUnit(prod) {
            try {
                const response = await axios.patch(url + '/products/' + prod.id, {
                    units: prod.units + 1
                })
                prod.units = response.data.units
            } catch (error) {
                store.addMessage("Error al añadir unidades: " + error)
            }
        },

        async delUnit(prod) {
            if (prod.units >= 1) {
                try {
                    const response = await axios.patch(url + '/products/' + prod.id, {
                        units: prod.units - 1
                    })
                    prod.units = response.data.units
                } catch (error) {
                    store.addMessage("Error al borrar unidades: " + error)
                }
            } else {
                store.addMessage("No se pueden tener unidades negativas")
            }
        }
    }
}
</script>

<template>
    <header>
        <h1>Listado de productos</h1>
    </header>
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
            <table class="table table-striped table-hover table-responsive">
                <thead class="bg-dark">
                    <tr class="text-white text-center">
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Uds.</th>
                        <th>Precio/u</th>
                        <th>Importe</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <product-item v-for="elem in productos" :key="elem.id" v-bind:elem="elem" @delProd="delProd"
                        @addUnit="addUnit" @delUnit="delUnit"></product-item>
                </tbody>
                <tfoot id="totalImport">
                    <th colspan="1">Productos:</th>
                    <th class="text-center">{{ this.totalProds }}</th>
                    <th colspan="3">Importe total:</th>
                    <th class="text-center">{{ this.getTotalImport }} €</th>
                </tfoot>
            </table>
        </div>
    </div>
</template>