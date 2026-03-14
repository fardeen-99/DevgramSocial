require("dotenv").config()



const express=require("express")
const authRouter=require("./routes/auth.routes")
const postRouter=require("./routes/post.routes")
const HandleError=require("./middlewares/error.middleware")
const UserFollowRouter=require("./routes/user.routes")
const feedbackRouter=require("./routes/feedback.routes")
const cookie=require("cookie-parser")

const cors=require("cors")

const app=express()


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookie())
app.use(express.static("public"))
app.use(express.json())
app.use("/api/auth",authRouter)
app.use("/api/post",postRouter)
app.use("/api/user",UserFollowRouter)
app.use("/api/feedback",feedbackRouter)

const path=require("path")

app.get("*Name",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})





app.use(HandleError)


module.exports=app