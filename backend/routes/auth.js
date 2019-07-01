const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { createJWToken, hashPassword } = require('../libs/auth')


const validateLoginInput = require('../validation/login');
const validateRegisterInput = require('../validation/register');

const User = require('../models/User');

router.post('/register', (req, res) => {

  const { errors, isValid } = validateRegisterInput(req.body)

  if(!isValid){
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if(user){
      res.status(400).json({ errors: { email: "Email already exist in database"}})
    } else {
      const newUser = User(req.body);
      hashPassword(newUser.password)
      .then((hash) => {
        newUser.password = hash
        newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(`[error] User save ${err}`))
      })
      .catch(err => console.log(`[error] Hash password ${err}`))
    }
  });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  const { email, password } = req.body;

  if(!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: email}).select('+password').exec((err, user) => {
    if(!user || err) {
      res.status(404).json({ errors: { email: "Couldn't find account with that email"}});
    } else {
      bcrypt.compare(password, user.password).then(isMatch => {
        if(isMatch) {
          let token = createJWToken({id: user.id})
          return res.json({
            success: true,
            token: `${token}`
          })
        } else {
          return res.status(403).json({ errors: { password: "Password incorrect"}});
        }
      })
    }
  })
})

module.exports = router;