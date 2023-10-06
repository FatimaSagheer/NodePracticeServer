const Todo=require('../models/user')
const createData = async(req,res)=>{
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
const getAllData=async(req,res)=>{
try{
    const getTodos=await Todo.find().then((getTodos)=>{
        res.status(201).json(getTodos)
    })

}
catch(error){
    res.status(500).json({error:error.message})
}
}

const getDataById=async(req,res)=>{
    try{
        const id = req.params.id; 
        const getTodo = await Todo.findById(id);
        if (!getTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
      
            else{
                res.status(201).json(getTodo)
            }
            
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
    }

const deleteData=async(req,res)=>{
        try{
            const id = req.params.id; 
            const getTodo = await Todo.findByIdAndDelete(id);
            if (!getTodo) {
                return res.status(404).json({ message: 'Todo not found' });
            }
          
                else{
                    res.json({message:'Deleted Successfully'})
                }
                
        }
        catch(error){
            res.status(500).json({error:error.message})
        }
        }
        const updateData=async(req,res)=>{
            try{
                const {name,email,password} = req.body; 
                const getTodo = await Todo.findByIdAndUpdate(req.params.id,
                    {name,email,password},{new:true});
                if (!getTodo) {
                    return res.status(404).json({ message: 'Todo not found' });
                }
                res.json(getTodo)
              
                    // else{
                    //     res.json({message:'Updated Successfully'})
                    // }
                    
            }
            catch(error){
                res.status(500).json({error:error.message})
            }
            }
module.exports={
    createData,getAllData,getDataById,deleteData,updateData
}