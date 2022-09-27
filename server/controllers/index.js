const resolvers = {
  Query: {
    user: async (_, { id }, { dataSources }) => {
      return dataSources.RESTAPI.getUser(id);
    },
  },
};

module.exports = resolvers;
