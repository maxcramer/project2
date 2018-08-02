const Restaurant = require('../models/restaurant');

function ratingsCreate(req, res) {
  Restaurant
    .findById(req.params.id)
    .then(restaurant => {
      restaurant.ratings.push(req.body);
      return restaurant.save();
    })
    .then(restaurant => res.redirect(`/restaurants/${restaurant.id}`))
    .catch(err => console.log(err));
}

function ratingsDelete(req, res, next) {
  Restaurant
    .findById(req.params.restaurantId)
    .then(restaurant => {
      const ratingIdToDelete = req.params.ratingId;
      restaurant.ratings = restaurant.ratings.filter(
        rating => rating.id !== ratingIdToDelete
      );
      return restaurant.save();
    })
    .then(restaurant => res.redirect(`/restaurants/${restaurant.id}`))
    .catch(next);
}

module.exports = {
  create: ratingsCreate,
  delete: ratingsDelete
};
