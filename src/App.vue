<template>
  <div>
    <v-app>
      <NavBar />
      <router-view>
        <Home />
        <AddRecipe />
        <Recipe />
      </router-view>
    </v-app>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Recipe from "./views/Recipe.vue";
import AddRecipe from "./views/AddRecipe.vue";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    Home,
    AddRecipe,
    Recipe,
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>
