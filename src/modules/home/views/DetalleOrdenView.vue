<template>
  <v-container v-if="datosOrden">
    <v-sheet color="white pa-3" elevation="16" class="justify-center">
      <v-card elevation="3" class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              Número de orden: {{ datosOrden.numero_orden }}
            </v-list-item-title>
          </v-list-item-content>         
          <v-list-item-avatar tile size="70" color="grey">
            <img alt="Imagen orden" :src="require('@/assets/home/order.png')" />
          </v-list-item-avatar>
        </v-list-item>
        <!-- Pagar pedido -->
        <v-card-actions>
              <v-btn
                outlined
                rounded
                small
                color="green"                
              >
                Realizar pago
                <v-icon right> mdi-cart </v-icon>
              </v-btn>
         
        </v-card-actions>
      </v-card>
       <v-card elevation="3" class="mx-auto mt-7" outlined>           
        <v-card-text>
            <tabla-productos-component :data="datosOrden.productos" :headers="headers"/>
        </v-card-text>
       </v-card>
    </v-sheet>
  </v-container>
</template>
<script>
import TablaProductosComponent from '../components/TablaProductosComponent.vue';
export default {
  name: "TablaPagosView",
  components: {TablaProductosComponent},
  data() {
    return {
      datosOrden: null,
       headers: [
        { text: 'Sku',value: 'sku',},
        { text: 'Nombre', value: 'name' },
        { text: 'Cantidad', value: 'quantity' },
        { text: 'Precio', value: 'price' },
      ],
    };
  },
  methods: {
    init: async function () {
      this.datosOrden = this.$route.params.dataOrden;
      if (!this.datosOrden) {
        this.$router.go(-1);
      }
    },
  },
  created() {
    this.init();
  },
};
</script>