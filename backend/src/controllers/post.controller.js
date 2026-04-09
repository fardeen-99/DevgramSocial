const jwt = require('jsonwebtoken')
const ImageKit = require("@imagekit/nodejs")
const postModel = require("../models/post.model")
const likemodel = require("../models/like.model")
const followmodel = require("../models/follow.model")
const CommentModel = require("../models/comment.model")
const savemodel = require('../models/save.model')
const { toFile } = require("@imagekit/nodejs")
const ErrorHandler = require('../utils/Error.util')
const image = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

const PostRoute = async (req, res,next) => {
    try{

    const userpost = await image.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: req.body.caption,
        folder: "insta-clone-final"
    })

    const posts = await postModel.create({
        caption: req.body.caption,
        post_url: userpost.url,
        mediatype: userpost.fileType,
        user: req.user.id,
        mood: req.body.mood
    })

    const response = await postModel.findById(posts._id).populate("user", "-password").lean()

    const likecount = await likemodel.countDocuments({ post: posts._id })
    response.likecount = likecount



    const commentcount = await CommentModel.countDocuments({ post: posts._id })
    response.commentcount = commentcount

    const islike = await likemodel.findOne({ post: posts._id, user: req.user.id })
    response.islike = !!islike

    const isfollow = await followmodel.findOne({ follower: req.user.id, followee: posts.user })
    response.isfollow = !!isfollow

    const save = await savemodel.findOne({ post: posts._id, user: req.user.id })
    response.save = !!save



    console.log(userpost)


    res.status(200).json({
        message: "post created succesfully"
        , response
    })
    }
    catch(error){
        next(error)
    }

}

const GetPost = async (req, res,next) => {
try{

    const allpost = await postModel.find().populate("user", "-password").lean().sort({ createdAt: -1 })

    const final = await Promise.all(allpost.map(async (item) => {

        const response = await likemodel.findOne({
            post: item._id,
            user: req.user.id
        })

        item.islike = !!response

        const followres = await followmodel.findOne({
            follower: req.user.id,
            followee: item.user._id
        })

        item.isfollow = !!followres


        const save = await savemodel.findOne({

            post: item._id,
            user: req.user.id
        })

        item.save = !!save

        const likecount = await likemodel.countDocuments({
            post: item._id
        })

        item.likecount = likecount


        const commentcount = await CommentModel.countDocuments({
            post: item._id
        })
        item.commentcount = commentcount



        return item




    }))


    // console.log(final)
    res.status(200).json({
        message: "user all post",
        final
    })

}
catch(error){
    next(error)
}


}

const GetDetailPost = async (req, res,next) => {

try{
    const id = req.params.id

    const detailpost = await postModel.findById(id).populate("user", "-password").lean()

    const postUserId = detailpost._id.toString()
    // console.log(postUserId)
    // console.log(decoded.id)
    const verification = await id === postUserId



    if (!verification) {
        return next(new ErrorHandler(403,"forbidden the data"))
    }

    const likecount = await likemodel.countDocuments({
        post: id
    })
    detailpost.likecount = likecount


    const savecount = await savemodel.countDocuments({
        post: id
    })
    detailpost.savecount = savecount

    const commentcount = await CommentModel.countDocuments({
        post: id
    })
    detailpost.commentcount = commentcount

    const comment = await CommentModel.find({ post: id }).populate("user", "-password").lean()
    detailpost.comment = comment

    const isLikeDoc = await likemodel.findOne({
        post: id,
        user: req.user.id
    })
    detailpost.islike = !!isLikeDoc

    const isSaveDoc = await savemodel.findOne({
        post: id,
        user: req.user.id
    })
    detailpost.save = !!isSaveDoc


    console.log(detailpost)
    res.status(200).json({
        message: "your detail post data",
        detailpost
    })

}
catch(error){
    next(error)
}


}

const LikePost = async (req, res,next) => {
    try{
    const user = req.user.id
    const post = req.params.id

    if (!post) {
        return next(new ErrorHandler(404,"post not found"))
    }

    const islike = await likemodel.findOne({
        user,
        post
    })

    if (islike) {
        return next(new ErrorHandler(409, "you already like this post"))
    }

    const like = await likemodel.create({
        user,
        post
    })

    res.status(200).json({
        message: "like done successfully",
        like
    })
    }
    catch(error){
        next(error)
    }

}


const Comment = async (req, res,next) => {

    try{
    const { comment } = req.body

    const user = req.user.id
    const post = req.params.id

    console.log(comment)

    if (!post) {
        return next(new ErrorHandler(404, "post not found"))
    }

    const Usercoment = await CommentModel.create({
        user, post, comment
    })

    res.status(201).json({
        message: "your comment is registered succesfully"
        , Usercoment
    })
    }catch(error){
        next(error)
    }

}

const unLikePost = async (req, res,next) => {
    try{
    const post = await likemodel.findOne({
        user: req.user.id,
        post: req.params.id
    })
    if (!post) {
        return next(new ErrorHandler(404,"post not found"))
    }

    const response = await likemodel.findByIdAndDelete(post._id)

    res.status(200).json({
        message: "post disliked"
    })
    }catch(error){
        next(error)
    }



}


const saver = async (req, res,next) => {
    try{
    const save = await savemodel.findOne({
        post: req.params.id
        , user: req.user.id
    })

    if (save) {
        return next(new ErrorHandler(409,"this post is already saved"))
    }

    const response = await savemodel.create({
        post: req.params.id
        , user: req.user.id
    })

    res.status(200).json({
        message: "post is saved",
        response
    })
}catch(error){
    next(error)
}
}
const unsaver = async (req, res,next) => {
    try{
    const save = await savemodel.findOne({
        post: req.params.id
        , user: req.user.id
    })

    if (!save) {
        return next(new ErrorHandler(404,"this post is not found for save"))
    }

    const response = await savemodel.findByIdAndDelete(save._id)

    res.status(200).json({
        message: "post is unsaved",
        response
    })
}
catch(error){
    next(error)
}
}


const deletePost = async (req, res,next) => {
    try{
    const id = req.params.id
    const post = await postModel.findById(id)
    if (!post) {
        return next(new ErrorHandler(404,"post not found"))
    }
    const response = await postModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "post deleted successfully",
        response
    })
    }catch(error){
        next(error)
    }
}

const GetPostByMood = async (req, res,next) => {
    try{
    const mood = req.query.mood
    const post = await postModel.find({ mood: mood }).populate("user", "-password").lean()

    const response = await Promise.all(post.map(async (item) => {
        const likecount = await likemodel.countDocuments({
            post: item._id
        })
        item.likecount = likecount
        const commentcount = await CommentModel.countDocuments({
            post: item._id
        })
        item.commentcount = commentcount
        const islike = await likemodel.findOne({
            post: item._id,
            user: req.user.id
        })
        item.islike = !!islike
        const isfollow = await followmodel.findOne({
            follower: req.user.id,
            followee: item.user._id
        })
        item.isfollow = !!isfollow
        const save = await savemodel.findOne({
            post: item._id,
            user: req.user.id
        })
        item.save = !!save
        return item
    }))
    res.status(200).json({
        message: "post by mood",
        response
    })
}catch(error){
    next(error)
}
}

module.exports = { PostRoute, GetPost, GetDetailPost, LikePost, Comment, unLikePost, saver, unsaver, deletePost, GetPostByMood }