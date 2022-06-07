<template>
  <div>
    <HeaderPage />
        <div class="container">
            <form action="" class="form-horizontal">
                <div class="form-group left">
                    <label for="" class="control-label col-sm-2">Nombre del producto</label>
                    <div class="col-sm-10">
                        <input type="text" name="nombre" id="nombre" class="form-control" v-model="form.nombreproducto">
                    </div>
                </div>
                <div class="form-group left">
                    <label for="" class="control-label col-sm-2">Descripción del producto</label>
                    <div class="col-sm-10">
                        <input type="text" name="descripcion" id="descripcion" class="form-control" v-model="form.descripcion">
                    </div>
                </div>
                <div class="form-group left">
                    <label for="" class="control-label col-sm-2">Precio del producto</label>
                    <div class="col-sm-10">
                        <input type="text" name="precio" id="precio" class="form-control" v-model="form.precio">
                    </div>
                </div>
                <div class="form-group left">
                    <label for="" class="control-label col-sm-2">Modelo del producto</label>
                    <div class="col-sm-10">
                        <input type="text" name="precio" id="precio" class="form-control" v-model="form.modelo">
                    </div>
                </div>
               <div class="form-group left">
                    <label for="" class="control-label col-sm-2">Categoría</label>
                    <div class="col-sm-10">
                    <div class="select">
                    <select name="categoria" id="categoria"  v-model="form.id_categoria">
                        <option v-for="(categoria,index) of Categorias.data" :value="categoria.id_categoria" :key="index">{{categoria.nombrecategoria}}</option>
                    </select>
                    </div>
                    </div>
               </div>

                <div class="form-group left">
                    <button type="button" class="btn btn-primary position" v-on:click="editarProducto()">Editar</button>
                    <button type="button" class="btn btn-danger position2" v-on:click="eliminarProducto(form.id_producto)">Eliminar</button>
                    <button type="button" class="btn btn-dark margen position2" v-on:click="salir()">Salir</button>
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
  name: "EditarView",
  components: {
    HeaderPage,
    FooterPage,
  },
  data: function () {
    return {
      form: {
        id_producto: "",
        nombreproducto: "",
        descripcion: "",
        precio: "",
        modelo: "",
      },
      Categorias:[]
    };
  },
  methods: {
    editarProducto() {
     axios.put("https://api-halcondeoro-jwt.herokuapp.com/api/productos/", this.form).then((result) => {
    console.log(result);
  });
  },

  salir(){
      this.$router.push('/productos')
  },

  eliminarProducto(id){
      axios.delete("https://api-halcondeoro-jwt.herokuapp.com/api/productos/" + id)
      .then(data =>{
        if(data){this.$router.push('/productos')}
      })
  }
  },
  mounted: function () {
    this.form.id_producto = this.$route.params.id;
    axios
      .get(
        "https://api-halcondeoro-jwt.herokuapp.com/api/productos/" +
          this.form.id_producto
      )
      .then((data) => {
        this.form.id_producto = data.data[0].id_producto;
        this.form.nombreproducto = data.data[0].nombreproducto;
        this.form.descripcion = data.data[0].descripcion;
        this.form.precio = data.data[0].precio;
        this.form.modelo = data.data[0].modelo;
        this.form.id_categoria = data.data[0].id_categoria;
        this.form.id_usuario = data.data[0].id_usuario;
        this.form.nombrecategoria = data.data[0].nombrecategoria;
        this.form.token = localStorage.getItem("token");
        console.log(this.form);
      });

    axios
      .get("https://api-halcondeoro-jwt.herokuapp.com/api/categorias/")
      .then((datacate) => {
        this.Categorias = datacate;
        console.log(this.Categorias)
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