const User = require('../models/User');
// setup auth and context

const resolvers = {
  Query: {
    getUser: async (parent, args, context) => {
      return await User.findById(context.user._id)
    },
  },
  Mutation: {
    addUser: async (parent, args ) => {
      return await User.create(args);
    },
  }
};

// consider what mutations are necessary, figure out typeDefs necessary
// setup authentication: JWTs working. protect certain routes. game cannot be added without certain user etc.
// how to incorporate JWT into context of server


module.exports = resolvers;
