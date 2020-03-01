/* eslint-disable no-console */
import "../config";
import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./graphql";
import { config } from "node-config-ts";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req }),
  introspection: true, // ?
  playground: true, // ?
  debug: true, // ?
  cors: {
    origin: config.allowed_origins,
    credentials: true,
  },
});

server.listen(config.server_port).then(({ url }) => {
  console.log(`GraphQL server is running at ${url}`);
  console.log(`port: ${config.server_port}`);
  console.log(`allowed_origins: `, config.allowed_origins);
  console.log(`mode: ${process.env.NODE_ENV} mode`);
});
