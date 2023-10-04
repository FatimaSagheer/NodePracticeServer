const Todo=require('../models/user')
const createData = async()=>{
    try{
        // const {name,email,password}=req.body;
const todo=new Todo({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
})
await todo.save()
res.json(todo) 
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}
const getAllData=async()=>{
try{
    const getTodos=await Todo.find({})
res.json(getTodos)
}
catch(error){
    res.status(500).json({error:error.message})
}
}

module.exports={
    createData,getAllData
}