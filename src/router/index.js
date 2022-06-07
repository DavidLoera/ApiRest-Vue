import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductosView from '../views/ProductosView.vue'
import EditarProductoView from '../views/Productos/EditarProductosVire.vue'
import AddProductoView from '../views/Productos/AddProductoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/productos",
    name: 'productos',
    component: ProductosView
  },
  {
    path: "/editarproducto/:id",
    name: 'editarproducto',
    component: EditarProductoView
  },
  {
    path: "/addproducto/",
    name: 'addproducto',
    component: AddProductoView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
