const statusCode = 
    {   OK:200,
        CREATED:201,
        ACCEPTED:202,
        BAD_REQUEST:400,
        UNAUTHORIZED:401,
        PAYMENT_REQUIRED:402,
        FORBIDDEN:403,
        NOT_FOUND:404,
        UNPROCEESSABLE_ENTITY:422,
        INTERNAL_SERVER_ERROR:500,
        BAD_GATEWAY:502
    };

module.exports = {
    statusCode
}