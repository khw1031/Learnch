import { makeExecutableSchema } from "apollo-server-express";
import { Query } from "./Query";
// import { Mutation } from "./Mutations";
import { typeDefs, resolvers } from "./models";

export default makeExecutableSchema({
  typeDefs: [Query.type, ...typeDefs],
  resolvers: {
    Query: resolvers,
  },
});
