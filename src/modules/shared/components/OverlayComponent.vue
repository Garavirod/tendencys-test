<!-- 
  Este componente es un overlay de carga que se accede
  desde cualquier modulo y sireve para mostrar al usuario que un
  procesoo se esta ejecutando.
-->
<template>
  <div class="text-center">
    <v-overlay :value="overlayState.visible" z-index="10">
      <div class="text-center mt-6">
        <v-progress-circular
          :size="50"
          :width="10"
          color="green"
          indeterminate
        ></v-progress-circular>
      </div>
      <p class="mt-5 text-center">{{ overlayState.text }}.</p>
    </v-overlay>
  </div>
</template>



<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "OverlayComponent",
  computed: {
    ...mapState("Shared", ["overlayState"]),
  },

  methods: {
    ...mapMutations("Shared", ["setOverlayState"]),
  },
};
</script>

