import gql from "graphql-tag";

export const recipes = gql`
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

export const recipe = gql`
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
