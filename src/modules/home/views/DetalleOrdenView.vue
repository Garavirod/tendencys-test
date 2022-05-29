<template>
  <v-container v-if="datosOrden" class="animate__animated animate__fadeIn">
    <v-sheet color="white pa-3" elevation="16" class="justify-center">
      <v-card elevation="3" class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              Número de orden: {{ datosOrden.numero_orden }}
            </v-list-item-title>
          </v-list-item-content>         
          <v-list-item-avatar tile size="70">
            <img alt="Imagen orden" :src="require('@/assets/home/order.png')" />
          </v-list-item-avatar>
        </v-list-item>
        <!-- Pagar pedido -->
        <v-card-actions>
              <v-btn
                outlined
                rounded
                small
                color="orange"
                @click="showAlertaPago = true"                
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
    <!-- Alerta de pago -->
    <div class="text-center">
    <v-dialog
      v-model="showAlertaPago"
      width="500"
    >     
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Realizar pago
        </v-card-title>

        <v-card-text>
          ¿Estás segur@ que desar realizar el pago de los productos de la orden N° - {{datosOrden.numero_orden}} ?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="hacerPago()"
          >
            Aceptar
          </v-btn>
          <v-btn
            color="red"
            text
            @click="showAlertaPago = false"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex';
import TablaProductosComponent from '../components/TablaProductosComponent.vue';
export default {
  name: "TablaPagosView",
  components: {TablaProductosComponent},
  data() {
    return {
      showAlertaPago: false,
      datosOrden: null,
       headers: [
        { text: 'Sku',value: 'sku',},
        { text: 'Nombre', value: 'name' },
        { text: 'Cantidad', value: 'quantity' },
        { text: 'Precio', value: 'price' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    };
  },
  methods: {
    /* Vuex */
    ...mapActions('Home',['realizarPagoAction']),
    /* Local */
    init: async function () {
      // Se verifica que los datos de la orden existan cargados, como 
      // parametros en la ruta, 
      this.datosOrden = this.$route.params.dataOrden;
      if (!this.datosOrden) {
        // al recargar la pagina reedirige a la vista anterior.
        this.$router.go(-1);
      }
    },
    hacerPago: async function(){
      this.showAlertaPago = false; // cierra modal de confirmación
      await this.realizarPagoAction(this.datosOrden);
    }
  },
  created() {
    this.init();
  },
};
</script>