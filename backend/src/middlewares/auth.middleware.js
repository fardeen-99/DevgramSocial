const jwt = require("jsonwebtoken")
const redis = require("../config/Cache")
const IdentifyToken = async (req, res, next) => {

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "UnAuthorised Access"
        })
    }

    let IsBlacklist = false;
    try {
        IsBlacklist = await redis.get(token)
    } catch (error) {
        console.log("Redis error in auth middleware:", error.message);
    }

    if (IsBlacklist) {
        return res.status(401).json({
            message: "invalid Token"
        })
    }

    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({
            message: "invalid Token"
        })
    }

    req.user = decoded
    next()



}
module.exports = IdentifyToken