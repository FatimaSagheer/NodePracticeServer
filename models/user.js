const mongoose=require('mongoose');
const todoSchema= new mongoose.Schema({
    name: {
        type:String,
        requireed:true
    },
    email: {
        type:String,
        requireed:true
    },
    password: {
        type:String,
        requireed:true
    }
});
const Todo=mongoose.model("User",todoSchema);
module.exports=Todo;