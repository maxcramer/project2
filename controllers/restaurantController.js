const Restaurant = require('../models/restaurant');

function restaurantsHaveYouTried(req, res) {
  Restaurant
    .find()
    .then(restaurants => {
      const randomIndex = Math.floor(Math.random() * restaurants.length);
      const randRestaurant = restaurants[randomIndex];
      res.render('pages/_home', { randRestaurant });
    });
}


function restaurantsIndex(req, res) {
  Restaurant
    .find()
    .then(restaurants => {
      res.render('restaurants/index', { restaurants });
    });
}

function restaurantsShow(req, res) {
  const restaurantId = req.params.id;
  Restaurant
    .findById(restaurantId)
    .then(restaurant => res.render('restaurants/show', { restaurant }));
}

function restaurantsNew(req, res) {
  res.render('restaurants/new');
}

function restaurantsCreate(req, res) {
  req.body.cuisines = req.body.cuisines.split(',');
  Restaurant
    .create(req.body)
    .then(() => res.redirect('/restaurants'))
    .catch(err => res.status(500).send(err));
}

function restaurantsEdit(req, res) {
  Restaurant
    .findById(req.params.id)
    .then(restaurant => {
      const priceRangeValues = restaurant.schema.path('priceRange').enumValues;
      res.render('restaurants/edit', { restaurant, priceRangeValues });
    })
    .catch(err => res.status(404).send(err));
}


function restaurantsUpdate(req, res) {
  Restaurant
    .findByIdAndUpdate(req.params.id, req.body)
    .then(restaurant => res.redirect(`/restaurants/${restaurant.id}`))
    .catch(err => res.status(500).send(err));
}

function restaurantsDelete(req, res) {
  Restaurant
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/restaurants'))
    .catch(err => res.status(404).send(err));
}

function restaurantsStarRating(req, res) {
  Restaurant
    .findByIdAndUpdate(req.params.id)
    .then(restaurant => res.redirect(`restaurants/${restaurant.id}`))
    .catch(err => res.status(404).send(err));
}

module.exports = {
  index: restaurantsIndex,
  show: restaurantsShow,
  create: restaurantsCreate,
  update: restaurantsUpdate,
  new: restaurantsNew,
  edit: restaurantsEdit,
  delete: restaurantsDelete,
  haveYouTried: restaurantsHaveYouTried,
  starRating: restaurantsStarRating
};
