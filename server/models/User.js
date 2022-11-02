const {Schema, model} = require('mongoose');
const gameSchema = require('./Game');

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    savedGames: [gameSchema],
    password: {
      type: String,
      required: true,
    },
    // use bcrypt or sth to hash the password 
  }, {
    timestamps: true,
  });
    // user schema can have as many saved games as they want
  
  const User = model('User', userSchema);
  
  module.exports = User;