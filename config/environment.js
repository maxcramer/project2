const PORT = process.env.PORT || 8000;
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';

module.exports = {
  DB_URI, PORT
};
