<template>
  <div>
    <HeaderPage />
    <div class="container left">
      <button class="btn btn-primary" v-on:click="addproducto()">Nuevo producto</button><br><br>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre del producto</th>
            <th scope="col">Descripción del producto</th>
            <th scope="col">Modelo del producto</th>
            <th scope="col">Precio del producto</th>
            <th scope="col">Categoria</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="productos in ListaProductos"
            :key="productos.id_producto"
            v-on:click="editarProducto(productos.id_producto)"
          >
            <th scope="row">{{ productos.id_producto }}</th>
            <td>{{ productos.nombreproducto }}</td>
            <td>{{ productos.descripcion }}</td>
            <td>{{ productos.modelo }}</td>
            <td>{{ productos.precio }}</td>
            <td>{{ productos.nombrecategoria }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import axios from "axios";

export default {
  data: function () {
    return {
      ListaProductos: null,
    };
  },
  name: "ProductosView",
  components: {
    HeaderPage,
    FooterPage,
  },
  methods: {
    editarProducto(id) {
      this.$router.push("/editarproducto/" + id);
    },
    addproducto(){
      this.$router.push("/addproducto");
    }
  },
  mounted: function () {
    let direccion = "https://api-halcondeoro-jwt.herokuapp.com/api/productos/";
    axios.get(direccion).then((data) => {
      this.ListaProductos = data.data;
    });
  },
};
</script>

<style scoped>
.left{
    text-align: left;
}
</style>