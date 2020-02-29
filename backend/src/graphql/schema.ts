import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  input UserInput {
    id: ID
    name: String
  }

  type Query {
    getUser(input: UserInput!): User!
  }
`;
