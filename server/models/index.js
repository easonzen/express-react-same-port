const typeDefs = /* GraphQL */ `
  type Query {
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String
    age: Int
    company: Company
  }

  type Company {
    id: ID!
    name: String
  }
`;

module.exports = typeDefs;
