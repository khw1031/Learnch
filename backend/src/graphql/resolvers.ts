export const resolvers = {
  Query: {
    getUser: (_, { input }, ctx) => {
      return { id: 1, name: "Kim" };
    },
  },
  // Mutation: {},
};
