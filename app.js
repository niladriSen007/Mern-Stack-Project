import express from "express"
import dotenv from "dotenv"
import auth from "./router/auth.js"
import cookieParser from "cookie-parser"
dotenv.config({path:"./.env"})
import UserDetails from "./model/userDetails.js";
const PORT = process.env.PORT || 4000;
const app=express();

//Database connection using mongoDbAtlas
import("./database/connection.js")


// //middleWare 
app.use(express.json())
app.use(cookieParser())


//linking the auth.js file to app.js file
app.use(auth)




app.listen(PORT,()=>{
    console.log("Server is running")
})