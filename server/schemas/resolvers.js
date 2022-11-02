const User = require('../models/User');
const Review = require('../models/Review');
const Game = require('../models/Game');
const {signToken} = require('../utils/auth.js');

// setup auth and context

const resolvers = {
  Query: {
    getUser: async (parent, args, context) => {
      return await User.findById(context.user._id)
    },
  },
  Mutation: {
    addUser: async (parent, args ) => {
    const user = User.create(args);
    const token = signToken(user);
    console.log(args)
      return {token, user};
        },
    addReview: async (parent, { args }) => {
      return await Review.create({ args });
    },
    updateReview: async (parent, { args }) => {
      // Find and update the matching class using the destructured args
      return await Review.findOneAndUpdate(
        { _id: id }, 
        { building },
        // Return the newly updated object instead of the original
        { new: true }
      );
    }

  }
};

// consider what mutations are necessary, figure out typeDefs necessary
// setup authentication: JWTs working. protect certain routes. game cannot be added without certain user etc.
// how to incorporate JWT into context of server


module.exports = resolvers;
