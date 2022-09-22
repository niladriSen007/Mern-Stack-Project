import jwt from "jsonwebtoken";
import UserDetails from "../model/userDetails.js"
const UserValidationMiddleware =async(req,res,next)=>{
    
    // const c = await req.cookies;
    // const {cookies} = req;
    const a = req.cookies.jwtToken;
    console.log(a);
    
   try
   {
        // console.log(req.cookies)

        const token = a;
        
        const verifyJWT = jwt.verify(token,process.env.SECRET_KEY);
        console.log(verifyJWT)

        const rootUserData = await UserDetails.findOne({_id:verifyJWT._id,"tokens.token":token});

        if(!rootUserData){ throw new Error("No User Found") }

        req.token=token;
        req.rootUserData = rootUserData;
        req.userID = rootUserData._id;
        next();
   }
   catch(e)
   {
    res.status(401).send("Unauthorized Token Provided")
    console.log(e);
   }
}

export  {UserValidationMiddleware};