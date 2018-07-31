const Restaurant = require('../models/restaurant');

function commentsCreate(req, res) {
  Restaurant
    .findById(req.params.restaurantId)
    .then(restaurant => {
      restaurant.comments.push(req.body);
      return restaurant.save();
    })
    .then(restaurant => res.redirect(`/restaurants/${restaurant.id}`))
    .catch(err => console.log(err));
}

function commentsDelete(req, res, next) {
  Restaurant
    .findById(req.params.restaurantId)
    .then(restaurant => {
      const commentIdToDelete = req.params.commentId;
      restaurant.comments = restaurant.comments.filter(
        comment => comment.id !== commentIdToDelete
      );
      return restaurant.save();
    })
    .then(restaurant => res.redirect(`/restaurants/${restaurant.id}`))
    .catch(next);
}

module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
