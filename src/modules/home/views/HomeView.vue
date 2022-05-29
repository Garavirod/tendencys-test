<template>
  <v-app class="custom-bg">
    <v-app-bar app color="secondary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click="showNavigator = !showNavigator"></v-app-bar-nav-icon>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://www.tendencys.com/assets/images/logo.jpg"
          transition="scale-transition"
          width="100"
        />
        <v-toolbar-title>Sistema de órdenes</v-toolbar-title>
      </div>
    </v-app-bar>

    <v-navigation-drawer 
    color="secondary"
    v-model="showNavigator" app dark>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Administración</v-list-item-title>
            <v-list-item-subtitle>Panel de control</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list>
        <v-list-item  @click="goTo(item.route)" v-for="item in rutasNavigator" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>  
      <!-- Cerrar sesión --> 
       <template v-slot:append>
        <div class="pa-2">
          <v-btn  color="red" block>
            Logout
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </div>
       
      </template>  
    </v-navigation-drawer>
    <v-main>
      <v-container fill-height fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    showNavigator: true,
    rutasNavigator: [
      {
        title: "Tabla de órdenes",
        icon: "mdi-format-list-checks",
        route: { name: "tabla-ordenes", params: {} },
      },
    ],
  }),
  methods:{
    /**
     * LLeva al usuario a otra pantalla
     */
    goTo: function (route) {
      // Evitamos ruteo redundante
      if (this.$route.name !== route.name) this.$router.push(route);
    },
  }
};
</script>
<style lang="scss" scoped>
.custom-bg {
    background:linear-gradient(to right top, #051937, #133660, #1d578d, #1f7bbb, #12a1eb);
}
</style>