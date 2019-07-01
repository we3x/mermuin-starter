const { hashPassword } = require('../libs/auth');
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  }
});

UserSchema.pre('save', function(next) {
  hashPassword(this.password)
    .then((hash) => {
      this.password = hash;
      this.save();
      return next();
    });

});

const User = mongoose.model("users", UserSchema);

module.exports = User;
