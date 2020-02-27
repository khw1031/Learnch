import { gql } from "apollo-server-express";
import { GraphQLModel } from ".";

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: {
      name: "J.K. Rowling",
    },
  },
  {
    title: "Jurassic Park",
    author: {
      name: "Michael Crichton",
    },
  },
];

export const Author: GraphQLModel<any> = {
  type: gql`
    type Author {
      name: String
      books: [Book]
    }
    type Query {
      getAuthors: [Author]
    }
  `,
  resolver: {
    getAuthors: () => books.map(({ author }) => author),
  },
};
