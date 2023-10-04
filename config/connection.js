const mongoose= require('mongoose')
const url="mongodb://localhost:27017/todoapp"
mongoose.connect(url,{
     useUnifiedTopology: true ,
    useNewUrlParser:true
}).then(()=>{
    console.log("connected");
});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'mongo db Failed'));
module.exports=mongoose;