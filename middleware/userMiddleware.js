const jwt= require("jsonwebtoken");

 const authenticationWithToken=(req,res,next)=>{
try {
    req.headers.authorization && req.headers.authorization.startsWith("Bearer");
    const token=req.headers.authorization.split(' ')[1];
    // console.log(process.env.JWT_SECRET)
    if(!token){
        return res.status(401).json({message:"Access Denied"})
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return res.status(403).json({message:'invalid token'})
        } 
    req.user=user
    next();
})
} catch (error) {
    res.status(500).json({message:"internal server error"})
}
   
}
module.exports=authenticationWithToken