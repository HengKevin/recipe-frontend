import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "http://localhost:3000/graphql",
  cache,
});
