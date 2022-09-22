import express from "express";
const router = express.Router();
import cookie from "cookie-parser"
import UserDetails from "../model/userDetails.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {UserValidationMiddleware} from "../middleware/UserValidationMiddleware.js"
//middleWare 


router.get("/",(req,res)=>{
    res.send("Hello from the server router")
})

router.post("/register",async(req,res)=>{


    let {name,email,phone,password,confirmPassword} = req.body;
    if(!name || !email || !phone || !password || !confirmPassword)
    {
        res.status(400).json({message:"Please fill the required details"})
    }
    try
    {
        const userExist = await UserDetails.findOne({email:email})
                if(userExist)
                {
                    console.log(userExist);
                    return res.status(422).json({message:"User alredy Exists"})
                }
                if(password !== confirmPassword)
                {
                    return res.status(422).json({message:"Password Mismatch"})
                }
               

               
                const userDetails =  new UserDetails({
                    name:name,
                    email:email,
                    phone:phone,
                    password:password,
                    confirmPassword:confirmPassword
                });

               
               

                  await userDetails.save();
                 res.status(200).json({message:"User submitted "})
    
    }
    catch(e)
    {
        res.status(500).json({message:e.message})
    }
})


router.post("/signin",async(req,res)=>{

    const {email,password} = req.body;
    if(!email || !password)
    {
        return res.status(400).json({message:"Invalid Login Credentials"})
    }
    try
    {
        
        const userExist = await UserDetails.findOne({email:email});
        if(!userExist)
        {
           return res.status(400).json({message:"User not exists"})
        }
    
        // const matchedPass = (userExist.password === password);
        const matchedPass = await bcrypt.compare(password,userExist.password);
        console.log(matchedPass)
        const token = await userExist.generateAuthenticationToken();
        console.log(token);
        //storing the token in cookie
        const storeToken = await res.cookie("jwtToken",token,{
            expires: new Date(Date.now()+3600000),
            httpOnly:true
        });
        

        matchedPass ? res.status(200).json({jwtToken:token}) : res.status(400).send("Invalid Password")
    }
    catch(e)
    {
        console.log(e);
    }
})

router.get("/about",UserValidationMiddleware,(req,res)=>{
    res.send(req.rootUserData);
})

router.get("/getData",UserValidationMiddleware,(req,res)=>{
    res.send(req.rootUserData)
})

router.post("/contact",UserValidationMiddleware,async(req,res)=>{
    try{
        const {name,email,phone,message} = req.body;

        if(!name || !email || !phone ||!message)
        {
            console.log("Error in Contact Form")
                res.status(400).json({error:"Error in Contact Form"})
        }
        const user = await UserDetails.findOne({_id:req.userID})
        if(user)
        {
            const userMessageSave = await user.addMessage(name,email,phone,message);
            const savedDetailsOfMessage = await user.save();

            res.status(201).json({message:"Message Sent successfully"})
        }
    }
    catch(e)
    {
        console.log(e)
    }
})

router.get("/signin",(req,res)=>{
    res.send("Hello from the signin")
})

router.get("/signup",(req,res)=>{
    res.send("Hello from the signup")
})


router.get("/logout",UserValidationMiddleware,(req,res)=>{
    res.clearCookie("jwtToken",{path:"/"})
    res.send("User Logged out");
})


export default router;