const express = require('express');
const router=express.Router()
const signController=require('../controller/loginSystem')
const authenticationWithToken = require("../middleware/userMiddleware")
const roleBasedMiddleware = require("../middleware/rolebasedMiddleware")
const useraccess = require('../controller/authController')
//roleBasedMiddleware
// defining the routes 

//resetPassword
router.post('/signup',signController.signUpUser)
// router.post('/signin',signController.loginUser)
router.post('/signin',authenticationWithToken,roleBasedMiddleware(["user", "admin", "moderator", "guest"]),signController.loginUser)
router.post('/resetPassword',signController.resetPassword)



module.exports=router