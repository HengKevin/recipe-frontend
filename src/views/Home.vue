<template>
  <div class="d-flex justify-space-between flex-wrap">
    <v-card
      class="mx-auto my-12"
      color="white lighten-4"
      width="450"
      max-width="450"
      v-for="recipe in recipes"
      :key="recipe.id"
      @click="navigate(recipe.id)"
    >
      <v-img :aspect-ratio="16 / 9" :src="recipe.imageUrl"> </v-img>
      <v-card-text class="pt-6" style="position: relative">
        <div class="font-weight-light grey--text text-h6 mb-2">
          For the perfect meal
        </div>
        <h3 class="text-h4 font-weight-normal blue--text mb-2">
          {{ recipe.name }}
        </h3>
        <div class="font-weight-light text-h6 mb-2">
          Our Vintage kitchen utensils delight any chef.<br />
          Made of bamboo by hand
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { recipes } from "../graphql/queries";

export default {
  name: "Home",
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    getRecipes: async function () {
      const result = await this.$apollo.query({
        query: recipes,
        fetchPolicy: "no-cache",
      });
      this.recipes = result.data.recipes;
      console.log(result.data.recipes);
    },

    navigate: function (recipeId) {
      let recipe = recipeId;
      this.$router.push({ name: "Recipe", params: { id: recipe } });
    },
  },
  async mounted() {
    await this.getRecipes();
  },
};
</script>
