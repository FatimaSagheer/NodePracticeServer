const express = require('express');
const router=express.Router()
const formController=require('../controller/form')

// defining the routes 


router.post('/submitForm',formController.submitForm)
router.get('/getFormData',formController.getFormData)
router.get('/getFormDataById/:id',formController.getFormDataById)
router.post('/insertManyForm',formController.insertManyForm)
// insertManyForm

module.exports=router