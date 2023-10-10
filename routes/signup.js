const express = require('express');
const router=express.Router()
const signController=require('../controller/loginSystem')

// defining the routes 

//loginUser
router.post('/signup',signController.signUpUser)
router.post('/signin',signController.loginUser)




module.exports=router