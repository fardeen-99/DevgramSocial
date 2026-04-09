
const { body, validationResult } = require("express-validator")


const validator = (req, res, next) => {
  const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    next();
}




const AuthValidation = [
    body("username").isString().withMessage("this is not in a form of string")
    , body("email").isEmail().withMessage("this is not a right format of email"),
    body("password").isLength({ min: 6 }, { max: 20 }).withMessage("this is not a perfect password"),
    , validator

]

const loginValidation = [
    body("email").isEmail().withMessage("this is not a right format of email"),
    body("password").isLength({ min: 6 }, { max: 20 }).withMessage("this is not a perfect password"),
    validator

]

module.exports = { AuthValidation, loginValidation }

