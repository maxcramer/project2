const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {type: String, required: true},
  coverPic: {type: String},
  location: {type: String},
  details: {type: String},
  priceRange: {type: String},
  cuisine: {type: String},
  contactNumber: {type: Number},
  contactEmail: {type: String},
  comments: [{name: String, content: String}]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
