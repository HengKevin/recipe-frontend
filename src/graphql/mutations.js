import gql from "graphql-tag";

export const createRecipe = gql`
  mutation CreateRecipe($createRecipeInput: CreateRecipeInput!) {
    createRecipe(createRecipeInput: $createRecipeInput) {
      id
      name
      instructions
      imageUrl
      createdAt
      updatedAt
      ingredients {
        name
        quantity
        quantityType
      }
    }
  }
`;

export const removeRecipe = gql`
  mutation RemoveRecipe($removeRecipeId: Int!) {
    removeRecipe(id: $removeRecipeId) {
      id
    }
  }
`;
