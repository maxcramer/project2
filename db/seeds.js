const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/project2');

const Restaurant = require('../models/restaurant');

Restaurant.collection.drop();

Restaurant
  .create([
    {
      name: 'Farmacy',
      location: '74, Westbourne Grove, Bayswater',
      details: 'Beautiful vegan restaurant based in the heart of London, moments from Notting Hill. Set up by a doctor after realising how important diet is to health.',
      priceRange: 'High',
      cuisine: 'Vegan',
      contactNumber: '020482748493',
      contactEmail: 'info@farmacy.co.uk',
      coverPic: 'https://www.hot-dinners.com/images/stories/blog/2016/farmacyburger.jpg'
    },
    {
      name: 'Arancini Brothers',
      location: '42, Old Street, Shorditch',
      details: 'We proudly serve our handmade risotto balls all over London, at private functions and also street food events and markets. In store, we also serve delicious house-baked sweets and top notch coffee.',
      priceRange: 'low',
      cuisine: 'Vegan, Vegeterian, Italian',
      contactNumber: '037384738472',
      contactEmail: 'info@aranciniborthers.co.uk',
      coverPic: 'https://blog.izettle.com/wp-content/uploads/2017/04/arancini-brothers-risotto-balls.jpg'
    },
    {
      name: 'Temple of Seitan',
      location: '103a, Camley Street, Kings Cross',
      details: 'First ever vegan fried chicken shop!',
      priceRange: 'High',
      cuisine: 'Vegan, fried chicken',
      contactNumber: '0247363948383',
      contactEmail: 'info@templeofseitan.com',
      coverPic: 'https://static1.squarespace.com/static/5818ece13e00be2eafda58d6/599140f03e00bea41c12cf2a/5b4c70871c6be586c302ea7b/1531736216219/?format=500w'
    }
  ])
  .then(restaurants => console.log(`Created ${restaurants.length} restaurants!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
