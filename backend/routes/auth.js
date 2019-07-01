const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { createJWToken, hashPassword } = require('../libs/auth');


const validateLoginInput = require('../validation/login');
const validateRegisterInput = require('../validation/register');

const User = require('../models/User');

router.post('/register', async (req, res) => {

  const { errors, isValid } = validateRegisterInput(req.body);

  if(!isValid){
    return res.status(400).json(errors);
  }

  try {

    let user = await User.findOne({ email: req.body.email });
    if(user){
      res.status(400).json({ errors: { email: "Email already exist in database"}});
    } else {
      const newUser = await User(req.body).save();
      return res.json(newUser);
    }

  } catch(err) {
    res.status(400).json({ errors: { error: "Failed to save User in db"}});
  }

});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  const { email, password } = req.body;

  if(!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: email}).select('+password').exec(async (err, user) => {
    if(!user || err) {
      res.status(404).json({ errors: { email: "Couldn't find account with that email"}});
    } else {
      let isMatch = await bcrypt.compare(password, user.password);
      if(isMatch) {
        let token = createJWToken({id: user.id});
        return res.json({
          success: true,
          token: `${token}`
        });
      } else {
        return res.status(403).json({ errors: { password: "Password incorrect"}});
      }
    }
  });
});

module.exports = router;
