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

export const Book: GraphQLModel<any> = {
  type: gql`
    type Book {
      title: String
      author: Author
    }
    type Query {
      getBooks: [Book]
    }
  `,
  resolver: {
    getBooks: () => books,
  },
};
