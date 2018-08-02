const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {type: String, required: true},
  coverPic: { type: String },
  location: { type: String },
  details: { type: String },
  priceRange: { type: String, enum: ['£££', '££', '£'] },
  cuisines: [{ type: String }],
  contactNumber: { type: Number },
  contactEmail: { type: String },
  comments: [{ name: String, content: String, rating: { type: Number, min: 1, max: 5 } }],
  ratings: [{ name: String, rating: {type: Number, min: 1, max: 5}}]
});

restaurantSchema.virtual('averageRating')
  .get(function() {
    return this.ratings.reduce((total, review) => total + review.rating, 0) / this.ratings.length;
  });


module.exports = mongoose.model('Restaurant', restaurantSchema);
