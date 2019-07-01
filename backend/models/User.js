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

UserSchema.pre('save', async function(next) {
  try {
    let hash = await hashPassword(this.password);
    this.password = hash;
    this
      .save()
      .catch(err => {
        console.log(`[error] error in save user ${err}`);
      });
    return next();
  }catch(err) {
    console.log(`[error] error in hashing password ${err}`);
  }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
