const express = require('express');
const router=express.Router()
const userController=require('../controller/user')

// defining the routes 

router.get('/getAllData',userController.getAllData)
router.get('/getDataById/:id',userController.getDataById)
router.post('/createData',userController.createData)
router.post('/deleteData/:id',userController.deleteData)
router.post('/updateData/:id',userController.updateData)
module.exports=router