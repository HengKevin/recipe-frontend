import gql from "graphql-tag";

export const getRecipes = gql`
  query {
    recipes {
      id
      name
      imageUrl
      ingredients {
        name
      }
    }
  }
`;

export const getRecipe = gql`
  query ($id: Int!) {
    recipe(id: $id) {
      id
      name
      imageUrl
      instructions
      ingredients {
        id
        name
        quantity
        quantityType
      }
    }
  }
`;
