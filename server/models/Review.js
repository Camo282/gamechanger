const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    reviewContent: {
        type: String
    }, 
    rating: {
        type: Number
    },
    createdBy: {
        type: String
      },
    createdAt: {
        type: Date,
        default: Date.now
    },
 
});


  const Review = model('Review', reviewSchema);
  
  module.exports = Review;