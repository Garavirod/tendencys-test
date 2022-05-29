<template>
  <v-app >
    <!-- Overlay  loadding -->
    <overlay-component />
    <router-view />
    <!-- Mensajes de exito o error al usuario -->
    <success-error-message />
  </v-app>
</template>



<script>
import OverlayComponent from './modules/shared/components/OverlayComponent.vue';
import SuccessErrorMessage from './modules/shared/components/SuccessErrorMessage.vue';
export default {
  name: "App",
  components:{
    SuccessErrorMessage,
    OverlayComponent

  },
  data: () => ({
    //
  }),
};
</script>
