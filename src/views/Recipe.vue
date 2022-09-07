<template>
  <div>
    <v-app>
      <v-card max-width="mx-auto" max-height="my-auto">
        <v-img
          :aspect-ratio="16 / 9"
          :src="recipe.imageUrl"
          class="mx-6 my-6"
        ></v-img>
        <v-card-title>
          <h3 class="text-h1 font-weight-bold blue--text mb-2">
            {{ recipe.name }}
          </h3>
          <v-spacer></v-spacer>
          <v-btn color="red" class="white--text" @click="removeRecipe"
            >Delete</v-btn
          >
        </v-card-title>
        <v-card-text>
          <div class="font-weight-light text-h4 mb-2">
            {{ recipe.instructions }}
          </div>
          <div class="font-weight-light text-h4 mb-2">
            Here is the list of ingredients required for the recipe:
          </div>
          <ul class="font-weight-light text-h4 mb-2 mt-6 mx-10">
            <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">
              {{ ingredient.name }} - {{ ingredient.quantity }}
              {{ ingredient.quantityType }}
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import { removeRecipe } from "../graphql/mutations";
import { getRecipe } from "../graphql/queries";
export default {
  name: "Recipe",
  data() {
    return {
      recipe: {},
      id: this.$route.params.id,
      myStyle: {
        backgroundColor: "#4169e1",
      },
    };
  },
  methods: {
    getRecipe: async function () {
      // Call to the graphql mutation
      const result = await this.$apollo.query({
        query: getRecipe,
        variables: {
          id: Number(this.id),
        },
      });
      this.recipe = result.data.recipe;
      return this.recipe;
    },
    removeRecipe: async function () {
      await this.$apollo.mutate({
        mutation: removeRecipe,
        variables: {
          removeRecipeId: this.id,
        },
      });
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    this.getRecipe(this.$route.params.id);
  },
};
</script>
