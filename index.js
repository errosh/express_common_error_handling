const express = require("express");
const cors = require("cors");
const { ErrorHandler,handleError,handleSuccess } = require("./helper/error");
const { statusCode } =  require("./helper/http_statuscode");

const app = express();

const PORT = 3000;

console.log(statusCode.OK); 

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.use(cors());


app.get("/",(req,res,next)=>{
    throw new ErrorHandler(401,"Not found!")
})

app.get("/demo",(req,res,next)=>{
    handleSuccess(200,"User created sucessfully!",res);
})

app.use((err,req,res,next)=>{
    handleError(err,res);
})