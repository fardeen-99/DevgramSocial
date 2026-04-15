async function HandleError(err, req, res, next) {


    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Interal sernver error";
    res.status(err.statusCode).json({
        success:false,
        message:err.message,
        stack:err.stack
    })
}
module.exports = HandleError

