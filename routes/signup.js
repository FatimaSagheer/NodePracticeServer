const express = require('express');
const router=express.Router()
const signController=require('../controller/loginSystem')
const authenticationWithToken = require("../middleware/userMiddleware")

// defining the routes 

//resetPassword
router.post('/signup',signController.signUpUser)
router.post('/signin',authenticationWithToken,signController.loginUser)
router.post('/resetPassword',signController.resetPassword)



module.exports=router