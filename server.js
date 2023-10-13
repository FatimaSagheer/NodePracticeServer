const express = require('express');
const bodyParser=require("body-parser")
//Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
const dotenv= require('dotenv')
const useApi=require('./routes/user')
const formApi=require('./routes/form')
const signApi=require('./routes/signup')
const mongoose=require('./config/connection')
const app = express();

dotenv.config()

const port = process.env.PORT || 8080;
app.use(bodyParser.json())

app.use(express.static('Public'));

app.use('/user',useApi)
app.use('/form',formApi)
app.use('/signUp',signApi)
app.listen(port,"localhost",(req,res)=>{
    console.log(`Listening on port ${port}`)
})