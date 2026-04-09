const followmodel = require("../models/follow.model")
const usermodel = require("../models/user.model")
const postmodel = require("../models/post.model")
const ErrorHandler = require("../utils/Error.util")

const FollowRoute = async (req, res,next) => {
try{
    const myId = req.user.id
    const followee = req.params.id

    const isExist = await usermodel.findById(followee)
    if (!isExist) {
        return next( new ErrorHandler(404,"user not found"))
    }


    if (myId === followee) {//400 --> bad request
        return next(new ErrorHandler(400,"you cannot follow yourself"))
    }

    const IsAlreadyFollow = await followmodel.findOne({
        follower: myId,
        followee
    })
    if (IsAlreadyFollow) {
        return next(new ErrorHandler(409, `you already follow ${followee}`))
    }


    const userFollow = await followmodel.create({
        follower: myId,
        followee,

    })

    res.status(201).json({
        message: "you follow" + followee,
        userFollow
    })
}
catch(error){
    next(error)
}

}

const AcceptRoute = async (req, res,next) => {
try{
    const myId = req.user.id
    const follower = req.params.id  // samne wala jo req bhejra hai

    const request = await followmodel.findOne({
        follower: follower,
        followee: myId,
        status: "pending"
    })
    if (!request) {
        return res.status(404).json({
            message: "request not found"
        })
    }
    let status = "accepted"

    request.status = status
    await request.save()

    res.status(200).json({
        message: "your request is accepted",
        request
    })
}catch(error){
    next(error)
}

}
const Reject = async (req, res,next) => {
try{
    const myid = req.user.id
    const follower = req.params.id

    const request = await followmodel.findOne({
        follower,
        followee: myid
    })

    if (!request) {
        return next(new ErrorHandler(404,"request not found"))
    }

    const final = await followmodel.findByIdAndDelete(request._id)

    res.status(200).json({
        message: "reqest rejected"
        , final
    })

}
catch(error){
    next(error)
}
}

const UnfollowRoute = async (req,res,next) => {
try{

    const myid = req.user.id
    const followee = req.params.id

    console.log(myid, followee)
    const request = await followmodel.findOne({
        follower: myid,
        followee,
    })
    // console.log(request.follower,request.followee)

    if (!request) {

        return next(new ErrorHandler(404,"this follower not found"))
    }

    const final = await followmodel.findByIdAndDelete(request._id)

    res.status(200).json({
        message: "unfollowed " + followee
        , final
    })

}
catch(error){
    next(error)
}

}

const StoryRoute = async (req, res,next) => {
try{
    const userFound = await usermodel.find().lean()


    const user = await Promise.all(userFound.map(async (item) => {
        const isfollow = await followmodel.findOne({
            follower: req.user.id,
            followee: item._id
        })

        item.isfollowing = !!isfollow
        return item
    })
    )


    res.status(200).json({
        message: "story",
        user
    })
}catch(error){
    next(error)
}

}

const PersonProfile = async (req, res,next) => {
    try{
    const id = req.params.id

    const post = await postmodel.find({
        user: id
    })

    const user = await usermodel.findById(id)
    if (!user) {
        return next(new ErrorHandler(404,"user not found"))
    }
    const follower = await followmodel.countDocuments({
        followee: id
    })
    const following = await followmodel.countDocuments({
        follower: id
    })
    const postcount = await postmodel.countDocuments({
        user: id
    })

    const userfollow = await followmodel.findOne({
        follower: req.user.id,
        followee: id
    })



    res.status(200).json({
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            profile_image: user.profile_image,
            id: user._id,
            follower,
            following,
            postcount,
            post,
            userfollow: !!userfollow
        }
    })
}
catch(error){
    next(error)
}
}



module.exports = { FollowRoute, AcceptRoute, Reject, UnfollowRoute, StoryRoute, PersonProfile }