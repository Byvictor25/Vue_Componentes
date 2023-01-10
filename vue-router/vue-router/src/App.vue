<script>
import AppMenu from './components/AppMenu.vue';
import ProductsTable from './components/ProductsTable.vue';
import AddProduct from './components/AddProduct.vue';
import ProductItem from './components/ProductItem.vue';
import ErrorMessage from './components/ErrorMessage.vue';
import CategoryTable from './components/CategoryTable.vue';
import CategoryItem from './components/CategoryItem.vue';
import AddCategory from './components/AddCategory.vue';
import { store } from "./store";

export default {
  components: {
        AppMenu,
        ProductsTable,
        ProductItem,
        AddProduct,
        CategoryTable,
        CategoryItem,
        AddCategory,
        ErrorMessage,
  },
  mounted() {
    store.loadCategorias(),
    store.loadProductos()
  }
};
</script>

<template>
<app-menu></app-menu>
<div class="container">
  <error-message></error-message>
  <router-view></router-view>
</div>

</template>

<style>

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
</style>