const User = require('../models/User');
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

      // return await User.create(args);
    },

  }
};

// consider what mutations are necessary, figure out typeDefs necessary
// setup authentication: JWTs working. protect certain routes. game cannot be added without certain user etc.
// how to incorporate JWT into context of server


module.exports = resolvers;
