import pkg from "@apollo/client";
const { ApolloClient, InMemoryCache } = pkg;

export const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});
