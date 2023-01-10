import { createElementBlock, reactive } from "vue";
import axios from 'axios'

const url='http://localhost:3000'

export const store = {
    debug: true,
    state: reactive({
        categorias : [],
        productos : [],
        messages: []
    }),
    async loadCategorias() {
        try {
            const response = await axios.get(url + '/categories')
            response.data.forEach((categoria) => this.state.categorias.push(categoria))
        } catch(error) {
            this.addMessage("Error al cargar la categorias: " + error)
        }
    },
    async loadProductos() {
        try {
            const response = await axios.get(url + '/products')
            response.data.forEach((producto) => this.state.productos.push(producto))
        } catch(error) {
            this.addMessage("Error al cargar los productos:" + error)
        }
    },
    async addProd(newProd) {
        try {
            const response = await axios.post(url + '/products', {
                name: newProd.name,
                category: newProd.category,
                price: newProd.price,
                units: newProd.units
            })
            this.state.productos.push(response.data)
        } catch(error) {
            this.addMessage("Error al añadir un producto nuevo: " + error)
        }
    },
    async addCat(newCat) {
        try {
            const response = await axios.post(url + '/categories', {
                name: newCat.name,
                description: newCat.description
            })
            this.state.categorias.push(response.data)
        } catch(error) {
            this.addMessage("Error al añadir un producto nuevo: " + error)
        }
    },
    async editProd(newProd) {
        try {
            const response = await axios.put(url + '/products/' + newProd.id, {
                name: newProd.name,
                category: newProd.category,
                price: newProd.price,
                units: newProd.units
            })
            const index = this.state.productos.findIndex((elem) => {
                if(elem.id === newProd.id) {
                    return true;
                }
            })
            this.state.productos[index] = response.data
        } catch(error) {
            this.addMessage("Error al añadir un producto nuevo: " + error)
        }
    },
    addMessage(message) {
        this.state.messages.push(message)
        setInterval(() => {
            this.state.messages.shift()
        }, 3000)
    }
}