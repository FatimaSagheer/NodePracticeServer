const Form = require('../models/forms'); // Import the Mongoose model

const submitForm = async(req,res)=>{
    try{
        const { email, password } = req.body;
        const formData = new Form({
          email: email,
          password: password,
        });
await formData.save()
res.json(formData) 
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}
////////////  Insert Many   //////////
const insertManyForm = async(req,res)=>{
    try {
        const documentsToInsert = req.body;
        const insertedDocuments = await Form.insertMany(documentsToInsert);
        res.status(201).json(insertedDocuments);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const getFormData = async(req,res)=>{
    try{
        const getData=await Form.find().then((getData)=>{
            res.status(201).json(getData)
            console.log(getData)
        }) 
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const getFormDataById=async(req,res)=>{
    try{
        const id = req.params.id; 
        const getform = await Form.findById(id);
        if (!getform) {
            console.log(getform)
            return res.status(404).json({ message: 'Todo not found' });
        }
      
            else{
                res.status(201).json(getform)
            }
            
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
    }
module.exports = {
  submitForm,getFormData,getFormDataById,insertManyForm
};
