import { gql } from "apollo-server-express";

export const Query = {
  type: gql`
    type Query {
      getBooks: [Book]
      getAuthors: [Author]
    }
  `,
};
