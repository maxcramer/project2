const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  profilePic: { type: String, require: true},
  favouriteFoodType: { type: String, require: true}
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function(next) {
  console.log('pre-validate hook has happened');
  if(this._passwordConfirmation !== this.password) {
    console.log('passwords did not match');
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next(); // We're finshed thanks! Mongoose can do the next thing in the lifecycle.
});

userSchema.pre('validate', function() {
  console.log('Post validate hook happened! Well done!');
});

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

module.exports = mongoose.model('User', userSchema);
