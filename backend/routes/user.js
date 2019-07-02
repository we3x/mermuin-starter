const express = require('express');
const router = express.Router();
const constants = require("../constants");

const { verifyJWToken } = require('../libs/auth');

const User = require('../models/User');

router.get('/me', async (req, res) => {
  try {
    let data = verifyJWToken(req.header('Authorization'));
    const { id } = data;
    User.findById(id, (err, user) => {
      return res.json(user);
    });
  } catch(err) {
    res.status(403).json({errors: {token: "Invalid token"}});
  }
});

module.exports = router;
