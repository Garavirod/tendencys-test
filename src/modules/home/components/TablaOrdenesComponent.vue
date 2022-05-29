<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar por n° de orden"
        class="mx-4"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="dataTable"
      item-key="name"
      class="elevation-1"
      :search="search"
      no-results-text="Orden no encontrada"
    >
      <!-- Ver detalle -->
      <template v-slot:[`item.detalle`]="{ item }">
        <v-tooltip right color="blue">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="blue"
              small
              class="ml-3 white--text"
              @click="goToDetalleView(item)"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </template>
          <span>Ver detalle</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "DataTableComponent",
  props: ["data", "headers"],
  data() {
    return {
      search: "",
      dataTable: [],
      rfcProveedorToDelete: null,
      dialogEliminar: false,
    };
  },
  methods: {
    /* Vuex */
    ...mapMutations("shared", ["setOverlayState"]),
    ...mapActions("admin", ["eliminaProveedorAction"]),
    /* Local */
    goToDetalleView: function (orden) {      
      const ordenItem = {
        numero_orden:orden.number, 
        productos:orden.items.map((producto) => ({ // atributos de interes de la orden
          sku:producto.sku,
          name:producto.name,
          quantity: parseInt(producto.quantity),
          price: producto.price
        }))
      }
      // Redirigimos a la vista detalle con los datos dde la orden ya mapeados.
      this.$router.push({
        name: "detalle-orden",
        params: { dataOrden: ordenItem },
      });
    },
  },
  mounted() {
    this.dataTable = this.data;
  },
};
</script>