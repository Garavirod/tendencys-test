<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <div class="d-flex align-center">
        <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
        <v-toolbar-title>Tendencys</v-toolbar-title>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
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

      <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="showNavigator = false" color="red" block>
            <v-icon>mdi-arrow-collapse</v-icon>
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