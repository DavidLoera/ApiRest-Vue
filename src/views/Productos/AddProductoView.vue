<template>
  <div>
    <HeaderPage />
    <div class="container">
      <form action="" class="form-horizontal">
        <div class="form-group left">
          <label for="" class="control-label col-sm-2"
            >Nombre del producto</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              name="nombre"
              id="nombre"
              class="form-control"
              v-model="form.nombreproducto"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm-2"
            >Descripción del producto</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              name="descripcion"
              id="descripcion"
              class="form-control"
              v-model="form.descripcion"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm-2"
            >Precio del producto</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              name="precio"
              id="precio"
              class="form-control"
              v-model="form.precio"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm-2"
            >Modelo del producto</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              name="modelo"
              id="modelo"
              class="form-control"
              v-model="form.modelo"
            />
          </div>

          <input type="hidden" name="id" id="id" v-model="form.id_usuario">
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Categoría</label>
          <div class="col-sm-10">
            <div class="select">
              <select
                name="categoria"
                id="categoria"
                v-model="form.id_categoria"
              >
                <option
                  v-for="(categoria, index) of Categorias.data"
                  :value="categoria.id_categoria"
                  :key="index"
                >
                  {{ categoria.nombrecategoria }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group left">
          <button
            type="button"
            class="btn btn-primary position"
            v-on:click="Guardar()"
          >
            Guardar
          </button>
          <button
            type="button"
            class="btn btn-dark margen position2"
            v-on:click="Salir()"
          >
            Salir
          </button>
        </div>
      </form>
    </div>
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import axios from "axios";

export default {
  name: "AddProductoView",
    data: function () {
    return {
      form: {
        nombreproducto: "",
        descripcion: "",
        precio: "",
        modelo: "",
        id_categoria: "",
        id_usuario: ""
      },
      Categorias: [],
      Productos: []
    };
  },
  components: { HeaderPage, FooterPage },
  methods: {
    Guardar(){
        console.log(this.form)
    },
    Salir(){
        this.$router.push('/productos')
    },
  },
  mounted: function () {
      axios
      .get("https://api-halcondeoro-jwt.herokuapp.com/api/categorias/")
      .then((datacate) => {
        this.Categorias = datacate;
        console.log(this.Categorias)
      });

      axios
      .get("https://api-halcondeoro-jwt.herokuapp.com/api/productos/")
      .then((dataproductos) => {
        this.Productos = dataproductos.data[0].id_producto;
        console.log(this.Productos = dataproductos.data[0].id_producto);
      });
  }
};
</script>

<style scoped>
.left {
  text-align: left;
}

.position {
  margin-top: 2%;
}
.position2 {
  margin-top: 2%;
  margin-left: 1%;
}

.select {
  border: 1px solid #ccc;
  width: 100%;
  overflow: hidden;
}

.select select {
    padding: 5px 8px;
    width: 100%;
    border: none;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    appearance: none;
}
</style>