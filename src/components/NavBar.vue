<template>
  <div>
    <v-toolbar dense color="blue darken-4" dark height="80" app>
      <v-toolbar-title class="text-uppercase text-font-bold" @click="home"
        >Nanjime</v-toolbar-title
      >
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn class="hidden-sm-and-down" color="#D61C4E" @click="home"
        >HOME</v-btn
      >
      <v-btn
        color="yellow darken-3"
        class="hidden-sm-and-down ml-5"
        @click="add"
        >ADD RECIPE</v-btn
      >
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      app
      absolute
      temporary
      color="blue darken-4"
      width="300"
      class="hidden-md-and-up"
    >
      <v-list nav dense>
        <v-list-item-group class="white--text">
          <v-list-item @click="home">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="add">
            <v-list-item-icon>
              <v-icon>{{ icons.mdiPencil }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Add Recipe</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mdiPencil } from "@mdi/js";
export default {
  name: "NavBar",
  methods: {
    add() {
      this.$router.push("/add-recipe");
    },
    home() {
      this.$router.push("/");
    },
  },
  data() {
    return {
      drawer: false,
      icons: { mdiPencil },
    };
  },
};
</script>
