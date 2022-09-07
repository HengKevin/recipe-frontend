import Home from "../views/Home.vue";
import AddRecipe from "../views/AddRecipe.vue";
import Recipe from "../views/Recipe.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-recipe",
    name: "AddRecipe",
    component: AddRecipe,
  },
  {
    path: "/recipe/:id",
    name: "Recipe",
    component: Recipe,
  }
];
