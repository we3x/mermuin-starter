const constants = require('../constants');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const verifyJWToken = (token) => {
  return new Promise((resolve, reject) =>
  {
    jwt.verify(token, constants.secret_key, (err, decodedToken) =>
    {
      if (err || !decodedToken)
      {
        return reject(err);
      }

      resolve(decodedToken);
    });
  });
};

const createJWToken = (data) => {
  let token = jwt.sign(
    data,
    constants.secret_key,
    {
      expiresIn: 2592000 // 30 days
    }
  );

  return token;
};

const hashPassword = (password) => {
  let promise =  new Promise(async (resolve, reject) => {
    try {
      let salt = await bcrypt.genSalt(10);
      let hash = await bcrypt.hash(password, salt);
    } catch(err) {
      reject(err);
    }
  });
  return promise;
};


module.exports = {
  verifyJWToken,
  createJWToken,
  hashPassword
};
