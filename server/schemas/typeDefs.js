const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    savedGames: [Game]
  }

  type Game {
    _id: ID
    gameTitle: String
    gameData: String
    gameReviews: [Review]
  }

  type Review {
    _id: ID
    reviewContent: String
    rating: Int
    createdBy: String
    CreatedAt: Int
  }

  type Auth {
    token:ID!
    user: User
  }

  type Query {
    getUser: User
  }

  type Mutation {
    addUser(username: String!, password: String!) : Auth
    login()
    saveGame(gameTitle, gameData, gameReviews, ID)
  }

`;
//    addGame(gameTitle: String!, gameData: String!): Game
module.exports = typeDefs;

// make password work
// hooks
