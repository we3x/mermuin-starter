
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  }
})

const User = mongoose.model("users", UserSchema)

module.exports = User;
