import { gql } from "apollo-server-express";

export const Mutation = {
  type: gql`
    type Mutation {
      addBooks: (title: String, author: String),
    }
  `,
};
