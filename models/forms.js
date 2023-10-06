const mongoose=require('mongoose');
const validator = require('validator');

const formSchema= new mongoose.Schema({
    email: {
        type:String,
        requireed:true,
        unique: true,
        validate: {
            validator: (value) => {
              // Use the isEmail method from the validator library
              return validator.isEmail(value);
            },
            message: 'Invalid email format',
          },
        
    },
    password: {
        type:String,
        requireed:true,
        validate: {
            validator: (value) => {
              // You can define your own password validation logic here
              return value.length >= 8; // Example: Password must be at least 8 characters long
            },
            message: 'Password must be at least 8 characters long',
          },
    }
});
const Form=mongoose.model("Form",formSchema);
module.exports=Form;