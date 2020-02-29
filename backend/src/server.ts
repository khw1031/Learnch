/* eslint-disable no-console */
import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./graphql";

const port = process.env.PORT || 7000;
const env = process.env.NODE_ENV || "development";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

server.listen(port).then(({ url }) => {
  console.log(`GraphQL server is running at ${url}`);
  console.log(`mode: ${env} mode`);
});
