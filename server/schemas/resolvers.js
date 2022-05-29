const { Admin } = require('../models')

const resolvers = {
  Query: {
    admin: async () => {
      return Admin.find({});
    },
  },
  // Mutation: {}
};

module.exports = resolvers;
