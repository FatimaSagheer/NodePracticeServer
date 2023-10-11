const express = require('express');
const router=express.Router()
const userController=require('../controller/user')
const authenticationWithToken = require("../middleware/userMiddleware")


// defining the routes 

router.get('/getAllData',authenticationWithToken,userController.getAllData)
router.get('/getDataById/:id',authenticationWithToken,userController.getDataById)
router.post('/createData',userController.createData)
router.post('/deleteData/:id',userController.deleteData)
router.post('/updateData/:id',userController.updateData)
module.exports=router