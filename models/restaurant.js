const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {type: String, required: true},
  coverPic: { type: String },
  location: { type: String },
  details: { type: String },
  priceRange: { type: String, enum: ['£££', '££', '£'] },
  cuisine: { type: String },
  contactNumber: { type: Number },
  contactEmail: { type: String },
  comments: [{ name: String, content: String, rating: { type: Number, min: 1, max: 5 } }],
  starRating: { type: Number, min: 1, max: 5 }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
