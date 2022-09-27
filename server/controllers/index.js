const resolvers = {
  Query: {
    users: () => [{ id: "1", name: "Eason", age: 18 }],
    user: async (_, { id }, { dataSources }) => {
      console.log(id);
      return dataSources.RESTAPI.getUser(id);
    },
  },
};

module.exports = resolvers;
