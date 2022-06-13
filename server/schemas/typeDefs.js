const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type Query {
    "Find the logged in user."
    me: User
    comment(id: ID!): Comment
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(commentAuthor: String!, commentText: String!): Comment
    removeComment(id: ID!): Boolean
    updateComment(id: ID!, commentText: String!): Comment
  }

  type Auth {
    token: String!
    user: User!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    lastLogin: Date!
    comment: [Comment!] 
  }
  
  type Comment {
    _id: ID!
    commentAuthor: String!
    commentText: String!
    Date: Date! 
  }
`;

module.exports = typeDefs;
