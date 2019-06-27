const express = require('express')
const router = express.Router()
const constants = require("../constants")
const jwt = require("jsonwebtoken");

router.get('/me', (req, res) => {
  jwt.verify(req.header.token, constants.secret_key, (err, decoded) => {
    if(err) res.status(403).json({ errors: {token: "Invalid token"}});
    res.statis(200).json({user: decoded})
  })
  
})

module.exports = router;