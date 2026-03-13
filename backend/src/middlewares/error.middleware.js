async function HandleError(err,req,res,next){

let response={
    message:err.message
}

if(process.env.STACK==="development"){
    response.stack=err.stack
}


return res.status(err.status).json(response)
// return res.status(err.status).json({
//     message:err.message
//     ,stack:err.stack
// })

}
module.exports=HandleError