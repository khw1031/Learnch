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
  `,
  resolver: {
    getAuthors: () => books.map(({ author }) => author),
  },
};
