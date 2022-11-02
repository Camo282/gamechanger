const {Schema, model} = require('mongoose');
const reviewSchema = require('./Review');

const gameSchema = new Schema({
    gameTitle: {
        type: String
    }, 
    gameData: {
        type: String
    }, 
    // gameReviews: [reviewSchema],
});
  
module.exports = gameSchema;