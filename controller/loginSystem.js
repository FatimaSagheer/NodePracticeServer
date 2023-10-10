const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
const abc = require("../models/loginSystem")

const crypto = require('crypto');
const nodemailer = require('nodemailer');

// sign up user 
const signUpUser=async(req,res)=>{
    try{
     const { name, email,password}= req.body
   const hashPassword = await bcrypt.hash(password,10)
   const loginuser= new abc({
    name,email,password:hashPassword})
    await loginuser.save()
    res.status(201).json({message:'user created '})
    }   
   
    catch(error){
res.status(500).json({error:error.mesage})
    }
}

// login 
const loginUser=async(req,res)=>{
    try{
     const {email,password}= req.body;
     const user=await abc.findOne({email});
     if(user && await bcrypt.compare(password,user.password)){
        const token=jwt.sign({userId:user.id,email:user.email},"JSNXJNSNXJSJSNXJSJSNXJJSJSX",{ expiresIn: '1h' })
        console.log('hbcbhdbhcd')
        res.status(200).json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
     }  
    catch(error){
res.status(500).json({error:error.mesage})
    }
}

// RESET PASWORD 

// Generate a random OTP
function generateOTP() {
    console.log(crypto.randomBytes(3).toString('hex').toUpperCase())
    return crypto.randomBytes(3).toString('hex').toUpperCase();
  }
  


module.exports={signUpUser,loginUser}