<template>
  <v-data-table
    :headers="headers"
    :items="dataTable"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Lista de productos</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn small outlined rounded color="green" dark class="mb-2" v-bind="attrs" v-on="on">
              Agregar producto
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              <span class="text-h5">{{ tituloformulario }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-form ref="formRef" v-model="validForm">
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-text-field                        
                        v-model="editedItem.name"
                        label="Nombre producto"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field                        
                        v-model="editedItem.quantity"
                        label="Cantidad"
                        type="number"
                        min="1"
                        default="1"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field                        
                        v-model="editedItem.price"
                        label="Precio"
                        type="number"
                        min="0"
                        prefix="$"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field                        
                        v-model="editedItem.sku"
                        label="Sku"
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="close">
                Cancelar
              </v-btn>
              <v-btn :disabled="validaformulario()" color="blue darken-1" text @click="guardaNuevoProducto"> Guardar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2"
              >Eliminar producto</v-card-title
            >
            <v-card-text>¿Segur@ que deseas eliminar este producto?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="closeDelete"
                >Cancelar</v-btn
              >
              <v-btn color="blue darken-1" text @click="eliminaProductoConfirm"
                >Sí, eliminar</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editaProducto(item)"> mdi-pencil </v-icon>
      <v-icon small @click="eliminaProducto(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>
<script>
export default {
  name: "TablaProductosComponent",
  props: ["data", "headers"],
  data: () => ({
    validForm:false,
    dialog: false,
    dialogDelete: false,
    dataTable: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      quantity: "",
      sku: "",
      price: "",
    },
    defaultItem: {
      name: "",
      quantity: 1,
      sku: 0,
      price: 0,
    },
    /* Reglas para validar formulario */
    rules: {
      required: (value) => !!value || "Campo requerido.",
    },
  }),

  computed: {
    tituloformulario() {
      return this.editedIndex === -1 ? "Nuevo producto" : "Editar producto";
    },

  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  mounted() {
    // Asigan los datos del prop 'data'
    this.dataTable = this.data;
  },

  methods: {
    validaformulario() {
      return (this.editedItem.quantity === "" || 
      this.editedItem.name === "" ||
      this.editedItem.price === "" ||
      this.editedItem.sku === "")
    },
    editaProducto(item) {
      this.editedIndex = this.dataTable.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    eliminaProducto(item) {
      this.editedIndex = this.dataTable.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    eliminaProductoConfirm() {
      this.dataTable.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    guardaNuevoProducto() {
      if (this.editedIndex > -1) {
        Object.assign(this.dataTable[this.editedIndex], this.editedItem);
      } else {
        this.dataTable.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>