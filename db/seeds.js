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
      priceRange: '£',
      cuisine: 'Vegan',
      contactNumber: '020482748493',
      contactEmail: 'info@farmacy.co.uk',
      coverPic: 'https://www.hot-dinners.com/images/stories/blog/2016/farmacyburger.jpg'
    },
    {
      name: 'Arancini Brothers',
      location: '42, Old Street, Shorditch',
      details: 'We proudly serve our handmade risotto balls all over London, at private functions and also street food events and markets. In store, we also serve delicious house-baked sweets and top notch coffee.',
      priceRange: '££',
      cuisine: 'Vegan, Vegeterian, Italian',
      contactNumber: '037384738472',
      contactEmail: 'info@aranciniborthers.co.uk',
      coverPic: 'https://blog.izettle.com/wp-content/uploads/2017/04/arancini-brothers-risotto-balls.jpg'
    },
    {
      name: 'Temple of Seitan',
      location: '103a, Camley Street, Kings Cross',
      details: 'First ever vegan fried chicken shop! Also serving beautiful seitan based "beef" burgers as well as incredible pulled "pork" jackfruit burger! If you have not been here yet you are missing out!',
      priceRange: '£££',
      cuisine: 'Vegan, "fried chicken"',
      contactNumber: '0247363948383',
      contactEmail: 'info@templeofseitan.com',
      coverPic: 'https://static1.squarespace.com/static/5818ece13e00be2eafda58d6/599140f03e00bea41c12cf2a/5b4c70871c6be586c302ea7b/1531736216219/?format=500w'
    },
    {
      name: 'Portobello Juice Bar',
      location: '297, Portobello Road, Notting Hill',
      details: 'resh Juices, Smoothies, Protein Shakes, Healthy Salads, Breakfasts, Toasted Sandwiches, Healthy Main Meals, Dips, Homemade Soup, Create your own dishes. VEGAN menu, All Available for delivery until 22:45 everyday!',
      priceRange: '£££',
      cuisine: 'Vegan, Smoothies, Breakfasts, Salads',
      contactNumber: '0247363948383',
      contactEmail: 'info@pjb.com',
      coverPic: 'https://static1.squarespace.com/static/548e1f26e4b0c85246a86004/t/584858c4e3df28ce00168fa5/1481136325571/poached+eggs+avocado+toast.jpg?format=1500w'
    },
    {
      name: 'Farm Girl Cafe',
      location: '59a, Portobello Road, Notting Hill',
      details: 'Bright, casual cafe with tiled walls, for health-conscious brunches, smoothies and sandwiches.',
      priceRange: '£££',
      cuisine: 'Vegan, Brunch, Smoothies, Sandwiches',
      contactNumber: '0247363948383',
      contactEmail: 'info@farmgirl.com',
      coverPic: 'http://assets.wh.cdnds.net/images/8000/farm_girl_cafe__big_4x3.jpg'
    },
    {
      name: 'Black Cat Cafe',
      location: '76a, Clarrence Road, Hackney',
      details: 'Bohemian, volunteer-run vegan cafe with banquette, sofas and mismatched tables.',
      priceRange: '£££',
      cuisine: 'Vegan, Brunch, Smoothies, Sandwiches',
      contactNumber: '0247363948383',
      contactEmail: 'info@blackcat.com',
      coverPic: 'https://static1.squarespace.com/static/59ca236f80bd5e1a6eae435a/t/5a8db6e60852299abea04728/1519236838983/IMG_1743.JPG?format=2500w'
    },
    {
      name: 'Mildreds',
      location: '200, Pentoville Road, Kings Cross',
      details: 'mildreds kings cross joins casual dining with industrial chic. a mix of sharing and individual tables and an open kitchen create a convivial atmosphere.',
      priceRange: '£££',
      cuisine: 'Vegan, Dinner, Lunch, Cocktails',
      contactNumber: '0247363948383',
      contactEmail: 'info@mildreds.com',
      coverPic: 'http://www.mildreds.co.uk/content/uploads/2016/04/mildreds-8395-730x516.jpg'
    },
    {
      name: 'Young Vegans',
      location: 'Camden Market, 60, Camden Lock Place, Camden Town',
      details: 'Our pies are ready and waiting to fly into your ovens at home! Pies available include our brand new Chicken Katsu, Chicken Parmigiana aswell as our best selling Vegan Steak And Ale, All Day Breakfast and the tasty BBQ Chicken Melt.',
      priceRange: '£',
      cuisine: 'Vegan, Pie & Mash',
      contactNumber: '0247363948383',
      contactEmail: 'info@myoungvegans.com',
      coverPic: 'https://somewherevegan.com/wp-content/uploads/2017/10/840_young-Vegans3.jpg'
    },
    {
      name: 'Picky Wops',
      location: '7, North End Roadd, Fulham,',
      details: 'Picky Wops #pickyourbase between a selection of alternative and healthy pizza doughs.',
      priceRange: '££',
      cuisine: 'Vegan, Pizza',
      contactNumber: '0247363948383',
      contactEmail: 'info@pickywops.com',
      coverPic: 'https://www.pickywops.com/wp-content/uploads/2016/06/IMG-20160919-WA0012.jpg'
    },
    {
      name: 'Cupcakes & Shhht',
      location: 'Unit 10, The Artworks, Elephant Road, Elephant & Castle',
      details: 'We have hand made everything from the very start of Cupcakes and Shhht, kept the fairness and equality of the way in which we source our products at our highest importance, creating delicious food that has been inspired, everyday by the happy people we work with and our beautiful environment.',
      priceRange: '££',
      cuisine: 'Vegan, Cupcakes, Milkshakes',
      contactNumber: '0247363948383',
      contactEmail: 'info@cupcakesnshhht.com',
      coverPic: 'https://pbs.twimg.com/media/DV6Q1KYXkAAF1ax.jpg:large'
    },
    {
      name: 'Redemption',
      location: '6, Chepstow Road, Notting Hill',
      details: 'Redemption Bar is lead by two empowered female entrepreneurs:  Catherine Salway - with a background in business at Virgin; and Andrea Waters - an experienced restauranteur, vegan and raw chef.',
      priceRange: '£££',
      cuisine: 'Vegan, Vegetarian, Healthy',
      contactNumber: '0247363948383',
      contactEmail: 'info@redemption.com',
      coverPic: 'https://www.redemptionbar.co.uk/uploads/1/0/8/9/108990523/img-1811_orig.jpg'
    }
  ])
  .then(restaurants => console.log(`Created ${restaurants.length} restaurants!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
