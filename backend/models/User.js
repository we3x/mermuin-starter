
const mongoose = require("mongoose")
const { hashPassword } = require('../libs/auth')

const Schema = mongoose.Schema

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
})

UserSchema.pre(
  'save', 
  function (next) {
    if(!this.isModified('password')) {
      return next();
    }

    hashPassword(this.password)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => {
      console.log(`[error] Hashing password ${err}`)
    })
  }
)

const User = mongoose.model("users", UserSchema)

module.exports = User;
