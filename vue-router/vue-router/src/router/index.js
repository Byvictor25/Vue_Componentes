import { createRouter, createWebHistory } from 'vue-router'
import ProductsTable from '../components/ProductsTable.vue';
import CategoryTable from '../components/CategoryTable.vue';
import ProductItem from '../components/ProductItem.vue';
import CategoryItem from '../components/CategoryItem.vue';
import AddProduct from '../components/AddProduct.vue';
import AddCategory from '../components/AddCategory.vue';
import AcercaDe from '../components/AcercaDe.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listaProductos',
      component: ProductsTable
    },
    {
      path: '/categorias',
      name: 'listaCategorias',
      component: CategoryTable
    },
    {
      path: '/newProduct',
      name: 'addProduct',
      component: AddProduct
    },
    {
      path: '/newCategory',
      name: 'addCategory',
      component: AddCategory
    },
    {
      path: '/acercaDe',
      name: 'acercaDe',
      component: AcercaDe
    },
    {
      path: '/edit/:id',
      name: 'editProd',
      component: AddProduct,
      props: true
    },
  ]
})

export default router
