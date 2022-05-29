<template>
  <v-container>
    <!-- Progress data -->
    <progress-component v-if="loading" :color="'#ffff'" :size="50" />
    <!-- Ordenes cargadas -->
    <v-card v-else :elevation="10">
      <v-card-title> Lista de órdenes </v-card-title>
      <v-card-text
        >En la tabla de abajo se muestra un listado de las órdenes que se han
        realizado.
      </v-card-text>
      <tabla-ordenes-component :data="listaOrdenes" :headers="headersTable" />
    </v-card>       
  </v-container>
</template>

<script>
import ProgressComponent from "@/components/ProgressComponent.vue";
import { mapActions, mapGetters, mapMutations } from 'vuex';
import TablaOrdenesComponent from '../components/TablaOrdenesComponent.vue';
export default {
  components: {
    ProgressComponent,
    TablaOrdenesComponent
   
  },
  data() {
    return {
 
        loading: false,
      listaOrdenes: [],
      headersTable: [
        {
          text: "Número de orden",
          align: "center",
          sortable: false,
          value: "number",
        },
        {
          text: "Ciudad",
          align: "center",
          sortable: false,
          value: "billingAddress.city",
        },
        {
          text: "Compañía",
          align: "center",
          sortable: false,
          value: "billingAddress.company",
        },
        {
          text: "Total",
          align: "center",
          sortable: false,
          value: "totals.total",
        },
        {
          text: "Moneda",
          align: "center",
          sortable: false,
          value: "currency",
        },
        {
          text: "Ver detalle",
          value: "detalle",
          align: "center",
          sortable: false,
        },
      ],
    };
  },
 methods: {
      /* Vuex */
      ...mapActions('Home',['getListaOrdenesAction']),      
      ...mapMutations("Shared", [
          "setShowErrorOrSuccessAlert",          
        ]),
      /* Local */
      init: async function (){        
          this.loading = true;
          await this.getListaOrdenesAction();
          this.listaOrdenes = this.getListaOrdenesState();
          this.loading = false;        
      }      
    },

  computed: {
    /* Vuex */
    ...mapGetters('Home',['getListaOrdenesState']),   
  },

  created(){
    this.init()
  }
};
</script>