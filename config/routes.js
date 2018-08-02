const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const registrationController = require('../controllers/registrationController');
const sessionController = require('../controllers/sessionController');
const commentController = require('../controllers/commentController');
const ratingController = require('../controllers/ratingController');
const profileController = require('../controllers/profileController');

function secureRoute(req, res, next) {
  if (!req.session.userId) {
    // User is not logged in. Disallow!
    return req.session.regenerate(() => {
      req.flash('danger', 'Please log in to do that');
      res.redirect('/sessions/new');
    });
  }

  return next();
}

// Home
router.get('/', restaurantController.haveYouTried);

// Becomes an express Router
router.get('/', (req, res) => res.render('pages/_home'));
router.get('/about', (req, res) => res.render('pages/_about'));


router.route('/profiles/:id/edit')
  .get(profileController.edit)
  .put(profileController.update);

router.route('/profiles/:id')
  .get(profileController.show)
  .put(profileController.update)
  .delete((req, res, next) => {
    if (req.session.userId) {
      profileController.delete(req, res, next);
    } else {
      req.flash('warning', 'You cannot do that!');
      res.redirect('/sessions/new');
    }
  });


router.route('/registrations/new')
  .get(registrationController.new); // Show the form

router.route('/registrations')
  .post(registrationController.create); // Create the user

router.route('/sessions/new')
  .get(sessionController.new); // Show the form
router.route('/sessions')
  .post(sessionController.create); // Create the user

router.route('/sessions/delete')
  .get(sessionController.delete);

router.route('/restaurants')
  .get(restaurantController.index)
  .post(restaurantController.create);

router.route('/restaurants/new')
  .get(secureRoute, restaurantController.new);

router.get('/restaurants/:id/edit', restaurantController.edit);

router.route('/restaurants/:id')
  .get(restaurantController.show)
  .put(restaurantController.update)
  .delete((req, res, next) => {
    if (req.session.userId) {
      restaurantController.delete(req, res, next);
    } else {
      req.flash('warning', 'You cannot do that!');
      res.redirect('/sessions/new');
    }
  });

router.route('/restaurants/:restaurantId/comments')
  .post(secureRoute, commentController.create);

router.route('/restaurants/:id/ratings')
  .post(secureRoute, ratingController.create);

router.route('/restaurants/:restaurantId/comments/:commentId')
  .delete(secureRoute, commentController.delete);

module.exports = router;
