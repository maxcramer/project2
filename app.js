const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const User = require('./models/user');
const flash = require('express-flash');
const { PORT, DB_URI } = require('./config/environment');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(DB_URI);

// LAYOUTS
const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', `${__dirname}/views`); // DEFULT

// STATIC FILES
app.use(express.static(`${__dirname}/public`));

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // ADDS REQ.BODY
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(session({
  secret: 'lkjaslkjasdlfkjsdafhslgkhljbsadf09u23lns',
  resave: false,
  saveUnititialized: false
}));

// Check the session cookie for a user
app.use((req, res, next) => {
  if (!req.session.userId) return next();
  User
    .findById(req.session.userId)
    .then(user => {
      // We are logged in!
      res.locals.user = user; // res.locals is an Express thing
      res.locals.isLoggedIn = true;
      next();
    });
});

app.use(flash());


// ROUTES
const router = require('./config/routes');
app.use(router);

// ERROR HANDLER
// app.use((error, req, res, next) => {
//   if (error) {
//     return res.json(error);
//   }
//   return next();
// });

// START LISTENING
app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
