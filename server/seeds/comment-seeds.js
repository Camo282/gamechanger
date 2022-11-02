const { Review } = require('../models');

const reviewData = [
  {
    comment_text: 'Test Comment',
    user_id: 1,
    recipe_id: 1
  },
  {
    comment_text: 'Test Comment',
    user_id: 1,
    recipe_id: 2
  }
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;