<template>
  <div class="d-flex justify-space-between flex-wrap">
    <v-card
      class="mx-auto my-12"
      color="white lighten-4"
      width="500"
      max-width="500"
      v-for="recipe in recipes"
      :key="recipe.id"
      @click="navigate(recipe.id)"
    >
      <v-img :aspect-ratio="16 / 9" :src="recipe.imageUrl"> </v-img>
      <v-card-text class="pt-6" style="position: relative">
        <v-btn absolute color="red" class="white--text" fab large right top>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
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
import { getRecipes } from "../graphql/queries";

export default {
  name: "Home",
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    test: async function () {
      // Call to the graphql mutation
      const result = await this.$apollo.query({
        query: getRecipes,
      });
      this.recipes = result.data.recipes;
    },

    navigate: function (recipeId) {
      let recipe = recipeId;
      this.$router.push({ name: "Recipe", params: { id: recipe } });
    },
  },
  activated() {
    this.test();
  },
  async mounted() {
    await this.test();
  },
};
</script>
