// import {body,validationResult} from "express-validator"
const {body,validationResult}=require("express-validator")


const validator=(req,res,next)=>{
        const error = validationResult(req)
        if(error.isEmpty()){
          return next()
        }
        return         res.status(400).json({
            message:error.array()
        })
    }

const AuthValidation=[
    body("username").isString().withMessage("this is no ina form of string")
    ,body("email").isEmail().withMessage("this is not a right format of email"),
    body("password").isLength({min:3}).withMessage("this is not a perfect password"),
//     body("password").custom((value)=>{
// if(value.length>6){
//     throw new Error("password is so short");
// }
// const passwordregex="/asas/askjskaj example "
// if(!passwordregex.test(value)){
//     throw new Error("password is not right")
// }
// return true
//     })
    ,validator
    
]
module.exports={AuthValidation}

