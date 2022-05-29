const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Admin {
    first: String!
    last: String!
    email: String!
  }

  type Query {
    admin: Admin
  }

`;

module.exports = typeDefs;
