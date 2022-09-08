<template>
  <v-app>
    <div class="d-flex justify-center ma-4">
      <v-card width="600" elevation="5">
        <v-card-title>New Recipe</v-card-title>
        <v-col>
          <v-text-field
            v-model="recipe.name"
            label="Name"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="recipe.imageUrl"
            label="ImageUrl"
            color="deep-purple"
            filed
            rows="1"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-textarea
            v-model="recipe.instructions"
            auto-grow
            filled
            color="deep-purple"
            label="Instructions"
            rows="1"
          ></v-textarea>
        </v-col>
        <v-card-text>
          Add the Ingredients needed.
          <v-btn color="primary" text @click="addIngredient(input)"
            >Add Ingredients</v-btn
          >
        </v-card-text>

        <v-card-actions>
          <v-col>
            <v-row
              class="justify-space-around"
              v-for="(ingredient, index) in ingredients"
              :key="index"
            >
              <v-col>
                <v-text-field
                  v-model="ingredients[index].name"
                  label="Name"
                  required
                ></v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  v-model="ingredients[index].quantity"
                  label="Quantity"
                  required
                ></v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  v-model="ingredients[index].quantityType"
                  label="QuantityType"
                  required
                ></v-text-field>
              </v-col>
              <v-btn
                class="mt-6"
                color="red"
                text
                @click="removeIngredient(index)"
                >Remove</v-btn
              >
            </v-row>
          </v-col>
        </v-card-actions>

        <v-card-actions>
          <v-btn text color="primary" @click="addRecipe">Add Recipe</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import { createRecipe } from "../graphql/mutations";
import { recipes } from "../graphql/queries";

export default {
  name: "Recipe",
  data() {
    return {
      recipe: {},
      ingredients: [
        {
          name: "",
          quantity: "",
          quantityType: "",
        },
      ],
    };
  },
  methods: {
    addIngredient() {
      this.ingredients.push({
        name: "",
        quantity: "",
        quantityType: "",
      });
    },
    removeIngredient(index) {
      this.ingredients.splice(index, 1);
    },
    addRecipe: async function () {
      this.recipe = { ...this.recipe, ingredients: [...this.ingredients] };
      console.log(this.recipe);
      // Call to the graphql mutation
      const result = await this.$apollo.mutate({
        mutation: createRecipe,
        variables: {
          createRecipeInput: {
            name: this.recipe.name,
            instructions: this.recipe.instructions,
            imageUrl: this.recipe.imageUrl,
            ingredients: this.recipe.ingredients,
          },
        },
        update: (cache, { data: { newRecipe } }) => {
          let data = cache.readQuery({ query: recipes });
          data = {
            ...data,
            ...newRecipe,
          };
          cache.writeQuery({ query: recipes, data });
        },
      });
      console.log("data object", result.data);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
