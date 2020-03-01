/* eslint-disable no-console */
import "../config";
import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./graphql";
import { config } from "node-config-ts";

console.log(process.env.NODE_ENV);
console.log(process.env.SECRET_KEY);
console.log({ port: config.server_port });

const port = config.server_port || 7000;
const env = process.env.NODE_ENV || "development";
console.log(config.allowed_origins);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req }),
  introspection: true, // ?
  playground: true, // ?
  debug: true, // ?
  cors: {
    credentials: true,
    origin: config.allowed_origins,
  },
});

server.listen(port).then(({ url }) => {
  console.log(`GraphQL server is running at ${url}`);
  console.log(`port: ${config.server_port}`);
  console.log(`allowed_origins: `, config.allowed_origins);
  console.log(`mode: ${env} mode`);
});
