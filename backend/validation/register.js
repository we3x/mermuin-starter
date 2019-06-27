const Validator = require("validator")
const isEmpty = require("is-empty")

const validateRegisterInput = (data) => {

  let {
    email,
    password,
    password_check,
    first_name,
    last_name
  } = data;

  console.log(`[debug] validate data: ${JSON.stringify(data)}`);
  
  let errors = {}

  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password: "";
  password_check = !isEmpty(password_check) ? password_check: "";
  first_name = !isEmpty(first_name) ? first_name : "";
  last_name = !isEmpty(last_name) ? last_name : "";

  if(Validator.isEmpty(email)) {
    errors.email = "Email field is required"
  } else if(!Validator.isEmail(email)) {
    errors.email = "Email is invalid"
  }

  if(Validator.isEmpty(password)){
    errors.password = "Password field is required";
  } else if (!Validator.isLength(password, {min: 6, max: 30})) {
    errors.password = "Password field must be at least 6 characters"
  }

  if(Validator.isEmpty(password_check)){
    errors.password_check = "Confirm password field is required";
  } else if(!Validator.equals(password, password_check)){
    errors.password_check = "Password must match"
  }

  if(!Validator.isAlpha(first_name)){
    errors.first_name = "First name contain have only latters";
  }

  if(!Validator.isAlpha(last_name)){
    errors.last_name = "Last name must contain only latters";
  }

  for(key in Object.keys(data)){
    if(Validator.isIn(key, ['email', 'password', 'password_check', 'first_name', 'last_name'])){
      errors.field = `Unexpected field ${key}, ${data[key]}`
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }

}

module.exports = validateRegisterInput;