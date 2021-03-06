class ErrorHandler extends Error {
    constructor(statusCode,message){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}


function handleError(err,res){
   const {statusCode,message} = err;

   res.status(statusCode).json({
       status:"error",
       statusCode,
       message
   })
}

function handleSuccess(statusCode,message,res){
    res.status(statusCode).json({
        status:"success",
        statusCode,
        message
    })
 }


module.exports = {
    ErrorHandler,
    handleError,
    handleSuccess
}


