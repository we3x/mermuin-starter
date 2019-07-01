const express = require('express')
const router = express.Router()
const constants = require("../constants")
const jwt = require("jsonwebtoken");

const User = require('../models/User');

router.get('/me', (req, res) => {
  jwt.verify(req.header('Authorization'), constants.secret_key, (err, decoded) => {
    if(err) {
      return res.status(403).json({ errors: {token: "Invalid token"}});
    }
    const { id } = decoded;
    User.findById(id, (err, user) => {
      delete user.password
      return res.json(user)
    })

  })
  
})

module.exports = router;