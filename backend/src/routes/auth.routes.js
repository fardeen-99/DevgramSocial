const express=require("express")
const IdentifyToken=require("../middlewares/auth.middleware")
const multer=require("multer")

const { AuthValidation } = require("../validation/auth.validation")
// const {body,validationResult}=require("express-validator")
// import {AuthValidation} from "../validation/auth.validation.js"

const upload=multer({storage:multer.memoryStorage()})
const authRouter=express.Router()
const {Register,Login,Logout,Getme,Update}=require("../controllers/user.controller")

authRouter.post("/register",upload.single("file"),AuthValidation,Register)
authRouter.post("/login",upload.single("file"),Login)
authRouter.post("/logout",Logout)
authRouter.get("/get-me",IdentifyToken,Getme)
authRouter.put("/update/:id",upload.single("file"),IdentifyToken,Update)


// authRouter.get("/user",(req,res,next)=>{
// //  try{
// try {
//    res.send(user)
    
// } catch (err) {
//     err.status = 404
//     next(err)
// }


// })

/*

register ke liye
[
    body("username").isString().withMessage("this is no ina form of string")
    ,body("email").isEmail().withMessage("this is not a right format of email"),
    body("password").isLength({min:6,max:12}).withMessage("this is not a perfect password")
    ,
    (req,res,next)=>{
        const error = validationResult(req)
        if(error.isEmpty()){
          return next()
        }
        return         res.status(400).json({
            message:error.array()
        })
    }
]

*/

module.exports=authRouter