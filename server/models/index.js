const typeDefs = /* GraphQL */ `
  type Query {
    users: [User]
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String
    age: Int
  }
`;

module.exports = typeDefs;
